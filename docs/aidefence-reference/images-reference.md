# AIDefence V2 - Images Reference

**Last Updated**: 2025-12-22
**Purpose**: Complete inventory of all images with names, sources, and folder locations
**Total Images**: 187 (34 created, 153 remaining)

---

## 📁 Image Organization

### Root Directory Structure

```
/public/images/
  /history/           ← 15 History concept cards
  /terminology/       ← 14 Terminology concept cards
  /risk/              ← 20 Risk concept cards
  /responsibility/    ← 75 Responsibility concept cards (needs Epic 0 Phase 3)
  /future/            ← 20 Future concept cards (needs Epic 0 Phase 3)
  /heroes/            ← 5 Learning path hero images
  /resources/         ← 10 Resource cards
  /examples/          ← 28 Example cards
```

---

## 🎨 Image Specifications

### Concept Cards
- **Resolution**: 1920x1280 (3:2 aspect ratio)
- **Format**: JPG (source) + WebP (production)
- **File Size Target**: <200KB
- **Color Palette**: UX spec earth-tone palette (varies by learning path)

### Hero Images
- **Resolution**: 1920x1080 (16:9 aspect ratio)
- **Format**: JPG + WebP
- **File Size Target**: <250KB
- **Style**: Dramatic gradients with path-specific colors

### Example Cards
- **Resolution**: 1200x800 (3:2 aspect ratio)
- **Format**: JPG + WebP
- **File Size Target**: <150KB
- **Color Palette**: Dramatic company brand colors (NOT earth tones)

### Resource Cards
- **Resolution**: 1200x800 (3:2 aspect ratio)
- **Format**: JPG + WebP
- **File Size Target**: <150KB
- **Color Palette**: Mixed (based on category - Risk/Governance/Career)

---

## ✅ Created Images (34 total)

### Hero Images (5)
| File | Path | Resolution | Color |
|------|------|------------|-------|
| `history-hero.jpg` | `/public/images/heroes/` | 1920x1080 | Toffee Brown → Saddle Brown |
| `terminology-hero.jpg` | `/public/images/heroes/` | 1920x1080 | Camel → Fern |
| `risk-hero.jpg` | `/public/images/heroes/` | 1920x1080 | Dark Walnut → Charcoal |
| `responsibility-hero.jpg` | `/public/images/heroes/` | 1920x1080 | Dry Sage → Fern |
| `future-hero.jpg` | `/public/images/heroes/` | 1920x1080 | Moss Green → Charcoal |

### History Path Concept Cards (15)
| File | Concept ID | Path | Color |
|------|-----------|------|-------|
| `ai-definition.jpg` | history-1 | `/public/images/history/` | Toffee Brown #936639 |
| `ai-family-tree.jpg` | history-2 | `/public/images/history/` | Toffee Brown #936639 |
| `ai-technology-stack.jpg` | history-3 | `/public/images/history/` | Toffee Brown #936639 |
| `ai-history-dartmouth-deepmind.jpg` | history-4 | `/public/images/history/` | Toffee Brown #936639 |
| `strong-vs-weak-ai.jpg` | history-5 | `/public/images/history/` | Toffee Brown #936639 |
| `machine-learning-demystified.jpg` | history-6 | `/public/images/history/` | Toffee Brown #936639 |
| `deep-learning-decoded.jpg` | history-7 | `/public/images/history/` | Toffee Brown #936639 |
| `generative-ai-explained.jpg` | history-8 | `/public/images/history/` | Toffee Brown #936639 |
| `large-language-models.jpg` | history-9 | `/public/images/history/` | Toffee Brown #936639 |
| `ai-vs-automation.jpg` | history-10 | `/public/images/history/` | Toffee Brown #936639 |
| `data-behind-ai.jpg` | history-11 | `/public/images/history/` | Toffee Brown #936639 |
| `foundation-models.jpg` | history-12 | `/public/images/history/` | Toffee Brown #936639 |
| `multimodal-ai.jpg` | history-13 | `/public/images/history/` | Toffee Brown #936639 |
| `ai-compute-gpus.jpg` | history-14 | `/public/images/history/` | Toffee Brown #936639 |
| `environmental-cost-ai.jpg` | history-15 | `/public/images/history/` | Toffee Brown #936639 |

### Terminology Path Concept Cards (14)
| File | Concept ID | Path | Color |
|------|-----------|------|-------|
| `what-is-machine-learning.jpg` | term-1 | `/public/images/terminology/` | Camel #a68a64 |
| `supervised-vs-unsupervised.jpg` | term-2 | `/public/images/terminology/` | Camel #a68a64 |
| `neural-networks-basics.jpg` | term-3 | `/public/images/terminology/` | Camel #a68a64 |
| `training-validation-test-data.jpg` | term-4 | `/public/images/terminology/` | Camel #a68a64 |
| `bias-variance-tradeoff.jpg` | term-5 | `/public/images/terminology/` | Camel #a68a64 |
| `feature-engineering.jpg` | term-6 | `/public/images/terminology/` | Camel #a68a64 |
| `cnns-for-images.jpg` | term-7 | `/public/images/terminology/` | Camel #a68a64 |
| `rnns-for-sequences.jpg` | term-8 | `/public/images/terminology/` | Camel #a68a64 |
| `transformers-architecture.jpg` | term-9 | `/public/images/terminology/` | Camel #a68a64 |
| `pretraining-finetuning.jpg` | term-10 | `/public/images/terminology/` | Camel #a68a64 |
| `hyperparameters-vs-parameters.jpg` | term-11 | `/public/images/terminology/` | Camel #a68a64 |
| `model-size-parameters-flops.jpg` | term-12 | `/public/images/terminology/` | Camel #a68a64 |
| `embeddings-vectors.jpg` | term-13 | `/public/images/terminology/` | Camel #a68a64 |
| `inference-vs-training.jpg` | term-14 | `/public/images/terminology/` | Camel #a68a64 |

---

## 🔴 Images to Create (153 total)

See **Epic 0: Image Generation Strategy** (`/docs/epic-0-image-generation-strategy.md`) for complete list and generation prompts.

### Batch 1 - Ready to Generate (37 images)
- 20 Risk concept cards
- 10 Resource cards
- 7 Example cards (Batch 1)

**Prompts**: `/docs/image-generation-prompts.md`

### Batch 2 - Blocked by Epic 0 Phase 3 (116 images)
- 75 Responsibility concept cards
- 20 Future concept cards
- 21 Example cards (Batch 2)

**Blocked by**: Knowledge graph metadata completion (Epic 0 Phase 2)

---

## 🎨 Color System Reference

See `/docs/learning-paths-color-system.md` for complete color specifications.

### Learning Path Colors (Earth Tones)
- **History**: Toffee Brown `#936639`
- **Terminology**: Camel `#a68a64`
- **Risk**: Dark Walnut `#582f0e`
- **Responsibility**: Dry Sage `#a4ac86`
- **Future**: Moss Green `#414833`

### Example Card Colors (Dramatic Brand Colors)
- Amazon: Orange `#FF9900` + Black `#232F3E`
- Google: Blue `#4285F4`, Red `#EA4335`, Yellow `#FBBC04`, Green `#34A853`
- OpenAI: Green `#10A37F`
- Anthropic: Orange `#D97757`
- EU: Blue `#003399` + Yellow `#FFCC00`

---

## 📝 Image Naming Conventions

### Concept Cards
- Format: `{concept-name-slug}.jpg`
- Example: `ai-definition.jpg`, `taxonomy-ai-harms.jpg`

### Hero Images
- Format: `{path-name}-hero.jpg`
- Example: `history-hero.jpg`, `risk-hero.jpg`

### Example Cards
- Format: `{company-or-case-study-name}-example.jpg`
- Example: `amazon-hiring-bias.jpg`, `openai-anthropic-comparison.jpg`

### Resource Cards
- Format: `{resource-type}-template.jpg`
- Example: `risk-assessment-template.jpg`, `model-card-template.jpg`

---

## 🔗 Usage in Code

### Next.js Image Component
```typescript
import Image from 'next/image';

// Concept card
<Image
  src="/images/history/ai-definition.jpg"
  alt="What AI Actually Is - OECD Definition"
  width={1920}
  height={1280}
  quality={85}
/>

// Hero image
<Image
  src="/images/heroes/history-hero.jpg"
  alt="History & Foundations Learning Path"
  width={1920}
  height={1080}
  priority
/>
```

### WebP Fallback
```typescript
// Production uses WebP, development uses JPG
<picture>
  <source srcSet="/images/history/ai-definition.webp" type="image/webp" />
  <img src="/images/history/ai-definition.jpg" alt="..." />
</picture>
```

---

## 📊 Image Inventory Status

| Category | Total | Created | Remaining | Status |
|----------|-------|---------|-----------|--------|
| Heroes | 5 | 5 | 0 | ✅ Complete |
| History Concepts | 15 | 15 | 0 | ✅ Complete |
| Terminology Concepts | 14 | 14 | 0 | ✅ Complete |
| Risk Concepts | 20 | 0 | 20 | 🔴 Batch 1 |
| Responsibility Concepts | 75 | 0 | 75 | 🟡 Blocked |
| Future Concepts | 20 | 0 | 20 | 🟡 Blocked |
| Example Cards | 28 | 0 | 28 | 🔴 7 ready, 21 blocked |
| Resource Cards | 10 | 0 | 10 | 🔴 Batch 1 |
| **TOTAL** | **187** | **34** | **153** | **18% Complete** |

---

**Next Actions**:
1. Generate Batch 1 images (37) using prompts in `/docs/image-generation-prompts.md`
2. Complete Epic 0 Phase 2 (knowledge graph metadata)
3. Generate Batch 2 images (116)

**Reference Files**:
- Epic 0 Strategy: `/docs/epic-0-image-generation-strategy.md`
- Phase 1 Checklist: `/docs/epic-0-phase-1-checklist.md`
- Image Prompts: `/docs/image-generation-prompts.md`
- Color System: `/docs/learning-paths-color-system.md`
