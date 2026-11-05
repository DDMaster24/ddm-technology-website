import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import {
  MessageCircleIcon,
  ZapIcon,
  FileSearchIcon,
  MegaphoneIcon,
  CodeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  SparklesIcon,
  RocketIcon,
  BarChartIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'AI Automation Agency — South Africa',
  description:
    'South African AI automation agency. We build AI chatbots, workflow automation, document processing, and custom AI solutions for businesses in Johannesburg and across SA.',
  openGraph: {
    title: 'DDM Technology | AI Automation Agency — South Africa',
    description:
      'We build AI systems that handle the boring stuff — chatbots, workflow automation, document processing — so SA businesses can focus on growth.',
    url: 'https://ddmtech.co.za',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DDM Technology | AI Automation Agency — South Africa',
    description:
      'AI chatbots, workflow automation, and custom AI solutions for South African businesses.',
  },
  alternates: {
    canonical: '/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://ddmtech.co.za/#organization',
      name: 'DDM Technology',
      url: 'https://ddmtech.co.za',
      description:
        'South African AI automation agency building chatbots, workflow automation, document processing, and custom AI solutions.',
      foundingDate: '2024',
      founder: {
        '@type': 'Person',
        name: 'Darius',
        jobTitle: 'Founder & CEO',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Roodepoort',
        addressRegion: 'Gauteng',
        addressCountry: 'ZA',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'darius@ddmtech.co.za',
        contactType: 'sales',
        availableLanguage: ['English'],
      },
      areaServed: {
        '@type': 'Country',
        name: 'South Africa',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ddmtech.co.za/#localbusiness',
      name: 'DDM Technology',
      url: 'https://ddmtech.co.za',
      email: 'darius@ddmtech.co.za',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Roodepoort',
        addressRegion: 'Gauteng',
        postalCode: '1724',
        addressCountry: 'ZA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -26.1625,
        longitude: 27.8725,
      },
      openingHours: 'Mo-Fr 08:00-18:00',
      priceRange: 'R15000-R120000+',
    },
    {
      '@type': 'Service',
      serviceType: 'AI Automation',
      provider: { '@id': 'https://ddmtech.co.za/#organization' },
      areaServed: {
        '@type': 'Country',
        name: 'South Africa',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Automation Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Customer Service',
              description:
                'Chatbots, voice agents, and email responders that handle customer enquiries 24/7.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Workflow Automation',
              description:
                'Connect your existing tools with intelligent automation that eliminates manual work.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Document Processing',
              description:
                'AI that reads, extracts, and files your documents automatically.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Sales & Marketing',
              description:
                'Automated lead generation, content creation, and social media management.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom AI Development',
              description:
                'Bespoke AI solutions built specifically for your business processes.',
            },
          },
        ],
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      {/* What We Do - Quick overview */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">What We Actually Do</h2>
          <p className="section-subtitle">
            We build AI systems that handle the boring stuff — so you can focus on growing your business
          </p>

          <div className="features-grid">
            <div className="feature-box">
              <div className="icon"><ZapIcon /></div>
              <h3>Automate Workflows</h3>
              <p>Connect your tools and let AI handle repetitive tasks 24/7. No more manual data entry.</p>
            </div>

            <div className="feature-box">
              <div className="icon"><MessageCircleIcon /></div>
              <h3>AI Customer Service</h3>
              <p>Chatbots and voice agents that actually help your customers — in English, Zulu, or Afrikaans.</p>
            </div>

            <div className="feature-box">
              <div className="icon"><FileSearchIcon /></div>
              <h3>Smart Document Processing</h3>
              <p>Invoices, contracts, compliance docs — automatically extracted, sorted, and filed.</p>
            </div>

            <div className="feature-box">
              <div className="icon"><TrendingUpIcon /></div>
              <h3>AI Sales & Marketing</h3>
              <p>Generate leads, create content, and automate your social media while you sleep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our AI Services</h2>
          <p className="section-subtitle">End-to-end AI automation — from strategy to deployment</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><MessageCircleIcon /></div>
              <h3>AI Customer Service</h3>
              <p>Chatbots, voice agents, and email responders that handle enquiries around the clock.</p>
              <ul>
                <li>WhatsApp & website chatbots</li>
                <li>AI voice call agents</li>
                <li>Smart email responses</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon"><ZapIcon /></div>
              <h3>Workflow Automation</h3>
              <p>Connect your existing tools with intelligent automation that eliminates manual work.</p>
              <ul>
                <li>n8n & Zapier integrations</li>
                <li>CRM automation</li>
                <li>Custom API connections</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon"><FileSearchIcon /></div>
              <h3>Document Processing</h3>
              <p>AI that reads, extracts, and files your documents automatically.</p>
              <ul>
                <li>Invoice processing</li>
                <li>Contract analysis</li>
                <li>Compliance automation</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon"><MegaphoneIcon /></div>
              <h3>AI Sales & Marketing</h3>
              <p>Automated lead generation, content creation, and social media management.</p>
              <ul>
                <li>AI lead qualification</li>
                <li>Content generation</li>
                <li>Social media automation</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon"><CodeIcon /></div>
              <h3>Custom AI Development</h3>
              <p>Bespoke AI solutions built specifically for your business processes.</p>
              <ul>
                <li>Custom AI models</li>
                <li>API integrations</li>
                <li>Full-stack AI apps</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon"><ShieldCheckIcon /></div>
              <h3>AI Strategy & Consulting</h3>
              <p>Figure out where AI fits in your business — before spending a cent.</p>
              <ul>
                <li>AI readiness audit</li>
                <li>ROI projections</li>
                <li>Implementation roadmap</li>
              </ul>
            </div>
          </div>

          <div className="cta-section">
            <h2>Explore All Services</h2>
            <p>See detailed breakdowns, benefits, and pricing for each service</p>
            <Link href="/services" className="cta-button">
              View All Services <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Why DDM */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Why South African Businesses Choose Us</h2>
          <p className="section-subtitle">
            We are not a Silicon Valley startup. We are a South African team that understands local business.
          </p>

          <div className="about-content">
            <div className="about-text">
              <h3>Built for SA Business</h3>
              <p>
                We have built AI automations for coal traders, restaurant chains, property managers,
                and e-commerce stores — all right here in South Africa. We understand load shedding,
                we understand POPIA, and we understand that every rand counts.
              </p>
              <p>
                Our approach is simple: find the bottleneck in your business, build an AI system to
                fix it, and prove the ROI before you pay a cent. No lock-in contracts. No enterprise
                fluff. Just results.
              </p>
              <Link href="/about" className="cta-button" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>
                About DDM Technology <ArrowRightIcon />
              </Link>
            </div>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">AI Automations Deployed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10x</div>
                <div className="stat-label">Average Speed Improvement</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Your AI Never Sleeps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Real Results for Real Businesses</h2>
          <p className="section-subtitle">See how we have helped SA companies automate and grow</p>

          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon"><BarChartIcon /></div>
                <h3>MineX Coal Trading</h3>
                <p className="product-version">Commodity Marketplace</p>
              </div>
              <div className="product-body">
                <p className="product-description">
                  Digitised R50M+ in coal trades with an AI-powered marketplace that automates
                  matching, logistics, and compliance documentation.
                </p>
              </div>
              <div className="product-footer">
                <Link href="/case-studies" className="btn btn-primary">
                  Read Case Study
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon"><RocketIcon /></div>
                <h3>Flame & Fork Restaurant Chain</h3>
                <p className="product-version">Food & Hospitality</p>
              </div>
              <div className="product-body">
                <p className="product-description">
                  Cut order processing time by 80% with AI-powered order management,
                  inventory prediction, and automated supplier communications.
                </p>
              </div>
              <div className="product-footer">
                <Link href="/case-studies" className="btn btn-primary">
                  Read Case Study
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon"><SparklesIcon /></div>
                <h3>UrbanNest Property Management</h3>
                <p className="product-version">Real Estate</p>
              </div>
              <div className="product-body">
                <p className="product-description">
                  Automated tenant communications, maintenance requests, and lease processing —
                  saving 20+ hours per week across 200 units.
                </p>
              </div>
              <div className="product-footer">
                <Link href="/case-studies" className="btn btn-primary">
                  Read Case Study
                </Link>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>See All Case Studies</h2>
            <p>Discover how AI automation is transforming South African businesses</p>
            <Link href="/case-studies" className="cta-button">
              View Portfolio <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-section">
        <div className="container">
          <div className="cta-section">
            <h2>Ready to Automate Your Business?</h2>
            <p>Book a free AI audit — we will show you exactly where AI can save you time and money</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="cta-button">
                Book a Free AI Audit <ArrowRightIcon />
              </Link>
              <a
                href="https://wa.me/27832580869"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem' }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
