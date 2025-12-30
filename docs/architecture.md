---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - 'docs/prd.md'
  - 'docs/ux-design-specification.md'
workflowType: 'architecture'
lastStep: 6
project_name: 'AIDefence'
user_name: 'Sunil'
date: '2025-12-12'
workflow_completed: true
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements Summary:**

AIDefence defines 61 functional requirements across 6 major domains:

1. **Content Discovery & Browsing (FR1-FR6)**: Masonry grid layout, category filtering, visual badges, article preview metadata
2. **Article Reading Experience (FR7-FR14)**: Expandable inline cards, full-width content display, markdown rendering (tables, code blocks, blockquotes), summary-first structure, related articles
3. **Navigation & Interaction (FR15-FR22)**: Keyboard shortcuts (Enter/Escape/Arrows), mouse/touch navigation, breadcrumbs, homepage-to-articles flow
4. **Content Management (FR23-FR29)**: Markdown file-based workflow, frontmatter metadata, Git-based publishing, automatic article appearance after build
5. **Search Engine Optimization (FR30-FR36)**: Auto-generated sitemap, meta tags, Open Graph, JSON-LD structured data, robots.txt
6. **Accessibility & Universal Access (FR37-FR47)**: Full keyboard navigation, screen reader support, WCAG 2.1 AA compliance, progressive enhancement, 44px touch targets, 200% text resizing support

**Architecturally Critical Functional Requirements:**

- **FR7 (Expandable Inline Cards)**: Core innovation requiring state management architecture that tracks expanded article, manages focus, handles keyboard navigation without URL changes
- **FR23-FR26 (Content Pipeline)**: Frontmatter-as-single-source-of-truth architecture - all metadata, SEO, relationships derived from YAML frontmatter during build
- **FR30 (Auto-generated Sitemap)**: Build-time generation requirement shapes deployment pipeline architecture
- **FR37-FR47 (Accessibility)**: ARIA live regions, focus management, semantic HTML requirements influence component design patterns

**Non-Functional Requirements:**

43 NFRs organized across 6 categories drive architectural decisions:

1. **Performance (NFR-PERF-1 to NFR-PERF-13)**:
   - LCP <2.5s, FID <100ms, CLS <0.1 (Core Web Vitals mandatory)
   - Lighthouse ≥90 across all metrics
   - 60fps animations (16ms frame time)
   - Build time ≤3 minutes for 158 articles
   - Bundle size <200KB gzipped

2. **Accessibility (NFR-ACCESS-1 to NFR-ACCESS-14)**:
   - WCAG 2.1 AA compliance (targeting AAA for contrast at 7:1)
   - Zero automated violations (axe DevTools, Lighthouse)
   - Full keyboard navigation with visible focus (3:1 contrast minimum)
   - Progressive enhancement (core content works without JS)

3. **Security (NFR-SEC-1 to NFR-SEC-7)**:
   - **CRITICAL**: Next.js ≥15.5.9 or ≥16.0.10 (patches CVE-2025-55184 DoS and CVE-2025-55183 source exposure)
   - Exact version pinning (no `^` or `~` in package.json)
   - HTTPS-only external content
   - Automated test gates before production deployment

4. **Reliability (NFR-REL-1 to NFR-REL-9)**:
   - 99.9% availability (Vercel SLA)
   - Deterministic builds (same input = identical output)
   - Regression prevention (new articles don't break existing)
   - Cross-browser compatibility (Chrome 61+, Firefox 60+, Safari 11+, Edge 79+)

5. **Maintainability (NFR-MAIN-1 to NFR-MAIN-10)**:
   - ≤10 minutes from markdown to deployed article
   - Frontmatter as single source of truth (no manual updates elsewhere)
   - Clear error messages for malformed frontmatter
   - Git push triggers automatic deployment

6. **Browser Support & Responsiveness**:
   - Mobile-first approach with tested viewports: 393px, 390px, 768px, 1024px, 1440px
   - 3-column → 2-column → 1-column grid adaptation
   - Full-screen article expansion on mobile (<768px)

**Scale & Complexity:**

- **Primary domain**: Full-stack web application (Next.js/React SSG, content delivery)
- **Complexity level**: Low-medium
  - Standard web application patterns (no real-time features, no complex backend)
  - Innovative UI interaction (expandable cards) adds complexity
  - Build-time intelligence (algorithmic matching) requires thoughtful architecture
  - Accessibility compliance demands careful component design
- **Content scale**: Designed for 13 articles (MVP) scaling to 158 articles (vision) without architecture changes
- **Estimated architectural components**:
  - 7-10 React components (FloatingMenu, ArticleCard, ArticleExpanded, CategoryBadge, ThemeToggle, PortfolioCard, FeaturedArticle)
  - 5 utility libraries (markdown parsing, article filtering, related article matching, theme management, FLIP animations)
  - 2 page routes (Homepage, Articles page)
  - Build-time processing pipeline (frontmatter parsing, relationship computation, sitemap generation)

### Technical Constraints & Dependencies

**Framework Constraints:**

- **Next.js Security Requirement (NON-NEGOTIABLE)**: Must use version ≥15.5.9 or ≥16.0.10
  - Addresses CVE-2025-55184 (HIGH): DoS vulnerability via infinite loop
  - Addresses CVE-2025-55183 (MEDIUM): Source code exposure via crafted requests
  - No workarounds available - upgrade mandatory before deployment
  - Exact version pinning required in package.json

**Deployment Constraints:**

- **Platform**: Vercel (Git-based continuous deployment from sunilviyer/suniliyer.git)
- **Production URL**: www.suniliyer.ca (existing site being transformed)
- **Deployment Process**: Simple Git push to main branch triggers Vercel auto-deploy
- **No CI/CD Pipeline**: Manual testing before deployment, no automated gates
- **Static Generation Only**: No server-side runtime features, pure SSG with client-side hydration

**Content Constraints:**

- **File-based CMS**: Markdown files with YAML frontmatter (no database, no headless CMS)
- **Local Asset Generation**: Stable Diffusion on M4 Mac Mini for illustrations (Growth phase - not MVP blocker)
- **Build-time Processing**: All relationships, SEO, sitemap computed during build (no runtime computation)

**Performance Constraints:**

- **Build Performance**: ≤3 minutes for full 158-article build (impacts development workflow)
- **Animation Performance**: 60fps requirement limits animation techniques to GPU-accelerated properties (transform, opacity only)
- **Bundle Size**: <200KB initial JS gzipped (limits library choices, requires code splitting)

**Accessibility Constraints:**

- **WCAG 2.1 AA Mandatory**: Not optional - portfolio quality depends on compliance
- **Target AAA for Contrast**: 7:1 ratio for body text (exceeds AA 4.5:1 requirement)
- **Progressive Enhancement**: Core reading must work without JavaScript

**Browser Support:**

- Modern browsers (last 2 major versions) for primary support
- Graceful degradation for older browsers back to Chrome 61+, Firefox 60+, Safari 11+
- No Internet Explorer support (Next.js/React 18+ incompatible)

### Cross-Cutting Concerns Identified

**1. State Management Architecture**

- **Expandable Article State**: Which article is currently expanded, previous scroll position, focus management
- **Theme State**: Dark/light mode preference persisted to localStorage
- **Menu State**: Collapsed/expanded, current page context (Homepage vs Articles)
- **Navigation State**: Current page, scroll position for smooth section navigation
- **Decision Required**: React Context sufficient vs external state library (Redux, Zustand)

**2. Animation & Performance**

- **FLIP Technique Implementation**: Card expansion requires First-Last-Invert-Play pattern for 60fps
- **Intersection Observer**: Scroll-triggered animations must use modern API (not scroll listeners)
- **GPU Acceleration**: Only transform and opacity properties (no layout-triggering animations)
- **Motion Accessibility**: Honor prefers-reduced-motion user preference
- **Decision Required**: Custom animation utilities vs animation library (Framer Motion, React Spring)

**3. Accessibility Infrastructure**

- **Focus Management**: Expanding card must move focus, collapsing must return focus to card
- **ARIA Live Regions**: State changes must announce to screen readers
- **Keyboard Navigation**: Tab order, shortcuts (Enter/Escape/Arrows), skip links
- **Semantic HTML**: Proper article/nav/main structure, heading hierarchy
- **Decision Required**: Manual ARIA implementation vs accessibility library (React ARIA, Reach UI)

**4. Content Processing Pipeline**

- **Frontmatter Parsing**: Extract metadata from all markdown files during build
- **Markdown Rendering**: Convert markdown to HTML with syntax highlighting
- **Related Article Algorithm**: Tag intersection + keyword similarity scoring (build-time)
- **Sitemap Generation**: Auto-generate sitemap.xml with article URLs and dates
- **SEO Metadata**: Populate meta tags, Open Graph, JSON-LD from frontmatter
- **Decision Required**: Custom build scripts vs static site framework features (Next.js built-ins, gray-matter, remark/rehype plugins)

**5. Theme Management**

- **Dual Theme System**: Dark mode (default) + light mode toggle
- **CSS Custom Properties**: Structural colors invert, category colors constant
- **Image Theming Strategy**: CSS filters for light mode (Growth phase) or dual image sets (fallback)
- **Persistence**: localStorage for preference, server-side default
- **Decision Required**: Manual theme switching vs theme library (next-themes)

**6. Image Optimization**

- **Next.js Image Component**: Automatic optimization, lazy loading, responsive srcsets
- **Generative Art Pipeline**: Stable Diffusion batch generation (Growth phase)
- **CSS Filter Strategy**: Dark-optimized images + brightness/contrast/hue filters for light mode
- **Fallback Plan**: Generate dual image sets if filter quality insufficient
- **Decision Required**: Filter implementation approach, quality testing methodology

**7. SEO & Discoverability**

- **Build-Time SEO**: Sitemap, meta tags, structured data all generated during build
- **Clean URLs**: Semantic paths (/articles/foundation-models, not /articles?id=123)
- **Canonical Tags**: Prevent duplicate content issues
- **Performance as SEO**: Core Web Vitals impact search rankings
- **Decision Required**: Manual SEO implementation vs Next.js SEO library (next-seo)

**8. Testing Strategy**

- **Performance Testing**: Manual Lighthouse audits in browser DevTools before deployment
- **Accessibility Testing**: Manual keyboard navigation and screen reader testing (VoiceOver/NVDA)
- **Cross-Browser Testing**: Manual testing on Chrome, Firefox, Safari (desktop + mobile)
- **Visual QA**: Manual review of article rendering, theme switching, responsive layouts
- **No Automated Testing Infrastructure**: Keeps architecture simple, reduces build complexity
- **Decision Required**: Testing checklist/process documentation for manual QA workflow

## Starter Template Evaluation

### Primary Technology Domain

**Full-stack web application** with static site generation (SSG), based on project requirements analysis. AIDefence is a content-focused platform with build-time intelligence and client-side interactivity, deployed to Vercel's edge network.

### Technical Stack Pre-Decisions

From PRD and UX specification analysis, the following technical decisions are already established:

- **Framework**: Next.js 14+ with App Router (security: ≥15.5.9 or ≥16.0.10 mandatory)
- **UI Library**: React 18+
- **Styling**: Custom CSS + Tailwind CSS (hybrid approach with design tokens)
- **Content Management**: Markdown + Gray Matter (YAML frontmatter parsing)
- **Enhanced Markdown**: MDX for React component embedding
- **Syntax Highlighting**: Prism.js with custom earth-tone theme
- **State Management**: React Context + localStorage (no external library)
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel (Git-based continuous deployment)
- **Build Strategy**: Static Site Generation (SSG) - no server-side runtime

### Starter Options Considered

**1. Official `create-next-app` (RECOMMENDED)**
- **Source**: Vercel official CLI
- **Maintenance**: Active (Vercel team)
- **What it provides**: TypeScript, Tailwind CSS, ESLint, App Router, Turbopack
- **Pros**: Simple, focused, no bloat, Vercel-optimized, easy to customize
- **Cons**: Minimal - requires adding content processing libraries manually

**2. Next.js Boilerplate (ixartz/Next-js-Boilerplate)**
- **Source**: Community (comprehensive production template)
- **What it provides**: TypeScript, Tailwind, ESLint, Prettier, Drizzle ORM, Husky, Vitest, Playwright, Storybook, Commitlint
- **Pros**: Production-ready tooling, comprehensive setup
- **Cons**: Includes database/auth/testing infrastructure not needed for AIDefence, requires removing features

**3. Production-Ready Boilerplate (Medium guide approach)**
- **What it provides**: TypeScript, Tailwind CSS 4, Turbopack, ESLint, Prettier, Lint-staged, Husky
- **Pros**: Automated code quality enforcement
- **Cons**: Git hooks and automated testing don't align with manual testing approach

### Selected Starter: `create-next-app` (Official Next.js CLI)

**Rationale for Selection:**

1. **Alignment with Project Constraints**: Manual testing approach doesn't benefit from automated testing infrastructure (Vitest, Playwright) that other starters provide
2. **Simplicity Over Complexity**: AIDefence doesn't need database (Drizzle), authentication (Next-auth), or payment processing (Stripe) - starting clean avoids removal work
3. **Security Compliance**: Can specify exact Next.js version (≥15.5.9) during initialization to address CVE-2025-55184 and CVE-2025-55183
4. **Vercel Optimization**: Official template ensures best deployment experience on target platform
5. **Customization Flexibility**: Clean foundation makes it easier to add specific libraries (gray-matter, MDX, Prism.js) without conflicts
6. **Maintenance Trust**: Vercel-maintained ensures compatibility with Next.js updates and security patches

**Initialization Command:**

```bash
npx create-next-app@latest aidefence --typescript --tailwind --app --turbopack --eslint --import-alias "@/*"
```

**Command Options Explained:**
- `@latest`: Uses latest stable create-next-app (ensures we can specify Next.js 15.5.9+)
- `--typescript`: Enables TypeScript support (optional but recommended in PRD)
- `--tailwind`: Includes Tailwind CSS configuration (required per UX spec)
- `--app`: Uses App Router (required per PRD architecture)
- `--turbopack`: Enables Turbopack for faster development builds
- `--eslint`: Includes ESLint configuration for code quality
- `--import-alias "@/*"`: Sets up path aliases for clean imports

**Post-Initialization Steps:**

After running create-next-app, manually install content processing dependencies:

```bash
npm install gray-matter remark remark-html remark-prism next-mdx-remote
npm install --save-dev @types/node
```

Then update `package.json` to pin Next.js version:

```json
{
  "dependencies": {
    "next": "15.5.9"
  }
}
```

### Architectural Decisions Provided by Starter

**Language & Runtime:**
- **TypeScript**: Configured with `tsconfig.json` (strict mode enabled)
- **Node.js**: Minimum version 20.9 required
- **React**: Latest compatible version with Next.js 15+
- **Path Aliases**: `@/*` mapped to project root for clean imports

**Styling Solution:**
- **Tailwind CSS**: Configured with `tailwind.config.ts`
- **PostCSS**: Automatic processing for CSS custom properties
- **Global Styles**: `app/globals.css` for base styles and Tailwind directives
- **CSS Modules**: Supported for component-scoped styles (won't use, but available)

**Build Tooling:**
- **Turbopack**: Development server bundler (faster than Webpack)
- **Next.js Compiler**: Rust-based SWC compiler for production builds
- **App Router**: File-based routing with `app/` directory
- **Static Export**: Configured for SSG via `output: 'export'` in next.config.js

**Code Quality:**
- **ESLint**: Configured with `next/core-web-vitals` and `next/typescript` rules
- **Prettier**: Not included - add manually if desired (simple setup: `npm install --save-dev prettier`)
- **Git Integration**: `.gitignore` configured for Next.js artifacts

**Project Structure:**
```
aidefence/
├── app/                      # App Router pages and layouts
│   ├── layout.tsx           # Root layout (theme provider, global nav)
│   ├── page.tsx             # Homepage
│   ├── articles/
│   │   └── page.tsx         # Articles grid page
│   └── globals.css          # Global styles + Tailwind directives
├── components/              # React components (manually created)
│   ├── FloatingMenu.tsx
│   ├── ArticleCard.tsx
│   └── ...
├── lib/                     # Utility functions (manually created)
│   ├── markdown.ts
│   ├── articles.ts
│   └── ...
├── content/                 # Markdown articles (manually created)
│   └── articles/
│       └── *.md
├── public/                  # Static assets
│   ├── images/
│   └── sitemap.xml         # Auto-generated
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

**Development Experience:**
- **Hot Reload**: Automatic with Turbopack development server
- **TypeScript**: IntelliSense and type checking in editors
- **Debugging**: Source maps enabled for development
- **Error Overlay**: Helpful error messages during development
- **Port Configuration**: Default `localhost:3000` (customizable)

**What the Starter Does NOT Provide (Manual Implementation Required):**

- Content processing pipeline (gray-matter, MDX, remark plugins)
- Build-time article relationship computation
- Sitemap generation logic
- SEO metadata population from frontmatter
- FLIP animation utilities
- Theme switching logic (React Context + localStorage)
- Accessibility infrastructure (ARIA live regions, focus management)
- Custom design tokens (CSS custom properties for earth-tone palette)

**Note:** Project initialization using this command should be the first implementation step. The starter provides a clean foundation requiring ~10-15 additional dependencies for content processing, animations, and accessibility features specific to AIDefence's requirements.

## Core Architectural Decisions

### Decision Summary

**Critical Decisions Made:**

1. **Animation Implementation**: Custom FLIP utilities
2. **Accessibility Infrastructure**: Radix UI Primitives (Dialog primitive)
3. **Content Processing**: next-mdx-remote + rehype-prism
4. **Theme Management**: next-themes library
5. **SEO Management**: Next.js Metadata API + custom sitemap script
6. **Related Article Algorithm**: Custom algorithm with string-similarity

**Already Decided (From PRD/UX Spec/Starter):**

- Framework: Next.js 15.5.9+ with App Router
- UI Library: React 18+
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS + Custom CSS (design tokens)
- State Management: React Context + localStorage
- Image Optimization: Next.js Image component
- Build: Static Site Generation (SSG)
- Deployment: Vercel
- Testing: Manual (no CI/CD pipeline)

### Animation & Performance

**Decision**: Custom FLIP utilities for expandable card animations

**Implementation Approach**:
- Create `lib/animations.ts` with FLIP helper functions
- Pattern: First (measure start), Last (measure end), Invert (calculate difference), Play (animate transform)
- GPU-accelerated properties only (transform, opacity)
- Honor `prefers-reduced-motion` user preference
- Target 60fps (16ms frame time)

**Code Structure**:
```typescript
// lib/animations.ts
export function useFLIP(element: HTMLElement) {
  // FLIP implementation for card expansion
  // Returns: { expand(), collapse() }
}
```

**Rationale**: Focused animation needs (card expansion only), tight bundle budget (<200 KB total), engineering capability to implement FLIP pattern directly

**Affects**: ArticleCard component, ArticleExpanded component

**Bundle Impact**: ~0 KB (custom code)

### Accessibility Infrastructure

**Decision**: Radix UI Primitives (specifically Dialog primitive)

**Implementation Approach**:
- Use `@radix-ui/react-dialog` for expandable article modal pattern
- Provides: Focus trap, ARIA attributes, keyboard navigation (Escape to close), focus restoration
- Headless/unstyled - full control over visual design
- Additional manual ARIA: Live regions for state announcements, skip links

**Dependencies**:
```bash
npm install @radix-ui/react-dialog
```

**Version**: @radix-ui/react-dialog@1.x (latest stable)

**Code Structure**:
```typescript
// components/ArticleExpanded.tsx
import * as Dialog from '@radix-ui/react-dialog';
// Dialog.Root, Dialog.Portal, Dialog.Overlay, Dialog.Content
```

**Rationale**: Guaranteed WCAG compliance patterns, reasonable bundle cost (~15-20 KB), headless/unstyled fits custom earth-tone design system

**Affects**: ArticleExpanded component, keyboard navigation implementation

**Bundle Impact**: ~15-20 KB gzipped

### Content Processing Pipeline

**Decision**: next-mdx-remote + rehype-prism for markdown processing and syntax highlighting

**Implementation Approach**:
- Use `next-mdx-remote` for MDX compilation with frontmatter support
- Use `rehype-prism` plugin for Prism.js syntax highlighting
- Process markdown files at build time in `lib/markdown.ts`
- Custom Prism theme (earth-tone palette) in `app/globals.css`

**Dependencies**:
```bash
npm install next-mdx-remote gray-matter
npm install rehype-prism prismjs
npm install --save-dev @types/prismjs
```

**Versions**:
- next-mdx-remote@5.x
- gray-matter@4.x (included with next-mdx-remote)
- rehype-prism@latest

**Code Structure**:
```typescript
// lib/markdown.ts
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism';

export async function processMarkdown(content: string) {
  const mdxSource = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypePrism] }
  });
  return mdxSource;
}
```

**Rationale**: Next.js optimized, MDX support for React components in markdown, includes frontmatter parsing, rehype plugins for Prism.js syntax highlighting with earth-tone theme

**Affects**: Build-time article processing, syntax highlighting, React component support in markdown

**Bundle Impact**: ~10-15 KB gzipped

### Theme Management

**Decision**: next-themes library for dark/light mode switching

**Implementation Approach**:
- Wrap app with `ThemeProvider` in root layout
- Use `useTheme()` hook in components for theme toggle
- CSS custom properties defined in `app/globals.css` with `[data-theme="light"]` selector
- Prevents flash of unstyled content (FOUC) on page load
- Persists preference to localStorage automatically

**Dependencies**:
```bash
npm install next-themes
```

**Version**: next-themes@0.3.x

**Code Structure**:
```typescript
// app/layout.tsx
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**CSS Custom Properties**:
```css
/* app/globals.css */
:root {
  --color-background: #333d29; /* Dark mode default */
  /* ... other dark mode colors */
}

[data-theme="light"] {
  --color-background: #F5F5DC; /* Light mode override */
  /* ... other light mode colors */
}
```

**Rationale**: Prevents FOUC, handles SSR hydration correctly, localStorage persistence built-in, Next.js optimized, minimal bundle cost (~2 KB)

**Affects**: Root layout, ThemeToggle component, all styled components

**Bundle Impact**: ~2 KB gzipped

### SEO & Discoverability

**Decision**: Next.js built-in Metadata API + custom sitemap generation script

**Implementation Approach**:
- Use Next.js App Router `generateMetadata()` function in pages
- Export metadata from frontmatter (title, description, Open Graph, JSON-LD)
- Custom Node.js script (`scripts/generate-sitemap.js`) runs during build
- Sitemap outputs to `public/sitemap.xml`

**No Additional Dependencies** (built into Next.js 13+)

**Code Structure**:

```typescript
// app/articles/[slug]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const article = await getArticle(params.slug);

  return {
    title: article.title,
    description: article.meta_description,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: [article.image_url],
    },
  };
}
```

**Sitemap Generation**:
```javascript
// scripts/generate-sitemap.js
const fs = require('fs');
const matter = require('gray-matter');

// Read all markdown files
// Extract slug, date from frontmatter
// Generate sitemap.xml
// Write to public/sitemap.xml
```

**Build Integration**:
```json
// package.json
{
  "scripts": {
    "build": "node scripts/generate-sitemap.js && next build"
  }
}
```

**Rationale**: No dependencies, type-safe metadata export, built into Next.js App Router, custom sitemap script simple Node.js implementation

**Affects**: All article pages, sitemap generation, SEO metadata

**Bundle Impact**: ~0 KB (built-in feature)

### Related Article Algorithm

**Decision**: Custom algorithm with string-similarity library for keyword comparison

**Implementation Approach**:
- Build-time computation (pre-compute during article processing)
- Scoring algorithm: Tag intersection (3 pts exact, 1 pt partial) + keyword similarity (2 pts) + same category (1 pt)
- Use `string-similarity` library for keyword matching in `related_context` field
- Return top 5 related articles by score
- Store in article metadata during build

**Dependencies** (build-time only, not shipped to client):
```bash
npm install --save-dev string-similarity
```

**Version**: string-similarity@4.x

**Code Structure**:
```typescript
// lib/related.ts
import stringSimilarity from 'string-similarity';

export function computeRelatedArticles(currentArticle, allArticles) {
  const scores = allArticles.map(article => {
    let score = 0;

    // Tag intersection
    const commonTags = intersection(currentArticle.tags, article.tags);
    score += commonTags.length * 3;

    // Keyword similarity in related_context
    const similarity = stringSimilarity.compareTwoStrings(
      currentArticle.related_context,
      article.related_context
    );
    score += similarity * 2;

    // Same category bonus
    if (currentArticle.category === article.category) score += 1;

    return { article, score };
  });

  return scores
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(s => s.article);
}
```

**Execution**: Runs during build in `lib/articles.ts` when processing all markdown files

**Rationale**: Better keyword matching than manual implementation, lightweight library (~2 KB), build-time only (not shipped to client), simple scoring algorithm tailored to AIDefence needs

**Affects**: Article metadata structure, related articles display

**Bundle Impact**: ~0 KB (build-time dependency, not shipped to client)

### Decision Impact Analysis

**Implementation Sequence** (ordered by dependency):

1. **Project Initialization**: Run `create-next-app` command (from step 3)
2. **Install Dependencies**: Install all libraries (next-mdx-remote, next-themes, Radix Dialog, string-similarity)
3. **Pin Next.js Version**: Update package.json to exact version 15.5.9
4. **Design Tokens**: Set up CSS custom properties in `app/globals.css` (earth-tone palette)
5. **Theme Provider**: Wrap app with next-themes ThemeProvider in root layout
6. **Markdown Processing**: Build `lib/markdown.ts` for MDX compilation with Prism
7. **Related Article Algorithm**: Build `lib/related.ts` for similarity scoring
8. **Sitemap Script**: Create `scripts/generate-sitemap.js` and integrate into build
9. **Animation Utilities**: Create `lib/animations.ts` with custom FLIP functions
10. **Component Development**: Build components (FloatingMenu, ArticleCard, ArticleExpanded using Radix Dialog)

**Cross-Component Dependencies**:

- **Theme Management** affects all components (colors, dark/light mode)
- **Markdown Processing** feeds Article components (content rendering)
- **Related Article Algorithm** affects ArticleExpanded component (suggestions display)
- **Animation Utilities** used by ArticleCard and ArticleExpanded (FLIP transitions)
- **Radix Dialog** provides accessibility foundation for ArticleExpanded
- **Sitemap Generation** depends on markdown processing (needs all article metadata)

**Total Additional Dependencies**:
- **Runtime** (shipped to client): next-mdx-remote, next-themes, @radix-ui/react-dialog, rehype-prism, prismjs
- **Build-time** (not shipped): string-similarity, gray-matter (already needed for sitemap)
- **Estimated Bundle Impact**: ~27-35 KB gzipped total (well under 200 KB budget)

## Implementation Patterns & Consistency Rules

### Critical Conflict Points Identified

**9 primary decision points** where AI agents could make incompatible choices without explicit patterns. These patterns ensure all agents write code that works together seamlessly.

### Naming Patterns

**File Naming Conventions:**

- **Components**: PascalCase
  - ✅ `ArticleCard.tsx`, `FloatingMenu.tsx`, `ThemeToggle.tsx`
  - ❌ `article-card.tsx`, `Article-card.tsx`

- **Utilities/Libraries**: kebab-case
  - ✅ `markdown-parser.ts`, `article-utils.ts`, `related-articles.ts`
  - ❌ `MarkdownParser.ts`, `article_utils.ts`

- **Pages**: kebab-case (Next.js convention)
  - ✅ `page.tsx`, `layout.tsx`
  - ❌ `Page.tsx`, `Layout.tsx`

**CSS Custom Properties:**

- **Format**: `--{category}-{property}-{variant}`
- **Naming**: kebab-case with dashes for hierarchy
  - ✅ `--color-background`, `--color-text-primary`, `--color-cat-ai-fundamentals`
  - ✅ `--space-lg`, `--space-xl`
  - ❌ `--colorBackground`, `--bg_color`, `--color_cat_ai`

**Frontmatter Schema (CRITICAL - Single Source of Truth):**

- **Field naming**: snake_case
- **Required fields**:
  ```yaml
  title: "Article Title"
  category: "AI Fundamentals"  # Must match one of 11 categories exactly
  tags: ["llm", "transformer", "neural-networks"]
  date: "2025-12-12"  # YYYY-MM-DD format
  reading_time: 5  # Integer minutes
  ```

- **Optional SEO fields**:
  ```yaml
  meta_description: "SEO description for search engines"
  seo_title: "Custom SEO title if different from title"
  related_context: "keywords for algorithmic matching"
  video_url: "https://youtube.com/watch?v=..."
  ```

- **Anti-patterns**:
  - ❌ `metaDescription`, `readingTime`, `createdDate` (camelCase)
  - ❌ `meta-description`, `reading-time` (kebab-case)

**TypeScript Naming:**

- **Interfaces**: No prefix, PascalCase
  ```typescript
  interface Article {
    title: string;
    slug: string;
    category: string;
  }

  interface ArticleMetadata { ... }
  interface ThemeContextValue { ... }
  ```
  - ❌ `IArticle`, `ArticleInterface`, `TArticle`

- **Type aliases**: Use for unions, primitives, mapped types
  ```typescript
  type Theme = 'dark' | 'light';
  type CategoryColor = string;
  ```

**Function Naming:**

- **Pattern**: Verb-noun with context
  ```typescript
  // ✅ Good
  function getAllArticles(): Article[]
  function getArticleBySlug(slug: string): Article
  function computeRelatedArticles(article: Article): Article[]
  function parseMarkdownContent(content: string): MDXSource

  // ✅ Boolean functions
  function isArticleExpanded(slug: string): boolean
  function hasRelatedArticles(article: Article): boolean

  // ❌ Avoid
  function articles()  // Missing verb
  function get(slug: string)  // Missing noun
  function getAllArticlesFromFilesystem()  // Too verbose
  ```

**Category Values (EXACT MATCH REQUIRED):**

Must match these 11 categories exactly (Title Case):
```typescript
const VALID_CATEGORIES = [
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
  "Videos"
] as const;
```

**Article Slug Generation:**

- **Format**: Lowercase kebab-case derived from title
- **Rules**:
  - Convert to lowercase
  - Replace spaces with hyphens
  - Remove special characters except hyphens
  - No consecutive hyphens
  ```typescript
  // Examples
  "Large Language Models" → "large-language-models"
  "EU AI Act: Overview" → "eu-ai-act-overview"
  "Risk & Governance" → "risk-governance"
  ```

**Theme Values:**

- **Format**: Simple string union `'dark' | 'light'`
- **Matches**: next-themes library convention
  ```typescript
  const { theme, setTheme } = useTheme();
  setTheme('dark');  // ✅
  setTheme('light'); // ✅
  setTheme('theme-dark'); // ❌
  ```

### Structure Patterns

**Project Organization (Feature-Based):**

```
aidefence/
├── app/
│   ├── layout.tsx                 # Root layout with ThemeProvider
│   ├── page.tsx                   # Homepage
│   ├── articles/
│   │   ├── page.tsx              # Articles grid page
│   │   └── [slug]/
│   │       └── page.tsx          # Individual article page
│   └── globals.css               # Design tokens + Tailwind
├── components/
│   ├── articles/
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleExpanded.tsx
│   │   └── CategoryBadge.tsx
│   ├── navigation/
│   │   └── FloatingMenu.tsx
│   ├── theme/
│   │   └── ThemeToggle.tsx
│   └── portfolio/
│       ├── PortfolioCard.tsx
│       └── FeaturedArticle.tsx
├── lib/
│   ├── markdown-parser.ts         # MDX processing with rehype-prism
│   ├── article-utils.ts           # Article CRUD operations
│   ├── related-articles.ts        # Similarity algorithm
│   ├── animations.ts              # Custom FLIP utilities
│   └── theme.ts                   # Theme helper functions
├── content/
│   └── articles/
│       └── *.md                   # Markdown articles with frontmatter
├── scripts/
│   └── generate-sitemap.js        # Build-time sitemap generation
├── public/
│   ├── images/
│   │   └── articles/              # Generated article images
│   └── sitemap.xml                # Auto-generated
└── types/
    └── article.ts                 # Shared TypeScript interfaces
```

**File Co-location Rules:**

- **Types**: Shared types in `/types`, component-specific types co-located
- **Tests**: Not implemented (manual testing approach)
- **Styles**: Global in `app/globals.css`, component styles inline with Tailwind
- **Constants**: In same file if single-use, `/lib/constants.ts` if shared

### Format Patterns

**Date Formats:**

- **Frontmatter**: `YYYY-MM-DD` format (human-readable)
  ```yaml
  date: "2025-12-12"
  ```

- **Parsing**: Add timezone to prevent shifts
  ```typescript
  const articleDate = new Date(article.date + 'T00:00:00');
  ```

- **Display**: Use `toLocaleDateString()` or custom formatting
  ```typescript
  const displayDate = new Date(article.date + 'T00:00:00')
    .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  // "December 12, 2025"
  ```

**Article Metadata Structure:**

```typescript
interface Article {
  // Required fields (from frontmatter)
  title: string;
  slug: string;  // Derived from filename
  category: typeof VALID_CATEGORIES[number];
  tags: string[];
  date: string;  // YYYY-MM-DD format
  reading_time: number;  // Integer minutes

  // Optional SEO fields
  meta_description?: string;
  seo_title?: string;
  related_context?: string;
  video_url?: string;

  // Computed at build time
  related_articles: string[];  // Array of slugs
  content: MDXRemoteSerializeResult;  // Compiled MDX
}
```

**Related Articles Format:**

- **Storage**: Array of slugs (computed at build time)
  ```typescript
  related_articles: ["large-language-models", "transformer-architecture", "attention-mechanism"]
  ```

- **Display**: Fetch full article objects when rendering
  ```typescript
  const relatedArticles = article.related_articles.map(slug => getArticleBySlug(slug));
  ```

### Process Patterns

**Error Handling Strategy:**

- **Build-time errors**: Throw and fail build
  ```typescript
  export async function getArticleBySlug(slug: string): Promise<Article> {
    const filePath = path.join(articlesDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Article not found: ${slug}`);  // Fails build
    }
    // ... parse article
  }
  ```

- **Runtime errors**: Use Next.js Error Boundary
  ```typescript
  // app/error.tsx
  'use client'

  export default function Error({ error, reset }: {
    error: Error;
    reset: () => void;
  }) {
    return (
      <div>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </div>
    );
  }
  ```

- **Logging**: `console.error()` for debugging, user-facing messages in UI
  ```typescript
  try {
    await processMarkdown(content);
  } catch (error) {
    console.error('Markdown processing failed:', error);
    throw new Error('Failed to process article content');  // User-facing message
  }
  ```

**Animation Timing (From UX Spec):**

- **Card expansion**: 250ms with `cubic-bezier(0.4, 0.0, 0.2, 1)`
- **Card collapse**: 150ms (faster exit)
- **Hover effects**: 150ms
- **Menu expansion**: 250ms slide-down
- **GPU properties only**: `transform`, `opacity` (never `width`, `height`, `margin`)
- **Respect user preferences**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

**ARIA Label Patterns:**

- **Article cards**: Include category, title, reading time
  ```tsx
  <article aria-label={`${article.category}: ${article.title}, ${article.reading_time} minute read`}>
  ```

- **Expandable articles**: Use Radix Dialog ARIA
  ```tsx
  <Dialog.Root>
    <Dialog.Trigger aria-label={`Read full article: ${article.title}`} />
    <Dialog.Content aria-describedby="article-content">
  ```

- **Floating menu**: State in label
  ```tsx
  <button
    aria-label={menuOpen ? "Close menu" : "Open menu"}
    aria-expanded={menuOpen}
  >
  ```

### Enforcement Guidelines

**All AI Agents MUST:**

1. **Follow exact naming conventions** for files, functions, CSS variables, and frontmatter fields
2. **Use feature-based component organization** (`/components/articles/`, not flat `/components/`)
3. **Throw errors from utilities** instead of silent failures or console-only logging
4. **Match exact category names** from the 11 defined categories (Title Case)
5. **Generate slugs consistently** using lowercase kebab-case from titles
6. **Use `YYYY-MM-DD`** date format in all frontmatter files
7. **Honor animation timing** from UX spec (250ms expand, 150ms collapse)
8. **Implement ARIA labels** with descriptive context (category + title + reading time)
9. **Use Radix Dialog** for ArticleExpanded component (not custom modal)
10. **Process markdown with next-mdx-remote** + rehype-prism (not alternative libraries)

**Pattern Violations:**

- **Detection**: Code review during story implementation
- **Resolution**: Immediate correction before story completion
- **Prevention**: Reference this architecture document when starting new stories

**Pattern Updates:**

- **Process**: Discuss pattern change, update architecture document, notify all agents
- **Versioning**: Architecture document tracks pattern evolution in frontmatter
- **Communication**: Pattern changes documented in git commit messages

### Pattern Examples

**Good Examples:**

```typescript
// ✅ File naming
components/articles/ArticleCard.tsx
lib/markdown-parser.ts
types/article.ts

// ✅ Frontmatter
---
title: "Large Language Models Explained"
category: "AI Fundamentals"
tags: ["llm", "transformer", "neural-networks"]
date: "2025-12-12"
reading_time: 8
meta_description: "A comprehensive guide to LLMs"
---

// ✅ Function naming
function getAllArticles(): Article[] { ... }
function getArticleBySlug(slug: string): Article { ... }
function computeRelatedArticles(article: Article): Article[] { ... }

// ✅ TypeScript interfaces
interface Article {
  title: string;
  slug: string;
  category: string;
}

// ✅ CSS custom properties
:root {
  --color-background: #333d29;
  --color-text-primary: #F5F5DC;
  --space-lg: 64px;
}

// ✅ Error handling
export async function getArticleBySlug(slug: string): Promise<Article> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Article not found: ${slug}`);
  }
  return article;
}

// ✅ ARIA labels
<article aria-label="AI Fundamentals: Large Language Models, 8 minute read">
```

**Anti-Patterns (AVOID):**

```typescript
// ❌ Wrong file naming
components/article-card.tsx  // Should be ArticleCard.tsx
lib/MarkdownParser.ts  // Should be markdown-parser.ts

// ❌ Wrong frontmatter
---
title: "Article"
category: "ai-fundamentals"  // Should be "AI Fundamentals" (Title Case)
createdDate: "2025-12-12"  // Should be "date"
readingTime: 8  // Should be "reading_time"
---

// ❌ Wrong function naming
function articles() { ... }  // Missing verb
function get(slug) { ... }  // Missing noun
function getAllArticlesFromMarkdownFiles() { ... }  // Too verbose

// ❌ Wrong TypeScript
interface IArticle { ... }  // No I prefix
interface ArticleInterface { ... }  // No "Interface" suffix

// ❌ Wrong CSS
--colorBackground  // Should be --color-background
--bg_color  // Should be --color-background

// ❌ Wrong error handling
try {
  const article = getArticle(slug);
} catch (e) {
  console.error(e);  // Silent failure, no throw
  return null;
}

// ❌ Wrong ARIA
<article aria-label="Article">  // Missing category, title, reading time
```

## Project Structure & Boundaries

### Complete Project Directory Structure

```
aidefence/
├── README.md                          # Project documentation
├── package.json                       # Dependencies and scripts
├── package-lock.json                  # Locked dependencies
├── next.config.js                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind CSS configuration
├── tsconfig.json                      # TypeScript configuration
├── .env.local                         # Local environment variables (git-ignored)
├── .env.example                       # Environment variable template
├── .gitignore                         # Git ignore patterns
├── .eslintrc.json                     # ESLint configuration
│
├── app/                               # Next.js App Router
│   ├── layout.tsx                     # Root layout (ThemeProvider, FloatingMenu)
│   ├── page.tsx                       # Homepage (About Sunil)
│   ├── globals.css                    # Design tokens + Tailwind + Prism theme
│   ├── error.tsx                      # Error boundary
│   ├── not-found.tsx                  # 404 page
│   │
│   └── articles/                      # Articles section
│       ├── page.tsx                   # Articles grid page
│       └── [slug]/                    # Dynamic article routes
│           └── page.tsx               # Individual article page (generateMetadata)
│
├── components/                        # React components (feature-based)
│   ├── articles/
│   │   ├── ArticleCard.tsx           # Grid card component
│   │   ├── ArticleExpanded.tsx       # Inline expanded article (Radix Dialog)
│   │   └── CategoryBadge.tsx         # Smart contrast badge
│   │
│   ├── navigation/
│   │   └── FloatingMenu.tsx          # Context-aware floating menu
│   │
│   ├── theme/
│   │   └── ThemeToggle.tsx           # Dark/light mode toggle
│   │
│   └── portfolio/
│       ├── PortfolioCard.tsx         # Homepage portfolio projects
│       └── FeaturedArticle.tsx       # Homepage featured article cards
│
├── lib/                               # Utility functions
│   ├── markdown-parser.ts             # next-mdx-remote + rehype-prism
│   ├── article-utils.ts               # CRUD operations (getAllArticles, getArticleBySlug)
│   ├── related-articles.ts            # Similarity algorithm (string-similarity)
│   ├── animations.ts                  # Custom FLIP utilities
│   ├── theme.ts                       # Theme helper functions
│   └── constants.ts                   # VALID_CATEGORIES array
│
├── types/                             # TypeScript interfaces
│   └── article.ts                     # Article, ArticleMetadata interfaces
│
├── content/                           # Markdown content
│   └── articles/
│       ├── large-language-models.md   # Example article with frontmatter
│       ├── eu-ai-act-overview.md
│       └── *.md                       # All markdown articles
│
├── scripts/                           # Build-time scripts
│   └── generate-sitemap.js            # Sitemap generation (Node.js)
│
├── public/                            # Static assets
│   ├── images/
│   │   └── articles/                  # Generated article images (Stable Diffusion)
│   │       └── *.png
│   ├── sitemap.xml                    # Auto-generated sitemap
│   └── robots.txt                     # SEO robots file
│
└── docs/                              # Project documentation
    ├── prd.md                         # Product Requirements Document
    ├── ux-design-specification.md     # UX Design Specification
    ├── architecture.md                # This architecture document
    ├── wireframe-complete.html        # Interactive wireframe
    ├── ux-color-mockup.html          # Color system mockup
    └── bmm-workflow-status.yaml       # BMM workflow tracking
```

### Architectural Boundaries

**No API Boundaries** (Static site - no backend APIs)
- All data processing happens at build time
- No runtime API calls (except potential external YouTube embed for videos)

**Component Boundaries:**

- **Page Components** (`app/`) → **Feature Components** (`components/`) → **Utility Functions** (`lib/`)
- **One-way data flow**: Page components fetch data using lib utilities, pass to feature components
- **State isolation**: Each component manages its own local state, theme state shared via React Context
- **No prop drilling**: Use React Context for theme, floating menu state kept in layout

**Build-Time Boundaries:**

- **Content Processing** (`scripts/` + `lib/markdown-parser.ts`) runs during `npm run build`
- **Frontmatter → Article Metadata**: `gray-matter` parses YAML, `lib/related-articles.ts` computes relationships
- **Sitemap Generation**: `scripts/generate-sitemap.js` runs before `next build`

### Requirements to Structure Mapping

**Homepage Features (About Sunil):**
- `/app/page.tsx` - Hero, Resume, Portfolio, Featured Articles sections
- `/components/portfolio/PortfolioCard.tsx` - Project cards
- `/components/portfolio/FeaturedArticle.tsx` - Article preview cards

**Articles Page Features:**
- `/app/articles/page.tsx` - Masonry grid, category filtering
- `/components/articles/ArticleCard.tsx` - Card with image, category badge, metadata
- `/components/articles/ArticleExpanded.tsx` - Inline reading with Radix Dialog
- `/lib/animations.ts` - FLIP expansion animation

**Individual Article Features:**
- `/app/articles/[slug]/page.tsx` - Server component fetching article data
- `generateMetadata()` - SEO meta tags, Open Graph, from frontmatter
- `next-mdx-remote` - Markdown rendering with React components

**Cross-Cutting Concerns:**

**Theme Management:**
- `/app/layout.tsx` - ThemeProvider wrapper (next-themes)
- `/components/theme/ThemeToggle.tsx` - Toggle component
- `/app/globals.css` - CSS custom properties for dark/light modes

**Navigation:**
- `/components/navigation/FloatingMenu.tsx` - Used in root layout, appears on all pages
- Context-aware: Different menu items for Homepage vs Articles page

**Content Processing Pipeline:**
- `/lib/markdown-parser.ts` - MDX compilation
- `/lib/article-utils.ts` - File reading, frontmatter extraction, article object construction
- `/lib/related-articles.ts` - Tag intersection + keyword similarity scoring

**SEO & Discoverability:**
- `/app/articles/[slug]/page.tsx` - `generateMetadata()` export
- `/scripts/generate-sitemap.js` - Scans `/content/articles/`, generates sitemap.xml
- `/public/sitemap.xml` - Output file
- `/public/robots.txt` - Search engine directives

### Integration Points

**Internal Communication:**

1. **Build-Time Data Flow:**
   ```
   /content/articles/*.md
   → lib/article-utils.ts (getAllArticles)
   → lib/related-articles.ts (computeRelatedArticles)
   → Article objects with computed relationships
   → Page components (app/articles/page.tsx, app/articles/[slug]/page.tsx)
   ```

2. **Component Communication:**
   ```
   app/articles/page.tsx (fetches all articles)
   → components/articles/ArticleCard.tsx (receives article props)
   → User clicks card
   → components/articles/ArticleExpanded.tsx (renders with Radix Dialog)
   ```

3. **Theme Communication:**
   ```
   app/layout.tsx (ThemeProvider)
   → All components use useTheme() hook
   → components/theme/ThemeToggle.tsx (setTheme)
   → CSS custom properties update ([data-theme="light"])
   ```

**External Integrations:**

- **Vercel Deployment**: Git push → automatic build → deploy
- **YouTube Embeds** (optional, Growth phase): iframe embeds for articles with `video_url` frontmatter
- **Stable Diffusion** (Growth phase): Local M4 Mac Mini generation → `/public/images/articles/`

**Data Flow:**

```
┌─────────────────────────────────────┐
│ Markdown Files (content/articles/)  │
└──────────────┬──────────────────────┘
               │ Build Time
               ↓
┌─────────────────────────────────────┐
│ lib/markdown-parser.ts              │
│ - Parse frontmatter (gray-matter)   │
│ - Compile MDX (next-mdx-remote)     │
│ - Syntax highlight (rehype-prism)   │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│ lib/article-utils.ts                │
│ - getAllArticles()                  │
│ - getArticleBySlug(slug)            │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│ lib/related-articles.ts             │
│ - computeRelatedArticles()          │
│ - Tag intersection scoring          │
│ - Keyword similarity (string-sim)   │
└──────────────┬──────────────────────┘
               │
               ↓
┌─────────────────────────────────────┐
│ Article Objects (with relationships) │
└──────────────┬──────────────────────┘
               │ Runtime
               ↓
┌─────────────────────────────────────┐
│ Page Components (app/)              │
│ - Fetch articles server-side        │
│ - Pass to client components         │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│ Feature Components (components/)    │
│ - Render UI                         │
│ - Handle user interactions          │
└─────────────────────────────────────┘
```

### File Organization Patterns

**Configuration Files (Root):**
- **package.json**: Dependencies, build scripts (`"build": "node scripts/generate-sitemap.js && next build"`)
- **next.config.js**: Output export for SSG, image domains, redirects
- **tailwind.config.ts**: Content paths, theme extensions (if needed)
- **tsconfig.json**: Strict mode, path aliases (`@/*`)
- **.env.example**: Template for environment variables (none needed for MVP)

**Source Organization:**
- **app/**: Next.js pages (Server Components by default)
- **components/**: Client Components (feature-based organization)
- **lib/**: Pure functions, no React (can be used in Server Components)
- **types/**: Shared TypeScript interfaces
- **content/**: Static markdown files (not in src, accessed via filesystem)

**Asset Organization:**
- **public/images/articles/**: Article hero images (Stable Diffusion generated, Growth phase)
- **public/sitemap.xml**: Auto-generated sitemap
- **public/robots.txt**: Manual file, committed to git

**No Test Organization:**
- Manual testing approach (no test files or test infrastructure)

### Development Workflow Integration

**Development Server:**
```bash
npm run dev
# Turbopack dev server on localhost:3000
# Hot reload for all file changes
# No build-time scripts run in dev mode
```

**Build Process:**
```bash
npm run build
# 1. Run scripts/generate-sitemap.js (scans content/articles/, writes public/sitemap.xml)
# 2. Next.js build (compiles TypeScript, processes Tailwind, bundles)
# 3. Static export (generates HTML for all routes)
# Output: .next/ directory with static files
```

**Deployment:**
```bash
git push origin main
# Vercel detects push
# Runs npm run build automatically
# Deploys to www.suniliyer.ca
# No manual steps required
```

**Adding New Article Workflow:**
1. Create `/content/articles/article-slug.md` with frontmatter
2. Add article image to `/public/images/articles/article-slug.png` (optional, Growth phase)
3. Git commit and push
4. Vercel build runs:
   - `generate-sitemap.js` includes new article
   - `lib/article-utils.ts` discovers new file
   - `lib/related-articles.ts` computes relationships
   - `next build` generates new `/articles/article-slug` page
5. Article appears on site automatically

---

## Architecture Complete

The AIDefence architecture is now fully defined with:

- ✅ Project context and requirements analysis
- ✅ Starter template selection (create-next-app)
- ✅ Core architectural decisions (6 major decisions)
- ✅ Implementation patterns and consistency rules (9 conflict points addressed)
- ✅ Complete project structure and boundaries

**Next Steps:**

1. **Update BMM Workflow Status**: Mark architecture as complete in `docs/bmm-workflow-status.yaml`
2. **Create Epics & Stories**: Use `/bmad:bmm:workflows:create-epics-stories` to break down PRD into implementable user stories
3. **Implementation Readiness Check**: Optional validation before beginning implementation

