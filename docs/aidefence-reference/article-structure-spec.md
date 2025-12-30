# AIDefence V2 - Article Structure Specification

**Last Updated**: 2025-12-23
**Purpose**: Define the internal structure and writing guidelines for all 162 articles
**Status**: Complete specification for content creation

---

## 📋 Article Anatomy

Every article consists of **3 layers**:

1. **Frontmatter** (YAML metadata)
2. **Summary Block** (appears at top of article detail page)
3. **Main Content** (organized sections with MDX support)

---

## 1️⃣ Frontmatter Structure

**Location**: Top of every `.md` file
**Format**: YAML between `---` delimiters

### Required Fields:

```yaml
---
# CORE METADATA
title: "Article Title (60 characters max)"
slug: "url-friendly-slug"
path: history | terminology | risk | responsibility | future

# CONTENT PREVIEW
tldr: "1-2 sentence summary (120-150 characters) that appears on card front"

# CONTENT ORGANIZATION
contentSections:
  - "What You'll Learn Section 1"
  - "What You'll Learn Section 2"
  - "What You'll Learn Section 3"

# RELATIONSHIPS
relatedConcepts: [concept-id-1, concept-id-2, concept-id-3]
crossPathRefs:
  terminology: [term-1, term-2]
  risk: [risk-5]

# TAXONOMY
tags: [tag1, tag2, tag3]  # 3-5 tags max
category: "Primary Category"  # Matches learning path

# ASSETS
image: "slug.jpg"  # Matches article slug
imageAlt: "Descriptive alt text for accessibility"

# PUBLISHING
author: "Sunil Iyer"
publishDate: "2025-01-15"
updatedDate: "2025-01-20"  # Only if different from publishDate
readingTime: "8"  # Minutes (calculated from word count: ~250 words/min)

# SEO
seoTitle: "SEO-optimized title (60 chars)"
seoDescription: "Meta description for search engines (155 chars)"
---
```

### Optional Fields:

```yaml
# SPECIAL CONTENT TYPES
exampleCard: true  # If this is an example/case study
resourceCard: true  # If this is a resource/template
resourceType: "Template | Tool | Guide"  # If resourceCard: true

# EXAMPLE CARD METADATA (if exampleCard: true)
companyName: "Amazon"
companyColors: ["#FF9900", "#232F3E"]
caseStudyType: "Bias Example | Legal Case | Implementation"

# ADVANCED FEATURES
videoUrl: "https://youtube.com/..."  # If article includes video
downloadUrl: "/downloads/template.pdf"  # If downloadable resource
externalLink: "https://..."  # If linking to external resource

# TECHNICAL CONTENT
codeBlocks: true  # If article includes code examples
technicalLevel: "Beginner | Intermediate | Advanced"
prerequisites: [concept-id-1, concept-id-2]  # Required reading
```

---

## 2️⃣ Summary Block

**Location**: Immediately after frontmatter, before main content
**Purpose**: Appears in highlighted box at top of article detail page

### Structure:

```markdown
## Summary

[2-3 sentence TLDR that expands on frontmatter tldr. Explains what the reader will learn and why it matters. Written in active voice, accessible language.]

**Key Takeaways:**
- Bullet point 1 (specific, actionable insight)
- Bullet point 2 (specific, actionable insight)
- Bullet point 3 (specific, actionable insight)
- Bullet point 4 (optional)
- Bullet point 5 (optional)

**Reading Time:** 8 minutes
```

### Writing Guidelines:

- **TLDR Paragraph**: 50-80 words, written at 8th-grade reading level
- **Key Takeaways**: 3-5 bullets, each 10-20 words
- **Bullets Should**: Start with action verbs, be specific not generic
- **Avoid**: Jargon in summary, assuming prior knowledge

### Example:

```markdown
## Summary

AI hallucinations occur when large language models generate false information with high confidence. Understanding why this happens—from training data gaps to probabilistic generation—helps organizations build safer AI systems. This article breaks down the technical causes, real-world consequences, and mitigation strategies.

**Key Takeaways:**
- Hallucinations stem from probabilistic token prediction, not factual databases
- Cost of AI errors ranges from reputation damage to financial liability
- Retrieval-augmented generation (RAG) reduces hallucination rates by 70%
- Human review remains essential for high-stakes AI outputs
- Testing strategies detect hallucinations before production deployment

**Reading Time:** 8 minutes
```

---

## 3️⃣ Main Content Structure

### Standard Article Template (Concept Cards)

**Total Length**: 2,000-3,000 words
**Sections**: 4-7 major sections (H2 headings)

```markdown
## Introduction

[150-200 word opening that hooks the reader and sets context. Explains why this topic matters NOW. Uses a compelling statistic, recent event, or provocative question.]

## [Section 1: Core Concept]

[400-600 words explaining the fundamental concept. Uses analogies, examples, and clear definitions. Breaks down complex ideas into digestible chunks.]

### [Subsection 1.1] (optional)
[200-300 words diving deeper into specific aspect]

### [Subsection 1.2] (optional)
[200-300 words covering related detail]

## [Section 2: How It Works / Why It Matters]

[400-600 words explaining mechanisms, processes, or significance. Uses visual descriptions (for future diagrams), step-by-step explanations, or cause-effect relationships.]

## [Section 3: Real-World Application / Examples]

[400-600 words with concrete examples, case studies, or use cases. Makes abstract concepts tangible. References example cards when relevant.]

## [Section 4: Challenges / Risks / Considerations]

[400-600 words addressing limitations, concerns, or nuances. Provides balanced view. References related risk concepts when applicable.]

## [Section 5: Best Practices / Recommendations] (optional)

[300-500 words with actionable guidance. What should practitioners do? What should policymakers consider?]

## Conclusion

[150-200 words summarizing key points and providing forward-looking perspective. Connects to related concepts without being redundant with "Related Concepts" section.]

## Related Concepts

[Auto-generated from frontmatter relatedConcepts - DO NOT write this section manually]

## Cross-Path References

[Auto-generated from frontmatter crossPathRefs - DO NOT write this section manually]
```

---

## 4️⃣ Example Card Template (Case Studies)

**Total Length**: 1,500-2,500 words
**Sections**: 5-6 major sections

```markdown
## Summary

[Case study overview: Who, What, When, Where, Why]

## Background / Context

[300-400 words setting up the situation. What was the company/organization trying to do? What was the environment?]

## The Problem

[400-500 words describing the specific challenge, bias, or issue. Use concrete details, numbers, affected populations.]

## What Happened / The Solution

[500-700 words explaining the sequence of events or how the problem was addressed. Timeline, key decisions, technical details.]

## Outcomes / Consequences

[400-500 words on results. Quantify impact: financial, reputational, legal, social. Use metrics where available.]

## Lessons Learned

[300-400 words distilling key insights. What should others learn from this? What would you do differently?]

## Related Concepts

[Auto-generated - links to related concept cards]
```

---

## 5️⃣ Resource Card Template (Templates/Tools)

**Total Length**: 1,000-1,500 words
**Sections**: 4-5 major sections

```markdown
## Summary

[What this resource is, who it's for, what problem it solves]

## Overview

[200-300 words explaining the resource purpose and structure]

## How to Use This [Template/Tool]

[500-700 words with step-by-step instructions. Include screenshots, form fields, or interface descriptions.]

### Prerequisites
[What you need before using this resource]

### Step-by-Step Guide
1. Step 1 description
2. Step 2 description
3. Step 3 description

## Key Components

[300-400 words breaking down major sections or features]

## Best Practices

[200-300 words on effective use, common mistakes, tips]

## Download / Access

[Link to resource, licensing information, attribution]
```

---

## 6️⃣ Content Formatting Guidelines

### Typography & Readability

**Paragraphs:**
- 3-5 sentences max per paragraph
- Break long paragraphs at logical points
- Use transition words between paragraphs

**Headings:**
- H2 (`##`) for major sections (4-7 per article)
- H3 (`###`) for subsections (use sparingly)
- H4 (`####`) rarely (only for deeply nested content)
- No H5 or H6 (indicates poor structure)

**Lists:**
- Bullet lists for unordered items (use `-`)
- Numbered lists for sequential steps or rankings (use `1.`)
- Keep list items parallel in structure
- 3-7 items per list (if more, break into subsections)

**Emphasis:**
- **Bold** for key terms, emphasis, important warnings
- *Italic* for introducing new terms, subtle emphasis
- `Code` for technical terms, commands, filenames
- > Blockquotes for quotes, definitions, highlighted concepts

### Technical Content

**Code Blocks:**
```python
# Use language identifier for syntax highlighting
def example_function():
    """Docstring explaining function"""
    return "result"
```

**Tables:**
Use for comparisons, specifications, data:

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |

**Callout Boxes** (using blockquotes + emoji):
> ⚠️ **Important**: Critical information readers must know
>
> 💡 **Tip**: Helpful suggestion or best practice
>
> 📊 **Example**: Concrete illustration of concept

---

## 7️⃣ Writing Style Guidelines

### Voice & Tone

**Professional but Accessible:**
- Write at 10th-12th grade reading level (Flesch-Kincaid)
- Use active voice (passive acceptable for technical precision)
- Address reader as "you" (second person)
- Use "we" sparingly (when referring to collective action)

**Clear & Concise:**
- Aim for 15-20 words per sentence average
- Eliminate filler words (very, really, actually, just)
- Use specific verbs (not generic: do, make, get, have)
- Choose concrete nouns over abstract concepts

**Authoritative but Humble:**
- Use definitive language for established facts
- Use qualifying language for emerging/disputed topics
- Acknowledge uncertainty when appropriate
- Avoid hyperbole and absolute statements

### Terminology

**First Use of Terms:**
- Define technical terms on first use
- Use parenthetical definitions: "embeddings (mathematical representations of words)"
- Link to terminology articles when appropriate

**Consistent Terminology:**
- AI (not A.I. or Artificial Intelligence after first use)
- Machine learning (not ML, unless in technical context)
- Large language models (LLMs acceptable after first use)
- EU AI Act (not "the Act" or "EU regulation")

**Avoid Jargon:**
- Replace: "leverage" → "use"
- Replace: "utilize" → "use"
- Replace: "implement" → "build" or "deploy"
- Replace: "solution" → specific noun (tool, system, approach)

---

## 8️⃣ Cross-Reference Guidelines

### Internal Links (within article)

Use MDX link syntax:
```markdown
See the [Risk Path](/learn/risk) for more on bias detection.
Learn more in the [Bias Section](#section-2-algorithmic-bias) below.
```

### Concept Card Links

Use frontmatter `relatedConcepts` instead of inline links:
- Links render automatically in "Related Concepts" section
- Avoid manual linking to related concepts in article body
- Exception: Essential context links in introduction

### Cross-Path References

Use frontmatter `crossPathRefs` instead of inline links:
- Links render automatically in "Cross-Path References" section
- Use inline links only when critical to understanding

### External Links

```markdown
[Link text](https://example.com) opens in new tab
```

Guidelines:
- Use descriptive anchor text (not "click here")
- Prefer authoritative sources (official docs, academic papers, government sites)
- Include access date for time-sensitive content
- Check links quarterly for broken URLs

---

## 9️⃣ SEO & Metadata Best Practices

### SEO Title (60 characters max)

**Formula**: `[Primary Keyword] | [Value Proposition]`

Examples:
- "AI Hallucinations | Why LLMs Lie and How to Fix It"
- "GDPR Article 22 | Your Right to Human Review Explained"
- "Foundation Models | The New Building Blocks of AI"

### SEO Description (155 characters max)

**Formula**: `[What] + [Why It Matters] + [Who It's For]`

Example:
"AI hallucinations cost businesses millions. Learn the technical causes, real-world consequences, and proven mitigation strategies. For product teams and governance leaders."

### Tags (3-5 tags)

**Tag Strategy**:
- 1-2 broad category tags (AI Ethics, AI Regulation, AI Technology)
- 1-2 specific topic tags (Bias Detection, GDPR Compliance, Neural Networks)
- 1 audience tag (optional: For Developers, For Policymakers, For Executives)

**Good Tags**: "Bias Detection", "Model Governance", "EU AI Act"
**Bad Tags**: "AI", "Important", "Must Read"

---

## 🔟 Quality Checklist

Before submitting an article, verify:

### Structure ✅
- [ ] Frontmatter complete with all required fields
- [ ] Summary block includes TLDR + 3-5 key takeaways
- [ ] 4-7 major sections with H2 headings
- [ ] Logical flow from introduction to conclusion
- [ ] No orphan sections (sections under 150 words)

### Content ✅
- [ ] 2,000-3,000 words (concept cards) or 1,500-2,500 (examples)
- [ ] Introduction hooks reader within first 100 words
- [ ] At least 2 concrete examples or case studies
- [ ] Balanced perspective (acknowledges limitations/concerns)
- [ ] Conclusion connects to broader themes

### Readability ✅
- [ ] Flesch-Kincaid grade level: 10-12
- [ ] Average sentence length: 15-20 words
- [ ] Paragraphs 3-5 sentences max
- [ ] Subheadings every 300-500 words
- [ ] Technical terms defined on first use

### Formatting ✅
- [ ] No orphan headings (headings with no content)
- [ ] Code blocks use language identifiers
- [ ] Tables properly formatted with headers
- [ ] Lists use parallel structure
- [ ] Emphasis (bold/italic) used sparingly

### Links & References ✅
- [ ] `relatedConcepts` populated (3-5 IDs)
- [ ] `crossPathRefs` populated when relevant
- [ ] External links use descriptive anchor text
- [ ] No broken or placeholder links
- [ ] Citations for statistics and claims

### SEO ✅
- [ ] SEO title 50-60 characters
- [ ] SEO description 145-155 characters
- [ ] 3-5 relevant tags
- [ ] Primary keyword in first 100 words
- [ ] Image alt text descriptive and keyword-rich

### Accessibility ✅
- [ ] Headings follow semantic hierarchy (no skipped levels)
- [ ] Images have descriptive alt text
- [ ] Tables include header row
- [ ] Color not used as only means of conveying information
- [ ] Acronyms spelled out on first use

---

## 📊 Article Templates by Path

### History Path Template
**Focus**: Educational, foundational concepts
**Tone**: Explanatory, historical context
**Length**: 2,500-3,000 words
**Sections**: Introduction → What It Is → How It Evolved → Why It Matters → Current State → Future Implications → Conclusion

### Terminology Path Template
**Focus**: Technical deep-dives
**Tone**: Precise, instructional
**Length**: 2,000-2,500 words
**Sections**: Introduction → Definition → How It Works → Applications → Technical Details → Common Mistakes → Best Practices → Conclusion

### Risk Path Template
**Focus**: Challenges, harms, ethical concerns
**Tone**: Balanced, cautionary
**Length**: 2,500-3,000 words
**Sections**: Introduction → The Problem → Root Causes → Real-World Impact → Who's Affected → Mitigation Strategies → Policy Implications → Conclusion

### Responsibility Path Template
**Focus**: Legal, regulatory, governance
**Tone**: Authoritative, prescriptive
**Length**: 2,000-2,500 words
**Sections**: Introduction → Legal Framework → Requirements → Compliance Steps → Enforcement → Penalties → Best Practices → Conclusion

### Future Path Template
**Focus**: Emerging trends, predictions
**Tone**: Forward-looking, exploratory
**Length**: 2,000-2,500 words
**Sections**: Introduction → Current State → Emerging Trends → Scenarios → Implications → Preparation Strategies → Call to Action → Conclusion

---

## 📝 Example: Complete Article Structure

See `/docs/aidefence-reference/article-template-example.md` for a fully worked example of "AI Hallucinations" following this specification.

---

## 🔗 Related Documentation

- **Content Structure**: `/docs/aidefence-reference/content-structure.md`
- **Articles List**: `/docs/aidefence-reference/articles-reference.md`
- **Knowledge Graph**: `/content/knowledge-graph.yaml`
- **Epic 2.5**: `/docs/epics/epic-2.5-history-articles.md` (History article creation)
- **Epic 5.5**: Terminology article creation (in REMAINING-EPICS-SUMMARY.md)
- **Epic 7.5**: Risk article creation (in REMAINING-EPICS-SUMMARY.md)

---

**Status**: ✅ Complete specification ready for content creation
**Next Actions**:
1. Create 22 missing articles using templates above
2. Convert existing 140 articles to match structure
3. Validate frontmatter consistency across all articles
