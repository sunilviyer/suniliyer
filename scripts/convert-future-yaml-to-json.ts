import { neon } from '@neondatabase/serverless';
import * as yaml from 'js-yaml';

const sql = neon(process.env.DATABASE_URL!);

async function convertFutureYamlToJson() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║        CONVERT FUTURE ARTICLES YAML → JSON                   ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  //Get all future articles
  const articles = await sql`
    SELECT id, slug, yaml_content
    FROM articles
    WHERE path = 'future'
    ORDER BY position;
  `;

  console.log(`Found ${articles.length} future articles\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const article of articles) {
    const slug = article.slug as string;
    const yamlContent = article.yaml_content as string;

    try {
      // Try parsing as JSON first - if it works, skip
      try {
        JSON.parse(yamlContent);
        console.log(`⏭️  ${slug} - Already JSON format`);
        continue;
      } catch {
        // Not JSON, proceed with conversion
      }

      // Parse YAML to object
      const parsedData = yaml.load(yamlContent);

      // Convert back to JSON string
      const jsonContent = JSON.stringify(parsedData);

      // Update in database
      await sql`
        UPDATE articles
        SET yaml_content = ${jsonContent}
        WHERE id = ${article.id}
      `;

      console.log(`✅ ${slug} - Converted to JSON`);
      successCount++;

    } catch (error) {
      console.log(`❌ ${slug} - Error: ${error}`);
      errorCount++;
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(`✅ Successfully converted: ${successCount}/${articles.length}`);
  console.log(`❌ Errors: ${errorCount}/${articles.length}`);
  console.log('═══════════════════════════════════════════════════════════════\n');
}

convertFutureYamlToJson().catch(console.error);
