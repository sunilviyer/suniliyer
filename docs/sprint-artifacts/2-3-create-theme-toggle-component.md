# Story 2.3: Create Theme Toggle Component

Status: done

## Story

As a **reader**,
I want **a visible theme toggle button**,
so that **I can easily switch between dark and light modes**.

## Acceptance Criteria

**Given** the theme system is implemented
**When** I create `components/theme/ThemeToggle.tsx`
**Then** the component uses `useTheme()` hook from next-themes
**And** The toggle button displays appropriate icon (◐ or ☀)
**And** Button has aria-label indicating current and next theme
**And** Clicking the button switches between 'dark' and 'light' themes
**And** The button is accessible via keyboard (Tab + Enter)
**And** The component will be integrated into the floating menu (in Epic 4)

## Tasks / Subtasks

- [x] Create ThemeToggle component file (AC: #1-2)
  - [x] Create `components/theme/` directory
  - [x] Create `components/theme/ThemeToggle.tsx`
  - [x] Mark component as 'use client' (required for hooks)
  - [x] Import `useTheme` from 'next-themes'

- [x] Implement theme toggle logic (AC: #2-4)
  - [x] Get current theme from `useTheme()` hook
  - [x] Get `setTheme` function from `useTheme()` hook
  - [x] Create click handler that toggles between 'dark' and 'light'
  - [x] Handle undefined theme state (use default 'dark')

- [x] Add icon rendering logic (AC: #3)
  - [x] Display ◐ icon when theme is 'dark' (indicates light mode available)
  - [x] Display ☀ icon when theme is 'light' (indicates dark mode available)
  - [x] Style icons with category accent color
  - [x] Ensure icons are clearly visible (minimum 24px size)

- [x] Implement accessibility features (AC: #4-5)
  - [x] Add `aria-label` that indicates current theme and action
  - [x] Example: "Currently dark mode. Click to switch to light mode."
  - [x] Make button keyboard accessible (Tab to focus, Enter to activate)
  - [x] Add visible focus indicator (2px outline, category accent color)
  - [x] Ensure button is minimum 44x44px touch target

- [x] Style the component
  - [x] Use surface-elevated background color
  - [x] Add 2px border using category accent color
  - [x] Implement hover state (category color glow, 150ms timing)
  - [x] Add transition for smooth theme switch effect
  - [x] Ensure button works in both dark and light modes

- [x] Handle mounted state
  - [x] Check if component is mounted before rendering theme-specific content
  - [x] Prevent hydration mismatch by showing neutral state until mounted
  - [x] Use `useEffect` to set mounted state to true

- [x] Test component functionality
  - [x] Verify toggle switches from dark to light
  - [x] Verify toggle switches from light to dark
  - [x] Verify localStorage updates on toggle
  - [x] Verify theme persists after page reload
  - [x] Verify keyboard accessibility (Tab + Enter)
  - [x] Verify screen reader announces aria-label
  - [x] Verify button meets 44x44px touch target size

## Dev Notes

**Architecture Patterns:**
- Component naming: PascalCase `ThemeToggle.tsx` (ARCH-9)
- Component organization: Feature-based `/components/theme/` directory
- Must be Client Component ('use client') because it uses React hooks
- Theme values are simple strings: 'dark' | 'light' (ARCH-16)

**next-themes Integration:**
- `useTheme()` hook provides: `{ theme, setTheme, systemTheme, resolvedTheme }`
- Use `theme` to get current selection ('dark' | 'light' | undefined)
- Use `setTheme('dark')` or `setTheme('light')` to change theme
- Handle undefined state during server-side rendering

**Accessibility Patterns:**
- Button must have descriptive `aria-label` (ARCH requirement)
- Example: `aria-label="Currently dark mode. Click to switch to light mode."`
- Keyboard accessible via Tab + Enter (FR39, NFR-ACCESS-3)
- Visible focus indicator (2px outline, category accent, UX-16)
- Minimum 44x44px touch target (NFR-ACCESS-12)

**Icon Selection:**
- ◐ (Moon with shadow) for dark mode: indicates light mode is available
- ☀ (Sun) for light mode: indicates dark mode is available
- Icons show what user will *get* when they click, not current state

**Styling:**
- Use CSS custom properties from Story 2.1
- Background: `var(--color-surface-elevated)`
- Border: `2px solid` using category accent color
- Hover: Category color glow, 150ms timing (UX-8)
- Transition: Smooth theme switch, <100ms (NFR-PERF-5)

**Hydration Mismatch Prevention:**
- Use mounted state to prevent server/client mismatch
- Show neutral state (no theme-specific content) until client-side hydration complete
- Prevents flash of wrong icon during page load

### Project Structure Notes

**File Location:**
- `components/theme/ThemeToggle.tsx` (new file)
- Feature-based organization (all theme components in `/components/theme/`)

**Dependencies:**
- `next-themes` (installed in Story 2.2)
- React hooks: `useState`, `useEffect` for mounted state

**Integration Points:**
- Will be integrated into FloatingMenu component in Story 4.3
- Standalone component for now (not placed on any page yet)
- Can be tested independently before FloatingMenu exists

**No Conflicts Detected:**
- Story builds on 2.2 (theme system implemented)
- Will be used by 4.3 (floating menu integration)

### References

- [Source: docs/architecture.md#Theme Management] - next-themes useTheme() hook usage
- [Source: docs/architecture.md#ARIA Label Patterns] - Theme toggle aria-label example
- [Source: docs/architecture.md#Naming Patterns] - Component naming (PascalCase)
- [Source: docs/architecture.md#Structure Patterns] - Feature-based organization
- [Source: docs/prd.md#UX-8] - Hover effects 150ms timing
- [Source: docs/prd.md#UX-16] - Focus indicators 2px outline with category colors
- [Source: docs/prd.md#NFR-ACCESS-12] - 44x44px minimum touch targets
- [Source: docs/prd.md#NFR-PERF-5] - Theme switch <100ms

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

- TypeScript compilation successful (no errors)
- ESLint passed with 0 errors
- Development server running on port 3000
- Component tested on homepage (temporarily added for verification)

### Completion Notes List

✅ **Story 2.3 Complete - Theme Toggle Component Implemented**

**Implementation Summary:**
- Created ThemeToggle.tsx client component in components/theme/ directory
- Integrated next-themes useTheme() hook for theme state management
- Implemented toggle logic switching between 'dark' and 'light' themes
- Added icon rendering: ◐ (moon) for dark mode, ☀ (sun) for light mode
- Icons show the theme user will *get* when they click (not current state)
- Created ThemeToggle.css with comprehensive styling
- Implemented mounted state handling to prevent hydration mismatch
- Added ESLint disable comment for legitimate setState-in-effect use case

**Accessibility Features:**
- Dynamic aria-label: "Currently {theme} mode. Click to switch to {nextTheme} mode."
- Keyboard accessible (Tab to focus, Enter to activate)
- Visible focus indicator (2px outline, governance category color)
- 44x44px minimum touch target (exceeds WCAG requirements)
- Disabled state shown until client-side hydration complete

**Styling:**
- Background: var(--color-surface-elevated)
- Border: 2px solid var(--color-cat-governance) (Tan #D2B48C)
- Hover: Category color glow with 8px box-shadow, 150ms transition
- Icons: 24px size, clearly visible in both themes
- Smooth transitions using --timing-fast (150ms) and --easing-standard

**Testing:**
- Component added temporarily to homepage for verification
- Theme toggle switches correctly between dark/light modes
- localStorage automatically persists theme preference (handled by next-themes)
- No hydration mismatch warnings in console
- ESLint and TypeScript compilation pass with 0 errors

**Technical Decisions:**
- Used 'use client' directive (required for React hooks in Next.js App Router)
- Governance category color (#D2B48C Tan) chosen for button accent
- Mounted state pattern prevents hydration mismatch (standard next-themes pattern)
- CSS file separate from component for better organization

### File List

Created files:
- `components/theme/ThemeToggle.tsx` - Client component with theme toggle logic (47 lines)
- `components/theme/ThemeToggle.css` - Component styles with accessibility and hover states (57 lines)

Modified files:
- `app/page.tsx` - Temporarily added ThemeToggle for testing (will be removed in Epic 4 when integrated into FloatingMenu)
- `docs/sprint-artifacts/sprint-status.yaml` - Updated story status: ready-for-dev → in-progress → review

**Code Review Fixes:**
- Updated File List to include sprint-status.yaml
- Clarified temporary nature of app/page.tsx modifications
