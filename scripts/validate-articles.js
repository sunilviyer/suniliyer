#!/usr/bin/env node

/**
 * Article Quality Validation Script
 *
 * Validates V2 articles against the article structure spec
 * - Checks frontmatter completeness
 * - Validates word count ranges
 * - Verifies content sections
 * - Generates validation report
 */

const fs = require('fs');
const path = require('path');

// Configuration
const ARTICLES_DIR = process.argv[2] || '/Volumes/External/AIDefence/content/articles/needs-review';
const OUTPUT_REPORT = '/Volumes/External/AIDefence/docs/article-validation-report.md';

// Validation criteria
const CRITERIA = {
  minWordCount: 1500,
  maxWordCount: 4000,
  minSections: 4,
  maxSections: 7,
  minTldrLength: 50,
  maxTldrLength: 150,
  minTitleLength: 10,
  maxTitleLength: 80,
  minSeoTitleLength: 50,
  maxSeoTitleLength: 60,
  minSeoDescLength: 145,
  maxSeoDescLength: 155,
  requiredFields: [
    'title',
    'slug',
    'path',
    'tldr',
    'contentSections',
    'tags',
    'category',
    'image',
    'imageAlt',
    'author',
    'publishDate',
    'readingTime',
    'seoTitle',
    'seoDescription'
  ],
  validPaths: ['history', 'terminology', 'risk', 'responsibility', 'future']
};

// Statistics tracking
const stats = {
  total: 0,
  passed: 0,
  warnings: 0,
  failed: 0,
  issues: []
};

/**
 * Simple YAML parser for frontmatter
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterText = match[1];
  const body = match[2];

  const frontmatter = {};
  let currentKey = null;
  let currentArray = null;
  let currentObject = null;
  let indent = 0;

  frontmatterText.split('\n').forEach(line => {
    const currentIndent = line.search(/\S/);

    // Array item
    if (line.trim().startsWith('- ')) {
      const value = line.trim().substring(2).trim();
      if (currentArray) {
        currentArray.push(value);
      }
      return;
    }

    // Key-value pair
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();

      if (currentIndent === 0) {
        // Top-level key
        if (value === '' || value === '[]' || value === '{}') {
          currentKey = key;
          if (value === '[]') {
            currentArray = [];
            frontmatter[key] = currentArray;
          } else if (value === '{}') {
            currentObject = {};
            frontmatter[key] = currentObject;
          } else {
            currentArray = [];
            frontmatter[key] = currentArray;
          }
        } else if (value.startsWith('[') && value.endsWith(']')) {
          frontmatter[key] = value.slice(1, -1).split(',').map(v => v.trim().replace(/^['"]|['"]$/g, ''));
          currentArray = null;
          currentObject = null;
        } else {
          frontmatter[key] = value.replace(/^['"]|['"]$/g, '');
          currentArray = null;
          currentObject = null;
        }
        indent = currentIndent;
      } else if (currentIndent > indent) {
        // Nested key
        if (currentObject && typeof currentObject === 'object') {
          if (value === '') {
            currentObject[key] = [];
          } else {
            currentObject[key] = value.replace(/^['"]|['"]$/g, '');
          }
        }
      }
    }
  });

  return { frontmatter, body };
}

/**
 * Count words in text
 */
function countWords(text) {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Validate frontmatter fields
 */
function validateFrontmatter(frontmatter, filename) {
  const issues = [];
  const warnings = [];

  // Check required fields
  CRITERIA.requiredFields.forEach(field => {
    if (!frontmatter[field] || frontmatter[field].length === 0) {
      issues.push(`Missing required field: ${field}`);
    }
  });

  // Validate path
  if (frontmatter.path && !CRITERIA.validPaths.includes(frontmatter.path)) {
    issues.push(`Invalid path: ${frontmatter.path} (must be one of: ${CRITERIA.validPaths.join(', ')})`);
  }

  // Validate TLDR length
  if (frontmatter.tldr) {
    const tldrLength = frontmatter.tldr.length;
    if (tldrLength < CRITERIA.minTldrLength) {
      warnings.push(`TLDR too short: ${tldrLength} characters (min: ${CRITERIA.minTldrLength})`);
    } else if (tldrLength > CRITERIA.maxTldrLength) {
      warnings.push(`TLDR too long: ${tldrLength} characters (max: ${CRITERIA.maxTldrLength})`);
    }
  }

  // Validate title length
  if (frontmatter.title) {
    const titleLength = frontmatter.title.length;
    if (titleLength < CRITERIA.minTitleLength) {
      warnings.push(`Title too short: ${titleLength} characters`);
    } else if (titleLength > CRITERIA.maxTitleLength) {
      warnings.push(`Title too long: ${titleLength} characters (max: ${CRITERIA.maxTitleLength})`);
    }
  }

  // Validate SEO title length
  if (frontmatter.seoTitle) {
    const seoTitleLength = frontmatter.seoTitle.length;
    if (seoTitleLength < CRITERIA.minSeoTitleLength) {
      warnings.push(`SEO title too short: ${seoTitleLength} characters (optimal: 50-60)`);
    } else if (seoTitleLength > CRITERIA.maxSeoTitleLength) {
      warnings.push(`SEO title too long: ${seoTitleLength} characters (max: ${CRITERIA.maxSeoTitleLength})`);
    }
  }

  // Validate SEO description length
  if (frontmatter.seoDescription) {
    const seoDescLength = frontmatter.seoDescription.length;
    if (seoDescLength < CRITERIA.minSeoDescLength) {
      warnings.push(`SEO description too short: ${seoDescLength} characters (optimal: 145-155)`);
    } else if (seoDescLength > CRITERIA.maxSeoDescLength) {
      warnings.push(`SEO description too long: ${seoDescLength} characters (max: ${CRITERIA.maxSeoDescLength})`);
    }
  }

  // Validate content sections
  if (frontmatter.contentSections) {
    const sectionCount = Array.isArray(frontmatter.contentSections)
      ? frontmatter.contentSections.length
      : 0;

    if (sectionCount < CRITERIA.minSections) {
      warnings.push(`Too few content sections: ${sectionCount} (min: ${CRITERIA.minSections})`);
    } else if (sectionCount > CRITERIA.maxSections) {
      warnings.push(`Too many content sections: ${sectionCount} (max: ${CRITERIA.maxSections})`);
    }
  }

  // Validate tags
  if (frontmatter.tags) {
    const tagCount = Array.isArray(frontmatter.tags) ? frontmatter.tags.length : 0;
    if (tagCount < 3) {
      warnings.push(`Too few tags: ${tagCount} (recommended: 3-5)`);
    } else if (tagCount > 5) {
      warnings.push(`Too many tags: ${tagCount} (recommended: 3-5)`);
    }
  }

  return { issues, warnings };
}

/**
 * Validate body content
 */
function validateBody(body, filename) {
  const issues = [];
  const warnings = [];

  // Count words
  const wordCount = countWords(body);
  if (wordCount < CRITERIA.minWordCount) {
    warnings.push(`Word count too low: ${wordCount} words (min: ${CRITERIA.minWordCount})`);
  } else if (wordCount > CRITERIA.maxWordCount) {
    warnings.push(`Word count too high: ${wordCount} words (max: ${CRITERIA.maxWordCount})`);
  }

  // Check for major sections
  const sectionMatches = body.match(/^##\s+.+$/gm) || [];
  if (sectionMatches.length < CRITERIA.minSections) {
    warnings.push(`Too few H2 sections: ${sectionMatches.length} (min: ${CRITERIA.minSections})`);
  }

  // Check for summary block
  if (!body.includes('## Summary')) {
    warnings.push('Missing Summary section');
  }

  // Check for introduction
  if (!body.includes('## Introduction')) {
    warnings.push('Missing Introduction section');
  }

  // Check for conclusion
  if (!body.includes('## Conclusion')) {
    warnings.push('Missing Conclusion section');
  }

  return { issues, warnings, wordCount };
}

/**
 * Validate a single article
 */
function validateArticle(filename) {
  stats.total++;

  try {
    const filePath = path.join(ARTICLES_DIR, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const { frontmatter, body } = parseFrontmatter(content);

    const frontmatterValidation = validateFrontmatter(frontmatter, filename);
    const bodyValidation = validateBody(body, filename);

    const allIssues = [...frontmatterValidation.issues, ...bodyValidation.issues];
    const allWarnings = [...frontmatterValidation.warnings, ...bodyValidation.warnings];

    let status = 'PASS';
    if (allIssues.length > 0) {
      status = 'FAIL';
      stats.failed++;
    } else if (allWarnings.length > 0) {
      status = 'WARN';
      stats.warnings++;
    } else {
      stats.passed++;
    }

    if (status !== 'PASS') {
      stats.issues.push({
        filename,
        status,
        wordCount: bodyValidation.wordCount,
        path: frontmatter.path || 'unknown',
        issues: allIssues,
        warnings: allWarnings
      });
    }

    const statusSymbol = status === 'PASS' ? '✓' : status === 'WARN' ? '⚠' : '✗';
    console.log(`${statusSymbol} ${filename} [${status}]`);

  } catch (error) {
    stats.failed++;
    stats.issues.push({
      filename,
      status: 'ERROR',
      issues: [error.message],
      warnings: []
    });
    console.error(`✗ ${filename} [ERROR]: ${error.message}`);
  }
}

/**
 * Generate validation report
 */
function generateReport() {
  let report = `# Article Validation Report\n\n`;
  report += `**Generated**: ${new Date().toISOString()}\n\n`;
  report += `## Summary\n\n`;
  report += `| Metric | Count |\n`;
  report += `|--------|-------|\n`;
  report += `| Total Articles | ${stats.total} |\n`;
  report += `| Passed | ${stats.passed} |\n`;
  report += `| Warnings | ${stats.warnings} |\n`;
  report += `| Failed | ${stats.failed} |\n`;
  report += `| Success Rate | ${((stats.passed / stats.total) * 100).toFixed(1)}% |\n\n`;

  // Group by status
  const failed = stats.issues.filter(i => i.status === 'FAIL' || i.status === 'ERROR');
  const warned = stats.issues.filter(i => i.status === 'WARN');

  if (failed.length > 0) {
    report += `## Failed Articles (${failed.length})\n\n`;
    report += `These articles have critical issues and cannot be promoted to staging:\n\n`;

    failed.forEach(({ filename, wordCount, path, issues, warnings }) => {
      report += `### ${filename}\n\n`;
      report += `- **Path**: ${path}\n`;
      report += `- **Word Count**: ${wordCount || 'unknown'}\n\n`;

      if (issues.length > 0) {
        report += `**Critical Issues**:\n`;
        issues.forEach(issue => {
          report += `- ${issue}\n`;
        });
        report += `\n`;
      }

      if (warnings.length > 0) {
        report += `**Warnings**:\n`;
        warnings.forEach(warning => {
          report += `- ${warning}\n`;
        });
        report += `\n`;
      }
    });
  }

  if (warned.length > 0) {
    report += `## Articles with Warnings (${warned.length})\n\n`;
    report += `These articles can be promoted but should be reviewed:\n\n`;

    warned.forEach(({ filename, wordCount, path, warnings }) => {
      report += `### ${filename}\n\n`;
      report += `- **Path**: ${path}\n`;
      report += `- **Word Count**: ${wordCount || 'unknown'}\n\n`;
      report += `**Warnings**:\n`;
      warnings.forEach(warning => {
        report += `- ${warning}\n`;
      });
      report += `\n`;
    });
  }

  // Distribution by path
  const byPath = {};
  stats.issues.forEach(({ path }) => {
    byPath[path] = (byPath[path] || 0) + 1;
  });

  report += `## Distribution by Learning Path\n\n`;
  report += `| Path | Issues |\n`;
  report += `|------|--------|\n`;
  Object.entries(byPath).sort((a, b) => b[1] - a[1]).forEach(([path, count]) => {
    report += `| ${path} | ${count} |\n`;
  });
  report += `\n`;

  // Next steps
  report += `## Next Steps\n\n`;
  report += `1. **Review Failed Articles**: Fix critical issues in ${failed.length} failed articles\n`;
  report += `2. **Review Warnings**: Address warnings in ${warned.length} articles with warnings\n`;
  report += `3. **Promote Clean Articles**: Move ${stats.passed} passed articles to /staging/\n`;
  report += `4. **Knowledge Graph**: Add missing concepts to knowledge-graph.yaml\n`;
  report += `5. **Final Validation**: Run validation again after fixes\n`;

  return report;
}

/**
 * Main validation function
 */
function validate() {
  console.log('Starting article validation...\n');

  // Get all articles
  const files = fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md'));

  console.log(`Found ${files.length} articles to validate\n`);

  // Validate each article
  files.forEach(filename => validateArticle(filename));

  // Generate and save report
  const report = generateReport();
  fs.writeFileSync(OUTPUT_REPORT, report, 'utf8');

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('VALIDATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total articles:    ${stats.total}`);
  console.log(`Passed:            ${stats.passed}`);
  console.log(`Warnings:          ${stats.warnings}`);
  console.log(`Failed:            ${stats.failed}`);
  console.log(`Success rate:      ${((stats.passed / stats.total) * 100).toFixed(1)}%`);
  console.log('='.repeat(60));

  console.log(`\nDetailed report saved to: ${OUTPUT_REPORT}`);
}

// Run validation
validate();
