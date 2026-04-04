import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  metadataBase: new URL('https://ddmtech.co.za'),
  title: {
    default: 'DDM Technology | AI Automation Agency — South Africa',
    template: '%s | DDM Technology',
  },
  description:
    'South African AI automation agency. We build AI chatbots, workflow automation, document processing, and custom AI solutions for businesses in Johannesburg and across SA.',
  keywords:
    'AI automation South Africa, AI agency Johannesburg, AI chatbots SA, workflow automation, AI business solutions, DDM Technology, AI Roodepoort',
  openGraph: {
    title: 'DDM Technology | AI Automation Agency — South Africa',
    description:
      'We build AI systems that run your business while you sleep. Practical AI automation for South African businesses.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DDM Technology | AI Automation Agency',
    description:
      'We build AI systems that run your business while you sleep. 50+ automations built for SA businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Roodepoort, Johannesburg" />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
