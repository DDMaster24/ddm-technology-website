'use client'

import { FormEvent } from 'react'
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon
} from '@/components/Icons'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>Get In Touch</h1>
          <p>Ready to start your project? Contact us today!</p>
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
                    <a href="mailto:contact@ddm-technology.com">contact@ddm-technology.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><PhoneIcon /></div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>Available upon request</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MapPinIcon /></div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>South Africa</p>
                  <p>Serving clients nationwide</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><ClockIcon /></div>
                <div className="contact-details">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8am - 6pm</p>
                  <p>Weekend: By appointment</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontFamily: 'Sora, sans-serif' }}>
                Send us a message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Tell us about your project..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
