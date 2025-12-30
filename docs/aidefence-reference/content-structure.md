# AIDefence V2 - Content Structure & Organization

**Last Updated**: 2025-12-22
**Purpose**: Define how content is organized for display in the application

---

## 📁 Content Directory Structure

```
/content/
  /articles/
    /final/                   ← 140 production-ready articles (MDX)
      article-1-*.md
      article-2-*.md
      ...
      article-162-*.md

    /clean/                   ← Cleaned/processed articles
    /review/                  ← Articles under review
    /articleprocessing/       ← Processing workflow folder

  knowledge-graph.yaml        ← Single source of truth for all content relationships
```

---

## 🗺️ Knowledge Graph Structure

**File**: `/content/knowledge-graph.yaml`

**Purpose**: Central data structure defining ALL content relationships, cross-references, and metadata.

### Structure:
```yaml
concept_cards_history: [...]      # 15 History concept cards
concept_cards_terminology: [...]  # 14 Terminology concept cards
concept_cards_risk: [...]         # 20 Risk concept cards
concept_cards_responsibility: [...] # 75 Responsibility cards (needs metadata)
concept_cards_future: [...]       # 20 Future cards (needs metadata)
example_cards: [...]              # 28 Example cards
resource_cards: [...]             # 10 Resource cards
```

### Concept Card Schema:
```yaml
- id: history-1
  title: "Article Title"
  slug: "url-friendly-slug"
  path: history
  source_file: "content/articles/final/article-name.md"
  tldr: "1-2 sentence summary"
  content_sections:
    - "Section 1"
    - "Section 2"
  related_concepts: [history-2, history-3]
  cross_path_refs:
    terminology: [term-1, term-2]
    risk: [risk-1]
  tags: [tag1, tag2, tag3]
  example_cards: [ex-1]  # Optional
```

---

## 📊 Content Organization by Learning Path

### History Path (15 cards)
- **ID Range**: history-1 to history-15
- **Articles**: 11 exist, 4 need creation
- **Folder**: `/content/articles/final/`
- **Images**: `/public/images/history/`
- **Color**: Toffee Brown #936639

### Terminology Path (14 concept + 10 example = 24 total)
- **ID Range**: term-1 to term-14
- **Articles**: 14 exist, 10 need creation
- **Folder**: `/content/articles/final/`
- **Images**: `/public/images/terminology/` + `/public/images/examples/`
- **Color**: Camel #a68a64

### Risk Path (20 concept + 8 example = 28 total)
- **ID Range**: risk-1 to risk-20
- **Articles**: 20 exist, 8 need creation
- **Folder**: `/content/articles/final/`
- **Images**: `/public/images/risk/` + `/public/images/examples/`
- **Color**: Dark Walnut #582f0e

### Responsibility Path (75 cards)
- **ID Range**: resp-1 to resp-75
- **Articles**: ALL 75 exist ✅
- **Folder**: `/content/articles/final/`
- **Images**: `/public/images/responsibility/` (needs Epic 0 Phase 3)
- **Color**: Dry Sage #a4ac86

### Future Path (20 cards)
- **ID Range**: future-1 to future-20
- **Articles**: ALL 20 exist ✅
- **Folder**: `/content/articles/final/`
- **Images**: `/public/images/future/` (needs Epic 0 Phase 3)
- **Color**: Moss Green #414833

---

## 🔗 Cross-References

### Related Concepts (Same Path)
- Links within the same learning path
- Example: history-1 → history-2, history-3

### Cross-Path References (Different Paths)
- Links across learning paths
- Example: history-1 → terminology: [term-1], risk: [risk-2]

### Example Cards (Standalone)
- Real-world case studies referenced by multiple concept cards
- Example: ex-amazon-bias referenced by risk-2, responsibility-5

---

## 📝 Content Display Components

### StackCards Animation (Path Pages)
```typescript
// Component: /components/shared/PathStackCards.tsx
// Displays all concept cards for a learning path
// Uses GSAP ScrollTrigger for stacking animation

<PathStackCards
  cards={conceptCards}
  pathSlug="history"
  pathColor="#936639"
/>
```

### Concept Card Component
```typescript
// Component: /components/shared/ConceptCard.tsx
// Individual card with flip animation

<ConceptCard
  card={historyCard1}
  index={0}
  pathColor="#936639"
/>
```

### Article Detail Page
```typescript
// Route: /app/[pathSlug]/[articleSlug]/page.tsx
// Full article view with MDX rendering

<ArticleDetail
  article={articleData}
  pathSlug="history"
  relatedConcepts={[...]}
  crossPathRefs={...}
/>
```

---

## 🎨 Content Styling

### Typography
- **Headings**: Using design system typography scale
- **Body**: Accessible font sizes (≥16px)
- **Code**: Syntax highlighting with Prism.js

### Colors (by Path)
- **History**: Toffee Brown `#936639`
- **Terminology**: Camel `#a68a64`
- **Risk**: Dark Walnut `#582f0e`
- **Responsibility**: Dry Sage `#a4ac86`
- **Future**: Moss Green `#414833`

### Layout
- **Max Width**: 900px for concept cards, 1200px for articles
- **Responsive**: Mobile-first, scales to desktop
- **Spacing**: 8px base unit, scales to 160px

---

## 📊 Content Data Layer

### Data Fetching Utilities

#### `getConceptCards(pathSlug: string)`
```typescript
// Fetches all concept cards for a learning path
// Source: knowledge-graph.yaml

import { getKnowledgeGraph } from '@/lib/data/knowledge-graph';

export function getConceptCards(pathSlug: string): ConceptCard[] {
  const graph = getKnowledgeGraph();
  const key = `concept_cards_${pathSlug}`;
  return graph[key] || [];
}
```

#### `getArticle(pathSlug: string, articleSlug: string)`
```typescript
// Fetches single article with MDX content
// Source: /content/articles/final/

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export async function getArticle(pathSlug: string, articleSlug: string) {
  const filePath = join(process.cwd(), 'content/articles/final', `${articleSlug}.md`);
  const fileContent = readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    frontmatter: data,
    content: mdxSource,
  };
}
```

#### `getRelatedConcepts(conceptId: string)`
```typescript
// Fetches related concepts for a given concept ID
// Source: knowledge-graph.yaml

export function getRelatedConcepts(conceptId: string): ConceptCard[] {
  const concept = getConceptById(conceptId);
  return concept?.related_concepts.map(id => getConceptById(id)) || [];
}
```

---

## 🔄 Content Update Workflow

### Adding New Articles
1. Create MDX file in `/content/articles/final/`
2. Add frontmatter with all required fields
3. Update `knowledge-graph.yaml` with concept card metadata
4. Generate image for concept card
5. Test locally, verify cross-references

### Updating Existing Articles
1. Edit MDX file in `/content/articles/final/`
2. Update `knowledge-graph.yaml` if metadata changes
3. Re-generate image if visual changes needed
4. Verify all cross-references still valid

### Content Migration Checklist
- [ ] Article file created/updated
- [ ] Frontmatter complete
- [ ] Knowledge graph updated
- [ ] Image generated and optimized
- [ ] Cross-references validated
- [ ] Local testing complete

---

## 🚨 Critical Rules

### 1. Single Source of Truth
- **Knowledge Graph**: `knowledge-graph.yaml` is THE source for all content relationships
- **Articles**: `/content/articles/final/` is THE source for article content
- **Images**: `/public/images/` is THE source for all images

### 2. No Duplicate Content
- Articles exist ONLY in `/content/articles/final/`
- Metadata exists ONLY in `knowledge-graph.yaml`
- Images exist ONLY in `/public/images/`

### 3. Consistent Naming
- **Slugs**: Use kebab-case (e.g., `ai-definition`)
- **Files**: Match slug (e.g., `ai-definition.md`)
- **Images**: Match slug (e.g., `ai-definition.jpg`)

### 4. Cross-Reference Integrity
- All `related_concepts` IDs must exist in knowledge graph
- All `cross_path_refs` IDs must exist in their respective paths
- All `example_cards` IDs must exist in example_cards section

---

## 📋 Epic References

Each epic document references these content structures:

- **Epic 2** (History): Uses History concept cards
- **Epic 5** (Terminology): Uses Terminology + Example cards
- **Epic 7** (Risk): Uses Risk + Example cards
- **Epic 8** (Responsibility): Uses Responsibility concept cards
- **Epic 9** (Future): Uses Future concept cards

All epics reference:
- `/docs/aidefence-reference/articles-reference.md`
- `/docs/aidefence-reference/images-reference.md`
- `/content/knowledge-graph.yaml`

---

## 📊 Content Metrics

### Article Metrics
- **Total**: 162 articles
- **Word Count**: ~400,000 words total (~2,500 words/article)
- **Reading Time**: ~12 minutes/article average

### Content Completeness
- **Responsibility**: 100% (75/75 articles)
- **Future**: 100% (20/20 articles)
- **History**: 73% (11/15 articles)
- **Risk**: 71% (20/28 articles)
- **Terminology**: 58% (14/24 articles)
- **Overall**: 86% (140/162 articles)

---

**Next Actions**:
1. Complete Epic 0 Phase 2 (knowledge graph metadata for Responsibility + Future)
2. Create 22 missing articles (Epics 2.5, 5.5, 7.5)
3. Convert all to MDX with consistent frontmatter
4. Validate all cross-references

**Reference Files**:
- Knowledge Graph: `/content/knowledge-graph.yaml`
- Articles List: `/docs/aidefence-reference/articles-reference.md`
- Images List: `/docs/aidefence-reference/images-reference.md`
