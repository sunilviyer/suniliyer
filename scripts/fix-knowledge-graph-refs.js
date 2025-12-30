#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const projectRoot = path.join(__dirname, '..');
const kgPath = path.join(projectRoot, 'content/knowledge-graph.yaml');
const articlesDir = path.join(projectRoot, 'content/articles/final');

console.log('🔧 Fixing Knowledge Graph File References...\n');

// Load knowledge graph
const kg = yaml.load(fs.readFileSync(kgPath, 'utf-8'));

// Get all article files
const articleFiles = fs.readdirSync(articlesDir)
  .filter(f => f.endsWith('.md'))
  .map(f => ({
    filename: f,
    path: `content/articles/final/${f}`,
    slug: f.replace('.md', '')
  }));

console.log(`Found ${articleFiles.length} article files\n`);

// Fix broken references by matching slugs
let fixCount = 0;

for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
  if (!kg[pathKey]) continue;

  kg[pathKey].forEach(card => {
    const sourceFile = card.source_file;
    
    // Check if file exists
    const filePath = path.join(projectRoot, sourceFile);
    if (!fs.existsSync(filePath)) {
      // Try to find matching article by slug
      const match = articleFiles.find(a => {
        return a.slug.includes(card.slug) || card.slug.includes(a.slug.slice(0, 20));
      });

      if (match) {
        console.log(`✅ ${card.id}: ${card.source_file}`);
        console.log(`   → ${match.path}\n`);
        card.source_file = match.path;
        fixCount++;
      } else {
        console.log(`⚠️  ${card.id}: No match found for "${card.slug}"`);
        console.log(`   Current: ${sourceFile}\n`);
      }
    }
  });
}

console.log(`\n${'='.repeat(60)}`);
console.log(`Fixed ${fixCount} references`);
console.log(`${'='.repeat(60)}\n`);

if (fixCount > 0) {
  // Save updated knowledge graph
  const updatedYAML = yaml.dump(kg, { lineWidth: -1, noRefs: true });
  fs.writeFileSync(kgPath, updatedYAML, 'utf-8');
  console.log('✅ Knowledge graph updated!\n');
} else {
  console.log('No fixes needed.\n');
}
