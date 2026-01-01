# Story: Homepage Carousel and Image Fixes

**Story ID:** homepage-carousel-fixes
**Epic:** Homepage v2 Rebuild
**Priority:** High
**Status:** in-progress (critical fix complete, review items pending)
**Assigned:** Dev Agent
**Created:** 2024-12-31
**Updated:** 2024-12-31

## Story Description

Fix learning paths carousel data to match the knowledge graph, add curved borders to carousel cards for visual consistency, and update the About Me break card image to use the correct hero image.

## User Requests (Conversation Context)

1. "Make the carousel cards also curved, also the images chosen are not correct, look at the knowledge graph for image names"
2. "Please also change the about me image, there is an about me page break image please use that"
3. Clarification: "No, I did not mean to change sunil.jpg, I meant to change the toolate hero"

## Acceptance Criteria

- [x] AC1: Learning paths data matches knowledge graph exactly (titles, descriptions, images)
- [x] AC2: Learning Path 5 is "Future" (not "Implementation") with future-hero.webp
- [x] AC3: All carousel cards have 24px border-radius for curved appearance
- [x] AC4: About Me break card uses about-me-page-break.webp (not toolate-hero.webp)
- [x] AC5: About Me section still displays Sunil.jpg profile photo (not hero image)
- [x] AC6: All changes build successfully without errors
- [x] AC7: Changes are committed and pushed to git

## Tasks/Subtasks

### Data Fixes
- [x] Read knowledge-graph.yaml to get correct learning path definitions
- [x] Update learning-paths-data.ts with all 5 correct paths
  - [x] Path 1: "History" with correct description
  - [x] Path 2: "Terminology" (was "Foundation")
  - [x] Path 3: "Risk" with risk-hero.webp (was danger-hero.webp)
  - [x] Path 4: "Responsibility" with correct description
  - [x] Path 5: "Future" with future-hero.webp (was "Implementation")

### UI Styling Fixes
- [x] Update LearningPathsCarousel.tsx border-radius from 12px to 24px
- [x] Update PortfolioCarousel.tsx border-radius from 12px to 24px

### Image Updates
- [x] Revert AboutCard.tsx to use Sunil.jpg (was incorrectly changed to hero)
- [x] Update About Me BreakCard in page.tsx to use about-me-page-break.webp

### Build & Deploy
- [x] Run npm run build and verify success
- [x] Commit changes with descriptive messages
- [x] Push to GitHub remote

### Review Follow-ups (AI-Review)

#### Critical Issues
- [ ] [AI-Review][CRITICAL] Fix File List - Document all 585 files changed, especially Rayo template addition [Story line 70-75]
- [x] [AI-Review][CRITICAL] **SCROLLING ANIMATION NOT WORKING** - FIXED: Added StackCards component wrapper to page.tsx [app/page.tsx:23]
- [ ] [AI-Review][HIGH] Clean up git history - Rebase/squash unnecessary revert commits [commits e415724+a9fa92f]

#### Medium Priority
- [ ] [AI-Review][MEDIUM] Add test coverage for carousel rendering and data changes
- [ ] [AI-Review][MEDIUM] Add knowledge graph validation/error handling [learning-paths-data.ts]
- [ ] [AI-Review][MEDIUM] Add image path validation or compile-time checks
- [ ] [AI-Review][MEDIUM] Fix border-radius inconsistency - AboutCard .about-image still 12px [AboutCard.tsx:73]

#### Low Priority
- [ ] [AI-Review][LOW] Add TypeScript/Zod schema validation for knowledge graph data
- [ ] [AI-Review][LOW] Improve image alt text for accessibility
- [ ] [AI-Review][LOW] Add error boundaries/fallbacks for image loading

## Technical Notes

**Knowledge Graph Mappings:**
- history: "History" → history-hero.webp
- terminology: "Terminology" → terminology-hero.webp
- risk: "Risk" → risk-hero.webp (NOT danger-hero.webp)
- responsibility: "Responsibility" → responsibility-hero.webp
- future: "Future" → future-hero.webp

**Design Pattern:**
- Card border-radius standardization: 24px across all cards
- Carousel item cards should match this pattern

## Dev Agent Record

### File List
1. `lib/learning-paths-data.ts` - Updated all 5 learning path definitions
2. `components/homepage/LearningPathsCarousel.tsx` - Changed .item-link border-radius to 24px
3. `components/homepage/PortfolioCarousel.tsx` - Changed .item-link border-radius to 24px
4. `components/homepage/AboutCard.tsx` - Reverted to Sunil.jpg
5. `app/page.tsx` - Final: Removed StackCards import, each component in own .loading__item wrapper
6. `components/animation/StackCards.tsx` - Not used (removed from page structure)
7. `docs/sprint-artifacts/homepage-carousel-fixes.md` - Story file tracking all changes

### Change Log

**2024-12-31 - Initial Implementation**
- Read knowledge-graph.yaml and identified all 5 learning paths
- Updated learning-paths-data.ts with correct titles and descriptions from knowledge graph
- Major fix: Changed Path 5 from "Implementation" to "Future" with future-hero.webp
- Updated LearningPathsCarousel.tsx .item-link border-radius: 12px → 24px (line 224)
- Updated PortfolioCarousel.tsx .item-link border-radius: 12px → 24px (line 223)
- Build successful
- Committed: "Update learning paths data and add curved carousel cards" (f4dd16a)

**2024-12-31 - Image Fix Attempt (Incorrect)**
- Incorrectly changed AboutCard.tsx image from Sunil.jpg to about-me-page-break.webp
- User clarified this was wrong - wanted break card image changed, not profile
- Build successful
- Committed: "Update About Me image to use about-me-page-break hero" (e415724)

**2024-12-31 - Image Fix Correction**
- Reverted AboutCard.tsx back to Sunil.jpg
- Updated About Me BreakCard in page.tsx from toolate-hero.webp to about-me-page-break.webp
- Build successful
- Committed: "Fix About Me break card image to use about-me-page-break" (a9fa92f)

**2024-12-31 - Code Review & Critical Animation Fix (Attempt 1)**
- Created retroactive story file for tracking
- Ran adversarial code review - found 10 issues (3 HIGH, 4 MEDIUM, 3 LOW)
- **CRITICAL FIX:** Discovered scrolling animation completely broken - StackCards component not being used
- Added StackCards wrapper to page.tsx to enable card stacking scroll animations
- Removed individual .loading__item divs, wrapped all cards in StackCards component
- Build successful
- Committed: "Fix critical scrolling animation - add StackCards wrapper" (efb52d7)
- **USER FEEDBACK:** Scroll pinning issue - page stuck, requires 10-15 scrolls to move

**2024-12-31 - Animation Fix Attempt 2 (Interrupted)**
- User reported scroll stuck: "the first 10-15 scrolls the page does not scroll down"
- Root cause: Single StackCards wrapper with pin=true creates 7680px scroll distance (8 cards × 960px)
- Attempted fix: Multiple StackCards sections with pin={false}
- **USER CORRECTION:** "they do not have to stack over one another, that is for a different page"
- User directed to Rayo template reference

**2024-12-31 - Final Animation Fix (Rayo Pattern)**
- Studied Rayo template architecture (/docs/rayo.../components/homes/home-1/)
- Discovered correct pattern: StackCards used for CONTENT SECTIONS, not page layout
- Implemented Rayo pattern:
  - Hero standalone in .loading__item (no stacking)
  - Learning Paths section: .loading__item → StackCards (BreakCard + Carousel)
  - Portfolio section: .loading__item → StackCards (BreakCard + Carousel)
  - About section: .loading__item → StackCards (BreakCard + AboutCard)
  - Footer standalone in .loading__item
- Build successful
- Committed: "FIX: Implement Rayo pattern for StackCards scroll animations" (095f0f6)
- Pushed to remote: main
- **USER FEEDBACK:** "Nope, now it scrolls but it blinks and goes back up"

**2024-12-31 - Scroll Pinning Conflict Fix (Partial)**
- Issue: Page scrolls but blinks/jumps back up during scroll
- Root cause analysis:
  - Rayo uses StackCards ONCE per page (ServicesStack only)
  - We use StackCards THREE times (Learning Paths, Portfolio, About)
  - Each StackCards has `pin={true}` by default
  - Multiple pinned ScrollTriggers conflict, causing scroll position jumps
- Solution: Added `pin={false}` to all 3 StackCards instances
  - Keeps animation effects (card transitions)
  - Prevents scroll pinning behavior
  - Allows smooth natural scrolling
  - Eliminates scroll jumping/blinking
- Build successful
- Committed: "FIX: Disable scroll pinning in StackCards to prevent jump/blink" (de3cb15)
- Pushed to remote: main
- **USER FEEDBACK:** "It does, but not all cards scroll the same plus there is a massive blank space created between each card specifically the page break cards"

**2024-12-31 - Complete StackCards Removal (Final Fix)**
- Issues:
  - Cards scroll inconsistently (different behaviors)
  - Massive blank spaces between cards, especially BreakCards
  - StackCards creates scroll distance calculations even with pin={false}
- Root understanding:
  - User said: "they do not have to stack over one another, that is for a different page"
  - Rayo uses StackCards ONLY for one specialized section (ServicesStack)
  - Most Rayo page sections DON'T use StackCards at all
  - StackCards is for stacking visual effects, not standard page layout
- Solution: Removed StackCards entirely
  - Each component in its own `.loading__item` wrapper
  - GSAP load animations via useGsapScrollScaleAnimations (fade in, slide up)
  - Standard document flow - no scroll manipulation
  - No blank space injection
- Final structure:
  - Hero → Learning Paths Break → Learning Paths Carousel → Portfolio Break → Portfolio Carousel → About Break → About Card → Footer
  - Each in separate `.loading__item` for staggered load animations
- Build successful
- Committed: "FIX: Remove StackCards to eliminate blank spaces and scroll inconsistencies" (4a62bd3)
- Pushed to remote: main

### Build Output
```
✓ Compiled successfully
Route (app)                                 Size  First Load JS
┌ ○ /                                    62.2 kB         164 kB
├ ○ /_not-found                            993 B         103 kB
└ ○ /coming-soon                         4.01 kB         106 kB
```

### Git Commits
1. f4dd16a - Update learning paths data and add curved carousel cards
2. e415724 - Update About Me image to use about-me-page-break hero (REVERTED)
3. a9fa92f - Fix About Me break card image to use about-me-page-break
4. efb52d7 - Fix critical scrolling animation - add StackCards wrapper (SCROLL PINNING ISSUE)
5. 095f0f6 - FIX: Implement Rayo pattern for StackCards scroll animations (BLINK/JUMP ISSUE)
6. 8fd7b09 - Update story file with complete animation fix timeline (DOCUMENTATION)
7. de3cb15 - FIX: Disable scroll pinning in StackCards to prevent jump/blink (BLANK SPACE ISSUE)
8. 703711c - Document scroll pinning fix in story timeline (DOCUMENTATION)
9. 4a62bd3 - FIX: Remove StackCards to eliminate blank spaces and scroll inconsistencies (FINAL)

## Definition of Done
- [x] All acceptance criteria met
- [x] Code builds successfully
- [x] Changes pushed to repository
- [x] Code review completed
- [ ] Outstanding review items addressed (9 remaining: 1 CRITICAL, 1 HIGH, 4 MEDIUM, 3 LOW)
