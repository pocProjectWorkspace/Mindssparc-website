# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev        # Start dev server (port 3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Tech Stack

- **Framework:** Next.js 16.1.1 with App Router
- **Language:** TypeScript 5 (strict mode, path alias `@/*` → `./src/*`)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`), dark theme enforced
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **AI/Chat:** Vercel AI SDK (`ai`, `@ai-sdk/react`) with Google Gemini backend (`@ai-sdk/google`)
- **Validation:** Zod 4

## Architecture

### Routing (App Router)

All routes live under `src/app/`. Key route groups:
- `/` — Homepage (composed from section components in `src/components/sections/`)
- `/industries/[slug]` — Industry pages (gcc, healthcare, manufacturing, education)
- `/services/` — Service pages with nested structure (secure, intelligence, recruitment)
- `/insights/[slug]` — Dynamic blog posts driven by data in `src/data/insights.ts`
- `/api/chat` — POST endpoint for AI chat (Google Gemini 1.5 Flash, streamed responses)

### Component Organization

```
src/components/
├── chat/         # ChatWidget - floating AI chat bubble
├── layout/       # Header (mega-menu), Footer, PageHeader
├── sections/     # Homepage sections (Hero, ServicePillars, Industries, etc.)
└── ui/           # ConsultationModal, CookieConsent, NeuralBackground, WaveHero
```

### Client vs Server Components

Most pages are server components by default. Components marked `'use client'` include: Header (navigation interactivity), ChatWidget, ConsultationModal, industry pages (state/animations), and service section components.

### State Management

No external state library — React hooks only (`useState`, `useChat` from AI SDK). Data flows via props.

### Styling Patterns

- Dark theme only (gray-950/900 backgrounds, emerald-400/cyan-400 accents)
- Theme variables defined in `src/app/globals.css` (`--primary`, `--accent`, etc.)
- Use `clsx` + `tailwind-merge` for conditional class composition

### AI Chat System

- `ChatWidget` component uses `useChat` hook from `@ai-sdk/react`
- API route at `src/app/api/chat/route.ts` calls Google Gemini with a system prompt containing MindsSparc business context
- Responses are streamed with 30-second max duration

### Data

- Article/insights data lives in `src/data/insights.ts` as a typed array (not a CMS)
- Navigation structure is hardcoded in Header and Footer components

## Business Context

MindsSparc is an enterprise consulting firm with three service pillars:
1. **SECURE** — Cybersecurity (Zero Trust, Cloud Security, Risk Management)
2. **INTELLIGENCE** — AI & Data (App Modernization, Governance, CoE)
3. **TALENT** — Recruitment (Executive Search, RPO, IT Staffing)

Target industries: Global Capability Centers, Healthcare, Manufacturing, Education.
