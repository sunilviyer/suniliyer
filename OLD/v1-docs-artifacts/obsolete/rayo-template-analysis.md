# Rayo Template Analysis for AIDefence Learning Paths

**Date:** 2025-12-21
**Purpose:** Map Rayo template components to AIDefence learning path and article pages

---

## Overview

We're adapting two key Rayo template pages for AIDefence:

1. **works-simple page** → Learning Path Index Page (`/learn/[path-slug]`)
2. **blog-article page** → Individual Article Page (`/learn/[path-slug]/[article-slug]`)

---

## 1. Learning Path Page (works-simple)

### File Location
`/rayo/app/(portfolios)/works-simple/page.tsx`

### Page Structure
```tsx
<main>
  <Portfolios1 />           // Hero section with stacking cards
  <PortfolioList />         // List of all items with hover effects
  <MarqueeSlider />         // Moving text slider
  <Testimonials />          // Social proof
  <Cta />                   // Call to action
</main>
<Footer2 />
```

### Key Components

#### A. Portfolios1 Component
**File:** `/rayo/components/portfolios/Portfolios1.tsx`

**Features:**
- **Inner page headline** with subtitle and large title
- **StackCards animation** - GSAP ScrollTrigger based
  - Cards stack vertically and animate on scroll
  - Uses `stack-wrapper` and `stack-item` classes
  - Each card has image, tags, and title

**Data Structure (projects10):**
```json
{
  "id": 1,
  "title": "Project Title",
  "image": "/img/works/preview/1920x1080_prv-01.webp",
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

**AIDefence Mapping:**
- **Hero headline:** "History & Context" (learning path title)
- **Subtitle:** "From Dartmouth to DeepMind" (tagline)
- **Cards:** Concept cards from knowledge graph
  - Each card = concept card (history-1, history-2, etc.)
  - Card title = concept card title
  - Card tags = SEO keywords
  - Card image = concept illustration

#### B. PortfolioList Component
**File:** `/rayo/components/portfolios/PortfolioList.tsx`

**Features:**
- **Hover-reveal effect** - Image appears on hover at cursor position
- **Grid-based layout** with 8 columns
- **Project metadata:**
  - Title (col-8)
  - Tags list (col-2)
  - Date (col-2)
  - Preview image on mobile
  - Hover image on desktop

**Data Structure (projects8):**
```json
{
  "id": 1,
  "title": "Project Name",
  "thumb": "/img/works/preview/600x730_prv-01.webp",  // Hover image
  "image": "/img/works/preview/1200x800_prv-01.webp", // Main image
  "tags": ["UI/UX", "Design"],
  "date": "2024"
}
```

**AIDefence Mapping:**
- **Title:** Concept card title
- **Tags:** Primary keywords from knowledge graph
- **Date:** Estimated reading time (e.g., "5 min read")
- **Thumb:** Concept card icon/illustration
- **Image:** Hero image for concept card
- **Link:** `/learn/[path-slug]/[concept-slug]`

**Additional Info to Display:**
- **TLDR:** Show on hover or focus
- **Cross-path references:** Small icons/badges linking to other paths
- **Related concepts:** Listed below main content

---

## 2. Article Details Page (blog-article)

### File Location
`/rayo/app/(blogs)/blog-article/page.tsx`

### Page Structure
```tsx
<main>
  <BlogDetails />          // Full article content
  <Blogs />                // "More on topic" related articles
  <Cta />                  // Call to action
</main>
<Footer2 />
```

### Key Components

#### A. BlogDetails Component
**File:** `/rayo/components/blogs/BlogDetails.tsx`

**Article Structure:**
1. **Breadcrumbs:** Home > Learning Path > Article
2. **Meta Data:**
   - Publication date (or "Last updated")
   - Read time
3. **Title:** H1 with article title
4. **Tags:** Topic tags (clickable, links to related articles)
5. **Thumbnail Image:** Hero image
6. **Content Sections:**
   - **Excerpt:** Large text intro (tldr)
   - **Table of Contents:** Anchor links to H3 sections
   - **Article Blocks:**
     - Text paragraphs
     - Headings (H3, H5)
     - Lists (ordered, unordered)
     - Blockquotes
     - Images with captions
7. **Author Section:**
   - Avatar
   - Name + position
   - Bio
   - Social links
8. **Article Navigation:**
   - Previous article
   - Next article
9. **Comments Section**

**AIDefence Mapping:**

```typescript
// Concept card data structure for article page
{
  id: "history-1",
  title: "The Building Blocks – What AI Actually Is",
  slug: "what-ai-actually-is",
  path: "history",
  tldr: "AI is machine-based systems that infer from inputs...",
  content_sections: [
    "OECD AI Definition (Nov 2023)",
    "ISO/IEC 22989:2022 Terminology",
    "What Makes AI Different from Traditional Software",
    "Why Definitions Matter for Governance"
  ],
  related_concepts: ["history-2", "history-5", "term-1"],
  cross_path_refs: {
    terminology: ["term-1"],
    responsibility: ["resp-1"]
  },
  tags: ["fundamentals", "definitions", "OECD", "ISO"],
  estimated_reading_time: "5 min",
  example_refs: [],
  resource_refs: []
}
```

**Content Sections Map:**
- **Breadcrumbs:** Home > Learning Paths > [Path Title] > [Article Title]
- **Meta:**
  - Date: "Updated Dec 2024" or publication date
  - Read time from knowledge graph
- **Title:** `title` field
- **Tags:** `tags` array, links to filtered learning path view
- **Thumbnail:** `/images/learn/[path]/[slug]-hero.webp`
- **Excerpt:** `tldr` field (large text)
- **Table of Contents:** Generated from `content_sections` array
- **Article Content:**
  - Each `content_section` becomes an H3 anchor section
  - Parse markdown content from `/content/articles/final/[source_file].md`
  - Include images, lists, blockquotes as needed
- **Related Concepts Box:**
  - Display `related_concepts` as card grid
  - Show cross-path references with path badges
- **Example Cards:**
  - If `example_refs` exists, show case study cards
- **Resource Cards:**
  - If `resource_refs` exists, show downloadable resources
- **Author Section:**
  - Sunil Iyer
  - Position: "AI Governance Expert"
  - Bio: Standard bio
  - Socials: LinkedIn, etc.
- **Navigation:**
  - Previous: Previous concept in same path
  - Next: Next concept in same path

---

## 3. Animation Components

### A. StackCards (GSAP ScrollTrigger)
**File:** `/rayo/components/animation/StackCards.tsx`

**How it works:**
- Cards start stacked vertically off-screen
- On scroll, cards animate to `y: 0` sequentially
- Creates "coming up from below" effect
- Uses GSAP ScrollTrigger for scroll-based animation
- Customizable:
  - `pin`: Keep wrapper pinned during animation
  - `scrub`: Smooth scroll scrubbing
  - `durationMul`: Duration multiplier per card

**Implementation for Learning Paths:**
```tsx
<StackCards
  stackName="concept-cards-stack"
  className="stack-wrapper"
  durationMul={0.5}
>
  {conceptCards.map((card) => (
    <Link key={card.id} href={`/learn/${pathSlug}/${card.slug}`}>
      <div className="concept-card">
        <Image src={card.image} />
        <div className="concept-card__tags">
          {card.tags.map(tag => <span>{tag}</span>)}
        </div>
        <h2>{card.title}</h2>
        <p className="tldr">{card.tldr}</p>
      </div>
    </Link>
  ))}
</StackCards>
```

### B. Hover Reveal Effect
**In:** PortfolioList component

**How it works:**
- Track mouse position with `handleMouseMove`
- Show preview image at cursor position
- Image follows mouse with transform
- Smooth opacity transitions

**Implementation for Learning Paths:**
- Show concept card preview on hover
- Display TLDR text
- Show cross-path reference indicators
- Animate in/out smoothly

---

## 4. Data Structure Mapping

### Knowledge Graph → Rayo Format

#### Learning Path Cards (for StackCards)

**Source:** `/content/knowledge-graph.yaml` - `concept_cards_history`

**Transform to:**
```json
{
  "conceptCards": [
    {
      "id": 1,
      "slug": "what-ai-actually-is",
      "title": "The Building Blocks – What AI Actually Is",
      "description": "AI is machine-based systems that infer from inputs to generate outputs...",
      "image": "/images/learn/history/what-ai-actually-is.webp",
      "tags": ["fundamentals", "definitions", "OECD"],
      "readTime": "5 min",
      "tldr": "AI is machine-based systems that infer from inputs...",
      "crossRefs": {
        "terminology": ["term-1"],
        "responsibility": ["resp-1"]
      },
      "relatedConcepts": ["history-2", "history-5", "term-1"]
    }
  ]
}
```

#### Article Data (for BlogDetails)

**Source:** Combined from:
- `/content/knowledge-graph.yaml` - concept card metadata
- `/content/articles/final/[source-file].md` - article content

**Transform to:**
```typescript
{
  meta: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Learning Paths", href: "/learn" },
      { label: "History & Context", href: "/learn/history" },
      { label: "What AI Actually Is", href: null }
    ],
    date: "Updated December 2024",
    readTime: "5 min read"
  },
  title: "The Building Blocks – What AI Actually Is",
  tags: [
    { label: "fundamentals", href: "/learn/history?tag=fundamentals" },
    { label: "definitions", href: "/learn/history?tag=definitions" },
    { label: "OECD", href: "/learn/history?tag=OECD" }
  ],
  thumbnail: "/images/learn/history/what-ai-actually-is-hero.webp",
  excerpt: "AI is machine-based systems that infer from inputs...",
  tableOfContents: [
    { label: "OECD AI Definition (Nov 2023)", href: "#oecd-definition" },
    { label: "ISO/IEC 22989:2022 Terminology", href: "#iso-terminology" },
    { label: "What Makes AI Different", href: "#differences" },
    { label: "Why Definitions Matter", href: "#why-it-matters" }
  ],
  content: "<!-- Markdown content from source file -->",
  relatedConcepts: [
    { id: "history-2", title: "The AI Family Tree", slug: "ai-family-tree" },
    { id: "history-5", title: "Strong vs. Weak AI", slug: "strong-vs-weak-ai" }
  ],
  crossPathRefs: [
    { path: "terminology", concepts: ["term-1"], reason: "OECD definition connects to ML fundamentals" },
    { path: "responsibility", concepts: ["resp-1"], reason: "Definitions inform legal frameworks" }
  ],
  examples: [],
  resources: [],
  author: {
    name: "Sunil Iyer",
    position: "AI Governance Expert",
    avatar: "/images/profile/sunil-iyer.jpg",
    bio: "With over two decades of experience...",
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/suniliyer" }
    ]
  },
  navigation: {
    prev: { title: "Introduction to AI History", href: "/learn/history/intro" },
    next: { title: "The AI Family Tree", href: "/learn/history/ai-family-tree" }
  }
}
```

---

## 5. Implementation Plan

### Phase 1: Data Transformation
1. ✅ Knowledge graph exists at `/content/knowledge-graph.yaml`
2. Create data transformation utilities:
   - `transformConceptCardsForStack(pathId)` → Returns array for StackCards
   - `transformConceptCardForArticle(conceptId)` → Returns article data
3. Generate static JSON files or use server-side data fetching

### Phase 2: Create Learning Path Index Page
File: `/app/learn/[path]/page.tsx`

**Components to create:**
- `LearningPathHero` (adapt Portfolios1)
  - Use StackCards with concept cards
  - Custom styling for educational content
- `ConceptCardsList` (adapt PortfolioList)
  - Hover effects showing TLDR
  - Cross-reference indicators
  - Filter by tags

**Features:**
- Dynamic routing: `/learn/history`, `/learn/terminology`, etc.
- SEO metadata from knowledge graph
- Progress tracking (optional - future)
- Bookmark functionality (optional - future)

### Phase 3: Create Article Detail Page
File: `/app/learn/[path]/[slug]/page.tsx`

**Components to create:**
- `ArticleHeader` (breadcrumbs, meta, title, tags)
- `ArticleContent` (MDX rendering with custom components)
- `TableOfContents` (sticky sidebar)
- `RelatedConceptsGrid` (card grid)
- `CrossPathReferences` (badges linking to other paths)
- `ExampleCards` (case studies)
- `ResourceCards` (downloadable templates)
- `ArticleNavigation` (prev/next)
- `AuthorBio`

**Features:**
- MDX rendering for markdown content
- Syntax highlighting for code blocks
- Image optimization with Next.js Image
- Anchor links for table of contents
- Reading progress indicator (optional)

### Phase 4: Styling & Theming
- Adapt Rayo SCSS/CSS to AIDefence brand
- Use existing color palette:
  - Primary: #333d29 (moss green)
  - Secondary: #936639 (brown/tan)
  - Tertiary: #414833 (olive green)
- Maintain animation performance
- Ensure responsive design

---

## 6. Key Rayo Files to Reference

### Components
- `/rayo/components/portfolios/Portfolios1.tsx` - Stacking cards hero
- `/rayo/components/portfolios/PortfolioList.tsx` - Hover list
- `/rayo/components/blogs/BlogDetails.tsx` - Article layout
- `/rayo/components/animation/StackCards.tsx` - GSAP animation
- `/rayo/components/animation/RevealText.tsx` - Text animations
- `/rayo/components/animation/AnimatedButton.tsx` - Button animations

### Pages
- `/rayo/app/(portfolios)/works-simple/page.tsx`
- `/rayo/app/(blogs)/blog-article/page.tsx`

### Data
- `/rayo/data/projects.json` - Reference for structure

### Styles
- Check `/rayo/public/scss/` for styling patterns

---

## 7. Technical Requirements

### Dependencies (from Rayo)
- **GSAP:** For scroll animations
- **gsap/ScrollTrigger:** For scroll-based effects
- **Next.js:** App router, dynamic routing, Image optimization
- **TypeScript:** Type safety
- **Framer Motion:** (if needed for additional animations)

### Custom Dependencies (AIDefence)
- **MDX:** For markdown rendering with React components
- **gray-matter:** For frontmatter parsing
- **rehype/remark:** For markdown processing

---

## 8. Next Steps

1. **Review with user** - Confirm approach
2. **Create data transformation utilities**
3. **Build learning path index page** (`/learn/[path]/page.tsx`)
4. **Build article detail page** (`/learn/[path]/[slug]/page.tsx`)
5. **Create custom components** for learning-specific features
6. **Style with AIDefence brand** colors and typography
7. **Add SEO optimization** from knowledge graph metadata
8. **Test animations** and performance

---

**End of Analysis**
