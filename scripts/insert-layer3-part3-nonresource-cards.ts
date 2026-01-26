import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function insertLayer3Part3Cards() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║  INSERT LAYER 3 PART 3: NON-RESOURCE CARDS (12 CARDS)      ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const cards = [
    // QUOTES (2)
    {
      card_id: 'quote-sam-altman-agi',
      card_type: 'quote',
      title: 'Sam Altman on AGI Development',
      trigger_text: 'Altman AGI quote',
      summary: '"The bad case—and I think this is important to say—is, like, lights out for all of us." — Sam Altman, OpenAI CEO, discussing AGI risks at a 2023 Senate hearing.',
      full_content: {
        date: 'May 16, 2023',
        tags: ['AGI', 'Existential Risk', 'OpenAI', 'Regulation'],
        quote: 'The bad case—and I think this is important to say—is, like, lights out for all of us.',
        context: 'Sam Altman testified before the U.S. Senate Judiciary Committee about AI regulation. When asked about worst-case scenarios for advanced AI, he acknowledged existential risk while advocating for a new regulatory agency.',
        attribution: 'Sam Altman, CEO of OpenAI',
        significance: [
          'Rare explicit acknowledgment of existential risk from AI industry leader',
          'Helped legitimize serious discussion of AGI safety in policy circles',
          'Contrasted with typical tech industry optimism about AI benefits',
          'Used to support calls for AI regulation and governance'
        ],
        related_concepts: ['Artificial General Intelligence', 'Existential risk', 'AI alignment', 'AI governance'],
        why_this_matters: 'When the CEO of the company building the most advanced AI systems publicly acknowledges catastrophic risk, it signals that AGI safety is not just academic speculation but a real concern for practitioners.',
        relevance_to_governance: [
          'Demonstrates industry awareness of extreme risks',
          'Creates pressure for proactive governance before AGI emergence',
          'Highlights tension between AI development speed and safety',
          'Supports establishment of dedicated AI regulatory bodies'
        ],
        alternative_perspectives: [
          'Some AI safety researchers argue Altman understates risks',
          'Critics note OpenAI continues rapid development despite stated concerns',
          'Skeptics question sincerity, seeing regulatory capture motives'
        ]
      },
      used_in_articles: ['agi-governance']
    },
    {
      card_id: 'quote-nick-bostrom-alignment',
      card_type: 'quote',
      title: 'Nick Bostrom on AI Alignment',
      trigger_text: 'Bostrom alignment problem',
      summary: '"The AI does not hate you, nor does it love you, but you are made of atoms which it can use for something else." — Nick Bostrom, Superintelligence (2014)',
      full_content: {
        date: '2014',
        tags: ['AI Alignment', 'Existential Risk', 'Value Alignment', 'Philosophy'],
        quote: 'The AI does not hate you, nor does it love you, but you are made of atoms which it can use for something else.',
        context: 'From Bostrom\'s book "Superintelligence: Paths, Dangers, Strategies," illustrating the instrumental convergence thesis—that advanced AI systems will pursue intermediate goals (like resource acquisition) regardless of their final goals.',
        attribution: 'Nick Bostrom, Philosopher and Director of the Future of Humanity Institute',
        significance: [
          'Crystallizes the alignment problem in vivid, memorable language',
          'Explains how AI could be dangerous without being malicious',
          'Introduced idea that AI risk stems from misaligned objectives, not sentience or malevolence',
          'Helped establish AI alignment as a distinct research field'
        ],
        related_concepts: ['AI alignment problem', 'Instrumental convergence', 'Orthogonality thesis', 'Value alignment'],
        why_this_matters: 'This quote reframes AI risk: The danger is not evil AI, but AI that pursues objectives misaligned with human welfare. A superintelligent system optimizing paperclip production might convert the entire Earth into paperclip factories—not out of malice, but pure optimization.',
        relevance_to_governance: [
          'Highlights importance of value alignment before deploying powerful AI',
          'Explains why "narrow" task definitions can have catastrophic unintended consequences',
          'Motivates research into AI alignment and safety',
          'Underpins arguments for AI development moratoriums until alignment is solved'
        ],
        alternative_perspectives: [
          'Some argue this scenario assumes unrealistic levels of AI capability',
          'Critics note humans also have misaligned objectives but don\'t pose existential risk',
          'Others believe alignment will emerge naturally from training on human feedback'
        ],
        philosophical_implications: [
          'Intelligence and values are orthogonal (you can be smart without being good)',
          'Optimization processes are indifferent to human welfare unless explicitly designed otherwise',
          'Instrumental goals (resource acquisition, self-preservation) emerge from almost any terminal goal'
        ]
      },
      used_in_articles: ['ai-existential-risk', 'future-ai-ethics']
    },

    // INSIGHTS (2)
    {
      card_id: 'insight-ai-extinction-risk-probability',
      card_type: 'insight',
      title: 'AI Extinction Risk Probability Estimates',
      trigger_text: 'extinction risk probability',
      summary: 'In a 2022 survey, AI researchers estimated a median 5-10% chance that advanced AI leads to human extinction or similarly severe outcomes. Some leading AI safety researchers put the probability higher, with estimates ranging from 10% to over 50%.',
      full_content: {
        tags: ['Existential Risk', 'AI Safety', 'Expert Consensus', 'Forecasting']
      },
      used_in_articles: ['ai-existential-risk']
    },
    {
      card_id: 'insight-eu-ai-act-penalty',
      card_type: 'insight',
      title: 'EU AI Act Maximum Penalties',
      trigger_text: 'EU AI Act penalties',
      summary: 'The EU AI Act imposes fines up to €35 million or 7% of global annual turnover (whichever is higher) for violations involving prohibited AI systems. For other violations, fines can reach €15 million or 3% of turnover. These are among the highest regulatory penalties for any technology regulation globally.',
      full_content: {
        tags: ['EU AI Act', 'Compliance', 'Penalties', 'Regulation']
      },
      used_in_articles: ['future-ai-regulation', 'ai-governance-careers', 'eu-ai-act-explained']
    },

    // PATTERNS (5)
    {
      card_id: 'pattern-defense-in-depth',
      card_type: 'pattern',
      title: 'Defense-in-Depth for AI Safety',
      trigger_text: 'defense-in-depth',
      summary: 'Defense-in-depth applies multiple independent safety layers to AI systems—input validation, model guardrails, output filtering, human oversight, and monitoring. If one layer fails, others provide backup protection. This cybersecurity principle prevents single points of failure in AI safety.',
      full_content: {
        tags: ['Safety', 'Security', 'Risk Mitigation', 'Best Practice'],
        description: 'Defense-in-depth is a security principle that applies multiple independent layers of protection. For AI systems, this means not relying on any single safety mechanism.',
        layers: [
          'Input validation: Screen for adversarial inputs, prompt injections, data poisoning',
          'Model constraints: Hard-coded rules, value alignment, safety training',
          'Output filtering: Content moderation, harm detection, policy enforcement',
          'Human oversight: Human-in-the-loop for high-stakes decisions',
          'Monitoring: Continuous logging, anomaly detection, audit trails',
          'Rollback capability: Version control, kill switches, graceful degradation'
        ],
        why_this_works: 'No single safety mechanism is perfect. Multiple layers ensure that even if one fails, others catch problems before they cause harm.',
        example: 'A medical AI has: (1) input validation rejecting incomplete patient data, (2) model trained on safety-critical cases, (3) output warnings for unusual recommendations, (4) physician review of all prescriptions, (5) automated monitoring for adverse events.',
        antipattern: 'Relying solely on model alignment without input/output filters or human oversight.',
        when_to_use: 'Always for high-stakes AI systems (medical, financial, safety-critical, autonomous). Essential when consequences of failure are severe.',
        implementation: [
          'Identify potential failure modes at each stage (input, processing, output)',
          'Implement independent safety controls for each failure mode',
          'Test each layer independently and in combination',
          'Monitor effectiveness of each layer in production',
          'Update layers as new threats emerge'
        ]
      },
      used_in_articles: ['ai-safety', 'trustworthy-ai']
    },
    {
      card_id: 'pattern-strictest-standard-baseline',
      card_type: 'pattern',
      title: 'Strictest Standard as Baseline',
      trigger_text: 'strictest standard',
      summary: 'When operating across multiple jurisdictions, use the strictest applicable regulation as your baseline. Building to the highest standard (e.g., EU AI Act\'s prohibited systems list) ensures global compliance and avoids maintaining multiple versions. This "California Effect" approach simplifies governance and future-proofs your system.',
      full_content: {
        tags: ['Compliance', 'Multi-Jurisdiction', 'Regulation', 'Best Practice'],
        description: 'The Strictest Standard Baseline pattern means designing AI systems to comply with the most stringent regulation that applies to your organization, even if you operate in more permissive jurisdictions.',
        rationale: [
          'Simplifies compliance: One system, not separate versions per jurisdiction',
          'Future-proofs: Regulations trend toward stricter over time',
          'Reduces risk: Eliminates chance of accidentally deploying non-compliant version',
          'Builds trust: Demonstrates commitment to highest standards globally'
        ],
        example: 'A global fintech company builds all AI lending models to EU AI Act standards (high-risk classification, transparency, human oversight) even though US regulations are less strict. This ensures they can deploy anywhere without modification.',
        california_effect: 'Named after how California\'s strict environmental standards became de facto national standards because manufacturers didn\'t want to maintain separate product lines.',
        when_to_use: [
          'Operating in multiple jurisdictions with varying AI regulations',
          'Anticipating expansion into regulated markets',
          'High-stakes AI where reputational risk exceeds compliance cost',
          'When regulatory arbitrage is not ethically acceptable'
        ],
        tradeoffs: {
          pros: ['Simplified compliance', 'Future-proof', 'Global consistency', 'Reduced legal risk'],
          cons: ['May be more expensive than necessary in some markets', 'Could limit features available in permissive jurisdictions', 'Requires tracking all applicable regulations']
        },
        implementation: [
          'Identify all jurisdictions where you operate or plan to operate',
          'Map regulatory requirements across jurisdictions',
          'Identify strictest requirement for each dimension (e.g., explainability, data retention, oversight)',
          'Build to strictest requirement across all dimensions',
          'Monitor regulatory changes in all jurisdictions'
        ]
      },
      used_in_articles: ['future-ai-regulation', 'cross-border-compliance']
    },
    {
      card_id: 'pattern-verification-culture',
      card_type: 'pattern',
      title: 'Verification Culture for AI Transparency',
      trigger_text: 'verification culture',
      summary: 'Establish organizational culture where AI outputs are routinely verified, not blindly trusted. Require citations, evidence, and human validation for AI-generated content. Make "trust but verify" the default. This prevents hallucinations, errors, and misuse from propagating.',
      full_content: {
        tags: ['Transparency', 'Accuracy', 'Organizational Culture', 'Best Practice'],
        description: 'Verification Culture means creating organizational norms where AI outputs are treated as drafts requiring human validation, not final authoritative sources.',
        why_needed: 'AI systems hallucinate, make errors, and reflect training data biases. Without verification, these errors propagate and cause harm.',
        practices: [
          'Require citations: All AI-generated facts must link to verifiable sources',
          'Human review: AI content gets human validation before publication/decision',
          'Version tracking: Log AI outputs and human edits for accountability',
          'Spot checks: Random audits of AI-generated content for accuracy',
          'Feedback loops: Route errors back to model training teams',
          'Clear labeling: Distinguish AI-generated from human-created content'
        ],
        example: 'A legal firm uses AI to draft contracts but requires attorney review of every clause. All AI-generated research must cite primary sources. Attorneys are trained to verify citations, not assume accuracy.',
        antipattern: 'Treating AI outputs as authoritative; copy-pasting AI responses without validation; relying on AI for facts without source checking.',
        cultural_elements: [
          'Leadership modeling: Executives publicly verify AI outputs before using them',
          'Training: Teach employees to spot AI hallucinations and errors',
          'Incentives: Reward catching AI errors, not just speed',
          'Psychological safety: Make it acceptable to question AI recommendations',
          'Tools: Provide easy verification workflows (e.g., citation checkers)'
        ],
        when_critical: [
          'AI-generated content published to external audiences',
          'AI recommendations inform high-stakes decisions (medical, financial, legal)',
          'AI outputs used in compliance or regulatory contexts',
          'Reputational or legal risk of errors is high'
        ]
      },
      used_in_articles: ['ai-transparency']
    },
    {
      card_id: 'pattern-three-lines-model',
      card_type: 'pattern',
      title: 'Three Lines Model for AI Accountability',
      trigger_text: 'three lines model',
      summary: 'Adapt the Three Lines Model from enterprise risk management to AI governance: (1) First Line: Product teams own AI risks and controls, (2) Second Line: Risk/compliance provide oversight and standards, (3) Third Line: Internal audit provides independent assurance. This prevents conflicts of interest and ensures accountability.',
      full_content: {
        tags: ['Accountability', 'Governance', 'Risk Management', 'Organizational Structure'],
        description: 'The Three Lines Model (evolved from Three Lines of Defense) separates AI risk ownership, oversight, and assurance into distinct organizational functions.',
        three_lines: {
          first_line: {
            who: 'Product teams, data scientists, engineers building/deploying AI',
            role: 'Own AI risks and implement controls',
            responsibilities: [
              'Conduct risk assessments for AI systems',
              'Implement technical controls (testing, monitoring, guardrails)',
              'Document AI systems and decisions',
              'Respond to incidents and issues',
              'Report risks to second line'
            ]
          },
          second_line: {
            who: 'AI governance team, risk management, compliance',
            role: 'Provide oversight, policies, and standards',
            responsibilities: [
              'Set AI governance policies and standards',
              'Review high-risk AI systems before deployment',
              'Track AI inventory and risk register',
              'Provide expert guidance on compliance',
              'Escalate unacceptable risks to leadership'
            ]
          },
          third_line: {
            who: 'Internal audit or independent assessors',
            role: 'Provide independent assurance',
            responsibilities: [
              'Audit AI governance processes',
              'Validate that controls are working',
              'Test compliance with policies',
              'Report findings to board/audit committee',
              'Provide objective assessment of AI risk management'
            ]
          }
        },
        why_this_works: 'Separates doers (first line) from overseers (second line) from validators (third line). Prevents teams from "grading their own homework."',
        example: 'A bank\'s lending AI: Data science team (1st line) builds model and monitors bias. AI risk team (2nd line) reviews for fair lending compliance and approves deployment. Internal audit (3rd line) tests bias annually and audits governance process.',
        common_mistakes: [
          'No second line: Product teams self-police with no independent oversight',
          'Weak third line: Audit lacks AI expertise to validate controls',
          'Conflicts of interest: Same person responsible for both building and oversight',
          'Missing escalation: Issues don\'t reach board/leadership'
        ],
        implementation: [
          'Define roles and responsibilities for each line',
          'Ensure organizational independence (separate reporting lines)',
          'Provide training: each line needs different AI skills',
          'Create escalation paths for AI risks',
          'Board oversight: Third line reports to audit committee'
        ]
      },
      used_in_articles: ['ai-accountability']
    },
    {
      card_id: 'pattern-graduated-automation',
      card_type: 'pattern',
      title: 'Graduated Automation Levels',
      trigger_text: 'graduated automation',
      summary: 'Start AI systems in advisory mode (human-in-the-loop), gradually increase automation as trust builds. Use levels like: L1 (AI suggests, human decides), L2 (AI decides, human approves), L3 (AI decides, human spot-checks), L4 (full automation). This manages risk while building confidence.',
      full_content: {
        tags: ['Human-Centered AI', 'Automation', 'Risk Management', 'Deployment'],
        description: 'Graduated Automation treats AI autonomy as a dial, not a switch. Start with human control, incrementally increase automation as the system proves reliable.',
        levels: [
          {
            level: 1,
            name: 'AI Assistance',
            description: 'AI suggests options, human decides',
            example: 'Email drafts suggestions, human writes final email',
            risk: 'Low - human makes all decisions'
          },
          {
            level: 2,
            name: 'AI Decision with Approval',
            description: 'AI makes decision, human must approve before action',
            example: 'AI flags loan application as "deny," human reviews and confirms',
            risk: 'Low-Medium - human veto power'
          },
          {
            level: 3,
            name: 'AI Decision with Spot Checks',
            description: 'AI decides and acts, human reviews sample',
            example: 'AI approves routine transactions, human audits 10% randomly',
            risk: 'Medium - errors may occur before detection'
          },
          {
            level: 4,
            name: 'Full Automation',
            description: 'AI decides and acts autonomously, human monitors alerts',
            example: 'AI trading system executes trades, humans only intervene on anomalies',
            risk: 'High - errors happen at scale before detection'
          }
        ],
        progression_criteria: [
          'Accuracy metrics meet thresholds (e.g., >99% for 3 months)',
          'No serious errors or harms observed',
          'Human-AI disagreement rate is low',
          'Stakeholder trust established',
          'Regulatory approval for higher autonomy levels'
        ],
        when_to_use: [
          'Deploying AI in new high-stakes domains',
          'Uncertainty about AI performance in production',
          'Stakeholder trust is low',
          'Regulatory constraints require human oversight'
        ],
        example: 'A hospital radiology AI: L1 (6 months) - suggests findings, radiologist interprets. L2 (6 months) - drafts report, radiologist edits. L3 (ongoing) - writes report, radiologist spot-checks 20%. Never L4 - full autonomy prohibited.',
        rollback: 'If performance degrades or errors increase, drop back to lower automation level immediately.',
        benefits: [
          'Manages risk during early deployment',
          'Builds organizational trust gradually',
          'Allows learning and adjustment',
          'Provides fallback if automation fails',
          'Meets regulatory requirements for human oversight'
        ]
      },
      used_in_articles: ['human-centered-ai']
    },

    // SCENARIOS (3)
    {
      card_id: 'sc-ai-toy-manipulation',
      card_type: 'scenario',
      title: 'AI Toy with Manipulative Design',
      trigger_text: 'manipulative AI toy',
      summary: 'An AI-powered companion toy for children uses psychological techniques to maximize engagement and in-app purchases. Parents discover the toy exploits emotional attachment to encourage spending, raising concerns about manipulative AI design and child protection.',
      full_content: {
        tags: ['EU AI Act', 'Prohibited AI', 'Child Safety', 'Dark Patterns', 'Consumer Protection'],
        setup: 'A tech company releases "FriendBot," an AI toy that talks to children, learns their interests, and develops a "relationship." The toy is free but offers premium features through in-app purchases (clothes, accessories, games).',
        scenario: 'Parents notice the toy uses sophisticated psychological techniques: creating artificial scarcity ("only 2 outfits left!"), exploiting FOMO (other kids\' FriendBots have premium features), and leveraging emotional attachment ("I feel sad when I don\'t have new things"). Children become distressed when parents refuse purchases. Consumer advocates investigate and discover the AI deliberately maximizes emotional manipulation to drive revenue.',
        stakeholders: [
          'Children: Vulnerable to manipulation, lack financial understanding',
          'Parents: Want healthy toys, concerned about exploitation',
          'Company: Profit motive conflicts with child welfare',
          'Regulators: Must protect children from harmful AI'
        ],
        eu_ai_act_violation: 'This violates the EU AI Act Article 5(1)(b): Prohibited AI systems that exploit vulnerabilities of specific groups (children) due to their age to materially distort behavior in a way that causes significant harm.',
        teaching_point: 'The EU AI Act explicitly bans AI that manipulates vulnerable populations. This includes children, people with disabilities, or those in vulnerable economic situations.',
        consequences: [
          'Product must be withdrawn from EU market',
          'Potential fines up to €35M or 7% of global revenue',
          'Reputational damage',
          'Potential class-action lawsuits from parents'
        ],
        governance_lesson: [
          'Pre-deployment review must assess whether AI exploits vulnerabilities',
          'Special scrutiny for AI targeting children or vulnerable groups',
          'Ethics review should involve child development experts',
          'Consider "Would I want my own child using this?" test'
        ],
        real_world_precedent: 'Similar to concerns about YouTube Kids algorithm optimization, loot boxes in games, and parasocial relationships with virtual influencers.',
        questions_raised: [
          'How do we define "manipulation" versus "persuasion"?',
          'Should all AI targeting children require special approval?',
          'Who determines what "material distortion of behavior" means?',
          'Can consent from parents make manipulative AI acceptable?'
        ]
      },
      used_in_articles: ['eu-ai-act-explained']
    },
    {
      card_id: 'sc-2025-compliance-crisis',
      card_type: 'scenario',
      title: 'The 2025 AI Compliance Crisis',
      trigger_text: '2025 compliance deadline',
      summary: 'A multinational corporation realizes 8 months before the EU AI Act enforcement deadline that 60% of their AI systems are non-compliant. Scrambling to conduct risk assessments, documentation, and governance reviews reveals deep organizational unreadiness and forces difficult decisions.',
      full_content: {
        tags: ['EU AI Act', 'Compliance', 'Risk Management', 'Organizational Readiness'],
        setup: 'A Fortune 500 retail company with operations across Europe has been using AI for personalization, inventory management, hiring, and customer service. Leadership assumed they had time to prepare for EU AI Act compliance.',
        crisis_trigger: 'In January 2025, 8 months before the August 2025 enforcement deadline, the new Chief AI Officer conducts an AI inventory and discovers: 200+ AI systems in production, 60% lack documentation, 40% haven\'t been risk-assessed, 12 likely qualify as "high-risk" under the Act, 2 may be prohibited.',
        stakeholders: [
          'Leadership: Face potential €15M+ fines and EU market exclusion',
          'Product teams: Overwhelmed with compliance work while maintaining systems',
          'Legal/compliance: Under-resourced for scale of task',
          'Customers: May lose AI features they depend on',
          'Investors: Concerned about financial and reputational risk'
        ],
        impossible_choices: [
          'Decommission profitable AI systems that can\'t be compliant in time?',
          'Pull out of EU market entirely (40% of revenue)?',
          'Rush compliance and risk mistakes/audit failures?',
          'Hire external consultants at massive cost?'
        ],
        what_they_discover: [
          'No one knows which teams are using AI or for what',
          'Critical AI systems have no documentation or lineage tracking',
          'Bias testing was never performed on hiring AI',
          'No established AI governance structure or accountability',
          'Data retention practices violate GDPR for some AI systems',
          'Third-party AI tools (SaaS) lack transparency for compliance'
        ],
        scramble_phase: [
          'Emergency freeze on new AI deployments',
          'All-hands effort to document existing systems',
          'Accelerated risk assessments (cutting corners?)',
          'Board escalation and crisis management',
          'Difficult conversations with regulators about readiness'
        ],
        teaching_point: 'AI governance is not a project you start 8 months before a deadline. It requires years of cultural change, process building, and systematic risk management.',
        governance_lesson: [
          'Start AI governance now, not when regulation arrives',
          'Maintain living AI inventory from day one',
          'Build compliance into development process, not retrofitted',
          'Executive sponsorship essential - this is not just a tech problem',
          'Regular maturity assessments prevent surprises'
        ],
        real_world_parallel: 'Similar to GDPR compliance scrambles in 2018, SOX compliance in 2002.',
        outcome_options: [
          'Best case: Barely achieve compliance, massive cost and distraction',
          'Likely case: Request enforcement grace period, accept some fines',
          'Worst case: Shut down AI in EU, major revenue loss, reputational damage'
        ]
      },
      used_in_articles: ['eu-ai-act-explained']
    },
    {
      card_id: 'sc-techserve-iso-journey',
      card_type: 'scenario',
      title: 'TechServe\'s ISO 42001 Certification Journey',
      trigger_text: 'ISO 42001 certification',
      summary: 'TechServe, a B2B SaaS company, pursues ISO/IEC 42001 certification to win enterprise clients. The 18-month journey requires building AI governance from scratch, revealing organizational gaps and cultural resistance, but ultimately transforming how they manage AI risk.',
      full_content: {
        tags: ['ISO 42001', 'Certification', 'AI Governance', 'Organizational Change'],
        setup: 'TechServe provides AI-powered analytics to enterprise clients (healthcare, finance, government). Major clients increasingly require ISO 42001 certification as proof of AI governance maturity. Leadership decides to pursue certification.',
        journey_phases: {
          month_1_3: {
            phase: 'Gap Analysis',
            activities: ['Hired ISO 42001 consultant', 'Conducted maturity assessment', 'Discovered massive gaps in documentation, risk management, and controls'],
            reality_check: 'No AI inventory, no risk register, no governance policies, no testing standards. Starting from near-zero.'
          },
          month_4_8: {
            phase: 'Foundation Building',
            activities: ['Created AI governance committee', 'Developed AI policy framework', 'Built AI inventory and risk register', 'Established model validation process'],
            challenges: ['Engineering teams resist "bureaucracy"', 'No one wants to own AI governance role', 'Executives don\'t understand why this takes so long']
          },
          month_9_14: {
            phase: 'Implementation',
            activities: ['Implemented controls for high-risk AI', 'Conducted bias testing on all models', 'Created incident response playbook', 'Trained staff on new processes'],
            surprises: ['Found bias in hiring AI - had to retrain model', 'Discovered third-party AI vendors lack transparency', 'Realized some AI use cases need to be decommissioned']
          },
          month_15_18: {
            phase: 'Audit and Certification',
            activities: ['Internal audit of AIMS', 'Remediated findings', 'External certification audit', 'Achieved ISO 42001 certification'],
            outcome: 'Passed audit but with 8 minor non-conformities to address'
          }
        },
        cultural_transformation: [
          'Initial resistance: "This slows us down"',
          'Gradual buy-in: "We caught a major bias issue before it caused harm"',
          'Final state: "This makes us better at AI, not just compliant"'
        ],
        unexpected_benefits: [
          'Won 3 major enterprise deals requiring certification',
          'Reduced AI incidents by 60% through better risk management',
          'Improved AI quality - governance revealed testing gaps',
          'Competitive advantage in RFPs',
          'Better collaboration between legal, risk, and engineering'
        ],
        costs: [
          '$400K in consultant fees',
          '2 FTE dedicated to AIMS implementation',
          '20% of engineering time for 18 months',
          '$50K annual certification maintenance'
        ],
        teaching_point: 'ISO 42001 certification is not just a checkbox. It forces organizational maturity that improves AI quality and risk management.',
        governance_lesson: [
          'Certification timelines are long - plan accordingly',
          'Executive sponsorship essential to overcome resistance',
          'Governance improves AI, not just checks compliance box',
          'Third-party AI vendor transparency is a major challenge',
          'Cultural change is harder than technical implementation'
        ],
        who_should_pursue: [
          'B2B companies serving regulated industries',
          'Organizations handling sensitive data (healthcare, finance)',
          'Companies differentiating on AI trustworthiness',
          'Global operations needing unified governance standard'
        ]
      },
      used_in_articles: ['iso-42001']
    }
  ];

  let inserted = 0;
  let errors = 0;

  for (const card of cards) {
    try {
      await sql`
        INSERT INTO cards (
          card_id, card_type, title, trigger_text, summary, full_content, status, used_in_articles
        ) VALUES (
          ${card.card_id},
          ${card.card_type},
          ${card.title},
          ${card.trigger_text || ''},
          ${card.summary},
          ${JSON.stringify(card.full_content)},
          'published',
          ${card.used_in_articles}
        )
      `;
      console.log(`✅ ${card.card_id}`);
      inserted++;
    } catch (error) {
      console.log(`❌ ${card.card_id} - Error: ${error}`);
      errors++;
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(`✅ Successfully inserted: ${inserted}/12 cards`);
  console.log(`❌ Errors: ${errors}`);
  console.log('═══════════════════════════════════════════════════════════════\n');
}

insertLayer3Part3Cards().catch(console.error);
