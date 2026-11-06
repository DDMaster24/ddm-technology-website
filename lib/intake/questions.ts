// Single source of truth for the /start client intake form.
// Used by the form UI, the zod validation (client + server), the
// notification email and the admin pages.

export type QuestionType =
  | 'short'
  | 'long'
  | 'email'
  | 'tel'
  | 'url'
  | 'date'
  | 'choice'
  | 'checkboxes'
  | 'file'

export type FileFieldId = 'logo_files' | 'photo_files'

export interface ShowIf {
  /** Parent question id */
  id: string
  /** Shown when the parent's value (or one of its ticked values) is in this list */
  anyOf: string[]
}

export interface FileRules {
  maxFiles: number
  maxBytes: number
  /** Allowed lower-case extensions, without the dot */
  extensions: string[]
}

export interface Question {
  id: string
  label: string
  type: QuestionType
  required?: boolean
  help?: string
  placeholder?: string
  options?: string[]
  /** Adds an "Other" option with a required text box when picked */
  other?: boolean
  /** Option that clears all others when ticked (checkboxes only) */
  exclusiveOption?: string
  showIf?: ShowIf
  file?: FileRules
  autoComplete?: string
}

export interface Section {
  id: string
  title: string
  questions: Question[]
}

export const OTHER = 'Other'
export const MAX_FILE_BYTES = 25 * 1024 * 1024
export const MIN_FILL_MS = 5000
export const SHORT_MAX = 300
export const LONG_MAX = 5000

export const FILE_CONTENT_TYPES: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  svg: 'image/svg+xml',
  pdf: 'application/pdf',
  ai: 'application/postscript',
  eps: 'application/postscript',
  heic: 'image/heic',
}

export const SECTIONS: Section[] = [
  {
    id: 'about',
    title: 'About you',
    questions: [
      {
        id: 'business_name',
        label: 'Business or organisation name, exactly as it should appear',
        type: 'short',
        required: true,
        autoComplete: 'organization',
      },
      {
        id: 'org_type',
        label: 'What kind of organisation are you?',
        type: 'choice',
        options: ['Business', 'Church', 'Non-profit'],
        other: true,
      },
      { id: 'contact_name', label: 'Your name', type: 'short', required: true, autoComplete: 'name' },
      { id: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
      {
        id: 'phone',
        label: 'Cell or WhatsApp number',
        type: 'tel',
        required: true,
        placeholder: '082 123 4567',
        autoComplete: 'tel',
      },
      {
        id: 'cc',
        label: 'Should anyone else be copied in on quotes and emails?',
        type: 'choice',
        options: ['Yes', 'No'],
      },
      { id: 'cc_name', label: 'Their name', type: 'short', showIf: { id: 'cc', anyOf: ['Yes'] } },
      {
        id: 'cc_contact',
        label: 'Their email or cell number',
        type: 'short',
        showIf: { id: 'cc', anyOf: ['Yes'] },
      },
      {
        id: 'show_address',
        label: 'Should your address show on the website?',
        type: 'choice',
        options: ['Yes', 'No'],
      },
      {
        id: 'address',
        label: 'Physical address',
        type: 'long',
        showIf: { id: 'show_address', anyOf: ['Yes'] },
      },
    ],
  },
  {
    id: 'current',
    title: 'What you have now',
    questions: [
      {
        id: 'has_website',
        label: 'Do you have a website at the moment?',
        type: 'choice',
        options: ['Yes', 'No'],
      },
      {
        id: 'website_url',
        label: 'Website address',
        type: 'url',
        placeholder: 'yourbusiness.co.za',
        showIf: { id: 'has_website', anyOf: ['Yes'] },
      },
      {
        id: 'host',
        label: "Who hosts it? For example Afrihost, Wix, a previous developer, or 'I don't know'",
        type: 'short',
        showIf: { id: 'has_website', anyOf: ['Yes'] },
      },
      {
        id: 'has_domain',
        label: 'Do you own a domain name, like yourbusiness.co.za?',
        type: 'choice',
        options: ['Yes', 'No', 'Not sure'],
        help: "If you don't have one, we'll include it in your quote.",
      },
      {
        id: 'domain_details',
        label: 'What is it, and who is it registered with?',
        type: 'short',
        showIf: { id: 'has_domain', anyOf: ['Yes'] },
      },
      {
        id: 'has_domain_email',
        label: 'Do you have email addresses on your domain, like info@yourbusiness.co.za?',
        type: 'choice',
        options: ['Yes', 'No', 'Not sure'],
        help: "If you don't have them, we'll include them in your quote.",
      },
    ],
  },
  {
    id: 'new_site',
    title: 'Your new website',
    questions: [
      {
        id: 'build_type',
        label: 'Is this a brand-new website or a rebuild of an existing one?',
        type: 'choice',
        options: ['Brand-new website', 'Rebuild of an existing website'],
      },
      {
        id: 'rebuild_problems',
        label: "What isn't working on your current website?",
        type: 'long',
        showIf: { id: 'build_type', anyOf: ['Rebuild of an existing website'] },
      },
      {
        id: 'new_goal',
        label: 'What is the main goal of your new website?',
        type: 'long',
        showIf: { id: 'build_type', anyOf: ['Brand-new website'] },
      },
      {
        id: 'reasons',
        label: 'Why do you want a website? Tick all that apply',
        type: 'checkboxes',
        options: [
          'More customers or enquiries',
          'Look professional and credible',
          'Reach more people',
          'Keep members or clients informed',
          'Sell products online',
          'Take bookings',
        ],
        other: true,
      },
      {
        id: 'needs_updates',
        label: "Will the website need to be updated after it's live?",
        type: 'choice',
        options: ['No, it will stay mostly the same', 'Yes, it will need regular updates'],
      },
      {
        id: 'update_frequency',
        label: 'How often?',
        type: 'choice',
        options: ['Weekly', 'Monthly', 'A few times a year'],
        showIf: { id: 'needs_updates', anyOf: ['Yes, it will need regular updates'] },
      },
      {
        id: 'update_items',
        label: 'What will need updating?',
        type: 'checkboxes',
        options: [
          'Events or calendar',
          'News or announcements',
          'Weekly bulletin or newsletter',
          'Prices or specials',
          'Products',
          'Photos',
          'Team members',
        ],
        other: true,
        showIf: { id: 'needs_updates', anyOf: ['Yes, it will need regular updates'] },
      },
      {
        id: 'update_method',
        label: 'How would you like updates done?',
        type: 'choice',
        options: [
          'DDM makes the updates for me',
          'I want to update it myself with the DDM Page Editor',
          'Not sure, please advise',
        ],
        showIf: { id: 'needs_updates', anyOf: ['Yes, it will need regular updates'] },
      },
      {
        id: 'update_person',
        label: 'Who on your side will make the updates?',
        type: 'short',
        showIf: { id: 'update_method', anyOf: ['I want to update it myself with the DDM Page Editor'] },
      },
      {
        id: 'pages',
        label: 'Which pages do you need?',
        type: 'checkboxes',
        options: [
          'Home',
          'About',
          'Services',
          'Products or shop',
          'Gallery',
          'Events',
          'News or blog',
          'Team',
          'Contact',
          'FAQ',
        ],
        other: true,
      },
      {
        id: 'features',
        label: 'Which extra features do you need?',
        type: 'checkboxes',
        options: [
          'Calendar',
          'Events',
          'Online bookings',
          'Contact form',
          'Online shop',
          'Newsletter sign-up',
          'Downloads such as PDFs',
          'Videos or live stream',
          'WhatsApp chat button',
          'Map',
        ],
        other: true,
      },
      {
        id: 'logins',
        label: 'Will people need to log in to the website?',
        type: 'choice',
        options: ['No', 'Yes', 'Not sure'],
      },
      {
        id: 'login_details',
        label: 'Who will log in, and what should they be able to do?',
        type: 'long',
        showIf: { id: 'logins', anyOf: ['Yes'] },
      },
      {
        id: 'language',
        label: 'Website language',
        type: 'choice',
        options: ['Afrikaans', 'English', 'Both'],
      },
      {
        id: 'audience',
        label: 'Who is the website for? Describe your target audience',
        type: 'long',
      },
      {
        id: 'google',
        label: 'Do you want help being found on Google?',
        type: 'checkboxes',
        options: [
          'Show up in Google searches (SEO)',
          'Set up or improve our Google Business Profile (Google Maps listing)',
          'Not needed',
          'Not sure, please advise',
        ],
      },
      {
        id: 'inspiration',
        label: 'Do you have websites you like the look of? Paste a link to each one',
        type: 'long',
      },
    ],
  },
  {
    id: 'branding',
    title: 'Branding and photos',
    questions: [
      {
        id: 'has_logo',
        label: 'Do you have a logo?',
        type: 'choice',
        options: ['Yes, I have a logo', "I don't have branding or a logo"],
      },
      {
        id: 'logo_files',
        label:
          'Upload your logo, the best quality you have, ideally the original file from your designer',
        type: 'file',
        showIf: { id: 'has_logo', anyOf: ['Yes, I have a logo'] },
        file: {
          maxFiles: 5,
          maxBytes: MAX_FILE_BYTES,
          extensions: ['png', 'jpg', 'jpeg', 'webp', 'svg', 'pdf', 'ai', 'eps'],
        },
      },
      {
        id: 'brand_colours',
        label: 'Brand colours or fonts, if you know them',
        type: 'short',
        showIf: { id: 'has_logo', anyOf: ['Yes, I have a logo'] },
      },
      {
        id: 'want_logo',
        label: 'Would you like DDM to design a logo for you?',
        type: 'choice',
        options: ['Yes', 'No', 'Maybe'],
        showIf: { id: 'has_logo', anyOf: ["I don't have branding or a logo"] },
      },
      {
        id: 'has_photos',
        label: 'Do you have photos for the website?',
        type: 'choice',
        options: ['Yes', 'Some', "No, I'll need photos"],
      },
      {
        id: 'photo_files',
        label:
          'Upload your photos. Please use the original files, not WhatsApp copies. Wide landscape photos work best for the top of the homepage.',
        type: 'file',
        showIf: { id: 'has_photos', anyOf: ['Yes', 'Some'] },
        file: {
          maxFiles: 30,
          maxBytes: MAX_FILE_BYTES,
          extensions: ['png', 'jpg', 'jpeg', 'webp', 'heic'],
        },
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy and payments',
    questions: [
      {
        id: 'people_info',
        label: 'Will the website show information about people?',
        type: 'checkboxes',
        options: [
          'Staff or team names and photos',
          'Member names',
          'Birthdays',
          'Prayer requests or personal news',
          'None',
        ],
        exclusiveOption: 'None',
      },
      {
        id: 'payments',
        label: 'Payments',
        type: 'choice',
        options: ['Take payments online', 'Show bank details only', 'No payments'],
      },
    ],
  },
  {
    id: 'budget',
    title: 'Budget and timing',
    questions: [
      {
        id: 'budget',
        label: 'Budget',
        type: 'choice',
        options: [
          'R2,500 or less',
          'R2,500 to R5,000',
          'R5,000 to R10,000',
          'R10,000 or more',
          "I'm not sure",
        ],
      },
      {
        id: 'has_deadline',
        label: 'Is there a date the website must be ready by?',
        type: 'choice',
        options: ['Yes', 'No'],
      },
      {
        id: 'deadline_date',
        label: 'The date',
        type: 'date',
        showIf: { id: 'has_deadline', anyOf: ['Yes'] },
      },
      {
        id: 'deadline_reason',
        label: "What's happening on that date? Please explain",
        type: 'long',
        showIf: { id: 'has_deadline', anyOf: ['Yes'] },
      },
      { id: 'anything_else', label: 'Anything else from your side?', type: 'long' },
    ],
  },
]

export const ALL_QUESTIONS: Question[] = SECTIONS.flatMap((s) => s.questions)
export const QUESTION_BY_ID: Record<string, Question> = Object.fromEntries(
  ALL_QUESTIONS.map((q) => [q.id, q]),
)
export const FILE_FIELDS = ALL_QUESTIONS.filter((q) => q.type === 'file').map(
  (q) => q.id,
) as FileFieldId[]

export const CONSENT_LABEL =
  'I agree that DDM Technology may store and use this information to prepare my quote and build my website.'

export type AnswerValue = string | string[]
export type Answers = Record<string, AnswerValue>

export interface UploadedFile {
  field: FileFieldId
  url: string
  pathname: string
  name: string
  size: number
  contentType: string
}

export const otherKey = (id: string) => `${id}_other`

export function hasValue(v: AnswerValue | undefined): boolean {
  if (v === undefined || v === null) return false
  if (Array.isArray(v)) return v.length > 0
  return v.trim() !== ''
}

/** True when a value (string or ticked list) includes `option`. */
export function valueIncludes(v: AnswerValue | undefined, option: string): boolean {
  if (Array.isArray(v)) return v.includes(option)
  return v === option
}

/**
 * A question is visible when it has no condition, or its parent is visible
 * and the parent's answer matches. Works for nested conditions.
 */
export function isVisible(q: Question, answers: Answers): boolean {
  if (!q.showIf) return true
  const parent = QUESTION_BY_ID[q.showIf.id]
  if (!parent || !isVisible(parent, answers)) return false
  const v = answers[parent.id]
  return q.showIf.anyOf.some((opt) => valueIncludes(v, opt))
}

/** Depth of nesting, for indenting conditional questions. */
export function depthOf(q: Question): number {
  let d = 0
  let cur = q
  while (cur.showIf) {
    d++
    cur = QUESTION_BY_ID[cur.showIf.id]
  }
  return d
}

/** Removes answers (and Other text) for hidden questions and unticked Other. */
export function pruneAnswers(answers: Answers): Answers {
  const out: Answers = {}
  for (const q of ALL_QUESTIONS) {
    if (q.type === 'file') continue
    if (!isVisible(q, answers)) continue
    const v = answers[q.id]
    if (hasValue(v)) out[q.id] = v
    if (q.other && valueIncludes(v, OTHER)) {
      const o = answers[otherKey(q.id)]
      if (typeof o === 'string') out[otherKey(q.id)] = o
    }
  }
  return out
}

export function extensionOf(name: string): string {
  const m = /\.([a-z0-9]+)$/i.exec(name)
  return m ? m[1].toLowerCase() : ''
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function normaliseUrl(input: string): string {
  const t = input.trim()
  return /^https?:\/\//i.test(t) ? t : `https://${t}`
}

/** Display text for an answer (choices with Other show the typed text). */
export function displayAnswer(q: Question, answers: Answers): string | string[] | null {
  const v = answers[q.id]
  if (!hasValue(v)) return null
  const other = answers[otherKey(q.id)]
  const swap = (s: string) =>
    q.other && s === OTHER && typeof other === 'string' && other.trim() ? `Other: ${other.trim()}` : s
  if (Array.isArray(v)) return v.map(swap)
  return swap(v as string)
}
