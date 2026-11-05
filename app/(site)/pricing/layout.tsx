import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Pricing — Plans from R8,000/month',
  description:
    'Transparent AI automation pricing for South African businesses. WhatsApp chatbots, workflow automation, and custom AI development. Plans from R8,000/month in ZAR.',
  keywords:
    'AI automation pricing South Africa, WhatsApp chatbot pricing, AI services cost, workflow automation pricing SA, AI packages South Africa, DDM Technology pricing',
  openGraph: {
    title: 'AI Automation Pricing | DDM Technology',
    description:
      'Transparent AI automation pricing in South African Rand. Plans from R8,000/month. No hidden fees, no setup costs.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Pricing | DDM Technology',
    description:
      'AI automation plans from R8,000/month. WhatsApp chatbots, workflow automation, and custom AI. No hidden fees.',
  },
  alternates: {
    canonical: '/pricing',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
