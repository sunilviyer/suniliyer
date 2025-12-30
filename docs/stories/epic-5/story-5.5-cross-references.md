# Story 5.5: Cross-References to Other Paths

**Epic**: 5 - Terminology Path Implementation
**Story ID**: 5.5
**Priority**: P2 (Medium)
**Estimated Effort**: 4-5 hours
**Dependencies**: Story 5.2, Epic 2 (History Path)
**Assigned To**: TBD

---

## Story Description

Implement cross-reference links to History, Risk, and Responsibility paths to enable learning path connections.

---

## User Story

**As a** learner exploring AI governance
**I want** to see connections between terminology and other learning paths
**So that** I can deepen my understanding with related content

---

## Acceptance Criteria

- [ ] Cross-reference links visually distinct (icon + color)
- [ ] Clicking cross-ref navigates to target path/card
- [ ] Sidebar shows related cards from other paths
- [ ] Back button returns to original location
- [ ] Analytics track cross-ref usage

---

## Cross-Reference Patterns

**Terminology → History**:
- ML Fundamentals → History of Machine Learning
- Deep Learning → Neural Network Renaissance (2012)

**Terminology → Risk**:
- Training Data → Bias in Training Data
- Generative AI → Deepfakes and Misinformation
- Foundation Models → Black Box Problem

**Terminology → Responsibility**:
- Foundation Models → EU AI Act Foundation Model Provisions
- MLOps → Model Governance Requirements

---

## Tasks

- [ ] Add cross-reference links in article content (MDX)
- [ ] Implement CrossRefLink component with icon
- [ ] Add "Related Cards" sidebar widget
- [ ] Ensure cross-path navigation works (scroll to target card)
- [ ] Add back navigation after cross-path jump
- [ ] Track cross-reference clicks in analytics
- [ ] Test navigation between all paths
- [ ] Verify mobile cross-ref experience

---

## Technical Specifications

**CrossRefLink Component**:
```typescript
interface CrossRefLinkProps {
  path: 'history' | 'risk' | 'responsibility' | 'future';
  cardId: string;
  children: React.ReactNode;
}
```

**Related Cards Sidebar**:
- Show 3-5 related cards from other paths
- Pull from knowledge graph relatedConcepts and crossPathRefs
- Update when card changes

---

## Definition of Done

- Cross-reference links functional
- Related cards sidebar implemented
- Navigation working across paths
- Analytics tracking configured
- User experience smooth

---

**Story Status**: Ready to Start
**Previous Story**: 5.4 - Code Examples
**Next Story**: 5.6 - Mobile Responsive
