'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const values = [
  {
    title: 'Innovation',
    description:
      'We stay ahead of the curve, bringing the latest AI and automation tools to businesses that need them most.',
    icon: '💡',
  },
  {
    title: 'Accessibility',
    description:
      'Enterprise-grade AI shouldn\'t cost enterprise-grade prices. We make powerful automation affordable for everyone.',
    icon: '🔓',
  },
  {
    title: 'Results',
    description:
      'We measure success by your success — more leads captured, faster response times, and happier customers.',
    icon: '📈',
  },
  {
    title: 'Partnership',
    description:
      'We don\'t just set it up and leave. We walk alongside you, optimising and scaling as your business grows.',
    icon: '🤝',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0ea5e9]/20 to-[#8b5cf6]/20 blur-[120px]" />
        </div>

        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl"
          >
            The Future of Business Is Automated
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-400 sm:text-xl"
          >
            DDM Technology builds intelligent AI systems that handle your
            customer interactions, bookings, and admin — so you can focus on
            what you do best.
          </motion.p>
        </motion.div>
      </section>

      {/* ───────── FOUNDER STORY ───────── */}
      <section className="px-6 py-20 sm:py-28">
        <motion.div
          className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Photo placeholder */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-2xl bg-gray-800 text-5xl font-bold text-gray-500 ring-2 ring-[#0ea5e9]/30 sm:h-80 sm:w-80">
              DS
            </div>
          </motion.div>

          {/* Story */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Meet the Founder
            </h2>

            <p className="mt-6 leading-relaxed text-gray-300">
              <span className="font-semibold text-white">Darius Schutte</span>{' '}
              is a 23-year-old tech entrepreneur from Roodepoort, Johannesburg.
              After cutting his teeth in general IT support, he saw a pattern
              that kept repeating: South African businesses were losing customers
              simply because they couldn&apos;t respond fast enough.
            </p>

            <p className="mt-4 leading-relaxed text-gray-300">
              That insight sparked a pivot into AI automation — and{' '}
              <span className="font-semibold text-white">
                DDM Technology (Pty) Ltd
              </span>{' '}
              was born. Darius is passionate about making powerful AI tools
              accessible to everyday SA businesses, not just big corporates.
            </p>

            <p className="mt-4 leading-relaxed text-gray-300">
              His philosophy is baked right into the company name:{' '}
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text font-bold text-transparent">
                Dream. Dare. Make.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ───────── MISSION ───────── */}
      <section className="px-6 py-20 sm:py-28">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold sm:text-4xl"
          >
            Our Mission
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl"
          >
            Making AI automation{' '}
            <span className="font-semibold text-white">
              accessible and affordable
            </span>{' '}
            for South African businesses. Not just big corporations — SMEs,
            salons, restaurants, tradies, anyone with customers to serve.
          </motion.p>

          <motion.blockquote
            variants={fadeInUp}
            className="relative mt-10 rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/5 px-8 py-6 text-xl font-medium italic text-gray-200 sm:text-2xl"
          >
            &ldquo;We believe every business deserves an employee that never
            sleeps.&rdquo;
          </motion.blockquote>
        </motion.div>
      </section>

      {/* ───────── WHY US / CREDIBILITY ───────── */}
      <section className="px-6 py-20 sm:py-28">
        <motion.div
          className="mx-auto max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Why DDM Technology?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We&apos;re not just selling AI — we&apos;re practitioners.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 rounded-2xl border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 p-8 sm:p-10"
          >
            <h3 className="text-xl font-bold sm:text-2xl">
              We Run This System Ourselves
            </h3>
            <p className="mt-3 leading-relaxed text-gray-300">
              Every tool we recommend, every workflow we build for clients — we
              use internally at DDM Technology first. Our own AI assistant
              handles enquiries, qualifies leads, and books meetings for us
              around the clock. We know the tech works because we live with it
              every day.
            </p>
            <p className="mt-3 leading-relaxed text-gray-300">
              We&apos;re a local team that understands the realities of South
              African business — load-shedding resilient, mobile-first, and
              built for the way your customers actually communicate.
            </p>
          </motion.div>

          {/* Values cards */}
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#0ea5e9]/40"
              >
                <span className="text-3xl">{v.icon}</span>
                <h4 className="mt-3 text-lg font-semibold">{v.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="px-6 py-20 sm:py-28">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold sm:text-4xl"
          >
            Ready to automate your business?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-400"
          >
            Let&apos;s chat about how AI can save you time, capture more leads,
            and delight your customers — 24/7.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-[#0ea5e9]/25 transition-transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
