import type { Metadata } from 'next'
import Link from 'next/link'
import { requireAdmin } from '@/lib/intake/auth'
import { type SubmissionRow, listSubmissions } from '@/lib/intake/db'
import { deadlineText, formatDateTime } from '../format'
import styles from '../admin.module.css'

export const metadata: Metadata = { title: 'Intake submissions' }
export const dynamic = 'force-dynamic'

export default async function AdminListPage() {
  await requireAdmin()
  let rows: SubmissionRow[] = []
  let loadError: string | null = null
  try {
    rows = await listSubmissions()
  } catch (error) {
    console.error('[intake] Failed to load submissions', error)
    loadError = 'Could not load submissions. Check DATABASE_URL and that the migration has been run.'
  }

  return (
    <>
      <h1 className={styles.h1} style={{ marginBottom: 16 }}>
        Submissions <span className={styles.muted}>({rows.length})</span>
      </h1>
      {loadError && <p className={styles.error}>{loadError}</p>}
      {!loadError && rows.length === 0 && <p className={styles.muted}>No submissions yet.</p>}
      {rows.length > 0 && (
        <>
          <div className={styles.head} aria-hidden="true">
            <span>Date</span>
            <span>Business</span>
            <span>Contact</span>
            <span>Budget</span>
            <span>Deadline</span>
            <span>Status</span>
            <span>Files</span>
          </div>
          <ul className={styles.list}>
            {rows.map((r) => {
              const budget = typeof r.answers?.budget === 'string' ? r.answers.budget : '—'
              const fileCount = Array.isArray(r.files) ? r.files.length : 0
              return (
                <li key={r.id}>
                  <Link href={`/start/admin/${r.id}`} className={styles.row}>
                    <span className={styles.cell}>
                      <span className={styles.cellLabel}>Date</span>
                      {formatDateTime(r.created_at)}
                    </span>
                    <span className={`${styles.cell} ${styles.strong}`}>
                      <span className={styles.cellLabel}>Business</span>
                      {r.business_name}
                    </span>
                    <span className={styles.cell}>
                      <span className={styles.cellLabel}>Contact</span>
                      {r.contact_name}
                    </span>
                    <span className={styles.cell}>
                      <span className={styles.cellLabel}>Budget</span>
                      {budget}
                    </span>
                    <span className={styles.cell}>
                      <span className={styles.cellLabel}>Deadline</span>
                      {deadlineText(r)}
                    </span>
                    <span className={styles.cell}>
                      <span className={styles.cellLabel}>Status</span>
                      <span className={r.status === 'reviewed' ? styles.badgeReviewed : styles.badgeNew}>
                        {r.status === 'reviewed' ? 'Reviewed' : 'New'}
                      </span>
                    </span>
                    <span className={styles.cell}>
                      <span className={styles.cellLabel}>Files</span>
                      {fileCount}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}
