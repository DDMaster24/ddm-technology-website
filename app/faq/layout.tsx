import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — AI Automation Questions Answered',
  description:
    'Frequently asked questions about DDM Technology\'s AI automation services, WhatsApp chatbots, pricing, POPIA compliance, and support for South African businesses.',
  keywords:
    'AI automation FAQ South Africa, WhatsApp chatbot questions, AI services FAQ, POPIA compliance AI, DDM Technology FAQ, AI pricing South Africa',
  openGraph: {
    title: 'FAQ | DDM Technology — AI Automation Agency',
    description:
      'Get answers to common questions about AI automation, WhatsApp chatbots, pricing in Rand, POPIA compliance, and how we help SA businesses save time and money.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/faq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | DDM Technology — AI Automation Agency',
    description:
      'Answers to common questions about AI automation, chatbots, pricing, and POPIA compliance for South African businesses.',
  },
  alternates: {
    canonical: '/faq',
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
