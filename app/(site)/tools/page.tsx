import type { Metadata } from 'next'
import Link from 'next/link'
import { BarChartIcon, SparklesIcon, ArrowRightIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Free AI Tools — South Africa',
  description:
    'Free AI tools for South African businesses. Calculate your AI automation ROI, assess your AI readiness, and discover how AI can transform your operations.',
  keywords:
    'AI tools South Africa, AI readiness assessment, AI ROI calculator, free AI business tools, DDM Technology tools',
  openGraph: {
    title: 'Free AI Tools — DDM Technology',
    description:
      'Free AI tools for SA businesses. ROI calculator, readiness assessment, and more.',
    url: 'https://ddmtech.co.za/tools',
  },
  alternates: {
    canonical: '/tools',
  },
}

const tools = [
  {
    icon: <SparklesIcon />,
    title: 'AI Readiness Assessment',
    description:
      'Take a 2-minute quiz to get your AI readiness score out of 100, personalised recommendations, and estimated monthly savings — completely free.',
    href: '/ai-readiness',
    cta: 'Take the Quiz',
  },
  {
    icon: <BarChartIcon />,
    title: 'AI ROI Calculator',
    description:
      'Enter your team size, hourly rates, and repetitive task hours to instantly see your projected annual savings, ROI percentage, and payback period in Rands.',
    href: '/tools/roi-calculator',
    cta: 'Calculate Your ROI',
  },
]

export default function ToolsPage() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-content">
          <h1>Free AI Tools</h1>
          <p>Practical tools to help your South African business understand and plan for AI automation</p>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div
            className="products-grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}
          >
            {tools.map((tool) => (
              <div key={tool.title} className="product-card">
                <div className="product-header">
                  <div className="product-icon">{tool.icon}</div>
                  <h3>{tool.title}</h3>
                </div>
                <div className="product-body">
                  <p className="product-description">{tool.description}</p>
                </div>
                <div className="product-footer">
                  <Link href={tool.href} className="btn btn-primary">
                    {tool.cta} <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section" style={{ marginTop: '4rem' }}>
            <h2>Need a Custom Tool for Your Business?</h2>
            <p>We build bespoke AI tools and dashboards tailored to South African businesses</p>
            <Link href="/contact" className="cta-button">
              Book a Free AI Audit <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
