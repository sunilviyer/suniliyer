# Epic 5: Terminology Path Implementation

**Status**: Not Started
**Priority**: P1 (High - Core Feature)
**Owner**: TBD
**Estimated Effort**: 32-40 hours (4-5 days)
**Dependencies**: Epic 3 (All Paths Infrastructure), Epic 5.5 (Terminology Content Creation)
**Blocks**: Epic 6 (Article Detail View), Epic 10 (Advanced Features)

---

## Epic Goal

Implement the complete Terminology learning path with 14 concept cards, technical diagrams, code examples, and cross-references. This path teaches core AI/ML terminology to business professionals entering the AI governance space.

---

## Success Criteria

- `/learn/terminology` route functional with complete layout
- All 14 concept cards implemented with expand/collapse functionality
- Technical diagrams and code syntax highlighting working
- Cross-references to History, Risk, and Responsibility paths functional
- Mobile responsive (320px - 1440px+)
- WCAG 2.1 AA compliant
- Lighthouse score ≥90

---

## Story Breakdown

### Story 5.1: Terminology Path Routing & Layout

**Goal**: Set up routing and page layout for Terminology path

**Tasks**:
1. Create `/app/learn/terminology/page.tsx` with SSG
2. Implement page layout matching architecture design
3. Add sticky sidebar with mini-map
4. Implement breadcrumb navigation
5. Set up SEO metadata (title, description, OG tags)
6. Add structured data (Article schema, BreadcrumbList)

**Acceptance Criteria**:
- [ ] `/learn/terminology` loads successfully
- [ ] Page layout matches Figma wireframes
- [ ] Sticky sidebar visible on scroll
- [ ] Breadcrumbs show: Home > Learn > Terminology
- [ ] Meta tags include primary keywords
- [ ] JSON-LD structured data validates

**Estimated Effort**: 4-6 hours

---

### Story 5.2: Implement 14 Concept Cards

**Goal**: Create all 14 Terminology concept cards with full content

**Concept Cards**:
1. What is Machine Learning?
2. Supervised vs. Unsupervised Learning
3. Deep Learning Basics
4. Training Data
5. Model Accuracy vs. Precision
6. Feature Engineering
7. Transfer Learning
8. Reinforcement Learning
9. Generative AI
10. Foundation Models
11. Model Training Pipeline
12. Fine-Tuning
13. Natural Language Processing
14. MLOps

**Tasks**:
1. Import article content from Epic 5.5
2. Implement ConceptCard component with expand/collapse
3. Add GSAP ScrollTrigger for scroll-pinning animation
4. Implement curved box styling for key insights
5. Add card state management (expanded/collapsed)
6. Ensure keyboard navigation works (Enter/Space/Escape)

**Acceptance Criteria**:
- [ ] All 14 concept cards render with content
- [ ] Cards expand/collapse smoothly (60fps)
- [ ] Curved box highlights visible for definitions
- [ ] Scroll-pinning animation works (card slides up on scroll)
- [ ] Keyboard navigation functional
- [ ] Screen reader announces card state changes

**Estimated Effort**: 12-16 hours

---

### Story 5.3: Add Technical Diagrams & Visualizations

**Goal**: Integrate technical diagrams for ML/AI concepts

**Diagrams Needed**:
1. ML Pipeline flowchart (data → training → model → prediction)
2. Supervised vs Unsupervised comparison table
3. Neural network architecture diagram
4. Training/validation/test data split visualization
5. Precision vs. Recall confusion matrix
6. Transfer learning architecture diagram

**Tasks**:
1. Create/source diagram SVGs or images
2. Implement diagram component with zoom capability
3. Add diagrams to relevant concept cards
4. Ensure diagrams are responsive (mobile-friendly)
5. Add alt text for accessibility
6. Optimize images (<50KB each)

**Acceptance Criteria**:
- [ ] At least 6 diagrams integrated
- [ ] Diagrams are clear and readable on mobile
- [ ] Zoom functionality works on diagram click
- [ ] Alt text descriptive for screen readers
- [ ] All images optimized (<50KB)

**Estimated Effort**: 4-6 hours

---

### Story 5.4: Implement Code Examples with Syntax Highlighting

**Goal**: Add code examples with proper syntax highlighting

**Code Examples Needed**:
1. Simple supervised learning example (Python/scikit-learn)
2. Neural network definition (PyTorch/TensorFlow)
3. Data preprocessing example
4. Model training loop
5. Transfer learning implementation

**Tasks**:
1. Integrate Prism.js or Highlight.js for syntax highlighting
2. Create CodeBlock component with copy button
3. Add code examples to relevant concept cards
4. Support multiple languages (Python, JavaScript)
5. Implement dark mode compatible color scheme
6. Add line numbering and filename display

**Acceptance Criteria**:
- [ ] Syntax highlighting works for Python code
- [ ] Copy button copies code to clipboard
- [ ] Dark mode syntax theme looks good
- [ ] Code blocks are responsive on mobile
- [ ] Line numbers displayed (optional toggle)

**Estimated Effort**: 3-4 hours

---

### Story 5.5: Cross-References to Other Paths

**Goal**: Implement cross-reference links to History, Risk, Responsibility paths

**Cross-References**:
- Terminology → History (AI timeline, ML breakthroughs)
- Terminology → Risk (bias in ML, hallucinations in LLMs)
- Terminology → Responsibility (governance of foundation models)

**Tasks**:
1. Add cross-reference links in article content
2. Implement CrossRefLink component with icon
3. Add "Related Cards" sidebar widget
4. Ensure cross-path navigation works (scroll to target card)
5. Add back navigation after cross-path jump
6. Track cross-reference clicks in analytics

**Acceptance Criteria**:
- [ ] Cross-reference links visually distinct (icon + color)
- [ ] Clicking cross-ref navigates to target path/card
- [ ] Sidebar shows related cards from other paths
- [ ] Back button returns to original location
- [ ] Analytics track cross-ref usage

**Estimated Effort**: 4-5 hours

---

### Story 5.6: Mobile Responsive Implementation

**Goal**: Ensure Terminology path works perfectly on mobile devices

**Tasks**:
1. Test layout on mobile (320px - 767px)
2. Implement mobile-specific card expansion (full-screen modal)
3. Adjust diagram sizes for mobile
4. Ensure code blocks scroll horizontally if needed
5. Test touch interactions (swipe, tap)
6. Optimize performance on mobile (lazy load images)

**Acceptance Criteria**:
- [ ] Layout works on iPhone SE (320px width)
- [ ] Cards expand full-screen on mobile
- [ ] Diagrams readable on small screens
- [ ] No horizontal scroll (except code blocks intentionally)
- [ ] Touch targets minimum 44x44px
- [ ] Page loads <3s on 4G connection

**Estimated Effort**: 3-4 hours

---

### Story 5.7: Accessibility Audit & Fixes

**Goal**: Ensure WCAG 2.1 AA compliance for Terminology path

**Tasks**:
1. Run axe DevTools accessibility scan
2. Test keyboard navigation (Tab, Enter, Space, Escape)
3. Test with screen reader (NVDA/VoiceOver)
4. Check color contrast ratios (≥7:1 for AAA)
5. Add ARIA labels where needed
6. Implement skip links
7. Test focus management on card expansion

**Acceptance Criteria**:
- [ ] Zero critical accessibility violations (axe)
- [ ] All functionality accessible via keyboard
- [ ] Screen reader announces all interactive elements
- [ ] Focus indicators visible (3px outline)
- [ ] Skip to main content link works
- [ ] Color contrast meets AAA (7:1)

**Estimated Effort**: 2-3 hours

---

### Story 5.8: Performance Optimization & Testing

**Goal**: Achieve Lighthouse score ≥90 on Terminology path

**Tasks**:
1. Optimize images (WebP format, lazy loading)
2. Code split large components (dynamic imports)
3. Implement Intersection Observer for lazy loading
4. Minimize bundle size (tree shaking)
5. Add proper cache headers
6. Run Lighthouse audit and fix issues

**Acceptance Criteria**:
- [ ] Lighthouse Performance ≥90
- [ ] Lighthouse Accessibility ≥90
- [ ] Lighthouse Best Practices ≥90
- [ ] Lighthouse SEO ≥90
- [ ] FCP <1.5s, LCP <2.5s, CLS <0.1

**Estimated Effort**: 2-3 hours

---

## Implementation Sequence

### Week 1: Core Implementation (Stories 5.1-5.2)
**Estimated: 16-22 hours**

Set up routing, layout, and implement all 14 concept cards.

**Output**: Terminology path accessible with all content visible

---

### Week 2: Enhancements (Stories 5.3-5.5)
**Estimated: 11-15 hours**

Add diagrams, code examples, and cross-references.

**Output**: Terminology path feature-complete

---

### Week 2: Polish (Stories 5.6-5.8)
**Estimated: 7-10 hours**

Mobile optimization, accessibility, performance tuning.

**Output**: Production-ready Terminology path

---

## Total Effort Estimate

| Story | Focus | Hours |
|-------|-------|-------|
| 5.1 | Routing & Layout | 4-6 |
| 5.2 | 14 Concept Cards | 12-16 |
| 5.3 | Diagrams | 4-6 |
| 5.4 | Code Examples | 3-4 |
| 5.5 | Cross-References | 4-5 |
| 5.6 | Mobile Responsive | 3-4 |
| 5.7 | Accessibility | 2-3 |
| 5.8 | Performance | 2-3 |
| **TOTAL** | **8 Stories** | **34-47 hours** |

---

## Dependencies

**Epic 5 blocks**:
- Epic 6 (Article Detail View - needs Terminology as reference)
- Epic 10 (Advanced Features - needs at least one complete path)

**Epic 5 depends on**:
- Epic 3 (All Paths Infrastructure - shared components, routing)
- Epic 5.5 (Terminology Content Creation - article content)
- Epic 0 Story 0.2 (Terminology Images - 14 concept images)

---

## Technical Specifications

**Component Structure**:
```
/app/learn/terminology/page.tsx
/components/paths/TerminologyPath.tsx
/components/cards/ConceptCard.tsx
/components/diagrams/DiagramViewer.tsx
/components/code/CodeBlock.tsx
/components/navigation/CrossRefLink.tsx
/components/sidebar/RelatedCardsSidebar.tsx
```

**Data Structure**:
```typescript
interface ConceptCard {
  id: string;
  title: string;
  slug: string;
  tldr: string;
  content: MDXRemoteSerializeResult;
  diagrams?: string[];
  codeExamples?: CodeExample[];
  crossRefs: CrossReference[];
  tags: string[];
}
```

**Animation Performance**:
- GSAP ScrollTrigger for card scroll-pinning
- 60fps target for smooth animations
- GPU-accelerated properties only (transform, opacity)

---

## Success Metrics

- Path engagement: Users expand ≥4 of 14 cards per visit
- Cross-reference usage: ≥30% of users click cross-refs
- Session duration: ≥15 minutes average
- Mobile traffic: ≥40% of visits from mobile devices
- Accessibility: Zero WCAG AA violations
- Performance: Lighthouse score ≥90 all categories

---

## Files & References

**Created in This Epic**:
- `/app/learn/terminology/page.tsx`
- `/components/paths/TerminologyPath.tsx`
- Various supporting components

**Referenced**:
- `/docs/epics/epic-5.5-terminology-content-creation.md` - Content source
- `/docs/architecture.md` - Technical architecture
- `/docs/ux-design-specification.md` - Design specs

---

**Epic Status**: Ready to start after Epic 3 and Epic 5.5 complete
**Blockers**: Epic 3 (Infrastructure), Epic 5.5 (Content)
**Owner**: TBD
