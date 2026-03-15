'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const packages = [
  'Starter',
  'Business',
  'Enterprise',
  'AI HQ',
  'Not sure',
]

const faqs = [
  {
    question: 'How long does setup take?',
    answer:
      'Most setups are completed within 1–2 weeks, depending on the complexity of your workflows and integrations. We handle the heavy lifting so you can focus on your business.',
  },
  {
    question: 'Do I need technical knowledge?',
    answer:
      'Not at all. We handle everything from setup to deployment. You just tell us what you need your AI employee to do, and we build it for you.',
  },
  {
    question: "What happens if the AI can't answer?",
    answer:
      'The AI gracefully escalates the conversation to you or your team, providing full context of the interaction so you can pick up right where it left off.',
  },
  {
    question: 'Can I try before I commit?',
    answer:
      'Yes! We offer a free 15-minute demo where you can see the AI in action with your own use case. No commitment required.',
  },
  {
    question: 'What channels does it support?',
    answer:
      'Our AI employees can operate across WhatsApp, Email, SMS, and website chat — meeting your customers wherever they are.',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    package: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white">
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&rsquo;s Build Your{' '}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-transparent">
              AI Employee
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 sm:text-xl">
            Book a free 15-minute demo and see what&rsquo;s possible
          </p>
        </motion.div>
      </section>

      {/* ───────────── CONTACT GRID ───────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* ── LEFT: FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#141432] p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#8b5cf6]">
                  {/* check icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Message Sent!</h3>
                <p className="mt-2 text-gray-400">
                  Thanks, {formData.name || 'friend'}! We&rsquo;ll be in touch within 2 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-white/10 bg-[#141432] p-8"
              >
                <h2 className="text-2xl font-semibold">Send us a message</h2>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/10 bg-[#141432] px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/10 bg-[#141432] px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm text-gray-400">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 00 000 0000"
                    className="w-full rounded-lg border border-white/10 bg-[#141432] px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="business" className="mb-1 block text-sm text-gray-400">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full rounded-lg border border-white/10 bg-[#141432] px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Package Select */}
                <div>
                  <label htmlFor="package" className="mb-1 block text-sm text-gray-400">
                    Which package interests you?
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-white/10 bg-[#141432] px-4 py-3 text-white outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="" disabled>
                      Select a package
                    </option>
                    {packages.map((pkg) => (
                      <option key={pkg} value={pkg}>
                        {pkg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and what you'd like your AI employee to do..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-[#141432] px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* ── RIGHT: CONTACT INFO ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0ea5e9]/20 to-[#8b5cf6]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:darius@ddmtech.co.za"
                  className="text-gray-400 transition-colors hover:text-cyan-400"
                >
                  darius@ddmtech.co.za
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0ea5e9]/20 to-[#8b5cf6]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400">Roodepoort, Johannesburg, South Africa</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0ea5e9]/20 to-[#8b5cf6]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <a
                  href="https://wa.me/message/PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#141432] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-cyan-500"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0ea5e9]/20 to-[#8b5cf6]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Response Time</h4>
                <p className="text-gray-400">We typically respond within 2 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="mx-auto max-w-3xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-white/10 bg-[#141432]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-400">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
