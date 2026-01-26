import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

const fixes = [
  { wrong: 'res-eu-ai-act-classification-walkthrough', correct: 'res-eu-ai-act-classification', articles: ['eu-ai-act-explained'] },
  { wrong: 'fw-singapore-model-framework', correct: 'fw-singapore-model', articles: ['future-ai-regulation', 'global-ai-law-tracker'] },
  { wrong: 'res-hcaid-process-guide', correct: 'res-hcai-design-process', articles: ['future-ai-ethics', 'human-centered-ai'] },
  { wrong: 'res-model-card-template', correct: 'res-transparency-disclosure-templates', articles: ['ai-transparency'] },
  { wrong: 'fw-china-gen-ai-regulations', correct: 'fw-china-ai-governance', articles: ['ai-national-security', 'future-ai-regulation', 'global-ai-law-tracker', 'cross-border-compliance'] },
];

async function fixLayer3Part1() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║    FIX LAYER 3 PART 1: REUSE EXISTING CARDS FROM LAYER 4   ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  let totalFixed = 0;

  for (const fix of fixes) {
    console.log(`Fixing: ${fix.wrong} → ${fix.correct}`);
    
    for (const slug of fix.articles) {
      try {
        const article = await sql`
          SELECT id, yaml_content FROM articles WHERE slug = ${slug}
        `;

        if (article.length === 0) {
          console.log(`  ⚠️  Article not found: ${slug}`);
          continue;
        }

        const yamlContent = article[0].yaml_content as string;
        const parsed = JSON.parse(yamlContent);
        
        if (parsed.content) {
          const oldContent = parsed.content as string;
          const pattern = new RegExp(`\\{\\{CARD\\|${fix.wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\|`, 'g');
          const newContent = oldContent.replace(pattern, `{{CARD|${fix.correct}|`);
          
          if (oldContent !== newContent) {
            parsed.content = newContent;
            const newYamlContent = JSON.stringify(parsed);
            
            await sql`
              UPDATE articles
              SET yaml_content = ${newYamlContent}
              WHERE id = ${article[0].id}
            `;
            
            console.log(`  ✅ ${slug}`);
            totalFixed++;
          } else {
            console.log(`  ⏭️  ${slug} - No changes needed`);
          }
        }
      } catch (error) {
        console.log(`  ❌ ${slug} - Error: ${error}`);
      }
    }
    console.log('');
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`✅ Fixed ${totalFixed} article references`);
  console.log('═══════════════════════════════════════════════════════════════\n');
}

fixLayer3Part1().catch(console.error);
