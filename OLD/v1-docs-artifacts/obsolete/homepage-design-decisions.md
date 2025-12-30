# AIDefence Homepage - Final Design Decisions

**Date:** 2024-12-20
**Designer:** Sally (UX Designer)
**Client:** Sunil Iyer
**Project:** AIDefence V2 Homepage (Rayo Aesthetic)

---

## Executive Summary

This document captures the final design decisions for the AIDefence homepage, mapping Rayo template elements to create a cohesive black/white foundation with earth-tone accents.

**Key Decisions:**
- Black background foundation (NOT light/dark toggle like Rayo)
- Vertical scrolling text (NOT horizontal marquee like Rayo)
- Grid layout for learning paths (NOT carousel)
- EXACT blur-focus carousel for portfolio (100% Rayo match)
- Slide-out navigation menu from right (NOT dropdown)

---

## 1. Global Foundation

### Color Palette
```css
--color-black: #000000;          /* Background foundation */
--color-white: #FFFFFF;          /* Content cards, primary text */
--color-dark-moss: #333d29;      /* Earth accent 1 */
--color-olive-green: #414833;    /* Earth accent 2 */
--color-beige-ivory: #F5F5DC;    /* Highlight text, subtle accents */
--color-copper: #936639;         /* Earth accent 3, warmth */
```

### Typography
- **Headers:** Clean sans-serif, white on black
- **Body:** Black on white (inside content cards)
- **Accents:** Beige ivory (#F5F5DC) for rotating text

---

## 2. Navigation & Header

### Logo
- **Text:** "Sunil Iyer" (NOT "AIDefence" - that's Epic 2)
- **Position:** Top-left (60px from edges)
- **Color:** White (#FFFFFF)
- **Font Size:** 24px

### Menu
- **Type:** Slide-out menu from RIGHT
- **Width:** 400px
- **Trigger:** Hamburger icon (top-right, 40×30px)
- **Background:** Dark semi-transparent (#1a1a1a, 90% opacity)
- **Border:** Earth-tone accent (#333d29)

**Rayo Comparison:** Rayo uses dropdown menu; AIDefence uses slide-out for cleaner mobile UX (75% match)

---

## 3. Hero Section

### Video Background
- **Format:** MP4 + WebM fallback
- **Duration:** 30-50 seconds loop
- **Opacity:** 0.3
- **Position:** `object-fit: cover`, `position: absolute`
- **Z-index:** Behind all content

### Rotating Text Animation
- **Container:** Curved gradient box
  - Border radius: 60px
  - Gradient: `linear-gradient(135deg, #936639, #414833)` (copper → olive)
  - Padding: 40px 80px

- **Animation:** VERTICAL SCROLL (NOT horizontal like Rayo)
  - Direction: Scrolling UP (stock ticker style)
  - Duration: 14 seconds total (7 words × 2s each)
  - Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

**Words (in order):**
1. Artificial
2. Agentic
3. Adversarial
4. Algorithmic
5. Automated
6. Augmented
7. Adaptive

**CSS Animation:**
```css
@keyframes verticalScroll {
  0%, 14.28% { transform: translateY(0); }          /* Artificial */
  14.29%, 28.57% { transform: translateY(-60px); }  /* Agentic */
  28.58%, 42.85% { transform: translateY(-120px); } /* Adversarial */
  42.86%, 57.14% { transform: translateY(-180px); } /* Algorithmic */
  57.15%, 71.42% { transform: translateY(-240px); } /* Automated */
  71.43%, 85.71% { transform: translateY(-300px); } /* Augmented */
  85.72%, 100% { transform: translateY(-360px); }   /* Adaptive */
}
```

**Text Styling:**
- Font size: 40px
- Color: Beige Ivory (#F5F5DC)
- Text align: Center
- Line height: 60px

**Rayo Comparison:** Rayo uses horizontal marquee; AIDefence uses vertical scroll for faster, more dynamic feel (70% match)

---

## 4. Learning Paths Section

### Layout Decision: GRID (NOT Carousel)
- **Reason:** Better clarity, all 5 paths visible simultaneously
- **Layout:**
  - Top row: 2 cards @ 500px width each
  - Bottom row: 3 cards @ 370px width each
  - Gap: 50px horizontal, 50px vertical

### Card Styling
- **Background:** White (#FFFFFF)
- **Border:** 2px solid, earth-tone colors (rotate through #333d29, #414833, #936639, #F5F5DC)
- **Border radius:** 12px
- **Padding:** 40px
- **Height:** 200px

### Hover Animation
```css
.learning-path-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**5 Learning Paths:**
1. History & Context Path
2. Foundation Path
3. Implementation Path
4. Risk & Ethics Path
5. Legal & Compliance Path

**Rayo Comparison:** Rayo uses carousel for most sections; AIDefence uses grid for learning paths for better UX (80% match to Rayo aesthetic, 100% match to user needs)

---

## 5. Portfolio Section

### Layout: Blur-Focus Carousel (EXACT RAYO MATCH - 100%)

**This is the signature Rayo effect - we're keeping it EXACTLY as-is.**

### Carousel Configuration
- **Items:** 4 portfolio projects
- **Visible:** 3 at a time (center + 2 blurred sides)
- **Navigation:** Swipe gestures + arrow buttons

### Card States

#### Focused (Center Card)
```css
.portfolio-card.focused {
  filter: blur(0);
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 24px 64px rgba(255, 255, 255, 0.3);
  z-index: 10;
}
```
- **Size:** 500×500px
- **Border:** 4px solid #936639 (copper accent)

#### Blurred (Side Cards)
```css
.portfolio-card.blurred {
  filter: blur(8px);  /* KEY RAYO EFFECT */
  opacity: 0.5;
  transform: scale(0.9);
  z-index: 5;
}
```
- **Size:** 300×400px
- **Border:** 2px solid #666666

### Portfolio Items (4 total)
1. **Seshan Intelligence** - AI-powered business intelligence platform
2. **Seshan App** - Mobile AI assistant
3. **Free Tools** - Open-source AI utilities
4. **AI Comics** - Generative AI storytelling

**Rayo Comparison:** 100% match - this is THE signature Rayo effect we're keeping

---

## 6. About Section

### Layout: Two-Column
- **Left:** Image (600×500px, rounded corners 12px)
- **Right:** Text content + 3 stat cards

### Stat Cards
- **Layout:** 3 cards in row
- **Size:** 150×120px each
- **Background:** Dark (#1a1a1a)
- **Border:** 2px solid, earth-tone (rotate through accents)
- **Border radius:** 12px

**Example Stats:**
- 20+ Projects Delivered
- 10+ Years Experience
- 50+ Clients Served

**Number Styling:**
- Font size: 36px
- Color: Earth-tone accent (matches border)
- Font weight: Bold

---

## 7. Footer

### Layout: 4-Column Grid
- **Columns:**
  1. About (Mission, Team, Contact)
  2. Learning (5 learning paths)
  3. Portfolio (4 portfolio items)
  4. Connect (LinkedIn, Twitter, Email)

### Styling
- **Background:** Black (same as page)
- **Text:** Light gray (#999999)
- **Links:** White on hover
- **Copyright:** Centered, 60% opacity

---

## 8. Animation Library

### Required Dependencies
```json
{
  "gsap": "^3.12.0",
  "gsap/ScrollTrigger": "^3.12.0",
  "@studio-freight/lenis": "^1.0.0"
}
```

### Key Animations
1. **Vertical Scrolling Text:** GSAP timeline with translateY
2. **Blur-Focus Carousel:** GSAP with filter and transform
3. **Card Hover:** CSS transitions (transform, box-shadow)
4. **Smooth Scroll:** Lenis smooth scroll integration
5. **Slide-out Menu:** GSAP with translateX

---

## 9. Responsive Breakpoints

### Desktop (1440px+)
- Full layout as designed
- Portfolio carousel shows 3 cards

### Tablet (768px - 1439px)
- Learning paths: 2 columns (top 2, bottom 3)
- Portfolio carousel: 2 visible (center + 1 side)
- Footer: 2 columns (stack 4→2)

### Mobile (<768px)
- Learning paths: 1 column, vertical stack
- Portfolio carousel: 1 visible (swipeable)
- Navigation: Full-screen slide-out
- Footer: 1 column, accordion

---

## 10. Decision Matrix Summary

| Element | Rayo Original | AIDefence Final | Match % | Reasoning |
|---------|--------------|----------------|---------|-----------|
| **Background Color** | Light/dark switchable | Black always | 80% | Stronger brand identity |
| **Hero Animation** | Horizontal marquee | Vertical scroll | 70% | Faster, more dynamic |
| **Learning Paths** | Carousel | Grid layout | 80% | Better UX, all visible |
| **Portfolio** | Blur-focus carousel | Blur-focus carousel (EXACT) | **100%** | Signature Rayo effect |
| **Navigation** | Dropdown | Slide-out menu | 75% | Better mobile UX |
| **Typography** | Variable fonts | Clean sans-serif | 85% | Simpler, faster load |
| **Color Palette** | Muted pastels | Black/white + earth | 90% | Aligned with brand |

**Overall Rayo Aesthetic Match:** 83% (strategic adaptations for better UX)

---

## 11. Next Steps

### Phase 1: Component Development (Week 1-2)
- [ ] Video background component with fallback
- [ ] Vertical scrolling text animation
- [ ] Learning path grid with hover states
- [ ] Blur-focus carousel component
- [ ] Slide-out navigation menu

### Phase 2: Integration (Week 3)
- [ ] GSAP + ScrollTrigger setup
- [ ] Lenis smooth scroll integration
- [ ] Responsive breakpoints
- [ ] Performance optimization (lazy loading, code splitting)

### Phase 3: Testing (Week 4)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance testing (Lighthouse score >90)

### Phase 4: Launch (Week 5)
- [ ] Final QA
- [ ] Deploy to production
- [ ] Monitor analytics
- [ ] Gather user feedback

---

## 12. Files Delivered

1. **`/Volumes/External/aidefence/docs/rayo-aidefence-element-mapping.md`**
   Comprehensive element-by-element breakdown of Rayo → AIDefence mapping

2. **`/Volumes/External/aidefence/docs/homepage-wireframe-v2.excalidraw`**
   Visual wireframe showing all design decisions (1440×5200px canvas)

3. **`/Volumes/External/aidefence/docs/homepage-design-decisions.md`** (this document)
   Executive summary of all design decisions and specifications

---

## Questions for Review

Before proceeding to component development, please confirm:

1. **Logo:** Confirm "Sunil Iyer" is correct (NOT "AIDefence")
2. **Vertical Scroll:** Approve vertical scrolling text (vs. horizontal marquee)
3. **Grid vs Carousel:** Approve grid layout for learning paths (vs. carousel)
4. **Color Palette:** Approve black/white + earth-tone palette
5. **Portfolio Blur:** Approve exact Rayo blur-focus carousel (8px blur on sides)

---

**Status:** Ready for review and approval
**Next Action:** Await client feedback, then proceed to component development

---

*Designed by Sally, UX Designer | AIDefence V2 | December 2025*
