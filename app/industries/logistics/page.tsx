import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TruckIcon,
  RouteIcon,
  PackageIcon,
  FileTextIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ClockIcon,
  BarChartIcon,
  ZapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeIcon,
  SparklesIcon,
  FuelIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Logistics AI South Africa | Transport & Fleet Automation',
  description:
    'AI-powered logistics automation for South African transport companies. Fleet tracking, route optimization, document processing, load matching. 70% faster operations.',
  keywords:
    'logistics AI South Africa, transport automation, fleet tracking AI, route optimization SA, freight automation South Africa, supply chain AI',
  openGraph: {
    title: 'Logistics AI & Transport Automation | DDM Technology',
    description:
      'AI automation for SA logistics. Fleet tracking, route optimization, document processing. One platform processes R50M+ in trades.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/industries/logistics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logistics AI & Transport Automation | DDM Technology',
    description:
      'AI automation for SA logistics. Fleet tracking, route optimization, document processing.',
  },
  alternates: {
    canonical: '/industries/logistics',
  },
}

const painPoints = [
  {
    icon: <FileTextIcon />,
    title: 'Manual Documentation',
    description:
      'Bills of lading, customs docs, compliance certificates — all paper-based and error-prone. One missing document can hold a shipment at Beitbridge for days.',
  },
  {
    icon: <FuelIcon />,
    title: 'Route Inefficiency',
    description:
      'Fuel costs rising, unoptimized routes bleeding margins, and load shedding disrupting cold chain logistics across Gauteng and the Western Cape.',
  },
  {
    icon: <ClockIcon />,
    title: 'Load Matching Delays',
    description:
      'Empty return trips, hours spent finding backloads, and margin erosion on every run. Trucks driving empty on the N1 back from Durban is money burned.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Compliance Bottlenecks',
    description:
      'SARS docs, cross-border permits, BBBEE certificates — 3+ days just for paperwork. Manual compliance tracking means missed deadlines and penalties.',
  },
]

const solutions = [
  {
    icon: <TruckIcon />,
    title: 'AI Fleet Tracking',
    description:
      'Real-time GPS tracking, driver behaviour monitoring, fuel consumption analytics, and predictive maintenance alerts. Know where every vehicle is and how it is performing.',
    color: 'var(--ember-red)',
  },
  {
    icon: <RouteIcon />,
    title: 'Route Optimization',
    description:
      'AI-optimized routes using real-time traffic, weather data, and road conditions. Fuel savings of 15-25%, plus load shedding-aware routing for cold chain logistics.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <FileTextIcon />,
    title: 'Document Processing AI',
    description:
      'Auto-extract data from bills of lading, customs documents, invoices, and compliance certificates. Seconds instead of hours, with 95%+ accuracy.',
    color: 'var(--ocean-blue)',
  },
  {
    icon: <PackageIcon />,
    title: 'Load Matching Platform',
    description:
      'AI matches available loads to trucks in real time. Reduce empty return trips, maximize revenue per kilometre, and fill capacity on every route.',
    color: 'var(--ember-crimson)',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Compliance Automation',
    description:
      'Auto-generate SARS documents, track permit expiry dates, automate BBBEE reporting, and maintain audit-ready records. From 3 days to 2 hours.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <BarChartIcon />,
    title: 'Supply Chain Analytics',
    description:
      'End-to-end supply chain visibility, bottleneck detection, cost optimization, and predictive demand forecasting. Data-driven decisions for every route.',
    color: 'var(--ocean-blue)',
  },
]

const saContextCards = [
  {
    icon: <ZapIcon />,
    title: 'Load Shedding Resilience',
    description:
      'Cloud-based systems with offline sync capabilities. Generator-aware scheduling ensures your fleet operations continue uninterrupted during stage 4, 5, or 6.',
    color: 'var(--ember-red)',
  },
  {
    icon: <GlobeIcon />,
    title: 'Cross-Border Intelligence',
    description:
      'Built for SADC trade corridors. Real-time Beitbridge and Lebombo border queue insights, customs pre-clearance automation, and cross-border permit tracking.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <MapPinIcon />,
    title: 'Rand-Based Pricing',
    description:
      'All pricing in ZAR — no dollar conversions or hidden forex fees. Local payment integration, VAT-compliant invoicing, and SARS-ready financial reporting.',
    color: 'var(--ocean-blue)',
  },
]

const caseStudyMetrics = [
  { value: '70%', label: 'Faster Trade Matching' },
  { value: '3 days → 2hrs', label: 'Compliance Processing' },
  { value: 'R50M+', label: 'Trades Processed' },
  { value: '5', label: 'Integrated Systems' },
]

const faqs = [
  {
    question: 'How does AI help logistics companies in South Africa?',
    answer:
      'AI transforms SA logistics operations through automated fleet tracking, intelligent route optimization that accounts for local road conditions, document processing that eliminates manual data entry, and load matching that reduces empty return trips. Most companies see 30-70% efficiency improvements within the first 3 months.',
  },
  {
    question: 'Can AI optimize routes for SA road conditions?',
    answer:
      'Yes. Our AI uses real-time traffic data for major corridors like the N1 and N3, weather conditions, road closures, and even load shedding schedules to optimize routes. It factors in toll costs, fuel station locations, and rest stop requirements for long-haul routes between Johannesburg, Durban, and Cape Town.',
  },
  {
    question: 'How does AI document processing work?',
    answer:
      'Our AI uses OCR combined with intelligent extraction to process bills of lading, customs documents, invoices, and compliance certificates. It achieves 95%+ accuracy, processing documents in seconds rather than hours. The system learns from corrections and improves over time.',
  },
  {
    question: 'What does logistics AI automation cost?',
    answer:
      'Fleet tracking and route optimization starts from R15,000/month for small to mid-size fleets. Document processing automation is available from R12,000/month. Custom platforms like MineX are project-based — typically R250,000-R800,000 depending on scope and integrations required.',
  },
  {
    question: 'Does it integrate with existing fleet management systems?',
    answer:
      'Yes. We integrate with popular SA fleet management platforms including Ctrack, MiX Telematics, and Netstar, as well as ERP systems like SAP, Sage, and Syspro. API-based integration means your existing data flows seamlessly into the AI layer.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Implementation typically takes 4-8 weeks depending on scope. We follow a phased rollout approach — starting with your highest-impact area (usually document processing or route optimization), then expanding. Full training for your team is included in every engagement.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation for Logistics & Transport',
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
    'AI-powered logistics and transport automation for South African companies. Fleet tracking, route optimization, document processing, load matching.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: 'Logistics AI Automation',
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

export default function LogisticsPage() {
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
            background: 'rgba(8, 145, 178, 0.1)',
            border: '1px solid rgba(8, 145, 178, 0.25)',
            borderRadius: '100px',
            fontSize: '0.875rem',
            color: 'var(--ocean-cyan)',
            marginBottom: '1.5rem',
            fontWeight: 600,
          }}>
            <TruckIcon /> Logistics AI Automation
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            AI-Powered Logistics{' '}
            <span style={{
              background: 'var(--gradient-ember-ocean)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              That Moves South Africa
            </span>
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            South African logistics faces rising fuel costs, border delays, compliance headaches,
            and manual processes that drain margins. AI automation changes everything — from fleet
            tracking to document processing.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="cta-button">
              Book a Free Logistics AI Demo <ArrowRightIcon />
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
          <h2 className="section-title">Challenges Facing SA Logistics Companies</h2>
          <p className="section-subtitle">
            Manual processes, rising costs, and compliance complexity are holding back growth
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
          <h2 className="section-title">AI Solutions for Every Logistics Challenge</h2>
          <p className="section-subtitle">
            Purpose-built AI tools that automate fleet operations, route planning, and compliance
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {solutions.map((solution) => (
              <div
                key={solution.title}
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
                  background: `linear-gradient(135deg, ${solution.color}22, ${solution.color}11)`,
                  border: `1px solid ${solution.color}44`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: solution.color,
                  marginBottom: '1.25rem',
                }}>
                  {solution.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {solution.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Real Results in SA Logistics</h2>
          <p className="section-subtitle">
            See how AI transformed operations for a South African commodity trading platform
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
              background: 'linear-gradient(180deg, var(--ember-red), var(--ocean-blue))',
            }} />

            <div style={{ paddingLeft: '1.5rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.75rem',
                background: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                borderRadius: '100px',
                fontSize: '0.8125rem',
                color: 'var(--ember-red)',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}>
                <SparklesIcon /> Case Study: MineX
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}>
                AI-Powered Coal Trading & Logistics Platform
              </h3>

              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                We built an AI trade matching engine with real-time pricing, automated documentation,
                and logistics coordination for a South African coal trading company. The platform processes
                over R50M in trades, connecting buyers and sellers across the supply chain with full
                compliance automation.
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

              <Link
                href="/case-studies/minex"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--ocean-cyan)',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  transition: 'all var(--duration-fast)',
                }}
              >
                Read the full case study <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SA Context */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Built for South African Logistics</h2>
          <p className="section-subtitle">
            Not a generic international tool — engineered for SA roads, regulations, and realities
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
            Common questions about AI automation for logistics and transport in South Africa
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
            <h2>Ready to Automate Your Logistics?</h2>
            <p>
              Book a free demo and see how AI can optimize your fleet operations,
              eliminate manual paperwork, and cut costs across your supply chain.
            </p>
            <Link href="/contact" className="cta-button">
              Book a Free Logistics AI Demo <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
