import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

// 404 page. The site navigation and footer now live in app/(site)/layout.tsx,
// so they are included here explicitly to keep 404s looking like before.
export default function NotFound() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Navigation />
      <main id="main-content">
        <section
          style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '140px 2rem 4rem',
            textAlign: 'center',
          }}
        >
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>404</h1>
            <p style={{ color: 'var(--text-secondary)' }}>This page could not be found.</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
