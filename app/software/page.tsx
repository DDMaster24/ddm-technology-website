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
                <div className="product-icon">📋</div>
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
                <div className="product-icon">📄</div>
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
