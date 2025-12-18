# Story 8.9: Add Production README Documentation

**Epic:** 8 - Performance & Quality Assurance  
**Story:** 8.9  
**Status:** ready-for-dev

---

## Story

As a **developer onboarding to the project**,  
I want **comprehensive README documentation**,  
So that **I can set up the project, run builds, and deploy confidently**.

---

## Acceptance Criteria

**Given** the project is complete  
**When** I create `README.md`  
**Then** README documents local setup: Node version, npm install, environment variables  
**And** README documents development: `npm run dev`, accessing localhost:3000  
**And** README documents build: `npm run build`, output directory  
**And** README documents deployment: Git push triggers Vercel deployment  
**And** README documents testing workflow: feature branch → PR → preview → test → merge → production  
**And** README documents article creation: frontmatter schema, required vs optional fields  
**And** README documents file naming conventions (PascalCase, kebab-case, snake_case)  
**And** README includes troubleshooting section for common errors  
**And** README is clear, concise, and includes code examples

---

## Tasks

1. **Create README.md structure** - 30 min
2. **Document local setup** - 30 min
3. **Document development workflow** - 30 min
4. **Document deployment process** - 30 min
5. **Document article creation** - 45 min
6. **Add troubleshooting section** - 30 min

**Total Estimated Time:** 3 hours

---

## Dev Notes

**README Sections:**
1. Project Overview
2. Prerequisites
3. Local Development
4. Build Process
5. Deployment
6. Article Creation
7. File Structure
8. Troubleshooting

**Frontmatter Schema Documentation:**
```yaml
# Required fields
title: "Article Title"
category: "AI Fundamentals"  # One of 11 categories
tags: ["tag1", "tag2"]
date: "2025-12-17"  # YYYY-MM-DD
reading_time: 5  # Integer minutes

# Optional fields
seo_title: "Custom SEO Title"
seo_description: "Custom description"
related_context: "keywords for matching"
video_url: "https://youtube.com/..."
```

**References:**
- [Source: docs/epics.md - Epic 8, Story 8.9, Lines 1320-1337]
- [Source: docs/architecture.md - Naming Patterns, Lines 700-850]
