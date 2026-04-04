import type { Metadata } from 'next'
import Link from 'next/link'
import {
  UtensilsIcon,
  ShoppingCartIcon,
  CalendarIcon,
  MessageCircleIcon,
  SparklesIcon,
  ClockIcon,
  UsersIcon,
  ZapIcon,
  BarChartIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  WhatsAppIcon,
  PackageIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Restaurant AI South Africa | Online Ordering & Automation',
  description:
    'AI-powered restaurant automation for South African food businesses. WhatsApp ordering, inventory management, staff scheduling, demand prediction. Save R120K+/month.',
  keywords:
    'restaurant AI South Africa, online ordering system, WhatsApp food ordering, restaurant automation SA, AI inventory management restaurant, food service technology South Africa',
  openGraph: {
    title: 'Restaurant AI & Automation | DDM Technology',
    description:
      'AI automation for SA restaurants. WhatsApp ordering, demand prediction, inventory management. One chain saved R120K/month.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/industries/restaurants',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant AI & Automation | DDM Technology',
    description:
      'AI automation for SA restaurants. WhatsApp ordering, demand prediction, inventory management.',
  },
  alternates: { canonical: '/industries/restaurants' },
}

const painPoints = [
  {
    icon: <PackageIcon />,
    title: 'Food Waste',
    description:
      '30-40% of stock goes to waste because demand is hard to predict, suppliers are unreliable, and prep is based on gut feel rather than data.',
  },
  {
    icon: <MessageCircleIcon />,
    title: 'Missed Orders',
    description:
      'Customers WhatsApp at 11pm wanting to order for tomorrow. No one is there to take the order, and competitors who respond faster get the sale.',
  },
  {
    icon: <CalendarIcon />,
    title: 'Staff Scheduling Chaos',
    description:
      'Over-staffing on quiet days, under-staffing on busy nights. Last-minute sick days throw everything off with no data-driven scheduling in sight.',
  },
  {
    icon: <ShoppingCartIcon />,
    title: 'Manual Inventory',
    description:
      'Spreadsheet-based stock tracking leads to over-ordering, stock-outs during peak periods, and hours of manual counting every week.',
  },
]

const features = [
  {
    icon: <WhatsAppIcon />,
    title: 'WhatsApp Ordering Bot',
    description:
      'Customers order directly via WhatsApp — browse your full menu, filter by dietary requirements, customise dishes, and receive secure payment links. Orders flow straight to your kitchen.',
    color: 'var(--ember-red)',
  },
  {
    icon: <SparklesIcon />,
    title: 'AI Demand Prediction',
    description:
      'Predict busy periods using historical data, weather forecasts, local events, and seasonal trends. Reduce food waste by 35%+ and never run out of popular dishes again.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <PackageIcon />,
    title: 'Smart Inventory',
    description:
      'Auto-reorder from suppliers when stock hits minimum levels. Real-time stock alerts, waste tracking dashboards, and cost-per-dish analysis across all locations.',
    color: 'var(--ocean-blue)',
  },
  {
    icon: <CalendarIcon />,
    title: 'Staff Scheduling AI',
    description:
      'Predict staffing needs based on reservations, historical covers, and events. Auto-generate rosters, manage sick day replacements, and track labour cost percentage.',
    color: 'var(--ember-crimson)',
  },
  {
    icon: <UsersIcon />,
    title: 'Customer Engagement',
    description:
      'Automated loyalty programs, personalised specials via WhatsApp, birthday messages, and review management. Turn first-time visitors into regulars.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <BarChartIcon />,
    title: 'Kitchen Analytics',
    description:
      'Track order timing, prep efficiency, menu item performance, and food cost percentages. Identify your most and least profitable dishes in real time.',
    color: 'var(--ocean-blue)',
  },
]

const caseStudyMetrics = [
  { value: '80%', label: 'Faster Order Processing' },
  { value: '35%', label: 'Less Food Waste' },
  { value: 'R120K', label: 'Monthly Savings' },
  { value: '4.8', label: 'Google Rating (up from 4.2)' },
]

const faqs = [
  {
    question: 'How does AI help restaurants in South Africa?',
    answer:
      'AI tackles the biggest challenges SA restaurants face: WhatsApp ordering lets customers place orders 24/7 without staff intervention, demand prediction reduces food waste by analysing weather, events, and historical data, smart inventory auto-reorders from suppliers, and staff scheduling AI ensures you have the right number of people on every shift. It is specifically built for the South African context — Rand pricing, local suppliers, and load shedding resilience.',
  },
  {
    question: 'Can customers order via WhatsApp?',
    answer:
      'Yes. Your customers can browse your full menu, filter by dietary requirements (halaal, vegan, gluten-free), customise their order, and pay — all within WhatsApp. Payment links integrate with Yoco, PayFast, and standard EFT. The order goes straight to your kitchen display or POS system with no manual re-entry.',
  },
  {
    question: 'How does AI reduce food waste?',
    answer:
      'Our demand prediction model analyses your historical sales data, weather forecasts, local events, school holidays, and day-of-week patterns to predict exactly how much of each dish you will sell. Flame & Fork reduced food waste by 35% across 8 locations using this system — that translates directly to bottom-line savings.',
  },
  {
    question: 'What does restaurant AI automation cost?',
    answer:
      'Plans start from R8,000/month for a single-location WhatsApp ordering bot and basic analytics. Multi-location packages with full demand prediction, inventory automation, and staff scheduling are custom-quoted based on your needs. Flame & Fork sees R120K+/month in savings — most restaurants achieve positive ROI within the first month.',
  },
  {
    question: 'Does it work during load shedding?',
    answer:
      'Yes. The entire system is cloud-based, so it runs on our servers regardless of whether your location has power. Customers can place WhatsApp orders whenever power is on their side — orders queue and are processed as soon as your kitchen is back online. You never miss a sale because of Eskom.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Typically 3-4 weeks from kickoff to go-live. We integrate with your existing POS system, Yoco payment terminal, menu management tools, and supplier ordering systems. Week 1 is the audit, weeks 2-3 are build and testing, and week 4 is launch with full support.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation for Restaurants',
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
    'AI-powered restaurant automation for South African food businesses. WhatsApp ordering, demand prediction, inventory management, staff scheduling.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: 'Restaurant AI Automation',
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

export default function RestaurantAIPage() {
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
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: '100px',
              fontSize: '0.875rem',
              color: '#F59E0B',
              marginBottom: '1.5rem',
              fontWeight: 600,
            }}
          >
            <UtensilsIcon /> Restaurant AI Automation
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            AI That Runs Your Restaurant{' '}
            <span
              style={{
                background: 'var(--gradient-ember-ocean)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              While You Focus on the Food
            </span>
          </h1>
          <p
            style={{
              fontSize: '1.1875rem',
              lineHeight: 1.7,
              maxWidth: '650px',
              margin: '0 auto 2rem',
            }}
          >
            South African restaurants face rising costs, food waste, and
            WhatsApp-first customers who expect instant responses. Our AI
            handles ordering, inventory, scheduling, and demand prediction — so
            you can focus on what matters: the food.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/contact" className="cta-button">
              Book a Free Restaurant AI Demo <ArrowRightIcon />
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
          <h2 className="section-title">
            Why SA Restaurants Are Losing Money
          </h2>
          <p className="section-subtitle">
            These problems cost the average restaurant thousands of Rands every
            month — and most owners do not even realise it
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
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
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background:
                      'linear-gradient(90deg, var(--ember-red), var(--ember-crimson))',
                  }}
                />
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background:
                      'linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(220, 38, 38, 0.05))',
                    border: '1px solid rgba(220, 38, 38, 0.25)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--ember-red)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {point.icon}
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
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section
        style={{
          background:
            'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        }}
      >
        <div className="container">
          <h2 className="section-title">
            AI Solutions Built for Restaurants
          </h2>
          <p className="section-subtitle">
            Everything you need to automate ordering, reduce waste, and grow
            your restaurant business
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}
          >
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
                <div
                  style={{
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
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
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
          <h2 className="section-title">Real Results from a Real SA Restaurant</h2>
          <p className="section-subtitle">
            See how Flame & Fork transformed operations across 8 locations with
            AI automation
          </p>

          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '4px',
                background: 'var(--gradient-ember-ocean-vertical)',
              }}
            />

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 1rem',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                borderRadius: '100px',
                fontSize: '0.8125rem',
                color: '#F59E0B',
                marginBottom: '1.5rem',
                fontWeight: 600,
              }}
            >
              <UtensilsIcon /> Case Study — Flame & Fork
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              From Manual Chaos to AI-Powered Efficiency Across 8 Locations
            </h3>

            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Flame & Fork, a popular South African restaurant chain, was
              struggling with food waste, slow order processing, and
              inconsistent customer experiences across their 8 locations. DDM
              Technology implemented WhatsApp ordering, AI demand prediction,
              and smart inventory management — transforming their entire
              operation.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              {caseStudyMetrics.map((metric) => (
                <div key={metric.label} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 700,
                      background: 'var(--gradient-ember-ocean)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {metric.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <blockquote
              style={{
                borderLeft: '3px solid var(--ember-red)',
                paddingLeft: '1.5rem',
                margin: '0 0 2rem 0',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              &ldquo;DDM Technology&apos;s AI transformed our operations across
              all 8 locations. We went from guessing stock levels and losing
              orders to running a data-driven operation that saves us over
              R120K every month.&rdquo;
              <br />
              <span
                style={{
                  fontStyle: 'normal',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  display: 'inline-block',
                  marginTop: '0.75rem',
                }}
              >
                — Naledi M., Head of Operations, Flame & Fork
              </span>
            </blockquote>

            <Link
              href="/case-studies/flame-and-fork"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--ember-red)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                transition: 'all var(--duration-fast)',
              }}
            >
              Read the Full Case Study <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        style={{
          background:
            'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        }}
      >
        <div className="container">
          <h2 className="section-title">
            Live in 3-4 Weeks — Here is How
          </h2>
          <p className="section-subtitle">
            A simple 3-step process from audit to launch
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {[
              {
                step: '01',
                title: 'Audit',
                desc: 'We analyse your menu, ordering patterns, inventory processes, and staff workflows to identify the biggest opportunities for AI automation.',
              },
              {
                step: '02',
                title: 'Build',
                desc: 'We build your custom AI ordering system, demand prediction model, and inventory automation — tested with your real menu data and supplier integrations.',
              },
              {
                step: '03',
                title: 'Launch',
                desc: 'Go live with WhatsApp ordering, automated inventory reordering, staff scheduling AI, and real-time dashboards. Full support from day one.',
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
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    background: 'var(--gradient-ember-ocean)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '1rem',
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
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
            Everything you need to know about AI automation for your restaurant
          </p>

          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
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
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
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
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="cta-section">
            <h2>Ready to Automate Your Restaurant?</h2>
            <p>
              Book a free demo and see how AI can handle your WhatsApp orders,
              predict demand, manage inventory, and schedule staff — so you can
              focus on creating great food.
            </p>
            <Link href="/contact" className="cta-button">
              Book a Free Restaurant AI Demo <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
