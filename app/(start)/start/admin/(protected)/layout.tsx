import Link from 'next/link'
import { requireAdmin } from '@/lib/intake/auth'
import { logoutAction } from '../actions'
import styles from '../admin.module.css'

export const dynamic = 'force-dynamic'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin()
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <Link href="/start/admin" className={styles.link}>
          Intake submissions
        </Link>
        <form action={logoutAction}>
          <button type="submit" className={styles.buttonGhost}>
            Log out
          </button>
        </form>
      </div>
      {children}
    </div>
  )
}
