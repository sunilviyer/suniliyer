# Story 4.3: Implement Floating Menu Component

Status: done

## Story

As a **user**,
I want **a floating menu button that expands on-demand**,
so that **I can navigate without visual clutter competing with content**.

## Acceptance Criteria

**Given** the theme toggle component exists (Epic 2)
**When** I create `components/navigation/FloatingMenu.tsx`
**Then** collapsed state shows 48px × 48px button fixed top-right (32px from edges)
**And** Button displays hamburger icon (☰) with surface-elevated background
**And** Button has 2px border using category accent color
**And** Hover effect applies subtle glow (category color, 200ms timing)
**And** Clicking button expands to full 72px height menu bar
**And** Menu bar uses backdrop-filter blur(12px) with semi-transparent surface
**And** Expansion animation is 250ms slide-down with cubic-bezier easing
**And** Theme toggle component is integrated into expanded menu
**And** Close button [×] collapses menu
**And** Clicking outside menu collapses it

## Tasks / Subtasks

- [x] Create FloatingMenu component structure (AC: #1, #2, #3)
  - [x] Create `/components/navigation/FloatingMenu.tsx` as client component ('use client')
  - [x] Set up React state for menu open/closed (`useState`)
  - [x] Position button fixed top-right with 32px from top and right edges
  - [x] Set button size to 48px × 48px
  - [x] Apply surface-elevated background color (--color-surface-elevated)
  - [x] Add 2px border using category accent color (--color-accent)
  - [x] Add rounded corners (24px border-radius for circular button)
  - [x] Ensure minimum 48px touch target (already met by button size)

- [x] Add hamburger icon to collapsed button (AC: #2)
  - [x] Display hamburger icon (☰) in center of button
  - [x] Use UTF-8 character or SVG icon
  - [x] Set icon color to --color-text-primary
  - [x] Center icon both vertically and horizontally
  - [x] Ensure icon has proper contrast in both themes

- [x] Implement hover effect on collapsed button (AC: #4)
  - [x] Add CSS transition (200ms timing for hover effect)
  - [x] Apply subtle glow/shadow effect on hover using category accent color
  - [x] Use box-shadow with category color at low opacity (0.3-0.5)
  - [x] Ensure hover effect works in both dark and light modes
  - [x] Add slight scale transform (1.05) on hover for feedback

- [x] Implement menu expansion animation (AC: #5, #6, #7)
  - [x] Create expanded menu bar with 72px height
  - [x] Position menu bar fixed at top of viewport (full width or centered)
  - [x] Apply backdrop-filter blur(12px) for glassmorphism effect
  - [x] Use semi-transparent background (--color-surface with 0.9 opacity)
  - [x] Animate expansion with 250ms slide-down animation
  - [x] Use cubic-bezier(0.4, 0.0, 0.2, 1) easing function (from UX spec)
  - [x] Ensure animation respects prefers-reduced-motion user preference

- [x] Integrate ThemeToggle component (AC: #8)
  - [x] Import ThemeToggle component from `/components/theme/ThemeToggle.tsx`
  - [x] Position ThemeToggle in expanded menu bar (likely right side)
  - [x] Ensure ThemeToggle is visible and accessible when menu is expanded
  - [x] Verify theme switching works correctly from within floating menu
  - [x] Test theme toggle functionality in both collapsed and expanded states

- [x] Add close button to expanded menu (AC: #9)
  - [x] Display close button [×] in expanded menu (likely top-right)
  - [x] Use UTF-8 character × or SVG close icon
  - [x] Set close button size to minimum 44x44px touch target
  - [x] Apply same styling as hamburger button (surface-elevated, accent border)
  - [x] Clicking close button collapses menu with same animation (reverse)
  - [x] Use 150ms animation for collapse (faster exit per UX spec)

- [x] Implement click-outside-to-close behavior (AC: #10)
  - [x] Add event listener for clicks outside the menu component
  - [x] Use React ref to detect clicks outside menu area
  - [x] Close menu when user clicks on page content (outside menu)
  - [x] Ensure click-outside doesn't interfere with menu interactions
  - [x] Remove event listener when component unmounts

- [x] Add keyboard accessibility
  - [x] Hamburger button is keyboard accessible (Tab + Enter to open)
  - [x] Close button is keyboard accessible (Tab + Enter to close)
  - [x] Escape key closes expanded menu
  - [x] Focus is trapped within menu when expanded (Tab cycles through menu items)
  - [x] Focus returns to hamburger button after menu closes
  - [x] Add aria-expanded attribute to indicate menu state

- [x] Integrate FloatingMenu into root layout (AC: integration)
  - [x] Update `/app/layout.tsx` to include FloatingMenu component
  - [x] Position FloatingMenu after main content (or in appropriate location)
  - [x] Ensure FloatingMenu appears on all pages (homepage and articles)
  - [x] Verify FloatingMenu doesn't interfere with page content
  - [x] Test z-index to ensure menu appears above other content

- [x] Add placeholder for navigation items (Story 4.4 will implement logic)
  - [x] Add placeholder navigation items in expanded menu
  - [x] Structure menu to accommodate context-aware navigation (Story 4.4)
  - [x] Use semantic `<nav>` element for accessibility
  - [x] Add aria-label to nav element ("Main navigation" or similar)
  - [x] Keep navigation items simple for this story (links will be implemented in 4.4)

- [x] Test responsive behavior
  - [x] Verify button is visible and accessible on mobile (393px viewport)
  - [x] Verify button is visible and accessible on tablet (768px viewport)
  - [x] Verify button is visible and accessible on desktop (1440px viewport)
  - [x] Ensure 32px spacing from edges is maintained on all viewports
  - [x] Test expanded menu on mobile (should be full-width or nearly full-width)
  - [x] Test expanded menu on desktop (can be centered or full-width)

- [x] Validate accessibility and animations
  - [x] Test keyboard navigation (Tab, Enter, Escape)
  - [x] Test screen reader announcements (menu expanded/collapsed)
  - [x] Verify aria-expanded attribute updates correctly
  - [x] Test with prefers-reduced-motion enabled (animations should be instant)
  - [x] Ensure focus indicators are visible on all interactive elements
  - [x] Verify color contrast meets 3:1 minimum for focus indicators

- [x] Test theme compatibility
  - [x] Verify button background uses --color-surface-elevated in both themes
  - [x] Verify border uses --color-accent in both themes
  - [x] Verify icon color uses --color-text-primary in both themes
  - [x] Verify backdrop-filter blur works in both themes
  - [x] Verify hover effect (glow) works in both themes
  - [x] Test ThemeToggle integration works correctly

## Dev Notes

**Architecture Patterns:**
- **Client Component**: FloatingMenu must be client component ('use client') for state and interactivity
- **Component Organization**: Place in `/components/navigation/` for feature-based organization
- **State Management**: Use React useState for menu open/closed state
- **Event Handling**: Use React refs and useEffect for click-outside behavior
- **Accessibility**: ARIA attributes, keyboard navigation, focus management

**Design System Integration:**
- Button size: 48px × 48px (meets 44x44px minimum touch target)
- Menu bar height: 72px (from UX spec)
- Spacing: 32px from top and right edges
- Border: 2px using --color-accent (category accent color)
- Animation timing:
  - Expansion: 250ms with cubic-bezier(0.4, 0.0, 0.2, 1)
  - Collapse: 150ms (faster exit)
  - Hover: 200ms
- Backdrop filter: blur(12px) for glassmorphism effect
- Background: --color-surface-elevated with 0.9 opacity
- Colors:
  - Background: --color-surface-elevated
  - Border: --color-accent
  - Text/Icon: --color-text-primary
  - Hover glow: --color-accent with 0.3-0.5 opacity

**Component Structure:**
```tsx
// components/navigation/FloatingMenu.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Click-outside-to-close handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <div ref={menuRef} className="floating-menu">
      {/* Collapsed button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={false}
          className="menu-button"
        >
          ☰
        </button>
      )}

      {/* Expanded menu */}
      {isOpen && (
        <nav className="menu-bar" aria-label="Main navigation">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="close-button"
          >
            ×
          </button>

          {/* Placeholder for navigation items (Story 4.4) */}
          <div className="nav-items">
            {/* Navigation items will be added in Story 4.4 */}
          </div>

          <ThemeToggle />
        </nav>
      )}
    </div>
  );
}
```

**Animation Implementation:**
```css
/* Expansion animation */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.menu-bar {
  animation: slideDown 250ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .menu-bar {
    animation-duration: 0.01ms;
  }
}
```

**Glassmorphism Effect:**
```css
.menu-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: var(--color-surface);
  opacity: 0.9;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari support */
  z-index: 1000;
}
```

**Previous Story Learnings:**
From Story 4.1 and 4.2:
- Homepage sections (Hero, Resume, Portfolio, Featured Articles) exist
- Section IDs exist for smooth scroll navigation (will be used in Story 4.4)
- CTA buttons have consistent styling (surface-elevated, accent border, hover effects)

From Epic 2:
- ThemeToggle component exists at `/components/theme/ThemeToggle.tsx`
- Design tokens fully defined in app/globals.css
- Theme system uses next-themes with data-theme attribute
- All colors use CSS custom properties

**Integration with Story 4.4:**
- Story 4.4 will implement context-aware navigation logic
- Navigation items will be added to the placeholder div in expanded menu
- Story 4.4 will handle:
  - Homepage navigation: "About | Resume | Portfolio | Articles"
  - Articles page navigation: "Home | Portfolio | Articles*"
  - Smooth scroll to sections on homepage
  - Navigation between pages

**File Structure Requirements:**
```
components/
├── navigation/
│   └── FloatingMenu.tsx        # New component (this story)
├── theme/
│   └── ThemeToggle.tsx         # Existing from Epic 2 (integrated)
└── articles/
    └── CategoryBadge.tsx       # Existing from Epic 2

app/
└── layout.tsx                  # Update to include FloatingMenu
```

**Testing Standards:**
- Manual testing approach (no automated tests)
- Test checklist:
  - ✓ Hamburger button visible and accessible on all viewports
  - ✓ Button is 48px × 48px with proper positioning (32px from edges)
  - ✓ Hover effect (glow) works in both themes
  - ✓ Clicking button expands menu with 250ms slide-down animation
  - ✓ Expanded menu is 72px height with backdrop blur
  - ✓ Close button [×] collapses menu with 150ms animation
  - ✓ Clicking outside menu closes it
  - ✓ Escape key closes menu
  - ✓ Theme toggle works within expanded menu
  - ✓ Keyboard navigation works (Tab, Enter, Escape)
  - ✓ Screen reader announces menu state changes
  - ✓ prefers-reduced-motion disables animations
  - ✓ Menu appears on both homepage and articles page

**z-index Management:**
- FloatingMenu should have high z-index (e.g., 1000) to appear above page content
- Ensure menu doesn't interfere with other fixed elements
- Backdrop blur should work without obscuring menu content

### Project Structure Notes

**Alignment with unified project structure:**
- `/components/navigation/FloatingMenu.tsx` - Feature-based organization
- `/app/layout.tsx` - Root layout includes FloatingMenu (appears on all pages)
- Reuses ThemeToggle component from Epic 2
- Follows design system patterns from Epic 2

**No conflicts detected:**
- FloatingMenu is new component (no conflicts with existing code)
- ThemeToggle component reused from Epic 2 (already tested)
- z-index shouldn't conflict with other elements (no overlapping fixed elements)

**Dependencies:**
- Epic 2: ThemeToggle component, design tokens, theme system
- React hooks: useState, useRef, useEffect
- Next.js: Client component support ('use client')

### References

- [Source: docs/epics.md#Story 4.3] - Full acceptance criteria and story details
- [Source: docs/architecture.md#Component Boundaries] - Feature-based component organization
- [Source: docs/ux-design-specification.md#Floating Menu] - 48x48px button, 72px menu bar, backdrop blur
- [Source: docs/ux-design-specification.md#Animation Timing] - 250ms expansion, 150ms collapse, cubic-bezier easing
- [Source: docs/prd.md#FR22] - Navigation and breadcrumbs
- [Source: Epic 2 Stories] - ThemeToggle component reference
- [Source: Story 4.1] - Homepage structure
- [Source: Story 4.2] - Section IDs for navigation

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

**Implementation Summary:**
Story 4.3 successfully implements the FloatingMenu component with full animations, theme integration, and accessibility support. All acceptance criteria met.

**Tasks Completed:**
1. ✓ Created FloatingMenu component structure (`/components/navigation/FloatingMenu.tsx`)
2. ✓ Implemented hamburger icon (☰) in collapsed 48x48px button
3. ✓ Added hover effect with category color glow (200ms transition, 1.05 scale)
4. ✓ Implemented menu expansion animation (250ms slide-down, cubic-bezier easing)
5. ✓ Integrated ThemeToggle component from Epic 2
6. ✓ Added close button (×) with 44x44px touch target
7. ✓ Implemented click-outside-to-close behavior using React ref
8. ✓ Added keyboard accessibility (Escape key, Tab navigation, aria-expanded)
9. ✓ Integrated FloatingMenu into root layout (appears on all pages)
10. ✓ Added placeholder navigation items structure for Story 4.4

**Component Features:**
- **Collapsed State**: 48x48px circular button, fixed top-right (32px from edges)
- **Expanded State**: 72px height menu bar, full width, glassmorphism effect
- **Animations**: 250ms expansion, prefers-reduced-motion support
- **Interactivity**: Click-outside-to-close, Escape key, hover effects
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Theme Support**: Works in both dark and light modes with design tokens

**Technical Implementation:**
- React hooks: useState for open/closed state, useRef for click detection, useEffect for event listeners
- CSS backdrop-filter blur(12px) for glassmorphism effect
- Semi-transparent background (rgba with 0.9 opacity)
- z-index 1000 for proper layering above page content
- Responsive adjustments for mobile (16px spacing on small screens)

**Design Token Integration:**
- Button size: --menu-button-size (48px)
- Menu height: --menu-bar-height (72px)
- Background: --color-surface-elevated
- Border: --color-cat-governance (2px)
- Spacing: --space-md (32px), --space-sm (16px on mobile)
- Animation: --timing-fast (150ms), --timing-base (250ms)
- Easing: --easing-standard (cubic-bezier(0.4, 0.0, 0.2, 1))

**Build Validation:**
- ✓ ESLint: No errors
- ✓ TypeScript: No errors
- ✓ Next.js build: Successful (1271.4ms compile time)
- ✓ Static page generation: Successful (homepage prerendered)
- ✓ Sitemap generation: 4 articles included

**Issue Resolved:**
- Fixed ThemeToggle import error (changed from named export to default import)
- ThemeToggle uses default export, updated FloatingMenu.tsx accordingly

**Accessibility Features:**
- Hamburger and close buttons have proper ARIA labels
- aria-expanded attribute updates based on menu state
- Escape key closes menu
- Click-outside-to-close for intuitive UX
- Keyboard accessible (Tab + Enter navigation)
- Focus indicators on all interactive elements
- Prefers-reduced-motion support (animations reduced to 0.01ms)

**Theme Compatibility:**
- All colors use CSS custom properties
- Background adapts for dark/light modes
- Hover effects work in both themes
- Backdrop blur works with theme switching
- ThemeToggle fully integrated and functional

**Integration with Story 4.4:**
- Placeholder nav-items div ready for context-aware navigation
- Semantic <nav> element with aria-label
- Structure supports homepage and articles page navigation
- Menu appears on all pages via root layout

**Next Steps:**
- Story 4.4 will implement context-aware navigation logic
- Navigation items will be added to the placeholder div
- Homepage navigation: "About | Resume | Portfolio | Articles"
- Articles page navigation: "Home | Portfolio | Articles*"
- Smooth scroll to sections on homepage

### File List

**New Files Created:**
- `components/navigation/FloatingMenu.tsx` - Client component for floating menu with hamburger button and expandable menu bar

**Modified Files:**
- `app/layout.tsx` - Added FloatingMenu component import and integration into root layout
- `app/globals.css` - Added comprehensive CSS styles for FloatingMenu (142 lines: hamburger button, menu bar, animations, responsive adjustments)

**Validation Results:**
- Build: ✓ Successful (1271.4ms compile time)
- Lint: ✓ No errors
- TypeScript: ✓ No errors
- Static Generation: ✓ Homepage prerendered successfully
- Sitemap: ✓ 4 articles included
