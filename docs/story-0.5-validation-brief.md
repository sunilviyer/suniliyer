# Story 0.5: Validate Knowledge Graph - Brief

**Type**: Validation script (NO IMAGES)
**Estimated Effort**: 3-4 hours
**Purpose**: Verify knowledge graph integrity before adding new content

---

## Task

Create validation script to check `/content/knowledge-graph.yaml` for:

1. **File References**: All `source_file` paths point to actual files
2. **Cross-References**: All `related_concepts` IDs exist
3. **Path References**: All `cross_path_refs` IDs exist
4. **Example References**: All `example_cards` IDs exist
5. **No Duplicates**: Unique concept IDs and slugs
6. **Required Fields**: id, title, slug, path, source_file, tldr

---

## Deliverables

1. `/scripts/validate-knowledge-graph.js` - Validation script
2. `/docs/knowledge-graph-validation-report.md` - Results report
3. Fix any broken references found

---

## Script Template (Optional)

```javascript
const fs = require('fs');
const yaml = require('js-yaml');

// Load knowledge graph
const kg = yaml.load(fs.readFileSync('content/knowledge-graph.yaml', 'utf-8'));

// Validate file references
// Validate cross-references
// Report issues
```

---

**No images needed for this story**
