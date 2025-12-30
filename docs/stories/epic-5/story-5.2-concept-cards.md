# Story 5.2: Implement 14 Concept Cards

**Epic**: 5 - Terminology Path Implementation
**Story ID**: 5.2
**Priority**: P1 (High)
**Estimated Effort**: 12-16 hours
**Dependencies**: Story 5.1, Epic 5.5 (Terminology Content)
**Assigned To**: TBD

---

## Story Description

Create all 14 Terminology concept cards with expand/collapse functionality, scroll-pinning animation, and keyboard navigation.

---

## User Story

**As a** user learning AI terminology
**I want** to read concept definitions in expandable cards
**So that** I can focus on one concept at a time without scrolling fatigue

---

## Acceptance Criteria

- [ ] All 14 concept cards render with content
- [ ] Cards expand/collapse smoothly (60fps)
- [ ] Curved box highlights visible for definitions
- [ ] Scroll-pinning animation works (card slides up on scroll)
- [ ] Keyboard navigation functional
- [ ] Screen reader announces card state changes

---

## 14 Concept Cards to Implement

1. Machine Learning Fundamentals - What Is ML and How Does It Work?
2. Supervised vs. Unsupervised Learning - Key Differences Explained
3. Deep Learning Basics - Neural Networks Demystified
4. Training Data - The Foundation of ML Systems
5. Model Accuracy vs. Precision - Understanding ML Metrics
6. Feature Engineering - The Art of Data Preparation
7. Transfer Learning - Building on Pre-Trained Models
8. Reinforcement Learning - How AI Learns Through Trial and Error
9. Generative AI - Creating New Content with AI
10. Foundation Models - Large-Scale AI Systems Explained
11. Model Training Pipeline - From Data to Deployment
12. Fine-Tuning - Adapting Models to Specific Use Cases
13. Natural Language Processing - How AI Understands Text
14. MLOps - Managing ML Systems in Production

---

## Tasks

- [ ] Import article content from Epic 5.5 markdown files
- [ ] Implement ConceptCard component with expand/collapse
- [ ] Add GSAP ScrollTrigger for scroll-pinning animation
- [ ] Implement curved box styling for key insights
- [ ] Add card state management (expanded/collapsed)
- [ ] Ensure keyboard navigation works (Enter/Space/Escape)
- [ ] Add screen reader announcements for state changes
- [ ] Test animation performance (60fps target)
- [ ] Implement card index mini-map in sidebar

---

## Technical Specifications

**ConceptCard Component**:
```typescript
interface ConceptCardProps {
  id: string;
  title: string;
  content: MDXRemoteSerializeResult;
  isExpanded: boolean;
  onToggle: () => void;
}
```

**GSAP ScrollTrigger**:
- Pin card on scroll when user reaches it
- Slide card up when user scrolls past
- Smooth transitions with 60fps performance

**Accessibility**:
- `role="button"` on card header
- `aria-expanded` state
- `aria-controls` pointing to content ID
- Focus management on expansion

---

## Definition of Done

- All 14 cards render with complete content
- Expand/collapse animation smooth and performant
- Keyboard navigation fully functional
- Screen reader accessible
- Animation performance verified (Chrome DevTools)

---

**Story Status**: Ready to Start
**Blockers**: Epic 5.5 (Content Creation)
**Previous Story**: 5.1 - Routing & Layout
**Next Story**: 5.3 - Technical Diagrams
