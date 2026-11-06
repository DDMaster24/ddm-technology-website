import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import NetworkBackdrop from './NetworkBackdrop'
import styles from './start-layout.module.css'

// Bare layout for the client intake form and its admin pages:
// no main site navigation, footer or WhatsApp button.
export const metadata: Metadata = {
  title: "Let's build your website",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: '/start' },
}

export const viewport: Viewport = {
  themeColor: '#050810',
}

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.glows} />
        <NetworkBackdrop className={styles.network} />
      </div>
      <div className={styles.content}>
        <header className={styles.header}>
          <Link href="/" className={styles.wordmark}>
            DDM <span className={styles.wordmarkAccent}>Technology</span>
          </Link>
        </header>
        {children}
      </div>
    </div>
  )
}
