#!/usr/bin/env node

/**
 * Analyze Articles by Path
 *
 * Categorizes all articles in /content/articles/final/ by their `path` frontmatter field
 * Identifies which articles belong to each learning path (history, terminology, risk, responsibility, future)
 *
 * Usage: node scripts/analyze-articles-by-path.js
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles/final');
const OUTPUT_PATH = path.join(process.cwd(), 'docs/articles-by-path-analysis.md');

// Parse frontmatter from markdown file
function parseFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);

    if (!match) return null;

    return yaml.load(match[1]);
  } catch (error) {
    return null;
  }
}

// Get all articles with their frontmatter
function getAllArticlesWithMetadata() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`❌ Articles directory not found: ${ARTICLES_DIR}`);
    process.exit(1);
  }

  const articles = [];

  fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md'))
    .forEach(filename => {
      const fullPath = path.join(ARTICLES_DIR, filename);
      const frontmatter = parseFrontmatter(fullPath);

      if (frontmatter) {
        articles.push({
          filename,
          fullPath,
          relativePath: `content/articles/final/${filename}`,
          slug: frontmatter.slug || filename.replace('.md', ''),
          title: frontmatter.title || 'Unknown',
          path: frontmatter.path || 'unknown',
          category: frontmatter.category || 'Unknown',
          tldr: frontmatter.tldr || '',
          tags: frontmatter.tags || [],
          relatedConcepts: frontmatter.relatedConcepts || [],
          crossPathRefs: frontmatter.crossPathRefs || [],
          examples: frontmatter.examples || [],
          frontmatter
        });
      } else {
        console.warn(`⚠️  No frontmatter found in: ${filename}`);
      }
    });

  return articles;
}

// Analyze and categorize articles
function analyzeArticlesByPath() {
  console.log('📊 Analyzing articles by learning path...\n');

  const articles = getAllArticlesWithMetadata();

  console.log(`📁 Found ${articles.length} articles with frontmatter\n`);

  // Group by path
  const byPath = articles.reduce((acc, article) => {
    const pathKey = article.path || 'unknown';
    if (!acc[pathKey]) acc[pathKey] = [];
    acc[pathKey].push(article);
    return acc;
  }, {});

  // Generate report
  let report = `# Articles by Learning Path Analysis

**Generated**: ${new Date().toISOString().split('T')[0]}
**Total Articles**: ${articles.length}

---

## Summary

| Path | Count | Status |
|------|-------|--------|
`;

  const pathOrder = ['history', 'terminology', 'risk', 'responsibility', 'future', 'unknown'];

  pathOrder.forEach(pathName => {
    const count = byPath[pathName]?.length || 0;
    const status = count === 0 ? '❌ None' : count < 10 ? '⚠️ Few' : '✅ Many';
    report += `| **${pathName}** | ${count} | ${status} |\n`;
  });

  report += `\n---\n\n`;

  // Detailed listings for each path
  pathOrder.forEach(pathName => {
    const pathArticles = byPath[pathName] || [];

    if (pathArticles.length === 0) return;

    report += `## ${pathName.charAt(0).toUpperCase() + pathName.slice(1)} Path (${pathArticles.length} articles)\n\n`;

    pathArticles.forEach((article, index) => {
      report += `### ${index + 1}. ${article.title}\n\n`;
      report += `- **Slug**: \`${article.slug}\`\n`;
      report += `- **File**: \`${article.filename}\`\n`;
      report += `- **Category**: ${article.category}\n`;

      if (article.tldr) {
        report += `- **TL;DR**: ${article.tldr.substring(0, 150)}${article.tldr.length > 150 ? '...' : ''}\n`;
      }

      if (article.tags.length > 0) {
        report += `- **Tags**: ${article.tags.slice(0, 5).join(', ')}\n`;
      }

      if (article.relatedConcepts.length > 0) {
        report += `- **Related Concepts**: ${article.relatedConcepts.length} concepts\n`;
      }

      if (article.crossPathRefs.length > 0) {
        report += `- **Cross-Path Refs**: ${article.crossPathRefs.map(ref => ref.path).join(', ')}\n`;
      }

      report += '\n';
    });

    report += `---\n\n`;
  });

  // Statistics
  report += `## Statistics\n\n`;
  report += `- **Total Articles**: ${articles.length}\n`;
  report += `- **Articles with path field**: ${articles.filter(a => a.path !== 'unknown').length}\n`;
  report += `- **Articles without path field**: ${articles.filter(a => a.path === 'unknown').length}\n`;
  report += `\n`;

  // Path distribution
  report += `### Path Distribution\n\n`;
  pathOrder.forEach(pathName => {
    const count = byPath[pathName]?.length || 0;
    const percentage = ((count / articles.length) * 100).toFixed(1);
    report += `- **${pathName}**: ${count} articles (${percentage}%)\n`;
  });

  report += `\n---\n\n`;

  // Next steps
  report += `## Next Steps for Story 0.6\n\n`;

  const respCount = byPath.responsibility?.length || 0;
  const futureCount = byPath.future?.length || 0;

  report += `### Responsibility Path\n\n`;
  if (respCount === 0) {
    report += `❌ **No articles found with \`path: responsibility\`**\n\n`;
    report += `**Action Required**: Review articles and identify which should be tagged as Responsibility path.\n\n`;
  } else if (respCount < 75) {
    report += `⚠️ **Found ${respCount} articles** (Need 75 for complete path)\n\n`;
    report += `**Action Required**: \n`;
    report += `1. Review existing ${respCount} articles\n`;
    report += `2. Identify ${75 - respCount} more articles from 'unknown' or other paths\n`;
    report += `3. Or plan to create ${75 - respCount} new articles\n\n`;
  } else {
    report += `✅ **Found ${respCount} articles** (Target: 75)\n\n`;
    if (respCount > 75) {
      report += `**Note**: More articles than planned. Review and prioritize top 75.\n\n`;
    }
  }

  report += `### Future Path\n\n`;
  if (futureCount === 0) {
    report += `❌ **No articles found with \`path: future\`**\n\n`;
    report += `**Action Required**: Review articles and identify which should be tagged as Future path.\n\n`;
  } else if (futureCount < 20) {
    report += `⚠️ **Found ${futureCount} articles** (Need 20 for complete path)\n\n`;
    report += `**Action Required**: \n`;
    report += `1. Review existing ${futureCount} articles\n`;
    report += `2. Identify ${20 - futureCount} more articles from 'unknown' or other paths\n`;
    report += `3. Or plan to create ${20 - futureCount} new articles\n\n`;
  } else {
    report += `✅ **Found ${futureCount} articles** (Target: 20)\n\n`;
    if (futureCount > 20) {
      report += `**Note**: More articles than planned. Review and prioritize top 20.\n\n`;
    }
  }

  report += `---\n\n`;
  report += `**Generated by**: \`scripts/analyze-articles-by-path.js\`\n`;
  report += `**Re-run**: \`node scripts/analyze-articles-by-path.js\`\n`;

  return {
    report,
    byPath,
    stats: {
      total: articles.length,
      history: byPath.history?.length || 0,
      terminology: byPath.terminology?.length || 0,
      risk: byPath.risk?.length || 0,
      responsibility: byPath.responsibility?.length || 0,
      future: byPath.future?.length || 0,
      unknown: byPath.unknown?.length || 0
    }
  };
}

// Main execution
if (require.main === module) {
  try {
    const { report, stats } = analyzeArticlesByPath();

    // Write report to file
    fs.writeFileSync(OUTPUT_PATH, report, 'utf-8');

    console.log('');
    console.log('━'.repeat(60));
    console.log('  ARTICLE PATH ANALYSIS COMPLETE');
    console.log('━'.repeat(60));
    console.log('');
    console.log(`📊 Path Distribution:`);
    console.log(`   History: ${stats.history} articles`);
    console.log(`   Terminology: ${stats.terminology} articles`);
    console.log(`   Risk: ${stats.risk} articles`);
    console.log(`   Responsibility: ${stats.responsibility} articles`);
    console.log(`   Future: ${stats.future} articles`);
    console.log(`   Unknown: ${stats.unknown} articles`);
    console.log('');
    console.log(`📄 Report saved: ${OUTPUT_PATH}`);
    console.log('');
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

module.exports = { analyzeArticlesByPath, getAllArticlesWithMetadata };
