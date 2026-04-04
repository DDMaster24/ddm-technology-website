import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BriefcaseIcon,
  FileTextIcon,
  ClipboardIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  FileSearchIcon,
  BarChartIcon,
  ClockIcon,
  UsersIcon,
  ArrowRightIcon,
  WhatsAppIcon,
  SparklesIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'AI for Law Firms & Accounting South Africa | Professional Services Automation',
  description:
    'AI-powered automation for South African law firms, accounting practices, and consulting firms. Document automation, client intake, SARS compliance, FICA/POPIA, B-BBEE reporting.',
  keywords:
    'AI for law firms South Africa, accounting automation SA, professional services AI, SARS compliance automation, document automation law firm, FICA POPIA compliance AI',
  openGraph: {
    title: 'AI for Law Firms, Accounting & Consulting | DDM Technology',
    description:
      'AI automation for SA professional services. Document automation, client intake, SARS compliance, B-BBEE reporting. Built for law firms, accountants, and consultants.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/industries/professional-services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Law Firms, Accounting & Consulting | DDM Technology',
    description:
      'AI automation for SA professional services. Document automation, client intake, SARS compliance, B-BBEE reporting.',
  },
  alternates: { canonical: '/industries/professional-services' },
}

const painPoints = [
  {
    icon: <FileTextIcon />,
    title: 'Manual Document Processing',
    description:
      'Contracts, affidavits, tax returns, financial statements — all drafted manually or from outdated templates. Hours spent on formatting, cross-referencing, and version control that AI could handle in minutes.',
  },
  {
    icon: <ClockIcon />,
    title: 'Client Intake Bottlenecks',
    description:
      'New client onboarding takes days. FICA documents, engagement letters, conflict checks, and background verification — all manual, all slow, and all keeping billable work waiting.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Compliance Overhead',
    description:
      'SARS submissions, FICA verifications, POPIA consent management, B-BBEE reporting — the compliance burden grows every year while the deadlines get tighter and the penalties steeper.',
  },
  {
    icon: <CalculatorIcon />,
    title: 'Billing & Time Leakage',
    description:
      'Partners and associates forget to log time, billing is done weeks after the work, and WIP reports are always stale. The average SA firm loses 15-20% of billable time to poor tracking.',
  },
]

const features = [
  {
    icon: <FileTextIcon />,
    title: 'Document Automation',
    description:
      'Auto-generate contracts, engagement letters, legal opinions, and financial reports from templates and data. AI drafts, you review — cutting document preparation time by 70%+.',
    color: 'var(--ember-red)',
  },
  {
    icon: <ClipboardIcon />,
    title: 'AI Client Intake',
    description:
      'Digital client onboarding via WhatsApp or web portal. Automated FICA document collection, conflict-of-interest checks, engagement letter generation, and KYC verification — all before the first meeting.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <CalculatorIcon />,
    title: 'Smart Billing & Time Tracking',
    description:
      'AI-powered time capture that learns your billing patterns. Auto-generate invoices, track WIP in real time, send payment reminders via WhatsApp, and integrate with Xero, Sage, and QuickBooks.',
    color: 'var(--ocean-blue)',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Compliance Monitoring',
    description:
      'Automated SARS submission preparation, FICA verification tracking, POPIA consent management, and regulatory deadline alerts. Never miss a filing deadline or compliance requirement again.',
    color: 'var(--ember-crimson)',
  },
  {
    icon: <FileSearchIcon />,
    title: 'Legal & Financial Research AI',
    description:
      'Search across case law, SARS rulings, legislation, and your own document archives using natural language. Find relevant precedents, tax positions, and internal memos in seconds, not hours.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <BarChartIcon />,
    title: 'Reporting & Analytics',
    description:
      'Real-time dashboards for matter profitability, utilisation rates, debtor days, B-BBEE scorecards, and practice performance. Data-driven management decisions instead of quarterly surprises.',
    color: 'var(--ocean-blue)',
  },
]

const caseStudyMetrics = [
  { value: '70%', label: 'Faster Document Drafting' },
  { value: '20+', label: 'Hours/Week Saved on Admin' },
  { value: '100%', label: 'SARS Filing Compliance' },
  { value: '3x', label: 'Faster Client Onboarding' },
]

const saContextCards = [
  {
    icon: <CalculatorIcon />,
    title: 'SARS Compliance',
    description:
      'Automated tax return preparation, provisional tax calculations, VAT201 submissions, and IRP5 reconciliation. Built-in SARS eFiling integration and deadline tracking — so your clients are never late and never penalised.',
    color: 'var(--ember-red)',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'FICA & POPIA',
    description:
      'Automated FICA document collection and verification for client onboarding. Full POPIA consent management with audit trails. Risk-based approach to client due diligence aligned with the FIC Act amendments.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <BarChartIcon />,
    title: 'B-BBEE Reporting',
    description:
      'Automated B-BBEE scorecard tracking, skills development reporting, enterprise development calculations, and preferential procurement analysis. Generate verification-ready reports on demand.',
    color: 'var(--ocean-blue)',
  },
]

const faqs = [
  {
    question: 'How does AI help law firms and accounting practices in South Africa?',
    answer:
      'AI automates the most time-consuming non-billable work: document drafting, client intake, FICA verification, time tracking, billing, and compliance reporting. Law firms use it for contract generation, legal research, and matter management. Accounting firms use it for SARS preparation, financial report generation, and B-BBEE reporting. Most firms save 20+ hours per week on admin.',
  },
  {
    question: 'Can AI draft legal documents and contracts?',
    answer:
      'Yes. Our AI generates first drafts of contracts, engagement letters, legal opinions, and standard correspondence from your approved templates and matter data. It handles variable insertion, clause selection based on deal type, and formatting — you review and approve the final document. Most firms see a 70% reduction in document preparation time.',
  },
  {
    question: 'How does AI handle SARS compliance?',
    answer:
      'The system automates tax return preparation by extracting data from source documents, performing calculations, and populating SARS forms. It tracks all filing deadlines, sends automated reminders to clients for outstanding documents, and integrates with SARS eFiling for submission. Provisional tax, VAT, income tax, and payroll submissions are all supported.',
  },
  {
    question: 'Is client data secure and POPIA compliant?',
    answer:
      'Absolutely. All client data is encrypted at rest and in transit with AES-256 encryption. We implement full POPIA compliance — consent management, data subject access request handling, and breach notification procedures. Attorney-client privilege protections are built in for law firm deployments. Regular security audits and penetration testing are included.',
  },
  {
    question: 'What does professional services AI automation cost?',
    answer:
      'Plans start from R12,000/month for document automation and smart billing for a small practice. Our Professional plan at R22,000/month includes client intake automation, compliance monitoring, and research AI. Enterprise packages for large firms with multiple offices are custom-quoted based on practitioner count and modules required.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most single-office setups are live within 3-4 weeks. We integrate with your existing practice management software — including LegalSuite, CaseWare, Tax Ware, Clio, and Sage — and configure document templates, billing rules, and compliance workflows. Multi-office firms typically take 6-8 weeks with phased deployment.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation for Professional Services',
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
  description:
    'AI-powered automation for South African law firms, accounting practices, and consulting firms. Document automation, client intake, SARS compliance, FICA/POPIA, B-BBEE reporting.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: 'Professional Services AI Automation',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function ProfessionalServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="page-header" style={{ paddingBottom: '5rem' }}>
        <div className="page-header-content" style={{ maxWidth: '800px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'rgba(30, 64, 175, 0.1)',
            border: '1px solid rgba(30, 64, 175, 0.25)',
            borderRadius: '100px',
            fontSize: '0.875rem',
            color: '#1E40AF',
            marginBottom: '1.5rem',
            fontWeight: 600,
          }}>
            <BriefcaseIcon /> Professional Services AI
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            AI for Law Firms, Accountants &{' '}
            <span style={{
              background: 'var(--gradient-ember-ocean)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Consultants
            </span>
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            South African professional services firms lose billable hours to document drafting, manual compliance,
            slow client intake, and outdated billing processes. AI automation handles the admin — so your
            fee-earners can focus on high-value work.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="cta-button">
              Book a Free Professional Services AI Demo <ArrowRightIcon />
            </Link>
            <Link
              href="#case-study"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                background: 'transparent',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                borderRadius: '10px',
                border: '1px solid var(--border-default)',
                transition: 'all var(--duration-fast)',
              }}
            >
              See Our Results
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Challenges Facing SA Professional Services Firms</h2>
          <p className="section-subtitle">
            Non-billable admin is eating your margins and burning out your best people
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {painPoints.map((point) => (
              <div
                key={point.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--ember-red), var(--ember-crimson))',
                }} />
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(220, 38, 38, 0.05))',
                  border: '1px solid rgba(220, 38, 38, 0.25)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ember-red)',
                  marginBottom: '1.25rem',
                }}>
                  {point.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {point.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">AI Solutions for Professional Services</h2>
          <p className="section-subtitle">
            Purpose-built AI tools that automate documents, compliance, billing, and client management
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: `linear-gradient(135deg, ${feature.color}22, ${feature.color}11)`,
                  border: `1px solid ${feature.color}44`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: feature.color,
                  marginBottom: '1.25rem',
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Real Results in SA Professional Services</h2>
          <p className="section-subtitle">
            See how AI transformed operations for a Sandton law firm
          </p>

          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(180deg, #1E40AF, var(--ember-red))',
            }} />

            <div style={{ paddingLeft: '1.5rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.75rem',
                background: 'rgba(30, 64, 175, 0.1)',
                border: '1px solid rgba(30, 64, 175, 0.25)',
                borderRadius: '100px',
                fontSize: '0.8125rem',
                color: '#1E40AF',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}>
                <BriefcaseIcon /> Success Story — Sandton Law Firm
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}>
                From Manual Drafting to AI-Powered Legal Operations
              </h3>

              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                A mid-size Sandton law firm with 12 practitioners was spending over 30% of partner time on
                document drafting, client intake paperwork, and compliance administration. DDM Technology
                deployed document automation, AI client intake, and compliance monitoring — freeing up
                billable hours and eliminating missed deadlines.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}>
                {caseStudyMetrics.map((metric) => (
                  <div key={metric.label} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      background: 'var(--gradient-ember-ocean)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '0.375rem',
                    }}>
                      {metric.value}
                    </div>
                    <div style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <blockquote style={{
                borderLeft: '3px solid #1E40AF',
                paddingLeft: '1.5rem',
                margin: '0 0 2rem 0',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}>
                &ldquo;Our associates used to spend 3 hours drafting a standard commercial lease agreement.
                With DDM&apos;s document automation, the first draft is ready in 10 minutes. The time savings
                on FICA compliance alone paid for the entire system in the first month.&rdquo;
                <br />
                <span style={{
                  fontStyle: 'normal',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  display: 'inline-block',
                  marginTop: '0.75rem',
                }}>
                  — Managing Partner, Sandton Commercial Law Firm
                </span>
              </blockquote>

              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1E40AF',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  transition: 'all var(--duration-fast)',
                }}
              >
                Get similar results for your firm <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SA Context */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Built for South African Professional Services</h2>
          <p className="section-subtitle">
            Not a generic international tool — engineered for SA regulations, compliance, and business realities
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {saContextCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: `linear-gradient(135deg, ${card.color}22, ${card.color}11)`,
                  border: `1px solid ${card.color}44`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: card.color,
                  marginBottom: '1.25rem',
                }}>
                  {card.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about AI automation for law firms, accountants, and consultants
          </p>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {faqs.map((faq) => (
              <div
                key={faq.question}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '1.75rem 2rem',
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {faq.answer}
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
            <h2>Ready to Automate Your Professional Practice?</h2>
            <p>
              Book a free demo and see how AI can draft your documents, automate compliance,
              streamline client intake, and track billing — so your fee-earners can focus on
              high-value work that grows the firm.
            </p>
            <Link href="/contact" className="cta-button">
              Book a Free Professional Services AI Demo <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
