# Story 5.1: Terminology Path Routing & Layout

**Epic**: 5 - Terminology Path Implementation
**Story ID**: 5.1
**Priority**: P1 (High)
**Estimated Effort**: 4-6 hours
**Dependencies**: Epic 3 (All Paths Infrastructure)
**Assigned To**: TBD

---

## Story Description

Set up routing and page layout for the Terminology learning path with sticky sidebar, breadcrumb navigation, and SEO metadata.

---

## User Story

**As a** user learning AI terminology
**I want** to navigate to the Terminology path and see a clear layout
**So that** I can access all terminology concepts in an organized way

---

## Acceptance Criteria

- [ ] `/learn/terminology` loads successfully
- [ ] Page layout matches Figma wireframes
- [ ] Sticky sidebar visible on scroll
- [ ] Breadcrumbs show: Home > Learn > Terminology
- [ ] Meta tags include primary keywords
- [ ] JSON-LD structured data validates

---

## Tasks

- [ ] Create `/app/learn/terminology/page.tsx` with SSG
- [ ] Implement page layout matching architecture design
- [ ] Add sticky sidebar with mini-map
- [ ] Implement breadcrumb navigation
- [ ] Set up SEO metadata (title, description, OG tags)
- [ ] Add structured data (Article schema, BreadcrumbList)
- [ ] Test SSG build and verify page generation
- [ ] Verify routing from homepage and navigation menu

---

## Technical Specifications

**File**: `/app/learn/terminology/page.tsx`

```typescript
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI Terminology - Learn Core ML & AI Concepts | AIDefence',
    description: '14 essential AI and machine learning concepts explained for governance professionals',
    openGraph: {
      title: 'AI Terminology Learning Path',
      description: 'Master core AI/ML terminology',
    },
  };
}

export default async function TerminologyPage() {
  const cards = await getTerminologyCards();
  return <TerminologyPath cards={cards} />;
}
```

**SEO Keywords**: AI terminology, machine learning concepts, deep learning basics, AI governance training

---

## Definition of Done

- `/learn/terminology` route functional
- Layout matches design spec
- SEO metadata complete
- Structured data validates with Google Rich Results Test
- Page renders correctly on SSG build

---

**Story Status**: Ready to Start
**Blockers**: Epic 3 (Infrastructure) must be complete
**Next Story**: 5.2 - Implement 14 Concept Cards
