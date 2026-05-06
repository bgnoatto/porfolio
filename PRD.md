# PRD — Bruno Gnoatto Developer Portfolio

## Context

Bruno Gnoatto is a Senior Back-End Java Developer (10+ years, remote contractor) building a personal portfolio
to attract international clients and employers. The portfolio must communicate seniority, technical depth,
and professionalism at a glance.

---

## Decisions Log

| Decision | Choice | Reason |
|----------|--------|--------|
| Language | English only | International market, no i18n overhead |
| Structure | Single page, smooth scroll | Standard for portfolios, fluid UX |
| Theme | Dark mode only | User preference, glassmorphism works better dark |
| Palette | Dark slate + #22C55E green | Consistent with notification-challenge-web |
| Animations | Subtle & professional | No floating badges, no parallax |
| Testimonials | None | Experience + Projects speak for themselves |
| Contact form | No backend — mailto + LinkedIn + GitHub | Zero operational burden |
| Hero tagline | "Precision back-end engineering, built to scale." | Approved |
| Deployment | GitHub Pages (static export) | User preference |

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 + custom CSS layer for glass |
| Animations | Framer Motion |
| Icons | Lucide React + @icons-pack/react-simple-icons |
| Fonts | next/font/google → Inter + JetBrains_Mono |
| Deployment | GitHub Pages (static export) |

---

## Design System

### Color Palette (Dark Glassmorphism)

```css
--bg-base:        #020617   /* page background */
--surface-1:      #0F172A   /* cards, nav */
--surface-2:      #1E293B   /* secondary elements */
--glass-bg:       rgba(255,255,255,0.04)
--glass-border:   rgba(255,255,255,0.10)
--glass-hover-bg: rgba(255,255,255,0.08)
--accent:         #22C55E   /* primary green */
--accent-hover:   #4ADE80   /* green-400 */
--accent-glow:    rgba(34,197,94,0.20)
--text-primary:   #F8FAFC
--text-secondary: #94A3B8
--text-muted:     #475569
--border:         #1E293B
```

### Glassmorphism Spec

```css
.glass-card {
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.40),
              inset 0 1px 0 rgba(255,255,255,0.06);
}
.glass-elevated {
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(20px) saturate(200%);
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 40px rgba(0,0,0,0.50),
              inset 0 1px 0 rgba(255,255,255,0.10);
}
```

### Typography

- **Inter** via `next/font/google` — all UI text (CSS var `--font-inter`)
- **JetBrains Mono** via `next/font/google` — tech chips, code (CSS var `--font-mono`)
- Extended via `tailwind.config.ts` → `fontFamily.sans` and `fontFamily.mono`

### Animation Spec

| Element | Animation | Duration |
|---------|-----------|----------|
| Section entry | fade-in + translateY(20px→0) | 600ms ease-out |
| Stat counters | count-up on viewport entry | 1200ms |
| Card hover | translateY(-4px) + shadow | 200ms ease |
| Hero text | stagger fade-in per line | 800ms ease-out |
| Timeline nodes | scale(0→1) on scroll | 400ms |
| Nav glass | activates after 80px scroll | — |

All Framer Motion components are `'use client'`. `useReducedMotion()` disables animations when OS preference is set.

---

## Sections

### 1. Hero
- Full viewport height (`min-h-screen`)
- Background: radial gradient glows in accent color
- Glass elevated card: name, title, tagline, 2 CTAs
  - **Contact** → `mailto:bgnoatto@gmail.com`
  - **Download CV** → `/cv.pdf` (target `_blank`)
- Stagger fade-in on text

### 2. About
- Two-column: left = avatar (`public/avatar.jpg`, rounded, glass border), right = bio paragraph
- Bio: 10+ years, Java/Spring Boot/Microservices specialist, Technical Leader at NSSA (Argentina's national SUBE system), remote contractor
- 4 animated stat counters (count-up on scroll entry):
  - `10+` Years Experience · `6` Companies · `1` National Scale System · `100%` Remote Ready

### 3. Tech Stack
- Glass chip grid, 3 categories:
  - **Backend**: Java, Spring Boot, Node.js, REST APIs
  - **DevOps & Cloud**: Docker, Kubernetes, Git
  - **Databases**: MySQL, SQL Server, PostgreSQL
- Each chip: Simple Icons SVG + label + proficiency dots (●●●●○)
- Hover: `translateY(-4px)` + accent glow

### 4. Experience
- Vertical timeline, spine in `--accent` color, 6 entries newest-first:
  1. NSSA S.A. — Back-End Developer | Technical Leader (04/2022–present) — "Current" badge + pulsing dot
  2. NeuralSoft S.A. — Software Developer & Analyst (06/2019–03/2022)
  3. Municipality of Santa Fe — Software Developer & Analyst (04/2018–05/2019)
  4. CARSA S.A. — Back-End Developer & Analyst (04/2015–05/2018)
  5. Ministry of Government — Technical Support & Developer (02/2014–01/2015)
  6. PRECISSION S.R.L. — iOS Game Developer (03/2011–01/2014)
- Cards slide in from alternating sides on scroll

### 5. Projects
- **SUBE Recharge System** — flagship, full-width glass-elevated + accent glow border
  - Stack: Java, Spring Boot, Microservices, Docker, Kubernetes
  - Badge: "Professional · Confidential" | Link: LinkedIn
- **Full Stack Showcase** — 2-card duo:
  - **Notification Challenge** — Spring Boot 3.5, Kafka, PostgreSQL, JWT, Testcontainers, CircleCI → [GitHub](https://github.com/bgnoatto/notification-challenge)
  - **Notification Challenge Web** — Next.js 16, React 19, Tailwind v4, Docker → [GitHub](https://github.com/bgnoatto/notification-challenge-web)

### 6. Education
- Glass card: UTN — Bachelor's in Systems Engineering — 2003–2018, Santa Fe, Argentina

### 7. Contact
- 3 glass social buttons: Email (mailto:bgnoatto@gmail.com), LinkedIn, GitHub
- Footer: `© 2025 Bruno Gnoatto`

---

## Navigation

- Fixed top, transparent on hero → glass activates after 80px scroll
- Logo: `BG` monogram in `--accent`
- Smooth scroll anchors: `#about` `#stack` `#experience` `#projects` `#education` `#contact`
- Mobile: hamburger → glass slide-in drawer (AnimatePresence + focus trap)

---

## File Structure

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css          — CSS vars + @layer components (glass-card, glass-elevated)
  components/
    layout/
      Nav.tsx            — 'use client'
      Footer.tsx
    sections/
      Hero.tsx           — 'use client'
      About.tsx          — 'use client'
      TechStack.tsx
      Experience.tsx     — 'use client'
      Projects.tsx       — 'use client'
      Education.tsx
      Contact.tsx
    ui/
      GlassCard.tsx
      TechChip.tsx
      StatCounter.tsx    — 'use client'
      TimelineNode.tsx   — 'use client'
      Button.tsx
      SectionHeading.tsx
  lib/
    data.ts              — all hardcoded content as typed constants
    types.ts
public/
  avatar.jpg             ✅
  cv.pdf                 ✅
```

---

## Personal Data

| Field | Value |
|-------|-------|
| Email | bgnoatto@gmail.com |
| LinkedIn | https://www.linkedin.com/in/bgnoatto/ |
| GitHub | https://github.com/bgnoatto |
| Location | Argentina (Remote) |

---

## GitHub Pages — Static Export

```ts
// next.config.ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/porfolio',     // remove if using custom domain
  assetPrefix: '/porfolio',  // remove if using custom domain
}
```

Deploy via `.github/workflows/deploy.yml` → build + `actions/deploy-pages` on push to `main`.

---

## Pending

- [ ] Install `ui-ux-pro-max` skill:
  `npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max`

---

## Verification Checklist

- [ ] `npm run dev` → all 7 sections render
- [ ] Glass nav activates on scroll past 80px
- [ ] Section animations trigger once on viewport entry
- [ ] Stat counters count-up on first entry
- [ ] Timeline alternates desktop, stacks mobile
- [ ] SUBE card full-width; duo cards side by side
- [ ] Email → opens mail client; LinkedIn/GitHub → correct URLs in new tab
- [ ] CV download → PDF in new tab
- [ ] Mobile hamburger → drawer opens/closes correctly
- [ ] `npm run build` → static export completes with zero errors
- [ ] `tsc --noEmit` → zero TypeScript errors
