'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ZapIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@/components/Icons'

const tiers = [
  {
    name: 'Starter',
    monthlyPrice: 8000,
    description: 'Perfect for small businesses starting with one AI automation.',
    features: [
      'WhatsApp AI chatbot OR workflow automation',
      '1 system integration',
      'Up to 500 conversations/month',
      'Basic analytics dashboard',
      'Email support (48hr SLA)',
      'Monthly performance report',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    monthlyPrice: 15000,
    description: 'Advanced AI stack for growing businesses that want real results.',
    features: [
      'WhatsApp AI chatbot + workflow automation',
      'AI-powered lead generation',
      '5 system integrations',
      'Up to 2,500 conversations/month',
      'Advanced analytics & reporting',
      'Priority support (12hr SLA)',
      'Monthly strategy call',
      'Multilingual support',
    ],
    highlighted: true,
    cta: 'Start Free Consultation',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 30000,
    description: 'Full AI transformation with dedicated support and custom development.',
    features: [
      'Full AI automation suite',
      'Unlimited integrations',
      'Unlimited conversations',
      'Custom AI model training',
      'Dedicated account manager',
      'Custom development hours',
      'SLA guarantee (4hr response)',
      'Multi-department routing',
      'White-label options',
      'Quarterly business reviews',
    ],
    highlighted: false,
    cta: 'Contact Sales',
    isCustom: true,
  },
]

const comparisonFeatures = [
  { name: 'WhatsApp AI Chatbot', starter: true, professional: true, enterprise: true },
  { name: 'Workflow Automation', starter: false, professional: true, enterprise: true },
  { name: 'AI Lead Generation', starter: false, professional: true, enterprise: true },
  { name: 'System Integrations', starter: '1', professional: '5', enterprise: 'Unlimited' },
  { name: 'Conversations/Month', starter: '500', professional: '2,500', enterprise: 'Unlimited' },
  { name: 'Analytics Dashboard', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
  { name: 'Multilingual Support', starter: false, professional: true, enterprise: true },
  { name: 'CRM Integration', starter: false, professional: true, enterprise: true },
  { name: 'Appointment Booking', starter: true, professional: true, enterprise: true },
  { name: 'Custom AI Training', starter: false, professional: false, enterprise: true },
  { name: 'Multi-department Routing', starter: false, professional: false, enterprise: true },
  { name: 'White-label Options', starter: false, professional: false, enterprise: true },
  { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
  { name: 'SLA Guarantee', starter: false, professional: false, enterprise: true },
  { name: 'Support Response Time', starter: '48hr', professional: '12hr', enterprise: '4hr' },
  { name: 'Strategy Calls', starter: false, professional: 'Monthly', enterprise: 'Bi-weekly' },
]

const addOns = [
  {
    name: 'Custom Chatbot Training',
    price: 'R3,000',
    period: 'once-off',
    description: 'Train your AI chatbot on custom data, product catalogues, or specialised knowledge bases.',
  },
  {
    name: 'Additional Workflow',
    price: 'R2,500',
    period: '/mo each',
    description: 'Add extra automated workflows — invoice processing, stock alerts, HR onboarding, and more.',
  },
  {
    name: 'SEO Content Package',
    price: 'R5,000',
    period: '/mo',
    description: '4 SEO-optimised blog posts, keyword research, and Google Search Console monitoring.',
  },
  {
    name: 'Social Media Management',
    price: 'R4,000',
    period: '/mo',
    description: 'AI-assisted content creation, scheduling, and engagement across your social platforms.',
  },
]

const projectPricing = [
  {
    name: 'Website Development',
    price: 'From R15,000',
    description: 'Custom-designed, mobile-responsive websites built with modern technology. Includes SEO setup, analytics, and CMS.',
  },
  {
    name: 'Web Application',
    price: 'From R40,000',
    description: 'Full-stack web applications with user authentication, databases, APIs, and admin dashboards.',
  },
  {
    name: 'AI Integration Consulting',
    price: 'R2,500/hour',
    description: 'Expert consulting on AI strategy, tool selection, implementation planning, and team training.',
  },
]

const faqs = [
  {
    question: 'What contract length is required?',
    answer:
      'Our standard agreement is month-to-month with a 3-month minimum commitment. This gives us enough time to set up, train, and optimise your AI systems for real results. After that, you can cancel with 30 days notice.',
  },
  {
    question: 'What is included in the setup?',
    answer:
      'All plans include a free AI audit of your current processes, system design, build, testing, deployment, and onboarding training for your team. There are no hidden setup fees — the monthly price is all-inclusive.',
  },
  {
    question: 'Are there any setup fees?',
    answer:
      'No. Setup, onboarding, and initial training are included in all plans at no extra cost. We invest in getting your systems right from day one because your success is our success.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer:
      'Yes. You can move between plans at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle. We will always recommend the right plan for your current needs.',
  },
  {
    question: 'Do prices include VAT?',
    answer:
      'All prices shown are exclusive of VAT. VAT at 15% will be added to your invoice as required by SARS. You will receive a proper tax invoice each month.',
  },
  {
    question: 'What happens if I cancel?',
    answer:
      'You can cancel with 30 days written notice after the minimum commitment period. We will export your data and provide a full handover. There are no cancellation penalties or hidden exit fees.',
  },
  {
    question: 'How does annual billing work?',
    answer:
      'Annual billing gives you 2 months free (approximately 15% savings). You pay for 10 months upfront and get 12 months of service. Annual plans can be paid via EFT or card.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept EFT (bank transfer), credit/debit card, and PayFast. All invoices are issued in South African Rand (ZAR). We send invoices on the 1st of each month with 7 days payment terms.',
  },
]

function formatPrice(amount: number): string {
  return `R${amount.toLocaleString('en-ZA')}`
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const getPrice = (monthlyPrice: number) => {
    if (isAnnual) {
      const annualMonthly = Math.round((monthlyPrice * 10) / 12)
      return formatPrice(annualMonthly)
    }
    return formatPrice(monthlyPrice)
  }

  const getAnnualTotal = (monthlyPrice: number) => {
    return formatPrice(monthlyPrice * 10)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Automation Services',
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
              'AI automation services for South African businesses. WhatsApp chatbots, workflow automation, lead generation, and custom AI development.',
            areaServed: {
              '@type': 'Country',
              name: 'South Africa',
            },
            serviceType: 'AI Automation',
            offers: tiers.map((tier) => ({
              '@type': 'Offer',
              name: tier.name,
              price: tier.monthlyPrice.toString(),
              priceCurrency: 'ZAR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: tier.monthlyPrice.toString(),
                priceCurrency: 'ZAR',
                unitCode: 'MON',
                billingDuration: 'P1M',
              },
              description: tier.description,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      {/* Hero */}
      <section className="page-header" style={{ paddingBottom: '4rem' }}>
        <div className="page-header-content" style={{ maxWidth: '800px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(220, 38, 38, 0.1)',
              border: '1px solid rgba(220, 38, 38, 0.25)',
              borderRadius: '100px',
              fontSize: '0.875rem',
              color: 'var(--ember-red)',
              marginBottom: '1.5rem',
              fontWeight: 600,
            }}
          >
            <ZapIcon /> No Hidden Fees
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Transparent Pricing for{' '}
            <span
              style={{
                background: 'var(--gradient-ember-ocean)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Real Results
            </span>
          </h1>
          <p
            style={{
              fontSize: '1.1875rem',
              lineHeight: 1.7,
              maxWidth: '650px',
              margin: '0 auto 2rem',
              color: 'var(--text-secondary)',
            }}
          >
            All prices in South African Rand. No setup fees, no surprises.
            Choose a plan that fits your business and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <span
              style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: !isAnnual ? 'var(--text-primary)' : 'var(--text-muted)',
                transition: 'color var(--duration-fast)',
              }}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
              style={{
                position: 'relative',
                width: '56px',
                height: '30px',
                background: isAnnual
                  ? 'var(--gradient-ember-ocean)'
                  : 'var(--bg-tertiary)',
                border: `1px solid ${isAnnual ? 'transparent' : 'var(--border-default)'}`,
                borderRadius: '100px',
                cursor: 'pointer',
                transition: 'all var(--duration-fast)',
                padding: 0,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '3px',
                  left: isAnnual ? '29px' : '3px',
                  width: '22px',
                  height: '22px',
                  background: 'white',
                  borderRadius: '50%',
                  transition: 'left var(--duration-fast) var(--ease-out-expo)',
                }}
              />
            </button>
            <span
              style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: isAnnual ? 'var(--text-primary)' : 'var(--text-muted)',
                transition: 'color var(--duration-fast)',
              }}
            >
              Annual
            </span>
            {isAnnual && (
              <span
                style={{
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(13, 148, 136, 0.15)',
                  border: '1px solid rgba(13, 148, 136, 0.3)',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--ocean-teal)',
                  letterSpacing: '0.03em',
                }}
              >
                2 MONTHS FREE
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section style={{ background: 'var(--bg-primary)', paddingTop: '2rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.highlighted
                    ? 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-card))'
                    : 'var(--bg-card)',
                  border: `1px solid ${tier.highlighted ? 'rgba(220, 38, 38, 0.4)' : 'var(--border-subtle)'}`,
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column' as const,
                  position: 'relative' as const,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: tier.highlighted ? 'scale(1.03)' : 'scale(1)',
                }}
              >
                {tier.highlighted && (
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
                )}
                {tier.highlighted && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.25rem 0.75rem',
                      background: 'var(--gradient-ember-ocean)',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'white',
                      letterSpacing: '0.05em',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {tier.name}
                </h3>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.25rem',
                      fontWeight: 700,
                      background: 'var(--gradient-ember-ocean)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {tier.isCustom ? 'R30,000+' : getPrice(tier.monthlyPrice)}
                  </span>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    /month
                  </span>
                </div>
                {isAnnual && !tier.isCustom && (
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--ocean-teal)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {getAnnualTotal(tier.monthlyPrice)}/year — save{' '}
                    {formatPrice(tier.monthlyPrice * 2)}
                  </p>
                )}
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {tier.description}
                </p>
                <ul style={{ listStyle: 'none', flex: 1, marginBottom: '2rem' }}>
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.375rem 0',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: '18px',
                          height: '18px',
                          color: 'var(--ocean-cyan)',
                          marginTop: '1px',
                        }}
                      >
                        <CheckCircleIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ai-services/contact"
                  className={tier.highlighted ? 'cta-button' : 'btn btn-secondary'}
                  style={{ textAlign: 'center', justifyContent: 'center' }}
                >
                  {tier.cta} {tier.highlighted && <ArrowRightIcon />}
                </Link>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: 'center',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              marginTop: '2rem',
            }}
          >
            All prices exclusive of VAT (15%). Prices in South African Rand
            (ZAR).
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section
        style={{
          background:
            'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        }}
      >
        <div className="container">
          <h2 className="section-title">Compare Plans</h2>
          <p className="section-subtitle">
            See exactly what is included in each plan
          </p>

          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              overflowX: 'auto',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.9375rem',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '1rem 1.25rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                      fontSize: '0.8125rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '1px solid var(--border-default)',
                    }}
                  >
                    Feature
                  </th>
                  {['Starter', 'Professional', 'Enterprise'].map((name) => (
                    <th
                      key={name}
                      style={{
                        textAlign: 'center',
                        padding: '1rem 1.25rem',
                        color:
                          name === 'Professional'
                            ? 'var(--ember-red)'
                            : 'var(--text-primary)',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        borderBottom: '1px solid var(--border-default)',
                      }}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr
                    key={feature.name}
                    style={{
                      background:
                        i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <td
                      style={{
                        padding: '0.875rem 1.25rem',
                        color: 'var(--text-secondary)',
                        borderBottom: '1px solid var(--border-subtle)',
                      }}
                    >
                      {feature.name}
                    </td>
                    {(
                      ['starter', 'professional', 'enterprise'] as const
                    ).map((tier) => {
                      const val = feature[tier]
                      return (
                        <td
                          key={tier}
                          style={{
                            textAlign: 'center',
                            padding: '0.875rem 1.25rem',
                            borderBottom: '1px solid var(--border-subtle)',
                            color:
                              val === true
                                ? 'var(--ocean-cyan)'
                                : val === false
                                  ? 'var(--text-dim)'
                                  : 'var(--text-secondary)',
                          }}
                        >
                          {val === true ? (
                            <span
                              style={{
                                display: 'inline-flex',
                                width: '20px',
                                height: '20px',
                              }}
                            >
                              <CheckCircleIcon />
                            </span>
                          ) : val === false ? (
                            <span style={{ fontSize: '1.25rem' }}>—</span>
                          ) : (
                            <span style={{ fontWeight: 500 }}>
                              {val}
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Add-Ons</h2>
          <p className="section-subtitle">
            Enhance any plan with individual services
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {addOns.map((addon) => (
              <div
                key={addon.name}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem 1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background:
                      'linear-gradient(90deg, var(--ocean-cyan), var(--ocean-blue))',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {addon.name}
                </h3>
                <div style={{ marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--ocean-cyan)',
                    }}
                  >
                    {addon.price}
                  </span>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      marginLeft: '0.25rem',
                    }}
                  >
                    {addon.period}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Project Pricing */}
      <section
        style={{
          background:
            'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        }}
      >
        <div className="container">
          <h2 className="section-title">One-Time Project Pricing</h2>
          <p className="section-subtitle">
            Custom development and consulting for once-off projects
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {projectPricing.map((project) => (
              <div
                key={project.name}
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
                    width: '48px',
                    height: '48px',
                    background:
                      'linear-gradient(135deg, rgba(30, 64, 175, 0.15), rgba(8, 145, 178, 0.1))',
                    border: '1px solid rgba(30, 64, 175, 0.25)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--ocean-blue)',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <SparklesIcon />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {project.name}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    background: 'var(--gradient-ember-ocean)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '1rem',
                  }}
                >
                  {project.price}
                </div>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Pricing FAQs</h2>
          <p className="section-subtitle">
            Common questions about our pricing and billing
          </p>

          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}
          >
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
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background:
            'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        }}
      >
        <div className="container">
          <div className="cta-section">
            <div
              style={{
                width: '56px',
                height: '56px',
                background:
                  'linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(30, 64, 175, 0.15))',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ember-red)',
                margin: '0 auto 1.5rem',
              }}
            >
              <ShieldCheckIcon />
            </div>
            <h2>Not Sure Which Plan Is Right for You?</h2>
            <p>
              Book a free 30-minute consultation. We will audit your current
              processes and recommend the best plan for your business — no
              pressure, no obligation.
            </p>
            <Link href="/ai-services/contact" className="cta-button">
              Book a Free Consultation <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
