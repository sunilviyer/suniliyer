# Story 1.3: Establish Project Structure and Documentation

**Epic:** Epic 1 - Project Foundation & Development Environment
**Status:** review
**Story ID:** 1.3
**Epic Objective:** Initialize a production-ready Next.js development environment with security patches, TypeScript, Tailwind CSS, ESLint, and exact dependency pinning. Establish implementation patterns and naming conventions that ensure AI agent consistency throughout development.

---

## Story

As a **developer**,
I want **to create the standard project directory structure and document setup procedures**,
So that **all developers follow consistent patterns and can onboard quickly**.

---

## Acceptance Criteria

**Given** the project foundation is initialized
**When** I create the project structure
**Then** the following directories exist: `/app`, `/components`, `/lib`, `/types`, `/content`, `/scripts`, `/public`, `/docs`
**And** A `README.md` exists documenting: local setup, build process, deployment procedure
**And** File naming conventions are documented (PascalCase components, kebab-case utilities)
**And** A `types/article.ts` file exists with the Article interface stub
**And** All empty directories have `.gitkeep` files where needed

---

## Tasks / Subtasks

### Task 1: Create Feature-Based Component Directory Structure
- [x] Create `/components` directory in project root
- [x] Create `/components/articles` subdirectory (for ArticleCard, ArticleExpanded, CategoryBadge)
- [x] Create `/components/navigation` subdirectory (for FloatingMenu)
- [x] Create `/components/theme` subdirectory (for ThemeToggle)
- [x] Create `/components/portfolio` subdirectory (for PortfolioCard, FeaturedArticle)
- [x] Add `.gitkeep` files to each empty subdirectory

**Why Feature-Based Organization:**
Architecture decision (ARCH-9): Components are organized by feature area (articles, navigation, theme, portfolio) rather than flat structure. This improves:
- **Maintainability**: Related components grouped together
- **Scalability**: Easy to add new features without cluttering root /components
- **AI Agent Consistency**: Clear rules for where components belong

**Directory Commands:**
```bash
mkdir -p components/articles
mkdir -p components/navigation
mkdir -p components/theme
mkdir -p components/portfolio
```

**Create .gitkeep Files:**
```bash
touch components/articles/.gitkeep
touch components/navigation/.gitkeep
touch components/theme/.gitkeep
touch components/portfolio/.gitkeep
```

**Why .gitkeep Files:**
Git doesn't track empty directories. Adding `.gitkeep` files ensures the directory structure is committed to git, so when other developers clone the repository, the folders already exist.

### Task 2: Create Utility Libraries Directory
- [x] Create `/lib` directory in project root (if not already exists from create-next-app)
- [x] Add `.gitkeep` file to `/lib` directory
- [x] Verify naming convention: kebab-case for utility files

**Purpose of /lib Directory:**
Contains pure functions and utility code that:
- Does NOT use React (can be imported in Server Components)
- Provides reusable logic (markdown parsing, article filtering, animations)
- Follows verb-noun function naming pattern (getAllArticles, parseMarkdownContent)

**Files That Will Live Here (Created in Later Epics):**
- `lib/markdown-parser.ts` - MDX compilation with rehype-prism (Epic 3)
- `lib/article-utils.ts` - CRUD operations (Epic 3)
- `lib/related-articles.ts` - Similarity algorithm (Epic 3)
- `lib/animations.ts` - Custom FLIP utilities (Epic 6)
- `lib/theme.ts` - Theme helper functions (Epic 2)
- `lib/constants.ts` - VALID_CATEGORIES array (Epic 2)

**Create Directory:**
```bash
mkdir -p lib
touch lib/.gitkeep
```

### Task 3: Create TypeScript Types Directory with Article Interface Stub
- [x] Create `/types` directory in project root
- [x] Create `/types/article.ts` file with Article interface stub
- [x] Add placeholder comments explaining the interface purpose
- [x] Verify file uses PascalCase for interface name (Article, not IArticle)

**Why Create types/article.ts NOW:**
- Establishes TypeScript interface pattern early
- Provides placeholder for Epic 3 (Content Management Pipeline)
- Documents expected frontmatter schema for developers
- Ensures AI agents use consistent Article type across all code

**File Content:**
```typescript
// types/article.ts

/**
 * Article Type Definition
 *
 * This interface defines the structure of article data used throughout AIDefence.
 * Articles are created from markdown files with YAML frontmatter.
 *
 * Naming Conventions:
 * - Interface name: PascalCase (Article, not IArticle)
 * - Frontmatter fields: snake_case (reading_time, not readingTime)
 * - Date format: YYYY-MM-DD
 *
 * This is a STUB file that will be fully implemented in Epic 3: Content Management Pipeline.
 */

/**
 * Valid article categories (must match exactly - Title Case)
 */
export const VALID_CATEGORIES = [
  "AI Fundamentals",
  "Risks & Principles",
  "Legal Frameworks",
  "AI Laws",
  "Risk Frameworks",
  "Development Lifecycle",
  "Governance",
  "Auditing & Assessment",
  "Industry Perspectives",
  "Explainability",
  "Videos",
] as const;

export type Category = typeof VALID_CATEGORIES[number];

/**
 * Article interface representing a single article with metadata and content
 */
export interface Article {
  // Required fields (from frontmatter)
  title: string;                    // Article title
  slug: string;                     // URL-friendly slug (derived from filename)
  category: Category;               // Must match one of VALID_CATEGORIES
  tags: string[];                   // Array of tags for filtering and related articles
  date: string;                     // Publication date in YYYY-MM-DD format
  reading_time: number;             // Estimated reading time in minutes (integer)

  // Optional SEO fields (from frontmatter)
  meta_description?: string;        // SEO description for search engines
  seo_title?: string;              // Custom SEO title (defaults to title)
  related_context?: string;        // Keywords for related article algorithm
  video_url?: string;              // Optional YouTube video URL

  // Computed fields (added during build processing)
  related_articles?: string[];     // Array of related article slugs (computed by algorithm)
  content?: any;                   // Compiled MDX content (MDXRemoteSerializeResult)
}

/**
 * Partial article metadata for preview cards (grid display)
 */
export interface ArticlePreview {
  title: string;
  slug: string;
  category: Category;
  date: string;
  reading_time: number;
}
```

**Create File:**
```bash
mkdir -p types
# Create types/article.ts with content above
```

### Task 4: Create Content Directory for Markdown Articles
- [x] Create `/content` directory in project root
- [x] Create `/content/articles` subdirectory
- [x] Add `.gitkeep` file to `/content/articles`
- [x] Add README.txt explaining directory purpose

**Purpose of /content Directory:**
Stores all markdown articles with YAML frontmatter. This directory:
- Lives outside `/app` (not part of Next.js routing)
- Accessed via filesystem during build (fs.readFileSync in lib/article-utils.ts)
- Will contain 13 articles (MVP) scaling to 158 articles (vision)

**Directory Commands:**
```bash
mkdir -p content/articles
touch content/articles/.gitkeep
```

**Create content/articles/README.txt:**
```txt
# AIDefence Article Content Directory

This directory contains all markdown articles with YAML frontmatter.

## Adding a New Article

1. Create a new markdown file: `article-slug.md`
   - Slug format: lowercase-kebab-case
   - Example: `large-language-models.md`

2. Add YAML frontmatter at top of file:
---
title: "Article Title"
category: "AI Fundamentals"  # Must match one of 11 valid categories
tags: ["llm", "transformer", "neural-networks"]
date: "2025-12-12"  # YYYY-MM-DD format
reading_time: 8  # Integer minutes
meta_description: "SEO description for search engines"
related_context: "keywords for related article matching"
---

3. Write markdown content below frontmatter
   - Use standard markdown (headings, lists, code blocks, tables)
   - MDX allows React components in content
   - Code blocks auto-highlighted with Prism.js

4. Commit and push to Git
   - Vercel automatically builds and deploys
   - Article appears on site within 2 minutes

## Frontmatter Field Reference

Required:
- title: Article title (string)
- category: One of 11 valid categories (Title Case)
- tags: Array of tags (kebab-case)
- date: Publication date (YYYY-MM-DD)
- reading_time: Estimated minutes (integer)

Optional:
- meta_description: SEO description
- seo_title: Custom SEO title
- related_context: Keywords for matching
- video_url: YouTube embed URL

## Valid Categories

Must match exactly (Title Case):
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
```

### Task 5: Create Build Scripts Directory
- [x] Create `/scripts` directory in project root
- [x] Add `.gitkeep` file to `/scripts` directory
- [x] Add README.txt explaining directory purpose

**Purpose of /scripts Directory:**
Contains Node.js scripts that run during build process:
- `generate-sitemap.js` - Scans /content/articles/ and generates sitemap.xml (Epic 3)
- Other build-time automation scripts (future)

**Directory Commands:**
```bash
mkdir -p scripts
touch scripts/.gitkeep
```

**Create scripts/README.txt:**
```txt
# AIDefence Build Scripts Directory

This directory contains Node.js scripts that run during the build process.

## Current Scripts

None yet - scripts will be added in Epic 3: Content Management Pipeline.

## Planned Scripts

- generate-sitemap.js (Epic 3)
  - Scans /content/articles/ directory
  - Extracts slug and date from frontmatter
  - Generates sitemap.xml in /public directory
  - Runs during build: "build": "node scripts/generate-sitemap.js && next build"

## Running Scripts

Build scripts are executed automatically during `npm run build`.
They can also be run manually for testing:

```bash
node scripts/generate-sitemap.js
```

## Script Conventions

- Files: kebab-case naming (generate-sitemap.js)
- Language: Node.js (CommonJS or ES modules)
- Error handling: Throw errors to fail build if critical
- Logging: Use console.log for progress, console.error for failures
```

### Task 6: Verify /public Directory Structure
- [x] Verify `/public` directory exists (created by create-next-app)
- [x] Create `/public/images` subdirectory
- [x] Create `/public/images/articles` subdirectory
- [x] Add `.gitkeep` file to `/public/images/articles`
- [x] Verify favicon.ico exists in `/public` (SVG files present)

**Purpose of /public Directory:**
Static assets served directly by Next.js:
- `/public/sitemap.xml` - Auto-generated sitemap (Epic 3)
- `/public/robots.txt` - Search engine crawl directives (Epic 3)
- `/public/images/articles/` - Generative art illustrations (Growth phase)
- `/public/favicon.ico` - Site icon

**Directory Commands:**
```bash
mkdir -p public/images/articles
touch public/images/articles/.gitkeep
```

**Why /public/images/articles Exists Now:**
Establishes convention for article illustrations. Growth phase will use Stable Diffusion to generate images, but MVP uses gradient placeholders (CSS-based).

### Task 7: Verify /docs Directory Exists
- [x] Verify `/docs` directory exists with existing project documentation
- [x] Confirm presence of: prd.md, architecture.md, ux-design-specification.md, epics.md
- [x] Confirm presence of: bmm-workflow-status.yaml, sprint-status.yaml
- [x] No changes needed - directory already established

**Purpose of /docs Directory:**
Project documentation created during BMM methodology phases:
- Planning phase: prd.md, ux-design-specification.md
- Solutioning phase: architecture.md, epics.md
- Implementation phase: sprint-status.yaml, story files

**No Action Required:**
This directory already exists with completed planning and solutioning artifacts.

### Task 8: Create Comprehensive README.md
- [x] Create `README.md` in project root
- [x] Document local development setup (Node version, npm install, environment variables)
- [x] Document build process (npm run build, output directory)
- [x] Document deployment procedure (Git push to main, Vercel auto-deploy)
- [x] Document file naming conventions (PascalCase, kebab-case, snake_case)
- [x] Document adding new articles workflow
- [x] Include troubleshooting section for common errors

**README.md Content:**
````markdown
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
├── next.config.js                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind CSS configuration
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
````

**Create README.md File:**
```bash
# Create README.md with content above in project root
```

### Task 9: Verify Project Structure Completeness
- [x] Run directory tree command to verify all folders exist
- [x] Verify .gitkeep files in empty directories (8 .gitkeep files confirmed)
- [x] Verify types/article.ts exists with stub content
- [x] Verify README.md exists with complete documentation
- [x] Verify all acceptance criteria met

**Verification Commands:**
```bash
# List directory structure
tree -L 3 -a

# Verify .gitkeep files
find . -name ".gitkeep"

# Verify types/article.ts exists
cat types/article.ts

# Verify README.md exists
head -n 20 README.md
```

**Expected Directory Structure:**
```
aidefence/
├── app/                               # Created by create-next-app
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/                        # Created in this story
│   ├── articles/
│   │   └── .gitkeep
│   ├── navigation/
│   │   └── .gitkeep
│   ├── theme/
│   │   └── .gitkeep
│   └── portfolio/
│       └── .gitkeep
├── lib/                               # Created in this story
│   └── .gitkeep
├── types/                             # Created in this story
│   └── article.ts                     # Stub file with VALID_CATEGORIES
├── content/                           # Created in this story
│   └── articles/
│       ├── .gitkeep
│       └── README.txt
├── scripts/                           # Created in this story
│   ├── .gitkeep
│   └── README.txt
├── public/                            # Created by create-next-app
│   ├── images/
│   │   └── articles/
│   │       └── .gitkeep
│   └── favicon.ico
├── docs/                              # Already exists
│   ├── prd.md
│   ├── architecture.md
│   ├── epics.md
│   └── sprint-artifacts/
├── README.md                          # Created in this story
├── package.json                       # Created by create-next-app
├── package-lock.json                  # Updated in Story 1.2
├── next.config.js                     # Created by create-next-app
├── tailwind.config.ts                 # Created by create-next-app
├── tsconfig.json                      # Created by create-next-app
├── .env.example                       # Created in Story 1.2
└── .gitignore                         # Created by create-next-app
```

---

## Dev Notes

### Project Structure Notes

**This is Story 1.3 in Epic 1 - the FINAL story in Epic 1.** This story completes the project foundation by establishing the standard directory structure, file naming conventions, and developer documentation that all subsequent epics will build upon.

**Story 1.1 and 1.2 Prerequisites:**
- Story 1.1 created baseline Next.js project with /app, /public, config files
- Story 1.2 installed dependencies and enforced exact version pinning
- Story 1.3 NOW adds feature-based directories, types stub, and comprehensive documentation

**After Completion, Complete Structure:**
```
aidefence/
├── app/                               # ✅ Story 1.1
├── components/                        # ✅ Story 1.3 (NEW)
│   ├── articles/
│   ├── navigation/
│   ├── theme/
│   └── portfolio/
├── lib/                               # ✅ Story 1.3 (NEW)
├── types/                             # ✅ Story 1.3 (NEW)
│   └── article.ts                     # Stub for Epic 3
├── content/                           # ✅ Story 1.3 (NEW)
│   └── articles/
├── scripts/                           # ✅ Story 1.3 (NEW)
├── public/                            # ✅ Story 1.1
│   └── images/articles/               # ✅ Story 1.3 (NEW)
├── docs/                              # ✅ Pre-existing
├── README.md                          # ✅ Story 1.3 (NEW)
├── package.json                       # ✅ Story 1.1, Story 1.2
├── package-lock.json                  # ✅ Story 1.2
├── .env.example                       # ✅ Story 1.2
└── [all other config files]           # ✅ Story 1.1
```

**What Gets Built in Later Epics:**
- **Epic 2**: Design tokens in app/globals.css, ThemeProvider in app/layout.tsx, theme/ components
- **Epic 3**: Markdown utilities in lib/, sample article in content/articles/, sitemap script in scripts/
- **Epic 4**: Homepage in app/page.tsx, navigation/ components
- **Epic 5**: Articles page, articles/ components (ArticleCard, CategoryBadge)
- **Epic 6**: ArticleExpanded component, FLIP animations in lib/
- **Epic 7**: Accessibility enhancements across all components
- **Epic 8**: Performance optimization, deployment configuration

### Architectural Context

**Naming Conventions (ARCH-9 to ARCH-16):**

These conventions are CRITICAL for AI agent consistency. All agents MUST follow:

1. **Components**: PascalCase (`ArticleCard.tsx`, not `article-card.tsx`)
2. **Utilities**: kebab-case (`article-utils.ts`, not `ArticleUtils.ts`)
3. **Frontmatter**: snake_case (`reading_time`, not `readingTime`)
4. **TypeScript Interfaces**: No prefix (`Article`, not `IArticle`)
5. **Functions**: Verb-noun (`getAllArticles`, not `articles()`)
6. **Dates**: YYYY-MM-DD format in frontmatter
7. **Categories**: Exact match from 11 defined (Title Case)
8. **Theme Values**: Simple strings `'dark'` or `'light'`
9. **CSS Variables**: kebab-case with hierarchy (`--color-background`)

**Feature-Based Organization (Architecture lines 386-424):**

Components organized by feature area, not flat:
- `/components/articles/` - Article-related components (ArticleCard, ArticleExpanded, CategoryBadge)
- `/components/navigation/` - Navigation components (FloatingMenu)
- `/components/theme/` - Theme components (ThemeToggle)
- `/components/portfolio/` - Portfolio components (PortfolioCard, FeaturedArticle)

**Why This Matters:**
- **Scalability**: Easy to add new features without cluttering root
- **Maintainability**: Related components grouped together
- **AI Agent Consistency**: Clear rules for where components belong
- **Team Collaboration**: Multiple developers can work in parallel without conflicts

**Article Interface Stub (types/article.ts):**

Creating the Article interface NOW (even though Epic 3 implements content pipeline):
- Documents expected frontmatter schema for developers
- Provides TypeScript type safety from day one
- Establishes snake_case frontmatter convention early
- Ensures all agents use consistent Article type

**README.md as Onboarding Tool:**

Comprehensive README documenting:
- Local setup (Node version, npm install, dev server)
- Build process (sitemap generation + Next.js build)
- Deployment (Git push to Vercel)
- Adding articles workflow (create markdown → commit → auto-deploy)
- File naming conventions (PascalCase, kebab-case, snake_case)
- Troubleshooting common errors

**Why This Matters:**
- **Developer Onboarding**: New developers (or AI agents) can start contributing immediately
- **Self-Service**: Developers don't need to ask questions about basic workflows
- **Convention Enforcement**: Explicit documentation of naming rules reduces errors
- **Deployment Confidence**: Clear instructions for testing and deploying changes

**Empty Directories and .gitkeep Files:**

Git doesn't track empty directories. Adding `.gitkeep` files ensures:
- Directory structure committed to git
- Other developers get same folder structure on clone
- No need to manually create directories after clone
- Establishes conventions before any code exists

**Why This Matters:**
- **AI Agent Consistency**: All agents see the same directory structure
- **Team Collaboration**: No "it works on my machine" directory issues
- **Convention Over Configuration**: Folders exist even if empty, signaling intent

### References

**Epic Context:**
- **Epic 1 Objective**: Initialize production-ready development environment with security patches, TypeScript, Tailwind, ESLint, and exact dependency pinning. Establish implementation patterns and naming conventions that ensure AI agent consistency throughout development.
- **Epic Scope**: 3 stories total (1.1: Initialize ✓, 1.2: Dependencies ✓, 1.3: Structure ← THIS STORY)
- **Epic Requirements Covered**:
  - ARCH-1: create-next-app initialization ✓ (Story 1.1)
  - ARCH-2: Next.js version pinning ✓ (Story 1.2)
  - ARCH-9 to ARCH-16: Implementation patterns ✓ (THIS STORY)
  - NFR-SEC-1, NFR-SEC-2: Security patches and pinning ✓ (Stories 1.1, 1.2)
  - NFR-MAIN-1, NFR-MAIN-2, NFR-MAIN-3: ESLint, Prettier, TypeScript ✓ (Story 1.1)

**Architecture Document:** `docs/architecture.md`
- Complete Project Structure: Lines 695-769
- Naming Conventions: Lines 248-378
- Feature-Based Organization: Lines 386-424
- File Naming Conventions: Lines 248-262
- TypeScript Naming: Lines 295-314
- Function Naming: Lines 316-334
- Frontmatter Schema: Lines 271-293
- Category Values: Lines 336-353

**Epics Document:** `docs/epics.md`
- Epic 1: Lines 469-522
- Story 1.3: Lines 506-521
- Requirements Covered: ARCH-9 through ARCH-16

**Previous Stories:**
- **Story 1.1**: Initialize Next.js Project with Security Patches
  - File: `docs/sprint-artifacts/1-1-initialize-nextjs-project-with-security-patches.md`
  - Created baseline Next.js project with /app, /public, config files
- **Story 1.2**: Configure Exact Dependency Pinning and Security
  - File: `docs/sprint-artifacts/1-2-configure-exact-dependency-pinning-and-security.md`
  - Installed dependencies and enforced exact version pinning

**Next Epic:**
After this story is complete and Epic 1 is marked as 'done', proceed to **Epic 2: Design System & Visual Identity**, which will:
- Define CSS custom properties for 11 category colors
- Implement dual theme system (dark/light mode) with next-themes
- Create theme toggle component
- Implement smart badge contrast logic
- Establish earth-tone design system throughout app

---

## Dev Agent Record

### Implementation Notes

**Blockers/Issues:**
- None encountered - all tasks completed smoothly

**Deviations from Plan:**
- README.md already existed from create-next-app - replaced default content with comprehensive documentation
- No favicon.ico in /public (Next.js 16 uses SVG files instead) - acceptable deviation

**Commands Executed:**
```bash
# Task 1: Create component directories
mkdir -p components/articles components/navigation components/theme components/portfolio
touch components/articles/.gitkeep components/navigation/.gitkeep components/theme/.gitkeep components/portfolio/.gitkeep

# Task 2: Create lib directory
mkdir -p lib && touch lib/.gitkeep

# Task 3: Create types directory with article.ts
mkdir -p types
# Created types/article.ts with Write tool (Article interface + VALID_CATEGORIES)

# Task 4: Create content directory
mkdir -p content/articles && touch content/articles/.gitkeep
# Created content/articles/README.txt with Write tool

# Task 5: Create scripts directory
mkdir -p scripts && touch scripts/.gitkeep
# Created scripts/README.txt with Write tool

# Task 6: Create public/images/articles
mkdir -p public/images/articles && touch public/images/articles/.gitkeep

# Task 7: Verify docs directory
ls -la docs/  # Confirmed all required files present

# Task 8: Create comprehensive README.md
# Read existing README.md, replaced with comprehensive version using Edit tool

# Task 9: Verification
find . -name ".gitkeep"  # Confirmed 8 .gitkeep files
npm run dev  # Successfully started development server
```

**Files Created:**
- `/Volumes/External/aidefence/types/article.ts` - Article interface with VALID_CATEGORIES const
- `/Volumes/External/aidefence/content/articles/README.txt` - Article creation instructions
- `/Volumes/External/aidefence/scripts/README.txt` - Build scripts documentation
- `/Volumes/External/aidefence/README.md` - Comprehensive project documentation (replaced default)
- 8 `.gitkeep` files in empty directories

**Directories Created:**
- `/Volumes/External/aidefence/components/articles/` - Article components placeholder
- `/Volumes/External/aidefence/components/navigation/` - Navigation components placeholder
- `/Volumes/External/aidefence/components/theme/` - Theme components placeholder
- `/Volumes/External/aidefence/components/portfolio/` - Portfolio components placeholder
- `/Volumes/External/aidefence/lib/` - Utility functions placeholder
- `/Volumes/External/aidefence/types/` - TypeScript interfaces
- `/Volumes/External/aidefence/content/articles/` - Markdown articles storage
- `/Volumes/External/aidefence/scripts/` - Build scripts placeholder
- `/Volumes/External/aidefence/public/images/articles/` - Article images placeholder

**Build/Test Results:**
- ✅ npm run dev starts successfully without errors
- ✅ Development server running on localhost:3000
- ✅ All directories created successfully
- ✅ All .gitkeep files present (8 total)
- ✅ types/article.ts compiles without TypeScript errors
- ✅ README.md comprehensive documentation complete

### File List

Created files:
- `types/article.ts` - Article interface with VALID_CATEGORIES const
- `content/articles/README.txt` - Article creation instructions
- `scripts/README.txt` - Build scripts documentation
- `README.md` - Comprehensive project documentation (replaced default)
- `components/articles/.gitkeep`
- `components/navigation/.gitkeep`
- `components/theme/.gitkeep`
- `components/portfolio/.gitkeep`
- `lib/.gitkeep`
- `content/articles/.gitkeep`
- `scripts/.gitkeep`
- `public/images/articles/.gitkeep`

Created directories:
- `components/articles/`
- `components/navigation/`
- `components/theme/`
- `components/portfolio/`
- `lib/`
- `types/`
- `content/articles/`
- `scripts/`
- `public/images/articles/`

**Commit Reference:**
- (To be created in code review fix phase)

### Validation Checklist

Before marking this story as 'done', verify:

- [x] All required directories exist:
  - [x] `/components/articles`, `/components/navigation`, `/components/theme`, `/components/portfolio`
  - [x] `/lib`
  - [x] `/types`
  - [x] `/content/articles`
  - [x] `/scripts`
  - [x] `/public/images/articles`
- [x] All empty directories have `.gitkeep` files (8 confirmed)
- [x] `types/article.ts` exists with Article interface stub and VALID_CATEGORIES
- [x] `content/articles/README.txt` exists with article creation instructions
- [x] `scripts/README.txt` exists explaining build scripts
- [x] `README.md` exists in project root with complete documentation:
  - [x] Prerequisites (Node version)
  - [x] Local setup instructions
  - [x] Build process documentation
  - [x] Deployment procedure
  - [x] Adding articles workflow
  - [x] File naming conventions (PascalCase, kebab-case, snake_case)
  - [x] Project structure diagram
  - [x] Troubleshooting section
- [x] All acceptance criteria met
- [x] `npm run dev` starts successfully (verify no errors)

**Ready for Git Commit:**
Once all validation checks pass, this story is ready for commit. This commit establishes the complete project structure with feature-based organization, TypeScript type definitions, and comprehensive developer documentation.

**Recommended Commit Message:**
```
Establish project structure and developer documentation

- Create feature-based component directories (articles/, navigation/, theme/, portfolio/)
- Create utility libraries directory (/lib)
- Create TypeScript types directory with Article interface stub (/types)
- Create content directory for markdown articles (/content/articles)
- Create build scripts directory (/scripts)
- Create article images directory (/public/images/articles)
- Add .gitkeep files to all empty directories
- Create comprehensive README.md with:
  - Local development setup
  - Build process documentation
  - Deployment procedure (Vercel)
  - Adding articles workflow
  - File naming conventions (PascalCase, kebab-case, snake_case)
  - Project structure diagram
  - Troubleshooting guide
- Create content/articles/README.txt with article creation instructions
- Create scripts/README.txt explaining build scripts purpose
- Create types/article.ts stub with Article interface and VALID_CATEGORIES

Story: 1.3 - Establish Project Structure and Documentation
Epic: 1 - Project Foundation & Development Environment
Requirements: ARCH-9 through ARCH-16 (Implementation patterns and naming conventions)
```

---

**Story created:** 2025-12-12
**Epic status:** Epic 1 completes when this story reaches 'done' (story 3 of 3)
**Previous story:** Story 1.2 - Configure Exact Dependency Pinning and Security
**Next epic:** Epic 2 - Design System & Visual Identity (stories 2.1 through 2.4)
