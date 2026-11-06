import { z } from 'zod'
import {
  ALL_QUESTIONS,
  type Answers,
  FILE_CONTENT_TYPES,
  FILE_FIELDS,
  type FileFieldId,
  LONG_MAX,
  MAX_FILE_BYTES,
  OTHER,
  QUESTION_BY_ID,
  SHORT_MAX,
  extensionOf,
  hasValue,
  isVisible,
  normaliseUrl,
  otherKey,
  valueIncludes,
} from './questions'

const SA_PHONE = /^(?:\+27|0027|27|0)[1-9]\d{8}$/
const INTL_PHONE = /^\+[1-9]\d{7,14}$/

export function isValidPhone(input: string): boolean {
  const compact = input.replace(/[\s\-().]/g, '')
  return SA_PHONE.test(compact) || INTL_PHONE.test(compact)
}

export function isValidWebsite(input: string): boolean {
  try {
    const u = new URL(normaliseUrl(input))
    return (u.protocol === 'http:' || u.protocol === 'https:') && /\.[a-z]{2,}$/i.test(u.hostname)
  } catch {
    return false
  }
}

const emailSchema = z.string().trim().email()

/** YYYY-MM-DD for "today" in the given time zone (defaults to the browser's). */
export function isoDate(date: Date, timeZone?: string): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
  return parts // en-CA formats as YYYY-MM-DD
}

function safeDecode(s: string): string {
  try {
    return decodeURIComponent(s)
  } catch {
    return ''
  }
}

const BLOB_HOST = /^[a-z0-9-]+\.public\.blob\.vercel-storage\.com$/i

export const uploadedFileSchema = z.object({
  field: z.enum(FILE_FIELDS as [FileFieldId, ...FileFieldId[]]),
  url: z.string().url().max(1000),
  pathname: z.string().max(500),
  name: z.string().min(1).max(255),
  size: z.number().int().nonnegative().max(MAX_FILE_BYTES),
  contentType: z.string().max(100),
})

export const answerValueSchema = z.union([
  z.string().max(LONG_MAX),
  z.array(z.string().max(SHORT_MAX)).max(30),
])

interface ValidateOptions {
  /** Earliest allowed deadline date, YYYY-MM-DD */
  minDate: string
}

export function buildSubmissionSchema({ minDate }: ValidateOptions) {
  return z
    .object({
      answers: z.record(z.string(), answerValueSchema),
      files: z.array(uploadedFileSchema).max(40),
      // Checked in superRefine so that every other error is reported too
      // (zod skips refinements when the base object fails).
      consent: z.boolean(),
      startedAt: z.number(),
      company_website: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      const answers: Answers = data.answers
      const err = (path: (string | number)[], message: string) =>
        ctx.addIssue({ code: z.ZodIssueCode.custom, path, message })

      if (data.consent !== true) err(['consent'], 'Please tick this box so we can store your answers.')

      // 1. No unknown keys; nothing answered for hidden questions.
      for (const key of Object.keys(answers)) {
        const isOther = key.endsWith('_other') && QUESTION_BY_ID[key.slice(0, -6)]?.other
        const q = isOther ? QUESTION_BY_ID[key.slice(0, -6)] : QUESTION_BY_ID[key]
        if (!q || q.type === 'file') {
          err(['answers', key], 'Unknown question.')
          continue
        }
        if (!isVisible(q, answers)) {
          err(['answers', key], 'This question is hidden and should not be answered.')
        } else if (isOther && !valueIncludes(answers[q.id], OTHER)) {
          err(['answers', key], '"Other" was not picked, so this should be empty.')
        }
      }

      // 2. Per-question checks for visible questions.
      for (const q of ALL_QUESTIONS) {
        if (q.type === 'file' || !isVisible(q, answers)) continue
        const v = answers[q.id]
        const path = ['answers', q.id]

        if (!hasValue(v)) {
          if (q.required) err(path, 'Please answer this question.')
          continue
        }

        switch (q.type) {
          case 'short':
          case 'email':
          case 'tel':
          case 'url':
          case 'date':
          case 'long': {
            if (typeof v !== 'string') {
              err(path, 'Invalid answer.')
              break
            }
            const max = q.type === 'long' ? LONG_MAX : SHORT_MAX
            if (v.length > max) err(path, `Please keep this under ${max} characters.`)
            if (q.type === 'email' && !emailSchema.safeParse(v).success)
              err(path, 'Please enter a valid email address, like name@example.co.za.')
            if (q.type === 'tel' && !isValidPhone(v))
              err(path, 'Please enter a valid cell number, like 082 123 4567 or +27 82 123 4567.')
            if (q.type === 'url' && !isValidWebsite(v))
              err(path, 'Please enter a valid website address, like yourbusiness.co.za.')
            if (q.type === 'date') {
              if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) err(path, 'Please pick a date.')
              else if (v < minDate) err(path, 'Please pick today or a later date.')
            }
            break
          }
          case 'choice': {
            const opts = [...(q.options ?? []), ...(q.other ? [OTHER] : [])]
            if (typeof v !== 'string' || !opts.includes(v)) err(path, 'Please pick one of the options.')
            break
          }
          case 'checkboxes': {
            const opts = [...(q.options ?? []), ...(q.other ? [OTHER] : [])]
            if (!Array.isArray(v) || v.some((x) => !opts.includes(x)) || new Set(v).size !== v.length) {
              err(path, 'Please pick from the options.')
            } else if (q.exclusiveOption && v.includes(q.exclusiveOption) && v.length > 1) {
              err(path, `"${q.exclusiveOption}" can't be ticked together with other options.`)
            }
            break
          }
        }

        if (q.other && valueIncludes(v, OTHER)) {
          const o = answers[otherKey(q.id)]
          if (typeof o !== 'string' || !o.trim()) err(['answers', otherKey(q.id)], 'Please tell us what "Other" is.')
          else if (o.length > SHORT_MAX) err(['answers', otherKey(q.id)], `Please keep this under ${SHORT_MAX} characters.`)
        }
      }

      // 3. Files: only for visible upload questions, within limits.
      const counts: Record<string, number> = {}
      data.files.forEach((f, i) => {
        const q = QUESTION_BY_ID[f.field]
        const rules = q?.file
        if (!q || !rules) return err(['files', i], 'Unknown upload field.')
        if (!isVisible(q, answers)) return err(['files', f.field], 'Files were sent for a hidden question.')
        counts[f.field] = (counts[f.field] ?? 0) + 1
        const ext = extensionOf(f.name)
        if (!rules.extensions.includes(ext)) err(['files', f.field], `"${f.name}" is not an allowed file type.`)
        if (f.size > rules.maxBytes) err(['files', f.field], `"${f.name}" is larger than 25 MB.`)
        if (!Object.values(FILE_CONTENT_TYPES).includes(f.contentType))
          err(['files', f.field], `"${f.name}" has an unexpected content type.`)
        let u: URL | null = null
        try {
          u = new URL(f.url)
        } catch {
          /* handled below */
        }
        if (
          !u ||
          u.protocol !== 'https:' ||
          !BLOB_HOST.test(u.hostname) ||
          !f.pathname.startsWith('intake/') ||
          safeDecode(u.pathname) !== `/${f.pathname}`
        ) {
          err(['files', f.field], `"${f.name}" was not uploaded correctly. Please remove it and try again.`)
        }
      })
      for (const [field, n] of Object.entries(counts)) {
        const max = QUESTION_BY_ID[field].file!.maxFiles
        if (n > max) err(['files', field], `You can upload up to ${max} files here.`)
      }
    })
}

export type SubmissionPayload = z.infer<ReturnType<typeof buildSubmissionSchema>>

/** Turns zod issues into { fieldKey: message } (first message per field). */
export function issuesToFieldErrors(issues: z.ZodIssue[]): Record<string, string> {
  const out: Record<string, string> = {}
  for (const issue of issues) {
    const [root, key] = issue.path
    let field: string
    if (root === 'answers' && typeof key === 'string') field = key
    else if (root === 'files' && typeof key === 'string') field = key
    else if (root === 'files') field = 'files'
    else field = String(root ?? 'form')
    if (!out[field]) out[field] = issue.message
  }
  return out
}
