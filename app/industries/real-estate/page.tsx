import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BuildingIcon,
  HomeIcon,
  SearchIcon,
  KeyIcon,
  MessageCircleIcon,
  SparklesIcon,
  ClockIcon,
  UsersIcon,
  ZapIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BarChartIcon,
  CameraIcon,
  ShieldCheckIcon,
  WhatsAppIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'AI for Estate Agents South Africa | Real Estate Automation',
  description:
    'AI-powered automation for South African estate agents. WhatsApp chatbots, property matching, lead qualification, virtual tours. Save 20+ hours/week. From R8,000/month.',
  keywords:
    'AI for estate agents South Africa, real estate automation, property AI chatbot, WhatsApp estate agent bot, real estate lead qualification SA, AI property matching',
  openGraph: {
    title: 'AI for Estate Agents | DDM Technology',
    description:
      'AI automation built for SA estate agents. WhatsApp chatbots, property matching, lead qualification. Save 20+ hours/week.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/industries/real-estate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Estate Agents | DDM Technology',
    description:
      'AI automation built for SA estate agents. WhatsApp chatbots, property matching, lead qualification.',
  },
  alternates: {
    canonical: '/industries/real-estate',
  },
}

const painPoints = [
  {
    icon: <ClockIcon />,
    title: 'Missed After-Hours Leads',
    description:
      'WhatsApp enquiries come in at 9pm, over weekends, and on public holidays. By the time you reply on Monday, the buyer has already contacted three other agents.',
  },
  {
    icon: <SearchIcon />,
    title: 'Manual Property Matching',
    description:
      'You spend hours scrolling through listings trying to match buyers to properties. Meanwhile, the perfect match sits in your database unseen.',
  },
  {
    icon: <ZapIcon />,
    title: 'Slow Follow-Ups Losing Deals',
    description:
      'Hot leads go cold when follow-ups take days. The agent who responds first wins the mandate — and right now, that is not you.',
  },
]

const features = [
  {
    icon: <WhatsAppIcon />,
    title: 'WhatsApp AI Chatbot',
    description:
      'Handle buyer and seller enquiries 24/7 on WhatsApp. Instant responses to property questions, qualify leads automatically, and never miss another after-hours enquiry.',
    color: 'var(--ember-red)',
  },
  {
    icon: <SearchIcon />,
    title: 'AI Property Matching',
    description:
      'Automatically match buyers to listings based on budget, preferred area, number of bedrooms, and features. Instant notifications when new matches land.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <BarChartIcon />,
    title: 'Lead Qualification & Scoring',
    description:
      'Auto-score every lead based on budget, timeline, and engagement. Prioritise hot buyers, deprioritise tyre-kickers, and integrate directly with your CRM.',
    color: 'var(--ocean-blue)',
  },
  {
    icon: <CameraIcon />,
    title: 'Virtual Tour AI',
    description:
      'Generate compelling property descriptions from photos, schedule 360-degree virtual tours, and share tour links instantly via WhatsApp to interested buyers.',
    color: 'var(--ember-crimson)',
  },
  {
    icon: <MessageCircleIcon />,
    title: 'Automated Follow-Ups',
    description:
      'Set up drip campaigns, viewing reminders, and market update messages via WhatsApp. Keep buyers engaged without lifting a finger.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <SparklesIcon />,
    title: 'Market Analytics',
    description:
      'Track area pricing trends, stock movement, days on market, and competitive intelligence. Make data-driven decisions about pricing and mandates.',
    color: 'var(--ocean-blue)',
  },
]

const faqs = [
  {
    question: 'How does AI help estate agents in South Africa?',
    answer:
      'AI automates the most time-consuming parts of an estate agent\'s day. A WhatsApp chatbot handles after-hours enquiries instantly, AI property matching connects buyers to listings automatically, and lead qualification scores every enquiry so you focus on serious buyers. Most SA agents save 20+ hours per week.',
  },
  {
    question: 'Can the AI chatbot handle property enquiries on WhatsApp?',
    answer:
      'Yes. The chatbot responds 24/7 on WhatsApp — sharing property details, photos, pricing, and availability. It can book viewings, answer questions about specific listings, and qualify buyers before handing them to you. All without you touching your phone.',
  },
  {
    question: 'How does AI property matching work?',
    answer:
      'Buyers submit their criteria — budget, area, bedrooms, features — via WhatsApp or a web form. The AI matches them against your active listings in real time and sends instant notifications when a new property fits. No more manual searching through spreadsheets.',
  },
  {
    question: 'What does it cost for real estate AI automation?',
    answer:
      'Plans start from R8,000/month for a basic WhatsApp chatbot and property matching. Our Professional plan at R15,000/month includes lead scoring, CRM integration, and automated follow-ups. Enterprise packages for larger agencies are available from R30,000/month.',
  },
  {
    question: 'Will AI work during load shedding?',
    answer:
      'Absolutely. Our AI systems are 100% cloud-based, hosted on international servers that are not affected by load shedding. Your chatbot continues responding to buyers and matching properties even when the power is out. All your buyers need is mobile data.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most estate agencies are live within 2-3 weeks. We integrate with Property24, Private Property, and your private listings database. The process includes an audit, custom bot training on your listings, and a full launch with ongoing support.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation for Estate Agents',
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
    'AI-powered automation for South African estate agents. WhatsApp chatbots, property matching, lead qualification, and virtual tour automation.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: 'Real Estate AI Automation',
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

export default function RealEstateIndustryPage() {
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
            <HomeIcon /> Real Estate AI Automation
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            AI That Helps Estate Agents{' '}
            <span style={{
              background: 'var(--gradient-ember-ocean)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Close More Deals
            </span>
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            South African estate agents lose deals every day to slow responses and manual processes.
            Our AI automation handles WhatsApp enquiries 24/7, matches buyers to properties instantly,
            and qualifies leads — so you can focus on closing.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="cta-button">
              Book a Free Real Estate AI Demo <ArrowRightIcon />
            </Link>
            <Link
              href="#how-it-works"
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
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Challenges SA Estate Agents Face</h2>
          <p className="section-subtitle">
            If you are still running your agency on manual processes, you are leaving deals on the table
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
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
          <h2 className="section-title">AI Solutions Built for Estate Agents</h2>
          <p className="section-subtitle">
            Everything you need to automate your agency and win more mandates
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

      {/* Case Study Reference */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Proven Results in Property Management</h2>
          <p className="section-subtitle">
            See how AI transformed operations for a South African property business
          </p>

          <div style={{
            maxWidth: '800px',
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
              bottom: 0,
              left: 0,
              width: '4px',
              background: 'var(--gradient-ember-ocean)',
            }} />
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0.875rem',
              background: 'rgba(8, 145, 178, 0.1)',
              border: '1px solid rgba(8, 145, 178, 0.25)',
              borderRadius: '100px',
              fontSize: '0.8125rem',
              color: 'var(--ocean-cyan)',
              marginBottom: '1.25rem',
              fontWeight: 600,
            }}>
              <BuildingIcon /> Case Study: UrbanNest
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              UrbanNest Property Management
            </h3>
            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}>
              UrbanNest was drowning in tenant queries, manual rent collection, and maintenance requests.
              We deployed AI automation across their WhatsApp, CRM, and payment systems — and the results
              speak for themselves.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              marginBottom: '1.5rem',
            }}>
              {[
                { stat: '20+', label: 'Hours/week saved' },
                { stat: '90%', label: 'Queries handled by AI' },
                { stat: '68% to 95%', label: 'On-time rent collections' },
              ].map((item) => (
                <div key={item.label} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    background: 'var(--gradient-ember-ocean)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.25rem',
                  }}>
                    {item.stat}
                  </div>
                  <div style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              fontStyle: 'italic',
            }}>
              We have cold-reached Roodepoort estate agents with these results — the response has been overwhelming.
              Agencies across Gauteng are switching to AI-powered operations.
            </p>
            <Link
              href="/case-studies/urbannest"
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
              Read the full UrbanNest case study <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Live in 2-3 Weeks — Here is How</h2>
          <p className="section-subtitle">
            A simple 3-step process from audit to launch
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {[
              {
                step: '01',
                title: 'Audit',
                desc: 'We analyse your current processes, listings workflow, lead pipeline, and WhatsApp conversations to design the perfect AI system for your agency.',
              },
              {
                step: '02',
                title: 'Build',
                desc: 'We build a custom AI chatbot and property matching engine trained on your active listings, buyer criteria, and brand voice. You review and approve before launch.',
              },
              {
                step: '03',
                title: 'Launch',
                desc: 'Go live on WhatsApp with full integration to Property24, Private Property, and your internal listings. We monitor performance and optimise continuously.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
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
                  background: 'var(--gradient-ember-ocean)',
                }} />
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
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {item.desc}
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
            Everything you need to know about AI automation for estate agents
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
            <h2>Ready to Automate Your Estate Agency?</h2>
            <p>
              Book a free demo and see how AI can handle your WhatsApp enquiries, match buyers to properties,
              and qualify leads — so you can focus on closing deals and winning mandates.
            </p>
            <Link href="/contact" className="cta-button">
              Book a Free Real Estate AI Demo <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
