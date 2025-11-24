import Link from 'next/link'
import { notFound } from 'next/navigation'
import DownloadButton from './DownloadButton'

// Product data - you'll update this with your actual products
const products = {
  'little-latte-lane': {
    name: 'Little Latte Lane',
    tagline: 'Complete Restaurant Management System',
    icon: '🍽️',
    version: '1.0.0',
    description: 'A comprehensive restaurant ordering and management platform featuring real-time orders, payment integration, and customer engagement tools. Built with modern technologies to streamline your restaurant operations.',
    longDescription: `Little Latte Lane is a complete end-to-end solution for restaurant management. From taking orders to processing payments, managing inventory to analyzing sales data, this platform handles it all.

Perfect for cafes, restaurants, and food service businesses looking to modernize their operations and provide an exceptional customer experience.`,
    features: [
      { icon: '🛒', title: 'Real-time Order Management', description: 'Process orders instantly with live updates across all devices' },
      { icon: '💳', title: 'Integrated Payment Processing', description: 'Accept payments through Yoco and other payment gateways' },
      { icon: '👥', title: 'Customer Loyalty Program', description: 'Built-in rewards system to keep customers coming back' },
      { icon: '📊', title: 'Analytics Dashboard', description: 'Track sales, popular items, and business performance' },
      { icon: '📱', title: 'Multi-platform Support', description: 'Works on iOS, Android, and Web' },
      { icon: '🔔', title: 'Push Notifications', description: 'Keep customers updated with order status' },
      { icon: '🍔', title: 'Menu Management', description: 'Easy to update menu items, prices, and availability' },
      { icon: '🖨️', title: 'Kitchen Display System', description: 'Digital order display for kitchen staff' },
    ],
    pricing: {
      monthly: 999,
      yearly: 9990,
      currency: 'R',
      features: [
        'Unlimited orders',
        'Up to 3 locations',
        'Payment gateway integration',
        'Customer database',
        'Analytics & reports',
        '24/7 email support',
        'Free updates for 1 year',
      ]
    },
    requirements: {
      minimum: [
        'Windows 10 or later (64-bit)',
        '4GB RAM',
        '500MB free disk space',
        'Internet connection',
        '.NET Framework 4.8 or later',
      ],
      recommended: [
        'Windows 11 (64-bit)',
        '8GB RAM or more',
        '1GB free disk space',
        'High-speed internet',
        'Multi-core processor',
      ]
    },
    downloads: [
      {
        platform: 'Windows',
        architecture: '64-bit',
        version: '1.0.0',
        size: '125 MB',
        url: '/downloads/little-latte-lane-1.0.0-win64.exe', // We'll set this up next
        releaseDate: '2025-01-15',
      },
      // Add more versions as needed
    ],
    screenshots: [
      // Add screenshot URLs later
    ],
    changelog: [
      {
        version: '1.0.0',
        date: '2025-01-15',
        changes: [
          'Initial release',
          'Complete restaurant management system',
          'Payment integration with Yoco',
          'Customer loyalty program',
          'Analytics dashboard',
        ]
      }
    ]
  },
  // Add more products here as you create them
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="page-header-content">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{product.icon}</div>
          <h1>{product.name}</h1>
          <p>{product.tagline}</p>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            Version {product.version} • Released {product.downloads[0]?.releaseDate}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={{ padding: '2rem', background: 'var(--white)' }}>
        <div className="container" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#download" className="cta-button">Download Now</a>
          <Link href="/contact" className="cta-button" style={{ background: 'var(--white)', color: 'var(--accent-color)', border: '2px solid var(--accent-color)' }}>
            Contact Sales
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: '4rem 2rem', background: 'var(--secondary-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">Overview</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '2rem' }}>
              {product.description}
            </p>
            <div style={{ whiteSpace: 'pre-line', color: 'var(--text-light)', lineHeight: '1.8' }}>
              {product.longDescription}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '4rem 2rem', background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Features</h2>
          <p className="section-subtitle">Everything you need to run your business efficiently</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {product.features.map((feature, index) => (
              <div key={index} className="service-card">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '4rem 2rem', background: 'var(--secondary-color)' }}>
        <div className="container">
          <h2 className="section-title">Pricing</h2>
          <p className="section-subtitle">Simple, transparent pricing for your business</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            {/* Monthly Plan */}
            <div className="product-card" style={{ maxWidth: '400px', width: '100%' }}>
              <div className="product-header">
                <h3>Monthly License</h3>
                <p className="product-version">Pay as you grow</p>
              </div>
              <div className="product-price">
                {product.pricing.currency}{product.pricing.monthly.toLocaleString()}
                <span className="currency"> / month</span>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  {product.pricing.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="product-footer">
                <Link href="/contact" className="btn btn-primary">Get Started</Link>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="product-card" style={{ maxWidth: '400px', width: '100%', borderColor: 'var(--accent-color)' }}>
              <div className="product-header" style={{ background: 'var(--accent-color)', color: 'white' }}>
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  SAVE {Math.round((1 - (product.pricing.yearly / (product.pricing.monthly * 12))) * 100)}%
                </div>
                <h3 style={{ color: 'white' }}>Annual License</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>Best value</p>
              </div>
              <div className="product-price">
                {product.pricing.currency}{product.pricing.yearly.toLocaleString()}
                <span className="currency"> / year</span>
                <div style={{ fontSize: '1rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>
                  ({product.pricing.currency}{Math.round(product.pricing.yearly / 12).toLocaleString()}/month)
                </div>
              </div>
              <div className="product-body">
                <ul className="product-features">
                  {product.pricing.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                  <li style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>2 months free!</li>
                </ul>
              </div>
              <div className="product-footer">
                <Link href="/contact" className="btn btn-primary">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section style={{ padding: '4rem 2rem', background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">System Requirements</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', maxWidth: '900px', margin: '3rem auto 0' }}>
            <div className="service-card">
              <h3>Minimum Requirements</h3>
              <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                {product.requirements.minimum.map((req, index) => (
                  <li key={index} style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-light)' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-card" style={{ borderColor: 'var(--accent-color)' }}>
              <h3>Recommended</h3>
              <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                {product.requirements.recommended.map((req, index) => (
                  <li key={index} style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-light)' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" style={{ padding: '4rem 2rem', background: 'var(--secondary-color)' }}>
        <div className="container">
          <h2 className="section-title">Download</h2>
          <p className="section-subtitle">Get the latest version of {product.name}</p>

          <div style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            {product.downloads.map((download, index) => (
              <div key={index} className="service-card" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>
                    {download.platform} ({download.architecture})
                  </h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>
                    Version {download.version} • {download.size} • Released {download.releaseDate}
                  </p>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                    <span style={{ marginRight: '1rem' }}>📦 Installer</span>
                    <span>🔒 Secure Download</span>
                  </div>
                </div>
                <div>
                  <DownloadButton download={download} productName={product.name} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'var(--white)', borderRadius: '15px' }}>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
              Need help with installation?
            </p>
            <Link href="/contact" className="cta-button">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section style={{ padding: '4rem 2rem', background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Changelog</h2>
          <p className="section-subtitle">What's new in this version</p>

          <div style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            {product.changelog.map((release, index) => (
              <div key={index} className="service-card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3>Version {release.version}</h3>
                  <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{release.date}</span>
                </div>
                <ul style={{ listStyle: 'none' }}>
                  {release.changes.map((change, changeIndex) => (
                    <li key={changeIndex} style={{ padding: '0.5rem 0', paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-light)' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>•</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 2rem', background: 'var(--accent-color)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.9 }}>
            Transform your business with {product.name}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#download" className="cta-button" style={{ background: 'white', color: 'var(--accent-color)' }}>
              Download Now
            </a>
            <Link href="/contact" className="cta-button" style={{ background: 'transparent', border: '2px solid white' }}>
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// Generate static params for all products
export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }))
}
