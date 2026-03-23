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
          <span>AI Automation Agency — South Africa</span>
        </div>

        {/* Main heading */}
        <h1 className={styles.title}>
          <span className={`${styles.titleLine} ${mounted ? styles.visible : ''}`}>
            <span className={styles.titleTextGradient}>We Build AI Systems</span>
          </span>
          <span className={`${styles.titleLine} ${styles.titleLineDelay} ${mounted ? styles.visible : ''}`}>
            <span className={styles.titleAccent}>That Run Your Business</span>
          </span>
          <span className={`${styles.titleLine} ${styles.titleLineDelay2} ${mounted ? styles.visible : ''}`}>
            <span className={styles.titleAccent}>While You Sleep</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`${styles.subtitle} ${mounted ? styles.visible : ''}`}>
          Practical AI automation for South African businesses.
          <br />
          No hype. No fluff. Just systems that save you time and money.
        </p>

        {/* CTA buttons */}
        <div className={`${styles.actions} ${mounted ? styles.visible : ''}`}>
          <Link href="/contact" className={styles.primaryBtn}>
            <span>Book a Free AI Audit</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="/case-studies" className={styles.secondaryBtn}>
            <span>See Our Work</span>
          </Link>
        </div>

        {/* Stats row */}
        <div className={`${styles.stats} ${mounted ? styles.visible : ''}`}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>AI Automations Built</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>10x</span>
            <span className={styles.statLabel}>Faster Workflows</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>R0</span>
            <span className={styles.statLabel}>Upfront for Qualifying Businesses</span>
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
