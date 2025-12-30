#!/usr/bin/env node

/**
 * Knowledge Graph Fix Script
 *
 * Automatically fixes broken file references and cross-references in knowledge-graph.yaml
 *
 * Usage: node scripts/fix-knowledge-graph.js
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const KNOWLEDGE_GRAPH_PATH = path.join(process.cwd(), 'content/knowledge-graph.yaml');
const ARTICLES_DIR = path.join(process.cwd(), 'content/articles/final');
const BACKUP_PATH = path.join(process.cwd(), 'content/knowledge-graph.yaml.backup');

// Get all article files
function getAllArticleFiles() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`❌ Articles directory not found: ${ARTICLES_DIR}`);
    process.exit(1);
  }

  return fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => ({
      filename: f,
      fullPath: path.join(ARTICLES_DIR, f),
      basename: f.replace('.md', ''),
      slug: f.replace('.md', '').replace(/^article-\d+-/, '').replace(/^article-/, '')
    }));
}

// Find matching article by slug
function findArticleBySlug(slug, articleFiles) {
  // Try exact match first
  let match = articleFiles.find(a => a.slug === slug);
  if (match) return match;

  // Try fuzzy match (contains slug)
  match = articleFiles.find(a => a.slug.includes(slug) || slug.includes(a.slug));
  if (match) return match;

  // Try converting slug variations
  const slugVariations = [
    slug,
    slug.replace(/-/g, ' '),
    slug.replace(/ /g, '-'),
  ];

  for (const variation of slugVariations) {
    match = articleFiles.find(a =>
      a.basename.toLowerCase().includes(variation.toLowerCase()) ||
      a.slug.toLowerCase().includes(variation.toLowerCase())
    );
    if (match) return match;
  }

  return null;
}

// Fix knowledge graph
function fixKnowledgeGraph() {
  console.log('🔧 Fixing Knowledge Graph...\n');

  // Create backup
  const backupContent = fs.readFileSync(KNOWLEDGE_GRAPH_PATH, 'utf-8');
  fs.writeFileSync(BACKUP_PATH, backupContent, 'utf-8');
  console.log(`✅ Backup created: ${BACKUP_PATH}\n`);

  // Load knowledge graph
  const kg = yaml.load(backupContent);

  // Get all article files
  const articleFiles = getAllArticleFiles();
  console.log(`📁 Found ${articleFiles.length} article files in ${ARTICLES_DIR}\n`);

  // Collect all existing concept IDs
  const existingConceptIds = new Set();
  for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
    if (Array.isArray(kg[pathKey])) {
      kg[pathKey].forEach(card => {
        if (card.id) existingConceptIds.add(card.id);
      });
    }
  }
  console.log(`📊 Found ${existingConceptIds.size} existing concept IDs\n`);

  let fixedFileRefs = 0;
  let removedCrossRefs = 0;
  let unfixableFileRefs = 0;

  // Fix each concept card
  for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
    if (!Array.isArray(kg[pathKey])) continue;

    kg[pathKey].forEach(card => {
      const cardId = card.id || 'unknown';

      // Fix broken file references
      if (card.source_file && (
        card.source_file.includes('article-title.md') ||
        card.source_file.includes('Embedded in') ||
        card.source_file.includes('Derived from') ||
        card.source_file.includes('Foundation model articles') ||
        card.source_file.includes('ML ') ||
        card.source_file.includes('Deep learning articles') ||
        card.source_file.includes('Generative AI articles') ||
        card.source_file.includes('NLP articles')
      )) {
        const match = findArticleBySlug(card.slug, articleFiles);

        if (match) {
          const newPath = `content/articles/final/${match.filename}`;
          console.log(`🔧 ${cardId}: ${card.source_file} → ${newPath}`);
          card.source_file = newPath;
          fixedFileRefs++;
        } else {
          console.log(`⚠️  ${cardId}: Could not find match for slug: ${card.slug}`);
          unfixableFileRefs++;
        }
      }

      // Remove broken cross-references to non-existent concepts
      if (card.cross_path_refs && typeof card.cross_path_refs === 'object') {
        for (const [refPath, refIds] of Object.entries(card.cross_path_refs)) {
          if (Array.isArray(refIds)) {
            const validRefs = refIds.filter(refId => {
              const exists = existingConceptIds.has(refId);
              if (!exists) {
                console.log(`🗑️  ${cardId}: Removing broken cross_path_refs[${refPath}]: ${refId}`);
                removedCrossRefs++;
              }
              return exists;
            });

            if (validRefs.length > 0) {
              card.cross_path_refs[refPath] = validRefs;
            } else {
              delete card.cross_path_refs[refPath];
            }
          }
        }

        // Remove empty cross_path_refs object
        if (Object.keys(card.cross_path_refs).length === 0) {
          delete card.cross_path_refs;
        }
      }

      // Remove broken related_concepts references
      if (card.related_concepts && Array.isArray(card.related_concepts)) {
        const validRelated = card.related_concepts.filter(refId => {
          const exists = existingConceptIds.has(refId);
          if (!exists) {
            console.log(`🗑️  ${cardId}: Removing broken related_concepts: ${refId}`);
            removedCrossRefs++;
          }
          return exists;
        });

        if (validRelated.length > 0) {
          card.related_concepts = validRelated;
        } else {
          delete card.related_concepts;
        }
      }
    });
  }

  // Save fixed knowledge graph
  const fixedContent = yaml.dump(kg, {
    lineWidth: -1,  // Disable line wrapping
    noRefs: true    // Disable references
  });

  fs.writeFileSync(KNOWLEDGE_GRAPH_PATH, fixedContent, 'utf-8');

  console.log('');
  console.log('━'.repeat(60));
  console.log('  FIX COMPLETE');
  console.log('━'.repeat(60));
  console.log('');
  console.log(`✅ Fixed file references: ${fixedFileRefs}`);
  console.log(`🗑️  Removed broken cross-references: ${removedCrossRefs}`);
  console.log(`⚠️  Unfixable file references: ${unfixableFileRefs}`);
  console.log('');
  console.log(`📄 Updated: ${KNOWLEDGE_GRAPH_PATH}`);
  console.log(`💾 Backup: ${BACKUP_PATH}`);
  console.log('');
  console.log('Next: Run validation again to verify fixes');
  console.log('  node scripts/validate-knowledge-graph.js');
  console.log('');
}

// Main execution
if (require.main === module) {
  try {
    fixKnowledgeGraph();
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

module.exports = { fixKnowledgeGraph, getAllArticleFiles, findArticleBySlug };
