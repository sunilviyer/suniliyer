# Epic 0: Image Generation Strategy & Color System

**Status**: In Progress
**Priority**: P0 (Prerequisite for all implementation epics)
**Owner**: Sunil
**Estimated Effort**: 24-32 hours
**Dependencies**: None
**Blocks**: Epic 1 (Homepage), Epic 2 (History Path), Epic 4 (All Paths), Epic 5 (Terminology), Epic 7 (Risk)

---

## Epic Goal

Create all 187 images for AIDefence V2 learning paths platform using UX spec earth-tone color palette, ensuring visual consistency, accessibility, and premium minimalist aesthetic across all concept cards, example cards, resource cards, and hero images.

---

## Success Criteria

- ✅ All 187 images created at correct resolutions (3:2 for cards, 16:9 for heroes)
- ✅ All images use UX spec earth-tone palette (exception: example cards use company brand colors)
- ✅ All images optimized (JPG source + WebP production)
- ✅ All images follow naming conventions (slug-based filenames)
- ✅ Color system documented and aligned with UX design specification
- ✅ All images meet WCAG 2.1 AAA contrast requirements when paired with text overlays

---

## Image Inventory

| Category | Total | Created | Remaining | Status |
|----------|-------|---------|-----------|---------|
| **Hero Images** | 5 | 5 | 0 | ✅ Complete |
| **History Concepts** | 15 | 15 | 0 | ✅ Complete |
| **Terminology Concepts** | 14 | 14 | 0 | ✅ Complete |
| **Risk Concepts** | 20 | 0 | 20 | 🔴 Ready to generate |
| **Responsibility Concepts** | 75 | 20 | 55 | 🟡 Blocked by Epic 10.5 |
| **Future Concepts** | 20 | 2 | 18 | 🟡 Blocked by Epic 11.5 |
| **Example Cards** | 28 | 0 | 28 | 🟡 7 ready, 21 blocked |
| **Resource Cards** | 10 | 0 | 10 | 🔴 Ready to generate |
| **TOTAL** | **187** | **34** | **153** | **18% Complete** |

---

## Color System (UX Spec Earth Tones)

**Source of Truth**: `/docs/learning-paths-color-system.md`

### Learning Path Colors

| Path | Primary Color | Hex | Secondary Colors | Visual Theme |
|------|---------------|-----|------------------|--------------|
| **History** | Toffee Brown | `#936639` | Saddle Brown `#7f4f24`, Camel `#a68a64` | Foundational, classic, historical |
| **Terminology** | Camel | `#a68a64` | Tan `#b6ad90`, Fern `#656d4a` | Technical, analytical, neutral |
| **Risk** | Dark Walnut | `#582f0e` | Saddle Brown `#7f4f24`, Charcoal `#333d29` | Serious, warning, critical |
| **Responsibility** | Dry Sage | `#a4ac86` | Khaki Beige `#c2c5aa`, Fern `#656d4a` | Legal, governance, authoritative |
| **Future** | Moss Green | `#414833` | Fern `#656d4a`, Charcoal `#333d29` | Innovation, growth, emerging |

### Example Card Colors (Exception)

**Design Philosophy**: Example cards use **dramatic company brand colors** for immediate visual recognition and distinction from earth-tone concept cards.

**Examples**:
- Amazon: Orange `#FF9900` + Black `#232F3E`
- Google: Blue `#4285F4`, Red `#EA4335`, Yellow `#FBBC04`, Green `#34A853`
- OpenAI: Green `#10A37F` + Black `#000000`
- Anthropic: Orange `#D97757` + Beige `#F7F4ED`
- GDPR/EU: Blue `#003399` + Yellow `#FFCC00` (EU flag colors)

---

## Story Breakdown

### Story 0.1: Verify Existing Images Color Accuracy ⏳

**Goal**: Ensure existing 34 images (5 heroes + 15 History + 14 Terminology) use correct UX spec earth-tone colors.

**Tasks**:
1. Check History images use Toffee Brown `#936639` (NOT Copper)
2. Check Terminology images use Camel `#a68a64` (NOT Rust/Red)
3. Check hero images use correct gradients per `/docs/learning-paths-color-system.md`
4. If wrong colors detected, regenerate affected images

**Acceptance Criteria**:
- [ ] All 5 hero images match UX spec gradients
- [ ] All 15 History images use Toffee Brown palette
- [ ] All 14 Terminology images use Camel palette
- [ ] Color verification report documented

**Estimated Effort**: 2-3 hours

---

### Story 0.2: Generate Risk Path Concept Cards (20 images) 🔴

**Goal**: Create all 20 Risk path concept card images using Dark Walnut earth-tone palette.

**Source**: `/docs/image-generation-prompts.md` (Risk section)

**Images to Create**:
1. `taxonomy-ai-harms.jpg` - Hierarchical tree diagram
2. `algorithmic-bias.jpg` - Balanced vs. unbalanced scales
3. `ai-hallucinations.jpg` - Glitchy text, broken lightbulb
4. `black-box-problem.jpg` - Opaque box vs. transparent cube
5. `ai-privacy.jpg` - Surveillance cameras, cracking shield
6. `deepfakes.jpg` - Face morphing, glitch effects
7. `ai-misinformation.jpg` - Social media feeds, fake news
8. `job-displacement.jpg` - Human replaced by robot arm
9. `autonomous-weapons.jpg` - Drone, targeting reticle, BANNED symbol
10. `ai-safety.jpg` - Safety helmet, alert symbols
11. `trustworthy-ai-pillars.jpg` - Seven Greek columns
12. `human-centered-ai.jpg` - Human surrounded by AI systems
13. `fairness-definitions.jpg` - Multiple balance scales
14. `ai-transparency.jpg` - Glass brain, visible pathways
15. `ai-accountability.jpg` - Gavel, responsibility chain
16. `ethics-landscape.jpg` - World map, ethics framework flags
17. `oecd-ai-principles.jpg` - OECD logo, five connected nodes
18. `ai-bill-of-rights.jpg` - American flag, White House, shield icons
19. `unesco-ai-ethics.jpg` - UNESCO logo, circular mandala
20. `responsible-ai-practice.jpg` - Bridge from principles to practice

**Color Palette**: Dark Walnut `#582f0e`, Saddle Brown `#7f4f24`, Charcoal `#333d29`

**Technical Specs**:
- Resolution: 1920x1280 (3:2 aspect ratio)
- Format: JPG (quality 85) → convert to WebP for production
- Style: Minimalist, professional, geometric abstraction
- Color Mode: RGB

**Acceptance Criteria**:
- [ ] All 20 Risk images created using Midjourney/DALL-E prompts
- [ ] All images use Dark Walnut color scheme
- [ ] All images are 1920x1280 resolution
- [ ] All images saved as JPG and WebP formats
- [ ] All images follow naming convention (slug.jpg)
- [ ] Images placed in `/public/images/risk/` directory

**Estimated Effort**: 8-10 hours (image generation + review + optimization)

---

### Story 0.3: Generate Resource Card Images (10 images) 🔴

**Goal**: Create all 10 resource card images using mixed earth-tone colors based on category.

**Source**: `/docs/image-generation-prompts.md` (Resources section)

**Images to Create**:
1. `risk-assessment-template.jpg` - NIST AI RMF (Dark Walnut)
2. `bias-audit-checklist.jpg` - Bias audit template (Dark Walnut)
3. `policy-templates.jpg` - Policy document stack (Dry Sage)
4. `impact-assessment-template.jpg` - DPIA form (Dry Sage)
5. `model-card-template.jpg` - Model documentation (Dry Sage)
6. `ethics-review-checklist.jpg` - Ethics review flowchart (Dry Sage)
7. `incident-response-playbook.jpg` - Emergency playbook (Dark Walnut)
8. `vendor-evaluation-scorecard.jpg` - Vendor scorecard (Dry Sage)
9. `ai-governance-roadmap.jpg` - 12-month timeline (Dry Sage)
10. `aigp-study-guide.jpg` - AIGP certification badge (Moss Green)

**Color Mapping**:
- Risk-related resources: Dark Walnut `#582f0e`
- Governance resources: Dry Sage `#a4ac86`
- Career resources: Moss Green `#414833`

**Technical Specs**:
- Resolution: 1200x800 (3:2 aspect ratio)
- Format: JPG (quality 85) → convert to WebP
- Style: Professional templates, document previews, clean layout

**Acceptance Criteria**:
- [ ] All 10 resource images created
- [ ] Images use correct category colors (Dark Walnut, Dry Sage, or Moss Green)
- [ ] All images are 1200x800 resolution
- [ ] All images saved as JPG and WebP formats
- [ ] Images placed in `/public/images/resources/` directory

**Estimated Effort**: 4-5 hours

---

### Story 0.4: Generate Example Card Images - Batch 1 (7 images) 🔴

**Goal**: Create first batch of example card images using dramatic company brand colors.

**Source**: `/docs/image-generation-prompts.md` (Examples section)

**Images to Create**:
1. `siri-alexa-example.jpg` - Voice waveforms (Apple blue, Amazon orange)
2. `google-maps-example.jpg` - AI-powered maps (Google colors)
3. `amazon-hiring-bias.jpg` - Amazon logo, legal documents (orange, navy)
4. `gdpr-enforcement-example.jpg` - GDPR shield, €50M fine (EU colors)
5. `compas-recidivism.jpg` - COMPAS logo, courtroom (navy, orange)
6. `eu-ai-act-cases.jpg` - EU flag, AI Act compliance (blue, yellow)
7. `openai-anthropic-comparison.jpg` - Foundation models (green, orange)

**Color Palettes** (Company Brands):
- Amazon: Orange `#FF9900`, Black `#232F3E`
- Google: Blue `#4285F4`, Red `#EA4335`, Yellow `#FBBC04`, Green `#34A853`
- Apple: Gray `#555555`, White `#FFFFFF`
- EU: Blue `#003399`, Yellow `#FFCC00`
- OpenAI: Green `#10A37F`
- Anthropic: Orange `#D97757`

**Technical Specs**:
- Resolution: 1200x800 (3:2 aspect ratio)
- Format: JPG (quality 85) → convert to WebP
- Style: Modern, professional, recognizable branding

**Acceptance Criteria**:
- [ ] All 7 example images created
- [ ] Images use dramatic company brand colors (NOT earth tones)
- [ ] Company logos/branding clearly visible
- [ ] All images are 1200x800 resolution
- [ ] All images saved as JPG and WebP formats
- [ ] Images placed in `/public/images/examples/` directory

**Estimated Effort**: 3-4 hours

---

### Story 0.5: Validate Knowledge Graph Integrity (140 concept cards) 🔴

**Goal**: Verify that all existing knowledge graph concept card references point to actual article files and have no broken cross-references.

**Status**: PREREQUISITE for Story 0.6 (must validate existing metadata before adding more)

**Context**:
- `knowledge-graph.yaml` contains metadata for concept cards across 5 paths
- Already complete: History (15), Terminology (14), Risk (20)
- Need completion: Responsibility (75), Future (20)
- The knowledge graph REFERENCES the full article files in `/content/articles/final/`
- Knowledge graph extracts: TL;DR, examples, content sections, related concepts, cross-path references

**Tasks**:
1. Read `/content/knowledge-graph.yaml` to get existing concept cards
2. Create validation script: `/scripts/validate-knowledge-graph.js` that checks:
   - All `source_file` paths point to actual files in `/content/articles/final/`
   - All `related_concepts` IDs exist in the knowledge graph
   - All `cross_path_refs` IDs exist in their respective path sections
   - All `example_cards` IDs exist in `example_cards` section
   - No duplicate concept IDs
   - No duplicate slugs
   - All required fields present (id, title, slug, path, source_file, tldr)
3. Run validation script on existing knowledge graph
4. Generate validation report: `/docs/knowledge-graph-validation-report.md` showing:
   - Total concept cards checked
   - Valid concept cards ✅
   - Broken file references ❌
   - Broken cross-references ⚠️
   - Missing required fields ⚠️
5. Fix any issues found:
   - Update source_file paths if files were renamed
   - Remove broken cross-references
   - Add missing required fields

**Validation Script Example**:
```javascript
// /scripts/validate-knowledge-graph.js
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const REQUIRED_FIELDS = ['id', 'title', 'slug', 'path', 'source_file', 'tldr'];
const VALID_PATHS = ['history', 'terminology', 'risk', 'responsibility', 'future'];

function validateKnowledgeGraph() {
  const kgPath = path.join(process.cwd(), 'content/knowledge-graph.yaml');
  const kg = yaml.load(fs.readFileSync(kgPath, 'utf-8'));

  const issues = [];
  const allConceptIds = new Set();
  const allSlugs = new Set();

  // Collect all concept IDs for cross-reference validation
  for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
    kg[pathKey].forEach(card => {
      if (card.id) allConceptIds.add(card.id);
    });
  }

  // Validate each concept card
  for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
    kg[pathKey].forEach(card => {
      // Check required fields
      REQUIRED_FIELDS.forEach(field => {
        if (!card[field]) issues.push(`${card.id || 'unknown'}: Missing ${field}`);
      });

      // Check source file exists
      if (card.source_file) {
        const filePath = path.join(process.cwd(), card.source_file);
        if (!fs.existsSync(filePath)) {
          issues.push(`${card.id}: File not found: ${card.source_file}`);
        }
      }

      // Check for duplicate slugs
      if (card.slug) {
        if (allSlugs.has(card.slug)) {
          issues.push(`${card.id}: Duplicate slug: ${card.slug}`);
        }
        allSlugs.add(card.slug);
      }

      // Validate related_concepts references
      if (card.related_concepts) {
        card.related_concepts.forEach(refId => {
          if (!allConceptIds.has(refId)) {
            issues.push(`${card.id}: Broken related_concepts reference: ${refId}`);
          }
        });
      }

      // Validate cross_path_refs references
      if (card.cross_path_refs) {
        for (const [refPath, refIds] of Object.entries(card.cross_path_refs)) {
          refIds.forEach(refId => {
            if (!allConceptIds.has(refId)) {
              issues.push(`${card.id}: Broken cross_path_refs[${refPath}] reference: ${refId}`);
            }
          });
        }
      }
    });
  }

  return issues;
}
```

**Expected Validation Report Format**:
```markdown
# Knowledge Graph Validation Report
Generated: 2025-12-22

## Summary
- Total concept cards: 49 (History: 15, Terminology: 14, Risk: 20)
- Valid cards: 47 ✅
- Cards with issues: 2 ⚠️
- Broken file references: 1 ❌
- Broken cross-references: 3 ⚠️

## Validation Results by Path
- History: 15/15 valid ✅
- Terminology: 13/14 valid ⚠️ (1 broken file ref)
- Risk: 19/20 valid ⚠️ (3 broken cross-refs)

## Issues Found

### Broken File References
1. term-6 (feature-engineering)
   - source_file: "content/articles/final/article-90-feature-engineering.md" NOT FOUND
   - Actual file: "content/articles/final/article-90-feature-engineering-explained.md"

### Broken Cross-References
1. risk-2 (algorithmic-bias)
   - cross_path_refs.terminology: [term-99] does not exist
   - Suggested fix: Remove or update to valid term ID

2. risk-5 (ai-privacy)
   - related_concepts: [risk-25] does not exist (only 20 risk concepts)
   - Suggested fix: Remove invalid reference

[... detailed issues for each card ...]
```

**Acceptance Criteria**:
- [ ] Validation script created and tested
- [ ] All existing knowledge graph entries validated
- [ ] Validation report generated showing results
- [ ] All broken file references fixed (correct source_file paths)
- [ ] All broken cross-references removed or corrected
- [ ] No duplicate concept IDs
- [ ] No duplicate slugs
- [ ] All required fields present
- [ ] Validation report shows 0 critical issues ✅

**Estimated Effort**: 3-4 hours
- Script development: 1.5 hours
- Running validation: 15 minutes
- Fixing issues: 1-2 hours
- Re-validation: 15 minutes

**Dependencies**: None (can run immediately)

**Blocks**: Story 0.6 (knowledge graph completion depends on valid existing structure)

---

### Story 0.6: Complete Knowledge Graph Metadata (95 concept cards) 🟡

**Goal**: Define complete metadata for all Responsibility and Future path concept cards to unblock remaining image generation.

**Status**: BLOCKS 116 images (75 Responsibility + 20 Future + 21 examples)

**Prerequisites**:
- ✅ Story 0.5 complete (all articles validated and have proper frontmatter)

**Tasks**:
1. Read all 75 Responsibility articles in `/content/articles/final/`
2. Extract metadata for resp-1 through resp-75:
   - `title`: Full article title
   - `slug`: URL-friendly slug
   - `path`: "responsibility"
   - `source_file`: Relative path to article file
   - `tldr`: 1-2 sentence summary
   - `content_sections`: Array of 3-5 main sections
   - `related_concepts`: Array of related concept IDs (same path)
   - `cross_path_refs`: Object with arrays per path (history, terminology, risk, future)
   - `tags`: Array of 3-6 relevant tags
3. Read all 20 Future articles in `/content/articles/final/`
4. Extract metadata for future-1 through future-20 (same fields)
5. Update `/content/knowledge-graph.yaml` with new metadata sections:
   - `concept_cards_responsibility: [...]`
   - `concept_cards_future: [...]`
6. Identify remaining 9 example cards referenced by Responsibility/Future paths
7. Define example card metadata for those 9 examples

**Example Output** (Responsibility card):
```yaml
concept_cards_responsibility:
  - id: resp-1
    title: "EU AI Act Overview – What You Need to Know"
    slug: eu-ai-act-overview
    path: responsibility
    source_file: "content/articles/final/article-51-eu-ai-act-overview.md"
    tldr: "The EU AI Act is the world's first comprehensive AI regulation, establishing risk-based tiers (unacceptable, high-risk, limited-risk, minimal-risk) with varying compliance requirements."
    content_sections:
      - "Four Risk Tiers Explained"
      - "High-Risk AI Systems List"
      - "Compliance Timelines & Deadlines"
      - "Penalties for Non-Compliance"
      - "How to Prepare Your Organization"
    related_concepts: [resp-2, resp-3, resp-4, resp-5]
    cross_path_refs:
      risk: [risk-14, risk-15]
      terminology: [term-1]
    tags: [eu-ai-act, regulation, compliance, risk-based-approach, gdpr]
    example_cards: [ex-eu-ai-act-cases]
```

**Acceptance Criteria**:
- [ ] All 75 Responsibility concept cards have complete metadata
- [ ] All 20 Future concept cards have complete metadata
- [ ] All 9 remaining example cards identified and defined
- [ ] `/content/knowledge-graph.yaml` updated with new sections
- [ ] Cross-references validated (all referenced IDs exist)
- [ ] Quality check: No duplicate slugs, all source files exist

**Estimated Effort**: 18-22 hours (3-4 days)

**Dependencies**: None

**Blocks**:
- Story 0.7 (Generate Responsibility images)
- Story 0.8 (Generate Future images)
- Story 0.9 (Generate remaining Example images)

---

### Story 0.7: Generate Responsibility Path Concept Cards (20 images) ✅

**Status**: READY TO EXECUTE (20 existing articles)
**Note**: Additional 55 images will be generated in Epic 10.5 Story 10.5.7 after new articles are created

**Goal**: Create 20 Responsibility path concept card images for existing articles (resp-1 through resp-20) using Dry Sage earth-tone palette.

**Prerequisites**:
- ✅ Story 0.6 complete (knowledge graph validated)
- ✅ Image generation prompts created in `/docs/story-0.7-responsibility-image-prompts.md`

**Color Palette**: Dry Sage `#a4ac86`, Khaki Beige `#c2c5aa`, Fern `#656d4a`

**Visual Themes**:
- Legal documents, shields, governance structures
- EU AI Act, GDPR, regulatory frameworks
- Compliance checklists, policy templates
- Governance flowcharts, decision trees

**Technical Specs**:
- Resolution: 1920x1280 (3:2 aspect ratio)
- Format: JPG (quality 85) → convert to WebP
- Style: Minimalist, professional, authoritative

**Acceptance Criteria**:
- [ ] All 20 Responsibility images created (resp-1 through resp-20)
- [ ] All images use Dry Sage color scheme
- [ ] All images are 1920x1280 resolution
- [ ] All images saved as JPG and WebP formats
- [ ] Images placed in `/public/images/responsibility/` directory

**Estimated Effort**: 13.5-16.5 hours (see `/docs/story-0.7-responsibility-image-prompts.md` for detailed breakdown)

**Note**: Remaining 55 images (resp-21 through resp-75) will be created in Epic 10.5 Story 10.5.7 after articles are written

---

### Story 0.8: Generate Future Path Concept Cards (2 images) ✅

**Status**: READY TO EXECUTE (2 existing articles)
**Note**: Additional 18 images will be generated in Epic 11.5 Story 11.5.6 after new articles are created

**Goal**: Create 2 Future path concept card images for existing articles (future-1, future-2) using Moss Green earth-tone palette.

**Prerequisites**:
- ✅ Story 0.6 complete (knowledge graph validated)
- ✅ Image generation prompts created in `/docs/story-0.8-future-image-prompts.md`

**Color Palette**: Moss Green `#414833`, Fern `#656d4a`, Charcoal `#333d29`

**Visual Themes**:
- Futuristic AI concepts, AGI visualizations
- Emerging technologies, innovation imagery
- AI careers, AIGP certification
- National security, AI governance futures

**Technical Specs**:
- Resolution: 1920x1280 (3:2 aspect ratio)
- Format: JPG (quality 85) → convert to WebP
- Style: Minimalist, professional, forward-looking

**Acceptance Criteria**:
- [ ] Both Future images created (future-1, future-2)
- [ ] Both images use Moss Green color scheme
- [ ] Both images are 1920x1280 resolution
- [ ] Both images saved as JPG and WebP formats
- [ ] Images placed in `/public/images/future/` directory

**Estimated Effort**: 2-2.5 hours (see `/docs/story-0.8-future-image-prompts.md` for detailed breakdown)

**Note**: Remaining 18 images (future-3 through future-20) will be created in Epic 11.5 Story 11.5.6 after articles are written

---

### Story 0.9: Generate Example Card Images - Batch 2 (21 images) 🟡

**Status**: BLOCKED by Story 0.6

**Goal**: Create remaining example card images after identifying all examples referenced by Responsibility/Future paths.

**Prerequisites**:
- ✅ Story 0.6 complete (9 remaining examples identified)
- ✅ Image generation prompts created for identified examples

**Examples to Create** (estimated):
- Netflix recommendation system
- COMPAS recidivism algorithm
- UK grading algorithm 2020
- Healthcare algorithm bias examples
- Predictive policing case studies
- Apple Card gender bias
- Gender Shades study
- And 14 more TBD after Story 0.6

**Color Palettes**: Dramatic company brand colors (varies per example)

**Technical Specs**:
- Resolution: 1200x800 (3:2 aspect ratio)
- Format: JPG (quality 85) → convert to WebP
- Style: Modern, professional, recognizable branding

**Acceptance Criteria**:
- [ ] All 21 remaining example images created
- [ ] Images use dramatic company brand colors
- [ ] All images are 1200x800 resolution
- [ ] All images saved as JPG and WebP formats
- [ ] Images placed in `/public/images/examples/` directory

**Estimated Effort**: 8-10 hours

---

### Story 0.10: Image Optimization & WebP Conversion 🔴

**Goal**: Optimize all images for web performance and create WebP versions for production.

**Tasks**:
1. Convert all JPG images to WebP format (quality 85)
2. Verify file sizes (target: <200KB per image)
3. Create responsive image sets if needed (1x, 2x for retina)
4. Validate all images load correctly
5. Create image manifest CSV for reference

**Tools**:
- ImageMagick or Sharp for batch conversion
- WebP converter

**Acceptance Criteria**:
- [ ] All 187 images have WebP versions
- [ ] All images under 200KB (WebP format)
- [ ] Image manifest CSV created with filenames, sizes, paths
- [ ] All images validated (no corruption)

**Estimated Effort**: 2-3 hours

---

### Story 0.11: Documentation & Handoff 🔴

**Goal**: Document complete image generation process and create handoff guide for development team.

**Deliverables**:
1. **Image Usage Guide** (`/docs/image-usage-guide.md`):
   - How to reference images in MDX articles
   - Naming conventions
   - Directory structure
   - Responsive image patterns
   - Alt text best practices

2. **Image Manifest** (`/docs/image-manifest.csv`):
   - Filename, Path, Category, Color Palette, Resolution, File Size
   - Cross-reference with knowledge-graph.yaml IDs

3. **Color System Reference** (already exists):
   - `/docs/learning-paths-color-system.md`

**Acceptance Criteria**:
- [ ] Image usage guide documented
- [ ] Image manifest CSV complete
- [ ] All images cataloged with metadata
- [ ] Development team can easily find and use images

**Estimated Effort**: 2-3 hours

---

## Implementation Sequence

### Phase 1: Immediate (Stories 0.1-0.5) - Week 1
**Estimated: 18-24 hours**

1. ✅ Story 0.1: Verify existing images (2-3 hours)
2. 🔴 Story 0.2: Generate Risk concept cards - 20 images (8-10 hours)
3. 🔴 Story 0.3: Generate Resource cards - 10 images (4-5 hours)
4. 🔴 Story 0.4: Generate Example cards Batch 1 - 7 images (3-4 hours)
5. 🔴 Story 0.5: Validate knowledge graph integrity - 49 existing concept cards (3-4 hours) ✨ **NEW**

**Output**: 37 new images created (71 total) + Knowledge graph validated

---

### Phase 2: Knowledge Graph Completion (Story 0.6) - Week 2
**Estimated: 18-22 hours**

1. 🟡 Story 0.6: Complete knowledge graph metadata (18-22 hours)
   - Define 95 concept cards
   - Identify 9 remaining examples
   - Update knowledge-graph.yaml

**Prerequisites**: Story 0.5 complete (knowledge graph validated, no broken references)

**Output**: Complete metadata for all 162 concept cards

---

### Phase 3: Remaining Images (Stories 0.7-0.9) - Week 3-4
**Estimated: 41-50 hours**

1. 🟡 Story 0.7: Generate Responsibility concept cards - 75 images (25-30 hours)
2. 🟡 Story 0.8: Generate Future concept cards - 20 images (8-10 hours)
3. 🟡 Story 0.9: Generate Example cards Batch 2 - 21 images (8-10 hours)

**Output**: 116 new images created (187 total)

---

### Phase 4: Optimization & Handoff (Stories 0.9-0.10) - Week 4
**Estimated: 4-6 hours**

1. 🔴 Story 0.9: Image optimization & WebP conversion (2-3 hours)
2. 🔴 Story 0.10: Documentation & handoff (2-3 hours)

**Output**: All images optimized, documented, ready for development

---

## Total Effort Estimate

| Phase | Stories | Hours | Days (8h/day) |
|-------|---------|-------|---------------|
| Phase 1 | 0.1-0.5 | 18-24 | 2-3 days |
| Phase 2 | 0.6 | 18-22 | 3-4 days |
| Phase 3 | 0.7-0.9 | 41-50 | 5-6 days |
| Phase 4 | 0.10-0.11 | 4-6 | 1 day |
| **TOTAL** | **11 stories** | **81-102 hours** | **11-14 days** |

---

## Dependencies

**Epic 0 blocks**:
- Epic 1: Homepage (needs hero image)
- Epic 2: History Path (needs all History images - READY)
- Epic 4: All Paths Infrastructure (needs routing to paths)
- Epic 5: Terminology Path (needs all Terminology images - READY)
- Epic 7: Risk Path (needs all Risk images - Phase 1)

**Epic 0 depends on**:
- Nothing (no dependencies)

---

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Existing 34 images use wrong colors | HIGH | Medium | Story 0.1 verifies early, time to regenerate |
| Image generation takes longer than estimated | Medium | High | Use Midjourney batch mode, prepare prompts in advance |
| Knowledge graph completion (Story 0.5) takes 30+ hours | Medium | Medium | Break into smaller batches, use AI assistance to extract metadata |
| WebP conversion quality issues | Low | Low | Test sample images first, adjust quality settings |
| File size exceeds 200KB target | Medium | Medium | Adjust compression, resize if needed (1600x1067 fallback) |

---

## Success Metrics

- ✅ 187/187 images created (100% coverage)
- ✅ All images use correct color palettes per learning path
- ✅ All images meet WCAG 2.1 AAA contrast when paired with text
- ✅ Average image file size <200KB (WebP)
- ✅ Knowledge graph 100% complete (162 concept cards)
- ✅ Zero blocking issues for Epic 1-7 implementation
- ✅ Development team can find and use images without assistance

---

## Files & References

**Created in This Epic**:
- ✅ `/docs/learning-paths-color-system.md` - Complete color system
- ✅ `/docs/image-generation-prompts.md` - 37 Midjourney/DALL-E prompts
- ✅ `/docs/epic-0-image-generation-strategy.md` - This document

**To Be Created**:
- ⏭️ `/scripts/validate-knowledge-graph.js` - Story 0.5 (validation script)
- ⏭️ `/docs/knowledge-graph-validation-report.md` - Story 0.5 (validation results)
- ⏭️ `/docs/image-usage-guide.md` - Story 0.11
- ⏭️ `/docs/image-manifest.csv` - Story 0.11

**To Be Updated**:
- ⏭️ `/content/knowledge-graph.yaml` - Story 0.6 (add resp + future metadata)

**Referenced**:
- `/docs/ux-design-specification.md` - Source of truth for earth-tone colors
- `/docs/aidefence-v2-prd.md` - Product requirements
- `/docs/aidefence-v2-implementation-plan.md` - Overall implementation plan
- `/docs/content-creation-status.md` - Article completion status

---

## Next Actions

### Immediate (Today/Tomorrow):
1. **Execute Story 0.1**: Verify existing 34 images use correct UX spec colors
2. **Start Story 0.2**: Generate 20 Risk concept card images using prompts in `/docs/image-generation-prompts.md`
3. **Start Story 0.3**: Generate 10 Resource card images
4. **Start Story 0.4**: Generate 7 Example card images (Batch 1)
5. **Execute Story 0.5**: Validate knowledge graph integrity ✨ **NEW**

### This Week (Phase 1):
- Complete Stories 0.1-0.5
- Have 71 total images (34 existing + 37 new)
- Knowledge graph validated (no broken references)
- Unblock Epic 2 (History), Epic 5 (Terminology), Epic 7 (Risk)

### Next Week (Phase 2):
- Execute Story 0.6: Complete knowledge graph metadata
- Prepare for Phase 3 (Responsibility + Future images)

---

**Epic Status**: Ready to execute Phase 1 (Stories 0.1-0.5)
**Blockers**: None
**Ready to Start**: Story 0.1 (Verify existing images) + Story 0.5 (Validate knowledge graph)
