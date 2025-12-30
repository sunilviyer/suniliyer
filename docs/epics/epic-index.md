# AIDefence V2 - Epic Index

**Project**: AIDefence V2 - AI Governance Learning Paths Platform
**Total Epics**: 15
**Timeline**: 12-16 weeks
**Status**: Pre-Implementation (Epic 0 in progress)

---

## Epic Overview

| Epic | Name | Stories | Effort (hrs) | Status | Dependencies |
|------|------|---------|--------------|--------|--------------|
| [Epic 0](#epic-0) | Image Generation Strategy | 10 | 78-98 | 🟡 In Progress | None |
| [Epic 1](#epic-1) | Homepage Foundation & Deployment | 6 | 24-32 | ⏳ Ready | Epic 0 (partial) |
| [Epic 2](#epic-2) | History Path Implementation | 8 | 32-40 | ⏳ Ready | Epic 0 Phase 1 |
| [Epic 2.5](#epic-25) | Create Missing History Articles | 4 | 16-24 | ⏳ Ready | None |
| [Epic 3](#epic-3) | All Paths Infrastructure | 7 | 28-36 | 🔴 Blocked | Epic 1, 2 |
| [Epic 4](#epic-4) | Learning Path Navigation | 6 | 24-32 | 🔴 Blocked | Epic 3 |
| [Epic 5](#epic-5) | Terminology Path Implementation | 8 | 32-40 | 🔴 Blocked | Epic 0 Phase 1, Epic 3 |
| [Epic 5.5](#epic-55) | Create Missing Terminology Articles | 10 | 40-60 | ⏳ Ready | Epic 2.5 |
| [Epic 6](#epic-6) | Article Detail View & MDX | 9 | 36-48 | 🔴 Blocked | Epic 3 |
| [Epic 7](#epic-7) | Risk Path Implementation | 8 | 32-40 | 🔴 Blocked | Epic 0 Phase 1, Epic 3 |
| [Epic 7.5](#epic-75) | Create Missing Risk Articles | 8 | 32-48 | ⏳ Ready | Epic 2.5 |
| [Epic 8](#epic-8) | Responsibility Path Implementation | 8 | 32-40 | 🔴 Blocked | Epic 0 Phase 3, Epic 3 |
| [Epic 9](#epic-9) | Future Path Implementation | 8 | 32-40 | 🔴 Blocked | Epic 0 Phase 3, Epic 3 |
| [Epic 10](#epic-10) | Advanced Features | 12 | 48-64 | 🔴 Blocked | Epic 8, 9 |
| [Epic 11](#epic-11) | SEO & Performance | 8 | 32-40 | 🔴 Blocked | Epic 10 |
| [Epic 12](#epic-12) | Testing & QA | 10 | 40-56 | 🔴 Blocked | Epic 11 |
| [Epic 13](#epic-13) | Documentation & Handoff | 6 | 24-32 | 🔴 Blocked | Epic 12 |
| [Epic 14](#epic-14) | Launch Preparation | 8 | 32-40 | 🔴 Blocked | Epic 13 |
| [Epic 15](#epic-15) | Post-Launch Monitoring | 5 | 20-28 | 🔴 Blocked | Epic 14 |
| **TOTAL** | **15 Epics** | **139** | **634-856** | **~16 weeks** | - |

---

## Phase Organization

### Phase 0: Pre-Implementation (Weeks -4 to 0)

**Goal**: Complete all content and assets before coding begins

- **Epic 0**: Image Generation Strategy (78-98 hrs)
  - Phase 1: Generate 37 images (Risk + Resources + Examples)
  - Phase 2: Complete knowledge graph metadata (95 cards)
  - Phase 3: Generate remaining 116 images
  - Phase 4: Optimization & documentation

- **Epic 2.5**: Create Missing History Articles (16-24 hrs)
  - 4 articles: Building Blocks, AI Family Tree, Machine Learning Demystified

- **Epic 5.5**: Create Missing Terminology Articles (40-60 hrs)
  - 10 articles extracted from existing History articles

- **Epic 7.5**: Create Missing Risk Articles (32-48 hrs)
  - 8 articles: Taxonomy, Black Box, Job Displacement, etc.

**Total Pre-Implementation**: 166-230 hours (4-6 weeks)

---

### Phase 1: Foundation (Weeks 1-3)

**Goal**: Build core infrastructure and first learning path

- **Epic 1**: Homepage Foundation & Deployment (24-32 hrs)
  - Next.js setup, header, hero, path preview cards
  - Vercel deployment pipeline
  - Dark mode toggle

- **Epic 2**: History Path Implementation (32-40 hrs)
  - StackCards animation with GSAP
  - 15 concept cards with flip animations
  - Related articles, keyboard navigation

- **Epic 3**: All Paths Infrastructure (28-36 hrs)
  - Routing, layout templates, shared components
  - Knowledge graph integration
  - Cross-path navigation

**Total Phase 1**: 84-108 hours (3 weeks)

---

### Phase 2: Core Learning Paths (Weeks 4-8)

**Goal**: Complete Terminology and Risk paths

- **Epic 4**: Learning Path Navigation (24-32 hrs)
  - Category filtering, tag filtering
  - Search within path
  - Breadcrumbs and progress tracking

- **Epic 5**: Terminology Path Implementation (32-40 hrs)
  - 14 concept cards + 10 example cards
  - Technical diagrams, code examples
  - Cross-references to History path

- **Epic 6**: Article Detail View & MDX (36-48 hrs)
  - MDX rendering with syntax highlighting
  - Table of contents, reading time
  - Social sharing, print styles

- **Epic 7**: Risk Path Implementation (32-40 hrs)
  - 20 concept cards + 8 example cards
  - Warning indicators, case study cards
  - Ethics principles visualization

**Total Phase 2**: 124-160 hours (5 weeks)

---

### Phase 3: Advanced Paths (Weeks 9-11)

**Goal**: Complete Responsibility and Future paths

- **Epic 8**: Responsibility Path Implementation (32-40 hrs)
  - 75 concept cards (largest path)
  - Legal framework navigation
  - Compliance checklists integration

- **Epic 9**: Future Path Implementation (32-40 hrs)
  - 20 concept cards
  - Career resources, AIGP study guide
  - Innovation timeline visualization

- **Epic 10**: Advanced Features (48-64 hrs)
  - Global search across all paths
  - Bookmark system with local storage
  - Progress tracking and achievements
  - Print-friendly study guides

**Total Phase 3**: 112-144 hours (4 weeks)

---

### Phase 4: Optimization & Launch (Weeks 12-16)

**Goal**: Production-ready platform with full testing

- **Epic 11**: SEO & Performance (32-40 hrs)
  - Meta tags, Open Graph, JSON-LD
  - Image optimization, lazy loading
  - Lighthouse score >90

- **Epic 12**: Testing & QA (40-56 hrs)
  - Unit tests (Jest), integration tests
  - Accessibility audit (WCAG 2.1 AAA)
  - Cross-browser testing

- **Epic 13**: Documentation & Handoff (24-32 hrs)
  - Developer documentation
  - Content editor guide
  - Architecture decision records

- **Epic 14**: Launch Preparation (32-40 hrs)
  - Production environment setup
  - SSL certificates, domain configuration
  - Analytics, error tracking
  - Backup and disaster recovery

- **Epic 15**: Post-Launch Monitoring (20-28 hrs)
  - Performance monitoring
  - User feedback collection
  - Bug triage and hotfix process

**Total Phase 4**: 148-196 hours (5 weeks)

---

## Epic Summaries

### Epic 0: Image Generation Strategy
**Status**: 🟡 In Progress (Phase 1)
**Files**: `/docs/epics/epic-0-image-generation-strategy.md`, `/docs/epics/epic-0-phase-1-checklist.md`

Create all 187 images for learning paths platform using UX spec earth-tone palette. Phase 1 ready to execute (37 images).

---

### Epic 1: Homepage Foundation & Deployment
**Status**: ⏳ Ready (blocked by Epic 0 Phase 1 for hero image)
**File**: `/docs/epics/epic-1-homepage-foundation.md`

Set up Next.js project from Rayo template, create homepage with hero, path preview cards, deploy to Vercel.

---

### Epic 2: History Path Implementation
**Status**: ⏳ Ready (has all 15 images)
**File**: `/docs/epics/epic-2-history-path.md`

First complete learning path with StackCards animation, 15 concept cards, flip animations, keyboard navigation.

---

### Epic 2.5: Create Missing History Articles
**Status**: ⏳ Ready
**File**: `/docs/epics/epic-2.5-history-articles.md`

Write 4 missing History path articles using OECD definitions and ISO standards.

---

### Epic 3: All Paths Infrastructure
**Status**: 🔴 Blocked by Epic 1, 2
**File**: `/docs/epics/epic-3-all-paths-infrastructure.md`

Shared routing, layout templates, knowledge graph integration for all 5 learning paths.

---

### Epic 4: Learning Path Navigation
**Status**: 🔴 Blocked by Epic 3
**File**: `/docs/epics/epic-4-navigation-filtering.md`

Category filtering, tag filtering, search within path, breadcrumbs, progress tracking.

---

### Epic 5: Terminology Path Implementation
**Status**: 🔴 Blocked by Epic 0 Phase 1, Epic 3
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

14 concept cards + 10 example cards with technical diagrams and code examples.

---

### Epic 5.5: Create Missing Terminology Articles
**Status**: ⏳ Ready (extract from History articles)
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

Extract and expand 10 technical articles from existing History content.

---

### Epic 6: Article Detail View & MDX
**Status**: 🔴 Blocked by Epic 3
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

MDX rendering, syntax highlighting, table of contents, social sharing.

---

### Epic 7: Risk Path Implementation
**Status**: 🔴 Blocked by Epic 0 Phase 1, Epic 3
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

20 concept cards + 8 example cards with warning indicators and ethics principles.

---

### Epic 7.5: Create Missing Risk Articles
**Status**: ⏳ Ready
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

Write 8 missing Risk path articles covering harms taxonomy, ethics, and governance.

---

### Epic 8: Responsibility Path Implementation
**Status**: 🔴 Blocked by Epic 0 Phase 3, Epic 3
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

75 concept cards (largest path) covering EU AI Act, GDPR, US regulations, governance frameworks.

---

### Epic 9: Future Path Implementation
**Status**: 🔴 Blocked by Epic 0 Phase 3, Epic 3
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

20 concept cards covering AGI, career resources, AIGP certification, future trends.

---

### Epic 10: Advanced Features
**Status**: 🔴 Blocked by Epic 8, 9
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

Global search, bookmark system, progress tracking, print-friendly study guides.

---

### Epic 11: SEO & Performance
**Status**: 🔴 Blocked by Epic 10
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

Meta tags, image optimization, lazy loading, Lighthouse score >90.

---

### Epic 12: Testing & QA
**Status**: 🔴 Blocked by Epic 11
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

Unit tests, integration tests, accessibility audit, cross-browser testing.

---

### Epic 13: Documentation & Handoff
**Status**: 🔴 Blocked by Epic 12
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

Developer docs, content editor guide, architecture decision records.

---

### Epic 14: Launch Preparation
**Status**: 🔴 Blocked by Epic 13
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

Production environment, SSL, analytics, error tracking, backup systems.

---

### Epic 15: Post-Launch Monitoring
**Status**: 🔴 Blocked by Epic 14
**File**: See `/docs/epics/REMAINING-EPICS-SUMMARY.md` (created on demand)

Performance monitoring, user feedback, bug triage, hotfix process.

---

## Critical Path

**Week -4 to 0**: Epic 0 (images) + Epic 2.5/5.5/7.5 (articles)
↓
**Week 1**: Epic 1 (homepage)
↓
**Week 2-3**: Epic 2 (History) + Epic 3 (infrastructure)
↓
**Week 4-5**: Epic 4 (navigation) + Epic 5 (Terminology)
↓
**Week 6-7**: Epic 6 (article detail) + Epic 7 (Risk)
↓
**Week 8-9**: Epic 8 (Responsibility)
↓
**Week 10**: Epic 9 (Future) + Epic 10 (advanced features)
↓
**Week 11**: Epic 11 (SEO/performance)
↓
**Week 12-13**: Epic 12 (testing)
↓
**Week 14**: Epic 13 (documentation)
↓
**Week 15**: Epic 14 (launch prep)
↓
**Week 16**: Epic 15 (monitoring) + Launch 🚀

---

## Success Metrics

### Technical Metrics
- ✅ Lighthouse Performance Score: ≥90
- ✅ WCAG 2.1 AAA Compliance: 100%
- ✅ Cross-browser Support: Chrome, Firefox, Safari, Edge
- ✅ Mobile Responsive: All breakpoints tested
- ✅ Test Coverage: ≥80%

### Content Metrics
- ✅ Total Articles: 162 (140 exist + 22 new)
- ✅ Total Images: 187 (all optimized <200KB)
- ✅ Knowledge Graph: 100% complete
- ✅ Cross-references: All validated

### User Experience Metrics
- ✅ Average Session Time: ≥20 minutes
- ✅ Cards Expanded per Session: ≥4
- ✅ Cross-reference Click Rate: ≥30%
- ✅ Bookmark Usage: ≥20% of users
- ✅ Return Visitor Rate: ≥40% within 30 days

---

**Last Updated**: 2025-12-23
**Owner**: Sunil
**Status**: V2 Clean Slate Ready - Epic 0 Phase 1 in progress

**Note**: Detailed epic files exist for Epics 0-4 and 16. Epics 5-15 documented in REMAINING-EPICS-SUMMARY.md (created on demand for active work).
