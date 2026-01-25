# Article & Image Structure Migration Plan

## Current State vs. Target State

### **Current Structure:**
```
Article URLs:     /articles/{slug}
                  Example: /articles/ai-family-tree

Article Files:    app/articles/{slug}/page.tsx
                  Example: app/articles/ai-family-tree/page.tsx

Images:           /images/{path}/{various-names}.png or .webp
                  Example: /images/history/the-ai-family-tree.png
                  Example: /images/history/ai-family-tree.webp
```

### **Target Structure:**
```
Article URLs:     /articles/{path}/{slug}
                  Example: /articles/history/ai-family-tree

Article Files:    app/articles/{path}/{slug}/page.tsx
                  Example: app/articles/history/ai-family-tree/page.tsx

Images:           /images/{path}/{slug}.webp
                  Example: /images/history/ai-family-tree.webp

Path Hero Images: /images/heroes/{path}-hero.webp
                  Example: /images/heroes/history-hero.webp
                  (These are used on www.suniliyer.ca and path landing pages)
```

## Paths
- `history` - AI evolution from 1950s to today
- `terminology` - AI concepts and technical terms
- `risk` - AI harms and failures
- `responsibility` - AI laws and governance
- `future` - AGI, emerging trends, careers

## Path Hero Images Status

✅ **All path hero images exist in `/images/heroes/`:**
- ✅ history-hero.webp (445K)
- ✅ terminology-hero.webp (80K)
- ✅ risk-hero.webp (35K)
- ✅ responsibility-hero.webp (186K)
- ✅ future-hero.webp (97K)

**Note:** These same images are also duplicated in each path folder and should be removed after migration.

## Article Image Audit - 24 Published Articles

### HISTORY Path (8 articles)

| # | Slug | Current Image in DB | Image Exists | Needs |
|---|------|-------------------|--------------|-------|
| 1 | what-ai-actually-is | `/images/history/what-ai-actually-is.png` | ❌ PNG missing | ✅ webp exists → update DB |
| 2 | ai-family-tree | `/images/history/the-ai-family-tree.png` | ❌ wrong name | ✅ webp exists as `ai-family-tree.webp` → update DB |
| 3 | types-of-ai-intelligence | `/images/history/types-of-ai-intelligence.png` | ⚠️ PNG exists | Convert to webp, update DB |
| 4 | how-machines-learn | `/images/history/how-machines-learn.png` | ❌ missing | ✅ webp as `machine-learning-explained.webp` → rename → update DB |
| 5 | deep-learning-decoded | `/images/history/deep-learning-decoded.png` | ❌ missing | ✅ webp as `deep-learning-explained.webp` → update DB |
| 6 | generative-ai-explained | `/images/history/generative-ai-explained.png` | ❌ missing | ✅ webp exists → update DB |
| 7 | large-language-models | `/images/history/large-language-models.png` | ❌ missing | ✅ webp exists → update DB |
| 8 | ai-history | `/images/history/ai-history-dartmouth-to-deepmind.png` | ❌ wrong name | ✅ webp as `ai-history.webp` → update DB |

### TERMINOLOGY Path (8 articles)

| # | Slug | Current Image in DB | Image Exists | Needs |
|---|------|-------------------|--------------|-------|
| 1 | ai-technology-stack | `/images/terminology/ai-technology-stack.png` | ❌ missing | ✅ webp exists → update DB |
| 2 | ai-vs-automation | `/images/terminology/ai-vs-automation.png` | ❌ missing | ✅ webp exists → update DB |
| 3 | data-behind-ai | `/images/terminology/the-data-behind-ai.png` | ❌ wrong name | ✅ webp as `data-behind-ai.webp` → update DB |
| 4 | foundation-models | `/images/terminology/foundation-models.png` | ❌ missing | ✅ webp exists → update DB |
| 5 | multimodal-ai | `/images/terminology/multimodal-ai.png` | ❌ missing | ✅ webp exists → update DB |
| 6 | ai-compute | `/images/terminology/ai-compute-requirements.png` | ❌ wrong name | ✅ webp as `ai-compute-gpus.webp` → need to rename |
| 7 | environmental-cost-ai | `/images/terminology/environmental-cost-of-ai.png` | ❌ wrong name | ✅ webp as `environmental-cost-ai.webp` → update DB |
| 8 | black-box-problem | `/images/terminology/the-black-box-problem.png` | ❌ wrong name | ✅ webp as `black-box-explainability.webp` → need to rename |

### RISK Path (8 articles)

| # | Slug | Current Image in DB | Image Exists | Needs |
|---|------|-------------------|--------------|-------|
| 1 | when-ai-goes-wrong | `/images/risk/when-ai-goes-wrong.png` | ❌ missing | ✅ webp as `ai-safety-failures.webp` → need to rename |
| 2 | algorithmic-bias | `/images/risk/algorithmic-bias.png` | ❌ missing | ✅ webp exists → update DB |
| 3 | ai-hallucinations | `/images/risk/ai-hallucinations.png` | ⚠️ PNG exists | ✅ webp exists → update DB |
| 4 | ai-privacy | `/images/risk/ai-and-privacy.png` | ❌ wrong name | ✅ webp as `ai-privacy-dilemma.webp` → need to rename |
| 5 | deepfakes-synthetic-media | `/images/risk/deepfakes-synthetic-media.png` | ❌ missing | ✅ webp as `deepfakes-trust-crisis.webp` → need to rename |
| 6 | ai-misinformation | `/images/risk/ai-misinformation.png` | ❌ missing | ✅ webp as `ai-misinformation-democracy.webp` → need to rename |
| 7 | job-displacement | `/images/risk/job-displacement.png` | ❌ missing | ❌ **MISSING** - need to create |
| 8 | autonomous-weapons | `/images/risk/autonomous-weapons.png` | ⚠️ PNG exists | ✅ webp exists → update DB |

## Missing Images Summary

### Images that need to be CREATED:
1. ❌ `/images/risk/job-displacement.webp` - **MISSING**

### Images that need to be RENAMED (webp exists with different name):
1. `/images/history/ai-compute-gpus.webp` → `ai-compute.webp`
2. `/images/terminology/black-box-explainability.webp` → `black-box-problem.webp`
3. `/images/risk/ai-safety-failures.webp` → `when-ai-goes-wrong.webp`
4. `/images/risk/ai-privacy-dilemma.webp` → `ai-privacy.webp`
5. `/images/risk/deepfakes-trust-crisis.webp` → `deepfakes-synthetic-media.webp`
6. `/images/risk/ai-misinformation-democracy.webp` → `ai-misinformation.webp`

### Images that need to be CONVERTED from PNG to WEBP:
1. `/images/history/types-of-ai-intelligence.png` → `.webp`
2. `/images/risk/ai-hallucinations.png` → `.webp`
3. `/images/risk/autonomous-weapons.png` → `.webp`
4. Any other .png files in the folders

## Migration Steps

### Phase 1: Image Cleanup & Preparation
1. ✅ Convert all .png images to .webp
2. ✅ Rename webp files to match article slugs
3. ✅ Create missing image: job-displacement.webp
4. ✅ Update database with correct image paths (all pointing to .webp)
5. ✅ Verify all 24 articles have matching images

### Phase 2: Article Structure Migration
1. ⬜ Create new directory structure: `app/articles/{path}/{slug}/`
2. ⬜ Move article page.tsx files to new locations
3. ⬜ Update all article imports and routes
4. ⬜ Update navigation components
5. ⬜ Update database path references

### Phase 3: Resource Card Fixes
1. ⬜ Fix all learn_more links (remove path prefix, use just slug)
2. ⬜ Verify all download files exist
3. ⬜ Create missing download files

### Phase 4: Testing & Deployment
1. ⬜ Test all article routes work
2. ⬜ Test all images load correctly
3. ⬜ Test all resource cards
4. ⬜ Deploy to production

## Commands for Image Operations

### Convert PNG to WebP:
```bash
sips -s format webp input.png --out output.webp
```

### Batch convert all PNGs in a directory:
```bash
for file in *.png; do
  sips -s format webp "$file" --out "${file%.png}.webp"
done
```

### Rename files:
```bash
mv old-name.webp new-name.webp
```

## Database Updates Required

All articles need their `headerImage` field updated to:
- Use .webp extension
- Use correct filename matching slug
- Follow pattern: `/images/{path}/{slug}.webp`

Example SQL:
```sql
UPDATE articles
SET yaml_content = jsonb_set(
  yaml_content::jsonb,
  '{headerImage}',
  '"/images/history/ai-family-tree.webp"'
)::text
WHERE slug = 'ai-family-tree';
```
