// HMAC-signed admin session token. Uses Web Crypto so it works in both the
// Edge middleware and Node server code. No secrets in code: the key comes
// from ADMIN_SESSION_SECRET.

export const ADMIN_COOKIE = 'ddm_start_admin'
export const ADMIN_COOKIE_PATH = '/start/admin'
export const SESSION_MAX_AGE_S = 7 * 24 * 60 * 60

const enc = new TextEncoder()

function b64url(bytes: ArrayBuffer): string {
  let s = ''
  const arr = new Uint8Array(bytes)
  for (let i = 0; i < arr.length; i++) s += String.fromCharCode(arr[i])
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromB64url(s: string): Uint8Array<ArrayBuffer> | null {
  try {
    const b = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4))
    const out = new Uint8Array(new ArrayBuffer(b.length))
    for (let i = 0; i < b.length; i++) out[i] = b.charCodeAt(i)
    return out
  } catch {
    return null
  }
}

async function key(secret: string, usage: 'sign' | 'verify') {
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [usage])
}

function getSecret(): string | null {
  const s = process.env.ADMIN_SESSION_SECRET
  return s && s.length >= 16 ? s : null
}

/** Token format: "<expiresAtSeconds>.<base64url HMAC of 'admin.<expires>'>" */
export async function createSessionToken(): Promise<string> {
  const secret = getSecret()
  if (!secret) throw new Error('ADMIN_SESSION_SECRET is not set (or shorter than 16 characters)')
  const exp = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_S
  const sig = await crypto.subtle.sign('HMAC', await key(secret, 'sign'), enc.encode(`admin.${exp}`))
  return `${exp}.${b64url(sig)}`
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  const secret = getSecret()
  if (!secret || !token) return false
  const [expStr, sigStr] = token.split('.')
  if (!expStr || !sigStr || !/^\d+$/.test(expStr)) return false
  if (Number(expStr) < Math.floor(Date.now() / 1000)) return false
  const sig = fromB64url(sigStr)
  if (!sig) return false
  // crypto.subtle.verify compares in constant time
  return crypto.subtle.verify('HMAC', await key(secret, 'verify'), sig, enc.encode(`admin.${expStr}`))
}
