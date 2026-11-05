import 'server-only'
import { Resend } from 'resend'
import {
  type Answers,
  SECTIONS,
  type UploadedFile,
  displayAnswer,
  formatBytes,
  isVisible,
} from './questions'

export const NOTIFY_TO = 'darius@ddmtech.co.za'
export const NOTIFY_FROM = 'DDM Technology <forms@ddmtech.co.za>'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const nl2br = (s: string) => esc(s).replace(/\r?\n/g, '<br>')

export function buildEmailHtml(opts: {
  answers: Answers
  files: UploadedFile[]
  adminUrl: string
}): string {
  const { answers, files, adminUrl } = opts
  const parts: string[] = []

  for (const section of SECTIONS) {
    const rows: string[] = []
    for (const q of section.questions) {
      if (!isVisible(q, answers)) continue
      let valueHtml: string | null = null
      if (q.type === 'file') {
        const list = files.filter((f) => f.field === q.id)
        if (list.length) {
          valueHtml = list
            .map(
              (f) =>
                `<a href="${esc(f.url)}" style="color:#1e40af;">${esc(f.name)}</a> <span style="color:#6b7280;">(${formatBytes(f.size)})</span>`,
            )
            .join('<br>')
        }
      } else {
        const v = displayAnswer(q, answers)
        if (v !== null) valueHtml = Array.isArray(v) ? v.map(esc).join('<br>') : nl2br(v)
      }
      if (valueHtml === null) continue
      rows.push(`
        <tr><td style="padding:10px 0 2px;font-size:13px;color:#6b7280;">${esc(q.label)}</td></tr>
        <tr><td style="padding:0 0 10px;font-size:15px;color:#111827;border-bottom:1px solid #e5e7eb;">${valueHtml}</td></tr>`)
    }
    if (!rows.length) continue
    parts.push(`
      <tr><td style="padding:24px 0 4px;font-size:18px;font-weight:700;color:#111827;">${esc(section.title)}</td></tr>
      <tr><td><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows.join('')}</table></td></tr>`)
  }

  const business = typeof answers.business_name === 'string' ? answers.business_name : ''

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:12px;padding:24px 28px;">
  <tr><td style="font-size:22px;font-weight:700;color:#111827;">New website questionnaire</td></tr>
  <tr><td style="font-size:15px;color:#374151;padding-top:4px;">${esc(business)}</td></tr>
  ${parts.join('')}
  <tr><td style="padding:28px 0 8px;" align="center">
    <a href="${esc(adminUrl)}" style="display:inline-block;padding:14px 28px;border-radius:10px;background-color:#dc2626;background-image:linear-gradient(135deg,#dc2626 0%,#b91c1c 30%,#1e40af 70%,#0891b2 100%);color:#ffffff;font-weight:700;font-size:15px;text-decoration:none;">Open in admin</a>
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`
}

export async function sendNotificationEmail(opts: {
  answers: Answers
  files: UploadedFile[]
  adminUrl: string
  replyTo?: string
}): Promise<void> {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not set')
  const resend = new Resend(key)
  const business = String(opts.answers.business_name ?? '').replace(/[\r\n]+/g, ' ').trim()
  const { error } = await resend.emails.send({
    from: NOTIFY_FROM,
    to: [NOTIFY_TO],
    replyTo: opts.replyTo,
    subject: `New website questionnaire: ${business}`,
    html: buildEmailHtml(opts),
  })
  if (error) throw new Error(`Resend error: ${error.name}: ${error.message}`)
}
