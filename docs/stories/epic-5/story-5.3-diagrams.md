# Story 5.3: Add Technical Diagrams & Visualizations

**Epic**: 5 - Terminology Path Implementation
**Story ID**: 5.3
**Priority**: P2 (Medium)
**Estimated Effort**: 4-6 hours
**Dependencies**: Story 5.2
**Assigned To**: TBD

---

## Story Description

Integrate technical diagrams for ML/AI concepts with zoom capability and mobile-responsive design.

---

## User Story

**As a** visual learner
**I want** to see diagrams explaining complex ML concepts
**So that** I can understand technical architectures more easily

---

## Acceptance Criteria

- [ ] At least 6 diagrams integrated
- [ ] Diagrams are clear and readable on mobile
- [ ] Zoom functionality works on diagram click
- [ ] Alt text descriptive for screen readers
- [ ] All images optimized (<50KB)

---

## Diagrams to Create/Integrate

1. **ML Pipeline Flowchart** - Data → Training → Model → Prediction
2. **Supervised vs Unsupervised Comparison** - Side-by-side table/diagram
3. **Neural Network Architecture** - Input → Hidden Layers → Output
4. **Data Split Visualization** - Training (70%) / Validation (15%) / Test (15%)
5. **Confusion Matrix** - Precision vs. Recall visualization
6. **Transfer Learning Architecture** - Pre-trained model → Fine-tuning layers

---

## Tasks

- [ ] Create/source diagram SVGs or images
- [ ] Implement DiagramViewer component with zoom capability
- [ ] Add diagrams to relevant concept cards
- [ ] Ensure diagrams are responsive (mobile-friendly)
- [ ] Add descriptive alt text for accessibility
- [ ] Optimize images (WebP format, <50KB each)
- [ ] Test zoom functionality on mobile and desktop
- [ ] Verify alt text with screen reader

---

## Technical Specifications

**DiagramViewer Component**:
```typescript
interface DiagramViewerProps {
  src: string;
  alt: string;
  caption?: string;
  zoomable?: boolean;
}
```

**Image Optimization**:
- Format: WebP with PNG fallback
- Max size: 50KB
- Responsive sizes: 320px, 640px, 1024px
- Lazy loading with Intersection Observer

---

## Definition of Done

- 6+ diagrams integrated into concept cards
- Zoom functionality working
- Mobile responsive
- Accessibility verified
- Image optimization complete

---

**Story Status**: Ready to Start
**Previous Story**: 5.2 - Concept Cards
**Next Story**: 5.4 - Code Examples
