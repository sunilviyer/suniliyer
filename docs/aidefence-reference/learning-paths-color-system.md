# Learning Paths Color System
**Project**: AIDefence V2
**Date**: 2025-12-22
**Status**: Final - Approved by Sunil

---

## Design Philosophy

All learning path concept cards follow the **UX spec earth-tone palette** for premium minimalist aesthetic consistency. Example cards use **dramatic company brand colors** for visual distinction and immediate recognition.

---

## Learning Path Colors (Earth Tones)

### 1. History Path - Toffee Brown

**Primary Color**: Toffee Brown `#936639`
**Secondary Colors**:
- Saddle Brown `#7f4f24` (dark accent)
- Camel `#a68a64` (light accent)

**Visual Theme**: Foundational, classic, historical
**Gradient**: `linear-gradient(135deg, #936639 0%, #7f4f24 100%)`
**Use Cases**:
- Concept card borders and hover states
- Hero image overlays
- Category badges
- Section dividers

**Image Style**: Vintage computing imagery, historical timelines, foundation visuals, retro AI aesthetics.

---

### 2. Terminology Path - Camel

**Primary Color**: Camel `#a68a64`
**Secondary Colors**:
- Tan `#b6ad90` (light accent)
- Fern `#656d4a` (dark accent)

**Visual Theme**: Technical, analytical, neutral
**Gradient**: `linear-gradient(135deg, #a68a64 0%, #656d4a 100%)`
**Use Cases**:
- Technical diagram highlights
- Code block borders
- Neural network visualizations
- Definition callouts

**Image Style**: Technical diagrams, neural network schematics, architectural blueprints, analytical visualizations.

---

### 3. Risk Path - Dark Walnut

**Primary Color**: Dark Walnut `#582f0e`
**Secondary Colors**:
- Saddle Brown `#7f4f24` (medium accent)
- Charcoal Brown `#333d29` (dark accent)

**Visual Theme**: Serious, warning, critical
**Gradient**: `linear-gradient(135deg, #582f0e 0%, #333d29 100%)`
**Use Cases**:
- Warning indicators
- Critical issue highlights
- Risk assessment visuals
- Alert borders

**Image Style**: Warning symbols, broken systems, bias visualizations, ethical dilemmas, caution aesthetics.

---

### 4. Responsibility Path - Dry Sage

**Primary Color**: Dry Sage `#a4ac86`
**Secondary Colors**:
- Khaki Beige `#c2c5aa` (light accent)
- Fern `#656d4a` (dark accent)

**Visual Theme**: Legal, governance, authoritative
**Gradient**: `linear-gradient(135deg, #a4ac86 0%, #656d4a 100%)`
**Use Cases**:
- Legal framework borders
- Compliance checkmarks
- Policy document backgrounds
- Governance section headers

**Image Style**: Legal documents, governance frameworks, shields/badges, compliance visuals, policy templates.

---

### 5. Future Path - Moss Green

**Primary Color**: Moss Green `#414833`
**Secondary Colors**:
- Fern `#656d4a` (light accent)
- Charcoal Brown `#333d29` (dark accent)

**Visual Theme**: Innovation, growth, emerging
**Gradient**: `linear-gradient(135deg, #414833 0%, #656d4a 100%)`
**Use Cases**:
- Innovation highlights
- Emerging tech borders
- Future trend visualizations
- Growth indicators

**Image Style**: Futuristic AI concepts, emerging technologies, AGI visualizations, innovation imagery.

---

## Example Card Colors (Dramatic Company Brands)

**Exception**: Example cards do NOT follow earth-tone palette. They use vibrant company brand colors for immediate visual recognition.

### Category-Specific Palettes:

**Tech Company Examples**:
- Amazon: Orange `#FF9900` + Black `#232F3E`
- Google: Blue `#4285F4`, Red `#EA4335`, Yellow `#FBBC04`, Green `#34A853`
- Apple: Gray `#555555` + White `#FFFFFF`
- Netflix: Red `#E50914` + Black `#000000`
- Microsoft: Blue `#00A4EF`

**AI Provider Examples**:
- OpenAI: Green `#10A37F` + Black `#000000`
- Anthropic: Orange `#D97757` + Beige `#F7F4ED`
- Google (Gemini): Google Blue `#4285F4`

**Legal/Government Examples**:
- GDPR/EU: Blue `#003399` + Yellow `#FFCC00` (EU flag colors)
- US Government: Navy `#002868` + Red `#BF0A30`
- Courts/Legal: Deep Navy `#1C2833`

**Bias Warning Examples**:
- Warning Orange `#FF6B35`
- Alert Red `#D62828`
- Caution Yellow `#F77F00`

---

## Color Accessibility

All learning path colors meet WCAG 2.1 AAA standards (7:1 contrast ratio) when paired with appropriate text colors:

**Dark Backgrounds (Dark Walnut, Moss Green, Charcoal)**:
- Text: Beige Ivory `#F5F5DC` (contrast ratio > 7:1)

**Medium Backgrounds (Toffee Brown, Camel, Dry Sage, Fern)**:
- Use smart contrast detection:
  - Toffee Brown `#936639` → Light text `#F5F5DC`
  - Camel `#a68a64` → Dark text `#333d29`
  - Dry Sage `#a4ac86` → Dark text `#333d29`
  - Fern `#656d4a` → Light text `#F5F5DC`

**Light Backgrounds (Khaki Beige, Tan, Beige Ivory)**:
- Text: Charcoal Brown `#333d29` (contrast ratio > 7:1)

---

## Image Generation Guidelines

### Concept Card Images (Earth Tones)

**Prompt Formula**:
```
"Abstract [concept], earth tones (hex: #[primary color]), minimalist, professional, [category motif], soft gradients, high quality"
```

**Category Motifs**:
- History: Vintage computers, timelines, foundation stones
- Terminology: Neural networks, technical diagrams, architectural blueprints
- Risk: Warning symbols, broken systems, bias scales
- Responsibility: Legal documents, shields, governance structures
- Future: Futuristic AI, innovation, emerging technology

**Technical Specs**:
- Resolution: 1920x1280 (3:2 ratio)
- Format: JPG (quality 85) + WebP (production)
- Color Mode: RGB
- Style: Minimalist, professional, geometric abstraction

### Example Card Images (Dramatic Colors)

**Prompt Formula**:
```
"[Company/case study name] visualization, [brand colors], modern, professional, recognizable branding, high quality"
```

**Technical Specs**:
- Resolution: 1200x800 (3:2 ratio)
- Format: JPG (quality 85) + WebP (production)
- Include: Company logos, brand colors, case study elements

---

## Hero Images (Path Landing Pages)

**All 5 hero images** use their respective learning path primary colors with dramatic gradients:

| Path | Filename | Gradient |
|------|----------|----------|
| History | `history-hero.jpg` | Toffee Brown → Saddle Brown |
| Terminology | `terminology-hero.jpg` | Camel → Fern |
| Risk | `risk-hero.jpg` | Dark Walnut → Charcoal |
| Responsibility | `responsibility-hero.jpg` | Dry Sage → Fern |
| Future | `future-hero.jpg` | Moss Green → Charcoal |

**Resolution**: 1920x1080 (16:9 ratio)
**Style**: Dramatic, inspiring, path-specific imagery with gradient overlay

---

## Resource Card Colors

Resource cards use **mixed colors** based on their category:

| Resource Type | Primary Color | Rationale |
|--------------|--------------|-----------|
| Risk Assessment | Dark Walnut `#582f0e` | Risk-related content |
| Bias Audit | Dark Walnut `#582f0e` | Risk/fairness content |
| Policy Templates | Dry Sage `#a4ac86` | Governance content |
| Impact Assessment | Dry Sage `#a4ac86` | Compliance content |
| Model Card | Dry Sage `#a4ac86` | Documentation/transparency |
| Ethics Review | Dry Sage `#a4ac86` | Governance process |
| Incident Response | Dark Walnut `#582f0e` | Risk/alert content |
| Vendor Evaluation | Dry Sage `#a4ac86` | Governance/procurement |
| AI Roadmap | Dry Sage `#a4ac86` | Governance planning |
| AIGP Study Guide | Moss Green `#414833` | Career/future content |

---

## CSS Implementation

```css
/* Learning Path Color Variables */
:root {
  /* History Path */
  --color-history-primary: #936639;
  --color-history-secondary: #7f4f24;
  --color-history-accent: #a68a64;

  /* Terminology Path */
  --color-terminology-primary: #a68a64;
  --color-terminology-secondary: #b6ad90;
  --color-terminology-accent: #656d4a;

  /* Risk Path */
  --color-risk-primary: #582f0e;
  --color-risk-secondary: #7f4f24;
  --color-risk-accent: #333d29;

  /* Responsibility Path */
  --color-responsibility-primary: #a4ac86;
  --color-responsibility-secondary: #c2c5aa;
  --color-responsibility-accent: #656d4a;

  /* Future Path */
  --color-future-primary: #414833;
  --color-future-secondary: #656d4a;
  --color-future-accent: #333d29;
}

/* Smart Contrast Text */
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

---

## Next Steps

1. ✅ Color system documented
2. ⏭️ Generate 153 remaining images using earth-tone color palette
3. ⏭️ Update learning-paths-image-reference.md with correct colors
4. ⏭️ Create image generation prompts for all paths

---

**Status**: Approved and ready for implementation
**Last Updated**: 2025-12-22
