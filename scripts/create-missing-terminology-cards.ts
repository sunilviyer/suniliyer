import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

async function createTerminologyCards() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║      CREATING MISSING TERMINOLOGY CARDS                      ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const cards = [
    // INSIGHT CARDS
    {
      card_id: 'insight-nvidia-market-share',
      card_type: 'insight',
      title: 'NVIDIA AI Chip Market Dominance',
      trigger_text: 'NVIDIA\'s market dominance',
      summary: 'NVIDIA controls over 80% of the AI chip market, with H100 GPUs becoming the de facto standard for training large language models. This concentration creates vendor lock-in and supply chain vulnerabilities.',
      status: 'published',
      used_in_articles: ['ai-technology-stack', 'ai-compute'],
      full_content: {
        stat: 'NVIDIA controls 80-95% of AI accelerator market share',
        source: 'Jon Peddie Research, 2024',
        context: 'The AI boom has made NVIDIA the dominant provider of specialized chips for machine learning workloads. The H100 and A100 GPUs have become industry standards, creating significant dependencies.',
        implications: [
          'Vendor lock-in: Organizations become dependent on NVIDIA ecosystem',
          'Supply constraints: Limited alternatives during chip shortages',
          'Pricing power: NVIDIA can command premium pricing',
          'Geopolitical risk: Export controls affect access'
        ],
        governance_consideration: 'Assess vendor concentration risk in your AI infrastructure strategy. Consider multi-cloud and alternative accelerator strategies to reduce dependency.',
        tags: ['Market Data', 'NVIDIA', 'AI Infrastructure', 'Vendor Risk']
      }
    },
    {
      card_id: 'insight-meta-inference-energy',
      card_type: 'insight',
      title: 'Meta LLM Inference Energy Consumption',
      trigger_text: 'Meta\'s inference energy use',
      summary: 'Running inference on Meta\'s Llama models at scale consumes substantial energy. A single query can use 10-100x more energy than a traditional search, with billions of daily queries creating significant environmental impact.',
      status: 'published',
      used_in_articles: ['ai-technology-stack', 'ai-compute', 'environmental-cost-ai'],
      full_content: {
        stat: 'LLM inference can consume 10-100x more energy than traditional search per query',
        source: 'Research estimates, 2024',
        context: 'While training large models gets attention, inference (running the model to answer queries) accounts for most operational energy use once models are deployed at scale.',
        breakdown: {
          single_query: '0.001-0.01 kWh per query',
          daily_at_scale: 'Billions of queries = MW-scale continuous power',
          comparison: '1 ChatGPT query ≈ 100 Google searches in energy'
        },
        implications: [
          'Operational costs scale with usage, not just training',
          'Carbon footprint grows with model popularity',
          'Energy efficiency becomes competitive advantage',
          'Smaller, distilled models reduce inference costs'
        ],
        governance_consideration: 'Factor inference energy into total cost of ownership. Consider model size vs. performance tradeoffs and sustainable hosting providers.',
        tags: ['Energy', 'Meta', 'LLM', 'Sustainability', 'Inference']
      }
    },
    {
      card_id: 'insight-gpt4-training-cost',
      card_type: 'insight',
      title: 'GPT-4 Training Cost Estimates',
      trigger_text: 'GPT-4\'s training costs',
      summary: 'Industry estimates suggest training GPT-4 cost between $50-100 million, primarily in compute resources. This represents a 10x increase from GPT-3, highlighting the exponential cost growth of frontier models.',
      status: 'published',
      used_in_articles: ['foundation-models'],
      full_content: {
        stat: 'Estimated $50-100M to train GPT-4',
        source: 'Industry analysis, 2023',
        context: 'OpenAI has not disclosed exact training costs, but industry analysts estimate based on compute requirements, training time, and hardware costs. These figures exclude pre-training data preparation, safety testing, and infrastructure.',
        breakdown: {
          compute: '$40-80M in GPU/TPU time',
          data: '$5-10M for dataset curation and preparation',
          energy: '$3-5M in electricity costs',
          infrastructure: '$2-5M for systems and engineering'
        },
        trend: 'Training costs for frontier models have grown 10x every 2 years since 2018',
        implications: [
          'Only well-funded organizations can train frontier models',
          'Market consolidation around a few foundation model providers',
          'Emphasis on fine-tuning and transfer learning for most use cases',
          'Need for compute-efficient training techniques'
        ],
        governance_consideration: 'Most organizations should adopt foundation models rather than train from scratch. Evaluate total cost of ownership including inference, fine-tuning, and ongoing improvements.',
        tags: ['Cost', 'GPT-4', 'Foundation Models', 'Training', 'Economics']
      }
    },

    // CONCEPT CARD
    {
      card_id: 'concept-proxy-discrimination',
      card_type: 'concept',
      title: 'Proxy Discrimination',
      trigger_text: 'proxy discrimination',
      summary: 'When AI systems use seemingly neutral features that correlate with protected characteristics (like race or gender) to make discriminatory decisions. ZIP codes can proxy for race; shopping patterns can proxy for income.',
      status: 'published',
      used_in_articles: ['data-behind-ai'],
      full_content: {
        definition: 'Proxy discrimination occurs when an AI model uses facially neutral variables that are highly correlated with protected characteristics, effectively recreating discrimination without explicitly using the protected attribute.',
        plain_english: 'If you train an AI not to use race, but it learns that ZIP code predicts race with 90% accuracy, it can discriminate based on ZIP code instead. The discrimination is indirect but the harm is real.',
        category: 'algorithmic-bias',
        mechanism: 'Features like ZIP code, first name, shopping habits, or social network connections often correlate strongly with protected characteristics. Machine learning models can learn these correlations and use proxies to achieve discriminatory outcomes.',
        examples: [
          'Using ZIP code in lending models (proxies for race)',
          'First names in resume screening (proxies for gender/ethnicity)',
          'Device type or browser in ad targeting (proxies for income)',
          'Social network features (proxy for protected group membership)'
        ],
        why_it_matters: 'Simply removing protected attributes from training data is insufficient. Models can learn to use proxies, making discrimination harder to detect while outcomes remain biased.',
        detection: [
          'Correlation analysis between features and protected characteristics',
          'Fairness metrics disaggregated by group',
          'Sensitivity analysis removing suspected proxy features',
          'Audit outcomes by protected class even when not in model'
        ],
        mitigation: [
          'Remove or restrict high-correlation proxy features',
          'Fairness constraints in model training',
          'Regular disparate impact testing',
          'Human review of high-stakes decisions',
          'Adversarial debiasing techniques'
        ],
        legal_consideration: 'Courts have recognized proxy discrimination as unlawful under civil rights laws. Disparate impact can be illegal even without intent.',
        tags: ['Algorithmic Bias', 'Discrimination', 'Fairness', 'Protected Characteristics']
      }
    },

    // FRAMEWORK CARDS
    {
      card_id: 'fw-c2pa-standard',
      card_type: 'framework',
      title: 'C2PA Content Provenance Standard',
      trigger_text: 'C2PA standard',
      summary: 'The Coalition for Content Provenance and Authenticity (C2PA) standard provides technical specifications for cryptographically signing digital content to verify its origin and detect AI manipulation.',
      status: 'published',
      used_in_articles: ['multimodal-ai'],
      full_content: {
        full_name: 'Coalition for Content Provenance and Authenticity Technical Specification',
        issuing_body: 'Joint Development Foundation (Adobe, Microsoft, Intel, BBC, others)',
        year: 2024,
        purpose: 'Enable publishers, creators, and consumers to verify the source and history of digital content, including whether it was AI-generated or manipulated.',
        key_components: {
          content_credentials: 'Cryptographic metadata attached to images, video, audio',
          manifest: 'Tamper-evident record of content creation and editing history',
          assertions: 'Verifiable claims about content origin, tools used, edits made',
          trust_anchors: 'Certificate authority system for verifying publishers'
        },
        how_it_works: [
          'Content creator embeds C2PA manifest with cryptographic signature',
          'Manifest includes metadata: camera/software used, AI involvement, edits',
          'Each subsequent edit adds to manifest chain',
          'Consumers can verify authenticity via C2PA-enabled tools',
          'Broken signature indicates tampering'
        ],
        adoption: 'Supported by Adobe Creative Suite, Microsoft, Nikon, Sony cameras. Growing industry standard for combating deepfakes and misinformation.',
        limitations: [
          'Requires opt-in adoption by content creators',
          'Can be stripped from content (though removal is detectable)',
          'Does not prevent creation of fake content, only provides verification',
          'Metadata overhead and privacy considerations'
        ],
        governance_application: 'Organizations publishing AI-generated content should implement C2PA signing. Procurement policies can require C2PA support from content management systems.',
        resources: [
          'Technical specification: https://c2pa.org/specifications/',
          'Verify tool: https://contentcredentials.org/verify'
        ],
        tags: ['Content Authentication', 'Deepfakes', 'Provenance', 'Cryptography', 'Standards']
      }
    },
    {
      card_id: 'fw-us-export-controls',
      card_type: 'framework',
      title: 'US AI Chip Export Controls',
      trigger_text: 'US export controls',
      summary: 'US government restrictions limiting export of advanced AI chips (H100, A100) to China and other countries, aimed at preventing military AI applications. Creates supply constraints and geopolitical tensions.',
      status: 'published',
      used_in_articles: ['ai-compute'],
      full_content: {
        full_name: 'Export Administration Regulations (EAR) - Advanced Computing Controls',
        issuing_body: 'US Bureau of Industry and Security (BIS)',
        year_updated: 2023,
        purpose: 'Restrict access to advanced AI compute capabilities that could enable military applications, weapons systems, or human rights abuses.',
        scope: {
          chips_covered: 'NVIDIA A100/H100, AMD MI250, other chips exceeding performance thresholds',
          restricted_countries: 'China, Russia, and countries under arms embargo',
          threshold: 'Chips with specific compute density and interconnect bandwidth limits'
        },
        key_provisions: [
          'License required for exporting covered chips to restricted countries',
          'Performance thresholds define which chips require licenses',
          'Cloud service providers must prevent restricted access',
          'Regular updates as chip capabilities evolve'
        ],
        impact_on_ai_industry: [
          'NVIDIA created limited-capability China-specific chips (A800, H800)',
          'Cloud providers implement geographic access restrictions',
          'Supply chain shifts as Chinese firms seek alternatives',
          'Acceleration of domestic chip development in restricted countries'
        ],
        compliance_challenges: [
          'Cloud services make enforcement difficult',
          'Threshold definitions create gray areas',
          'Rapid chip evolution requires constant rule updates',
          'Balancing commercial interests with security'
        ],
        governance_consideration: 'Organizations with global operations must ensure AI infrastructure compliance with export controls. Cloud vendors may restrict certain services by geography.',
        future_outlook: 'Likely expansion of controls as AI capabilities advance, potential for multilateral coordination with allies.',
        tags: ['Export Controls', 'Geopolitics', 'AI Chips', 'Regulation', 'National Security']
      }
    },
    {
      card_id: 'fw-gdpr-article-22',
      card_type: 'framework',
      title: 'GDPR Article 22: Automated Decision Rights',
      trigger_text: 'GDPR Article 22',
      summary: 'GDPR Article 22 grants individuals the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects, with limited exceptions.',
      status: 'published',
      used_in_articles: ['black-box-problem'],
      full_content: {
        full_name: 'General Data Protection Regulation Article 22: Automated individual decision-making, including profiling',
        issuing_body: 'European Union',
        year: 2018,
        core_principle: 'Individuals have the right not to be subject to decisions based solely on automated processing, including profiling, which produces legal effects or similarly significantly affects them.',
        key_provisions: {
          default_prohibition: 'Automated-only decisions are prohibited unless specific exceptions apply',
          exceptions: [
            'Necessary for entering into or performing a contract',
            'Authorized by EU or Member State law with safeguards',
            'Based on explicit consent'
          ],
          safeguards_required: [
            'Right to obtain human intervention',
            'Right to express point of view',
            'Right to contest the decision',
            'Right to obtain an explanation'
          ]
        },
        what_counts_as_automated: [
          'No human involvement in decision-making process',
          'Human "rubber-stamping" without genuine review does not satisfy requirement',
          'Decision must have legal effects (credit denial, job application) or similar impact'
        ],
        gray_areas: [
          'How much human involvement is sufficient?',
          'What constitutes "similarly significant" effects?',
          'Degree of explanation required',
          'Scope of "profiling"'
        ],
        practical_implications: [
          'Most high-stakes AI decisions require human review',
          'Pure algorithmic credit/hiring decisions are prohibited',
          'Explanation mechanisms must be implemented',
          'Audit trails proving human involvement are essential'
        ],
        enforcement: 'Data protection authorities can impose fines up to 4% of global revenue. Several high-profile cases challenging algorithmic decision-making are in progress.',
        governance_consideration: 'Organizations deploying AI for consequential decisions must implement human-in-the-loop processes, explainability mechanisms, and appeal procedures. Document decision-making workflows for regulatory compliance.',
        related_regulations: 'EU AI Act builds on Article 22 with additional requirements for high-risk AI systems.',
        tags: ['GDPR', 'Automated Decisions', 'Privacy', 'Explainability', 'Human Rights']
      }
    },

    // SCENARIO CARDS
    {
      card_id: 'sc-transparent-vs-opaque-loans',
      card_type: 'scenario',
      title: 'Transparent vs Opaque Loan Models',
      trigger_text: 'transparent versus opaque lending',
      summary: 'A financial regulator must choose between approving a highly accurate but opaque neural network for loan decisions versus a less accurate but fully explainable decision tree model.',
      status: 'published',
      used_in_articles: ['black-box-problem'],
      full_content: {
        setup: 'A major bank seeks regulatory approval for an AI loan underwriting system. They present two options: Model A is a deep neural network with 87% accuracy but limited explainability. Model B is a decision tree with 82% accuracy that can explain every decision in plain language.',
        stakeholders: [
          'Bank: Wants most accurate model to minimize default risk',
          'Regulator: Must ensure fair lending and consumer protection',
          'Applicants: Deserve to understand why they were denied',
          'Shareholders: Want profitable, compliant operations'
        ],
        decision_point: 'Should the regulator approve the more accurate but less explainable model, or require the transparent model despite lower accuracy?',
        tradeoffs: {
          model_a_opaque: {
            pros: ['5% better accuracy', 'Lower default rates', 'Potentially higher approval rates'],
            cons: ['Cannot explain individual denials', 'Difficult to audit for bias', 'Violates spirit of fair lending laws', 'Borrowers cannot improve']
          },
          model_b_transparent: {
            pros: ['Full explainability', 'Easy to audit', 'Borrowers can understand and improve', 'Regulatory compliance'],
            cons: ['Lower accuracy', 'May miss qualified borrowers', 'Higher default risk']
          }
        },
        considerations: [
          'Legal: Do fair lending laws require explainability?',
          'Fairness: Can hidden bias exist in the opaque model?',
          'Practical: Can Model A be made explainable enough?',
          'Economic: What is the cost of the 5% accuracy difference?'
        ],
        real_world_precedent: 'In practice, most regulators require sufficient explainability for high-stakes decisions. Some jurisdictions ban pure black-box lending.',
        outcome_options: [
          'Approve Model A with enhanced monitoring and bias testing',
          'Require Model B for transparency and consumer rights',
          'Require hybrid: Model A for initial screening, human review for denials',
          'Demand Model A be made interpretable before approval'
        ],
        teaching_point: 'The accuracy-explainability tradeoff is not purely technical. It reflects deeper values: Do we prioritize marginal performance gains or understanding and accountability?',
        governance_lesson: 'Establish clear policies on required explainability levels by use case. High-stakes decisions warrant transparency even at modest performance cost.',
        tags: ['Explainability', 'Lending', 'Regulation', 'Tradeoffs', 'Black Box']
      }
    },
    {
      card_id: 'sc-icu-palliative-transparency',
      card_type: 'scenario',
      title: 'ICU Palliative Care Decision Transparency',
      trigger_text: 'ICU decision transparency',
      summary: 'An ICU uses AI to predict which critically ill patients are unlikely to recover, informing palliative care recommendations. Families demand to understand why their loved one was flagged, but the model is a black box.',
      status: 'published',
      used_in_articles: ['black-box-problem'],
      full_content: {
        setup: 'A hospital ICU deploys an AI system that analyzes patient vitals, lab results, and medical history to predict mortality risk. When risk exceeds 85%, the system flags the case for palliative care consultation. The model is highly accurate (92%) but uses deep learning techniques that physicians cannot fully interpret.',
        scenario: 'A 68-year-old patient is flagged by the system. The family asks the physician why the system predicts poor outcomes when the patient "seems stable." The physician cannot provide a clear explanation beyond "the AI identified risk factors in the data."',
        stakeholders: [
          'Patient and family: Deserve understanding of life-or-death recommendations',
          'Physicians: Need to trust and explain recommendations',
          'Hospital: Wants best patient outcomes and resource allocation',
          'Ethicists: Concerned about algorithmic decision-making in end-of-life care'
        ],
        ethical_tensions: {
          accuracy_vs_transparency: 'The model saves lives by early identification, but families cannot understand its reasoning',
          autonomy: 'Families have right to informed consent, but "the AI says so" is not informed',
          trust: 'Physicians may defer to AI they do not understand, undermining clinical judgment',
          resource_allocation: 'ICU beds are scarce; predictions inform triage decisions'
        },
        questions_raised: [
          'Is 92% accuracy sufficient to justify a black box model for end-of-life decisions?',
          'Should physicians be able to override the AI without understanding it?',
          'What level of explanation satisfies informed consent?',
          'Are there certain medical decisions where explainability is non-negotiable?'
        ],
        current_practice: 'Most medical AI systems are used as decision support, not decision automation. Physicians maintain ultimate authority but may be influenced by AI recommendations they do not understand.',
        potential_solutions: [
          'Use interpretable models even if less accurate',
          'Develop hybrid systems: black box prediction + interpretable feature attribution',
          'Require physicians to document clinical reasoning independent of AI',
          'Implement tiered explanations: technical for doctors, plain language for families',
          'Restrict AI to advisory role; require human decision-making for life-or-death choices'
        ],
        teaching_point: 'Some decisions are too consequential for black boxes. The gravity of the decision, not just model accuracy, should determine explainability requirements.',
        governance_lesson: 'Establish ethics review for AI in high-stakes medical decisions. Transparency may be a prerequisite for deployment, even if it reduces accuracy.',
        tags: ['Medical AI', 'Explainability', 'Ethics', 'End-of-Life', 'Transparency']
      }
    },

    // OPERATIONAL PATTERN
    {
      card_id: 'pattern-tiered-explanation-system',
      card_type: 'operational-pattern',
      title: 'Tiered AI Explanation System',
      trigger_text: 'tiered explanation approach',
      summary: 'A governance pattern that provides different levels of AI explanation for different audiences: simple for end users, detailed for domain experts, technical for auditors and regulators.',
      status: 'published',
      used_in_articles: ['black-box-problem'],
      full_content: {
        pattern_name: 'Tiered Explanation System',
        category: 'Explainability Governance',
        problem: 'Different stakeholders need different types of explanations. End users want simple, actionable feedback. Domain experts need detailed feature importance. Regulators need technical auditability. A one-size-fits-all explanation satisfies no one.',
        solution: 'Implement a multi-tiered explanation system where the same AI decision can be explained at different levels of depth and technical sophistication.',
        tiers: {
          tier_1_simple: {
            audience: 'End users, consumers, general public',
            content: 'Plain language summary of decision and top 1-3 influential factors',
            example: '"Your loan was denied primarily because of debt-to-income ratio (47%) and recent late payments."',
            technical_approach: 'Global feature importance, simple counterfactuals'
          },
          tier_2_detailed: {
            audience: 'Domain experts, physicians, loan officers, HR professionals',
            content: 'Feature-by-feature breakdown with weights, alternative scenarios, decision boundaries',
            example: 'Dashboard showing all input variables, their values, importance scores, and "what if" scenarios',
            technical_approach: 'SHAP values, LIME explanations, decision trees, feature interaction analysis'
          },
          tier_3_technical: {
            audience: 'Data scientists, auditors, regulators, legal teams',
            content: 'Model architecture, training data statistics, fairness metrics, validation results, full audit trail',
            example: 'Complete model card with architecture, hyperparameters, fairness metrics by subgroup, performance benchmarks',
            technical_approach: 'Model cards, fairness audits, disparate impact analysis, adversarial testing results'
          }
        },
        implementation: [
          'Build explanation infrastructure at model deployment time',
          'Use XAI techniques (SHAP, LIME, counterfactuals) to generate technical explanations',
          'Layer user interfaces to show appropriate depth per user role',
          'Provide "explain more" drill-down capability',
          'Document which explanations are available for each system'
        ],
        benefits: [
          'End users get actionable feedback they can understand',
          'Experts get detail they need for clinical/business judgment',
          'Auditors can validate model fairness and compliance',
          'Single system serves all stakeholders'
        ],
        challenges: [
          'Generating explanations adds latency',
          'Different explanation methods may give inconsistent results',
          'Requires UX design for each tier',
          'Not all models can produce meaningful tier 3 explanations'
        ],
        governance_integration: [
          'AI governance policy should specify required explanation tiers by use case',
          'High-risk systems must support all three tiers',
          'Low-risk systems may only need tier 1',
          'Procurement requirements should mandate explanation capabilities'
        ],
        example_organizations: 'Financial institutions, healthcare providers, and government agencies increasingly adopt tiered explanation systems to balance usability with accountability.',
        tags: ['Explainability', 'XAI', 'Governance Pattern', 'User Experience', 'Transparency']
      }
    }
  ];

  let createdCount = 0;
  let skippedCount = 0;

  for (const card of cards) {
    // Check if card already exists
    const existing = await sql`
      SELECT card_id FROM cards WHERE card_id = ${card.card_id}
    `;

    if (existing.length > 0) {
      console.log(`⚠️  ${card.card_id}: Already exists, skipping`);
      skippedCount++;
      continue;
    }

    await sql`
      INSERT INTO cards (
        card_id,
        card_type,
        title,
        trigger_text,
        summary,
        status,
        used_in_articles,
        full_content
      ) VALUES (
        ${card.card_id},
        ${card.card_type},
        ${card.title},
        ${card.trigger_text},
        ${card.summary},
        ${card.status},
        ${card.used_in_articles},
        ${JSON.stringify(card.full_content)}
      )
    `;

    console.log(`✅ Created: ${card.card_id} (${card.card_type})`);
    createdCount++;
  }

  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    CARD CREATION COMPLETE                    ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  console.log(`✅ Created: ${createdCount} cards`);
  console.log(`⚠️  Skipped: ${skippedCount} cards (already exist)\n`);

  console.log('Cards created:');
  cards.forEach((card, idx) => {
    console.log(`  ${idx + 1}. ${card.card_id} (${card.card_type})`);
  });

  console.log('\n═'.repeat(60));
}

createTerminologyCards().catch(console.error);
