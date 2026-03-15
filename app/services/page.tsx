'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    setup: 'R15,000',
    monthly: 'R2,500',
    highlight: false,
    bestFor: 'Solo businesses, salons, clinics',
    features: [
      'WhatsApp AI responder',
      'Automated bookings',
      'Basic FAQ handling',
      'Business hours + after-hours',
      'Email support',
    ],
  },
  {
    name: 'Business',
    setup: 'R35,000',
    monthly: 'R5,000',
    highlight: true,
    bestFor: 'Growing SMEs, agencies',
    features: [
      'Everything in Starter',
      'Multi-channel (WhatsApp + Email + SMS)',
      'Automated quotes',
      'Lead nurturing sequences',
      'CRM integration',
      'Weekly performance reports',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    setup: 'R75,000',
    monthly: 'R10,000',
    highlight: false,
    bestFor: 'Large businesses, franchises',
    features: [
      'Everything in Business',
      'Multi-agent system',
      'Custom integrations (Xero, Sage, etc.)',
      'Advanced analytics dashboard',
      'Dedicated account manager',
      'Custom AI training',
      'SLA guarantee',
    ],
  },
  {
    name: 'AI HQ',
    setup: 'R120,000+',
    monthly: 'R10,000',
    highlight: false,
    bestFor: 'Businesses wanting full control',
    features: [
      'Everything in Enterprise',
      'Dedicated Mac Mini hardware',
      'On-premise or hosted',
      'Full white-label option',
      'Unlimited customization',
      'Hardware maintenance included',
    ],
  },
]

const comparisonFeatures = [
  { name: 'WhatsApp AI Responder', starter: true, business: true, enterprise: true, aihq: true },
  { name: 'Automated Bookings', starter: true, business: true, enterprise: true, aihq: true },
  { name: 'Basic FAQ Handling', starter: true, business: true, enterprise: true, aihq: true },
  { name: 'Business + After-Hours', starter: true, business: true, enterprise: true, aihq: true },
  { name: 'Multi-Channel Support', starter: false, business: true, enterprise: true, aihq: true },
  { name: 'Automated Quotes', starter: false, business: true, enterprise: true, aihq: true },
  { name: 'Lead Nurturing Sequences', starter: false, business: true, enterprise: true, aihq: true },
  { name: 'CRM Integration', starter: false, business: true, enterprise: true, aihq: true },
  { name: 'Weekly Performance Reports', starter: false, business: true, enterprise: true, aihq: true },
  { name: 'Priority Support', starter: false, business: true, enterprise: true, aihq: true },
  { name: 'Multi-Agent System', starter: false, business: false, enterprise: true, aihq: true },
  { name: 'Custom Integrations', starter: false, business: false, enterprise: true, aihq: true },
  { name: 'Advanced Analytics Dashboard', starter: false, business: false, enterprise: true, aihq: true },
  { name: 'Dedicated Account Manager', starter: false, business: false, enterprise: true, aihq: true },
  { name: 'Custom AI Training', starter: false, business: false, enterprise: true, aihq: true },
  { name: 'SLA Guarantee', starter: false, business: false, enterprise: true, aihq: true },
  { name: 'Dedicated Mac Mini Hardware', starter: false, business: false, enterprise: false, aihq: true },
  { name: 'On-Premise / Hosted Option', starter: false, business: false, enterprise: false, aihq: true },
  { name: 'Full White-Label Option', starter: false, business: false, enterprise: false, aihq: true },
  { name: 'Unlimited Customization', starter: false, business: false, enterprise: false, aihq: true },
  { name: 'Hardware Maintenance Included', starter: false, business: false, enterprise: false, aihq: true },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Services() {
  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white">
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#0ea5e9]/20 to-[#8b5cf6]/20 blur-3xl" />
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeUp}
            className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl lg:text-6xl"
          >
            AI Solutions That Scale With You
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-gray-400 sm:text-xl"
          >
            From solo entrepreneurs to enterprise teams, our AI automation
            packages are designed to save you time, capture more leads, and
            grow your revenue on autopilot.
          </motion.p>
        </motion.div>
      </section>

      {/* ───────────── PRICING CARDS ───────────── */}
      <section className="px-6 py-20">
        <motion.div
          className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur-sm transition-shadow hover:shadow-xl ${
                plan.highlight
                  ? 'border-[#0ea5e9] bg-gradient-to-b from-[#0ea5e9]/10 to-[#8b5cf6]/10 shadow-lg shadow-[#0ea5e9]/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <div className="mt-4">
                <p className="text-sm text-gray-400">Setup</p>
                <p className="text-3xl font-extrabold tracking-tight">
                  {plan.setup}
                </p>
              </div>

              <div className="mt-2">
                <p className="text-sm text-gray-400">Monthly</p>
                <p className="text-xl font-semibold text-gray-200">
                  {plan.monthly}
                  <span className="text-sm font-normal text-gray-500">
                    /mo
                  </span>
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-0.5 text-[#0ea5e9]">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-gray-500">
                <span className="font-semibold text-gray-400">Best for:</span>{' '}
                {plan.bestFor}
              </p>

              <Link
                href="/contact"
                className={`mt-6 block rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] text-white hover:opacity-90'
                    : 'border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ───────────── FEATURE COMPARISON TABLE ───────────── */}
      <section className="px-6 py-20">
        <motion.div
          className="mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeUp}
        >
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Feature Comparison
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 font-semibold text-gray-300">
                    Feature
                  </th>
                  {['Starter', 'Business', 'Enterprise', 'AI HQ'].map((t) => (
                    <th
                      key={t}
                      className="px-6 py-4 text-center font-semibold text-gray-300"
                    >
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-b border-white/5 ${
                      i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
                    }`}
                  >
                    <td className="px-6 py-3 text-gray-300">{row.name}</td>
                    {[row.starter, row.business, row.enterprise, row.aihq].map(
                      (v, j) => (
                        <td key={j} className="px-6 py-3 text-center">
                          {v ? (
                            <span className="text-[#0ea5e9]">&#10003;</span>
                          ) : (
                            <span className="text-gray-600">&mdash;</span>
                          )}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* ───────────── ROI CALCULATOR ───────────── */}
      <section className="px-6 py-20">
        <motion.div
          className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-[#0ea5e9]/5 to-[#8b5cf6]/5 p-8 sm:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Calculate Your ROI
          </h2>
          <p className="mt-4 text-center text-gray-400">
            See how quickly AI automation pays for itself.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {/* Missed leads */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm text-gray-400">Missed leads per month</p>
              <p className="mt-2 text-4xl font-extrabold text-[#0ea5e9]">20</p>
            </div>

            {/* Average value */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm text-gray-400">Average lead value</p>
              <p className="mt-2 text-4xl font-extrabold text-[#8b5cf6]">
                R2,500
              </p>
            </div>

            {/* Monthly loss */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm text-gray-400">You&apos;re losing</p>
              <p className="mt-2 text-4xl font-extrabold text-red-400">
                R50,000
                <span className="block text-sm font-normal text-gray-500">
                  per month
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-[#0ea5e9]/30 bg-[#0ea5e9]/5 p-6 text-center">
            <p className="text-gray-300">
              With our{' '}
              <span className="font-semibold text-white">Business</span> plan
              at <span className="font-semibold text-white">R5,000/mo</span>,
              your AI pays for itself in{' '}
              <span className="text-2xl font-extrabold text-[#0ea5e9]">
                less than 1 month
              </span>
              .
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Even capturing just 10% of missed leads covers your investment.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="px-6 py-20 text-center">
        <motion.div
          className="mx-auto max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Not sure which plan?{' '}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-transparent">
              Let&apos;s talk.
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            Book a free 30-minute consultation and we&apos;ll recommend the
            perfect package for your business.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
          >
            Book a Free Consultation
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
