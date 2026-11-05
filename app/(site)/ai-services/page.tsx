import type { Metadata } from 'next'
import AIServicesContent from './AIServicesContent'

export const metadata: Metadata = {
  title: 'AI Employee Packages & Pricing',
  description:
    'AI employee packages from R15,000/month. Chatbots, workflow automation, and custom AI solutions for South African businesses. ROI calculator included.',
  openGraph: {
    title: 'AI Employee Packages & Pricing | DDM Technology',
    description:
      'Replace repetitive tasks with AI employees that work 24/7. Packages from R15K to R120K+/month for SA businesses.',
    url: 'https://ddmtech.co.za/ai-services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Employee Packages & Pricing | DDM Technology',
    description:
      'Replace repetitive tasks with AI employees that work 24/7. Packages from R15K/month.',
  },
  alternates: {
    canonical: '/ai-services',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Employee Packages',
  provider: {
    '@type': 'Organization',
    name: 'DDM Technology',
    url: 'https://ddmtech.co.za',
  },
  description:
    'AI employee packages from R15,000/month. Chatbots, workflow automation, and custom AI solutions for South African businesses.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '15000',
    highPrice: '120000',
    priceCurrency: 'ZAR',
  },
}

export default function AIServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIServicesContent />
    </>
  )
}
