import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRightIcon,
  BarChartIcon,
  RocketIcon,
  SparklesIcon,
  TrendingUpIcon,
  CheckCircleIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'See how AI automation transformed South African businesses. Real results: 80% faster processing, R120K/month saved, 20+ hours/week recovered.',
  openGraph: {
    title: 'Case Studies | DDM Technology',
    description:
      'Real results for real SA businesses. Coal trading, restaurant chains, property management — see how AI automation delivers ROI.',
    url: 'https://ddmtech.co.za/case-studies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | DDM Technology',
    description:
      'Real results for real SA businesses — see how AI automation delivers measurable ROI.',
  },
  alternates: {
    canonical: '/case-studies',
  },
}

const caseStudies = [
  {
    icon: <BarChartIcon />,
    slug: 'minex',
    company: 'MineX',
    industry: 'Coal Trading & Commodities',
    headline: 'Digitised R50M+ in coal trades with an AI-powered marketplace',
    challenge:
      'MineX was managing coal trading operations across multiple mines and buyers using spreadsheets, phone calls, and WhatsApp groups. Trade matching was slow, pricing was inconsistent, and compliance documentation took days to compile.',
    solution:
      'We built an AI-powered trading marketplace that automatically matches buyers with sellers based on coal specifications, volume, and logistics. The platform handles pricing intelligence, generates compliance documents, and automates logistics coordination.',
    results: [
      { metric: 'R50M+', label: 'in trades digitised in the first 6 months' },
      { metric: '70%', label: 'reduction in trade matching time' },
      { metric: '3 days → 2 hours', label: 'compliance document generation' },
      { metric: '15+', label: 'active trading partners on platform' },
    ],
    techStack: ['Custom AI matching engine', 'n8n workflow automation', 'Document generation AI', 'Real-time pricing API'],
    accentColor: 'var(--ember-red)',
  },
  {
    icon: <RocketIcon />,
    slug: 'flame-and-fork',
    company: 'Flame & Fork',
    industry: 'Restaurant Chain — 8 Locations',
    headline: 'Cut order processing time by 80% with AI-powered operations',
    challenge:
      'Flame & Fork was drowning in manual order processing across 8 locations. Staff spent hours on inventory counts, supplier orders were often late or wrong, and customer complaints about wait times were increasing.',
    solution:
      'We deployed an AI order management system that processes incoming orders automatically, predicts inventory needs based on historical data and weather patterns, and generates supplier purchase orders before stock runs low.',
    results: [
      { metric: '80%', label: 'faster order processing across all locations' },
      { metric: '35%', label: 'reduction in food waste through AI prediction' },
      { metric: 'R120K/month', label: 'saved on inventory and labour costs' },
      { metric: '4.2 → 4.8', label: 'Google review score improvement' },
    ],
    techStack: ['AI order processing pipeline', 'Inventory prediction model', 'Automated supplier comms', 'WhatsApp notification bot'],
    accentColor: 'var(--ocean-cyan)',
  },
  {
    icon: <SparklesIcon />,
    slug: 'urbannest',
    company: 'UrbanNest',
    industry: 'Property Management — 200+ Units',
    headline: 'Automated tenant communications, saved 20+ hours per week',
    challenge:
      'UrbanNest managed 200+ rental units across Johannesburg with a small team. Tenant enquiries, maintenance requests, lease renewals, and payment follow-ups consumed most of the working day, leaving no time for growth.',
    solution:
      'We built an AI tenant management system: a WhatsApp chatbot handles routine enquiries and maintenance requests, AI automatically processes and routes maintenance tickets, and smart workflows manage lease renewals and payment reminders.',
    results: [
      { metric: '20+ hrs/week', label: 'saved on tenant communications' },
      { metric: '90%', label: 'of routine enquiries handled by AI chatbot' },
      { metric: '2 days → 4 hours', label: 'average maintenance request resolution' },
      { metric: '40%', label: 'improvement in on-time rent collection' },
    ],
    techStack: ['WhatsApp AI chatbot', 'Automated maintenance routing', 'Lease management workflows', 'Payment reminder automation'],
    accentColor: 'var(--ocean-blue)',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AI Automation Case Studies',
  description:
    'See how AI automation transformed South African businesses. Real results from coal trading, restaurant chains, and property management.',
  url: 'https://ddmtech.co.za/case-studies',
  publisher: {
    '@type': 'Organization',
    name: 'DDM Technology',
    url: 'https://ddmtech.co.za',
  },
}

export default function CaseStudies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="page-header">
        <div className="page-header-content">
          <h1>Case Studies</h1>
          <p>Real results for real South African businesses — see how AI automation transforms operations</p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-primary)', padding: '4rem 2rem 6rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {caseStudies.map((study, index) => (
              <article
                key={study.company}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Top accent */}
                <div style={{
                  height: '3px',
                  background: 'var(--gradient-ember-ocean)',
                }} />

                <div style={{ padding: '3rem' }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    marginBottom: '2rem',
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      background: `linear-gradient(135deg, ${study.accentColor}22, ${study.accentColor}11)`,
                      border: `1px solid ${study.accentColor}44`,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: study.accentColor,
                      flexShrink: 0,
                    }}>
                      {study.icon}
                    </div>
                    <div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.5rem',
                        flexWrap: 'wrap',
                      }}>
                        <h2 style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}>
                          {study.company}
                        </h2>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '100px',
                          fontSize: '0.8125rem',
                          color: 'var(--text-muted)',
                        }}>
                          {study.industry}
                        </span>
                      </div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}>
                        {study.headline}
                      </h3>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem',
                    marginBottom: '2.5rem',
                  }}>
                    <div>
                      <h4 style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--ember-red)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '0.75rem',
                      }}>
                        The Challenge
                      </h4>
                      <p style={{
                        fontSize: '0.9375rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                      }}>
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--ocean-cyan)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '0.75rem',
                      }}>
                        Our Solution
                      </h4>
                      <p style={{
                        fontSize: '0.9375rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                      }}>
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '16px',
                    padding: '2rem',
                    marginBottom: '2rem',
                  }}>
                    <h4 style={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '1.5rem',
                      textAlign: 'center',
                    }}>
                      Results
                    </h4>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '1.5rem',
                    }}>
                      {study.results.map((result) => (
                        <div key={result.label} style={{ textAlign: 'center' }}>
                          <div style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.75rem',
                            fontWeight: 700,
                            background: 'var(--gradient-ember-ocean)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '0.5rem',
                          }}>
                            {result.metric}
                          </div>
                          <div style={{
                            fontSize: '0.8125rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.4,
                          }}>
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                    marginBottom: '2rem',
                  }}>
                    <span style={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      Tech:
                    </span>
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.375rem 0.875rem',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '100px',
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Read Full Case Study */}
                  <Link
                    href={`/case-studies/${study.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: study.accentColor,
                      textDecoration: 'none',
                      transition: 'gap var(--duration-fast)',
                    }}
                  >
                    Read full case study <ArrowRightIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="cta-section" style={{ marginTop: '4rem' }}>
            <h2>Want Results Like These?</h2>
            <p>Book a free AI audit and we will show you exactly what we can automate in your business</p>
            <Link href="/contact" className="cta-button">
              Book a Free AI Audit <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
