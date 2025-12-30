#!/usr/bin/env node

/**
 * V1 Frontmatter to V2 Frontmatter Converter
 *
 * Converts cleaned V1 articles (with only V1 frontmatter) to proper V2 format
 */

const fs = require('fs');
const path = require('path');

// Configuration
const INPUT_DIR = '/Volumes/External/AIDefence/content/articles/needs-review';
const OUTPUT_DIR = '/Volumes/External/AIDefence/content/articles/staging';
const KNOWLEDGE_GRAPH_PATH = '/Volumes/External/AIDefence/content/knowledge-graph.yaml';

// Statistics
const stats = {
  total: 0,
  converted: 0,
  errors: 0
};

/**
 * Parse V1 frontmatter
 */
function parseV1Frontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  const yamlText = match[1];
  const body = match[2];
  const frontmatter = {};

  let currentKey = null;
  let currentArray = null;
  let inArray = false;
  let indent = 0;

  yamlText.split('\n').forEach(line => {
    const trimmed = line.trim();
    const currentIndent = line.search(/\S/);

    // Array item
    if (trimmed.startsWith('- ')) {
      if (currentArray) {
        const value = trimmed.substring(2).trim();

        // Check if this is a nested object in array (like components)
        if (value.includes(':')) {
          const obj = {};
          currentArray.push(obj);
        } else {
          currentArray.push(value);
        }
      }
      return;
    }

    // Key-value pair
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1 && currentIndent <= indent) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();

      if (value === '' || value === '[]') {
        currentKey = key;
        currentArray = [];
        frontmatter[key] = currentArray;
        indent = currentIndent;
        inArray = true;
      } else if (value.startsWith('[') && value.endsWith(']')) {
        frontmatter[key] = value.slice(1, -1).split(',').map(v => v.trim().replace(/^['"]|['"]$/g, ''));
        currentArray = null;
        inArray = false;
      } else {
        frontmatter[key] = value.replace(/^['"]|['"]$/g, '');
        currentArray = null;
        inArray = false;
      }
    }
  });

  return { v1Front: frontmatter, body };
}

/**
 * Generate slug from filename
 */
function getSlugFromFilename(filename) {
  return filename.replace(/\.md$/, '');
}

/**
 * Count words
 */
function countWords(text) {
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

/**
 * Calculate reading time
 */
function calculateReadingTime(text) {
  const words = countWords(text);
  return String(Math.ceil(words / 200));
}

/**
 * Extract first meaningful sentence as TLDR
 */
function extractTLDR(body, v1Tldr) {
  if (v1Tldr && v1Tldr !== "''") {
    return v1Tldr;
  }

  // Remove headings and get first paragraph
  const cleaned = body.replace(/^#+\s.*$/gm, '').trim();
  const match = cleaned.match(/^[A-Z][^.!?]{30,}[.!?]/);

  if (match) {
    let tldr = match[0].trim();
    if (tldr.length > 150) {
      tldr = tldr.substring(0, 147) + '...';
    }
    return tldr;
  }

  return 'Explore key concepts and practical applications in AI governance.';
}

/**
 * Map V1 category to V2 path
 */
function mapCategoryToPath(category) {
  const catLower = (category || '').toLowerCase();

  if (catLower.includes('history') || catLower.includes('evolution')) return 'history';
  if (catLower.includes('terminology') || catLower.includes('definition')) return 'terminology';
  if (catLower.includes('risk') || catLower.includes('harm') || catLower.includes('safety')) return 'risk';
  if (catLower.includes('future') || catLower.includes('trend') || catLower.includes('emerging')) return 'future';

  return 'responsibility'; // default
}

/**
 * Extract content sections from body
 */
function extractContentSections(body) {
  const sections = [];
  const lines = body.split('\n');

  lines.forEach(line => {
    if (line.match(/^##\s+(?!Summary|Introduction|Conclusion|Sources)/)) {
      const section = line.replace(/^##\s+/, '').trim();
      if (section && !sections.includes(section)) {
        sections.push(section);
      }
    }
  });

  return sections;
}

/**
 * Convert V1 tags to V2 tags
 */
function convertTags(v1Keywords, topicFingerprint, category) {
  const tags = new Set();

  // Add from seo_keywords (filter out junk)
  if (Array.isArray(v1Keywords)) {
    v1Keywords.forEach(keyword => {
      const cleaned = keyword.trim().toLowerCase();
      // Skip short/generic keywords
      if (cleaned.length > 3 && !['this', 'when', 'that', 'with', 'from'].includes(cleaned)) {
        tags.add(cleaned);
      }
    });
  }

  // Add from topic_fingerprint
  if (Array.isArray(topicFingerprint)) {
    topicFingerprint.forEach(topic => {
      tags.add(topic.trim().toLowerCase());
    });
  }

  // Add category-based tags
  const catLower = (category || '').toLowerCase();
  if (catLower.includes('governance')) tags.add('governance');
  if (catLower.includes('risk')) tags.add('risk');
  if (catLower.includes('ethics')) tags.add('ethics');
  if (catLower.includes('regulation')) tags.add('regulation');
  if (catLower.includes('compliance')) tags.add('compliance');

  const tagArray = Array.from(tags);

  // Return 3-5 tags
  if (tagArray.length === 0) return ['ai', 'governance', 'responsibility'];
  if (tagArray.length > 5) return tagArray.slice(0, 5);

  // Pad to 3 if needed
  while (tagArray.length < 3) {
    if (!tagArray.includes('ai')) tagArray.push('ai');
    else if (!tagArray.includes('governance')) tagArray.push('governance');
    else tagArray.push('technology');
  }

  return tagArray;
}

/**
 * Convert V1 to V2 frontmatter
 */
function convertToV2(v1Front, body, slug) {
  const title = v1Front.title || 'Untitled';
  const path = mapCategoryToPath(v1Front.category);
  const tldr = extractTLDR(body, v1Front.tldr);
  const contentSections = extractContentSections(body);
  const tags = convertTags(v1Front.seo_keywords, v1Front.topic_fingerprint, v1Front.category);
  const readingTime = calculateReadingTime(body);

  // Ensure tldr is a string
  const tldrString = typeof tldr === 'string' ? tldr : String(tldr || '');

  const v2Front = {
    title,
    slug,
    path,
    tldr: tldrString,
    contentSections,
    relatedConcepts: [],
    crossPathRefs: {},
    tags,
    category: v1Front.category || 'AI & Technology',
    image: `${slug}.jpg`,
    imageAlt: title,
    author: 'Sunil Iyer',
    publishDate: new Date().toISOString().split('T')[0],
    readingTime,
    seoTitle: title.substring(0, 60),
    seoDescription: tldrString.substring(0, 155)
  };

  return v2Front;
}

/**
 * Serialize V2 frontmatter to YAML
 */
function serializeV2Frontmatter(v2Front) {
  let yaml = '---\n';

  // Serialize in order
  const order = [
    'title', 'slug', 'path', 'tldr', 'contentSections',
    'relatedConcepts', 'crossPathRefs', 'tags', 'category',
    'image', 'imageAlt', 'author', 'publishDate', 'readingTime',
    'seoTitle', 'seoDescription'
  ];

  order.forEach(key => {
    const value = v2Front[key];

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
          if (subValue.length === 0) {
            yaml += `  ${subKey}: []\n`;
          } else {
            yaml += `  ${subKey}:\n`;
            subValue.forEach(item => {
              yaml += `    - ${item}\n`;
            });
          }
        } else {
          yaml += `  ${subKey}: ${subValue}\n`;
        }
      });
    } else {
      yaml += `${key}: ${value}\n`;
    }
  });

  yaml += '---\n\n';
  return yaml;
}

/**
 * Convert a single article
 */
function convertArticle(filename) {
  stats.total++;

  try {
    const inputPath = path.join(INPUT_DIR, filename);
    const content = fs.readFileSync(inputPath, 'utf8');

    const parsed = parseV1Frontmatter(content);
    if (!parsed) {
      throw new Error('Could not parse V1 frontmatter');
    }

    const { v1Front, body } = parsed;
    const slug = getSlugFromFilename(filename);
    const v2Front = convertToV2(v1Front, body, slug);

    const v2Content = serializeV2Frontmatter(v2Front) + body;

    const outputPath = path.join(OUTPUT_DIR, filename);
    fs.writeFileSync(outputPath, v2Content, 'utf8');

    stats.converted++;
    console.log(`✓ ${filename}`);

  } catch (error) {
    stats.errors++;
    console.error(`✗ ${filename}: ${error.message}`);
  }
}

/**
 * Main conversion function
 */
function convert() {
  console.log('Converting V1 frontmatter to V2 format...\n');

  // Get all markdown files
  const files = fs.readdirSync(INPUT_DIR)
    .filter(f => f.endsWith('.md'));

  console.log(`Found ${files.length} articles to convert\n`);

  // Convert each file
  files.forEach(filename => convertArticle(filename));

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('CONVERSION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total articles:    ${stats.total}`);
  console.log(`Converted:         ${stats.converted}`);
  console.log(`Errors:            ${stats.errors}`);
  console.log(`Success rate:      ${((stats.converted / stats.total) * 100).toFixed(1)}%`);
  console.log('='.repeat(60));

  console.log(`\nConverted articles saved to: ${OUTPUT_DIR}`);
  console.log('\nNext steps:');
  console.log('1. Run validation: node /Volumes/External/AIDefence/scripts/validate-articles.js /Volumes/External/AIDefence/content/articles/staging');
  console.log('2. Review validation report');
  console.log('3. Move passing articles to /final/');
}

// Run conversion
convert();
