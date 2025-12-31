# Homepage Rebuild Plan - Wireframe V5 Implementation

**Date**: 2025-12-30
**Status**: Planning Phase
**Wireframe Source**: `/docs/aidefence-reference/homepage-wireframe-v5-with-splash.html`
**Epic**: 1 - Homepage Foundation & Deployment (REVISED)

---

## Current State vs Target State

### What We Built (INCORRECT)
❌ Generic Next.js homepage with:
- Simple hero with gradient animation
- 5 learning path cards in grid
- Basic header with navigation links
- Standard CTA buttons

### What We Need (WIREFRAME V5)
✅ Card-based scrolling experience with:
- Splash screen with "Hello" animation
- Card container system (1920px max, 300px spacing)
- Hero with "Vibe, [word ticker] AI + a little me"
- Break cards with full background images
- 3-item carousels (center focused, sides blurred)
- About section with image grid + stats
- Footer card with 4-column layout

**Gap Analysis**: Complete mismatch. Need to rebuild from scratch.

---

## Architecture Overview

### Layout Structure
```
<SplashScreen />              ← Fixed overlay, slides up after 3s
<Header />                    ← Fixed header with logo ring
<ThemeToggle />              ← Fixed top-right
<HamburgerMenu />            ← Fixed top-right

<main id="main-page">
  <CardContainer #1>         ← Hero Card
  <CardContainer #2>         ← Break Card: Learning Paths
  <CardContainer #3>         ← Learning Paths Carousel
  <CardContainer #4>         ← Break Card: Portfolio
  <CardContainer #5>         ← Portfolio Carousel
  <CardContainer #6>         ← Break Card: About
  <CardContainer #7>         ← About Card
  <CardContainer #8>         ← Footer Card
</main>
```

### Card Container System
```css
.card-container {
  max-width: 1920px;
  margin: 0 auto 300px;  /* 300px spacing between cards */
  padding: 0 60px;
}

.card-container:first-of-type {
  margin-top: 80px;  /* Account for fixed header */
}

.card {
  min-height: 960px;  /* All cards 960px on desktop */
  border-radius: 30px;
  overflow: hidden;
}
```

---

## Component Breakdown

### 1. Splash Screen ✅ BUILT
**File**: `/components/homepage/SplashScreen.tsx`
**Status**: Complete

**Features**:
- Fixed overlay, z-index 10000
- "Hello" text in Funnel Display 120px
- Blink animation (0.8s)
- Slides up after 3 seconds
- Cubic bezier transition

**Responsive**:
- Desktop: 120px
- Tablet: 100px
- Mobile: 80px

---

### 2. Header ✅ BUILT
**File**: `/components/homepage/WireframeHeader.tsx`
**Status**: Complete

**Features**:
- Fixed top, height 80px
- Logo ring (50px circle) + "Sunil Iyer" name
- Theme toggle (top-right, offset 125px)
- Hamburger menu (top-right, offset 60px)
- Backdrop blur effect
- Dark/light theme support

**Responsive**:
- Desktop: 80px height, 60px padding
- Tablet: 80px height, 40px padding
- Mobile: 60px height, 20px padding, smaller logo (40px)

---

### 3. Hero Card ✅ BUILT
**File**: `/components/homepage/WireframeHero.tsx`
**Status**: Complete

**Layout**:
```
Line 1: Vibe , [Artificial] AI
Line 2: + a little me
```

**Features**:
- Video background (background.webm) at 30% opacity
- Funnel Display font, 100px
- Inline word ticker in green box (#333d29)
- Word changes every 3 seconds
- Slide-up animation

**Word Box**:
- Size: 280px × 70px
- Border radius: 40px
- Background: #333d29
- Text: 32px white, centered

**Responsive**:
- Desktop: 100px text, 280px box
- Tablet: 80px text, 240px box
- Mobile: 48px text, 200px box, stacks vertically

---

### 4. Break Cards ⏳ TODO
**Files to Create**:
- `/components/homepage/BreakCard.tsx`

**3 Break Cards Needed**:
1. **Learning Paths Break**
   - Image: `/images/breaks/learning-paths-break.webp`
   - Text: "Learning Paths"

2. **Portfolio Break**
   - Image: `/images/breaks/portfolio-break.webp`
   - Text: "Portfolio"

3. **About Break**
   - Image: `/images/breaks/about-me-page-break.webp`
   - Text: "About"

**Specifications**:
- Full background image (cover)
- Dark overlay (rgba(0,0,0,0.3))
- White text, 72px, bold, centered
- Text shadow for readability
- Min height: 960px

**Responsive**:
- Desktop: 960px height, 72px text
- Tablet: 960px height, 60px text
- Mobile: 400px height, 42px text

---

### 5. Learning Paths Carousel ⏳ TODO
**Files to Create**:
- `/components/homepage/LearningPathsCarousel.tsx`
- `/lib/learning-paths-data.ts`

**Carousel Structure**:
```
[Side Item] [CENTER ITEM] [Side Item]
  380px         580px         380px
  blur(3px)     sharp         blur(3px)
  opacity: 0.7  opacity: 1    opacity: 0.7
  scale(0.9)    scale(1)      scale(0.9)
```

**Data Needed** (5 paths):
1. History & Context
2. Foundation (Terminology)
3. Implementation
4. Risk & Ethics
5. Legal & Compliance

**Each Item**:
- Image (350px height)
- Header: "PROJECT DETAILS"
- Number: "Learning Path X"
- Title: 36px bold
- Description: 16px, line-height 1.6
- CTA: "Explore Path →" (link)

**Navigation**:
- Left/right arrows (60px circles)
- Dots below (14px, active highlighted)
- Smooth transitions (500ms cubic-bezier)

**Responsive**:
- Desktop: 3-item view
- Tablet: 3-item view (scaled)
- Mobile: 1-item view (hide sides, show center only)

---

### 6. Portfolio Carousel ⏳ TODO
**Files to Create**:
- `/components/homepage/PortfolioCarousel.tsx`
- `/lib/portfolio-data.ts`

**Same structure as Learning Paths** but for portfolio items.

**Data Needed** (5 items):
1. Seshan Intelligence
2. Seshan App
3. Free Tools
4. AI Comics
5. Other project

**Each Item**:
- Image (300px height)
- Title: 24px
- Description: 16px
- CTA: "View Project →"

**Responsive**: Same as Learning Paths

---

### 7. About Card ⏳ TODO
**File to Create**:
- `/components/homepage/AboutCard.tsx`

**Layout**:
```css
.about-grid {
  grid-template-columns: 480px 1fr;
  gap: 80px;
}
```

**Left Column**: Image of Sunil (Sunil.jpg)
**Right Column**:
- Heading: "About Me" (48px)
- Paragraph 1 & 2 (18px, line-height 1.8)
- Stats Row (3 stat cards):
  - 20+ Projects (#333d29)
  - 10+ Years (#936639)
  - 50+ Clients (#414833)

**Stat Cards**:
- Background: var(--bg-secondary)
- Number: 42px bold
- Label: 16px

**Responsive**:
- Desktop: 480px + 1fr, 80px gap
- Tablet: 400px + 1fr, 60px gap
- Mobile: 1fr (stacked), 40px gap, stats vertical

---

### 8. Footer Card ⏳ TODO
**File to Create**:
- `/components/homepage/FooterCard.tsx`

**Layout**:
```css
.footer-grid {
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
}
```

**4 Columns**:
1. **About**: Mission, Team, Contact
2. **Learning**: All 5 learning paths
3. **Portfolio**: All portfolio items
4. **Connect**: LinkedIn, Twitter/X, Email

**Footer Bottom**:
- Border top
- Copyright text (16px, centered)

**Responsive**:
- Desktop: 4 columns
- Tablet: 4 columns (smaller gap)
- Mobile: 1 column (stacked)

---

## Data Requirements

### Images Needed

#### Already Have (Epic 0):
✅ `/images/heroes/history-hero.webp`
✅ `/images/heroes/terminology-hero.webp`
✅ `/images/heroes/risk-hero.webp`
✅ `/images/heroes/responsibility-hero.webp`
✅ `/images/heroes/future-hero.webp`

#### Need to Create/Find:
❌ `/images/logo.jpg` - Sunil logo for header
❌ `/images/background.webm` - Hero video background
❌ `/images/breaks/learning-paths-break.webp`
❌ `/images/breaks/portfolio-break.webp` (exists as `learning-paths-break.webp`)
❌ `/images/breaks/about-me-page-break.webp`
❌ `/images/Sunil.jpg` - Photo for About section
❌ Portfolio item images (5 items)

#### Use Placeholders If Missing:
- Logo: Text-based "SI" in circle
- Background video: CSS gradient fallback
- Break cards: Solid color + pattern
- Sunil photo: Placeholder avatar
- Portfolio: SVG placeholders

---

### Content Data Files to Create

#### `/lib/learning-paths-data.ts`
```typescript
export const learningPaths = [
  {
    id: 1,
    number: "Learning Path 1",
    title: "History & Context",
    description: "Understand the evolution of AI from theoretical foundations to modern applications...",
    image: "/images/heroes/history-hero.webp",
    slug: "history",
  },
  // ... 4 more paths
];
```

#### `/lib/portfolio-data.ts`
```typescript
export const portfolioItems = [
  {
    id: 1,
    title: "Seshan Intelligence",
    description: "AI-powered business intelligence platform with advanced analytics",
    image: "/images/portfolio/seshan-intelligence.png",
    link: "#",
  },
  // ... 4 more items
];
```

---

## Responsive Breakpoints

### Desktop (> 1024px)
- Card container: 1920px max-width
- Card spacing: 300px
- Typography: Full size
- Carousels: 3-item layout
- About grid: 2 columns
- Footer grid: 4 columns

### Tablet (768px - 1024px)
- Card container: 90% max-width
- Card spacing: 200px
- Typography: ~20% smaller
- Carousels: 3-item layout (scaled)
- About grid: 2 columns (smaller)
- Footer grid: 4 columns

### Mobile (< 768px)
- Card container: 100% max-width, 20px padding
- Card spacing: 100px
- Typography: ~50% smaller
- Carousels: 1-item layout (center only)
- About grid: 1 column (stacked)
- Footer grid: 1 column
- Cards: Auto height (not fixed 960px)

---

## Implementation Order

### Phase 1: Foundation (Already Done) ✅
1. ✅ Update fonts to Funnel Display
2. ✅ Update global CSS variables
3. ✅ Create SplashScreen component
4. ✅ Create WireframeHeader component
5. ✅ Create WireframeHero component

### Phase 2: Break Cards & Basic Structure
1. Create BreakCard component (generic, reusable)
2. Create placeholder images for break cards
3. Test card container spacing (300px)
4. Verify responsive behavior

### Phase 3: Carousels
1. Create LearningPathsCarousel component
2. Create learning-paths-data.ts
3. Implement carousel logic (arrows, dots, transitions)
4. Create PortfolioCarousel component
5. Create portfolio-data.ts
6. Test carousel animations

### Phase 4: About & Footer
1. Create AboutCard component
2. Find/create Sunil photo
3. Add stats cards
4. Create FooterCard component
5. Add footer links

### Phase 5: Integration & Testing
1. Update page.tsx with all components
2. Test full scroll experience
3. Verify 300px card spacing
4. Test responsive breakpoints
5. Test theme toggle throughout
6. Fix any spacing/alignment issues

### Phase 6: Images & Polish
1. Replace placeholder images with real ones
2. Optimize images to WebP
3. Add loading states
4. Add scroll animations (optional)
5. Performance testing

### Phase 7: Deploy
1. Build and test locally
2. Commit to GitHub
3. Verify production build
4. Deploy to Vercel (if applicable)

---

## File Structure

```
/app
  /layout.tsx              ✅ Updated (Funnel Display font)
  /page.tsx                ⏳ Needs complete rewrite
  /globals.css             ✅ Updated (wireframe variables)

/components
  /homepage
    /SplashScreen.tsx      ✅ Complete
    /WireframeHeader.tsx   ✅ Complete
    /WireframeHero.tsx     ✅ Complete
    /BreakCard.tsx         ⏳ TODO
    /LearningPathsCarousel.tsx  ⏳ TODO
    /PortfolioCarousel.tsx      ⏳ TODO
    /AboutCard.tsx         ⏳ TODO
    /FooterCard.tsx        ⏳ TODO

  /layout
    /Header.tsx            ❌ DELETE (replaced by WireframeHeader)

/lib
  /ticker-words.ts         ✅ Complete
  /learning-paths-data.ts  ⏳ TODO
  /portfolio-data.ts       ⏳ TODO
  /constants.ts            ❌ DELETE or repurpose

/types
  /learning-path.ts        ❌ DELETE or repurpose
```

---

## Wireframe Compliance Checklist

### Layout ✅
- [ ] Card container max-width: 1920px
- [ ] Card spacing: 300px (desktop), 200px (tablet), 100px (mobile)
- [ ] All cards min-height: 960px (desktop)
- [ ] First card margin-top: 80px
- [ ] Border radius: 30px

### Splash Screen ✅
- [x] Black background
- [x] "Hello" in Funnel Display 120px
- [x] Blink animation
- [x] Slides up after 3s
- [x] Cubic bezier easing

### Header ✅
- [x] Fixed position, 80px height
- [x] Logo ring 50px with image
- [x] "Sunil Iyer" name stacked
- [x] Theme toggle top-right
- [x] Hamburger menu top-right
- [x] Backdrop blur

### Hero ✅
- [x] Video background
- [x] "Vibe, [word] AI" layout
- [x] Word ticker in green box
- [x] "+ a little me" line 2
- [x] 100px Funnel Display font

### Break Cards ⏳
- [ ] 3 cards (Learning Paths, Portfolio, About)
- [ ] Full background images
- [ ] Dark overlay
- [ ] White text 72px centered
- [ ] Min-height 960px

### Carousels ⏳
- [ ] 3-item layout (center focused)
- [ ] Side items blurred + scaled down
- [ ] Arrows left/right
- [ ] Dots navigation
- [ ] Smooth transitions 500ms
- [ ] Mobile: 1-item only

### About Card ⏳
- [ ] Grid layout (image left, content right)
- [ ] 480px + 1fr columns
- [ ] Stats row with 3 cards
- [ ] Colored stat numbers

### Footer Card ⏳
- [ ] 4-column grid
- [ ] About, Learning, Portfolio, Connect
- [ ] Copyright bottom center
- [ ] Border top

---

## Risk Assessment

### High Risk
❗ **Carousel Implementation**
- Complex state management
- Smooth animations
- Touch gestures (future)
- **Mitigation**: Start simple, add features incrementally

❗ **Missing Images**
- Don't have logo, background video, Sunil photo
- **Mitigation**: Create placeholders, use Epic 0 images where possible

### Medium Risk
⚠️ **Responsive Breakpoints**
- Wireframe has specific sizing at each breakpoint
- **Mitigation**: Follow wireframe CSS exactly, test on real devices

⚠️ **Theme Toggle**
- Must work across all cards
- **Mitigation**: Use CSS variables consistently

### Low Risk
✅ **Basic Components**
- Splash, Header, Hero already built
- Break cards are simple

---

## Success Criteria

### Functional
- [ ] Splash screen animates and slides up after 3s
- [ ] Header fixed and always visible
- [ ] Theme toggle works (persists in localStorage)
- [ ] Hero word ticker animates every 3s
- [ ] Break cards display with background images
- [ ] Carousels allow left/right navigation
- [ ] Carousels show 3 items on desktop, 1 on mobile
- [ ] About section displays with stats
- [ ] Footer has all 4 columns
- [ ] All links are functional (even if to #)

### Visual
- [ ] Card spacing exactly 300px on desktop
- [ ] All typography matches wireframe sizes
- [ ] Colors match wireframe spec
- [ ] Blur effect on side carousel items
- [ ] Smooth transitions throughout
- [ ] Responsive at all 3 breakpoints
- [ ] No layout shift on theme toggle

### Performance
- [ ] Build succeeds with zero errors
- [ ] No console warnings
- [ ] Page loads in <3s
- [ ] Smooth 60fps animations
- [ ] Images optimized (WebP)

---

## Timeline Estimate

### Conservative (Detailed)
- Phase 2 (Break Cards): 1-2 hours
- Phase 3 (Carousels): 3-4 hours
- Phase 4 (About/Footer): 1-2 hours
- Phase 5 (Integration): 1 hour
- Phase 6 (Polish): 1 hour
- Phase 7 (Deploy): 30 min

**Total**: 7.5 - 10.5 hours

### Aggressive (MVP)
- Skip carousel animations initially
- Use placeholder images
- Basic responsive (no fine-tuning)

**Total**: 3-4 hours

---

## Next Steps

### Immediate (Now)
1. Review this plan with user
2. Get approval to proceed
3. Decide on image strategy (create vs placeholders)
4. Start Phase 2 (Break Cards)

### After Approval
1. Create BreakCard component
2. Create placeholder break card images
3. Create carousel components
4. Build About and Footer
5. Integrate everything
6. Test and deploy

---

**Plan Status**: ✅ Complete - Awaiting Approval
**Ready to Start**: Phase 2 - Break Cards
