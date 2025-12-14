# Story 2.1: Define CSS Custom Properties and Design Tokens

Status: done

## Story

As a **developer**,
I want **to establish CSS custom properties for colors, spacing, and typography**,
so that **the entire design system is centralized and maintainable**.

## Acceptance Criteria

**Given** the project structure is established
**When** I create the design token system in `app/globals.css`
**Then** CSS custom properties exist for all 11 category colors (Toffee Brown, Camel, Dry Sage, etc.)
**And** Structural colors are defined (background, surface, surface-elevated, text-primary, text-secondary, text-tertiary)
**And** Whitespace scale is defined (--space-xs: 8px through --space-2xl: 160px)
**And** Typography tokens are defined (font sizes 48px/32px/24px/16px, line-heights, weights)
**And** Animation timing tokens are defined (150ms/250ms, cubic-bezier easing)
**And** Layout tokens are defined (content-max-width: 1200px, article-max-width: 680px)

## Tasks / Subtasks

- [x] Define structural color tokens for dark mode (AC: #1-2)
  - [x] Create `:root` selector with default dark mode colors
  - [x] Define --color-background: #333d29 (Charcoal Brown)
  - [x] Define --color-surface and --color-surface-elevated
  - [x] Define --color-text-primary, --color-text-secondary, --color-text-tertiary
  - [x] Verify 7:1 contrast ratio for text on background

- [x] Define 11 category color tokens (AC: #1)
  - [x] Create --color-cat-ai-fundamentals (Toffee Brown)
  - [x] Create --color-cat-risks-principles (Dark Walnut)
  - [x] Create --color-cat-legal-frameworks (Saddle Brown)
  - [x] Create --color-cat-ai-laws (Camel)
  - [x] Create --color-cat-risk-frameworks (Dry Sage)
  - [x] Create --color-cat-development-lifecycle (Khaki Beige)
  - [x] Create --color-cat-governance (Tan)
  - [x] Create --color-cat-auditing-assessment (Sage Green)
  - [x] Create --color-cat-industry-perspectives (Moss Green)
  - [x] Create --color-cat-explainability (Forest Green)
  - [x] Create --color-cat-videos (Olive Green)
  - [x] Document color values in code comments

- [x] Define whitespace scale tokens (AC: #3)
  - [x] Create --space-xs: 8px
  - [x] Create --space-sm: 16px
  - [x] Create --space-md: 32px
  - [x] Create --space-lg: 64px
  - [x] Create --space-xl: 96px
  - [x] Create --space-2xl: 160px

- [x] Define typography tokens (AC: #4)
  - [x] Create --font-size-h1: 48px
  - [x] Create --font-size-h2: 32px
  - [x] Create --font-size-h3: 24px
  - [x] Create --font-size-body: 16px
  - [x] Create --line-height-tight: 1.2
  - [x] Create --line-height-normal: 1.5
  - [x] Create --line-height-relaxed: 1.8
  - [x] Create --font-weight-regular: 400
  - [x] Create --font-weight-medium: 500
  - [x] Create --font-weight-bold: 700
  - [x] Define system font stack

- [x] Define animation timing tokens (AC: #5)
  - [x] Create --timing-fast: 150ms
  - [x] Create --timing-base: 250ms
  - [x] Create --easing-standard: cubic-bezier(0.4, 0.0, 0.2, 1)

- [x] Define layout tokens (AC: #6)
  - [x] Create --content-max-width: 1200px
  - [x] Create --article-max-width: 680px
  - [x] Create --menu-button-size: 48px
  - [x] Create --menu-bar-height: 72px

- [x] Add Tailwind CSS directives
  - [x] Add @tailwind base, components, utilities directives
  - [x] Integrate custom properties with Tailwind
  - [x] Test that Tailwind classes work alongside custom properties

- [x] Verify design system consistency
  - [x] Check all tokens are defined in `:root`
  - [x] Verify naming follows kebab-case convention
  - [x] Test color contrast ratios meet 7:1 minimum
  - [x] Document all tokens in code comments

## Dev Notes

**Architecture Patterns:**
- All CSS custom properties must use kebab-case naming: `--{category}-{property}-{variant}`
- Example: `--color-background`, `--color-text-primary`, `--space-lg`
- Avoid camelCase (`--colorBackground`) or snake_case (`--color_background`)
- All tokens defined in `:root` selector for global access

**Color System:**
- Dark mode is default theme (Charcoal Brown #333d29 background)
- Light mode will invert structural colors but keep category colors constant (Story 2.2)
- Target 7:1 contrast ratio for body text (WCAG AAA level)
- Category colors remain consistent across themes for brand identity

**Whitespace System:**
- 8px base scale: 8, 16, 32, 64, 96, 160
- Follows UX-2 requirement
- Generous whitespace for premium minimalist aesthetic

**Typography:**
- System font stack for performance (no web fonts in MVP)
- Scale: 48px (H1), 32px (H2), 24px (H3), 16px (body)
- Line height 1.8 for body text optimizes readability

**Animation Timing:**
- 150ms for quick interactions (hover, collapse)
- 250ms for card expansion and menu animation
- cubic-bezier(0.4, 0.0, 0.2, 1) easing for smooth feel

**Layout Constraints:**
- Content max-width 1200px prevents wide-screen line length issues
- Article max-width 680px targets 65-75 characters per line (optimal readability)

### Project Structure Notes

**File Location:**
- All design tokens in `app/globals.css`
- No separate design token files (keep centralized for MVP)
- Tailwind directives also in `app/globals.css`

**Integration with Tailwind:**
- Custom properties work alongside Tailwind utility classes
- Can extend Tailwind theme if needed (e.g., colors, spacing)
- Prefer custom properties for design system values

**No Conflicts Detected:**
- Story builds on 1.3 (project structure established)
- Prepares foundation for 2.2 (theme system)

### References

- [Source: docs/architecture.md#Naming Patterns] - CSS custom property naming conventions
- [Source: docs/architecture.md#Format Patterns] - Design token structure
- [Source: docs/ux-design-specification.md#Color System] - Color palette values (specific values TBD in UX doc)
- [Source: docs/prd.md#UX-2] - Whitespace scale 8px base
- [Source: docs/prd.md#UX-3] - Typography scale and system font stack
- [Source: docs/prd.md#UX-4] - Dark mode default with Charcoal Brown #333d29
- [Source: docs/prd.md#UX-6, UX-7, UX-8] - Animation timing values
- [Source: docs/prd.md#UX-10] - Article max width 680px
- [Source: docs/prd.md#UX-15] - Target 7:1 contrast ratio (WCAG AAA)
- [Source: docs/architecture.md#Implementation Patterns] - Enforce kebab-case naming

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

- Development server started successfully on port 3000
- No compilation errors in Tailwind CSS v4 integration
- All CSS custom properties syntactically valid

### Completion Notes List

✅ **Story 2.1 Complete - Design System Foundation Established**

**Implementation Summary:**
- Defined complete design token system in `app/globals.css`
- All 11 category colors with earth-tone palette implemented
- Structural colors (background, surface, text) with 7:1 contrast ratio target
- Whitespace scale (8px base: 8, 16, 32, 64, 96, 160)
- Typography tokens (font sizes, line heights, weights, system font stack)
- Animation timing (150ms fast, 250ms base, cubic-bezier easing)
- Layout constraints (1200px content max, 680px article max, menu sizes)

**Key Decisions:**
- Used kebab-case naming convention for all CSS custom properties
- Integrated with Tailwind CSS v4 using `@theme inline` directive
- Documented all color values with descriptive comments
- System font stack for performance (no web fonts in MVP)
- Category colors constant across themes for brand identity

**Validation:**
- ✅ Next.js development server compiled successfully
- ✅ All tokens defined in `:root` selector
- ✅ Naming follows architecture patterns (kebab-case)
- ✅ Tailwind CSS integration verified
- ✅ All acceptance criteria satisfied

**Code Review Fixes (2025-12-13):**
- Fixed ESLint error in `types/article.ts:58` - Changed `content?: any` to `content?: MDXRemoteSerializeResult` with proper import
- Fixed duplicate category colors - Changed Industry Perspectives from #8A9A5B to #698B69 (now distinct from Auditing & Assessment)
- Extended Tailwind theme integration - Added 50+ design tokens to `@theme inline` block (spacing, typography, colors, animation, layout)
- All linting errors resolved - `npm run lint` now passes with 0 errors

### File List

- `app/globals.css` - Modified: Complete design system (164 lines including extended Tailwind theme integration)
- `types/article.ts` - Modified: Fixed ESLint error (changed `content?: any` to `content?: MDXRemoteSerializeResult`)
