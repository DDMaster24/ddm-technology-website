import type { SubmissionRow } from '@/lib/intake/db'

export function formatDateTime(value: string | Date): string {
  return new Intl.DateTimeFormat('en-ZA', {
    timeZone: 'Africa/Johannesburg',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`)
  if (Number.isNaN(d.getTime())) return iso
  return new Intl.DateTimeFormat('en-ZA', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(d)
}

export function deadlineText(row: SubmissionRow): string {
  const a = row.answers ?? {}
  if (typeof a.deadline_date === 'string' && a.deadline_date) return formatDate(a.deadline_date)
  if (a.has_deadline === 'No') return 'None'
  if (a.has_deadline === 'Yes') return 'Yes, no date'
  return '—'
}
