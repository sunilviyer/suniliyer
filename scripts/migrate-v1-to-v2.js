#!/usr/bin/env node

/**
 * V1 to V2 Content Migration Script
 *
 * Migrates articles from V1 structure to V2 structure
 * - Transforms frontmatter from V1 to V2 format
 * - Uses knowledge graph to fill missing data
 * - Outputs to staging for manual review
 */

const fs = require('fs');
const path = require('path');

// Configuration
const V1_ARTICLES_DIR = '/Volumes/External/AIDefence/OLD/v1-complete/content/articles/final';
const V2_STAGING_DIR = '/Volumes/External/AIDefence/content/articles/staging';
const V2_NEEDS_REVIEW_DIR = '/Volumes/External/AIDefence/content/articles/needs-review';
const KNOWLEDGE_GRAPH_PATH = '/Volumes/External/AIDefence/content/knowledge-graph.yaml';

// Statistics tracking
const stats = {
  total: 0,
  migrated: 0,
  needsReview: 0,
  errors: 0,
  issues: []
};

/**
 * Simple YAML parser for frontmatter
 * Extracts frontmatter and body from markdown file
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterText = match[1];
  const body = match[2];

  // Simple YAML parsing (handles basic key-value pairs and arrays)
  const frontmatter = {};
  let currentKey = null;
  let currentArray = null;

  frontmatterText.split('\n').forEach(line => {
    // Array item
    if (line.trim().startsWith('- ')) {
      if (currentArray) {
        currentArray.push(line.trim().substring(2).trim());
      }
      return;
    }

    // Key-value pair
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();

      if (value === '') {
        // Empty value, might be array or empty string
        currentKey = key;
        currentArray = [];
        frontmatter[key] = currentArray;
      } else if (value.startsWith('[') && value.endsWith(']')) {
        // Inline array
        frontmatter[key] = value.slice(1, -1).split(',').map(v => v.trim().replace(/^['"]|['"]$/g, ''));
        currentArray = null;
      } else {
        // Regular value
        frontmatter[key] = value.replace(/^['"]|['"]$/g, '');
        currentArray = null;
      }
    }
  });

  return { frontmatter, body };
}

/**
 * Load and parse knowledge graph
 */
function loadKnowledgeGraph() {
  try {
    const content = fs.readFileSync(KNOWLEDGE_GRAPH_PATH, 'utf8');

    // Simple YAML parsing for knowledge graph structure
    const concepts = {};
    let currentConcept = null;

    content.split('\n').forEach(line => {
      const trimmed = line.trim();

      // Concept ID
      if (trimmed.startsWith('- id:')) {
        const id = trimmed.substring(5).trim().replace(/^['"]|['"]$/g, '');
        currentConcept = { id };
        concepts[id] = currentConcept;
      }

      // Other properties
      if (currentConcept && trimmed.includes(':')) {
        const colonIndex = trimmed.indexOf(':');
        const key = trimmed.substring(0, colonIndex).trim();
        const value = trimmed.substring(colonIndex + 1).trim().replace(/^['"]|['"]$/g, '');

        if (key !== 'id' && key !== '-') {
          currentConcept[key] = value;
        }
      }
    });

    return concepts;
  } catch (error) {
    console.error('Error loading knowledge graph:', error.message);
    return {};
  }
}

/**
 * Generate slug from filename
 */
function generateSlug(filename) {
  return filename.replace(/\.md$/, '');
}

/**
 * Extract first sentence from body as fallback TLDR
 */
function extractFirstSentence(body) {
  const cleaned = body.replace(/^#+\s.*$/gm, '').trim();
  const match = cleaned.match(/^[^.!?]+[.!?]/);
  return match ? match[0].trim() : '';
}

/**
 * Calculate reading time from word count
 */
function calculateReadingTime(wordCount) {
  if (!wordCount) return '5';
  const minutes = Math.ceil(parseInt(wordCount) / 200);
  return String(minutes);
}

/**
 * Extract content sections from body
 */
function extractContentSections(body) {
  const sections = [];
  const lines = body.split('\n');

  lines.forEach(line => {
    if (line.match(/^##\s+(?!Summary|Introduction|Conclusion)/)) {
      const section = line.replace(/^##\s+/, '').trim();
      if (section && !sections.includes(section)) {
        sections.push(section);
      }
    }
  });

  return sections;
}

/**
 * Infer tags from category
 */
function inferTags(category) {
  const categoryMap = {
    'AI Risks & Principles': ['risk', 'principles', 'ethics'],
    'AI Governance': ['governance', 'compliance', 'regulation'],
    'Terminology': ['terminology', 'concepts', 'fundamentals'],
    'History': ['history', 'evolution', 'milestones'],
    'Future': ['future', 'trends', 'innovation']
  };

  return categoryMap[category] || ['ai', 'technology'];
}

/**
 * Transform V1 frontmatter to V2 frontmatter
 */
function transformFrontmatter(v1Front, body, slug, knowledgeGraph) {
  const concept = knowledgeGraph[slug] || {};
  const issues = [];

  // Extract TLDR
  let tldr = v1Front.tldr || concept.tldr || '';
  if (!tldr || tldr === "''") {
    tldr = extractFirstSentence(body);
    issues.push('Empty TLDR - extracted from first sentence');
  }

  // Determine path
  const path = concept.path || (v1Front.category || '').toLowerCase().includes('history') ? 'history' :
               (v1Front.category || '').toLowerCase().includes('terminology') ? 'terminology' :
               (v1Front.category || '').toLowerCase().includes('risk') ? 'risk' :
               (v1Front.category || '').toLowerCase().includes('future') ? 'future' : 'responsibility';

  if (!concept.path) {
    issues.push('Missing path in knowledge graph - inferred from category');
  }

  // Extract content sections
  const contentSections = extractContentSections(body);
  if (contentSections.length === 0) {
    issues.push('No content sections found');
  }

  // Build V2 frontmatter
  const v2Front = {
    // Core metadata
    title: v1Front.title || concept.title || 'Untitled',
    slug: slug,
    path: path,

    // Content preview
    tldr: tldr,

    // Content organization
    contentSections: contentSections,

    // Relationships
    relatedConcepts: concept.related_concepts || [],
    crossPathRefs: concept.cross_path_refs || {},

    // Taxonomy
    tags: concept.tags || inferTags(v1Front.category),
    category: v1Front.category || 'AI & Technology',

    // Assets
    image: `${slug}.jpg`,
    imageAlt: `${v1Front.title || concept.title}`,

    // Publishing
    author: 'Sunil Iyer',
    publishDate: new Date().toISOString().split('T')[0],
    readingTime: calculateReadingTime(v1Front.word_count),

    // SEO
    seoTitle: (v1Front.title || '').substring(0, 60),
    seoDescription: tldr.substring(0, 155)
  };

  return { v2Front, issues };
}

/**
 * Serialize frontmatter and body to markdown
 */
function serializeMarkdown(frontmatter, body) {
  let yaml = '---\n';

  Object.entries(frontmatter).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        yaml += `${key}: []\n`;
      } else {
        yaml += `${key}:\n`;
        value.forEach(item => {
          yaml += `  - ${item}\n`;
        });
      }
    } else if (typeof value === 'object' && value !== null) {
      yaml += `${key}:\n`;
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (Array.isArray(subValue)) {
          yaml += `  ${subKey}:\n`;
          subValue.forEach(item => {
            yaml += `    - ${item}\n`;
          });
        } else {
          yaml += `  ${subKey}: ${subValue}\n`;
        }
      });
    } else {
      yaml += `${key}: ${value}\n`;
    }
  });

  yaml += '---\n\n';

  return yaml + body;
}

/**
 * Migrate a single article
 */
function migrateArticle(filename, knowledgeGraph) {
  stats.total++;

  try {
    const v1Path = path.join(V1_ARTICLES_DIR, filename);
    const content = fs.readFileSync(v1Path, 'utf8');
    const { frontmatter: v1Front, body } = parseFrontmatter(content);

    const slug = generateSlug(filename);
    const { v2Front, issues } = transformFrontmatter(v1Front, body, slug, knowledgeGraph);

    const v2Content = serializeMarkdown(v2Front, body);

    // Determine output directory based on issues
    const needsReview = issues.length > 0;
    const outputDir = needsReview ? V2_NEEDS_REVIEW_DIR : V2_STAGING_DIR;
    const outputPath = path.join(outputDir, filename);

    fs.writeFileSync(outputPath, v2Content, 'utf8');

    if (needsReview) {
      stats.needsReview++;
      stats.issues.push({
        filename,
        issues
      });
    } else {
      stats.migrated++;
    }

    console.log(`✓ ${filename}${needsReview ? ' (needs review)' : ''}`);

  } catch (error) {
    stats.errors++;
    console.error(`✗ ${filename}: ${error.message}`);
  }
}

/**
 * Main migration function
 */
function migrate() {
  console.log('Starting V1 to V2 migration...\n');

  // Load knowledge graph
  console.log('Loading knowledge graph...');
  const knowledgeGraph = loadKnowledgeGraph();
  console.log(`Loaded ${Object.keys(knowledgeGraph).length} concepts\n`);

  // Get all V1 articles
  const files = fs.readdirSync(V1_ARTICLES_DIR)
    .filter(f => f.endsWith('.md') && !f.includes('article-titles'));

  console.log(`Found ${files.length} articles to migrate\n`);

  // Migrate each article
  files.forEach(filename => migrateArticle(filename, knowledgeGraph));

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('MIGRATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total articles:        ${stats.total}`);
  console.log(`Successfully migrated: ${stats.migrated}`);
  console.log(`Needs manual review:   ${stats.needsReview}`);
  console.log(`Errors:                ${stats.errors}`);
  console.log('='.repeat(60));

  // Print issues summary
  if (stats.issues.length > 0) {
    console.log('\nARTICLES NEEDING REVIEW:');
    console.log('='.repeat(60));
    stats.issues.forEach(({ filename, issues }) => {
      console.log(`\n${filename}:`);
      issues.forEach(issue => console.log(`  - ${issue}`));
    });
  }

  console.log('\nMigration complete!');
  console.log(`\nNext steps:`);
  console.log(`1. Review articles in: ${V2_NEEDS_REVIEW_DIR}`);
  console.log(`2. Validate articles in: ${V2_STAGING_DIR}`);
  console.log(`3. Promote validated articles to: /content/articles/final/`);
}

// Run migration
migrate();
