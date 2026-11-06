'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { loginAction, type ActionState } from '../actions'
import styles from '../admin.module.css'

function Submit() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className={styles.button} disabled={pending} style={{ width: '100%', marginTop: 16 }}>
      {pending ? 'Checking…' : 'Log in'}
    </button>
  )
}

export default function LoginForm() {
  const [state, action] = useFormState<ActionState, FormData>(loginAction, {})
  return (
    <form action={action}>
      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
        className={styles.input}
        aria-invalid={state.error ? true : undefined}
        aria-describedby={state.error ? 'login-error' : undefined}
      />
      <Submit />
      {state.error && (
        <p id="login-error" className={styles.error} role="alert">
          {state.error}
        </p>
      )}
    </form>
  )
}
