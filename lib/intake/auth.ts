import 'server-only'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ADMIN_COOKIE, verifySessionToken } from './session'

/** Server-side guard for every admin page and action (defence in depth on top of middleware). */
export async function requireAdmin(): Promise<void> {
  const token = cookies().get(ADMIN_COOKIE)?.value
  if (!(await verifySessionToken(token))) redirect('/start/admin/login')
}
