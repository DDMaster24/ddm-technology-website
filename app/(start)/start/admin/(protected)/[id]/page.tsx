import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { requireAdmin } from '@/lib/intake/auth'
import { getSubmission } from '@/lib/intake/db'
import { SECTIONS, type UploadedFile, displayAnswer, extensionOf, formatBytes, isVisible } from '@/lib/intake/questions'
import { toggleReviewedAction } from '../../actions'
import { formatDate, formatDateTime } from '../../format'
import DeleteForm from './DeleteForm'
import styles from '../../admin.module.css'

export const metadata: Metadata = { title: 'Submission' }
export const dynamic = 'force-dynamic'

const INLINE_IMAGE = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'])

function FileCard({ f }: { f: UploadedFile }) {
  const download = `${f.url}${f.url.includes('?') ? '&' : '?'}download=1`
  return (
    <li className={styles.file}>
      <a href={f.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${f.name}`}>
        {INLINE_IMAGE.has(f.contentType) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={styles.fileThumb} src={f.url} alt={f.name} loading="lazy" />
        ) : (
          <span className={styles.fileIcon}>{extensionOf(f.name)}</span>
        )}
      </a>
      <div className={styles.fileBody}>
        <div className={styles.fileName} title={f.name}>
          {f.name}
        </div>
        <div className={styles.muted}>{formatBytes(f.size)}</div>
        <div className={styles.fileLinks}>
          <a className={styles.link} href={f.url} target="_blank" rel="noopener noreferrer">
            Open
          </a>
          <a className={styles.link} href={download}>
            Download
          </a>
        </div>
      </div>
    </li>
  )
}

export default async function SubmissionPage({ params }: { params: { id: string } }) {
  await requireAdmin()
  const row = await getSubmission(params.id)
  if (!row) notFound()
  const answers = row.answers ?? {}
  const files = Array.isArray(row.files) ? row.files : []
  const toggle = toggleReviewedAction.bind(null, row.id)

  return (
    <>
      <div className={styles.card}>
        <div className={styles.top} style={{ marginBottom: 12 }}>
          <h1 className={styles.h1}>{row.business_name}</h1>
          <span className={row.status === 'reviewed' ? styles.badgeReviewed : styles.badgeNew}>
            {row.status === 'reviewed' ? 'Reviewed' : 'New'}
          </span>
        </div>
        <div className={styles.meta}>
          <span className={styles.muted}>Received</span>
          <span>{formatDateTime(row.created_at)}</span>
          <span className={styles.muted}>Contact</span>
          <span>{row.contact_name}</span>
          <span className={styles.muted}>Email</span>
          <a className={styles.link} href={`mailto:${row.email}`}>
            {row.email}
          </a>
          <span className={styles.muted}>Phone</span>
          <a className={styles.link} href={`tel:${row.phone.replace(/[^+0-9]/g, '')}`}>
            {row.phone}
          </a>
        </div>
        <form action={toggle} className={styles.actions} style={{ marginTop: 16 }}>
          <button type="submit" className={styles.buttonGhost}>
            {row.status === 'reviewed' ? 'Mark as new' : 'Mark as reviewed'}
          </button>
        </form>
      </div>

      {SECTIONS.map((s, i) => (
        <section key={s.id} className={styles.card} aria-labelledby={`s-${s.id}`}>
          <h2 id={`s-${s.id}`} className={styles.cardTitle}>
            <span className={styles.muted} style={{ fontSize: '0.8rem', display: 'block' }}>
              {i + 1} of {SECTIONS.length}
            </span>
            {s.title}
          </h2>
          <div className={styles.qa}>
            {s.questions
              .filter((q) => isVisible(q, answers))
              .map((q) => {
                if (q.type === 'file') {
                  const list = files.filter((f) => f.field === q.id)
                  return (
                    <div key={q.id}>
                      <div className={styles.q}>{q.label}</div>
                      {list.length ? (
                        <ul className={styles.files}>
                          {list.map((f) => (
                            <FileCard key={f.url} f={f} />
                          ))}
                        </ul>
                      ) : (
                        <div className={styles.na}>Not answered</div>
                      )}
                    </div>
                  )
                }
                const v = displayAnswer(q, answers)
                const text =
                  v === null ? null : Array.isArray(v) ? v.join('\n') : q.type === 'date' ? formatDate(v) : v
                return (
                  <div key={q.id}>
                    <div className={styles.q}>{q.label}</div>
                    {text === null ? (
                      <div className={styles.na}>Not answered</div>
                    ) : q.type === 'url' ? (
                      <a className={styles.link} href={text} target="_blank" rel="noopener noreferrer">
                        {text}
                      </a>
                    ) : (
                      <div className={styles.a}>{text}</div>
                    )}
                  </div>
                )
              })}
          </div>
        </section>
      ))}

      <section className={styles.card} aria-labelledby="danger">
        <h2 id="danger" className={styles.cardTitle}>
          Delete submission
        </h2>
        <DeleteForm id={row.id} businessName={row.business_name} fileCount={files.length} />
      </section>
    </>
  )
}
