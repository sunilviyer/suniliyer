# AIDefence V2 - Canonical Reference Files

**Last Updated**: 2025-12-22
**Purpose**: Single source of truth for all developers working on AIDefence V2

---

## 📋 File Structure

This folder contains the ONLY canonical reference files that developers should use:

### 1. Core Planning Documents
- **PRD**: `../aidefence-v2-prd.md` - Product Requirements Document (74K)
- **Architecture**: `../architecture.md` - Technical architecture and decisions (55K)
- **UX Specification**: `ux-specification.md` - Complete UX design system
- **Epics**: `../epics.md` + `../epics/` folder - All epics and stories

### 2. Asset References
- **Images Reference**: `images-reference.md` - All images with names, sources, folder links
- **Articles Master List**: `articles-reference.md` - All 162 articles with links and folder structure
- **Color System**: `../learning-paths-color-system.md` - UX spec earth-tone palette

### 3. Content Organization
- **Content Source Files**: `content-structure.md` - How content is organized for display

### 4. Implementation Tracking
- **Sprint Status**: `../sprint-artifacts/sprint-status.yaml` - Current sprint progress
- **Epic References**: Each epic in `../epics/` references these canonical files

---

## 🎯 Developer Quick Start

### For Frontend Developers:
1. Read: `ux-specification.md` for design system
2. Reference: `images-reference.md` for all image assets
3. Check: `../epics/epic-1-homepage-foundation.md` to start

### For Content Developers:
1. Read: `articles-reference.md` for article structure
2. Check: `content-structure.md` for content organization
3. Reference: `../learning-paths-color-system.md` for styling

### For Project Managers:
1. Read: `../aidefence-v2-prd.md` for requirements
2. Check: `../sprint-artifacts/sprint-status.yaml` for progress
3. Reference: `../epics/` folder for detailed stories

---

## 🚨 Critical Rules

1. **NEVER create duplicate reference files** - This folder is the ONLY source of truth
2. **All epics MUST reference these files** - No redundant documentation
3. **Update these files, don't replace them** - Version control via git
4. **Images and content paths are absolute** - Always reference from project root

---

## 📁 Folder Organization

```
/docs
  /aidefence-reference          ← YOU ARE HERE (canonical references)
    README.md                   ← This file
    ux-specification.md         ← UX design system
    images-reference.md         ← All image assets
    articles-reference.md       ← All articles list
    content-structure.md        ← Content organization

  /epics                        ← Detailed epic documents
    epic-0-image-generation-strategy.md
    epic-1-homepage-foundation.md
    epic-2-history-path.md
    ...

  /sprint-artifacts             ← Sprint tracking
    sprint-status.yaml          ← Current sprint progress

  /obsolete                     ← Old/working files (archived)

  aidefence-v2-prd.md          ← CANONICAL PRD
  architecture.md               ← CANONICAL Architecture
  epics.md                      ← Epic overview
  learning-paths-color-system.md ← Color palette
```

---

**Status**: Active - Reference this folder for all implementation work
