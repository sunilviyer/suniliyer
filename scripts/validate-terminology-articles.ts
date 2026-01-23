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
  article_id: string;
  field: string;
  issue: string;
  severity: 'error' | 'warning' | 'info';
}

async function validateTerminologyArticles() {
  const issues: ValidationIssue[] = [];

  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║      TERMINOLOGY ARTICLES VALIDATION REPORT                  ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get all terminology articles
  const articles = await sql`
    SELECT article_id, title, slug, yaml_content, status
    FROM articles
    WHERE path = 'terminology'
    ORDER BY position
  `;

  console.log(`Found ${articles.length} terminology articles\n`);

  for (const article of articles) {
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`📄 ${article.article_id}: ${article.title}`);
    console.log(`   Slug: ${article.slug}`);
    console.log(`   Status: ${article.status}`);
    console.log(`${'─'.repeat(60)}`);

    let content;
    try {
      content = typeof article.yaml_content === 'string'
        ? JSON.parse(article.yaml_content)
        : article.yaml_content;
    } catch (e) {
      issues.push({
        article_id: article.article_id,
        field: 'yaml_content',
        issue: 'Failed to parse JSON',
        severity: 'error'
      });
      console.log('❌ CRITICAL: Failed to parse yaml_content JSON');
      continue;
    }

    // Check required fields
    const requiredFields = ['tldr', 'tags', 'content', 'keyLearnings'];
    console.log('\n📋 Required Fields:');
    for (const field of requiredFields) {
      if (!content[field]) {
        issues.push({
          article_id: article.article_id,
          field,
          issue: 'Missing required field',
          severity: 'error'
        });
        console.log(`   ❌ ${field}: MISSING`);
      } else {
        console.log(`   ✅ ${field}: Present`);
      }
    }

    // Check SEO fields
    const seoFields = ['readTime', 'updatedDate', 'headerImage'];
    console.log('\n🎯 SEO Fields:');
    for (const field of seoFields) {
      if (!content[field]) {
        issues.push({
          article_id: article.article_id,
          field,
          issue: 'Missing SEO field',
          severity: 'warning'
        });
        console.log(`   ⚠️  ${field}: MISSING`);
      } else {
        console.log(`   ✅ ${field}: ${content[field]}`);
      }
    }

    // Check additional resources
    console.log('\n📚 Additional Resources:');
    if (!content.additionalResources) {
      issues.push({
        article_id: article.article_id,
        field: 'additionalResources',
        issue: 'Missing additionalResources field',
        severity: 'warning'
      });
      console.log('   ⚠️  Not present');
    } else if (Array.isArray(content.additionalResources)) {
      if (content.additionalResources.length === 0) {
        console.log('   ℹ️  Empty array (no resources)');
      } else {
        console.log(`   ✅ ${content.additionalResources.length} resource(s)`);
        content.additionalResources.forEach((res: any, idx: number) => {
          if (typeof res === 'string') {
            console.log(`      ${idx + 1}. [STRING] ${res.substring(0, 50)}...`);
          } else {
            console.log(`      ${idx + 1}. [${res.type?.toUpperCase() || 'OBJECT'}] ${res.title}`);
            if (res.url) console.log(`         URL: ${res.url}`);
          }
        });
      }
    }

    // Check sources
    console.log('\n📖 Sources:');
    if (!content.sources) {
      issues.push({
        article_id: article.article_id,
        field: 'sources',
        issue: 'Missing sources field',
        severity: 'info'
      });
      console.log('   ℹ️  Not present');
    } else if (Array.isArray(content.sources)) {
      if (content.sources.length === 0) {
        console.log('   ℹ️  Empty array (no sources)');
      } else {
        console.log(`   ✅ ${content.sources.length} source(s)`);
        content.sources.forEach((src: any, idx: number) => {
          if (typeof src === 'string') {
            console.log(`      ${idx + 1}. [STRING] ${src.substring(0, 50)}...`);
          } else {
            console.log(`      ${idx + 1}. ${src.title || src.author || 'Unknown'}`);
          }
        });
      }
    }

    // Extract and validate cards
    if (content.content) {
      const cardMatches = content.content.match(/\{\{CARD\|([^|]+)\|[^}]+\}\}/g);

      console.log('\n🎴 Card References:');
      if (!cardMatches || cardMatches.length === 0) {
        console.log('   ℹ️  No cards referenced');
      } else {
        const uniqueCardIds = [...new Set(
          cardMatches.map((m: string) => m.match(/\{\{CARD\|([^|]+)\|/)?.[1]).filter(Boolean)
        )];

        console.log(`   Found ${uniqueCardIds.length} unique card(s):`);

        for (const cardId of uniqueCardIds) {
          const card = await sql`
            SELECT card_id, status, used_in_articles FROM cards WHERE card_id = ${cardId}
          `;

          if (card.length === 0) {
            issues.push({
              article_id: article.article_id,
              field: 'cards',
              issue: `Card not found: ${cardId}`,
              severity: 'error'
            });
            console.log(`   ❌ ${cardId}: NOT FOUND IN DATABASE`);
          } else if (card[0].status !== 'published') {
            issues.push({
              article_id: article.article_id,
              field: 'cards',
              issue: `Card not published: ${cardId} (${card[0].status})`,
              severity: 'warning'
            });
            console.log(`   ⚠️  ${cardId}: ${card[0].status.toUpperCase()}`);
          } else {
            const linkedToArticle = card[0].used_in_articles?.includes(article.slug);
            if (!linkedToArticle) {
              issues.push({
                article_id: article.article_id,
                field: 'cards',
                issue: `Card not linked: ${cardId}`,
                severity: 'warning'
              });
              console.log(`   ⚠️  ${cardId}: Published but NOT linked to article`);
            } else {
              console.log(`   ✅ ${cardId}: Published & linked`);
            }
          }
        }
      }
    }

    // Check tags format
    if (content.tags && Array.isArray(content.tags)) {
      console.log('\n🏷️  Tags:');
      console.log(`   ${content.tags.join(', ')}`);
    }

    // Check key learnings count
    if (content.keyLearnings && Array.isArray(content.keyLearnings)) {
      console.log('\n💡 Key Learnings:');
      console.log(`   ${content.keyLearnings.length} learning point(s)`);
      if (content.keyLearnings.length < 3) {
        issues.push({
          article_id: article.article_id,
          field: 'keyLearnings',
          issue: `Only ${content.keyLearnings.length} key learnings (recommended: 3-5)`,
          severity: 'info'
        });
        console.log(`   ℹ️  Recommended: 3-5 key learnings`);
      }
    }
  }

  // Summary report
  console.log('\n\n');
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    SUMMARY REPORT                            ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const errors = issues.filter(i => i.severity === 'error');
  const warnings = issues.filter(i => i.severity === 'warning');
  const infos = issues.filter(i => i.severity === 'info');

  console.log(`Total Articles Checked: ${articles.length}`);
  console.log(`❌ Errors: ${errors.length}`);
  console.log(`⚠️  Warnings: ${warnings.length}`);
  console.log(`ℹ️  Info: ${infos.length}\n`);

  if (errors.length > 0) {
    console.log('❌ ERRORS:\n');
    errors.forEach(issue => {
      console.log(`   ${issue.article_id} → ${issue.field}: ${issue.issue}`);
    });
    console.log();
  }

  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:\n');
    warnings.forEach(issue => {
      console.log(`   ${issue.article_id} → ${issue.field}: ${issue.issue}`);
    });
    console.log();
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All terminology articles are valid!\n');
  }

  console.log('═'.repeat(60));
  console.log();
}

validateTerminologyArticles().catch(console.error);
