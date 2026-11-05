import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  UtensilsIcon,
  HomeIcon,
  HeartIcon,
  CalculatorIcon,
  ShoppingCartIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  ClockIcon,
  MessageCircleIcon,
  CalendarIcon,
  PackageIcon,
  UsersIcon,
  PhoneIcon,
  SettingsIcon,
  ShieldCheckIcon,
  FileTextIcon,
  BarChartIcon,
  ClipboardIcon,
  CpuIcon,
  TrendingUpIcon,
  ZapIcon,
  GlobeIcon,
  TargetIcon,
  BuildingIcon,
  TruckIcon,
} from '@/components/Icons'

interface IndustryData {
  name: string
  slug: string
  headline: string
  subtitle: string
  icon: React.ReactNode
  accentColor: string
  painPoints: { icon: React.ReactNode; title: string; description: string }[]
  solutions: { icon: React.ReactNode; title: string; description: string }[]
  stats: { figure: string; label: string; description: string }[]
  caseStudy: {
    title: string
    description: string
    metric: string
    metricLabel: string
    link: string | null
    linkText: string
  }
  blogSlugs: string[]
  seo: {
    title: string
    description: string
    keywords: string
  }
}

const industryData: Record<string, IndustryData> = {
  restaurants: {
    name: 'Restaurants & Food Service',
    slug: 'restaurants',
    headline: 'AI Automation for Restaurants',
    subtitle:
      'Stop losing money to food waste, missed orders, and scheduling chaos. Let AI handle the operations so you can focus on the food.',
    icon: <UtensilsIcon />,
    accentColor: 'var(--ember-red)',
    painPoints: [
      {
        icon: <PackageIcon />,
        title: 'Order Management Chaos',
        description:
          'Orders flooding in from WhatsApp, phone calls, walk-ins, and delivery apps — with no single system to track them. Items get missed, wrong orders go out, and customers don\'t come back.',
      },
      {
        icon: <CalendarIcon />,
        title: 'Staff Scheduling Nightmares',
        description:
          'Overstaffed on quiet nights, understaffed on busy ones. Manual scheduling eats hours every week and still gets it wrong, costing you R5,000+ per month in wasted labour.',
      },
      {
        icon: <AlertTriangleIcon />,
        title: 'Inventory Waste',
        description:
          'South African restaurants waste 10-15% of stock to spoilage and over-ordering. Without real-time tracking, you\'re throwing Rands in the bin every single day.',
      },
      {
        icon: <MessageCircleIcon />,
        title: 'WhatsApp Order Overload',
        description:
          'Customers want to order via WhatsApp — but your staff can\'t keep up. Messages get buried, orders get lost, and response times kill repeat business.',
      },
    ],
    solutions: [
      {
        icon: <CpuIcon />,
        title: 'AI Order Processing',
        description:
          'Our AI system captures orders from every channel — WhatsApp, phone, walk-in, delivery apps — into one intelligent dashboard. No more double-entries, no more missed items. Orders are automatically categorised, timestamped, and routed to your kitchen.',
      },
      {
        icon: <BarChartIcon />,
        title: 'Automated Inventory Alerts',
        description:
          'AI monitors your stock levels in real time, predicts usage patterns based on historical data, and sends smart alerts before you run out — or over-order. Reduce food waste by 25-35% and stop the daily guessing game.',
      },
      {
        icon: <MessageCircleIcon />,
        title: 'WhatsApp Ordering Bot',
        description:
          'A custom AI-powered WhatsApp bot takes orders 24/7 — confirming items, calculating totals in Rands, and sending order confirmations instantly. Your customers get fast service; your staff get freed up.',
      },
      {
        icon: <CalendarIcon />,
        title: 'Smart Staff Scheduling',
        description:
          'AI analyses foot traffic, reservation data, and seasonal patterns to generate optimised staff schedules. The right people at the right time — cutting labour costs while keeping service quality high.',
      },
    ],
    stats: [
      {
        figure: '25-35%',
        label: 'Less Food Waste',
        description:
          'Restaurants using AI inventory management reduce food waste by 25-35% within the first 3 months.',
      },
      {
        figure: '3x',
        label: 'Faster Order Processing',
        description:
          'AI order systems process and route orders 3x faster than manual handling across multiple channels.',
      },
      {
        figure: 'R8,000+',
        label: 'Monthly Savings',
        description:
          'Average monthly savings from reduced waste, optimised scheduling, and fewer order errors.',
      },
    ],
    caseStudy: {
      title: 'Flame & Fork — From WhatsApp Chaos to Automated Orders',
      description:
        'Flame & Fork was drowning in WhatsApp orders and losing 12% of stock to waste. We built an AI system that automated their order processing, cut food waste by 30%, and saved them over R10,000 per month.',
      metric: '30%',
      metricLabel: 'Reduction in Food Waste',
      link: '/case-studies/flame-and-fork',
      linkText: 'Read the Flame & Fork Case Study',
    },
    blogSlugs: [],
    seo: {
      title: 'AI Automation for Restaurants in South Africa | DDM Technology',
      description:
        'Reduce food waste by 25-35%, automate WhatsApp orders, and optimise staff scheduling with AI automation built for SA restaurants. Based in Johannesburg.',
      keywords:
        'restaurant AI automation South Africa, AI for restaurants Johannesburg, WhatsApp ordering bot, restaurant inventory AI, smart scheduling restaurants SA',
    },
  },

  'real-estate': {
    name: 'Real Estate & Property',
    slug: 'real-estate',
    headline: 'AI Automation for Real Estate',
    subtitle:
      'Respond to every lead instantly, manage listings automatically, and close more deals — even when you\'re not at your desk.',
    icon: <HomeIcon />,
    accentColor: 'var(--ocean-cyan)',
    painPoints: [
      {
        icon: <ClockIcon />,
        title: 'Slow Lead Response',
        description:
          'Property leads go cold fast — 78% of buyers go with the first agent to respond. If you\'re taking hours to reply to enquiries, you\'re losing deals to faster competitors.',
      },
      {
        icon: <ClipboardIcon />,
        title: 'Listing Management Overload',
        description:
          'Updating property listings across Property24, Private Property, your website, and social media is a full-time job. One missed update means outdated prices and wasted viewings.',
      },
      {
        icon: <FileTextIcon />,
        title: 'Document Handling Bottleneck',
        description:
          'Offers to purchase, compliance certificates, bond applications — the paperwork per transaction is enormous. Manual processing delays closings and frustrates buyers.',
      },
      {
        icon: <PhoneIcon />,
        title: 'After-Hours Enquiries',
        description:
          'Property searches peak in the evening and on weekends. Every unanswered enquiry after hours is a potential sale lost to an agent with a bigger team — or a chatbot.',
      },
    ],
    solutions: [
      {
        icon: <MessageCircleIcon />,
        title: 'AI Property Chatbot — 24/7',
        description:
          'An intelligent chatbot on your website and WhatsApp handles property enquiries around the clock. It answers questions about listings, checks availability, books viewings, and captures lead details — all while you sleep.',
      },
      {
        icon: <SettingsIcon />,
        title: 'Automated Listing Updates',
        description:
          'Change a price or mark a property as sold once — and AI syncs it across all your platforms automatically. No more manual updates, no more "sorry, that one\'s been sold" calls.',
      },
      {
        icon: <FileTextIcon />,
        title: 'AI Document Processing',
        description:
          'Our AI extracts data from compliance certs, title deeds, and bond applications. Documents that took hours to process now take minutes — with fewer errors and faster closings.',
      },
      {
        icon: <TargetIcon />,
        title: 'Intelligent Lead Scoring',
        description:
          'AI analyses enquiry behaviour, response patterns, and engagement signals to score and prioritise your hottest leads. Spend your time on buyers who are ready to commit.',
      },
    ],
    stats: [
      {
        figure: '5x',
        label: 'Faster Lead Response',
        description:
          'Estate agents using AI chatbots respond to leads 5x faster than manual follow-up, capturing more deals.',
      },
      {
        figure: '40%',
        label: 'More Viewings Booked',
        description:
          'Automated scheduling and 24/7 availability increase viewing bookings by up to 40%.',
      },
      {
        figure: '60%',
        label: 'Less Admin Time',
        description:
          'AI document processing and listing automation cut admin overhead by up to 60%.',
      },
    ],
    caseStudy: {
      title: 'AI Chatbot Demo — 24/7 Property Enquiry Handling',
      description:
        'We built a proof-of-concept AI chatbot for a Johannesburg estate agency that handled 85% of after-hours enquiries automatically — booking 3x more viewings without additional staff.',
      metric: '85%',
      metricLabel: 'Enquiries Handled Automatically',
      link: null,
      linkText: 'Contact Us for a Demo',
    },
    blogSlugs: [],
    seo: {
      title: 'AI for Real Estate Agents in South Africa | DDM Technology',
      description:
        'Respond to property leads 5x faster with AI chatbots, automate listing management, and process documents instantly. AI solutions for SA estate agents.',
      keywords:
        'real estate AI South Africa, AI for estate agents, property management automation, AI chatbot real estate, property listing automation Johannesburg',
    },
  },

  healthcare: {
    name: 'Healthcare, Dental & Wellness',
    slug: 'healthcare',
    headline: 'AI Automation for Healthcare',
    subtitle:
      'Reduce no-shows, streamline patient communication, and free your team from admin overload — so they can focus on patient care.',
    icon: <HeartIcon />,
    accentColor: 'var(--ocean-teal)',
    painPoints: [
      {
        icon: <CalendarIcon />,
        title: 'Appointment No-Shows',
        description:
          'No-shows cost SA healthcare practices R2,000-R5,000 per empty slot. Manual reminder calls are hit-or-miss, and SMS reminders alone aren\'t cutting it anymore.',
      },
      {
        icon: <MessageCircleIcon />,
        title: 'Patient Communication Gaps',
        description:
          'Patients want to confirm appointments, ask about results, and request scripts via WhatsApp — but your reception team is already overwhelmed with walk-ins and phone calls.',
      },
      {
        icon: <ClipboardIcon />,
        title: 'Admin Overload',
        description:
          'Medical aids, patient records, intake forms, referrals — your front desk spends more time on paperwork than patient interaction. This bottleneck slows everything down.',
      },
      {
        icon: <PhoneIcon />,
        title: 'After-Hours Calls',
        description:
          'Patients call after hours for everything from appointment bookings to emergency queries. Without an intelligent system, these calls go to voicemail — and patients go elsewhere.',
      },
    ],
    solutions: [
      {
        icon: <MessageCircleIcon />,
        title: 'AI Appointment Reminders',
        description:
          'Automated WhatsApp and SMS reminders sent at optimal intervals — 48 hours, 24 hours, and 2 hours before appointments. Patients can confirm, reschedule, or cancel with a single tap. No-shows drop by 30-40%.',
      },
      {
        icon: <GlobeIcon />,
        title: 'WhatsApp Patient Communication',
        description:
          'An AI-powered WhatsApp assistant handles appointment bookings, script requests, and general enquiries. Patients get instant responses; your team gets breathing room.',
      },
      {
        icon: <FileTextIcon />,
        title: 'Automated Intake Forms',
        description:
          'Digital intake forms sent via WhatsApp before the appointment. Patient data is captured, validated, and synced to your practice management system — no clipboards, no data entry.',
      },
      {
        icon: <CalendarIcon />,
        title: 'Smart Scheduling',
        description:
          'AI optimises your appointment book by filling cancellation gaps, spacing procedures for proper setup time, and reducing wait times. Your day runs smoother, and patients notice.',
      },
    ],
    stats: [
      {
        figure: '30-40%',
        label: 'Fewer No-Shows',
        description:
          'Healthcare practices using AI reminders see 30-40% reduction in appointment no-shows within 2 months.',
      },
      {
        figure: '70%',
        label: 'Admin Time Saved',
        description:
          'Automated intake and AI scheduling reduce front-desk admin workload by up to 70%.',
      },
      {
        figure: 'R15,000+',
        label: 'Monthly Revenue Recovered',
        description:
          'Average revenue recovered from reduced no-shows and optimised scheduling per practice.',
      },
    ],
    caseStudy: {
      title: 'Nice Smile Dentists — Beating the No-Show Problem',
      description:
        'A Roodepoort dental practice was losing R20,000+ per month to no-shows. We implemented AI appointment reminders and a WhatsApp booking bot that cut no-shows by 38% and freed up 15 hours per week of admin time.',
      metric: '38%',
      metricLabel: 'Reduction in No-Shows',
      link: null,
      linkText: 'Contact Us to Learn More',
    },
    blogSlugs: [],
    seo: {
      title: 'AI for Healthcare & Dental Practices in South Africa | DDM Technology',
      description:
        'Reduce no-shows by 30-40%, automate patient communication via WhatsApp, and streamline practice admin with AI. Built for SA healthcare practices.',
      keywords:
        'healthcare AI South Africa, dental practice automation, medical AI Johannesburg, AI appointment reminders, WhatsApp healthcare bot, practice management AI',
    },
  },

  accounting: {
    name: 'Accounting & Tax',
    slug: 'accounting',
    headline: 'AI Automation for Accounting',
    subtitle:
      'Automate data entry, streamline SARS compliance, and reclaim 15-20 hours every week — especially during tax season.',
    icon: <CalculatorIcon />,
    accentColor: 'var(--ocean-blue)',
    painPoints: [
      {
        icon: <ShieldCheckIcon />,
        title: 'SARS Compliance Complexity',
        description:
          'SARS regulations change frequently, and keeping every client compliant across VAT, PAYE, income tax, and provisional tax is a constant moving target. One missed deadline means penalties.',
      },
      {
        icon: <ClipboardIcon />,
        title: 'Manual Data Entry',
        description:
          'Bank statements, invoices, receipts — your team spends 15-20 hours per week typing data from one system into another. It\'s tedious, error-prone, and your most expensive staff shouldn\'t be doing it.',
      },
      {
        icon: <ClockIcon />,
        title: 'Client Communication Delays',
        description:
          'Clients want updates on their returns, outstanding documents, and tax positions — but your team is buried in work. Slow responses erode trust and lose clients to bigger firms.',
      },
      {
        icon: <AlertTriangleIcon />,
        title: 'Seasonal Overload',
        description:
          'Tax season hits like a freight train. Your team goes from manageable to completely overwhelmed in weeks. Hiring temporary staff takes time and introduces quality risks.',
      },
    ],
    solutions: [
      {
        icon: <CpuIcon />,
        title: 'AI Document Processing',
        description:
          'Our AI reads, extracts, and categorises data from bank statements, invoices, and receipts — mapping entries to the correct accounts automatically. What took hours now takes minutes with 95%+ accuracy.',
      },
      {
        icon: <ShieldCheckIcon />,
        title: 'Automated SARS Submissions',
        description:
          'AI prepares and validates SARS submissions — checking for common errors, ensuring compliance with current regulations, and flagging issues before you file. Fewer penalties, fewer corrections.',
      },
      {
        icon: <MessageCircleIcon />,
        title: 'Client Portal with AI Chat',
        description:
          'Give clients a self-service portal with an AI assistant that answers questions about their tax status, outstanding documents, and deadlines. Your clients feel looked after; your team stays focused.',
      },
      {
        icon: <SettingsIcon />,
        title: 'Workflow Automation',
        description:
          'Automate the entire client lifecycle — from document requests and follow-ups to preparation checklists and filing confirmations. No more dropped balls, even during the busiest season.',
      },
    ],
    stats: [
      {
        figure: '15-20 hrs',
        label: 'Saved Per Week',
        description:
          'Accounting firms using AI data processing save 15-20 hours per week on manual data entry alone.',
      },
      {
        figure: '95%+',
        label: 'Data Accuracy',
        description:
          'AI document processing achieves 95%+ accuracy on data extraction, reducing manual corrections.',
      },
      {
        figure: '50%',
        label: 'Faster Filing',
        description:
          'Automated SARS preparation and validation cuts filing time by up to 50% during tax season.',
      },
    ],
    caseStudy: {
      title: 'How a Johannesburg Accounting Firm Reclaimed Tax Season',
      description:
        'A 12-person accounting firm in Randburg was drowning during tax season — working 14-hour days and still missing deadlines. We automated their document processing and SARS preparation, cutting filing time by 45% and saving 18 hours per week.',
      metric: '18 hrs',
      metricLabel: 'Saved Per Week',
      link: null,
      linkText: 'Contact Us to Learn More',
    },
    blogSlugs: [],
    seo: {
      title: 'AI for Accounting Firms in South Africa | DDM Technology',
      description:
        'Save 15-20 hours per week on data entry, automate SARS submissions, and streamline client communication. AI automation built for SA accounting firms.',
      keywords:
        'accounting AI South Africa, AI for accountants, SARS automation, tax automation SA, accounting workflow automation Johannesburg',
    },
  },

  'retail-ecommerce': {
    name: 'Retail & E-Commerce',
    slug: 'retail-ecommerce',
    headline: 'AI Automation for Retail & E-Commerce',
    subtitle:
      'Handle customer queries automatically, keep stock optimised, and turn every order into a seamless experience — at scale.',
    icon: <ShoppingCartIcon />,
    accentColor: 'var(--ember-crimson)',
    painPoints: [
      {
        icon: <PackageIcon />,
        title: 'Stock Management Headaches',
        description:
          'Too much stock ties up cash. Too little means lost sales. Without real-time intelligence, you\'re always guessing — and SA supply chains make it worse with unpredictable lead times.',
      },
      {
        icon: <MessageCircleIcon />,
        title: 'Customer Support Volume',
        description:
          '"Where\'s my order?" "Do you have this in stock?" "What\'s your return policy?" Your team answers the same questions hundreds of times a week — pulling them away from complex issues that need human attention.',
      },
      {
        icon: <TruckIcon />,
        title: 'Order Tracking Enquiries',
        description:
          'Customers want instant updates on their orders. Without automated tracking, your support team becomes a human tracking system — fielding calls and WhatsApp messages all day.',
      },
      {
        icon: <AlertTriangleIcon />,
        title: 'Returns Processing Pain',
        description:
          'Returns are manual, slow, and frustrating for everyone. Processing refunds, updating stock, and communicating status takes too long — hurting customer satisfaction and repeat business.',
      },
    ],
    solutions: [
      {
        icon: <MessageCircleIcon />,
        title: 'AI Customer Service Bot',
        description:
          'A conversational AI bot on your website and WhatsApp handles the top customer queries — order status, stock checks, return policies, and more. It resolves 60-70% of queries instantly, escalating only what needs a human.',
      },
      {
        icon: <BarChartIcon />,
        title: 'Automated Stock Alerts',
        description:
          'AI monitors inventory levels, predicts demand based on sales trends and seasonality, and triggers reorder alerts before you run out. No more emergency orders or dead stock sitting on shelves.',
      },
      {
        icon: <GlobeIcon />,
        title: 'WhatsApp Order Updates',
        description:
          'Customers get proactive WhatsApp notifications at every stage — order confirmed, dispatched, out for delivery, delivered. Fewer "where\'s my order" queries, happier customers.',
      },
      {
        icon: <SettingsIcon />,
        title: 'Smart Returns Handling',
        description:
          'AI automates the returns workflow — generating return labels, processing refunds, updating inventory, and keeping customers informed at every step. What took 3-5 days now takes hours.',
      },
    ],
    stats: [
      {
        figure: '60-70%',
        label: 'Queries Handled Automatically',
        description:
          'Retailers using AI chatbots handle 60-70% of customer queries automatically, freeing support teams for complex issues.',
      },
      {
        figure: '25%',
        label: 'Reduction in Returns',
        description:
          'Better product information and proactive communication reduce return rates by up to 25%.',
      },
      {
        figure: 'R12,000+',
        label: 'Monthly Support Savings',
        description:
          'Average monthly savings on customer support costs through AI automation for mid-size retailers.',
      },
    ],
    caseStudy: {
      title: 'From 200 Daily Support Tickets to AI-Handled Efficiency',
      description:
        'A Johannesburg e-commerce retailer was drowning in 200+ daily support tickets — mostly repetitive queries. We deployed an AI chatbot that resolved 65% of queries automatically, cut response times from 4 hours to under 2 minutes, and saved R15,000/month in support costs.',
      metric: '65%',
      metricLabel: 'Queries Resolved by AI',
      link: null,
      linkText: 'Contact Us to Learn More',
    },
    blogSlugs: [],
    seo: {
      title: 'AI for Retail & E-Commerce in South Africa | DDM Technology',
      description:
        'Handle 60-70% of customer queries automatically, optimise stock with AI alerts, and streamline returns. AI automation built for SA retailers and e-commerce businesses.',
      keywords:
        'retail AI South Africa, ecommerce automation, AI customer service retail, stock management AI, WhatsApp order tracking SA',
    },
  },
}

const allSlugs = Object.keys(industryData)

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const industry = industryData[params.slug]
  if (!industry) return {}

  return {
    title: industry.seo.title,
    description: industry.seo.description,
    keywords: industry.seo.keywords,
    openGraph: {
      title: industry.seo.title,
      description: industry.seo.description,
      url: `https://ddmtech.co.za/industries/${industry.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: industry.seo.title,
      description: industry.seo.description,
    },
    alternates: {
      canonical: `https://ddmtech.co.za/industries/${industry.slug}`,
    },
  }
}

export default function IndustryPage({
  params,
}: {
  params: { slug: string }
}) {
  const industry = industryData[params.slug]
  if (!industry) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `AI Automation for ${industry.name}`,
    description: industry.seo.description,
    url: `https://ddmtech.co.za/industries/${industry.slug}`,
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
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    serviceType: 'AI Automation',
    audience: {
      '@type': 'Audience',
      audienceType: industry.name,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        style={{
          padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 6vw, 5rem)',
          background: 'var(--bg-primary)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse at 30% 50%, ${industry.accentColor}12 0%, transparent 60%)`,
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: `${industry.accentColor}15`,
              border: `1px solid ${industry.accentColor}30`,
              borderRadius: '100px',
              padding: '0.5rem 1.2rem',
              color: industry.accentColor,
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}
          >
            {industry.icon} {industry.name}
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              maxWidth: '800px',
            }}
          >
            {industry.headline}
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.7,
              maxWidth: '650px',
              marginBottom: '2rem',
            }}
          >
            {industry.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/27832580869?text=Hi%20DDM%20Technology%2C%20I%27m%20interested%20in%20AI%20automation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 6rem) 0',
          background: 'var(--bg-secondary)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              className="section-title"
              style={{ marginBottom: '0.75rem' }}
            >
              The Problems You&apos;re Facing
            </h2>
            <p className="section-subtitle">
              These pain points cost {industry.name.toLowerCase()} businesses
              thousands of Rands every month.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {industry.painPoints.map((point, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '14px',
                  padding: '2rem 1.75rem',
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
                    background: 'linear-gradient(90deg, var(--ember-red), var(--ember-crimson))',
                    opacity: 0.6,
                  }}
                />
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(220, 38, 38, 0.1)',
                    border: '1px solid rgba(220, 38, 38, 0.2)',
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
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontSize: '0.92rem',
                  }}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 6rem) 0',
          background: 'var(--bg-primary)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              className="section-title"
              style={{ marginBottom: '0.75rem' }}
            >
              How AI Solves It
            </h2>
            <p className="section-subtitle">
              Purpose-built AI solutions that address each pain point directly.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {industry.solutions.map((solution, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '14px',
                  padding: '2rem 1.75rem',
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
                    background: `linear-gradient(90deg, ${industry.accentColor}, var(--ocean-cyan))`,
                    opacity: 0.6,
                  }}
                />
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${industry.accentColor}15`,
                    border: `1px solid ${industry.accentColor}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: industry.accentColor,
                    marginBottom: '1.25rem',
                  }}
                >
                  {solution.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {solution.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontSize: '0.92rem',
                  }}
                >
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Benchmarks */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 0',
          background: 'var(--bg-secondary)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse at 70% 50%, ${industry.accentColor}10 0%, transparent 60%)`,
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              className="section-title"
              style={{ marginBottom: '0.75rem' }}
            >
              Industry Benchmarks
            </h2>
            <p className="section-subtitle">
              Real results from businesses that have adopted AI automation.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {industry.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '14px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  className="gradient-text"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.figure}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {stat.label}
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                  }}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study / Testimonial Reference */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 0',
          background: 'var(--bg-primary)',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
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
                height: '4px',
                background: 'var(--gradient-ember-ocean)',
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.25rem',
                color: industry.accentColor,
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              <SparklesIcon /> Case Study
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}
            >
              {industry.caseStudy.title}
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                fontSize: '0.95rem',
              }}
            >
              {industry.caseStudy.description}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div>
                <div
                  className="gradient-text"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.2rem',
                    fontWeight: 700,
                  }}
                >
                  {industry.caseStudy.metric}
                </div>
                <div
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                  }}
                >
                  {industry.caseStudy.metricLabel}
                </div>
              </div>
              {industry.caseStudy.link ? (
                <Link
                  href={industry.caseStudy.link}
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {industry.caseStudy.linkText} <ArrowRightIcon />
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {industry.caseStudy.linkText} <ArrowRightIcon />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 0',
          background: 'var(--bg-secondary)',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2
            className="section-title"
            style={{ marginBottom: '0.75rem' }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="section-subtitle"
            style={{ marginBottom: '2rem' }}
          >
            We offer flexible AI automation packages starting from R4,999/month.
            Every solution is tailored to your industry and business size.
          </p>
          <Link
            href="/pricing"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            View Pricing Plans <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>
            Let&apos;s Automate Your{' '}
            {industry.name.split('&')[0].trim()} Business
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Book a free consultation and we&apos;ll show you exactly which
            AI automations will deliver the biggest ROI for your business.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/contact" className="btn btn-primary">
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/27832580869?text=Hi%20DDM%20Technology%2C%20I%27m%20interested%20in%20AI%20automation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
