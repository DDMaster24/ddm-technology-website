import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTagline}>Dream. Dare. Make.</div>
        <p>Daring to make your dream come true</p>

        <div className={styles.footerLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/software">Software</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/policies">Policies</Link>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 DDM Technology. All rights reserved.</p>
          <p>Registered Business in South Africa</p>
        </div>
      </div>
    </footer>
  )
}
