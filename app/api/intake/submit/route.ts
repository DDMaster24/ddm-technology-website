import { NextResponse } from 'next/server'
import { insertSubmission } from '@/lib/intake/db'
import { sendNotificationEmail } from '@/lib/intake/email'
import { MIN_FILL_MS, normaliseUrl } from '@/lib/intake/questions'
import { buildSubmissionSchema, isoDate, issuesToFieldErrors } from '@/lib/intake/validation'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_BODY_BYTES = 256 * 1024

export async function POST(request: Request) {
  const len = Number(request.headers.get('content-length') ?? 0)
  if (len > MAX_BODY_BYTES) {
    return NextResponse.json({ message: 'Your answers are too long to send.' }, { status: 413 })
  }

  let raw: unknown
  try {
    const text = await request.text()
    if (text.length > MAX_BODY_BYTES) throw new Error('too large')
    raw = JSON.parse(text)
  } catch {
    return NextResponse.json({ message: 'We could not read your answers. Please try again.' }, { status: 400 })
  }
  const body = (raw ?? {}) as Record<string, unknown>

  // Honeypot: bots fill the hidden field. Pretend success and save nothing.
  if (typeof body.company_website === 'string' && body.company_website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  // Too fast: humans can't fill in the form within 5 seconds of loading it.
  const startedAt = typeof body.startedAt === 'number' ? body.startedAt : NaN
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json(
      { message: 'That was very quick! Please check your answers and press "Send my answers" again.' },
      { status: 429 },
    )
  }

  // Allow one day of slack on "today or later" for time zone differences.
  const minDate = isoDate(new Date(Date.now() - 24 * 60 * 60 * 1000), 'Africa/Johannesburg')
  const parsed = buildSubmissionSchema({ minDate }).safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: 'Some answers need attention. Please check the highlighted questions.',
        fieldErrors: issuesToFieldErrors(parsed.error.issues),
      },
      { status: 400 },
    )
  }

  const { answers: rawAnswers, files } = parsed.data
  const answers = { ...rawAnswers }
  for (const [k, v] of Object.entries(answers)) {
    if (typeof v === 'string') answers[k] = v.trim()
  }
  if (typeof answers.website_url === 'string') answers.website_url = normaliseUrl(answers.website_url)

  let id: string
  try {
    id = await insertSubmission({
      business_name: answers.business_name as string,
      contact_name: answers.contact_name as string,
      email: answers.email as string,
      phone: answers.phone as string,
      answers,
      files,
    })
  } catch (error) {
    console.error('[intake] Failed to save submission', error)
    return NextResponse.json(
      {
        message:
          'Sorry, something went wrong on our side and your answers were not sent. Please try again in a minute, or WhatsApp us on 067 128 8247.',
      },
      { status: 500 },
    )
  }

  // The email is a notification only. If it fails, the submission is still saved.
  try {
    const origin = new URL(request.url).origin
    await sendNotificationEmail({
      answers,
      files,
      adminUrl: `${origin}/start/admin/${id}`,
      replyTo: answers.email as string,
    })
  } catch (error) {
    console.error(`[intake] Submission ${id} saved, but the notification email failed`, error)
  }

  return NextResponse.json({ ok: true })
}
