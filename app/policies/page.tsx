import type { Metadata } from 'next'
import styles from './policies.module.css'

export const metadata: Metadata = {
  title: 'Policies | DDM Technology',
  description: 'Privacy Policy, Refund Policy, and Terms of Service for DDM Technology products and services',
}

export default function Policies() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1>Policies</h1>
          <p>Privacy Policy, Refund Policy, and Terms of Service</p>
        </div>
      </section>

      {/* Policies Content */}
      <section className={styles.policiesSection}>
        <div className="container">
          <p className={styles.lastUpdated}>Last Updated: January 2025</p>

          {/* Table of Contents */}
          <div className={styles.tableOfContents}>
            <h3>Contents</h3>
            <ul>
              <li><a href="#privacy-policy">1. Privacy Policy</a></li>
              <li><a href="#refund-policy">2. Refund Policy</a></li>
              <li><a href="#terms-of-service">3. Terms of Service</a></li>
            </ul>
          </div>

          {/* Privacy Policy */}
          <div id="privacy-policy" className={styles.policyBlock}>
            <h2>1. Privacy Policy</h2>

            <h3>1.1 Introduction</h3>
            <p>
              DDM Technology ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website,
              use our software products, or subscribe to our services.
            </p>

            <h3>1.2 Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and company name when you register, make a purchase, or contact us.</li>
              <li><strong>Payment Information:</strong> Credit card details, bank account information, and billing details processed securely through our payment processor (Paystack). We do not store your full payment card details on our servers.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and software, including IP address, browser type, device information, pages visited, and features used.</li>
              <li><strong>Communication Data:</strong> Records of correspondence when you contact our support team.</li>
              <li><strong>Account Data:</strong> Username, password (encrypted), preferences, and subscription details for our SaaS products.</li>
            </ul>

            <h3>1.3 How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders and subscriptions</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send transactional emails (order confirmations, invoices, subscription renewals)</li>
              <li>Improve our products and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraud</li>
            </ul>

            <h3>1.4 Data Sharing and Third Parties</h3>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Payment Processors:</strong> Paystack and other payment providers to process transactions securely.</li>
              <li><strong>Service Providers:</strong> Cloud hosting providers, email services, and analytics tools that help us operate our business.</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

            <h3>1.5 Data Security</h3>
            <p>
              We implement appropriate technical and organizational security measures to protect your data, including
              encryption, secure servers, and access controls. However, no method of transmission over the Internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h3>1.6 Data Retention</h3>
            <p>
              We retain your personal information for as long as necessary to provide our services, comply with legal
              obligations, resolve disputes, and enforce our agreements. Account data is retained while your account
              is active and for a reasonable period thereafter.
            </p>

            <h3>1.7 Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>

            <h3>1.8 Cookies and Tracking</h3>
            <p>
              Our website uses cookies and similar technologies to enhance your experience, analyze usage, and
              provide personalized content. You can control cookie preferences through your browser settings.
            </p>

            <h3>1.9 International Transfers</h3>
            <p>
              Your information may be transferred to and processed in countries other than South Africa. We ensure
              appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
            </p>

            <h3>1.10 Children's Privacy</h3>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect
              personal information from children.
            </p>
          </div>

          {/* Refund Policy */}
          <div id="refund-policy" className={styles.policyBlock}>
            <h2>2. Refund Policy</h2>

            <h3>2.1 Digital Products and Software Licenses</h3>
            <p>
              Due to the nature of digital products and software licenses, all sales are generally final once the
              product has been delivered or the license key has been issued. However, we want you to be satisfied
              with your purchase.
            </p>

            <h4>Refund Eligibility</h4>
            <p>You may be eligible for a refund if:</p>
            <ul>
              <li>The product is materially different from its description</li>
              <li>The product does not function as advertised and we cannot resolve the issue</li>
              <li>You have not downloaded, accessed, or used the product/license</li>
              <li>Technical issues prevent you from using the product and our support team cannot resolve them</li>
            </ul>

            <h4>Refund Request Period</h4>
            <p>
              Refund requests must be submitted within <strong>14 days</strong> of the original purchase date.
              Requests made after this period will be reviewed on a case-by-case basis.
            </p>

            <h4>Non-Refundable Items</h4>
            <ul>
              <li>Products that have been downloaded, accessed, or where license keys have been revealed/used</li>
              <li>Custom software development services once work has commenced</li>
              <li>Products purchased during promotional sales (unless defective)</li>
              <li>Renewal payments for existing subscriptions (see Subscription section)</li>
            </ul>

            <h3>2.2 Software as a Service (SaaS) Subscriptions</h3>
            <p>
              For our SaaS products (website builders, invoicing software, and other subscription-based services):
            </p>

            <h4>Free Trials</h4>
            <p>
              Where available, we offer free trial periods. We encourage you to fully evaluate our services during
              this period before subscribing.
            </p>

            <h4>Subscription Cancellation</h4>
            <ul>
              <li>You may cancel your subscription at any time through your account dashboard or by contacting support.</li>
              <li>Cancellation takes effect at the end of your current billing period.</li>
              <li>You will continue to have access to the service until the end of your paid period.</li>
              <li>No partial refunds are provided for unused portions of a billing period.</li>
            </ul>

            <h4>Monthly Subscriptions</h4>
            <p>
              Monthly subscriptions can be cancelled at any time. No refunds are provided for the current month,
              but no further charges will occur after cancellation.
            </p>

            <h4>Annual Subscriptions</h4>
            <p>
              Annual subscriptions may be eligible for a prorated refund within the first <strong>30 days</strong>
              if you have not extensively used the service. After 30 days, no refunds are provided, but you may
              continue using the service until your subscription expires.
            </p>

            <h3>2.3 IT Services and Custom Development</h3>
            <ul>
              <li><strong>Consultation fees</strong> are non-refundable once the consultation has taken place.</li>
              <li><strong>Custom development projects</strong> require a non-refundable deposit. Refunds for remaining balances depend on the work completed at the time of cancellation.</li>
              <li><strong>Technical support services</strong> are non-refundable once the service has been rendered.</li>
            </ul>

            <h3>2.4 International Payments and Currency</h3>
            <p>
              Refunds will be issued in the original currency of payment. We are not responsible for exchange rate
              fluctuations or any fees charged by your bank or payment provider.
            </p>

            <h3>2.5 How to Request a Refund</h3>
            <p>To request a refund:</p>
            <ol>
              <li>Email us at <strong>support@ddm-technology.com</strong> with your order number and reason for the refund request.</li>
              <li>Include any relevant details or screenshots demonstrating the issue.</li>
              <li>Our team will review your request within 3-5 business days.</li>
              <li>Approved refunds will be processed within 7-10 business days to your original payment method.</li>
            </ol>

            <h3>2.6 Chargebacks</h3>
            <p>
              We encourage customers to contact us directly before initiating a chargeback. We are committed to
              resolving disputes fairly. Fraudulent chargebacks may result in account termination and legal action.
            </p>
          </div>

          {/* Terms of Service */}
          <div id="terms-of-service" className={styles.policyBlock}>
            <h2>3. Terms of Service</h2>

            <h3>3.1 Acceptance of Terms</h3>
            <p>
              By accessing our website, purchasing our products, or using our services, you agree to be bound by
              these Terms of Service. If you do not agree, please do not use our services.
            </p>

            <h3>3.2 Services Description</h3>
            <p>DDM Technology provides:</p>
            <ul>
              <li>Software products and digital downloads</li>
              <li>Software as a Service (SaaS) subscriptions</li>
              <li>IT support and technical services</li>
              <li>Custom software development</li>
              <li>Web hosting and domain services</li>
            </ul>

            <h3>3.3 Account Registration</h3>
            <ul>
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
            </ul>

            <h3>3.4 Software License</h3>
            <p>
              When you purchase software from DDM Technology, you receive a limited, non-exclusive, non-transferable
              license to use the software according to the specific license terms provided with each product.
            </p>
            <ul>
              <li>You may not copy, modify, distribute, sell, or lease the software.</li>
              <li>You may not reverse engineer or attempt to extract the source code.</li>
              <li>License keys are for single use unless otherwise specified.</li>
              <li>Violation of license terms may result in termination of your license without refund.</li>
            </ul>

            <h3>3.5 SaaS Terms</h3>
            <ul>
              <li>SaaS subscriptions grant you access to our cloud-based services for the subscription period.</li>
              <li>We reserve the right to modify, update, or discontinue features with reasonable notice.</li>
              <li>Your data remains your property; we act as a data processor on your behalf.</li>
              <li>You are responsible for maintaining backups of critical data where applicable.</li>
              <li>Service availability is provided on a commercially reasonable basis; we do not guarantee 100% uptime.</li>
            </ul>

            <h3>3.6 Acceptable Use</h3>
            <p>You agree not to use our services to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Distribute malware, spam, or harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Use automated systems to access our services without permission</li>
            </ul>

            <h3>3.7 Payment Terms</h3>
            <ul>
              <li>All prices are displayed in the currency indicated and may be subject to VAT where applicable.</li>
              <li>Payment is required before access to digital products or services is granted.</li>
              <li>For subscriptions, you authorize us to charge your payment method on a recurring basis.</li>
              <li>Failed payments may result in service suspension.</li>
            </ul>

            <h3>3.8 Intellectual Property</h3>
            <p>
              All content, trademarks, and intellectual property on our website and in our products belong to
              DDM Technology or our licensors. You may not use our intellectual property without written permission.
            </p>

            <h3>3.9 Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, DDM Technology shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including loss of profits, data, or
              business opportunities, arising from your use of our services.
            </p>
            <p>
              Our total liability for any claims arising from these terms or your use of our services shall not
              exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>

            <h3>3.10 Disclaimer of Warranties</h3>
            <p>
              Our services are provided "as is" and "as available" without warranties of any kind, express or
              implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure.
            </p>

            <h3>3.11 Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless DDM Technology, its officers, employees, and agents from
              any claims, damages, or expenses arising from your use of our services or violation of these terms.
            </p>

            <h3>3.12 Termination</h3>
            <p>
              We may terminate or suspend your account and access to our services at any time for violation of
              these terms or for any other reason with reasonable notice. Upon termination, your license to use
              our software and services ends immediately.
            </p>

            <h3>3.13 Governing Law</h3>
            <p>
              These terms are governed by the laws of the Republic of South Africa. Any disputes shall be subject
              to the exclusive jurisdiction of the courts of South Africa.
            </p>

            <h3>3.14 Changes to Terms</h3>
            <p>
              We may update these terms from time to time. We will notify you of significant changes via email or
              through our website. Continued use of our services after changes constitutes acceptance of the
              updated terms.
            </p>

            <h3>3.15 Contact Information</h3>
            <p>For questions about these policies, please contact us:</p>
            <ul className={styles.contactList}>
              <li><strong>Email:</strong> support@ddm-technology.com</li>
              <li><strong>Website:</strong> www.ddm-technology.com</li>
              <li><strong>Address:</strong> South Africa</li>
            </ul>
          </div>

          {/* Footer Note */}
          <div className={styles.policyFooter}>
            <p>
              By using DDM Technology products and services, you acknowledge that you have read, understood,
              and agree to these policies.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
