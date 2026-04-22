# Easter Eggs Page — UI Design Specification

**Site:** suniliyer.ca  
**Version:** 1.0  
**Date:** February 2026  
**Series:** Document 3 of 3

> This document specifies the complete UI design for the Easter Eggs page — the interactive garden easter egg hunt at `/easter-eggs`. It covers every interaction, animation, state, and design decision from page entry to completion moment.

---

## Document Series

| Document | Title | Contents |
|---|---|---|
| **Doc 1** | Feature Specification | Architecture, audience, discoverability, editorial decisions |
| **Doc 2** | Content Inventory | 29 eggs, Full Reveal copy, visit links, next hints |
| **Doc 3 — This file** | UI Design Specification | Interactions, animations, layout, states, build sequence |

---

## 1. Concept & Experience Philosophy

The Easter Eggs page is not a list of features. It is an **interactive easter egg hunt** set inside a full-page illustrated garden. Visitors find and click hidden eggs to reveal the secrets of the site. The page itself embodies the philosophy it celebrates: rewards curiosity, hides depth beneath a beautiful surface, and saves its best moments for those who look closely.

> *Finding the page was the first easter egg. Finding all 29 is the last.*

### Key Decisions at a Glance

| Decision | Value |
|---|---|
| URL | `/easter-eggs` |
| Egg count | 29 hunt eggs + 1 completion egg = 30 total |
| Persistence | Session only — resets on refresh. No localStorage. |
| Image style | Mary Blair / Disney flat illustration, portrait orientation |
| Light mode | Daylight garden — warm golden morning light |
| Dark mode | Twilight garden — deep indigo sky, amber lantern glow |
| Cover title | *Every Garden Has Secrets* |
| Cover subtitle | *Once upon a time, someone hid 29 Easter eggs across a website. This is where they buried the map.* |
| First egg hint | *Begin where gardeners begin...* |
| Completion message | *You took the path less travelled. All 29 times. Well done.* |

---

## 2. Page Layout & Navigation

### 2.1 Layout Stack (top to bottom)

| Layer | Element |
|---|---|
| 1 | **TopNav** — fixed, full width, standard site navigation |
| 2 | **Padding zone** — 16–24px clear separation between TopNav and garden |
| 3 | **Garden image** — fills remaining viewport, portrait orientation, scrolls vertically |
| 4 | **Egg hotspots** — SVG overlays positioned on garden image |
| 5 | **Counter pill** — fixed position, top right, below TopNav |
| 6 | **Modal** — appears on egg click, above all layers |

### 2.2 TopNav Behaviour — This Page Only

The TopNav uses a **smart auto-hide pattern** exclusively on `/easter-eggs`. All other pages retain standard TopNav behaviour. Implemented via a page-level prop or CSS class flag (`data-page="easter-eggs"`) passed to the TopNav component.

| State | Behaviour |
|---|---|
| **Scrolling down** | TopNav slides up out of view after 150px scroll — smooth 0.3s transition |
| **Scrolling up** | TopNav slides back down into view |
| **At top of page** | TopNav always visible at scroll position 0 |

### 2.3 Garden Image Constraints

- **No bleed under TopNav** — garden image starts below nav with clear padding zone
- **Portrait orientation** — image fills viewport width, scrolls vertically on mobile
- **Identical composition** — both daylight and twilight versions have the same layout so egg hotspot positions work for both
- **Theme switching** — see Section 5 for the cinematic transition between versions

---

## 3. Storybook Entry Experience

The page does not open directly to the garden. It opens as a **storybook** — two covers parting from a central spine to reveal the garden inside. The visitor taps to open. The hunt begins only when they choose.

### 3.1 Book Cover Design

| Element | Detail |
|---|---|
| **Appearance** | Two panels meeting at centre spine — left cover and right cover |
| **Background** | Rich illustrated texture — leather or cloth binding aesthetic, Mary Blair palette |
| **Title** | *Every Garden Has Secrets* |
| **Subtitle** | *Once upon a time, someone hid 29 Easter eggs across a website. This is where they buried the map.* |
| **First egg hint** | *Begin where gardeners begin...* — bottom of cover, smaller, italicised, like a whisper |
| **Illustration** | A single illustrated Easter egg centred on the cover — white base, pastel pattern, Mary Blair style |
| **CTA** | Gentle pulse animation on covers + small *"Open the book"* label inviting tap |

### 3.2 Book Opening Animation Sequence

1. Visitor taps the cover or *"Open the book"* prompt
2. Left cover panel rotates left around spine axis — CSS 3D transform `rotateY: -180deg`
3. Right cover panel rotates right simultaneously — `rotateY: 180deg`
4. Garden is revealed behind the covers as they part
5. Counter pill fades in top right
6. Hunt begins — all 29 eggs are now clickable

> **Animation duration:** 0.8 seconds, cubic-bezier easing. Covers do not return — once open, the book stays open for the session.

---

## 4. The Garden & Egg Placement

The garden is a full-page illustrated scene in **Mary Blair flat illustration style**. 29 hunt eggs are placed as interactive hotspots at specific coordinates. A 30th completion egg appears in the centre only after all 29 are found.

### 4.1 Scene Zones

| Zone | Elements |
|---|---|
| **Foreground** | Bench, watering can, tulip beds, stone path, basket |
| **Middle Ground** | Oak tree, pond with lily pads, bird bath, garden gate, tall grass, beehive |
| **Tree Zone** | Branches, bird nests, hanging lanterns, leaf canopy |
| **Background** | Greenhouse, ivy stone wall, garden shed, distant hills |
| **Sky** | Blue sky with clouds (daylight) / Deep indigo with crescent moon and stars (twilight) |
| **Special** | Oak tree trunk — Sunil/Linus name carved here (Egg #29) |

### 4.2 Full Egg Placement Map

| # | Easter Egg | Hiding Spot | Zone | Difficulty |
|---|---|---|---|---|
| 1 | 404 Page — AI Hallucination Satire | Inside tipped watering can | Foreground | 🟢 Easy |
| 2 | 3D Flip Cards | Under the garden bench, just visible | Foreground | 🟡 Medium |
| 3 | Initials Photo Reveal (SVI) | Nestled in flower bed, behind a rose | Foreground | 🟡 Medium |
| 4 | Neural Map Mega Menu | Sitting on bench cushion | Foreground | 🟢 Easy |
| 5 | Hello! Splash Screen | Half buried in soil near stone path | Foreground | 🟡 Medium |
| 6 | Behind the Scenes Bookshelf | Inside the wicker basket | Foreground | 🟢 Easy |
| 7 | Corkboard Article Clusters | Tucked between two large tulips | Foreground | 🟡 Medium |
| 8 | Intentional Image System | Floating on a lily pad in the pond | Middle Ground | 🟡 Medium |
| 9 | Coming Soon Pancake Flip | Sitting on edge of bird bath | Middle Ground | 🟢 Easy |
| 10 | Guru — Live AI Chat Agent | Nestled in thick tree roots | Middle Ground | 🟡 Medium |
| 11 | Dharma Wheel — Krishna's Chakra | Resting against oak tree trunk base | Middle Ground | 🟢 Easy |
| 12 | Page Colour Themes | Half hidden in tall grass patch | Middle Ground | 🟡 Medium |
| 13 | Pulse-Glow Timeline Dots | Submerged just under pond surface, glowing faintly | Middle Ground | 🔴 Hard |
| 14 | Moon/Sun Theme Toggle | Hanging from a low branch like an ornament | Middle Ground | 🟡 Medium |
| 15 | Creative Works Bento Grid | Just inside garden gate, visible through the gap | Middle Ground | 🟡 Medium |
| 16 | Hero Title AI Taxonomy | Resting in bird nest up in the branches | Tree Zone | 🔴 Hard |
| 17 | Lightbox Modal & Photo Panels | Wedged in a branch fork | Tree Zone | 🔴 Hard |
| 18 | Category Filtering | Hanging from a branch on a small string | Tree Zone | 🟡 Medium |
| 19 | Scroll Indicators | At very top of tallest branch | Tree Zone | 🔴 Hard |
| 20 | Triple Layer Glow | Glowing faintly among hanging lanterns | Tree Zone | 🟡 Medium |
| 21 | Break Cards Between Sections | Visible through fogged greenhouse glass | Background | 🔴 Hard |
| 22 | Funnel Font Pairing | On greenhouse windowsill, barely visible | Background | 🔴 Hard |
| 23 | localStorage & Cookie System | Behind stone wall, just the top visible | Background | 🔴 Hard |
| 24 | Framer Motion Spring Animations | In ivy climbing the stone wall | Background | 🔴 Hard |
| 25 | Corkboard Article Clusters (detailed) | Inside shed through half open door | Background | 🔴 Hard |
| 26 | Colour Theme Narrative | On the shed roof | Background | 🔴 Hard |
| 27 | Theme Switch Easter Egg | **Twilight only** — appears in sky near crescent moon | Sky | 🔴 Hard |
| 28 | Completion Egg | Centre of garden — appears only after eggs 1–27 found | Special | 🟢 Easy |
| 29 | Sunil/Linus Name Flip | Carved into oak tree trunk | Middle Ground | 🔴 Hard |

> **Egg #27 note:** Does not exist in the daylight image. Switching to dark mode is a prerequisite to finding it. The hint for Egg #26 reads: *"Some secrets only reveal themselves in the dark..."*

### 4.3 Egg Visual Design

| Property | Detail |
|---|---|
| **Shape** | Traditional Easter egg oval — consistent across all 29 |
| **Base** | White — all eggs on white base |
| **Patterns** | Unique per egg — pastel stripes, polka dots, zigzag, florals, diamonds, wavy lines |
| **Palette** | Pastels — soft pink, lavender, mint green, baby blue, pale yellow, peach |
| **Style** | Mary Blair flat graphic — bold, clean, consistent with garden illustration |
| **Minimum size** | 44×44px touch target for mobile accessibility |
| **Completion egg** | Gold foil — distinct from all hunt eggs, appears only after all 29 found |

### 4.4 Egg Interaction States

| State | Trigger | Behaviour |
|---|---|---|
| **Idle** | Default | Egg sits completely still. No animation, no glow. You have to find it yourself. |
| **Hover** | Desktop cursor over egg | Very subtle wobble — confirms interactivity without giving away position |
| **Clicked / Tapped** | Tap or click | Egg cracks open with small pop animation. Modal slides up. |
| **Found / Collected** | After modal viewed | Cracked shell remains at position. Counter increments with bounce. No second modal trigger. |

---

## 5. Theme Transition — Day to Night

When the visitor toggles the site theme, the garden transitions cinematically. This transition is itself **Easter Egg #27** — discovering that the garden has two versions is a hidden delight.

### 5.1 Light Mode → Dark Mode

1. Theme toggle clicked — dark mode activates
2. Deep indigo colour sweeps **down from the top** of the garden image like night falling — **2.5 second duration**
3. Simultaneously, the three lanterns in the tree illuminate — warm amber glow blooms from each, **staggered 0.2s apart**
4. Greenhouse interior glow activates — **0.6s fade-in**
5. Twilight garden fully revealed — crescent moon and stars visible

### 5.2 Dark Mode → Light Mode

1. Theme toggle clicked — light mode activates
2. Warm golden light rises **from the bottom** of the garden image like sunrise — **2.5 second duration**
3. Lanterns dim gradually as daylight takes over — **0.8s fade-out**
4. Daylight garden fully revealed — blue sky and clouds visible

### 5.3 Important Behaviours

- **Egg state preserved** — found eggs remain found through theme transitions. Cracked state persists regardless of which garden version is shown.
- **Egg #27 (sky egg)** — only exists in twilight version near the crescent moon. Switching to dark mode is a prerequisite to finding it.
- **Completion moment transition** — uses the same mechanic as theme switch but slower: **4 seconds** instead of 2.5 seconds.

---

## 6. Counter Pill

| Property | Detail |
|---|---|
| **Position** | Fixed — top right corner, below TopNav height |
| **Default content** | 🥚 0 / 29 found |
| **Style** | Glassmorphism pill — backdrop blur, semi-transparent, matches site aesthetic |
| **On egg found** | Number increments with small bounce animation, pill pulses once |
| **At completion** | Shows 🥚 29 / 29 with golden shimmer animation |
| **Visibility** | Fades in when book opens, stays visible for entire session |
| **Mobile** | Smaller pill size, same top-right position |

---

## 7. Egg Reveal Modal

When a visitor clicks an egg it cracks open and a modal slides up. The modal shows **Full Reveal content immediately** — no hint-first gate, no extra tap. They found it, they earned it, they get everything.

### 7.1 Modal Entry Animation

1. Egg cracks — small pop animation, shell splits open
2. Modal slides up from the crack position — **0.4s cubic-bezier**
3. Background dims slightly with blur overlay

### 7.2 Modal Content Layout

| Element | Detail |
|---|---|
| **Top left icon** | Small egg illustration in tier colour (purple / amber / blue) |
| **Title** | Easter egg name — bold, prominent |
| **Location badge** | Which page it lives on — linked |
| **Tier badge** | Major Discovery / Subtle Craftsmanship / Under the Hood |
| **Body** | Full Reveal text — complete description, shown immediately |
| **Visit link** | → Go to [page name] — direct link to the relevant page |
| **Next hint** | *Psst... [hint for next egg]* — italicised, subtle, bottom of modal |
| **Close** | X button top right — or tap outside modal |

### 7.3 Next Egg Hint Logic

Hints are ordered sequentially — Egg #1 hints toward #2, #2 toward #3, and so on. Hints are vague enough to guide without spoiling.

**Special cases:**

| Egg | Next Hint Behaviour |
|---|---|
| **#26** | Hint reads: *"Some secrets only reveal themselves in the dark..."* — nudges toward theme switch |
| **#27 (Theme Switch)** | Hint reads: *"The last one is carved into something very old..."* — points to tree trunk |
| **#29 (Sunil/Linus)** | No next hint — last hunt egg. Modal ends: *"One more waits for you. Look to the centre of the garden."* |
| **Completion egg** | Triggers completion sequence rather than showing a modal |

### 7.4 Modal Exit

- Tap X button — modal closes, egg remains cracked
- Tap outside modal — modal closes
- Tap Visit link — modal closes, navigates to relevant page
- No animation on close — quick fade, return to hunt

---

## 8. Completion Moment

When the 29th hunt egg is found, the **golden completion egg** appears in the centre of the garden. Clicking it triggers the full completion sequence.

### 8.1 Completion Sequence

1. Egg #29 found — modal appears as normal with special closing line: *"One more waits for you. Look to the centre of the garden."*
2. Modal closes — golden completion egg appears in centre of garden with gentle glow pulse
3. Visitor clicks the golden egg
4. Counter pill shows 🥚 29 / 29 with golden shimmer
5. Garden transformation begins — cinematic sky transition (**4 second duration**) — garden shifts from current mode to its opposite
6. Completion message fades in over the transformed garden — centred, large, Funnel Display typography
7. Message lingers for **5 seconds** then fades out
8. Garden remains in transformed state for the rest of the session

### 8.2 Completion Message

> *You took the path less travelled. All 29 times. Well done.*

| Property | Detail |
|---|---|
| **Typography** | Funnel Display — large, elegant, centred |
| **Colour** | White over dark garden / Deep dark over light garden |
| **Position** | Vertically and horizontally centred over the garden |
| **Fade in** | 1 second |
| **Linger** | 5 seconds |
| **Fade out** | 1 second |
| **Background** | No overlay — text floats directly over the transformed garden |

---

## 9. Garden Images — Reference

Both images generated and approved. Mary Blair flat illustration style, portrait orientation.

| Version | Mode | Sky | Lighting |
|---|---|---|---|
| **Daylight** | Light mode | Blue sky, white clouds | Warm golden morning light |
| **Twilight** | Dark mode | Deep indigo, crescent moon, stars | Amber lantern glow + greenhouse warmth |

**Composition is identical between both versions.** Same bench, same tree, same pond, same gate, same shed, same greenhouse — same egg positions.

**Artistic references:** Mary Blair / Disney illustration style, Monet's Giverny colour sensibility, Robert Frost's quiet poetic mood.

**Hero flower:** Tulips — red and pink in daylight, deep magenta and midnight purple at twilight.

---

## 10. Build Sequence

21 ordered tasks across 7 phases.

| # | Phase | Task | Dependency |
|---|---|---|---|
| 1 | Foundation | Finalise both garden images at correct dimensions | Images approved |
| 2 | Foundation | Design 29 Easter egg SVGs — white base, unique pastel patterns | Images approved |
| 3 | Foundation | Design 1 completion egg SVG — gold foil, distinct | — |
| 4 | Foundation | Add `/easter-eggs` to `sitemap.xml` | — |
| 5 | Foundation | Implement Resume Download → `/easter-eggs` redirect (500ms delay) | — |
| 6 | Page Setup | Create `/easter-eggs` route in Next.js | — |
| 7 | Page Setup | Implement smart auto-hide TopNav — this page only | — |
| 8 | Page Setup | Build storybook cover component with page-turn animation | Steps 1–3 |
| 9 | Garden | Build garden image component with theme-aware image switching | Step 1 |
| 10 | Garden | Implement theme transition — sky sweep + lantern response | Step 9 |
| 11 | Garden | Map all 29 egg hotspot coordinates on both image versions | Steps 1–2 |
| 12 | Garden | Build egg hotspot component — idle, hover, clicked, found states | Step 11 |
| 13 | Garden | Implement egg #27 — twilight-only visibility | Steps 10–12 |
| 14 | Counter | Build counter pill — glassmorphism, fixed position, pulse animation | — |
| 15 | Modal | Build egg reveal modal — content, animation, visit link, next hint | Doc 2 |
| 16 | Modal | Wire all 29 egg modals to content inventory data | Steps 12 + 15 |
| 17 | Completion | Build completion egg appearance logic — triggers after egg 29 found | Steps 12–13 |
| 18 | Completion | Build completion transformation sequence and final message | Step 17 |
| 19 | QA | Test all 29 eggs clickable on mobile and desktop | All above |
| 20 | QA | Verify resume download still works after redirect | Step 5 |
| 21 | QA | Test theme transition preserves found egg states | Steps 10 + 12 |

---

*suniliyer.ca · Built with AI · Powered by curiosity*
