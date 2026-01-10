# Article Design System - Quick Implementation Guide

## What Was Created

I've designed a sophisticated, editorial-style article design system for AIDefence that combines magazine-quality aesthetics with academic rigor. The system includes **11 custom components** and follows a "The New Yorker meets Nature Journal" design philosophy.

---

## Key Features

### 1. **Editorial Typography**
- **Playfair Display** (serif) for elegant headings
- **Crimson Pro** (serif) for highly readable body text
- **DM Sans** (sans) for UI elements and labels
- Drop cap on first paragraph
- Line height: 1.8 for optimal readability

### 2. **Sophisticated Layout**
- Asymmetric 2-column design (60/40 content-to-sidebar)
- Floating sidebar that becomes sticky on scroll
- Responsive: stacks on mobile
- Reading progress indicator at top

### 3. **Interactive Components**
- **Example Cards**: Expandable case studies with animations
- **Accordions**: Progressive disclosure for supplementary content
- **Checklists**: Interactive task lists with check animations
- **Pull Quotes**: Magazine-style callouts in 3 variants
- **Source Citations**: Hover previews with full metadata
- **Enhanced Tables**: Beautiful data presentation

### 4. **Rich Content Features**
- TL;DR summary card with slide-in animation
- Breadcrumb navigation
- Path-specific color theming (History, Terminology, Risk, etc.)
- Inline citations with hover previews
- Automatic sources/references section
- Syntax-highlighted code blocks

---

## Components Created

### Core Layout Components
1. `ArticleLayout.tsx` - Main wrapper with 2-column grid
2. `ReadingProgress.tsx` - Top scroll indicator
3. `FloatingSidebar.tsx` - Sticky sidebar container
4. `ArticleTLDR.tsx` - Summary card

### Content Components
5. `EnhancedArticleContent.tsx` - Rich markdown renderer
6. `PullQuote.tsx` - Magazine callouts (3 variants)
7. `ArticleChecklist.tsx` - Interactive lists
8. `EnhancedTable.tsx` - Beautiful tables
9. `SourceCitation.tsx` - Hover citation previews
10. `ExampleCard.tsx` - Expandable examples
11. `Accordion.tsx` - Progressive disclosure

---

## Quick Start

### Basic Article Structure

```tsx
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { EnhancedArticleContent } from '@/components/articles/EnhancedArticleContent';

export default function ArticlePage() {
  return (
    <ArticleLayout
      path="history"
      pathTitle="History"
      articleTitle="AI History Timeline"
      tldr="A comprehensive overview of AI's evolution from the 1956 Dartmouth Conference to today's foundation models."
      tags={['AI', 'Timeline', 'History']}
      readTime="8 min read"
      updatedDate="January 2025"
      sidebarContent={{
        keyTakeaways: [
          'AI research began in 1956 at Dartmouth',
          'Deep learning breakthrough came in 2012 with AlexNet',
          'ChatGPT marked the mainstream moment in 2022'
        ],
        examples: [
          {
            id: 'ex-1',
            title: 'AlexNet\'s ImageNet Victory',
            description: 'How a deep learning model revolutionized computer vision in 2012...',
            category: 'Breakthrough',
            link: 'https://papers.nips.cc/...'
          }
        ],
        resources: [
          {
            title: 'Dartmouth Workshop Proposal',
            url: 'https://...',
            type: 'Historical Document'
          }
        ]
      }}
    >
      <EnhancedArticleContent
        content={markdownContent}
        sources={[
          {
            title: 'A Proposal for the Dartmouth Summer Research Project',
            author: 'McCarthy et al.',
            year: '1955',
            url: 'https://...',
            type: 'academic'
          }
        ]}
      />
    </ArticleLayout>
  );
}
```

---

## Using Special Components

### Pull Quote
```tsx
import { PullQuote } from '@/components/articles/PullQuote';

<PullQuote
  quote="The field of artificial intelligence was officially born at Dartmouth College in 1956."
  attribution="John McCarthy, AI Pioneer"
  variant="highlight"  // 'default' | 'highlight' | 'sidebar'
/>
```

### Interactive Checklist
```tsx
import { ArticleChecklist } from '@/components/articles/ArticleChecklist';

<ArticleChecklist
  title="AI Governance Readiness Checklist"
  interactive={true}
  items={[
    { id: '1', text: 'Establish AI governance committee' },
    { id: '2', text: 'Conduct algorithmic impact assessment' },
    { id: '3', text: 'Document training data sources' },
  ]}
/>
```

### Enhanced Table
```tsx
import { EnhancedTable } from '@/components/articles/EnhancedTable';

<EnhancedTable
  caption="EU AI Act Risk Categories"
  variant="striped"
  columns={[
    { header: 'Risk Level', accessor: 'level', width: '25%' },
    { header: 'Examples', accessor: 'examples', width: '50%' },
    { header: 'Requirements', accessor: 'requirements', width: '25%' }
  ]}
  data={[
    {
      level: 'Unacceptable',
      examples: 'Social scoring, subliminal manipulation',
      requirements: 'Prohibited'
    },
    {
      level: 'High',
      examples: 'Hiring algorithms, credit scoring',
      requirements: 'Mandatory compliance'
    }
  ]}
/>
```

### Accordion for Resources
```tsx
import { Accordion } from '@/components/articles/Accordion';

<Accordion title="Additional Reading" defaultOpen={false}>
  <ul>
    <li><a href="...">OECD AI Principles</a></li>
    <li><a href="...">EU AI Act Full Text</a></li>
  </ul>
</Accordion>
```

---

## Markdown Support

The `EnhancedArticleContent` component supports rich markdown:

```markdown
## Major Heading with Decorative Line

This is the first paragraph with a beautiful drop cap on the first letter.

### Subsection Heading

Regular paragraph with **bold text**, *italic text*, and `inline code`.

> This becomes a beautiful blockquote with a giant decorative quote mark

- Bulleted lists are supported
- With nice styling
- And proper spacing

1. Numbered lists too
2. With custom markers
3. In the path-specific color

Use [cite:1] for inline citations that show hover previews.

\```javascript
// Code blocks with dark theme
const example = "Hello World";
\```
```

---

## Color Theming

Each learning path has its own accent color:

- **History**: #936639 (Toffee Brown)
- **Terminology**: #a68a64 (Camel)
- **Risk**: #582f0e (Dark Walnut)
- **Responsibility**: #a4ac86 (Dry Sage)
- **Future**: #414833 (Moss Green)

Set via the `path` prop on `ArticleLayout`.

---

## Responsive Behavior

### Desktop (>1200px)
- 2-column layout with floating sidebar
- Sidebar becomes sticky after 300px scroll
- Full typography scale

### Tablet (768px - 1200px)
- Stacked layout (sidebar below content)
- Slightly reduced font sizes
- Sidebar no longer sticky

### Mobile (<768px)
- Single column
- Reduced padding and margins
- Smaller font sizes for readability
- Touch-friendly interactive elements

---

## Animation Details

### Page Load
1. Reading progress bar appears
2. Main article fades up (0.8s)
3. TL;DR card slides in from left (1.1s)
4. Sidebar fades in (1.2s)
5. Example cards stagger in (0.1s apart)

### Interactions
- **Hover**: Cards lift 4px with shadow
- **Accordion**: Smooth expand with chevron rotation
- **Checkbox**: Scale pop animation
- **Citation**: Fade-up preview card
- **Scroll**: Smooth progress bar update

---

## Accessibility

✅ Semantic HTML (article, aside, nav)
✅ ARIA labels on interactive elements
✅ Keyboard navigation support
✅ Focus states on all clickable items
✅ Screen reader friendly
✅ WCAG AA color contrast
✅ Scalable fonts (rem/em units)
✅ Skip-to-content support

---

## Performance

- CSS-only animations where possible
- Lazy load sidebar images
- Intersection Observer for scroll triggers
- Font preloading (Google Fonts)
- will-change for animated elements
- Responsive images with next/image

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers
- Progressive enhancement approach

---

## Next Steps

1. **Test the components**: Create a sample article using all components
2. **Adjust colors**: Customize path-specific colors if needed
3. **Add content**: Populate with your 158 articles from knowledge-graph.yaml
4. **Customize animations**: Tweak timing/easing to your preference
5. **Add features**: Consider interactive diagrams, quizzes, etc.

---

## File Locations

```
/components/articles/
├── ArticleLayout.tsx
├── ReadingProgress.tsx
├── ArticleTLDR.tsx
├── FloatingSidebar.tsx
├── ExampleCard.tsx
├── Accordion.tsx
├── PullQuote.tsx
├── ArticleChecklist.tsx
├── SourceCitation.tsx
├── EnhancedTable.tsx
└── EnhancedArticleContent.tsx

/docs/
└── article-design-system.md  (Full documentation)

/app/layout.tsx  (Updated with Google Fonts)
```

---

## Design Philosophy Recap

**"The New Yorker meets Nature Journal"**

- **Elegant**: Playfair Display brings editorial sophistication
- **Readable**: Crimson Pro at 20px with 1.8 line-height
- **Authoritative**: Academic-quality citations and structure
- **Engaging**: Interactive elements and animations
- **Accessible**: WCAG compliant, keyboard navigable
- **Distinctive**: Avoids generic "AI slop" aesthetics

This is a premium reading experience that respects both the content and the reader.

---

*Ready to implement? Start with ArticleLayout and EnhancedArticleContent, then layer in the special components as needed.*
