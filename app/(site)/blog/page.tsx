'use client'

import { useState } from 'react'
import Link from 'next/link'
import { blogPosts, categories } from '@/lib/blog-data'
import { ArrowRightIcon, FileTextIcon } from '@/components/Icons'
import styles from './blog.module.css'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <section className="page-header">
        <div className="page-header-content">
          <h1>Blog</h1>
          <p>Practical AI insights, case studies, and guides for South African businesses</p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-primary)', padding: '4rem 2rem 6rem' }}>
        <div className="container">
          <div className={styles.blogControls}>
            <div className={styles.categoryFilters}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterBtn} ${activeCategory === category ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className={styles.searchWrapper}>
              <div className={styles.searchIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.blogGrid}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.blogCard}>
                  <div className={styles.blogCardCover}>
                    <div className={styles.blogCardCoverIcon}>
                      <FileTextIcon />
                    </div>
                  </div>
                  <div className={styles.blogCardBody}>
                    <div className={styles.blogCardMeta}>
                      <span className={styles.categoryBadge}>{post.category}</span>
                      <span className={styles.metaDot} />
                      <span className={styles.metaText}>{post.readTime}</span>
                      <span className={styles.metaDot} />
                      <span className={styles.metaText}>
                        {new Date(post.date).toLocaleDateString('en-ZA', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <h2 className={styles.blogCardTitle}>{post.title}</h2>
                    <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
                    <div className={styles.blogCardFooter}>
                      <span className={styles.metaText}>{post.author}</span>
                      <span className={styles.readMore}>
                        Read article <ArrowRightIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className={styles.noResults}>No articles found matching your search.</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
