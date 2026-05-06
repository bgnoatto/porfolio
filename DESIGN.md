# Portfolio Design System — Bruno Gnoatto

## Vision

Elegant, modern developer portfolio for a Senior Back-End Java Engineer.
Style: **Glassmorphism** on a dark theme. The aesthetic communicates precision, depth, and professionalism — like the architecture he builds.

---

## Color Palette (Dark Glassmorphism)

Inspired by and consistent with `notification-challenge-web`.

| Token | Hex / Value | Usage |
|---|---|---|
| `--bg-base` | `#020617` | Page background |
| `--surface-1` | `#0F172A` | Cards, nav |
| `--surface-2` | `#1E293B` | Secondary elements |
| `--glass-bg` | `rgba(255,255,255,0.04)` | Glass panel background |
| `--glass-border` | `rgba(255,255,255,0.10)` | Glass panel border |
| `--glass-hover-bg` | `rgba(255,255,255,0.08)` | Glass hover state |
| `--accent` | `#22C55E` | Primary green, CTAs, links |
| `--accent-hover` | `#4ADE80` | Green hover state |
| `--accent-glow` | `rgba(34,197,94,0.20)` | Halos on flagship cards |
| `--text-primary` | `#F8FAFC` | Main body text |
| `--text-secondary` | `#94A3B8` | Captions, metadata |
| `--text-muted` | `#475569` | Placeholders, disabled |
| `--border` | `#1E293B` | Subtle borders |

---

## Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display (Hero name) | `Inter` | 800 | `clamp(3rem, 6vw, 5rem)` |
| Heading H2 | `Inter` | 700 | `2rem` |
| Heading H3 | `Inter` | 600 | `1.25rem` |
| Body | `Inter` | 400 | `1rem / 1.625` |
| Code / Tags | `JetBrains Mono` | 400 | `0.875rem` |
| Caption | `Inter` | 400 | `0.75rem` |

All from Google Fonts. Letter-spacing on headings: `-0.02em` for tightness.

---

## Glassmorphism Spec

The "glass" effect is used on **cards, nav, skill chips, and timeline nodes**.
Dark mode glass uses low opacity whites — the depth comes from layering dark surfaces.

```css
/* Base glass card */
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 16px;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.40),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

/* Elevated glass (hero, featured cards) */
.glass-elevated {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(20px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 8px 40px rgba(0, 0, 0, 0.50),
    inset 0 1px 0 rgba(255, 255, 255, 0.10);
}
```

Background layer beneath glass: radial gradient glows in `--accent-glow` so the blur has something to diffuse.

---

## Spacing Scale

Based on a `8px` base unit:

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

Section vertical padding: `96px` desktop · `64px` mobile.

---

## Border Radius

| Component | Radius |
|---|---|
| Cards | `16px` |
| Buttons | `10px` |
| Chips / Tags | `999px` (pill) |
| Input fields | `10px` |
| Avatar / images | `20px` |

---

## Sections

### 1. Hero
- Full viewport height.
- Background: `--cream-base` with two soft radial glows (green-mint top-right, cream-dark bottom-left).
- Glass card containing: name, title, tagline, two CTAs.
- Animated text entrance (fade + slide up, staggered).
- Floating tech badges (Java, Spring Boot, Docker) drifting subtly in the background.

### 2. About
- Two-column layout: photo left (rounded, glass border), bio right.
- Four stat counters in a glass row: `10+ Years`, `6 Companies`, `National Scale`, `Remote Ready`.
- Stat counters animate up on scroll entry.

### 3. Tech Stack
- Section title + sub-heading.
- Grid of glass chip cards grouped by category:
  - **Backend**: Java, Spring Boot, Node.js, REST APIs
  - **DevOps & Cloud**: Docker, Kubernetes, Git
  - **Databases**: MySQL, SQL Server, PostgreSQL
- Each chip: icon + label + proficiency dot (●●●●○ style).
- Hover: chip lifts with `transform: translateY(-4px)` and shadow deepens.

### 4. Experience (Timeline)
- Vertical timeline on desktop, stacked on mobile.
- Timeline spine: thin `--green-sage` line with glass nodes at each job.
- Each card: company name, role, date range, 2-3 bullet points.
- **NSSA card** visually flagged as "Current" with a pulsing green dot.
- Cards slide in from alternating sides on scroll.

### 5. Projects
- Card grid (2 cols desktop, 1 col mobile).
- Each card: project name, tech tags (glass pills), description, links (GitHub / Live).
- Flagship card (SUBE System): larger, full-width treatment with a subtle green glow border.
- Hover: card scales up `1.02`, shadow intensifies.

**Projects data:**

| Project | Type | Stack | Repo |
|---|---|---|---|
| SUBE Recharge System | Professional · Flagship | Java, Spring Boot, Microservices, Docker | (company, no public repo) |
| Notification Challenge | Personal · Backend | Java, Spring Boot 3.5, Kafka, PostgreSQL, JWT, Testcontainers, CircleCI | https://github.com/bgnoatto/notification-challenge |
| Notification Challenge Web | Personal · Frontend | Next.js 16, React 19, Tailwind CSS v4, Docker, Server Components | https://github.com/bgnoatto/notification-challenge-web |

The two personal projects are a full-stack pair (backend + frontend). Show them side by side as a "Full Stack Showcase" duo card, with individual GitHub links.

### 6. Education
- Simple glass card: UTN, degree, years.
- No HackerRank / LeetCode links (removed per user request).

### 7. Contact
- Section with centered heading + sub-text.
- Row of social glass buttons: Email, LinkedIn, GitHub.
- Optional: minimal contact form (Name, Email, Message) inside a glass card.
- Footer below: `© 2025 Bruno Gnoatto` in `--text-muted`.

---

## Motion & Animation

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Section entry | `fade-in + translateY(20px → 0)` | `600ms` | `ease-out` |
| Stat counters | `count-up` | `1200ms` | `ease-out` |
| Card hover | `translateY(-4px)` | `200ms` | `ease` |
| Hero text | Staggered `fade-in` per word | `800ms` | `ease-out` |
| Timeline nodes | `scale(0 → 1)` on scroll | `400ms` | `spring` |
| Nav scroll | Sticky with glass blur activating after `80px` | — | — |

Use `framer-motion` for all scroll-triggered animations in Next.js.

---

## Navigation

- Fixed top nav, transparent on hero, activates glass blur + border on scroll.
- Logo: `BG` monogram in `--green-mid`.
- Links: smooth scroll to sections.
- Mobile: hamburger → slide-in glass drawer.

---

## Responsive Breakpoints

| Name | Min width |
|---|---|
| `sm` | `640px` |
| `md` | `768px` |
| `lg` | `1024px` |
| `xl` | `1280px` |

Mobile-first. All layouts stack to single column below `md`.

---

## Tech Stack (Implementation)

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React + Simple Icons (tech logos) |
| Fonts | Google Fonts (Inter + JetBrains Mono) |
| Deployment | Vercel |
| UI Skill | `ui-ux-pro-max` |

---

## Assets

| Asset | Status | Path |
|---|---|---|
| Profile photo | ✅ Done | `public/avatar.jpg` |
| CV PDF | ✅ Done | `public/cv.pdf` |
| GitHub | ✅ | https://github.com/bgnoatto |
| LinkedIn | ✅ | https://www.linkedin.com/in/bgnoatto/ |
| Project: notification-challenge | ✅ | https://github.com/bgnoatto/notification-challenge |
| Project: notification-challenge-web | ✅ | https://github.com/bgnoatto/notification-challenge-web |
