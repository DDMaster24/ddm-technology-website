'use server'

import { createHash, timingSafeEqual } from 'node:crypto'
import { del } from '@vercel/blob'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/intake/auth'
import { deleteSubmissionRow, getSubmission, setStatus } from '@/lib/intake/db'
import { ADMIN_COOKIE, ADMIN_COOKIE_PATH, SESSION_MAX_AGE_S, createSessionToken } from '@/lib/intake/session'

export interface ActionState {
  error?: string
}

const sha256 = (s: string) => createHash('sha256').update(s, 'utf8').digest()
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function loginAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected || !process.env.ADMIN_SESSION_SECRET) {
    return { error: 'Admin login is not set up yet. Add ADMIN_PASSWORD and ADMIN_SESSION_SECRET.' }
  }
  const password = String(formData.get('password') ?? '')
  // Compare fixed-length hashes in constant time.
  if (!timingSafeEqual(sha256(password), sha256(expected))) {
    await sleep(1000)
    return { error: 'That password is not correct.' }
  }
  cookies().set(ADMIN_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: ADMIN_COOKIE_PATH,
    maxAge: SESSION_MAX_AGE_S,
  })
  redirect('/start/admin')
}

export async function logoutAction(): Promise<void> {
  cookies().set(ADMIN_COOKIE, '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: ADMIN_COOKIE_PATH,
    maxAge: 0,
  })
  redirect('/start/admin/login')
}

export async function toggleReviewedAction(id: string): Promise<void> {
  await requireAdmin()
  const row = await getSubmission(id)
  if (!row) return
  await setStatus(id, row.status === 'reviewed' ? 'new' : 'reviewed')
  revalidatePath('/start/admin')
  revalidatePath(`/start/admin/${id}`)
}

export async function deleteSubmissionAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin()
  const id = String(formData.get('id') ?? '')
  const typed = String(formData.get('confirm') ?? '').trim()
  const row = await getSubmission(id)
  if (!row) return { error: 'This submission no longer exists.' }
  if (typed !== row.business_name.trim()) {
    return { error: 'The name you typed does not match the business name exactly.' }
  }

  const urls = (row.files ?? []).map((f) => f.url).filter(Boolean)
  if (urls.length) {
    try {
      await del(urls)
    } catch (error) {
      console.error(`[intake] Failed to delete files for ${id}`, error)
      return { error: 'The files could not be deleted from Blob storage, so nothing was deleted. Please try again.' }
    }
  }
  await deleteSubmissionRow(id)
  revalidatePath('/start/admin')
  redirect('/start/admin')
}
