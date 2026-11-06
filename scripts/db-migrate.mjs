#!/usr/bin/env node
// Runs every SQL file in db/migrations (in name order) against DATABASE_URL.
// All migrations use IF NOT EXISTS, so running this twice is safe.
//
//   DATABASE_URL="postgres://..." npm run db:migrate
//
// If DATABASE_URL is not set, it is read from .env.local / .env when present
// (e.g. after `vercel env pull .env.local`).

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { neon } from '@neondatabase/serverless'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function loadEnvFile(file) {
  const path = join(root, file)
  if (!existsSync(path)) return
  for (const line of readFileSync(path, 'utf8').split(/\r?\n/)) {
    const m = /^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/.exec(line)
    if (!m || process.env[m[1]] !== undefined) continue
    process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, '$2')
  }
}

if (!process.env.DATABASE_URL) {
  loadEnvFile('.env.local')
  loadEnvFile('.env')
}

const url = process.env.DATABASE_URL
if (!url) {
  console.error('DATABASE_URL is not set. Run: DATABASE_URL="postgres://..." npm run db:migrate')
  process.exit(1)
}

const sql = neon(url)
const dir = join(root, 'db', 'migrations')
const files = readdirSync(dir).filter((f) => f.endsWith('.sql')).sort()

for (const file of files) {
  const text = readFileSync(join(dir, file), 'utf8')
    .split(/\r?\n/)
    .filter((l) => !l.trim().startsWith('--'))
    .join('\n')
  const statements = text.split(/;\s*(?:\n|$)/).map((s) => s.trim()).filter(Boolean)
  for (const statement of statements) {
    await sql.query(statement)
  }
  console.log(`Applied ${file} (${statements.length} statement${statements.length === 1 ? '' : 's'})`)
}

const [{ count }] = await sql.query('SELECT count(*)::int AS count FROM intake_submissions')
console.log(`Done. intake_submissions has ${count} row(s).`)
