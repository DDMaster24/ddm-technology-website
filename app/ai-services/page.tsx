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

export default function AIServicesPage() {
  return <AIServicesContent />
}
