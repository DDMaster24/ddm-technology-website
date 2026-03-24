import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRightIcon,
  RocketIcon,
  TargetIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon,
  CodeIcon,
  CpuIcon,
  GlobeIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'DDM Technology is a South African AI automation agency in Roodepoort, Johannesburg. We bring world-class AI solutions to local businesses without the enterprise price tag.',
  openGraph: {
    title: 'About DDM Technology | AI Automation Agency',
    description:
      'A young, hungry SA tech company building the future of business automation. 50+ AI automations deployed for businesses across South Africa.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About DDM Technology | AI Automation Agency',
    description:
      'A young, hungry SA tech company building the future of business automation.',
  },
  alternates: {
    canonical: '/about',
  },
}

const values = [
  {
    icon: <SparklesIcon />,
    title: 'Innovation',
    description: 'We stay on the bleeding edge of AI so our clients don\'t have to. New tools, new models, new approaches — always.',
  },
  {
    icon: <TargetIcon />,
    title: 'Excellence',
    description: 'We don\'t ship half-baked solutions. Every automation we build is tested, optimised, and built to last.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'No BS',
    description: 'We tell you exactly what AI can and can\'t do for your business. No hype, no buzzwords, just honest advice.',
  },
  {
    icon: <RocketIcon />,
    title: 'SA-First',
    description: 'Built in South Africa, for South Africa. We understand the local market, the challenges, and the opportunities.',
  },
]

const techStack = [
  { name: 'OpenAI / GPT', category: 'AI Models' },
  { name: 'Claude AI', category: 'AI Models' },
  { name: 'n8n', category: 'Automation' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Make', category: 'Automation' },
  { name: 'Python', category: 'Development' },
  { name: 'Next.js', category: 'Development' },
  { name: 'Node.js', category: 'Development' },
  { name: 'React', category: 'Development' },
  { name: 'TypeScript', category: 'Development' },
  { name: 'PostgreSQL', category: 'Data' },
  { name: 'Supabase', category: 'Data' },
  { name: 'Vercel', category: 'Infrastructure' },
  { name: 'AWS', category: 'Infrastructure' },
  { name: 'Docker', category: 'Infrastructure' },
  { name: 'WhatsApp API', category: 'Integrations' },
]

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-content">
          <h1>About DDM Technology</h1>
          <p>A young, hungry South African tech company building the future of business automation</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h3>Our Story</h3>
              <p>
                DDM Technology started with a simple observation: South African businesses are
                drowning in manual, repetitive work — while the AI tools to fix it already exist.
                The gap was not the technology. It was someone to bridge the gap between cutting-edge
                AI and real business operations.
              </p>
              <p>
                That is what we do. We take the most powerful AI and automation tools in the world
                and make them work for SA businesses — from Joburg coal traders to Cape Town
                restaurants. No Silicon Valley fluff. Just practical systems that save real time
                and real money.
              </p>
              <p>
                <strong>Dream. Dare. Make.</strong> — That is not just our tagline. It is how we
                approach every project. We dream big about what AI can do, we dare to take on the
                hard problems, and we make it happen.
              </p>
            </div>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">AI Automations Deployed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10x</div>
                <div className="stat-label">Average Speed Improvement</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Your AI Never Sleeps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section style={{
        background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        padding: '6rem 2rem',
        position: 'relative',
      }}>
        <div className="container">
          <h2 className="section-title">Meet the Founder</h2>
          <p className="section-subtitle">The person behind DDM Technology</p>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'var(--gradient-ember-ocean)',
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '2rem',
            }}>
              {/* Avatar placeholder */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '20px',
                background: 'var(--gradient-ember-ocean)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: 'white',
                flexShrink: 0,
              }}>
                D
              </div>

              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}>
                  Darius
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--ocean-cyan)',
                  fontWeight: 500,
                  marginBottom: '1.25rem',
                }}>
                  Founder & CEO
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}>
                  Darius is a self-taught developer and AI automation specialist based in
                  Roodepoort, Johannesburg. With a passion for building systems that actually work,
                  he founded DDM Technology to bring world-class AI solutions to South African
                  businesses — without the world-class price tag.
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                }}>
                  From mobile app development to AI workflow automation, Darius has built and shipped
                  products across multiple industries. He believes that every South African business —
                  no matter the size — deserves access to the AI tools that the biggest companies in
                  the world are using.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">What drives everything we build</p>

          <div className="features-grid">
            {values.map((value) => (
              <div key={value.title} className="feature-box">
                <div className="icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{
        background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        padding: '6rem 2rem',
      }}>
        <div className="container">
          <h2 className="section-title">Our Tech Stack</h2>
          <p className="section-subtitle">The tools and technologies we use to build your AI systems</p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {techStack.map((tech) => (
              <div
                key={tech.name}
                style={{
                  padding: '0.625rem 1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '100px',
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-primary)', padding: '4rem 2rem 6rem' }}>
        <div className="container">
          <div className="cta-section">
            <h2>Let Us Build Something Together</h2>
            <p>Ready to see what AI can do for your business? Let us chat.</p>
            <Link href="/contact" className="cta-button">
              Get in Touch <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
