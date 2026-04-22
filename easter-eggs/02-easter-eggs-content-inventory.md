# Easter Eggs Page — Content Inventory

**Site:** suniliyer.ca  
**Version:** 2.0 (Curated & Approved)  
**Date:** February 2026  
**Series:** Document 2 of 3  
**Total items:** 29 approved for showcase

> This document contains the complete curated easter egg catalogue with drafted Hint and Full Reveal copy for all 29 items. Supplements Document 1 (Feature Specification).

---

## Decision Summary

| # | Easter Egg | Tier | Decision |
|---|---|---|---|
| 1 | 404 Page — AI Hallucination Satire | Tier 1 | ✅ Showcase |
| 2 | 3D Flip Cards — Journey Page | Tier 1 | ✅ Showcase |
| 3 | Initials Photo Reveal — SVI mask | Tier 1 | ✅ Showcase |
| 4 | Neural Map Mega Menu | Tier 1 | ✅ Showcase |
| 5 | Hello! Splash Screen | Tier 1 | ✅ Showcase |
| 6 | Behind the Scenes Bookshelf | Tier 1 | ✅ Showcase |
| 7 | Corkboard Article Clusters | Tier 1 | ✅ Showcase |
| 8 | The Intentional Image System | Tier 1 | ✅ Showcase |
| 9 | Coming Soon — Pancake Flip | Tier 1 | ✅ Showcase |
| 10 | Guru — Live AI Chat Agent | Tier 1 | ✅ Showcase |
| 11 | The Dharma Wheel — Krishna's Chakra | Tier 1 | ✅ Showcase |
| 12 | Page-Specific Colour Themes | Tier 2 | ✅ Showcase |
| 13 | Pulse-Glow Timeline Dots | Tier 2 | ✅ Showcase |
| 14 | Moon/Sun Theme Toggle | Tier 2 | ✅ Showcase (low priority) |
| 15 | Creative Works Bento Grid | Tier 2 | ✅ Showcase |
| 16 | Hero Title as AI Concept Taxonomy | Tier 2 | ✅ Showcase |
| 17 | Lightbox Modal + Photo Panel Grouping | Tier 2 | ✅ Showcase |
| 18 | Category Filtering + Staggered Entrance | Tier 2 | ✅ Showcase |
| 19 | Scroll Indicators & Bounce Animations | Tier 2 | ✅ Showcase |
| 20 | Break Cards Between Sections | Tier 2 | ✅ Showcase |
| 21 | Triple-Layer Glow on Card Arrows | Tier 2 | ✅ Showcase (low priority) |
| 22 | Funnel Sans & Funnel Display Font Pairing | Tier 2 | ✅ Showcase |
| 23 | localStorage & Opt-in Cookie System | Tier 3 | ✅ Showcase |
| 24 | Framer Motion Spring Animations | Tier 3 | ✅ Showcase |
| 25 | Corkboard Article Clusters (detailed) | Tier 1 | ✅ Showcase |
| 26 | Colour Theme Narrative (full site) | Tier 2 | ✅ Showcase |
| 27 | Theme Switch Easter Egg | Special | ✅ Showcase |
| 28 | Completion Egg | Special | ✅ Showcase |
| 29 | Sunil/Linus Name Flip | Tier 1 | ✅ Showcase |
| — | 3D Carousel | Removed | ❌ Replaced by accordion |
| — | Glassmorphism Architecture | Tier 3 | ❌ Keep Hidden |
| — | Theme System Architecture | Tier 3 | ❌ Keep Hidden |
| — | SVG Masking & Grain Filter | Tier 3 | ❌ Keep Hidden |
| — | Learning Path Link Hover | Tier 2 | ❌ Keep Hidden |
| — | Media Type Badges | Tier 2 | ❌ Keep Hidden |
| — | Custom Scrollbar | Tier 2 | ❌ Keep Hidden |
| — | Footer Tagline | Tier 2 | ❌ Keep Hidden |

---

## Tier 1 — Major Discoveries

*High-impact interactions and features that most visitors miss entirely.*

---

### #1 — 404 Page — AI Hallucination Satire
**Location:** Any URL that doesn't exist on suniliyer.ca  
**Tier:** Major Discovery

**Full Reveal:**  
The 404 page rotates through 6 different HTTP error codes (503, 404, 403, 504, 304, 405) every 10 seconds, with slot machine digit animations for each transition. Each error state has a unique AI-generated response that is confidently, absurdly wrong — satirising AI hallucination. A scrolling ticker tape runs along the bottom with messages like "CONFIDENCE: 100%" and "CITATIONS VERIFIED: 0 of 7". The page includes a formal Hallucination Notice admitting the AI cannot agree on what error occurred. The comedy is recursive: the page IS the error it describes. Two coloured background blobs shift with each error state — visual chaos matching AI confusion.

**Visit link:** Try navigating to any broken URL

---

### #2 — 3D Flip Cards — Work Experience Details
**Location:** `/journey` — Career Timeline  
**Tier:** Major Discovery

**Full Reveal:**  
On desktop, hovering a role card triggers a Skills Overlay — the company logo fades to black with backdrop blur, revealing up to 6 golden-badged skills. Clicking flips the card 180 degrees via Framer Motion spring physics (rotateY: 180deg, preserve-3d, backface-hidden) to reveal a scrollable achievements list with full markdown rendering. On mobile, the interaction model changes entirely: tapping shows the detailed achievements directly, and flipping back reveals the key skills. The same flip pattern applies to Education and Certification cards. Most visitors see the front and move on.

**Visit link:** `/journey`

---

### #3 — Initials Photo Reveal
**Location:** `/` — Home Page, About Me section  
**Tier:** Major Discovery

**Full Reveal:**  
The About Me section shows "SVI" initials as an SVG text mask — the photo behind is only visible through the letter shapes, combined with a fractal noise grain texture (feTurbulence SVG filter) giving it a film photography aesthetic. A subtle pulse animation on "Hover to reveal" runs on a 2-second infinite loop. On hover, the initials scale to 380px while fading out, and the full photo fades in over 0.6 seconds with a 0.3-second delay — a choreographed multi-stage cascade. The border stroke thickens and brightens, and the drop shadow intensifies from 10px to 60px blur.

**Visit link:** `/` — scroll to About Me

---

### #4 — The Neural Map Mega Menu
**Location:** Global — hamburger icon, top right on every page  
**Tier:** Major Discovery

**Full Reveal:**  
The hamburger menu is branded as the "Neural Map" with tagline "Every path on this site" — positioning site navigation as neural pathways. It opens as a 5-column glassmorphism panel (backdrop-filter: blur(28px) saturate(200%)) colour-coded by section: Home in purple, Learning Paths in green, Portfolio in amber, Inner Monologue in pink, Connect in cyan. Menu items slide 3px right on hover. The Resume item has a custom purple gradient document icon — distinct from every other item in the menu. The footer reads "Built with AI · Powered by curiosity" — a manifesto disguised as a footer line.

**Visit link:** Open the hamburger menu on any page

---

### #5 — The Hello! Splash Screen
**Location:** `/` — Home Page, first visit only  
**Tier:** Major Discovery

**Full Reveal:**  
On a visitor's first visit, a full-screen black overlay displays "Hello!" in 120px Funnel Display typeface. The text blinks 10 times at 0.35 seconds per cycle — precisely calibrated to capture attention without overstaying. After 1.75 seconds, the overlay exits with a curved bottom border (borderBottomLeftRadius: 50%) creating an unexpected swooping departure. A localStorage flag ensures this greeting never appears again for that visitor. The duration, blink count, and curved exit are all deliberate decisions — the precision is the point.

**Visit link:** Clear localStorage and visit `/`

---

### #6 — Behind the Scenes Bookshelf
**Location:** `/behind-the-scenes`  
**Tier:** Major Discovery

**Full Reveal:**  
The Behind the Scenes page presents nine portfolio origin stories as physical books on a wooden shelf. Each book lifts 14px off the shelf on hover with a drop shadow that intensifies to simulate real depth — skeuomorphic physics in a digital space. Each book is a project journey: not what was built, but the thinking, the process, the learning behind it. The page subtitle reads "Nine projects, nine journeys" — deliberately framing a work history as narrative rather than achievement list.

**Visit link:** `/behind-the-scenes`

---

### #7 — Corkboard Article Clusters
**Location:** `/articles` — Thoughts & Writings  
**Tier:** Major Discovery

**Full Reveal:**  
Articles are grouped into clusters by category (Builder, Governance, Futurist, Human & Leadership) and displayed as stacked cards pinned to a corkboard — multiple articles layered behind each other under a single pin. Tapping a cluster fans the articles open like pinned pages hanging from that pin, revealing each piece underneath. The page subtitle sets the expectation directly: "Ideas pinned to the board — tap a cluster to fan it out." The chevron (▾) on each category label is the only hint that something is waiting to open.

**Visit link:** `/articles`

---

### #8 — The Intentional Image System
**Location:** Everywhere — every page of the site  
**Tier:** Major Discovery

**Full Reveal:**  
Every image across suniliyer.ca is AI-generated through careful, specific prompting — crafted to visually represent the exact content it accompanies, not just look decorative. The Gita page images are the deepest example: each one is the result of extended conversations exploring the philosophical and visual dimensions of specific Bhagavad Gita moments. The site break images between home page sections were each individually considered for emotional tone. The 42 Learning Path page images were crafted to speak to their specific topics. The one exception: the photography on Creative Works, which Sunil shot himself.

**Visit link:** `/gita` for the deepest example

---

### #9 — Coming Soon — Pancake Flip Animation
**Location:** `/coming-soon` — Unreleased project pages  
**Tier:** Major Discovery

**Full Reveal:**  
The Coming Soon page features a pancake flip animation as its central visual — a playful, physical metaphor for work in progress. Rather than a generic "under construction" placeholder, the page commits fully to the cooking metaphor: something is in the pan, heat is being applied, and patience is required. Discovered only by navigating to URLs for projects not yet released.

**Visit link:** `/coming-soon`

---

### #10 — Guru — The Live AI Chat Agent
**Location:** `/gita` — Bhagavad Gita page
**Tier:** Major Discovery

**Full Reveal:**
Guru is an SVG robot avatar with the ॐ symbol that bounces on the Gita page — appearing to be a decorative character element. Clicking it opens a fully functional AI chat agent powered by the Claude API, trained on the Bhagavad Gita. Guru greets visitors with "Namaste! 🙏" and offers suggestion chips (What is dharma? Overcoming fear, Karma yoga, Inner peace) to guide conversation. It is the only live agent on the site — the other four agents (SIU, Banker, Matchmaker, Editor) run as pre-computed demonstrations. Most visitors admire the character without ever realising it can talk back.

**Visit link:** `/gita`

---

### #11 — The Dharma Wheel — Krishna's Chakra
**Location:** `/gita` — Bhagavad Gita page  
**Tier:** Major Discovery

**Full Reveal:**  
The central UI of the Gita page is designed after Krishna's Sudarshana Chakra — the cosmic disc that represents divine order. The wheel contains 10 segments, each representing one of the Gita's most transformative moments. A pulsing animation traces across the chakra continuously, giving it a meditative, living quality. Each moment unfolds across four progressive layers: The Verse (the original text), The Scene (narrative context), The Inner Meaning (philosophical interpretation), and For You Today (bridge to the visitor's present life) — taking the visitor from 5,000-year-old Sanskrit to personal relevance in four steps. On mobile, the wheel renders as a half-wheel.

**Visit link:** `/gita`

---

### #29 — Sunil / Linus — The Name Inside the Name
**Location:** Everywhere — it's in the name itself  
**Tier:** Major Discovery

**Full Reveal:**  
Sunil — look at it again. Flip it. S-u-n-i-l reversed is L-i-n-u-s. Linus. Hidden in the name since birth. Linus as in Linus Torvalds, father of Linux — the open source operating system that powers most of the internet. Or Linus from Peanuts, carrying his security blanket with quiet confidence. Either reading is charming. It's the kind of detail that makes someone stop and say "wait... did he know that?" On the garden page, it's carved into the oak tree trunk — initials in wood, the oldest way humans leave their mark.

**Visit link:** You're already there

---

## Tier 2 — Subtle Craftsmanship

*Details that reward attention. Visitors feel these without consciously noticing them.*

---

### #12 — Page-Specific Colour Themes — A Site-Wide Narrative
**Location:** Every major page and all 42 Learning Path pages  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
Every major page has a deliberate custom colour palette. The Mortgage Calculator uses earthy terracotta (brick red #ad2e24, warm cream #fef7f4) — grounded like the physical act of buying a home. The Journey page uses antique gold and bronze (#B8935A, #D4A574) — premium and refined for a resume context. Creative Works uses a six-colour Dusty Rose palette — a complete artistic gallery aesthetic. Across the 42 Learning Path pages, a colour narrative unfolds: History in earthy browns, Terminology in earthy gold, Responsibility in earthy green, Risk in earthy rose, and Future breaking into vibrant greens and yellows. The earthy base keeps all categories connected; the accent colour shifts the emotional register. Most visitors feel the difference. Almost none notice why.

**Visit link:** Compare `/journey` with `/creative-works`

---

### #13 — Pulse-Glow Timeline Dots
**Location:** `/journey` — Career Timeline  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
Each position marker on the Journey page timeline is a 5x5px golden circle running an infinite 2-second pulse-glow animation. At the midpoint of each cycle, the dot scales to 1.1x and emits an expanding golden glow (box-shadow: 0 0 20px 8px rgba(212, 165, 116, 0.6)). The animation uses the journey-accent-primary CSS custom property, keeping it theme-aware across light and dark modes. Visible only on desktop — hidden on mobile for a cleaner layout. The timeline feels static. It isn't.

**Visit link:** `/journey`

---

### #14 — Moon/Sun Theme Toggle
**Location:** Global — top navigation bar  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
The theme toggle is an 88px pill-shaped slider with a moon that physically slides across on toggle. The crescent moon illusion is created with a pure CSS inset box-shadow (box-shadow: inset 10px -4px) — no SVG, no image, just mathematics simulating the shadow of a sphere. The transition is 0.3 seconds with smooth easing. This is a mechanical toggle, not just an icon click.

**Visit link:** Toggle the theme from any page

---

### #15 — Creative Works Bento Grid
**Location:** `/creative-works`  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
The Creative Works page uses a dynamic bento grid where card sizes are semantically meaningful: large (2x2) for featured pieces, wide (2x1) for landscape, tall (1x2) for portrait, full (3x1) for panoramic. Poem and quote cards are dynamically sized by text length — a calculation determining row span to prevent overflow. Photo panels group similar themed images together: Photography Collection (5 frames), AI Evolution (4 concepts), Gita Visions (6 images) — each photo individually framed in a polaroid-style presentation with independent hover effects on each photo within the panel.

**Visit link:** `/creative-works`

---

### #16 — Hero Title as AI Concept Taxonomy
**Location:** `/` — Home Page hero section  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
"Vibe, [rotating word] AI + a little me" — the rotating words are not random action verbs. Each one is a different dimension of what AI can be and do: building, learning, exploring, creating, discovering. Together they form a living taxonomy of AI's possibilities, cycling continuously. "Vibe" leads with human intuition. The rotating words assert agency and breadth. "AI" is acknowledged openly. "+ a little me" is deliberately humble but assertive. The entire construction negotiates identity in an AI age: the human drives, AI enables, and the combination is something neither could produce alone.

**Visit link:** `/`

---

### #17 — Lightbox Modal & Photo Panel Grouping
**Location:** `/creative-works`  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
Clicking any card in the Creative Works gallery expands it into a full lightbox — YouTube embed, video player, or full text depending on content type. The entrance is a slide-up animation with blur overlay; ESC key closes. Photo panel cards are a special case: similar themed images are grouped into a single card (Photography Collection, AI Evolution, Gita Visions), each photo individually framed. Clicking the panel opens all images together in the lightbox, presented as a curated set rather than isolated images.

**Visit link:** `/creative-works`

---

### #18 — Category Filtering with Staggered Entrance
**Location:** `/creative-works` and `/articles`  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
The Creative Works filter bar (Everything, Videos, Quotes & Poems, AI Art, Photography) shows a live item count badge on the active filter. When switching categories, cards don't appear all at once — they animate in with a staggered fadeInUp, each card entering slightly after the previous one, creating a cascade effect. The same staggered entrance logic applies on the Articles page when clusters fan open.

**Visit link:** `/creative-works`

---

### #19 — Scroll Indicators & Bounce Animations
**Location:** `/` — Home Page, between every section  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
A bouncing arrow with "Scroll for more" text runs on a 2-second infinite bounce in the hero section. At the bottom of each content section, a vertical line with a pulse animation appears alongside "Scroll" text — a gentle, persistent nudge. The site never assumes you'll keep going. It always invites you to. The scroll indicators aren't decorative — they're the site being a considerate host.

**Visit link:** `/`

---

### #20 — Break Cards Between Sections
**Location:** `/` — Home Page  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
Large full-width image cards appear between content sections on the home page, sliding up as you scroll past each section boundary — visual rewards for continuing. Each break card image was individually crafted through deliberate AI prompting to match the emotional tone of the content it bridges. They function as breathing room and as cues: you've finished one chapter, here's a moment before the next.

**Visit link:** `/`

---

### #21 — Triple-Layer Glow on Card Arrow Buttons
**Location:** Multiple pages — any card with an arrow button  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
Card arrow buttons scale to 1.1x on hover and emit a three-layer golden aura: box-shadows at 20px, 40px, and 60px blur with a bronze/gold colour (rgba(147, 102, 57)). The effect is deliberately excessive — three concentric glow rings that make a small button feel premium and weighty. Most hover effects are subtle. This one is not.

**Visit link:** Hover any card arrow button

---

### #22 — Funnel Sans & Funnel Display — Custom Font Pairing
**Location:** Global — every page  
**Tier:** Subtle Craftsmanship

**Full Reveal:**  
The site uses Funnel Sans for body text and Funnel Display for headings — not system fonts, not Google's most-used defaults. The pairing creates a distinct typographic voice: Funnel Display brings confident, impactful headings while Funnel Sans keeps body text clean and readable. Most visitors won't name the fonts. They'll just feel the difference between this site and a generic portfolio.

**Visit link:** Any page

---

## Tier 3 — Under the Hood

*Technical achievements for developers and AI. Fully described for AI readability.*

---

### #23 — localStorage & Opt-in Cookie System
**Location:** Global  
**Tier:** Under the Hood

**Full Reveal:**  
localStorage is used for exactly two decisions: the splash screen flag (splashScreenShown) ensuring the Hello! greeting fires only on first visit, and the theme preference persisting across sessions. No tracking cookies, no analytics by default. Analytics only activates through an explicit opt-in cookie triggered when a user clicks Accept — a deliberate minimal footprint philosophy. The site collects as little as possible and is transparent about what it collects.

**Visit link:** Any page — check the cookie banner

---

### #24 — Framer Motion Spring Animations
**Location:** `/journey` — 3D Flip Cards  
**Tier:** Under the Hood

**Full Reveal:**  
The 3D flip cards use Framer Motion's spring animation system rather than CSS transitions. Spring physics — stiffness, damping, mass — create a slight overshoot and settle behaviour that makes the flip feel like a physical card being turned rather than a mechanical rotation. The flip uses rotateY from 0 to 180 degrees with preserve-3d transform style and backface-hidden on both faces. Achievement content inside the back face renders markdown, enabling rich formatted text within the card itself.

**Visit link:** `/journey` — click any role card

---

## Editorial Notes

| Item | Change |
|---|---|
| SVI correction | All references to "SI" initials updated to "SVI" throughout |
| Flip card interaction | Mobile and desktop behaviours now documented separately in #2 |
| Colour themes | Expanded from 3 pages to full site-wide narrative including all 42 Learning Path pages |
| Hero title | Reframed from action verbs to AI concept taxonomy |
| localStorage | Updated to include opt-in analytics cookie detail |
| Image system | Elevated to Tier 1 with Gita images as deepest example |
| Purple Resume icon | Folded into Neural Map (#4) entry |
| Carousel | Removed — replaced by accordion |
| Sunil/Linus | Added as #29 — carved into oak tree trunk in garden |

---

*suniliyer.ca · Built with AI · Powered by curiosity*
