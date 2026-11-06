import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ZapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  UsersIcon,
  SettingsIcon,
  FileSearchIcon,
  BarChartIcon,
  ShieldCheckIcon,
  CpuIcon,
  BuildingIcon,
  TrendingUpIcon,
  MailIcon,
  ClipboardIcon,
  LayersIcon,
  SparklesIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'AI Workflow Automation for South African Businesses',
  description:
    'Eliminate manual work with AI-powered workflow automation. Connect your CRM, email, accounting, and more. Load-shedding resilient. From R15,000/month.',
  keywords:
    'workflow automation South Africa, AI automation Johannesburg, business process automation SA, CRM automation, invoice automation, AI workflow Roodepoort',
  openGraph: {
    title: 'AI Workflow Automation | DDM Technology',
    description:
      'Connect your business tools with intelligent AI automation. Eliminate manual work, reduce errors, and scale operations 24/7. Built for SA businesses.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/ai-services/workflow-automation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation | DDM Technology',
    description:
      'Eliminate manual work with intelligent AI automation. Built for South African businesses.',
  },
  alternates: {
    canonical: '/ai-services/workflow-automation',
  },
}

const painPoints = [
  {
    icon: <ClockIcon />,
    title: 'Hours Lost to Copy-Paste',
    description:
      'Your team spends half their day moving data between systems — copying from emails to spreadsheets, from invoices to accounting software, from enquiries to CRM. It is tedious, error-prone, and expensive.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Human Errors Cost Money',
    description:
      'Manually entered data leads to duplicate records, missed invoices, wrong amounts, and compliance issues. One misplaced zero on an invoice can cost thousands.',
  },
  {
    icon: <UsersIcon />,
    title: 'Staff Doing Robot Work',
    description:
      'Skilled employees are wasted on repetitive admin tasks instead of strategy, sales, and customer relationships. You are paying human rates for work a machine should do.',
  },
]

const useCases = [
  {
    icon: <TrendingUpIcon />,
    title: 'Lead Capture & Routing',
    description:
      'Automatically capture leads from your website, WhatsApp, email, and social media. Score them, enrich with company data, and route hot leads straight to the right salesperson — instantly.',
    stats: '3x faster lead response',
    color: 'var(--ember-red)',
  },
  {
    icon: <FileSearchIcon />,
    title: 'Invoice & Document Processing',
    description:
      'AI reads invoices, purchase orders, and delivery notes. Extracts amounts, line items, and dates. Matches them to orders and pushes data into your accounting system — Xero, Sage, QuickBooks.',
    stats: '90% less manual capture',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <UsersIcon />,
    title: 'Employee Onboarding',
    description:
      'New hire? Trigger a complete workflow: create email account, send welcome pack, assign training modules, notify IT for equipment, schedule orientation — all automatically.',
    stats: '2 days → 2 hours',
    color: 'var(--ocean-blue)',
  },
  {
    icon: <ClipboardIcon />,
    title: 'Inventory & Stock Management',
    description:
      'Monitor stock levels in real-time. When inventory drops below threshold, auto-generate purchase orders, notify suppliers, and update your ERP. Never run out of stock unexpectedly.',
    stats: 'Zero stockout surprises',
    color: 'var(--ember-crimson)',
  },
  {
    icon: <BarChartIcon />,
    title: 'Automated Reporting',
    description:
      'Generate daily sales reports, weekly KPI dashboards, and monthly financial summaries — automatically pulled from your live data and delivered to your inbox or Slack every morning.',
    stats: 'Reports while you sleep',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <MailIcon />,
    title: 'Email & Communication Flows',
    description:
      'Auto-sort incoming emails by intent, route support tickets to the right department, send follow-up sequences to prospects, and trigger alerts when key clients email.',
    stats: '80% less email triage',
    color: 'var(--ocean-blue)',
  },
]

const benefits = [
  {
    icon: <ClockIcon />,
    title: 'Works 24/7/365',
    description: 'Your automation never sleeps, never takes leave, never calls in sick. Processes run overnight, on weekends, and through every public holiday.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Zero Human Error',
    description: 'No more typos, duplicates, or forgotten steps. Every data point is captured accurately, every time, with full audit trails.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Scales Instantly',
    description: 'Processing 10 invoices or 10,000 — the cost is the same. Scale your operations without hiring proportionally.',
  },
  {
    icon: <ZapIcon />,
    title: 'Load-Shedding Resilient',
    description: 'All automations run in the cloud. When Eskom cuts power, your workflows keep running. Your competitors\u2019 manual processes stop — yours don\u2019t.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Audit',
    description: 'We map your current workflows — every spreadsheet, email chain, and manual process. We identify the biggest time-wasters and highest-ROI automation targets.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'We architect your automated workflows with clear triggers, logic, and integrations. You approve the design before we write a single line of code.',
  },
  {
    step: '03',
    title: 'Deploy',
    description: 'We build, test, and deploy your automations. They connect to your existing tools — CRM, accounting, email, ERP — with zero disruption to current operations.',
  },
  {
    step: '04',
    title: 'Optimise',
    description: 'We monitor performance, fix edge cases, and continuously improve. Monthly reports show time saved, errors prevented, and ROI delivered.',
  },
]

const integrations = [
  'Xero', 'Sage', 'QuickBooks', 'HubSpot', 'Zoho CRM', 'Salesforce',
  'Google Workspace', 'Microsoft 365', 'Slack', 'WhatsApp Business',
  'Shopify', 'WooCommerce', 'Airtable', 'Monday.com', 'Trello',
  'PayFast', 'Yoco', 'Zapier', 'Make (Integromat)', 'Custom APIs',
]

const faqs = [
  {
    question: 'What exactly is workflow automation?',
    answer:
      'Workflow automation uses software to perform repetitive tasks automatically. Instead of your team manually copying data between systems, sending follow-up emails, or generating reports, AI-powered workflows handle it instantly and accurately — triggered by events like a new email, form submission, or time schedule.',
  },
  {
    question: 'Will automation replace my employees?',
    answer:
      'No — it frees them. Automation handles the repetitive, low-value tasks (data entry, report generation, email sorting) so your team can focus on strategy, relationships, and creative work that actually grows your business.',
  },
  {
    question: 'How long does it take to implement?',
    answer:
      'Simple workflows (email routing, lead capture) can be live in 1-2 weeks. Complex multi-system integrations (ERP + CRM + accounting) typically take 4-6 weeks. We work in phases so you see value quickly.',
  },
  {
    question: 'What if my systems are old or unusual?',
    answer:
      'We work with any system that has an API or can export data. For legacy systems, we can build custom connectors or use screen-scraping and email-parsing as bridges. We have integrated with everything from modern SaaS to 20-year-old on-premise systems.',
  },
  {
    question: 'What about load shedding?',
    answer:
      'All our automations run in the cloud — they are completely unaffected by local power outages. When load shedding hits, your competitors\u2019 manual processes grind to a halt. Your automated workflows keep running without interruption.',
  },
  {
    question: 'How do you charge for workflow automation?',
    answer:
      'Our AI Employee packages start at R15,000/month and include workflow automation as a core component. The right package depends on the number of workflows, complexity, and volume. We offer a free audit to scope your needs and give you an accurate quote.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Workflow Automation',
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
    'AI-powered workflow automation for South African businesses. Connect CRM, email, accounting, and more. Eliminate manual work and scale operations 24/7.',
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
            background: 'rgba(220, 38, 38, 0.1)',
            border: '1px solid rgba(220, 38, 38, 0.25)',
            borderRadius: '100px',
            fontSize: '0.875rem',
            color: 'var(--ember-red)',
            marginBottom: '1.5rem',
            fontWeight: 600,
          }}>
            <ZapIcon /> AI Workflow Automation
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Stop Paying Humans to Do{' '}
            <span style={{
              background: 'var(--gradient-ember-ocean)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Robot Work
            </span>
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            Connect your CRM, email, accounting, and spreadsheets with intelligent AI automation.
            Eliminate manual data entry, reduce errors to zero, and free your team to do work that actually matters.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/ai-services/contact" className="cta-button">
              Book a Free Workflow Audit <ArrowRightIcon />
            </Link>
            <Link
              href="/ai-services"
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
              View AI Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">The Manual Work Trap</h2>
          <p className="section-subtitle">
            Your team is spending 40% of their time on tasks a machine should handle
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

      {/* Use Cases */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">What We Automate</h2>
          <p className="section-subtitle">
            Real workflows, real results — tailored to how SA businesses actually operate
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
                  marginBottom: '1rem',
                }}>
                  {useCase.description}
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.375rem 0.875rem',
                  background: `${useCase.color}11`,
                  border: `1px solid ${useCase.color}33`,
                  borderRadius: '100px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: useCase.color,
                }}>
                  <SparklesIcon /> {useCase.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Why AI Automation Wins</h2>
          <p className="section-subtitle">
            Especially in South Africa, where load shedding makes manual work unreliable
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
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
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.15), rgba(8, 145, 178, 0.1))',
                  border: '1px solid rgba(30, 64, 175, 0.25)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ocean-blue)',
                  margin: '0 auto 1.25rem',
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
                  lineHeight: 1.6,
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
          <h2 className="section-title">How We Build Your Automation</h2>
          <p className="section-subtitle">
            A proven 4-step process from audit to optimisation
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}>
            {steps.map((item) => (
              <div
                key={item.step}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2.5rem 1.75rem',
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
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">We Connect to Your Tools</h2>
          <p className="section-subtitle">
            If your software has an API, we can automate it. Here are some of the tools we work with daily.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {integrations.map((name) => (
              <div
                key={name}
                style={{
                  padding: '0.625rem 1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '100px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: '3rem',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              Workflow Automation Pricing
            </h2>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              maxWidth: '600px',
              margin: '0 auto 1.5rem',
            }}>
              Workflow automation is included in all our AI Employee packages, starting from{' '}
              <span style={{
                fontWeight: 700,
                background: 'var(--gradient-ember-ocean)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                R15,000/month
              </span>
              . The right package depends on the number of workflows, complexity, and volume.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ai-services" className="btn btn-secondary">
                View All Packages
              </Link>
              <Link href="/ai-services/contact" className="cta-button">
                Get a Custom Quote <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about workflow automation for your business
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
              Book a free workflow audit. We will map your manual processes, identify the biggest
              time-wasters, and show you exactly how much time and money automation can save.
            </p>
            <Link href="/ai-services/contact" className="cta-button">
              Book a Free Workflow Audit <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
