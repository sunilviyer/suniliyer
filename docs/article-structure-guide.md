# Complete Article Structure Guide

**Version:** 2.0
**Last Updated:** January 8, 2026
**Purpose:** Comprehensive guide for creating fully-featured articles with all available interactive components

---

## Table of Contents

1. [Overview](#overview)
2. [Article YAML Schema](#article-yaml-schema)
3. [Component Reference](#component-reference)
4. [Content Structure](#content-structure)
5. [Inline Context Cards](#inline-context-cards)
6. [Complete Example](#complete-example)
7. [Best Practices](#best-practices)
8. [Migration Guide](#migration-guide)

---

## Overview

Every article in the AIDefence platform can utilize a rich set of interactive components to enhance reader engagement and comprehension. This guide provides the complete structure and YAML schema needed to create articles that fully leverage all available features.

### Available Components

1. **ArticleLayout** - Main container with header, metadata, and theme support
2. **InlineContextCard** - Expandable cards triggered by inline text with Rayo-style animation
3. **KeyLearnings** - End-of-article summary of key takeaways
4. **Accordion** - Collapsible sections for additional resources and references
5. **ArticleProgressNav** - Fixed bottom navigation with progress indicators
6. **FloatingPathsNav** - Right-side learning path navigator
7. **TL;DR** - Quick summary at article start
8. **Various card types** - Technical concepts, frameworks, scenarios, examples, resources

---

## Article YAML Schema

### Complete Structure

```yaml
# Article Metadata
article:
  slug: "what-is-ai"
  path: "history"  # One of: history, terminology, risk, responsibility, future
  title: "What is Artificial Intelligence?"
  tldr: "AI is the simulation of human intelligence by machines, enabling them to learn, reason, and make decisions. This article explores AI's definition, core technologies, and real-world applications."

  # Article Metadata
  tags:
    - "Fundamentals"
    - "Introduction"
    - "Core Concepts"
  read_time: "8 min read"
  updated_date: "January 2026"
  header_image: "/images/headercards/history-header.png"
  theme: "light"  # or "dark"

  # Navigation (within path)
  navigation:
    current_index: 1
    total_articles: 12
    prev_article:
      slug: "/history/introduction-to-ai"
      title: "Introduction to AI"
    next_article:
      slug: "/history/ai-evolution"
      title: "The Evolution of AI"

  # Key Learnings (end of article)
  key_learnings:
    - "AI encompasses machine learning, deep learning, and natural language processing as core technologies"
    - "Modern AI excels at specific tasks but struggles with general human-like intelligence"
    - "Ethical considerations around bias, privacy, and accountability are central to responsible AI development"
    - "AI applications span healthcare, finance, transportation, and countless other industries"
    - "Understanding AI fundamentals is essential for navigating our increasingly automated world"

# Content Sections
sections:
  - type: "heading"
    level: 2
    text: "Understanding Artificial Intelligence"

  - type: "paragraph"
    content: >
      Artificial Intelligence (AI) represents one of the most transformative
      technologies of our time. At its core, AI refers to the capability of
      machines to perform tasks that typically require human intelligence.

  - type: "inline_card"
    trigger: "machine learning"
    card:
      id: "ml-definition"
      title: "Machine Learning"
      type: "terminology"
      summary: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed. ML algorithms identify patterns in data to make predictions or decisions."
      tags:
        - "AI Technology"
        - "Core Concept"
        - "Data Science"

  - type: "inline_card"
    trigger: "deep learning"
    card:
      id: "dl-definition"
      title: "Deep Learning"
      type: "terminology"
      summary: "An advanced machine learning technique using neural networks with multiple layers to process data. Inspired by the human brain's structure, deep learning excels at image recognition, natural language processing, and complex pattern detection."
      tags:
        - "Neural Networks"
        - "Advanced AI"
        - "Computer Vision"

# Inline Context Cards (used within paragraphs)
inline_cards:
  - trigger: "machine learning"
    card:
      id: "ml-definition"
      title: "Machine Learning"
      type: "terminology"  # terminology | framework | scenario | example | resource
      summary: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed. ML algorithms identify patterns in data to make predictions or decisions."
      tags:
        - "AI Technology"
        - "Core Concept"
        - "Data Science"

  - trigger: "neural networks"
    card:
      id: "neural-networks"
      title: "Neural Networks"
      type: "terminology"
      summary: "Computing systems inspired by biological neural networks in animal brains. Composed of layers of interconnected nodes (neurons) that process and transmit information, enabling pattern recognition and learning."
      tags:
        - "Deep Learning"
        - "Architecture"
        - "Computation"

  - trigger: "GDPR compliance"
    card:
      id: "gdpr-framework"
      title: "GDPR (General Data Protection Regulation)"
      type: "framework"
      summary: "EU regulation governing personal data processing and privacy rights. Established in 2018 with penalties up to €20M or 4% of global revenue for violations. Requires explicit consent, data portability, and the right to be forgotten."
      tags:
        - "Data Protection"
        - "Privacy"
        - "EU Regulation"

  - trigger: "autonomous vehicle scenario"
    card:
      id: "av-scenario"
      title: "Self-Driving Car Ethical Dilemma"
      type: "scenario"
      summary: "An autonomous vehicle must choose between swerving to avoid a pedestrian (risking passengers) or staying course (risking the pedestrian). This scenario highlights the challenge of programming ethical decision-making into AI systems."
      tags:
        - "Ethics"
        - "Decision Making"
        - "Transportation"

  - trigger: "GPT-4"
    card:
      id: "gpt4-example"
      title: "GPT-4: Large Language Model"
      type: "example"
      summary: "OpenAI's fourth-generation language model with 1.7 trillion parameters, capable of generating human-like text, answering questions, writing code, and creative tasks. Demonstrates current state-of-the-art in natural language AI."
      tags:
        - "Large Language Model"
        - "Natural Language"
        - "Generative AI"

  - trigger: "AI safety resources"
    card:
      id: "ai-safety-resources"
      title: "AI Safety & Alignment Resources"
      type: "resource"
      summary: "Comprehensive collection of research papers, frameworks, and tools for ensuring AI systems behave safely and align with human values. Includes work from AI Safety organizations, academic institutions, and industry leaders."
      tags:
        - "Safety"
        - "Alignment"
        - "Research"

# Accordions (typically at end of article)
accordions:
  - title: "Additional Resources"
    default_open: false
    items:
      - "Introduction to Machine Learning - Stanford Online Course"
      - "Deep Learning Specialization - Andrew Ng, Coursera"
      - "AI: A Modern Approach - Russell & Norvig (Textbook)"
      - "The Alignment Problem - Brian Christian (Book)"
      - "AI Ethics Guidelines - European Commission"

  - title: "Sources & References"
    default_open: false
    items:
      - "Artificial Intelligence: A Modern Approach (4th Edition) - Russell & Norvig, 2020"
      - "Deep Learning - Goodfellow, Bengio, Courville, 2016"
      - "Attention Is All You Need - Vaswani et al., 2017 (Transformer Architecture)"
      - "GPT-4 Technical Report - OpenAI, 2023"
      - "EU AI Act - Official Regulation (EU) 2024/1689"

# Sidebar Cards (optional - shown in right sidebar)
sidebar_cards:
  - type: "technical_concept"
    title: "Turing Test"
    description: "Alan Turing's proposed test of a machine's ability to exhibit intelligent behavior indistinguishable from a human."
    tags:
      - "Historical"
      - "Intelligence Measurement"

  - type: "framework"
    title: "Responsible AI Principles"
    description: "Core principles including fairness, accountability, transparency, and privacy that guide ethical AI development."
    tags:
      - "Ethics"
      - "Best Practices"
```

---

## Component Reference

### 1. ArticleLayout

**Purpose:** Main container wrapping all article content

**Props:**
```typescript
interface ArticleLayoutProps {
  path: 'history' | 'terminology' | 'risk' | 'responsibility' | 'future';
  pathTitle: string;
  articleTitle: string;
  tldr: string;
  tags: string[];
  readTime: string;
  updatedDate: string;
  headerImage: string;
  theme?: 'light' | 'dark';
  sidebarCards?: SidebarCard[];
  children: React.ReactNode;
}
```

**Usage:**
```tsx
<ArticleLayout
  path="history"
  pathTitle="History"
  articleTitle="What is Artificial Intelligence?"
  tldr="AI is the simulation of human intelligence..."
  tags={['Fundamentals', 'Introduction']}
  readTime="8 min read"
  updatedDate="January 2026"
  headerImage="/images/headercards/history-header.png"
  theme="light"
  sidebarCards={[]}
>
  {/* Article content here */}
</ArticleLayout>
```

---

### 2. InlineContextCard

**Purpose:** Expandable contextual cards triggered by inline text with animated hover

**Props:**
```typescript
interface InlineContextCardProps {
  trigger: string;  // The text that triggers the card
  card: {
    id: string;
    title: string;
    type: 'terminology' | 'framework' | 'scenario' | 'example' | 'resource';
    icon?: string;
    summary: string;
    tags?: string[];
  };
}
```

**Card Types & Colors:**
- **terminology** - Technical terms and definitions (Green: #8B9B83)
- **framework** - Regulations, standards, methodologies (Brown: #A0887C)
- **scenario** - Real-world situations and case studies (Blue: #7A8A9E)
- **example** - Specific implementations or instances (Rust: #A0847C)
- **resource** - Tools, papers, further reading (Teal: #7A9E9E)

**Usage:**
```tsx
Organizations deploying{' '}
<InlineContextCard
  trigger="high-risk AI systems"
  card={{
    id: 'high-risk-ai',
    title: 'High-Risk AI Systems',
    type: 'terminology',
    summary: 'AI systems that pose significant risks to health, safety, or fundamental rights...',
    tags: ['EU AI Act', 'Regulation', 'Classification']
  }}
/>{' '}
must comply with stringent requirements.
```

**Animation Behavior:**
- **Hover:** Letters slide up with staggered delay (Rayo-style)
- **Click:** Card expands below trigger with smooth animation
- **Click outside:** Card collapses
- **Mobile:** Card appears centered on screen

---

### 3. KeyLearnings

**Purpose:** Summary of key takeaways at article end

**Props:**
```typescript
interface KeyLearningsProps {
  learnings: string[];
  theme?: 'light' | 'dark';
}
```

**Usage:**
```tsx
<KeyLearnings
  theme="light"
  learnings={[
    'AI encompasses machine learning, deep learning, and NLP',
    'Modern AI excels at specific tasks but lacks general intelligence',
    'Ethical considerations are central to responsible development'
  ]}
/>
```

**Placement:** Typically placed after main article content, before accordions

---

### 4. Accordion

**Purpose:** Collapsible sections for additional content

**Props:**
```typescript
interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  onToggle?: () => void;
  theme?: 'light' | 'dark';
  children: React.ReactNode;
}
```

**Usage:**
```tsx
<Accordion
  title="Additional Resources"
  defaultOpen={false}
  theme="light"
>
  <ul className="reference-list">
    <li>Resource 1</li>
    <li>Resource 2</li>
  </ul>
</Accordion>
```

**Common Use Cases:**
- Additional Resources
- Sources & References
- Further Reading
- Technical Details
- Glossary

---

### 5. ArticleProgressNav

**Purpose:** Fixed bottom navigation showing progress and prev/next links

**Props:**
```typescript
interface ArticleProgressNavProps {
  currentIndex: number;
  totalArticles: number;
  pathTitle: string;
  prevArticle?: {
    slug: string;
    title: string;
  };
  nextArticle?: {
    slug: string;
    title: string;
  };
  theme?: 'light' | 'dark';
}
```

**Usage:**
```tsx
<ArticleProgressNav
  currentIndex={1}
  totalArticles={12}
  pathTitle="History"
  prevArticle={{
    slug: '/history/introduction',
    title: 'Introduction to AI'
  }}
  nextArticle={{
    slug: '/history/evolution',
    title: 'Evolution of AI'
  }}
  theme="light"
/>
```

**Behavior:**
- Hidden initially
- Appears after scrolling 300px
- Slides up from bottom
- Shows progress dots (active dot expands to pill shape)

---

### 6. FloatingPathsNav

**Purpose:** Right-side navigator showing all learning paths

**Props:**
```typescript
interface FloatingPathsNavProps {
  currentPath?: string;  // Path to exclude from list
  theme?: 'light' | 'dark';
}
```

**Usage:**
```tsx
<FloatingPathsNav
  currentPath="/history"
  theme="light"
/>
```

**Features:**
- Filters out current path automatically
- Toggle button (stack icon ↔ X icon)
- Curved cards with hero images
- Hover effects: image zoom, card slide, arrow scale
- Responsive positioning (right-center on desktop, bottom-right on mobile)

---

## Content Structure

### Typical Article Flow

```markdown
1. ArticleLayout (wrapper)
   ├── Header (auto-generated from metadata)
   ├── TL;DR (auto-generated from tldr prop)
   ├── Main Content
   │   ├── H2: Section 1
   │   ├── Paragraphs with InlineContextCards
   │   ├── H2: Section 2
   │   ├── More paragraphs with cards
   │   └── ...
   ├── KeyLearnings
   └── Accordions
       ├── Additional Resources
       └── Sources & References

2. ArticleProgressNav (outside layout)
3. FloatingPathsNav (outside layout)
```

### Content Guidelines

**Headings:**
```tsx
<h2 className="content-h2">
  <span className="heading-decoration" />
  Section Title
</h2>
```

**Paragraphs:**
```tsx
<div className="content-p">
  Your content here with <InlineContextCard /> components.
</div>
```

**Lists:**
```tsx
<ul className="content-ul">
  <li><strong>Item 1:</strong> Description</li>
  <li><strong>Item 2:</strong> Description</li>
</ul>
```

---

## Inline Context Cards

### Card Type Selection Guide

| Type | Use For | Example |
|------|---------|---------|
| **terminology** | Technical terms, jargon, definitions | "machine learning", "neural network" |
| **framework** | Regulations, standards, methodologies | "GDPR", "ISO 27001", "Agile" |
| **scenario** | Real-world situations, case studies | "autonomous vehicle dilemma" |
| **example** | Specific implementations, instances | "GPT-4", "Tesla Autopilot" |
| **resource** | Tools, papers, further reading | "AI Safety resources", "research databases" |

### Writing Effective Cards

**Good Card Summary:**
- 1-3 sentences
- Defines concept clearly
- Provides context or significance
- Avoids jargon (or defines it)

**Example:**
```yaml
summary: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed. ML algorithms identify patterns in data to make predictions or decisions."
```

**Bad Card Summary:**
```yaml
summary: "ML is when computers learn stuff."  # Too vague
summary: "Machine learning involves the use of statistical algorithms to iteratively learn from data through gradient descent optimization of loss functions in multi-dimensional parameter spaces..."  # Too technical, too long
```

### Tagging Best Practices

**Tags should be:**
- Specific and descriptive
- 2-4 tags per card
- Capitalized consistently
- Relevant for filtering/search

**Good tags:**
```yaml
tags:
  - "Deep Learning"
  - "Neural Networks"
  - "Computer Vision"
```

**Bad tags:**
```yaml
tags:
  - "ai"  # Too broad
  - "stuff"  # Not descriptive
  - "ml neural nets comp vis"  # Abbreviations unclear
```

---

## Complete Example

### File: `/app/history/what-is-ai/page.tsx`

```tsx
'use client';

import { useState } from 'react';
import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';

// Card data - organized by type
const cardData = {
  // Terminology cards
  machineLearning: {
    id: 'ml-definition',
    title: 'Machine Learning',
    type: 'terminology' as const,
    summary: 'A subset of AI that enables systems to learn and improve from experience without being explicitly programmed. ML algorithms identify patterns in data to make predictions or decisions.',
    tags: ['AI Technology', 'Core Concept', 'Data Science']
  },

  neuralNetworks: {
    id: 'neural-networks',
    title: 'Neural Networks',
    type: 'terminology' as const,
    summary: 'Computing systems inspired by biological neural networks in animal brains. Composed of layers of interconnected nodes that process and transmit information.',
    tags: ['Deep Learning', 'Architecture', 'Computation']
  },

  // Framework cards
  gdpr: {
    id: 'gdpr-framework',
    title: 'GDPR (General Data Protection Regulation)',
    type: 'framework' as const,
    summary: 'EU regulation governing personal data processing and privacy rights. Established in 2018 with penalties up to €20M or 4% of global revenue.',
    tags: ['Data Protection', 'Privacy', 'EU Regulation']
  },

  // Example cards
  gpt4: {
    id: 'gpt4-example',
    title: 'GPT-4: Large Language Model',
    type: 'example' as const,
    summary: 'OpenAI\\'s fourth-generation language model capable of generating human-like text, answering questions, and creative tasks.',
    tags: ['Large Language Model', 'Natural Language', 'Generative AI']
  }
};

export default function WhatIsAIPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <>
      <ArticleLayout
        path="history"
        pathTitle="History"
        articleTitle="What is Artificial Intelligence?"
        tldr="AI is the simulation of human intelligence by machines, enabling them to learn, reason, and make decisions. This article explores AI's definition, core technologies, and real-world applications."
        tags={['Fundamentals', 'Introduction', 'Core Concepts']}
        readTime="8 min read"
        updatedDate="January 2026"
        headerImage="/images/headercards/history-header.png"
        theme={theme}
        sidebarCards={[]}
      >
        {/* Main Content */}
        <h2 className="content-h2">
          <span className="heading-decoration" />
          Understanding Artificial Intelligence
        </h2>

        <div className="content-p">
          Artificial Intelligence (AI) represents one of the most transformative
          technologies of our time. At its core, AI refers to the capability of
          machines to perform tasks that typically require human intelligence.
          This includes learning from experience through{' '}
          <InlineContextCard trigger="machine learning" card={cardData.machineLearning} />,
          understanding natural language, recognizing patterns, and making decisions.
        </div>

        <div className="content-p">
          Modern AI systems leverage{' '}
          <InlineContextCard trigger="neural networks" card={cardData.neuralNetworks} />{' '}
          to process vast amounts of data and identify complex patterns. These
          systems have achieved remarkable success in domains ranging from image
          recognition to natural language processing, with models like{' '}
          <InlineContextCard trigger="GPT-4" card={cardData.gpt4} />{' '}
          demonstrating near-human performance on many tasks.
        </div>

        <h2 className="content-h2">
          <span className="heading-decoration" />
          AI in Practice
        </h2>

        <div className="content-p">
          Today's AI applications span virtually every industry. In healthcare,
          AI assists with diagnosis and treatment planning. In finance, it detects
          fraud and optimizes trading strategies. However, these powerful
          capabilities come with responsibilities, requiring adherence to
          regulations like{' '}
          <InlineContextCard trigger="GDPR" card={cardData.gdpr} />{' '}
          to protect user privacy and ensure ethical deployment.
        </div>

        <ul className="content-ul">
          <li>
            <strong>Healthcare:</strong> Diagnostic imaging, drug discovery, personalized medicine
          </li>
          <li>
            <strong>Finance:</strong> Fraud detection, algorithmic trading, risk assessment
          </li>
          <li>
            <strong>Transportation:</strong> Autonomous vehicles, traffic optimization, logistics
          </li>
          <li>
            <strong>Manufacturing:</strong> Quality control, predictive maintenance, robotics
          </li>
        </ul>

        {/* Key Learnings */}
        <KeyLearnings
          theme={theme}
          learnings={[
            'AI encompasses machine learning, deep learning, and natural language processing as core technologies',
            'Modern AI excels at specific tasks but struggles with general human-like intelligence',
            'Ethical considerations around bias, privacy, and accountability are central to responsible AI development',
            'AI applications span healthcare, finance, transportation, and countless other industries',
            'Understanding AI fundamentals is essential for navigating our increasingly automated world'
          ]}
        />

        {/* Accordions */}
        <div className="accordions-section">
          <div className="accordion-wrapper">
            <Accordion
              title="Additional Resources"
              defaultOpen={openAccordion === 'resources'}
              onToggle={() => setOpenAccordion(openAccordion === 'resources' ? null : 'resources')}
              theme={theme}
            >
              <ul className="reference-list">
                <li>Introduction to Machine Learning - Stanford Online Course</li>
                <li>Deep Learning Specialization - Andrew Ng, Coursera</li>
                <li>AI: A Modern Approach - Russell & Norvig (Textbook)</li>
                <li>The Alignment Problem - Brian Christian (Book)</li>
              </ul>
            </Accordion>
          </div>

          <div className="accordion-wrapper">
            <Accordion
              title="Sources & References"
              defaultOpen={openAccordion === 'sources'}
              onToggle={() => setOpenAccordion(openAccordion === 'sources' ? null : 'sources')}
              theme={theme}
            >
              <ul className="reference-list">
                <li>Artificial Intelligence: A Modern Approach (4th Ed) - Russell & Norvig, 2020</li>
                <li>Deep Learning - Goodfellow, Bengio, Courville, 2016</li>
                <li>Attention Is All You Need - Vaswani et al., 2017</li>
                <li>GPT-4 Technical Report - OpenAI, 2023</li>
              </ul>
            </Accordion>
          </div>
        </div>

        {/* Styles */}
        <style jsx>{`
          .content-h2 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 32px;
            font-weight: 700;
            color: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
            margin: 60px 0 24px 0;
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .heading-decoration {
            width: 40px;
            height: 3px;
            background: linear-gradient(90deg, #936639 0%, transparent 100%);
            border-radius: 2px;
          }

          .content-p {
            font-family: 'Crimson Pro', Georgia, serif;
            font-size: 20px;
            line-height: 1.8;
            color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
            margin-bottom: 24px;
          }

          .content-ul {
            font-family: 'Crimson Pro', Georgia, serif;
            font-size: 20px;
            line-height: 1.8;
            color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
            margin: 24px 0 24px 32px;
          }

          .content-ul li {
            margin-bottom: 12px;
          }

          .content-ul li strong {
            color: ${theme === 'light' ? '#1a1a1a' : '#ffffff'};
            font-weight: 600;
          }

          .reference-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .reference-list li {
            font-family: 'Crimson Pro', Georgia, serif;
            font-size: 17px;
            line-height: 1.7;
            color: ${theme === 'light' ? '#1a1a1a' : '#e0e0e0'};
            padding: 12px 0;
            border-bottom: 1px solid ${theme === 'light' ? 'rgba(26, 26, 26, 0.06)' : 'rgba(255, 255, 255, 0.1)'};
          }

          .reference-list li:last-child {
            border-bottom: none;
          }

          .accordions-section {
            margin-top: 60px;
          }

          .accordion-wrapper {
            margin-top: 20px;
          }
        `}</style>
      </ArticleLayout>

      {/* Navigation Components */}
      <ArticleProgressNav
        currentIndex={1}
        totalArticles={12}
        pathTitle="History"
        prevArticle={{
          slug: '/history/introduction',
          title: 'Introduction to AI'
        }}
        nextArticle={{
          slug: '/history/evolution',
          title: 'The Evolution of AI'
        }}
        theme={theme}
      />

      <FloatingPathsNav
        currentPath="/history"
        theme={theme}
      />
    </>
  );
}
```

---

## Best Practices

### Content Writing

1. **Use inline cards strategically** - Don't over-use. 3-8 cards per article is ideal
2. **Place cards on first mention** - When a technical term appears first, add the card there
3. **Write self-contained paragraphs** - Each paragraph should make sense even without clicking cards
4. **Progressive disclosure** - Start simple, add complexity through cards
5. **Clear trigger text** - Use the exact term readers would expect (e.g., "machine learning" not "ML")

### Card Design

1. **Keep summaries concise** - 1-3 sentences, under 200 characters ideal
2. **Use active voice** - "Enables systems to learn" not "Systems are enabled to learn"
3. **Provide value** - Card should add information not already in main text
4. **Choose appropriate type** - Use the right card type for the content
5. **Tag thoughtfully** - 2-4 relevant, searchable tags

### Navigation

1. **Always include progress nav** - Helps readers understand context within path
2. **Provide prev/next when available** - Create linear reading flow
3. **Use floating paths nav** - Enables cross-path exploration
4. **Set correct currentPath** - Ensures proper filtering in nav

### Accessibility

1. **Use semantic HTML** - Proper heading hierarchy (H2 for sections)
2. **Provide alt text** - For all images in header and cards
3. **Test keyboard navigation** - Ensure all interactive elements are accessible
4. **Check color contrast** - Verify readability in both themes

### Performance

1. **Organize card data** - Group by type for easier maintenance
2. **Use const for card data** - Prevents re-creation on re-render
3. **Lazy load images** - Use Next.js Image component properly
4. **Minimize accordion content** - Keep accordion sections lightweight

---

## Migration Guide

### Converting Existing Articles

**Step 1: Update Imports**
```tsx
// Add new components
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { ArticleProgressNav } from '@/components/articles/ArticleProgressNav';
import { FloatingPathsNav } from '@/components/articles/FloatingPathsNav';
```

**Step 2: Define Card Data**
```tsx
const cardData = {
  // Extract technical terms and create card objects
};
```

**Step 3: Wrap Technical Terms**
```tsx
// Before
<div className="content-p">
  AI uses machine learning to process data.
</div>

// After
<div className="content-p">
  AI uses{' '}
  <InlineContextCard trigger="machine learning" card={cardData.machineLearning} />{' '}
  to process data.
</div>
```

**Step 4: Add Key Learnings**
```tsx
// Replace or supplement existing summary
<KeyLearnings
  theme={theme}
  learnings={[
    'Point 1',
    'Point 2',
    'Point 3'
  ]}
/>
```

**Step 5: Add Navigation**
```tsx
// After ArticleLayout closing tag
<ArticleProgressNav
  currentIndex={/* article number */}
  totalArticles={/* total in path */}
  pathTitle={/* path name */}
  prevArticle={/* previous article */}
  nextArticle={/* next article */}
  theme={theme}
/>

<FloatingPathsNav
  currentPath={/* current path */}
  theme={theme}
/>
```

---

## Troubleshooting

### Common Issues

**Issue: Inline card doesn't appear**
- Check that trigger text exactly matches
- Verify card object has all required fields
- Ensure proper spacing around `<InlineContextCard />`

**Issue: Letter animation doesn't work**
- Verify trigger text is not empty
- Check that hover state is triggering (test arrow animation)
- Ensure no CSS conflicts with `.trigger-letter`

**Issue: Progress nav not showing**
- Scroll down 300px to trigger appearance
- Check z-index conflicts
- Verify scroll event listener is attached

**Issue: Floating paths nav shows current path**
- Check that `currentPath` prop matches the path slug exactly
- Verify path slug format (e.g., "/history" not "history")

---

## Support & Feedback

For questions or issues:
1. Check this documentation first
2. Review the demo page: `/app/demo/inline-cards/page.tsx`
3. Examine component source code in `/components/articles/`
4. Create an issue in the project repository

---

**Document Version:** 2.0
**Last Updated:** January 8, 2026
**Maintained By:** AIDefence Development Team
