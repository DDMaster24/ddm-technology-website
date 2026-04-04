import type { Metadata } from 'next'
import ROICalculatorContent from './ROICalculatorContent'

export const metadata: Metadata = {
  title: 'AI ROI Calculator — South Africa',
  description:
    'Calculate your AI automation ROI in Rands. See how much time and money your South African business can save with AI automation. Free instant results.',
  keywords:
    'AI ROI calculator South Africa, AI automation savings, AI business calculator, automation cost savings ZA, AI investment return',
  openGraph: {
    title: 'AI ROI Calculator — DDM Technology',
    description:
      'Calculate your AI automation ROI in Rands. See how much your SA business can save with AI automation.',
    url: 'https://ddmtech.co.za/tools/roi-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI ROI Calculator — DDM Technology',
    description:
      'Calculate your AI automation ROI in Rands. Free instant results for SA businesses.',
  },
  alternates: {
    canonical: '/tools/roi-calculator',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'AI ROI Calculator',
  description:
    'Calculate your AI automation return on investment. See how much time and money your South African business can save.',
  url: 'https://ddmtech.co.za/tools/roi-calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'ZAR',
  },
  provider: {
    '@type': 'Organization',
    name: 'DDM Technology',
    url: 'https://ddmtech.co.za',
  },
}

export default function ROICalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ROICalculatorContent />
    </>
  )
}
