'use client'

import Link from 'next/link'
import { useState, FormEvent } from 'react'
import { MailIcon, PhoneIcon, ArrowRightIcon } from '@/components/Icons'

export default function AIServicesContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <div className="page-header">
        <div className="page-header-content">
          <h1>Get Started with AI Automation</h1>
          <p>Book a free demo or reach out to discuss how AI employees can transform your business.</p>
        </div>
      </div>

      <section style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="contact-container">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><MailIcon /></div>
                <div className="contact-details">
                  <h4>Email Us</h4>
                  <p><a href="mailto:darius@ddmtech.co.za">darius@ddmtech.co.za</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><PhoneIcon /></div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <p>
                    <a
                      href="https://wa.me/27832580869?text=Hi%2C%20I%27m%20interested%20in%20DDM%20Technology%27s%20AI%20automation%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginTop: '0.5rem',
              }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  What to expect
                </h4>
                <ul style={{ listStyle: 'none' }}>
                  {[
                    'Free 30-minute consultation',
                    'Live demo of AI employees',
                    'Custom ROI analysis for your business',
                    'No-obligation proposal',
                  ].map((item) => (
                    <li
                      key={item}
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
                        background: 'var(--ocean-cyan)',
                        borderRadius: '50%',
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/ai-services" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9375rem',
                color: 'var(--ocean-cyan)',
                textDecoration: 'none',
                marginTop: '0.5rem',
                fontWeight: 500,
              }}>
                &larr; Back to AI Packages
              </Link>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    margin: '0 auto 1.5rem',
                    background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(30, 64, 175, 0.1))',
                    border: '1px solid rgba(220, 38, 38, 0.25)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: 'var(--ember-red)',
                  }}>
                    &#10003;
                  </div>
                  <h3 style={{ fontSize: '1.375rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    Thank you!
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    We&apos;ve received your enquiry and will be in touch within 24 hours to schedule your free demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    Book a Free Demo
                  </h3>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="you@company.co.za" required />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp</label>
                    <input type="tel" placeholder="+27..." />
                  </div>
                  <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" placeholder="Your company" />
                  </div>
                  <div className="form-group">
                    <label>Package Interest</label>
                    <select defaultValue="">
                      <option value="" disabled>Select a package</option>
                      <option value="starter">Starter - R15,000/mo</option>
                      <option value="business">Business - R35,000/mo</option>
                      <option value="enterprise">Enterprise - R75,000/mo</option>
                      <option value="hq">AI HQ - R120,000+/mo</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Tell us about your needs</label>
                    <textarea placeholder="What tasks would you like to automate?" rows={4} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Book My Free Demo
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
