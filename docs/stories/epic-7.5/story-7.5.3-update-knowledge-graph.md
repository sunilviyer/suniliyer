# Story 7.5.3: Update Knowledge Graph with Risk Metadata

**Epic**: 7.5 - Risk Content Creation
**Story ID**: 7.5.3
**Priority**: P1 (High)
**Estimated Effort**: 1-2 hours
**Dependencies**: Stories 7.5.1, 7.5.2 (all 8 articles must be created first)
**Assigned To**: TBD

---

## Story Description

Extract metadata from the 8 newly created Risk articles and integrate them into the knowledge graph YAML file. Validate the updated knowledge graph for completeness and correctness.

---

## User Story

**As a** developer implementing the Risk path
**I want** all 8 new risk concept cards in the knowledge graph
**So that** the UI can render the learning path with complete metadata and cross-references

---

## Acceptance Criteria

- [ ] All 8 risk concept cards added to knowledge graph
- [ ] All concept cards have required fields (id, title, slug, path, source_file, tldr)
- [ ] All optional fields populated where applicable (tags, relatedConcepts, crossPathRefs)
- [ ] All file references validated (source files exist)
- [ ] All cross-references validated (referenced articles exist)
- [ ] Knowledge graph validation passes with 0 critical errors
- [ ] Risk section organized logically (Risk Fundamentals, Trustworthy AI)

---

## Tasks

### 1. Extract Metadata from Articles (30 min)

**Process**:
1. Run metadata extraction script on 8 new risk articles
2. Review generated YAML entries for accuracy
3. Verify all frontmatter fields extracted correctly
4. Check for any missing or malformed data

**Command**:
```bash
node scripts/generate-knowledge-graph-entries.js --path=risk
```

**Expected Output**:
- 8 YAML concept card entries generated
- All required fields populated
- Cross-references extracted

---

### 2. Integrate into Knowledge Graph (30 min)

**Process**:
1. Open `/content/knowledge-graph.yaml`
2. Locate `concept_cards_risk` section
3. Add 8 new entries organized by topic:
   - Risk Fundamentals (risk-X to risk-X+3)
   - Trustworthy AI (risk-X+4 to risk-X+7)
4. Verify YAML formatting is correct
5. Save file

**Knowledge Graph Structure**:
```yaml
concept_cards_risk:
  # Existing risk cards...

  # Risk Fundamentals (4 new cards)
  - id: risk-X
    title: "Taxonomy of AI Harms - Comprehensive Classification of AI Risks"
    slug: taxonomy-of-ai-harms-comprehensive-classification
    path: risk
    source_file: content/articles/final/risk-X-taxonomy-of-ai-harms.md
    tldr: "AI harms can be classified into individual (privacy, discrimination), societal (job displacement, democratic erosion), and systemic risks..."
    tags:
      - ai-risks
      - taxonomy
      - harm-classification
    relatedConcepts:
      - risk-2
      - risk-3
    crossPathRefs:
      - path: responsibility
        articles: [resp-1, resp-2]
      - path: terminology
        articles: [term-1, term-9]

  # ... (7 more entries)
```

**Note**: Determine actual risk IDs based on existing knowledge graph numbering.

---

### 3. Validate Knowledge Graph (20 min)

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

Risk Concept Cards: [Total including new 8] ✓
- All source files exist: [Total]/[Total] ✓
- All cross-references valid: [Total]/[Total] ✓
- All related concepts valid: [Total]/[Total] ✓

Critical Errors: 0 ✓
Warnings: 0 ✓

Status: READY FOR PRODUCTION ✓
```

---

### 4. Update Documentation (20 min)

**Process**:
1. Update `/docs/knowledge-graph-validation-report.md` with new validation results
2. Update `/docs/articles-by-path-analysis.md` to reflect 8 new Risk articles
3. Document any new cross-reference patterns discovered

**Files to Update**:
- `/docs/knowledge-graph-validation-report.md`
- `/docs/articles-by-path-analysis.md`

---

## Definition of Done

- [ ] All 8 risk entries added to `/content/knowledge-graph.yaml`
- [ ] Knowledge graph validation passes (0 critical errors)
- [ ] All source file paths verified
- [ ] All cross-references verified
- [ ] Documentation updated
- [ ] Epic 0 Story 0.3 unblocked (Risk image generation can proceed)
- [ ] Epic 7 unblocked (Risk Path Implementation can proceed)

---

## Technical Details

### Article Count by Topic

- **Risk Fundamentals**: 4 articles
  - Taxonomy of AI Harms
  - The Black Box Problem
  - Job Displacement
  - Autonomous Weapons
- **Trustworthy AI**: 4 articles
  - Building Trustworthy AI - The Seven Pillars
  - Human-Centered AI Design
  - Fairness in AI
  - The Ethics Landscape
- **Total**: 8 new articles

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
**Usage**: `node scripts/generate-knowledge-graph-entries.js --path=risk`

### Validate Knowledge Graph
**Path**: `/scripts/validate-knowledge-graph.js`
**Purpose**: Validate knowledge graph completeness and correctness
**Usage**: `node scripts/validate-knowledge-graph.js`

---

## Blockers Removed

**This story unblocks**:
- Epic 0 Story 0.3: Generate Risk Path Images (needs 8 new risk concept cards)
- Epic 7: Risk Path Implementation (needs complete knowledge graph)

---

## Notes

- Determine correct risk IDs based on existing knowledge graph
- Double-check all file paths are correct
- Verify cross-references point to existing articles
- Organize entries logically by topic for maintainability
- Use consistent YAML formatting (2-space indentation)
- Test that all 8 articles render correctly in the UI after integration
- Risk articles have extensive cross-references to Responsibility path

---

**Story Status**: Ready to Start (Blocked by 7.5.1, 7.5.2)
**Blockers**: Must complete all 8 articles first
**Previous Story**: 7.5.2 - Create Trustworthy AI Articles
**Next Epic**: 10.5 - Responsibility Content Creation
