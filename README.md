# AIDefence

A modern, accessible portfolio website showcasing AI governance expertise through an innovative expandable article reading experience.

## Project Overview

AIDefence is a Next.js-based static site featuring:
- **Expandable Article Cards**: Read inline without page navigation using custom FLIP animations
- **Earth-Tone Design System**: Dual theme (dark/light) with 11 category colors
- **Build-Time Intelligence**: Related articles computed algorithmically during build
- **WCAG 2.1 AA Compliance**: Full keyboard navigation, screen reader support
- **Static Site Generation**: Pure SSG with no runtime server dependencies

**Tech Stack:** Next.js 16.0.10, React 19.2.1, TypeScript, Tailwind CSS v4, MDX, Vercel

---

## Prerequisites

Before you begin, ensure you have:
- **Node.js**: Version 20.9 or higher
- **npm**: Comes with Node.js (version 10+)
- **Git**: For version control and deployment

Check versions:
```bash
node --version  # Should be v20.9.0 or higher
npm --version   # Should be 10.0.0 or higher
```

---

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sunilviyer/aidefence.git
cd aidefence
```

### 2. Install Dependencies

```bash
npm install
```

This installs all exact-pinned dependencies from `package-lock.json`:
- Next.js 16.0.10 (with security patches)
- Content processing: next-mdx-remote, gray-matter, rehype-prism, prismjs
- Theme management: next-themes
- Accessibility: @radix-ui/react-dialog
- Build-time utilities: string-similarity

### 3. Environment Variables (Optional)

No environment variables are required for MVP. If needed in future:

```bash
cp .env.example .env.local
# Edit .env.local with actual values
```

### 4. Start Development Server

```bash
npm run dev
```

This starts the Turbopack development server on `http://localhost:3000`.
- Hot reload enabled for all file changes
- Build-time scripts do NOT run in dev mode (only during production build)

---

## Build Process

### Build for Production

```bash
npm run build
```

This executes the following sequence:
1. **Sitemap Generation**: `node scripts/generate-sitemap.js` (scans /content/articles/, writes /public/sitemap.xml)
2. **Next.js Build**: Compiles TypeScript, processes Tailwind CSS, bundles JavaScript
3. **Static Export**: Generates static HTML for all routes
4. **Output**: `.next/` directory with production-ready static files

### Test Production Build Locally

```bash
npm run build
npm start
```

Access the production build on `http://localhost:3000`.

---

## Deployment

### Automatic Deployment (Vercel)

AIDefence uses Vercel for continuous deployment:

1. **Make changes** to code or add articles
2. **Commit to Git**:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
3. **Push to main branch**:
   ```bash
   git push origin main
   ```
4. **Vercel auto-deploys** within 2 minutes
5. **Check deployment** at production URL: www.suniliyer.ca

### Preview Deployments

Every pull request automatically creates a preview deployment:
- Unique URL posted as PR comment
- Safe to test changes before merging to main
- Automatically cleaned up after PR merge/close

### Rollback on Failure

If deployment fails:
- Vercel automatically rolls back to last known good state
- Production URL remains stable
- Check Vercel dashboard for deployment logs

---

## Adding New Articles

### Step 1: Create Markdown File

Create a new file in `/content/articles/`:

```bash
touch content/articles/your-article-slug.md
```

**Slug naming rules:**
- Lowercase kebab-case: `large-language-models.md`
- Derived from title: "Large Language Models" → `large-language-models.md`
- No special characters except hyphens

### Step 2: Add Frontmatter

At the top of your markdown file, add YAML frontmatter:

```yaml
---
title: "Your Article Title"
category: "AI Fundamentals"  # Must match one of 11 valid categories
tags: ["tag1", "tag2", "tag3"]
date: "2025-12-12"  # YYYY-MM-DD format
reading_time: 8  # Integer minutes
meta_description: "SEO description for search engines (optional)"
related_context: "keywords for related article matching (optional)"
---
```

**Valid Categories** (must match exactly - Title Case):
- AI Fundamentals
- Risks & Principles
- Legal Frameworks
- AI Laws
- Risk Frameworks
- Development Lifecycle
- Governance
- Auditing & Assessment
- Industry Perspectives
- Explainability
- Videos

### Step 3: Write Content

Below frontmatter, write markdown content:

```markdown
## Summary

Brief overview of the article...

## Key Takeaways

- Point 1
- Point 2
- Point 3

## Main Content

Your detailed content with:
- Headings (## H2, ### H3)
- Lists (bulleted, numbered)
- Code blocks with syntax highlighting
- Tables
- Links
- Blockquotes
```

### Step 4: Commit and Deploy

```bash
git add content/articles/your-article-slug.md
git commit -m "Add article: Your Article Title"
git push origin main
```

Vercel automatically:
1. Runs sitemap generation (includes your new article)
2. Processes markdown with MDX compilation
3. Computes related articles
4. Generates static page at `/articles/your-article-slug`
5. Deploys to production

**Article appears on site within 2 minutes.**

---

## File Naming Conventions

AIDefence follows strict naming conventions to ensure AI agent consistency:

### Components (React)
- **Format**: PascalCase
- **Examples**: `ArticleCard.tsx`, `FloatingMenu.tsx`, `ThemeToggle.tsx`
- **Location**: `/components/{feature-area}/ComponentName.tsx`

### Utilities (Libraries)
- **Format**: kebab-case
- **Examples**: `markdown-parser.ts`, `article-utils.ts`, `related-articles.ts`
- **Location**: `/lib/utility-name.ts`

### Pages (Next.js)
- **Format**: kebab-case (Next.js convention)
- **Examples**: `page.tsx`, `layout.tsx`, `not-found.tsx`
- **Location**: `/app/page.tsx`, `/app/articles/page.tsx`

### TypeScript Interfaces
- **Format**: PascalCase, no prefix
- **Examples**: `Article`, `ArticleMetadata`, `Theme` (not `IArticle` or `ArticleInterface`)
- **Location**: `/types/article.ts`

### Functions
- **Format**: camelCase, verb-noun pattern
- **Examples**: `getAllArticles()`, `getArticleBySlug()`, `parseMarkdownContent()`
- **Anti-patterns**: `articles()`, `get()`, `getAllArticlesFromFilesystem()`

### Frontmatter Fields
- **Format**: snake_case
- **Examples**: `reading_time`, `meta_description`, `seo_title`
- **Anti-patterns**: `readingTime`, `metaDescription`, `reading-time`

### CSS Custom Properties
- **Format**: kebab-case with hierarchy
- **Examples**: `--color-background`, `--color-text-primary`, `--space-lg`
- **Anti-patterns**: `--colorBackground`, `--bg_color`

---

## Project Structure

```
aidefence/
├── app/                               # Next.js App Router
│   ├── layout.tsx                     # Root layout (ThemeProvider, FloatingMenu)
│   ├── page.tsx                       # Homepage
│   ├── globals.css                    # Design tokens + Tailwind + Prism theme
│   └── articles/
│       ├── page.tsx                   # Articles grid page
│       └── [slug]/page.tsx           # Individual article pages
│
├── components/                        # React components (feature-based)
│   ├── articles/                      # ArticleCard, ArticleExpanded, CategoryBadge
│   ├── navigation/                    # FloatingMenu
│   ├── theme/                         # ThemeToggle
│   └── portfolio/                     # PortfolioCard, FeaturedArticle
│
├── lib/                               # Utility functions
│   ├── markdown-parser.ts             # MDX processing with rehype-prism
│   ├── article-utils.ts               # CRUD operations (getAllArticles, getArticleBySlug)
│   ├── related-articles.ts            # Similarity algorithm
│   ├── animations.ts                  # Custom FLIP utilities
│   └── constants.ts                   # VALID_CATEGORIES array
│
├── types/                             # TypeScript interfaces
│   └── article.ts                     # Article, ArticleMetadata interfaces
│
├── content/                           # Markdown articles
│   └── articles/
│       └── *.md                       # Markdown files with YAML frontmatter
│
├── scripts/                           # Build-time scripts
│   └── generate-sitemap.js            # Sitemap generation (Node.js)
│
├── public/                            # Static assets
│   ├── images/articles/               # Article images (Stable Diffusion, Growth phase)
│   ├── sitemap.xml                    # Auto-generated sitemap
│   └── robots.txt                     # SEO robots file
│
├── docs/                              # Project documentation
│   ├── prd.md                         # Product Requirements Document
│   ├── architecture.md                # Architecture Decision Document
│   ├── ux-design-specification.md     # UX Design Specification
│   ├── epics.md                       # Epic and story breakdown
│   └── sprint-artifacts/              # Implementation stories and tracking
│
├── package.json                       # Dependencies and build scripts
├── package-lock.json                  # Locked exact versions (committed to git)
├── next.config.ts                     # Next.js configuration
├── postcss.config.mjs                 # PostCSS configuration
├── tsconfig.json                      # TypeScript configuration
├── .env.example                       # Environment variable template
└── README.md                          # This file
```

---

## Troubleshooting

### Build Errors

**Problem:** Build fails with "Article not found" error

**Solution:** Check that:
- Markdown file exists in `/content/articles/`
- Frontmatter is valid YAML (no syntax errors)
- Category matches one of 11 valid categories exactly (Title Case)
- Date is in YYYY-MM-DD format

---

**Problem:** TypeScript errors during build

**Solution:**
```bash
# Check for type errors
npx tsc --noEmit

# Fix any errors reported
# Then rebuild
npm run build
```

---

**Problem:** ESLint errors preventing build

**Solution:**
```bash
# Run linter
npm run lint

# Fix reported issues
# Or disable specific rules if needed (not recommended)
```

---

### Dependency Issues

**Problem:** `npm install` fails or shows version conflicts

**Solution:**
1. Delete `node_modules/` and `package-lock.json`
2. Reinstall with exact versions:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

**Problem:** Security vulnerabilities reported by `npm audit`

**Solution:**
- AIDefence uses exact version pinning (no `^` or `~`)
- Security patches must be tested before updating
- DO NOT run `npm audit fix` automatically
- Instead: Review vulnerabilities, update package.json manually, test in staging

---

### Development Server Issues

**Problem:** Changes not reflecting in browser (hot reload not working)

**Solution:**
1. Stop dev server (Ctrl+C)
2. Clear Next.js cache:
   ```bash
   rm -rf .next
   ```
3. Restart dev server:
   ```bash
   npm run dev
   ```

---

**Problem:** Port 3000 already in use

**Solution:**
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process (replace PID with actual process ID)
kill -9 <PID>

# Or use a different port
PORT=3001 npm run dev
```

---

### Deployment Issues

**Problem:** Vercel deployment fails

**Solution:**
1. Check Vercel dashboard for deployment logs
2. Verify build succeeds locally: `npm run build`
3. Check that `package-lock.json` is committed to git
4. Ensure environment variables are set in Vercel (if needed)

---

## Additional Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **MDX**: https://mdxjs.com/
- **Vercel Deployment**: https://vercel.com/docs

---

## License

Copyright © 2025 Sunil Iyer. All rights reserved.

---

**Story:** 1.3 - Establish Project Structure and Documentation
**Epic:** 1 - Project Foundation & Development Environment
**Requirements:** ARCH-9 through ARCH-16 (Implementation patterns and naming conventions)
