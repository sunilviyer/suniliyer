#!/usr/bin/env node

/**
 * Generate Knowledge Graph Entries
 *
 * Extracts metadata from Responsibility (20) and Future (2) articles
 * Generates knowledge graph YAML entries for Story 0.6
 *
 * Usage: node scripts/generate-knowledge-graph-entries.js
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { getAllArticlesWithMetadata } = require('./analyze-articles-by-path.js');

const OUTPUT_PATH = path.join(process.cwd(), 'docs/knowledge-graph-new-entries.yaml');

// Convert article frontmatter to knowledge graph concept card
function articleToConceptCard(article, pathPrefix, index) {
  const conceptId = `${pathPrefix}-${index + 1}`;

  // Extract content sections from article
  const contentSections = extractContentSections(article);

  // Map related concepts to concept IDs
  const relatedConcepts = article.relatedConcepts
    .filter(rc => rc && rc.length > 0)
    .slice(0, 5); // Limit to 5 most relevant

  // Map cross-path refs
  const crossPathRefs = {};
  if (article.crossPathRefs && Array.isArray(article.crossPathRefs)) {
    article.crossPathRefs.forEach(ref => {
      if (ref.path && Array.isArray(ref.articles)) {
        crossPathRefs[ref.path] = ref.articles.slice(0, 3); // Limit to 3 per path
      }
    });
  }

  return {
    id: conceptId,
    title: article.title,
    slug: article.slug,
    path: article.path,
    source_file: article.relativePath,
    tldr: article.tldr || `Learn about ${article.title.toLowerCase()}`,
    content_sections: contentSections,
    related_concepts: relatedConcepts,
    cross_path_refs: Object.keys(crossPathRefs).length > 0 ? crossPathRefs : undefined,
    tags: article.tags.slice(0, 6), // Limit to 6 tags
    example_cards: article.examples && article.examples.length > 0 ? article.examples.slice(0, 3) : undefined
  };
}

// Extract content sections from article (simplified - would need actual content analysis)
function extractContentSections(article) {
  // For now, use article category and tags to generate logical sections
  const sections = [];

  if (article.category.includes('Legal')) {
    sections.push('Legal Framework Overview');
    sections.push('Key Requirements');
    sections.push('Compliance Implications');
    sections.push('Enforcement and Penalties');
  } else if (article.category.includes('Risk')) {
    sections.push('Risk Overview');
    sections.push('Technical Details');
    sections.push('Mitigation Strategies');
    sections.push('Best Practices');
  } else if (article.category.includes('Future')) {
    sections.push('Current State');
    sections.push('Emerging Trends');
    sections.push('Future Implications');
    sections.push('Preparation Strategies');
  } else {
    sections.push('Introduction');
    sections.push('Core Concepts');
    sections.push('Practical Applications');
    sections.push('Key Takeaways');
  }

  return sections;
}

// Generate knowledge graph entries
function generateKnowledgeGraphEntries() {
  console.log('📊 Generating knowledge graph entries...\n');

  const articles = getAllArticlesWithMetadata();

  // Filter by path
  const responsibilityArticles = articles.filter(a => a.path === 'responsibility');
  const futureArticles = articles.filter(a => a.path === 'future');

  console.log(`📁 Found ${responsibilityArticles.length} Responsibility articles`);
  console.log(`📁 Found ${futureArticles.length} Future articles\n`);

  // Generate concept cards
  const responsibilityCards = responsibilityArticles.map((article, index) =>
    articleToConceptCard(article, 'resp', index)
  );

  const futureCards = futureArticles.map((article, index) =>
    articleToConceptCard(article, 'future', index)
  );

  // Create YAML structure
  const knowledgeGraphEntries = {
    concept_cards_responsibility: responsibilityCards,
    concept_cards_future: futureCards
  };

  // Generate YAML output
  const yamlOutput = yaml.dump(knowledgeGraphEntries, {
    lineWidth: -1,  // Disable line wrapping
    noRefs: true,    // Disable references
    quotingType: '"',
    forceQuotes: false
  });

  // Clean up undefined fields
  const cleanedYaml = yamlOutput
    .replace(/\n\s+cross_path_refs: undefined/g, '')
    .replace(/\n\s+example_cards: undefined/g, '');

  // Write to file
  fs.writeFileSync(OUTPUT_PATH, cleanedYaml, 'utf-8');

  // Generate summary report
  const report = generateSummaryReport(responsibilityCards, futureCards, responsibilityArticles, futureArticles);

  console.log('');
  console.log('━'.repeat(60));
  console.log('  KNOWLEDGE GRAPH GENERATION COMPLETE');
  console.log('━'.repeat(60));
  console.log('');
  console.log(`✅ Responsibility cards: ${responsibilityCards.length}`);
  console.log(`✅ Future cards: ${futureCards.length}`);
  console.log(`📊 Total cards generated: ${responsibilityCards.length + futureCards.length}`);
  console.log('');
  console.log(`📄 YAML entries saved: ${OUTPUT_PATH}`);
  console.log('');
  console.log('Next steps:');
  console.log('  1. Review generated entries');
  console.log('  2. Append to content/knowledge-graph.yaml');
  console.log('  3. Run validation: node scripts/validate-knowledge-graph.js');
  console.log('');

  return {
    yaml: cleanedYaml,
    responsibilityCards,
    futureCards,
    report
  };
}

// Generate summary report
function generateSummaryReport(respCards, futureCards, respArticles, futureArticles) {
  const report = `# Knowledge Graph Generation Summary

**Generated**: ${new Date().toISOString().split('T')[0]}
**Story**: Story 0.6 - Complete Knowledge Graph Metadata

---

## Summary

- **Responsibility Cards Generated**: ${respCards.length} (Target: 75, Gap: ${75 - respCards.length})
- **Future Cards Generated**: ${futureCards.length} (Target: 20, Gap: ${20 - futureCards.length})
- **Total Cards Generated**: ${respCards.length + futureCards.length}
- **Total Gap**: ${(75 - respCards.length) + (20 - futureCards.length)} articles need to be created

---

## Responsibility Path (${respCards.length}/${75})

### Generated Concept Cards

${respCards.map((card, i) => `${i + 1}. **${card.id}**: ${card.title}
   - Slug: \`${card.slug}\`
   - Tags: ${card.tags.join(', ')}
   - Sections: ${card.content_sections.length}
   - Cross-refs: ${card.cross_path_refs ? Object.keys(card.cross_path_refs).join(', ') : 'None'}
`).join('\n')}

### Missing: ${75 - respCards.length} Articles

These need to be created in future epics (Epic 10.5 or similar).

---

## Future Path (${futureCards.length}/${20})

### Generated Concept Cards

${futureCards.map((card, i) => `${i + 1}. **${card.id}**: ${card.title}
   - Slug: \`${card.slug}\`
   - Tags: ${card.tags.join(', ')}
   - Sections: ${card.content_sections.length}
   - Cross-refs: ${card.cross_path_refs ? Object.keys(card.cross_path_refs).join(', ') : 'None'}
`).join('\n')}

### Missing: ${20 - futureCards.length} Articles

These need to be created in future epics (Epic 11.5 or similar).

---

## Next Steps

### Immediate (Story 0.6)

1. ✅ Review generated YAML entries in \`${OUTPUT_PATH}\`
2. ⏳ Append to \`content/knowledge-graph.yaml\`
3. ⏳ Run validation: \`node scripts/validate-knowledge-graph.js\`
4. ⏳ Fix any validation errors
5. ⏳ Mark Story 0.6 as partially complete (22/${75 + 20} cards)

### Future Epics

**Epic 10.5: Responsibility Content Creation**
- Create ${75 - respCards.length} missing Responsibility articles
- Generate metadata for each
- Update knowledge graph

**Epic 11.5: Future Content Creation**
- Create ${20 - futureCards.length} missing Future articles
- Generate metadata for each
- Update knowledge graph

---

## Impact on Image Generation

**Story 0.7** (Generate Responsibility images): Can only proceed with ${respCards.length} images (not 75)
**Story 0.8** (Generate Future images): Can only proceed with ${futureCards.length} images (not 20)

**Revised Image Count**:
- Phase 3 originally: 116 images (75 + 20 + 21 examples)
- Phase 3 actual: ${respCards.length + futureCards.length} concept images + examples TBD

---

**Generated by**: \`scripts/generate-knowledge-graph-entries.js\`
`;

  const reportPath = path.join(process.cwd(), 'docs/knowledge-graph-generation-summary.md');
  fs.writeFileSync(reportPath, report, 'utf-8');
  console.log(`📄 Summary report saved: ${reportPath}`);

  return report;
}

// Main execution
if (require.main === module) {
  try {
    generateKnowledgeGraphEntries();
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

module.exports = { generateKnowledgeGraphEntries, articleToConceptCard };
