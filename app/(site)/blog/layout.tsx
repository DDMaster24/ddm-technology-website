import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — AI Insights for SA Businesses',
  description:
    'Practical AI automation insights, case studies, and business guides for South African companies. Learn how AI can save time, cut costs, and grow your business.',
  openGraph: {
    title: 'Blog | DDM Technology',
    description:
      'Practical AI automation insights, case studies, and guides for South African businesses.',
    url: 'https://ddmtech.co.za/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | DDM Technology',
    description:
      'AI automation insights, case studies, and guides for SA businesses.',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
