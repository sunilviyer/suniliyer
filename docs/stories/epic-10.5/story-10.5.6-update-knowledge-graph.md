# Story 10.5.6: Update Knowledge Graph with Responsibility Metadata

**Epic**: 10.5 - Responsibility Content Creation
**Story ID**: 10.5.6
**Priority**: P1 (High)
**Estimated Effort**: 4-6 hours
**Dependencies**: Stories 10.5.1, 10.5.2, 10.5.3, 10.5.4, 10.5.5 (all 55 articles must be created first)
**Assigned To**: TBD

---

## Story Description

Extract metadata from the 55 newly created Responsibility articles and integrate them into the knowledge graph YAML file. Validate the updated knowledge graph for completeness and correctness. This brings the total Responsibility concept cards from 20 to 75.

---

## User Story

**As a** developer implementing the Responsibility path
**I want** all 75 responsibility concept cards in the knowledge graph
**So that** the UI can render the complete learning path with metadata and cross-references

---

## Acceptance Criteria

- [ ] All 55 new responsibility concept cards added to knowledge graph
- [ ] Total responsibility cards: 75 (20 existing + 55 new)
- [ ] All concept cards have required fields (id, title, slug, path, source_file, tldr)
- [ ] All optional fields populated where applicable (tags, relatedConcepts, crossPathRefs, sources)
- [ ] All file references validated (source files exist)
- [ ] All cross-references validated (referenced articles exist)
- [ ] Knowledge graph validation passes with 0 critical errors
- [ ] Responsibility section organized logically by category

---

## Tasks

### 1. Extract Metadata from Articles (2 hours)

**Process**:
1. Run metadata extraction script on 55 new responsibility articles
2. Review generated YAML entries for accuracy
3. Verify all frontmatter fields extracted correctly
4. Check for any missing or malformed data
5. Organize by category (Global, Sector, Frameworks, Implementation, Practice)

**Command**:
```bash
node scripts/generate-knowledge-graph-entries.js --path=responsibility
```

**Expected Output**:
- 55 YAML concept card entries generated
- All required fields populated
- Cross-references and sources extracted

---

### 2. Integrate into Knowledge Graph (1.5 hours)

**Process**:
1. Open `/content/knowledge-graph.yaml`
2. Locate `concept_cards_responsibility` section
3. Add 55 new entries organized by category:
   - Global AI Regulations (resp-21 to resp-35) - 15 cards
   - Sector-Specific Regulations (resp-36 to resp-45) - 10 cards
   - AI Governance Frameworks (resp-46 to resp-55) - 10 cards
   - Compliance Implementation (resp-56 to resp-65) - 10 cards
   - Responsible AI Practice (resp-66 to resp-75) - 10 cards
4. Verify YAML formatting is correct
5. Save file

**Knowledge Graph Structure**:
```yaml
concept_cards_responsibility:
  # Existing cards (resp-1 to resp-20)...

  # Global AI Regulations (15 new cards)
  - id: resp-21
    title: "Australia AI Ethics Framework - Voluntary Principles and Sectoral Approach"
    slug: australia-ai-ethics-framework
    path: responsibility
    source_file: content/articles/final/resp-21-australia-ai-ethics-framework.md
    tldr: "Australia adopts a voluntary AI ethics framework with eight principles..."
    tags:
      - australia
      - ai-ethics-framework
      - voluntary-framework
    relatedConcepts:
      - resp-1
      - resp-9
    crossPathRefs:
      - path: risk
        articles: [risk-5, risk-8]

  # ... (54 more entries organized by category)
```

---

### 3. Validate Knowledge Graph (1 hour)

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
- Total responsibility cards: 75

**Expected Validation Report**:
```
Knowledge Graph Validation Report
==================================

Responsibility Concept Cards: 75 ✓
- Existing cards: 20 ✓
- New cards: 55 ✓
- All source files exist: 75/75 ✓
- All cross-references valid: 75/75 ✓
- All related concepts valid: 75/75 ✓

Critical Errors: 0 ✓
Warnings: 0 ✓

Status: READY FOR PRODUCTION ✓
```

---

### 4. Rebuild Cross-References (1 hour)

**Process**:
1. Review cross-references between existing and new articles
2. Update existing articles (resp-1 to resp-20) to reference new articles where appropriate
3. Ensure bidirectional references are maintained
4. Validate updated cross-references

**Key Cross-Reference Patterns**:
- Global regulations (resp-21 to resp-35) reference base regulations (resp-1, resp-2, resp-3)
- Sector-specific (resp-36 to resp-45) reference relevant global regulations
- Frameworks (resp-46 to resp-55) reference regulations that cite them
- Implementation (resp-56 to resp-65) reference regulations requiring those practices
- Practice (resp-66 to resp-75) reference frameworks and implementation guides

---

### 5. Update Documentation (30 min)

**Process**:
1. Update `/docs/knowledge-graph-validation-report.md` with new validation results
2. Update `/docs/articles-by-path-analysis.md` to reflect 55 new Responsibility articles
3. Document category organization structure

**Files to Update**:
- `/docs/knowledge-graph-validation-report.md`
- `/docs/articles-by-path-analysis.md`

---

## Definition of Done

- [ ] All 55 responsibility entries added to `/content/knowledge-graph.yaml`
- [ ] Total responsibility cards verified: 75 (20 existing + 55 new)
- [ ] Knowledge graph validation passes (0 critical errors)
- [ ] All source file paths verified
- [ ] All cross-references verified
- [ ] Cross-references between existing and new articles updated
- [ ] Documentation updated
- [ ] Epic 0 Story 0.7 unblocked (Responsibility image generation can proceed)
- [ ] Epic 10 unblocked (Responsibility Path Implementation can proceed)

---

## Technical Details

### Article Count by Category

- **Existing**: 20 articles (resp-1 to resp-20)
- **Global AI Regulations**: 15 articles (resp-21 to resp-35)
- **Sector-Specific Regulations**: 10 articles (resp-36 to resp-45)
- **AI Governance Frameworks**: 10 articles (resp-46 to resp-55)
- **Compliance Implementation**: 10 articles (resp-56 to resp-65)
- **Responsible AI Practice**: 10 articles (resp-66 to resp-75)
- **Total**: 75 articles

---

## Organization Structure

Organize knowledge graph entries by category for maintainability:

```yaml
concept_cards_responsibility:
  # === FOUNDATION (Existing 20 cards) ===
  # resp-1 to resp-20

  # === GLOBAL AI REGULATIONS (15 cards) ===
  # resp-21 to resp-35

  # === SECTOR-SPECIFIC REGULATIONS (10 cards) ===
  # resp-36 to resp-45

  # === AI GOVERNANCE FRAMEWORKS (10 cards) ===
  # resp-46 to resp-55

  # === COMPLIANCE IMPLEMENTATION (10 cards) ===
  # resp-56 to resp-65

  # === RESPONSIBLE AI PRACTICE (10 cards) ===
  # resp-66 to resp-75
```

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
- Missing sources (for legal/regulatory content)

---

## Scripts Used

### Generate Knowledge Graph Entries
**Path**: `/scripts/generate-knowledge-graph-entries.js`
**Purpose**: Extract frontmatter from markdown files and generate YAML entries
**Usage**: `node scripts/generate-knowledge-graph-entries.js --path=responsibility`

### Validate Knowledge Graph
**Path**: `/scripts/validate-knowledge-graph.js`
**Purpose**: Validate knowledge graph completeness and correctness
**Usage**: `node scripts/validate-knowledge-graph.js`

---

## Blockers Removed

**This story unblocks**:
- Epic 0 Story 0.7: Generate Responsibility Path Images (needs 75 concept cards)
- Epic 10: Responsibility Path Implementation (needs complete knowledge graph)

---

## Notes

- This is the largest knowledge graph update (55 articles)
- Organize carefully by category for maintainability
- Double-check all file paths are correct
- Verify cross-references point to existing articles
- Special attention to legal sources field (unique to responsibility articles)
- Use consistent YAML formatting (2-space indentation)
- Test that all 75 articles render correctly in the UI after integration
- Responsibility articles have extensive cross-references to other paths
- Consider creating index/navigation helpers given the large number of cards

---

**Story Status**: Ready to Start (Blocked by 10.5.1, 10.5.2, 10.5.3, 10.5.4, 10.5.5)
**Blockers**: Must complete all 55 articles first
**Previous Story**: 10.5.5 - Create Responsible AI Practice Articles
**Next Epic**: 11.5 - Future Content Creation
