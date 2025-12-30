# Story 5.7: Accessibility Audit & Fixes

**Epic**: 5 - Terminology Path Implementation
**Story ID**: 5.7
**Priority**: P1 (High)
**Estimated Effort**: 2-3 hours
**Dependencies**: Stories 5.1-5.6
**Assigned To**: TBD

---

## Story Description

Ensure WCAG 2.1 AA compliance (targeting AAA where possible) for the Terminology path through comprehensive accessibility testing and fixes.

---

## User Story

**As a** user with disabilities
**I want** the Terminology path to be fully accessible
**So that** I can learn AI concepts regardless of my abilities

---

## Acceptance Criteria

- [ ] Zero critical accessibility violations (axe DevTools)
- [ ] All functionality accessible via keyboard
- [ ] Screen reader announces all interactive elements
- [ ] Focus indicators visible (3px outline)
- [ ] Skip to main content link works
- [ ] Color contrast meets AAA (7:1)

---

## Tasks

- [ ] Run axe DevTools accessibility scan
- [ ] Test keyboard navigation (Tab, Enter, Space, Escape)
- [ ] Test with screen reader (NVDA/VoiceOver)
- [ ] Check color contrast ratios (≥7:1 for AAA)
- [ ] Add ARIA labels where needed
- [ ] Implement skip links
- [ ] Test focus management on card expansion
- [ ] Fix all critical and serious violations

---

## Accessibility Checklist

**Keyboard Navigation**:
- [ ] Tab through all interactive elements
- [ ] Enter/Space expands/collapses cards
- [ ] Escape closes expanded cards
- [ ] No keyboard traps

**Screen Reader**:
- [ ] Page title announced
- [ ] Headings hierarchy correct (h1 → h2 → h3)
- [ ] Card state announced (expanded/collapsed)
- [ ] All images have descriptive alt text
- [ ] ARIA labels on complex widgets

**Visual**:
- [ ] Focus indicators visible (3px outline, 3:1 contrast)
- [ ] Color contrast ≥7:1 for text (AAA)
- [ ] Color contrast ≥4.5:1 for UI components (AA)
- [ ] No reliance on color alone for meaning

**Structure**:
- [ ] Skip to main content link
- [ ] Landmark regions (nav, main, aside)
- [ ] Proper heading hierarchy

---

## Tools to Use

- **axe DevTools** - Automated accessibility scanning
- **NVDA** (Windows) or **VoiceOver** (Mac) - Screen reader testing
- **WAVE** - Additional accessibility evaluation
- **Chrome DevTools Lighthouse** - Accessibility audit

---

## Definition of Done

- Zero critical axe violations
- Keyboard navigation fully functional
- Screen reader tested and working
- Color contrast meets AAA
- All accessibility requirements met

---

**Story Status**: Ready to Start
**Previous Story**: 5.6 - Mobile Responsive
**Next Story**: 5.8 - Performance Optimization
