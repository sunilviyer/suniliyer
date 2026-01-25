import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';

const sql = neon(process.env.DATABASE_URL!);

async function verifyPageCardsMatchDB() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║   VERIFY: Page Card Data Matches Database                   ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const paths = ['history', 'terminology', 'risk', 'responsibility', 'future'];

  for (const path of paths) {
    console.log(`\n${'='.repeat(65)}`);
    console.log(`${path.toUpperCase()}`);
    console.log(`${'='.repeat(65)}\n`);

    // Get articles from DB
    const dbArticles = await sql`
      SELECT slug, yaml_content
      FROM articles
      WHERE path = ${path}
      ORDER BY position;
    `;

    console.log(`📊 Database: ${dbArticles.length} articles\n`);

    // Read page file
    const pageContent = readFileSync(`/Volumes/External/aidefence/app/${path}/page.tsx`, 'utf-8');

    // Extract card data from page
    const cardMatch = pageContent.match(new RegExp(`const ${path}Cards = \\[([\\s\\S]*?)\\];`));

    if (!cardMatch) {
      console.log('⚠️  No hardcoded card data found in page\n');
      continue;
    }

    // Count cards in page (count number of slug: occurrences)
    const slugMatches = cardMatch[1].match(/slug: ['"]([^'"]+)['"]/g);
    const pageCardCount = slugMatches ? slugMatches.length : 0;

    console.log(`📄 Page file: ${pageCardCount} hardcoded cards\n`);

    // Compare each article
    let matches = 0;
    let mismatches = 0;

    for (const dbArticle of dbArticles) {
      const slug = dbArticle.slug as string;

      // Extract header_image from DB
      let dbImage: string | null = null;
      try {
        const parsed = JSON.parse(dbArticle.yaml_content as string);
        dbImage = parsed.headerImage || null;
      } catch {
        const yamlContent = dbArticle.yaml_content as string;
        const imageMatch = yamlContent?.match(/header_image:\s*["']?([^"'\n]+)["']?/);
        dbImage = imageMatch ? imageMatch[1].trim() : null;
      }

      // Check if slug exists in page
      const slugRegex = new RegExp(`slug:\\s*['"]${slug}['"]`);
      const existsInPage = slugRegex.test(pageContent);

      // Extract image from page card
      const imagePattern = new RegExp(`slug:\\s*['"]${slug}['"][\\s\\S]*?image:\\s*['"]([^'"]+)['"]`, 'i');
      const imageMatch = pageContent.match(imagePattern);
      const pageImage = imageMatch ? `/images/${path}/${imageMatch[1]}` : null;

      if (!existsInPage) {
        console.log(`❌ ${slug}`);
        console.log(`   Missing from page file\n`);
        mismatches++;
        continue;
      }

      if (dbImage === pageImage) {
        console.log(`✅ ${slug}`);
        console.log(`   ${dbImage}\n`);
        matches++;
      } else {
        console.log(`⚠️  ${slug}`);
        console.log(`   DB:   ${dbImage}`);
        console.log(`   Page: ${pageImage}\n`);
        mismatches++;
      }
    }

    console.log(`✅ Matching: ${matches}/${dbArticles.length}`);
    console.log(`❌ Mismatches: ${mismatches}/${dbArticles.length}\n`);
  }

  console.log('\n═══════════════════════════════════════════════════════════════\n');
}

verifyPageCardsMatchDB().catch(console.error);
