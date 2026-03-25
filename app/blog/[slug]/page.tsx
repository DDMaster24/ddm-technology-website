import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost } from '@/lib/blog-data'
import { ArrowRightIcon } from '@/components/Icons'
import styles from '../blog.module.css'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | DDM Technology`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // Empty line
    if (line.trim() === '') {
      i++
      continue
    }

    // Table
    if (line.includes('|') && i + 1 < lines.length && lines[i + 1]?.includes('---')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i])
        i++
      }
      const headerCells = tableLines[0]
        .split('|')
        .map((c) => c.trim())
        .filter(Boolean)
      const bodyRows = tableLines.slice(2)

      elements.push(
        <table key={key++}>
          <thead>
            <tr>
              {headerCells.map((cell, ci) => (
                <th key={ci}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, ri) => {
              const cells = row
                .split('|')
                .map((c) => c.trim())
                .filter(Boolean)
              return (
                <tr key={ri}>
                  {cells.map((cell, ci) => (
                    <td key={ci}>{renderInline(cell)}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
      continue
    }

    // Headers
    if (line.startsWith('#### ')) {
      elements.push(<h4 key={key++}>{renderInline(line.slice(5))}</h4>)
      i++
      continue
    }
    if (line.startsWith('### ')) {
      elements.push(<h3 key={key++}>{renderInline(line.slice(4))}</h3>)
      i++
      continue
    }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++}>{renderInline(line.slice(3))}</h2>)
      i++
      continue
    }

    // Unordered list
    if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={key++}>
          {items.map((item, li) => (
            <li key={li}>{renderInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''))
        i++
      }
      elements.push(
        <ol key={key++}>
          {items.map((item, li) => (
            <li key={li}>{renderInline(item)}</li>
          ))}
        </ol>
      )
      continue
    }

    // Blockquote
    if (line.startsWith('> ')) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2))
        i++
      }
      elements.push(<blockquote key={key++}>{renderInline(quoteLines.join(' '))}</blockquote>)
      continue
    }

    // Paragraph
    elements.push(<p key={key++}>{renderInline(line)}</p>)
    i++
  }

  return elements
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  // Process bold, links, and inline code
  const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))|(`(.+?)`)/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    // Text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    if (match[1]) {
      // Bold
      parts.push(<strong key={match.index}>{match[2]}</strong>)
    } else if (match[3]) {
      // Link
      parts.push(
        <Link href={match[5]} key={match.index}>
          {match[4]}
        </Link>
      )
    } else if (match[6]) {
      // Inline code
      parts.push(<code key={match.index}>{match[7]}</code>)
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length === 1 ? parts[0] : parts
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  const shareUrl = `https://ddmtech.co.za/blog/${post.slug}`
  const shareText = encodeURIComponent(post.title)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://ddmtech.co.za',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DDM Technology',
      url: 'https://ddmtech.co.za',
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': shareUrl,
    },
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    url: shareUrl,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-header">
        <div className="page-header-content">
          <div className={styles.articleMeta}>
            <span className={styles.categoryBadge}>{post.category}</span>
            <span className={styles.metaDot} />
            <span className={styles.metaText}>{post.readTime}</span>
            <span className={styles.metaDot} />
            <span className={styles.metaText}>
              {new Date(post.date).toLocaleDateString('en-ZA', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-primary)', padding: '3rem 2rem 6rem' }}>
        <div className={styles.articleContainer}>
          <Link href="/blog" className={styles.backLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to all articles
          </Link>

          <article className={styles.articleContent}>
            {renderMarkdown(post.content)}
          </article>

          {/* Share buttons */}
          <div className={styles.shareSection}>
            <span className={styles.shareLabel}>Share:</span>
            <div className={styles.shareButtons}>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareBtn}
                aria-label="Share on X (Twitter)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareBtn}
                aria-label="Share on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareBtn}
                aria-label="Share on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={`mailto:?subject=${shareText}&body=Check out this article: ${shareUrl}`}
                className={styles.shareBtn}
                aria-label="Share via email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <div className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>More Articles</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((related) => (
                <Link href={`/blog/${related.slug}`} key={related.slug} className={styles.blogCard}>
                  <div className={styles.blogCardBody}>
                    <div className={styles.blogCardMeta}>
                      <span className={styles.categoryBadge}>{related.category}</span>
                      <span className={styles.metaDot} />
                      <span className={styles.metaText}>{related.readTime}</span>
                    </div>
                    <h3 className={styles.blogCardTitle}>{related.title}</h3>
                    <p className={styles.blogCardExcerpt}>{related.excerpt}</p>
                    <div className={styles.blogCardFooter}>
                      <span className={styles.metaText}>{related.author}</span>
                      <span className={styles.readMore}>
                        Read article <ArrowRightIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section" style={{ marginTop: '4rem' }}>
            <h2>Ready to Automate Your Business?</h2>
            <p>Book a free AI audit and discover how much time and money AI can save your business</p>
            <Link href="/contact" className="cta-button">
              Book a Free AI Audit <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
