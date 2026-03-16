'use client'

import Link from 'next/link'
import {
  ClipboardIcon,
  FileTextIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  CheckSquareIcon
} from '@/components/Icons'

export default function Software() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>Our Software Products</h1>
          <p>Download and license our professional software solutions</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon"><ClipboardIcon /></div>
                <h3>DDM IC</h3>
                <p className="product-version">Version 1.0.0</p>
              </div>
              <div className="product-body">
                <p className="product-description">
                  Professional bookkeeping and invoicing software to streamline your business
                  finances. Create invoices, manage clients, and track your items with ease.
                </p>
                <ul className="product-features">
                  <li>Create professional invoices</li>
                  <li>Client management</li>
                  <li>Item/product catalogue</li>
                  <li>Easy-to-use interface</li>
                  <li>More features coming soon</li>
                </ul>
              </div>
              <div className="product-price">
                <span className="currency">From</span> R500<span className="currency">/year</span>
                <p className="price-tier">Basic Package</p>
              </div>
              <div className="product-footer">
                <Link href="/software/ddm-ic" className="btn btn-primary">
                  View Details
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon"><FileTextIcon /></div>
                <h3>PDF Summarizer</h3>
                <p className="product-version">Version 1.0.0</p>
              </div>
              <div className="product-body">
                <p className="product-description">
                  Quickly summarize PDF documents with our easy-to-use desktop application.
                  More details coming soon.
                </p>
                <ul className="product-features">
                  <li>Summarize PDF documents</li>
                  <li>Easy-to-use interface</li>
                  <li>Windows desktop application</li>
                </ul>
              </div>
              <div className="product-footer">
                <Link href="/software/pdf-summarizer" className="btn btn-primary">
                  Download
                </Link>
              </div>
            </div>

            <div className="product-card" style={{ position: 'relative', overflow: 'visible' }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '20px',
                background: 'var(--gradient-ember-ocean)',
                color: 'white',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: 'var(--glow-ember-ocean)',
                zIndex: 10
              }}>
                Cross-Platform
              </div>
              <div className="product-header">
                <div className="product-icon"><CheckSquareIcon /></div>
                <h3>TaskMaster Pro</h3>
                <p className="product-version">Version 1.0.0</p>
              </div>
              <div className="product-body">
                <p className="product-description">
                  A powerful task management application to organize your work, track progress,
                  and boost productivity across Windows, macOS, and Linux.
                </p>
                <ul className="product-features">
                  <li>Smart task management</li>
                  <li>Progress tracking dashboard</li>
                  <li>Tags & categories</li>
                  <li>Works offline - no account needed</li>
                  <li>Windows, macOS & Linux</li>
                </ul>
              </div>
              <div className="product-price">
                <span className="currency">Free</span>
                <p className="price-tier">All Features Included</p>
              </div>
              <div className="product-footer">
                <Link href="/software/taskmaster-pro" className="btn btn-primary">
                  View Details
                </Link>
                <Link href="/software/taskmaster-pro#download" className="btn btn-secondary">
                  Download
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon"><BriefcaseIcon /></div>
                <h3>Custom Solutions</h3>
                <p className="product-version">Tailored to You</p>
              </div>
              <div className="product-body">
                <p className="product-description">
                  Need a custom software solution? We build bespoke applications tailored to your
                  specific business requirements and workflows.
                </p>
                <ul className="product-features">
                  <li>Fully customizable</li>
                  <li>Scalable architecture</li>
                  <li>Ongoing support</li>
                  <li>Training included</li>
                </ul>
              </div>
              <div className="product-footer">
                <Link href="/contact" className="btn btn-primary">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Need help choosing?</h2>
            <p>Contact us to discuss which solution is right for your business.</p>
            <Link href="/contact" className="cta-button">
              Get In Touch <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
