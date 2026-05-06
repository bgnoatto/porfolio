# Skill Registry — porfolio

Generated: 2026-05-05

## User Skills

| Skill | Trigger |
|-------|---------|
| `branch-pr` | When creating a pull request or preparing changes for review |
| `issue-creation` | When creating a GitHub issue, reporting a bug, or requesting a feature |
| `judgment-day` | When user says "judgment day", "dual review", "juzgar" |
| `skill-creator` | When user asks to create a new skill or document patterns for AI |
| `skill-registry` | When user says "update skills", "skill registry", "update registry" |
| `sdd-*` | All SDD lifecycle phases (explore, propose, spec, design, tasks, apply, verify, archive) |

## Project Skills

None installed yet.

⚠️ `ui-ux-pro-max` is referenced in DESIGN.md but NOT YET INSTALLED.
Install with: `npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max`

## Project Conventions

| File | Purpose |
|------|---------|
| `DESIGN.md` | Visual design system — colors, typography, glassmorphism spec, section layout |
| `public/avatar.jpg` | Profile photo |
| `public/cv.pdf` | CV for download |

## Compact Rules

### General
- Framework: Next.js 14 App Router + TypeScript
- Styling: Tailwind CSS v3 + custom @layer for glassmorphism + Framer Motion
- Icons: Lucide React + @icons-pack/react-simple-icons
- Design style: Glassmorphism DARK theme — bg #020617, surface #0F172A, accent #22C55E
- Mobile-first, responsive (sm/md/lg/xl breakpoints)
- Deployment: GitHub Pages — output:'export', images:{unoptimized:true}, basePath:'/porfolio'

### Code Style
- TypeScript strict mode
- No comments unless WHY is non-obvious
- Atomic design: components → sections → pages
- Server Components by default, Client Components only when needed (interactivity, animations)
- All Framer Motion components must be 'use client'
- useReducedMotion() required on all animation components

### Assets
- Profile photo: `/public/avatar.jpg`
- CV PDF: `/public/cv.pdf`
- All static content hardcoded in `src/lib/data.ts` (no CMS)
