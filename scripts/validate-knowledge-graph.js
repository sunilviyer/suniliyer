#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const REQUIRED_FIELDS = ['id', 'title', 'slug', 'path', 'source_file', 'tldr'];

function validateKnowledgeGraph() {
  const projectRoot = path.join(__dirname, '..');
  const kgPath = path.join(projectRoot, 'content/knowledge-graph.yaml');

  console.log('🔍 Validating Knowledge Graph...');
  console.log(`Reading: ${kgPath}\n`);

  if (!fs.existsSync(kgPath)) {
    console.error('❌ ERROR: knowledge-graph.yaml not found!');
    process.exit(1);
  }

  const kg = yaml.load(fs.readFileSync(kgPath, 'utf-8'));

  const issues = [];
  const warnings = [];
  const allConceptIds = new Set();
  const allSlugs = new Set();
  const stats = {
    total: 0,
    valid: 0,
    withIssues: 0,
    byPath: {}
  };

  // Collect all concept IDs
  console.log('📊 Collecting concept IDs...');
  for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
    const pathName = pathKey.replace('concept_cards_', '');
    stats.byPath[pathName] = { total: 0, valid: 0, issues: 0 };

    if (!kg[pathKey]) continue;

    kg[pathKey].forEach(card => {
      if (card.id) {
        allConceptIds.add(card.id);
        stats.total++;
        stats.byPath[pathName].total++;
      }
    });
  }

  console.log(`Found ${stats.total} concept cards\n`);

  // Validate each concept card
  console.log('🔎 Validating cards...\n');
  for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
    const pathName = pathKey.replace('concept_cards_', '');

    if (!kg[pathKey]) continue;

    kg[pathKey].forEach((card, index) => {
      const cardId = card.id || `${pathName}-unknown-${index}`;
      let hasIssues = false;

      // Check required fields
      REQUIRED_FIELDS.forEach(field => {
        if (!card[field]) {
          issues.push(`❌ ${cardId}: Missing required field "${field}"`);
          hasIssues = true;
        }
      });

      // Check source file exists
      if (card.source_file) {
        const filePath = path.join(projectRoot, card.source_file);
        if (!fs.existsSync(filePath)) {
          issues.push(`❌ ${cardId}: File not found: ${card.source_file}`);
          hasIssues = true;
        }
      }

      // Check for duplicate slugs
      if (card.slug) {
        if (allSlugs.has(card.slug)) {
          issues.push(`❌ ${cardId}: Duplicate slug: "${card.slug}"`);
          hasIssues = true;
        }
        allSlugs.add(card.slug);
      }

      // Validate related_concepts references
      if (card.related_concepts && Array.isArray(card.related_concepts)) {
        card.related_concepts.forEach(refId => {
          if (!allConceptIds.has(refId)) {
            warnings.push(`⚠️  ${cardId}: Broken related_concepts reference: "${refId}"`);
            hasIssues = true;
          }
        });
      }

      // Validate cross_path_refs references
      if (card.cross_path_refs && typeof card.cross_path_refs === 'object') {
        for (const [refPath, refIds] of Object.entries(card.cross_path_refs)) {
          if (!Array.isArray(refIds)) continue;

          refIds.forEach(refId => {
            if (!allConceptIds.has(refId)) {
              warnings.push(`⚠️  ${cardId}: Broken cross_path_refs[${refPath}] reference: "${refId}"`);
              hasIssues = true;
            }
          });
        }
      }

      // Update stats
      if (hasIssues) {
        stats.withIssues++;
        stats.byPath[pathName].issues++;
      } else {
        stats.valid++;
        stats.byPath[pathName].valid++;
      }
    });
  }

  return { stats, issues, warnings };
}

// Run validation and print results
const result = validateKnowledgeGraph();

console.log('\n' + '='.repeat(60));
console.log('📋 VALIDATION SUMMARY');
console.log('='.repeat(60) + '\n');

console.log(`Total concept cards: ${result.stats.total}`);
console.log(`Valid cards: ${result.stats.valid} ✅`);
console.log(`Cards with issues: ${result.stats.withIssues} ⚠️`);
console.log(`Critical issues: ${result.issues.length} ❌`);
console.log(`Warnings: ${result.warnings.length} ⚠️\n`);

console.log('By Path:');
for (const [pathName, pathStats] of Object.entries(result.stats.byPath)) {
  const status = pathStats.issues === 0 ? '✅' : '⚠️';
  console.log(`  ${status} ${pathName}: ${pathStats.valid}/${pathStats.total} valid (${pathStats.issues} with issues)`);
}

if (result.issues.length > 0) {
  console.log('\n' + '='.repeat(60));
  console.log('❌ CRITICAL ISSUES');
  console.log('='.repeat(60) + '\n');
  result.issues.forEach(issue => console.log(issue));
}

if (result.warnings.length > 0) {
  console.log('\n' + '='.repeat(60));
  console.log('⚠️  WARNINGS (Broken References)');
  console.log('='.repeat(60) + '\n');
  result.warnings.forEach(warning => console.log(warning));
}

console.log('\n' + '='.repeat(60));

if (result.issues.length === 0 && result.warnings.length === 0) {
  console.log('✅ Knowledge graph validation PASSED!');
  console.log('='.repeat(60) + '\n');
  process.exit(0);
} else {
  console.log('⚠️  Knowledge graph has issues that need attention');
  console.log('='.repeat(60) + '\n');
  process.exit(1);
}
