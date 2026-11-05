'use client'

import { FormEvent } from 'react'
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from '@/components/Icons'
import { WhatsAppIcon } from '@/components/Icons'

export default function ContactContent() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const company = (form.elements.namedItem('company') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    const subject = encodeURIComponent(`Website Enquiry: ${service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:darius@ddmtech.co.za?subject=${subject}&body=${body}`
  }

  return (
    <>
      <section className="page-header">
        <div className="page-header-content">
          <h1>Get In Touch</h1>
          <p>Book a free AI audit or just say hello — we respond within 24 hours</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><MailIcon /></div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:darius@ddmtech.co.za">darius@ddmtech.co.za</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><PhoneIcon /></div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/27832580869" target="_blank" rel="noopener noreferrer">
                      +27 83 258 0869
                    </a>
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Quick response — usually within the hour
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MapPinIcon /></div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Roodepoort, Johannesburg</p>
                  <p>South Africa</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><ClockIcon /></div>
                <div className="contact-details">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8am - 6pm SAST</p>
                  <p>Weekend: By appointment</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/27832580869?text=Hi%20DDM%20Technology%2C%20I%27m%20interested%20in%20your%20AI%20automation%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  background: '#25D366',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  marginTop: '0.5rem',
                }}
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-form">
              <h3 style={{
                marginBottom: '0.5rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '1.375rem',
                fontWeight: 600,
              }}>
                Book a Free AI Audit
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}>
                Tell us about your business and we will identify where AI can save you time and money — no commitment required.
              </p>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" placeholder="Your company" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="service">What are you interested in?</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service...</option>
                    <option value="ai-audit">Free AI Audit</option>
                    <option value="customer-service">AI Customer Service</option>
                    <option value="workflow-automation">Workflow Automation</option>
                    <option value="document-processing">Document Processing</option>
                    <option value="sales-marketing">AI Sales & Marketing</option>
                    <option value="custom-development">Custom AI Development</option>
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tell us about your business</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What does your business do? What tasks take up the most time? What would you automate if you could?"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>

              {/* WhatsApp alternative below form */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                background: 'rgba(37, 211, 102, 0.08)',
                border: '1px solid rgba(37, 211, 102, 0.2)',
                borderRadius: '12px',
                textAlign: 'center',
              }}>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem',
                }}>
                  Prefer a quick chat? Get an instant response on WhatsApp.
                </p>
                <a
                  href="https://wa.me/27832580869?text=Hi%20DDM%20Technology%2C%20I%27m%20interested%20in%20your%20AI%20automation%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.625rem 1.25rem',
                    background: '#25D366',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <WhatsAppIcon />
                  Or WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
