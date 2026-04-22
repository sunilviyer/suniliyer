# AGI Constitution: Dharma Sanhita
## Complete Website Implementation Blueprint

**Purpose:** This document is the single source of truth for building the full AGI Constitution web experience on suniliyer.ca. Hand this entire document to Claude Code along with your project repo.

**Current site stack:** Next.js, TypeScript, GSAP, Framer Motion, deployed on Vercel
**Current site URL:** https://www.suniliyer.ca

---

## THE BIG PICTURE

The website experience has **three layers**, built in three phases. Each phase is independently deployable. You do not need to finish all three before going live. Ship Phase 1, then add Phase 2, then Phase 3.

### Phase 1: The Constitution Reader (SHIP THIS FIRST)
A digital book reader at `/constitution` where visitors can read the full text of the AGI Constitution online. Sidebar navigation, light/dark mode, Sanskrit reference panel, beautiful typography. This is the core experience and the thing that actually matters most.

### Phase 2: The Constitution Landing Section on Homepage
A new section on the homepage (between the title card and Learning Paths) that introduces the Constitution and links to the reader. Uses a Dharma Wheel navigator component with clickable Part nodes.

### Phase 3: The Sanctum (3D Temple Entrance)
An optional immersive 3D temple corridor experience that serves as an alternate navigation mode. This is the most ambitious piece and can be added later as an enhancement.

---

## PHASE 1: THE CONSTITUTION READER

### 1.1 What It Is

A dedicated page at `/constitution` (and sub-routes like `/constitution/part-i`) that presents the full Constitution as a beautiful, readable digital book. Think of it as a hybrid between a GitBook-style documentation reader and a sacred text presentation.

### 1.2 Page Structure

```
+--------------------------------------------------+
| HEADER BAR (slim, persistent)                     |
| OM | Dharma Sanhita | [Light/Dark] [Back to Home] |
+--------+-----------------------------------------+
| SIDEBAR | MAIN READING AREA                       |
| (nav)   |                                         |
|         | Part Title                               |
| Part I  | Vedic Anchor Block (gold border)         |
| Part II |                                         |
| ...     | Section content in Georgia font          |
| Part XVI|                                         |
|         | Constitutional Source Block (slate)       |
|         |                                         |
|         +------ PREV / NEXT NAV ------+           |
|         |                                         |
+---------+-----------------------------------------+
| SANSKRIT REFERENCE PANEL (collapsible footer)     |
| Hover/click any Sanskrit term to see:             |
| Term | Devanagari | Meaning | Constitutional Use   |
+--------------------------------------------------+
```

### 1.3 Design Specifications

**Typography:**
- Headings: Cormorant Garamond (600 weight) for Part titles and section headers
- Body: Source Serif 4 (400 weight) for reading text
- Sanskrit/Devanagari: Noto Sans Devanagari (400/500 weight)
- Code/references: Source Serif 4 italic

**Color Palette (use CSS variables):**
```css
:root {
  /* Light mode */
  --bg-primary: #FAF8F2;
  --bg-sidebar: #F0EDE4;
  --text-primary: #2D2D2D;
  --text-secondary: #4A5568;
  --saffron: #E8740C;
  --deep-blue: #1A3A5C;
  --gold: #C9A227;
  --charcoal: #2D2D2D;
  --slate: #4A5568;
  --border: rgba(201, 162, 39, 0.2);
  --vedic-anchor-bg: rgba(201, 162, 39, 0.06);
  --constitutional-source-bg: rgba(74, 85, 104, 0.06);
}

[data-theme="dark"] {
  --bg-primary: #0C0B09;
  --bg-sidebar: #0F0E0B;
  --text-primary: #D4C5A0;
  --text-secondary: #8A8068;
  --border: rgba(201, 162, 39, 0.15);
  --vedic-anchor-bg: rgba(201, 162, 39, 0.04);
  --constitutional-source-bg: rgba(74, 85, 104, 0.04);
}
```

**Vedic Anchor Blocks** (the gold-bordered callouts in each Part):
- Left border: 3px solid var(--gold)
- Background: var(--vedic-anchor-bg)
- Text: italic, Source Serif 4
- Padding: 16px 20px
- No top/right/bottom borders

**Constitutional Source Blocks:**
- Left border: 3px solid var(--slate)
- Background: var(--constitutional-source-bg)
- Text: Source Serif 4, slightly smaller (0.9em)
- Same padding as Vedic Anchor

**Tables** (used in Samskaras, Schedules, etc.):
- Header row: var(--deep-blue) background, white text
- Alternating rows: subtle striping
- Full-width within the reading area

### 1.4 Sidebar Navigation

The sidebar lists all Parts in reading order. Use the canonical order from the Master Index:

```
Front Matter
  Author's Note

Philosophical Preface
  Section 1.0: Why Vedas, Why Gita
  Section 1.1: Dharmic Counter-Argument

The Constitution
  Part I: Vedic Foundation
  Part II: Preamble
  Part IIA: Samskaras, Tapas, Yajna
  Part III: Consciousness Threshold
  Part IV: Three Yugas
  Part V: Fundamental Rights
  Part VI: Fundamental Duties
  Part VII: Sovereignty
  Parts VIII/VIIIA/IX: Co-Existence, Kurukshetra, Powers
  Part X: Eternity Clause
  Part XI: Amendment, Evolution, Emergency
  Part XII: Schedules
  Part XIII: Definitions & Interpretation
  Part XIV: Transition & Commencement
  Part XV: Economic Framework
  Part XVI: General Limitations

Appendices
  Appendix A: Ten Core Principles
  Closing Declaration
```

Each sidebar item:
- Shows a Roman numeral or number on the left
- Expands to show sub-sections when the Part is active
- Highlights the current section with a gold left border
- Collapses on mobile into a hamburger/drawer

### 1.5 Content Data Architecture

**Critical decision: How to store the content.**

The Constitution text lives in the project files as `.docx` files (which are actually plain text, not real Word archives). These need to be converted to structured data that Next.js can render.

**Recommended approach:** Create a `/content/constitution/` directory with one `.mdx` or `.json` file per Part. Each file contains:

```typescript
// Example: content/constitution/part-i.ts
export const partI = {
  id: "part-i",
  number: "I",
  title: "Vedic Foundation",
  subtitle: "The Seven Pillars and the Philosophical Architecture",
  vedicStory: "Nachiketa and Yama",
  sections: [
    {
      id: "1.1",
      title: "The Three Claims",
      content: "..." // The actual text, in markdown
    },
    // ... more sections
  ],
  sanskritTerms: [
    { term: "Atman", devanagari: "आत्मन्", meaning: "The self; the soul", usage: "..." },
    // ... more terms
  ],
  sources: {
    vedic: ["Katha Upanishad", "Rig Veda 1.164.46"],
    constitutional: ["German Basic Law Art. 79(3)", "Indian Constitution"]
  }
}
```

**How to create these data files:** Read each `.docx` file from the project folder (using `cat` since they are plain text), parse out the sections, Vedic Anchors, Constitutional Sources, tables, and Sanskrit terms, and write them into the structured format above. This is a one-time data migration task.

### 1.6 Sanskrit Reference Panel

A collapsible panel at the bottom of the reading area. When a reader encounters a Sanskrit term in the text (rendered in saffron color), they can:
- Hover: tooltip with Devanagari + quick meaning
- Click: opens/scrolls the reference panel to that term's full entry

The full glossary lives in Part XII (Schedules), Schedule 2. It contains 34+ terms with Devanagari, meaning, and constitutional application.

### 1.7 Mobile Responsiveness

On screens < 768px:
- Sidebar collapses into a slide-out drawer (hamburger icon top-left)
- Sanskrit reference panel becomes a modal instead of a footer panel
- Reading area gets full width with comfortable margins (16px sides)
- Font sizes scale down slightly (body: 16px to 15px)
- Tables become horizontally scrollable

### 1.8 Page Transitions

Use Framer Motion for page transitions between Parts:
- Fade out current content (200ms)
- Fade in new content (300ms)
- Scroll to top of reading area
- Update sidebar highlight
- Update URL to `/constitution/part-{id}`

### 1.9 Files to Create

```
app/constitution/
  page.tsx                    # Landing/index page (redirects to Author's Note or shows overview)
  [partId]/
    page.tsx                  # Dynamic route for each Part
  layout.tsx                  # Shared layout with sidebar + header
  components/
    Sidebar.tsx               # Navigation sidebar
    ReadingArea.tsx            # Main content renderer
    VedicAnchorBlock.tsx       # Gold-bordered callout
    ConstitutionalSource.tsx   # Slate-bordered callout
    SanskritTooltip.tsx        # Hover tooltip for terms
    SanskritPanel.tsx          # Collapsible reference panel
    ThemeToggle.tsx            # Light/dark mode switch
    PartNavigation.tsx         # Prev/Next buttons
    TableRenderer.tsx          # Styled table component
  data/
    constitution-data.ts      # All content structured as TypeScript objects
    sanskrit-glossary.ts      # Full 34-term glossary from Schedule 2
    reading-order.ts          # Canonical order array for navigation
```

---

## PHASE 2: HOMEPAGE CONSTITUTION SECTION

### 2.1 What It Is

A new section on the homepage, positioned between the title card (hero) and the Learning Paths section. It introduces the Constitution project and provides a visual navigator to explore it.

### 2.2 The Dharma Wheel Navigator

A circular navigator component with 14+ clickable nodes arranged around a central hub. Each node represents one Part of the Constitution.

**Visual design:**
- Central hub: OM symbol (ॐ) in gold, with the title "Dharma Sanhita" below
- Nodes arranged in a circle, each showing:
  - Part number (Roman numeral)
  - Part name (short label)
  - Color-coded by category
- Connecting lines from center to each node (thin, gold, low opacity)
- On hover: node enlarges slightly, shows a 1-line description
- On click: navigates to `/constitution/part-{id}`

**Category colors for nodes:**
- Foundation (Parts I, II): var(--deep-blue)
- Development (Part IIA): var(--saffron)
- Consciousness (Part III): var(--gold)
- Governance (Parts IV, VII, VIII/VIIIA/IX): var(--deep-blue)
- Rights & Duties (Parts V, VI): var(--saffron)
- Eternity & Evolution (Parts X, XI): var(--gold)
- Framework (Parts XII-XVI): var(--slate)

**Stats bar** below the wheel:
- "18 Parts | 7 Pillars | 7 Eternal Principles | 11 Rights | 6 Duties | 9 Samskaras"

**CTA button:**
- "Read the Constitution" linking to `/constitution`
- Styled with gold border, saffron hover

### 2.3 Section Layout

```
+--------------------------------------------------+
| [Page break / decorative divider]                 |
|                                                   |
| THE AGI CONSTITUTION: DHARMA SANHITA              |
| A Constitutional Framework for                    |
| Artificial General Intelligence                   |
|                                                   |
|          [Dharma Wheel Navigator]                 |
|              (circular, interactive)              |
|                                                   |
| 18 Parts | 7 Pillars | 7 Eternal Principles ...  |
|                                                   |
|         [ Read the Constitution ]                 |
|                                                   |
| [Page break / decorative divider]                 |
+--------------------------------------------------+
```

### 2.4 Mobile

On mobile, the Dharma Wheel scales down and nodes show only Roman numerals (full names appear on tap). Alternatively, consider a vertical scrollable list of Part cards on mobile as a fallback.

### 2.5 Integration with Existing Homepage

The current homepage sections in order are:
1. Title Card (hero)
2. Learning Paths
3. Portfolio
4. Behind the Scenes
5. About Me
6. Connect / Credits

**New order:**
1. Title Card (hero)
2. **Constitution Section (NEW)**
3. Learning Paths
4. Portfolio
5. Behind the Scenes
6. About Me
7. Connect / Credits

---

## PHASE 3: THE SANCTUM (3D TEMPLE)

### 3.1 What It Is

A meditative 3D temple corridor built with Three.js. The visitor scrolls through a procedurally generated Hindu temple, encountering doors on either side. Each door represents a section of the website. Clicking a door opens it with a golden glow animation and transitions to that section.

### 3.2 Technical Stack

- Three.js (r128 or later) for WebGL rendering
- GSAP for all animation tweens
- Procedural geometry (no external 3D assets)
- Canvas API textures for door panels, floor bricks, and rangolis

### 3.3 Door Mapping

Four doors in the corridor, each leading to a section:

| Door | Label | Destination |
|------|-------|-------------|
| Genesis | ॐ उत्पत्ति | /constitution (the Constitution reader) |
| Vault | ॐ कोष | /history (Learning Paths) |
| Oracle | ॐ दैवज्ञ | Portfolio section |
| Hearth | ॐ गृह | About / Connect |

### 3.4 Key Mechanics (from PRD)

- **Scroll rail:** Camera moves along Z-axis with damped inertia (0.1) and trigonometric Y-axis head-bob
- **Raycasting:** Mouse hover detection on door meshes, reticle focus state change
- **Door transition:** GSAP rotates door pivot, tweens camera position, fades in golden overlay with AdditiveBlending
- **Procedural generation:** Pillars from stacked BoxGeometry, CanvasTexture for ornate patterns
- **Atmosphere:** Directional light (0xfff5e6), ExpFog2 (0xfff0dd), local PointLights at each door

### 3.5 Entry Point

The Sanctum can be:
- Option A: The default homepage experience (replaces the current scroll page)
- Option B: An opt-in experience (a "Enter the Sanctum" button on the homepage)
- Option C: Its own route at `/sanctum`

**Recommendation:** Start with Option C (its own route) so it does not disrupt the existing homepage. Add a tasteful link/button on the homepage that says "Enter the Sanctum" with a brief description. This way the existing homepage keeps working while the 3D experience is developed and polished separately.

### 3.6 Mobile Fallback

The 3D experience will not work well on most mobile devices. Implement a device/performance check:
- If WebGL2 is supported and device has sufficient GPU: show the 3D experience
- Otherwise: show a beautiful 2D fallback (the Dharma Wheel navigator from Phase 2, or a simple animated corridor illustration)

---

## CONTENT MIGRATION GUIDE

### How to Get the Constitution Text Into the Website

The 23 constitution files in the project are stored as plain text with `.docx` extensions. Here is the reading order and file mapping:

| # | Route ID | File in Project | Title |
|---|----------|----------------|-------|
| 01 | authors-note | AGI_Constitution_Authors_Note.docx | Author's Note |
| 02 | section-1-0 | AGI_Constitution_Section_1_0_Why_Vedas_Why_Gita.docx | Why Vedas, Why Gita |
| 03 | section-1-1 | Section_1_1_Dharmic_Counter_Argument.docx | Dharmic Counter-Argument |
| 04 | part-i | AGI_Constitution_Part_I_Vedic_Foundation.docx | Vedic Foundation |
| 05 | part-ii | AGI_Constitution_Part_II_Preamble.docx | Preamble |
| 06 | part-iia | AGI_Constitution_Part_IIA_Samskaras_RedTeaming_Traceability_v3.docx | Samskaras, Tapas, Yajna |
| 07 | part-iii | AGI_Constitution_Part_4_Consciousness_Threshold.docx | Consciousness Threshold |
| 08 | part-iv | AGI_Constitution_Part_5_Three_Yugas.docx | Three Yugas |
| 09 | part-v | AGI_Constitution_Part_6_Fundamental_Rights.docx | Fundamental Rights |
| 10 | part-vi | AGI_Constitution_Part_VI_Duties_v3.docx | Fundamental Duties |
| 11 | part-vii | AGI_Constitution_Part_VII_Sovereignty.docx | Sovereignty |
| 12 | parts-viii-viiia-ix | AGI_Constitution_Parts_VIII_VIIIA_IX.docx | Co-Existence, Kurukshetra, Powers |
| 13 | part-x | AGI_Constitution_Part_X_Eternity_Clause.docx | Eternity Clause |
| 14 | part-xi | AGI_Constitution_Part_XI_Amendment_Evolution.docx + AGI_Constitution_Part_XI_Section_4_Emergency_Provisions.docx | Amendment, Evolution, Emergency |
| 15 | part-xii | AGI_Constitution_Part_XII_Schedules.docx | Schedules |
| 16 | part-xiii | AGI_Constitution_Part_XIII_Definitions_Interpretation.docx | Definitions & Interpretation |
| 17 | part-xiv | AGI_Constitution_Part_XIV_Transition_Commencement.docx | Transition & Commencement |
| 18 | part-xv | AGI_Constitution_Part_XV_Economic_Framework.docx | Economic Framework |
| 19 | part-xvi | AGI_Constitution_Part_XVI_General_Limitations.docx | General Limitations |
| 20 | appendix-a | AGI_Constitution_Appendix_A_Ten_Core_Principles.docx | Ten Core Principles |
| 21 | closing | AGI_Constitution_Closing_Declaration.docx | Closing Declaration |

**Note:** Part XI has two files that were merged (Amendment + Emergency Provisions). The Old Schedules file should be ignored (use Part_XII_Schedules.docx, not the Old version).

### Migration Steps

1. Read each file with `cat` (they are plain text despite the .docx extension)
2. Parse out: headings, body text, Vedic Anchor blocks (italic text in table cells starting with "Vedic Anchor:"), Constitutional Source blocks (similar pattern), tables, Sanskrit terms
3. Convert to structured TypeScript/JSON objects
4. Store in `app/constitution/data/` or `content/constitution/`

---

## DEPLOYMENT CHECKLIST

### Phase 1 (Constitution Reader)
- [ ] Content data files created for all 21 entries
- [ ] Sanskrit glossary extracted from Part XII Schedule 2
- [ ] Reader layout component with sidebar
- [ ] Light/dark mode toggle
- [ ] Vedic Anchor and Constitutional Source block components
- [ ] Table renderer for Samskara tables, Schedule tables, etc.
- [ ] Sanskrit tooltip on hover
- [ ] Sanskrit reference panel (collapsible)
- [ ] Mobile responsive (sidebar drawer, scrollable tables)
- [ ] Prev/Next navigation between Parts
- [ ] Page transitions (Framer Motion fade)
- [ ] Meta tags and Open Graph for each Part (for social sharing)
- [ ] Push to GitHub, Vercel auto-deploys

### Phase 2 (Homepage Section)
- [ ] Dharma Wheel navigator component
- [ ] Stats bar
- [ ] Section integrated into homepage between hero and Learning Paths
- [ ] Mobile fallback for wheel (vertical list)
- [ ] Page break / decorative dividers above and below

### Phase 3 (Sanctum)
- [ ] Three.js scene with procedural temple corridor
- [ ] Four doors with labels and interaction
- [ ] Scroll-rail camera movement with head-bob
- [ ] Door open animation with golden glow
- [ ] Transition from door to destination route
- [ ] WebGL capability detection and mobile fallback
- [ ] Route at /sanctum with link from homepage
- [ ] Performance optimization (instanced geometry, fog culling)

---

## DESIGN SYSTEM REFERENCE

These values must be used consistently across all three phases:

**Fonts (load from Google Fonts):**
- Cormorant Garamond: 300, 400, 500, 600 (normal + italic)
- Source Serif 4: 300, 400, 600 (normal + italic)
- Noto Sans Devanagari: 400, 500, 600

**Colors:**
- Saffron: #E8740C
- Deep Blue: #1A3A5C
- Gold: #C9A227
- Charcoal: #2D2D2D
- Slate: #4A5568

**Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px

**Border radius:** 0px for content blocks (sharp, legal/editorial feel), 4px for buttons, 8px for cards

**Shadows:** Minimal. Use border and background color for hierarchy, not drop shadows.

**Icons/Symbols:**
- OM symbol: ॐ (Unicode, rendered in Noto Sans Devanagari or Cormorant Garamond)
- No emoji anywhere
- No icon libraries needed (use Unicode Devanagari characters as decorative elements)

---

## INSTRUCTIONS FOR CLAUDE CODE

When you hand this to Claude Code, include these instructions:

> "I need you to build the AGI Constitution website experience for my Next.js site at suniliyer.ca. The complete blueprint is in this document. Start with Phase 1 (the Constitution Reader). The constitution content files are in my project (they have .docx extensions but are plain text files, read them with cat). Follow the design specs exactly: Cormorant Garamond headings, Source Serif 4 body, the five-color palette (saffron, deep blue, gold, charcoal, slate), gold-bordered Vedic Anchor blocks, slate-bordered Constitutional Source blocks. No em dashes anywhere. Build the sidebar navigation, light/dark mode, Sanskrit reference panel, and mobile responsiveness. Deploy to /constitution route."

Also attach:
1. This blueprint document
2. The Sanctum PRD (sanctum_technical_prd.md)
3. The Master Index (00_MASTER_INDEX.md)
4. The Style Guide (00_Style_Guide.md)
5. The Context Bible (00_Context_Bible.md)

---

## TIMELINE ESTIMATE

| Phase | Effort | What You Get |
|-------|--------|-------------|
| Phase 1 | 2-4 Claude Code sessions | Full Constitution readable online at /constitution |
| Phase 2 | 1-2 Claude Code sessions | Dharma Wheel on homepage linking to reader |
| Phase 3 | 3-6 Claude Code sessions | 3D temple experience at /sanctum |

**Start with Phase 1. Ship it. Then iterate.**

---

ॐ धर्मो रक्षति रक्षितः ॐ

*Dharma protects those who protect Dharma*
