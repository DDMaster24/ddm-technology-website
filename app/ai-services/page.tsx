'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRightIcon, ZapIcon, RocketIcon, CpuIcon, TargetIcon } from '@/components/Icons'

const packages = [
  {
    name: 'Starter',
    price: 'R15,000',
    period: '/month',
    description: 'Perfect for small businesses looking to automate key tasks.',
    icon: <ZapIcon />,
    features: [
      '1 AI Employee (chatbot or assistant)',
      'Up to 500 interactions/month',
      'Email & chat automation',
      'Basic analytics dashboard',
      'Business hours support',
      'Monthly performance report',
    ],
    highlighted: false,
  },
  {
    name: 'Business',
    price: 'R35,000',
    period: '/month',
    description: 'Scale your operations with intelligent AI workflows.',
    icon: <RocketIcon />,
    features: [
      '3 AI Employees',
      'Up to 5,000 interactions/month',
      'CRM & email integration',
      'Lead qualification & routing',
      'Custom training on your data',
      'Priority support (12hr SLA)',
      'Weekly performance reports',
      'A/B testing for responses',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'R75,000',
    period: '/month',
    description: 'Full-scale AI workforce for established businesses.',
    icon: <CpuIcon />,
    features: [
      '10 AI Employees',
      'Unlimited interactions',
      'Multi-channel deployment',
      'Advanced analytics & insights',
      'Custom API integrations',
      'Dedicated account manager',
      '4hr SLA support',
      'White-label options',
      'Compliance & audit logs',
    ],
    highlighted: false,
  },
  {
    name: 'AI HQ',
    price: 'R120,000+',
    period: '/month',
    description: 'Your entire AI department, fully managed.',
    icon: <TargetIcon />,
    features: [
      'Unlimited AI Employees',
      'Unlimited interactions',
      'Full business process automation',
      'Custom AI model training',
      'On-premise deployment option',
      'Dedicated AI engineering team',
      '1hr SLA / 24/7 support',
      'Strategic AI consulting',
      'Quarterly business reviews',
      'SLA-backed uptime guarantee',
    ],
    highlighted: false,
  },
]

const comparisonFeatures = [
  { name: 'AI Employees', starter: '1', business: '3', enterprise: '10', hq: 'Unlimited' },
  { name: 'Monthly Interactions', starter: '500', business: '5,000', enterprise: 'Unlimited', hq: 'Unlimited' },
  { name: 'Custom Training', starter: false, business: true, enterprise: true, hq: true },
  { name: 'API Integrations', starter: false, business: 'Basic', enterprise: 'Advanced', hq: 'Custom' },
  { name: 'Analytics Dashboard', starter: 'Basic', business: 'Standard', enterprise: 'Advanced', hq: 'Enterprise' },
  { name: 'White-label', starter: false, business: false, enterprise: true, hq: true },
  { name: 'Dedicated Manager', starter: false, business: false, enterprise: true, hq: true },
  { name: 'On-premise Option', starter: false, business: false, enterprise: false, hq: true },
  { name: 'SLA', starter: 'Business hrs', business: '12hr', enterprise: '4hr', hq: '1hr / 24/7' },
]

export default function AIServicesPage() {
  const [employees, setEmployees] = useState(3)
  const [hourlyRate, setHourlyRate] = useState(150)
  const [hoursPerWeek, setHoursPerWeek] = useState(40)

  const monthlySavings = employees * hourlyRate * hoursPerWeek * 4.33
  const aiCost = employees <= 1 ? 15000 : employees <= 3 ? 35000 : employees <= 10 ? 75000 : 120000
  const netSavings = monthlySavings - aiCost
  const roiPercent = aiCost > 0 ? Math.round((netSavings / aiCost) * 100) : 0

  return (
    <>
      <div className="page-header">
        <div className="page-header-content">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'rgba(220, 38, 38, 0.1)',
            border: '1px solid rgba(220, 38, 38, 0.25)',
            borderRadius: '100px',
            fontSize: '0.875rem',
            color: 'var(--ember-red)',
            marginBottom: '1.5rem',
            fontWeight: 600,
          }}>
            <CpuIcon /> AI-Powered Automation
          </div>
          <h1>AI Employee Packages</h1>
          <p>Replace repetitive tasks with intelligent AI employees that work 24/7, never take leave, and scale instantly.</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title">Choose Your AI Workforce</h2>
          <p className="section-subtitle">Flexible packages designed for businesses of every size</p>

          <div className="ai-pricing-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}>
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                style={{
                  background: pkg.highlighted ? 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-card))' : 'var(--bg-card)',
                  border: `1px solid ${pkg.highlighted ? 'rgba(220, 38, 38, 0.4)' : 'var(--border-subtle)'}`,
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {pkg.highlighted && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--gradient-ember-ocean)',
                  }} />
                )}
                {pkg.highlighted && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.25rem 0.75rem',
                    background: 'var(--gradient-ember-ocean)',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'white',
                    letterSpacing: '0.05em',
                  }}>
                    POPULAR
                  </div>
                )}
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: pkg.highlighted
                    ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(30, 64, 175, 0.15))'
                    : 'linear-gradient(135deg, rgba(185, 28, 28, 0.15), rgba(220, 38, 38, 0.1))',
                  border: `1px solid ${pkg.highlighted ? 'rgba(220, 38, 38, 0.35)' : 'rgba(185, 28, 28, 0.25)'}`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ember-red)',
                  marginBottom: '1.25rem',
                }}>
                  {pkg.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {pkg.name}
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    background: 'var(--gradient-ember-ocean)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {pkg.price}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{pkg.period}</span>
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {pkg.description}
                </p>
                <ul style={{ listStyle: 'none', flex: 1, marginBottom: '1.5rem' }}>
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        position: 'relative',
                        paddingLeft: '1.25rem',
                        paddingTop: '0.375rem',
                        paddingBottom: '0.375rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '6px',
                        height: '6px',
                        background: pkg.highlighted ? 'var(--ember-red)' : 'var(--ocean-cyan)',
                        borderRadius: '50%',
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ai-services/contact"
                  className={pkg.highlighted ? 'btn btn-primary' : 'btn btn-secondary'}
                  style={{ textAlign: 'center' }}
                >
                  Book a Free Demo
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Feature Comparison</h2>
          <p className="section-subtitle">See exactly what each package includes</p>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'var(--font-body)',
                minWidth: '700px',
              }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>Feature</th>
                    <th style={{ padding: '1.25rem 1rem', textAlign: 'center', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>Starter</th>
                    <th style={{
                      padding: '1.25rem 1rem',
                      textAlign: 'center',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      background: 'rgba(220, 38, 38, 0.05)',
                      color: 'var(--ember-red)',
                    }}>Business</th>
                    <th style={{ padding: '1.25rem 1rem', textAlign: 'center', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>Enterprise</th>
                    <th style={{ padding: '1.25rem 1rem', textAlign: 'center', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>AI HQ</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr key={row.name} style={{ borderBottom: i < comparisonFeatures.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                      <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{row.name}</td>
                      {(['starter', 'business', 'enterprise', 'hq'] as const).map((tier) => (
                        <td
                          key={tier}
                          style={{
                            padding: '1rem',
                            textAlign: 'center',
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)',
                            background: tier === 'business' ? 'rgba(220, 38, 38, 0.03)' : 'transparent',
                          }}
                        >
                          {row[tier] === true ? (
                            <span style={{ color: 'var(--ocean-cyan)', fontWeight: 600 }}>&#10003;</span>
                          ) : row[tier] === false ? (
                            <span style={{ color: 'var(--text-dim)' }}>&mdash;</span>
                          ) : (
                            row[tier]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section style={{ background: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container">
          <h2 className="section-title">ROI Calculator</h2>
          <p className="section-subtitle">See how much you could save by switching to AI employees</p>

          <div className="ai-roi-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {/* Inputs */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '2rem',
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Your Current Costs
              </h3>
              <div className="form-group">
                <label>Employees to replace with AI</label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={employees}
                  onChange={(e) => setEmployees(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>
              <div className="form-group">
                <label>Avg hourly rate (ZAR)</label>
                <input
                  type="number"
                  min={1}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>
              <div className="form-group">
                <label>Hours per week per employee</label>
                <input
                  type="number"
                  min={1}
                  max={168}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>
            </div>

            {/* Results */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Estimated Savings
              </h3>
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Current monthly cost</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--text-secondary)' }}>
                  R{Math.round(monthlySavings).toLocaleString()}
                </div>
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>AI package cost</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--ocean-cyan)' }}>
                  R{aiCost.toLocaleString()}
                </div>
              </div>
              <div style={{
                padding: '1.25rem',
                background: netSavings > 0 ? 'rgba(220, 38, 38, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${netSavings > 0 ? 'rgba(220, 38, 38, 0.25)' : 'var(--border-subtle)'}`,
                borderRadius: '12px',
              }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Monthly savings</div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  background: 'var(--gradient-ember-ocean)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  R{Math.round(netSavings).toLocaleString()}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  {roiPercent}% ROI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="cta-section">
            <h2>Ready to Meet Your AI Employees?</h2>
            <p>Book a free demo and see how AI automation can transform your business</p>
            <Link href="/ai-services/contact" className="cta-button">
              Book a Free Demo <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
