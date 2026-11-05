import { NextResponse, type NextRequest } from 'next/server'
import { ADMIN_COOKIE, verifySessionToken } from '@/lib/intake/session'

// Only runs for the intake admin area. Every admin page and server action
// also checks the session itself (lib/intake/auth.ts), so this is a first
// line of defence, not the only one.
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname === '/start/admin/login' || pathname.startsWith('/start/admin/login/')) {
    return NextResponse.next()
  }
  const ok = await verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value)
  if (!ok) {
    const url = request.nextUrl.clone()
    url.pathname = '/start/admin/login'
    url.search = ''
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/start/admin', '/start/admin/:path*'],
}
