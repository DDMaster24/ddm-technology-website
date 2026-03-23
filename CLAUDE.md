# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DDM Technology is an AI Automation Agency based in Roodepoort, Johannesburg, South Africa. This is the company website — a Next.js 14 static site deployed to Vercel at ddmtech.co.za.

## Architecture

**Next.js 14 App Router** with static export (`output: 'export'`). No server-side rendering.

**Stack**: React 18, TypeScript, CSS Modules + global CSS, no Tailwind.

**Design system**: Dark theme with "Ember Ocean" palette (Red #DC2626 to Blue #1E40AF). Premium fonts: Clash Display + Satoshi from Fontshare, with Space Grotesk + Inter as fallbacks.

**Pages**:
- `/` — Homepage: Hero, services overview, case study teasers, CTA
- `/services` — Detailed AI service offerings (5 services with benefits)
- `/case-studies` — 3 SA business case studies with results
- `/about` — Company story, founder bio, values, tech stack
- `/contact` — Contact form, WhatsApp, email, location
- `/ai-services` — AI pricing packages (legacy, may be updated)
- `/software` — Software products catalog
- `/software/[slug]` — Individual product pages
- `/policies` — Policies page

**Components**: `components/` directory with Navigation, Hero, Footer, NeuralBackground, Icons, plus CSS Modules.

## Deployment

**Vercel**: Auto-deploys from main branch to ddmtech.co.za.

**Build**: `npm run build` (runs `next build` with static export).

## Making Changes

- All global styles in `app/globals.css` with CSS custom properties
- Component styles use CSS Modules (`.module.css` files)
- Icons are inline SVG components in `components/Icons.tsx`
- Maintain the dark theme with Ember Ocean gradient palette
- Maintain responsive design (breakpoints at 480px, 768px, 1024px, 1200px)
- Keep the professional, modern aesthetic
- Test with `npm run build` before committing
