import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function analyzeSimilarResources() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('  ANALYZING SIMILAR EXISTING RESOURCES FOR REFERENCE            ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // Look at similar resources that have PDFs
  const similarResources = [
    'res-accountability-charter', // template
    'res-design-review-checklist', // checklist
    'res-seven-pillars-trustworthy-ai', // framework (compare with implementation version)
    'res-nist-ai-rmf-core-functions', // guide
    'res-ai-impact-identification-framework', // framework
    'res-governance-raci' // template for governance roles
  ];

  for (const cardId of similarResources) {
    const [card] = await sql`
      SELECT card_id, title, trigger_text, summary, full_content
      FROM cards
      WHERE card_id = ${cardId}
    `;

    if (!card) continue;

    console.log(`\n📋 ${card.card_id}`);
    console.log(`   Title: ${card.title}`);
    console.log(`   Type: ${card.full_content?.type || 'N/A'}`);
    console.log(`   Summary: ${card.summary?.substring(0, 150)}...`);
    console.log(`   File: ${card.full_content?.downloadUrl?.split('/').pop() || 'N/A'}`);
  }

  console.log('\n\n═══════════════════════════════════════════════════════════════');
  console.log('  SUGGESTED CONTENT STRUCTURE FOR EACH MISSING RESOURCE         ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  console.log('1. AI ETHICS PRINCIPLES IMPLEMENTATION GUIDE');
  console.log('   Type: Guide/Framework');
  console.log('   Should contain:');
  console.log('   - Common AI ethics principles (transparency, fairness, accountability, etc.)');
  console.log('   - Step-by-step implementation roadmap');
  console.log('   - Practical examples of operationalizing each principle');
  console.log('   - Measurement and assessment criteria');
  console.log('   - Common pitfalls and solutions');
  console.log('   Similar to: res-seven-pillars-trustworthy-ai but focused on ethics\n');

  console.log('2. AI GOVERNANCE CAREER PATHWAYS MAP');
  console.log('   Type: Guide/Matrix');
  console.log('   Should contain:');
  console.log('   - Career progression paths (entry → mid → senior → executive)');
  console.log('   - Role descriptions (AI Ethics Officer, AI Compliance Manager, etc.)');
  console.log('   - Required skills for each role');
  console.log('   - Certifications and qualifications');
  console.log('   - Salary ranges and market demand');
  console.log('   Similar to: res-governance-raci but focused on career development\n');

  console.log('3. AI NATIONAL SECURITY RISK ASSESSMENT');
  console.log('   Type: Framework/Assessment');
  console.log('   Should contain:');
  console.log('   - Dual-use risk evaluation framework');
  console.log('   - Adversarial threat assessment matrix');
  console.log('   - Supply chain vulnerability checklist');
  console.log('   - Export control considerations');
  console.log('   - Classification guidance (sensitive vs. public)');
  console.log('   Similar to: res-ai-impact-identification-framework\n');

  console.log('4. OPEN-WEIGHT MODELS COMPLIANCE CHECKLIST');
  console.log('   Type: Checklist');
  console.log('   Should contain:');
  console.log('   - License compliance verification steps');
  console.log('   - Common open-weight licenses (Apache 2.0, MIT, Llama, etc.)');
  console.log('   - Commercial use restrictions');
  console.log('   - Attribution requirements');
  console.log('   - Model modification rights');
  console.log('   - Liability and warranty considerations');
  console.log('   Similar to: res-design-review-checklist\n');

  console.log('5. AI REGULATORY HORIZON SCANNER');
  console.log('   Type: Framework/Tool');
  console.log('   Should contain:');
  console.log('   - Global AI regulations tracking template');
  console.log('   - Key jurisdictions (EU, US, China, UK, etc.)');
  console.log('   - Regulation assessment criteria');
  console.log('   - Impact scoring methodology');
  console.log('   - Action planning framework');
  console.log('   - Early warning signals checklist');
  console.log('   Similar to: res-compliance-crosswalk-builder\n');

  console.log('6. SEVEN PILLARS IMPLEMENTATION GUIDE');
  console.log('   Type: Implementation Guide');
  console.log('   Should contain:');
  console.log('   - The 7 pillars operationalized');
  console.log('   - Measurable practices for each pillar');
  console.log('   - Controls and governance mechanisms');
  console.log('   - Implementation roadmap');
  console.log('   - Success metrics and KPIs');
  console.log('   - Audit and verification procedures');
  console.log('   Companion to: res-seven-pillars-trustworthy-ai (framework version)\n');

  console.log('\n═══════════════════════════════════════════════════════════════');
}

analyzeSimilarResources().catch(console.error);
