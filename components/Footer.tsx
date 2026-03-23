import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              DDM <span>Technology</span>
            </div>
            <p className={styles.footerTagline}>AI Automation Agency</p>
            <p className={styles.footerDescription}>
              We build AI systems that run your business while you sleep.
              Based in Roodepoort, Johannesburg.
            </p>
          </div>

          <div className={styles.footerNav}>
            <div className={styles.footerNavGroup}>
              <h4>Services</h4>
              <Link href="/services">AI Customer Service</Link>
              <Link href="/services">Workflow Automation</Link>
              <Link href="/services">Document Processing</Link>
              <Link href="/services">AI Sales & Marketing</Link>
              <Link href="/services">Custom AI Development</Link>
            </div>

            <div className={styles.footerNavGroup}>
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/policies">Policies</Link>
            </div>

            <div className={styles.footerNavGroup}>
              <h4>Contact</h4>
              <a href="mailto:darius@ddmtech.co.za">darius@ddmtech.co.za</a>
              <a href="https://wa.me/27000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <span>Roodepoort, Johannesburg</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} DDM Technology. All rights reserved.</p>
          <p>Registered Business in South Africa</p>
        </div>
      </div>
    </footer>
  )
}
