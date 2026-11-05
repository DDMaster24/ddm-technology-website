'use client'

import { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { deleteSubmissionAction, type ActionState } from '../../actions'
import styles from '../../admin.module.css'

function Submit({ enabled }: { enabled: boolean }) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className={styles.buttonDanger} disabled={!enabled || pending} style={{ marginTop: 12 }}>
      {pending ? 'Deleting…' : 'Delete submission'}
    </button>
  )
}

export default function DeleteForm({ id, businessName, fileCount }: { id: string; businessName: string; fileCount: number }) {
  const [state, action] = useFormState<ActionState, FormData>(deleteSubmissionAction, {})
  const [typed, setTyped] = useState('')
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <p className={styles.muted} style={{ marginBottom: 12 }}>
        This permanently deletes the answers{fileCount ? ` and ${fileCount} uploaded file${fileCount === 1 ? '' : 's'}` : ''}.
      </p>
      <label htmlFor="confirm" className={styles.label}>
        Type <strong>{businessName}</strong> to confirm
      </label>
      <input
        id="confirm"
        name="confirm"
        className={styles.input}
        autoComplete="off"
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        aria-describedby={state.error ? 'delete-error' : undefined}
      />
      <Submit enabled={typed.trim() === businessName.trim()} />
      {state.error && (
        <p id="delete-error" className={styles.error} role="alert">
          {state.error}
        </p>
      )}
    </form>
  )
}
