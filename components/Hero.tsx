'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import NeuralBackground from './NeuralBackground'
import styles from './Hero.module.css'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className={styles.hero}>
      <NeuralBackground />

      <div className={styles.content}>
        {/* Floating badge */}
        <div className={`${styles.badge} ${mounted ? styles.visible : ''}`}>
          <span className={styles.badgeDot} />
          <span>Transforming Ideas Into Reality</span>
        </div>

        {/* Main heading with split animation - both lines have gradient */}
        <h1 className={styles.title}>
          <span className={`${styles.titleLine} ${mounted ? styles.visible : ''}`}>
            <span className={styles.titleTextGradient}>DDM</span>
          </span>
          <span className={`${styles.titleLine} ${styles.titleLineDelay} ${mounted ? styles.visible : ''}`}>
            <span className={styles.titleAccent}>Technology</span>
          </span>
        </h1>

        {/* Tagline with gradient accents */}
        <div className={`${styles.tagline} ${mounted ? styles.visible : ''}`}>
          <span className={styles.taglineWordAccent}>Dream.</span>
          <span className={styles.taglineWordAccent}>Dare.</span>
          <span className={styles.taglineWordAccent}>Make.</span>
        </div>

        {/* Subtitle */}
        <p className={`${styles.subtitle} ${mounted ? styles.visible : ''}`}>
          Professional IT solutions and software development services.
          <br />
          We bring your digital vision to life.
        </p>

        {/* CTA buttons */}
        <div className={`${styles.actions} ${mounted ? styles.visible : ''}`}>
          <Link href="/contact" className={styles.primaryBtn}>
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="/services" className={styles.secondaryBtn}>
            <span>View Services</span>
          </Link>
        </div>

        {/* Stats row */}
        <div className={`${styles.stats} ${mounted ? styles.visible : ''}`}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Support</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`${styles.scrollIndicator} ${mounted ? styles.visible : ''}`}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
