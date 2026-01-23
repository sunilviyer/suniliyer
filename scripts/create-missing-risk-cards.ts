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

async function createMissingRiskCards() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         CREATING MISSING RISK ARTICLE CARDS                  ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const cards = [
    // SCENARIO CARDS (5)
    {
      card_id: 'sc-redlining-zip-codes',
      card_type: 'scenario',
      title: 'Digital Redlining via ZIP Codes',
      trigger_text: 'ZIP code discrimination',
      summary: 'Scenario illustrating how using ZIP codes in AI models can perpetuate historical housing discrimination. While ZIP codes appear neutral, they correlate with race and socioeconomic status due to historical redlining policies, creating algorithmic discrimination.',
      color: '#7c3aed',
      full_content: {
        description: 'Digital redlining occurs when AI systems use ZIP codes as features in decision-making models (lending, insurance, hiring), inadvertently perpetuating historical housing discrimination patterns.',
        scenario_context: 'A lending institution uses a machine learning model that includes ZIP code as a feature to assess credit risk.',
        the_problem: 'While ZIP codes seem like neutral geographic data, they are highly correlated with race and income due to historical redlining policies that systematically denied services to residents of certain neighborhoods.',
        what_happens: 'The AI model learns patterns from historical data where certain ZIP codes were associated with higher default rates—not because of inherent risk, but because of historical discrimination and disinvestment. The model then perpetuates this bias by denying loans to qualified applicants based on their address.',
        why_it_matters: 'This is a textbook example of proxy discrimination: using a seemingly neutral variable (ZIP code) that serves as a proxy for protected characteristics (race, ethnicity). It demonstrates how AI can automate and scale historical discrimination patterns.',
        governance_implications: [
          'Feature selection must consider historical context and potential for proxy discrimination',
          'Models should be tested for disparate impact across protected groups',
          'Alternative data sources (utility payments, rent history) may provide fairer signals',
          'Explainability is critical: stakeholders must understand why ZIP code drives decisions'
        ],
        related_concepts: ['Proxy discrimination', 'Disparate impact', 'Historical bias', 'Feature engineering ethics']
      },
      tags: ['Algorithmic Bias', 'Proxy Discrimination', 'Financial Services', 'Fairness'],
      used_in_articles: ['when-ai-goes-wrong'],
      status: 'published'
    },
    {
      card_id: 'sc-social-media-radicalization',
      card_type: 'scenario',
      title: 'AI-Driven Content Radicalization',
      trigger_text: 'social media radicalization',
      summary: 'Scenario showing how recommendation algorithms can inadvertently radicalize users by progressively suggesting more extreme content to maximize engagement. The AI optimizes for watch time without understanding the societal harm of echo chambers and extremism.',
      color: '#7c3aed',
      full_content: {
        description: 'Content recommendation algorithms optimize for user engagement (clicks, watch time, shares) without consideration for content safety or societal impact, potentially creating radicalization pathways.',
        scenario_context: 'A video platform uses an AI recommendation system to suggest content that keeps users watching longer.',
        the_problem: 'The algorithm discovers that users who watch political content tend to engage more with progressively extreme views. A user who watches a mainstream political video gets recommended increasingly partisan content, then conspiracy theories, then extremist material.',
        what_happens: 'The AI creates a "radicalization pipeline" where each click leads to more extreme content. The system has no understanding of ideology, harm, or societal impact—it only knows that extreme content generates more engagement.',
        why_it_matters: 'This demonstrates a fundamental misalignment between AI optimization goals (engagement) and societal values (healthy discourse, democratic norms). The AI is working exactly as designed, but the design goal itself is harmful.',
        governance_implications: [
          'Engagement metrics alone are insufficient for AI objective functions',
          'Content moderation must be integrated with recommendation systems',
          'Human review of algorithmic suggestions for high-risk pathways',
          'Transparency in how recommendations are generated',
          'Regular audits for radicalization patterns and filter bubble effects'
        ],
        real_world_examples: [
          'YouTube recommendation algorithm research (2019)',
          'Facebook internal research on divisive content (2021)',
          'TikTok\'s "For You" page optimization'
        ],
        related_concepts: ['Filter bubbles', 'Engagement optimization', 'Content moderation', 'AI safety']
      },
      tags: ['AI Risks', 'Social Media', 'Content Moderation', 'Radicalization'],
      used_in_articles: ['when-ai-goes-wrong', 'ai-misinformation'],
      status: 'published'
    },
    {
      card_id: 'sc-fake-professor-bio',
      card_type: 'scenario',
      title: 'The Fabricated Professor Biography',
      trigger_text: 'fake professor biography',
      summary: 'Scenario where an LLM generates a convincing but entirely fictional academic biography, complete with fake publications, awards, and institutional affiliations. Illustrates how hallucinations can create reputational harm and misinformation.',
      color: '#7c3aed',
      full_content: {
        description: 'An LLM hallucinates detailed, plausible-sounding academic credentials that don\'t exist, demonstrating the risk of AI-generated misinformation in professional contexts.',
        scenario_context: 'A researcher uses an LLM to draft a speaker introduction for an upcoming conference. The AI generates a detailed biography for a lesser-known academic.',
        what_the_ai_generates: 'The LLM produces a convincing biography claiming the professor won prestigious awards, published in top-tier journals, and holds positions at renowned institutions—none of which are true.',
        why_it_happens: 'The model has learned patterns of what academic biographies look like but has no grounding in factual databases. It fills gaps with plausible-sounding but invented details.',
        the_harm: [
          'Reputational damage if false credentials are publicly attributed',
          'Undermines trust in legitimate achievements',
          'Creates verification burden for editors, fact-checkers',
          'May influence hiring, promotion, or grant decisions if undetected'
        ],
        detection_challenges: 'The fabricated details are internally consistent and match expected patterns, making them harder to spot than obvious errors.',
        governance_implications: [
          'Never trust LLM-generated factual claims without verification',
          'Implement citation requirements for all factual assertions',
          'Use retrieval-augmented generation (RAG) for factual content',
          'Train users to recognize hallucination risks in different contexts',
          'Maintain human oversight for high-stakes content (bios, credentials, legal citations)'
        ],
        related_concepts: ['Hallucination', 'Verification', 'RAG', 'LLM limitations']
      },
      tags: ['AI Hallucinations', 'LLM Risks', 'Misinformation', 'Verification'],
      used_in_articles: ['ai-hallucinations'],
      status: 'published'
    },
    {
      card_id: 'sc-phantom-ceo-quote',
      card_type: 'scenario',
      title: 'The Phantom CEO Quote',
      trigger_text: 'phantom CEO quote',
      summary: 'Scenario where an LLM fabricates a quote attributed to a CEO, creating legal and reputational risks. Demonstrates how hallucinations can generate false attributions that appear credible but are entirely invented.',
      color: '#7c3aed',
      full_content: {
        description: 'An LLM generates a plausible-sounding quote from a company executive that was never said, illustrating the dangers of AI-generated misattribution in business contexts.',
        scenario_context: 'A marketing team uses an LLM to draft a case study featuring a client company. The AI generates a glowing testimonial quote attributed to the company\'s CEO.',
        what_the_ai_generates: '"This partnership has been transformational for our business. Their solution increased our operational efficiency by 47% and saved us $2.3M in the first quarter alone." - John Smith, CEO of TechCorp',
        the_problem: 'The CEO never said this. The quote, the statistics, and even the sentiment may not reflect reality. The LLM synthesized what such a quote might look like based on training data patterns.',
        why_it_happens: 'LLMs are trained to continue text plausibly. When prompted for a CEO quote, the model generates something that sounds like a CEO quote—but has no grounding in actual statements.',
        potential_harms: [
          'Legal liability: Publishing false quotes can constitute defamation or false advertising',
          'Reputational damage to the person falsely quoted',
          'Loss of client trust if fabrication is discovered',
          'Securities implications if quote affects stock price',
          'Contractual violations if quote misrepresents partnership terms'
        ],
        governance_implications: [
          'Never publish AI-generated quotes without explicit verification',
          'Implement approval workflows requiring source attribution',
          'Use structured templates that clearly mark AI-generated vs. human-provided content',
          'Train teams on the distinction between "plausible" and "factual"',
          'Consider legal review for all AI-generated content involving attributions'
        ],
        related_concepts: ['Hallucination', 'Attribution', 'Legal liability', 'Fact-checking']
      },
      tags: ['AI Hallucinations', 'LLM Risks', 'Legal Liability', 'Attribution'],
      used_in_articles: ['ai-hallucinations'],
      status: 'published'
    },
    {
      card_id: 'sc-misinformation-exhaustion',
      card_type: 'scenario',
      title: 'The Misinformation Exhaustion Attack',
      trigger_text: 'misinformation exhaustion',
      summary: 'Scenario showing how adversaries can use AI to generate massive volumes of low-cost misinformation, overwhelming fact-checkers and causing information exhaustion. The goal is not to convince people of a particular falsehood, but to make them doubt everything.',
      color: '#7c3aed',
      full_content: {
        description: 'Adversaries use generative AI to create overwhelming volumes of contradictory misinformation across platforms, exhausting verification systems and causing widespread distrust of all information sources.',
        scenario_context: 'During a political campaign, an adversarial actor uses LLMs to generate thousands of conflicting claims about a candidate across social media platforms.',
        the_attack_strategy: 'Rather than promoting a single false narrative, the attacker floods the information environment with contradictory claims: the candidate is too soft on immigration AND too hard on immigration, is backed by corporations AND by socialists, etc.',
        what_happens: [
          'Fact-checkers are overwhelmed by the volume of claims to verify',
          'Users encounter contradictory "evidence" for every position',
          'Trust in all sources (including legitimate news) erodes',
          'People retreat to confirmation bias, only believing sources that align with existing views',
          'The concept of "truth" becomes weaponized as relative and unknowable'
        ],
        why_ai_enables_this: 'Traditional misinformation campaigns required human labor to create content. Generative AI reduces the cost to near-zero, allowing adversaries to generate content at scales that overwhelm defensive measures.',
        the_strategic_goal: 'This is not about convincing people of a specific lie—it\'s about destroying the shared information environment necessary for democratic discourse. If people believe nothing, they can be mobilized by emotion rather than reason.',
        governance_implications: [
          'Provenance and watermarking for AI-generated content',
          'Platform-level rate limiting and behavioral analysis',
          'Invest in automated fact-checking at scale',
          'Media literacy education focused on information exhaustion tactics',
          'International coordination on information warfare responses'
        ],
        related_concepts: ['Information warfare', 'Firehose of falsehood', 'Trust decay', 'Democratic resilience']
      },
      tags: ['Misinformation', 'Information Warfare', 'Democracy', 'Social Engineering'],
      used_in_articles: ['ai-misinformation'],
      status: 'published'
    },

    // CONCEPT CARDS (2)
    {
      card_id: 'concept-differential-privacy',
      card_type: 'concept',
      title: 'Differential Privacy',
      trigger_text: 'differential privacy',
      summary: 'Mathematical framework that allows organizations to learn from datasets while providing strong guarantees that individual data points cannot be identified. Achieved by adding carefully calibrated statistical noise to query results.',
      color: '#3b82f6',
      full_content: {
        definition: 'Differential privacy is a rigorous mathematical definition of privacy that ensures the output of an algorithm is nearly identical whether or not any single individual\'s data is included in the dataset.',
        how_it_works: 'The system adds carefully calibrated random noise to data or query results. The noise is small enough to preserve statistical patterns but large enough to prevent identification of individuals.',
        key_parameters: {
          epsilon: 'Privacy budget—smaller epsilon means stronger privacy but less accuracy',
          delta: 'Probability of privacy failure (typically very small, e.g., 10^-6)'
        },
        example: 'Apple uses differential privacy when collecting usage statistics from iPhones. They can learn which emojis are popular overall, but cannot determine which emojis any specific user sends.',
        trade_offs: [
          'Privacy vs. Utility: Stronger privacy (smaller epsilon) reduces data accuracy',
          'Query limits: Each query consumes privacy budget; too many queries exhaust privacy guarantees',
          'Not all analyses are compatible with differential privacy'
        ],
        governance_use_cases: [
          'Training ML models on sensitive health data',
          'Publishing census statistics without individual identification',
          'Sharing datasets for research while protecting participant privacy',
          'Federated learning across organizations'
        ],
        limitations: [
          'Does not protect against all privacy risks (e.g., if attacker has auxiliary data)',
          'Requires expertise to implement correctly',
          'Privacy budget management is complex in multi-query environments'
        ],
        why_it_matters_for_governance: 'Differential privacy is one of the few privacy techniques with formal mathematical guarantees, making it the gold standard for privacy-preserving data analysis.'
      },
      tags: ['Data Privacy', 'Privacy Enhancing Technologies', 'Mathematics', 'Data Governance'],
      used_in_articles: ['ai-privacy'],
      status: 'published'
    },
    {
      card_id: 'concept-federated-learning',
      card_type: 'concept',
      title: 'Federated Learning',
      trigger_text: 'federated learning',
      summary: 'Machine learning technique where models are trained across decentralized devices or servers holding local data samples, without exchanging the raw data itself. Only model updates are shared, preserving data privacy.',
      color: '#3b82f6',
      full_content: {
        definition: 'Federated learning is a distributed machine learning approach where training occurs on local devices or servers, and only model parameters (weights, gradients) are shared with a central server—not the raw data.',
        how_it_works: [
          '1. Central server distributes a model to participating devices/organizations',
          '2. Each device trains the model on its local data',
          '3. Devices send model updates (gradients) back to the central server',
          '4. Server aggregates updates into an improved global model',
          '5. Process repeats until model converges'
        ],
        example: 'Google uses federated learning to improve Gboard (Android keyboard) predictions. Your phone learns from your typing locally, sends encrypted model updates to Google, and those updates improve the global model—without Google ever seeing what you type.',
        privacy_benefits: [
          'Raw data never leaves the device/organization',
          'Reduces risk of data breaches (no centralized data store)',
          'Enables collaboration without data sharing (e.g., hospitals training models without sharing patient records)'
        ],
        challenges: [
          'Communication costs: Sending model updates can be bandwidth-intensive',
          'Non-IID data: Local datasets may be non-representative (e.g., all users in one city)',
          'Model poisoning: Malicious participants can corrupt the global model',
          'Still vulnerable to inference attacks: Attackers may reconstruct training data from model updates'
        ],
        governance_use_cases: [
          'Healthcare: Multi-hospital model training without sharing patient data',
          'Financial services: Fraud detection across banks without sharing transaction data',
          'Mobile devices: On-device personalization with privacy',
          'Cross-border collaboration: Training models without data leaving jurisdictions'
        ],
        enhanced_privacy_techniques: [
          'Secure aggregation: Encrypt model updates so server cannot see individual contributions',
          'Differential privacy: Add noise to gradients before sharing',
          'Homomorphic encryption: Compute on encrypted model updates'
        ],
        why_it_matters_for_governance: 'Federated learning enables AI innovation while respecting data sovereignty, privacy regulations (GDPR), and competitive concerns about sharing proprietary data.'
      },
      tags: ['Data Privacy', 'Machine Learning', 'Privacy Enhancing Technologies', 'Distributed Systems'],
      used_in_articles: ['ai-privacy'],
      status: 'published'
    },

    // TREND CARDS (4)
    {
      card_id: 'trend-content-writing',
      card_type: 'trend',
      title: 'Content Writing Transformation',
      trigger_text: 'content writing jobs',
      summary: 'Generative AI is rapidly transforming content writing roles. Entry-level content creation is increasingly automated, while human writers shift toward editorial oversight, fact-checking, brand voice stewardship, and strategic content planning.',
      color: '#f59e0b',
      full_content: {
        current_state: 'LLMs can generate blog posts, product descriptions, social media content, and marketing copy at scale. Many organizations are using AI to draft 70-80% of routine content, with humans editing and refining.',
        what_is_changing: [
          'Junior content writer roles: Declining demand for entry-level writers doing routine content creation',
          'SEO content farms: Many are being replaced entirely by AI-generated content',
          'Product descriptions: E-commerce sites generate thousands of descriptions automatically',
          'Social media posts: AI drafts posts, humans review and schedule'
        ],
        emerging_human_roles: [
          'Content strategists: Deciding what content to create and why',
          'Fact-checkers and verifiers: Ensuring AI output is accurate and compliant',
          'Brand voice editors: Maintaining consistent tone, style, and brand values',
          'Prompt engineers: Crafting inputs that generate on-brand, high-quality output',
          'Content ethicists: Reviewing AI-generated content for bias, harm, and misinformation'
        ],
        skills_that_remain_valuable: [
          'Original research and reporting',
          'Subject matter expertise and nuanced understanding',
          'Interviewing and relationship building',
          'Strategic thinking about audience and goals',
          'Editing and quality control'
        ],
        risks_for_workers: [
          'Entry-level pathway disrupted: Fewer junior roles to gain experience',
          'Wage pressure: Abundance of AI-generated content commoditizes writing',
          'Portfolio devaluation: If AI can replicate your style, what makes you unique?'
        ],
        governance_implications: [
          'Workforce development: Reskilling programs for displaced writers',
          'Disclosure requirements: Should AI-generated content be labeled?',
          'Quality standards: How to prevent race-to-the-bottom in content quality?',
          'Labor market interventions: Policies to support workers in transition'
        ],
        what_organizations_should_do: [
          'Invest in training human writers to work with AI tools',
          'Maintain human oversight for all customer-facing content',
          'Develop clear policies on AI use and disclosure',
          'Value strategic thinking and brand stewardship over word count'
        ]
      },
      tags: ['Future of Work', 'Job Displacement', 'Content Creation', 'Generative AI'],
      used_in_articles: ['job-displacement'],
      status: 'published'
    },
    {
      card_id: 'trend-legal-services',
      card_type: 'trend',
      title: 'Legal Services Transformation',
      trigger_text: 'legal services AI',
      summary: 'AI is automating routine legal tasks like document review, contract analysis, and legal research. Junior associate roles focused on discovery and research are declining, while lawyers increasingly focus on judgment, strategy, negotiation, and client relationships.',
      color: '#f59e0b',
      full_content: {
        current_state: 'Legal AI tools can review contracts, identify relevant case law, predict litigation outcomes, and draft routine documents. Large law firms are deploying AI to reduce billable hours in discovery and research.',
        what_is_changing: [
          'Document review: AI can process millions of documents for e-discovery in hours vs. weeks for human teams',
          'Contract analysis: Automated extraction of key terms, obligations, and risks',
          'Legal research: AI tools surface relevant precedents faster than manual research',
          'Routine drafting: Non-disclosure agreements, simple wills, incorporation documents generated by AI'
        ],
        roles_at_risk: [
          'Junior associates: Historically did discovery, document review, and research—now AI-assisted or automated',
          'Paralegals: Routine case preparation increasingly automated',
          'Legal researchers: AI tools replace hours of manual case law review'
        ],
        emerging_human_roles: [
          'AI quality reviewers: Lawyers who verify AI output for accuracy and appropriateness',
          'Strategic counselors: Advising on complex, ambiguous situations requiring judgment',
          'Negotiators: Navigating human dynamics, psychology, and relationship management',
          'Regulatory specialists: Interpreting novel laws and regulations AI cannot parse',
          'Ethics and compliance officers: Ensuring AI use meets professional responsibility standards'
        ],
        skills_that_remain_valuable: [
          'Judgment in ambiguous situations',
          'Client relationship management and empathy',
          'Oral advocacy and persuasion',
          'Creative legal strategies',
          'Understanding human motivations and negotiation dynamics'
        ],
        challenges_for_the_profession: [
          'Billable hour model disruption: If AI reduces hours, how do firms charge?',
          'Training pipeline: How do junior lawyers gain experience if routine work is automated?',
          'Access to justice: Will AI lower costs for consumers or just increase firm profits?',
          'Professional responsibility: Who is liable if AI makes an error?'
        ],
        governance_implications: [
          'Bar association rules on AI use and supervision',
          'Mandatory disclosure of AI assistance to clients and courts?',
          'Rethinking legal education to prepare lawyers for AI-augmented practice',
          'Access to justice initiatives using AI to serve underserved populations'
        ],
        what_legal_organizations_should_do: [
          'Invest in AI literacy for all lawyers',
          'Develop protocols for human oversight of AI-generated work',
          'Rethink associate training and development programs',
          'Consider alternative billing models (flat fees, value-based pricing)'
        ]
      },
      tags: ['Future of Work', 'Job Displacement', 'Legal Services', 'Document Analysis'],
      used_in_articles: ['job-displacement'],
      status: 'published'
    },
    {
      card_id: 'trend-customer-service-collab',
      card_type: 'trend',
      title: 'Customer Service Collaboration Model',
      trigger_text: 'customer service AI collaboration',
      summary: 'AI chatbots increasingly handle routine customer service queries, while human agents focus on complex issues, emotionally sensitive situations, and escalations. The model is human-AI collaboration rather than full replacement.',
      color: '#f59e0b',
      full_content: {
        current_state: 'AI chatbots resolve 60-80% of routine customer service queries (order status, password resets, basic FAQs), with humans handling the remaining 20-40% that require judgment, empathy, or policy exceptions.',
        what_is_changing: [
          'First contact resolution: AI bots handle "Where is my order?" and "How do I reset my password?" queries entirely',
          'Tier 1 support: Many Tier 1 call center roles eliminated as bots handle routine issues',
          'Self-service: Customers increasingly prefer AI chat for speed and 24/7 availability',
          'Multilingual support: AI provides instant translation, reducing need for language-specific agents'
        ],
        the_collaboration_model: [
          'AI handles: Routine queries, information lookup, simple troubleshooting',
          'Humans handle: Complex problems, emotionally charged situations, policy exceptions, sales opportunities',
          'Seamless handoff: AI recognizes when to escalate and provides context to human agent',
          'Human-in-the-loop: Agents monitor AI conversations and intervene when needed'
        ],
        roles_at_risk: [
          'Tier 1 call center agents: Repetitive, script-based support increasingly automated',
          'Email response teams: AI handles most email inquiries',
          'Basic technical support: Simple troubleshooting automated through AI diagnostics'
        ],
        emerging_human_roles: [
          'Escalation specialists: Handling complex, high-stakes customer issues',
          'Empathy agents: Managing emotionally charged situations (complaints, cancellations, crises)',
          'AI trainers: Teaching AI systems to handle new scenarios and improve responses',
          'Customer success managers: Proactive relationship building rather than reactive support',
          'Voice of customer analysts: Analyzing AI interactions to identify product improvements'
        ],
        skills_that_remain_valuable: [
          'Emotional intelligence and de-escalation',
          'Creative problem-solving for non-standard situations',
          'Building customer loyalty and trust',
          'Understanding business context and making judgment calls',
          'Turning support interactions into sales opportunities'
        ],
        customer_experience_considerations: [
          'Customers want choice: Some prefer AI speed, others want human empathy',
          'Transparency: Customers should know when they\'re talking to AI vs. human',
          'Escalation friction: Making it easy to reach a human when needed',
          'Quality over cost: Over-automation can harm brand reputation'
        ],
        governance_implications: [
          'Workforce transition support: Reskilling Tier 1 agents for higher-value roles',
          'Quality monitoring: Ensuring AI provides accurate, brand-aligned support',
          'Data privacy: Customer conversations with AI must be handled securely',
          'Accessibility: AI must serve customers with disabilities effectively'
        ],
        what_organizations_should_do: [
          'Invest in upskilling agents for complex, empathetic work',
          'Design smooth AI-to-human handoff experiences',
          'Monitor AI quality continuously—don\'t "set and forget"',
          'Measure both efficiency and customer satisfaction, not just cost reduction'
        ]
      },
      tags: ['Future of Work', 'Job Displacement', 'Customer Service', 'Human-AI Collaboration'],
      used_in_articles: ['job-displacement'],
      status: 'published'
    },
    {
      card_id: 'trend-radiology',
      card_type: 'trend',
      title: 'Radiology: AI Augmentation, Not Replacement',
      trigger_text: 'radiology AI',
      summary: 'AI excels at detecting patterns in medical images (tumors, fractures, anomalies) but radiologists remain essential for clinical judgment, complex cases, and patient communication. The field is shifting toward AI-augmented specialization rather than displacement.',
      color: '#f59e0b',
      full_content: {
        current_state: 'AI tools can detect lung nodules, breast cancer, brain hemorrhages, and fractures with accuracy rivaling human radiologists. Most radiology departments now use AI as a "second reader" to flag potential findings.',
        what_is_changing: [
          'Routine screening: AI identifies obvious findings (normal scans, clear-cut abnormalities) quickly',
          'Workflow prioritization: AI flags urgent cases for immediate human review',
          'Quantification: AI provides precise measurements (tumor volume, bone density) more consistently than humans',
          'Cross-modality analysis: AI integrates findings across X-ray, CT, MRI, and patient history'
        ],
        why_radiologists_are_not_being_replaced: [
          'Clinical context: AI sees images, radiologists see patients—they integrate imaging with clinical history, symptoms, and prior studies',
          'Complex cases: Rare diseases, ambiguous findings, and multi-system pathology require expert judgment',
          'Liability and accountability: Physicians are legally responsible; AI cannot sign reports or be held accountable',
          'Communication: Radiologists consult with referring physicians and sometimes patients to clarify findings',
          'Quality control: Radiologists identify when AI makes errors (and it does)'
        ],
        emerging_radiology_roles: [
          'AI-augmented specialists: Radiologists who leverage AI to increase throughput and accuracy',
          'Sub-specialty experts: Deep expertise in complex cases that AI struggles with (rare diseases, pediatrics, interventional procedures)',
          'Image quality specialists: Ensuring scans are acquired correctly for optimal AI performance',
          'Clinical integrators: Correlating imaging with lab results, genetics, and treatment response',
          'AI oversight: Monitoring AI performance and identifying when models need retraining'
        ],
        skills_that_remain_valuable: [
          'Diagnostic reasoning with incomplete information',
          'Understanding imaging artifacts and technical limitations',
          'Communicating complex findings to non-radiologists',
          'Staying current with medical literature and evolving standards',
          'Interventional procedures (biopsies, catheter-based treatments)'
        ],
        impact_on_training: [
          'Less time on routine pattern recognition, more on complex reasoning',
          'Training in AI tool use and quality assurance',
          'Emphasis on clinical correlation and communication skills',
          'Earlier sub-specialization in high-complexity areas'
        ],
        governance_implications: [
          'FDA regulation of AI as medical devices',
          'Liability standards when AI is involved in diagnosis',
          'Reimbursement models: How to pay for AI-assisted reads?',
          'Training requirements: Should all radiologists be trained in AI oversight?',
          'International variability: AI adoption faster in countries with radiologist shortages'
        ],
        what_healthcare_organizations_should_do: [
          'Implement AI as decision support, not autonomous diagnosis',
          'Invest in radiologist training for AI collaboration',
          'Monitor AI performance continuously (models degrade over time)',
          'Maintain human oversight for all patient-impacting decisions'
        ],
        broader_lesson: 'Radiology demonstrates the "augmentation, not replacement" pattern: AI excels at pattern recognition, humans provide context, judgment, and accountability. This model applies to many knowledge work domains.'
      },
      tags: ['Future of Work', 'Healthcare', 'Medical AI', 'Human-AI Collaboration'],
      used_in_articles: ['job-displacement'],
      status: 'published'
    },

    // PATTERN CARDS (2)
    {
      card_id: 'pattern-ai-workforce-transition',
      card_type: 'operational-pattern',
      title: 'AI Workforce Transition Planning Pattern',
      trigger_text: 'workforce transition planning',
      summary: 'Operational pattern for organizations to manage AI-driven workforce changes responsibly. Includes impact assessment, reskilling programs, transparent communication, and measuring both efficiency and human outcomes.',
      color: '#8b5cf6',
      full_content: {
        pattern_name: 'AI Workforce Transition Planning',
        context: 'Organizations deploying AI that will change or eliminate job roles need a structured approach to manage the transition ethically and effectively.',
        problem: 'Ad-hoc AI deployment can lead to sudden job losses, institutional knowledge loss, employee morale collapse, and reputational damage. Workers lack time to prepare, and organizations lose valuable human capital.',
        solution: 'A phased, transparent approach to workforce transition that prioritizes reskilling, redeployment, and dignified transitions when roles are eliminated.',
        pattern_steps: [
          {
            step: '1. Impact Assessment (Before Deployment)',
            actions: [
              'Identify which roles will be affected by AI (augmented, transformed, eliminated)',
              'Quantify the scale: How many employees in affected roles?',
              'Assess transferable skills: What can affected workers do in adjacent roles?',
              'Timeline: How quickly will changes occur?'
            ]
          },
          {
            step: '2. Transparent Communication',
            actions: [
              'Inform affected employees early—before decisions are finalized when possible',
              'Explain why AI is being deployed and what alternatives were considered',
              'Be honest about timeline and potential outcomes',
              'Provide forums for employee questions and concerns'
            ]
          },
          {
            step: '3. Reskilling and Redeployment',
            actions: [
              'Assess internal vacancies in adjacent roles',
              'Design training programs to bridge skill gaps',
              'Provide paid time for learning during work hours',
              'Prioritize internal hiring for retrained employees'
            ]
          },
          {
            step: '4. Augmentation Before Automation',
            actions: [
              'Deploy AI as assistive tool first (human-in-the-loop)',
              'Allow workers to adapt and learn new workflows',
              'Collect feedback on what works and what causes friction',
              'Only move to automation after demonstrating value and stability'
            ]
          },
          {
            step: '5. Dignified Exits When Necessary',
            actions: [
              'Generous severance packages (beyond legal minimums)',
              'Outplacement services: Resume help, interview coaching, job search support',
              'Extended healthcare benefits during transition',
              'Alumni networks and references'
            ]
          },
          {
            step: '6. Measure Human Outcomes, Not Just Efficiency',
            actions: [
              'Track redeployment success rates',
              'Monitor employee morale and engagement',
              'Survey affected workers 6-12 months later',
              'Adjust approach based on feedback'
            ]
          }
        ],
        real_world_examples: [
          'AT&T\'s $1B workforce reskilling program (2013-2020)',
          'Amazon\'s Upskilling 2025 pledge (100,000 workers)',
          'Accenture\'s commitment to reskill all 500,000 employees for AI era'
        ],
        anti_patterns_to_avoid: [
          'Surprise layoffs: Announcing job cuts without warning',
          'Training theater: Offering reskilling programs with no real job prospects',
          'Speedrunning: Deploying AI so quickly workers have no time to adapt',
          'Efficiency-only metrics: Measuring cost savings without tracking human impact'
        ],
        governance_considerations: [
          'Labor law compliance: Works councils, WARN Act (US), consultation requirements (EU)',
          'Ethical obligations beyond legal minimums',
          'Reputation management: How will this affect employer brand?',
          'Institutional knowledge: What expertise will be lost?'
        ],
        success_factors: [
          'Executive commitment to responsible transition (not just PR)',
          'Adequate budget for reskilling and severance',
          'Realistic timeline (measured in years, not months)',
          'Employee involvement in planning process',
          'Transparency about uncertainties'
        ]
      },
      tags: ['Future of Work', 'Change Management', 'Workforce Strategy', 'Operational Pattern'],
      used_in_articles: ['job-displacement'],
      status: 'published'
    },
    {
      card_id: 'pattern-collaborative-hiring-partnership',
      card_type: 'operational-pattern',
      title: 'Collaborative Hiring Partnership Pattern',
      trigger_text: 'collaborative hiring',
      summary: 'Operational pattern where organizations deploying AI that displaces workers partner with other employers to facilitate direct reemployment. Reduces unemployment duration and maintains worker dignity.',
      color: '#8b5cf6',
      full_content: {
        pattern_name: 'Collaborative Hiring Partnership',
        context: 'When AI deployment will eliminate roles that are valuable in other industries, the deploying organization can facilitate worker transitions rather than simply terminating employment.',
        problem: 'Laid-off workers face employment gaps, loss of income, and difficulty signaling their value to new employers. Companies in adjacent industries may be hiring for roles these workers could fill but struggle to find qualified candidates.',
        solution: 'The AI-deploying organization partners with other employers to facilitate direct-hire transitions, providing referrals, skills attestation, and transition support.',
        pattern_steps: [
          {
            step: '1. Identify Adjacent Industries',
            actions: [
              'Map skills of affected workers to in-demand roles elsewhere',
              'Example: Call center agents → sales development reps, insurance processors → healthcare administration',
              'Focus on industries with labor shortages and compatible skill sets'
            ]
          },
          {
            step: '2. Establish Employer Partnerships',
            actions: [
              'Reach out to companies in target industries',
              'Negotiate terms: Will they prioritize interviews? Offer training? Accept referrals?',
              'Formalize agreements (MoUs, partnership contracts)'
            ]
          },
          {
            step: '3. Skills Attestation and Referrals',
            actions: [
              'Provide detailed skills profiles for each worker (not just job titles)',
              'Offer formal recommendations and references',
              'Attest to soft skills: reliability, communication, work ethic',
              'Facilitate warm introductions, not just resume forwarding'
            ]
          },
          {
            step: '4. Transition Support',
            actions: [
              'Bridge training: Short courses to fill specific skill gaps for new roles',
              'Income bridge: Continue paying salary during transition period',
              'Interview preparation: Coaching for workers unfamiliar with new industry',
              'Relocation assistance if new roles are in different geography'
            ]
          },
          {
            step: '5. Ongoing Tracking',
            actions: [
              'Monitor placement success rates',
              'Follow up with workers 3, 6, 12 months after transition',
              'Refine partnerships based on outcomes',
              'Publicly report results (transparency builds trust)'
            ]
          }
        ],
        real_world_examples: [
          'UK retail-to-logistics partnerships during COVID-19 (Marks & Spencer → Amazon warehouse)',
          'Oil & gas to renewable energy worker transitions (Ørsted, Equinor programs)',
          'Automotive manufacturing to EV battery production (GM, Ford reskilling partnerships)'
        ],
        benefits_for_all_parties: {
          workers: 'Reduced unemployment, faster reemployment, maintained income and dignity',
          deploying_organization: 'Reduced severance costs, better employer brand, demonstrates social responsibility',
          hiring_organizations: 'Access to pre-vetted, skilled workers; reduced recruitment costs'
        },
        challenges: [
          'Geographic mismatch: New jobs may not be in same locations',
          'Wage differences: New roles may pay less than prior roles',
          'Skill gaps: May require significant retraining investment',
          'Timing: Partner organizations may not have open roles when needed'
        ],
        governance_considerations: [
          'Worker consent: Participation must be voluntary, not coercive',
          'Data privacy: Sharing worker skills data requires permission',
          'Equity: Ensure all affected workers have access to partnerships, not just high performers',
          'Transparency: Workers should understand trade-offs (e.g., lower pay but faster employment)'
        ],
        when_to_use_this_pattern: [
          'Large-scale workforce reductions (50+ workers)',
          'Workers have transferable skills valued in other industries',
          'Adequate lead time (6+ months) to establish partnerships',
          'Organization has resources to invest in transition support',
          'Strong employer brand and industry relationships'
        ],
        when_not_to_use: [
          'Very small-scale changes (1-5 workers)',
          'Workers have highly specialized, non-transferable skills',
          'Immediate workforce reductions (no time to establish partnerships)',
          'Weak industry relationships or reputation damage prevents partnerships'
        ],
        success_factors: [
          'Executive commitment and dedicated budget',
          'Strong relationships with partner organizations',
          'Genuine investment in worker success (not just PR)',
          'Realistic assessment of skill transferability',
          'Transparent communication with workers throughout'
        ]
      },
      tags: ['Future of Work', 'Workforce Strategy', 'Partnerships', 'Operational Pattern'],
      used_in_articles: ['job-displacement'],
      status: 'published'
    },

    // QUOTE CARD (1)
    {
      card_id: 'quote-vladimir-putin-leadership',
      card_type: 'quote',
      title: 'Putin on AI and Global Leadership',
      trigger_text: 'Putin AI leadership quote',
      summary: 'Vladimir Putin\'s 2017 statement that whoever leads in artificial intelligence "will be the ruler of the world," highlighting the geopolitical dimension of AI competition and national security implications.',
      color: '#ec4899',
      full_content: {
        quote: 'Artificial intelligence is the future, not only for Russia, but for all humankind. It comes with colossal opportunities, but also threats that are difficult to predict. Whoever becomes the leader in this sphere will become the ruler of the world.',
        attribution: 'Vladimir Putin, President of Russia',
        date: 'September 1, 2017',
        context: 'Putin made this statement during a televised address to Russian students about the importance of AI education and research. The comment sparked global discussion about AI as a national security imperative.',
        significance: [
          'Framed AI as zero-sum competition for global dominance',
          'Elevated AI to presidential-level strategic priority',
          'Implied that AI superiority confers geopolitical power comparable to nuclear weapons or economic dominance',
          'Contributed to US-China-Russia AI arms race narrative'
        ],
        geopolitical_implications: [
          'Accelerated investment in AI by major powers',
          'Raised concerns about authoritarian use of AI for surveillance and control',
          'Sparked debate about international AI governance and arms control',
          'Highlighted dual-use nature of AI (civilian and military applications)'
        ],
        alternative_perspectives: [
          'Some experts argue this framing is hyperbolic and creates self-fulfilling prophecies',
          'Others note that collaboration, not competition, may be necessary for AI safety',
          'Open-source AI movement challenges idea that one nation can "lead" AI'
        ],
        relevance_to_governance: [
          'Illustrates how national leaders view AI strategically, not just technically',
          'Explains rapid military AI development (autonomous weapons, cyber warfare)',
          'Contextualizes export controls and technology transfer restrictions',
          'Underscores tension between international AI safety cooperation and competitive dynamics'
        ],
        why_this_matters: 'This quote encapsulates the geopolitical stakes of AI development. For governance professionals, it explains policy decisions (export controls, domestic AI investment, military applications) that might otherwise seem disproportionate to the technology\'s current capabilities.',
        related_concepts: ['AI arms race', 'Dual-use technology', 'Technology sovereignty', 'National security']
      },
      tags: ['Geopolitics', 'National Security', 'AI Arms Race', 'International Relations'],
      used_in_articles: ['autonomous-weapons'],
      status: 'published'
    }
  ];

  console.log(`Creating ${cards.length} missing cards...\\n`);

  let createdCount = 0;
  for (const card of cards) {
    try {
      // Add tags to full_content
      const fullContentWithTags = {
        ...card.full_content,
        tags: card.tags
      };

      await sql`
        INSERT INTO cards (
          card_id, card_type, title, trigger_text, summary, color,
          full_content, used_in_articles, status
        )
        VALUES (
          ${card.card_id},
          ${card.card_type},
          ${card.title},
          ${card.trigger_text},
          ${card.summary},
          ${card.color},
          ${JSON.stringify(fullContentWithTags)},
          ${card.used_in_articles},
          ${card.status}
        )
      `;
      console.log(`✅ Created: ${card.card_id} (${card.card_type})`);
      createdCount++;
    } catch (error: any) {
      if (error.message?.includes('duplicate key')) {
        console.log(`ℹ️  Already exists: ${card.card_id}`);
      } else {
        console.error(`❌ Error creating ${card.card_id}:`, error.message);
      }
    }
  }

  console.log(`\\n╔══════════════════════════════════════════════════════════════╗`);
  console.log(`║                    CREATION COMPLETE                         ║`);
  console.log(`╚══════════════════════════════════════════════════════════════╝\\n`);

  console.log(`Summary:`);
  console.log(`  ✅ Cards created: ${createdCount}`);
  console.log(`  📋 Breakdown:`);
  console.log(`     - Scenario cards: 5`);
  console.log(`     - Concept cards: 2`);
  console.log(`     - Trend cards: 4`);
  console.log(`     - Pattern cards: 2`);
  console.log(`     - Quote cards: 1`);
  console.log();
}

createMissingRiskCards().catch(console.error);
