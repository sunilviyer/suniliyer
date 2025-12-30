# Story 5.5.4: Update Knowledge Graph with Terminology Metadata

**Epic**: 5.5 - Terminology Content Creation
**Story ID**: 5.5.4
**Priority**: P1 (High)
**Estimated Effort**: 2-3 hours
**Dependencies**: Stories 5.5.1, 5.5.2, 5.5.3 (all 14 articles must be created first)
**Assigned To**: TBD

---

## Story Description

Extract metadata from the 14 newly created Terminology articles and integrate them into the knowledge graph YAML file. Validate the updated knowledge graph for completeness and correctness.

---

## User Story

**As a** developer implementing the Terminology path
**I want** all 14 terminology concept cards in the knowledge graph
**So that** the UI can render the learning path with complete metadata and cross-references

---

## Acceptance Criteria

- [ ] All 14 terminology concept cards added to knowledge graph
- [ ] All concept cards have required fields (id, title, slug, path, source_file, tldr)
- [ ] All optional fields populated where applicable (tags, relatedConcepts, crossPathRefs)
- [ ] All file references validated (source files exist)
- [ ] All cross-references validated (referenced articles exist)
- [ ] Knowledge graph validation passes with 0 critical errors
- [ ] Terminology section organized logically (Core ML, Advanced AI, ML Lifecycle)

---

## Tasks

### 1. Extract Metadata from Articles (1 hour)

**Process**:
1. Run metadata extraction script on 14 new articles
2. Review generated YAML entries for accuracy
3. Verify all frontmatter fields extracted correctly
4. Check for any missing or malformed data

**Command**:
```bash
node scripts/generate-knowledge-graph-entries.js --path=terminology
```

**Expected Output**:
- 14 YAML concept card entries generated
- All required fields populated
- Cross-references extracted

---

### 2. Integrate into Knowledge Graph (30 min)

**Process**:
1. Open `/content/knowledge-graph.yaml`
2. Locate `concept_cards_terminology` section
3. Add 14 new entries organized by topic:
   - Core ML Concepts (term-1 to term-6)
   - Advanced AI Concepts (term-7 to term-10)
   - ML Lifecycle (term-11 to term-14)
4. Verify YAML formatting is correct
5. Save file

**Knowledge Graph Structure**:
```yaml
concept_cards_terminology:
  # Core ML Concepts (6 cards)
  - id: term-1
    title: "Machine Learning Fundamentals - What Is ML and How Does It Work?"
    slug: machine-learning-fundamentals-what-is-ml-and-how-does-it-work
    path: terminology
    source_file: content/articles/final/term-1-machine-learning-fundamentals.md
    tldr: "Machine learning is when computers learn patterns from data..."
    tags:
      - machine-learning
      - fundamentals
      - ai-basics
    relatedConcepts:
      - term-2
      - term-3
      - term-4
    crossPathRefs:
      - path: history
        articles: [history-8, history-12]
      - path: risk
        articles: [risk-2, risk-3]

  # ... (13 more entries)
```

---

### 3. Validate Knowledge Graph (30 min)

**Process**:
1. Run validation script
2. Review validation report
3. Fix any errors found
4. Re-run validation until 0 errors

**Command**:
```bash
node scripts/validate-knowledge-graph.js
```

**Validation Checks**:
- All source files exist
- All cross-referenced articles exist
- All related concepts exist
- No duplicate IDs
- All required fields present
- YAML syntax valid

**Expected Validation Report**:
```
Knowledge Graph Validation Report
==================================

Terminology Concept Cards: 14 ✓
- All source files exist: 14/14 ✓
- All cross-references valid: 14/14 ✓
- All related concepts valid: 14/14 ✓

Critical Errors: 0 ✓
Warnings: 0 ✓

Status: READY FOR PRODUCTION ✓
```

---

### 4. Update Knowledge Graph Documentation (30 min)

**Process**:
1. Update `/docs/knowledge-graph-validation-report.md` with new validation results
2. Update `/docs/articles-by-path-analysis.md` to reflect 14 new Terminology articles
3. Document any new cross-reference patterns discovered

**Files to Update**:
- `/docs/knowledge-graph-validation-report.md`
- `/docs/articles-by-path-analysis.md`

---

## Definition of Done

- [ ] All 14 terminology entries added to `/content/knowledge-graph.yaml`
- [ ] Knowledge graph validation passes (0 critical errors)
- [ ] All source file paths verified
- [ ] All cross-references verified
- [ ] Documentation updated
- [ ] Epic 0 Story 0.2 unblocked (Terminology image generation can proceed)
- [ ] Epic 5 unblocked (Terminology Path Implementation can proceed)

---

## Technical Details

### Knowledge Graph Entry Schema

Each concept card must have:

**Required Fields**:
- `id`: Unique identifier (e.g., "term-1")
- `title`: Full article title
- `slug`: URL-friendly slug
- `path`: Learning path ("terminology")
- `source_file`: Relative path to markdown file
- `tldr`: 1-2 sentence summary

**Optional Fields**:
- `tags`: Array of relevant tags
- `relatedConcepts`: Array of related concept IDs
- `crossPathRefs`: Array of cross-path references
  - `path`: Target path name
  - `articles`: Array of article slugs
- `examples`: Array of example slugs
- `diagrams`: Array of diagram filenames

### Article Count by Topic

- **Core ML Concepts**: 6 articles (term-1 to term-6)
- **Advanced AI Concepts**: 4 articles (term-7 to term-10)
- **ML Lifecycle**: 4 articles (term-11 to term-14)
- **Total**: 14 articles

---

## Validation Rules

### Critical Errors (Must Fix)
- Missing required fields
- Source file does not exist
- Invalid YAML syntax
- Duplicate concept IDs

### Warnings (Should Review)
- Cross-referenced article not found
- Related concept not found
- Missing tags
- Missing tldr

---

## Scripts Used

### Generate Knowledge Graph Entries
**Path**: `/scripts/generate-knowledge-graph-entries.js`
**Purpose**: Extract frontmatter from markdown files and generate YAML entries
**Usage**: `node scripts/generate-knowledge-graph-entries.js --path=terminology`

### Validate Knowledge Graph
**Path**: `/scripts/validate-knowledge-graph.js`
**Purpose**: Validate knowledge graph completeness and correctness
**Usage**: `node scripts/validate-knowledge-graph.js`

---

## Blockers Removed

**This story unblocks**:
- Epic 0 Story 0.2: Generate Terminology Path Images (needs 14 concept cards)
- Epic 5: Terminology Path Implementation (needs complete knowledge graph)

---

## Notes

- Double-check all file paths are correct (common source of validation errors)
- Verify cross-references point to existing articles
- Organize entries logically by topic for maintainability
- Use consistent YAML formatting (2-space indentation)
- Test that all 14 articles render correctly in the UI after integration

---

**Story Status**: Ready to Start (Blocked by 5.5.1, 5.5.2, 5.5.3)
**Blockers**: Must complete all 14 articles first
**Previous Story**: 5.5.3 - Create ML Lifecycle Articles
**Next Epic**: 7.5 - Risk Content Creation
