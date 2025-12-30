# Epic 0 Phase 1 - Immediate Action Checklist

**Goal**: Create 37 new images (Risk + Resources + Examples Batch 1) to reach 71 total images
**Timeline**: Week 1 (15-20 hours)
**Status**: Ready to Execute

---

## ✅ Prerequisites Complete

- ✅ Color system documented (`/docs/learning-paths-color-system.md`)
- ✅ Image generation prompts ready (`/docs/image-generation-prompts.md`)
- ✅ Epic 0 strategy documented (`/docs/epic-0-image-generation-strategy.md`)
- ✅ UX spec earth-tone palette confirmed

---

## Story 0.1: Verify Existing Images (2-3 hours)

### Task 1.1: Check History Images (15 images)

**Location**: `/public/images/history/` (or wherever currently stored)

**Verification**:
- [ ] Open each of 15 History concept card images
- [ ] Verify color palette uses **Toffee Brown `#936639`** (NOT Copper `#B87333`)
- [ ] Check gradients use Toffee Brown → Saddle Brown (`#7f4f24`)
- [ ] Document any images that need regeneration

**Expected Filenames**:
1. `ai-definition.jpg` (history-1)
2. `ai-family-tree.jpg` (history-2)
3. `ai-technology-stack.jpg` (history-3)
4. `ai-history-dartmouth-deepmind.jpg` (history-4)
5. `strong-vs-weak-ai.jpg` (history-5)
6. `machine-learning-demystified.jpg` (history-6)
7. `deep-learning-decoded.jpg` (history-7)
8. `generative-ai-explained.jpg` (history-8)
9. `large-language-models.jpg` (history-9)
10. `ai-vs-automation.jpg` (history-10)
11. `data-behind-ai.jpg` (history-11)
12. `foundation-models.jpg` (history-12)
13. `multimodal-ai.jpg` (history-13)
14. `ai-compute-gpus.jpg` (history-14)
15. `environmental-cost-ai.jpg` (history-15)

---

### Task 1.2: Check Terminology Images (14 images)

**Location**: `/public/images/terminology/` (or wherever currently stored)

**Verification**:
- [ ] Open each of 14 Terminology concept card images
- [ ] Verify color palette uses **Camel `#a68a64`** (NOT Rust `#B7410E` or Red)
- [ ] Check gradients use Camel → Fern (`#656d4a`)
- [ ] Document any images that need regeneration

**Expected Filenames**:
1. `what-is-machine-learning.jpg` (term-1)
2. `supervised-vs-unsupervised.jpg` (term-2)
3. `neural-networks-basics.jpg` (term-3)
4. `training-validation-test-data.jpg` (term-4)
5. `bias-variance-tradeoff.jpg` (term-5)
6. `feature-engineering.jpg` (term-6)
7. `cnns-for-images.jpg` (term-7)
8. `rnns-for-sequences.jpg` (term-8)
9. `transformers-architecture.jpg` (term-9)
10. `pretraining-finetuning.jpg` (term-10)
11. `hyperparameters-vs-parameters.jpg` (term-11)
12. `model-size-parameters-flops.jpg` (term-12)
13. `embeddings-vectors.jpg` (term-13)
14. `inference-vs-training.jpg` (term-14)

---

### Task 1.3: Check Hero Images (5 images)

**Location**: `/public/images/heroes/` (or wherever currently stored)

**Verification**:
- [ ] Open each of 5 hero images (1920x1080 resolution)
- [ ] Verify each uses correct learning path gradient:

| Hero Image | Expected Gradient | Hex Values |
|------------|-------------------|------------|
| `history-hero.jpg` | Toffee Brown → Saddle Brown | `#936639` → `#7f4f24` |
| `terminology-hero.jpg` | Camel → Fern | `#a68a64` → `#656d4a` |
| `risk-hero.jpg` | Dark Walnut → Charcoal | `#582f0e` → `#333d29` |
| `responsibility-hero.jpg` | Dry Sage → Fern | `#a4ac86` → `#656d4a` |
| `future-hero.jpg` | Moss Green → Charcoal | `#414833` → `#333d29` |

---

### Task 1.4: Document Verification Results

**Create**: `/docs/image-verification-report.md`

**Template**:
```markdown
# Image Verification Report
**Date**: [Today's Date]
**Verified By**: Sunil

## Summary
- Total Existing Images: 34
- Correct Colors: [X]
- Need Regeneration: [Y]

## History Images (15)
- ✅ Correct: [list filenames]
- ❌ Wrong Color (need regen): [list filenames with issue]

## Terminology Images (14)
- ✅ Correct: [list filenames]
- ❌ Wrong Color (need regen): [list filenames with issue]

## Hero Images (5)
- ✅ Correct: [list filenames]
- ❌ Wrong Color (need regen): [list filenames with issue]

## Action Items
- [ ] Regenerate [N] images with correct UX spec colors
- [ ] Proceed to Story 0.2 (generate Risk images)
```

---

## Story 0.2: Generate Risk Concept Cards (8-10 hours)

### Setup

**Tool**: Midjourney (recommended) or DALL-E 3
**Source**: `/docs/image-generation-prompts.md` (lines 67-386)
**Output Directory**: `/public/images/risk/`

**Midjourney Settings**:
- Aspect ratio: `--ar 3:2`
- Style: `--style raw`
- Version: `--v 6`
- Quality: Default

**DALL-E 3 Settings**:
- Size: Custom (1920x1280)
- Style: Natural
- Quality: HD

---

### Batch Generation (20 images)

#### Batch A: Harms & Problems (1-5)

- [ ] **risk-1**: `taxonomy-ai-harms.jpg`
  - Prompt: See `/docs/image-generation-prompts.md` line 70
  - Visual: Hierarchical tree diagram, warning symbols
  - Colors: Dark Walnut `#582f0e`, Saddle Brown, Charcoal

- [ ] **risk-2**: `algorithmic-bias.jpg`
  - Prompt: Line 85
  - Visual: Balanced vs. unbalanced scales, skewed data
  - Colors: Dark Walnut palette

- [ ] **risk-3**: `ai-hallucinations.jpg`
  - Prompt: Line 100
  - Visual: Glitchy text, broken lightbulb, ERROR symbols
  - Colors: Dark Walnut palette

- [ ] **risk-4**: `black-box-problem.jpg`
  - Prompt: Line 115
  - Visual: Opaque box vs. transparent cube, question marks
  - Colors: Dark Walnut palette

- [ ] **risk-5**: `ai-privacy.jpg`
  - Prompt: Line 130
  - Visual: Surveillance cameras, cracking shield, GDPR text
  - Colors: Dark Walnut palette

---

#### Batch B: Threats & Safety (6-10)

- [ ] **risk-6**: `deepfakes.jpg`
  - Prompt: Line 145
  - Visual: Face morphing, glitch effects, FAKE stamp
  - Colors: Dark Walnut palette

- [ ] **risk-7**: `ai-misinformation.jpg`
  - Prompt: Line 160
  - Visual: Social media feeds, fake news, ballot box
  - Colors: Dark Walnut palette

- [ ] **risk-8**: `job-displacement.jpg`
  - Prompt: Line 175
  - Visual: Human replaced by robot arm, factory automation
  - Colors: Dark Walnut palette

- [ ] **risk-9**: `autonomous-weapons.jpg`
  - Prompt: Line 190
  - Visual: Drone, targeting reticle, BANNED symbol
  - Colors: Dark Walnut palette

- [ ] **risk-10**: `ai-safety.jpg`
  - Prompt: Line 205
  - Visual: Safety helmet, alert symbols, error messages
  - Colors: Dark Walnut palette

---

#### Batch C: Trustworthy AI (11-15)

- [ ] **risk-11**: `trustworthy-ai-pillars.jpg`
  - Prompt: Line 220
  - Visual: Seven Greek columns, strong foundation
  - Colors: Dark Walnut palette

- [ ] **risk-12**: `human-centered-ai.jpg`
  - Prompt: Line 235
  - Visual: Human surrounded by orbiting AI systems
  - Colors: Dark Walnut palette

- [ ] **risk-13**: `fairness-definitions.jpg`
  - Prompt: Line 250
  - Visual: Multiple balance scales, equations, charts
  - Colors: Dark Walnut palette

- [ ] **risk-14**: `ai-transparency.jpg`
  - Prompt: Line 265
  - Visual: Glass brain, visible pathways, GDPR Article 22
  - Colors: Dark Walnut palette

- [ ] **risk-15**: `ai-accountability.jpg`
  - Prompt: Line 280
  - Visual: Gavel, responsibility chain, legal framework
  - Colors: Dark Walnut palette

---

#### Batch D: Ethics & Principles (16-20)

- [ ] **risk-16**: `ethics-landscape.jpg`
  - Prompt: Line 295
  - Visual: World map, ethics framework flags
  - Colors: Dark Walnut palette

- [ ] **risk-17**: `oecd-ai-principles.jpg`
  - Prompt: Line 310
  - Visual: OECD logo, five connected nodes
  - Colors: Dark Walnut palette

- [ ] **risk-18**: `ai-bill-of-rights.jpg`
  - Prompt: Line 325
  - Visual: American flag, White House, shield icons
  - Colors: Dark Walnut palette

- [ ] **risk-19**: `unesco-ai-ethics.jpg`
  - Prompt: Line 340
  - Visual: UNESCO logo, circular mandala pattern
  - Colors: Dark Walnut palette

- [ ] **risk-20**: `responsible-ai-practice.jpg`
  - Prompt: Line 355
  - Visual: Bridge from principles to practice, checklist
  - Colors: Dark Walnut palette

---

### Post-Generation Tasks

- [ ] Download all 20 images (JPG format, quality 85)
- [ ] Rename files to match slugs (e.g., `taxonomy-ai-harms.jpg`)
- [ ] Verify resolution: 1920x1280
- [ ] Verify file sizes: <200KB each
- [ ] Place in `/public/images/risk/` directory
- [ ] Visual QA: Check colors match Dark Walnut palette
- [ ] Update checklist: Mark all 20 as complete

---

## Story 0.3: Generate Resource Cards (4-5 hours)

### Batch Generation (10 images)

**Output Directory**: `/public/images/resources/`
**Source**: `/docs/image-generation-prompts.md` (lines 390-590)

#### Risk-Related Resources (Dark Walnut `#582f0e`)

- [ ] **res-1**: `risk-assessment-template.jpg`
  - Prompt: Line 393
  - Visual: NIST AI RMF, risk matrix, 4-tier system
  - Colors: Dark Walnut palette

- [ ] **res-2**: `bias-audit-checklist.jpg`
  - Prompt: Line 408
  - Visual: Fairness metrics, test results, checklist
  - Colors: Dark Walnut palette

- [ ] **res-7**: `incident-response-playbook.jpg`
  - Prompt: Line 513
  - Visual: Emergency playbook, timeline, response steps
  - Colors: Dark Walnut palette

---

#### Governance Resources (Dry Sage `#a4ac86`)

- [ ] **res-3**: `policy-templates.jpg`
  - Prompt: Line 423
  - Visual: Policy document stack, governance icons
  - Colors: Dry Sage palette

- [ ] **res-4**: `impact-assessment-template.jpg`
  - Prompt: Line 438
  - Visual: DPIA form, EU AI Act compliance, workflow
  - Colors: Dry Sage palette

- [ ] **res-5**: `model-card-template.jpg`
  - Prompt: Line 453
  - Visual: Model documentation, transparency labels
  - Colors: Dry Sage palette

- [ ] **res-6**: `ethics-review-checklist.jpg`
  - Prompt: Line 468
  - Visual: Ethics review flowchart, committee, approval gates
  - Colors: Dry Sage palette

- [ ] **res-8**: `vendor-evaluation-scorecard.jpg`
  - Prompt: Line 528
  - Visual: Vendor scorecard, due diligence checklist
  - Colors: Dry Sage palette

- [ ] **res-9**: `ai-governance-roadmap.jpg`
  - Prompt: Line 543
  - Visual: 12-month timeline, governance milestones
  - Colors: Dry Sage palette

---

#### Career Resources (Moss Green `#414833`)

- [ ] **res-10**: `aigp-study-guide.jpg`
  - Prompt: Line 558
  - Visual: AIGP certification badge, study materials
  - Colors: Moss Green palette

---

### Post-Generation Tasks

- [ ] Download all 10 images (JPG format, quality 85)
- [ ] Rename files to match slugs
- [ ] Verify resolution: 1200x800
- [ ] Verify file sizes: <150KB each
- [ ] Place in `/public/images/resources/` directory
- [ ] Visual QA: Check colors match category (Dark Walnut, Dry Sage, or Moss Green)
- [ ] Update checklist: Mark all 10 as complete

---

## Story 0.4: Generate Example Cards - Batch 1 (3-4 hours)

### Batch Generation (7 images)

**Output Directory**: `/public/images/examples/`
**Source**: `/docs/image-generation-prompts.md` (lines 594-803)
**Color Palette**: Dramatic company brand colors (NOT earth tones)

#### Technology Examples

- [ ] **ex-1**: `siri-alexa-example.jpg`
  - Prompt: Line 597
  - Visual: Voice waveforms, smart speakers
  - Colors: Apple blue, Amazon orange `#FF9900`
  - Resolution: 1200x800

- [ ] **ex-2**: `google-maps-example.jpg`
  - Prompt: Line 612
  - Visual: Map with AI routes, location pins
  - Colors: Google colors (blue, red, yellow, green)
  - Resolution: 1200x800

---

#### Legal/Bias Examples

- [ ] **ex-3**: `amazon-hiring-bias.jpg`
  - Prompt: Line 627
  - Visual: Amazon logo, gavel, legal documents, BIAS warning
  - Colors: Amazon orange `#FF9900`, Navy `#232F3E`
  - Resolution: 1200x800

- [ ] **ex-4**: `gdpr-enforcement-example.jpg`
  - Prompt: Line 642
  - Visual: GDPR shield, €50M fine, EU flag
  - Colors: EU blue `#003399`, Yellow `#FFCC00`
  - Resolution: 1200x800

- [ ] **ex-5**: `compas-recidivism.jpg`
  - Prompt: Line 657
  - Visual: COMPAS logo, courtroom, tilted scales
  - Colors: Navy `#002868`, Orange `#BF0A30`
  - Resolution: 1200x800

- [ ] **ex-6**: `eu-ai-act-cases.jpg`
  - Prompt: Line 672
  - Visual: EU flag, AI Act book, compliance checkmarks
  - Colors: EU blue `#003399`, Yellow `#FFCC00`
  - Resolution: 1200x800

---

#### AI Provider Examples

- [ ] **ex-7**: `openai-anthropic-comparison.jpg`
  - Prompt: Line 687
  - Visual: Split comparison, foundation models, logos
  - Colors: OpenAI green `#10A37F`, Anthropic orange `#D97757`
  - Resolution: 1200x800

---

### Post-Generation Tasks

- [ ] Download all 7 images (JPG format, quality 85)
- [ ] Rename files to match slugs
- [ ] Verify resolution: 1200x800
- [ ] Verify file sizes: <150KB each
- [ ] Place in `/public/images/examples/` directory
- [ ] Visual QA: Check company brand colors are prominent and recognizable
- [ ] Update checklist: Mark all 7 as complete

---

## Phase 1 Completion Checklist

### Final Verification

- [ ] **Total Images**: 71 (34 existing + 37 new)
  - [ ] History: 15 images ✅
  - [ ] Terminology: 14 images ✅
  - [ ] Risk: 20 images 🆕
  - [ ] Heroes: 5 images ✅
  - [ ] Resources: 10 images 🆕
  - [ ] Examples (Batch 1): 7 images 🆕

- [ ] **Color Verification**:
  - [ ] All History images use Toffee Brown `#936639`
  - [ ] All Terminology images use Camel `#a68a64`
  - [ ] All Risk images use Dark Walnut `#582f0e`
  - [ ] All Resource images use correct category colors
  - [ ] All Example images use dramatic company brand colors

- [ ] **Technical Verification**:
  - [ ] All concept cards: 1920x1280 (3:2 ratio)
  - [ ] All examples: 1200x800 (3:2 ratio)
  - [ ] All heroes: 1920x1080 (16:9 ratio)
  - [ ] All file sizes: <200KB

- [ ] **Directory Structure**:
  ```
  /public/images/
    ├── history/ (15 images)
    ├── terminology/ (14 images)
    ├── risk/ (20 images)
    ├── heroes/ (5 images)
    ├── resources/ (10 images)
    └── examples/ (7 images)
  ```

### Documentation Updates

- [ ] Create `/docs/image-verification-report.md`
- [ ] Update `/docs/epic-0-image-generation-strategy.md`:
  - [ ] Mark Stories 0.1-0.4 as complete
  - [ ] Update image inventory table
  - [ ] Document any issues encountered

### Ready for Next Phase

- [ ] **Phase 1 Complete**: 71/187 images (38%)
- [ ] **Unblocked Epics**:
  - [ ] Epic 2: History Path (has all 15 images)
  - [ ] Epic 5: Terminology Path (has all 14 images)
  - [ ] Epic 7: Risk Path (has all 20 images)
- [ ] **Ready to Start**: Story 0.5 (Complete knowledge graph metadata)

---

## Success Criteria Met

✅ **37 new images created**
✅ **All images use correct UX spec earth-tone colors**
✅ **All images meet resolution requirements**
✅ **Risk, Terminology, History paths unblocked for development**
✅ **Zero technical debt (all images production-ready)**

---

**Phase 1 Status**: Ready to Execute
**Next Phase**: Phase 2 - Story 0.5 (Knowledge Graph Metadata Completion)
**Estimated Completion**: End of Week 1
