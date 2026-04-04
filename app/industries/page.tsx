import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BuildingIcon,
  UtensilsIcon,
  TruckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  WhatsAppIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'AI Automation by Industry | South African Business Solutions',
  description:
    'Industry-specific AI automation solutions for South African businesses. Real estate, restaurants, logistics — custom AI built for how SA industries actually work.',
  keywords:
    'AI automation South Africa, industry AI solutions, business automation SA, AI for South African businesses',
  openGraph: {
    title: 'AI Automation by Industry | DDM Technology',
    description:
      'Industry-specific AI automation for SA businesses. Real estate, restaurants, logistics.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/industries',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation by Industry | DDM Technology',
    description:
      'Industry-specific AI automation for SA businesses.',
  },
  alternates: { canonical: '/industries' },
}

const industries = [
  {
    slug: 'real-estate',
    icon: <BuildingIcon />,
    title: 'Real Estate & Property',
    description:
      'AI chatbots for WhatsApp enquiries, automated property matching, lead qualification, virtual tour scheduling. Built for SA estate agents who lose deals to slow follow-ups.',
    features: [
      '24/7 WhatsApp buyer enquiries',
      'AI property matching',
      'Lead scoring & qualification',
      'Automated follow-ups',
    ],
    result: '20+ hours/week saved for UrbanNest property management',
    linkText: 'Explore Real Estate AI',
    color: 'var(--ember-red)',
    colorHex: '#DC2626',
  },
  {
    slug: 'restaurants',
    icon: <UtensilsIcon />,
    title: 'Restaurants & Food Service',
    description:
      'WhatsApp ordering systems, AI demand prediction, smart inventory management, staff scheduling. Built for SA restaurants drowning in food waste and missed orders.',
    features: [
      'WhatsApp ordering bot',
      'AI demand prediction',
      'Smart inventory management',
      'Staff scheduling AI',
    ],
    result: 'R120K/month saved for Flame & Fork (8 locations)',
    linkText: 'Explore Restaurant AI',
    color: '#F59E0B',
    colorHex: '#F59E0B',
  },
  {
    slug: 'logistics',
    icon: <TruckIcon />,
    title: 'Logistics & Transport',
    description:
      'Fleet tracking, route optimization, document processing, load matching. Built for SA logistics companies fighting rising fuel costs and compliance headaches.',
    features: [
      'AI fleet tracking',
      'Route optimization',
      'Document processing',
      'Load matching platform',
    ],
    result: 'R50M+ in trades processed on MineX platform',
    linkText: 'Explore Logistics AI',
    color: 'var(--ocean-cyan)',
    colorHex: '#0891B2',
  },
]

const whyCards = [
  {
    title: 'Domain Knowledge',
    description:
      "Generic AI doesn't understand property portals, POS systems, or freight logistics. Our solutions are trained on industry-specific data.",
  },
  {
    title: 'SA Context',
    description:
      'Load shedding, WhatsApp-first customers, Rand pricing, POPIA compliance — we build for how SA businesses actually operate.',
  },
  {
    title: 'Proven Results',
    description:
      'Every solution is backed by real case studies from South African businesses. Not theory — tested, deployed, and delivering ROI.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AI Automation by Industry',
  description:
    'Industry-specific AI automation solutions for South African businesses. Real estate, restaurants, logistics.',
  url: 'https://ddmtech.co.za/industries',
  provider: {
    '@type': 'Organization',
    name: 'DDM Technology',
    url: 'https://ddmtech.co.za',
  },
}

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="page-header" style={{ paddingBottom: '5rem' }}>
        <div className="page-header-content">
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
              fontWeight: 600,
              color: 'var(--ocean-cyan)',
              marginBottom: '1.5rem',
            }}
          >
            <SparklesIcon /> Industry-Specific AI
          </div>
          <h1>
            AI Automation Built for{' '}
            <span
              style={{
                background: 'var(--gradient-ember-ocean)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Your Industry
            </span>
          </h1>
          <p>
            Every South African industry has unique challenges. We build AI
            solutions that understand your specific workflows, regulations, and
            customers — not generic one-size-fits-all automation.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contact" className="cta-button">
              Book a Free AI Audit <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Cards Section */}
      <section
        style={{
          background: 'var(--bg-primary)',
          padding: 'clamp(3rem, 6vw, 6rem) 2rem',
        }}
      >
        <div className="container">
          <h2
            className="section-title"
            style={{ marginBottom: '0.75rem' }}
          >
            Choose Your Industry
          </h2>
          <p
            className="section-subtitle"
            style={{ marginBottom: '3rem' }}
          >
            Deep-dive into how AI automation transforms these SA industries
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {industries.map((industry) => (
              <article
                key={industry.slug}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '24px',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--gradient-ember-ocean)',
                  }}
                />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '2rem',
                    alignItems: 'start',
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${industry.colorHex}22, ${industry.colorHex}11)`,
                      border: `1px solid ${industry.colorHex}44`,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: industry.color,
                      fontSize: '1.5rem',
                      flexShrink: 0,
                    }}
                  >
                    {industry.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.75rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '1rem',
                      }}
                    >
                      {industry.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '1.0625rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                        marginBottom: '1.5rem',
                        maxWidth: '600px',
                      }}
                    >
                      {industry.description}
                    </p>

                    {/* Features 2x2 grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0.75rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {industry.features.map((feature) => (
                        <div
                          key={feature}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.625rem',
                            fontSize: '0.9375rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          <span
                            style={{
                              flexShrink: 0,
                              width: '20px',
                              height: '20px',
                              color: 'var(--ocean-cyan)',
                            }}
                          >
                            <CheckCircleIcon />
                          </span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Result highlight */}
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        background: 'var(--gradient-ember-ocean)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {industry.result}
                    </p>

                    {/* Arrow link */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Link
                        href={`/industries/${industry.slug}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: industry.color,
                          textDecoration: 'none',
                          transition: 'gap var(--duration-fast)',
                        }}
                      >
                        {industry.linkText} <ArrowRightIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Section */}
      <section
        style={{
          background:
            'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
          padding: 'clamp(3rem, 6vw, 6rem) 2rem',
        }}
      >
        <div className="container">
          <h2 className="section-title">Why Industry-Specific AI Matters</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              maxWidth: '1100px',
              margin: '2.5rem auto 0',
            }}
          >
            {whyCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Not Sure Which Solution Fits?</h2>
        <p>
          Book a free 30-minute AI audit. We&apos;ll analyse your business,
          identify automation opportunities, and recommend the right solution
          for your industry.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '1.5rem',
          }}
        >
          <Link href="/contact" className="cta-button">
            Book a Free AI Audit <ArrowRightIcon />
          </Link>
          <Link
            href="/ai-readiness"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all var(--duration-normal) var(--ease-out-expo)',
            }}
          >
            Take AI Readiness Quiz <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </>
  )
}
