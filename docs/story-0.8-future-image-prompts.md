# Story 0.8: Future Image Generation Prompts

**Date**: 2025-12-25
**Story**: 0.8 - Generate Future Path Concept Cards (2 images)
**Epic**: Epic 0 - Image Generation Strategy
**Status**: Ready to Execute

---

## Overview

Generate 2 concept card images for Future path articles using Moss Green earth-tone palette. These images represent forward-looking AI concepts, emerging technologies, future regulations, and long-term AI governance challenges.

---

## Color Palette

**Primary**: Moss Green `#414833`
**Secondary**: Fern `#656d4a`
**Tertiary**: Charcoal `#333d29`
**Accent**: Dry Sage `#a4ac86` (lighter accent for contrast)

**Visual Theme**: Forward-looking, innovation, emerging trends, future-focused

---

## Technical Specifications

- **Resolution**: 1920x1280 (3:2 aspect ratio)
- **Format**: JPG (quality 85) → convert to WebP for production
- **Style**: Minimalist, professional, forward-looking aesthetic
- **Color Mode**: RGB
- **File Naming**: Use slug from article metadata
- **Output Directory**: `/public/images/future/`

---

## Image Generation Prompts

### 1. artificial-general-intelligence-hype-hope-and-governance.jpg

**Concept**: Artificial General Intelligence - AGI hype, realistic timelines, and governance challenges

**Prompt**:
```
Minimalist professional illustration of Artificial General Intelligence concept. Central image showing evolution from narrow AI (single-purpose icons) to AGI (versatile multi-capability brain pattern). Timeline horizon stretching into misty future showing uncertainty. Hype vs hope balance scale. Governance challenges shown as preparatory framework structure (partially built). Question marks and caution symbols for unknown timelines. Moss green (#414833) and fern green (#656d4a) palette. Future-focused, speculative but grounded aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Visual Elements**:
- Narrow AI to AGI evolution path
- Timeline extending to uncertain future
- Hype vs hope balance
- Governance framework (under construction)
- Question marks for uncertainty
- Caution symbols
- Future-focused, grounded aesthetic

**Key Themes**:
- Evolution from narrow to general AI
- Timeline uncertainty
- Balance between excitement and realism
- Governance preparation challenges
- Speculative but evidence-based

---

### 2. the-future-of-ai-regulation-whats-coming-next.jpg

**Concept**: The Future of AI Regulation - Emerging regulatory trends and developments

**Prompt**:
```
Minimalist professional illustration of future AI regulation trends. World map background with regulatory trend arrows showing convergence and divergence. Multiple regulatory pathways (EU comprehensive, US sectoral, China state-centric) shown as parallel tracks beginning to intersect. Crystal ball or telescope element looking toward future regulatory landscape. Emerging regulatory icons: liability frameworks, international treaties, harmonization efforts. Moss green (#414833) and fern green (#656d4a) palette. Forward-looking regulatory evolution aesthetic. 3:2 aspect ratio, premium minimalist design --ar 3:2 --style minimalist --q 2
```

**Visual Elements**:
- World map with trend arrows
- Multiple regulatory pathways
- Convergence/divergence indicators
- Crystal ball or telescope (future-looking)
- Emerging regulatory symbols:
  - Liability scales
  - International treaty handshake
  - Harmonization puzzle pieces coming together
- Timeline arrow pointing forward
- Evolution and progression aesthetic

**Key Themes**:
- Global regulatory trends
- Convergence vs. divergence
- Emerging frameworks
- International cooperation
- Preparatory timeline

---

## Additional Context for Both Images

### AGI Image (future-1)
This image should convey:
- **Uncertainty**: AGI timelines are highly uncertain
- **Preparation**: Even without AGI, governance frameworks are being developed
- **Hype vs Reality**: Balance excitement with realistic assessment
- **Multi-capability**: AGI would be versatile across domains (unlike narrow AI)
- **Governance Challenges**: Unique governance challenges for AGI systems

**Avoid**:
- Sensationalism (killer robots, superintelligence apocalypse imagery)
- Definitive timelines
- Overly technical representations

**Emphasize**:
- Thoughtful preparation
- Evidence-based analysis
- Governance foresight

---

### Future Regulation Image (future-2)
This image should convey:
- **Global Trends**: AI regulation is evolving worldwide
- **Convergence**: Some regulatory principles converging globally
- **Divergence**: Different approaches in different jurisdictions
- **Emerging Areas**: New regulatory domains (liability, treaties, standards)
- **Preparation**: Organizations can prepare for likely trends

**Avoid**:
- Predictions presented as certainty
- Single dominant regulatory model
- Dystopian or utopian extremes

**Emphasize**:
- Observable trends
- Multiple scenarios
- Practical preparation
- Ongoing evolution

---

## Production Workflow

### Step 1: Image Generation
1. Use Midjourney or DALL-E 3 to generate images using prompts above
2. Generate at 1920x1280 resolution (3:2 aspect ratio)
3. Ensure Moss Green color palette dominance
4. Review for:
   - Color accuracy (Moss Green #414833 primary)
   - Visual clarity
   - Professional aesthetic
   - Concept accuracy (not overly speculative)
   - WCAG AAA contrast when text overlays are added
   - Forward-looking but grounded tone

### Step 2: Post-Processing
1. Color correction if needed (ensure #414833 Moss Green is dominant)
2. Crop/resize to exact 1920x1280 if needed
3. Save as JPG (quality 85)
4. File naming: Use exact slug from article metadata

### Step 3: WebP Conversion
```bash
# Convert JPG to WebP
cwebp -q 85 /public/images/future/artificial-general-intelligence-hype-hope-and-governance.jpg \
  -o /public/images/future/artificial-general-intelligence-hype-hope-and-governance.webp

cwebp -q 85 /public/images/future/the-future-of-ai-regulation-whats-coming-next.jpg \
  -o /public/images/future/the-future-of-ai-regulation-whats-coming-next.webp
```

### Step 4: Validation
1. Check both images generated
2. Verify color palette consistency (Moss Green dominant)
3. Verify resolution (1920x1280)
4. Verify file sizes (<200KB for WebP)
5. Verify filenames match slugs exactly
6. Verify tone is forward-looking but grounded (not overly speculative)

### Step 5: Deployment
1. Place JPG files in `/public/images/future/`
2. Place WebP files in `/public/images/future/`
3. Update image manifest CSV
4. Mark Story 0.8 as complete

---

## Acceptance Criteria

- [ ] Both Future images created (2/2)
- [ ] Both images use Moss Green (#414833) color scheme as primary color
- [ ] Both images are 1920x1280 resolution (3:2 aspect ratio)
- [ ] Both images saved as JPG (quality 85) and WebP formats
- [ ] Both images follow naming convention (slug.jpg/slug.webp)
- [ ] Both images placed in `/public/images/future/` directory
- [ ] Both images under 200KB (WebP format)
- [ ] Visual consistency between both images
- [ ] Forward-looking, professional aesthetic maintained
- [ ] Grounded, evidence-based tone (not overly speculative)

---

## Design Philosophy for Future Path

Future path images should:
1. **Look Forward**: Convey emerging trends and developments
2. **Stay Grounded**: Based on observable evidence, not speculation
3. **Show Preparation**: Emphasize what professionals can do now
4. **Acknowledge Uncertainty**: Use visual elements that show unknown aspects
5. **Maintain Professionalism**: Avoid hype, sensationalism, or dystopian imagery
6. **Enable Action**: Viewers should feel they can prepare, not helpless

---

## Estimated Effort

- Image generation: 1-1.5 hours (30-45 min per image including iterations)
- Post-processing: 30 minutes
- WebP conversion: 10 minutes
- Validation: 15 minutes
- **Total**: 2-2.5 hours

---

## Next Actions

1. Generate both images using prompts above
2. Review for quality, color accuracy, and tone
3. Adjust prompts if needed (particularly for tone/speculation balance)
4. Post-process and convert to WebP
5. Deploy to production directory
6. Mark Story 0.8 as complete

---

## Image Quality Checklist

For each image, verify:
- [ ] Moss Green (#414833) is dominant color
- [ ] Professional, minimalist aesthetic
- [ ] Forward-looking but not overly speculative
- [ ] Concepts clearly represented
- [ ] Visual consistency with other Future path images (when more are created)
- [ ] Distinguishable from Responsibility path (Dry Sage) imagery
- [ ] Text overlay areas have sufficient contrast
- [ ] File size optimized

---

**Status**: Ready to Execute
**Dependencies**: None (knowledge graph complete, article list finalized)
**Blockers**: None
**Owner**: TBD (Assign image generation specialist)
**Priority**: Medium (after Responsibility images - Story 0.7)
