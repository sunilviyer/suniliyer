#!/usr/bin/env node

/**
 * Manual Fix for Orphaned Articles
 *
 * Manually maps orphaned articles to broken concept references
 * Based on human review of the mapping report
 *
 * Usage: node scripts/manual-fix-orphans.js
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const KNOWLEDGE_GRAPH_PATH = path.join(process.cwd(), 'content/knowledge-graph.yaml');
const BACKUP_PATH = path.join(process.cwd(), 'content/knowledge-graph.yaml.backup');

// Manual mappings confirmed by human review
const MANUAL_MAPPINGS = [
  {
    id: 'history-4',
    currentPath: 'content/articles/final/article-title.md',
    newPath: 'content/articles/final/ai-history-from-dartmouth-to-deepmind.md',
    confidence: 'HIGH',
    reason: 'Slug match: ai-history-timeline → ai-history-from-dartmouth-to-deepmind'
  },
  {
    id: 'history-7',
    currentPath: 'content/articles/final/article-title.md',
    newPath: 'content/articles/final/deep-learning-decoded-neural-networks-for-non-engineers.md',
    confidence: 'HIGH',
    reason: 'Topic match: deep-learning-explained → deep-learning-decoded'
  },
  {
    id: 'history-14',
    currentPath: 'content/articles/final/article-14-ai-compute-why-gpus-rule-the-ai-world.md',
    newPath: 'content/articles/final/ai-compute-why-gpus-rule-the-ai-world.md',
    confidence: 'EXACT',
    reason: 'File exists with corrected filename'
  },
  {
    id: 'history-15',
    currentPath: 'content/articles/final/article-15-the-environmental-cost-of-ai-data-centers-energy-.md',
    newPath: 'content/articles/final/the-environmental-cost-of-ai-data-centers-energy-and-sustainability.md',
    confidence: 'EXACT',
    reason: 'File exists with complete filename'
  },
  {
    id: 'risk-1',
    currentPath: 'content/articles/final/article-title.md',
    newPath: 'content/articles/final/when-ai-goes-wrong-a-taxonomy-of-ai-harms.md',
    confidence: 'EXACT',
    reason: 'Slug match: taxonomy-ai-harms → when-ai-goes-wrong-a-taxonomy-of-ai-harms'
  },
  {
    id: 'risk-4',
    currentPath: 'content/articles/final/article-title.md',
    newPath: 'content/articles/final/the-black-box-problem-why-ai-explainability-matters.md',
    confidence: 'EXACT',
    reason: 'Slug match: black-box-explainability → the-black-box-problem'
  },
  {
    id: 'risk-6',
    currentPath: 'content/articles/final/article-title.md',
    newPath: 'content/articles/final/deepfakes-and-synthetic-media-the-trust-crisis.md',
    confidence: 'EXACT',
    reason: 'Slug match: deepfakes-trust-crisis → deepfakes-and-synthetic-media'
  },
  {
    id: 'risk-11',
    currentPath: 'content/articles/final/article-title.md',
    newPath: 'content/articles/final/building-trustworthy-ai-the-seven-pillars.md',
    confidence: 'HIGH',
    reason: 'Concept match: trustworthy-ai-pillars → building-trustworthy-ai-the-seven-pillars'
  }
];

function verifyFilesExist() {
  console.log('🔍 Verifying all target files exist...\n');

  let allExist = true;

  MANUAL_MAPPINGS.forEach(mapping => {
    const fullPath = path.join(process.cwd(), mapping.newPath);
    const exists = fs.existsSync(fullPath);

    if (exists) {
      console.log(`✅ ${mapping.id}: ${path.basename(mapping.newPath)}`);
    } else {
      console.log(`❌ ${mapping.id}: File not found: ${mapping.newPath}`);
      allExist = false;
    }
  });

  console.log('');
  return allExist;
}

function applyManualMappings() {
  console.log('🔧 Applying manual orphaned article mappings...\n');

  // Verify all files exist first
  if (!verifyFilesExist()) {
    console.error('❌ Some target files do not exist. Aborting.');
    process.exit(1);
  }

  // Create backup
  const backupContent = fs.readFileSync(KNOWLEDGE_GRAPH_PATH, 'utf-8');
  fs.writeFileSync(BACKUP_PATH, backupContent, 'utf-8');
  console.log(`✅ Backup created: ${BACKUP_PATH}\n`);

  // Load knowledge graph
  const kg = yaml.load(backupContent);

  let appliedCount = 0;
  let notFoundCount = 0;

  // Apply each manual mapping
  MANUAL_MAPPINGS.forEach(mapping => {
    let found = false;

    // Find the concept in the knowledge graph
    for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
      if (!Array.isArray(kg[pathKey])) continue;

      const card = kg[pathKey].find(c => c.id === mapping.id);
      if (card) {
        const oldPath = card.source_file;
        card.source_file = mapping.newPath;
        appliedCount++;
        found = true;

        console.log(`✅ ${mapping.id} [${mapping.confidence}]`);
        console.log(`   Title: ${card.title}`);
        console.log(`   ${oldPath}`);
        console.log(`   → ${mapping.newPath}`);
        console.log(`   Reason: ${mapping.reason}\n`);

        break;
      }
    }

    if (!found) {
      console.log(`⚠️  ${mapping.id}: Not found in knowledge graph`);
      notFoundCount++;
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
  console.log('  MANUAL MAPPING COMPLETE');
  console.log('━'.repeat(60));
  console.log('');
  console.log(`✅ Applied: ${appliedCount}`);
  console.log(`⚠️  Not Found: ${notFoundCount}`);
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
    applyManualMappings();
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

module.exports = { applyManualMappings, MANUAL_MAPPINGS };
