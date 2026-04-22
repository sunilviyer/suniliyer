# Vidya / Leela Auto-Flip Toggle

## Requirements Document

**Author:** Sunil Iyer
**Date:** April 15, 2026
**Status:** Draft
**Platform:** suniliyer.ca (Next.js)
**Depends on:** Vidya/Leela Toggle PRD v1.0

---

## 1. Summary

This document specifies the auto-flip behavior for the Vidya/Leela toggle on the homepage of suniliyer.ca. The toggle automatically rotates between Vidya (knowledge) and Leela (play) modes on a timed interval, showcasing both sides of the site to new visitors without requiring interaction. When the user hovers over the toggle area, the auto-flip pauses, giving them time to make a deliberate selection. Clicking the toggle switches to manual control.

The goal is to create a living, breathing homepage that feels dynamic on arrival, like a shopfront window that rotates its display, while remaining fully controllable the moment a visitor engages.

---

## 2. Behavior States

The toggle operates in three distinct states. Only one state is active at any time.

### State 1: Auto-flipping (default on page load)

This is the initial state when a visitor first arrives.

- The toggle flips between Vidya and Leela every **5 seconds**
- A thin **progress bar** at the bottom of the toggle pill fills from left to right over 5 seconds, indicating when the next flip will occur
- A small **green pulsing dot** and the text "Auto-flipping between worlds" appears below the toggle
- The card grid performs the full 3D flip animation (as specified in the Toggle PRD) on each cycle
- The page background color transitions between Vidya (cool dark blue) and Leela (warm dark brown) on each flip

### State 2: Paused (on hover)

When the user's cursor enters the toggle area (or the card grid area), the auto-flip pauses.

- The interval timer **stops immediately**; the progress bar resets to zero
- The status indicator changes to an **amber dot** and the text "Paused. Click to select, or move away to resume."
- If the user moves the cursor away without clicking, the auto-flip **resumes from the beginning of a new 5-second cycle**
- No flip animation occurs while paused
- If a flip was mid-animation when the user hovered, it completes naturally (animations are not interrupted mid-flight)

### State 3: Manual (after user clicks)

Once the user clicks the toggle, auto-flip stops permanently for the session.

- The progress bar disappears entirely
- The status text changes to "Manual mode" with a **"Resume auto-flip"** text link
- Clicking the toggle now flips between modes manually, on demand
- Clicking "Resume auto-flip" returns to State 1

---

## 3. State Transition Diagram

```
Page Load
    │
    ▼
┌─────────────┐
│  AUTO-FLIP  │◄──── cursor leaves ──── ┌──────────┐
│  (State 1)  │                         │  PAUSED  │
│             │──── cursor enters ────► │ (State 2)│
└──────┬──────┘                         └────┬─────┘
       │                                     │
       │ click                          click │
       │                                     │
       ▼                                     ▼
┌─────────────┐                              │
│   MANUAL    │◄─────────────────────────────┘
│  (State 3)  │
│             │──── "Resume auto-flip" ────► State 1
└─────────────┘
```

---

## 4. Auto-Flip Timing Specifications

| Parameter | Value | Notes |
|---|---|---|
| Flip interval | 5000ms | Time between the end of one flip and the start of the next |
| Card flip duration | 400ms per card | CSS transform rotateY, GPU-accelerated |
| Card stagger delay | 60ms between cards | Creates the cascade/wave effect |
| Total flip animation time | ~600-800ms | Depends on number of cards in the active mode |
| Progress bar animation | Linear, 5000ms | Fills left to right; resets on hover or after flip |
| Background color transition | 800ms, ease | Page background shifts between Vidya blue and Leela brown |
| Toggle indicator slide | 500ms, cubic-bezier(0.4, 0, 0.2, 1) | The pill slides from one side to the other |

---

## 5. Progress Bar

The progress bar is a critical UX element because it gives the visitor a sense of anticipation and rhythm.

- **Position:** Bottom edge of the toggle pill, inside the border radius
- **Height:** 2px
- **Color:** Matches the active mode accent (Vidya blue at 40% opacity, or Leela red at 40% opacity)
- **Animation:** Fills from 0% to 100% width over the 5-second interval using `requestAnimationFrame` for smooth rendering
- **Reset behavior:** Snaps to 0% instantly when the user hovers, when a flip begins, or when the user clicks
- **Visibility:** Hidden entirely in Manual mode (State 3)

---

## 6. Status Indicator

A single line of text below the toggle communicates the current state.

| State | Dot Color | Text |
|---|---|---|
| Auto-flipping | Green (pulsing) | "Auto-flipping between worlds" |
| Paused | Amber (static) | "Paused. Click to select, or move away to resume." |
| Manual | None | "Manual mode. Resume auto-flip" (link) |

- Font: DM Sans or system sans-serif, 11px
- The green dot uses a CSS pulsing animation (opacity 1 to 0.3, 1.5s cycle)
- "Resume auto-flip" is a clickable text link in the active mode color (Vidya blue or Leela red)

---

## 7. Hover Detection Zone

The hover zone that triggers the pause is intentionally larger than just the toggle pill itself.

- The hover listener is attached to the **outermost container** wrapping the toggle, status text, and card grid
- This means: if the user hovers over any card, the auto-flip also pauses
- Rationale: if a visitor is reading a card title, they should not have it flipped away from under them

---

## 8. Animation Integrity Rules

These rules ensure the flip animation never breaks or produces visual glitches.

1. **No interruption mid-flip.** If a flip animation is in progress, it runs to completion before any state change takes effect. The `isFlipping` flag prevents overlapping animations.
2. **No double-flip.** Clicking the toggle while a flip is animating does nothing. The click is consumed but ignored.
3. **Hover during flip.** If the user hovers during an active flip, the flip completes, then the timer does not restart (enters Paused state).
4. **Stagger integrity.** Each card's flip-out and flip-in animation is offset by 60ms from the previous card. The stagger order follows the grid reading order (left to right, top to bottom).
5. **Content swap at midpoint.** The mode data (Vidya sections vs. Leela sections) swaps at the 90-degree point of the flip, when cards are edge-on and invisible.

---

## 9. Accessibility

| Requirement | Implementation |
|---|---|
| Toggle role | `role="switch"` with `aria-checked` reflecting Leela state |
| State announcement | `aria-live="polite"` region announces mode changes and state transitions |
| Keyboard control | Tab to toggle, Enter/Space to flip. Focus ring visible. |
| Reduced motion | If `prefers-reduced-motion: reduce` is set, auto-flip still rotates but cards swap instantly (no 3D animation). The toggle indicator still slides. |
| Screen reader text | "Vidya Leela toggle. Currently showing Vidya. Auto-rotating. Press Enter to switch manually." |
| Pause mechanism | Auto-flip pauses on keyboard focus (not just hover) to support keyboard-only users |

---

## 10. Mobile Considerations

| Concern | Handling |
|---|---|
| No hover on touch | Auto-flip runs continuously. Tapping anywhere in the card grid pauses it. Tapping the toggle switches to Manual mode. |
| Performance | On devices with limited GPU (detected via `navigator.hardwareConcurrency < 4`), reduce stagger to 30ms and use opacity-only transitions instead of 3D rotateY |
| Card grid layout | Single column on mobile; flip cascade is vertical (top to bottom) |
| Progress bar touch target | The toggle pill is at least 48px tall for comfortable tapping |

---

## 11. Devanagari Labels

The toggle pill displays the Sanskrit script alongside the English names for cultural authenticity.

- **Vidya side:** विद्या Vidya
- **Leela side:** Leela लीला
- The Devanagari text is 10px, positioned beside the English label
- Opacity transitions: active mode shows Devanagari at full opacity; inactive mode at 40% opacity
- Font: system Devanagari stack (Noto Sans Devanagari preferred if available)

---

## 12. Color Theming Per Mode

The entire page subtly shifts its color environment when the toggle flips.

### Vidya mode

| Element | Value |
|---|---|
| Page background | Linear gradient: #0a0f1e to #111827 (cool dark blue) |
| Toggle border | rgba(102, 155, 188, 0.3) |
| Toggle fill | rgba(102, 155, 188, 0.08) |
| Card border | rgba(102, 155, 188, 0.15) |
| Card hover border | rgba(102, 155, 188, 0.4) |
| Accent line on cards | rgba(102, 155, 188, 0.4) |
| Active label color | #B5D4F4 |

### Leela mode

| Element | Value |
|---|---|
| Page background | Linear gradient: #1a0a04 to #1c1008 (warm dark brown) |
| Toggle border | rgba(192, 57, 43, 0.3) |
| Toggle fill | rgba(192, 57, 43, 0.08) |
| Card border | rgba(192, 57, 43, 0.15) |
| Card hover border | rgba(192, 57, 43, 0.4) |
| Accent line on cards | rgba(192, 57, 43, 0.4) |
| Active label color | #F0997B |

All color transitions use 600-800ms ease timing for a smooth environmental shift.

---

## 13. Component Architecture

```
ModeProvider (React Context)
  ├── stores: mode, isFlipping, isHovered, isUserControlled
  ├── syncs mode with URL params (?mode=vidya or ?mode=leela)
  └── provides: toggleMode(), pauseAutoFlip(), resumeAutoFlip()

VidyaLeelaToggle
  ├── pill-shaped toggle button
  ├── sliding indicator (animated left/right)
  ├── progress bar (requestAnimationFrame driven)
  ├── Devanagari labels
  └── status text with conditional "Resume" link

ModeCardGrid
  ├── reads mode from ModeProvider
  ├── manages staggered flip animation via Framer Motion AnimatePresence
  └── renders ModeCard[] for active mode

ModeCard
  ├── receives: title, description, icon, link
  ├── 3D flip transform (rotateY)
  └── hover interaction (border/bg color shift)
```

---

## 14. Timer Implementation Notes

The auto-flip timer must be robust against edge cases.

- Use `setInterval` for the main 5-second cycle, stored in a `useRef` so it can be cleared on unmount
- Use `requestAnimationFrame` for the progress bar (not CSS animation) to allow instant reset on hover
- Clear all pending `setTimeout` calls (stagger timers) when the component unmounts or when the user transitions to Manual mode, to prevent orphaned animations
- The flip function checks `isFlipping` before starting; if true, the call is a no-op
- On tab visibility change (`document.visibilitychange`), pause the timer when the tab is hidden and resume when visible, to prevent a burst of queued flips

---

## 15. First-Visit Behavior

On a visitor's first arrival:

1. The page loads in **Vidya mode** (default)
2. After a **1.5-second delay** (allowing the page to settle), the auto-flip begins
3. The first flip to Leela serves as a natural "reveal" of the creative side
4. If the visitor has a `?mode=leela` URL parameter, the page loads in Leela mode and the first auto-flip goes to Vidya instead

---

## 16. Open Questions

1. Should the auto-flip interval be configurable (e.g., slower on first visit, faster on repeat)?
2. Should there be a subtle sound effect on flip (optional, off by default)?
3. On mobile, should a swipe gesture on the card grid trigger a manual flip?
4. Should the auto-flip stop after N cycles (e.g., 6 flips = 3 full rotations) even without interaction, to reduce motion fatigue?
5. Should the toggle remember the last manual selection in localStorage for return visits?

---

*End of document*
