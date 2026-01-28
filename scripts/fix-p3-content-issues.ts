import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixP3ContentIssues() {
  console.log('Starting P3 content fixes...\n');

  // ==== 1. Fix "course" → "learning path" in what-ai-actually-is ====
  console.log('=== Fixing "course" → "learning path" ===');
  const [whatAiActuallyIs] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'what-ai-actually-is'
  `;

  if (whatAiActuallyIs) {
    let data = JSON.parse(whatAiActuallyIs.yaml_content);
    data.content = data.content.replace(/throughout this course/gi, 'throughout this learning path');
    await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(data)}
      WHERE slug = 'what-ai-actually-is'
    `;
    console.log('✓ Fixed "course" → "learning path" in what-ai-actually-is\n');
  }

  // ==== 2. Remove sentence from large-language-models ====
  console.log('=== Removing hallucination sentence from LLM article ===');
  const [llm] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'large-language-models'
  `;

  if (llm) {
    let data = JSON.parse(llm.yaml_content);
    data.content = data.content.replace(
      /For a deeper understanding of this phenomenon, see our article on AI Hallucinations\./gi,
      ''
    );
    // Clean up any double spaces or empty paragraphs
    data.content = data.content.replace(/\s{2,}/g, ' ');
    await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(data)}
      WHERE slug = 'large-language-models'
    `;
    console.log('✓ Removed hallucination reference sentence from large-language-models\n');
  }

  // ==== 3. Convert H100 GPU card to plain text in ai-technology-stack ====
  console.log('=== Converting H100 GPU card to plain text in ai-technology-stack ===');
  const [techStack] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'ai-technology-stack'
  `;

  if (techStack) {
    let data = JSON.parse(techStack.yaml_content);
    // Find H100 GPU card reference and convert to plain text
    data.content = data.content.replace(
      /\{\{CARD\|stat-h100-gpu-cost\|[^}]+\}\}/gi,
      'cost of a single high-end H100 GPU ($25,000-$40,000)'
    );
    await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(data)}
      WHERE slug = 'ai-technology-stack'
    `;
    console.log('✓ Converted H100 GPU card to plain text in ai-technology-stack\n');
  }

  // ==== 4. Convert cards to plain text in ai-compute ====
  console.log('=== Converting cards to plain text in ai-compute ===');
  const [aiCompute] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'ai-compute'
  `;

  if (aiCompute) {
    let data = JSON.parse(aiCompute.yaml_content);
    // H100 GPU cost
    data.content = data.content.replace(
      /\{\{CARD\|stat-h100-gpu-cost\|[^}]+\}\}/gi,
      'cost of a single high-end H100 GPU ($25,000-$40,000)'
    );
    // Organization AI compute
    data.content = data.content.replace(
      /\{\{CARD\|stat-organization-ai-compute\|[^}]+\}\}/gi,
      'organization AI compute infrastructure (as seen in the previous article)'
    );
    await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(data)}
      WHERE slug = 'ai-compute'
    `;
    console.log('✓ Converted GPU and compute cards to plain text in ai-compute\n');
  }

  // ==== 5. Convert AI Hallucination card to plain text in ai-hallucinations ====
  console.log('=== Converting hallucination card to plain text ===');
  const [hallucinations] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'ai-hallucinations'
  `;

  if (hallucinations) {
    let data = JSON.parse(hallucinations.yaml_content);
    // Convert hallucination card reference to plain text
    data.content = data.content.replace(
      /\{\{CARD\|concept-ai-hallucination\|[^}]+\}\}/gi,
      'AI hallucinations'
    );
    data.content = data.content.replace(
      /\{\{CARD\|concept-hallucination\|[^}]+\}\}/gi,
      'hallucinations'
    );
    await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(data)}
      WHERE slug = 'ai-hallucinations'
    `;
    console.log('✓ Converted hallucination card to plain text in ai-hallucinations\n');
  }

  // ==== 6. Check and fix RPA vs AI card ====
  console.log('=== Checking RPA vs AI card ===');
  const [rpaCard] = await sql`
    SELECT card_id, title, summary, full_content
    FROM cards
    WHERE card_id LIKE '%rpa%' OR card_id LIKE '%robotic-process%'
    LIMIT 5
  `;

  if (rpaCard) {
    console.log(`✓ Found card: ${rpaCard.card_id}`);
    console.log(`  Summary length: ${rpaCard.summary?.length || 0} chars`);
    console.log(`  Content length: ${rpaCard.full_content?.length || 0} chars`);
    if (!rpaCard.summary || rpaCard.summary.length < 50) {
      console.log('  ⚠️  Card appears incomplete - may need manual review\n');
    } else {
      console.log('  ✓ Card appears complete\n');
    }
  }

  console.log('✅ All P3 content fixes completed!');
  console.log('\nManual review needed for:');
  console.log('- RPA vs AI card completeness');
  console.log('- Future of AI Ethics repeated examples');
  console.log('- Governance Careers repeated cards');
}

fixP3ContentIssues().catch(console.error);
