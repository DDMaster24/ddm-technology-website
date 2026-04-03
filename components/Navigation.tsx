'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          DDM <span className={styles.accent}>Technology</span>
        </Link>

        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          &#9776;
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <li>
            <Link
              href="/"
              className={pathname === '/' ? styles.active : ''}
              onClick={closeMenu}
              {...(pathname === '/' ? { 'aria-current': 'page' as const } : {})}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === '/services' ? styles.active : ''}
              onClick={closeMenu}
              {...(pathname === '/services' ? { 'aria-current': 'page' as const } : {})}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/ai-services"
              className={pathname?.startsWith('/ai-services') ? styles.active : ''}
              onClick={closeMenu}
              {...(pathname?.startsWith('/ai-services') ? { 'aria-current': 'page' as const } : {})}
            >
              AI Services
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              className={pathname === '/case-studies' ? styles.active : ''}
              onClick={closeMenu}
              {...(pathname === '/case-studies' ? { 'aria-current': 'page' as const } : {})}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === '/about' ? styles.active : ''}
              onClick={closeMenu}
              {...(pathname === '/about' ? { 'aria-current': 'page' as const } : {})}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={pathname?.startsWith('/blog') ? styles.active : ''}
              onClick={closeMenu}
              {...(pathname?.startsWith('/blog') ? { 'aria-current': 'page' as const } : {})}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${pathname === '/contact' ? styles.active : ''} ${styles.ctaLink}`}
              onClick={closeMenu}
              {...(pathname === '/contact' ? { 'aria-current': 'page' as const } : {})}
            >
              Book AI Audit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
