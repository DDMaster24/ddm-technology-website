import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Book a free AI audit for your South African business. Contact DDM Technology in Roodepoort, Johannesburg via email, WhatsApp, or our online form.',
  openGraph: {
    title: 'Contact Us | DDM Technology',
    description:
      'Book a free AI audit. We respond within 24 hours. Email, WhatsApp, or fill out our form.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | DDM Technology',
    description:
      'Book a free AI audit. We respond within 24 hours.',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function Contact() {
  return <ContactContent />
}
