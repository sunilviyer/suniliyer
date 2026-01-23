import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

interface ValidationIssue {
  type: 'error' | 'warning' | 'info';
  field: string;
  message: string;
}

async function validateRiskArticles() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         RISK ARTICLES VALIDATION REPORT                      ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get all risk articles
  const articles = await sql`
    SELECT article_id, slug, title, path, status, yaml_content
    FROM articles
    WHERE path = 'risk'
    ORDER BY position
  `;

  console.log(`Found ${articles.length} risk articles\n\n`);

  const allIssues: { article: string; issues: ValidationIssue[] }[] = [];
  let totalErrors = 0;
  let totalWarnings = 0;
  let totalInfo = 0;

  for (const article of articles) {
    const issues: ValidationIssue[] = [];

    console.log('═'.repeat(60));
    console.log(`📄 ${article.article_id}: ${article.title}`);
    console.log(`   Slug: ${article.slug}`);
    console.log(`   Status: ${article.status}`);
    console.log('─'.repeat(60));
    console.log();

    // Parse YAML content
    let content: any;
    try {
      content = JSON.parse(article.yaml_content as string);
    } catch (e) {
      issues.push({ type: 'error', field: 'yaml_content', message: 'Invalid JSON in yaml_content' });
      console.log('❌ CRITICAL: Invalid JSON in yaml_content\n');
      continue;
    }

    // 1. Check required fields
    console.log('📋 Required Fields:');
    const requiredFields = ['tldr', 'tags', 'content', 'keyLearnings'];
    for (const field of requiredFields) {
      if (!content[field]) {
        issues.push({ type: 'error', field, message: `Missing required field: ${field}` });
        console.log(`   ❌ ${field}: Missing`);
      } else if (Array.isArray(content[field]) && content[field].length === 0) {
        issues.push({ type: 'warning', field, message: `${field} is empty array` });
        console.log(`   ⚠️  ${field}: Empty array`);
      } else if (typeof content[field] === 'string' && content[field].trim() === '') {
        issues.push({ type: 'warning', field, message: `${field} is empty string` });
        console.log(`   ⚠️  ${field}: Empty string`);
      } else {
        console.log(`   ✅ ${field}: Present`);
      }
    }
    console.log();

    // 2. Check SEO fields
    console.log('🎯 SEO Fields:');
    const seoFields = ['readTime', 'updatedDate', 'headerImage'];
    for (const field of seoFields) {
      if (!content[field]) {
        issues.push({ type: 'warning', field, message: `Missing SEO field: ${field}` });
        console.log(`   ⚠️  ${field}: Missing`);
      } else {
        console.log(`   ✅ ${field}: ${content[field]}`);
      }
    }
    console.log();

    // 3. Check additional resources
    console.log('📚 Additional Resources:');
    if (!content.additionalResources || content.additionalResources.length === 0) {
      issues.push({ type: 'info', field: 'additionalResources', message: 'No additional resources' });
      console.log('   ℹ️  No additional resources');
    } else {
      console.log(`   ✅ ${content.additionalResources.length} resource(s)`);
      content.additionalResources.forEach((res: any, idx: number) => {
        if (typeof res === 'string') {
          console.log(`      ${idx + 1}. [STRING] ${res.substring(0, 50)}...`);
        } else if (res.type && res.title) {
          console.log(`      ${idx + 1}. [${res.type}] ${res.title}`);
          if (res.url) console.log(`         URL: ${res.url}`);
          if (res.path) console.log(`         Path: ${res.path}`);
        } else {
          console.log(`      ${idx + 1}. [UNKNOWN FORMAT]`);
        }
      });
    }
    console.log();

    // 4. Check sources
    console.log('📖 Sources:');
    if (!content.sources || content.sources.length === 0) {
      issues.push({ type: 'warning', field: 'sources', message: 'No sources provided' });
      console.log('   ⚠️  No sources provided');
    } else {
      console.log(`   ✅ ${content.sources.length} source(s)`);
      content.sources.forEach((source: any, idx: number) => {
        if (typeof source === 'string') {
          console.log(`      ${idx + 1}. [STRING] ${source.substring(0, 50)}...`);
        } else if (source.citation) {
          console.log(`      ${idx + 1}. ${source.citation.substring(0, 60)}...`);
        } else {
          console.log(`      ${idx + 1}. [UNKNOWN FORMAT]`);
        }
      });
    }
    console.log();

    // 5. Extract and validate card references from content
    console.log('🎴 Card References:');
    const cardPattern = /\{\{CARD\|([^|]+)\|/g;
    const cardMatches = [...content.content.matchAll(cardPattern)];
    const cardIds = [...new Set(cardMatches.map((match: RegExpMatchArray) => match[1]))];

    if (cardIds.length === 0) {
      console.log('   ℹ️  No card references found in content');
    } else {
      console.log(`   Found ${cardIds.length} unique card(s):`);

      for (const cardId of cardIds) {
        // Check if card exists in database
        const cards = await sql`
          SELECT card_id, card_type, title, status, used_in_articles
          FROM cards
          WHERE card_id = ${cardId}
        `;

        if (cards.length === 0) {
          issues.push({ type: 'error', field: 'cards', message: `Card not found: ${cardId}` });
          console.log(`   ❌ ${cardId}: NOT FOUND in database`);
        } else {
          const card = cards[0];
          if (card.status !== 'published') {
            issues.push({ type: 'warning', field: 'cards', message: `Card ${cardId} is ${card.status}` });
            console.log(`   ⚠️  ${cardId}: ${card.status} (not published)`);
          } else {
            // Check if article is linked to card
            const usedIn = card.used_in_articles || [];
            if (!usedIn.includes(article.slug)) {
              issues.push({ type: 'warning', field: 'cards', message: `Card ${cardId} not linked to ${article.slug}` });
              console.log(`   ⚠️  ${cardId}: Published but not linked to this article`);
            } else {
              console.log(`   ✅ ${cardId}: Published & linked`);
            }
          }
        }
      }
    }
    console.log();

    // 6. Check tags
    if (content.tags && content.tags.length > 0) {
      console.log('🏷️  Tags:');
      console.log(`   ${content.tags.join(', ')}`);
      console.log();
    }

    // 7. Check key learnings
    if (content.keyLearnings && content.keyLearnings.length > 0) {
      console.log('💡 Key Learnings:');
      console.log(`   ${content.keyLearnings.length} learning point(s)`);
      console.log();
    }

    // Collect issues
    if (issues.length > 0) {
      allIssues.push({ article: `${article.article_id} (${article.slug})`, issues });
      totalErrors += issues.filter(i => i.type === 'error').length;
      totalWarnings += issues.filter(i => i.type === 'warning').length;
      totalInfo += issues.filter(i => i.type === 'info').length;
    }
  }

  // Summary
  console.log('\n\n');
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    SUMMARY REPORT                            ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  console.log(`Total Articles Checked: ${articles.length}`);
  console.log(`❌ Errors: ${totalErrors}`);
  console.log(`⚠️  Warnings: ${totalWarnings}`);
  console.log(`ℹ️  Info: ${totalInfo}`);

  if (totalErrors === 0 && totalWarnings === 0) {
    console.log('\n✅ All risk articles are valid!\n');
  } else {
    console.log('\n⚠️  Issues found - details below:\n');

    for (const { article, issues } of allIssues) {
      console.log(`\n${article}:`);
      for (const issue of issues) {
        const icon = issue.type === 'error' ? '❌' : issue.type === 'warning' ? '⚠️' : 'ℹ️';
        console.log(`  ${icon} [${issue.field}] ${issue.message}`);
      }
    }
    console.log();
  }

  console.log('═'.repeat(60));
  console.log();
}

validateRiskArticles().catch(console.error);
