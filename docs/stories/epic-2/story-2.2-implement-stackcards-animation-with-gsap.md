# Story 2.2: Implement StackCards Animation with GSAP

**Epic**: 2 - History Path Implementation
**Story ID**: 2.2
**Priority**: P0 (First learning path)
**Estimated Effort**: 6-8 hours
**Dependencies**: 2.1
**Assigned To**: Claude Code
**Completed**: 2026-01-02

---

## Goal

Implement GSAP-powered stacking cards animation for the History path, where cards stack and reveal on scroll.

---

## Acceptance Criteria

✅ Install GSAP v3.12.7 with ScrollTrigger plugin
✅ Create HistoryStackCards component with scroll-triggered animations
✅ Each card slides up and stacks on scroll
✅ Cards are pinned during animation sequence
✅ Smooth scrub animation (0.5 second delay)
✅ Sequential card reveals (each card animates at different timeline position)
✅ Proper cleanup of GSAP instances on unmount
✅ Works across all breakpoints (desktop, tablet, mobile)

---

## Implementation Summary

**Files Created/Modified**:
- `components/history/HistoryStackCards.tsx` - Main stacking cards component
- `lib/data/history.ts` - Data utilities for loading history cards from knowledge graph
- `app/globals.css` - Global styles for card animations
- `package.json` - Added GSAP v3.12.7

**Key Features**:
- GSAP ScrollTrigger integration with Next.js 15
- Sequential timeline animation (each card at `index - 1` position)
- Simplified positioning (all cards start at `y: cardHeight`)
- Smooth scrub with `scrub: 0.5` for responsive scrolling
- Proper cleanup with `gsap.context()` and kill methods
- CSS visibility management with `gsap-initialized` class
- 15 history concept cards loading from knowledge-graph.yaml

**Technical Decisions**:
- Used `useLayoutEffect` instead of `useEffect` for synchronous DOM measurements
- Sequential timeline over parallel to create stacking effect
- Disabled markers in production (can be enabled for debugging)
- `willChange: transform` for performance optimization

---

## Tasks

✅ Install GSAP and ScrollTrigger
✅ Create HistoryStackCards component structure
✅ Implement GSAP timeline with sequential card animations
✅ Add scroll trigger with pinning
✅ Set up proper cleanup on component unmount
✅ Test stacking animation on /history route
✅ Fix animation timing for smooth stacking
✅ Verify responsive behavior

---

**Story Status**: ✅ Done
