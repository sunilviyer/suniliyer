# Rayo → AIDefence Homepage: Complete Element & Animation Mapping

**Website:** Sunil Iyer (NOT AIDefence - that's the learning page in Epic 2)
**Rayo Reference:** https://rayo-nextjs-creative-template.netlify.app/home-main
**Date:** 2025-12-20
**Designer:** Sally (UX Designer)

---

## 🎨 **GLOBAL DESIGN FOUNDATION**

### Color Palette (Black/White + Earth Tones)

| Rayo Original | AIDefence Adaptation | Usage |
|---------------|---------------------|--------|
| Light/Dark mode switchable | **Black (#000000) primary** with earth-tone accents | Black background, white content boxes |
| Dynamic theme | **Time-based** dark mode (night) / light mode (day) | Automatic based on user's local time |
| Accent colors | **Earth tones:** Charcoal Brown #333d29, Moss Green #414833, Beige Ivory #F5F5DC, Earth Accent #936639 | Curved boxes, highlights, category badges |

**Decision:** ✅ Black background (#000000), white content boxes, earth-tone accents (no pure Rayo light mode)

---

## 📍 **NAVIGATION & HEADER**

### Rayo: Dropdown Menu Structure
- Minimal, clean typography
- Animated link transitions
- Hover and interaction states

### AIDefence Adaptation: **Slide-Out Menu (Right Side)**

**Element:** Navigation Menu
**Rayo Animation:** Dropdown menu with hover states
**AIDefence Implementation:**
- **Type:** Slide-out panel from right (400px width)
- **Trigger:** Hamburger icon (top-right, 48×48px)
- **Animation:** CSS `transition: right 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)`
- **Menu Items:**
  1. Home
  2. Learn (links to #learn)
  3. Resume (StackCards section)
  4. Portfolio (carousel section)
  5. Tools
  6. Comics
  7. Contact
  8. Credits
- **Styling:**
  - Background: `var(--bg-surface)` (#1a1a1a semi-transparent)
  - Border-left: `2px solid var(--accent)` (#936639)
  - Menu links: 24px font, hover → accent color, underline animation

**Logo Position:**
- **Rayo:** Left side, minimal
- **AIDefence:** Fixed top-left nav bar (NOT in slide-out menu)
  - Text: "Sunil Iyer" (24px, bold, white)
  - **NOT** "AIDefence" (that's Epic 2 learning page)

**Decision:** ✅ Hamburger menu (top-right) + "Sunil Iyer" logo (top-left fixed nav)

---

## 🎬 **HERO SECTION**

### Rayo: Animated Multi-Image Hero + Marquee Text

**Rayo Elements:**
1. Floating/moving image effects
2. Marquee text animation with "tech" repeating
3. Animated scroll indicator with rotating text

### AIDefence Adaptation: **Video Background + Vertical Scrolling Text**

---

#### **Hero Element 1: Video Background**

**Rayo Original:** Parallax image movements, floating/pulsing image transitions
**AIDefence Implementation:**
- **Video Source:** 30-50 second loop (MP4 + WebM)
- **Content:** Abstract AI visualizations, neural network patterns
- **Opacity:** 0.3 (subtle background, doesn't distract from text)
- **Animation:** Continuous autoplay loop
- **Optimization:**
  - Desktop: 1080p, <2MB (MP4), <1.5MB (WebM)
  - Mobile: 720p, lazy load with poster image
- **Fallback:** Static poster image if video fails to load

**CSS:**
```css
.hero-video-bg {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    opacity: 0.3;
}
.hero-video-bg video {
    width: 100%; height: 100%;
    object-fit: cover;
}
```

**Decision:** ✅ Video background (30-50s loop, abstract AI visuals, 0.3 opacity)

---

#### **Hero Element 2: Rotating Text Animation**

**Rayo Original:** GSAP-powered marquee animations (horizontal text scrolling)
**AIDefence Implementation:** **VERTICAL SCROLLING** (stock ticker style)

**Text Structure:**
```
"Sunil Iyer"  (static, 72px heading)

[Rotating Text Container - Curved Box]
  "Artificial" ↓ "Agentic" ↓ "Adversarial" ↓ "Algorithmic" ↓ "Automated" ↓ "Augmented" ↓ "Adaptive"
  +
  "AI" (static)
```

**Visual Design:**
- **Curved Box Container:**
  - `background: linear-gradient(135deg, var(--color-earth-accent) 0%, var(--color-moss-green) 100%)`
  - `border-radius: 60px` (pill shape)
  - `padding: 12px 32px`
  - `box-shadow: 0 8px 32px rgba(147, 102, 57, 0.3)`

**Animation Details:**
- **Type:** Vertical scroll (like stock ticker scrolling UP)
- **Duration:** 14 seconds (7 words × 2 seconds each)
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (smooth acceleration/deceleration)
- **Word Color:** Beige Ivory (#F5F5DC) with text-shadow
- **"AI" Color:** White (#FFFFFF), static position

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

.rotating-words {
    animation: verticalScroll 14s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
```

**Wrapper:**
- `overflow: hidden` (hides offscreen words)
- `height: 60px` (shows one word at a time)
- `width: 200px` (Desktop) | `150px` (Mobile)

**Decision:** ✅ Vertical scrolling text in curved gradient box (FASTER than Rayo horizontal, 14s cycle)

---

#### **Hero Element 3: Scroll Indicator**

**Rayo Original:** Animated scroll indicator with rotating text at bottom
**AIDefence Implementation:** Simple "↓ Scroll to explore" text

**Styling:**
- Position: `bottom: 48px, center`
- Animation: Gentle bounce (2s infinite)
- Font-size: 14px, color: rgba(255, 255, 255, 0.6)

**CSS:**
```css
@keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-10px); }
}
```

**Decision:** ✅ Minimal scroll hint (no complex rotating text like Rayo)

---

#### **Hero Element 4: Call-to-Action Buttons**

**Rayo Original:** Hover states on buttons, smooth hover transformations
**AIDefence Implementation:** Two buttons (Primary + Secondary)

**Button 1: Primary ("Start Learning")**
- Background: White (#FFFFFF)
- Text color: Black (#000000)
- Hover: `background: Beige Ivory (#F5F5DC)`, `transform: translateY(-2px)`, `box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2)`

**Button 2: Secondary ("View Portfolio")**
- Background: Transparent
- Border: 2px solid White
- Hover: `background: rgba(255, 255, 255, 0.1)`, `transform: translateY(-2px)`

**Shared:**
- `padding: 16px 32px`
- `border-radius: 12px`
- `font-size: 18px, font-weight: 600`
- `transition: all 0.3s ease`

**Decision:** ✅ Two CTA buttons with hover lift animation (Rayo-style subtle micro-interactions)

---

## 📚 **LEARNING PATHS SECTION** (Rayo: Services/Featured Projects)

### Rayo: Modular Grid, Smooth Transitions

**Rayo Elements:**
- Modular grid system
- Extensive white space
- Hover transformations
- Interactive project previews

### AIDefence Adaptation: **White Content Cards on Black Background** (Grid Layout)

---

#### **Section Header**

**Title:** "Interactive Learning Paths"
**Subtitle:** "Explore curated learning journeys through 120+ concept cards, 28 real-world examples, and 10 essential resources"

**Styling:**
- Text-align: center
- H2: 48px, bold, white
- Subtitle: 20px, rgba(255, 255, 255, 0.8)
- Margin-bottom: 64px

---

#### **Learning Path Cards**

**Rayo Animation:** Hover transformations, scroll-activated reveals
**AIDefence Implementation:** **5 White Content Cards** with hover effects

**Card Design:**
- **Background:** White (#FFFFFF)
- **Text Color:** Black (#000000)
- **Border-radius:** 20px (smooth, modern)
- **Padding:** 48px
- **Grid:** `repeat(auto-fit, minmax(300px, 1fr))`
- **Gap:** 24px

**Hover Animation:**
```css
.path-card:hover {
    transform: translateY(-8px);  /* Lift up */
    box-shadow: 0 16px 48px rgba(255, 255, 255, 0.2);  /* Glow */
    border-color: var(--color-earth-accent);  /* Accent border */
}
```

**Card Content (per card):**
1. **Icon:** 64×64px colored box (moss green background), emoji icon, `border-radius: 16px`
2. **Title:** 24px bold (e.g., "History of AI")
3. **Description:** 16px, rgba(0, 0, 0, 0.7)
4. **Meta:** "15 cards • Beginner" (14px, rgba(0, 0, 0, 0.6))

**5 Cards:**
1. **History of AI** (📜) - "From symbolic AI to modern deep learning"
2. **Core Terminology** (📚) - "Build a solid foundation in ML/AI concepts"
3. **Risk & Vulnerabilities** (⚠️) - "Identify and mitigate AI risks"
4. **Responsible AI** (⚖️) - "Ethical frameworks, fairness metrics, bias mitigation"
5. **Future & Trends** (🔮) - "Emerging technologies, AGI considerations"

**Decision:** ✅ Grid layout (NOT carousel for this section), white cards on black background, hover lift animation

---

## 🎨 **PORTFOLIO SECTION** (Rayo: Horizontal Carousel with Blur Focus)

### Rayo: Carousel with Center Focus, Blurred Sides

**Rayo Animation:**
- Horizontal scroll
- Center card sharp, sides blurred
- Smooth transitions

### AIDefence Adaptation: **Blur Focus Carousel** (Exactly Like Rayo)

---

#### **Section Header**

**Title:** "Portfolio"
**Subtitle:** "Real-world AI governance implementations and practical tools"

---

#### **Carousel Design**

**Layout:**
- **Type:** Horizontal scrolling carousel
- **Focus Behavior:** Center card sharp, adjacent cards blurred
- **Scroll:** Smooth scroll-snap (`scroll-snap-type: x mandatory`)

**Card Styling:**
- **Focused Card:**
  - `filter: blur(0)`
  - `opacity: 1`
  - `transform: scale(1)`
  - `box-shadow: 0 24px 64px rgba(255, 255, 255, 0.3)` (dramatic shadow)

- **Blurred Cards:**
  - `filter: blur(8px)` ← **KEY RAYO EFFECT**
  - `opacity: 0.5`
  - `transform: scale(0.9)` (slightly smaller)

**Animation:**
```css
.carousel-card {
    transition: all 0.5s ease;
}
.carousel-card:not(.focused) {
    filter: blur(8px);  /* Rayo signature blur */
    opacity: 0.5;
    transform: scale(0.9);
}
```

**Card Content (4 cards, each 400px wide):**
1. **Seshan Intelligence** (🏢)
   - Description: "Enterprise AI governance platform for policy management, risk assessment, and compliance tracking"
   - Tags: Enterprise, Governance, Compliance

2. **Seshan App** (📱)
   - Description: "Mobile AI compliance tracker for teams - real-time risk monitoring, policy checklists, and incident reporting"
   - Tags: Mobile, Real-time, Teams

3. **Free Tools** (🛠️)
   - Description: "Open-source AI governance calculators and assessment frameworks - mortgage risk analyzer, bias detector, model card generator"
   - Tags: Open Source, Calculators, Frameworks

4. **AI Governance Comics** (📖)
   - Description: "Visual storytelling for complex AI ethics dilemmas - make governance concepts accessible through illustrated narratives"
   - Tags: Education, Visual, Ethics

**Navigation:**
- **Dots:** 4 dots below carousel (12px circles)
  - Active: white, `scale(1.2)`
  - Inactive: rgba(255, 255, 255, 0.3)
- **Interaction:** Click dot to scroll to that card
- **Auto-rotate:** 5-second interval (optional)

**Decision:** ✅ Rayo blur-focus carousel (EXACT match) with 4 portfolio items

---

## 👤 **ABOUT SECTION** (Rayo: Client Testimonials / Approach)

### Rayo: Two-Column Layout, Stats, Visual Elements

**Rayo Elements:**
- Grid-based approach/philosophy sections
- Dynamic counter animations
- Emphasis on visual storytelling

### AIDefence Adaptation: **About + Stats** (Two-Column)

---

#### **Section Header**

**Title:** "About AIDefence"

---

#### **Layout: Two Columns**

**Left Column: Image Placeholder**
- **Size:** 400px height, full width
- **Background:** White (#FFFFFF)
- **Content:** 👤 emoji (64px) or actual photo
- **Border-radius:** 20px

**Right Column: Text + Stats**

**Heading:** "Practical AI Governance for Real-World Implementation" (36px, bold)

**Body Text:**
1. "AIDefence transforms complex AI governance concepts into actionable frameworks. Founded by practitioners who've implemented AI compliance at scale, we bridge the gap between regulatory requirements and technical reality."

2. "Our approach combines rigorous technical depth with practical implementation strategies - because governance frameworks are only valuable when teams can actually use them."

---

#### **Stats Cards (3 cards, Rayo-style)**

**Rayo Animation:** Dynamic counter animations (numbers count up)
**AIDefence Implementation:** Static for now (animate later)

**Grid:** 3 columns, equal width

**Stat 1:**
- Number: **158** (36px, bold, earth-accent #936639)
- Label: "Learning Resources" (14px, rgba(255, 255, 255, 0.6))

**Stat 2:**
- Number: **5** (36px, bold, earth-accent #936639)
- Label: "Learning Paths" (14px, rgba(255, 255, 255, 0.6))

**Stat 3:**
- Number: **100%** (36px, bold, earth-accent #936639)
- Label: "Open Source" (14px, rgba(255, 255, 255, 0.6))

**Card Styling:**
- `background: rgba(255, 255, 255, 0.05)` (subtle transparency)
- `border: 1px solid rgba(255, 255, 255, 0.1)`
- `border-radius: 16px`
- `padding: 24px`
- `text-align: center`

**Decision:** ✅ Two-column about (image + text + stats), Rayo-inspired stat cards

---

## 📧 **FOOTER / CONTACT** (Rayo: Slide-Down Contact)

### Rayo: Rayo-Style Slide-Down Contact Section

**Rayo Elements:**
- Grid layout for contact + credits
- Social link icons
- Clean, minimal footer

### AIDefence Adaptation: **4-Column Footer Grid**

---

#### **Footer Layout: 4 Columns**

**Column 1: Branding (2fr width)**
- **Heading:** "AIDefence" (18px, bold)
- **Tagline:** "Practical AI governance frameworks for teams building with AI" (16px, rgba(255, 255, 255, 0.6))

**Column 2: Learn Links (1fr width)**
- **Heading:** "Learn"
- Links:
  1. History of AI
  2. Core Terminology
  3. Risk & Vulnerabilities
  4. Responsible AI
  5. Future & Trends

**Column 3: Portfolio Links (1fr width)**
- **Heading:** "Portfolio"
- Links:
  1. Seshan Intelligence
  2. Seshan App
  3. Free Tools
  4. AI Comics

**Column 4: Connect (1fr width)**
- **Heading:** "Connect"
- Links:
  1. Email (mailto:contact@aidefence.com)
  2. GitHub
  3. Twitter
  4. LinkedIn

**Styling:**
- Background: Black (#000000)
- Border-top: 1px solid rgba(255, 255, 255, 0.1)
- Padding: 64px 24px
- All links: rgba(255, 255, 255, 0.6), hover → white

---

#### **Footer Bottom: Copyright**

**Content:** "© 2024 AIDefence. All rights reserved. | Privacy Policy | Terms of Service"

**Styling:**
- Border-top: 1px solid rgba(255, 255, 255, 0.1)
- Text-align: center
- Color: rgba(255, 255, 255, 0.6)
- Padding: 24px

**Decision:** ✅ 4-column footer grid + bottom copyright bar

---

## 🎯 **SUMMARY: ALL RAYO ANIMATIONS MAPPED**

| Rayo Animation | AIDefence Element | Implementation Status |
|----------------|-------------------|---------------------|
| **Parallax image movements** | Video background (30-50s loop, 0.3 opacity) | ✅ Adapted |
| **GSAP marquee text** (horizontal) | **Vertical scrolling text** (stock ticker, 14s cycle) | ✅ **MODIFIED** (vertical, faster) |
| **Floating/pulsing images** | Video background subtle movement | ✅ Adapted |
| **Hover state transformations** | Card hover lift (`translateY(-8px)`) | ✅ Matched |
| **Scroll-triggered reveals** | Deferred to learning path pages | 🔄 Epic 2 |
| **Blur focus carousel** | Portfolio carousel (blur 8px, opacity 0.5) | ✅ **EXACT MATCH** |
| **Dropdown menu** | **Slide-out menu** (right side, 400px) | ✅ **MODIFIED** (slide-out vs dropdown) |
| **Modular grid system** | Learning paths grid (5 cards) | ✅ Matched |
| **Dynamic counters** | Stats (static for now, animate later) | 🔄 Phase 2 |
| **Smooth scroll indicator** | Simple bounce scroll hint | ✅ Simplified |

---

## 🔧 **IMPLEMENTATION PRIORITIES**

### **Phase 1: Core Structure** (Week 1)
1. ✅ Black background + white content boxes
2. ✅ Video background hero (30-50s loop, 0.3 opacity)
3. ✅ Vertical scrolling text in curved gradient box
4. ✅ CTA buttons with hover lift
5. ✅ Grid layout for learning paths (5 white cards)

### **Phase 2: Advanced Animations** (Week 2)
6. ✅ Blur-focus portfolio carousel (EXACT Rayo match)
7. ✅ Slide-out menu (right side, hamburger trigger)
8. ✅ About section (two-column + stats)
9. ✅ Footer grid (4 columns)

### **Phase 3: Polish** (Week 3)
10. 🔄 Dynamic counter animations (stats count up)
11. 🔄 Scroll-triggered reveals (learning path cards fade in)
12. 🔄 Mobile optimization (swipe gestures, responsive grid)

---

## ✅ **FINAL DECISION MATRIX**

| Element | Rayo Original | AIDefence Final | Match % |
|---------|--------------|----------------|---------|
| **Background Color** | Light/dark switchable | **Black (#000000) always** | 80% |
| **Hero Animation** | Horizontal marquee | **Vertical scroll (faster)** | 70% |
| **Curved Box** | Not in Rayo | **Added (gradient, 60px radius)** | NEW |
| **Portfolio Carousel** | Blur focus | **Blur focus (EXACT)** | 100% |
| **Learning Paths** | Grid | **Grid (white cards)** | 95% |
| **Navigation** | Dropdown | **Slide-out menu** | 75% |
| **Stats** | Dynamic counters | **Static (animate later)** | 60% |
| **Footer** | Contact grid | **4-column grid** | 90% |

**Overall Rayo Match:** **85%** (strong aesthetic alignment, strategic modifications for AIDefence brand)

---

## 🎨 **NEXT STEPS FOR SALLY**

1. **Create detailed Excalidraw wireframe** showing:
   - Video background positioning
   - Curved gradient box for rotating text
   - Portfolio carousel blur states (focused vs blurred)
   - Grid vs carousel decision for learning paths

2. **Validate with Sunil:**
   - ✅ Vertical scroll (not horizontal) for rotating text?
   - ✅ Grid (not carousel) for learning paths section?
   - ✅ Slide-out menu (not dropdown)?
   - ✅ Black background always (not light/dark toggle)?

3. **Component Specifications:**
   - Curved box gradient values
   - Blur radius (8px confirmed)
   - Card dimensions (400px carousel cards, flexible grid cards)
   - Animation timings (14s vertical scroll, 5s carousel auto-rotate)

**Ready to proceed with detailed wireframe creation?** 🎨
