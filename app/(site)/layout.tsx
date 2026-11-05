import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

// Main site chrome (navigation, footer, WhatsApp button). Moved here from the
// root layout so the /start intake form can have its own bare layout.
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Navigation />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
