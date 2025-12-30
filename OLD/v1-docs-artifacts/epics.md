---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - 'docs/prd.md'
  - 'docs/architecture.md'
  - 'docs/ux-design-specification.md'
workflowType: 'epics-stories'
lastStep: 4
project_name: 'AIDefence'
user_name: 'Sunil'
date: '2025-12-12'
workflow_completed: true
total_epics: 8
total_stories: 47
total_requirements_covered: 137
---

# AIDefence - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for AIDefence, decomposing the requirements from the PRD, UX Design, and Architecture documents into implementable stories.

## Requirements Inventory

### Functional Requirements

**Content Discovery & Browsing (6 requirements):**

- **FR1:** Readers can view all published articles in a masonry grid layout
- **FR2:** Readers can see article preview information (title, category, reading time, published date, excerpt) on each card
- **FR3:** Readers can filter articles by category
- **FR4:** Readers can identify article categories through color-coded visual badges
- **FR5:** Readers can view articles organized by most recent publication date
- **FR6:** Readers can see category groupings for topical organization

**Article Reading Experience (8 requirements):**

- **FR7:** Readers can expand an article card to display full content inline without page navigation
- **FR8:** Readers can view article content in full-width expanded format
- **FR9:** Readers can read article summary and key takeaways at the beginning of content
- **FR10:** Readers can view properly formatted markdown content (headings, lists, code blocks, tables, links)
- **FR11:** Readers can see article illustrations associated with each piece
- **FR12:** Readers can view related articles suggested at the end of content
- **FR13:** Readers can collapse expanded articles to return to grid view
- **FR14:** Readers can identify their current reading position within an article

**Navigation & Interaction (8 requirements):**

- **FR15:** Readers can navigate to the next related article without closing expanded view
- **FR16:** Readers can navigate to the previous related article without closing expanded view
- **FR17:** Readers can use keyboard shortcuts to expand articles (Enter key)
- **FR18:** Readers can use keyboard shortcuts to collapse articles (Escape key)
- **FR19:** Readers can use keyboard shortcuts to navigate between articles (Arrow Left/Right keys)
- **FR20:** Readers can use mouse/touch to expand and navigate articles
- **FR21:** Readers can access a homepage that links to the article grid
- **FR22:** Readers can navigate using breadcrumbs showing their location (Home → Category → Article)

**Content Management (7 requirements):**

- **FR23:** Content administrators can add new articles by creating markdown files with frontmatter
- **FR24:** Content administrators can specify article metadata through frontmatter fields (title, category, tags, date, excerpt, reading_time, difficulty)
- **FR25:** Content administrators can publish articles by committing to Git repository
- **FR26:** Content administrators can trigger automatic deployment through Git push
- **FR27:** Content administrators can add article illustrations to designated directory
- **FR28:** Content administrators can see new articles appear in grid automatically after build
- **FR29:** Content administrators can update existing articles by editing markdown files

**Search Engine Optimization (7 requirements):**

- **FR30:** Search engines can discover all article URLs through auto-generated sitemap.xml
- **FR31:** Search engines can access article metadata through HTML meta tags (title, description, canonical URL)
- **FR32:** Search engines can access Open Graph metadata for social sharing
- **FR33:** Search engines can parse structured data (JSON-LD schema.org/Article format)
- **FR34:** Search engines can crawl all public content without authentication barriers
- **FR35:** Search engines can access robot.txt configuration specifying crawl permissions
- **FR36:** Search engines can discover updated content through sitemap last-modified dates

**Accessibility & Universal Access (11 requirements):**

- **FR37:** Keyboard-only users can navigate all interactive elements using Tab key
- **FR38:** Keyboard-only users can access "skip to main content" link as first tab stop
- **FR39:** Keyboard-only users can see visible focus indicators on all interactive elements
- **FR40:** Screen reader users can hear announcements when article state changes (expanded/collapsed/navigated)
- **FR41:** Screen reader users can navigate content using semantic HTML structure (article, nav, main, proper heading hierarchy)
- **FR42:** Screen reader users can hear descriptive alternative text for all images
- **FR43:** Assistive technology users can access ARIA labels for complex interactions
- **FR44:** Mobile touch users can expand articles with full-screen display on small viewports (<768px)
- **FR45:** Mobile users can use touch targets of minimum 44x44px size
- **FR46:** Users can resize text up to 200% without breaking layout functionality
- **FR47:** Users can access core reading content even if JavaScript fails to load (progressive enhancement)

**Visual Presentation & Theming (8 requirements):**

- **FR48:** Readers can view content in dark mode with high-contrast color ratios (≥7:1 for body text)
- **FR49:** Readers can view content with generous whitespace for comfortable reading
- **FR50:** Readers can see smooth animations during card expansion and collapse
- **FR51:** Readers can see responsive layout adapt to their viewport size (mobile/tablet/desktop)
- **FR52:** Readers can view content on mobile devices (<768px) with single-column layout
- **FR53:** Readers can view content on tablet devices (768-1023px) with two-column layout
- **FR54:** Readers can view content on desktop devices (≥1024px) with three-column masonry grid
- **FR55:** Readers can see category-specific color coding applied consistently throughout interface

**Performance & Build System (6 requirements):**

- **FR56:** The system can build and deploy all 158 articles within 3 minutes
- **FR57:** The system can generate sitemap automatically during build process
- **FR58:** The system can populate SEO metadata from frontmatter during build
- **FR59:** The system can pre-compute related article relationships during build time
- **FR60:** The system can generate automatic breadcrumbs from category hierarchy
- **FR61:** The system can serve all content as static files (no runtime server dependency)

### Non-Functional Requirements

**Performance (13 requirements):**

- **NFR-PERF-1:** Page load time (Largest Contentful Paint) must be <2.5 seconds on 3G network connection
- **NFR-PERF-2:** Time to Interactive must be <3.5 seconds
- **NFR-PERF-3:** Card expansion animation must maintain 60fps (16ms frame time)
- **NFR-PERF-4:** Keyboard navigation response must be <16ms (single frame)
- **NFR-PERF-5:** Theme switch must complete in <100ms with zero flash of unstyled content
- **NFR-PERF-6:** Lighthouse Performance score must be ≥90
- **NFR-PERF-7:** Lighthouse Best Practices score must be ≥90
- **NFR-PERF-8:** Lighthouse SEO score must be ≥90
- **NFR-PERF-9:** First Input Delay (FID) must be <100 milliseconds
- **NFR-PERF-10:** Cumulative Layout Shift (CLS) must be <0.1
- **NFR-PERF-11:** Full site build for 158 articles must complete in ≤3 minutes
- **NFR-PERF-12:** Incremental build for single article change must complete in ≤30 seconds
- **NFR-PERF-13:** Initial JavaScript bundle size must be <200KB (gzipped)

**Accessibility (14 requirements):**

- **NFR-ACCESS-1:** All content must meet WCAG 2.1 Level AA compliance
- **NFR-ACCESS-2:** Zero WCAG AA violations detected by automated testing tools (axe DevTools, Lighthouse)
- **NFR-ACCESS-3:** All interactive elements must be navigable using keyboard only (Tab, Enter, Escape, Arrow keys)
- **NFR-ACCESS-4:** All interactive elements must display visible focus indicators with minimum 3:1 contrast ratio
- **NFR-ACCESS-5:** "Skip to main content" link must be first tab stop on every page
- **NFR-ACCESS-6:** All state changes must announce to screen readers via ARIA live regions
- **NFR-ACCESS-7:** All content must be navigable using screen readers (NVDA, JAWS, VoiceOver)
- **NFR-ACCESS-8:** All images must have descriptive alternative text
- **NFR-ACCESS-9:** Body text must maintain ≥7:1 color contrast ratio (exceeds WCAG AA 4.5:1 requirement)
- **NFR-ACCESS-10:** Layout must remain functional when text is resized up to 200%
- **NFR-ACCESS-11:** No information conveyed by color alone
- **NFR-ACCESS-12:** All touch targets must be minimum 44x44px size
- **NFR-ACCESS-13:** Touch targets must have adequate spacing to prevent accidental taps
- **NFR-ACCESS-14:** Core reading content must be accessible without JavaScript enabled

**Security (7 requirements):**

- **NFR-SEC-1:** Next.js version must include security patches for CVE-2025-55184 (DoS vulnerability) and CVE-2025-55183 (source code exposure)
- **NFR-SEC-2:** All npm dependencies must use exact version pinning (no `^` or `~` in package.json)
- **NFR-SEC-3:** Security patches must be tested in staging before production deployment
- **NFR-SEC-4:** All external content loaded over HTTPS only
- **NFR-SEC-5:** No sensitive information (API keys, credentials) committed to Git repository
- **NFR-SEC-6:** Production deployment must require passing automated tests
- **NFR-SEC-7:** Failed deployments must automatically roll back to last known good state

**Reliability (9 requirements):**

- **NFR-REL-1:** Site must be accessible 99.9% of time (leverages Vercel SLA)
- **NFR-REL-2:** Deployment must complete successfully or roll back automatically
- **NFR-REL-3:** Build process must be deterministic (same input produces identical output)
- **NFR-REL-4:** Build failures must not deploy broken state to production
- **NFR-REL-5:** Adding new articles must not break existing articles (regression prevention)
- **NFR-REL-6:** All features must work on Chrome 61+, Firefox 60+, Safari 11+, Edge 79+
- **NFR-REL-7:** Core reading experience must work on mobile Safari (iOS 11+) and Chrome Mobile
- **NFR-REL-8:** 404 errors for missing articles must display helpful error page
- **NFR-REL-9:** Build errors must provide clear diagnostic messages for troubleshooting

**Maintainability (10 requirements):**

- **NFR-MAIN-1:** Code must pass ESLint with zero errors
- **NFR-MAIN-2:** Code formatting must be enforced via Prettier
- **NFR-MAIN-3:** TypeScript (if used) must have zero type errors before deployment
- **NFR-MAIN-4:** Adding new article must require ≤10 minutes (markdown creation to deployed)
- **NFR-MAIN-5:** Article frontmatter must be the single source of truth for all metadata (no manual updates elsewhere)
- **NFR-MAIN-6:** Build errors related to malformed frontmatter must provide clear error messages
- **NFR-MAIN-7:** README must document local development setup, build process, and deployment procedure
- **NFR-MAIN-8:** Frontmatter schema must be documented with required and optional fields
- **NFR-MAIN-9:** Git push to main branch must trigger automatic deployment
- **NFR-MAIN-10:** Preview deployments must be created for all pull requests

### Additional Requirements

**Architecture Requirements:**

- **ARCH-1:** Project must initialize using `create-next-app` with TypeScript, Tailwind, App Router, Turbopack, and ESLint
- **ARCH-2:** Next.js version must be pinned to exactly 15.5.9 or higher to address security vulnerabilities
- **ARCH-3:** Animation implementation must use custom FLIP utilities (not external animation library)
- **ARCH-4:** Accessibility must use Radix UI Dialog primitive for expandable articles
- **ARCH-5:** Content processing must use next-mdx-remote with rehype-prism for syntax highlighting
- **ARCH-6:** Theme management must use next-themes library
- **ARCH-7:** SEO must use Next.js Metadata API with custom sitemap generation script
- **ARCH-8:** Related articles must use custom algorithm with string-similarity library (build-time only)
- **ARCH-9:** All file naming must follow conventions: PascalCase for components, kebab-case for utilities
- **ARCH-10:** Frontmatter fields must use snake_case naming (e.g., reading_time, not readingTime)
- **ARCH-11:** Category values must match exactly one of 11 defined categories (Title Case)
- **ARCH-12:** TypeScript interfaces must use no prefix (Article, not IArticle)
- **ARCH-13:** Function naming must follow verb-noun pattern (getAllArticles, not articles)
- **ARCH-14:** Error handling must throw from utilities, catch at component boundaries
- **ARCH-15:** Date format in frontmatter must be YYYY-MM-DD
- **ARCH-16:** Theme values must be simple strings 'dark' or 'light'

**UX Design Requirements:**

- **UX-1:** Color system must implement 11 distinct category colors with smart badge contrast
- **UX-2:** Whitespace system must use 8px base scale (8px, 16px, 32px, 64px, 96px, 160px)
- **UX-3:** Typography must use system font stack with scale: 48px/32px/24px/16px
- **UX-4:** Dark mode must be default theme with Charcoal Brown (#333d29) background
- **UX-5:** Light mode must use Beige Ivory (#F5F5DC) background
- **UX-6:** Card expansion animation timing must be 250ms with cubic-bezier(0.4, 0.0, 0.2, 1)
- **UX-7:** Card collapse animation timing must be 150ms (faster exit)
- **UX-8:** Hover effects must use 150ms timing
- **UX-9:** All animations must respect prefers-reduced-motion user preference
- **UX-10:** Article max width must be 680px for optimal readability (65-75 characters per line)
- **UX-11:** Grid must adapt: 3 columns (≥1024px), 2 columns (768-1023px), 1 column (<768px)
- **UX-12:** Floating menu button must be 48px × 48px fixed top-right
- **UX-13:** Expanded menu bar must be 72px height with backdrop blur
- **UX-14:** Menu animation must be 250ms slide-down
- **UX-15:** Body text must target 7:1 contrast ratio (WCAG AAA)
- **UX-16:** Focus indicators must be visible 2px outlines using category accent colors
- **UX-17:** Category badges must use intelligent text color selection (light text on dark badges, dark text on light badges)

### FR Coverage Map

**Epic 1: Project Foundation & Development Environment**
- ARCH-1: create-next-app initialization with TypeScript, Tailwind, App Router
- ARCH-2: Next.js version pinning (15.5.9+)
- ARCH-9 to ARCH-16: Implementation patterns (naming, frontmatter, TypeScript, functions, errors, dates, themes)
- NFR-SEC-1, NFR-SEC-2: Security patches and dependency pinning
- NFR-MAIN-1, NFR-MAIN-2, NFR-MAIN-3: ESLint, Prettier, TypeScript validation

**Epic 2: Design System & Visual Identity**
- FR48: Dark mode with high contrast
- FR49: Generous whitespace
- UX-1 to UX-17: Color system, whitespace scale, typography, animation timing, responsive breakpoints, floating menu, contrast ratios
- ARCH-6: next-themes library
- NFR-ACCESS-9: 7:1 contrast ratio
- NFR-PERF-5: Theme switch <100ms

**Epic 3: Content Management Pipeline**
- FR23: Add articles via markdown files
- FR24: Frontmatter metadata specification
- FR25: Publish via Git commit
- FR26: Automatic deployment on Git push
- FR27: Add article illustrations
- FR28: Articles appear automatically after build
- FR29: Update articles by editing markdown
- FR30: Auto-generated sitemap.xml
- FR31: HTML meta tags
- FR32: Open Graph metadata
- FR33: JSON-LD structured data
- FR34: Crawlable public content
- FR35: robots.txt configuration
- FR36: Sitemap last-modified dates
- FR56: Build all 158 articles in ≤3 minutes
- FR57: Auto-generate sitemap during build
- FR58: Populate SEO metadata from frontmatter
- FR59: Pre-compute related articles at build time
- FR60: Auto-generate breadcrumbs from categories
- FR61: Serve as static files
- ARCH-5: next-mdx-remote + rehype-prism
- ARCH-7: Metadata API + sitemap script
- ARCH-8: Related articles algorithm with string-similarity
- ARCH-10: Frontmatter snake_case naming
- ARCH-15: YYYY-MM-DD date format
- NFR-PERF-11: Build time ≤3 minutes for 158 articles
- NFR-PERF-12: Incremental build ≤30 seconds
- NFR-PERF-13: Bundle size <200KB gzipped
- NFR-MAIN-4: Article addition ≤10 minutes
- NFR-MAIN-5: Frontmatter as single source of truth
- NFR-MAIN-6: Clear frontmatter error messages
- NFR-MAIN-8: Frontmatter schema documentation

**Epic 4: Homepage & Global Navigation**
- FR21: Homepage access linking to articles
- FR22: Breadcrumb navigation
- UX-12: Floating menu button 48px × 48px
- UX-13: Expanded menu 72px height with backdrop blur
- UX-14: Menu animation 250ms slide-down

**Epic 5: Article Discovery & Grid View**
- FR1: Masonry grid layout for all articles
- FR2: Article preview metadata (title, category, reading time, date, excerpt)
- FR3: Filter articles by category
- FR4: Color-coded category badges
- FR5: Articles organized by recent publication date
- FR6: Category groupings for organization
- FR11: Article illustrations on cards
- FR51: Responsive layout adaptation
- FR52: Mobile single-column layout (<768px)
- FR53: Tablet two-column layout (768-1023px)
- FR54: Desktop three-column masonry grid (≥1024px)
- FR55: Category color coding throughout interface
- UX-11: Responsive grid adaptation (3/2/1 columns)
- ARCH-11: Category validation (11 defined categories)
- UX-17: Smart badge text color selection

**Epic 6: Expandable Article Reading Experience**
- FR7: Expand article inline without page navigation
- FR8: Full-width expanded format
- FR9: Summary and key takeaways at beginning
- FR10: Formatted markdown (headings, lists, code blocks, tables, links)
- FR12: Related articles at end of content
- FR13: Collapse to return to grid
- FR14: Reading position indicator
- FR15: Navigate to next related article
- FR16: Navigate to previous related article
- FR17: Keyboard shortcut to expand (Enter)
- FR18: Keyboard shortcut to collapse (Escape)
- FR19: Keyboard shortcuts to navigate (Arrow Left/Right)
- FR20: Mouse/touch navigation support
- ARCH-3: Custom FLIP animation utilities
- ARCH-4: Radix UI Dialog primitive
- UX-6: Card expansion 250ms timing
- UX-7: Card collapse 150ms timing
- UX-8: Hover effects 150ms timing
- UX-9: Respect prefers-reduced-motion
- UX-10: Article max width 680px
- NFR-PERF-3: 60fps animation (16ms frame time)
- NFR-PERF-4: Keyboard response <16ms

**Epic 7: Accessibility & Universal Access**
- FR37: Tab key navigation for all interactive elements
- FR38: Skip to main content link (first tab stop)
- FR39: Visible focus indicators on all interactive elements
- FR40: Screen reader announcements for state changes
- FR41: Semantic HTML structure (article, nav, main, headings)
- FR42: Descriptive alt text for all images
- FR43: ARIA labels for complex interactions
- FR44: Full-screen mobile expansion (<768px)
- FR45: 44x44px minimum touch targets
- FR46: Layout functional at 200% text resize
- FR47: Core content accessible without JavaScript
- NFR-ACCESS-1: WCAG 2.1 AA compliance
- NFR-ACCESS-2: Zero automated violations
- NFR-ACCESS-3: Full keyboard navigation
- NFR-ACCESS-4: Focus indicators with 3:1 contrast
- NFR-ACCESS-5: Skip link as first tab stop
- NFR-ACCESS-6: ARIA live region announcements
- NFR-ACCESS-7: Screen reader compatibility (NVDA, JAWS, VoiceOver)
- NFR-ACCESS-8: Descriptive alt text
- NFR-ACCESS-10: Functional at 200% text resize
- NFR-ACCESS-11: No color-only information
- NFR-ACCESS-12: 44x44px touch targets
- NFR-ACCESS-13: Adequate touch target spacing
- NFR-ACCESS-14: Core content works without JavaScript
- UX-15: 7:1 contrast ratio target
- UX-16: Visible 2px focus outlines with category colors
- ARCH-13: Error handling (throw from utilities, catch at boundaries)

**Epic 8: Performance & Quality Assurance**
- FR50: Smooth animations
- NFR-PERF-1: LCP <2.5 seconds
- NFR-PERF-2: TTI <3.5 seconds
- NFR-PERF-6: Lighthouse Performance ≥90
- NFR-PERF-7: Lighthouse Best Practices ≥90
- NFR-PERF-8: Lighthouse SEO ≥90
- NFR-PERF-9: FID <100ms
- NFR-PERF-10: CLS <0.1
- NFR-REL-1: 99.9% availability (Vercel SLA)
- NFR-REL-2: Automatic deployment rollback
- NFR-REL-3: Deterministic builds
- NFR-REL-4: Build failures don't deploy
- NFR-REL-5: No regressions when adding articles
- NFR-REL-6: Browser compatibility (Chrome 61+, Firefox 60+, Safari 11+, Edge 79+)
- NFR-REL-7: Mobile browser support (iOS 11+, Chrome Mobile)
- NFR-REL-8: Helpful 404 error pages
- NFR-REL-9: Clear build error messages
- NFR-SEC-3: Security patches tested in staging
- NFR-SEC-4: HTTPS-only external content
- NFR-SEC-5: No credentials in git
- NFR-SEC-6: Tests required for production deployment
- NFR-SEC-7: Automatic rollback on deployment failure
- NFR-MAIN-7: README documentation
- NFR-MAIN-9: Git push triggers deployment
- NFR-MAIN-10: Preview deployments for PRs

## Epic List

### Epic 1: Project Foundation & Development Environment
Initialize a production-ready Next.js development environment with security patches, TypeScript, Tailwind CSS, ESLint, and exact dependency pinning. Establish implementation patterns and naming conventions that ensure AI agent consistency throughout development.

**User Outcome:** Development environment is configured and ready for feature development. Security vulnerabilities are addressed from day one. All AI agents follow consistent patterns.

**FRs covered:** None (infrastructure only)
**NFRs covered:** NFR-SEC-1, NFR-SEC-2, NFR-MAIN-1, NFR-MAIN-2, NFR-MAIN-3
**Additional Requirements:** ARCH-1, ARCH-2, ARCH-9 through ARCH-16

---

### Epic 2: Design System & Visual Identity
Establish the complete earth-tone design system with dual theming (dark/light mode), 11 category colors with smart badge contrast, whitespace scale, typography system, and CSS custom properties. Implement theme toggle using next-themes library.

**User Outcome:** Readers experience a cohesive, professional visual design with dark mode default and light mode toggle. Premium minimalist aesthetic with generous whitespace.

**FRs covered:** FR48, FR49
**NFRs covered:** NFR-ACCESS-9, NFR-PERF-5
**Additional Requirements:** UX-1 through UX-17, ARCH-6

---

### Epic 3: Content Management Pipeline
Build automated content processing pipeline from markdown to deployed articles. Implement frontmatter parsing with gray-matter, MDX compilation with next-mdx-remote, syntax highlighting with rehype-prism, related article algorithm with string-similarity, auto-generated sitemap, and SEO metadata population.

**User Outcome:** Content administrators can add articles by dropping markdown files with frontmatter, triggering automatic processing, relationship computation, sitemap generation, and deployment. Adding article #158 requires identical effort as article #1.

**FRs covered:** FR23-FR36, FR56-FR61
**NFRs covered:** NFR-PERF-11, NFR-PERF-12, NFR-PERF-13, NFR-MAIN-4, NFR-MAIN-5, NFR-MAIN-6, NFR-MAIN-8
**Additional Requirements:** ARCH-5, ARCH-7, ARCH-8, ARCH-10, ARCH-15

---

### Epic 4: Homepage & Global Navigation
Create the homepage (About Sunil) with Hero, Resume, Portfolio, and Featured Articles sections. Implement context-aware floating menu system that adapts navigation items based on current page (Homepage vs Articles page).

**User Outcome:** Users can access the site, learn about Sunil's expertise and portfolio, and navigate seamlessly to articles page. Professional evaluators can assess capabilities within minutes.

**FRs covered:** FR21, FR22
**NFRs covered:** None (relies on Epic 2 design system)
**Additional Requirements:** UX-12, UX-13, UX-14

---

### Epic 5: Article Discovery & Grid View
Implement responsive masonry grid layout (3/2/1 columns) displaying all articles with category badges, reading time, date, and generative art thumbnails. Add category filtering with smooth animations and color-coded visual system.

**User Outcome:** Readers can browse all articles in a beautiful masonry grid, filter by category, and identify content through color-coded badges before reading.

**FRs covered:** FR1-FR6, FR11, FR51-FR55
**NFRs covered:** None (relies on Epic 3 content, Epic 2 design)
**Additional Requirements:** UX-11, UX-17, ARCH-11

---

### Epic 6: Expandable Article Reading Experience
Implement the core innovation - inline expandable articles using Radix UI Dialog primitive with custom FLIP animations. Add keyboard navigation (Enter/Escape/Arrows), related article discovery, summary-first article structure, markdown rendering with tables/code blocks, and navigation between articles without page loads.

**User Outcome:** Readers can expand articles inline, read in full-width format (680px max), navigate between articles with keyboard shortcuts, and discover related content - all without page loads. Reading feels like using a polished app, not jumping around a blog.

**FRs covered:** FR7-FR20
**NFRs covered:** NFR-PERF-3, NFR-PERF-4
**Additional Requirements:** ARCH-3, ARCH-4, UX-6, UX-7, UX-8, UX-9, UX-10

---

### Epic 7: Accessibility & Universal Access
Ensure WCAG 2.1 AA compliance with full keyboard navigation, screen reader support (NVDA, JAWS, VoiceOver), ARIA live regions, semantic HTML, visible focus indicators, 44x44px touch targets, progressive enhancement, and 200% text resize support.

**User Outcome:** All users, regardless of ability or assistive technology, can fully access and navigate the site. Keyboard-only users, screen reader users, and mobile touch users have excellent experiences.

**FRs covered:** FR37-FR47
**NFRs covered:** NFR-ACCESS-1 through NFR-ACCESS-14
**Additional Requirements:** UX-15, UX-16, ARCH-13

---

### Epic 8: Performance & Quality Assurance
Optimize Core Web Vitals (LCP <2.5s, FID <100ms, CLS <0.1), achieve Lighthouse scores ≥90 across all metrics, ensure browser compatibility (Chrome 61+, Firefox 60+, Safari 11+), implement automatic deployment with rollback, and establish production reliability.

**User Outcome:** Users experience fast page loads, smooth 60fps animations, and reliable deployments. Site works flawlessly across modern browsers and mobile devices.

**FRs covered:** FR50
**NFRs covered:** NFR-PERF-1, NFR-PERF-2, NFR-PERF-6 through NFR-PERF-10, NFR-REL-1 through NFR-REL-9, NFR-SEC-3 through NFR-SEC-7, NFR-MAIN-7, NFR-MAIN-9, NFR-MAIN-10
**Additional Requirements:** None

---

## Epic 1: Project Foundation & Development Environment

Initialize a production-ready Next.js development environment with security patches, TypeScript, Tailwind CSS, ESLint, and exact dependency pinning. Establish implementation patterns and naming conventions that ensure AI agent consistency throughout development.

### Story 1.1: Initialize Next.js Project with Security Patches

As a **developer**,
I want **to initialize the project using create-next-app with the latest secure Next.js version**,
So that **the development environment is ready with security vulnerabilities addressed from day one**.

**Acceptance Criteria:**

**Given** I am starting a new AIDefence project
**When** I run the create-next-app command with TypeScript, Tailwind, App Router, Turbopack, and ESLint
**Then** a new Next.js project is created in the `aidefence/` directory
**And** Next.js version is exactly 15.5.9 or higher (addressing CVE-2025-55184 and CVE-2025-55183)
**And** TypeScript is configured with strict mode enabled
**And** Tailwind CSS is installed and configured
**And** ESLint is configured with next/core-web-vitals rules
**And** The development server starts successfully on `localhost:3000`

### Story 1.2: Configure Exact Dependency Pinning and Security

As a **developer**,
I want **to pin all dependencies to exact versions and document the baseline configuration**,
So that **builds are deterministic and security patches are explicitly managed**.

**Acceptance Criteria:**

**Given** the Next.js project is initialized
**When** I update `package.json` to use exact versions (no `^` or `~`)
**Then** Next.js is pinned to exactly `"next": "15.5.9"` or higher secure version
**And** All other dependencies use exact version pinning
**And** `package-lock.json` is committed to git
**And** A `.env.example` file exists (even if empty for MVP)
**And** `.gitignore` includes `.env.local`, `node_modules`, `.next`, and build artifacts

### Story 1.3: Establish Project Structure and Documentation

As a **developer**,
I want **to create the standard project directory structure and document setup procedures**,
So that **all developers follow consistent patterns and can onboard quickly**.

**Acceptance Criteria:**

**Given** the project foundation is initialized
**When** I create the project structure
**Then** the following directories exist: `/app`, `/components`, `/lib`, `/types`, `/content`, `/scripts`, `/public`, `/docs`
**And** A `README.md` exists documenting: local setup, build process, deployment procedure
**And** File naming conventions are documented (PascalCase components, kebab-case utilities)
**And** A `types/article.ts` file exists with the Article interface stub
**And** All empty directories have `.gitkeep` files where needed

---

## Epic 2: Design System & Visual Identity

Establish the complete earth-tone design system with dual theming (dark/light mode), 11 category colors with smart badge contrast, whitespace scale, typography system, and CSS custom properties.

### Story 2.1: Define CSS Custom Properties and Design Tokens

As a **developer**,
I want **to establish CSS custom properties for colors, spacing, and typography**,
So that **the entire design system is centralized and maintainable**.

**Acceptance Criteria:**

**Given** the project structure is established
**When** I create the design token system in `app/globals.css`
**Then** CSS custom properties exist for all 11 category colors (Toffee Brown, Camel, Dry Sage, etc.)
**And** Structural colors are defined (background, surface, surface-elevated, text-primary, text-secondary, text-tertiary)
**And** Whitespace scale is defined (--space-xs: 8px through --space-2xl: 160px)
**And** Typography tokens are defined (font sizes 48px/32px/24px/16px, line-heights, weights)
**And** Animation timing tokens are defined (150ms/250ms, cubic-bezier easing)
**And** Layout tokens are defined (content-max-width: 1200px, article-max-width: 680px)

### Story 2.2: Implement Dual Theme System with next-themes

As a **reader**,
I want **to toggle between dark and light modes**,
So that **I can read comfortably in different lighting conditions**.

**Acceptance Criteria:**

**Given** CSS custom properties are defined
**When** I integrate next-themes library
**Then** `ThemeProvider` wraps the app in `app/layout.tsx`
**And** Dark mode is the default theme (Charcoal Brown #333d29 background)
**And** Light mode uses Beige Ivory (#F5F5DC background) with inverted structural colors
**And** Category colors remain constant across both themes
**And** Theme preference is saved to localStorage
**And** Theme switch completes in <100ms with zero FOUC (flash of unstyled content)
**And** `suppressHydrationWarning` is added to prevent hydration mismatch

### Story 2.3: Create Theme Toggle Component

As a **reader**,
I want **a visible theme toggle button**,
So that **I can easily switch between dark and light modes**.

**Acceptance Criteria:**

**Given** the theme system is implemented
**When** I create `components/theme/ThemeToggle.tsx`
**Then** the component uses `useTheme()` hook from next-themes
**And** The toggle button displays appropriate icon (◐ or ☀)
**And** Button has aria-label indicating current and next theme
**And** Clicking the button switches between 'dark' and 'light' themes
**And** The button is accessible via keyboard (Tab + Enter)
**And** The component will be integrated into the floating menu (in Epic 4)

### Story 2.4: Implement Smart Badge Contrast Logic

As a **reader**,
I want **category badges with readable text colors**,
So that **I can identify article categories regardless of the theme**.

**Acceptance Criteria:**

**Given** the category colors are defined
**When** I create `components/articles/CategoryBadge.tsx`
**Then** the component accepts a `category` prop matching one of 11 valid categories
**And** Dark category badges (Dark Walnut, Saddle Brown, Toffee Brown) use light text (#F5F5DC)
**And** Light category badges (Camel, Dry Sage, Khaki Beige, Tan) use dark text (#333d29)
**And** Text contrast ratio meets 7:1 minimum for all combinations
**And** Badge uses CSS custom property for category color (--color-cat-{category-slug})
**And** Badge is reusable across article cards and expanded article headers

---

## Epic 3: Content Management Pipeline

Build automated content processing pipeline from markdown to deployed articles with frontmatter parsing, MDX compilation, syntax highlighting, related article algorithm, auto-generated sitemap, and SEO metadata population.

### Story 3.1: Define Article TypeScript Interface and Frontmatter Schema

As a **developer**,
I want **a TypeScript interface defining the Article data structure**,
So that **all code has type safety and the frontmatter schema is clearly documented**.

**Acceptance Criteria:**

**Given** the project structure exists
**When** I create `types/article.ts`
**Then** the Article interface includes all required fields (title, slug, category, tags, date, reading_time, excerpt)
**And** Optional fields are defined (video_url, seo_title, seo_description, related_context)
**And** Frontmatter field naming uses snake_case (reading_time, not readingTime)
**And** Date format is documented as YYYY-MM-DD
**And** Category must be one of 11 valid categories (enforced by type union)
**And** The interface is exported for use across the application

### Story 3.2: Implement Markdown Parsing with Frontmatter Extraction

As a **content administrator**,
I want **markdown files with YAML frontmatter to be parsed automatically**,
So that **article metadata and content are separated and accessible**.

**Acceptance Criteria:**

**Given** the Article interface is defined
**When** I create `lib/markdown-parser.ts`
**Then** the library uses gray-matter to parse markdown files
**And** Frontmatter is extracted and validated against Article interface
**And** Markdown content body is separated from frontmatter
**And** Malformed frontmatter produces clear error messages (NFR-MAIN-6)
**And** Function naming follows verb-noun pattern: `parseMarkdownFile()`
**And** Errors are thrown from utilities (ARCH-14) for calling code to catch

### Story 3.3: Implement MDX Compilation with Syntax Highlighting

As a **reader**,
I want **markdown content rendered as HTML with syntax-highlighted code blocks**,
So that **I can read formatted articles with beautiful code examples**.

**Acceptance Criteria:**

**Given** markdown parsing is implemented
**When** I integrate next-mdx-remote and rehype-prism
**Then** MDX content compiles to React components
**And** Code blocks are syntax-highlighted using Prism.js
**And** Prism theme uses earth-tone colors (Moss Green background, Beige Ivory text)
**And** MDX supports all standard markdown elements (headings, lists, links, images, tables, blockquotes)
**And** The compilation happens at build time (SSG), not runtime
**And** Compiled MDX is returned for rendering in article components

### Story 3.4: Create Article Discovery Utilities

As a **developer**,
I want **utility functions to retrieve all articles and individual articles by slug**,
So that **pages can access article data for display**.

**Acceptance Criteria:**

**Given** markdown parsing is implemented
**When** I create `lib/article-utils.ts`
**Then** `getAllArticles()` function returns array of all articles sorted by date (newest first)
**And** `getArticleBySlug(slug: string)` returns single article or throws error if not found
**And** `getArticlesByCategory(category: string)` returns filtered articles
**And** All functions use file system to read from `/content/articles/*.md`
**And** Functions are pure and deterministic (same input = same output)
**And** Error handling throws from utilities for components to catch

### Story 3.5: Implement Related Articles Algorithm

As a **reader**,
I want **to see algorithmically-matched related articles at the end of content**,
So that **I can discover relevant content without manual curation**.

**Acceptance Criteria:**

**Given** article utilities exist
**When** I create `lib/related-articles.ts`
**Then** `getRelatedArticles(article: Article)` returns 3-4 related articles
**And** Algorithm uses string-similarity library to compare tags and related_context fields
**And** Same category articles are weighted higher
**And** string-similarity is a dev dependency (build-time only, not shipped to client)
**And** Related articles are pre-computed during build, not runtime
**And** If fewer than 3 articles match, return what's available

### Story 3.6: Generate SEO Metadata from Frontmatter

As a **search engine**,
I want **HTML meta tags, Open Graph data, and JSON-LD structured data**,
So that **I can properly index and display articles in search results**.

**Acceptance Criteria:**

**Given** article utilities exist
**When** I create `lib/seo-metadata.ts`
**Then** `generateMetadata(article: Article)` returns Next.js Metadata object
**And** Metadata includes title, description, canonical URL
**And** Open Graph tags include og:title, og:description, og:image, og:type
**And** JSON-LD schema.org/Article structured data is generated
**And** seo_title and seo_description from frontmatter are used if provided, else defaults to title/excerpt
**And** Metadata follows Next.js Metadata API conventions (ARCH-7)

### Story 3.7: Create Automatic Sitemap Generation Script

As a **search engine**,
I want **an automatically-generated sitemap.xml with all article URLs**,
So that **I can discover and crawl all content efficiently**.

**Acceptance Criteria:**

**Given** article utilities exist
**When** I create `scripts/generate-sitemap.js`
**Then** the script calls `getAllArticles()` to retrieve all articles
**And** Sitemap.xml is generated with URLs for homepage and all article pages
**And** Each URL includes `<lastmod>` using article date field (YYYY-MM-DD format)
**And** Sitemap is written to `/public/sitemap.xml`
**And** Script is called during build process (added to package.json build script)
**And** robots.txt in `/public` allows crawling and references sitemap

### Story 3.8: Create Sample Article for Testing

As a **developer**,
I want **a sample markdown article with complete frontmatter**,
So that **I can test the entire content pipeline end-to-end**.

**Acceptance Criteria:**

**Given** all content utilities are implemented
**When** I create `/content/articles/sample-article.md`
**Then** the file includes complete frontmatter with all required fields
**And** Content includes examples of headings, lists, code blocks, tables, and blockquotes
**And** The article builds successfully without errors
**And** `getAllArticles()` returns the sample article
**And** `getArticleBySlug('sample-article')` returns the parsed article
**And** Related articles algorithm runs successfully (even if returns empty array)
**And** SEO metadata generates correctly

---

## Epic 4: Homepage & Global Navigation

Create the homepage (About Sunil) with Hero, Resume, Portfolio, and Featured Articles sections. Implement context-aware floating menu system.

### Story 4.1: Create Homepage Layout with Hero Section

As a **visitor**,
I want **to see an engaging homepage introducing Sunil's expertise**,
So that **I can quickly understand his background and capabilities**.

**Acceptance Criteria:**

**Given** the design system is established
**When** I create `/app/page.tsx` for the homepage
**Then** the Hero section displays Sunil's name (72px heading), title, and expertise summary
**And** A CTA button "Explore Articles" links to `/articles` page
**And** Generous whitespace is applied (160px section spacing)
**And** Content max-width is 1200px, centered
**And** Typography follows design system (system font stack, defined weights)
**And** The page uses semantic HTML with proper heading hierarchy

### Story 4.2: Add Portfolio and Featured Articles Sections

As a **visitor**,
I want **to see Sunil's portfolio projects and featured articles**,
So that **I can evaluate his work and expertise before diving deeper**.

**Acceptance Criteria:**

**Given** the homepage hero exists
**When** I add Portfolio and Featured Articles sections
**Then** Portfolio section displays 3 project cards in responsive grid (3/2/1 columns)
**And** Each project card shows thumbnail, title, description, and external link
**And** Featured Articles section displays 3-4 article preview cards
**And** Featured article cards use same styling as article grid cards (from Epic 5)
**And** "View All Articles" button links to `/articles` page
**And** All sections follow 160px vertical spacing
**And** Resume/Experience section exists as placeholder for future content

### Story 4.3: Implement Floating Menu Component

As a **user**,
I want **a floating menu button that expands on-demand**,
So that **I can navigate without visual clutter competing with content**.

**Acceptance Criteria:**

**Given** the theme toggle component exists (Epic 2)
**When** I create `components/navigation/FloatingMenu.tsx`
**Then** collapsed state shows 48px × 48px button fixed top-right (32px from edges)
**And** Button displays hamburger icon (☰) with surface-elevated background
**And** Button has 2px border using category accent color
**And** Hover effect applies subtle glow (category color, 200ms timing)
**And** Clicking button expands to full 72px height menu bar
**And** Menu bar uses backdrop-filter blur(12px) with semi-transparent surface
**And** Expansion animation is 250ms slide-down with cubic-bezier easing
**And** Theme toggle component is integrated into expanded menu
**And** Close button [×] collapses menu
**And** Clicking outside menu collapses it

### Story 4.4: Implement Context-Aware Navigation

As a **user**,
I want **navigation items that adapt based on which page I'm viewing**,
So that **I always see relevant navigation options for my current context**.

**Acceptance Criteria:**

**Given** the floating menu component exists
**When** I implement navigation logic
**Then** on Homepage (`/`): menu shows "About | Resume | Portfolio | Articles"
**And** About/Resume/Portfolio use smooth scroll to sections on same page
**And** Articles navigates to `/articles` page
**And** on Articles page (`/articles`): menu shows "Home | Portfolio | Articles*" (Articles highlighted as current)
**And** Home navigates to `/` page
**And** Portfolio navigates to `/#portfolio` section on homepage
**And** Menu items use clear hover states (underline grow from center, 150ms)
**And** Current page is visually indicated (bold or accent color)

---

## Epic 5: Article Discovery & Grid View

Implement responsive masonry grid layout (3/2/1 columns) displaying all articles with category badges, reading time, date, and generative art thumbnails. Add category filtering.

### Story 5.1: Create Articles Page with Grid Layout

As a **reader**,
I want **to see all articles displayed in a beautiful masonry grid**,
So that **I can visually browse available content**.

**Acceptance Criteria:**

**Given** the content pipeline and design system exist
**When** I create `/app/articles/page.tsx`
**Then** the page calls `getAllArticles()` to retrieve all articles
**And** Articles are displayed in a responsive masonry grid layout
**And** Desktop (≥1024px) shows 3 columns
**And** Tablet (768-1023px) shows 2 columns
**And** Mobile (<768px) shows 1 column
**And** Grid gap is 32px (--space-md)
**And** Content max-width is 1200px, centered
**And** Floating menu component is integrated (showing "Home | Portfolio | Articles*")

### Story 5.2: Create Article Card Component

As a **reader**,
I want **each article card to show preview information and visual identity**,
So that **I can decide which articles interest me before clicking**.

**Acceptance Criteria:**

**Given** the articles page exists
**When** I create `components/articles/ArticleCard.tsx`
**Then** each card displays: category badge (using CategoryBadge component), article title, reading time, published date
**And** Card includes 200px height placeholder for generative art illustration (gradient using category color)
**And** Card has 64px padding (--space-lg) with generous whitespace
**And** Card background uses surface color with rounded corners
**And** Hover effect applies -2px translateY lift + category color glow (150ms timing)
**And** Card is clickable/tappable (will expand inline in Epic 6)
**And** Touch targets are minimum 44x44px
**And** Cards use semantic HTML (`<article>` element)

### Story 5.3: Implement Category Filtering

As a **reader**,
I want **to filter articles by category**,
So that **I can focus on topics relevant to my interests**.

**Acceptance Criteria:**

**Given** article cards are displayed
**When** I implement category filtering
**Then** a filter bar displays all 11 valid categories as buttons
**And** "All" button shows all articles (default state)
**And** Clicking a category button filters grid to show only articles in that category
**And** Active filter button is highlighted with category accent color
**And** Filtered results animate smoothly (fade + reflow, 200ms)
**And** Filter state is managed in React state (no URL params for MVP)
**And** If a category has zero articles, it still appears as an option (for future content)
**And** Filter buttons are keyboard accessible (Tab + Enter)

### Story 5.4: Sort Articles by Publication Date

As a **reader**,
I want **articles sorted by most recent first**,
So that **I see the latest content at the top**.

**Acceptance Criteria:**

**Given** articles are displayed in the grid
**When** articles are loaded
**Then** articles are sorted by date field in descending order (newest first)
**And** Date field uses YYYY-MM-DD format from frontmatter
**And** Sorting happens in `getAllArticles()` utility (Epic 3)
**And** Most recent articles appear in top-left of grid
**And** Article cards display formatted date (e.g., "December 12, 2025")

---

## Epic 6: Expandable Article Reading Experience

Implement inline expandable articles using Radix UI Dialog with custom FLIP animations. Add keyboard navigation, related article discovery, summary-first article structure, and markdown rendering with tables/code blocks.

### Story 6.1: Create Custom FLIP Animation Utilities

As a **developer**,
I want **custom FLIP animation utilities for 60fps card expansion**,
So that **the expandable card animation feels smooth and performant**.

**Acceptance Criteria:**

**Given** the design system is established
**When** I create `lib/animations.ts`
**Then** FLIP utilities calculate First, Last, Invert, Play positions for card expansion
**And** Animations use GPU-accelerated properties only (transform, opacity)
**And** Expansion timing is 250ms with cubic-bezier(0.4, 0.0, 0.2, 1) easing
**And** Collapse timing is 150ms (faster exit)
**And** Animations respect `prefers-reduced-motion` media query
**And** Target is 60fps (16ms frame time) for all animations
**And** Utilities export reusable functions: `calculateFLIP()`, `animateExpansion()`, `animateCollapse()`

### Story 6.2: Implement Expandable Article Component with Radix Dialog

As a **reader**,
I want **to expand an article card inline without page navigation**,
So that **I can read content in a focused, full-width layout**.

**Acceptance Criteria:**

**Given** FLIP utilities and article cards exist
**When** I create `components/articles/ArticleExpanded.tsx`
**Then** component uses Radix UI Dialog primitive for accessibility
**And** Clicking an article card triggers expansion with FLIP animation (250ms)
**And** Expanded article displays in full-width format (680px max for readability)
**And** Grid background blurs (8px gaussian blur, 200ms delay)
**And** Article header includes blurred category gradient background
**And** Floating menu remains visible but reduced opacity (60%)
**And** Dialog has `role="dialog"` and `aria-modal="true"`
**And** Focus is trapped within expanded article
**And** Mobile (<768px) shows full-screen overlay instead of inline expansion

### Story 6.3: Render Article Content with MDX

As a **reader**,
I want **to see beautifully formatted article content with summary at top**,
So that **I can read complex AI governance content comfortably**.

**Acceptance Criteria:**

**Given** the expandable article component exists
**When** article content is rendered
**Then** summary and key takeaways display at top (summary-first structure)
**And** MDX content renders with proper styling for all elements
**And** Headings use hierarchy: H1 (48px), H2 (32px), H3 (24px), Body (16px, 1.8 line-height)
**And** Code blocks use earth-tone Prism theme with syntax highlighting
**And** Tables use full-width with earth-tone styling and category accent border
**And** Blockquotes use 4px left border in category color with italic text
**And** Vertical rhythm maintains 24px paragraph spacing, 48px section breaks
**And** All content respects 680px max width for optimal readability

### Story 6.4: Add Related Articles Section

As a **reader**,
I want **to see related articles suggested at the end of content**,
So that **I can continue my learning journey without returning to the grid**.

**Acceptance Criteria:**

**Given** article content is rendered
**When** the reader scrolls to the end
**Then** related articles section displays 3-4 algorithmically-matched articles
**And** Related articles use `getRelatedArticles()` utility from Epic 3
**And** Each related article shows: small thumbnail, category badge, title, reading time
**And** Clicking a related article smoothly transitions to that article (crossfade, 300ms)
**And** Related articles appear BEFORE footer to keep reader in content loop
**And** If no related articles found, section is hidden (graceful degradation)

### Story 6.5: Implement Keyboard Navigation

As a **keyboard user**,
I want **to navigate articles using keyboard shortcuts**,
So that **I can browse efficiently without using a mouse**.

**Acceptance Criteria:**

**Given** an article is expanded
**When** I press keyboard keys
**Then** `Enter` key on article card expands the article
**And** `Escape` key closes expanded article and returns to grid
**And** `Arrow Left` navigates to previous related article (with 300ms crossfade)
**And** `Arrow Right` navigates to next related article (with 300ms crossfade)
**And** All keyboard navigation responds in <16ms (single frame)
**And** Keyboard focus is visible with 2px outline in category accent color
**And** Screen reader announces article transitions via ARIA live region
**And** Keyboard shortcuts work on both desktop and mobile with bluetooth keyboard

### Story 6.6: Add Close and Navigation Controls

As a **reader**,
I want **visible controls to close the article and navigate between articles**,
So that **I can control my reading experience with mouse or touch**.

**Acceptance Criteria:**

**Given** an article is expanded
**When** UI controls are added
**Then** close button (←) appears in top-left of expanded article
**And** Arrow navigation buttons (◄ ►) appear in bottom-right
**And** Close button collapses article with 150ms animation
**And** Arrow buttons navigate to previous/next related articles with 300ms crossfade
**And** All buttons are minimum 44x44px touch targets
**And** Buttons have clear hover states (category color glow)
**And** Buttons are accessible via keyboard (Tab + Enter)
**And** Clicking outside expanded article (on blurred grid) also closes it

---

## Epic 7: Accessibility & Universal Access

Ensure WCAG 2.1 AA compliance with full keyboard navigation, screen reader support (NVDA, JAWS, VoiceOver), ARIA live regions, semantic HTML, visible focus indicators, 44x44px touch targets, progressive enhancement, and 200% text resize support.

### Story 7.1: Implement Skip to Main Content Link

As a **keyboard-only user**,
I want **a skip link as the first tab stop**,
So that **I can bypass navigation and jump directly to main content**.

**Acceptance Criteria:**

**Given** the site structure exists
**When** I press Tab on page load
**Then** "Skip to main content" link is the first focusable element
**And** Link is visually hidden until focused (moves on-screen with focus)
**And** Clicking/pressing Enter jumps focus to `<main>` element
**And** Focus indicator is visible with 2px outline
**And** Skip link exists on both homepage and articles page
**And** Screen readers announce the skip link

### Story 7.2: Add Semantic HTML and ARIA Labels

As a **screen reader user**,
I want **proper semantic HTML structure and ARIA labels**,
So that **I can navigate content logically and understand interactive elements**.

**Acceptance Criteria:**

**Given** all pages and components exist
**When** semantic HTML is applied
**Then** page uses `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` elements
**And** Heading hierarchy is logical (H1 → H2 → H3, no skipped levels)
**And** Article cards have `aria-label` with category, title, and reading time
**And** Expandable articles have `role="dialog"` and `aria-modal="true"`
**And** Floating menu has `aria-expanded` state (true/false)
**And** Theme toggle has `aria-label` indicating current and next theme
**And** Navigation controls have descriptive `aria-label` (e.g., "Close article", "Next article")
**And** Filter buttons have `aria-pressed` state for active filter

### Story 7.3: Implement ARIA Live Regions for State Changes

As a **screen reader user**,
I want **announcements when article state changes**,
So that **I'm aware of expansions, collapses, and navigation without visual cues**.

**Acceptance Criteria:**

**Given** expandable articles and navigation exist
**When** article state changes
**Then** ARIA live region announces: "Article expanded: {title}"
**And** ARIA live region announces: "Article closed, returned to grid"
**And** ARIA live region announces: "Navigated to article: {title}"
**And** Live region uses `aria-live="polite"` to avoid interrupting reading
**And** Announcements are clear and concise
**And** Live region is visually hidden but available to screen readers

### Story 7.4: Ensure Full Keyboard Accessibility

As a **keyboard-only user**,
I want **all interactive elements accessible via keyboard**,
So that **I can use the entire site without a mouse**.

**Acceptance Criteria:**

**Given** all features are implemented
**When** I navigate using only keyboard
**Then** all buttons, links, and interactive elements are reachable via Tab
**And** Tab order follows logical visual order (top to bottom, left to right)
**And** Enter or Space activates buttons and links
**And** Escape closes expanded articles and menus
**And** Arrow keys navigate between related articles when article is expanded
**And** Filter buttons are selectable via Tab + Enter
**And** No keyboard traps exist (I can always Tab away)
**And** Focus returns to article card after closing expanded view

### Story 7.5: Add Visible Focus Indicators

As a **keyboard user**,
I want **clear visual indicators showing which element has focus**,
So that **I always know where I am on the page**.

**Acceptance Criteria:**

**Given** keyboard navigation is implemented
**When** I Tab through interactive elements
**Then** focused elements display 2px outline using category accent color
**And** Focus indicator has minimum 3:1 contrast ratio against background
**And** Focus indicator is visible on all interactive elements (buttons, links, cards, filters)
**And** Custom focus styles override browser defaults for consistency
**And** Focus indicator is NOT removed with `outline: none` without replacement
**And** Focus is clearly visible in both dark and light modes

### Story 7.6: Ensure Progressive Enhancement (No-JS Fallback)

As a **user with JavaScript disabled**,
I want **core reading content to be accessible**,
So that **I can still read articles even if JavaScript fails to load**.

**Acceptance Criteria:**

**Given** JavaScript is disabled in the browser
**When** I visit the site
**Then** article content is accessible via direct URLs (e.g., `/articles/sample-article`)
**And** Markdown content renders as static HTML
**And** Navigation links work as standard HTML links
**And** Site degrades gracefully (no broken interactions)
**And** Core reading experience remains functional (no expandable cards, but content accessible)
**And** Message is displayed: "For the best experience, enable JavaScript"

### Story 7.7: Validate Text Resize and Touch Targets

As a **user with visual impairments or using mobile device**,
I want **text that scales to 200% and large touch targets**,
So that **I can read comfortably and tap accurately**.

**Acceptance Criteria:**

**Given** the site is fully implemented
**When** I resize text to 200% in browser settings
**Then** layout remains functional (no text cutoff or overlap)
**And** All interactive elements remain accessible
**And** Horizontal scrolling is NOT required to read content
**And** All touch targets are minimum 44x44px
**And** Touch targets have adequate spacing (8px minimum) to prevent accidental taps
**And** Mobile viewport (<768px) uses appropriate font sizes (minimum 16px body text)

### Story 7.8: Run Accessibility Audit and Fix Violations

As a **developer**,
I want **zero WCAG AA violations detected by automated tools**,
So that **the site meets accessibility compliance standards**.

**Acceptance Criteria:**

**Given** all accessibility features are implemented
**When** I run automated accessibility audits
**Then** axe DevTools reports zero WCAG AA violations
**And** Lighthouse Accessibility score is 100
**And** All color contrast ratios meet ≥7:1 for body text (WCAG AAA)
**And** All interactive elements have contrast ≥3:1 for focus indicators
**And** No color-only information exists (e.g., category indicated by badge + text, not color alone)
**And** All images have descriptive alt text
**And** Manual keyboard testing confirms full navigation
**And** Manual screen reader testing (VoiceOver/NVDA) confirms proper announcements

---

## Epic 8: Performance & Quality Assurance

Optimize Core Web Vitals (LCP <2.5s, FID <100ms, CLS <0.1), achieve Lighthouse scores ≥90 across all metrics, ensure browser compatibility (Chrome 61+, Firefox 60+, Safari 11+), implement automatic deployment with rollback, and establish production reliability.

### Story 8.1: Optimize Core Web Vitals (LCP, FID, CLS)

As a **user**,
I want **fast page loads and smooth interactions**,
So that **I have a responsive, frustration-free experience**.

**Acceptance Criteria:**

**Given** the site is fully built
**When** I measure Core Web Vitals
**Then** Largest Contentful Paint (LCP) is <2.5 seconds on 3G network
**And** First Input Delay (FID) is <100 milliseconds
**And** Cumulative Layout Shift (CLS) is <0.1
**And** Time to Interactive (TTI) is <3.5 seconds
**And** Next.js Image component is used for all images (lazy loading, optimization)
**And** Fonts are preloaded and use `font-display: swap`
**And** CSS is minified and critical CSS is inlined
**And** JavaScript bundle is code-split and tree-shaken

### Story 8.2: Achieve Lighthouse Performance Score ≥90

As a **developer**,
I want **Lighthouse Performance score of 90 or higher**,
So that **the site meets industry best practices for performance**.

**Acceptance Criteria:**

**Given** Core Web Vitals are optimized
**When** I run Lighthouse audit
**Then** Performance score is ≥90
**And** Best Practices score is ≥90
**And** SEO score is ≥90
**And** Accessibility score is 100 (from Epic 7)
**And** All recommendations with "High" impact are addressed
**And** Unused JavaScript is eliminated or lazy-loaded
**And** Images are properly sized and compressed

### Story 8.3: Ensure Cross-Browser Compatibility

As a **user on any modern browser**,
I want **the site to work flawlessly**,
So that **I have a consistent experience regardless of my browser choice**.

**Acceptance Criteria:**

**Given** the site is deployed
**When** I test across browsers
**Then** all features work on Chrome 61+ (desktop and mobile)
**And** all features work on Firefox 60+ (desktop and mobile)
**And** all features work on Safari 11+ (desktop and iOS)
**And** all features work on Edge 79+ (Chromium-based)
**And** Core reading experience works on mobile Safari (iOS 11+)
**And** Core reading experience works on Chrome Mobile (Android)
**And** Expandable cards work correctly on all browsers
**And** Theme toggle works correctly on all browsers
**And** Animations respect browser-specific prefixes if needed

### Story 8.4: Create Custom 404 Error Page

As a **user who encounters a broken link**,
I want **a helpful 404 error page**,
So that **I can navigate back to valid content easily**.

**Acceptance Criteria:**

**Given** the site is deployed
**When** I navigate to a non-existent URL (e.g., `/articles/does-not-exist`)
**Then** a custom 404 page displays (not generic browser error)
**And** 404 page uses the site design system (earth tones, typography)
**And** 404 page includes a message: "Article not found"
**And** 404 page includes navigation links: "View All Articles" and "Go to Homepage"
**And** 404 page includes floating menu for navigation
**And** 404 page returns HTTP 404 status code
**And** Build errors provide clear diagnostic messages for troubleshooting

### Story 8.5: Configure Staging Environment and Preview Deployments

As a **developer**,
I want **preview deployments for every pull request and a staging environment**,
So that **I can test changes before they reach production**.

**Acceptance Criteria:**

**Given** the project is connected to Vercel
**When** I create a pull request
**Then** Vercel automatically creates a preview deployment with unique URL
**And** Preview deployment builds from the PR branch
**And** Preview URL is posted as a comment on the PR automatically
**And** Preview deployment reflects all changes from the PR
**And** Preview deployments are isolated from production data
**And** Multiple preview deployments can exist simultaneously (one per PR)
**And** Preview deployments are automatically cleaned up after PR is merged/closed
**And** A dedicated `staging` branch deploys to a staging URL for integration testing

### Story 8.6: Establish Testing Workflow Before Production

As a **developer**,
I want **a clear testing workflow to validate changes before production**,
So that **bugs and security issues are caught before users see them**.

**Acceptance Criteria:**

**Given** preview and staging environments exist
**When** I make changes to the site
**Then** I create a feature branch and open a pull request
**And** I test changes in the preview deployment URL
**And** I verify: functionality works, no build errors, Lighthouse scores maintained, accessibility tests pass
**And** For security patches (NFR-SEC-3): changes are tested in staging before merging to main
**And** After testing passes, I merge PR to `main` branch
**And** Main branch auto-deploys to production (www.suniliyer.ca)
**And** If production deployment fails, automatic rollback to last known good state occurs
**And** I monitor production after deployment to ensure no regressions

### Story 8.7: Configure Vercel Production Deployment with Auto-Rollback

As a **content administrator**,
I want **automatic deployment to production when changes are merged**,
So that **new content goes live without manual intervention**.

**Acceptance Criteria:**

**Given** the testing workflow is established
**When** a pull request is merged to the `main` branch
**Then** Vercel automatically triggers a production build
**And** Build runs `next build` and sitemap generation script
**And** Build succeeds and deploys to production (www.suniliyer.ca)
**And** If build fails, deployment is NOT published
**And** If deployment fails, it automatically rolls back to last known good state
**And** Deployment status is visible in Vercel dashboard
**And** Production URL (www.suniliyer.ca) reflects the deployed changes within 2 minutes

### Story 8.8: Validate Deterministic Builds

As a **developer**,
I want **deterministic builds that produce identical output**,
So that **deployments are predictable and debuggable**.

**Acceptance Criteria:**

**Given** the build process is configured
**When** I build the project multiple times with same input
**Then** output files are byte-for-byte identical
**And** Build timestamps are consistent
**And** Adding new articles does NOT break existing articles (regression prevention)
**And** Build process is deterministic (same input = identical output)
**And** Build errors are clear and actionable
**And** Full site build for sample article completes in <3 minutes

### Story 8.9: Add Production README Documentation

As a **developer onboarding to the project**,
I want **comprehensive README documentation**,
So that **I can set up the project, run builds, and deploy confidently**.

**Acceptance Criteria:**

**Given** the project is complete
**When** I create `README.md`
**Then** README documents local setup: Node version, npm install, environment variables
**And** README documents development: `npm run dev`, accessing localhost:3000
**And** README documents build: `npm run build`, output directory
**And** README documents deployment: Git push triggers Vercel deployment
**And** README documents testing workflow: feature branch → PR → preview → test → merge → production
**And** README documents article creation: frontmatter schema, required vs optional fields
**And** README documents file naming conventions (PascalCase, kebab-case, snake_case)
**And** README includes troubleshooting section for common errors
**And** README is clear, concise, and includes code examples

### Story 8.10: Final Production Validation and Launch

As a **project stakeholder**,
I want **final validation that all requirements are met**,
So that **we can confidently launch the AIDefence site to production**.

**Acceptance Criteria:**

**Given** all epics and stories are complete
**When** I perform final validation
**Then** all 61 functional requirements are implemented and working
**And** all 43 non-functional requirements are met
**And** Lighthouse scores: Performance ≥90, Accessibility 100, Best Practices ≥90, SEO ≥90
**And** Core Web Vitals pass: LCP <2.5s, FID <100ms, CLS <0.1
**And** axe DevTools reports zero WCAG AA violations
**And** Manual testing confirms: expandable cards, keyboard navigation, screen reader support, theme toggle
**And** Testing workflow is documented and working (feature branch → PR → preview → staging → production)
**And** Site is deployed to production at www.suniliyer.ca
**And** Site is accessible 99.9% of time (Vercel SLA)
**And** Sample article loads and displays correctly
**And** SEO metadata is populated correctly
**And** Sitemap.xml is generated and accessible
