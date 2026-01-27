import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixFutureResourcesProperFormat() {
  console.log('Fixing additional resources with proper URL format...\n');

  // AGI Governance
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '[
        {
          "url": "https://hai.stanford.edu/policy/agi-governance",
          "type": "website",
          "title": "Stanford HAI - The AGI Governance Challenge",
          "description": "Research and policy recommendations for governing AGI systems."
        },
        {
          "url": "https://openai.com/blog/planning-for-agi-and-beyond",
          "type": "article",
          "title": "OpenAI - Planning for AGI and Beyond",
          "description": "OpenAI''s approach to developing and governing AGI."
        },
        {
          "url": "https://www.fhi.ox.ac.uk/",
          "type": "website",
          "title": "Future of Humanity Institute - AGI Governance Research",
          "description": "Academic research on existential risks and AGI governance."
        },
        {
          "url": "https://www.safe.ai/",
          "type": "website",
          "title": "Center for AI Safety - AGI Safety Research",
          "description": "Technical and governance research for safe AGI development."
        },
        {
          "url": "https://partnershiponai.org/",
          "type": "website",
          "title": "Partnership on AI - AGI Governance Framework",
          "description": "Multi-stakeholder collaboration on responsible AI development."
        }
      ]'::jsonb
    )::text
    WHERE slug = 'agi-governance'
  `;

  // AI Existential Risk
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '[
        {
          "url": "https://www.safe.ai/statement-on-ai-risk",
          "type": "article",
          "title": "Center for AI Safety - Statement on AI Risk",
          "description": "Expert consensus statement on AI existential risk."
        },
        {
          "url": "https://futureoflife.org/ai-safety-research/",
          "type": "website",
          "title": "Future of Life Institute - AI Safety Research",
          "description": "Research grants and resources for AI safety and x-risk."
        },
        {
          "url": "https://intelligence.org/research/",
          "type": "website",
          "title": "MIRI - Research on AGI Safety",
          "description": "Machine Intelligence Research Institute''s technical safety research."
        },
        {
          "url": "https://www.deepmind.com/safety-and-ethics",
          "type": "website",
          "title": "DeepMind - Technical AGI Safety Research",
          "description": "Industry-leading research on AI alignment and safety."
        },
        {
          "url": "https://www.anthropic.com/index/core-views-on-ai-safety",
          "type": "article",
          "title": "Anthropic - Constitutional AI and Safety Research",
          "description": "Research on building safe, beneficial AI systems."
        }
      ]'::jsonb
    )::text
    WHERE slug = 'ai-existential-risk'
  `;

  // AI National Security
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '[
        {
          "url": "https://www.nscai.gov/",
          "type": "report",
          "title": "NSCAI - Final Report",
          "description": "National Security Commission on AI comprehensive recommendations."
        },
        {
          "url": "https://www.csis.org/programs/strategic-technologies-program/artificial-intelligence",
          "type": "website",
          "title": "CSIS - AI and National Security Series",
          "description": "Policy analysis on AI''s impact on national security."
        },
        {
          "url": "https://www.rand.org/topics/artificial-intelligence/national-security.html",
          "type": "website",
          "title": "RAND Corporation - AI in Defense and National Security",
          "description": "Research on AI applications in defense and security contexts."
        },
        {
          "url": "https://cset.georgetown.edu/",
          "type": "website",
          "title": "Georgetown CSET - AI and Security Research",
          "description": "Center for Security and Emerging Technology research and analysis."
        },
        {
          "url": "https://carnegieendowment.org/programs/technology-and-international-affairs",
          "type": "article",
          "title": "Carnegie Endowment - AI, Strategic Stability, and Nuclear Risk",
          "description": "Analysis of AI''s impact on global strategic stability."
        }
      ]'::jsonb
    )::text
    WHERE slug = 'ai-national-security'
  `;

  // AI Safety
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '[
        {
          "url": "https://www.safe.ai/ai-safety-fundamentals",
          "type": "course",
          "title": "Center for AI Safety - AI Safety Fundamentals",
          "description": "Free online course on AI safety principles and research."
        },
        {
          "url": "https://www.deepmind.com/safety-and-ethics/ai-safety",
          "type": "website",
          "title": "DeepMind - Technical AI Safety Research",
          "description": "Research papers and resources on alignment and robustness."
        },
        {
          "url": "https://openai.com/research/ai-safety",
          "type": "website",
          "title": "OpenAI - AI Alignment Research",
          "description": "Research on making AI systems helpful, harmless, and honest."
        },
        {
          "url": "https://intelligence.org/",
          "type": "website",
          "title": "MIRI - AI Safety Research",
          "description": "Machine Intelligence Research Institute foundational research."
        },
        {
          "url": "https://futureoflife.org/ai-safety/",
          "type": "website",
          "title": "Future of Life Institute - AI Safety Resources",
          "description": "Research grants, policy recommendations, and educational materials."
        }
      ]'::jsonb
    )::text
    WHERE slug = 'ai-safety'
  `;

  // Future AI Ethics
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '[
        {
          "url": "https://standards.ieee.org/industry-connections/ec/autonomous-systems.html",
          "type": "framework",
          "title": "IEEE - Ethically Aligned Design Framework",
          "description": "Comprehensive framework for ethics in autonomous systems."
        },
        {
          "url": "https://partnershiponai.org/",
          "type": "website",
          "title": "Partnership on AI - AI Ethics Resources",
          "description": "Multi-stakeholder best practices and case studies."
        },
        {
          "url": "https://www.montrealdeclaration-responsibleai.com/",
          "type": "framework",
          "title": "Montreal Declaration for Responsible AI",
          "description": "Principles for ethical development and deployment of AI."
        },
        {
          "url": "https://www.acm.org/code-of-ethics",
          "type": "framework",
          "title": "ACM Code of Ethics for AI Practitioners",
          "description": "Professional ethical guidelines for computing professionals."
        },
        {
          "url": "https://ec.europa.eu/digital-single-market/en/news/ethics-guidelines-trustworthy-ai",
          "type": "framework",
          "title": "EU Ethics Guidelines for Trustworthy AI",
          "description": "European Commission guidelines for ethical AI development."
        }
      ]'::jsonb
    )::text
    WHERE slug = 'future-ai-ethics'
  `;

  // Future AI Regulation
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '[
        {
          "url": "https://oecd.ai/",
          "type": "website",
          "title": "OECD - AI Policy Observatory",
          "description": "Global database of AI policies, strategies, and initiatives."
        },
        {
          "url": "https://aiindex.stanford.edu/report/",
          "type": "report",
          "title": "Stanford HAI - AI Index Report (Regulatory Chapter)",
          "description": "Annual report tracking AI regulation worldwide."
        },
        {
          "url": "https://fpf.org/ai-governance/",
          "type": "website",
          "title": "Future of Privacy Forum - AI Governance Tracker",
          "description": "Tracking AI regulations and enforcement actions."
        },
        {
          "url": "https://www.weforum.org/communities/gfc-on-artificial-intelligence-governance",
          "type": "website",
          "title": "World Economic Forum - AI Governance Alliance",
          "description": "Multi-stakeholder initiative on AI governance standards."
        },
        {
          "url": "https://aiforgood.itu.int/",
          "type": "website",
          "title": "UN - AI for Good Global Summit Resources",
          "description": "UN platform for AI governance and sustainable development."
        }
      ]'::jsonb
    )::text
    WHERE slug = 'future-ai-regulation'
  `;

  // AI Governance Careers
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '[
        {
          "url": "https://80000hours.org/career-reviews/ai-safety-researcher/",
          "type": "guide",
          "title": "80,000 Hours - AI Safety Career Guide",
          "description": "Comprehensive career guidance for AI safety and governance roles."
        },
        {
          "url": "https://partnershiponai.org/careers/",
          "type": "website",
          "title": "Partnership on AI - Career Pathways",
          "description": "Job opportunities and career development in responsible AI."
        },
        {
          "url": "https://iapp.org/certify/cipt/",
          "type": "certification",
          "title": "IAPP - AI Governance Certifications",
          "description": "Professional certifications for AI privacy and governance."
        },
        {
          "url": "https://www.safe.ai/careers",
          "type": "website",
          "title": "Center for AI Safety - Career Resources",
          "description": "Resources for pursuing careers in AI safety research."
        },
        {
          "url": "https://www.aisafetysupport.org/",
          "type": "guide",
          "title": "AI Safety Support - Career Transition Guide",
          "description": "Support and resources for transitioning into AI safety careers."
        }
      ]'::jsonb
    )::text
    WHERE slug = 'ai-governance-careers'
  `;

  // Trustworthy AI
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '[
        {
          "url": "https://www.nist.gov/itl/ai-risk-management-framework",
          "type": "framework",
          "title": "NIST - AI Risk Management Framework",
          "description": "Comprehensive framework for managing AI risks in organizations."
        },
        {
          "url": "https://altai.insight-centre.org/",
          "type": "tool",
          "title": "EU - Assessment List for Trustworthy AI (ALTAI)",
          "description": "Practical assessment tool for trustworthy AI implementation."
        },
        {
          "url": "https://www.iso.org/standard/81230.html",
          "type": "standard",
          "title": "ISO/IEC 42001 - AI Management System Standard",
          "description": "International standard for AI management systems."
        },
        {
          "url": "https://standards.ieee.org/ieee/7000/6781/",
          "type": "standard",
          "title": "IEEE P7000 Series - AI Ethics Standards",
          "description": "Family of standards addressing AI ethics and governance."
        },
        {
          "url": "https://www.microsoft.com/en-us/ai/responsible-ai",
          "type": "framework",
          "title": "Microsoft - Responsible AI Standard",
          "description": "Industry-leading framework for responsible AI development."
        }
      ]'::jsonb
    )::text
    WHERE slug = 'trustworthy-ai'
  `;

  console.log('✓ All additional resources updated with proper format\n');

  // Verify
  const verification = await sql`
    SELECT slug,
           jsonb_array_length(yaml_content::jsonb->'additionalResources') as count,
           yaml_content::jsonb->'additionalResources'->0->'url' as first_url
    FROM articles
    WHERE slug IN ('agi-governance', 'ai-existential-risk', 'ai-national-security',
                   'ai-safety', 'future-ai-ethics', 'future-ai-regulation',
                   'ai-governance-careers', 'trustworthy-ai')
    ORDER BY article_id
  `;

  console.log('Verification:');
  verification.forEach(v => {
    console.log(`${v.slug}: ${v.count} resources, first URL: ${v.first_url}`);
  });

  console.log('\n✅ All resources properly formatted with URLs!');
}

fixFutureResourcesProperFormat().catch(console.error);
