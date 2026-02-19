# Sunil Iyer — Personal Portfolio

Personal portfolio and creative project site for Sunil Iyer. Built with Next.js 14, TypeScript, and deployed via Vercel.

**Live site:** [suniliyer.ca](https://www.suniliyer.ca)

---

## What's here

The site is organised into four thematic areas:

| Section | Description |
|---|---|
| **Intelligence** | AI & product work — Seshan Intelligence, financial dashboards, multi-agent systems |
| **The Left Brain** | Creative & philosophical projects — Bhagavad Gita interactive experience, cAlvIn & Hobbes AI comics, creative works |
| **The Inner Monologue** | Writing on AI — history, terminology, risk & ethics, regulation, future |
| **Sunil** | Journey, resume |

---

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS-in-JS (styled-jsx) + CSS custom properties
- **Database:** Neon (PostgreSQL) for article cards
- **Email:** Resend API + Cloudflare Turnstile
- **Analytics:** Google Analytics 4
- **Deployment:** Vercel

---

## Running locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

**Required environment variables** (create a `.env.local` file — never committed):

```
DATABASE_URL=
RESEND_API_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_GA_ID=
```

---

## Project structure

```
app/              # Next.js App Router pages
components/       # React components
  homepage/       # Home page sections (learning paths, portfolio showcase)
  layout/         # Global layout (SideRail, GlobalUI, ContactWidget)
  contact/        # Contact form widget
lib/              # Data files and database utilities
public/           # Static assets (images, downloads)
```

---

## Notes

- `.env.local` and all secret keys are gitignored — never committed
- Planning documents, AI tooling configs, and legacy versions are excluded from this repository
- All external API calls use environment variables only
