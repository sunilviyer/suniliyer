# AIDefence V2 - Wireframe & Design Summary

**Last Updated**: 2025-12-22
**Status**: Complete - Ready for Implementation

---

## Overview

This document summarizes all wireframes, design decisions, and technical specifications for AIDefence V2, adapted from the Rayo Next.js creative template.

---

## 1. Design Foundation

### Source Template
- **Template**: Rayo Next.js Creative Template
- **Reference URL**: https://rayo-nextjs-creative-template.netlify.app/
- **Key Pages Used**:
  - `/works-simple` - StackCards layout for learning paths
  - `/blog-article` - Article detail template
  - `/` - Homepage structure

### Animation Framework
- **GSAP ScrollTrigger**: Card stacking animations
- **Framer Motion**: Page transitions and micro-interactions
- **Custom CSS Transitions**: Hover effects, TLDR reveals

### Color Palette
- **Primary**: Moss Green (#333d29)
- **Accent**: Brown Tan (#936639)
- **Secondary**: Olive Green (#414833)
- **Neutral**: Light grays for backgrounds

### Typography
- **Headlines**: Funnel Display (Google Fonts)
- **Body**: System font stack for performance
- **Code**: Monospace for technical content

---

## 2. Wireframes Created

### 2.1 Learning Path Index Page (StackCards)
**File**: `/docs/learn-history-wireframe.html`

**Purpose**: Display all concept cards for a learning path using Rayo's StackCards scroll-based stacking animation

**Structure**:
```
┌─────────────────────────────────────────────┐
│ Header: Logo | Sunil Iyer | Theme | Menu   │
├──────────┬──────────────────────────────────┤
│          │ HISTORY                          │
│ 5 Learn  │ From Dartmouth to DeepMind      │
│ Paths:   │                                  │
│          │ Trace AI's evolution from 1950s │
│ • History│ academic conferences...          │
│ • Term   │                                  │
│ • Risk   │ ┌─────────────────────────────┐ │
│ • Resp   │ │ [Card 1: Building Blocks]   │ │
│ • Future │ │                             │ │
│          │ │ [Card 2: AI Family Tree]    │ │
│          │ │                             │ │
│          │ │ [Card 3: Technology Stack]  │ │
│          │ │                             │ │
│          │ │ ... (20 cards total)        │ │
│          │ └─────────────────────────────┘ │
└──────────┴──────────────────────────────────┘
```

**Key Features**:
- **Left Sidebar**: Lists all 5 learning paths as clickable links
- **Path Navigation**: Active state shows current path
- **Card Stacking**: GSAP ScrollTrigger pins cards and stacks them
- **TLDR Behavior**: Hidden by default, reveals on card hover
- **Visible Elements**: Tags, title, background image always visible
- **Card Count**: 20 stacking cards (not 15)
- **Card Height**: 85vh for optimal stacking effect

**Technical Implementation**:
```javascript
// GSAP ScrollTrigger for StackCards
ScrollTrigger.create({
  trigger: wrapper,
  start: "top top",
  pin: true,
  scrub: true,
  end: () => `+=${wrapper.offsetHeight}`,
  animation: stackingTimeline,
});

// TLDR Reveal on Hover
.card-tldr {
  opacity: 0;
  max-height: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
}

.concept-stack-card:hover .card-tldr {
  opacity: 1;
  max-height: 300px;
  transform: translateY(0);
}
```

**Responsive Behavior**:
- **Desktop (>1024px)**: Full StackCards animation with sidebar
- **Tablet (768-1024px)**: Simplified stacking, sidebar becomes hamburger menu
- **Mobile (<768px)**: Vertical scroll list, no stacking effect

---

### 2.2 Article Detail Page
**File**: `/docs/learn-article-detail-wireframe.html`

**Purpose**: Display full article content based on Rayo blog-article template

**Structure**:
```
┌──────────────────────────────────────────────┐
│ Header: Logo | Sunil Iyer | Theme | Menu    │
├──────────────────────────────────────────────┤
│ Breadcrumbs: Learn > History > Article      │
│                                              │
│ ┌──────────────────────────────────────────┐│
│ │        HERO IMAGE (1920x1080)            ││
│ └──────────────────────────────────────────┘│
│                                              │
│ The Building Blocks – What AI Actually Is   │
│ Published Dec 22, 2025 • 12 min read        │
│                                              │
│ ┌──────────┬───────────────────────────────┐│
│ │ TOC:     │ Article Content               ││
│ │          │                               ││
│ │ • OECD   │ The OECD defines AI as...    ││
│ │ • ISO    │                               ││
│ │ • Why    │ [Full MDX content here]       ││
│ │          │                               ││
│ └──────────┴───────────────────────────────┘│
│                                              │
│ Cross-Path References:                      │
│ ┌─────────────┬─────────────┬──────────────┐│
│ │[Terminology]│[Risk]       │[Responsibility]│
│ └─────────────┴─────────────┴──────────────┘│
│                                              │
│ Related Concepts:                            │
│ ┌───────┬───────┬───────┬───────┐          │
│ │[Card1]│[Card2]│[Card3]│[Card4]│          │
│ └───────┴───────┴───────┴───────┘          │
│                                              │
│ ← Previous Article | Next Article →         │
└──────────────────────────────────────────────┘
```

**Key Features**:
- **Breadcrumbs**: Learn > Path > Article navigation
- **Hero Image**: Full-width featured image
- **Article Metadata**: Publish date, read time, tags
- **Table of Contents**: Sticky sidebar with smooth scroll
- **Cross-Path References**: Shows connections to other learning paths with reasoning
- **Related Concepts**: Grid of 4 related articles from same path
- **Author Bio**: Sunil Iyer profile with social links
- **Prev/Next Navigation**: Sequential article navigation

**MDX Components**:
- Custom callouts (info, warning, tip)
- Code blocks with syntax highlighting
- Interactive examples
- Embedded diagrams
- Citation footnotes

---

## 3. Image Specifications

**Reference Document**: `/docs/learning-paths-image-reference.md`

### Image Categories

#### 3.1 Learning Path Hero Images (5 total)
**Location**: `/public/images/learn/paths/`
**Dimensions**: 1920x1080 (16:9)
**Files**:
- `history-hero.jpg` - AI evolution timeline
- `terminology-hero.jpg` - Neural network visualization
- `risk-hero.jpg` - Warning symbols, bias visualization
- `responsibility-hero.jpg` - Legal documents, compliance
- `future-hero.jpg` - Futuristic AI, innovation

#### 3.2 Concept Card Images (162 total)
**Dimensions**: 1920x1280 (3:2)
**Locations**:
- `/public/images/learn/history/` - 15 images
- `/public/images/learn/terminology/` - 24 images
- `/public/images/learn/risk/` - 28 images
- `/public/images/learn/responsibility/` - 75 images
- `/public/images/learn/future/` - 20 images

**Example Filenames** (History Path):
1. `what-ai-actually-is.jpg` - OECD logo, ISO standards
2. `ai-family-tree.jpg` - Tree diagram, narrow AI vs AGI
3. `ai-technology-stack.jpg` - Layered stack diagram
4. `ai-history-timeline.jpg` - Timeline 1956-2024
5. `strong-vs-weak-ai.jpg` - Split comparison
6. `machine-learning-explained.jpg` - ML flowchart
7. `deep-learning-explained.jpg` - Neural network layers
8. `generative-ai-explained.jpg` - ChatGPT, DALL-E logos
9. `large-language-models.jpg` - GPT-4, Claude, Gemini
10. `ai-vs-automation.jpg` - Comparison diagram
11. `data-behind-ai.jpg` - Data pipelines
12. `foundation-models.jpg` - Pre-training visualization
13. `multimodal-ai.jpg` - Text + vision + audio
14. `ai-compute-gpus.jpg` - NVIDIA GPU, data center
15. `environmental-cost-ai.jpg` - Energy consumption

#### 3.3 Example Card Images (28 total)
**Location**: `/public/images/learn/examples/`
**Dimensions**: 1200x800 (3:2)
**Files**: `amazon-hiring-bias.jpg`, `compas-bias.jpg`, `apple-card-bias.jpg`, etc.

#### 3.4 Resource Card Images (10 total)
**Location**: `/public/images/learn/resources/`
**Dimensions**: 1200x800 (3:2)
**Files**: `risk-assessment-template.jpg`, `bias-audit-checklist.jpg`, etc.

### Image Creation Priority
1. **Priority 1**: 5 hero images for learning paths
2. **Priority 2**: 15 History path concept cards
3. **Priority 3**: 10 most-referenced example cards
4. **Priority 4**: Remaining concept cards (Terminology, Risk, Responsibility, Future)
5. **Priority 5**: Resource card images

### Style Guidelines
- **Color Palette**: Use moss green (#333d29) and brown tan (#936639) accents
- **Visual Style**: Modern, professional, slightly abstract
- **Composition**: Clean, minimal, high contrast
- **Content**: Include relevant icons/logos, diagrams where appropriate
- **Accessibility**: Work in both light and dark themes

---

## 4. Data Structure

### Knowledge Graph YAML
**File**: `/content/knowledge-graph.yaml`

**Structure**:
```yaml
learning_paths:
  - id: history
    title: "History"
    slug: "/learn/history"
    tagline: "From Dartmouth to DeepMind"
    description: "Trace AI's evolution from 1950s academic conferences..."
    card_count: 15
    concept_cards:
      - history-1
      - history-2
      # ... 15 total
    example_cards:
      - example-1
    resource_cards:
      - resource-1

concept_cards_history:
  - id: history-1
    title: "The Building Blocks – What AI Actually Is"
    slug: what-ai-actually-is
    type: concept
    tldr: "AI is machine-based systems that can make predictions..."
    description: "Understand OECD AI Definition..."
    tags: [fundamentals, definitions, OECD, ISO]
    image: /images/learn/history/what-ai-actually-is.jpg
    article_file: /content/articles/final/[filename].md
    cross_path_refs:
      terminology:
        - term-1
      responsibility:
        - resp-1
```

**Key Fields**:
- `id`: Unique identifier
- `slug`: URL-friendly path segment
- `tldr`: Short summary (hidden by default, shown on hover)
- `description`: Full description (shown in article)
- `tags`: Array of tags for filtering/organization
- `image`: Path to concept card image
- `article_file`: Path to full MDX article
- `cross_path_refs`: Connections to other learning paths

---

## 5. Content Creation Status

**Reference Document**: `/docs/content-creation-status.md`

### Summary
| Learning Path | Total Cards | Articles Exist | Articles Needed | Status |
|--------------|-------------|----------------|-----------------|---------|
| **History** | 15 | 11 | **4 missing** | 73% Complete |
| **Terminology** | 24 | 14 | **10 missing** | 58% Complete |
| **Risk** | 28 | 20 | **8 missing** | 71% Complete |
| **Responsibility** | 75 | 75 | **0 missing** | ✅ 100% Complete |
| **Future** | 20 | 20 | **0 missing** | ✅ 100% Complete |
| **TOTAL** | **162** | **140** | **22 missing** | **86% Complete** |

### Missing Articles by Priority

#### Priority 1: History Path (4 articles)
1. The Building Blocks – What AI Actually Is
2. The AI Family Tree – Types of AI Systems
3. Machine Learning Demystified
4. *(One was miscounted - actually exists)*

#### Priority 2: Risk Path (8 articles)
1. Taxonomy of AI Harms
2. The Black Box Problem – Why AI Explainability Matters
3. Job Displacement – AI and the Future of Work
4. Autonomous Weapons – The AI Arms Race
5. Building Trustworthy AI – The Seven Pillars
6. Human-Centered AI Design
7. Fairness in AI – Definitions, Metrics, Trade-offs
8. The Ethics Landscape – AI Principles Worldwide

#### Priority 3: Terminology Path (10 articles)
1. What Is Machine Learning? (Deep Dive)
2. Supervised vs. Unsupervised Learning
3. Neural Networks Architecture Basics
4. Training/Validation/Test Data
5. Bias vs. Variance Tradeoff
6. CNNs for Images
7. RNNs for Sequences
8. Transformers Architecture
9. Pre-training and Fine-tuning
10. Hyperparameters vs. Parameters

**Total Words Needed**: ~55,000-66,000 words

---

## 6. Implementation Plan

**Reference Document**: `/docs/aidefence-v2-implementation-plan.md`

### Epic Structure
Every epic follows: **Create → Deploy to suniliyer.ca → Manual Testing by Sunil → Confirmation**

### All 15 Epics

#### Phase 1: Homepage & Foundation
- **Epic 1**: Homepage → Deploy → Test → Confirm

#### Phase 2: History Path (Content → Implementation)
- **Epic 2**: History Path StackCards Page → Deploy → Test → Confirm
- **Epic 2.5**: CREATE 4 Missing History Articles (before Epic 3)
- **Epic 3**: History Article Detail Pages → Deploy → Test → Confirm

#### Phase 3: All Learning Paths Infrastructure
- **Epic 4**: All 5 Learning Path Index Pages → Deploy → Test → Confirm

#### Phase 4: Terminology Path (Content → Implementation)
- **Epic 5**: Terminology Path StackCards Page → Deploy → Test → Confirm
- **Epic 5.5**: CREATE 10 Missing Terminology Articles (before Epic 6)
- **Epic 6**: Terminology Article Detail Pages → Deploy → Test → Confirm

#### Phase 5: Risk Path (Content → Implementation)
- **Epic 7**: Risk Path StackCards Page → Deploy → Test → Confirm
- **Epic 7.5**: CREATE 8 Missing Risk Articles (before Epic 8)
- **Epic 8**: Risk Article Detail Pages → Deploy → Test → Confirm

#### Phase 6: Responsibility & Future Paths
- **Epic 9**: Responsibility Path (All articles exist) → Deploy → Test → Confirm
- **Epic 10**: Future Path (All articles exist) → Deploy → Test → Confirm

#### Phase 7: Advanced Features
- **Epic 11**: Cross-Path References & Related Concepts → Deploy → Test → Confirm
- **Epic 12**: Search & Filtering → Deploy → Test → Confirm
- **Epic 13**: Progress Tracking → Deploy → Test → Confirm

#### Phase 8: Final Polish
- **Epic 14**: Performance Optimization & Testing → Deploy → Test → Confirm
- **Epic 15**: Production Launch → suniliyer.ca

### Deployment Process
1. **Git Workflow**:
   - Develop on feature branch
   - Merge to `main` when ready
   - Vercel auto-deploys on push to `main`

2. **Manual Testing by Sunil**:
   - Test on suniliyer.ca preview URL
   - Verify Rayo animations (GSAP ScrollTrigger)
   - Check responsive behavior (desktop/tablet/mobile)
   - Confirm TLDR hover functionality
   - Test navigation between paths

3. **Confirmation**:
   - Sunil confirms epic complete
   - Move to next epic

---

## 7. Technical Architecture

### Component Hierarchy

```
app/
├── layout.tsx (Root layout with header/footer)
├── page.tsx (Homepage)
├── learn/
│   ├── layout.tsx (Learning paths layout)
│   ├── [pathSlug]/
│   │   ├── page.tsx (StackCards index - uses Rayo works-simple structure)
│   │   └── [articleSlug]/
│   │       └── page.tsx (Article detail - uses Rayo blog-article structure)
│
components/
├── learn/
│   ├── StackCards.tsx (GSAP ScrollTrigger stacking animation)
│   ├── ConceptCard.tsx (Individual card with TLDR reveal)
│   ├── PathNavigation.tsx (5 learning paths sidebar)
│   ├── ArticleContent.tsx (MDX renderer)
│   ├── TableOfContents.tsx (Sticky TOC)
│   ├── CrossPathRefs.tsx (Path connections)
│   ├── RelatedConcepts.tsx (Related articles grid)
│
lib/
├── learning-paths-data.ts (Load knowledge-graph.yaml)
├── article-utils.ts (MDX processing)
```

### Animation Implementation

#### GSAP ScrollTrigger (StackCards)
```javascript
// lib/animations/stackCards.ts
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initStackCards = (wrapper: HTMLElement, cards: NodeListOf<Element>) => {
  const timeline = gsap.timeline();

  cards.forEach((card, index) => {
    if (index > 0) {
      timeline.to(card, {
        y: () => -card.clientHeight * index,
        ease: 'none',
      });
    }
  });

  ScrollTrigger.create({
    trigger: wrapper,
    start: 'top top',
    pin: true,
    scrub: true,
    end: () => `+=${wrapper.offsetHeight}`,
    animation: timeline,
  });
};
```

#### TLDR Reveal (CSS)
```css
/* components/learn/ConceptCard.module.css */
.card-tldr {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transform: translateY(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.concept-card:hover .card-tldr {
  opacity: 1;
  max-height: 300px;
  transform: translateY(0);
}
```

### Data Loading

```typescript
// lib/learning-paths-data.ts
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface ConceptCard {
  id: string;
  title: string;
  slug: string;
  type: 'concept' | 'example' | 'resource';
  tldr: string;
  description: string;
  tags: string[];
  image: string;
  article_file: string;
  cross_path_refs?: {
    [key: string]: string[];
  };
}

export interface LearningPath {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  card_count: number;
  concept_cards: string[];
  example_cards?: string[];
  resource_cards?: string[];
}

export const loadKnowledgeGraph = () => {
  const filePath = path.join(process.cwd(), 'content/knowledge-graph.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents);
};

export const getPathCards = (pathId: string): ConceptCard[] => {
  const data = loadKnowledgeGraph();
  const path = data.learning_paths.find((p: LearningPath) => p.id === pathId);
  const cardIds = path.concept_cards;

  return cardIds.map((cardId: string) => {
    return data[`concept_cards_${pathId}`].find((c: ConceptCard) => c.id === cardId);
  });
};
```

---

## 8. Responsive Design

### Breakpoints
- **Desktop**: > 1024px (Full StackCards with sidebar)
- **Tablet**: 768px - 1024px (Simplified stacking, hamburger menu)
- **Mobile**: < 768px (Vertical scroll list, no stacking)

### Desktop (>1024px)
```css
.learn-container {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 2rem;
}

.path-navigation {
  position: sticky;
  top: 80px;
  height: fit-content;
}

.stack-cards-wrapper {
  height: 85vh;
}
```

### Tablet (768-1024px)
```css
@media (max-width: 1024px) {
  .learn-container {
    grid-template-columns: 1fr;
  }

  .path-navigation {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  .stack-cards-wrapper {
    height: 70vh;
  }
}
```

### Mobile (<768px)
```css
@media (max-width: 768px) {
  .stack-cards-wrapper {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .concept-card {
    position: relative !important;
    transform: none !important;
  }

  /* Disable GSAP ScrollTrigger on mobile */
  .stack-cards-wrapper[data-mobile="true"] {
    pointer-events: auto;
  }
}
```

---

## 9. Accessibility

### ARIA Labels
```jsx
<nav aria-label="Learning Paths">
  <a href="/learn/history" aria-current="page">History</a>
  <a href="/learn/terminology">Terminology</a>
</nav>

<div role="region" aria-label="Stacking concept cards">
  <article aria-labelledby="card-1-title">
    <h2 id="card-1-title">The Building Blocks</h2>
  </article>
</div>
```

### Keyboard Navigation
- Tab through cards
- Enter/Space to open article
- Escape to close modals
- Arrow keys for prev/next navigation

### Screen Reader Support
- Semantic HTML (article, nav, section)
- Alt text for all images
- ARIA live regions for dynamic content
- Skip to main content link

---

## 10. Performance

### Image Optimization
- Use Next.js `<Image>` component
- WebP format with JPG fallback
- Lazy loading for below-fold images
- Responsive image sizes

```jsx
import Image from 'next/image';

<Image
  src="/images/learn/history/what-ai-actually-is.jpg"
  alt="OECD AI Definition diagram"
  width={1920}
  height={1280}
  loading="lazy"
  quality={85}
/>
```

### Code Splitting
- Route-based code splitting (Next.js automatic)
- Dynamic imports for heavy components
- Lazy load GSAP only on learning path pages

```jsx
import dynamic from 'next/dynamic';

const StackCards = dynamic(() => import('@/components/learn/StackCards'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});
```

### Caching Strategy
- Static generation for all pages (build time)
- Incremental static regeneration for articles
- CDN caching via Vercel

---

## 11. SEO

### Meta Tags (Example)
```jsx
// app/learn/history/what-ai-actually-is/page.tsx
export const metadata = {
  title: 'The Building Blocks – What AI Actually Is | AIDefence',
  description: 'Understand the OECD AI Definition (Nov 2023), ISO/IEC 22989:2022 terminology...',
  openGraph: {
    title: 'The Building Blocks – What AI Actually Is',
    description: 'AI is machine-based systems that can make predictions...',
    images: ['/images/learn/history/what-ai-actually-is.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Building Blocks – What AI Actually Is',
    description: 'AI is machine-based systems that can make predictions...',
    images: ['/images/learn/history/what-ai-actually-is.jpg'],
  },
};
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "The Building Blocks – What AI Actually Is",
  "description": "Understand the OECD AI Definition...",
  "educationalLevel": "Beginner",
  "learningResourceType": "Article",
  "about": {
    "@type": "Thing",
    "name": "Artificial Intelligence"
  }
}
```

---

## 12. Testing Checklist

### Functional Testing (Manual by Sunil)
- [ ] All 5 learning paths render correctly
- [ ] StackCards animation works (GSAP ScrollTrigger)
- [ ] TLDR reveals on card hover
- [ ] TLDR hides when not hovering
- [ ] Tags are always visible
- [ ] Path navigation links work
- [ ] Active path is highlighted
- [ ] All 20 cards appear in each path
- [ ] Article pages load with correct content
- [ ] Breadcrumbs work correctly
- [ ] Table of contents scrolls smoothly
- [ ] Cross-path references display
- [ ] Related concepts show 4 cards
- [ ] Prev/Next navigation works
- [ ] Theme toggle switches light/dark
- [ ] Mobile hamburger menu opens/closes

### Responsive Testing
- [ ] Desktop (>1024px): Full layout with sidebar
- [ ] Tablet (768-1024px): Hamburger menu, simplified stacking
- [ ] Mobile (<768px): Vertical scroll, no stacking
- [ ] Images scale correctly at all sizes
- [ ] Text is readable at all viewport widths

### Performance Testing
- [ ] Lighthouse score > 90 on all pages
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.5s

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## 13. Deployment Checklist

### Pre-Deployment
- [ ] All content created and reviewed
- [ ] All images optimized and uploaded
- [ ] Knowledge graph YAML validated
- [ ] Environment variables set in Vercel
- [ ] Domain suniliyer.ca configured
- [ ] SSL certificate active

### Deployment Steps
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy Epic [X]"
   git push origin main
   ```

2. **Vercel Auto-Deploy**:
   - Vercel detects push to `main`
   - Builds Next.js application
   - Deploys to suniliyer.ca
   - Provides preview URL

3. **Manual Testing by Sunil**:
   - Visit suniliyer.ca
   - Run through testing checklist above
   - Document any issues

4. **Confirmation**:
   - Sunil confirms epic complete
   - Create GitHub issue for any bugs found
   - Move to next epic

### Post-Deployment
- [ ] Monitor Vercel analytics
- [ ] Check error logs
- [ ] Verify all images load correctly
- [ ] Test on multiple devices/browsers

---

## 14. Quick Reference

### File Locations
| Type | Location |
|------|----------|
| Wireframes | `/docs/learn-history-wireframe.html`, `/docs/learn-article-detail-wireframe.html` |
| Image Reference | `/docs/learning-paths-image-reference.md` |
| Implementation Plan | `/docs/aidefence-v2-implementation-plan.md` |
| Content Status | `/docs/content-creation-status.md` |
| Knowledge Graph | `/content/knowledge-graph.yaml` |
| Articles | `/content/articles/final/` |
| Images | `/public/images/learn/` |

### Key URLs
| Page | URL |
|------|-----|
| Homepage | https://suniliyer.ca |
| History Path | https://suniliyer.ca/learn/history |
| History Article Example | https://suniliyer.ca/learn/history/what-ai-actually-is |
| Terminology Path | https://suniliyer.ca/learn/terminology |
| Risk Path | https://suniliyer.ca/learn/risk |
| Responsibility Path | https://suniliyer.ca/learn/responsibility |
| Future Path | https://suniliyer.ca/learn/future |

### Component Mapping (Rayo → AIDefence)
| Rayo Component | AIDefence Use |
|----------------|---------------|
| StackCards.tsx | Learning path index pages |
| Portfolios1.tsx | works-simple → learn/[path] |
| BlogDetails.tsx | blog-article → learn/[path]/[article] |
| Header.tsx | Site header (all pages) |
| Footer.tsx | Site footer (all pages) |
| Theme Toggle | Light/dark mode |

---

## 15. Next Steps

### Immediate Tasks
1. **Begin Epic 1**: Create homepage
2. **Create 5 Hero Images**: For all learning paths (Priority 1)
3. **Set up Vercel**: Connect GitHub repo to suniliyer.ca

### Content Creation Timeline
- **Week 1**: Create 4 missing History articles (Epic 2.5)
- **Week 2**: Create 8 missing Risk articles (Epic 7.5)
- **Week 3**: Create 10 missing Terminology articles (Epic 5.5)

### Development Timeline
- **Weeks 1-2**: Epics 1-3 (Homepage + History Path)
- **Weeks 3-4**: Epics 4-6 (All Path Infrastructure + Terminology)
- **Weeks 5-6**: Epics 7-10 (Risk + Responsibility + Future)
- **Weeks 7-8**: Epics 11-15 (Advanced Features + Polish + Launch)

---

## Summary

This wireframe package provides:
- ✅ Complete design specifications based on Rayo template
- ✅ 2 HTML wireframes (learning path index + article detail)
- ✅ 162+ image specifications with filenames and descriptions
- ✅ Content audit showing 22 articles needed
- ✅ 15-epic implementation plan with Create→Deploy→Test structure
- ✅ Technical architecture and component hierarchy
- ✅ GSAP ScrollTrigger animation implementation details
- ✅ Responsive design breakpoints
- ✅ Accessibility and SEO guidelines
- ✅ Testing and deployment checklists

**Status**: All wireframes and documentation complete. Ready to begin Epic 1 (Homepage implementation).

---

**Created**: 2025-12-22
**Last Updated**: 2025-12-22
**Version**: 1.0
**Status**: Complete
