# Homepage Wireframe V5 - Splash Screen & Redesign

**Version:** 5.0
**Date:** 2025-12-20
**Status:** Ready for Review
**File:** `/Volumes/External/aidefence/docs/homepage-wireframe-v5-with-splash.html`

---

## 🎬 WHAT'S NEW IN V5

### Major Changes

1. **Splash Screen ("Hello" Page)**
   - Black background (#000000)
   - "Hello" text in slightly off-white (#f5f5f0)
   - Blinks every 0.8 seconds (20% faster)
   - Displays for 3 seconds (40% shorter)
   - Slides up to reveal homepage

2. **New Header Bar** (Homepage Only)
   - Fixed position at top
   - Left: Logo (logo.jpg) in circular ring
   - Next to logo: Name in two lines ("Sunil" / "Iyer")
   - Right: Theme toggle + Hamburger menu
   - Semi-transparent background with blur effect

3. **Redesigned Hero Section** (Inspired by Rayo Template)
   - **Removed:** "Sunil Iyer" from hero video area
   - **New Layout:**
     - Line 1: "Vibe, [Words] AI"
       - "Vibe" with color animation
       - Word ticker in black rounded box (inline)
       - "AI" with color animation
     - Line 2: "+ a little me"
   - Centered, large typography (120px / 100px)
   - Lighter, more modern feel

---

## 🎨 DETAILED SPECIFICATIONS

### 1. Splash Screen

**Structure:**
```html
<div id="splash-screen">
  <div class="hello-text">Hello</div>
</div>
```

**Styling:**
- Position: Fixed, covers entire viewport
- Background: #000000 (pure black)
- Z-index: 10000 (above everything)
- Font: "Funnel Display", 120px, weight 300 (thin)
- Color: #f5f5f0 (slightly off-white)

**Animation:**
- Blink effect: 0.8s interval (20% faster)
  - 0%, 50%, 100%: opacity 1
  - 25%, 75%: opacity 0.3
- After 3 seconds: slides up (translateY(-100%))
- Transition: 1s cubic-bezier(0.76, 0, 0.24, 1) (smooth easing)

---

### 2. Header Bar

**Position & Size:**
- Fixed at top: 80px height
- Full width with 60px side padding
- Z-index: 9000

**Background:**
- Light mode: rgba(255, 255, 255, 0.95)
- Dark mode: rgba(26, 26, 26, 0.95)
- Backdrop blur: 10px (glassmorphism effect)
- Box shadow: 0 2px 10px rgba(0, 0, 0, 0.05)

**Logo Section (Left):**
- Logo ring: 50px diameter circle
  - Border: 2px solid #333d29
  - Contains logo.jpg (centered, object-fit: contain)
- Name text (next to logo):
  - Font: "Funnel Display"
  - Two lines: "Sunil" / "Iyer"
  - Font size: 20px
  - Font weight: 600
  - Gap between logo and name: 20px

**Controls (Right):**
- Theme toggle: Fixed at top: 15px, right: 125px
- Hamburger menu: Fixed at top: 15px, right: 60px
- Both: 50px diameter circles

---

### 3. Hero Section Redesign

**Container:**
- Width: 1920px max-width (20% increase from 1600px - desktop)
- Height: 960px (20% increase from 800px - all cards now 960px)
- Padding top: 120px (to account for header)
- Centered content
- First card-container has 80px top margin for header clearance
- Responsive: 90% on tablet, 100% on mobile

**Typography:**

**Font:** "Funnel Display" (from Rayo template)
**All elements: 100px, weight 400**

**Line 1:** "Vibe, [Words] AI"
- Font size: 100px
- Layout: Flexbox (horizontal, centered, wrappable)
- Gap between elements: 30px

**Components:**
1. "Vibe" - Static color (var(--text-primary))
2. "," - Static comma
3. Word ticker box:
   - Size: 280px × 70px
   - Rounded: 40px border-radius
   - Background: #333d29 (moss green)
   - Inner wrapper: #333d29 (moss green, matching outer)
   - Word text: "Funnel Display", 32px, #ffffff (proper white)
   - Slide-up animation (same as V4)
4. "AI" - Static color (var(--text-primary))

**Line 2:** "+ a little me"
- Font size: 100px (same as line 1)
- Font weight: 400 (same as line 1)
- Opacity: 0.9 (slightly transparent)
- Color: var(--text-primary)
- Margin top: 20px

**Video Background:**
- Same as V4
- Opacity: 0.3 (light mode), 0.2 (dark mode)
- Behind all hero content
- Hero card background: White (light mode), Dark grey (dark mode)
- No grey tint in light mode - clean white background

---

## 🎯 RAYO TEMPLATE INSPIRATION

**What we borrowed from Rayo home-1:**

1. **Large, bold typography** - Oversized text as focal point
2. **Two-line layout** - Main statement + supporting text
3. **Playful inline elements** - Integrated animations within text flow
4. **Center-aligned hero** - Classic, confident positioning
5. **Simple, powerful messaging** - "Design, tech and some magic" → "Vibe, [Words] AI + a little me"

**What we kept from AIDefence V4:**

1. Card-based structure
2. Theme toggle functionality
3. Word ticker animation (now inline)
4. Color palette (#333d29, #936639, #414833)
5. Break cards with background images
6. Carousel layouts for Learning Paths & Portfolio

---

## 📐 LAYOUT HIERARCHY

### User Journey:

1. **0-3 seconds:** Splash screen ("Hello" blinking)
   - Builds anticipation
   - Sets sophisticated tone
   - Blinks faster (0.8s) for snappier feel

2. **3-4 seconds:** Slide transition
   - Smooth reveal (1s slide up)
   - Homepage appears from below

3. **4+ seconds:** Homepage experience
   - Header bar visible (logo + name)
   - Hero: "Vibe, [Words] AI + a little me"
   - Scroll through content cards
   - **Spacing:** 300px between cards creates strong "coming up" effect
   - Each section emerges into view from below as you scroll
   - Each section gets generous breathing room and attention

---

## 🎬 ANIMATIONS SUMMARY

### Splash Screen:
- **Blink:** 0.8s infinite (opacity 1 ↔ 0.3) - 20% faster
- **Slide:** After 3s, translateY(-100%) over 1s - 40% shorter wait

### Hero Section:
- **Word ticker:** 0.5s interval, 0.6s bounce animation
  - Slides up from bottom
  - Overshoots to -5%, settles at 0%
  - Moss green background (#333d29)
  - White text (#ffffff)

### Theme Toggle:
- **Switch:** 0.3s ease (all CSS variables)
- **Icon change:** ☀️ ↔ 🌙

---

## 💻 TECHNICAL IMPLEMENTATION

### HTML Structure:
```
<body>
  <div id="splash-screen">Hello</div>

  <div id="main-page">
    <header class="header-bar">Logo + Name</header>
    <div class="theme-toggle">☀️</div>
    <div class="hamburger-menu">≡</div>

    <section class="hero-card">
      Vibe, [Words] AI
      + a little me
    </section>

    ... rest of cards ...
  </div>
</body>
```

### JavaScript Functions:
1. **Splash timing:** DOMContentLoaded + setTimeout(3000)
2. **Word ticker:** setInterval(slideUpWord, 500)
3. **Theme toggle:** toggleTheme() + localStorage

### CSS Highlights:
- Google Fonts: "Funnel Display" (from Rayo template)
- CSS Variables for theming
- Backdrop blur on header
- Cubic-bezier easing for smooth animations
- Flexbox for inline ticker layout

---

## 📱 RESPONSIVE DESIGN

**Desktop (> 1024px):**
- Card container: 1920px max-width (20% increase)
- Card spacing: 300px between cards
- Full 3-item carousels
- All text at full size

**Tablet (768px - 1024px):**
- Card container: 90% max-width
- Card spacing: 200px between cards
- Header padding: 40px
- Splash text: 100px (reduced from 120px)
- Hero text: 80px (reduced from 100px)
- Word ticker: 240px × 60px (reduced)
- Carousel items: 300px (side), 480px (center)
- About grid: 400px + 1fr

**Mobile (< 768px):**
- Card container: 100% max-width
- Card spacing: 100px between cards
- All cards: Auto height (content-driven)
- Header: 60px height, 20px padding
- Logo: 40px diameter
- Header name: 16px font
- Splash text: 80px
- Hero text: 48px (stacked vertically)
- Word ticker: 200px × 50px, 24px text
- Break cards: 400px height
- Carousels: Single column (side items hidden)
- Carousel arrows: Hidden
- About grid: Single column
- Stats: Stacked vertically
- Footer: Single column grid

---

## 🎨 UX RATIONALE

### Why the Splash Screen?

**Problem:** The video background was "jumping out" - too abrupt
**Solution:** "Hello" splash creates a buffer

**User Psychology:**
1. **Anticipation:** 3 seconds builds curiosity (not too long)
2. **Energy:** Faster blink (0.8s) feels snappier, more modern
3. **Invitation:** "Hello" is warm and welcoming
4. **Reveal:** Slide transition feels like opening curtains
5. **Payoff:** Full homepage feels earned, not sudden

### Why Move the Name to Header?

**Problem:** Name in hero competed with word ticker
**Solution:** Header placement establishes identity without competing

**Benefits:**
1. **Always visible:** Name stays on screen while scrolling
2. **Professional:** Header with logo = credibility
3. **Focus:** Hero can focus on the message ("Vibe, [Words] AI")
4. **Brand consistency:** Logo + name together is stronger

### Why "Vibe, [Words] AI + a little me"?

**Problem:** Previous hero was text-heavy
**Solution:** Simple, conversational statement

**Breakdown:**
- **"Vibe"** - Sets the tone (relaxed, approachable)
- **"[Words]"** - Placeholder for rotating concepts (dynamic)
- **"AI"** - Core expertise (clear positioning)
- **"+ a little me"** - Personal touch (human-centered)

**Tone:** Confident but not stuffy, expert but approachable

### Why 300px Card Spacing?

**Problem:** Cards felt too close together, not enough "emerging" effect
**Solution:** 300px creates dramatic "coming up into view" experience

**Benefits:**
1. **Generous breathing room:** Each card truly stands alone
2. **Strong emergence effect:** Cards visibly rise into focus as you scroll
3. **Deliberate pacing:** Forces viewer to pause and engage with each section
4. **Clear visual hierarchy:** Spacing makes each card feel like its own moment
5. **Premium, editorial feel:** Generous whitespace = luxury and sophistication
6. **Natural scroll rhythm:** Each card appears one at a time, not crowded

**UX Intent:** The scroll should feel like cards "coming up" from below into your attention, like turning cards in a deck rather than reading a continuous page

---

## 🔧 FILES MODIFIED

1. **Created:**
   - `/docs/homepage-wireframe-v5-with-splash.html` - Complete new version
   - `/docs/homepage-wireframe-v5-changes.md` - This document

2. **Referenced:**
   - `/docs/words.js` - Word ticker configuration (unchanged)
   - `/public/images/logo.jpg` - Logo in header
   - `/public/images/background.webm` - Hero video background
   - `/public/images/learningpath.png` - Learning Paths break card background
   - `/public/images/portfolio.png` - Portfolio break card background
   - `/public/images/aboutme.png` - About break card background
   - `/public/images/Sunil.jpg` - Profile image in About section
   - `/public/images/history-context.png, foundation.png, etc.` - Learning path carousel images

3. **Break Card Backgrounds (Updated):**
   - Learning Paths: `learningpath.png`
   - Portfolio: `portfolio.png`
   - About: `aboutme.png`

4. **Preserved from V4:**
   - Learning path carousel images (history-context.png, foundation.png, etc.)
   - Portfolio/About content
   - Footer structure

---

## ✅ CHECKLIST FOR TESTING

When you open `homepage-wireframe-v5-with-splash.html`:

**Initial Load:**
- [ ] Black splash screen appears
- [ ] "Hello" text is visible and blinking
- [ ] Blink happens every 0.8 seconds (faster)

**After 3 Seconds:**
- [ ] Splash screen slides up smoothly
- [ ] Homepage is revealed underneath
- [ ] No visual glitches during transition

**Header Bar:**
- [ ] Logo (logo.jpg) loads in circular ring
- [ ] Name displays as "Sunil" / "Iyer" (two lines)
- [ ] Header stays fixed when scrolling
- [ ] Theme toggle and hamburger visible

**Hero Section:**
- [ ] Video background plays
- [ ] Hero card background is WHITE in light mode (no grey)
- [ ] Hero card background is DARK in dark mode
- [ ] Video opacity: 0.3 in light mode, 0.2 in dark mode
- [ ] "Vibe" and "AI" use static theme color (no animation)
- [ ] All text uses "Funnel Display" font
- [ ] Word ticker slides up every 0.5s
- [ ] Word box has moss green background (#333d29)
- [ ] Word text is proper white (#ffffff)
- [ ] Words bounce slightly when entering
- [ ] Line 2 ("+ a little me") is visible and same size as line 1

**Header Bar:**
- [ ] "Sunil Iyer" uses "Funnel Display" font

**Rest of Page:**
- [ ] All cards are 960px tall (20% larger)
- [ ] All break cards load background images
- [ ] Learning Paths carousel shows 3 items
- [ ] Portfolio carousel works
- [ ] About section displays
- [ ] Footer matches page background (not black box)
- [ ] Footer text uses theme colors (not hardcoded white)

**Theme Toggle:**
- [ ] Click changes light ↔ dark
- [ ] All colors update smoothly
- [ ] Preference persists on refresh

---

## 🚀 NEXT STEPS

### Immediate:
1. Test in browser
2. Verify logo.jpg loads correctly
3. Check all animations are smooth
4. Test theme toggle

### Future Enhancements:
1. Add fade-in for main page after splash
2. Animate header bar on scroll (hide/show)
3. Add hamburger menu functionality
4. Make carousels interactive (arrows/dots)
5. ✅ Responsive breakpoints for mobile, tablet, desktop (COMPLETED)

### For Next.js Conversion:
1. Split into components:
   - `SplashScreen.tsx`
   - `Header.tsx`
   - `HeroSection.tsx`
   - etc.
2. Update image paths to Next.js format
3. Add page transitions library (Framer Motion)
4. Implement carousel state management

---

## 📊 VERSION COMPARISON

| Feature | V4 | V5 |
|---------|----|----|
| **Splash Screen** | ❌ None | ✅ "Hello" 3s blinking (0.8s) |
| **Header** | ❌ None | ✅ Logo + Name bar |
| **Name Location** | Hero video area | Header bar |
| **Hero Layout** | "Sunil Iyer" + ticker below | "Vibe, [Words] AI + a little me" |
| **Hero Size** | 76px name | 100px text |
| **Card Width** | 1600px | 1920px (20% increase) |
| **Card Height** | 800px | 960px (20% increase) |
| **Card Spacing** | 60px | 300px |
| **Theme Toggle** | Floating | In header area |
| **First Impression** | Immediate | Progressive reveal |
| **Video Impact** | Sudden | Softened by splash |
| **Responsive** | ❌ Desktop only | ✅ Mobile, Tablet, Desktop |

---

## 🎭 FINAL THOUGHTS

**What makes V5 special:**

1. **Anticipation** - The splash creates a moment
2. **Identity** - Header establishes who you are
3. **Message** - Hero focuses on what you do
4. **Flow** - Smooth transitions guide the experience
5. **Balance** - Professional + approachable

**The user experience:**

> "You land on a black screen. 'Hello' blinks at you, friendly but mysterious. After a breath, the page slides open like curtains. You see Sunil's logo and name at the top - instant credibility. Below, a bold statement: 'Vibe, [Word] AI + a little me.' You get it immediately. This is someone who knows AI, but keeps it human. You scroll down, curious to learn more..."

That's the experience we've created. 🎨

---

**End of V5 Documentation**
