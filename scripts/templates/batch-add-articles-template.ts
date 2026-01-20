import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Load .env.local manually
const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

/**
 * Template for batch adding multiple articles to the same path
 *
 * Instructions:
 * 1. Set the pathConfig for your learning path
 * 2. Fill in the articles array with your content
 * 3. Run: npx tsx scripts/templates/batch-add-articles-template.ts
 */

interface ArticleData {
  article_id: string;
  title: string;
  slug: string;
  content: {
    tldr: string;
    tags: string[];
    readTime: string;
    updatedDate: string;
    headerImage: string;
    content: string;
    keyLearnings: string[];
    additionalResources: any[];
    sources: any[];
  };
}

async function batchAddArticles() {
  try {
    // ============================================
    // PATH CONFIGURATION
    // ============================================
    const pathConfig = {
      path: 'responsibility',  // Learning path name
      startPosition: 1,        // Starting position number
    };

    // ============================================
    // ARTICLES DATA
    // ============================================
    const articles: ArticleData[] = [
      // Article 1
      {
        article_id: 'resp-01',
        title: 'AI Ethics Fundamentals',
        slug: 'ai-ethics-fundamentals',
        content: {
          tldr: "Introduction to ethical considerations in AI development and deployment",
          tags: ["Ethics", "Governance", "Responsibility"],
          readTime: "7 min read",
          updatedDate: "January 2025",
          headerImage: "/images/responsibility/ai-ethics-fundamentals.webp",
          content: `<h2 class="content-h2"><span class="heading-decoration"></span>Why Ethics Matters</h2>

<div class="content-p">AI systems make decisions that affect real people's lives. Understanding {{CARD|fw-oecd-ai-principles|ethical frameworks}} is essential for responsible deployment.</div>

<div class="content-p">Organizations must balance innovation with responsibility, ensuring their AI systems promote human welfare.</div>

<h2 class="content-h2"><span class="heading-decoration"></span>Core Principles</h2>

<ul class="content-ul">
  <li>Respect for human autonomy and dignity</li>
  <li>Prevention of harm and promotion of well-being</li>
  <li>Fairness and non-discrimination</li>
  <li>Transparency and explainability</li>
</ul>

<div class="content-p">These principles guide organizations toward <em>ethical AI practices</em> that build trust.</div>`,
          keyLearnings: [
            "AI ethics requires balancing innovation with human welfare",
            "Core principles include autonomy, fairness, and transparency",
            "Organizations need frameworks for ethical decision-making"
          ],
          additionalResources: [
            "IEEE Ethically Aligned Design - Comprehensive Framework",
            {
              title: "EU Ethics Guidelines for Trustworthy AI",
              url: "https://ec.europa.eu/digital-strategy/our-policies/european-approach-artificial-intelligence",
              type: "document"
            }
          ],
          sources: [
            {
              title: "The Ethics of Artificial Intelligence",
              author: "Bostrom, N., & Yudkowsky, E.",
              year: 2014,
              url: "https://www.cambridge.org/core/books/abs/cambridge-handbook-of-artificial-intelligence/ethics-of-artificial-intelligence/96619B1DE243E7DF17E8C19B8FAB76FE",
              type: "article"
            }
          ]
        }
      },

      // Article 2
      {
        article_id: 'resp-02',
        title: 'Accountability in AI Systems',
        slug: 'accountability-in-ai-systems',
        content: {
          tldr: "Understanding who is responsible when AI systems make mistakes or cause harm",
          tags: ["Accountability", "Governance", "Legal"],
          readTime: "8 min read",
          updatedDate: "January 2025",
          headerImage: "/images/responsibility/accountability.webp",
          content: `<h2 class="content-h2"><span class="heading-decoration"></span>The Accountability Gap</h2>

<div class="content-p">When an AI system makes a mistake, who is responsible? This question has no simple answer.</div>

<div class="content-p">The {{CARD|ex-air-canada-chatbot|Air Canada chatbot case}} demonstrates how organizations remain accountable for their AI systems' outputs.</div>

<h2 class="content-h2"><span class="heading-decoration"></span>Establishing Clear Lines</h2>

<div class="content-p">Organizations must define accountability before deployment, not after incidents occur.</div>`,
          keyLearnings: [
            "Organizations remain legally responsible for AI outputs",
            "Clear accountability structures must be established before deployment",
            "Documentation and audit trails are essential for accountability"
          ],
          additionalResources: [],
          sources: []
        }
      },

      // Add more articles here...
    ];

    // ============================================
    // VALIDATION
    // ============================================
    console.log(`\n=== BATCH ADD ARTICLES TO '${pathConfig.path}' PATH ===\n`);
    console.log(`Total articles to add: ${articles.length}\n`);

    // Validate all articles first
    for (const article of articles) {
      console.log(`Validating: ${article.title}`);

      // Check article_id doesn't exist
      const existing = await sql`
        SELECT article_id FROM articles WHERE article_id = ${article.article_id}
      `;
      if (existing.length > 0) {
        throw new Error(`Article ID ${article.article_id} already exists!`);
      }

      // Check slug is unique
      const slugExists = await sql`
        SELECT slug FROM articles WHERE slug = ${article.slug}
      `;
      if (slugExists.length > 0) {
        throw new Error(`Slug ${article.slug} already exists!`);
      }

      // Validate cards
      const cardMatches = article.content.content.match(/\{\{CARD\|([^|]+)\|[^}]+\}\}/g);
      if (cardMatches) {
        for (const match of cardMatches) {
          const cardId = match.match(/\{\{CARD\|([^|]+)\|/)?.[1];
          if (!cardId) continue;

          const card = await sql`
            SELECT card_id, status FROM cards WHERE card_id = ${cardId}
          `;

          if (card.length === 0) {
            throw new Error(`Card not found: ${cardId} (in ${article.slug})`);
          }

          if (card[0].status !== 'published') {
            console.warn(`  ⚠️  Card ${cardId} is not published`);
          }
        }
      }

      console.log(`  ✓ Validated\n`);
    }

    // ============================================
    // INSERT ARTICLES
    // ============================================
    console.log('Inserting articles...\n');

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      const position = pathConfig.startPosition + i;

      await sql`
        INSERT INTO articles (
          article_id,
          title,
          slug,
          path,
          position,
          status,
          yaml_content,
          published_at,
          created_at,
          updated_at
        ) VALUES (
          ${article.article_id},
          ${article.title},
          ${article.slug},
          ${pathConfig.path},
          ${position},
          'published',
          ${JSON.stringify(article.content)},
          NOW(),
          NOW(),
          NOW()
        )
      `;

      console.log(`✓ Added: ${article.title} (position ${position})`);

      // Update card links
      const cardMatches = article.content.content.match(/\{\{CARD\|([^|]+)\|[^}]+\}\}/g);
      if (cardMatches) {
        const uniqueCardIds = [...new Set(
          cardMatches.map(m => m.match(/\{\{CARD\|([^|]+)\|/)?.[1]).filter(Boolean)
        )];

        for (const cardId of uniqueCardIds) {
          const card = await sql`
            SELECT used_in_articles FROM cards WHERE card_id = ${cardId}
          `;

          if (card.length > 0) {
            let usedIn: string[] = [];
            if (card[0].used_in_articles) {
              usedIn = Array.isArray(card[0].used_in_articles)
                ? card[0].used_in_articles
                : [];
            }

            if (!usedIn.includes(article.slug)) {
              usedIn.push(article.slug);

              await sql`
                UPDATE cards
                SET used_in_articles = ${usedIn}
                WHERE card_id = ${cardId}
              `;
            }
          }
        }
      }
    }

    // ============================================
    // SUMMARY
    // ============================================
    console.log('\n=== SUMMARY ===');
    console.log(`✅ Successfully added ${articles.length} articles to '${pathConfig.path}' path`);
    console.log('\nArticles:');
    articles.forEach((article, index) => {
      console.log(`  ${pathConfig.startPosition + index}. ${article.title}`);
      console.log(`     → http://localhost:3006/articles/${article.slug}`);
    });
    console.log('\n🎉 All done!\n');

  } catch (error) {
    console.error('\n❌ Error in batch add:', error);
    throw error;
  }
}

// Run the script
batchAddArticles();
