'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import styles from './faq.module.css'

interface FAQ {
  question: string
  answer: string
}

interface FAQCategory {
  name: string
  icon: React.ReactNode
  faqs: FAQ[]
}

const faqCategories: FAQCategory[] = [
  {
    name: 'General',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    faqs: [
      {
        question: 'What is DDM Technology?',
        answer: 'DDM Technology is an AI Automation Agency based in Roodepoort, Johannesburg, South Africa. We help businesses automate repetitive tasks, build intelligent chatbots, and implement AI-driven workflows — so you can focus on growing your business while technology handles the rest.',
      },
      {
        question: 'Where are you based and do you work with clients outside Johannesburg?',
        answer: 'We\'re based in Roodepoort, Johannesburg, but we work with clients across South Africa and internationally. All our services can be delivered remotely, and we use video calls, WhatsApp, and project management tools to collaborate effectively regardless of location.',
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including restaurants and hospitality, real estate, healthcare, accounting and financial services, retail and e-commerce, logistics, legal firms, and more. Our AI solutions are adaptable to any industry that has repetitive processes or customer-facing workflows.',
      },
      {
        question: 'How is DDM Technology different from other tech agencies?',
        answer: 'We focus exclusively on practical AI automation — not just building websites or apps. Every solution we deliver is designed to save you time and money from day one. We also specialise in the South African market, understanding local challenges like load shedding, POPIA compliance, and Rand-based pricing.',
      },
      {
        question: 'Do I need technical knowledge to use your solutions?',
        answer: 'Not at all. We design our solutions to be user-friendly and provide full training for your team. Our dashboards and chatbot interfaces are intuitive, and we offer ongoing support to help you get the most out of every tool we build.',
      },
    ],
  },
  {
    name: 'AI Automation Services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    faqs: [
      {
        question: 'What can AI automation do for my business?',
        answer: 'AI automation can handle customer enquiries 24/7 via chatbots, automate data entry and document processing, streamline lead management and follow-ups, generate reports, manage appointment bookings, and much more. Businesses typically see a 40–70% reduction in time spent on repetitive tasks.',
      },
      {
        question: 'How long does it take to implement an AI solution?',
        answer: 'Simple automations and chatbots can be deployed in as little as 1–2 weeks. More complex workflow automations typically take 3–6 weeks. Full enterprise AI projects with custom integrations may take 2–3 months. We always provide a clear timeline during the discovery phase.',
      },
      {
        question: 'What ROI can I expect from AI automation?',
        answer: 'Most of our clients see a positive return within 2–3 months. On average, businesses save R15,000–R50,000 per month on labour costs for tasks that AI now handles. Our AI ROI Calculator on the website can give you a personalised estimate based on your specific situation.',
      },
      {
        question: 'Will AI replace my employees?',
        answer: 'AI is designed to augment your team, not replace them. By automating repetitive, low-value tasks, your employees can focus on higher-value work that requires human creativity, empathy, and decision-making. Most clients redeploy freed-up staff time rather than reducing headcount.',
      },
      {
        question: 'What tools and platforms do you use for automation?',
        answer: 'We use a combination of industry-leading tools including n8n, Make (formerly Integromat), custom Python scripts, OpenAI and Anthropic APIs, and various CRM and business tool integrations. We choose the best tool for each specific use case rather than forcing a one-size-fits-all approach.',
      },
    ],
  },
  {
    name: 'Pricing & Packages',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    faqs: [
      {
        question: 'How does your pricing work?',
        answer: 'We offer tiered packages starting from R4,999/month for basic automation, R9,999/month for advanced AI solutions, and custom enterprise pricing for large-scale implementations. All packages include setup, training, and ongoing support. We quote in South African Rand with no hidden currency conversion fees.',
      },
      {
        question: 'Are there any hidden costs?',
        answer: 'No. We believe in transparent pricing. Your monthly fee covers the solution, hosting, maintenance, and standard support. The only additional costs would be third-party API usage fees (e.g., OpenAI tokens) if your usage exceeds the included allowance, and we always communicate these upfront.',
      },
      {
        question: 'What payment terms do you offer?',
        answer: 'We accept monthly or annual payments via EFT, credit card, or debit order. Annual plans come with a discount. For larger custom projects, we offer milestone-based payment schedules — typically 50% upfront and 50% on delivery, or split across project phases.',
      },
      {
        question: 'Is there a contract or lock-in period?',
        answer: 'Monthly packages run on a month-to-month basis with 30 days\' notice to cancel. Annual plans offer better value but do require a 12-month commitment. Custom enterprise agreements are negotiated on a case-by-case basis. We believe our results should keep you, not a contract.',
      },
      {
        question: 'Can I start small and scale up later?',
        answer: 'Absolutely — and we encourage it. Many clients start with a single chatbot or workflow automation, see the results, and then expand to additional services. Our packages are designed to scale with your business, and upgrading is seamless.',
      },
    ],
  },
  {
    name: 'WhatsApp Chatbots',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    faqs: [
      {
        question: 'How long does it take to set up a WhatsApp chatbot?',
        answer: 'A standard WhatsApp AI chatbot can be live within 5–10 business days, depending on complexity. This includes configuring the bot logic, training it on your business information, integrating with the WhatsApp Business API, and thorough testing before launch.',
      },
      {
        question: 'What languages does the chatbot support?',
        answer: 'Our AI chatbots support all 11 official South African languages, plus many international languages. The AI can detect the customer\'s language automatically and respond accordingly, making it ideal for South Africa\'s multilingual market.',
      },
      {
        question: 'Can the chatbot integrate with my existing systems?',
        answer: 'Yes. We integrate WhatsApp chatbots with CRMs (HubSpot, Zoho, Salesforce), booking systems, payment gateways, Google Sheets, inventory systems, and more. If your system has an API, we can connect it.',
      },
      {
        question: 'What happens when the chatbot can\'t answer a question?',
        answer: 'The chatbot is configured with intelligent escalation rules. When it encounters a question outside its training or detects customer frustration, it seamlessly hands over to a human agent via WhatsApp, email, or your preferred channel — with full conversation context.',
      },
      {
        question: 'Is the WhatsApp chatbot affected by load shedding?',
        answer: 'No. Our chatbots run on cloud infrastructure with 99.9% uptime guarantees, independent of your local power or internet connection. Even during load shedding, your customers can still interact with your business via WhatsApp without any interruption.',
      },
    ],
  },
  {
    name: 'Web Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    faqs: [
      {
        question: 'What tech stack do you use for web development?',
        answer: 'We build modern, fast websites using Next.js, React, and TypeScript — the same technology used by companies like Netflix and Uber. Our sites are statically generated for maximum speed and deployed on Vercel\'s global CDN for South African and international audiences.',
      },
      {
        question: 'How long does it take to build a website?',
        answer: 'A standard business website takes 2–4 weeks from design to launch. E-commerce sites or web applications with custom features typically take 4–8 weeks. We provide a detailed project timeline during our initial consultation so you know exactly what to expect.',
      },
      {
        question: 'Do you provide website maintenance after launch?',
        answer: 'Yes. We offer monthly maintenance packages that include content updates, security patches, performance monitoring, and technical support. We also provide analytics reporting so you can track your website\'s performance and make data-driven improvements.',
      },
    ],
  },
  {
    name: 'Data & Security',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    faqs: [
      {
        question: 'Are your solutions POPIA compliant?',
        answer: 'Yes, absolutely. All our solutions are designed with POPIA (Protection of Personal Information Act) compliance built in from the start. This includes proper consent mechanisms, data minimisation, secure storage, and the ability for individuals to request access to or deletion of their personal information.',
      },
      {
        question: 'Where is my data stored?',
        answer: 'We use enterprise-grade cloud providers (AWS, Google Cloud, or Vercel) with data centres that comply with international security standards. For clients with specific data residency requirements, we can arrange South African-hosted solutions. All data is encrypted at rest and in transit.',
      },
      {
        question: 'What security measures do you implement?',
        answer: 'We implement industry-standard security practices including SSL/TLS encryption, secure API authentication, role-based access controls, regular security audits, automated backups, and DDoS protection. We follow the OWASP Top 10 guidelines to prevent common vulnerabilities.',
      },
      {
        question: 'How do you handle data backups?',
        answer: 'All client data is backed up daily with automated systems. Backups are stored in geographically separate locations for redundancy. In the event of an incident, we can restore your data quickly. Our backup retention policy is 30 days by default, with longer retention available on request.',
      },
    ],
  },
  {
    name: 'Support & Maintenance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    faqs: [
      {
        question: 'What does your SLA include?',
        answer: 'Our standard SLA guarantees 99.9% uptime for hosted solutions, response within 4 business hours for critical issues, and resolution within 24 hours for most support tickets. Enterprise clients receive a dedicated account manager and priority support with faster response times.',
      },
      {
        question: 'How do I get support if something goes wrong?',
        answer: 'You can reach us via WhatsApp, email (darius@ddmtech.co.za), or our website contact form. For urgent issues, WhatsApp is the fastest channel. We also provide a client dashboard where you can log and track support tickets. Our team is available during South African business hours (8am–5pm SAST), with after-hours support for critical issues.',
      },
      {
        question: 'How often do you update and improve the AI systems?',
        answer: 'We continuously monitor and improve your AI solutions. Minor optimisations happen weekly based on conversation analytics and performance data. Major updates — such as new features, expanded capabilities, or model upgrades — are rolled out monthly or quarterly, always with your approval and thorough testing first.',
      },
    ],
  },
]

// Flatten all FAQs for JSON-LD (generated at render time)
const allFaqs = faqCategories.flatMap((cat) => cat.faqs)

function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className={styles.highlight}>
        {part}
      </mark>
    ) : (
      part
    )
  )
}

export default function FAQPage() {
  const [search, setSearch] = useState('')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredCategories = useMemo(() => {
    const query = search.toLowerCase().trim()
    if (!query && !activeCategory) return faqCategories
    return faqCategories
      .filter((cat) => !activeCategory || cat.name === activeCategory)
      .map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (faq) =>
            !query ||
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.faqs.length > 0)
  }, [search, activeCategory])

  const totalVisible = filteredCategories.reduce((sum, cat) => sum + cat.faqs.length, 0)

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
          <p className={styles.heroSubtitle}>
            Everything you need to know about our AI automation services, pricing,
            and how we help South African businesses grow.
          </p>

          <div className={styles.searchWrapper}>
            <svg
              className={styles.searchIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search questions... e.g. WhatsApp, pricing, POPIA"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search frequently asked questions"
            />
            {search && (
              <button
                className={styles.clearButton}
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          {search && (
            <p className={styles.searchCount}>
              {totalVisible} {totalVisible === 1 ? 'result' : 'results'} found
            </p>
          )}
        </div>
      </section>

      {/* Category filter pills */}
      <section className={styles.faqContent}>
        <div className="container">
          <nav className={styles.categoryNav} aria-label="FAQ categories">
            <button
              className={`${styles.categoryButton} ${!activeCategory ? styles.categoryButtonActive : ''}`}
              onClick={() => setActiveCategory(null)}
            >
              All Categories
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.name}
                className={`${styles.categoryButton} ${activeCategory === cat.name ? styles.categoryButtonActive : ''}`}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.name ? null : cat.name)
                }
              >
                {cat.name}
              </button>
            ))}
          </nav>

          {/* FAQ Sections */}
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <section key={category.name} className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  {category.name}
                </h2>

                {category.faqs.map((faq, idx) => {
                  const itemId = `${category.name}-${idx}`
                  const isOpen = openItems.has(itemId)
                  return (
                    <div
                      key={itemId}
                      className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
                    >
                      <button
                        className={styles.accordionButton}
                        onClick={() => toggleItem(itemId)}
                        aria-expanded={isOpen}
                        aria-controls={`answer-${itemId}`}
                      >
                        {highlightText(faq.question, search)}
                        <svg
                          className={`${styles.accordionChevron} ${isOpen ? styles.accordionChevronOpen : ''}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <div
                        id={`answer-${itemId}`}
                        className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ''}`}
                        role="region"
                        aria-hidden={!isOpen}
                      >
                        <div className={styles.accordionAnswer}>
                          {highlightText(faq.answer, search)}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </section>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No questions match &ldquo;{search}&rdquo;</p>
              <span>Try a different keyword or browse all categories</span>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Can&apos;t find what you&apos;re looking for? Our team is ready to help.
              Reach out via WhatsApp for a quick response or visit our contact page.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/27832580869"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaWhatsApp}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link href="/contact" className={styles.ctaContact}>
                Contact Us
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
