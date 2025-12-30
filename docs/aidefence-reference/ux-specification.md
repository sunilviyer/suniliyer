---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7]
inputDocuments:
  - 'docs/aidefence-v2-prd.md'
  - 'docs/analysis/brainstorming-session-2025-12-11.md'
  - 'docs/aidefence-reference/homepage-wireframe-v5-with-splash.html'
workflowType: 'ux-design'
lastStep: 7
project_name: 'AIDefence V2'
user_name: 'Sunil'
date: '2025-12-23'
version: '2.0 - StackCards Update'
deliverables:
  - 'docs/ux-color-mockup.html'
  - 'docs/wireframe-complete.html'
  - 'docs/aidefence-reference/homepage-wireframe-v5-with-splash.html'
  - 'docs/aidefence-reference/learn-history-wireframe.html'
  - 'docs/aidefence-reference/learn-article-detail-wireframe.html'
  - 'docs/aidefence-reference/learning-path-wireframe-v2.html'
  - 'docs/aidefence-reference/learning-paths-color-system.md'
  - 'docs/aidefence-reference/learning-paths-image-reference.md'
changelog:
  - date: '2025-12-23'
    changes:
      - 'Updated from masonry grid to StackCards scroll-pinning pattern'
      - 'Added splash screen specification'
      - 'Added tri-modal card architecture (Concept/Example/Resource)'
      - 'Added sticky sidebar with cross-references'
      - 'Updated hero text to "Vibe" approach from wireframe v5'
      - 'Aligned with PRD v2 and Epic specifications'
      - 'Added learning path color system (5 paths with earth-tone palette)'
      - 'Added inner headline section (Rayo style) with 2-column layout'
      - 'Added sidebar mini-map navigation with progress tracking'
      - 'Enhanced article detail page (breadcrumbs, author section, prev/next cards)'
      - 'Added comprehensive image specifications (187 images across all paths)'
      - 'Integrated learning path wireframes (v2) and article detail wireframe'
---

# UX Design Specification AIDefence

**Author:** Sunil
**Date:** 2025-12-12

---

## Step 2: Project Understanding & Design System Foundations

### Design Philosophy

AIDefence follows a **premium minimalist approach** inspired by successful portfolio sites (Aziz Khaldi's clean single-page scroll, Maude's generous whitespace, Design For Mankind's grid-based content discovery). The design balances professional credibility with approachability through:

- **Earth-tone aesthetic** conveying trust, maturity, and expertise in AI governance
- **Dark mode default** with light mode toggle for flexibility
- **Generous whitespace** creating uncluttered, premium feel
- **Category-coded visual system** enabling intuitive content discovery

### Color System

#### Base Palette (Earth Tones)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Charcoal Brown** | `#333d29` | Dark mode background, light mode primary text |
| **Moss Green** | `#414833` | Dark mode surface elements |
| **Fern** | `#656d4a` | Dark mode elevated surfaces, light mode tertiary text |
| **Dry Sage** | `#a4ac86` | Category color (Legal Frameworks) |
| **Khaki Beige** | `#c2c5aa` | Category color (Governance) |
| **Tan** | `#b6ad90` | Text secondary, category color (Dev Lifecycle) |
| **Camel** | `#a68a64` | Text tertiary, category color (Risks & Principles) |
| **Toffee Brown** | `#936639` | Category color (AI Fundamentals) |
| **Saddle Brown** | `#7f4f24` | Category color (AI Laws) |
| **Dark Walnut** | `#582f0e` | Category color (Risk Frameworks) |
| **Beige Ivory** | `#F5F5DC` | Light mode background, dark mode primary text |

#### Theme Strategy

**Approach:** Stripe/Linear-inspired dual theming where **accent colors remain constant** across themes, only structural colors invert.

**Dark Mode (Default):**
- Background: Charcoal Brown (`#333d29`)
- Surface: Moss Green (`#414833`)
- Surface Elevated: Fern (`#656d4a`)
- Text Primary: Beige Ivory (`#F5F5DC`)
- Text Secondary: Tan (`#b6ad90`)
- Text Tertiary: Camel (`#a68a64`)

**Light Mode:**
- Background: Beige Ivory (`#F5F5DC`)
- Surface: White (`#FFFFFF`)
- Surface Elevated: Tan (`#b6ad90`)
- Text Primary: Charcoal Brown (`#333d29`)
- Text Secondary: Moss Green (`#414833`)
- Text Tertiary: Fern (`#656d4a`)

**Category Colors (Constant Across Themes):**
- AI Fundamentals: Toffee Brown (`#936639`)
- Risks & Principles: Camel (`#a68a64`)
- Legal Frameworks: Dry Sage (`#a4ac86`)
- AI Laws: Saddle Brown (`#7f4f24`)
- Risk Frameworks: Dark Walnut (`#582f0e`)
- Development Lifecycle: Tan (`#b6ad90`)
- Governance: Khaki Beige (`#c2c5aa`)
- Auditing & Assessment: Fern (`#656d4a`)
- Industry Perspectives: Moss Green (`#414833`)
- Explainability: Camel (`#a68a64`)
- Videos: Toffee Brown (`#936639`)

#### Accessibility & Contrast

- **Body Text:** Target 7:1 contrast ratio (WCAG 2.1 AAA)
- **Smart Badge Text:** Category badges use intelligent text color selection:
  - **Dark badges** (Dark Walnut, Saddle Brown, Toffee Brown) → Light text (`#F5F5DC`)
  - **Light badges** (Camel, Dry Sage, Khaki Beige, Tan) → Dark text (`#333d29`)
- **Focus Indicators:** Visible 2px outlines using category accent colors
- **Interactive Elements:** Clear hover states with subtle color glow effects

#### Learning Path Color System

**Design Philosophy:** All learning path concept cards follow the **UX spec earth-tone palette** for premium minimalist aesthetic consistency. Example cards use **dramatic company brand colors** for visual distinction and immediate recognition.

**1. History Path - Toffee Brown**

| Property | Value |
|----------|-------|
| **Primary Color** | Toffee Brown `#936639` |
| **Secondary Colors** | Saddle Brown `#7f4f24`, Camel `#a68a64` |
| **Gradient** | `linear-gradient(135deg, #936639 0%, #7f4f24 100%)` |
| **Visual Theme** | Foundational, classic, historical |
| **Image Style** | Vintage computing imagery, historical timelines, foundation visuals, retro AI aesthetics |
| **Use Cases** | Concept card borders, hero image overlays, category badges, section dividers |

**2. Terminology Path - Camel**

| Property | Value |
|----------|-------|
| **Primary Color** | Camel `#a68a64` |
| **Secondary Colors** | Tan `#b6ad90`, Fern `#656d4a` |
| **Gradient** | `linear-gradient(135deg, #a68a64 0%, #656d4a 100%)` |
| **Visual Theme** | Technical, analytical, neutral |
| **Image Style** | Technical diagrams, neural network schematics, architectural blueprints, analytical visualizations |
| **Use Cases** | Technical diagram highlights, code block borders, neural network visualizations, definition callouts |

**3. Risk Path - Dark Walnut**

| Property | Value |
|----------|-------|
| **Primary Color** | Dark Walnut `#582f0e` |
| **Secondary Colors** | Saddle Brown `#7f4f24`, Charcoal Brown `#333d29` |
| **Gradient** | `linear-gradient(135deg, #582f0e 0%, #333d29 100%)` |
| **Visual Theme** | Serious, warning, critical |
| **Image Style** | Warning symbols, broken systems, bias visualizations, ethical dilemmas, caution aesthetics |
| **Use Cases** | Warning indicators, critical issue highlights, risk assessment visuals, alert borders |

**4. Responsibility Path - Dry Sage**

| Property | Value |
|----------|-------|
| **Primary Color** | Dry Sage `#a4ac86` |
| **Secondary Colors** | Khaki Beige `#c2c5aa`, Fern `#656d4a` |
| **Gradient** | `linear-gradient(135deg, #a4ac86 0%, #656d4a 100%)` |
| **Visual Theme** | Legal, governance, authoritative |
| **Image Style** | Legal documents, governance frameworks, shields/badges, compliance visuals, policy templates |
| **Use Cases** | Legal framework borders, compliance checkmarks, policy document backgrounds, governance headers |

**5. Future Path - Moss Green**

| Property | Value |
|----------|-------|
| **Primary Color** | Moss Green `#414833` |
| **Secondary Colors** | Fern `#656d4a`, Charcoal Brown `#333d29` |
| **Gradient** | `linear-gradient(135deg, #414833 0%, #656d4a 100%)` |
| **Visual Theme** | Innovation, growth, emerging |
| **Image Style** | Futuristic AI concepts, emerging technologies, AGI visualizations, innovation imagery |
| **Use Cases** | Innovation highlights, emerging tech borders, future trend visualizations, growth indicators |

**Example Card Colors (Exception)**

Example cards do **NOT** follow earth-tone palette. They use vibrant company brand colors for immediate visual recognition.

**Category-Specific Palettes:**

**Tech Company Examples:**
- Amazon: Orange `#FF9900` + Black `#232F3E`
- Google: Blue `#4285F4`, Red `#EA4335`, Yellow `#FBBC04`, Green `#34A853`
- Apple: Gray `#555555` + White `#FFFFFF`
- Netflix: Red `#E50914` + Black `#000000`
- Microsoft: Blue `#00A4EF`

**AI Provider Examples:**
- OpenAI: Green `#10A37F` + Black `#000000`
- Anthropic: Orange `#D97757` + Beige `#F7F4ED`
- Google (Gemini): Google Blue `#4285F4`

**Legal/Government Examples:**
- GDPR/EU: Blue `#003399` + Yellow `#FFCC00` (EU flag colors)
- US Government: Navy `#002868` + Red `#BF0A30`
- Courts/Legal: Deep Navy `#1C2833`

**Bias Warning Examples:**
- Warning Orange `#FF6B35`
- Alert Red `#D62828`
- Caution Yellow `#F77F00`

**Color Accessibility Standards**

All learning path colors meet WCAG 2.1 AAA standards (7:1 contrast ratio) when paired with appropriate text colors:

**Dark Backgrounds (Dark Walnut, Moss Green, Charcoal):**
- Text: Beige Ivory `#F5F5DC` (contrast ratio > 7:1)

**Medium Backgrounds (Toffee Brown, Camel, Dry Sage, Fern):**
- Use smart contrast detection:
  - Toffee Brown `#936639` → Light text `#F5F5DC`
  - Camel `#a68a64` → Dark text `#333d29`
  - Dry Sage `#a4ac86` → Dark text `#333d29`
  - Fern `#656d4a` → Light text `#F5F5DC`

**Light Backgrounds (Khaki Beige, Tan, Beige Ivory):**
- Text: Charcoal Brown `#333d29` (contrast ratio > 7:1)

**CSS Implementation - Learning Path Colors**

```css
/* Learning Path Color Variables */
:root {
  /* History Path */
  --color-history-primary: #936639;
  --color-history-secondary: #7f4f24;
  --color-history-accent: #a68a64;
  --color-history-gradient: linear-gradient(135deg, #936639 0%, #7f4f24 100%);

  /* Terminology Path */
  --color-terminology-primary: #a68a64;
  --color-terminology-secondary: #b6ad90;
  --color-terminology-accent: #656d4a;
  --color-terminology-gradient: linear-gradient(135deg, #a68a64 0%, #656d4a 100%);

  /* Risk Path */
  --color-risk-primary: #582f0e;
  --color-risk-secondary: #7f4f24;
  --color-risk-accent: #333d29;
  --color-risk-gradient: linear-gradient(135deg, #582f0e 0%, #333d29 100%);

  /* Responsibility Path */
  --color-responsibility-primary: #a4ac86;
  --color-responsibility-secondary: #c2c5aa;
  --color-responsibility-accent: #656d4a;
  --color-responsibility-gradient: linear-gradient(135deg, #a4ac86 0%, #656d4a 100%);

  /* Future Path */
  --color-future-primary: #414833;
  --color-future-secondary: #656d4a;
  --color-future-accent: #333d29;
  --color-future-gradient: linear-gradient(135deg, #414833 0%, #656d4a 100%);
}

/* Smart Contrast Text for Badges */
.badge-history,
.badge-risk,
.badge-future {
  background-color: var(--color-[path]-primary);
  color: #F5F5DC; /* Light text for dark backgrounds */
}

.badge-terminology,
.badge-responsibility {
  background-color: var(--color-[path]-primary);
  color: #333d29; /* Dark text for light backgrounds */
}
```

### Whitespace System

**Philosophy:** Generous spacing creates premium, uncluttered feel (inspired by Maude).

**Scale (8px base unit):**
- `--space-xs`: 8px (tight inline elements)
- `--space-sm`: 16px (compact spacing)
- `--space-md`: 32px (standard element spacing)
- `--space-lg`: 64px (card padding, section spacing)
- `--space-xl`: 96px (large section breaks)
- `--space-2xl`: 160px (major section dividers)

**Application:**
- Article cards: 64px padding
- Grid gap: 32px
- Section spacing: 96-160px
- Content max-width: 1200px centered

### Typography

**Font Stack:** System fonts for performance
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Scale:**
- Heading 1: 48px / 1.2 line-height
- Heading 2: 32px / 1.3 line-height
- Heading 3: 24px / 1.4 line-height
- Body: 16px / 1.6 line-height
- Small: 14px / 1.5 line-height

**Hierarchy:**
- Typography serves as primary design element
- Clear weight differentiation (600 for headings, 400 for body)
- Consistent vertical rhythm using whitespace scale

### Interactive Mockup

A complete interactive mockup demonstrating the color system, whitespace, dual theming, category-coded cards, and floating menu system has been created:

**File:** `docs/ux-color-mockup.html`

**Features:**

**Expandable Article Cards (NEW):**
- **Image placeholders** showing where generative art will go (200px height, gradient using category color)
- **Click any article card** to expand inline reading view
- **Smooth expansion animation** (250ms with fade-in)
- **Background blur effect** (8px gaussian) on grid when article expanded
- **Full article layout** with summary-first structure (680px max width)
- **Blurred category gradient background** in expanded article header
- **Rich content rendering**: Tables, code blocks, blockquotes, lists all styled
- **Sample table** in EU AI Act article showing risk classifications
- **Close button** (←) in top-left to return to grid
- **Arrow navigation buttons** (◄ ►) in bottom-right to navigate between articles
- **Keyboard shortcuts**: Escape to close, Arrow keys to navigate
- **Related articles** at bottom of each article (clickable to expand)
- **Floating menu reduced opacity** (60%) when article is open

**Navigation System:**
- **Floating menu system** with collapsed button (☰) and expanded menu bar
- **Page type toggle** (Demo: Homepage vs Articles menu items)
- **Theme toggle** integrated into expanded menu (◐ icon)
- **Menu animations** (slide-down expansion, hover underlines)
- **Click-outside-to-close** functionality

**Design System:**
- Live dark/light mode with smooth transitions
- All 11 category colors with smart badge contrast
- Masonry grid layout (3/2/1 columns responsive)
- Whitespace system demonstration (8px → 160px scale)
- Category color hover effects (subtle glow + lift)
- Accessible focus states
- Typography scale examples

---

## Step 3: Core User Experience

### Homepage Architecture

AIDefence is a **single-page homepage** with card-based vertical scroll design, featuring:

**Homepage Experience** - Personal portfolio and learning paths introduction
- **Splash Screen**: 3-second "Hello" animation that slides up to reveal homepage
- **Hero Card**: "Vibe, [Word] AI + a little me" with animated word ticker
- **Learning Paths Carousel**: Center-focused carousel showcasing 5 learning paths
- **Portfolio Carousel**: Center-focused carousel showcasing projects
- **About Card**: Personal introduction with stats
- **Break Cards**: Visual section dividers with background images

**Learning Path Pages** - StackCards scroll-pinning interaction
- **StackCards Animation**: GSAP ScrollTrigger scroll-pinning where cards stack on scroll
- **Concept Cards**: Flip animation reveals article summary and related concepts
- **Article Detail**: Full MDX article rendering with prose styling
- **Cross-References**: Sticky sidebar with knowledge graph mini-map

**Navigation**: Fixed header with logo/name (left), theme toggle + hamburger menu (right)

### Defining Experience

AIDefence's core experience centers on **immersive scroll-driven storytelling** and **depth-first learning**:

**Homepage Experience:** Cinematic single-page scroll through cards (Hero → Learning Paths → Portfolio → About). Each card is full-screen with generous whitespace. Splash screen creates memorable first impression with 3-second "Hello" animation before sliding up to reveal homepage.

**Learning Path Experience:** StackCards scroll-pinning animation where concept cards stack and slide as users scroll. Each card represents one concept in the learning journey. Flip interaction reveals summary and related concepts without leaving the flow.

**The Core Loop (Learning Paths):**
1. **Scroll** → Cards stack and slide into view with GSAP ScrollTrigger animation
2. **Focus** → Active card pins at viewport center, others fade/stack behind
3. **Flip** → Click card to reveal back side with summary, content sections, related concepts
4. **Dive** → Click "Read Full Article" to navigate to MDX article detail page
5. **Explore** → Related concepts and cross-path references drive discovery across paths

This differs fundamentally from traditional article grids by creating a **curated linear narrative** rather than overwhelming choice. Users experience learning paths as guided journeys, not content libraries.

### Platform Strategy

**Primary Platform:** Web application built with Next.js 14+, deployed on Vercel

**Device Strategy:**
- **Desktop-first optimization** (primary use case: professional research and deep reading)
- **Fully responsive** mobile and tablet layouts
- **Input methods:** Mouse/keyboard primary, touch-enabled for mobile (swipe gestures)
- **No offline functionality** (always-online content consumption model)

**Technical Constraints:**
- Static site generation (SSG) with MDX content sources
- GSAP + ScrollTrigger for StackCards animation
- Framer Motion for card flip animations
- Automatic sitemap generation on build
- SEO-optimized meta tags and structured data
- Theme preference persisted in localStorage

**Performance Requirements:**
- 60fps scroll animations (GSAP GPU acceleration)
- Instant card flip interactions (no perceivable delay)
- Smooth ScrollTrigger scrubbing (will-change: transform)
- Lazy-loaded images with Next.js Image optimization
- Splash screen loads while assets preload (3-second animation buffer)

### Navigation System - Fixed Header

**Design Philosophy:** Always-visible fixed header provides persistent navigation without competing with content. Simple, clean, minimal.

**Header Structure:**
- **Position:** Fixed top, 80px height, full width
- **Background:** `rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(10px)` (light mode)
- **Background (Dark):** `rgba(26, 26, 26, 0.95)` with `backdrop-filter: blur(10px)`
- **Shadow:** Subtle `box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05)`
- **Z-index:** 9000 (above all content)

**Header Left Side - Logo Section:**
- **Logo Ring:** 50px circular container with 2px border (`#333d29`)
- **Logo Image:** Sunil's logo/photo, 50px × 50px, centered
- **Name Display:** Two lines "Sunil" / "Iyer" in Funnel Display font (20px, 600 weight)
- **Spacing:** 20px gap between logo and name

**Header Right Side - Controls:**
- **Theme Toggle:** 50px circular button, fixed position `top: 15px, right: 125px`
  - Icon: ☀️ (light mode) / 🌙 (dark mode)
  - Background: Same as header with hover scale(1.1) effect
  - Transition: 300ms ease

- **Hamburger Menu:** 50px circular button, fixed position `top: 15px, right: 60px`
  - Three horizontal lines (24px wide, 2px height, 5px gap)
  - Background: Same as header with hover scale(1.1) effect
  - Opens navigation drawer (future implementation)

**Responsive Behavior:**
- **Tablet:** Header height 60px, controls 40px
- **Mobile:** Header height 60px, logo 40px, controls 40px, name 16px font

### Splash Screen Specification

**Purpose:** Create memorable first impression with animated introduction before revealing homepage content.

**Design:**
- **Full-screen black overlay:** `position: fixed`, 100vw × 100vh, `z-index: 10000`
- **"Hello" text:** 120px font (Funnel Display 300 weight), color `#f5f5f0`
- **Center alignment:** Flexbox centered vertically and horizontally
- **Blinking animation:** 0.8s infinite blink (opacity 1 → 0.3 → 1)

**Animation Sequence:**
1. **Load (0s):** Page loads, splash screen visible with "Hello" blinking
2. **Wait (0-3s):** User sees blinking "Hello" for 3 seconds
3. **Slide Up (3s):** Splash screen slides up with `translateY(-100%)` over 1 second
4. **Reveal (4s):** Homepage visible, splash screen removed from DOM

**Animation Details:**
- **Timing Function:** `cubic-bezier(0.76, 0, 0.24, 1)` (smooth ease-out)
- **Duration:** 1000ms slide-up transition
- **Trigger:** `setTimeout(() => { splash.classList.add('slide-open') }, 3000)`
- **Performance:** Hardware-accelerated `transform` property

**Accessibility:**
- Honors `prefers-reduced-motion`: Skip animation, show homepage immediately
- Screen readers announce "Loading" state, then "Homepage loaded"
- No interactive elements during splash (3-second wait acceptable)

### Effortless Interactions

**Zero-Friction Learning:**
- **No search required** → StackCards present concepts in curated linear order
- **No pagination** → Continuous scroll through entire learning path
- **No manual linking** → Knowledge graph cross-references auto-suggest related concepts
- **No theme switching hunting** → Toggle in consistent location (header right)

**Automated Intelligence:**
- Related concepts match based on knowledge graph relationships
- Cross-path references algorithmically determined by content overlap
- Card order optimized for learning progression (foundations → advanced)
- Reading time calculations automatic from MDX word count

**Delight Moments:**
- Splash screen "Hello" creates welcoming first impression
- Word ticker animation in hero bounces with playful cubic-bezier
- StackCards scroll smoothly with GSAP scrubbing (60fps)
- Card flip animation reveals back with smooth 3D perspective
- Keyboard navigation (arrows, Enter, Esc) for power users
- Smart badge contrast that always remains readable

### Critical Success Moments

**Make-or-Break Interactions:**

1. **Splash Screen** → "Hello" animation must feel intentional and premium (not slow or gimmicky)
2. **First Scroll (StackCards)** → Cards must stack smoothly at 60fps (no jank or lag)
3. **Card Flip** → Flip animation must feel instant, smooth, delightful (not jarring or slow)
4. **Scroll Scrubbing** → GSAP ScrollTrigger must feel natural and responsive (not robotic)
5. **Word Ticker** → Hero text animation must feel playful and confident (not distracting)
6. **Mobile Touch** → Touch targets must be generous, gestures must work flawlessly

**User Realization Points:**
- **"This is different":** When splash screen slides up to reveal homepage (first 5 seconds)
- **"This is better":** When StackCards scroll smoothly instead of traditional grid (first path visit)
- **First success:** Successfully flipping first card and discovering related concepts
- **Feature failure:** If scroll performance lags, flip animation stutters, or mobile layout breaks

### Experience Principles

**Guiding principles for all UX decisions in AIDefence:**

1. **Content is King, Navigation is Invisible** → Users discover content visually; navigation stays out of the way
2. **Reduce to Enhance** → Every eliminated step (page loads, sidebars, excerpts) amplifies the core experience
3. **Automation Over Manual** → Users shouldn't configure, curate, or organize—the system does it
4. **Visual Hierarchy Through Color** → Category colors and whitespace create intuitive organization
5. **Effortless = Fast + Predictable** → Interactions must be instant and behave exactly as expected
6. **Context-Aware Navigation** → Menu adapts to page context, always showing relevant options

These principles drive decisions toward simplification, automation, and visual-first design.

### Animation Strategy

**Principles:**
- **Fast & Confident:** 200-600ms durations, custom cubic-bezier curves for personality
- **Performance-First:** GSAP GPU acceleration, Framer Motion for 3D transforms, hardware-accelerated CSS
- **Respectful:** Honor `prefers-reduced-motion`, eliminate decorative animations

**Splash Screen Animation:**
1. **Blinking "Hello":** 800ms infinite loop, opacity 1 → 0.3 → 1
2. **Slide Up Exit:** `translateY(-100%)` over 1000ms with `cubic-bezier(0.76, 0, 0.24, 1)`
3. **Trigger:** JavaScript `setTimeout(() => { addClass('slide-open') }, 3000)`

**Homepage Animations:**
1. **Hero Word Ticker:**
   - **Slide Out:** Current word `translateY(-120%)` over 500ms with `cubic-bezier(0.68, -0.55, 0.27, 1.55)` (anticipation)
   - **Slide In:** New word `translateY(120%)` → `translateY(0)` over 600ms with `cubic-bezier(0.34, 1.56, 0.64, 1)` (bounce)
   - **Interval:** 500ms between word changes
   - **Bounce Effect:** Overshoot at 60% (`translateY(-5%)`), settle at 80% (`translateY(2%)`), rest at 100%

2. **Carousel Transitions:**
   - Side items: `opacity: 0.7`, `filter: blur(3px)`, `transform: scale(0.9)`
   - Center item: `opacity: 1`, `filter: blur(0)`, `transform: scale(1)`
   - Transition: 500ms `cubic-bezier(0.4, 0, 0.2, 1)` on carousel navigation

3. **Card Hover Effects:**
   - Learning path cards: `transform: scale(1.02)` over 300ms ease
   - Portfolio cards: Same hover effect

**Learning Path StackCards Animation (GSAP + ScrollTrigger):**
1. **Stack Effect:**
   ```javascript
   gsap.to(card, {
     scrollTrigger: {
       trigger: card,
       start: 'top center',
       end: 'bottom top',
       scrub: 1, // Smooth scrubbing (1 second delay)
     },
     scale: 1, // From 0.95 to 1
     opacity: 1, // From 0.3 to 1
     y: 0, // From 100px to 0
   });
   ```

2. **Pin Effect:**
   ```javascript
   gsap.to(card, {
     scrollTrigger: {
       trigger: card,
       start: 'top top',
       end: '+=100vh', // Pin for 100vh scroll distance
       pin: true,
       pinSpacing: false,
     },
   });
   ```

3. **Performance:**
   - `will-change: transform` on active card
   - GPU-accelerated properties only (`transform`, `opacity`)
   - ScrollTrigger batch updates for 60fps
   - Mobile: Disable pin, use simple scroll transitions

**Card Flip Animation (Framer Motion):**
1. **Front to Back:**
   - Front exit: `rotateY: 0 → 90` over 300ms
   - Back enter: `rotateY: -90 → 0` over 300ms
   - Stagger: 50ms delay between exit and enter

2. **3D Perspective:**
   ```css
   .concept-card {
     perspective: 1000px;
     transform-style: preserve-3d;
   }
   ```

**Performance Constraints:**
- All animations respect `prefers-reduced-motion: reduce` (disable all, show instant transitions)
- GSAP uses GPU acceleration via `transform` and `opacity`
- ScrollTrigger optimized: `scrub: 1` adds 1-second smooth delay
- Framer Motion optimized: `layoutId` for smooth transitions
- Target: 60fps on desktop, 30fps acceptable on mobile

### Image Placement Strategy

**Generative Art Illustrations (Stable Diffusion):**

**1. Article Cards (Primary) - Grid View:**
```
┌─────────────────────────────────┐
│ [GENERATIVE ART IMAGE]          │ ← 400x250px (full-width)
│ (Gradient placeholder in mockup)│   Category-colored gradient
├─────────────────────────────────┤
│ 📎 Category Badge               │
│ Article Title                   │
│ Reading Time • Date             │
└─────────────────────────────────┘
```
- 200px height in current mockup (shown as category gradient)
- Full-width, rounded top corners
- Category color hover glow around border
- Visual impact: Image + Title sufficient (no text excerpt)

**2. Expanded Article Header (Secondary):**
- **Blurred background** using article's category gradient
- 20px gaussian blur with 15% opacity overlay
- Creates depth without competing with text readability
- Alternative: Small thumbnail (150x150px) in top-right corner

**3. Related Article Cards (Tertiary):**
- Optional small thumbnails (80x80px) for visual recognition
- Currently not implemented in mockup

**Image Generation Plan:**
- **Prompt Formula:** "Abstract geometric illustration, earth tones, minimalist, professional" + category-specific motifs
- **Master Size:** Generate one 1200x750px per article
- **CSS Filters:** Use filters for light/dark mode variants (50% storage savings)
- **Categories:** Neural networks (Fundamentals), scales (Legal), shields (Risk), org charts (Governance)

### Learning Path Image Specifications

**Total Images Required:** 187 images across all learning paths

**Image Categories and Dimensions:**

**1. Hero Images (5 total) - Path Landing Pages**

| Path | Filename | Dimensions | Aspect Ratio | Gradient |
|------|----------|-----------|--------------|----------|
| History | `history-hero.jpg` | 1920×1080 | 16:9 | Toffee Brown → Saddle Brown |
| Terminology | `terminology-hero.jpg` | 1920×1080 | 16:9 | Camel → Fern |
| Risk | `risk-hero.jpg` | 1920×1080 | 16:9 | Dark Walnut → Charcoal |
| Responsibility | `responsibility-hero.jpg` | 1920×1080 | 16:9 | Dry Sage → Fern |
| Future | `future-hero.jpg` | 1920×1080 | 16:9 | Moss Green → Charcoal |

- **Location:** `/public/images/learn/heroes/`
- **Format:** JPG (quality 85) + WebP (production)
- **Style:** Dramatic, inspiring, path-specific imagery with gradient overlay
- **File Size Target:** <300KB (JPG), <200KB (WebP)

**2. Concept Card Images (144 total) - Abstract Generative Art**

| Path | Count | Primary Color | Dimensions | Aspect Ratio |
|------|-------|--------------|-----------|--------------|
| History | 15 | Toffee Brown #936639 | 1920×1280 | 3:2 |
| Terminology | 14 | Camel #a68a64 | 1920×1280 | 3:2 |
| Risk | 20 | Dark Walnut #582f0e | 1920×1280 | 3:2 |
| Responsibility | 75 | Dry Sage #a4ac86 | 1920×1280 | 3:2 |
| Future | 20 | Moss Green #414833 | 1920×1280 | 3:2 |

- **Location:** `/public/images/learn/[path-name]/[slug].jpg`
  - Example: `/public/images/learn/history/turing-test.jpg`
- **Format:** JPG (quality 85) + WebP (production)
- **Style:** Abstract, minimalist, geometric, earth-tone palette, soft gradients
- **File Size Target:** <250KB (JPG), <180KB (WebP)

**Concept Image Prompt Formula:**
```
"Abstract [concept], earth tones (hex: #[primary color]), minimalist, professional, [category motif], soft gradients, high quality"
```

**Category Motifs by Path:**
- **History:** Vintage computers, timelines, foundation stones, retro AI aesthetics
- **Terminology:** Neural networks, technical diagrams, architectural blueprints, analytical visualizations
- **Risk:** Warning symbols, broken systems, bias scales, ethical dilemmas
- **Responsibility:** Legal documents, shields, governance structures, compliance visuals
- **Future:** Futuristic AI concepts, innovation, emerging technology, AGI imagery

**3. Example Card Images (28 total) - Company/Case Study Branding**

| Category | Count | Color Palette | Dimensions | Aspect Ratio |
|----------|-------|--------------|-----------|--------------|
| Tech Companies | 10 | Vibrant brand colors | 1200×800 | 3:2 |
| AI Providers | 8 | Provider brand colors | 1200×800 | 3:2 |
| Legal/Gov | 6 | Institutional colors | 1200×800 | 3:2 |
| Bias Examples | 4 | Warning colors | 1200×800 | 3:2 |

- **Location:** `/public/images/learn/examples/[company-slug].jpg`
  - Example: `/public/images/learn/examples/amazon-bias.jpg`
- **Format:** JPG (quality 85) + WebP (production)
- **Style:** Modern, professional, recognizable branding, company logos, case study elements
- **File Size Target:** <200KB (JPG), <150KB (WebP)

**Example Image Brand Colors:**
- **Amazon:** Orange #FF9900 + Black #232F3E
- **Google:** Blue #4285F4, Red #EA4335, Yellow #FBBC04, Green #34A853
- **OpenAI:** Green #10A37F + Black #000000
- **Anthropic:** Orange #D97757 + Beige #F7F4ED
- **EU/GDPR:** Blue #003399 + Yellow #FFCC00 (EU flag colors)
- **US Gov:** Navy #002868 + Red #BF0A30

**4. Resource Card Images (10 total) - Icons/Screenshots**

| Resource Type | Count | Dimensions | Aspect Ratio | Style |
|--------------|-------|-----------|--------------|-------|
| Templates | 4 | 1200×800 | 3:2 | Document icons |
| Tools | 3 | 1200×800 | 3:2 | Tool screenshots |
| Guides | 3 | 1200×800 | 3:2 | Guide icons |

- **Location:** `/public/images/learn/resources/[resource-slug].jpg`
  - Example: `/public/images/learn/resources/risk-assessment-template.jpg`
- **Format:** JPG (quality 85) + WebP (production)
- **Style:** Icons or screenshots, clean, professional
- **File Size Target:** <150KB (JPG), <100KB (WebP)

**Image Optimization Pipeline:**

1. **Generation Phase:**
   - Generate images using Stable Diffusion or DALL-E 3
   - Use prompt formula with path-specific colors and motifs
   - Export as PNG (high quality, no compression)

2. **Processing Phase:**
   - Resize to target dimensions (ImageMagick or sharp)
   - Convert to JPG (quality 85) for compatibility
   - Convert to WebP (quality 80) for production
   - Verify file sizes meet targets

3. **Deployment Phase:**
   - Upload both JPG and WebP to `/public/images/learn/`
   - Use Next.js `<Image>` component with automatic format detection
   - Implement lazy loading for below-the-fold images
   - Generate blur placeholders for smooth loading

**Next.js Image Implementation:**

```jsx
import Image from 'next/image';

// Concept card image
<Image
  src="/images/learn/history/turing-test.jpg"
  alt="Turing Test concept visualization"
  width={1920}
  height={1280}
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  className="concept-card-image"
/>

// Hero image
<Image
  src="/images/learn/heroes/history-hero.jpg"
  alt="History learning path hero"
  width={1920}
  height={1080}
  quality={90}
  priority={true} // Load immediately (above fold)
  className="path-hero-image"
/>
```

**Accessibility Requirements:**
- All images must have descriptive `alt` text
- Alt text format: "[Concept name] - [Brief description]"
- Example: "Turing Test - Abstract visualization of human-AI interaction"
- Decorative images: Use empty alt (`alt=""`)
- Loading states: Show skeleton placeholder with path accent color

**File Naming Conventions:**
- Use kebab-case for all filenames
- Match article slug exactly for concept cards
- Include company/case name for example cards
- Format: `[path-or-category]-[concept-or-company]-[optional-variant].jpg`
- Examples:
  - `history-turing-test.jpg`
  - `risk-amazon-bias.jpg`
  - `resources-risk-assessment-template.jpg`
  - `heroes-terminology-hero.jpg`

### Article Detail Page Layout

**Purpose:** Full MDX article reading experience accessed from "Read Full Article" CTA on card back.

**Page Structure:**
```
┌─────────────────────────────────────┐
│ FIXED HEADER (Always Visible)      │  ← Same 80px header as homepage
├─────────────────────────────────────┤
│ Breadcrumbs Navigation              │
│ Home → Learning Paths → History     │  ← Path accent color links
│ → Article Title                     │     Text secondary (current)
├─────────────────────────────────────┤
│ Article Header                      │
│ - Category Badge + Reading Time     │  ← Learning path accent color
│   + Tags (3-5 tags)                 │     Small badges with pill shape
│ - Article Title (H1)                │     48px font, path color
│ - Publication Date + Updated Date   │     Text secondary color
│ - Blurred category gradient bg      │     15% opacity overlay
├─────────────────────────────────────┤
│ Summary Block (highlighted)         │  ← Summary at TOP (reversed structure)
│ - 2-3 sentence TLDR                 │     Surface elevated background
│ - Key takeaways (3-5 bullets)       │     Path accent border-left (4px)
├─────────────────────────────────────┤
│ TWO-COLUMN LAYOUT                   │
│                                     │
│ ┌─────────────────┬──────────────┐ │
│ │ Main Content    │ Sticky       │ │  ← Desktop: 680px main + 280px sidebar
│ │ (680px max)     │ Sidebar      │ │     Tablet/Mobile: Single column
│ │                 │ (280px)      │ │
│ │ - MDX rendered  │ - TOC        │ │
│ │ - Code blocks   │ - Progress   │ │
│ │ - Tables        │ - Cross-refs │ │
│ │ - Images        │ - Related    │ │
│ └─────────────────┴──────────────┘ │
├─────────────────────────────────────┤
│ Related Concepts Section            │  ← 3-4 mini concept cards
│ - Same path concepts (3 cards)     │     Link to other StackCards
│ - Cross-path references (2 cards)  │     Link to other learning paths
├─────────────────────────────────────┤
│ Footer Navigation                   │
│ - "← Previous Concept" link         │  ← Navigate learning path linearly
│ - "Next Concept →" link             │     Back to StackCards or next article
└─────────────────────────────────────┘
```

**Sticky Sidebar Specification:**
- **Position:** `position: sticky`, `top: 100px` (below header)
- **Width:** 280px on desktop, hidden on mobile (<1024px)
- **Background:** Surface elevated color, 8px rounded corners
- **Padding:** 24px internal padding
- **Shadow:** Subtle `box-shadow` for depth

**Sidebar Components:**
1. **Table of Contents (TOC):**
   - Auto-generated from H2/H3 headings
   - Active heading highlighted with path accent color
   - Smooth scroll to section on click

2. **Reading Progress:**
   - Vertical progress bar (4px wide, path accent color)
   - Percentage indicator (e.g., "35% complete")

3. **Cross-References:**
   - "Related Concepts" mini-list (3-4 links)
   - "Mentioned In" backlinks (knowledge graph)
   - Path accent color on hover

4. **Knowledge Graph Mini-Map:**
   - Visual node diagram showing current concept position
   - Connected concepts shown as dots
   - Click dot to navigate to that concept

**Breadcrumbs Specification:**
- **Position:** Top of page, 32px below header, 32px top margin
- **Max-Width:** 920px centered container
- **Format:** `Home → Learning Paths → [Path Name] → [Article Title]`
- **Styling:**
  - Font: 13px, 400 weight
  - Separator: `→` (arrow, not `/` or `>`)
  - Links: Text secondary, underline on hover
  - Current page: Text tertiary, no link
  - Path name: Path accent color (e.g., Toffee Brown for History)
- **Interaction:** Click any breadcrumb to navigate back
- **Mobile:** Truncate long article titles with ellipsis

**Article Meta Specification:**
- **Position:** Directly below article title in header
- **Components:**
  1. **Reading Time:** "8 min read" (calculated from word count)
  2. **Publication Date:** "Published: Jan 15, 2025"
  3. **Updated Date:** "Updated: Jan 20, 2025" (only if different from published)
  4. **Tags:** 3-5 pill-shaped badges (e.g., "AI Ethics", "Bias", "Fairness")
- **Styling:**
  - Font: 14px, 400 weight, text secondary
  - Separator: `•` between reading time and dates
  - Tags: 12px font, path accent background (10% opacity), path accent text, 16px padding, 12px border-radius
  - Layout: Horizontal flex row with 16px gap
- **Mobile:** Stack vertically, tags wrap to multiple rows

**Author Section Specification:**

```
┌────────────────────────────────────────┐
│ About the Author                       │
│                                        │
│ ┌─────┐  Sunil Iyer                   │  ← 120px avatar (left)
│ │     │  AI Governance Expert          │     Bio + socials (right)
│ │ 👤  │                                │
│ │     │  AI governance expert...       │  ← 3-4 sentence bio
│ └─────┘  [LinkedIn] [Twitter] [Web]   │  ← Social links (icons)
└────────────────────────────────────────┘
```

- **Position:** After article content, before related concepts section
- **Background:** Surface elevated color
- **Padding:** 48px all sides
- **Border-Radius:** 8px
- **Max-Width:** 920px centered

**Author Section Layout:**
- **Two-column grid:** 120px avatar (left) + flexible bio (right)
- **Gap:** 32px between columns

**Avatar Column:**
- **Size:** 120px × 120px circular image
- **Border:** 3px solid path accent color
- **Image:** Sunil's professional photo
- **Alt text:** "Sunil Iyer"

**Bio Column:**
1. **Name:** 24px font, 600 weight, text primary
2. **Title:** 16px font, 400 weight, path accent color (e.g., "AI Governance Expert")
3. **Bio Text:** 15px font, text secondary, 1.6 line-height, 3-4 sentences, max 280 characters
4. **Social Links:**
   - Icons: LinkedIn, Twitter, Website (24px size)
   - Color: Text secondary, path accent on hover
   - Spacing: 16px gap between icons
   - Opens in new tab: `target="_blank"`

**Mobile Adaptations:**
- Single column layout
- Avatar: 80px × 80px, centered
- Bio: Centered text, 14px font
- Social icons: Centered row below bio

**Previous/Next Navigation Cards:**

```
┌──────────────────────┬──────────────────────┐
│ ← Previous Concept   │ Next Concept →       │
│                      │                      │
│ Deep Learning Basics │ Transformer Models   │
│ "Understanding..."   │ "Attention is all"   │
│                      │                      │
│ [History Path]       │ [History Path]       │
└──────────────────────┴──────────────────────┘
```

- **Position:** Bottom of article page, after author section
- **Layout:** Two-column grid (1fr + 1fr), 32px gap
- **Max-Width:** 920px centered
- **Margin:** 96px top, 64px bottom

**Card Styling:**
- **Background:** Surface elevated color
- **Padding:** 32px all sides
- **Border-Radius:** 8px
- **Border:** 1px solid path accent color (left border for prev, right border for next)
- **Hover:** Background surface color, scale(1.02), smooth 200ms transition

**Card Content:**
1. **Direction Label:** "← Previous Concept" or "Next Concept →"
   - Font: 12px, 600 weight, text tertiary, uppercase
2. **Concept Title:** 18px font, 600 weight, text primary
   - Hover: Path accent color
3. **TLDR Preview:** 14px font, text secondary, 1-2 sentences, max 120 characters
4. **Path Badge:** Small pill (e.g., "[History Path]")
   - Background: Path accent color (20% opacity)
   - Text: Path accent color
   - Font: 11px, 500 weight

**Navigation Behavior:**
- Click anywhere on card to navigate
- Smooth page transition (no full reload if SPA)
- Maintains scroll position state for "back" navigation
- If first card: No "Previous" card shown (single "Next" card)
- If last card: No "Next" card shown (single "Previous" card)

**Mobile Adaptations:**
- Single column layout (stack vertically)
- "Previous" card above "Next" card
- 24px vertical gap
- Reduced padding: 24px all sides
- TLDR preview: Hidden (only title + badge)

**Eliminated Elements:**
- No social share buttons
- No pagination (use prev/next concept navigation only)
- No comments section
- No newsletter signup interruptions
- No "Back to Top" button (use browser scroll or keyboard)

**Code Block Styling:**
- Syntax highlighting using Prism.js
- Earth-tone theme (background: Moss Green, text: Beige Ivory)
- Line numbers optional
- Copy button on hover

**Table Styling:**
- Full-width with 8px rounded corners
- Border: 1px solid surface-elevated color
- Header row: Surface-elevated background, primary text
- Header bottom border: 2px solid category accent color
- Cell padding: 32px (--space-md) for generous breathing room
- Alternating row colors: Even rows have subtle background (5% black overlay)
- Hover effect: Row highlights with surface-elevated color
- Last row: No bottom border for clean finish
- Responsive: Horizontal scroll on mobile if needed

**Code Block Styling:**
- Inline code: Surface-elevated background, category accent color text
- Code blocks: Surface background, left border (4px category color)
- Padding: 32px with horizontal scroll for long lines
- Font: Courier New monospace
- Rounded corners: 8px

**Blockquote Styling:**
- Left border: 4px solid category color
- Padding-left: 64px (--space-lg)
- Text color: Tertiary (muted)
- Font style: Italic
- Margin: 64px vertical spacing

### Homepage Structure

**Card-Based Vertical Scroll Design:**

```
┌─────────────────────────────────────┐
│ SPLASH SCREEN (0-3 seconds)        │
│ - Full-screen black background     │  ← "Hello" blinking animation
│ - Slides up to reveal homepage     │     1 second slide transition
├─────────────────────────────────────┤
│ FIXED HEADER (Always Visible)      │
│ - Logo + Name (left)                │  ← 80px height, backdrop blur
│ - Theme Toggle + Menu (right)      │     Fixed z-index: 9000
├─────────────────────────────────────┤
│ HERO CARD (Full-Screen)            │
│ - Background: Looping video         │  ← "Vibe, [Word] AI + a little me"
│ - Animated word ticker              │     100px font, Funnel Display
│ - Center-aligned hero text          │     Word changes every 500ms
├─────────────────────────────────────┤
│ BREAK CARD: "Learning Paths"       │  ← Full-screen background image
│ - Full-screen visual divider        │     72px text overlay
│ - Background image overlay          │     960px min-height
├─────────────────────────────────────┤
│ LEARNING PATHS CAROUSEL CARD       │
│ - Center-focused carousel           │  ← 5 learning paths
│ - Side cards blurred (blur(3px))   │     Center card focused (scale: 1)
│ - Navigation arrows + dots          │     580px center, 380px side
│ - Path image, title, description   │     Carousel transition 500ms
├─────────────────────────────────────┤
│ BREAK CARD: "Portfolio"            │  ← Full-screen background image
│ - Full-screen visual divider        │     Same pattern as Learning Paths
├─────────────────────────────────────┤
│ PORTFOLIO CAROUSEL CARD             │
│ - Center-focused carousel           │  ← Same pattern as Learning Paths
│ - Project cards with images         │     3+ projects showcased
│ - Navigation arrows + dots          │     Same dimensions as paths
├─────────────────────────────────────┤
│ BREAK CARD: "About"                │  ← Full-screen background image
│ - Full-screen visual divider        │     Personal photo background
├─────────────────────────────────────┤
│ ABOUT CARD                          │
│ - Two-column grid                   │  ← Photo (480px) + Text
│ - Personal photo (left)             │     Bio, stats, achievements
│ - Bio + Stats (right)               │     3 stat cards (Projects/Years/Clients)
├─────────────────────────────────────┤
│ FOOTER CARD                         │
│ - Four-column footer grid           │  ← Links: About, Learning, Portfolio, Connect
│ - Copyright notice                  │     960px min-height
└─────────────────────────────────────┘
```

**Card Spacing:**
- Each card-container: 300px bottom margin (desktop)
- First card: 80px top margin (header clearance)
- Tablet: 200px bottom margin
- Mobile: 100px bottom margin
- Max card width: 1920px (20% increase from 1600px)
- Card padding: 60px (desktop), 40px (tablet), 20px (mobile)

### Hero Text Specification - "Vibe" Approach

**Design Philosophy:** Playful, conversational hero text that communicates personality while rotating through AI-related words.

**Layout Structure:**
```
Line 1:  Vibe, [Word Box] AI
Line 2:  + a little me
```

**Line 1 Components:**

1. **"Vibe" Text:**
   - Font: Funnel Display, 100px, 400 weight
   - Color: `var(--text-primary)` (adapts to theme)
   - Display: Inline, part of flexbox row

2. **Comma:**
   - Same styling as "Vibe"
   - Adds conversational pause

3. **Word Box (Animated Ticker):**
   - **Container:** 280px × 70px rounded rectangle (`border-radius: 40px`)
   - **Background:** `#333d29` (dark green, constant across themes)
   - **Padding:** 15px horizontal, 35px vertical
   - **Text:** 32px font, `#ffffff` color, 500 weight
   - **Animation:** Vertical slide-up with bounce (see Animation Strategy)
   - **Words Rotation:** "Artificial", "Agentic", "Adversarial", "Algorithmic", "Autonomous" (500ms interval)

4. **"AI" Text:**
   - Font: Funnel Display, 100px, 400 weight
   - Color: `var(--text-primary)`
   - Display: Inline, follows word box with 15px gap

**Line 2:**
- **"+ a little me" Text:**
   - Font: Funnel Display, 100px, 400 weight
   - Color: `var(--text-primary)`, `opacity: 0.9`
   - Display: Block (new line)
   - Positioning: Center-aligned below Line 1 with 20px gap

**Responsive Behavior:**
- **Desktop (1024px+):** 100px font, 280px word box
- **Tablet (768-1024px):** 80px font, 240px word box, 28px word text
- **Mobile (<768px):** 48px font, 200px word box, 24px word text
  - Line 1 wraps to column layout with 15px gap
  - "Vibe," and word box stack vertically

**Accessibility:**
- Word ticker announced by screen readers: "Hero text: Vibe, rotating AI words, plus a little me"
- `aria-live="polite"` on word box for screen reader updates
- `prefers-reduced-motion`: Disable word animation, show single static word

### Learning Path Page Structure

**Purpose:** Provide consistent, navigable structure for all 5 learning paths with sidebar navigation and main content area.

**Inner Headline Section (Rayo Style)**

Learning path pages use a **two-column grid layout** inspired by Rayo template, dividing navigation from content:

```
┌──────────────────────────────────────────────────┐
│ FIXED HEADER (80px, always visible)            │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌───────────┬────────────────────────────────┐ │
│  │ LEFT      │ RIGHT CONTENT                  │ │
│  │ NAV       │                                │ │
│  │ (2fr)     │ (10fr)                         │ │
│  │           │                                │ │
│  │ Learning  │ ┌───────────────────────────┐ │ │
│  │ Paths     │ │ Path Hero Section         │ │ │
│  │ Menu:     │ │ - 96px headline           │ │ │
│  │           │ │ - Description paragraph    │ │ │
│  │ • History │ │ - Card count (e.g., "15") │ │ │
│  │ • Terms   │ │ - Gradient background      │ │ │
│  │ • Risk    │ └───────────────────────────┘ │ │
│  │ • Resp.   │                                │ │
│  │ • Future  │ ┌───────────────────────────┐ │ │
│  │           │ │ StackCards Container      │ │ │
│  │ (sticky)  │ │ - Cards stack on scroll   │ │ │
│  │           │ │ - 85vh card height        │ │ │
│  │           │ │ - 24px border-radius      │ │ │
│  │           │ │ - Hover reveals TLDR      │ │ │
│  │           │ └───────────────────────────┘ │ │
│  └───────────┴────────────────────────────────┘ │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Left Column Specification (2fr width):**

- **Width:** 2fr (flexible, approximately 240px on 1440px viewport)
- **Position:** `position: sticky`, `top: 80px` (below fixed header)
- **Max-Height:** `calc(100vh - 80px)` (viewport minus header)
- **Background:** Surface color (`var(--color-surface)`)
- **Padding:** 32px vertical, 24px horizontal
- **Border-Right:** 1px solid `var(--color-surface-elevated)`

**Left Column Content:**

1. **Section Title:**
   - Text: "Learning Paths"
   - Font: 18px, 600 weight
   - Color: Text primary
   - Margin-bottom: 24px

2. **Navigation Links:**
   - 5 links (History, Terminology, Risk, Responsibility, Future)
   - Font: 16px, 400 weight
   - Color: Text secondary (inactive), Text primary + path accent border (active)
   - Padding: 12px vertical, 16px horizontal
   - Border-left: 4px solid path accent color (active only)
   - Hover: Background surface-elevated, text primary

3. **Active State Indicator:**
   - Current path highlighted with left border using path accent color
   - Background: Surface elevated
   - Text color: Primary
   - Example: History path active → Toffee Brown `#936639` left border

**Right Column Specification (10fr width):**

- **Width:** 10fr (flexible, approximately 1200px on 1440px viewport)
- **Padding:** 64px horizontal, 96px top
- **Max-Width:** 1400px
- **Background:** Background color (`var(--color-background)`)

**Right Column Content:**

1. **Path Hero Section:**
   - **Headline:** 96px font (Funnel Display), path accent color, 1.1 line-height
   - **Description:** 20px font, text secondary, 1.6 line-height, max-width 800px
   - **Card Count Badge:** Small badge showing total cards (e.g., "15 Concepts")
   - **Background:** Subtle gradient using path colors (10% opacity)
   - **Padding:** 80px bottom margin before StackCards

2. **StackCards Container:**
   - See "StackCards Specification" section below for detailed interaction

**Responsive Behavior:**

- **Desktop (1440px+):** Full two-column layout (2fr + 10fr)
- **Laptop (1024-1440px):** Narrower left nav (200px fixed), right column fluid
- **Tablet (768-1024px):** Single column, left nav collapses to horizontal tabs above content
- **Mobile (<768px):** Left nav becomes dropdown menu, full-width content

**Mobile Adaptations:**

- Left nav collapses to horizontal scrollable tabs
- Tabs stick below header: `position: sticky`, `top: 80px`
- Tab buttons: 120px width, centered text, path accent bottom border for active
- Right column: Full-width, 32px horizontal padding

### StackCards Specification - Learning Path Interaction

**Purpose:** Create immersive, scroll-driven learning experience where users progress through concepts linearly.

**Core Interaction Model:**
- Users scroll vertically through learning path
- Cards stack on top of each other as user scrolls
- Active card pins at viewport center, previous cards slide behind
- Users can flip cards to see summary/related concepts
- Click "Read Full Article" to navigate to article detail page

**Visual Behavior:**

1. **Inactive Card (Below Active):**
   - `opacity: 0.3`
   - `transform: translateY(100px) scale(0.95)`
   - Position: Relative, below active card
   - User Action: Scroll up to activate

2. **Active Card (Viewport Center):**
   - `opacity: 1`
   - `transform: translateY(0) scale(1)`
   - Position: Pinned at `top: center` via GSAP ScrollTrigger
   - Duration: Pinned for 100vh scroll distance
   - User Action: Click to flip, scroll down to next card

3. **Inactive Card (Above Active):**
   - `opacity: 0.3`
   - `transform: translateY(-50px) scale(0.98)`
   - Position: Stacked behind active card
   - User Action: Scroll down to re-activate

**Card Flip Interaction:**

1. **Front Face (Initial State):**
   - **Image:** Full-width aspect-ratio 3:2, generative art with gradient overlay
   - **Content:** Card number (e.g., "Card 1 of 15"), title, TLDR, tags (max 3)
   - **Padding:** 6px (p-6 Tailwind)
   - **Indicator:** Subtle "Click to flip" hint or flip icon

2. **Back Face (Flipped State):**
   - **Content Sections:** "What You'll Learn:" bulleted list
   - **Related Concepts:** Links to other cards in same path
   - **Cross-Path References:** Links to related concepts in other paths
   - **CTA:** "Read Full Article" button (primary accent color)
   - **Close:** "Close" button or click outside to flip back
   - **Padding:** 8px (p-8 Tailwind)

**GSAP ScrollTrigger Configuration:**
```javascript
ScrollTrigger.create({
  trigger: card,
  start: 'top center', // Card enters viewport center
  end: 'bottom top',   // Card exits viewport top
  scrub: 1,            // 1-second smooth delay
  onEnter: () => activateCard(),
  onLeave: () => deactivateCard(),
});

ScrollTrigger.create({
  trigger: card,
  start: 'top top',    // Card reaches viewport top
  end: '+=100vh',      // Pin for 100vh scroll
  pin: true,           // Pin card at top
  pinSpacing: false,   // Don't add spacing
});
```

**Keyboard Navigation:**
- **Arrow Down / Arrow Right:** Scroll to next card (smooth scroll behavior)
- **Arrow Up / Arrow Left:** Scroll to previous card
- **Enter / Space:** Flip active card (toggle front/back)
- **Escape:** Close flipped card (return to front)
- **Tab:** Navigate to "Read Full Article" button when flipped

**Mobile Behavior:**
- Disable pin effect (causes jank on mobile)
- Use simple scroll transitions with opacity/scale changes
- Touch: Tap to flip card
- Swipe Up: Navigate to next card
- Swipe Down: Navigate to previous card

### Sidebar Mini-Map Navigation

**Purpose:** Provide persistent progress tracking and quick navigation for StackCards, showing all cards in learning path with visual progress indicator.

**Layout Position:**
- **Desktop:** Right sidebar, 300px width, `position: fixed`, `right: 40px`, `top: 200px`
- **Visible:** Desktop only (1440px+), hidden on tablet/mobile
- **Z-index:** 1000 (above cards but below header)

**Container Specification:**
- **Width:** 300px fixed
- **Max-Height:** `calc(100vh - 240px)` (viewport minus header and spacing)
- **Background:** Surface elevated color with 8px border-radius
- **Padding:** 24px internal padding
- **Shadow:** `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1)`
- **Overflow:** Vertical scroll if content exceeds max-height
- **Scrollbar:** Custom thin scrollbar (4px width, path accent color)

**Section 1: Progress Header**

```
┌────────────────────────────────┐
│ Progress                       │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │  ← Progress bar (3px height)
│ 35% complete (5 of 15)         │  ← Percentage text
└────────────────────────────────┘
```

- **Title:** "Progress" (14px, 600 weight, text secondary)
- **Progress Bar:**
  - Full width, 3px height, border-radius 2px
  - Background: Surface color (unfilled portion)
  - Fill: Path accent color (filled portion)
  - Width: Dynamic based on scroll position (% of cards viewed)
- **Percentage Text:**
  - 12px font, text tertiary
  - Format: "35% complete (5 of 15)"
  - Updates dynamically as user scrolls
- **Margin-bottom:** 24px before card list

**Section 2: Card List (Mini-Map)**

```
┌────────────────────────────────┐
│ • Card 1: Turing Test          │  ← Active (bold, accent color)
│   Card 2: Expert Systems       │  ← Not viewed (muted)
│   Card 3: Neural Networks      │  ← Not viewed (muted)
│ ✓ Card 4: Deep Learning        │  ← Completed (checkmark)
│ ✓ Card 5: Transformers         │  ← Completed (checkmark)
│   ...                          │
│   Card 15: AGI Alignment       │
└────────────────────────────────┘
```

**Card Item States:**

1. **Not Viewed (Default):**
   - Bullet: `○` (empty circle)
   - Color: Text tertiary (muted)
   - Font: 13px, 400 weight
   - Hover: Text secondary, cursor pointer

2. **Active (Currently Viewing):**
   - Bullet: `•` (filled circle)
   - Color: Path accent color (e.g., Toffee Brown for History)
   - Font: 13px, 600 weight (bold)
   - Background: Surface color with subtle highlight

3. **Completed (Previously Viewed):**
   - Bullet: `✓` (checkmark)
   - Color: Text secondary
   - Font: 13px, 400 weight
   - Opacity: 0.7

**Card Item Interaction:**
- **Click:** Smooth scroll to that card in StackCards view
- **Scroll Behavior:** `behavior: 'smooth'`, scroll to card top aligned with viewport center
- **Active Highlight:** Automatically updates as user scrolls through cards
- **Hover:** Scale(1.02), background surface-elevated, smooth 200ms transition

**Section 3: Cross-References**

```
┌────────────────────────────────┐
│ Related Concepts               │
│ • Machine Learning Basics      │  ← Same-path links
│ • Supervised Learning          │
│                                │
│ Cross-Path References          │
│ [RISK] Bias in AI Systems      │  ← Other-path links (badged)
│ [RESP] GDPR Article 22         │
└────────────────────────────────┘
```

- **Section Title:** "Related Concepts" (14px, 600 weight, text secondary)
- **Spacing:** 24px top margin separator line
- **Same-Path Links:**
  - Bullet: `•`
  - Color: Text secondary
  - Font: 12px, 400 weight
  - Hover: Path accent color, underline
  - Format: "• Concept Title"

- **Cross-Path Section Title:** "Cross-Path References" (12px, 600 weight, text tertiary)
- **Cross-Path Links:**
  - Badge: Small rectangle with path name abbreviation (e.g., "[RISK]")
  - Badge Color: Source path accent color (e.g., Dark Walnut for Risk)
  - Badge Text: White or dark based on smart contrast
  - Link Text: 12px, text secondary
  - Hover: Badge background lightens 10%, link text path accent color
  - Format: "[PATH] Concept Title"

**Scroll Progress Detection:**

```javascript
// Pseudocode for scroll progress tracking
const cards = document.querySelectorAll('.stack-card');
const miniMapItems = document.querySelectorAll('.mini-map-item');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const viewportCenter = scrollY + (window.innerHeight / 2);

  cards.forEach((card, index) => {
    const cardTop = card.offsetTop;
    const cardBottom = cardTop + card.offsetHeight;

    // Card is in viewport center
    if (viewportCenter >= cardTop && viewportCenter <= cardBottom) {
      // Update mini-map active state
      miniMapItems.forEach(item => item.classList.remove('active'));
      miniMapItems[index].classList.add('active');

      // Update progress percentage
      const progress = ((index + 1) / cards.length) * 100;
      updateProgressBar(progress);
    }
  });
});
```

**Responsive Behavior:**
- **Desktop (1440px+):** Visible, fixed right sidebar
- **Laptop (1024-1440px):** Hidden (not enough horizontal space)
- **Tablet/Mobile:** Hidden, replaced by bottom progress bar

**Alternative: Bottom Progress Bar (Mobile)**
- Position: `position: fixed`, `bottom: 0`, full width
- Height: 3px
- Background: Surface elevated
- Fill: Path accent color
- Z-index: 9000 (above content, below header)

### Tri-Modal Card Architecture

**Purpose:** Three distinct card types serve different learning objectives across paths.

**Card Type 1: Concept Cards**
- **Purpose:** Teach foundational concepts and theories
- **Count:** 144 total across 5 paths (History: 15, Terminology: 14, Risk: 20, Responsibility: 75, Future: 20)
- **Content Structure:**
  - **Front:** Image, title, TLDR (1-2 sentences), tags
  - **Back:** Content sections (3-5 bullets), related concepts, cross-path refs, "Read Full Article" CTA
- **Visual Style:**
  - Primary accent: Learning path color (e.g., History = Toffee Brown `#936639`)
  - Badge: "CONCEPT" or path-specific label
  - Image: Generative art with category color gradient overlay

**Card Type 2: Example Cards**
- **Purpose:** Show real-world applications and case studies
- **Count:** 28 total across paths
- **Content Structure:**
  - **Front:** Case study image, title, "Example" badge, scenario summary
  - **Back:** Problem statement, solution approach, outcomes, related concepts
- **Visual Style:**
  - Secondary accent: Camel `#a68a64`
  - Badge: "EXAMPLE" or "CASE STUDY"
  - Image: Real-world photo or diagram (not generative art)

**Card Type 3: Resource Cards**
- **Purpose:** Link to external resources, tools, templates
- **Count:** 10 total across paths
- **Content Structure:**
  - **Front:** Resource type icon, title, "Resource" badge, description
  - **Back:** Resource details, usage instructions, download/link CTA
- **Visual Style:**
  - Tertiary accent: Khaki Beige `#c2c5aa`
  - Badge: "RESOURCE" or resource type (e.g., "TEMPLATE", "TOOL")
  - Image: Icon or screenshot of resource

**Card Distinction Patterns:**
- **Concept Cards:** Full generative art image, category color badge
- **Example Cards:** Photo/diagram image, "EXAMPLE" badge in Camel
- **Resource Cards:** Icon or screenshot, "RESOURCE" badge in Khaki Beige

---

## Step 4: Desired Emotional Response

### Primary Emotional Goals

AIDefence creates a dual emotional experience centered on **Calm & Focused** engagement with **Impressed & Curious** discovery.

**Calm & Focused:**
- Users experience **intellectual engagement without overwhelm** when reading complex AI governance content
- The premium minimalist aesthetic (earth tones, generous whitespace, no clutter) creates a **focused reading environment**
- Predictable, smooth interactions build **confidence and control** rather than confusion
- 680px reading width, blurred backgrounds, and eliminated sidebars maintain **uninterrupted focus**

**Impressed & Curious:**
- First impression communicates **sophistication and professionalism** through visual design
- The expandable card innovation sparks **delighted surprise** ("This is better than traditional blogs")
- Category-coded visual system triggers **exploration curiosity** ("What else is here?")
- Algorithmic related articles maintain **sustained curiosity** beyond initial visit

### Emotional Journey Mapping

**First Discovery (Homepage/Article Grid):**
- **Impressed** → "This is sophisticated—clean, premium, thoughtfully designed"
- **Curious** → "This content looks valuable, I want to explore"
- **Balanced First Moment** → Professional credibility (impressed) invites exploration (curious)

**Core Experience (Browsing/Reading):**
- **Calm Browsing** → Visual organization without clutter enables effortless discovery
- **Delighted Expansion** → Card animation creates micro-moment of pleasant surprise
- **Focused Reading** → Optimal layout supports deep comprehension of complex topics
- **Confident Absorption** → Summary-first structure, clear hierarchy confirm understanding
- **In Control Navigation** → Arrow keys, predictable interactions reinforce mastery

**After Task Completion:**
- **Informed & Capable** → "I now understand EU AI Act compliance" (mastered difficult material)
- **Discovered Value** → "This is a resource I'll return to" (impressed by quality)
- **Sustained Curiosity** → Related articles pull users deeper into content ecosystem
- **Anticipation** → Returning visitors expect new, valuable content

**When Things Go Wrong:**
- **Maintained Calm** → Errors don't panic users; clear messaging preserves focus
- **Trust Preserved** → System reliability prevents frustration, builds long-term confidence

### Micro-Emotions

**Critical Emotional States:**

1. **Trust (not skepticism)**
   - Professional earth-tone design signals expertise
   - Consistent interactions build reliability
   - Expert content quality validates time investment

2. **Confidence (not confusion)**
   - Clear information hierarchy (category colors, badges, metadata)
   - Predictable navigation (menu, arrows, keyboard shortcuts)
   - Summary-first article structure confirms comprehension

3. **Delight (subtle, not overwhelming)**
   - Smooth expansion animations create micro-moments of joy
   - Category color glows on hover reward exploration
   - Thoughtful details (smart badge contrast, keyboard nav) impress power users

**Supporting Emotional States:**
- **Satisfaction** → Effortless completion of finding/reading articles
- **Belonging** → Content speaks to professional AI governance practitioners
- **Excitement** → Discovering the expandable card innovation
- **Accomplishment** → Understanding complex regulatory frameworks

### Design Implications

**Emotion-Design Connections:**

**Calm & Focused →**
- Generous whitespace (160px section breaks, 64px card padding)
- Muted earth-tone palette (no jarring colors)
- Eliminated distractions (no sidebar, social share buttons, pop-ups)
- Blurred grid when article expanded (visual focus signal)
- Max 680px reading width (optimal line length)

**Impressed & Curious →**
- Premium visual design (Maude-inspired spacing, system fonts)
- Smooth animations (250ms expansions, hover effects)
- Category-coded visual system (11 distinct colors)
- Generative art illustrations (unique per article)
- Algorithmic related articles (intelligent suggestions)

**Trust →**
- Consistent UI patterns (same menu, same animations)
- Professional typography (clear hierarchy, readable line-height 1.8)
- Accessible design (7:1 contrast, keyboard navigation, focus states)
- Reliable performance (instant interactions, no perceivable delay)

**Confidence →**
- Clear navigation (context-aware menu, breadcrumbs)
- Summary-first article structure ("I know what this covers")
- Reading time indicators ("I can plan my time")
- Progress cues (TOC, scroll position)

**Delight →**
- Category glow on hover (subtle reward)
- FLIP animation technique (smooth 60fps)
- Keyboard shortcuts (power user appreciation)
- Smart badge contrast (thoughtful detail)

### Emotional Design Principles

**Guiding principles for emotional design in AIDefence:**

1. **Sophistication Through Simplification** → Premium feel comes from what we remove, not add
2. **Reward Curiosity, Maintain Calm** → Exploration feels effortless, never overwhelming
3. **Build Trust Through Consistency** → Every interaction reinforces predictability
4. **Delight in Details, Not Distractions** → Micro-interactions impress without competing with content
5. **Confidence Through Clarity** → Users always know where they are, what they can do, what comes next
6. **Focus as a Feature** → Eliminated distractions are as important as added features

---

## Step 5: UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

**1. Aziz Khaldi (azizkhaldi.com)**

**Core Strengths:**
- **Readability:** Single-page scroll eliminates navigation cognitive load
- **Focus:** Minimal distractions, content takes center stage
- **Rhythm:** Consistent vertical spacing creates comfortable reading flow
- **Typography:** Large, readable fonts with generous line-height
- **Simplicity:** Every element serves a purpose, nothing extraneous

**What Makes It Work:**
- Users can scan entire portfolio in one fluid scroll
- Subtle animations add polish without competing for attention
- White space creates visual breathing room between sections

**2. Maude (getmaude.com)**

**Core Strengths:**
- **Premium Readability:** Generous whitespace makes content feel luxurious and unrushed
- **Visual Calm:** Earthy neutral palette reduces visual noise
- **Typography Hierarchy:** Clear font size/weight differentiation guides scanning
- **Spacing System:** Consistent padding creates predictable, comfortable rhythm
- **Content-First:** Design serves content, never overshadows it

**What Makes It Work:**
- Users feel they can take their time—no pressure, no clutter
- Earth tones create warm, professional, trustworthy atmosphere
- Generous padding (64px+) signals quality and thoughtfulness

**3. Design For Mankind (designformankind.com/blog)**

**Core Strengths:**
- **Scannable Grid:** Category-coded cards enable quick visual filtering
- **Clear Hierarchy:** Image + Title + Metadata = instant comprehension
- **Readability in Structure:** Grid organization reduces cognitive load
- **Visual Categorization:** Color/image coding helps users navigate by topic
- **Efficient Discovery:** Users find relevant content without reading everything

**What Makes It Work:**
- Grid layout balances visual appeal with information density
- Category system creates mental model for content organization
- Thumbnails provide visual anchors for recognition and recall

### Transferable UX Patterns

**Navigation Patterns:**

1. **Single-Page Scroll (Aziz) → Homepage**
   - **Readability benefit:** No interruptions, continuous narrative flow
   - **Application:** AIDefence homepage scrolls through About → Resume → Portfolio → Articles
   - **Why:** Professional evaluators can consume entire portfolio without clicking

2. **Minimal Top Navigation (All Three) → Floating Menu**
   - **Readability benefit:** Navigation doesn't compete with content
   - **Application:** Collapsed button expands on-demand, then disappears
   - **Why:** Maximum screen real estate for reading

**Content Layout Patterns:**

3. **Generous Whitespace (Maude) → Spacing System**
   - **Readability benefit:** Eye can rest, brain can process, content breathes
   - **Application:** 64px card padding, 160px section breaks, 96px vertical rhythm
   - **Why:** Complex AI governance topics need cognitive breathing room

4. **Optimal Line Length (All Three) → 680px Max Width**
   - **Readability benefit:** 65-75 characters per line = optimal reading speed
   - **Application:** Centered article content, generous side margins
   - **Why:** Science-backed readability for long-form content

5. **Typography Hierarchy (Maude) → Font Scale**
   - **Readability benefit:** Clear visual hierarchy guides scanning and comprehension
   - **Application:** H1 (48px) → H2 (32px) → H3 (24px) → Body (16px, 1.8 line-height)
   - **Why:** Technical articles need clear section differentiation

**Interaction Patterns:**

6. **Category-Coded Visual System (DFM) → Color Coding**
   - **Readability benefit:** Visual scanning faster than reading labels
   - **Application:** 11 category colors with smart badge contrast
   - **Why:** Users can filter by topic before reading

7. **Image-First Cards (DFM) → Generative Art Thumbnails**
   - **Readability benefit:** Visual recognition reduces reading burden
   - **Application:** 200px hero images on cards, no text excerpts needed
   - **Why:** Image + Title communicates faster than text summary

**Visual Design Patterns:**

8. **Earth-Tone Palette (Maude) → Calming Colors**
   - **Readability benefit:** Muted tones reduce eye strain, enable longer reading sessions
   - **Application:** Charcoal/moss/beige palette, no bright colors
   - **Why:** Hours-long research sessions need comfortable, non-fatiguing colors

9. **Dark Mode Default (Aziz) → Reduced Glare**
   - **Readability benefit:** Lower screen brightness for extended reading
   - **Application:** Dark background, light text, toggle for preference
   - **Why:** Many users read technical content in low-light environments

### Anti-Patterns to Avoid

**Readability Killers:**

1. **Sidebars and Navigation Clutter** (Common blog anti-pattern)
   - **Why avoid:** Competes for attention, narrows reading width
   - **AIDefence solution:** No sidebar, floating menu only, full-width reading

2. **Auto-Playing Media** (Many modern sites)
   - **Why avoid:** Disrupts reading flow, creates anxiety
   - **AIDefence solution:** All animations user-initiated (click to expand)

3. **Narrow Line Lengths** (Mobile-first sites on desktop)
   - **Why avoid:** Forces excessive vertical scrolling, breaks reading rhythm
   - **AIDefence solution:** Optimal 680px max width on desktop

4. **Poor Typography Contrast** (Many dark mode implementations)
   - **Why avoid:** Eye strain, reduced comprehension, accessibility failure
   - **AIDefence solution:** 7:1 contrast ratio, smart badge text colors

5. **Pagination on Long Articles** (Traditional blogs)
   - **Why avoid:** Interrupts reading flow, forces clicks mid-article
   - **AIDefence solution:** Single continuous scroll per article

6. **Excessive Font Weights/Styles** (Over-designed sites)
   - **Why avoid:** Visual noise, cognitive load, reduces hierarchy clarity
   - **AIDefence solution:** Two weights only (400 body, 600 headings)

7. **Popups, Modals, Interruptions** (Content marketing sites)
   - **Why avoid:** Destroys calm & focused emotional state
   - **AIDefence solution:** Zero interruptions, no newsletter popups, no cookie banners

8. **Text Excerpts on Cards** (Standard blog pattern)
   - **Why avoid:** Users must read before deciding to read—double work
   - **AIDefence solution:** Image + Title + Metadata only

### Design Inspiration Strategy

**Readability-First Hierarchy:**

**Priority 1: Content Readability**
- Optimal line length (680px)
- Clear typography hierarchy (48px → 16px scale)
- Generous line-height (1.8)
- High contrast (7:1 ratio)
- **Result:** Users can read for hours without fatigue

**Priority 2: Visual Clarity**
- Whitespace system (8px → 160px scale)
- Category color coding (11 distinct colors)
- No visual clutter (eliminated sidebars, share buttons, ads)
- **Result:** Brain focuses on content, not navigation

**Priority 3: Interaction Smoothness**
- Fast animations (200-250ms)
- Predictable patterns (same menu, same expansion)
- Keyboard shortcuts (arrows, Esc)
- **Result:** Reading flow uninterrupted

**What to Adopt:**
- Aziz single-page scroll → Homepage narrative flow
- Maude whitespace system → 64px+ padding, 160px section breaks
- Maude earth-tone palette → Muted, professional, calming
- DFM grid layout → Scannable article discovery
- DFM category coding → Visual filtering before reading

**What to Adapt:**
- Aziz subtle animations → Make more prominent (expandable cards) to create "impressed" moment
- Maude premium spacing → Even more generous (160px vs typical 96px) for technical content
- DFM grid cards → Add expandable inline reading (eliminate page navigation)

**What to Avoid:**
- Typical blog clutter → No sidebars, ads, social share, popups
- Pagination → Single scroll per article
- Text excerpts → Image + Title sufficient
- Bright accent colors → Earth tones only, no visual fatigue
- Complex navigation → Minimal menu, keyboard shortcuts

**Readability Validation:**
Every design decision passes this test: "Does this make the content easier or harder to read?"

---

## Step 6: Design System & Implementation

### Design System Choice

**Selected Approach:** Custom Design System + Tailwind CSS (Hybrid)

**Rationale:**
- **Custom CSS Variables** for precise control over earth-tone color palette and whitespace scale
- **Tailwind CSS** for rapid prototyping and responsive utilities
- **Hand-crafted animations** for FLIP technique and category-specific interactions
- **Component-based structure** supporting Next.js architecture

### Implementation Stack

**Framework:** Next.js 14+ with App Router
- Static site generation (SSG) for optimal performance
- Server components for efficient rendering
- Built-in image optimization for generative art
- File-based routing for `/` and `/articles` pages

**Styling:** Custom CSS + Tailwind CSS
- CSS custom properties for design tokens (colors, spacing, typography)
- Tailwind utility classes for layout and responsive design
- Styled components for complex animations (expandable cards)
- Global styles for typography and base elements

**State Management:** React Context + localStorage
- Theme toggle state (dark/light mode)
- Article expansion state (which article is currently open)
- Menu state (collapsed/expanded)
- No external state management library needed

**Content Management:** Markdown + Gray Matter
- Article content in `.md` files with frontmatter metadata
- Frontmatter schema: category, tags, related_context, date, reading_time, video_url, seo_title, seo_description
- Markdown processor: MDX for React component embedding
- Syntax highlighting: Prism.js with earth-tone theme

**Image Strategy:** Stable Diffusion + Next.js Image
- Generate 1200x750px generative art per article locally (M4 Mac Mini)
- Prompt formula: "Abstract geometric illustration, [category motif], earth tones, minimalist, professional"
- CSS filters for dark/light mode variants (50% storage savings)
- Next.js `<Image>` component for optimization and lazy loading

### Design Token System

**CSS Custom Properties Structure:**

```css
:root {
  /* Color Tokens - Structural (Dark Mode Default) */
  --color-background: #333d29;
  --color-surface: #414833;
  --color-surface-elevated: #656d4a;
  --color-text-primary: #F5F5DC;
  --color-text-secondary: #b6ad90;
  --color-text-tertiary: #a68a64;

  /* Color Tokens - Categories (Constant) */
  --color-cat-ai-fundamentals: #936639;
  --color-cat-risks-principles: #a68a64;
  --color-cat-legal-frameworks: #a4ac86;
  --color-cat-ai-laws: #7f4f24;
  --color-cat-risk-frameworks: #582f0e;
  --color-cat-dev-lifecycle: #b6ad90;
  --color-cat-governance: #c2c5aa;
  --color-cat-auditing: #656d4a;
  --color-cat-industry: #414833;
  --color-cat-explainability: #a68a64;
  --color-cat-videos: #936639;

  /* Spacing Tokens (8px base) */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 32px;
  --space-lg: 64px;
  --space-xl: 96px;
  --space-2xl: 160px;

  /* Typography Tokens */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-size-h1: 48px;
  --font-size-h2: 32px;
  --font-size-h3: 24px;
  --font-size-body: 16px;
  --font-size-small: 14px;
  --line-height-tight: 1.2;
  --line-height-normal: 1.6;
  --line-height-relaxed: 1.8;
  --font-weight-normal: 400;
  --font-weight-semibold: 600;

  /* Layout Tokens */
  --content-max-width: 1200px;
  --article-max-width: 680px;
  --menu-height: 72px;
  --menu-button-size: 48px;

  /* Animation Tokens */
  --timing-fast: 150ms;
  --timing-normal: 200ms;
  --timing-slow: 250ms;
  --timing-expand: 300ms;
  --easing-smooth: cubic-bezier(0.4, 0.0, 0.2, 1);
  --easing-ease-in: ease-in;
  --easing-ease-out: ease-out;
}

/* Light Mode Override */
[data-theme="light"] {
  --color-background: #F5F5DC;
  --color-surface: #FFFFFF;
  --color-surface-elevated: #b6ad90;
  --color-text-primary: #333d29;
  --color-text-secondary: #414833;
  --color-text-tertiary: #656d4a;
  /* Categories remain constant */
}
```

### Component Architecture

**Page Components:**
```
/app
  /page.tsx              # Homepage (About Sunil)
  /articles/page.tsx     # Articles grid + expandable view
  /layout.tsx            # Root layout with theme provider
  /globals.css           # Design tokens + base styles
```

**Reusable Components:**
```
/components
  /FloatingMenu.tsx      # Context-aware navigation
  /ArticleCard.tsx       # Grid card with hover effects
  /ArticleExpanded.tsx   # Inline expanded article view
  /CategoryBadge.tsx     # Smart contrast badge
  /ThemeToggle.tsx       # Dark/light mode switcher
  /PortfolioCard.tsx     # Homepage portfolio project cards
  /FeaturedArticle.tsx   # Homepage article preview cards
```

**Utility Functions:**
```
/lib
  /markdown.ts           # Parse markdown with frontmatter
  /articles.ts           # Get/filter article metadata
  /related.ts            # Algorithmic related article matching
  /theme.ts              # Theme persistence and switching
  /animations.ts         # FLIP animation helpers
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet portrait */
--breakpoint-lg: 1024px;  /* Tablet landscape / Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */

/* Grid Adaptations */
/* Mobile (default): 1 column */
/* Tablet (768px+): 2 columns, reduced spacing */
/* Desktop (1024px+): 3 columns, full spacing */
```

**Mobile-Specific Adjustments:**
- Menu button: 40px × 40px (reduced from 48px)
- Card padding: 32px (reduced from 64px)
- Section spacing: 64px (reduced from 160px)
- Typography: H1 36px (reduced from 48px)
- Floating menu: Full-width expanded state
- Article expansion: Full-screen overlay (not inline)

### Accessibility Specifications

**WCAG 2.1 Level AAA Compliance:**
- Color contrast: 7:1 minimum for body text
- Focus indicators: Visible 2px outlines on all interactive elements
- Keyboard navigation: Full support (Tab, Enter, Escape, Arrow keys)
- Screen reader: Semantic HTML, ARIA labels where needed
- Motion preferences: Honor `prefers-reduced-motion`

**Keyboard Shortcuts:**
- `Tab` / `Shift+Tab`: Navigate interactive elements
- `Enter` / `Space`: Activate buttons/cards
- `Escape`: Close expanded article or menu
- `Arrow Left` / `Arrow Right`: Navigate between articles when expanded
- `?`: Show keyboard shortcuts help modal (future)

**Screen Reader Enhancements:**
- Article cards: `aria-label` with category, title, reading time
- Floating menu: `aria-expanded` state
- Theme toggle: `aria-label` indicating current and next theme
- Expanded article: `role="dialog"`, `aria-modal="true"`
- Related articles: `aria-label="Related articles"`

### Wireframe Deliverables

**1. Homepage Wireframe:** `docs/aidefence-reference/homepage-wireframe-v5-with-splash.html`

**Demonstrates:**
1. **Splash Screen:** 3-second "Hello" blinking animation with slide-up reveal (black background)
2. **Fixed Header:** Logo + Name (left), Theme Toggle + Hamburger Menu (right), 80px height with backdrop blur
3. **Hero Card:** "Vibe, [Word] AI + a little me" with animated word ticker, looping video background
4. **Break Cards:** "Learning Paths", "Portfolio", "About" full-screen dividers with background images
5. **Learning Paths Carousel:** Center-focused carousel with blurred side cards, 5 paths showcased
6. **Portfolio Carousel:** Same pattern as learning paths, project cards with images
7. **About Card:** Two-column grid (photo + bio + stats)
8. **Footer Card:** Four-column footer with links
9. **Word Ticker Animation:** Vertical slide-up with bounce effect (500ms interval, cubic-bezier)
10. **Theme Toggle:** Light/dark mode switch with localStorage persistence
11. **Responsive Behavior:** Desktop (1920px max) → Tablet (768px) → Mobile (375px)
12. **Card-Based Layout:** Full-screen cards with 300px bottom margin spacing

**2. Learning Path Wireframe (History):** `docs/aidefence-reference/learn-history-wireframe.html`

**Demonstrates:**
1. **Inner Headline Section:** Rayo-style 2-column grid (2fr left nav + 10fr content)
2. **Left Navigation:** Learning paths menu with active state highlighting
3. **Path Hero Section:** 96px headline, description, card count badge
4. **StackCards Layout:** 85vh height cards, 24px border-radius, stacked on scroll
5. **Hover Interaction:** TLDR reveals on card hover (opacity 0 → 1, max-height 0 → 300px)
6. **Card Structure:** Image background (25% opacity), content overlay, tags always visible
7. **Cross-Path Badges:** Olive Green background, white text, path abbreviations
8. **Responsive Navigation:** Horizontal tabs on mobile, sticky below header

**3. Learning Path Wireframe (v2 - Full Features):** `docs/aidefence-reference/learning-path-wireframe-v2.html`

**Demonstrates:**
1. **Sidebar Mini-Map:** 300px width, sticky right sidebar, progress tracking
2. **Card List:** All cards shown with active/completed/not-viewed states
3. **Progress Bar:** 3px height, path accent color fill, percentage indicator
4. **Cross-References Section:** Related concepts + cross-path refs in sidebar
5. **Card States:** Collapsed vs Expanded (click to toggle full content)
6. **Component Library:** Curved boxes, tables, checklists, templates, image prompts
7. **Scroll Progress:** Fixed 3px bar at top with percentage
8. **Card Footer:** Tags + metadata (updated date, word count, read time)

**4. Article Detail Wireframe:** `docs/aidefence-reference/learn-article-detail-wireframe.html`

**Demonstrates:**
1. **Breadcrumbs Navigation:** Home → Learning Paths → Path → Article (with arrow separators)
2. **Article Meta:** Reading time, publication date, updated date, 3-5 tags
3. **Two-Column Layout:** 680px main content + 280px sticky sidebar
4. **Table of Contents:** Auto-generated from H2/H3 headings, smooth scroll
5. **Related Concepts Grid:** 3 mini concept cards linking to other articles
6. **Cross-Path References:** Badged links to concepts in other paths
7. **Author Section:** 120px avatar, bio (3-4 sentences), social links (LinkedIn/Twitter/Web)
8. **Prev/Next Navigation:** Two-column card layout with TLDR preview and path badges
9. **920px Max-Width:** Centered container for optimal reading experience

**5. Color System Reference:** `docs/aidefence-reference/learning-paths-color-system.md`

**Documents:**
1. **5 Learning Path Colors:** History (Toffee Brown), Terminology (Camel), Risk (Dark Walnut), Responsibility (Dry Sage), Future (Moss Green)
2. **Earth-Tone Palette:** Primary, secondary, accent colors for each path
3. **Gradients:** CSS linear-gradient specifications for hero images
4. **Example Card Colors:** Dramatic company brand colors (Amazon, Google, OpenAI, EU, etc.)
5. **Smart Contrast Rules:** Dark/medium/light background text color pairings
6. **CSS Variables:** Complete :root variable structure for implementation
7. **Accessibility:** WCAG 2.1 AAA compliance (7:1 contrast ratio)

**6. Image Reference:** `docs/aidefence-reference/learning-paths-image-reference.md`

**Documents:**
1. **187 Total Images:** 5 heroes + 144 concept cards + 28 example cards + 10 resource cards
2. **Image Dimensions:** Hero (1920×1080), Concept (1920×1280), Example (1200×800), Resource (1200×800)
3. **Prompt Formula:** "Abstract [concept], earth tones (hex: #[color]), minimalist, professional, [motif], soft gradients"
4. **File Naming:** Kebab-case, matches article slugs, path/category prefixes
5. **Folder Structure:** `/public/images/learn/[path-name]/[slug].jpg`
6. **Optimization:** JPG (quality 85) + WebP (production), target file sizes
7. **Next.js Implementation:** Image component usage with blur placeholders

**Legacy Wireframes (Reference Only):**
- `docs/wireframe-complete.html` - Original two-page architecture with masonry grid (superseded by v5)
- `docs/ux-color-mockup.html` - Interactive color system demonstration (still valid for design tokens)

**Key Evolution from Legacy:**
- **v5 + Learning Paths:** Splash screen, StackCards pattern, carousel (not masonry grid), card-based layout, "Vibe" hero text, comprehensive learning path specifications
- **Legacy (v1):** Floating menu, masonry grid, inline article expansion, "Artificial AI" rotation, generic color system

---

## Summary of v2.0 Update

**Date Updated:** 2025-12-23
**Update Type:** Major architectural alignment + comprehensive learning path specifications (UX-PRD misalignment resolution)

**Critical Homepage Changes:**
1. ✅ **Splash Screen Added:** 3-second "Hello" animation with slide-up reveal
2. ✅ **StackCards Pattern:** Replaced masonry grid with GSAP ScrollTrigger scroll-pinning
3. ✅ **Hero Text Updated:** Changed from "Artificial AI" rotation to "Vibe, [Word] AI + a little me"
4. ✅ **Tri-Modal Cards:** Documented Concept/Example/Resource card architecture
5. ✅ **Fixed Header:** Replaced floating menu with always-visible header
6. ✅ **Carousel Pattern:** Learning paths and portfolio use center-focused carousel (not grid)
7. ✅ **Card-Based Layout:** Homepage uses full-screen card containers with break cards

**NEW: Learning Path Specifications (Complete):**
8. ✅ **Learning Path Color System:** 5 paths with earth-tone palette (History: Toffee Brown, Terminology: Camel, Risk: Dark Walnut, Responsibility: Dry Sage, Future: Moss Green)
9. ✅ **Inner Headline Section:** Rayo-style 2-column grid (2fr left nav + 10fr content) with sticky navigation
10. ✅ **Sidebar Mini-Map Navigation:** 300px right sidebar with progress tracking, card list (active/completed/not-viewed states), cross-references
11. ✅ **Enhanced Article Detail Page:** Breadcrumbs, article meta (reading time, dates, tags), author section (120px avatar, bio, socials), prev/next navigation cards
12. ✅ **Comprehensive Image Specifications:** 187 total images (5 heroes: 1920×1080, 144 concept cards: 1920×1280, 28 example cards: 1200×800, 10 resource cards: 1200×800)
13. ✅ **Image Generation Guidelines:** Prompt formulas, color specifications, file naming conventions, optimization pipeline, Next.js implementation

**Alignment Status:**
- ✅ **PRD Alignment:** Matches `aidefence-v2-prd.md` (FR1-FR16 covered)
- ✅ **Epic Alignment:** Matches Epic 2 StackCards specification + Epic 3-9 learning path requirements
- ✅ **Wireframe Alignment:**
  - Homepage: `homepage-wireframe-v5-with-splash.html`
  - Learning Paths: `learn-history-wireframe.html`, `learning-path-wireframe-v2.html`
  - Article Detail: `learn-article-detail-wireframe.html`
  - Color System: `learning-paths-color-system.md`
  - Images: `learning-paths-image-reference.md`

**Completeness Assessment:**
- ✅ **Homepage:** 100% specified (splash, hero, carousels, break cards, footer)
- ✅ **Learning Path Pages:** 100% specified (inner headline, left nav, path hero, StackCards, sidebar mini-map)
- ✅ **Article Detail Pages:** 100% specified (breadcrumbs, meta, content, sidebar, author, prev/next)
- ✅ **Color System:** 100% specified (5 paths, example cards, smart contrast, CSS variables)
- ✅ **Image System:** 100% specified (187 images, dimensions, prompts, optimization, implementation)
- ✅ **Animations:** 100% specified (splash, word ticker, StackCards, card flip, scroll progress)
- ✅ **Responsive Design:** 100% specified (desktop, laptop, tablet, mobile breakpoints)
- ✅ **Accessibility:** 100% specified (WCAG 2.1 AAA, keyboard nav, screen readers, prefers-reduced-motion)

**Implementation Readiness:** ✅ READY FOR ALL EPICS
- This update resolves the critical UX-PRD misalignment identified in Implementation Readiness Report (2025-12-23)
- Developers can now implement ALL epics (Epic 1-15) with complete specifications
- All animation specifications include GSAP/Framer Motion code examples
- All color specifications include CSS variable structures
- All image specifications include prompt formulas and optimization pipelines
- All interaction patterns include JavaScript pseudocode

**Documentation Coverage:**
- **8 wireframes:** Homepage v5, History path, Learning path v2, Article detail, Color mockup, Wireframe complete (legacy), Color system ref, Image ref
- **5 learning paths:** History, Terminology, Risk, Responsibility, Future (all fully specified)
- **187 images:** Complete specifications for all hero, concept, example, and resource images
- **13 major sections:** Enhanced from 8 sections in v1 to include all learning path details

---

## Next Steps

**Immediate Actions:**
1. ✅ **UX Specification Updated** - v2.0 complete and aligned
2. ⏳ **Begin Epic 1 Implementation** - Homepage with splash screen and hero text
3. ⏳ **Begin Epic 2 Implementation** - History path with StackCards animation

**BMM Workflow Status:**
- Update `docs/bmm-workflow-status.yaml` to mark Implementation Readiness as complete
- Update workflow status: `status: "docs/aidefence-reference/ux-specification.md (v2.0)"`
- Confidence level increased from 70% → 95%+ with UX alignment complete

---
