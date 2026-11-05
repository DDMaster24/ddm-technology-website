'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { WhatsAppIcon } from '@/components/Icons'
import styles from './roi-calculator.module.css'

function useAnimatedNumber(target: number, duration = 800) {
  const [value, setValue] = useState(0)
  const prevTarget = useRef(0)

  useEffect(() => {
    const start = prevTarget.current
    prevTarget.current = target
    const diff = target - start
    if (diff === 0) return

    const startTime = performance.now()
    let raf: number

    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + diff * eased))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return value
}

function formatRand(n: number) {
  if (n >= 1_000_000) return `R${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `R${(n / 1_000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}K`
  return `R${n.toLocaleString('en-ZA')}`
}

export default function ROICalculatorContent() {
  const [employees, setEmployees] = useState(10)
  const [hourlyRate, setHourlyRate] = useState(250)
  const [hoursPerWeek, setHoursPerWeek] = useState(15)
  const [monthlySoftware, setMonthlySoftware] = useState(5000)

  // Calculations
  const automationRate = 0.6 // 60% of repetitive tasks can be automated
  const weeklyHoursSaved = hoursPerWeek * employees * automationRate
  const annualHoursSaved = Math.round(weeklyHoursSaved * 48) // 48 working weeks
  const annualLabourSavings = annualHoursSaved * hourlyRate
  const annualSoftwareSavings = Math.round(monthlySoftware * 12 * 0.3) // 30% software cost reduction
  const totalAnnualSavings = annualLabourSavings + annualSoftwareSavings
  const estimatedCost = Math.max(15000 * 12, totalAnnualSavings * 0.25) // AI implementation cost estimate
  const roiPercent = estimatedCost > 0 ? Math.round(((totalAnnualSavings - estimatedCost) / estimatedCost) * 100) : 0
  const paybackMonths = totalAnnualSavings > 0 ? Math.max(1, Math.round((estimatedCost / totalAnnualSavings) * 12)) : 0

  // Animated values
  const animHours = useAnimatedNumber(annualHoursSaved)
  const animSavings = useAnimatedNumber(totalAnnualSavings)
  const animROI = useAnimatedNumber(Math.max(0, roiPercent))
  const animPayback = useAnimatedNumber(paybackMonths)

  // Gauge
  const maxArc = Math.PI // half circle
  const roiCapped = Math.min(Math.max(roiPercent, 0), 500)
  const arcFraction = roiCapped / 500
  const circumference = Math.PI * 70 // half circle circumference for r=70
  const dashOffset = circumference * (1 - arcFraction)

  return (
    <>
      <section className="page-header">
        <div className="page-header-content">
          <h1>AI ROI Calculator</h1>
          <p>See how much time and money AI automation can save your South African business</p>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <div className={styles.calcGrid}>
            {/* Input Panel */}
            <div className={styles.inputPanel}>
              <h2>Your Business Details</h2>
              <p>Enter your numbers below — results update instantly</p>

              <div className={styles.fieldGroup}>
                <label htmlFor="employees">Number of Employees</label>
                <input
                  type="number"
                  id="employees"
                  min={1}
                  max={1000}
                  value={employees}
                  onChange={(e) => setEmployees(Math.max(1, parseInt(e.target.value) || 1))}
                />
                <span className={styles.fieldHint}>Full-time employees involved in repetitive tasks</span>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="hourlyRate">Average Hourly Rate (Rand)</label>
                <input
                  type="number"
                  id="hourlyRate"
                  min={50}
                  max={5000}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Math.max(50, parseInt(e.target.value) || 50))}
                />
                <span className={styles.fieldHint}>Average cost per employee per hour (incl. overheads)</span>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="hoursPerWeek">Hours on Repetitive Tasks / Week / Person</label>
                <input
                  type="number"
                  id="hoursPerWeek"
                  min={1}
                  max={40}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Math.max(1, parseInt(e.target.value) || 1))}
                />
                <span className={styles.fieldHint}>Data entry, email replies, scheduling, invoicing, etc.</span>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="monthlySoftware">Current Monthly Software Costs (Rand)</label>
                <input
                  type="number"
                  id="monthlySoftware"
                  min={0}
                  max={500000}
                  value={monthlySoftware}
                  onChange={(e) => setMonthlySoftware(Math.max(0, parseInt(e.target.value) || 0))}
                />
                <span className={styles.fieldHint}>CRM, accounting, comms tools — AI can reduce overlap</span>
              </div>
            </div>

            {/* Results Panel */}
            <div className={styles.resultsPanel}>
              <div className={styles.resultCard}>
                <div className={styles.resultLabel}>Annual Time Saved</div>
                <div className={styles.resultValue}>{animHours.toLocaleString('en-ZA')} hrs</div>
                <div className={styles.resultSub}>{Math.round(animHours / 8)} working days freed up</div>
              </div>

              <div className={styles.resultCard}>
                <div className={styles.resultLabel}>Annual Cost Savings</div>
                <div className={styles.resultValue}>{formatRand(animSavings)}</div>
                <div className={styles.resultSub}>~{formatRand(Math.round(animSavings / 12))}/month</div>
              </div>

              {/* ROI Gauge */}
              <div className={styles.gaugeWrap}>
                <h3>Return on Investment</h3>
                <svg className={styles.gaugeSvg} viewBox="0 0 200 110">
                  <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#0891B2" />
                    </linearGradient>
                  </defs>
                  <path
                    className={styles.gaugeTrack}
                    d="M 20 100 A 70 70 0 0 1 180 100"
                  />
                  <path
                    className={styles.gaugeFill}
                    d="M 20 100 A 70 70 0 0 1 180 100"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                  />
                </svg>
                <div className={styles.gaugePercent}>{animROI}%</div>
                <div className={styles.resultSub}>Payback in ~{animPayback} months</div>
              </div>

              {/* Industry Benchmarks */}
              <div className={styles.benchmarks}>
                <h3>SA Industry Benchmarks</h3>
                <div className={styles.benchmarkItem}>
                  <span>Small business (1-10 staff)</span>
                  <span>R15K-R25K/mo saved</span>
                </div>
                <div className={styles.benchmarkItem}>
                  <span>Medium business (10-50 staff)</span>
                  <span>R25K-R45K/mo saved</span>
                </div>
                <div className={styles.benchmarkItem}>
                  <span>Enterprise (50+ staff)</span>
                  <span>R45K-R150K+/mo saved</span>
                </div>
                <div className={styles.benchmarkItem}>
                  <span>Average ROI (first year)</span>
                  <span>180-350%</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h2>Ready to Turn These Savings Into Reality?</h2>
            <p>
              Book a free AI audit and we will build a custom ROI roadmap for your business — no commitment required.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="cta-button">
                Book a Free AI Audit
              </Link>
              <a
                href="https://wa.me/27832580869?text=Hi%20DDM%20Technology%2C%20I%20just%20used%20your%20ROI%20calculator%20and%20I%27d%20like%20to%20discuss%20AI%20automation%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
