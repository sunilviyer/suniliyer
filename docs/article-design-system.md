# AIDefence Article Design System

## Design Philosophy

**Concept**: "The New Yorker meets Nature Journal"
**Aesthetic**: Editorial Refinement with Academic Rigor
**Goal**: Create distinctive, memorable, and highly readable long-form educational content that feels authoritative yet approachable.

---

## Typography System

### Font Stack

**Display/Headings**: Playfair Display
- Elegant serif with high contrast
- Used for article titles (h1), major headings (h2, h3)
- Editorial sophistication

**Body Text**: Crimson Pro
- Highly readable serif optimized for long-form reading
- Used for paragraphs, blockquotes, lists
- Academic-quality readability

**UI/Meta**: DM Sans
- Clean, modern sans-serif
- Used for labels, badges, captions, navigation
- Provides clarity and contrast to serif content

### Type Scale

```
H1 (Article Title): 56px / 700 / Playfair Display
H2 (Major Section): 44px / 700 / Playfair Display
H3 (Subsection): 32px / 600 / Playfair Display
H4 (Minor Heading): 20px / 700 / DM Sans (uppercase)
Body Text: 20px / 400 / Crimson Pro
Caption/Meta: 13-14px / 500-600 / DM Sans
```

---

## Color Palette

### Base Colors
- **Background**: #FFFCF5 (warm cream - premium paper feel)
- **Text Primary**: #1a1a1a (deep charcoal)
- **Text Secondary**: #6b6b6b (medium gray)
- **Text Tertiary**: #4a4a4a (lighter gray)

### Path-Specific Accent Colors
- **History**: #936639 (Toffee Brown)
- **Terminology**: #a68a64 (Camel)
- **Risk**: #582f0e (Dark Walnut)
- **Responsibility**: #a4ac86 (Dry Sage)
- **Future**: #414833 (Moss Green)

### Functional Colors
- **Borders**: rgba(26, 26, 26, 0.1)
- **Hover Backgrounds**: rgba(26, 26, 26, 0.02-0.05)
- **Code Background**: rgba(147, 102, 57, 0.08)
- **Citation Color**: #936639

---

## Component Library

### 1. ArticleLayout
**Purpose**: Main article container with 2-column asymmetric layout
**Features**:
- 60/40 content-to-sidebar split on desktop
- Responsive grid that stacks on mobile
- Reading progress indicator at top
- Path-specific color theming

**Usage**:
```tsx
<ArticleLayout
  path="history"
  pathTitle="History"
  articleTitle="AI History Timeline"
  tldr="Brief summary..."
  tags={['AI', 'Timeline']}
  readTime="8 min read"
  updatedDate="January 2025"
  sidebarContent={{
    examples: [...],
    keyTakeaways: [...],
    resources: [...]
  }}
>
  {/* Article content */}
</ArticleLayout>
```

### 2. ReadingProgress
**Purpose**: Visual scroll indicator
**Features**:
- Fixed position at page top
- Path-specific color
- Smooth animation as user scrolls
- Shadow glow effect

### 3. ArticleTLDR
**Purpose**: Prominent summary card
**Features**:
- Gradient background with left border accent
- Large italic text (22px)
- Icon with "TL;DR" label
- Slide-in animation on load

### 4. FloatingSidebar
**Purpose**: Contextual information that follows scroll
**Features**:
- Becomes sticky after scrolling 300px
- Contains key takeaways, examples, resources
- Staggered fade-in animation
- Responsive: stacks below content on mobile

### 5. ExampleCard
**Purpose**: Collapsible real-world examples
**Features**:
- Category badge
- Expandable content with smooth animation
- Hover effects: lift, border color change
- Vertical decoration bar on left
- External link icon for sources

**Usage**:
```tsx
const examples = [
  {
    id: 'ex-1',
    title: 'Amazon Hiring Algorithm Bias',
    description: 'How Amazon's ML recruiting tool showed bias against women...',
    category: 'Real-World Case',
    link: 'https://...'
  }
];
```

### 6. Accordion
**Purpose**: Progressive disclosure for supplementary content
**Features**:
- Smooth expand/collapse animation
- Rotate chevron icon
- White background with subtle border
- Hover state
- Keyboard accessible

**Usage**:
```tsx
<Accordion title="Additional Resources" defaultOpen={false}>
  <ul>...</ul>
</Accordion>
```

### 7. PullQuote
**Purpose**: Magazine-style callouts and quotations
**Variants**:
- **default**: Standard blockquote with left border
- **highlight**: Warm gradient background
- **sidebar**: Floats to the right (400px width)

**Features**:
- Giant decorative quote mark
- Large italic text (28px Playfair Display)
- Optional attribution
- Subtle shadow

**Usage**:
```tsx
<PullQuote
  quote="AI governance is not just about compliance..."
  attribution="OECD AI Principles, 2019"
  variant="highlight"
/>
```

### 8. ArticleChecklist
**Purpose**: Interactive task lists and requirement checklists
**Features**:
- Optional interactivity (user can check/uncheck)
- Check animation with scale pop
- Strikethrough on completion
- Color-coded checkboxes (path-specific)
- Clean table-like appearance

**Usage**:
```tsx
<ArticleChecklist
  title="Pre-Deployment Checklist"
  interactive={true}
  items={[
    { id: '1', text: 'Conduct bias audit', checked: false },
    { id: '2', text: 'Document training data sources', checked: true },
  ]}
/>
```

### 9. SourceCitation
**Purpose**: Academic-quality citations with hover previews
**Features**:
- Superscript citation number
- Hover preview card with metadata
- Type indicators (academic, news, government, tech)
- Direct link to source
- Accessible with keyboard

**Types**: academic 📚, news 📰, government 🏛️, tech 💻, other 📄

**Usage**:
```tsx
<SourceCitation
  number={1}
  source={{
    title: "The EU AI Act Explained",
    author: "Dr. Jane Smith",
    publication: "Nature",
    year: "2023",
    url: "https://...",
    type: "academic"
  }}
/>
```

### 10. EnhancedTable
**Purpose**: Data tables with superior readability
**Variants**:
- **striped**: Alternating row colors
- **bordered**: Cell borders for grid structure

**Features**:
- Responsive horizontal scroll
- Optional caption
- Hover row highlight
- Header with path-specific accent
- Monaco font for data cells (optional)

**Usage**:
```tsx
<EnhancedTable
  caption="EU AI Act Risk Classification"
  variant="striped"
  columns={[
    { header: 'Risk Level', accessor: 'level', width: '30%' },
    { header: 'Examples', accessor: 'examples', width: '70%' }
  ]}
  data={[
    { level: 'Unacceptable', examples: 'Social scoring, real-time biometric surveillance' },
    { level: 'High', examples: 'Hiring algorithms, credit scoring' }
  ]}
/>
```

### 11. EnhancedArticleContent
**Purpose**: Rich markdown renderer with custom components
**Features**:
- Drop cap on first paragraph
- Decorative heading underlines
- Styled blockquotes with giant quote marks
- Inline code with tinted background
- Syntax-highlighted code blocks
- Smart link styling
- Citation marker support
- Automatic sources section

**Special Markdown Features**:
```markdown
## Heading with decorative line

Normal paragraph with **bold** and *italic*.

> Blockquote with giant quote mark

`inline code` with subtle background

\```javascript
// Code block with dark theme
const example = "syntax highlighting";
\```

Use [cite:1] for inline citations.
```

---

## Layout Patterns

### Desktop Layout (>1200px)
```
┌─────────────────────────────────────────────────────┐
│                   ReadingProgress                    │
├─────────────────────────┬───────────────────────────┤
│                         │                           │
│                         │                           │
│   ArticleMain           │   FloatingSidebar         │
│   (720px max)           │   (420px)                 │
│                         │   - Key Takeaways         │
│   - Breadcrumbs         │   - Examples (cards)      │
│   - Header + Meta       │   - Resources (accordion) │
│   - Title               │                           │
│   - Tags                │   [Sticky after 300px]    │
│   - TLDR Card           │                           │
│   - Content             │                           │
│     - H2, H3, H4        │                           │
│     - Paragraphs        │                           │
│     - PullQuotes        │                           │
│     - Checklists        │                           │
│     - Tables            │                           │
│     - Citations         │                           │
│   - Sources Section     │                           │
│                         │                           │
└─────────────────────────┴───────────────────────────┘
```

### Mobile Layout (<768px)
```
┌───────────────────────┐
│   ReadingProgress     │
├───────────────────────┤
│                       │
│   ArticleMain         │
│   (full width)        │
│                       │
│   - Breadcrumbs       │
│   - Header + Meta     │
│   - Title             │
│   - Tags              │
│   - TLDR Card         │
│   - Content           │
│   - Sources           │
│                       │
├───────────────────────┤
│   Sidebar Content     │
│   (stacked below)     │
│                       │
│   - Key Takeaways     │
│   - Examples          │
│   - Resources         │
│                       │
└───────────────────────┘
```

---

## Animation Strategy

### Page Load Sequence
1. **ReadingProgress** fades in immediately
2. **ArticleMain** fades up (0.8s delay)
3. **TLDR Card** slides in from left (0.3s delay after main)
4. **FloatingSidebar** fades in (0.4s delay after main)
5. **ExampleCards** stagger in (0.1s between each)

### Interaction Animations
- **Hover**: Smooth scale(1.05) on cards
- **Accordion**: max-height transition (0.3s cubic-bezier)
- **Checkbox**: Scale pop animation (0.3s bounce)
- **Citation Hover**: Fade-up preview (0.2s)
- **Link Hover**: Border color transition
- **Scroll**: Progress bar width (0.1s ease)

### Performance Considerations
- Use CSS-only animations where possible
- `will-change: transform` on animated elements
- Lazy load sidebar content on mobile
- Intersection Observer for scroll-triggered animations

---

## Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1201px) {
  /* 2-column layout */
  /* Sidebar sticky */
}

/* Tablet */
@media (max-width: 1200px) {
  /* Stacked layout */
  /* Sidebar relative position */
}

/* Mobile */
@media (max-width: 768px) {
  /* Reduced font sizes */
  /* Single column */
  /* Reduced padding/margins */
}
```

---

## Accessibility Features

1. **Semantic HTML**
   - Proper heading hierarchy (h1 → h2 → h3)
   - `<article>`, `<aside>`, `<nav>` landmarks
   - List structures for navigation

2. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus states
   - Accordion keyboard controls
   - Skip-to-content link

3. **Screen Readers**
   - ARIA labels on icons
   - `aria-expanded` on accordions
   - Alt text on decorative elements hidden
   - Meaningful link text

4. **Color Contrast**
   - WCAG AA compliance minimum
   - 4.5:1 ratio for body text
   - 3:1 ratio for large text
   - Non-color indicators (icons, borders)

5. **Reading Experience**
   - Generous line-height (1.8)
   - Comfortable line length (720px max)
   - Scalable fonts (rem/em units)
   - High-contrast mode support

---

## Content Guidelines

### Article Structure
1. **Breadcrumbs** - Navigation context
2. **Meta** - Path badge, date, read time
3. **Title** - Clear, descriptive (h1)
4. **Tags** - 3-5 relevant keywords
5. **TL;DR** - 1-2 sentence summary
6. **Introduction** - 2-3 paragraphs with drop cap
7. **Body** - Sections with h2 headings
8. **Pull Quotes** - 1-2 per article for visual breaks
9. **Examples** - 2-4 real-world cases in sidebar
10. **Checklists** - When actionable steps needed
11. **Tables** - For comparative data
12. **Sources** - Numbered citations throughout

### Writing Best Practices
- **Paragraphs**: 3-5 sentences
- **Sentences**: Vary length, avg 15-20 words
- **Headings**: Front-load with keywords
- **Lists**: Break up dense content
- **Citations**: Academic rigor, [cite:N] format
- **Examples**: Concrete over abstract
- **Definitions**: Bold first usage of terms

---

## Implementation Checklist

### For Each New Article:

- [ ] Set up ArticleLayout with path-specific colors
- [ ] Write compelling title and TL;DR
- [ ] Structure content with proper heading hierarchy
- [ ] Add 2-4 example cards to sidebar
- [ ] Include 3-5 key takeaways
- [ ] Add pull quote for visual break
- [ ] Create checklist if actionable content
- [ ] Add table if comparative data exists
- [ ] Cite all sources with [cite:N] markers
- [ ] List full sources at bottom
- [ ] Test on mobile devices
- [ ] Verify color contrast
- [ ] Check keyboard navigation
- [ ] Proofread for clarity and flow

---

## File Structure

```
components/articles/
├── ArticleLayout.tsx           # Main layout wrapper
├── ReadingProgress.tsx         # Top progress bar
├── ArticleTLDR.tsx            # Summary card
├── FloatingSidebar.tsx        # Sticky sidebar
├── ExampleCard.tsx            # Collapsible examples
├── Accordion.tsx              # Progressive disclosure
├── PullQuote.tsx              # Magazine callouts
├── ArticleChecklist.tsx       # Interactive lists
├── SourceCitation.tsx         # Hover citations
├── EnhancedTable.tsx          # Rich tables
└── EnhancedArticleContent.tsx # Markdown renderer
```

---

## Future Enhancements

1. **Interactive Diagrams**
   - D3.js visualizations
   - Mermaid flowcharts
   - Interactive timelines

2. **Reading Tools**
   - Highlight-to-share
   - Text-to-speech
   - Print-optimized CSS
   - PDF export

3. **Engagement**
   - Inline quizzes
   - Progress tracking
   - Bookmarking
   - Comments/discussions

4. **Analytics**
   - Scroll depth tracking
   - Time on section
   - Citation click-through
   - Example card expansion rate

---

## Design Principles

1. **Hierarchy**: Clear visual hierarchy guides the eye
2. **Rhythm**: Consistent spacing creates flow
3. **Contrast**: Typography and color create emphasis
4. **Balance**: Asymmetric yet stable layouts
5. **Clarity**: Information-first, decoration-second
6. **Elegance**: Refined details elevate the experience
7. **Accessibility**: Usable by everyone
8. **Performance**: Fast, smooth, responsive

---

## Credits & Inspiration

- **Typography**: New York Times Longform, The Atlantic
- **Layout**: Medium's reading experience, Notion's clarity
- **Interactivity**: Stripe's documentation, Apple's product pages
- **Academic Rigor**: Nature, Science, PNAS journals
- **Color**: Kinfolk magazine, Cereal magazine

---

*Last Updated: January 2025*
*Version: 1.0*
