import type { Metadata } from 'next'
import AIServicesContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Book a Free AI Demo',
  description:
    'Book a free 30-minute AI automation demo with DDM Technology. See how AI employees can transform your South African business.',
  openGraph: {
    title: 'Book a Free AI Demo | DDM Technology',
    description:
      'Free 30-minute consultation. Live demo of AI employees. Custom ROI analysis. No obligation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free AI Demo | DDM Technology',
    description:
      'Free 30-minute consultation with live AI demo. No obligation.',
  },
  alternates: {
    canonical: '/ai-services/contact',
  },
}

export default function AIServicesContactPage() {
  return <AIServicesContactContent />
}
