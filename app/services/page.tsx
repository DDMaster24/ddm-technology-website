import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MessageCircleIcon,
  ZapIcon,
  FileSearchIcon,
  MegaphoneIcon,
  CodeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'AI Automation Services',
  description:
    'AI chatbots, workflow automation, document processing, and custom AI development for South African businesses. From strategy to deployment.',
  openGraph: {
    title: 'AI Automation Services | DDM Technology',
    description:
      'Practical AI solutions that save time, cut costs, and scale your SA business. Chatbots, workflow automation, document processing, and more.',
    url: 'https://ddmtech.co.za/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Services | DDM Technology',
    description:
      'Practical AI solutions that save time, cut costs, and scale your SA business.',
  },
  alternates: {
    canonical: '/services',
  },
}

const services = [
  {
    icon: <MessageCircleIcon />,
    title: 'AI Customer Service',
    description:
      'Deploy intelligent chatbots, voice agents, and email responders that handle customer enquiries 24/7 — in any language your customers speak.',
    benefits: [
      'WhatsApp, website, and Facebook chatbots that understand context',
      'AI voice agents for inbound and outbound calls',
      'Smart email triage and auto-responses that sound human',
    ],
    color: 'var(--ember-red)',
  },
  {
    icon: <ZapIcon />,
    title: 'Workflow Automation',
    description:
      'Connect your existing tools — CRM, accounting, email, spreadsheets — with intelligent automation that eliminates manual work and human error.',
    benefits: [
      'n8n, Zapier, and Make integrations tailored to your stack',
      'CRM automation: lead routing, follow-ups, pipeline management',
      'Custom API connections between any systems you use',
    ],
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <FileSearchIcon />,
    title: 'Document Processing',
    description:
      'AI that reads your invoices, contracts, and compliance documents — extracts the data you need and files everything automatically.',
    benefits: [
      'Invoice data extraction and automatic bookkeeping entry',
      'Contract analysis: key terms, expiry dates, risk flags',
      'POPIA compliance automation and audit trail generation',
    ],
    color: 'var(--ocean-blue)',
  },
  {
    icon: <MegaphoneIcon />,
    title: 'AI Sales & Marketing',
    description:
      'Automated lead generation, content creation, and social media management that works around the clock — even when your marketing team is off.',
    benefits: [
      'AI lead qualification and scoring from web, email, and social',
      'Blog posts, social captions, and ad copy generated on brand',
      'Automated posting, scheduling, and engagement tracking',
    ],
    color: 'var(--ember-crimson)',
  },
  {
    icon: <CodeIcon />,
    title: 'Custom AI Development',
    description:
      'When off-the-shelf tools are not enough, we build bespoke AI solutions — custom models, full-stack apps, and API integrations tailored to your exact needs.',
    benefits: [
      'Custom AI models trained on your business data',
      'Full-stack web and mobile applications with AI built in',
      'Third-party API integrations and data pipeline automation',
    ],
    color: 'var(--ocean-cyan)',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation Services',
  provider: {
    '@type': 'Organization',
    name: 'DDM Technology',
    url: 'https://ddmtech.co.za',
  },
  description:
    'AI chatbots, workflow automation, document processing, and custom AI development for South African businesses.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: 'AI Automation',
}

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="page-header">
        <div className="page-header-content">
          <h1>AI Automation Services</h1>
          <p>Practical AI solutions that save time, cut costs, and scale your South African business</p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="services-section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {services.map((service, index) => (
              <div
                key={service.title}
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
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'var(--gradient-ember-ocean)',
                }} />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '3rem',
                  alignItems: 'start',
                }}>
                  {/* Left: Info */}
                  <div>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)`,
                      border: `1px solid ${service.color}44`,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: service.color,
                      marginBottom: '1.5rem',
                    }}>
                      {service.icon}
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '1rem',
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: '1.0625rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      maxWidth: '500px',
                    }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Right: Benefits + CTA */}
                  <div>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '1.25rem',
                    }}>
                      Key Benefits
                    </h4>
                    <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            padding: '0.625rem 0',
                            fontSize: '0.9375rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{
                            flexShrink: 0,
                            width: '20px',
                            height: '20px',
                            color: 'var(--ocean-cyan)',
                            marginTop: '2px',
                          }}>
                            <CheckCircleIcon />
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="cta-button">
                      Get Started <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process section */}
          <div style={{ marginTop: '5rem' }}>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">From audit to deployment in weeks, not months</p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
            }}>
              {[
                { step: '01', title: 'Free AI Audit', desc: 'We analyse your business processes and identify where AI can make the biggest impact.' },
                { step: '02', title: 'Solution Design', desc: 'We design a custom automation strategy with clear ROI projections and timelines.' },
                { step: '03', title: 'Build & Test', desc: 'We build, integrate, and rigorously test your AI systems with your real data.' },
                { step: '04', title: 'Deploy & Optimise', desc: 'We launch, monitor, and continuously improve your automations for peak performance.' },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    background: 'var(--gradient-ember-ocean)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '1rem',
                  }}>
                    {item.step}
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section" style={{ marginTop: '4rem' }}>
            <h2>Ready to Automate?</h2>
            <p>Book a free AI audit and find out exactly how much time and money you could save</p>
            <Link href="/contact" className="cta-button">
              Book a Free AI Audit <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
