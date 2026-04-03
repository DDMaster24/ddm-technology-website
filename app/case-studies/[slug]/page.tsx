import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRightIcon,
  BarChartIcon,
  RocketIcon,
  SparklesIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  ClockIcon,
  ZapIcon,
  CpuIcon,
  LayersIcon,
  GlobeIcon,
  ShieldCheckIcon,
  SettingsIcon,
  ServerIcon,
  MessageCircleIcon,
  BuildingIcon,
  WrenchIcon,
} from '@/components/Icons'

const caseStudyData: Record<string, {
  company: string
  slug: string
  industry: string
  headline: string
  heroSubtitle: string
  accentColor: string
  icon: React.ReactNode
  challenge: string[]
  solution: {
    intro: string
    components: { title: string; description: string; icon: React.ReactNode; color: string }[]
  }
  results: { metric: string; label: string; description: string }[]
  techStack: { name: string; category: string }[]
  timeline: { phase: string; title: string; duration: string; description: string }[]
  testimonial: { quote: string; name: string; role: string }
  relatedSlugs: string[]
  seo: {
    title: string
    description: string
    keywords: string
  }
}> = {
  minex: {
    company: 'MineX',
    slug: 'minex',
    industry: 'Coal Trading & Commodities',
    headline: 'Digitised R50M+ in coal trades with an AI-powered marketplace',
    heroSubtitle: 'How we replaced spreadsheets, phone calls, and WhatsApp groups with an intelligent trading platform for South Africa\'s coal industry.',
    accentColor: 'var(--ember-red)',
    icon: <BarChartIcon />,
    challenge: [
      'MineX operates in the heart of South Africa\'s coal trading ecosystem — connecting mines across Mpumalanga and Limpopo with industrial buyers, power utilities, and export terminals. Before working with DDM Technology, their entire trading operation ran on a patchwork of Excel spreadsheets, phone calls, and WhatsApp groups with hundreds of unread messages.',
      'Trade matching was painfully manual. A buyer would request 10,000 tonnes of RB1-grade coal, and a trader would spend hours cross-referencing availability across five or six mines, comparing specs, checking logistics capacity, and negotiating prices — all while juggling calls and forwarding spreadsheets. Deals regularly fell through because a competing broker moved faster.',
      'Compliance was another bottleneck. Every trade requires mining permits, quality certificates, transport documentation, and BEE verification. Compiling these documents took the back-office team an average of three days per trade. During peak months, the team was drowning in paperwork while new trade opportunities slipped away.',
      'Load shedding compounded the problem. When the power went out, the team lost access to their on-premise systems. Trades stalled, documents disappeared into email threads, and pricing data became outdated before it could be acted on. MineX needed a cloud-based solution that could keep the business running regardless of Eskom\'s schedule.',
    ],
    solution: {
      intro: 'We designed and built an AI-powered coal trading marketplace — a cloud-native platform accessible from any device, even during load shedding on mobile data.',
      components: [
        {
          title: 'AI Trade Matching Engine',
          description: 'Our custom matching algorithm analyses buyer requirements (grade, volume, delivery window, location) against real-time mine inventory. It ranks matches by compatibility score, factoring in logistics costs and historical reliability. What used to take hours now happens in seconds.',
          icon: <CpuIcon />,
          color: 'var(--ember-red)',
        },
        {
          title: 'Real-Time Pricing Intelligence',
          description: 'The platform aggregates pricing data from multiple sources — Richards Bay benchmark, spot market trends, and historical trade data — to provide AI-generated pricing recommendations. Traders negotiate from a position of knowledge, not guesswork.',
          icon: <TrendingUpIcon />,
          color: 'var(--ocean-cyan)',
        },
        {
          title: 'Automated Compliance Documents',
          description: 'We built document generation workflows using n8n that automatically compile mining permits, quality certificates, BEE documents, and transport manifests into compliant trade packs. What took 3 days now takes 2 hours with minimal manual input.',
          icon: <ShieldCheckIcon />,
          color: 'var(--ocean-blue)',
        },
        {
          title: 'Logistics Coordination',
          description: 'The platform integrates with transport providers and tracks truck availability, route planning, and delivery scheduling. Automated notifications keep all parties informed at every stage of the trade lifecycle.',
          icon: <GlobeIcon />,
          color: 'var(--ocean-teal)',
        },
      ],
    },
    results: [
      { metric: 'R50M+', label: 'Trades digitised', description: 'In total trade value processed through the platform within the first 6 months of operation' },
      { metric: '70%', label: 'Faster matching', description: 'Reduction in the time taken to match buyers with sellers — from hours of manual work to minutes' },
      { metric: '3 days → 2 hrs', label: 'Compliance docs', description: 'Time to compile full trade compliance packs reduced from 3 business days to approximately 2 hours' },
      { metric: '15+', label: 'Active partners', description: 'Trading partners actively using the platform, including mines, buyers, and logistics providers' },
    ],
    techStack: [
      { name: 'Custom AI Matching Engine', category: 'AI' },
      { name: 'n8n Workflow Automation', category: 'Automation' },
      { name: 'Document Generation AI', category: 'AI' },
      { name: 'Real-Time Pricing API', category: 'Integration' },
      { name: 'Cloud-Native Architecture', category: 'Infrastructure' },
      { name: 'WhatsApp Notifications', category: 'Communication' },
      { name: 'RESTful APIs', category: 'Integration' },
      { name: 'PostgreSQL', category: 'Database' },
    ],
    timeline: [
      { phase: '01', title: 'Discovery', duration: '2 weeks', description: 'On-site visits to MineX offices and partner mines in Mpumalanga. Mapped the full trade lifecycle, identified bottlenecks, and documented compliance requirements.' },
      { phase: '02', title: 'Design', duration: '3 weeks', description: 'Designed the platform architecture, AI matching algorithms, and user workflows. Presented interactive prototypes to the MineX team for feedback and iteration.' },
      { phase: '03', title: 'Build', duration: '8 weeks', description: 'Developed the trading platform, AI matching engine, document automation, and pricing intelligence module. Integrated with existing transport and compliance systems.' },
      { phase: '04', title: 'Deploy', duration: '2 weeks', description: 'Staged rollout starting with 5 trading partners. On-site training, data migration from spreadsheets, and parallel running to validate accuracy.' },
      { phase: '05', title: 'Optimise', duration: 'Ongoing', description: 'Continuous improvement of matching algorithms based on trade outcomes. Added new features including load shedding resilience mode and mobile-optimised trading.' },
    ],
    testimonial: {
      quote: 'Before DDM Technology, we were running a R50 million operation on WhatsApp and spreadsheets. Now our traders close deals in a fraction of the time, compliance is handled automatically, and we haven\'t lost a single trade to a power cut since going live. The platform paid for itself within the first month.',
      name: 'Johan V.',
      role: 'Operations Director, MineX',
    },
    relatedSlugs: ['flame-and-fork', 'urbannest'],
    seo: {
      title: 'MineX Case Study — AI Coal Trading Marketplace',
      description: 'How DDM Technology built an AI-powered coal trading marketplace for MineX, digitising R50M+ in trades and cutting compliance document generation from 3 days to 2 hours.',
      keywords: 'AI coal trading South Africa, mining automation, commodity trading platform, AI marketplace, DDM Technology case study, MineX',
    },
  },
  'flame-and-fork': {
    company: 'Flame & Fork',
    slug: 'flame-and-fork',
    industry: 'Restaurant Chain — 8 Locations',
    headline: 'Cut order processing time by 80% with AI-powered operations',
    heroSubtitle: 'How we transformed a growing Johannesburg restaurant chain from manual chaos to AI-driven efficiency across all 8 locations.',
    accentColor: 'var(--ocean-cyan)',
    icon: <RocketIcon />,
    challenge: [
      'Flame & Fork is a popular casual dining chain with 8 locations across Johannesburg — from Sandton City to Soweto. Business was booming, but their operational systems hadn\'t kept up with growth. Each location was essentially running as an independent operation, with managers manually processing orders, counting inventory, and calling suppliers.',
      'The order processing bottleneck was brutal. During peak hours, kitchen staff juggled orders from dine-in, Uber Eats, Mr D, and phone orders simultaneously — all entering the system through different channels. Orders were frequently missed or duplicated, leading to customer complaints and wasted food. Average wait times had crept up to 35 minutes, and their Google reviews were suffering.',
      'Inventory management was even worse. Head office had no real-time visibility into stock levels across locations. Managers did manual counts every evening, often staying late to reconcile numbers that didn\'t add up. Food waste was running at nearly 20% — a devastating figure for a business operating on restaurant-thin margins. Supplier orders were placed based on gut feel, leading to both stockouts on busy weekends and waste from over-ordering mid-week.',
      'The chain was also losing money to inconsistency. The same dish would cost different amounts to produce at different locations because each branch manager negotiated independently with suppliers. There was no centralised purchasing, no demand forecasting, and no way to identify which menu items were profitable and which were quietly bleeding money.',
    ],
    solution: {
      intro: 'We built an integrated AI operations system that unifies order management, predicts demand, and automates the supply chain across all 8 Flame & Fork locations.',
      components: [
        {
          title: 'AI Order Processing Pipeline',
          description: 'A centralised system that ingests orders from all channels — POS, Uber Eats, Mr D, phone, and WhatsApp — into a single queue. AI prioritises orders by preparation time, customer wait, and kitchen capacity, routing them to the right stations automatically.',
          icon: <ZapIcon />,
          color: 'var(--ocean-cyan)',
        },
        {
          title: 'Demand Prediction Model',
          description: 'Our AI model analyses historical sales data, day of week, weather forecasts, school holidays, local events, and even payday cycles to predict demand per menu item per location. It forecasts with 89% accuracy up to 7 days ahead.',
          icon: <TrendingUpIcon />,
          color: 'var(--ember-red)',
        },
        {
          title: 'Automated Supplier Management',
          description: 'The system generates purchase orders automatically based on predicted demand and current stock levels. It consolidates orders across locations for better pricing and sends orders to suppliers via email and WhatsApp at optimal times.',
          icon: <SettingsIcon />,
          color: 'var(--ocean-blue)',
        },
        {
          title: 'WhatsApp Notification Bot',
          description: 'Managers receive daily briefings via WhatsApp — expected demand, prep lists, delivery schedules, and flagged items nearing expiry. Head office gets a real-time dashboard showing performance across all 8 locations.',
          icon: <MessageCircleIcon />,
          color: 'var(--ocean-teal)',
        },
      ],
    },
    results: [
      { metric: '80%', label: 'Faster processing', description: 'Order processing time reduced by 80% across all locations, from an average of 8 minutes to under 90 seconds per order' },
      { metric: '35%', label: 'Less food waste', description: 'AI-driven demand prediction cut food waste from nearly 20% down to 13%, saving both costs and environmental impact' },
      { metric: 'R120K/mo', label: 'Cost savings', description: 'Monthly savings on inventory waste, labour hours, and consolidated supplier pricing across the chain' },
      { metric: '4.2 → 4.8', label: 'Google rating', description: 'Average Google review score improved from 4.2 to 4.8 stars as wait times dropped and order accuracy improved' },
    ],
    techStack: [
      { name: 'AI Order Processing Pipeline', category: 'AI' },
      { name: 'Demand Prediction Model', category: 'AI' },
      { name: 'Automated Supplier Comms', category: 'Automation' },
      { name: 'WhatsApp Notification Bot', category: 'Communication' },
      { name: 'POS Integration Layer', category: 'Integration' },
      { name: 'n8n Workflow Engine', category: 'Automation' },
      { name: 'Real-Time Analytics Dashboard', category: 'Analytics' },
      { name: 'Weather & Events API', category: 'Integration' },
    ],
    timeline: [
      { phase: '01', title: 'Discovery', duration: '2 weeks', description: 'Spent time in 3 locations observing kitchen operations, interviewing managers, and mapping order flows. Analysed 6 months of sales and waste data to identify patterns.' },
      { phase: '02', title: 'Design', duration: '2 weeks', description: 'Designed the unified order pipeline, demand prediction model, and supplier automation workflows. Presented the solution architecture to Flame & Fork\'s management team.' },
      { phase: '03', title: 'Build', duration: '6 weeks', description: 'Built the AI systems, integrated with existing POS terminals and delivery platforms. Trained the demand model on historical data and validated against real-world patterns.' },
      { phase: '04', title: 'Deploy', duration: '3 weeks', description: 'Rolled out to 2 pilot locations first, then expanded to all 8 over 3 weeks. On-site training for kitchen staff and managers at each location.' },
      { phase: '05', title: 'Optimise', duration: 'Ongoing', description: 'Continuous model retraining as new data flows in. Added menu profitability analysis and seasonal menu recommendation features based on demand patterns.' },
    ],
    testimonial: {
      quote: 'We were sceptical that AI could understand the chaos of a busy kitchen — but within a week of going live, our managers were calling head office saying "this thing is magic." We\'re serving more customers, wasting less food, and our staff actually get to go home on time now. The R120K monthly saving was the business case, but the team morale improvement was the real win.',
      name: 'Naledi M.',
      role: 'Head of Operations, Flame & Fork',
    },
    relatedSlugs: ['minex', 'urbannest'],
    seo: {
      title: 'Flame & Fork Case Study — AI Restaurant Operations',
      description: 'How DDM Technology cut order processing time by 80% and saved R120K/month for Flame & Fork, a Johannesburg restaurant chain with 8 locations, using AI-powered operations.',
      keywords: 'AI restaurant automation South Africa, restaurant operations AI, food waste reduction AI, order processing automation, DDM Technology case study, Flame and Fork',
    },
  },
  urbannest: {
    company: 'UrbanNest',
    slug: 'urbannest',
    industry: 'Property Management — 200+ Units',
    headline: 'Automated tenant communications, saved 20+ hours per week',
    heroSubtitle: 'How we gave a lean property management team their time back with AI-powered tenant communication, maintenance routing, and payment automation.',
    accentColor: 'var(--ocean-blue)',
    icon: <SparklesIcon />,
    challenge: [
      'UrbanNest manages over 200 rental units across Johannesburg — a mix of apartments in Braamfontein and Maboneng, townhouses in Randburg, and student accommodation near Wits and UJ. Their team of 6 was responsible for everything: tenant enquiries, maintenance coordination, lease administration, and rent collection.',
      'The communication burden was overwhelming. On any given day, the team fielded 80 to 120 WhatsApp messages and phone calls from tenants — questions about lease terms, requests for maintenance, complaints about neighbours, queries about payment references, and calls asking "when is the plumber coming?" Most of these were repetitive questions with straightforward answers, but each one demanded time and attention.',
      'Maintenance was the biggest pain point. A tenant would report a burst pipe via WhatsApp, but the message would get buried under 30 other conversations. By the time someone picked it up, the problem had escalated — and so had the tenant\'s frustration. There was no system for prioritising requests, tracking resolution, or communicating status updates. The team was essentially using their memory and a shared spreadsheet to manage hundreds of active maintenance issues.',
      'Rent collection was another drain on the team\'s time. With 200+ units, payment follow-ups were a full-time job. The accounts person spent 3 days every month sending reminder messages, checking bank statements for payments, and chasing late payers. Despite this effort, on-time payment rates sat at just 68% — meaning a third of tenants were consistently late, creating cash flow headaches for the business and its property owners.',
    ],
    solution: {
      intro: 'We built a comprehensive AI tenant management system that handles the bulk of daily communications, intelligently routes maintenance requests, and automates the payment collection cycle.',
      components: [
        {
          title: 'WhatsApp AI Chatbot',
          description: 'A multilingual chatbot (English, Afrikaans, Zulu) that handles routine tenant enquiries 24/7 — lease terms, payment references, building rules, and contact details. It understands natural language and responds conversationally, not like a menu-driven bot.',
          icon: <MessageCircleIcon />,
          color: 'var(--ocean-blue)',
        },
        {
          title: 'Smart Maintenance Routing',
          description: 'Tenants report issues via WhatsApp with photos. The AI categorises the issue (plumbing, electrical, structural, cosmetic), assigns urgency, and routes to the correct contractor — with automatic status updates to the tenant at every stage.',
          icon: <WrenchIcon />,
          color: 'var(--ember-red)',
        },
        {
          title: 'Lease Management Workflows',
          description: 'Automated workflows handle lease renewals — sending notices 90 days before expiry, collecting tenant responses, generating renewal documents, and flagging leases that need manual attention. No more missed renewals or scrambled paperwork.',
          icon: <LayersIcon />,
          color: 'var(--ocean-cyan)',
        },
        {
          title: 'Payment Reminder Automation',
          description: 'A smart payment system that sends friendly reminders via WhatsApp before due dates, confirms received payments by matching bank statement entries, and escalates overdue accounts through a graduated follow-up sequence — all without human intervention.',
          icon: <TrendingUpIcon />,
          color: 'var(--ocean-teal)',
        },
      ],
    },
    results: [
      { metric: '20+ hrs/wk', label: 'Time saved', description: 'Hours per week saved on tenant communications, freeing the team to focus on property acquisitions and owner relationships' },
      { metric: '90%', label: 'AI-handled queries', description: 'Of routine tenant enquiries are now resolved by the AI chatbot without any human intervention needed' },
      { metric: '2 days → 4 hrs', label: 'Maintenance resolution', description: 'Average time from maintenance request to contractor dispatch reduced from 2 business days to 4 hours' },
      { metric: '40%', label: 'Better collections', description: 'Improvement in on-time rent collection — from 68% to over 95% of tenants paying before the due date' },
    ],
    techStack: [
      { name: 'WhatsApp AI Chatbot', category: 'AI' },
      { name: 'Automated Maintenance Routing', category: 'Automation' },
      { name: 'Lease Management Workflows', category: 'Automation' },
      { name: 'Payment Reminder System', category: 'Automation' },
      { name: 'n8n Workflow Engine', category: 'Automation' },
      { name: 'NLP Language Detection', category: 'AI' },
      { name: 'Bank Statement Matching', category: 'Integration' },
      { name: 'Contractor Management Portal', category: 'Integration' },
    ],
    timeline: [
      { phase: '01', title: 'Discovery', duration: '2 weeks', description: 'Audited UrbanNest\'s WhatsApp conversations (with permission), categorised enquiry types, and mapped the maintenance and payment workflows. Identified that 72% of messages were routine and automatable.' },
      { phase: '02', title: 'Design', duration: '2 weeks', description: 'Designed the chatbot conversation flows, maintenance routing logic, and payment automation sequences. Tested chatbot responses with real tenant scenarios before build.' },
      { phase: '03', title: 'Build', duration: '5 weeks', description: 'Developed the WhatsApp chatbot, maintenance ticketing system, lease workflow automations, and payment reminder sequences. Integrated with UrbanNest\'s existing property management software.' },
      { phase: '04', title: 'Deploy', duration: '2 weeks', description: 'Launched with a pilot group of 50 units. Monitored chatbot accuracy, refined responses based on tenant feedback, then rolled out to all 200+ units.' },
      { phase: '05', title: 'Optimise', duration: 'Ongoing', description: 'Continuous chatbot training on new query types. Added student-specific flows for Wits/UJ accommodation and a load shedding notification feature that tenants love.' },
    ],
    testimonial: {
      quote: 'Our team of 6 was drowning — we couldn\'t hire fast enough to keep up with tenant messages. DDM Technology\'s AI system didn\'t just save us 20 hours a week, it completely changed how tenants experience UrbanNest. Maintenance gets handled before tenants even think to follow up, rent comes in on time, and my team can finally focus on growing the portfolio instead of fighting fires.',
      name: 'Thabo K.',
      role: 'Managing Director, UrbanNest Property Group',
    },
    relatedSlugs: ['minex', 'flame-and-fork'],
    seo: {
      title: 'UrbanNest Case Study — AI Property Management',
      description: 'How DDM Technology automated tenant communications for UrbanNest, saving 20+ hours/week and improving on-time rent collection by 40% across 200+ Johannesburg rental units.',
      keywords: 'AI property management South Africa, tenant communication automation, WhatsApp chatbot property, maintenance automation, DDM Technology case study, UrbanNest',
    },
  },
}

const slugs = ['minex', 'flame-and-fork', 'urbannest'] as const

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudyData[params.slug]
  if (!study) return {}

  return {
    title: study.seo.title,
    description: study.seo.description,
    keywords: study.seo.keywords,
    openGraph: {
      title: `${study.seo.title} | DDM Technology`,
      description: study.seo.description,
      type: 'article',
      locale: 'en_ZA',
      siteName: 'DDM Technology',
      url: `https://ddmtech.co.za/case-studies/${study.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.seo.title} | DDM Technology`,
      description: study.seo.description,
    },
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
  }
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const study = caseStudyData[params.slug]
  if (!study) notFound()

  const relatedStudies = study.relatedSlugs.map((s) => caseStudyData[s]).filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.headline,
    description: study.seo.description,
    url: `https://ddmtech.co.za/case-studies/${study.slug}`,
    author: {
      '@type': 'Organization',
      name: 'DDM Technology',
      url: 'https://ddmtech.co.za',
    },
    publisher: {
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
    about: {
      '@type': 'Organization',
      name: study.company,
      industry: study.industry,
    },
    keywords: study.seo.keywords,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="page-header" style={{ paddingBottom: '5rem' }}>
        <div className="page-header-content" style={{ maxWidth: '800px' }}>
          <Link
            href="/case-studies"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              marginBottom: '2rem',
              transition: 'color var(--duration-fast)',
            }}
          >
            <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}><ArrowRightIcon /></span>
            Back to Case Studies
          </Link>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: `linear-gradient(135deg, ${study.accentColor}22, ${study.accentColor}11)`,
              border: `1px solid ${study.accentColor}44`,
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: study.accentColor,
              flexShrink: 0,
            }}>
              {study.icon}
            </div>
            <div>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 1.15,
                fontWeight: 600,
                marginBottom: '0.25rem',
              }}>
                {study.company}
              </h1>
              <span style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '100px',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
              }}>
                {study.industry}
              </span>
            </div>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '1rem',
          }}>
            {study.headline}
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
          }}>
            {study.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Key Results - Prominent */}
      <section style={{
        background: 'var(--bg-primary)',
        padding: '4rem 2rem',
        marginTop: '-2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {study.results.map((result) => (
              <div
                key={result.label}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem 1.5rem',
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
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 700,
                  background: 'var(--gradient-ember-ocean)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem',
                  lineHeight: 1.2,
                }}>
                  {result.metric}
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}>
                  {result.label}
                </div>
                <div style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                }}>
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        padding: '4rem 2rem 6rem',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                width: '4px',
                height: '32px',
                background: 'var(--ember-red)',
                borderRadius: '2px',
              }} />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}>
                The Challenge
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {study.challenge.map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: '1.0625rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section style={{
        background: 'var(--bg-secondary)',
        padding: '6rem 2rem',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '4px',
                height: '32px',
                background: 'var(--ocean-cyan)',
                borderRadius: '2px',
              }} />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}>
                Our Solution
              </h2>
            </div>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
            }}>
              {study.solution.intro}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {study.solution.components.map((component) => (
              <div
                key={component.title}
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
                  background: `linear-gradient(90deg, ${component.color}, transparent)`,
                }} />
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: `linear-gradient(135deg, ${component.color}22, ${component.color}11)`,
                  border: `1px solid ${component.color}44`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: component.color,
                  marginBottom: '1.25rem',
                }}>
                  {component.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {component.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section style={{
        background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        padding: '6rem 2rem',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                width: '4px',
                height: '32px',
                background: 'var(--ocean-blue)',
                borderRadius: '2px',
              }} />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}>
                Technology Stack
              </h2>
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}>
              {study.techStack.map((tech) => {
                const categoryColors: Record<string, string> = {
                  AI: 'var(--ember-red)',
                  Automation: 'var(--ocean-cyan)',
                  Integration: 'var(--ocean-blue)',
                  Communication: '#25D366',
                  Infrastructure: 'var(--ocean-teal)',
                  Database: 'var(--ocean-indigo)',
                  Analytics: 'var(--ember-crimson)',
                }
                const color = categoryColors[tech.category] || 'var(--ocean-blue)'
                return (
                  <div
                    key={tech.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      background: `linear-gradient(135deg, ${color}11, ${color}08)`,
                      border: `1px solid ${color}33`,
                      borderRadius: '100px',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: color,
                      flexShrink: 0,
                    }} />
                    {tech.name}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{
        background: 'var(--bg-primary)',
        padding: '6rem 2rem',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '3rem',
            }}>
              <div style={{
                width: '4px',
                height: '32px',
                background: 'var(--gradient-ember-ocean)',
                borderRadius: '2px',
              }} />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}>
                Project Timeline
              </h2>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              position: 'relative',
            }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: '23px',
                top: '24px',
                bottom: '24px',
                width: '2px',
                background: 'var(--border-subtle)',
              }} />

              {study.timeline.map((phase, i) => (
                <div
                  key={phase.phase}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    padding: '1.5rem 0',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '2px solid var(--border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: study.accentColor,
                    flexShrink: 0,
                    zIndex: 1,
                  }}>
                    {phase.phase}
                  </div>
                  <div style={{ flex: 1, paddingTop: '0.25rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.5rem',
                      flexWrap: 'wrap',
                    }}>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}>
                        {phase.title}
                      </h3>
                      <span style={{
                        padding: '0.125rem 0.625rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                      }}>
                        {phase.duration}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}>
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        padding: '6rem 2rem',
      }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: '3rem',
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

            {/* Quote mark */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '4rem',
              lineHeight: 1,
              background: 'var(--gradient-ember-ocean)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem',
            }}>
              &ldquo;
            </div>

            <blockquote style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              fontStyle: 'italic',
              marginBottom: '2rem',
            }}>
              {study.testimonial.quote}
            </blockquote>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${study.accentColor}33, ${study.accentColor}11)`,
                border: `1px solid ${study.accentColor}44`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: study.accentColor,
              }}>
                {study.testimonial.name.charAt(0)}
              </div>
              <div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}>
                  {study.testimonial.name}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                }}>
                  {study.testimonial.role}
                </div>
              </div>
            </div>

            <p style={{
              fontSize: '0.75rem',
              color: 'var(--text-dim)',
              marginTop: '1.5rem',
              fontStyle: 'italic',
            }}>
              * Representative testimonial based on project outcomes. Name abbreviated for privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section style={{
        background: 'var(--bg-secondary)',
        padding: '6rem 2rem',
      }}>
        <div className="container">
          <h2 className="section-title">More Case Studies</h2>
          <p className="section-subtitle">See how we have helped other South African businesses</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {relatedStudies.map((related) => (
              <Link
                key={related.slug}
                href={`/case-studies/${related.slug}`}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'block',
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: `linear-gradient(135deg, ${related.accentColor}22, ${related.accentColor}11)`,
                    border: `1px solid ${related.accentColor}44`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: related.accentColor,
                    flexShrink: 0,
                  }}>
                    {related.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}>
                      {related.company}
                    </div>
                    <span style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                    }}>
                      {related.industry}
                    </span>
                  </div>
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                }}>
                  {related.headline}
                </p>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: related.accentColor,
                }}>
                  Read case study <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <div className="cta-section">
            <h2>Want Results Like These?</h2>
            <p>
              Book a free AI audit and we&apos;ll show you exactly how automation can
              transform your business — with projected ROI in Rands.
            </p>
            <Link href="/ai-services/contact" className="cta-button">
              Let&apos;s Talk <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
