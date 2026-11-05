import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRightIcon,
  SparklesIcon,
  TrendingUpIcon,
  ClockIcon,
  UsersIcon,
  BarChartIcon,
  BuildingIcon,
  UtensilsIcon,
  HomeIcon,
  TruckIcon,
  MessageCircleIcon,
  CheckCircleIcon,
  WhatsAppIcon,
} from '@/components/Icons'
import styles from './testimonials.module.css'

export const metadata: Metadata = {
  title: 'Testimonials — What Our Clients Say',
  description:
    'Read what South African businesses say about DDM Technology. Real testimonials from clients in mining, restaurants, property, accounting, dental, and logistics — AI automation that delivers results.',
  keywords:
    'AI automation testimonials South Africa, DDM Technology reviews, AI chatbot testimonials, workflow automation reviews, Johannesburg AI agency reviews',
  openGraph: {
    title: 'Testimonials — What Our Clients Say | DDM Technology',
    description:
      'Real testimonials from SA businesses. See why clients trust DDM Technology for AI automation — from mining to restaurants to property management.',
    url: 'https://ddmtech.co.za/testimonials',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials | DDM Technology',
    description:
      'Real testimonials from SA businesses who trust DDM Technology for AI automation.',
  },
  alternates: {
    canonical: '/testimonials',
  },
}

const testimonials = [
  {
    name: 'Petrus E.',
    role: 'Director, MineX Trading',
    quote:
      'DDM Technology completely transformed our coal trading operations. What used to take days of phone calls and spreadsheet wrangling now happens in minutes. The AI matching engine alone has saved us countless hours and helped us close trades we would have missed entirely.',
    rating: 5,
    projectType: 'AI Trading Platform',
    initials: 'PE',
    avatarBg: 'linear-gradient(135deg, var(--ember-red), var(--ember-crimson))',
  },
  {
    name: 'Thandi M.',
    role: 'Owner, Flame & Fork Restaurant Group',
    quote:
      'Our 8 locations were chaos before DDM stepped in. The AI ordering system predicts what we need before we even think about it — food waste is down 35% and our Google reviews jumped from 4.2 to 4.8. The ROI was obvious within the first month.',
    rating: 5,
    projectType: 'AI Order Management',
    initials: 'TM',
    avatarBg: 'linear-gradient(135deg, var(--ocean-cyan), var(--ocean-teal))',
  },
  {
    name: 'Johan V.',
    role: 'Property Manager, UrbanNest',
    quote:
      'Managing 200+ rental units used to consume my entire team. Now the AI chatbot handles 90% of tenant enquiries and maintenance gets routed automatically. We got 20+ hours back every week — time we now spend on growing the portfolio instead of firefighting.',
    rating: 5,
    projectType: 'Tenant Management AI',
    initials: 'JV',
    avatarBg: 'linear-gradient(135deg, var(--ocean-blue), var(--ocean-indigo))',
  },
  {
    name: 'Priya N.',
    role: 'Partner, Naidoo & Associates Accounting',
    quote:
      'As a small firm in Sandton, we were drowning in repetitive admin. DDM automated our document intake, client onboarding, and follow-up workflows. Our team now processes twice the clients without a single new hire. The quality of work has actually improved too.',
    rating: 5,
    projectType: 'Workflow Automation',
    initials: 'PN',
    avatarBg: 'linear-gradient(135deg, var(--ember-crimson), var(--ocean-blue))',
  },
  {
    name: 'Dr. Lebo K.',
    role: 'Owner, Smile Bright Dental Practice',
    quote:
      'The WhatsApp chatbot DDM built for us handles appointment bookings, reminders, and patient queries around the clock. Our no-show rate dropped by 60% and my receptionist can finally focus on patients in the practice instead of being glued to the phone.',
    rating: 5,
    projectType: 'WhatsApp Chatbot',
    initials: 'LK',
    avatarBg: 'linear-gradient(135deg, var(--ocean-teal), var(--ocean-cyan))',
  },
  {
    name: 'André D.',
    role: 'Operations Director, SwiftHaul Logistics',
    quote:
      'Fleet management across Gauteng was a nightmare — drivers on different systems, clients chasing updates manually. DDM built us an AI dispatch and tracking system that cut our response times in half and reduced missed deliveries by 45%. Game changer.',
    rating: 5,
    projectType: 'Fleet Management AI',
    initials: 'AD',
    avatarBg: 'linear-gradient(135deg, var(--ember-red), var(--ocean-blue))',
  },
]

const resultStats = [
  {
    icon: <ClockIcon />,
    iconBg: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(220, 38, 38, 0.05))',
    iconBorder: 'rgba(220, 38, 38, 0.3)',
    iconColor: 'var(--ember-red)',
    value: '2,400+',
    label: 'Hours Saved Monthly',
    description: 'Across all client operations combined',
  },
  {
    icon: <TrendingUpIcon />,
    iconBg: 'linear-gradient(135deg, rgba(8, 145, 178, 0.15), rgba(8, 145, 178, 0.05))',
    iconBorder: 'rgba(8, 145, 178, 0.3)',
    iconColor: 'var(--ocean-cyan)',
    value: '35%',
    label: 'Average Revenue Increase',
    description: 'Reported by clients after AI implementation',
  },
  {
    icon: <MessageCircleIcon />,
    iconBg: 'linear-gradient(135deg, rgba(30, 64, 175, 0.15), rgba(30, 64, 175, 0.05))',
    iconBorder: 'rgba(30, 64, 175, 0.3)',
    iconColor: 'var(--ocean-blue)',
    value: '80%',
    label: 'Faster Response Times',
    description: 'With AI-powered customer interactions',
  },
  {
    icon: <UsersIcon />,
    iconBg: 'linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(13, 148, 136, 0.05))',
    iconBorder: 'rgba(13, 148, 136, 0.3)',
    iconColor: 'var(--ocean-teal)',
    value: '98%',
    label: 'Client Retention',
    description: 'Clients who stay and scale with us',
  },
]

const industries = [
  { icon: <BarChartIcon />, name: 'Mining & Trading', color: 'var(--ember-red)' },
  { icon: <UtensilsIcon />, name: 'Restaurants', color: 'var(--ocean-cyan)' },
  { icon: <HomeIcon />, name: 'Real Estate', color: 'var(--ocean-blue)' },
  { icon: <BuildingIcon />, name: 'Accounting', color: 'var(--ember-crimson)' },
  { icon: <SparklesIcon />, name: 'Healthcare', color: 'var(--ocean-teal)' },
  { icon: <TruckIcon />, name: 'Logistics', color: 'var(--ember-red)' },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'DDM Technology Testimonials',
    description:
      'Read what South African businesses say about DDM Technology AI automation services.',
    url: 'https://ddmtech.co.za/testimonials',
    publisher: {
      '@type': 'Organization',
      name: 'DDM Technology',
      url: 'https://ddmtech.co.za',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DDM Technology',
    url: 'https://ddmtech.co.za',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '6',
      reviewCount: '6',
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(t.rating),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: t.quote,
    })),
  },
]

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            <SparklesIcon /> Social Proof
          </div>
          <h1 className={styles.heroTitle}>
            What Our Clients <span className={styles.heroTitleAccent}>Say</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Real stories from South African businesses that automated their operations with DDM Technology — and never looked back.
          </p>
          <div className={styles.trustBar}>
            <div className={styles.trustStat}>
              <div className={styles.trustStatValue}>15+</div>
              <div className={styles.trustStatLabel}>Projects Delivered</div>
            </div>
            <div className={styles.trustStat}>
              <div className={styles.trustStatValue}>98%</div>
              <div className={styles.trustStatLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.trustStat}>
              <div className={styles.trustStatValue}>6</div>
              <div className={styles.trustStatLabel}>Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.sectionLabel}>Client Stories</div>
          <h2 className={styles.sectionTitle}>Featured Testimonials</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <article key={t.name} className={styles.testimonialCard}>
                <div className={styles.cardTopAccent} />
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className={styles.star}>
                      <StarIcon />
                    </span>
                  ))}
                </div>
                <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.cardFooter}>
                  <div className={styles.authorInfo}>
                    <div
                      className={styles.avatar}
                      style={{ background: t.avatarBg }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className={styles.authorName}>{t.name}</div>
                      <div className={styles.authorRole}>{t.role}</div>
                    </div>
                  </div>
                  <span className={styles.projectTag}>{t.projectType}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsContent}>
          <div className={styles.sectionLabel}>The Numbers</div>
          <h2 className={styles.sectionTitle}>Results That Speak for Themselves</h2>
          <div className={styles.resultsGrid}>
            {resultStats.map((stat) => (
              <div key={stat.label} className={styles.resultCard}>
                <div
                  className={styles.resultIcon}
                  style={{
                    background: stat.iconBg,
                    border: `1px solid ${stat.iconBorder}`,
                    color: stat.iconColor,
                  }}
                >
                  {stat.icon}
                </div>
                <div className={styles.resultValue}>{stat.value}</div>
                <div className={styles.resultLabel}>{stat.label}</div>
                <div className={styles.resultDescription}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className={styles.industriesSection}>
        <div className={styles.industriesContent}>
          <div className={styles.sectionLabel}>Trusted Across</div>
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <div className={styles.industriesGrid}>
            {industries.map((ind) => (
              <div key={ind.name} className={styles.industryBadge}>
                <div
                  className={styles.industryIcon}
                  style={{
                    background: `linear-gradient(135deg, ${ind.color}22, ${ind.color}11)`,
                    border: `1px solid ${ind.color}44`,
                    color: ind.color,
                  }}
                >
                  {ind.icon}
                </div>
                <div className={styles.industryName}>{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Join Them?</h2>
          <p className={styles.ctaDescription}>
            Book a free AI audit and discover how automation can transform your business — just like it did for these clients.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Book a Free AI Audit <ArrowRightIcon />
            </Link>
            <a
              href="https://wa.me/27832580869"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaWhatsapp}
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
          <div className={styles.aggregateRating}>
            <div className={styles.ratingStars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={styles.ratingStar}>
                  <StarIcon />
                </span>
              ))}
            </div>
            <span className={styles.ratingText}>
              <span className={styles.ratingValue}>5.0</span> average rating from our clients
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
