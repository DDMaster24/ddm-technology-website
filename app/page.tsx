import Link from 'next/link'
import Hero from '@/components/Hero'
import {
  BriefcaseIcon,
  RocketIcon,
  ZapIcon,
  TargetIcon,
  MonitorIcon,
  WrenchIcon,
  CodeIcon,
  GlobeIcon,
  MailIcon,
  CpuIcon,
  ClipboardIcon,
  ArrowRightIcon
} from '@/components/Icons'

export default function Home() {
  return (
    <>
      {/* Enhanced Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose DDM Technology?</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions delivered with professionalism and expertise
          </p>

          <div className="features-grid">
            <div className="feature-box">
              <div className="icon"><BriefcaseIcon /></div>
              <h3>Professional Services</h3>
              <p>Expert IT support and solutions tailored to your business needs.</p>
            </div>

            <div className="feature-box">
              <div className="icon"><RocketIcon /></div>
              <h3>Fast & Reliable</h3>
              <p>Quick response times and dependable service you can count on.</p>
            </div>

            <div className="feature-box">
              <div className="icon"><ZapIcon /></div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance whenever you need help.</p>
            </div>

            <div className="feature-box">
              <div className="icon"><TargetIcon /></div>
              <h3>Custom Solutions</h3>
              <p>Bespoke software and IT solutions built for your requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">From on-site support to cutting-edge software development</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><MonitorIcon /></div>
              <h3>Desktop Support</h3>
              <p>On-site and remote technical support for all your IT needs.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><WrenchIcon /></div>
              <h3>Technical Repairs</h3>
              <p>Expert repair and maintenance for laptops, PCs, and hardware.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><CodeIcon /></div>
              <h3>Software Development</h3>
              <p>Custom software solutions and mobile app development.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><GlobeIcon /></div>
              <h3>Web & Hosting</h3>
              <p>Website hosting, domain management, and web solutions.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><MailIcon /></div>
              <h3>Microsoft Solutions</h3>
              <p>Microsoft 365, email setup, and cloud migration services.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><CpuIcon /></div>
              <h3>Automation</h3>
              <p>Process automation and workflow optimization solutions.</p>
            </div>
          </div>

          <div className="cta-section">
            <h2>Explore All Our Services</h2>
            <p>Discover our complete range of IT solutions and services</p>
            <Link href="/services" className="cta-button">
              View All Services <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About DDM Technology</h2>
          <p className="section-subtitle">
            Your trusted partner for comprehensive IT solutions and software development
          </p>

          <div className="about-content">
            <div className="about-text">
              <h3>Who We Are</h3>
              <p>
                DDM Technology is a leading provider of comprehensive IT solutions based in South
                Africa. We specialize in delivering high-quality technical support, software
                development, and digital solutions for businesses and individuals.
              </p>
              <p>
                From on-site support to cutting-edge app development, we handle all your technology
                needs with professionalism and expertise.
              </p>
              <Link href="/about" className="cta-button" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>
                Learn More <ArrowRightIcon />
              </Link>
            </div>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Products Teaser */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Our Software Products</h2>
          <p className="section-subtitle">Professional software solutions for your business</p>

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
              </div>
              <div className="product-footer">
                <Link href="/software" className="btn btn-primary">
                  View Details
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
                  Need a custom software solution? We build bespoke applications for your specific
                  business needs.
                </p>
              </div>
              <div className="product-footer">
                <Link href="/contact" className="btn btn-primary">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>View All Software Products</h2>
            <p>Explore our complete software catalog and licensing options</p>
            <Link href="/software" className="cta-button">
              Browse Software <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="contact-section">
        <div className="container">
          <div className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your IT needs and get a custom quote</p>
            <Link href="/contact" className="cta-button">
              Contact Us Now <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
