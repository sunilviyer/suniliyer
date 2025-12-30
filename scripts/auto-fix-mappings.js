#!/usr/bin/env node

/**
 * Auto-Fix Knowledge Graph Mappings
 *
 * Automatically updates source_file paths for concept cards with confirmed matches
 * Based on the output of map-articles-to-concepts.js
 *
 * Usage: node scripts/auto-fix-mappings.js
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { getAllArticles, getBrokenConcepts, findBestMatch } = require('./map-articles-to-concepts.js');

const KNOWLEDGE_GRAPH_PATH = path.join(process.cwd(), 'content/knowledge-graph.yaml');
const BACKUP_PATH = path.join(process.cwd(), 'content/knowledge-graph.yaml.backup');
const MIN_MATCH_SCORE = 40;

function autoFixMappings() {
  console.log('🔧 Auto-fixing knowledge graph mappings...\n');

  // Create backup
  const backupContent = fs.readFileSync(KNOWLEDGE_GRAPH_PATH, 'utf-8');
  fs.writeFileSync(BACKUP_PATH, backupContent, 'utf-8');
  console.log(`✅ Backup created: ${BACKUP_PATH}\n`);

  // Load knowledge graph
  const kg = yaml.load(backupContent);

  // Get articles and broken concepts
  const articles = getAllArticles();
  const brokenConcepts = getBrokenConcepts();

  console.log(`📁 Found ${articles.length} articles`);
  console.log(`🔴 Found ${brokenConcepts.length} broken concept references\n`);

  let fixedCount = 0;
  let skippedCount = 0;

  // Fix each broken concept
  brokenConcepts.forEach(concept => {
    const matches = findBestMatch(concept, articles);

    if (matches.length > 0 && matches[0].score >= MIN_MATCH_SCORE) {
      const match = matches[0];

      // Find the concept in the knowledge graph and update it
      for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
        if (!Array.isArray(kg[pathKey])) continue;

        const card = kg[pathKey].find(c => c.id === concept.id);
        if (card) {
          const oldPath = card.source_file;
          const newPath = match.article.relativePath;

          card.source_file = newPath;
          fixedCount++;

          console.log(`✅ ${concept.id}: ${concept.title}`);
          console.log(`   ${oldPath}`);
          console.log(`   → ${newPath}`);
          console.log(`   Score: ${match.score} (${match.reasons.join(', ')})\n`);

          break;
        }
      }
    } else {
      skippedCount++;
      if (matches.length > 0) {
        console.log(`⏭️  ${concept.id}: Skipped (best match score ${matches[0].score} < ${MIN_MATCH_SCORE})`);
      } else {
        console.log(`⏭️  ${concept.id}: Skipped (no matches found)`);
      }
    }
  });

  // Save updated knowledge graph
  const fixedContent = yaml.dump(kg, {
    lineWidth: -1,
    noRefs: true
  });

  fs.writeFileSync(KNOWLEDGE_GRAPH_PATH, fixedContent, 'utf-8');

  console.log('');
  console.log('━'.repeat(60));
  console.log('  AUTO-FIX COMPLETE');
  console.log('━'.repeat(60));
  console.log('');
  console.log(`✅ Fixed: ${fixedCount}`);
  console.log(`⏭️  Skipped: ${skippedCount}`);
  console.log('');
  console.log(`📄 Updated: ${KNOWLEDGE_GRAPH_PATH}`);
  console.log(`💾 Backup: ${BACKUP_PATH}`);
  console.log('');
  console.log('Next: Run validation to verify fixes');
  console.log('  node scripts/validate-knowledge-graph.js');
  console.log('');
}

// Main execution
if (require.main === module) {
  try {
    autoFixMappings();
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

module.exports = { autoFixMappings };
