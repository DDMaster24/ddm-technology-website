import { NextResponse } from 'next/server'
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import {
  FILE_CONTENT_TYPES,
  FILE_FIELDS,
  type FileFieldId,
  MAX_FILE_BYTES,
  QUESTION_BY_ID,
  extensionOf,
} from '@/lib/intake/questions'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PATH_RE = /^intake\/(logo_files|photo_files)\/[A-Za-z0-9._-]{1,140}$/

// Issues short-lived client tokens so the browser can upload straight to
// Vercel Blob (bypassing the 4.5 MB function body limit). Every token is
// restricted to the intake/ folder, the allowed types and 25 MB.
export async function POST(request: Request): Promise<NextResponse> {
  let body: HandleUploadBody
  try {
    body = (await request.json()) as HandleUploadBody
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        let payload: { field?: string; size?: number } = {}
        try {
          payload = JSON.parse(clientPayload ?? '{}')
        } catch {
          throw new Error('Invalid upload details')
        }
        const field = payload.field as FileFieldId
        if (!FILE_FIELDS.includes(field)) throw new Error('Unknown upload field')

        const m = PATH_RE.exec(pathname)
        if (!m || m[1] !== field || pathname.includes('..')) throw new Error('Uploads are only allowed in intake/')

        const rules = QUESTION_BY_ID[field].file!
        const ext = extensionOf(pathname)
        if (!rules.extensions.includes(ext)) throw new Error(`.${ext || '?'} files are not allowed here`)
        if (typeof payload.size !== 'number' || payload.size <= 0 || payload.size > MAX_FILE_BYTES)
          throw new Error('Files must be smaller than 25 MB')

        const allowedContentTypes = Array.from(new Set(rules.extensions.map((e) => FILE_CONTENT_TYPES[e])))
        return {
          allowedContentTypes,
          maximumSizeInBytes: MAX_FILE_BYTES,
          addRandomSuffix: true,
          allowOverwrite: false,
          validUntil: Date.now() + 60 * 60 * 1000,
        }
      },
    })
    return NextResponse.json(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Upload not allowed'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
