import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkResourceDownloads() {
  console.log('Checking resources with download buttons...\n');

  // Check a few articles that should have resource cards
  const articles = ['deep-learning-decoded', 'generative-ai-explained', 'large-language-models'];

  for (const slug of articles) {
    console.log(`=== ${slug} ===`);
    const [article] = await sql`
      SELECT yaml_content FROM articles WHERE slug = ${slug}
    `;

    if (article) {
      const data = JSON.parse(article.yaml_content);
      if (data.additionalResources) {
        console.log(`Found ${data.additionalResources.length} resources:`);
        data.additionalResources.forEach((resource: any, idx: number) => {
          if (typeof resource === 'object') {
            console.log(`  ${idx + 1}. ${resource.title || 'Untitled'}`);
            console.log(`     Type: ${resource.type || 'N/A'}`);
            console.log(`     downloadUrl: ${resource.downloadUrl || 'MISSING'}`);
            console.log(`     previewUrl: ${resource.previewUrl || 'MISSING'}`);
            console.log(`     formats: ${resource.formats || 'MISSING'}`);
          }
        });
      } else {
        console.log('No additionalResources found');
      }
    }
    console.log('');
  }
}

checkResourceDownloads().catch(console.error);
