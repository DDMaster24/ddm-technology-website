import type { Viewport } from 'next'
import IntakeForm from './_components/IntakeForm'

// Matches the lighter slate background of the form (admin pages keep the layout default).
export const viewport: Viewport = {
  themeColor: '#0f172a',
}

export default function StartPage() {
  return <IntakeForm />
}
