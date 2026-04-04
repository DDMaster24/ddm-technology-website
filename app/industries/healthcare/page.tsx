import type { Metadata } from 'next'
import Link from 'next/link'
import {
  HeartIcon,
  ClockIcon,
  MessageCircleIcon,
  FileTextIcon,
  WhatsAppIcon,
  CalendarIcon,
  ClipboardIcon,
  ShieldCheckIcon,
  CalculatorIcon,
  ZapIcon,
  ArrowRightIcon,
  ServerIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Healthcare AI South Africa | Medical Practice Automation',
  description:
    'AI-powered automation for South African medical practices & clinics. WhatsApp patient communication, appointment scheduling, medical record digitization, billing automation. NHI & HPCSA compliant.',
  keywords:
    'healthcare AI South Africa, medical practice automation, AI for clinics SA, WhatsApp doctor appointment, patient communication automation, medical record digitization South Africa',
  openGraph: {
    title: 'Healthcare AI & Medical Practice Automation | DDM Technology',
    description:
      'AI automation for SA medical practices. WhatsApp patient comms, appointment scheduling, record digitization. NHI & HPCSA compliant.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'DDM Technology',
    url: 'https://ddmtech.co.za/industries/healthcare',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare AI & Medical Practice Automation | DDM Technology',
    description:
      'AI automation for SA medical practices. WhatsApp patient comms, appointment scheduling, record digitization.',
  },
  alternates: { canonical: '/industries/healthcare' },
}

const painPoints = [
  {
    icon: <ClockIcon />,
    title: 'Appointment No-Shows',
    description:
      'Up to 30% of appointments are no-shows. Patients forget, double-book, or simply do not receive reminders. Every empty slot is lost revenue that your practice cannot recover.',
  },
  {
    icon: <FileTextIcon />,
    title: 'Paper-Based Records',
    description:
      'Patient files in folders, handwritten notes, and faxed referrals. Finding a patient history takes minutes, not seconds — and paper records are vulnerable to load shedding and theft.',
  },
  {
    icon: <MessageCircleIcon />,
    title: 'After-Hours Patient Queries',
    description:
      'Patients WhatsApp your practice at 10pm asking about results, repeat scripts, and appointment availability. By morning, the messages are buried and patients are frustrated.',
  },
]

const features = [
  {
    icon: <WhatsAppIcon />,
    title: 'WhatsApp Patient Communication',
    description:
      'Automated appointment reminders, prescription refill requests, lab result notifications, and general enquiry handling — all via WhatsApp. Patients get instant responses 24/7 without calling your reception.',
    color: 'var(--ember-red)',
  },
  {
    icon: <CalendarIcon />,
    title: 'AI Appointment Scheduling',
    description:
      'Patients book, reschedule, and cancel appointments via WhatsApp or your website. AI optimises your schedule to minimise gaps, sends automated reminders, and fills cancelled slots from your waitlist.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <FileTextIcon />,
    title: 'Medical Record Digitization',
    description:
      'Convert paper records to searchable digital files using AI-powered OCR. Patient histories, lab results, and referral letters — all digitised, indexed, and accessible in seconds.',
    color: 'var(--ocean-blue)',
  },
  {
    icon: <CalculatorIcon />,
    title: 'Billing & Claims Automation',
    description:
      'Auto-generate invoices, submit medical aid claims, track payments, and send patient statements. Integration with Discovery, Bonitas, Medihelp, and all major SA medical aids.',
    color: 'var(--ember-crimson)',
  },
  {
    icon: <ClipboardIcon />,
    title: 'Patient Intake Automation',
    description:
      'Digital intake forms sent via WhatsApp before the appointment. Patient details, medical history, allergies, and consent forms — all captured electronically before they walk through the door.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Compliance Monitoring',
    description:
      'Automated POPIA consent tracking, HPCSA record-keeping compliance, and NHI-ready patient data management. Audit-ready reports generated on demand.',
    color: 'var(--ocean-blue)',
  },
]

const caseStudyMetrics = [
  { value: '40%', label: 'Fewer No-Shows' },
  { value: '15+', label: 'Hours/Week Saved' },
  { value: '95%', label: 'Patient Satisfaction' },
  { value: '3x', label: 'Faster Billing Cycles' },
]

const saContextCards = [
  {
    icon: <ShieldCheckIcon />,
    title: 'NHI Readiness',
    description:
      'Our systems are built with National Health Insurance requirements in mind. Patient registration, referral pathways, and data reporting align with NHI pilot programme standards — so your practice is prepared when NHI rolls out fully.',
    color: 'var(--ember-red)',
  },
  {
    icon: <HeartIcon />,
    title: 'HPCSA Compliance',
    description:
      'All patient communication and record-keeping meets Health Professions Council of South Africa guidelines. Automated consent management, secure data handling, and compliant record retention periods built in.',
    color: 'var(--ocean-cyan)',
  },
  {
    icon: <ZapIcon />,
    title: 'Load Shedding Resilience',
    description:
      'Cloud-based patient records and communication systems that run independently of your local power supply. Patient data is backed up in real time — no risk of lost records during stage 4, 5, or 6 load shedding.',
    color: 'var(--ocean-blue)',
  },
]

const faqs = [
  {
    question: 'How does AI help medical practices in South Africa?',
    answer:
      'AI automates the most time-consuming admin tasks in a medical practice. WhatsApp chatbots handle appointment bookings and patient queries 24/7, automated reminders cut no-shows by up to 40%, digital intake forms eliminate paper processing, and billing automation speeds up medical aid claims. Most practices save 15+ hours per week on admin alone.',
  },
  {
    question: 'Can the AI chatbot handle patient queries on WhatsApp?',
    answer:
      'Yes. The chatbot responds to common patient queries instantly — appointment availability, practice hours, directions, repeat prescription requests, and general health information. For clinical questions, it triages and routes the message to the appropriate practitioner. It handles 70-80% of incoming WhatsApp messages without staff intervention.',
  },
  {
    question: 'Is patient data secure and POPIA compliant?',
    answer:
      'Absolutely. All patient data is encrypted at rest and in transit, stored on secure cloud servers with SOC 2 compliance. We implement full POPIA consent management — patients opt in to WhatsApp communication, and all data handling meets the Protection of Personal Information Act requirements. Regular security audits are included.',
  },
  {
    question: 'How does AI reduce appointment no-shows?',
    answer:
      'The system sends automated WhatsApp reminders at 48 hours, 24 hours, and 2 hours before each appointment. Patients can confirm, reschedule, or cancel with a single tap. When a cancellation comes in, the AI automatically contacts patients on your waitlist to fill the slot. Practices typically see a 30-40% reduction in no-shows.',
  },
  {
    question: 'What does healthcare AI automation cost?',
    answer:
      'Plans start from R8,000/month for WhatsApp patient communication and appointment reminders. Our Professional plan at R18,000/month includes digital intake, billing automation, and medical aid integration. Enterprise packages for multi-practice groups are custom-quoted based on practitioner count and requirements.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most single-practice setups are live within 2-3 weeks. We integrate with your existing practice management software — including GoodX, Healthbridge, and Elixir — and configure the WhatsApp bot with your practice details, hours, and services. Multi-practice groups typically take 4-6 weeks.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Automation for Healthcare Practices',
  provider: {
    '@type': 'Organization',
    name: 'DDM Technology',
    url: 'https://ddmtech.co.za',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roodepoort',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
  },
  description:
    'AI-powered automation for South African medical practices and clinics. WhatsApp patient communication, appointment scheduling, medical record digitization, billing automation.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: 'Healthcare AI Automation',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function HealthcareIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="page-header" style={{ paddingBottom: '5rem' }}>
        <div className="page-header-content" style={{ maxWidth: '800px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'rgba(13, 148, 136, 0.1)',
            border: '1px solid rgba(13, 148, 136, 0.25)',
            borderRadius: '100px',
            fontSize: '0.875rem',
            color: '#0D9488',
            marginBottom: '1.5rem',
            fontWeight: 600,
          }}>
            <HeartIcon /> Healthcare AI Automation
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            AI That Helps Medical Practices{' '}
            <span style={{
              background: 'var(--gradient-ember-ocean)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Focus on Patient Care
            </span>
          </h1>
          <p style={{ fontSize: '1.1875rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            South African medical practices lose revenue to no-shows, drown in paperwork,
            and miss patient messages after hours. Our AI handles scheduling, patient communication,
            record digitization, and billing — so you can focus on what matters: your patients.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="cta-button">
              Book a Free Healthcare AI Demo <ArrowRightIcon />
            </Link>
            <Link
              href="#case-study"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                background: 'transparent',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                borderRadius: '10px',
                border: '1px solid var(--border-default)',
                transition: 'all var(--duration-fast)',
              }}
            >
              See Our Results
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Challenges SA Medical Practices Face</h2>
          <p className="section-subtitle">
            Admin overload is costing your practice time, revenue, and patient satisfaction
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}>
            {painPoints.map((point) => (
              <div
                key={point.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--ember-red), var(--ember-crimson))',
                }} />
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(220, 38, 38, 0.05))',
                  border: '1px solid rgba(220, 38, 38, 0.25)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ember-red)',
                  marginBottom: '1.25rem',
                }}>
                  {point.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {point.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">AI Solutions Built for Medical Practices</h2>
          <p className="section-subtitle">
            Everything you need to automate admin, reduce no-shows, and improve patient experience
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: `linear-gradient(135deg, ${feature.color}22, ${feature.color}11)`,
                  border: `1px solid ${feature.color}44`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: feature.color,
                  marginBottom: '1.25rem',
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Real Results in SA Healthcare</h2>
          <p className="section-subtitle">
            See how AI transformed operations for a Johannesburg medical practice
          </p>

          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(180deg, #0D9488, var(--ocean-blue))',
            }} />

            <div style={{ paddingLeft: '1.5rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.75rem',
                background: 'rgba(13, 148, 136, 0.1)',
                border: '1px solid rgba(13, 148, 136, 0.25)',
                borderRadius: '100px',
                fontSize: '0.8125rem',
                color: '#0D9488',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}>
                <HeartIcon /> Success Story — GP Practice, Johannesburg
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}>
                From Missed Calls to 24/7 Patient Engagement
              </h3>

              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                A busy Johannesburg GP practice with 3 practitioners was losing patients to no-shows,
                spending hours on phone-based appointment management, and struggling with paper-based
                records during load shedding. We deployed WhatsApp patient communication, AI scheduling,
                and digital record management — transforming their daily operations.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}>
                {caseStudyMetrics.map((metric) => (
                  <div key={metric.label} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      background: 'var(--gradient-ember-ocean)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '0.375rem',
                    }}>
                      {metric.value}
                    </div>
                    <div style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <blockquote style={{
                borderLeft: '3px solid #0D9488',
                paddingLeft: '1.5rem',
                margin: '0 0 2rem 0',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}>
                &ldquo;Our reception staff used to spend half their day on the phone confirming appointments.
                Now the AI handles it all on WhatsApp — patients love it, and we have not had a single
                record access issue during load shedding since going digital.&rdquo;
                <br />
                <span style={{
                  fontStyle: 'normal',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  display: 'inline-block',
                  marginTop: '0.75rem',
                }}>
                  — Practice Manager, Johannesburg GP Practice
                </span>
              </blockquote>

              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#0D9488',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  transition: 'all var(--duration-fast)',
                }}
              >
                Get similar results for your practice <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SA Context */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Built for South African Healthcare</h2>
          <p className="section-subtitle">
            Not a generic international tool — engineered for SA medical regulations, systems, and realities
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {saContextCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: `linear-gradient(135deg, ${card.color}22, ${card.color}11)`,
                  border: `1px solid ${card.color}44`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: card.color,
                  marginBottom: '1.25rem',
                }}>
                  {card.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about AI automation for medical practices
          </p>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {faqs.map((faq) => (
              <div
                key={faq.question}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '1.75rem 2rem',
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="cta-section">
            <h2>Ready to Automate Your Medical Practice?</h2>
            <p>
              Book a free demo and see how AI can handle your patient communication, reduce no-shows,
              digitise records, and automate billing — so you can focus on delivering excellent patient care.
            </p>
            <Link href="/contact" className="cta-button">
              Book a Free Healthcare AI Demo <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
