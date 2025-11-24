import Link from 'next/link'

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>Our Services</h1>
          <p>Comprehensive IT solutions tailored to your needs</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>On-Site Desktop Support</h3>
              <p>Professional on-site technical support for your business or home office.</p>
              <ul>
                <li>Hardware troubleshooting</li>
                <li>System optimization</li>
                <li>Network setup</li>
                <li>Equipment installation</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>Remote Desktop Support</h3>
              <p>Fast and efficient remote assistance to solve your technical issues quickly.</p>
              <ul>
                <li>Remote troubleshooting</li>
                <li>Software installations</li>
                <li>System maintenance</li>
                <li>Quick issue resolution</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Technical Support</h3>
              <p>Expert repair and maintenance services for laptops, PCs, and peripherals.</p>
              <ul>
                <li>Laptop & PC repairs</li>
                <li>Hardware upgrades</li>
                <li>Data recovery</li>
                <li>Performance tuning</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Software Setup</h3>
              <p>Professional installation and configuration of software applications.</p>
              <ul>
                <li>Operating system setup</li>
                <li>Application installation</li>
                <li>Software licensing</li>
                <li>Configuration & training</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📧</div>
              <h3>Microsoft & Email Solutions</h3>
              <p>Complete Microsoft ecosystem setup and email management services.</p>
              <ul>
                <li>Microsoft 365 setup</li>
                <li>Email configuration</li>
                <li>Cloud migration</li>
                <li>Account management</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Website Hosting</h3>
              <p>Reliable and secure web hosting solutions for your online presence.</p>
              <ul>
                <li>Domain management</li>
                <li>SSL certificates</li>
                <li>Server maintenance</li>
                <li>Performance optimization</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Software Design & Development</h3>
              <p>Custom software solutions built to meet your specific business needs.</p>
              <ul>
                <li>Web applications</li>
                <li>Desktop software</li>
                <li>Database solutions</li>
                <li>API development</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobile App Development</h3>
              <p>Professional iOS and Android app development and deployment services.</p>
              <ul>
                <li>Native app development</li>
                <li>Cross-platform apps</li>
                <li>App Store deployment</li>
                <li>Google Play publishing</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>Automation Solutions</h3>
              <p>Streamline your workflows with custom automation and integration services.</p>
              <ul>
                <li>Process automation</li>
                <li>Workflow optimization</li>
                <li>API integrations</li>
                <li>Script development</li>
              </ul>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to get started?</h2>
            <p>Contact us today to discuss your IT needs and get a custom quote.</p>
            <Link href="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
