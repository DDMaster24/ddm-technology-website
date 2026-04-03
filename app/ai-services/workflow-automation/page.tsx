import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ZapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  UsersIcon,
  TargetIcon,
  FileTextIcon,
  ClipboardIcon,
  BarChartIcon,
  SettingsIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  SparklesIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Workflow Automation for South African Businesses | DDM Technology',
  description:
    'AI-powered workflow automation for South African businesses. Automate lead capture, invoice processing, onboarding, inventory, and reporting. Save 20+ hours per week.',
  keywords:
    'workflow automation South Africa, business process automation SA, AI automation Johannesburg, invoice automation, lead capture automation, onboarding automation South Africa',
  openGraph: {
    title: 'Workflow Automation | DDM Technology',
    description:
      'Eliminate manual busywork with AI workflow automation. Lead capture, invoicing, onboarding, inventory, and reports — on autopilot. Built for SA businesses.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/ai-services/workflow-automation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workflow Automation | DDM Technology',
    description:
      'AI workflow automation for SA businesses. Automate lead capture, invoicing, onboarding, and reporting. Save 20+ hours per week.',
  },
  alternates: {
    canonical: '/ai-services/workflow-automation',
  },
}

const useCases = [
  {
    icon: <TargetIcon />,
    title: 'Lead Capture & Routing',
    description:
      'Automatically capture leads from your website, WhatsApp, email, and social media. Score them, enrich the data, and route hot prospects to the right salesperson — instantly.',
    color: 'var(--ember-red)',
  },
  {
    icon: <FileTextIcon />,
    title: 'Invoice Processing',
    description:
      'Extract data from invoices, match to purchase orders, flag discrepancies, and route for approval. Cut invoice processing time from days to minutes.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <UsersIcon />,
    title: 'Employee & Client Onboarding',
    description:
      'Trigger welcome emails, collect documents, create accounts, assign tasks, and track progress — all automatically when a new hire or client is added.',
    color: 'var(--ocean-blue)',
  },
  {
    icon: <ClipboardIcon />,
    title: 'Inventory Management',
    description:
      'Monitor stock levels in real time, trigger reorder alerts, sync with suppliers, and update your accounting system — no spreadsheets required.',
    color: 'var(--ember-crimson)',
  },
  {
    icon: <BarChartIcon />,
    title: 'Automated Reporting',
    description:
      'Generate daily, weekly, or monthly reports from your live data. Sales dashboards, financial summaries, and KPI trackers — delivered to your inbox on schedule.',
    color: 'var(--ocean-cyan)',
  },
]

const benefits = [
  {
    icon: <ClockIcon />,
    title: 'Save 20+ Hours Per Week',
    description:
      'Eliminate repetitive manual tasks. Your team focuses on high-value work while automations handle the rest.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Reduce Human Error',
    description:
      'Automated workflows follow the same steps every time. No missed steps, no typos, no forgotten follow-ups.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Scale Without Hiring',
    description:
      'Handle 10x the volume without adding headcount. Automations grow with your business.',
  },
  {
    icon: <ZapIcon />,
    title: 'Faster Turnaround',
    description:
      'Processes that took days now complete in minutes. Faster approvals, faster responses, faster revenue.',
  },
  {
    icon: <SparklesIcon />,
    title: 'AI-Powered Decisions',
    description:
      'Intelligent routing, anomaly detection, and predictive triggers — not just simple if-then rules.',
  },
  {
    icon: <SettingsIcon />,
    title: 'Integrate Everything',
    description:
      'Connect your CRM, accounting software, email, WhatsApp, Google Workspace, Xero, Sage, and more into one seamless flow.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Audit',
    desc: 'We map your current processes, identify bottlenecks, and calculate exactly how much time and money manual work is costing you.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'We architect your automated workflows — triggers, logic, integrations, and exception handling — tailored to how your business actually operates.',
  },
  {
    step: '03',
    title: 'Deploy',
    desc: 'We build, test, and launch your automations with zero disruption. Your team gets hands-on training and documentation.',
  },
  {
    step: '04',
    title: 'Optimise',
    desc: 'We monitor performance, refine triggers, and expand automations as your business evolves. Continuous improvement, not set-and-forget.',
  },
]

const faqs = [
  {
    question: 'What kind of workflows can you automate?',
    answer:
      'Almost any repetitive business process — lead capture, invoice processing, onboarding, inventory alerts, report generation, approval chains, data entry, email sequences, and more. If it follows a pattern, we can automate it.',
  },
  {
    question: 'How long does it take to set up workflow automation?',
    answer:
      'Simple automations can be live within 1–2 weeks. More complex multi-system integrations typically take 3–6 weeks. We start delivering value from week one with quick wins while building out the full solution.',
  },
  {
    question: 'Will this work with our existing software?',
    answer:
      'Yes. We integrate with Xero, Sage, QuickBooks, HubSpot, Zoho, Google Workspace, Microsoft 365, Slack, WhatsApp, and hundreds of other tools. If your system has an API, we can connect it.',
  },
  {
    question: 'Do we need to change our current processes?',
    answer:
      'No. We automate around your existing processes first, then optimise over time. There is no need for a disruptive overhaul — we meet you where you are.',
  },
  {
    question: 'What happens when something goes wrong in an automated workflow?',
    answer:
      'Every automation includes error handling, alerts, and fallback logic. If something unexpected happens, the system flags it and routes to a human for review. Nothing slips through the cracks.',
  },
  {
    question: 'Is this suitable for small businesses?',
    answer:
      'Absolutely. In fact, small businesses benefit the most because every hour saved has a bigger impact. Our solutions scale from sole proprietors to enterprises with hundreds of staff.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Workflow Automation',
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
    'AI-powered workflow automation for South African businesses. Automate lead capture, invoice processing, onboarding, inventory management, and reporting.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: 'Business Process Automation',
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

export default function WorkflowAutomationPage() {
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
            color: 'var(--ocean-blue)',
            marginBottom: '1.5rem',
            fontWeight: 600,
          }}>
            <SettingsIcon /> Workflow Automation
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Stop Doing Manually What{' '}
            <span style={{
              background: 'var(--gradient-ember-ocean)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              AI Can Do in Seconds
            </span>
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            South African businesses lose thousands of hours a year on repetitive tasks —
            data entry, follow-ups, approvals, reporting. We build AI-powered automations
            that handle the busywork so your team can focus on growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/ai-services/contact" className="cta-button">
              Book a Free Automation Audit <ArrowRightIcon />
            </Link>
            <Link
              href="#use-cases"
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
              See Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* SA-Specific Pain Points */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Why SA Businesses Are Automating Now</h2>
          <p className="section-subtitle">
            Load shedding, rising costs, and skills shortages mean you cannot afford to waste time on manual processes
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}>
            {[
              {
                icon: <ClockIcon />,
                title: 'Staff Doing Admin Instead of Selling',
                description:
                  'Your best people spend half their day on data entry, chasing approvals, and copying information between systems. That is revenue-generating time you will never get back.',
              },
              {
                icon: <ZapIcon />,
                title: 'Load Shedding Kills Productivity',
                description:
                  'When the power comes back, your team scrambles to catch up on delayed tasks. Automated workflows run 24/7 in the cloud — load shedding does not touch them.',
              },
              {
                icon: <TrendingUpIcon />,
                title: 'Growing Pains Without Growing Headcount',
                description:
                  'Hiring is expensive and slow in SA. Automation lets you handle 5x the workload without adding staff, so you scale profitably even in a tight economy.',
              },
            ].map((point) => (
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

      {/* Use Cases */}
      <section id="use-cases" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">What You Can Automate</h2>
          <p className="section-subtitle">
            Five high-impact workflows that save SA businesses the most time and money
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
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
                  background: `linear-gradient(135deg, ${useCase.color}22, ${useCase.color}11)`,
                  border: `1px solid ${useCase.color}44`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: useCase.color,
                  marginBottom: '1.25rem',
                }}>
                  {useCase.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {useCase.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Why Automate With DDM Technology</h2>
          <p className="section-subtitle">
            We do not just connect tools — we build intelligent automations that think, adapt, and scale
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem',
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
                  marginBottom: '1.25rem',
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">From Manual to Automated in 4 Steps</h2>
          <p className="section-subtitle">
            A proven process that delivers results without disrupting your operations
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {howItWorks.map((item) => (
              <div
                key={item.step}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2.5rem 1.5rem',
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

      {/* Pricing Teaser */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-card))',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'var(--gradient-ember-ocean)',
            }} />
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              Transparent Pricing in Rands
            </h2>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '550px',
              margin: '0 auto 2rem',
            }}>
              Every automation project is scoped to your specific needs. View our AI service
              packages for starting prices, or book a free audit for a custom quote.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ai-services" className="cta-button">
                View AI Packages & Pricing <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about workflow automation for your business
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
            <h2>Ready to Automate Your Business?</h2>
            <p>
              Book a free automation audit. We will map your processes, identify quick wins,
              and show you exactly how much time and money you can save.
            </p>
            <Link href="/ai-services/contact" className="cta-button">
              Book a Free Automation Audit <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
