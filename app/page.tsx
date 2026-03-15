'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Home() {
  return (
    <div className="bg-[#0a0a1a] text-white min-h-screen overflow-hidden">
      {/* ──────────────── HERO SECTION ──────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Dot / grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Animated gradient orbs */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]"
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]"
            animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[100px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Business{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Never Sleeps
            </span>{' '}
            Again
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl"
          >
            AI employees that handle customers, bookings, and quotes&nbsp;&mdash;&nbsp;24/7.
            No breaks. No sick days. No missed opportunities.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40 hover:brightness-110"
            >
              Book a Free Demo
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center rounded-lg border border-gray-600 px-8 py-3.5 text-base font-semibold text-gray-300 transition hover:border-cyan-500 hover:text-white"
            >
              See How It Works
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ──────────────── PROBLEM SECTION ──────────────── */}
      <section className="relative py-24 px-4">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Every Missed Message Is{' '}
            <span className="text-red-400">Lost Revenue</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-xl text-gray-400"
          >
            Your customers expect instant answers. When they don&rsquo;t get them, they
            move on&nbsp;&mdash;&nbsp;permanently.
          </motion.p>

          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-3"
            variants={staggerContainer}
          >
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                title: 'Missed Calls After Hours',
                desc: 'Customers call after 5 PM and hear voicemail. They hang up and call your competitor instead.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
                title: 'Unanswered WhatsApp Messages',
                desc: 'Leads message on WhatsApp and wait hours for a reply. By then, they\'ve already found someone else.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                title: 'Slow Email Responses',
                desc: 'Enquiries sit in your inbox for days. The customer assumed you weren\'t interested.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl border border-gray-800 bg-gray-900/60 p-8 text-left backdrop-blur-sm transition hover:border-red-500/40"
              >
                <div className="mb-4 inline-flex rounded-xl bg-red-500/10 p-3 text-red-400">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 inline-block rounded-xl border border-red-500/30 bg-red-500/5 px-6 py-4"
          >
            <p className="text-2xl font-bold text-red-400">67%</p>
            <p className="text-sm text-gray-400">
              of customers won&rsquo;t call back after a missed call
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ──────────────── SOLUTION SECTION ──────────────── */}
      <section className="relative py-24 px-4">
        <motion.div
          className="mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Meet Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AI Employee
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              An always-on digital team member that handles your customer communication
              while you focus on what you do best.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
                title: 'Responds to WhatsApp Instantly',
                desc: 'Answers customer messages in seconds, any time of day or night.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                ),
                title: 'Books Appointments Automatically',
                desc: 'Checks availability and confirms bookings without any human involvement.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
                title: 'Sends Quotes in Minutes',
                desc: 'Generates and delivers professional quotes based on customer requirements.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
                title: 'Follows Up with Leads',
                desc: 'Automatically nurtures prospects with timely, personalised follow-up messages.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: 'Generates Daily Reports',
                desc: 'Delivers clear summaries of conversations, bookings, and leads every morning.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Available 24/7/365',
                desc: 'Never takes a day off, never calls in sick, never needs a coffee break.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-7 backdrop-blur-sm transition hover:border-cyan-500/40"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-3 text-cyan-400 transition group-hover:text-cyan-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ──────────────── HOW IT WORKS ──────────────── */}
      <section id="how-it-works" className="relative py-24 px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            How It Works
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-lg text-gray-400">
            Getting started is simple. We handle the hard part so you don&rsquo;t have to.
          </motion.p>

          <motion.div
            className="mt-16 grid gap-8 sm:grid-cols-3"
            variants={staggerContainer}
          >
            {[
              {
                step: '01',
                title: 'We Build It',
                desc: 'We design a custom AI employee tailored to your business, services, and tone of voice.',
              },
              {
                step: '02',
                title: 'We Train It',
                desc: 'We feed it your FAQs, pricing, availability, and processes so it sounds just like you.',
              },
              {
                step: '03',
                title: 'It Works For You',
                desc: 'Your AI employee goes live and starts handling customer conversations around the clock.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-400">{item.desc}</p>

                {/* Arrow connector (visible on sm+) */}
                {i < 2 && (
                  <div className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 text-gray-700 sm:block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ──────────────── SOCIAL PROOF ──────────────── */}
      <section className="relative py-24 px-4">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold sm:text-4xl"
          >
            Trusted by SA Businesses
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-lg text-gray-400">
            Companies across South Africa are already using AI employees to grow faster.
          </motion.p>

          {/* Placeholder logos */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex h-12 w-28 items-center justify-center rounded-lg bg-gray-800/60 text-xs text-gray-500"
              >
                Logo {i + 1}
              </div>
            ))}
          </motion.div>

          {/* Placeholder testimonials */}
          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {[
              {
                quote:
                  '"Since adding an AI employee we haven\'t missed a single after-hours enquiry. Revenue is up 30%."',
                name: 'Business Owner',
                role: 'Home Services',
              },
              {
                quote:
                  '"Our booking rate doubled in the first month. The AI handles everything while we sleep."',
                name: 'Salon Manager',
                role: 'Beauty & Wellness',
              },
              {
                quote:
                  '"Customers love getting instant replies on WhatsApp. It feels like we have a full-time receptionist."',
                name: 'Practice Manager',
                role: 'Healthcare',
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-left backdrop-blur-sm"
              >
                <p className="text-sm italic text-gray-300">{t.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-700" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ──────────────── FINAL CTA ──────────────── */}
      <section className="relative py-24 px-4">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 blur-[100px]" />
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Ready to Never Miss a{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Customer
            </span>{' '}
            Again?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-lg text-gray-400"
          >
            Book a free 15-minute demo and see exactly how an AI employee can work
            for your business.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40 hover:brightness-110"
            >
              Book a Free Demo
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
