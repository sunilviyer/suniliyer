#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const projectRoot = path.join(__dirname, '..');
const kgPath = path.join(projectRoot, 'content/knowledge-graph.yaml');
const fixesFile = '/tmp/kg-fixes.txt';

console.log('🔧 Applying Knowledge Graph Fixes...\n');

// Load mappings
const fixes = fs.readFileSync(fixesFile, 'utf-8')
  .trim()
  .split('\n')
  .map(line => {
    const [id, slug, filename] = line.split('|');
    return { id, slug, filename, newPath: `content/articles/final/${filename}` };
  });

console.log(`Loaded ${fixes.length} fixes\n`);

// Load knowledge graph
const kg = yaml.load(fs.readFileSync(kgPath, 'utf-8'));

let appliedCount = 0;

// Apply fixes
for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
  if (!kg[pathKey]) continue;

  kg[pathKey].forEach(card => {
    const fix = fixes.find(f => f.id === card.id);
    if (fix) {
      console.log(`✅ ${card.id}: ${card.slug}`);
      console.log(`   OLD: ${card.source_file}`);
      console.log(`   NEW: ${fix.newPath}\n`);
      card.source_file = fix.newPath;
      appliedCount++;
    }
  });
}

console.log(`\n${'='.repeat(60)}`);
console.log(`Applied ${appliedCount}/${fixes.length} fixes`);
console.log(`${'='.repeat(60)}\n`);

// Save updated knowledge graph
const updatedYAML = yaml.dump(kg, { lineWidth: -1, noRefs: true });
fs.writeFileSync(kgPath, updatedYAML, 'utf-8');
console.log('✅ Knowledge graph updated!\n');
