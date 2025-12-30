# AIDefence Homepage Wireframe V3 - FINAL
**Based on User Feedback: December 20, 2024**

---

## 📐 SECTION 1: HERO SECTION (100vh - Full Viewport Height)

```
┌────────────────────────────────────────────────────────────────┐
│                                                    [☰] ← Hamburger Menu (Top-Right)
│                                                                │
│  🎥 VIDEO BACKGROUND (background.webm)                        │
│     - High contrast video                                     │
│     - Loop continuously                                       │
│     - Full viewport coverage                                  │
│                                                                │
│                                                                │
│              ┌──────────────────────────┐                     │
│              │   SUNIL IYER            │ ← CENTERED           │
│              │   (Color changes with   │   72px font          │
│              │    video animation)     │   Matches video color│
│              └──────────────────────────┘                     │
│                                                                │
│                      ╔══════════════════╗                     │
│                      ║  AI [Artificial] ║ ← AI + WORD TICKER  │
│                      ╚══════════════════╝                     │
│                       ↑         ↑                             │
│                       │         └── Curved Black Box          │
│                       │             (60px border-radius)      │
│                       │             Fits largest word         │
│                       │                                       │
│                       └── "AI" text (same color as "Sunil")   │
│                                                                │
│  Words (0.5s each): "Artificial", "Adversarial", "Agentic",  │
│                     "Open", "Claude", "Bias",                 │
│                     "Responsible", "Safe"                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Hero Section Specifications:

**Video Background:**
- File: `/public/images/background.webm`
- Properties: High contrast, seamless loop, full viewport
- Z-index: -1 (behind all content)

**"Sunil Iyer" Logo:**
- Position: CENTER of viewport (horizontally + vertically centered)
- Font Size: 72px
- **Color Animation:** Matches dominant color from video background frame
  - Implementation: Extract color from video canvas using JavaScript
  - Updates every frame for smooth color transition
- Font Weight: Bold (700)

**AI + Word Ticker:**
- Position: Directly below "Sunil Iyer" (40px gap)
- Layout: `"AI" [word in box]`

**"AI" Text:**
- Font Size: 48px
- Color: Same as "Sunil Iyer" (follows video color animation)
- Margin Right: 20px

**Word Box (Curved Black Box):**
- Background: Black (#000000)
- Border Radius: 60px (smooth curves)
- Padding: 20px 40px
- **Dynamic Width:** Expands to fit largest word ("Adversarial" = ~240px)
- Height: Fixed 80px (vertically centers text)

**Word Text Inside Box:**
- Font Size: 40px
- Color: White (#FFFFFF) for maximum contrast with black box
- Animation: Fade in/out + slight scale (0.5s per word)
- Words: "Artificial" → "Adversarial" → "Agentic" → "Open" → "Claude" → "Bias" → "Responsible" → "Safe" → [loop]

---

## 🍔 HAMBURGER MENU (Slide-out from RIGHT)

```
[CLOSED STATE - Top Right Corner]
┌─────────────────────────────────────────────────┐
│                                    ╔═══╗         │
│                                    ║ ≡ ║  ← Curved Box
│                                    ╚═══╝         │
└─────────────────────────────────────────────────┘

[OPEN STATE - Slides from Right]
┌─────────────────────────────────────┬───────────┐
│                                     │           │
│                                     │  [×]      │ ← Close Button
│                                     │           │
│                                     │  Home     │
│                                     │           │
│                                     │  Learning │
│                                     │    • History & Context
│                                     │    • Foundation
│                                     │    • Implementation
│                                     │    • Risk & Ethics
│                                     │    • Legal & Compliance
│                                     │           │
│                                     │  Portfolio│
│                                     │    • Seshan Intelligence
│                                     │    • Seshan App
│                                     │    • Free Tools
│                                     │    • AI Comics
│                                     │           │
│                                     │  About    │
│                                     │  Contact  │
│                                     │           │
└─────────────────────────────────────┴───────────┘
                                      └─ 400px ─┘
```

### Hamburger Menu Specifications:

**Button (Closed State):**
- Position: Fixed, top-right (40px from top, 40px from right)
- Size: 60×60px
- **Curved Box:** Border-radius 60px, creates pill shape
- Background:
  - Light mode: `rgba(255, 255, 255, 0.9)` (white with transparency)
  - Dark mode: `rgba(0, 0, 0, 0.9)` (black with transparency)
- Border: 2px solid earth-tone accent
- Icon: 3 horizontal lines (20px wide, 2px thick, 6px gap)

**Menu Panel (Open State):**
- Width: 400px
- Height: 100vh (full height)
- Position: Fixed right, slides in from right
- Background:
  - Light mode: `rgba(255, 255, 255, 0.95)` with backdrop-filter blur
  - Dark mode: `rgba(26, 26, 26, 0.95)` with backdrop-filter blur
- Border Left: 4px solid earth-tone accent (#333d29)
- Animation: 0.3s ease-out slide transition

**Menu Items:**
- Font Size: 18px
- Spacing: 24px between items
- Hover: Background highlight + slight indent
- Sub-items: Indented 20px, font size 16px

---

## 🎴 PAGE BREAK CARD 1

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                    ╔═══════════════════╗                   │
│                    ║  Learning Paths   ║                   │
│                    ╚═══════════════════╝                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Page Break Card Style:**
- Background: Gradient (#936639 → #414833)
- Height: 200px
- Border Radius: 30px
- Text: Centered, 48px, white, bold
- Margin: 100px top/bottom

---

## 📚 SECTION 2: LEARNING PATHS (Rayo "Project Details" Style)

```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────┐   ┌────────────────────────┐  │
│  │ PROJECT DETAILS         │   │                        │  │
│  │ ─────────────────────   │   │   [Static Image]       │  │
│  │                         │   │                        │  │
│  │ Learning Path 1         │   │   History & Context    │  │
│  │ HISTORY & CONTEXT       │   │   Visualization        │  │
│  │                         │   │                        │  │
│  │ Understand the evolution│   │   (Timeline graphic)   │  │
│  │ of AI from theoretical  │   │                        │  │
│  │ foundations to modern   │   │                        │  │
│  │ applications...         │   │                        │  │
│  │                         │   │                        │  │
│  │ [Explore Path →]        │   │                        │  │
│  │                         │   │                        │  │
│  └─────────────────────────┘   └────────────────────────┘  │
│         (LEFT 50%)                   (RIGHT 50%)           │
│                                                             │
│  ─── After 3 seconds, image JUMPS to next path ───        │
│                                                             │
│  ┌─────────────────────────┐   ┌────────────────────────┐  │
│  │ PROJECT DETAILS         │   │                        │  │
│  │ ─────────────────────   │   │   [Image Changes]      │  │
│  │                         │   │                        │  │
│  │ Learning Path 2         │   │   Foundation           │  │
│  │ FOUNDATION              │   │   Neural Network       │  │
│  │                         │   │                        │  │
│  │ Master the fundamental  │   │   (Network diagram)    │  │
│  │ concepts of AI...       │   │                        │  │
│  │                         │   │                        │  │
│  └─────────────────────────┘   └────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Learning Paths Specifications:

**Layout:**
- Two-column: Left (details) 50%, Right (image) 50%
- Gap: 60px between columns
- Height: 600px per item
- Container: Max-width 1400px, centered

**Left Column (Project Details):**
- Background: White card (#FFFFFF)
- Padding: 60px
- Border Radius: 12px
- Border: 2px solid earth-tone (rotates per path)

**Content Structure:**
```
PROJECT DETAILS (14px, gray, uppercase, letter-spacing 2px)
───────────────────

Learning Path {number} (16px, earth-tone accent)

{TITLE} (48px, bold, black)

{Description} (18px, line-height 1.8, gray)

[Explore Path →] (CTA button, 18px, earth-tone background)
```

**Right Column (Static Image):**
- Size: 700×600px
- Border Radius: 12px
- Object Fit: Cover
- **Animation:** Every 3 seconds, fade out → swap to next path image → fade in
- Effect: Creates illusion that image "jumps" to show next learning path

**5 Learning Path Images (Need to Generate):**

1. **History & Context:**
   - Prompt: "A timeline visualization showing AI evolution from 1950s to present, with iconic symbols: Turing machine, neural network diagrams, early computers, modern GPUs, and robot silhouettes. Color palette: warm sepia tones transitioning to vibrant modern blues and greens. Style: abstract technical illustration with geometric shapes and connecting lines."
   - Suggested filename: `history-context.jpg`

2. **Foundation:**
   - Prompt: "Abstract visualization of a neural network with layered nodes and weighted connections, mathematical formulas floating in background (gradient descent, loss functions). Central brain-like structure made of interconnected geometric shapes. Color palette: deep blues, electric teals, and white highlights. Style: clean technical diagram with glowing elements."
   - Suggested filename: `foundation.jpg`

3. **Implementation:**
   - Prompt: "A developer workspace showing code on screens, cloud infrastructure diagrams, CI/CD pipeline visualization, and model training graphs. Mix of abstract code snippets, server racks, and deployment architecture. Color palette: dark charcoal background with bright green terminal text and orange deployment indicators. Style: modern tech illustration with isometric elements."
   - Suggested filename: `implementation.jpg`

4. **Risk & Ethics:**
   - Prompt: "A balanced scale with AI elements on one side (robot, algorithms, data streams) and human elements on the other (diverse people, ethical symbols, justice scales). Radiating light from center representing transparency. Color palette: warm golds and deep purples with ethical green accents. Style: symbolic illustration with human-centered design elements."
   - Suggested filename: `risk-ethics.jpg`

5. **Legal & Compliance:**
   - Prompt: "A courthouse or legal building merged with digital elements: circuit board patterns, lock icons, compliance checkmarks, and regulatory document symbols. Global map in background with highlighted regulatory regions. Color palette: authoritative navy blues, legal burgundy, and gold accents. Style: professional corporate illustration with crisp lines and official aesthetics."
   - Suggested filename: `legal-compliance.jpg`

---

## 🎴 PAGE BREAK CARD 2

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                    ╔═══════════════════╗                   │
│                    ║    Portfolio      ║                   │
│                    ╚═══════════════════╝                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 🎨 SECTION 3: PORTFOLIO CAROUSEL (FIXED)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│         [←]                                         [→]    │ ← Navigation Arrows
│                                                            │
│    ┌─────────┐       ┌───────────────┐       ┌─────────┐ │
│    │         │       │               │       │         │ │
│    │ Project │       │   PROJECT 1   │       │ Project │ │
│    │   5     │       │  (CENTERED)   │       │   2     │ │
│    │ (blur)  │       │   [FOCUSED]   │       │ (blur)  │ │
│    │         │       │               │       │         │ │
│    └─────────┘       └───────────────┘       └─────────┘ │
│    opacity: 0.7     opacity: 1.0            opacity: 0.7 │
│    blur: 3px        blur: 0px (sharp!)      blur: 3px    │
│    scale: 0.9       scale: 1.0              scale: 0.9   │
│                                                            │
│                                                            │
│  ●  ○  ○  ○  ○  ← Carousel Dots (5 total, 1st active)    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Portfolio Carousel Specifications:

**Key Changes from Previous Version:**

1. **REDUCED BLUR:** 3px instead of 8px
   - Reason: Users can now SEE what's in side cards, enticing them to scroll
   - Focused card: `filter: blur(0)`
   - Side cards: `filter: blur(3px)` ← REDUCED from 8px

2. **ALL 5 ITEMS ACCESSIBLE:**
   - Infinite scroll: Project 5 ← Project 1 → Project 2 → Project 3 → Project 4 → Project 5 ← Project 1...
   - Left arrow: Moves carousel right (shows previous project)
   - Right arrow: Moves carousel left (shows next project)
   - Swipe gestures: Touch-enabled for mobile

3. **START WITH 1 ITEM CENTERED:**
   - Initial state: Project 1 in center (focused)
   - Project 5 visible on left (blurred 3px)
   - Project 2 visible on right (blurred 3px)

**Card Sizing:**
- Focused (center): 500×600px
- Blurred (sides): 350×500px (more visible than before)
- Gap: 40px between cards

**Animation:**
```css
.portfolio-card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-card.focused {
  filter: blur(0);
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 24px 64px rgba(255, 255, 255, 0.3);
  z-index: 10;
}

.portfolio-card.blurred {
  filter: blur(3px); /* REDUCED from 8px */
  opacity: 0.7; /* INCREASED from 0.5 for better visibility */
  transform: scale(0.9);
  z-index: 5;
}
```

**Navigation:**
- Arrow buttons: 60×60px, curved box style (border-radius 30px)
- Position: Top corners of carousel container
- Carousel dots: Below carousel, 12px diameter, 20px spacing
- Active dot: Earth-tone accent color, inactive: gray

**5 Portfolio Items:**
1. Seshan Intelligence
2. Seshan App
3. Free Tools
4. AI Comics
5. (Future project - TBD)

---

## 🎴 PAGE BREAK CARD 3

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                    ╔═══════════════════╗                   │
│                    ║      About        ║                   │
│                    ╚═══════════════════╝                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 👤 SECTION 4: ABOUT SECTION

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌────────────────────┐     ┌───────────────────────────┐ │
│   │                    │     │  ABOUT ME                 │ │
│   │                    │     │                           │ │
│   │  [Sunil.jpg]       │     │  I help organizations     │ │
│   │                    │     │  navigate the complex     │ │
│   │  600×500px         │     │  landscape of artificial  │ │
│   │  (Professional     │     │  intelligence...          │ │
│   │   Photo)           │     │                           │ │
│   │                    │     │  [2-3 paragraphs of text] │ │
│   │                    │     │                           │ │
│   │                    │     │  ┌──────┐ ┌──────┐ ┌──────┐
│   └────────────────────┘     │  │ 20+  │ │ 10+  │ │ 50+  │
│                              │  │Projects│Years│Clients│
│                              │  └──────┘ └──────┘ └──────┘
│                              └───────────────────────────┘ │
│        (LEFT 45%)                   (RIGHT 55%)            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### About Section Specifications:

**Layout:**
- Two-column: Left (image) 45%, Right (content) 55%
- Gap: 80px
- Max-width: 1400px, centered
- Padding: 100px vertical

**Left Column (Image):**
- File: `/public/images/Sunil.jpg`
- Size: 600×500px
- Border Radius: 12px
- Border: 4px solid earth-tone accent
- Effect: Subtle shadow on hover

**Right Column (Content):**
- Heading: "About Me" (48px, bold)
- Text: 18px, line-height 1.8, max-width 600px
- Color: Text primary

**Stats Cards (Bottom of Right Column):**
- Layout: 3 cards in row, 150×120px each
- Gap: 20px between cards
- Background: Dark (#1a1a1a)
- Border: 2px solid, rotating earth-tones
- Border Radius: 12px

**Stat Card Content:**
```
┌──────────────┐
│     20+      │ ← Number (36px, earth-tone color)
│   Projects   │ ← Label (14px, light gray)
└──────────────┘
```

---

## 📧 SECTION 5: FOOTER

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│   ABOUT      │   LEARNING   │  PORTFOLIO   │   CONNECT    │
│              │              │              │              │
│  • Mission   │  • History   │  • Seshan    │  • LinkedIn  │
│  • Team      │  • Foundation│  • App       │  • Twitter   │
│  • Contact   │  • Implement │  • Tools     │  • Email     │
│              │  • Risk      │  • Comics    │              │
│              │  • Legal     │              │              │
└──────────────┴──────────────┴──────────────┴──────────────┘

                  © 2024 Sunil Iyer. All rights reserved.
```

### Footer Specifications:

**Layout:**
- 4-column grid
- Column width: 25% each
- Gap: 40px
- Padding: 80px vertical
- Background: Black (#000000)
- Text: Light gray (#999999)

**Column Headings:**
- Font Size: 18px
- Font Weight: Bold
- Color: White (#FFFFFF)
- Margin Bottom: 24px

**Links:**
- Font Size: 16px
- Color: Light gray (#999999)
- Hover: White (#FFFFFF) + slight indent
- Line Height: 2.0 (generous spacing)

**Copyright:**
- Text Align: Center
- Font Size: 14px
- Opacity: 60%
- Margin Top: 60px

---

## 🎨 THEME TOGGLE (Optional Future Enhancement)

**Current:** Dark mode default (black background)
**Future:** Toggle in hamburger menu to switch light/dark

Light mode colors:
- Background: White (#FFFFFF)
- Text: Dark gray (#333333)
- Cards: Light gray (#F5F5F5)
- Accents: Darker earth tones

---

## 📱 RESPONSIVE BREAKPOINTS

### Desktop (1440px+)
- Full layout as designed
- Portfolio carousel: 3 visible (center + 2 sides)
- Learning paths: Side-by-side (50/50)

### Tablet (768px - 1439px)
- Portfolio carousel: 2 visible (center + 1 side)
- Learning paths: Stack on smaller tablets
- Footer: 2×2 grid

### Mobile (<768px)
- All sections stack vertically
- Portfolio carousel: 1 visible (swipe to see others)
- Learning paths: Image on top, text below
- Hamburger menu: Full-screen overlay
- Footer: 1 column, accordion style

---

## ✅ IMPLEMENTATION CHECKLIST

### Phase 1: Hero & Navigation
- [ ] Video background integration (`background.webm`)
- [ ] Color extraction from video → apply to "Sunil Iyer" text
- [ ] AI + Word ticker animation (0.5s per word)
- [ ] Curved black box for words (60px border-radius)
- [ ] Hamburger menu with curved box styling
- [ ] Slide-out menu from right (400px, theme-aware transparency)

### Phase 2: Content Sections
- [ ] Page break cards (gradient, curved, centered text)
- [ ] Learning paths - Rayo "Project Details" layout
- [ ] Image jump animation (3s interval)
- [ ] Portfolio carousel with REDUCED blur (3px)
- [ ] Infinite scroll (all 5 items accessible)
- [ ] About section (two-column, stats cards)
- [ ] Footer (4-column grid)

### Phase 3: Interactions
- [ ] Carousel navigation (arrows + dots + swipe)
- [ ] Menu slide-in/out animation
- [ ] Hover effects (cards lift, links highlight)
- [ ] Smooth scroll between sections

### Phase 4: Responsive
- [ ] Tablet breakpoints (768px)
- [ ] Mobile breakpoints (<768px)
- [ ] Touch gestures (swipe carousel)
- [ ] Menu accordion (mobile footer)

### Phase 5: Performance
- [ ] Video optimization (preload, fallback image)
- [ ] Lazy load images (portfolio, learning paths)
- [ ] Code splitting
- [ ] Lighthouse audit (>90 performance score)

---

## 🖼️ IMAGE GENERATION TASKS

**5 Learning Path Images (Generate with AI image tool):**

1. `history-context.jpg` - Timeline visualization
2. `foundation.jpg` - Neural network abstract
3. `implementation.jpg` - Developer workspace isometric
4. `risk-ethics.jpg` - Balanced scale symbolism
5. `legal-compliance.jpg` - Legal building + digital elements

**Page Break Card Images:**
- Option 1: Use gradient backgrounds (no images)
- Option 2: Abstract geometric patterns
- Option 3: Blurred bokeh backgrounds

**Portfolio Project Images:**
- Seshan Intelligence: Screenshot or mockup
- Seshan App: Mobile app mockup
- Free Tools: Tool icons grid
- AI Comics: Sample comic panels

**About Section:**
- `Sunil.jpg` - Professional headshot (600×500px, portrait orientation)

---

**STATUS:** Ready for implementation after approval

**NEXT STEPS:**
1. Review this wireframe with Sunil
2. Generate learning path images
3. Implement hero section with video + color animation
4. Build out learning paths (Rayo style)
5. Fix portfolio carousel (reduce blur, enable all 5 items)
6. Add page break cards
7. Complete about + footer sections

---

*Wireframe V3 - December 20, 2024*
*Designer: Sally (UX Designer) | Client: Sunil Iyer*
