# Epic 3: All Paths Infrastructure

**Status**: 🔴 Blocked (needs Epic 1, Epic 2)
**Priority**: P0 (Foundation for all paths)
**Owner**: Development Team
**Estimated Effort**: 28-36 hours (4-5 days)
**Dependencies**: Epic 1 (Homepage), Epic 2 (History Path template)
**Blocks**: Epic 4, 5, 6, 7, 8, 9 (all other paths)

---

## Epic Goal

Build shared infrastructure for all 5 learning paths: routing system, layout templates, knowledge graph integration, shared components (badges, tags, cross-references), and data fetching utilities.

---

## Success Criteria

- ✅ Dynamic routing for all 5 paths: `/[pathSlug]` and `/[pathSlug]/[articleSlug]`
- ✅ Knowledge graph YAML fully integrated as data source
- ✅ Shared layout template for all paths
- ✅ Reusable components library (badges, tags, cross-ref links)
- ✅ Data fetching utilities for concepts, examples, resources
- ✅ All paths accessible (even if content incomplete)
- ✅ TypeScript interfaces for all data structures
- ✅ Zero code duplication across paths

---

## Story Breakdown

### Story 3.1: Create Dynamic Path Routing System

**Goal**: Set up Next.js dynamic routes for all learning paths.

**Tasks**:
1. Create `/app/[pathSlug]/page.tsx`:
   ```typescript
   interface PathPageProps {
     params: { pathSlug: string };
   }

   export async function generateStaticParams() {
     return [
       { pathSlug: 'history' },
       { pathSlug: 'terminology' },
       { pathSlug: 'risk' },
       { pathSlug: 'responsibility' },
       { pathSlug: 'future' },
     ];
   }

   export default async function PathPage({ params }: PathPageProps) {
     const pathData = await getPathData(params.pathSlug);
     const cards = await getConceptCards(params.pathSlug);

     return (
       <PathLayout pathData={pathData}>
         <PathStackCards cards={cards} pathSlug={params.pathSlug} />
       </PathLayout>
     );
   }
   ```

2. Create `/app/[pathSlug]/[articleSlug]/page.tsx`:
   ```typescript
   export async function generateStaticParams() {
     const paths = ['history', 'terminology', 'risk', 'responsibility', 'future'];
     const params = [];

     for (const path of paths) {
       const articles = await getArticlesByPath(path);
       params.push(...articles.map(a => ({ pathSlug: path, articleSlug: a.slug })));
     }

     return params;
   }

   export default async function ArticlePage({ params }: ArticlePageProps) {
     const article = await getArticle(params.pathSlug, params.articleSlug);

     return <ArticleDetail article={article} pathSlug={params.pathSlug} />;
   }
   ```

3. Implement `generateMetadata()` for SEO

**Acceptance Criteria**:
- [ ] All 5 path routes work: `/history`, `/terminology`, etc.
- [ ] Article routes work: `/history/ai-definition`, etc.
- [ ] Static generation working (build succeeds)
- [ ] 404 for invalid paths/articles

**Estimated Effort**: 4-5 hours

---

### Story 3.2: Integrate Knowledge Graph YAML as Data Source

**Goal**: Build data layer that reads from `knowledge-graph.yaml` and provides typed access to all content.

**Tasks**:
1. Create `/lib/data/knowledge-graph.ts`:
   ```typescript
   import { readFileSync } from 'fs';
   import { parse } from 'yaml';

   interface KnowledgeGraph {
     concept_cards_history: ConceptCard[];
     concept_cards_terminology: ConceptCard[];
     concept_cards_risk: ConceptCard[];
     concept_cards_responsibility: ConceptCard[];
     concept_cards_future: ConceptCard[];
     example_cards: ExampleCard[];
     resource_cards: ResourceCard[];
   }

   let cachedGraph: KnowledgeGraph | null = null;

   export function getKnowledgeGraph(): KnowledgeGraph {
     if (cachedGraph) return cachedGraph;

     const filePath = join(process.cwd(), 'content/knowledge-graph.yaml');
     const fileContent = readFileSync(filePath, 'utf-8');
     cachedGraph = parse(fileContent);

     return cachedGraph;
   }

   export function getConceptCards(pathSlug: string): ConceptCard[] {
     const graph = getKnowledgeGraph();
     const key = `concept_cards_${pathSlug}` as keyof KnowledgeGraph;
     return graph[key] || [];
   }

   export function getConceptById(id: string): ConceptCard | undefined {
     const graph = getKnowledgeGraph();
     // Search all paths for concept ID
   }
   ```

2. Create TypeScript interfaces in `/types/knowledge-graph.ts`:
   ```typescript
   export interface ConceptCard {
     id: string;
     title: string;
     slug: string;
     path: string;
     source_file: string;
     tldr: string;
     content_sections: string[];
     related_concepts: string[];
     cross_path_refs?: {
       history?: string[];
       terminology?: string[];
       risk?: string[];
       responsibility?: string[];
       future?: string[];
     };
     tags: string[];
     example_cards?: string[];
   }

   export interface ExampleCard {
     id: string;
     title: string;
     slug: string;
     company: string;
     category: string;
     tldr: string;
     // ... other fields
   }

   export interface ResourceCard {
     id: string;
     title: string;
     type: string;
     category: string;
     // ... other fields
   }
   ```

**Acceptance Criteria**:
- [ ] Knowledge graph loads on server startup
- [ ] All concept cards accessible via helper functions
- [ ] Cross-references resolve correctly
- [ ] TypeScript types enforce data structure
- [ ] Build-time validation of knowledge graph

**Estimated Effort**: 5-6 hours

---

### Story 3.3: Create Shared PathLayout Component

**Goal**: Reusable layout template for all learning paths.

**Tasks**:
1. Create `/components/shared/PathLayout.tsx`:
   ```typescript
   interface PathLayoutProps {
     pathData: {
       id: string;
       title: string;
       description: string;
       color: string;
       cardCount: number;
     };
     children: React.ReactNode;
   }

   export function PathLayout({ pathData, children }: PathLayoutProps) {
     return (
       <div className="path-layout" data-path={pathData.id}>
         <PathHero pathData={pathData} />
         <div className="path-content">{children}</div>
         <PathFooter pathData={pathData} />
       </div>
     );
   }
   ```

2. Create `/components/shared/PathHero.tsx`:
   - Accepts path data (title, description, color)
   - Uses path-specific hero image
   - Displays gradient with path color
   - Shows card count, estimated time

3. Create `/components/shared/PathFooter.tsx`:
   - Related paths suggestions
   - Share buttons
   - Back to top

**Acceptance Criteria**:
- [ ] PathLayout works for all 5 paths
- [ ] Path-specific colors applied via CSS variables
- [ ] Hero section responsive
- [ ] Footer shows related paths

**Estimated Effort**: 4-5 hours

---

### Story 3.4: Build Shared Component Library

**Goal**: Reusable components for badges, tags, links used across all paths.

**Tasks**:
1. Create `/components/shared/PathBadge.tsx`:
   ```typescript
   export function PathBadge({ pathId }: { pathId: string }) {
     const pathColors = {
       history: '#936639',
       terminology: '#a68a64',
       risk: '#582f0e',
       responsibility: '#a4ac86',
       future: '#414833',
     };

     return (
       <span
         className="path-badge"
         style={{ backgroundColor: pathColors[pathId] }}
       >
         {pathId}
       </span>
     );
   }
   ```

2. Create `/components/shared/TagBadge.tsx`:
   - Tag badge with consistent styling
   - Clickable to filter by tag

3. Create `/components/shared/ConceptLink.tsx`:
   ```typescript
   export function ConceptLink({ conceptId }: { conceptId: string }) {
     const concept = useConceptById(conceptId);

     return (
       <Link
         href={`/${concept.path}#${conceptId}`}
         className="concept-link"
       >
         {concept.title}
         <PathBadge pathId={concept.path} />
       </Link>
     );
   }
   ```

4. Create `/components/shared/ExampleLink.tsx`:
   - Links to example cards
   - Shows company logo/icon

**Acceptance Criteria**:
- [ ] All badge components render correctly
- [ ] Path colors match UX spec
- [ ] Links navigate correctly
- [ ] Components fully typed (TypeScript)

**Estimated Effort**: 4-5 hours

---

### Story 3.5: Implement PathStackCards Generic Component

**Goal**: Make StackCards animation work for all paths (not just History).

**Tasks**:
1. Refactor `/components/history/HistoryStackCards.tsx` → `/components/shared/PathStackCards.tsx`:
   ```typescript
   interface PathStackCardsProps {
     cards: ConceptCard[];
     pathSlug: string;
   }

   export function PathStackCards({ cards, pathSlug }: PathStackCardsProps) {
     const pathColor = getPathColor(pathSlug);

     // GSAP animation logic (same as History)
     // Pass pathColor to child components
   }
   ```

2. Update `ConceptCard` component to accept `pathSlug` prop:
   - Apply path-specific colors dynamically
   - Use CSS variables for theming

3. Test with History path (should work identically)

**Acceptance Criteria**:
- [ ] PathStackCards works with any path
- [ ] Colors change based on path
- [ ] Animation identical to History path
- [ ] No hardcoded path references

**Estimated Effort**: 3-4 hours

---

### Story 3.6: Create Data Fetching Utilities & Hooks

**Goal**: Centralized data fetching with React hooks.

**Tasks**:
1. Create `/lib/hooks/useConceptById.ts`:
   ```typescript
   export function useConceptById(id: string): ConceptCard | undefined {
     const [concept, setConcept] = useState<ConceptCard>();

     useEffect(() => {
       const data = getConceptById(id);
       setConcept(data);
     }, [id]);

     return concept;
   }
   ```

2. Create `/lib/hooks/useRelatedConcepts.ts`:
   ```typescript
   export function useRelatedConcepts(conceptId: string): ConceptCard[] {
     const concept = useConceptById(conceptId);
     return concept?.related_concepts.map(id => getConceptById(id)) || [];
   }
   ```

3. Create `/lib/hooks/useCrossPathRefs.ts`:
   - Fetches cross-path references
   - Returns organized by path

4. Create `/lib/utils/article.ts`:
   - `getArticle(pathSlug, articleSlug)`
   - `getArticlesByPath(pathSlug)`
   - `getArticlesByTag(tag)`

**Acceptance Criteria**:
- [ ] All hooks work with knowledge graph data
- [ ] Data fetching optimized (cached)
- [ ] TypeScript types enforced
- [ ] Error handling for missing concepts

**Estimated Effort**: 4-5 hours

---

### Story 3.7: Testing & Integration

**Goal**: Verify all infrastructure works across all 5 paths.

**Tasks**:
1. Test each path route:
   - `/history`, `/terminology`, `/risk`, `/responsibility`, `/future`
   - Verify PathLayout renders
   - Verify path colors applied

2. Test knowledge graph integration:
   - All concept cards load
   - Related concepts resolve
   - Cross-path references work

3. Test shared components:
   - PathBadge shows correct colors
   - ConceptLink navigates correctly
   - TagBadge clickable

4. Build and verify static generation:
   - `npm run build` succeeds
   - All pages pre-rendered
   - No broken links

**Acceptance Criteria**:
- [ ] All 5 paths accessible
- [ ] No console errors
- [ ] Build succeeds
- [ ] Static pages generated correctly

**Estimated Effort**: 4-6 hours

---

## Technical Architecture

### Directory Structure
```
/app
  /[pathSlug]
    /page.tsx                  # Dynamic path page
    /[articleSlug]
      /page.tsx                # Dynamic article page

/components
  /shared
    /PathLayout.tsx            # Shared layout
    /PathHero.tsx              # Path hero section
    /PathStackCards.tsx        # Generic StackCards
    /ConceptCard.tsx           # Generic concept card
    /PathBadge.tsx             # Path badge component
    /TagBadge.tsx              # Tag badge component
    /ConceptLink.tsx           # Concept cross-reference link
    /ExampleLink.tsx           # Example card link

/lib
  /data
    /knowledge-graph.ts        # Knowledge graph data layer
  /hooks
    /useConceptById.ts         # Hook to fetch concept
    /useRelatedConcepts.ts     # Hook for related concepts
    /useCrossPathRefs.ts       # Hook for cross-path refs
  /utils
    /article.ts                # Article fetching utilities
    /path.ts                   # Path metadata utilities

/types
  /knowledge-graph.ts          # TypeScript interfaces
```

---

## Dependencies

**Epic 3 depends on**:
- ✅ Epic 1: Homepage (header, navigation, routing foundation)
- ✅ Epic 2: History Path (template for PathStackCards and ConceptCard)

**Epic 3 blocks**:
- Epic 4: Path Navigation (needs routing infrastructure)
- Epic 5: Terminology Path (needs shared components)
- Epic 6: Article Detail View (needs article fetching utilities)
- Epic 7: Risk Path (needs shared components)
- Epic 8: Responsibility Path (needs shared components)
- Epic 9: Future Path (needs shared components)

---

## Success Metrics

- ✅ All 5 paths accessible via dynamic routing
- ✅ Knowledge graph integration complete
- ✅ Zero code duplication across paths
- ✅ Build time <3 minutes for all static pages
- ✅ TypeScript strict mode with no errors

---

## Definition of Done

- ✅ All 7 stories complete
- ✅ All 5 paths render (even with incomplete content)
- ✅ Knowledge graph fully integrated
- ✅ Shared components library complete
- ✅ Data fetching utilities working
- ✅ Build succeeds with static generation
- ✅ Code reviewed and merged
- ✅ Documentation updated

---

**Epic Status**: 🔴 Blocked (needs Epic 1, 2)
**Next Epic**: Epic 4 (Path Navigation), Epic 5 (Terminology), Epic 7 (Risk)
