import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'DDM Technology | AI Automation for South African Businesses',
  description: 'AI employees that handle your customers 24/7. WhatsApp automation, bookings, quotes, and lead nurturing for SA businesses.',
  keywords: 'AI automation, WhatsApp AI, South Africa, business automation, AI employee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
