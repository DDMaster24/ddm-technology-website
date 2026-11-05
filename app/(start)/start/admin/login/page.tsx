import type { Metadata } from 'next'
import LoginForm from './LoginForm'
import styles from '../admin.module.css'

export const metadata: Metadata = { title: 'Admin login' }

export default function LoginPage() {
  return (
    <div className={styles.narrow}>
      <h1 className={styles.h1} style={{ marginBottom: 16 }}>
        Intake admin
      </h1>
      <div className={styles.card}>
        <LoginForm />
      </div>
    </div>
  )
}
