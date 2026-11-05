import 'server-only'
import { neon } from '@neondatabase/serverless'
import type { Answers, UploadedFile } from './questions'

export interface SubmissionRow {
  id: string
  created_at: string
  business_name: string
  contact_name: string
  email: string
  phone: string
  answers: Answers
  files: UploadedFile[]
  status: 'new' | 'reviewed'
}

export function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL is not set')
  return neon(url)
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
export const isUuid = (id: string) => UUID.test(id)

export async function insertSubmission(input: {
  business_name: string
  contact_name: string
  email: string
  phone: string
  answers: Answers
  files: UploadedFile[]
}): Promise<string> {
  const sql = getSql()
  const rows = (await sql`
    INSERT INTO intake_submissions (business_name, contact_name, email, phone, answers, files)
    VALUES (${input.business_name}, ${input.contact_name}, ${input.email}, ${input.phone},
            ${JSON.stringify(input.answers)}::jsonb, ${JSON.stringify(input.files)}::jsonb)
    RETURNING id
  `) as { id: string }[]
  return rows[0].id
}

export async function listSubmissions(): Promise<SubmissionRow[]> {
  const sql = getSql()
  return (await sql`
    SELECT id, created_at, business_name, contact_name, email, phone, answers, files, status
    FROM intake_submissions
    ORDER BY created_at DESC
    LIMIT 500
  `) as SubmissionRow[]
}

export async function getSubmission(id: string): Promise<SubmissionRow | null> {
  if (!isUuid(id)) return null
  const sql = getSql()
  const rows = (await sql`
    SELECT id, created_at, business_name, contact_name, email, phone, answers, files, status
    FROM intake_submissions WHERE id = ${id}
  `) as SubmissionRow[]
  return rows[0] ?? null
}

export async function setStatus(id: string, status: 'new' | 'reviewed'): Promise<void> {
  if (!isUuid(id)) return
  const sql = getSql()
  await sql`UPDATE intake_submissions SET status = ${status} WHERE id = ${id}`
}

export async function deleteSubmissionRow(id: string): Promise<void> {
  if (!isUuid(id)) return
  const sql = getSql()
  await sql`DELETE FROM intake_submissions WHERE id = ${id}`
}
