# AIDefence Homepage Wireframe V4 - Complete Specification

**Version:** 4.0
**Date:** 2025-12-20
**Status:** Ready for UX Review
**Wireframe File:** `/Volumes/External/aidefence/docs/homepage-wireframe-v4-cards.html`
**Word Configuration:** `/Volumes/External/aidefence/docs/words.js`

---

## Overview

This specification documents the complete homepage wireframe built on the Rayo template card-based structure. The design features:
- Consistent 800px card heights
- 1600px max width to accommodate 3-item carousels
- Transparent backgrounds with theme-aware styling
- Animated word ticker with bounce effect
- Light/dark theme toggle
- All content organized in centered cards with edge padding

---

## 1. Layout Structure

### Card Container System
- **Max Width:** 1920px (increased by 20% from 1600px for V5 - responsive)
- **Margin:** 0 auto 300px (centered with dramatic spacing for "coming up" effect)
- **First container:** Additional 80px top margin (for header clearance)
- **Padding:** 0 60px (edge padding - desktop), 40px (tablet), 20px (mobile)
- **All Cards Height:** 960px (20% larger - increased from 800px)
- **Responsive:** 90% on tablet (768px-1024px), 100% on mobile (< 768px)

### Color Theme Variables

**Light Theme (default):**
```css
--bg-primary: #ffffff
--bg-secondary: #f8f8f8
--text-primary: #000000
--text-secondary: #666666
--border-color: #dddddd
--card-bg: rgba(255, 255, 255, 0.95)
--shadow-color: rgba(0, 0, 0, 0.1)
```

**Dark Theme:**
```css
--bg-primary: #1a1a1a
--bg-secondary: #2a2a2a
--text-primary: #ffffff
--text-secondary: #cccccc
--border-color: #444444
--card-bg: rgba(26, 26, 26, 0.95)
--shadow-color: rgba(255, 255, 255, 0.1)
```

**UX Theme Colors (from specification):**
- Primary: #333d29 (dark olive green)
- Secondary: #936639 (brown/tan)
- Tertiary: #414833 (olive green)

---

## 2. Fixed UI Elements

### Theme Toggle Button
- **Position:** Fixed, top: 40px, right: 125px
- **Size:** 60px diameter circle
- **Background:** Semi-transparent (adapts to theme)
- **Icon:** ☀️ (light mode) / 🌙 (dark mode)
- **Functionality:** Toggles between light/dark themes, persists to localStorage
- **Z-index:** 1000

### Hamburger Menu
- **Position:** Fixed, top: 40px, right: 60px
- **Size:** 60px diameter circle
- **Background:** Semi-transparent (adapts to theme)
- **Structure:** 3 horizontal bars (30px width, 3px height, #333d29 color)
- **Gap:** 6px between bars
- **Z-index:** 1000

**Note:** Both buttons positioned outside card edges to avoid overlap

---

## 3. Hero Card (Card 1)

### Structure
- **Height:** 800px
- **Background:** Video background (background.webm) with 0.3 opacity overlay
- **Content Alignment:** Left-aligned, padding-left: 60px

### Logo "Sunil Iyer"
- **Font Size:** 76px
- **Font Weight:** Bold
- **Color Animation:** Cycles through UX theme colors every 0.3s
  - #333d29 → #936639 → #414833
  - **Design Intent:** Fast cycling compensates for dynamic video background; provides visual interest regardless of video frame
- **Margin Bottom:** 30px

### Word Ticker Container
- **Layout:** Flexbox horizontal
- **Alignment:** Left-aligned with logo
- **Gap:** 21px between word box and "AI"

### Word Box (Black Curved Box)
- **Dimensions:** 364px width × 84px height
- **Background:** #000000 (solid black)
- **Border Radius:** 56px (fully curved)
- **Padding:** 21px 42px
- **Overflow:** Hidden (for animation)

### Word Text (Inside Box)
- **Font Size:** 40px
- **Color:** White
- **Font Weight:** 500
- **Animation:** Slide-up with bounce effect
  - Duration: 0.6s slide in, 0.5s slide out
  - Easing: cubic-bezier with bounce (1.56 overshoot)
  - Interval: Changes every 0.5 seconds
  - Effect: Words slide up from bottom, bounce slightly, then settle
- **Word Source:** `/Volumes/External/aidefence/docs/words.js`

### Word List (Configurable)
Current words (editable in words.js):
1. Artificial
2. Adversarial
3. Agentic
4. Open
5. Claude
6. Bias
7. Responsible
8. Safe

### "AI" Text
- **Font Size:** 50px
- **Font Weight:** Bold
- **Color Animation:** Matches logo (same theme color cycle)

### Bounce Animation Details
**Slide In (new word appearing):**
- 0%: Starts 120% below (translateY(120%))
- 60%: Overshoots to -5% above target (bounce effect)
- 80%: Settles back to 2% below
- 100%: Final position at 0%

**Slide Out (current word leaving):**
- 0%: At position 0
- 100%: Exits to -120% above (translateY(-120%))

---

## 4. Learning Paths Break Card

- **Height:** 800px
- **Background Image:** `/images/PageBreak 1.png`
- **Background Size:** Cover, centered
- **Dark Overlay:** rgba(0, 0, 0, 0.3) for text readability
- **Text:** "Learning Paths" - 72px, white, bold, centered
- **Shadow:** 0 8px 32px (ONLY card with shadow)

---

## 5. Learning Paths Card (Carousel)

### Structure
- **Height:** 800px
- **Background:** Transparent
- **Layout:** Carousel with 3 visible items

### Carousel Items
**Side Items (blurred):**
- Width: 380px
- Opacity: 0.7
- Filter: blur(3px)
- Transform: scale(0.9)

**Center Item (focused):**
- Width: 580px
- Opacity: 1
- Filter: blur(0)
- Transform: scale(1)

### Path Card Content
- **Image Height:** 350px (top of card)
- **Details Padding:** 40px
- **Project Details Header:** 14px, uppercase, 2px letter-spacing
- **Path Number:** 16px, #333d29
- **Path Title:** 36px, bold
- **Path Description:** 16px, line-height: 1.6
- **CTA Link:** "Explore Path →" - #936639, no underline

### Carousel Controls
- **Arrows:** 60px circles, transparent background, positioned left/right 20px
- **Dots:** 5 dots (one per path), 14px diameter, #ccc (inactive), #936639 (active)
- **Navigation:** Left/Right arrows cycle through 5 learning paths

### Learning Paths Data
1. History & Context
2. Foundation
3. Implementation
4. Risk & Ethics
5. Legal & Compliance

---

## 6. Portfolio Break Card

- **Height:** 800px
- **Background Image:** `/images/PageBreak 2.png`
- **Background Size:** Cover, centered
- **Dark Overlay:** rgba(0, 0, 0, 0.3)
- **Text:** "Portfolio" - 72px, white, bold, centered
- **Shadow:** 0 8px 32px (ONLY card with shadow)

---

## 7. Portfolio Card (Carousel)

### Structure
- **Height:** 800px
- **Background:** Transparent
- **Layout:** Identical carousel structure to Learning Paths

### Carousel Items
**Same dimensions as Learning Paths:**
- Side items: 380px width, 0.7 opacity, 3px blur
- Center item: 580px width, full opacity, sharp

### Portfolio Item Content
- **Image Height:** 300px
- **Content Padding:** 30px
- **Title:** 24px, bold
- **Description:** 16px, line-height: 1.6
- **Link:** "View Project →" - #936639

### Carousel Controls
- Same as Learning Paths carousel
- 5 dots for 5 projects

### Portfolio Projects
1. Seshan Intelligence
2. Seshan App
3. (Project 3)
4. (Project 4)
5. AI Comics

---

## 8. About Break Card

- **Height:** 800px
- **Background Image:** `/images/Page Break 3.png`
- **Background Size:** Cover, centered
- **Dark Overlay:** rgba(0, 0, 0, 0.3)
- **Text:** "About" - 72px, white, bold, centered
- **Shadow:** 0 8px 32px (ONLY card with shadow)

---

## 9. About Card

### Structure
- **Height:** 800px
- **Background:** Transparent
- **Layout:** Two-column grid (480px + 1fr)
- **Gap:** 80px

### Left Column - Image
- **Image:** `/images/Sunil.jpg`
- **Border Radius:** 16px
- **No Border** (removed earth-tone border)
- **No Shadow**

### Right Column - Content
- **Heading:** "About Me" - 48px, bold
- **Paragraphs:** 18px, line-height: 1.8
- **Margin Bottom:** 40px per paragraph

### Stats Row
**Layout:** 3 stat cards in flexbox
- **Gap:** 24px
- **Background:** var(--bg-secondary)
- **Padding:** 24px
- **Border Radius:** 12px
- **No Borders** (removed colored borders)

**Stat Cards:**
1. **20+ Projects** - Color: #333d29
2. **10+ Years** - Color: #936639
3. **50+ Clients** - Color: #414833

**Stat Number:** 42px, bold
**Stat Label:** 16px, secondary text color

---

## 10. Footer Card

### Structure
- **Height:** 800px
- **Background:** #000000 (solid black, darker in dark mode: #0a0a0a)
- **Padding:** 80px 60px
- **Color:** Theme-aware secondary text

### Footer Grid
- **Layout:** 4 equal columns (repeat(4, 1fr))
- **Gap:** 60px
- **Margin Bottom:** 60px

### Footer Columns
1. **About** - Mission, Team, Contact
2. **Learning** - All 5 learning paths
3. **Portfolio** - Project links
4. **Connect** - Social media links

**Column Heading:** 20px, white, bold, 24px margin-bottom
**Links:** 16px, #999999, hover to white

### Copyright
- **Text:** "© 2024 Sunil Iyer. All rights reserved."
- **Style:** Centered, 16px, 0.6 opacity
- **Border Top:** 1px solid #333333
- **Padding Top:** 40px

---

## 11. Design Rules & Constraints

### Backgrounds & Shadows
- ✅ **Break cards ONLY:** Have background images and box-shadow
- ❌ **All other cards:** Transparent backgrounds, NO shadows
- ❌ **Carousel items:** NO backgrounds, NO shadows
- ❌ **Carousel arrows:** Transparent, NO shadows
- ❌ **UI buttons:** NO shadows (theme toggle, hamburger)
- ❌ **About image:** NO shadow
- ❌ **Stat cards:** NO borders

### Sizing Consistency
- **All cards:** 800px height
- **Card container:** 1600px max-width
- **Edge padding:** 60px on all sides
- **No expanding elements:** All fixed dimensions

### Typography
- **Logo:** 76px
- **Break card text:** 72px
- **AI text:** 50px
- **Word box text:** 40px
- **Path titles:** 36px
- **About heading:** 48px
- **Stat numbers:** 42px

### Animations
- **Color cycling:** 0.3s infinite (3 theme colors)
- **Word ticker:** 0.5s interval with 0.6s bounce animation
- **Carousel blur:** 3px on side items
- **Theme transitions:** 0.3s ease

### Theme Toggle Behavior
- Persists preference to localStorage
- Smooth transitions (0.3s)
- Updates all CSS custom properties
- Icon changes: ☀️ ↔ 🌙

---

## 12. File Structure

```
/Volumes/External/aidefence/docs/
├── homepage-wireframe-v4-cards.html     # Main wireframe HTML
├── words.js                              # Word ticker configuration
└── homepage-wireframe-v4-specification.md # This document

/Volumes/External/aidefence/public/images/
├── background.webm                       # Hero video background
├── logo.jpg                              # Header logo
├── learningpath.png                      # Learning Paths break card background
├── portfolio.png                         # Portfolio break card background
├── aboutme.png                           # About break card background
├── Sunil.jpg                             # Profile image in About section
├── history-context.png                  # Learning path 1 carousel image
├── foundation.png                       # Learning path 2 carousel image
├── implementation.png                   # Learning path 3 carousel image
├── risk-ethics.png                      # Learning path 4 carousel image
└── legal-compliance.png                 # Learning path 5 carousel image
```

### ⚠️ IMPORTANT: Image Paths for Static HTML vs Next.js

**Current Implementation (Static HTML Wireframe):**
- Uses relative paths: `../public/images/filename.png`
- Required because HTML file is in `/docs/` folder
- Browser interprets paths relative to HTML file location

**Future Implementation (Next.js Production):**
- Will use absolute paths: `/images/filename.png`
- Next.js serves files from `/public/` as root-level assets
- The `/public/` prefix is removed in production URLs

**When converting wireframe to React/Next.js:**
1. Change all `../public/images/` to `/images/`
2. Move image files to remain in `/public/images/`
3. Next.js will automatically serve them at `/images/` URL

---

## 13. JavaScript Functionality

### Word Ticker Animation
- **File:** Inline in wireframe HTML + words.js
- **Mechanism:** DOM manipulation with animation classes
- **Timing:** setInterval at 500ms
- **Cleanup:** Removes old elements after animation completes (600ms)

### Theme Toggle
- **Function:** toggleTheme()
- **Storage:** localStorage.setItem('theme', 'light'|'dark')
- **Load:** DOMContentLoaded event reads saved preference
- **DOM Update:** data-theme attribute on body element

### Carousel Controls (Future)
- **Current:** Static HTML showing 3 items
- **Future:** JavaScript to rotate through all items
- **Arrows:** Left/Right navigation
- **Dots:** Direct access to specific items

---

## 14. Responsive Design (Implemented in V5)

**Current State:** Fully responsive across all devices

**Breakpoints:**
- **Desktop:** > 1024px - 1920px max-width, 3-item carousels, full sizing
- **Tablet:** 768px - 1024px - 90% max-width, reduced fonts, 2-item carousels
- **Mobile:** < 768px - 100% max-width, stacked layouts, single carousel items

**See:** `/docs/homepage-wireframe-v5-with-splash.html` for complete responsive implementation

---

## 15. Accessibility Considerations

### Current Implementation
- ✅ Semantic HTML structure
- ✅ Alt text on images with onerror fallbacks
- ✅ Theme toggle with persistent preference
- ✅ Keyboard-accessible buttons (cursor: pointer)

### Future Enhancements
- Add ARIA labels to carousel controls
- Add skip-to-content link
- Add ARIA live regions for word ticker
- Add keyboard navigation for carousel
- Add focus indicators
- Test with screen readers

---

## 16. Browser Compatibility

**Tested On:** Modern browsers (Chrome, Firefox, Safari, Edge)

**CSS Features Used:**
- CSS Custom Properties (CSS Variables)
- CSS Grid
- Flexbox
- CSS Animations & Keyframes
- CSS Transforms
- Cubic-bezier easing

**JavaScript Features:**
- ES6 const/let
- Arrow functions (in future implementation)
- Template literals
- DOM manipulation
- localStorage API
- setInterval

---

## 17. Performance Notes

### Optimizations Implemented
- Fixed-size containers (no layout shifts)
- CSS transforms for animations (GPU accelerated)
- Efficient DOM manipulation (removes old elements)
- Debounced animations (single interval timer)

### Future Optimizations
- Lazy load images below fold
- Compress video background
- Add loading states
- Implement intersection observer for carousels

---

## 18. Next Steps

### Immediate Actions
1. ✅ Add bounce animation to word ticker
2. ⏳ UX Designer review with Winston
3. ⏳ Document implementation

### Implementation Phase
1. Convert wireframe to React components
2. Integrate with Next.js routing
3. Add real portfolio/learning path data
4. Implement carousel functionality
5. Add keyboard navigation
6. Mobile responsive design
7. Performance testing
8. Accessibility audit

---

## 19. Change Log

### V4.0 (2025-12-20)
- ✅ Increased card width to 1600px for 3-item carousels
- ✅ Converted Learning Paths from grid to carousel
- ✅ Removed all borders/shadows except break cards
- ✅ Made backgrounds transparent with theme awareness
- ✅ Added theme toggle button (right: 125px)
- ✅ Implemented theme toggle functionality
- ✅ Fixed color animation to use UX theme colors
- ✅ Standardized all cards to 800px height
- ✅ Added slide-up animation for word ticker
- ✅ Created external words.js configuration file
- ✅ Fixed word box to 364px (no expansion)
- ✅ Repositioned logo left-aligned, closer to ticker
- ✅ Reduced all hero text sizes by 30%
- ✅ Adjusted theme toggle position (right: 125px)
- ✅ Added bounce effect to word ticker animation
- ✅ **CRITICAL FIX:** Updated all image paths from absolute (`/images/`) to relative (`../public/images/`) for static HTML viewing

### V3.0 (Previous)
- Card-based layout with Rayo structure
- Hero card with video background
- Page break cards with images
- Basic carousel structure

---

## 20. Credits & References

**Design System:** AIDefence UX Specification
**Template Inspiration:** Rayo NextJS Template
**Color Palette:** #333d29, #936639, #414833
**Typography:** System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
**Video Background:** background.webm

---

**End of Specification**
