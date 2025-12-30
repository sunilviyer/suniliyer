#!/usr/bin/env node

/**
 * Article-to-Concept Mapping Script
 *
 * Analyzes existing articles and maps them to concept cards in knowledge graph
 * Identifies which broken references can be fixed vs. which need new articles
 *
 * Usage: node scripts/map-articles-to-concepts.js
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const KNOWLEDGE_GRAPH_PATH = path.join(process.cwd(), 'content/knowledge-graph.yaml');
const ARTICLES_DIR = path.join(process.cwd(), 'content/articles/final');
const OUTPUT_PATH = path.join(process.cwd(), 'docs/article-concept-mapping-report.md');

// Parse frontmatter from markdown file
function parseFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/^---\n([\s\S]*?)\n---/);

  if (!match) return null;

  try {
    return yaml.load(match[1]);
  } catch (error) {
    return null;
  }
}

// Get all article files with metadata
function getAllArticles() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`❌ Articles directory not found: ${ARTICLES_DIR}`);
    process.exit(1);
  }

  return fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const fullPath = path.join(ARTICLES_DIR, filename);
      const frontmatter = parseFrontmatter(fullPath);

      return {
        filename,
        fullPath,
        relativePath: `content/articles/final/${filename}`,
        basename: filename.replace('.md', ''),
        slug: filename.replace('.md', '').replace(/^article-\d+-/, '').replace(/^article-/, ''),
        frontmatter,
        title: frontmatter?.title || 'Unknown',
        category: frontmatter?.category || 'Unknown'
      };
    });
}

// Get broken concept cards from knowledge graph
function getBrokenConcepts() {
  const kg = yaml.load(fs.readFileSync(KNOWLEDGE_GRAPH_PATH, 'utf-8'));
  const broken = [];

  for (const pathKey of Object.keys(kg).filter(k => k.startsWith('concept_cards_'))) {
    if (!Array.isArray(kg[pathKey])) continue;

    kg[pathKey].forEach(card => {
      if (card.source_file && !fs.existsSync(path.join(process.cwd(), card.source_file))) {
        broken.push({
          id: card.id,
          title: card.title,
          slug: card.slug,
          path: card.path,
          source_file: card.source_file,
          tags: card.tags || []
        });
      }
    });
  }

  return broken;
}

// Find best matching article for a concept
function findBestMatch(concept, articles) {
  const matches = [];

  articles.forEach(article => {
    let score = 0;
    const reasons = [];

    // Exact slug match
    if (article.slug === concept.slug) {
      score += 100;
      reasons.push('exact slug match');
    }

    // Slug contains concept slug
    if (article.slug.includes(concept.slug)) {
      score += 50;
      reasons.push('slug contains concept slug');
    }

    // Concept slug contains article slug
    if (concept.slug.includes(article.slug)) {
      score += 40;
      reasons.push('concept slug contains article slug');
    }

    // Title similarity (case-insensitive partial match)
    const articleTitleLower = article.title.toLowerCase();
    const conceptTitleLower = concept.title.toLowerCase();

    if (articleTitleLower === conceptTitleLower) {
      score += 80;
      reasons.push('exact title match');
    } else if (articleTitleLower.includes(conceptTitleLower) || conceptTitleLower.includes(articleTitleLower)) {
      score += 30;
      reasons.push('title similarity');
    }

    // Tag matching
    if (concept.tags && article.frontmatter?.tags) {
      const matchingTags = concept.tags.filter(tag =>
        article.frontmatter.tags.includes(tag)
      );
      if (matchingTags.length > 0) {
        score += matchingTags.length * 10;
        reasons.push(`${matchingTags.length} matching tags`);
      }
    }

    // Category/path alignment
    if (article.category && concept.path) {
      const categoryPathMap = {
        'History & Context': 'history',
        'Terminology': 'terminology',
        'Risk & Governance': 'risk',
        'Responsibility': 'responsibility',
        'Future': 'future'
      };

      if (categoryPathMap[article.category] === concept.path) {
        score += 20;
        reasons.push('category alignment');
      }
    }

    if (score > 0) {
      matches.push({
        article,
        score,
        reasons
      });
    }
  });

  // Sort by score descending
  matches.sort((a, b) => b.score - a.score);

  return matches;
}

// Generate mapping report
function generateMappingReport() {
  console.log('📊 Analyzing article-to-concept mappings...\n');

  const articles = getAllArticles();
  const brokenConcepts = getBrokenConcepts();

  console.log(`📁 Found ${articles.length} articles`);
  console.log(`🔴 Found ${brokenConcepts.length} broken concept references\n`);

  const fixable = [];
  const unfixable = [];
  const usedArticles = new Set();

  // Find matches for each broken concept
  brokenConcepts.forEach(concept => {
    const matches = findBestMatch(concept, articles);

    if (matches.length > 0 && matches[0].score >= 40) {
      // Good match found
      fixable.push({
        concept,
        match: matches[0],
        alternates: matches.slice(1, 3)
      });
      usedArticles.add(matches[0].article.filename);
    } else {
      unfixable.push({
        concept,
        matches: matches.slice(0, 3)
      });
    }
  });

  // Find orphaned articles (not referenced in knowledge graph)
  const orphaned = articles.filter(article => !usedArticles.has(article.filename));

  // Generate markdown report
  let report = `# Article-to-Concept Mapping Report

**Generated**: ${new Date().toISOString().split('T')[0]}
**Articles Analyzed**: ${articles.length}
**Broken Concept References**: ${brokenConcepts.length}

---

## Summary

- **Fixable References**: ${fixable.length} ✅
- **Need New Articles**: ${unfixable.length} 🔴
- **Orphaned Articles**: ${orphaned.length} ⚠️

---

## ✅ Fixable References (${fixable.length})

These concept cards can be fixed by updating their \`source_file\` path:

`;

  fixable.forEach(({ concept, match, alternates }) => {
    report += `### ${concept.id}: ${concept.title}

**Current Path**: \`${concept.source_file}\`
**New Path**: \`${match.article.relativePath}\`
**Match Score**: ${match.score}
**Reasons**: ${match.reasons.join(', ')}

\`\`\`yaml
# Fix command:
id: ${concept.id}
source_file: ${match.article.relativePath}
\`\`\`

`;

    if (alternates.length > 0) {
      report += `**Alternates**:\n`;
      alternates.forEach(alt => {
        report += `- ${alt.article.filename} (score: ${alt.score}) - ${alt.reasons.join(', ')}\n`;
      });
      report += '\n';
    }
  });

  report += `---

## 🔴 Needs New Articles (${unfixable.length})

These concept cards need articles to be created:

`;

  unfixable.forEach(({ concept, matches }) => {
    report += `### ${concept.id}: ${concept.title}

**Slug**: \`${concept.slug}\`
**Path**: \`${concept.path}\`
**Current Source**: \`${concept.source_file}\`
`;

    if (matches.length > 0) {
      report += `\n**Weak Matches** (score < 40):\n`;
      matches.forEach(match => {
        report += `- ${match.article.filename} (score: ${match.score}) - ${match.reasons.join(', ')}\n`;
      });
    } else {
      report += `\n**No matches found** - Article needs to be created.\n`;
    }

    report += '\n';
  });

  report += `---

## ⚠️ Orphaned Articles (${orphaned.length})

These articles exist but are not referenced in the knowledge graph:

`;

  orphaned.forEach(article => {
    report += `- **${article.filename}**
  - Title: ${article.title}
  - Category: ${article.category}
  - Slug: ${article.slug}
  - Path: \`${article.relativePath}\`

`;
  });

  report += `---

## Next Steps

### 1. Fix Fixable References (${fixable.length} items)

Run the auto-fix script to update paths:

\`\`\`bash
node scripts/auto-fix-mappings.js
\`\`\`

Or manually update \`content/knowledge-graph.yaml\` with the paths listed above.

### 2. Plan Article Creation (${unfixable.length} items)

Add these articles to Epic 2.5, 5.5, or 7.5 for creation:

`;

  // Group unfixable by path
  const byPath = unfixable.reduce((acc, { concept }) => {
    if (!acc[concept.path]) acc[concept.path] = [];
    acc[concept.path].push(concept);
    return acc;
  }, {});

  Object.entries(byPath).forEach(([pathName, concepts]) => {
    report += `**${pathName}** (${concepts.length} articles):\n`;
    concepts.forEach(concept => {
      report += `- ${concept.slug}\n`;
    });
    report += '\n';
  });

  report += `### 3. Review Orphaned Articles (${orphaned.length} items)

Either:
- Add to knowledge graph if relevant to learning paths
- Keep as standalone reference articles
- Remove if no longer needed

---

**Generated by**: \`scripts/map-articles-to-concepts.js\`
**Re-run**: \`node scripts/map-articles-to-concepts.js\`
`;

  return {
    report,
    fixable,
    unfixable,
    orphaned,
    stats: {
      totalArticles: articles.length,
      brokenConcepts: brokenConcepts.length,
      fixableCount: fixable.length,
      unfixableCount: unfixable.length,
      orphanedCount: orphaned.length
    }
  };
}

// Main execution
if (require.main === module) {
  try {
    const { report, stats } = generateMappingReport();

    // Write report to file
    fs.writeFileSync(OUTPUT_PATH, report, 'utf-8');

    console.log('');
    console.log('━'.repeat(60));
    console.log('  MAPPING ANALYSIS COMPLETE');
    console.log('━'.repeat(60));
    console.log('');
    console.log(`✅ Fixable references: ${stats.fixableCount}`);
    console.log(`🔴 Need new articles: ${stats.unfixableCount}`);
    console.log(`⚠️  Orphaned articles: ${stats.orphanedCount}`);
    console.log('');
    console.log(`📄 Report saved: ${OUTPUT_PATH}`);
    console.log('');
    console.log('Next: Review report and run auto-fix script');
    console.log('  node scripts/auto-fix-mappings.js');
    console.log('');
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

module.exports = { getAllArticles, getBrokenConcepts, findBestMatch, generateMappingReport };
