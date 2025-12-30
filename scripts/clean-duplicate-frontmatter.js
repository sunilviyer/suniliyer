#!/usr/bin/env node

/**
 * Clean Duplicate Frontmatter Script
 *
 * Removes incomplete V2 frontmatter blocks from articles that still have
 * both V2 (incomplete) and V1 (complete) frontmatter blocks.
 *
 * This prepares articles for proper V1-to-V2 conversion by ensuring only
 * the V1 frontmatter remains.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const INPUT_DIR = '/Volumes/External/AIDefence/content/articles/needs-review';
const OUTPUT_DIR = '/Volumes/External/AIDefence/content/articles/needs-review'; // Same directory

// Statistics
const stats = {
  total: 0,
  cleaned: 0,
  skipped: 0,
  errors: 0
};

/**
 * Detect if article has two frontmatter blocks
 */
function hasDuplicateFrontmatter(content) {
  const frontmatterMatches = content.match(/---\n/g);
  return frontmatterMatches && frontmatterMatches.length >= 4; // 2 opening + 2 closing = 4 total
}

/**
 * Remove first frontmatter block, keep everything from second block onwards
 */
function removeDuplicateFrontmatter(content) {
  // Find all frontmatter delimiter positions
  const delimiters = [];
  let pos = 0;

  while (pos < content.length) {
    const index = content.indexOf('---\n', pos);
    if (index === -1) break;
    delimiters.push(index);
    pos = index + 4; // Move past "---\n"
  }

  // If we have at least 4 delimiters (2 complete blocks), remove the first block
  if (delimiters.length >= 4) {
    // Keep everything from the start of the second frontmatter block onwards
    const secondBlockStart = delimiters[2];
    return content.substring(secondBlockStart);
  }

  // No duplicate found
  return content;
}

/**
 * Clean a single article
 */
function cleanArticle(filename) {
  stats.total++;

  try {
    const inputPath = path.join(INPUT_DIR, filename);
    const content = fs.readFileSync(inputPath, 'utf8');

    // Check if article has duplicate frontmatter
    if (!hasDuplicateFrontmatter(content)) {
      stats.skipped++;
      console.log(`⊘ ${filename} (no duplicates)`);
      return;
    }

    // Remove first frontmatter block
    const cleaned = removeDuplicateFrontmatter(content);

    // Write cleaned content back
    const outputPath = path.join(OUTPUT_DIR, filename);
    fs.writeFileSync(outputPath, cleaned, 'utf8');

    stats.cleaned++;
    console.log(`✓ ${filename}`);

  } catch (error) {
    stats.errors++;
    console.error(`✗ ${filename}: ${error.message}`);
  }
}

/**
 * Main cleaning function
 */
function clean() {
  console.log('Cleaning duplicate frontmatter blocks...\n');

  // Get all markdown files
  const files = fs.readdirSync(INPUT_DIR)
    .filter(f => f.endsWith('.md'));

  console.log(`Found ${files.length} articles to process\n`);

  // Clean each file
  files.forEach(filename => cleanArticle(filename));

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('CLEANING SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total articles:    ${stats.total}`);
  console.log(`Cleaned:           ${stats.cleaned}`);
  console.log(`Skipped:           ${stats.skipped} (no duplicates found)`);
  console.log(`Errors:            ${stats.errors}`);
  console.log('='.repeat(60));

  if (stats.cleaned > 0) {
    console.log(`\n✓ Cleaned ${stats.cleaned} articles`);
    console.log('\nNext steps:');
    console.log('1. Re-run conversion: node /Volumes/External/AIDefence/scripts/convert-v1-frontmatter-to-v2.js');
    console.log('2. Validate results: node /Volumes/External/AIDefence/scripts/validate-articles.js /Volumes/External/AIDefence/content/articles/staging');
  }
}

// Run cleaning
clean();
