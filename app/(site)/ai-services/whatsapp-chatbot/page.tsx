import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MessageCircleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  UsersIcon,
  ZapIcon,
  GlobeIcon,
  ShieldCheckIcon,
  BarChartIcon,
  WhatsAppIcon,
  BuildingIcon,
  PhoneIcon,
  SparklesIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'WhatsApp AI Chatbot for South African Businesses',
  description:
    'AI-powered WhatsApp chatbot for South African businesses. 24/7 auto-replies, lead qualification, appointment booking, multilingual support. From R8,000/month.',
  keywords:
    'WhatsApp AI chatbot South Africa, WhatsApp business automation SA, AI WhatsApp bot Johannesburg, WhatsApp chatbot pricing, WhatsApp automation South Africa',
  openGraph: {
    title: 'WhatsApp AI Chatbot | DDM Technology',
    description:
      'AI WhatsApp chatbots that sell while you sleep. 24/7 lead capture, appointment booking, and customer service for SA businesses. Launch in 2 weeks.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/ai-services/whatsapp-chatbot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp AI Chatbot | DDM Technology',
    description:
      'AI WhatsApp chatbots that sell while you sleep. 24/7 lead capture and customer service for SA businesses.',
  },
  alternates: {
    canonical: '/ai-services/whatsapp-chatbot',
  },
}

const painPoints = [
  {
    icon: <ClockIcon />,
    title: 'Missed Leads After Hours',
    description:
      'Enquiries come in at 9pm, weekends, and public holidays. By Monday morning, your prospect has already gone to a competitor who replied instantly.',
  },
  {
    icon: <UsersIcon />,
    title: 'Staff Burnout from Repetitive Questions',
    description:
      'Your team spends hours answering the same questions about pricing, directions, and availability instead of closing deals.',
  },
  {
    icon: <ZapIcon />,
    title: 'Slow Response Times',
    description:
      'Research shows 78% of customers buy from the first business that responds. If you take longer than 5 minutes, you have already lost the sale.',
  },
]

const features = [
  {
    icon: <ClockIcon />,
    title: '24/7 Instant Auto-Replies',
    description: 'Never miss another lead. Your AI chatbot responds within seconds, day or night, weekends and public holidays included.',
    color: 'var(--ember-red)',
  },
  {
    icon: <SparklesIcon />,
    title: 'Intelligent Lead Qualification',
    description: 'Automatically qualify leads by asking the right questions, scoring interest, and routing hot prospects straight to your sales team.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <PhoneIcon />,
    title: 'Appointment Booking',
    description: 'Let customers book consultations, viewings, or appointments directly in WhatsApp. Syncs with Google Calendar, Calendly, and more.',
    color: 'var(--ocean-blue)',
  },
  {
    icon: <MessageCircleIcon />,
    title: 'FAQ Handling',
    description: 'Train your bot on your business info — pricing, hours, directions, product details. It handles 80%+ of questions without human intervention.',
    color: 'var(--ember-crimson)',
  },
  {
    icon: <GlobeIcon />,
    title: 'Multilingual Support',
    description: 'Speak to customers in English, Afrikaans, Zulu, Sotho, and more. The AI auto-detects language and responds naturally.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Payment Collection',
    description: 'Send payment links, quotes, and invoices directly via WhatsApp. Integrates with Yoco, PayFast, and standard EFT flows.',
    color: 'var(--ocean-blue)',
  },
]

const useCases = [
  {
    icon: <BuildingIcon />,
    title: 'Estate Agents',
    description: 'Qualify buyers 24/7, share property listings, and book viewings automatically. Stop losing leads to agents who reply faster.',
  },
  {
    icon: <UsersIcon />,
    title: 'Dental & Medical Practices',
    description: 'Handle appointment bookings, send reminders, answer insurance queries, and reduce no-shows by up to 40%.',
  },
  {
    icon: <PhoneIcon />,
    title: 'Restaurants & Hospitality',
    description: 'Take reservations, share menus, handle dietary queries, and upsell specials — all on WhatsApp, the channel your customers already use.',
  },
  {
    icon: <ZapIcon />,
    title: 'E-Commerce',
    description: 'Send order confirmations, tracking updates, answer product questions, and recover abandoned carts via WhatsApp messages.',
  },
  {
    icon: <BarChartIcon />,
    title: 'Professional Services',
    description: 'Lawyers, accountants, consultants — qualify leads, book consultations, share documents, and collect payments seamlessly.',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 'R8,000',
    period: '/month',
    description: 'Perfect for small businesses starting with WhatsApp automation.',
    features: [
      '1 AI chatbot',
      'Basic conversation flows',
      'Up to 500 conversations/month',
      'FAQ handling',
      'Business hours auto-replies',
      'Monthly performance report',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: 'R15,000',
    period: '/month',
    description: 'Advanced AI flows with integrations and analytics for growing businesses.',
    features: [
      'Advanced AI conversation flows',
      'Up to 2,500 conversations/month',
      'Lead qualification & scoring',
      'Appointment booking integration',
      'CRM integration (HubSpot, Zoho)',
      'Multilingual support',
      'Analytics dashboard',
      'Priority support (12hr SLA)',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'R30,000+',
    period: '/month',
    description: 'Custom-built for large teams and multi-department operations.',
    features: [
      'Unlimited conversations',
      'Multi-department routing',
      'Custom AI model training',
      'Payment collection integration',
      'Advanced analytics & reporting',
      'API integrations (any system)',
      'Dedicated account manager',
      '4hr SLA / priority support',
      'White-label options',
    ],
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'How long does it take to set up a WhatsApp AI chatbot?',
    answer:
      'Most businesses are live within 2 weeks. We start with an audit of your current processes, build and test the bot with your real scenarios, and launch with full support.',
  },
  {
    question: 'Do I need the WhatsApp Business API?',
    answer:
      'Yes, we set this up for you as part of the onboarding process. The WhatsApp Business API allows for automated messaging, multiple users, and integration with your existing systems. We handle the entire setup.',
  },
  {
    question: 'Can the chatbot handle multiple languages?',
    answer:
      'Absolutely. Our AI chatbots support English, Afrikaans, Zulu, Sotho, Xhosa, and more. The bot automatically detects the customer\'s language and responds naturally in the same language.',
  },
  {
    question: 'What happens when the bot cannot answer a question?',
    answer:
      'The bot seamlessly hands over to a human agent with full conversation context. Your team picks up exactly where the AI left off — no customer has to repeat themselves.',
  },
  {
    question: 'Will the chatbot sound robotic?',
    answer:
      'No. We use advanced AI language models that generate natural, conversational responses. We train the bot on your brand voice and tone, so it sounds like a knowledgeable member of your team.',
  },
  {
    question: 'Can I integrate the chatbot with my CRM or booking system?',
    answer:
      'Yes. We integrate with HubSpot, Zoho, Salesforce, Google Calendar, Calendly, and most popular business tools. Custom API integrations are available on the Professional and Enterprise plans.',
  },
  {
    question: 'How much does a WhatsApp AI chatbot cost in South Africa?',
    answer:
      'Our plans start from R8,000/month for basic automation. Most SA businesses choose the Professional plan at R15,000/month for lead qualification, booking, and CRM integration. Enterprise solutions start at R30,000+/month.',
  },
  {
    question: 'Is my customer data secure?',
    answer:
      'Yes. All data is encrypted in transit and at rest. We are POPIA compliant and follow international data protection best practices. Your customer data is never shared with third parties.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WhatsApp AI Chatbot',
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
    'AI-powered WhatsApp chatbot service for South African businesses. Automate customer service, lead qualification, appointment booking, and sales on WhatsApp.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: 'WhatsApp Business Automation',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter',
      price: '8000',
      priceCurrency: 'ZAR',
      description: '1 AI chatbot with basic conversation flows, up to 500 conversations/month',
    },
    {
      '@type': 'Offer',
      name: 'Professional',
      price: '15000',
      priceCurrency: 'ZAR',
      description: 'Advanced AI flows, lead qualification, CRM integration, multilingual support',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise',
      price: '30000',
      priceCurrency: 'ZAR',
      description: 'Custom-built multi-department WhatsApp AI with unlimited conversations',
    },
  ],
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

export default function WhatsAppChatbotPage() {
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
            background: 'rgba(37, 211, 102, 0.1)',
            border: '1px solid rgba(37, 211, 102, 0.25)',
            borderRadius: '100px',
            fontSize: '0.875rem',
            color: '#25D366',
            marginBottom: '1.5rem',
            fontWeight: 600,
          }}>
            <WhatsAppIcon /> WhatsApp AI Automation
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            AI WhatsApp Chatbots That{' '}
            <span style={{
              background: 'var(--gradient-ember-ocean)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Sell While You Sleep
            </span>
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            South Africa has over 45 million WhatsApp users. Your customers are already there —
            now your business can respond instantly, qualify leads, and close deals 24/7 with an AI-powered chatbot.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="cta-button">
              Book a Free WhatsApp AI Demo <ArrowRightIcon />
            </Link>
            <Link
              href="#pricing"
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
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">The Problem Every SA Business Faces</h2>
          <p className="section-subtitle">
            If you are not responding on WhatsApp within minutes, you are losing money
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

      {/* Features */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">What Your WhatsApp AI Chatbot Can Do</h2>
          <p className="section-subtitle">
            Everything you need to automate customer engagement on WhatsApp
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

      {/* Use Cases */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Built for SA Industries</h2>
          <p className="section-subtitle">
            WhatsApp AI chatbots tailored to how South African businesses actually work
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.5rem',
          }}>
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.15), rgba(8, 145, 178, 0.1))',
                  border: '1px solid rgba(30, 64, 175, 0.25)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ocean-blue)',
                  margin: '0 auto 1.25rem',
                }}>
                  {useCase.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {useCase.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Live in 2 Weeks — Here is How</h2>
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
                desc: 'We analyse your customer conversations, FAQs, and sales process to design the perfect chatbot flow for your business.',
              },
              {
                step: '02',
                title: 'Build',
                desc: 'We build and train your AI chatbot on your real data — products, pricing, processes. You review and approve before launch.',
              },
              {
                step: '03',
                title: 'Launch',
                desc: 'We deploy to your WhatsApp Business account, integrate with your systems, and monitor performance for continuous improvement.',
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

      {/* Pricing */}
      <section id="pricing" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">WhatsApp AI Chatbot Pricing</h2>
          <p className="section-subtitle">
            Transparent pricing in Rands. No hidden fees. Cancel anytime.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.highlighted ? 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-card))' : 'var(--bg-card)',
                  border: `1px solid ${plan.highlighted ? 'rgba(220, 38, 38, 0.4)' : 'var(--border-subtle)'}`,
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {plan.highlighted && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--gradient-ember-ocean)',
                  }} />
                )}
                {plan.highlighted && (
                  <div style={{
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
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)',
                }}>
                  {plan.name}
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    background: 'var(--gradient-ember-ocean)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{plan.period}</span>
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                }}>
                  {plan.description}
                </p>
                <ul style={{ listStyle: 'none', flex: 1, marginBottom: '2rem' }}>
                  {plan.features.map((feature) => (
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
                      <span style={{
                        flexShrink: 0,
                        width: '18px',
                        height: '18px',
                        color: 'var(--ocean-cyan)',
                        marginTop: '1px',
                      }}>
                        <CheckCircleIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={plan.highlighted ? 'cta-button' : 'btn btn-secondary'}
                  style={{ textAlign: 'center', justifyContent: 'center' }}
                >
                  Book a Free Demo {plan.highlighted && <ArrowRightIcon />}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about WhatsApp AI chatbots for your business
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
            <h2>Ready to Automate Your WhatsApp?</h2>
            <p>
              Book a free demo and see how an AI chatbot can handle your customer conversations,
              qualify leads, and book appointments — all on WhatsApp.
            </p>
            <Link href="/contact" className="cta-button">
              Book a Free WhatsApp AI Demo <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
