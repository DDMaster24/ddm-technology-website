import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ShoppingCartIcon,
  PackageIcon,
  UsersIcon,
  ZapIcon,
  MegaphoneIcon,
  WhatsAppIcon,
  SparklesIcon,
  BarChartIcon,
  TrendingUpIcon,
  MapPinIcon,
  ArrowRightIcon,
  ClockIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Retail AI South Africa | E-Commerce & Store Automation',
  description:
    'AI-powered automation for South African retailers & e-commerce businesses. Inventory management, demand forecasting, WhatsApp customer service, personalised marketing. Load shedding-proof POS solutions.',
  keywords:
    'retail AI South Africa, e-commerce automation SA, AI inventory management, demand forecasting retail, WhatsApp Commerce South Africa, retail chatbot SA',
  openGraph: {
    title: 'Retail AI & E-Commerce Automation | DDM Technology',
    description:
      'AI automation for SA retailers. Inventory management, demand forecasting, WhatsApp Commerce, customer service bots. Load shedding-proof.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/industries/retail',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail AI & E-Commerce Automation | DDM Technology',
    description:
      'AI automation for SA retailers. Inventory management, demand forecasting, WhatsApp Commerce, customer service bots.',
  },
  alternates: { canonical: '/industries/retail' },
}

const painPoints = [
  {
    icon: <PackageIcon />,
    title: 'Stock Management Chaos',
    description:
      'Over-ordering ties up cash, under-ordering loses sales. Manual stock counts take hours, spreadsheets are always out of date, and seasonal demand catches you off guard every time.',
  },
  {
    icon: <UsersIcon />,
    title: 'Customer Service Overload',
    description:
      'WhatsApp messages, emails, social media DMs — customers expect instant responses on every channel. Your team cannot keep up, and slow replies send shoppers to competitors.',
  },
  {
    icon: <ZapIcon />,
    title: 'Load Shedding POS Failures',
    description:
      'Every load shedding stage means lost sales. Card machines go offline, POS systems crash, and customers walk out. Hours of downtime add up to thousands in lost revenue each month.',
  },
  {
    icon: <MegaphoneIcon />,
    title: 'Generic Marketing That Misses',
    description:
      'Blanket SMS blasts and one-size-fits-all promotions get ignored. You know personalisation works, but manually segmenting customers and crafting targeted campaigns is not feasible at scale.',
  },
]

const features = [
  {
    icon: <PackageIcon />,
    title: 'AI Inventory Management',
    description:
      'Real-time stock tracking across all locations, automatic reorder alerts, dead stock identification, and supplier performance analytics. Know exactly what you have, where, and when to reorder.',
    color: 'var(--ember-red)',
  },
  {
    icon: <BarChartIcon />,
    title: 'Demand Forecasting',
    description:
      'Predict sales by product, location, and time period using historical data, seasonal trends, payday cycles, and local events. Reduce overstock by 30%+ and never miss a sales spike.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <WhatsAppIcon />,
    title: 'WhatsApp Customer Service Bot',
    description:
      'Handle order tracking, returns, product questions, and complaints 24/7 via WhatsApp. Instant responses, automated escalation for complex issues, and full conversation history for your team.',
    color: 'var(--ocean-blue)',
  },
  {
    icon: <SparklesIcon />,
    title: 'Personalised Marketing AI',
    description:
      'Segment customers automatically based on purchase history, browsing behaviour, and preferences. Send targeted WhatsApp promotions, personalised product recommendations, and re-engagement campaigns.',
    color: 'var(--ember-crimson)',
  },
  {
    icon: <ShoppingCartIcon />,
    title: 'WhatsApp Commerce',
    description:
      'Let customers browse your catalogue, add to cart, and complete purchases entirely within WhatsApp. Integration with Yoco, PayFast, and Peach Payments for seamless checkout in Rands.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Returns & Refunds Automation',
    description:
      'Automate return requests, validate return eligibility, generate return labels, and process refunds. Reduce returns processing time by 80% and improve customer satisfaction scores.',
    color: 'var(--ocean-blue)',
  },
]

const caseStudyMetrics = [
  { value: '35%', label: 'Less Overstock' },
  { value: '60%', label: 'Queries Handled by AI' },
  { value: 'R85K', label: 'Monthly Savings' },
  { value: '4.7', label: 'Customer Satisfaction' },
]

const saContextCards = [
  {
    icon: <ZapIcon />,
    title: 'Load Shedding POS Solutions',
    description:
      'Cloud-based order management that syncs the moment connectivity returns. WhatsApp Commerce lets customers place orders even when your store POS is offline — no lost sales during load shedding.',
    color: 'var(--ember-red)',
  },
  {
    icon: <WhatsAppIcon />,
    title: 'WhatsApp-First Commerce',
    description:
      'South Africans live on WhatsApp. Our commerce integration lets customers browse, order, and pay without leaving the app. Built for how SA consumers actually shop — not how Silicon Valley thinks they should.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <MapPinIcon />,
    title: 'Rand-Based Pricing',
    description:
      'All pricing, invoicing, and reporting in ZAR. Integration with South African payment gateways — Yoco, PayFast, SnapScan, Peach Payments. VAT-compliant invoicing and SARS-ready financial reporting.',
    color: 'var(--ocean-blue)',
  },
]

const faqs = [
  {
    question: 'How does AI help retailers in South Africa?',
    answer:
      'AI tackles the biggest challenges SA retailers face: demand forecasting predicts what will sell and when so you order the right stock, WhatsApp bots handle 60-70% of customer queries without staff intervention, personalised marketing drives repeat purchases, and inventory automation eliminates manual stock counts. Most retailers see ROI within the first month.',
  },
  {
    question: 'Can customers order via WhatsApp?',
    answer:
      'Yes. WhatsApp Commerce lets customers browse your full catalogue, select products, choose variants (size, colour), and complete payment — all within WhatsApp. Payment integrates with Yoco, PayFast, and Peach Payments in Rands. Orders flow directly into your order management system with no manual re-entry.',
  },
  {
    question: 'How does AI demand forecasting work?',
    answer:
      'Our AI analyses your historical sales data alongside external factors — payday cycles, school holidays, seasonal trends, weather patterns, and local events — to predict demand by product and location. It learns from actual sales versus predictions and improves over time. Retailers typically reduce overstock by 30-35% and stock-outs by 50%+.',
  },
  {
    question: 'What does retail AI automation cost?',
    answer:
      'Plans start from R10,000/month for a single-store WhatsApp customer service bot and basic inventory alerts. Multi-location packages with demand forecasting, WhatsApp Commerce, and personalised marketing start from R20,000/month. Enterprise retailers with 10+ locations get custom pricing based on requirements.',
  },
  {
    question: 'Does it work during load shedding?',
    answer:
      'Yes. The entire AI system runs in the cloud and continues processing orders, answering customer queries, and tracking inventory regardless of your local power situation. WhatsApp Commerce means customers can order even when your physical POS is down. Orders sync automatically when connectivity returns.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Single-store setups are typically live within 2-3 weeks. We integrate with your existing e-commerce platform (Shopify, WooCommerce, Takealot Seller Portal), POS system, and payment gateways. Multi-location rollouts take 4-6 weeks with phased deployment and full staff training.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation for Retail & E-Commerce',
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
    'AI-powered retail and e-commerce automation for South African businesses. Inventory management, demand forecasting, WhatsApp Commerce, customer service chatbots, personalised marketing.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: 'Retail AI Automation',
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

export default function RetailIndustryPage() {
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
            background: 'rgba(185, 28, 28, 0.1)',
            border: '1px solid rgba(185, 28, 28, 0.25)',
            borderRadius: '100px',
            fontSize: '0.875rem',
            color: '#B91C1C',
            marginBottom: '1.5rem',
            fontWeight: 600,
          }}>
            <ShoppingCartIcon /> Retail AI Automation
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            AI-Powered Retail{' '}
            <span style={{
              background: 'var(--gradient-ember-ocean)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              That Sells Smarter
            </span>
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            South African retailers face stock nightmares, overwhelmed support teams, load shedding losses,
            and customers who expect instant WhatsApp responses. AI automation handles inventory, customer service,
            marketing, and commerce — so you can focus on growing your business.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="cta-button">
              Book a Free Retail AI Demo <ArrowRightIcon />
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
          <h2 className="section-title">Why SA Retailers Are Losing Money</h2>
          <p className="section-subtitle">
            These problems cost the average retailer thousands of Rands every month — and most do not even track it
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
          <h2 className="section-title">AI Solutions Built for Retailers</h2>
          <p className="section-subtitle">
            Everything you need to automate stock, serve customers faster, and sell more
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
          <h2 className="section-title">Real Results in SA Retail</h2>
          <p className="section-subtitle">
            See how AI transformed operations for a South African retail chain
          </p>

          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(180deg, #B91C1C, var(--ocean-blue))',
            }} />

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 1rem',
              background: 'rgba(185, 28, 28, 0.1)',
              border: '1px solid rgba(185, 28, 28, 0.25)',
              borderRadius: '100px',
              fontSize: '0.8125rem',
              color: '#B91C1C',
              marginBottom: '1.5rem',
              fontWeight: 600,
            }}>
              <ShoppingCartIcon /> Success Story — Cape Town Retail Chain
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              From Stock Guesswork to AI-Driven Retail Across 5 Stores
            </h3>

            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}>
              A Cape Town fashion retailer with 5 stores and an online shop was haemorrhaging cash on overstock,
              losing customers to slow WhatsApp responses, and missing sales during load shedding. DDM Technology
              implemented AI inventory management, a WhatsApp customer service bot, and demand forecasting —
              turning their operation around within weeks.
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
                    fontSize: '2rem',
                    fontWeight: 700,
                    background: 'var(--gradient-ember-ocean)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.5rem',
                  }}>
                    {metric.value}
                  </div>
                  <div style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.4,
                  }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <blockquote style={{
              borderLeft: '3px solid #B91C1C',
              paddingLeft: '1.5rem',
              margin: '0 0 2rem 0',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}>
              &ldquo;We used to order stock based on gut feel and lose thousands to overstock every season.
              DDM&apos;s demand forecasting told us exactly what to order and when. Our WhatsApp bot now handles
              most customer queries — even during load shedding when our POS is down.&rdquo;
              <br />
              <span style={{
                fontStyle: 'normal',
                fontWeight: 600,
                color: 'var(--text-primary)',
                fontSize: '0.875rem',
                display: 'inline-block',
                marginTop: '0.75rem',
              }}>
                — Operations Director, Cape Town Fashion Retailer
              </span>
            </blockquote>

            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#B91C1C',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                transition: 'all var(--duration-fast)',
              }}
            >
              Get similar results for your retail business <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* SA Context */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Built for South African Retail</h2>
          <p className="section-subtitle">
            Not a generic international tool — engineered for SA shopping habits, payments, and realities
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
            Everything you need to know about AI automation for retail and e-commerce
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
            <h2>Ready to Automate Your Retail Business?</h2>
            <p>
              Book a free demo and see how AI can manage your inventory, serve customers on WhatsApp,
              predict demand, and drive personalised marketing — so you can focus on growing your brand.
            </p>
            <Link href="/contact" className="cta-button">
              Book a Free Retail AI Demo <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
