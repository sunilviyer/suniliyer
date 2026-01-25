import { neon } from '@neondatabase/serverless';
import { existsSync } from 'fs';

const sql = neon(process.env.DATABASE_URL!);

async function auditAndSyncImages() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║     IMAGE AUDIT: All 40 Articles Across All Paths           ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get all articles grouped by path
  const articles = await sql`
    SELECT
      article_id,
      slug,
      title,
      path,
      yaml_content,
      position,
      status
    FROM articles
    WHERE path IN ('history', 'terminology', 'risk', 'responsibility', 'future')
    ORDER BY path, position;
  `;

  console.log(`Found ${articles.length} articles across all learning paths\n`);

  const pathGroups: Record<string, any[]> = {
    history: [],
    terminology: [],
    risk: [],
    responsibility: [],
    future: []
  };

  // Group articles by path
  for (const article of articles) {
    const path = article.path as string;
    if (pathGroups[path]) {
      pathGroups[path].push(article);
    }
  }

  const issues = {
    missingImages: [] as string[],
    incorrectFormat: [] as string[],
    needsUpdate: [] as { slug: string; currentImage: string | null; expectedImage: string }[]
  };

  // Check each path
  for (const [path, articles] of Object.entries(pathGroups)) {
    console.log(`\n${'='.repeat(65)}`);
    console.log(`${path.toUpperCase()} (${articles.length} articles)`);
    console.log(`${'='.repeat(65)}\n`);

    for (const article of articles) {
      const slug = article.slug as string;
      const yamlContent = article.yaml_content as string;

      console.log(`${slug}:`);

      // Extract header_image from YAML
      let headerImage: string | null = null;

      // Try JSON format first (responsibility articles)
      try {
        const parsed = JSON.parse(yamlContent);
        headerImage = parsed.headerImage || null;
      } catch {
        // Fall back to YAML regex (future articles)
        const imageMatch = yamlContent?.match(/header_image:\s*["']?([^"'\n]+)["']?/);
        headerImage = imageMatch ? imageMatch[1].trim() : null;
      }

      // Expected image path
      const expectedImage = `/images/${path}/${slug}.webp`;

      if (!headerImage) {
        console.log(`   ❌ No header image found`);
        console.log(`   Expected: ${expectedImage}\n`);
        issues.missingImages.push(slug);
        continue;
      }

      console.log(`   Current: ${headerImage}`);

      // Check if file exists
      const imagePath = `/Volumes/External/aidefence/public${headerImage}`;
      const imageExists = existsSync(imagePath);

      if (!imageExists) {
        console.log(`   ❌ Image file NOT found on filesystem`);
        issues.missingImages.push(slug);
      } else {
        console.log(`   ✅ Image file exists`);
      }

      // Check if it's the expected format
      if (headerImage !== expectedImage) {
        console.log(`   ⚠️  Path mismatch`);
        console.log(`   Expected: ${expectedImage}`);
        issues.needsUpdate.push({ slug, currentImage: headerImage, expectedImage });
      } else {
        console.log(`   ✅ Image path matches expected format`);
      }

      console.log('');
    }
  }

  // Summary
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║                        SUMMARY                               ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  console.log(`📊 Total Articles: ${articles.length}`);
  console.log(`   - History: ${pathGroups.history.length}`);
  console.log(`   - Terminology: ${pathGroups.terminology.length}`);
  console.log(`   - Risk: ${pathGroups.risk.length}`);
  console.log(`   - Responsibility: ${pathGroups.responsibility.length}`);
  console.log(`   - Future: ${pathGroups.future.length}\n`);

  console.log(`✅ Correctly configured: ${articles.length - issues.missingImages.length - issues.needsUpdate.length}`);
  console.log(`❌ Missing images: ${issues.missingImages.length}`);
  console.log(`⚠️  Need path updates: ${issues.needsUpdate.length}\n`);

  if (issues.missingImages.length > 0) {
    console.log('📋 Articles with missing images:');
    issues.missingImages.forEach(slug => console.log(`   - ${slug}`));
    console.log('');
  }

  if (issues.needsUpdate.length > 0) {
    console.log('📋 Articles needing path updates:');
    issues.needsUpdate.forEach(({ slug, currentImage, expectedImage }) => {
      console.log(`   - ${slug}`);
      console.log(`     Current: ${currentImage}`);
      console.log(`     Expected: ${expectedImage}`);
    });
    console.log('');
  }

  console.log('═'.repeat(65) + '\n');
}

auditAndSyncImages().catch(console.error);
