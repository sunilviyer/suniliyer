# AIDefence V2 - Complete Implementation Roadmap

**Last Updated**: 2025-12-22
**Status**: Epic 0 Phase 1 in progress
**Total Effort**: 654-866 hours (22-24 weeks including new requirements)

---

## Project Overview

AIDefence V2 is an AI governance learning platform with 5 learning paths (History, Terminology, Risk, Responsibility, Future), featuring interactive StackCards animation, 162 articles, 187 images, and expert-curated content by Sunil Seshan.

### Key Technologies
- **Framework**: Next.js 14 (App Router)
- **Template**: Rayo (animations, structure) + AIDefence customization
- **Styling**: Tailwind CSS + UX spec earth-tone palette
- **Animations**: GSAP (StackCards), Framer Motion (transitions)
- **Content**: MDX articles, YAML knowledge graph
- **Deployment**: Vercel

### Rayo Template Integration
- ✅ **Use from Rayo**: StackCards animation, page transitions, responsive patterns, GSAP utilities
- ✅ **Customize**: Colors (earth tones), logo (AIDefence), branding (Seshan Intelligence)
- ✅ **Replace**: Blog → Learning paths, Portfolio → Concept cards

---

## Epic Summary (16 Epics Total)

| Epic | Name | Stories | Effort (hrs) | Status |
|------|------|---------|--------------|--------|
| **0** | Image Generation Strategy | 10 | 78-98 | 🟡 Phase 1 |
| **1** | Homepage Foundation (Rayo base) | 6 | 24-32 | ⏳ Ready |
| **2** | History Path Implementation | 8 | 32-40 | ⏳ Ready |
| **2.5** | Create History Articles (4) | 4 | 16-24 | ⏳ Ready |
| **3** | All Paths Infrastructure | 7 | 28-36 | 🔴 Blocked |
| **4** | Navigation & Filtering | 6 | 24-32 | 🔴 Blocked |
| **5** | Terminology Path | 8 | 32-40 | 🔴 Blocked |
| **5.5** | Create Terminology Articles (10) | 10 | 40-60 | ⏳ Ready |
| **6** | Article Detail & MDX | 9 | 36-48 | 🔴 Blocked |
| **7** | Risk Path | 8 | 32-40 | 🔴 Blocked |
| **7.5** | Create Risk Articles (8) | 8 | 32-48 | ⏳ Ready |
| **8** | Responsibility Path (75 cards) | 8 | 32-40 | 🔴 Blocked |
| **9** | Future Path | 8 | 32-40 | 🔴 Blocked |
| **10** | Advanced Features (Search, Bookmarks) | 12 | 48-64 | 🔴 Blocked |
| **11** | SEO & Performance | 8 | 32-40 | 🔴 Blocked |
| **12** | Testing & QA | 10 | 40-56 | 🔴 Blocked |
| **13** | Documentation | 6 | 24-32 | 🔴 Blocked |
| **14** | Launch Preparation | 8 | 32-40 | 🔴 Blocked |
| **15** | Post-Launch Monitoring | 5 | 20-28 | 🔴 Blocked |
| **16** | Personal Branding (NEW) | 5 | 20-28 | 🔴 Blocked |
| **TOTAL** | **16 Epics** | **162** | **654-866** | - |

---

## Implementation Timeline

### Phase 0: Pre-Implementation (Weeks -6 to 0)

**Goal**: Complete all content and assets

| Week | Epic | Deliverables | Hours |
|------|------|--------------|-------|
| -6 | Epic 0 Phase 1 | 37 images (Risk + Resources + Examples) | 15-20 |
| -5 | Epic 0 Phase 2 | Knowledge graph metadata (95 cards) | 18-22 |
| -4 to -3 | Epic 0 Phase 3 | 116 images (Responsibility + Future) | 41-50 |
| -2 | Epic 2.5 | 4 History articles | 16-24 |
| -2 to -1 | Epic 5.5 | 10 Terminology articles | 40-60 |
| -1 | Epic 7.5 | 8 Risk articles | 32-48 |

**Output**: 187 images + 22 articles (100% content ready)

---

### Phase 1: Foundation (Weeks 1-3)

**Goal**: Core infrastructure with Rayo template integration

| Week | Epic | Deliverables | Hours |
|------|------|--------------|-------|
| 1 | Epic 1 | Homepage + Vercel deployment (Rayo base) | 24-32 |
| 2-3 | Epic 2 | History path (15 cards with StackCards) | 32-40 |
| 3 | Epic 3 | Shared infrastructure (all paths) | 28-36 |

**Output**: Homepage live + 1 complete learning path

---

### Phase 2: Core Learning Paths (Weeks 4-8)

**Goal**: Terminology and Risk paths

| Week | Epic | Deliverables | Hours |
|------|------|--------------|-------|
| 4 | Epic 4 | Navigation & filtering system | 24-32 |
| 5 | Epic 5 | Terminology path (14 cards) | 32-40 |
| 6-7 | Epic 6 | Article detail pages + MDX | 36-48 |
| 7-8 | Epic 7 | Risk path (20 cards) | 32-40 |

**Output**: 2 more paths + article system

---

### Phase 3: Advanced Paths & Features (Weeks 9-13)

**Goal**: Responsibility, Future paths + advanced features

| Week | Epic | Deliverables | Hours |
|------|------|--------------|-------|
| 9-10 | Epic 8 | Responsibility path (75 cards) | 32-40 |
| 10-11 | Epic 9 | Future path (20 cards) | 32-40 |
| 11-12 | Epic 10 | Search, bookmarks, progress tracking | 48-64 |
| 12-13 | Epic 16 | About Me, Mortgage Calculator, Seshan links | 20-28 |

**Output**: All 5 paths complete + advanced features + personal branding

---

### Phase 4: Optimization & Launch (Weeks 14-18)

**Goal**: Production-ready platform

| Week | Epic | Deliverables | Hours |
|------|------|--------------|-------|
| 14 | Epic 11 | SEO & performance optimization | 32-40 |
| 15-16 | Epic 12 | Testing & QA (WCAG AAA) | 40-56 |
| 17 | Epic 13 | Documentation & handoff | 24-32 |
| 17-18 | Epic 14 | Launch preparation | 32-40 |
| 18 | Epic 15 | Post-launch monitoring setup | 20-28 |

**Output**: Launch-ready platform 🚀

---

## Critical Dependencies

```
Epic 0 (Images) ─┬─> Epic 1 (Homepage)
                 ├─> Epic 2 (History)
                 ├─> Epic 8 (Responsibility - needs Phase 3)
                 └─> Epic 9 (Future - needs Phase 3)

Epic 1 (Homepage) ──> Epic 2 (History) ──> Epic 3 (Infrastructure)

Epic 3 (Infrastructure) ─┬─> Epic 4 (Navigation)
                         ├─> Epic 5 (Terminology)
                         ├─> Epic 6 (Article Detail)
                         ├─> Epic 7 (Risk)
                         ├─> Epic 8 (Responsibility)
                         ├─> Epic 9 (Future)
                         └─> Epic 16 (Personal Branding)

Epics 8, 9 ──> Epic 10 (Advanced Features)

Epic 10 ──> Epic 11 (SEO) ──> Epic 12 (Testing) ──> Epic 13 (Docs) ──> Epic 14 (Launch) ──> Epic 15 (Monitoring)
```

---

## New Requirements (Epic 16)

### Seshan Intelligence Integration
- Header link to Seshan Intelligence company site
- Footer branding with Seshan Intelligence
- "Powered by Seshan Intelligence" attribution
- Links open in new tab

### About Me Page
- Professional bio and headshot
- Complete resume (Experience, Education, Certifications)
- AIGP credentials highlighted
- Download resume as PDF
- Contact information
- SEO optimized with Schema.org Person markup

### Mortgage Calculator
- Interactive calculator with inputs:
  - Home price, down payment, interest rate
  - Loan term (15 or 30 years)
  - Property tax, insurance, HOA
- Results display:
  - Monthly payment breakdown
  - Total interest over life of loan
  - Amortization schedule (year-by-year)
- Export to CSV option
- Matches AIDefence earth-tone design

### Tools Section
- Tools landing page (`/tools`)
- Mortgage calculator as first tool
- Framework for future tools (AI risk assessment, etc.)

---

## File Structure

```
/Volumes/External/aidefence/
  /docs/
    /epics/
      epic-0-image-generation-strategy.md     ✅ COMPLETE
      epic-1-homepage-foundation.md           ✅ COMPLETE (Updated for Rayo)
      epic-2-history-path.md                  ✅ COMPLETE
      epic-2.5-history-articles.md            ✅ COMPLETE
      epic-3-all-paths-infrastructure.md      ✅ COMPLETE
      epic-4-navigation-filtering.md          ✅ COMPLETE
      epic-16-personal-branding-features.md   ✅ COMPLETE
      REMAINING-EPICS-SUMMARY.md              ✅ Summary of Epics 5-15
      epic-index.md                           ✅ High-level overview
      README.md                               ✅ Epic directory guide
    epic-0-phase-1-checklist.md               ✅ Action checklist
    image-generation-prompts.md               ✅ 37 prompts ready
    learning-paths-color-system.md            ✅ UX spec colors
    IMPLEMENTATION-ROADMAP.md                 ✅ This document
```

---

## Quick Start Guide

### For Content Creators (Start Now):
1. **Epic 2.5**: Write 4 History articles (16-24 hrs)
   - The Building Blocks – What AI Actually Is
   - The AI Family Tree
   - Machine Learning Demystified
2. **Epic 5.5**: Write 10 Terminology articles (40-60 hrs)
3. **Epic 7.5**: Write 8 Risk articles (32-48 hrs)

### For Image Generators (Start Now):
1. **Epic 0 Phase 1**: Generate 37 images (15-20 hrs)
   - Use prompts from `/docs/image-generation-prompts.md`
   - 20 Risk concept cards
   - 10 Resource cards
   - 7 Example cards
2. **Epic 0 Phase 2**: Complete knowledge graph metadata (18-22 hrs)
3. **Epic 0 Phase 3**: Generate 116 remaining images (41-50 hrs)

### For Developers (Week 1):
1. **Epic 1**: Set up Next.js from Rayo template (24-32 hrs)
   - Extract Rayo animations and structure
   - Apply AIDefence branding and colors
   - Deploy to Vercel
2. **Epic 2**: Implement History path (32-40 hrs)
   - Adapt Rayo StackCards for learning paths
   - Integrate 15 History concept cards

---

## Success Metrics

### Technical
- ✅ Lighthouse Performance: ≥90
- ✅ WCAG 2.1 AAA: 100% compliance
- ✅ Test Coverage: ≥80%
- ✅ Build Time: <3 minutes
- ✅ Page Load: <2 seconds (3G)

### Content
- ✅ 162 articles published
- ✅ 187 images optimized (<200KB each)
- ✅ 100% knowledge graph completeness
- ✅ All cross-references validated

### User Experience
- ✅ Average session: ≥20 minutes
- ✅ Cards per session: ≥4
- ✅ Cross-reference clicks: ≥30%
- ✅ Bookmark usage: ≥20%
- ✅ Return visitors: ≥40% (30 days)

### Personal Branding (Epic 16)
- ✅ About page views: >10% of site traffic
- ✅ Seshan Intelligence CTR: >10%
- ✅ Mortgage calculator usage: >5% of sessions
- ✅ Resume downloads: Track engagement

---

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Rayo template integration conflicts | High | Extract components incrementally, test early |
| Content creation delays (22 articles) | High | Start immediately, run parallel with development |
| Image generation delays (187 images) | High | Batch process, use Midjourney batch mode |
| Knowledge graph metadata incomplete | Medium | Dedicate Epic 0 Phase 2 to completion |
| Mortgage calculator complexity | Low | Use proven algorithm, test thoroughly |

---

## Next Actions (Immediate)

### This Week:
1. ✅ **Epic 0 Phase 1**: Generate 37 images (Risk + Resources + Examples)
2. ✅ **Epic 2.5**: Start writing 4 History articles
3. ⏳ **Epic 1**: Set up Next.js project from Rayo template

### Next Week:
1. ⏳ **Epic 0 Phase 2**: Complete knowledge graph metadata
2. ⏳ **Epic 5.5**: Start Terminology articles
3. ⏳ **Epic 2**: Implement History path

### Week 3:
1. ⏳ **Epic 0 Phase 3**: Generate remaining 116 images
2. ⏳ **Epic 3**: Build shared infrastructure
3. ⏳ **Epic 7.5**: Start Risk articles

---

## Documentation Links

- **[Epic Index](./epics/epic-index.md)** - Complete epic listing
- **[Epic 0 Phase 1 Checklist](./epic-0-phase-1-checklist.md)** - Action items
- **[Image Prompts](./image-generation-prompts.md)** - 37 ready-to-use prompts
- **[Color System](./learning-paths-color-system.md)** - UX spec palette
- **[PRD](./aidefence-v2-prd.md)** - Product requirements
- **[UX Spec](./ux-design-specification.md)** - Design system

---

## Questions & Clarifications

- **Rayo Template Location**: `/Volumes/External/AIDefence/rayo-digital-agency-personal-portfolio-nextjs-template/`
- **Seshan Intelligence URL**: https://seshanintelligence.com (assumed - confirm)
- **Resume PDF**: Needs to be provided or created
- **Professional Headshot**: Needs to be provided
- **Mortgage Calculator**: Standard implementation or custom requirements?

---

**Status**: Epic 0 Phase 1 ready to execute
**Owner**: Sunil Seshan
**Launch Target**: Week 18 (approximately 4-5 months from start)
