# AIDefence Article Content Directory

This directory contains all markdown articles with YAML frontmatter.

## Adding a New Article

1. Create a new markdown file: `article-slug.md`
   - Slug format: lowercase-kebab-case
   - Example: `large-language-models.md`

2. Add YAML frontmatter at top of file:
---
title: "Article Title"
category: "AI Fundamentals"  # Must match one of 11 valid categories
tags: ["llm", "transformer", "neural-networks"]
date: "2025-12-12"  # YYYY-MM-DD format
reading_time: 8  # Integer minutes
meta_description: "SEO description for search engines"
related_context: "keywords for related article matching"
---

3. Write markdown content below frontmatter
   - Use standard markdown (headings, lists, code blocks, tables)
   - MDX allows React components in content
   - Code blocks auto-highlighted with Prism.js

4. Commit and push to Git
   - Vercel automatically builds and deploys
   - Article appears on site within 2 minutes

## Frontmatter Field Reference

Required:
- title: Article title (string)
- category: One of 11 valid categories (Title Case)
- tags: Array of tags (kebab-case)
- date: Publication date (YYYY-MM-DD)
- reading_time: Estimated minutes (integer)

Optional:
- meta_description: SEO description
- seo_title: Custom SEO title
- related_context: Keywords for matching
- video_url: YouTube embed URL

## Valid Categories

Must match exactly (Title Case):
- AI Fundamentals
- Risks & Principles
- Legal Frameworks
- AI Laws
- Risk Frameworks
- Development Lifecycle
- Governance
- Auditing & Assessment
- Industry Perspectives
- Explainability
- Videos
