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
    url: 'https://ddmtech.co.za/contact',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact DDM Technology',
  description:
    'Book a free AI audit for your South African business. Contact DDM Technology in Roodepoort, Johannesburg.',
  url: 'https://ddmtech.co.za/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'DDM Technology',
    email: 'darius@ddmtech.co.za',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roodepoort',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
  },
}

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  )
}
