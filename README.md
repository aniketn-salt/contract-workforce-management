# Contract Workforce Management

Pixel-perfect marketing landing page for **Eilisys Ascent Contract Workforce Management**, built from Figma and implemented with Next.js.

**Live preview:** run locally at [http://localhost:3000](http://localhost:3000)

**Repository:** [github.com/aniketn-salt/contract-workforce-management](https://github.com/aniketn-salt/contract-workforce-management)

---

## Overview

A full-width, section-based landing page covering product positioning, capabilities, industries, testimonials, implementation steps, FAQ, and CTA - aligned to the Eilisys design system.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans, Inter (`next/font`) |

---

## Page Sections

1. Sticky banner
2. Navbar
3. Hero
4. Trusted by (logo strip)
5. Business risks
6. Why Eilisys (carousel)
7. Key capabilities (carousel)
8. Operational impact
9. Who it helps (carousel)
10. Industries served
11. Testimonials
12. Why Ascent (accordion)
13. Implementation steps
14. FAQ
15. CTA
16. Footer

Entry point: `src/components/contract-workforce/ContractWorkforcePage.tsx`

---

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, metadata
    page.tsx            # Renders ContractWorkforcePage
  components/
    contract-workforce/ # Page sections
    ui/                 # Shared UI (button, badges, cards, etc.)
  lib/
    constants/          # Copy, assets, navigation data
    utils.ts
  styles/
    globals.css         # Design tokens and global styles

public/
  assets/               # Images exported from Figma
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm)

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Production build
npm run start   # Run production server
npm run lint    # ESLint
```

---

## Environment Variables

No environment variables are required for the current static landing page.

If you add API integration later, use `.env.local` (never commit this file):

```env
NEXT_PUBLIC_API_URL=https://your-api.example.com
```

---

## Assets

Images live in `public/assets/`. Paths are centralized in `src/lib/constants/assets.ts`.

Do not use temporary Figma MCP asset URLs in production - download assets into `public/assets/` instead.

---

## Deployment

Deploy like any standard Next.js app (Vercel, Netlify, Docker, etc.):

```bash
npm run build
npm run start
```

---

## License

Private project - All rights reserved.
