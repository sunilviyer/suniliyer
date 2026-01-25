import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function createResourceCards() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║   CREATING RESOURCE CARDS FOR FUTURE & RESPONSIBILITY        ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const resourceCards = [
    // RESPONSIBILITY ARTICLES
    { card_id: 'res-eu-ai-act-classification', title: 'EU AI Act Classification Walkthrough', card_type: 'resource', summary: 'Step-by-step guide to classify your AI system under the EU AI Act risk pyramid—determine if your system is Unacceptable, High-Risk, Limited-Risk, or Minimal-Risk.', trigger_text: 'EU AI Act Classification', full_content: { tags: ['EU AI Act', 'Compliance', 'Risk Assessment'] }, used_in_articles: ['eu-ai-act-explained'], download_url: '/downloads/resources/eu-ai-act-classification-walkthrough.pdf', status: 'published' },
    { card_id: 'res-high-risk-ai-requirements', title: 'High-Risk AI Requirements Checklist', card_type: 'resource', summary: 'Comprehensive checklist covering all Article 8-15 requirements for high-risk AI systems—from risk management to human oversight.', trigger_text: 'High-Risk Requirements', full_content: { tags: ['EU AI Act', 'High-Risk AI', 'Compliance'] }, used_in_articles: ['eu-ai-act-explained'], download_url: '/downloads/resources/high-risk-ai-requirements-checklist.pdf', status: 'published' },
    { card_id: 'res-nist-ai-rmf-core-functions', title: 'NIST AI RMF Core Functions Guide', card_type: 'resource', summary: 'Practical implementation guide for the four NIST AI RMF functions—Govern, Map, Measure, Manage—with templates and examples.', trigger_text: 'NIST Core Functions', full_content: { tags: ['NIST', 'Risk Management', 'Framework'] }, used_in_articles: ['nist-ai-rmf'], download_url: '/downloads/resources/nist-ai-rmf-core-functions.pdf', status: 'published' },
    { card_id: 'res-iso-42001-certification-journey', title: 'ISO/IEC 42001 Certification Journey', card_type: 'resource', summary: 'End-to-end roadmap for achieving ISO/IEC 42001 certification—from gap analysis to Stage 2 audit success.', trigger_text: 'ISO Certification Path', full_content: { tags: ['ISO 42001', 'Certification', 'Standards'] }, used_in_articles: ['iso-42001'], download_url: '/downloads/resources/iso-42001-certification-journey.pdf', status: 'published' },
    { card_id: 'res-transparency-disclosure-templates', title: 'AI Transparency Disclosure Templates', card_type: 'resource', summary: 'Layered disclosure templates including Model Cards, Datasheets for Datasets, and plain-language AI statements for different stakeholder groups.', trigger_text: 'Disclosure Templates', full_content: { tags: ['Transparency', 'Documentation', 'Best Practice'] }, used_in_articles: ['ai-transparency'], download_url: '/downloads/resources/model-card-template.pdf', status: 'published' },
    { card_id: 'res-accountability-charter', title: 'AI Accountability Charter Template', card_type: 'resource', summary: 'Organizational charter template designating clear accountability for AI systems—solves the Many Hands Problem through role definition and escalation paths.', trigger_text: 'Accountability Charter', full_content: { tags: ['Accountability', 'Governance', 'Templates'] }, used_in_articles: ['ai-accountability'], download_url: '/downloads/resources/accountability-charter-template.pdf', status: 'published' },
    { card_id: 'res-hcai-design-process', title: 'Human-Centered AI Design Process Guide', card_type: 'resource', summary: 'Practical process guide for implementing Human-Centered AI—from automation level selection to meaningful human oversight design.', trigger_text: 'HCAI Process', full_content: { tags: ['Human-Centered AI', 'Design', 'Best Practice'] }, used_in_articles: ['human-centered-ai'], download_url: '/downloads/resources/hcaid-process-guide.pdf', status: 'published' },
    { card_id: 'res-compliance-crosswalk-builder', title: 'Global AI Compliance Crosswalk Builder', card_type: 'resource', summary: 'Interactive tool to map equivalent requirements across EU AI Act, US regulations, UK framework, and other jurisdictions—builds your compliance matrix.', trigger_text: 'Compliance Crosswalk', full_content: { tags: ['Compliance', 'Global', 'Regulations'] }, used_in_articles: ['global-ai-law-tracker', 'cross-border-compliance'], download_url: '/downloads/resources/compliance-crosswalk-builder.pdf', status: 'published' },

    // FUTURE ARTICLES
    { card_id: 'res-agi-signal-noise-framework', title: 'AGI Signal vs. Noise Framework', card_type: 'resource', summary: 'Critical analysis framework to separate genuine AGI progress from hype—evaluates claims against technical benchmarks and governance readiness.', trigger_text: 'AGI Evaluation', full_content: { tags: ['AGI', 'Evaluation', 'Governance'] }, used_in_articles: ['agi-governance'], download_url: '/downloads/resources/agi-signal-noise-framework.pdf', status: 'published' },
    { card_id: 'res-taxonomy-of-ai-harms', title: 'Taxonomy of AI Harms', card_type: 'resource', summary: 'Comprehensive classification of potential AI risks—from individual discrimination to existential threats—with severity assessment framework.', trigger_text: 'AI Harm Categories', full_content: { tags: ['Risk', 'Safety', 'Taxonomy'] }, used_in_articles: ['ai-existential-risk'], download_url: '/downloads/resources/taxonomy-of-ai-harms.pdf', status: 'published' },
    { card_id: 'res-ai-national-security-assessment', title: 'AI National Security Risk Assessment', card_type: 'resource', summary: 'Framework for assessing AI systems with national security implications—evaluates dual-use risks, adversarial threats, and supply chain vulnerabilities.', trigger_text: 'Security Assessment', full_content: { tags: ['National Security', 'Risk', 'Defense'] }, used_in_articles: ['ai-national-security'], download_url: '/downloads/resources/ai-impact-identification-framework.pdf', status: 'published' },
    { card_id: 'res-ai-incident-response-playbook', title: 'AI Safety Incident Response Playbook', card_type: 'resource', summary: 'Operational playbook for responding to AI safety incidents—from detection to remediation and post-incident learning.', trigger_text: 'Incident Response', full_content: { tags: ['Safety', 'Incident Response', 'Operations'] }, used_in_articles: ['ai-safety'], download_url: '/downloads/resources/ai-incident-response-playbook.pdf', status: 'published' },
    { card_id: 'res-ai-ethics-principles-implementation', title: 'AI Ethics Principles Implementation Guide', card_type: 'resource', summary: 'Practical guide to operationalize high-level AI ethics principles—bridges the gap between values statements and concrete practices.', trigger_text: 'Ethics Implementation', full_content: { tags: ['Ethics', 'Implementation', 'Best Practice'] }, used_in_articles: ['future-ai-ethics'], download_url: '/downloads/resources/privacy-by-design-framework.pdf', status: 'published' },
    { card_id: 'res-regulatory-horizon-scanner', title: 'AI Regulatory Horizon Scanner', card_type: 'resource', summary: 'Monitoring framework to track emerging AI regulations globally—identifies regulatory signals and assesses impact on your organization.', trigger_text: 'Regulation Tracking', full_content: { tags: ['Regulation', 'Monitoring', 'Global'] }, used_in_articles: ['future-ai-regulation'], download_url: '/downloads/resources/compliance-crosswalk-builder.pdf', status: 'published' },
    { card_id: 'res-ai-governance-career-pathways', title: 'AI Governance Career Pathways Map', card_type: 'resource', summary: 'Career development guide for AI governance professionals—maps roles, required skills, certifications, and progression paths.', trigger_text: 'Career Pathways', full_content: { tags: ['Careers', 'Skills', 'Professional Development'] }, used_in_articles: ['ai-governance-careers'], download_url: '/downloads/resources/design-review-checklist.pdf', status: 'published' },
    { card_id: 'res-seven-pillars-implementation', title: 'Seven Pillars of Trustworthy AI Implementation', card_type: 'resource', summary: 'Operational framework for the seven pillars of trustworthy AI—turns principles into measurable practices and controls.', trigger_text: 'Seven Pillars', full_content: { tags: ['Trustworthy AI', 'Framework', 'Implementation'] }, used_in_articles: ['trustworthy-ai'], download_url: '/downloads/resources/seven-pillars-trustworthy-ai.pdf', status: 'published' },
  ];

  let successCount = 0;
  let errorCount = 0;
  let skippedCount = 0;

  for (const card of resourceCards) {
    try {
      // Check if card already exists
      const existing = await sql`
        SELECT card_id FROM cards WHERE card_id = ${card.card_id};
      `;

      if (existing.length > 0) {
        console.log(`⏭️  ${card.card_id} - Already exists, skipping\n`);
        skippedCount++;
        continue;
      }

      // Insert new card
      await sql`
        INSERT INTO cards (
          card_id, title, card_type, summary, trigger_text,
          full_content, used_in_articles, download_url, status
        ) VALUES (
          ${card.card_id},
          ${card.title},
          ${card.card_type},
          ${card.summary},
          ${card.trigger_text},
          ${JSON.stringify(card.full_content)},
          ${card.used_in_articles},
          ${card.download_url},
          ${card.status}
        );
      `;

      console.log(`✅ ${card.card_id}`);
      console.log(`   Title: ${card.title}`);
      console.log(`   Used in: ${card.used_in_articles.join(', ')}`);
      console.log(`   Download: ${card.download_url}\n`);
      successCount++;

    } catch (error) {
      console.log(`❌ ${card.card_id} - Error: ${error}\n`);
      errorCount++;
    }
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`\n✅ Successfully created: ${successCount}`);
  console.log(`⏭️  Skipped (already exist): ${skippedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`\n📊 TOTAL CARDS: ${successCount + skippedCount}\n`);
  console.log('═══════════════════════════════════════════════════════════════\n');
}

createResourceCards().catch(console.error);
