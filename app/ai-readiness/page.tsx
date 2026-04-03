import type { Metadata } from 'next'
import Link from 'next/link'
import {
  SparklesIcon,
  ClockIcon,
  ShieldCheckIcon,
  BarChartIcon,
  ArrowRightIcon,
} from '@/components/Icons'
import AIReadinessQuiz from './AIReadinessQuiz'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment | Free Quiz for SA Businesses',
  description:
    'Take our free 2-minute AI readiness assessment and discover how AI automation can save your South African business time and money. Get a personalised AI score and recommendations.',
  keywords:
    'AI readiness assessment South Africa, AI automation quiz, business AI score, AI readiness test, AI automation South Africa, business automation assessment Johannesburg',
  openGraph: {
    title: 'AI Readiness Assessment | DDM Technology',
    description:
      'How ready is your business for AI? Take our free 2-minute assessment and get personalised automation recommendations for your SA business.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/ai-readiness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Readiness Assessment | DDM Technology',
    description:
      'How ready is your business for AI? Free 2-minute quiz with personalised recommendations.',
  },
  alternates: {
    canonical: '/ai-readiness',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'AI Readiness Assessment for South African Businesses',
  description:
    'A free assessment tool that evaluates how ready your business is for AI automation and provides personalised recommendations.',
  educationalLevel: 'beginner',
  provider: {
    '@type': 'Organization',
    name: 'DDM Technology',
    url: 'https://ddmtech.co.za',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roodepoort',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
  },
  about: {
    '@type': 'Thing',
    name: 'Artificial Intelligence Business Automation',
  },
  numberOfQuestions: 6,
}

const benefits = [
  {
    icon: <ClockIcon />,
    title: '2-Minute Assessment',
    description: '6 quick questions about your business. No signup required.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <BarChartIcon />,
    title: 'Personalised AI Score',
    description: 'Get a score out of 100 based on your specific business profile.',
    color: 'var(--ember-red)',
  },
  {
    icon: <SparklesIcon />,
    title: 'Custom Recommendations',
    description: '3 tailored AI automation recommendations with estimated savings in Rands.',
    color: 'var(--ocean-blue)',
  },
  {
    icon: <ShieldCheckIcon />,
    title: '100% Free & Private',
    description: 'No data stored, no email required. Your answers stay in your browser.',
    color: 'var(--ocean-teal)',
  },
]

export default function AIReadinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="page-header" style={{ paddingBottom: '3rem' }}>
        <div className="page-header-content" style={{ maxWidth: '800px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(8, 145, 178, 0.1)',
              border: '1px solid rgba(8, 145, 178, 0.25)',
              borderRadius: '100px',
              fontSize: '0.875rem',
              color: 'var(--ocean-cyan)',
              marginBottom: '1.5rem',
              fontWeight: 600,
            }}
          >
            <SparklesIcon /> Free AI Assessment
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            How Ready Is Your Business for{' '}
            <span
              style={{
                background: 'var(--gradient-ember-ocean)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI Automation?
            </span>
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              maxWidth: '650px',
              margin: '0 auto 0',
            }}
          >
            Answer 6 quick questions and get your personalised AI readiness score, tailored
            automation recommendations, and estimated savings &mdash; in under 2 minutes.
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section style={{ background: 'var(--bg-primary)', paddingTop: '0', paddingBottom: '4rem' }}>
        <AIReadinessQuiz />
      </section>

      {/* Benefits */}
      <section
        style={{
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        }}
      >
        <div className="container">
          <h2 className="section-title">Why Take This Assessment?</h2>
          <p className="section-subtitle">
            Built specifically for South African businesses exploring AI automation
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
            }}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: `linear-gradient(135deg, ${benefit.color}22, ${benefit.color}11)`,
                    border: `1px solid ${benefit.color}44`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: benefit.color,
                    margin: '0 auto 1.25rem',
                  }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="cta-section">
            <h2>Prefer to Talk to a Human?</h2>
            <p>
              Skip the quiz and book a free AI consultation directly. We&apos;ll assess your
              business in person and build a custom automation roadmap &mdash; no obligation.
            </p>
            <Link href="/contact" className="cta-button">
              Book Free Consultation <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
