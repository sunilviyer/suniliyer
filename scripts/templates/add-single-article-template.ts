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
 * Template for adding a single article to the database
 *
 * Instructions:
 * 1. Update the articleData object with your content
 * 2. Ensure all card IDs exist in the cards table
 * 3. Run: npx tsx scripts/templates/add-single-article-template.ts
 */

async function addArticle() {
  try {
    // ============================================
    // ARTICLE METADATA
    // ============================================
    const metadata = {
      article_id: 'history-09',           // Format: path-##
      title: 'Your Article Title',        // Display title
      slug: 'your-article-slug',          // URL slug (lowercase, hyphens)
      path: 'history',                    // history | risk | terminology | responsibility | future
      position: 9,                        // Order in path (1-indexed)
    };

    // ============================================
    // ARTICLE CONTENT
    // ============================================
    const content = {
      // Required: One-sentence summary
      tldr: "Brief summary of what readers will learn from this article",

      // Required: Category tags (3-4 recommended)
      tags: [
        "Category 1",
        "Category 2",
        "Category 3"
      ],

      // Recommended: Reading time
      readTime: "8 min read",

      // Recommended: Update date
      updatedDate: "January 2025",

      // Recommended: Header image path
      headerImage: "/images/history/your-article-slug.webp",

      // Required: HTML content with card markers
      content: `<h2 class="content-h2"><span class="heading-decoration"></span>First Section Title</h2>

<div class="content-p">Opening paragraph introducing the topic. You can reference {{CARD|card-id-here|clickable trigger text}} inline within sentences.</div>

<div class="content-p">Second paragraph building on the first. Keep paragraphs focused on one main idea.</div>

<h2 class="content-h2"><span class="heading-decoration"></span>Second Section Title</h2>

<div class="content-p">Continue developing your argument or explanation here.</div>

<ul class="content-ul">
  <li>Bullet point one</li>
  <li>Bullet point with {{CARD|another-card-id|inline reference}}</li>
  <li>Bullet point three</li>
</ul>

<div class="content-p">Final thoughts with <em>emphasized text</em> for subtle highlighting.</div>`,

      // Required: Key learnings (3-5 points)
      keyLearnings: [
        "First key takeaway that readers should remember",
        "Second important learning point",
        "Third critical insight",
        "Optional fourth point"
      ],

      // Optional: Additional resources
      additionalResources: [
        // Simple string format
        "Resource Title - Brief Description",

        // Rich object format with link
        {
          title: "NIST AI Risk Management Framework",
          url: "https://www.nist.gov/ai-rmf",
          type: "pdf",
          description: "Official framework for managing AI risks"
        },

        // Video resource
        {
          title: "Introduction to AI Governance",
          url: "https://www.youtube.com/watch?v=example",
          type: "video",
          description: "60-minute tutorial on AI governance fundamentals"
        },

        // Excel/tool resource
        {
          title: "Risk Assessment Template",
          url: "/downloads/risk-assessment-template.xlsx",
          type: "excel",
          description: "Template for assessing AI deployment risks"
        }
      ],

      // Optional: Sources and references
      sources: [
        // Simple citation string
        "Author, A. (2023). Title of Work. Publisher.",

        // Rich academic citation
        {
          title: "Concrete Problems in AI Safety",
          author: "Amodei, D., Olah, C., et al.",
          year: 2016,
          url: "https://arxiv.org/abs/1606.06565",
          type: "article",
          description: "Foundational paper on AI safety research"
        },

        // Government report
        {
          title: "National AI Initiative",
          author: "National AI Initiative Office",
          year: 2023,
          url: "https://www.ai.gov/strategic-plan/",
          type: "document"
        }
      ]
    };

    // ============================================
    // VALIDATION
    // ============================================
    console.log('Validating article data...\n');

    // Check article_id doesn't already exist
    const existing = await sql`
      SELECT article_id FROM articles WHERE article_id = ${metadata.article_id}
    `;

    if (existing.length > 0) {
      throw new Error(`Article ID ${metadata.article_id} already exists!`);
    }

    // Check slug is unique
    const slugExists = await sql`
      SELECT slug FROM articles WHERE slug = ${metadata.slug}
    `;

    if (slugExists.length > 0) {
      throw new Error(`Slug ${metadata.slug} already exists!`);
    }

    // Extract and validate card IDs
    const cardMatches = content.content.match(/\{\{CARD\|([^|]+)\|[^}]+\}\}/g);
    if (cardMatches) {
      console.log(`Found ${cardMatches.length} card markers:`);

      for (const match of cardMatches) {
        const cardId = match.match(/\{\{CARD\|([^|]+)\|/)?.[1];
        if (!cardId) continue;

        const card = await sql`
          SELECT card_id, status, used_in_articles FROM cards WHERE card_id = ${cardId}
        `;

        if (card.length === 0) {
          throw new Error(`Card not found: ${cardId}`);
        }

        if (card[0].status !== 'published') {
          console.warn(`  ⚠️  Card ${cardId} is not published (status: ${card[0].status})`);
        } else {
          console.log(`  ✓ ${cardId}`);
        }
      }
    }

    console.log('\n✓ Validation complete\n');

    // ============================================
    // INSERT ARTICLE
    // ============================================
    console.log('Inserting article...');

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
        ${metadata.article_id},
        ${metadata.title},
        ${metadata.slug},
        ${metadata.path},
        ${metadata.position},
        'published',
        ${JSON.stringify(content)},
        NOW(),
        NOW(),
        NOW()
      )
    `;

    console.log('\n✅ Article added successfully!');
    console.log(`   Article ID: ${metadata.article_id}`);
    console.log(`   Slug: ${metadata.slug}`);
    console.log(`   URL: http://localhost:3006/articles/${metadata.slug}`);

    // ============================================
    // UPDATE CARD LINKS (if needed)
    // ============================================
    if (cardMatches) {
      console.log('\nUpdating card links...');

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

          if (!usedIn.includes(metadata.slug)) {
            usedIn.push(metadata.slug);

            await sql`
              UPDATE cards
              SET used_in_articles = ${usedIn}
              WHERE card_id = ${cardId}
            `;

            console.log(`  ✓ Linked ${cardId} to ${metadata.slug}`);
          }
        }
      }
    }

    console.log('\n🎉 All done! Visit the article at:');
    console.log(`   http://localhost:3006/articles/${metadata.slug}\n`);

  } catch (error) {
    console.error('\n❌ Error adding article:', error);
    throw error;
  }
}

// Run the script
addArticle();
