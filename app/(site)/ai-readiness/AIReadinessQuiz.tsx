'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowRightIcon,
  ClockIcon,
  MessageCircleIcon,
  ZapIcon,
  TargetIcon,
  FileTextIcon,
  HeadphonesIcon,
} from '@/components/Icons'
import styles from './ai-readiness.module.css'

interface QuizOption {
  label: string
  score: number
  tags: string[]
}

interface QuizQuestion {
  id: string
  question: string
  subtitle: string
  options: QuizOption[]
}

const questions: QuizQuestion[] = [
  {
    id: 'industry',
    question: 'What industry is your business in?',
    subtitle: 'Different industries have different AI automation opportunities.',
    options: [
      { label: 'Retail / E-Commerce', score: 14, tags: ['retail'] },
      { label: 'Professional Services (Legal, Accounting, Consulting)', score: 13, tags: ['professional'] },
      { label: 'Real Estate / Property', score: 15, tags: ['real-estate'] },
      { label: 'Healthcare / Medical', score: 12, tags: ['healthcare'] },
      { label: 'Hospitality / Restaurants', score: 14, tags: ['hospitality'] },
      { label: 'Construction / Manufacturing', score: 10, tags: ['construction'] },
      { label: 'Other', score: 11, tags: ['other'] },
    ],
  },
  {
    id: 'team-size',
    question: 'How many people work in your business?',
    subtitle: 'Team size helps us estimate your automation savings potential.',
    options: [
      { label: 'Just me (Solo)', score: 8, tags: ['solo'] },
      { label: '2\u20135 employees', score: 12, tags: ['small'] },
      { label: '6\u201320 employees', score: 16, tags: ['medium'] },
      { label: '21\u201350 employees', score: 18, tags: ['large'] },
      { label: '50+ employees', score: 17, tags: ['enterprise'] },
    ],
  },
  {
    id: 'manual-processes',
    question: 'Which task eats the most of your time?',
    subtitle: 'Select the area where your team spends the most manual effort.',
    options: [
      { label: 'Customer enquiries & support', score: 16, tags: ['customer-enquiries'] },
      { label: 'Invoicing, quoting & accounting', score: 14, tags: ['invoicing'] },
      { label: 'Appointment scheduling & reminders', score: 15, tags: ['scheduling'] },
      { label: 'Lead follow-up & sales', score: 18, tags: ['lead-followup'] },
      { label: 'Data entry & document processing', score: 13, tags: ['data-entry'] },
      { label: 'Stock management & ordering', score: 12, tags: ['stock-management'] },
    ],
  },
  {
    id: 'tech-stack',
    question: 'What does your current tech setup look like?',
    subtitle: 'Your existing tools determine how quickly we can implement AI.',
    options: [
      { label: 'Mostly paper-based / manual spreadsheets', score: 10, tags: ['paper'] },
      { label: 'Some cloud tools (Google Workspace, Xero, etc.)', score: 13, tags: ['cloud'] },
      { label: 'CRM or business management software', score: 15, tags: ['crm'] },
      { label: 'Already using some automation (Zapier, Make, etc.)', score: 17, tags: ['automation'] },
      { label: 'Custom software / API integrations', score: 16, tags: ['custom'] },
    ],
  },
  {
    id: 'communication',
    question: 'How do your customers reach you?',
    subtitle: 'We\u2019ll recommend AI for your busiest communication channels.',
    options: [
      { label: 'Mostly WhatsApp', score: 15, tags: ['whatsapp'] },
      { label: 'Email only', score: 10, tags: ['email-only'] },
      { label: 'Social media + email', score: 13, tags: ['social-email'] },
      { label: 'Website with live chat', score: 14, tags: ['live-chat'] },
      { label: 'Multiple channels (WhatsApp, email, social, etc.)', score: 17, tags: ['multi-channel'] },
    ],
  },
  {
    id: 'budget',
    question: 'What monthly budget could you allocate to AI automation?',
    subtitle: 'All amounts in South African Rand. Helps us recommend the right fit.',
    options: [
      { label: 'Under R5,000 / month', score: 7, tags: ['budget-low'] },
      { label: 'R5,000 \u2013 R15,000 / month', score: 11, tags: ['budget-mid'] },
      { label: 'R15,000 \u2013 R30,000 / month', score: 14, tags: ['budget-high'] },
      { label: 'R30,000 \u2013 R50,000 / month', score: 15, tags: ['budget-premium'] },
      { label: 'R50,000+ / month', score: 15, tags: ['budget-enterprise'] },
    ],
  },
]

interface Recommendation {
  id: string
  title: string
  description: string
  savingsHours: string
  savingsRand: string
  color: string
  icon: React.ReactNode
  link: string
  matchTags: string[]
  priority: number
}

const allRecommendations: Recommendation[] = [
  {
    id: 'whatsapp-chatbot',
    title: 'WhatsApp AI Chatbot',
    description:
      'Automate customer enquiries, lead qualification, and appointment booking on WhatsApp \u2014 SA\u2019s #1 messaging platform with 45M+ users. Works 24/7, even during load shedding.',
    savingsHours: '80\u2013120',
    savingsRand: 'R15,000 \u2013 R35,000',
    color: '#25D366',
    icon: <MessageCircleIcon />,
    link: '/ai-services/whatsapp-chatbot',
    matchTags: [
      'customer-enquiries',
      'whatsapp',
      'multi-channel',
      'scheduling',
      'lead-followup',
      'real-estate',
      'healthcare',
      'hospitality',
    ],
    priority: 0,
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description:
      'Eliminate manual data entry, automate invoicing, and streamline operations. Cloud-based, so it keeps running during load shedding.',
    savingsHours: '60\u2013100',
    savingsRand: 'R12,000 \u2013 R28,000',
    color: 'var(--ocean-cyan)',
    icon: <ZapIcon />,
    link: '/ai-services/workflow-automation',
    matchTags: ['invoicing', 'data-entry', 'stock-management', 'paper', 'cloud', 'construction'],
    priority: 0,
  },
  {
    id: 'ai-lead-qualification',
    title: 'AI Lead Qualification & Sales',
    description:
      'Score and prioritise leads automatically. Your sales team focuses on hot prospects while AI nurtures the rest via WhatsApp and email.',
    savingsHours: '40\u201380',
    savingsRand: 'R20,000 \u2013 R50,000',
    color: 'var(--ember-red)',
    icon: <TargetIcon />,
    link: '/ai-services',
    matchTags: ['lead-followup', 'crm', 'automation', 'multi-channel', 'retail', 'real-estate', 'professional'],
    priority: 0,
  },
  {
    id: 'document-processing',
    title: 'AI Document Processing',
    description:
      'Extract data from invoices, contracts, and forms automatically. Reduce errors by 95% and processing time by 90%. POPIA compliant.',
    savingsHours: '50\u201390',
    savingsRand: 'R10,000 \u2013 R25,000',
    color: 'var(--ocean-blue)',
    icon: <FileTextIcon />,
    link: '/ai-services',
    matchTags: ['data-entry', 'invoicing', 'professional', 'paper'],
    priority: 0,
  },
  {
    id: 'customer-service-ai',
    title: 'AI Customer Service Agent',
    description:
      'Deploy AI agents that handle customer queries 24/7 across email, chat, and social media. Multilingual support in all 11 SA official languages.',
    savingsHours: '100\u2013150',
    savingsRand: 'R18,000 \u2013 R40,000',
    color: 'var(--ocean-cyan)',
    icon: <HeadphonesIcon />,
    link: '/services',
    matchTags: ['customer-enquiries', 'email-only', 'social-email', 'live-chat', 'enterprise', 'large'],
    priority: 0,
  },
  {
    id: 'smart-scheduling',
    title: 'AI Appointment & Scheduling',
    description:
      'Smart booking system that handles appointments, reminders, rescheduling, and follow-ups automatically. Reduces no-shows by 40%.',
    savingsHours: '30\u201360',
    savingsRand: 'R8,000 \u2013 R20,000',
    color: '#0D9488',
    icon: <ClockIcon />,
    link: '/ai-services',
    matchTags: ['scheduling', 'healthcare', 'professional', 'hospitality'],
    priority: 0,
  },
]

function getScoreLevel(score: number): { label: string; color: string; bg: string } {
  if (score >= 76) return { label: 'AI Powerhouse', color: '#0891B2', bg: 'rgba(8, 145, 178, 0.12)' }
  if (score >= 56) return { label: 'AI Ready', color: '#1E40AF', bg: 'rgba(30, 64, 175, 0.12)' }
  if (score >= 36) return { label: 'Building Momentum', color: '#B91C1C', bg: 'rgba(185, 28, 28, 0.12)' }
  return { label: 'Early Explorer', color: '#DC2626', bg: 'rgba(220, 38, 38, 0.12)' }
}

function getSavingsEstimate(answers: Record<number, number>): { hours: string; rand: string } {
  const teamIdx = answers[1] ?? 0
  const processIdx = answers[2] ?? 0

  const teamMultipliers = [
    { hours: [20, 40], rand: [5000, 15000] },
    { hours: [40, 80], rand: [10000, 30000] },
    { hours: [80, 160], rand: [25000, 60000] },
    { hours: [120, 250], rand: [40000, 100000] },
    { hours: [200, 400], rand: [80000, 200000] },
  ]

  const processMultipliers = [1.1, 1.0, 1.05, 1.15, 0.95, 0.9]

  const team = teamMultipliers[teamIdx] || teamMultipliers[0]
  const mult = processMultipliers[processIdx] || 1.0

  const hoursLow = Math.round(team.hours[0] * mult)
  const hoursHigh = Math.round(team.hours[1] * mult)
  const randLow = Math.round((team.rand[0] * mult) / 1000) * 1000
  const randHigh = Math.round((team.rand[1] * mult) / 1000) * 1000

  return {
    hours: `${hoursLow}\u2013${hoursHigh}`,
    rand: `R${randLow.toLocaleString()} \u2013 R${randHigh.toLocaleString()}`,
  }
}

function getTopRecommendations(answers: Record<number, number>): Recommendation[] {
  const userTags: string[] = []
  Object.entries(answers).forEach(([stepStr, optionIdx]) => {
    const step = parseInt(stepStr)
    const question = questions[step]
    if (question && question.options[optionIdx]) {
      userTags.push(...question.options[optionIdx].tags)
    }
  })

  const scored = allRecommendations.map((rec) => {
    const matchCount = rec.matchTags.filter((tag) => userTags.includes(tag)).length
    return { ...rec, priority: matchCount }
  })

  scored.sort((a, b) => b.priority - a.priority)
  return scored.slice(0, 3)
}

export default function AIReadinessQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const totalSteps = questions.length

  const totalScore = useMemo(() => {
    let score = 0
    Object.entries(answers).forEach(([stepStr, optionIdx]) => {
      const step = parseInt(stepStr)
      const question = questions[step]
      if (question && question.options[optionIdx]) {
        score += question.options[optionIdx].score
      }
    })
    return score
  }, [answers])

  const scoreLevel = useMemo(() => getScoreLevel(totalScore), [totalScore])
  const recommendations = useMemo(() => getTopRecommendations(answers), [answers])
  const savings = useMemo(() => getSavingsEstimate(answers), [answers])

  const handleOptionSelect = (optionIdx: number) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionIdx }))

    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        setShowResults(true)
      }
    }, 350)
  }

  const handleBack = () => {
    if (showResults) {
      setShowResults(false)
    } else if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  const radius = 80
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - totalScore / 100)

  if (showResults) {
    return (
      <div className={styles.quizWrapper}>
        <div className={styles.resultsCard} key="results">
          {/* Score Gauge */}
          <div className={styles.gauge}>
            <svg className={styles.gaugeSvg} viewBox="0 0 200 200">
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DC2626" />
                  <stop offset="50%" stopColor="#1E40AF" />
                  <stop offset="100%" stopColor="#0891B2" />
                </linearGradient>
              </defs>
              <circle className={styles.gaugeTrack} cx="100" cy="100" r={radius} />
              <circle
                className={styles.gaugeFill}
                cx="100"
                cy="100"
                r={radius}
                stroke="url(#gaugeGradient)"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
              />
            </svg>
            <div className={styles.gaugeCenter}>
              <div className={styles.gaugeScore}>{totalScore}</div>
              <div className={styles.gaugeMax}>out of 100</div>
            </div>
          </div>

          {/* Score Label */}
          <div
            className={styles.scoreLabel}
            style={{
              background: scoreLevel.bg,
              color: scoreLevel.color,
              border: `1px solid ${scoreLevel.color}33`,
            }}
          >
            {scoreLevel.label}
          </div>

          <h2 className={styles.resultsTitle}>Your AI Readiness Score</h2>
          <p className={styles.resultsSubtitle}>
            {totalScore >= 76
              ? 'Your business is primed for AI automation. You have the infrastructure and scale to see massive returns from implementation.'
              : totalScore >= 56
                ? 'Your business is well-positioned for AI. With the right partner, you could automate significant portions of your operations.'
                : totalScore >= 36
                  ? 'You\u2019re building a solid foundation. A few targeted AI automations could dramatically improve your efficiency.'
                  : 'You\u2019re at the start of your AI journey. Even small automations can deliver outsized value \u2014 let us show you where to begin.'}
          </p>

          {/* Estimated Savings */}
          <div className={styles.savingsSummary}>
            <div className={styles.savingsCard}>
              <div className={styles.savingsValue}>{savings.hours} hrs</div>
              <div className={styles.savingsLabel}>Estimated hours saved per month</div>
            </div>
            <div className={styles.savingsCard}>
              <div className={styles.savingsValue}>{savings.rand}</div>
              <div className={styles.savingsLabel}>Estimated monthly cost savings</div>
            </div>
          </div>

          {/* Recommendations */}
          <h3 className={styles.recommendationsTitle}>Your Top 3 AI Recommendations</h3>
          <div className={styles.recommendations}>
            {recommendations.map((rec, idx) => (
              <Link key={rec.id} href={rec.link} className={styles.recommendation} style={{ textDecoration: 'none' }}>
                <div
                  className={styles.recommendationIcon}
                  style={{
                    background: `linear-gradient(135deg, ${rec.color}22, ${rec.color}11)`,
                    border: `1px solid ${rec.color}44`,
                    color: rec.color,
                  }}
                >
                  {rec.icon}
                </div>
                <div className={styles.recommendationContent}>
                  <div className={styles.recommendationName}>
                    {idx + 1}. {rec.title}
                  </div>
                  <p className={styles.recommendationDesc}>{rec.description}</p>
                  <div className={styles.recommendationSavings}>
                    <ClockIcon /> Save {rec.savingsHours} hrs/month
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.resultsCta}>
            <p className={styles.resultsCtaText}>
              Ready to unlock these savings? Book a free AI consultation and get a personalised automation roadmap for
              your business.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="cta-button">
                Book Free AI Consultation <ArrowRightIcon />
              </Link>
              <button onClick={handleRestart} className={styles.backBtn}>
                Retake Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentStep]

  return (
    <div className={styles.quizWrapper}>
      {/* Progress */}
      <div className={styles.progress}>
        <div className={styles.progressHeader}>
          <span className={styles.progressStep}>
            Question {currentStep + 1} of {totalSteps}
          </span>
          <span className={styles.progressStep}>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
        </div>
        <div className={styles.progressBarTrack}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className={styles.questionCard} key={currentStep}>
        <h2 className={styles.questionTitle}>{question.question}</h2>
        <p className={styles.questionSubtitle}>{question.subtitle}</p>

        <div className={styles.options}>
          {question.options.map((option, idx) => (
            <button
              key={idx}
              className={`${styles.option} ${answers[currentStep] === idx ? styles.optionSelected : ''}`}
              onClick={() => handleOptionSelect(idx)}
            >
              <span className={styles.optionRadio} />
              {option.label}
            </button>
          ))}
        </div>

        {currentStep > 0 && (
          <div className={styles.navButtons}>
            <button onClick={handleBack} className={styles.backBtn}>
              \u2190 Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
