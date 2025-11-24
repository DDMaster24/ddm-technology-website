'use client'

import Link from 'next/link'

export default function Software() {
  const handleDownload = (productName: string) => {
    alert(
      `Download functionality for ${productName} will be implemented soon. Please contact us for access.`
    )
  }

  const handleLicensePurchase = (productName: string) => {
    alert(
      `Online payment functionality for ${productName} will be implemented soon. Please contact us to purchase a license.`
    )
  }

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
                <div className="product-icon">🍽️</div>
                <h3>Little Latte Lane</h3>
                <p className="product-version">Version 1.0.0</p>
              </div>
              <div className="product-body">
                <p className="product-description">
                  A comprehensive restaurant ordering and management platform featuring real-time
                  orders, payment integration, and customer engagement tools.
                </p>
                <ul className="product-features">
                  <li>Real-time order management</li>
                  <li>Integrated payment processing</li>
                  <li>Customer loyalty program</li>
                  <li>Analytics dashboard</li>
                  <li>Multi-platform support</li>
                </ul>
              </div>
              <div className="product-price">
                <span className="currency">From</span> R999
              </div>
              <div className="product-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => handleDownload('Little Latte Lane')}
                >
                  Download
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleLicensePurchase('Little Latte Lane')}
                >
                  Buy License
                </button>
              </div>
            </div>

            {/* Placeholder for future products */}
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">📊</div>
                <h3>Coming Soon</h3>
                <p className="product-version">In Development</p>
              </div>
              <div className="product-body">
                <p className="product-description">
                  We&apos;re constantly developing new software solutions to meet your business
                  needs. Check back soon for our latest products!
                </p>
                <ul className="product-features">
                  <li>More products coming soon</li>
                  <li>Custom solutions available</li>
                  <li>Enterprise packages</li>
                </ul>
              </div>
              <div className="product-footer">
                <button className="btn btn-disabled">Coming Soon</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">💼</div>
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
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
