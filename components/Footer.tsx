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
              <Link href="/services">All Services</Link>
              <Link href="/ai-services">AI Packages &amp; Pricing</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/ai-services/whatsapp-chatbot">WhatsApp AI Chatbot</Link>
              <Link href="/ai-services/workflow-automation">Workflow Automation</Link>
              <Link href="/software">Software Products</Link>
            </div>

            <div className={styles.footerNavGroup}>
              <h4>Tools</h4>
              <Link href="/ai-readiness">AI Readiness Quiz</Link>
              <Link href="/tools/roi-calculator">AI ROI Calculator</Link>
              <Link href="/tools">All Tools</Link>
            </div>

            <div className={styles.footerNavGroup}>
              <h4>Industries</h4>
              <Link href="/industries">All Industries</Link>
              <Link href="/industries/restaurants">Restaurants</Link>
              <Link href="/industries/real-estate">Real Estate</Link>
              <Link href="/industries/healthcare">Healthcare</Link>
              <Link href="/industries/accounting">Accounting</Link>
              <Link href="/industries/retail-ecommerce">Retail &amp; E-Commerce</Link>
            </div>

            <div className={styles.footerNavGroup}>
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/policies">Policies</Link>
            </div>

            <div className={styles.footerNavGroup}>
              <h4>Contact</h4>
              <a href="mailto:darius@ddmtech.co.za">darius@ddmtech.co.za</a>
              <a href="https://wa.me/27832580869" target="_blank" rel="noopener noreferrer">WhatsApp</a>
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
