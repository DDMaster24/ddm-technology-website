'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ALL_QUESTIONS,
  type AnswerValue,
  type Answers,
  CONSENT_LABEL,
  FILE_FIELDS,
  type FileFieldId,
  OTHER,
  type Question,
  QUESTION_BY_ID,
  SECTIONS,
  hasValue,
  isVisible,
  otherKey,
  pruneAnswers,
  valueIncludes,
} from '@/lib/intake/questions'
import { buildSubmissionSchema, isoDate, issuesToFieldErrors } from '@/lib/intake/validation'
import FileUpload, { type FileItem } from './FileUpload'
import styles from './form.module.css'

const STORAGE_KEY = 'ddm-start-form-v1'
type FilesState = Record<FileFieldId, FileItem[]>
type Errors = Record<string, string>

const emptyFiles = (): FilesState => ({ logo_files: [], photo_files: [] })

// ---------- localStorage helpers (never throw: private mode, quota, etc.) ----------

function saveAnswers(answers: Answers) {
  try {
    if (Object.keys(answers).length === 0) localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 1, answers, savedAt: Date.now() }))
  } catch {
    /* ignore */
  }
}

function loadAnswers(): Answers | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as { answers?: Record<string, unknown> }
    if (!parsed || typeof parsed.answers !== 'object' || !parsed.answers) return null
    const clean: Answers = {}
    for (const [k, v] of Object.entries(parsed.answers)) {
      const base = k.endsWith('_other') ? k.slice(0, -6) : k
      const q = QUESTION_BY_ID[base] ?? QUESTION_BY_ID[k]
      if (!q || q.type === 'file') continue
      if (typeof v === 'string' || (Array.isArray(v) && v.every((x) => typeof x === 'string'))) clean[k] = v as AnswerValue
    }
    return pruneAnswers(clean)
  } catch {
    return null
  }
}

function clearSaved() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

/** Keeps only visible answers and Other text for ticked Other options (state stays tidy). */
function normalise(answers: Answers): Answers {
  return pruneAnswers(answers)
}

// ---------- Validation (same zod schema the server uses) ----------

function validateAll(answers: Answers, files: FilesState, consent: boolean): Errors {
  const payload = {
    answers: pruneAnswers(answers),
    files: FILE_FIELDS.flatMap((f) => files[f].filter((i) => i.status === 'done' && i.result).map((i) => i.result!)),
    consent,
    startedAt: 0,
  }
  const res = buildSubmissionSchema({ minDate: isoDate(new Date()) }).safeParse(payload)
  const errors: Errors = res.success ? {} : issuesToFieldErrors(res.error.issues)
  for (const f of FILE_FIELDS) {
    if (isVisible(QUESTION_BY_ID[f], answers) && files[f].some((i) => i.status === 'error') && !errors[f]) {
      errors[f] = 'One or more files did not upload. Press Retry or remove them.'
    }
  }
  return errors
}

const FIELD_ORDER: string[] = [
  ...ALL_QUESTIONS.flatMap((q) => (q.other ? [q.id, otherKey(q.id)] : [q.id])),
  'consent',
]

// ---------- Layout helpers (display only: they never change answers or rules) ----------

/** A question with the show/hide follow-ups that depend on it, in questions.ts order. */
interface QNode {
  q: Question
  children: QNode[]
}

function buildTree(questions: Question[]): QNode[] {
  const ids = new Set(questions.map((q) => q.id))
  const kids = new Map<string, Question[]>()
  const roots: Question[] = []
  for (const q of questions) {
    const parent = q.showIf?.id
    if (parent && ids.has(parent)) kids.set(parent, [...(kids.get(parent) ?? []), q])
    else roots.push(q)
  }
  const make = (q: Question): QNode => ({ q, children: (kids.get(q.id) ?? []).map(make) })
  return roots.map(make)
}

const SECTION_TREES: QNode[][] = SECTIONS.map((s) => buildTree(s.questions))

const optionsOf = (q: Question): string[] => [...(q.options ?? []), ...(q.other ? [OTHER] : [])]
const longestOption = (opts: string[]) => opts.reduce((n, o) => Math.max(n, o.length), 0)

/**
 * Questions that take the full row of the grid: long answers, uploads, long
 * or big choice lists, and any question that opens follow-ups (so a follow-up
 * always appears right under it without moving its neighbours).
 */
function isWide(q: Question, hasFollowUps: boolean): boolean {
  if (hasFollowUps || q.type === 'long' || q.type === 'file') return true
  if (q.type === 'choice' || q.type === 'checkboxes') {
    const opts = optionsOf(q)
    return opts.length > 4 || longestOption(opts) > 24
  }
  return false
}

/** Minimum tile width and maximum tiles per row, from the option labels. */
function tileClasses(opts: string[]): string {
  const longest = longestOption(opts)
  const min =
    longest <= 12 ? styles.tileMinS : longest <= 24 ? styles.tileMinM : longest <= 34 ? styles.tileMinL : styles.tileMinXL
  // Four short options: 2 × 2, or one row of 4 when the panel is wide enough (never 3 + 1).
  const four = opts.length === 4 && longest <= 24 ? styles.tilesFour : ''
  return `${min} ${longest > 34 ? styles.tileCap2 : styles.tileCap4} ${four}`
}

const sectionDomId = (id: string) => `section-${id}`

function focusField(key: string) {
  const el =
    (document.getElementById(`q-${key}`) as HTMLElement | null) ??
    (document.getElementById(`q-${key}-0`) as HTMLElement | null)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const target = (el.closest('[data-q]') as HTMLElement | null) ?? el
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' })
  el.focus({ preventScroll: true })
}

// ---------- Component ----------

export default function IntakeForm() {
  const [answers, setAnswers] = useState<Answers>({})
  const [files, setFiles] = useState<FilesState>(emptyFiles)
  const [consent, setConsent] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [attempted, setAttempted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [restored, setRestored] = useState(false)
  const startedAt = useRef(0)
  const thanksRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    startedAt.current = Date.now()
    const saved = loadAnswers()
    if (saved && Object.keys(saved).length) {
      setAnswers(saved)
      setRestored(true)
    }
  }, [])

  useEffect(() => {
    if (status === 'success') {
      window.scrollTo({ top: 0 })
      thanksRef.current?.focus()
    }
  }, [status])

  const setFieldItems = useCallback((field: FileFieldId, updater: (items: FileItem[]) => FileItem[]) => {
    setFiles((prev) => ({ ...prev, [field]: updater(prev[field]) }))
  }, [])

  const applyAnswers = (next: Answers) => {
    const tidy = normalise(next)
    setAnswers(tidy)
    saveAnswers(tidy)

    // Clear uploads for upload questions that just became hidden.
    let nextFiles = files
    for (const f of FILE_FIELDS) {
      if (!isVisible(QUESTION_BY_ID[f], tidy) && files[f].length) {
        files[f].forEach((i) => i.preview && URL.revokeObjectURL(i.preview))
        nextFiles = { ...nextFiles, [f]: [] }
      }
    }
    if (nextFiles !== files) setFiles(nextFiles)

    if (attempted) setErrors(validateAll(tidy, nextFiles, consent))
  }

  const setValue = (id: string, value: AnswerValue) => {
    const next = { ...answers }
    if (hasValue(value)) next[id] = value
    else delete next[id]
    applyAnswers(next)
    if (!attempted && errors[id]) {
      setErrors((e) => {
        const { [id]: _removed, ...rest } = e
        void _removed
        return rest
      })
    }
  }

  // Re-check file errors once uploads change after a failed submit.
  useEffect(() => {
    if (attempted) setErrors(validateAll(answers, files, consent))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

  const validateOnBlur = (q: Question) => {
    const v = answers[q.id]
    if (!hasValue(v) && !attempted) return
    const all = validateAll(answers, files, consent)
    setErrors((e) => {
      const copy = { ...e }
      if (all[q.id]) copy[q.id] = all[q.id]
      else delete copy[q.id]
      return copy
    })
  }

  const uploading = FILE_FIELDS.some((f) => files[f].some((i) => i.status === 'queued' || i.status === 'uploading'))

  const sectionStarted = useMemo(
    () =>
      SECTIONS.map((s) =>
        s.questions.some((q) =>
          isVisible(q, answers) &&
          (q.type === 'file'
            ? files[q.id as FileFieldId].some((i) => i.status === 'done')
            : hasValue(answers[q.id])),
        ),
      ),
    [answers, files],
  )
  const sectionsStarted = sectionStarted.filter(Boolean).length

  // Desktop sidebar: highlight the section currently in view (display only).
  const [currentSection, setCurrentSection] = useState(0)
  useEffect(() => {
    if (status === 'success') return
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.35
      let idx = 0
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(sectionDomId(s.id))
        if (el && el.getBoundingClientRect().top <= line) idx = i
      })
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      setCurrentSection(atBottom ? SECTIONS.length - 1 : idx)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [status])

  const jumpToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(sectionDomId(id))
    if (!el) return
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth', block: 'start' })
    document.getElementById(`sec-${id}`)?.focus({ preventScroll: true })
  }

  const focusFirstError = (errs: Errors) => {
    const key = FIELD_ORDER.find((k) => errs[k]) ?? Object.keys(errs)[0]
    if (key) requestAnimationFrame(() => focusField(key))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (uploading || status === 'submitting') return
    setAttempted(true)
    const errs = validateAll(answers, files, consent)
    setErrors(errs)
    if (Object.keys(errs).length) {
      setFormError('Please check the highlighted questions above.')
      focusFirstError(errs)
      return
    }

    setStatus('submitting')
    setFormError(null)
    try {
      const res = await fetch('/api/intake/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers: pruneAnswers(answers),
          files: FILE_FIELDS.flatMap((f) => files[f].filter((i) => i.status === 'done' && i.result).map((i) => i.result!)),
          consent,
          startedAt: startedAt.current,
          company_website: honeypot,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        message?: string
        fieldErrors?: Errors
      }
      if (res.ok && data.ok) {
        clearSaved()
        FILE_FIELDS.forEach((f) => files[f].forEach((i) => i.preview && URL.revokeObjectURL(i.preview)))
        setStatus('success')
        return
      }
      if (data.fieldErrors && Object.keys(data.fieldErrors).length) {
        setErrors(data.fieldErrors)
        focusFirstError(data.fieldErrors)
      }
      setFormError(
        data.message ??
          'Sorry, your answers could not be sent. Please try again. Everything you typed is still here.',
      )
    } catch {
      setFormError(
        "We couldn't reach our server. Please check your internet connection and try again. Everything you typed is still here.",
      )
    }
    setStatus('idle')
  }

  const startOver = () => {
    if (!window.confirm('Clear all your answers and start over?')) return
    FILE_FIELDS.forEach((f) => files[f].forEach((i) => i.preview && URL.revokeObjectURL(i.preview)))
    setAnswers({})
    setFiles(emptyFiles())
    setErrors({})
    setAttempted(false)
    setFormError(null)
    setRestored(false)
    clearSaved()
  }

  if (status === 'success') {
    return (
      <div className={`${styles.page} ${styles.pageThanks}`} data-start-form>
        <section className={`${styles.card} ${styles.thanks}`} aria-labelledby="thanks-title">
          <div className={styles.thanksIcon} aria-hidden="true">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" focusable="false">
              <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 id="thanks-title" ref={thanksRef} tabIndex={-1}>
            Thank you! Darius will be in touch shortly.
          </h1>
          <p>
            Questions in the meantime: WhatsApp{' '}
            <a href="https://wa.me/27671288247" target="_blank" rel="noopener noreferrer">
              067 128 8247
            </a>{' '}
            or <a href="mailto:darius@ddmtech.co.za">darius@ddmtech.co.za</a>
          </p>
        </section>
      </div>
    )
  }

  const errorId = (key: string) => `q-${key}-error`
  const errorText = (k: string) =>
    errors[k] ? (
      <p id={errorId(k)} className={styles.error}>
        {errors[k]}
      </p>
    ) : null

  const renderBody = (q: Question): React.ReactNode => {
    const v = answers[q.id]
    const err = errors[q.id]
    const helpId = q.help ? `q-${q.id}-help` : undefined
    const describedBy = [helpId, err ? errorId(q.id) : null].filter(Boolean).join(' ') || undefined
    const required = q.required ? (
      <span className={styles.required} aria-hidden="true">
        Required
      </span>
    ) : null
    const help = q.help ? (
      <p id={helpId} className={styles.help}>
        {q.help}
      </p>
    ) : null

    let body: React.ReactNode
    if (q.type === 'choice' || q.type === 'checkboxes') {
      const opts = [...(q.options ?? []), ...(q.other ? [OTHER] : [])]
      const multi = q.type === 'checkboxes'
      const ticked = (opt: string) => valueIncludes(v, opt)
      const toggle = (opt: string, checked: boolean) => {
        if (!multi) return setValue(q.id, opt)
        const cur = Array.isArray(v) ? v : []
        let next: string[]
        if (checked) {
          next =
            q.exclusiveOption && opt === q.exclusiveOption
              ? [opt]
              : [...cur.filter((x) => x !== q.exclusiveOption), opt]
        } else next = cur.filter((x) => x !== opt)
        setValue(q.id, opts.filter((o) => next.includes(o)))
      }
      const oKey = otherKey(q.id)
      const oVal = answers[oKey]
      body = (
        <fieldset className={styles.fieldset} aria-describedby={describedBy}>
          <legend className={styles.legend}>
            {q.label}
            {required}
          </legend>
          {help}
          <div className={`${styles.options} ${tileClasses(opts)}`}>
            {opts.map((opt, i) => (
              <div key={opt} style={{ display: 'contents' }}>
                <label className={`${styles.tile} ${ticked(opt) ? styles.tileSelected : ''}`}>
                  <input
                    id={`q-${q.id}-${i}`}
                    type={multi ? 'checkbox' : 'radio'}
                    name={q.id}
                    value={opt}
                    checked={ticked(opt)}
                    aria-invalid={err ? true : undefined}
                    onChange={(e) => toggle(opt, e.target.checked)}
                  />
                  <span>{opt}</span>
                </label>
                {opt === OTHER && ticked(OTHER) && (
                  <div className={`${styles.otherBox} ${styles.reveal}`} data-q={oKey}>
                    <div className={styles.revealInner}>
                      <label htmlFor={`q-${oKey}`} className={styles.otherLabel}>
                        Please tell us what &quot;Other&quot; is
                      </label>
                      <input
                        id={`q-${oKey}`}
                        className={`${styles.input} ${errors[oKey] ? styles.invalid : ''}`}
                        type="text"
                        value={typeof oVal === 'string' ? oVal : ''}
                        maxLength={300}
                        aria-required="true"
                        aria-invalid={errors[oKey] ? true : undefined}
                        aria-describedby={errors[oKey] ? errorId(oKey) : undefined}
                        onChange={(e) => setValue(oKey, e.target.value)}
                      />
                      {errorText(oKey)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {!multi && hasValue(v) && !q.required && (
            <button type="button" className={styles.clear} onClick={() => setValue(q.id, '')}>
              Clear answer
            </button>
          )}
          {errorText(q.id)}
        </fieldset>
      )
    } else if (q.type === 'file') {
      body = (
        <div role="group" aria-labelledby={`q-${q.id}-label`}>
          <label id={`q-${q.id}-label`} htmlFor={`q-${q.id}`} className={styles.label}>
            {q.label}
          </label>
          {help}
          <FileUpload
            question={q}
            items={files[q.id as FileFieldId]}
            setItems={setFieldItems}
            error={err}
            errorId={errorId(q.id)}
          />
          {errorText(q.id)}
        </div>
      )
    } else {
      const id = `q-${q.id}`
      const common = {
        id,
        name: q.id,
        value: typeof v === 'string' ? v : '',
        placeholder: q.placeholder,
        autoComplete: q.autoComplete ?? 'off',
        'aria-required': q.required ? true : undefined,
        'aria-invalid': err ? true : undefined,
        'aria-describedby': describedBy,
        onBlur: () => validateOnBlur(q),
      }
      body = (
        <>
          <label htmlFor={id} className={styles.label}>
            {q.label}
            {required}
          </label>
          {help}
          {q.type === 'long' ? (
            <textarea
              {...common}
              rows={4}
              maxLength={5000}
              className={`${styles.textarea} ${err ? styles.invalid : ''}`}
              onChange={(e) => setValue(q.id, e.target.value)}
            />
          ) : (
            <input
              {...common}
              type={
                q.type === 'email' ? 'email' : q.type === 'tel' ? 'tel' : q.type === 'url' ? 'url' : q.type === 'date' ? 'date' : 'text'
              }
              inputMode={q.type === 'email' ? 'email' : q.type === 'tel' ? 'tel' : q.type === 'url' ? 'url' : undefined}
              min={q.type === 'date' ? isoDate(new Date()) : undefined}
              maxLength={q.type === 'date' ? undefined : 300}
              className={`${styles.input} ${err ? styles.invalid : ''}`}
              onChange={(e) => setValue(q.id, e.target.value)}
            />
          )}
          {errorText(q.id)}
        </>
      )
    }

    return body
  }

  /**
   * Each question gets its own bordered panel. A question that opens
   * follow-ups is one panel holding the question and, right under it, its
   * visible follow-ups (each in a nested panel), so they stay grouped.
   */
  const renderNode = (node: QNode, depth: number): React.ReactNode => {
    const { q } = node
    const hasFollowUps = node.children.length > 0
    const visibleFollowUps = node.children.filter((c) => isVisible(c.q, answers))
    const span = isWide(q, hasFollowUps) ? styles.wide : ''
    const hasError = Boolean(errors[q.id] || (q.other && errors[otherKey(q.id)]))
    const panel = [styles.panel, depth > 0 ? styles.panelNested : '', hasError ? styles.panelError : '']
      .filter(Boolean)
      .join(' ')

    const item = hasFollowUps ? (
      <div className={`${panel} ${styles.group}`}>
        <div className={styles.question} data-q={q.id}>
          {renderBody(q)}
        </div>
        {visibleFollowUps.length > 0 && (
          <div className={styles.followUps}>{visibleFollowUps.map((c) => renderNode(c, depth + 1))}</div>
        )}
      </div>
    ) : (
      <div className={`${panel} ${styles.question}`} data-q={q.id}>
        {renderBody(q)}
      </div>
    )

    if (depth === 0) {
      return (
        <div key={q.id} className={`${styles.cell} ${span}`}>
          {item}
        </div>
      )
    }
    return (
      <div key={q.id} className={`${styles.reveal} ${span}`}>
        <div className={styles.revealInner}>{item}</div>
      </div>
    )
  }

  return (
    <div className={`${styles.page} ${styles.pageForm}`} data-start-form>
      <div className={styles.sidebar}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Let&apos;s build your website</h1>
          <p className={styles.lead}>
            Thank you for choosing DDM Technology. This takes about 10 minutes. If you&apos;re not sure about an
            answer, skip it and we&apos;ll talk it through.
          </p>
        </div>

        <div className={styles.sidePanel}>
          <nav className={styles.sectionNav} aria-label="Form sections">
            <ol className={styles.navList}>
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${sectionDomId(s.id)}`}
                    className={`${styles.navLink} ${currentSection === i ? styles.navCurrent : ''}`}
                    aria-current={currentSection === i ? 'true' : undefined}
                    onClick={(e) => jumpToSection(e, s.id)}
                  >
                    <span
                      className={`${styles.navNum} ${sectionStarted[i] ? styles.navNumStarted : ''}`}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <span className={styles.navName}>{s.title}</span>
                    {sectionStarted[i] && <span className={styles.srOnly}> (started)</span>}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.progressBlock}>
            <p className={styles.progressText} aria-hidden="true">
              <span>Progress</span>
              <span>
                {sectionsStarted} of {SECTIONS.length} sections started
              </span>
            </p>
            <div
              className={styles.progress}
              role="progressbar"
              aria-label="Sections started"
              aria-valuemin={0}
              aria-valuemax={SECTIONS.length}
              aria-valuenow={sectionsStarted}
              aria-valuetext={`${sectionsStarted} of ${SECTIONS.length} sections started`}
            >
              <div className={styles.progressFill} style={{ width: `${(sectionsStarted / SECTIONS.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      <form className={styles.form} noValidate onSubmit={onSubmit}>
        {restored && (
          <div className={styles.notice} role="status">
            <span>We&apos;ve restored the answers you typed earlier. Files need to be added again.</span>
            <button type="button" className={styles.smallButton} onClick={startOver}>
              Start over
            </button>
          </div>
        )}

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="company_website">Leave this field empty</label>
          <input
            id="company_website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {SECTIONS.map((s, i) => (
          <section
            key={s.id}
            id={sectionDomId(s.id)}
            className={styles.card}
            aria-labelledby={`sec-${s.id}`}
          >
            <div className={styles.cardHeader}>
              <span className={styles.step}>
                {i + 1} of {SECTIONS.length}
              </span>
              <h2 id={`sec-${s.id}`} className={styles.cardTitle} tabIndex={-1}>
                {s.title}
              </h2>
            </div>
            <div className={styles.questions}>
              {SECTION_TREES[i].filter((n) => isVisible(n.q, answers)).map((n) => renderNode(n, 0))}
            </div>
          </section>
        ))}

        <section className={`${styles.card} ${styles.submitCard}`} aria-label="Send your answers">
          <div data-q="consent">
            <label
              className={`${styles.consent} ${consent ? styles.consentChecked : ''} ${errors.consent ? styles.consentError : ''}`}
              htmlFor="q-consent"
            >
              <input
                id="q-consent"
                type="checkbox"
                checked={consent}
                aria-required="true"
                aria-invalid={errors.consent ? true : undefined}
                aria-describedby={errors.consent ? errorId('consent') : undefined}
                onChange={(e) => {
                  setConsent(e.target.checked)
                  if (attempted) setErrors(validateAll(answers, files, e.target.checked))
                }}
              />
              <span>
                {CONSENT_LABEL}{' '}
                <span className={styles.required} aria-hidden="true">
                  Required
                </span>
              </span>
            </label>
            {errorText('consent')}
          </div>

          <button type="submit" className={styles.submit} disabled={uploading || status === 'submitting'}>
            {uploading ? 'Waiting for uploads to finish…' : status === 'submitting' ? 'Sending…' : 'Send my answers'}
          </button>

          <div aria-live="assertive">
            {formError && (
              <p className={styles.formError} role="alert">
                {formError}
              </p>
            )}
          </div>
        </section>
      </form>
    </div>
  )
}
