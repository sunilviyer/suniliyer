import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { EnhancedArticleContent } from '@/components/articles/EnhancedArticleContent';
import { PullQuote } from '@/components/articles/PullQuote';
import { ArticleChecklist } from '@/components/articles/ArticleChecklist';
import { EnhancedTable } from '@/components/articles/EnhancedTable';
import { AdditionalResources } from '@/components/articles/AdditionalResources';
import { KeyTakeaways } from '@/components/articles/KeyTakeaways';

const articleContent = `
## The Penalty Structure: Three Tiers of Fines

The EU AI Act establishes three tiers of administrative fines based on the severity of the violation. Each tier is designed to be proportionate to the risk posed by the non-compliant AI system.

### Tier 1: Up to €35 Million or 7% of Global Revenue

*For the most serious violations*

This tier applies to **prohibited AI practices** under Article 5—the systems deemed so dangerous they're banned outright. If you're deploying social scoring, subliminal manipulation, or real-time biometric surveillance in public spaces, you're facing the maximum penalty tier.

### Tier 2: Up to €15 Million or 3% of Global Revenue

*For high-risk and GPAI violations*

This tier applies to:
- Non-compliance with **high-risk AI requirements** (Articles 9-15)
- Non-compliance with **GPAI model obligations**
- Violations by **notified bodies** (organizations that do third-party conformity assessments)

### Tier 3: Up to €7.5 Million or 1% of Global Revenue

*For less serious violations*

This tier applies to providing **incorrect, incomplete, or misleading information** to authorities or notified bodies.
`;

const comparisonTableData = [
  {
    regulation: 'EU AI Act (prohibited AI)',
    maxFine: '€35 million',
    revenuePercentage: '7%'
  },
  {
    regulation: 'EU AI Act (high-risk)',
    maxFine: '€15 million',
    revenuePercentage: '3%'
  },
  {
    regulation: 'GDPR',
    maxFine: '€20 million',
    revenuePercentage: '4%'
  },
  {
    regulation: 'EU Digital Services Act',
    maxFine: '€20 million',
    revenuePercentage: '6%'
  },
  {
    regulation: 'EU Digital Markets Act',
    maxFine: 'N/A',
    revenuePercentage: '10% (20% repeat)'
  }
];

const timelineContent = `
## The Phased Implementation Timeline

The EU AI Act doesn't apply all at once. It uses a phased approach to give organizations time to prepare:

### Phase 1: Prohibited Practices (February 2, 2025)

**6 months after entry into force**

All prohibited AI practices become illegal. If your organization uses social scoring systems, subliminal manipulation, or emotion recognition in workplaces, you must stop by February 2025.

### Phase 2: GPAI Rules and Governance (August 2, 2025)

**12 months after entry into force**

GPAI model obligations become applicable. Foundation model providers must have:
- Technical documentation ready
- Training data summaries published
- Copyright compliance policies in place
- Systemic risk providers face additional requirements

### Phase 3: Full Application (August 2, 2026)

**24 months after entry into force**

Most high-risk AI requirements become applicable. If you provide or deploy high-risk AI systems:
- All seven high-risk requirements must be met
- Conformity assessment must be complete
- CE marking and EU database registration required
- Deployer obligations take effect

### Phase 4: Extended Deadline for Certain Products (August 2, 2027)

**36 months after entry into force**

High-risk AI systems that are safety components of products covered by certain EU product legislation (vehicles, civil aviation, railways, medical devices) get additional time.
`;

const enforcementContent = `
## What Happens in Practice: Enforcement Scenarios

The EU AI Act enforcement will involve coordinated action between national authorities and the EU AI Office. National authorities handle most enforcement, while the EU AI Office oversees general-purpose AI models with systemic risk.

**Key Enforcement Mechanisms:**

1. **Market Surveillance**: Continuous monitoring of AI systems in the market
2. **Investigation Powers**: Authorities can request documentation, conduct audits, and interview personnel
3. **Corrective Measures**: Orders to withdraw products, cease prohibited practices, or modify systems
4. **Administrative Fines**: Financial penalties based on severity and global revenue
5. **Public Disclosure**: Enforcement actions may be published to deter violations

Organizations should prepare for potential enforcement by maintaining thorough documentation, implementing robust governance, and ensuring ongoing compliance monitoring.
`;

const conclusionContent = `
## Conclusion

The EU AI Act's enforcement framework is designed to have teeth. Penalties that can reach 7% of global revenue get attention at the board level. The phased timeline gives organizations time to prepare—but that time is limited.

Organizations that start now will be positioned for compliance. Those who wait risk enforcement action, reputational damage, and significant financial penalties.

**The EU AI Act isn't just another regulation to manage—it's a transformation in how AI is governed. Treat it accordingly.**
`;

const additionalResourcesData = [
  {
    title: 'EU AI Act Full Text (Official Journal)',
    url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
    type: 'Legal Document'
  },
  {
    title: 'EU AI Office Enforcement Framework',
    url: 'https://digital-strategy.ec.europa.eu/en/policies/ai-office',
    type: 'Official Guidance'
  },
  {
    title: 'IAPP EU AI Act Enforcement Guide',
    url: 'https://iapp.org/',
    type: 'Industry Resource'
  }
];

const keyTakeawaysData = [
  'Penalties reach up to €35M or 7% of global revenue for prohibited AI',
  'Enforcement begins in phases: Feb 2025 (prohibited), Aug 2026 (full)',
  'National authorities and EU AI Office share enforcement duties',
  'SMEs and startups get special consideration in penalty calculations',
  'Self-reporting and cooperation reduce enforcement risk'
];

const sidebarCardsData = [
  {
    id: 'ex-1',
    title: 'Social Scoring Violation',
    type: 'example' as const,
    image: '/images/examples/predictive-policing.webp',
    summary: 'Company fined €35M for rating employees based on social behavior',
    data: {
      id: 'ex-1',
      title: 'Social Scoring Violation',
      description: 'A company implements AI that rates employees based on social behavior for promotions. This prohibited practice results in immediate cease-and-desist plus fines up to €35M or 7% of global revenue.',
      category: 'Prohibited Practice'
    }
  },
  {
    id: 'ex-2',
    title: 'Undocumented Hiring AI',
    type: 'example' as const,
    image: '/images/examples/ai-resume-screening.webp',
    summary: 'German authorities fine company €8M for non-compliant screening AI',
    data: {
      id: 'ex-2',
      title: 'Undocumented Hiring AI',
      description: 'A software company sells resume-screening AI without conformity assessment or technical documentation. German authorities order market withdrawal, 90-day compliance deadline, and €8M fine.',
      category: 'High-Risk Violation'
    }
  },
  {
    id: 'fw-gdpr',
    title: 'GDPR',
    type: 'framework' as const,
    image: '/images/examples/gdpr-enforcement-example.webp',
    summary: 'EU data protection regulation with similar enforcement structure',
    data: {
      id: 'fw-gdpr',
      title: 'GDPR',
      jurisdiction: 'European Union',
      yearEnacted: 2018,
      type: 'regulation' as const,
      overview: 'General Data Protection Regulation governing personal data processing and privacy rights',
      keyRequirements: [
        'Lawful basis for data processing',
        'Data subject rights (access, erasure, portability)',
        'Data Protection Impact Assessments',
        'Privacy by design and default'
      ],
      penalties: 'Up to €20 million or 4% of global revenue',
      officialUrl: 'https://gdpr.eu/'
    }
  },
  {
    id: 'insight-ai-market',
    title: 'Global AI Market Value',
    type: 'insight' as const,
    image: '/images/examples/foundation-models.webp',
    summary: '$196B market demonstrates rapid AI adoption',
    data: {
      id: 'insight-ai-market',
      metric: 'Global AI Market Value',
      value: '$196 Billion',
      year: 2024,
      source: 'Gartner, 2024',
      sourceUrl: 'https://www.gartner.com/',
      significance: 'Demonstrates rapid enterprise adoption of AI technologies across all industries',
      trend: 'increasing' as const,
      comparison: [
        { label: '2023', value: '$142B' },
        { label: '2025 (projected)', value: '$305B' },
        { label: 'CAGR 2024-2030', value: '37.3%' }
      ]
    }
  },
  {
    id: 'concept-model-drift',
    title: 'Model Drift',
    type: 'concept' as const,
    image: '/images/examples/chatgpt.webp',
    summary: 'AI performance degrades as real-world data changes',
    data: {
      id: 'concept-model-drift',
      term: 'Model Drift',
      definition: 'When an AI model\'s performance degrades over time because real-world data changes from what it was trained on.',
      plainEnglish: 'The AI gets worse because the world changed but the AI didn\'t',
      category: 'drift' as const,
      relatedTerms: ['Data drift', 'Concept drift', 'Covariate shift'],
      linksToArticle: 'model-drift'
    }
  },
  {
    id: 'sc-hiring-dilemma',
    title: 'The Hiring Algorithm Dilemma',
    type: 'scenario' as const,
    image: '/images/examples/amazon-hiring-bias.webp',
    summary: 'Balance efficiency vs fairness in AI recruitment',
    data: {
      id: 'sc-hiring-dilemma',
      title: 'The Hiring Algorithm Dilemma',
      setup: 'Your company\'s AI screening tool improves efficiency 40% but shows 15% lower selection rate for women candidates.',
      challenge: 'Balance efficiency gains against potential discrimination and legal liability',
      options: [
        'Continue using with monitoring',
        'Adjust algorithm to equalize rates',
        'Discontinue AI screening',
        'Implement hybrid human-AI review'
      ],
      teachingPoint: 'Efficiency vs fairness tradeoffs require human judgment, not just optimization',
      discussionQuestions: [
        'What data would you need to make this decision?',
        'Who should be involved in the decision?',
        'What are the legal implications of each option?'
      ]
    }
  },
  {
    id: 'ms-ai-act',
    title: 'EU AI Act Approval',
    type: 'milestone' as const,
    image: '/images/examples/eu-ai-act-cases.webp',
    summary: 'World\'s first comprehensive AI regulation passes European Parliament',
    data: {
      id: 'ms-ai-act',
      date: 'August 1, 2024',
      title: 'EU AI Act Enters Into Force',
      description: 'The European Union\'s AI Act officially enters into force, establishing the world\'s first comprehensive regulatory framework for artificial intelligence.',
      significance: 'Sets global precedent for AI governance and creates phased implementation timeline through 2027',
      impactedRegions: ['European Union', 'Global'],
      relatedArticles: ['eu-ai-act-overview', 'high-risk-ai-systems']
    }
  },
  {
    id: 'res-compliance-checklist',
    title: 'AI Act Compliance Checklist',
    type: 'resource' as const,
    image: '/images/examples/gdpr-enforcement-example.webp',
    summary: 'Step-by-step guide to EU AI Act compliance',
    data: {
      id: 'res-compliance-checklist',
      title: 'AI Act Compliance Checklist',
      type: 'checklist' as const,
      description: 'Comprehensive checklist for organizations preparing for EU AI Act enforcement',
      url: 'https://example.com/ai-act-checklist.pdf',
      author: 'EU AI Office',
      publicationDate: '2024-12',
      category: 'compliance'
    }
  },
  {
    id: 'pat-governance',
    title: 'AI Governance Framework',
    type: 'pattern' as const,
    image: '/images/examples/foundation-models.webp',
    summary: 'Establish cross-functional AI oversight structure',
    data: {
      id: 'pat-governance',
      pattern: 'AI Governance Committee',
      context: 'Organizations deploying high-risk AI need structured oversight and accountability',
      problem: 'AI systems often lack clear ownership and responsible governance',
      solution: 'Establish a cross-functional AI Governance Committee with defined roles, decision-making authority, and regular review cadence',
      implementation: [
        'Form committee with representatives from legal, compliance, engineering, and business',
        'Define decision-making authority and escalation paths',
        'Establish regular review schedule for AI systems',
        'Create documentation requirements and approval workflows',
        'Implement ongoing monitoring and incident response procedures'
      ],
      benefits: [
        'Clear accountability for AI decisions',
        'Cross-functional risk assessment',
        'Consistent compliance approach',
        'Faster response to regulatory changes'
      ],
      antipatterns: [
        'Single-person AI oversight',
        'Ad-hoc decision making',
        'Siloed technical teams without business input'
      ]
    }
  }
];

export default function DemoArticlePage() {
  return (
    <ArticleLayout
      path="responsibility"
      pathTitle="Responsibility"
      articleTitle="Article 55: EU AI Act Enforcement – Penalties and Compliance Timelines"
      tldr="The EU AI Act establishes three tiers of administrative fines: up to €35M/7% for prohibited practices, €15M/3% for high-risk violations, and €7.5M/1% for misleading information. With enforcement beginning February 2025 for banned AI and full application by August 2026, organizations must act now to avoid severe penalties."
      tags={['EU AI Act', 'Enforcement', 'Compliance', 'Penalties', 'Governance']}
      readTime="11 min read"
      updatedDate="December 2024"
      headerImage="/images/headercards/responsibility-header.png"
      sidebarCards={sidebarCardsData}
    >
      {/* Introduction */}
      <EnhancedArticleContent
        content={articleContent}
        sources={[]}
      />

      {/* Pull Quote */}
      <PullQuote
        quote="The EU AI Act's 7% penalty for prohibited AI practices exceeds GDPR's maximum of 4%. This signals how seriously the EU takes certain AI harms."
        variant="highlight"
      />

      {/* Comparison Table */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        Comparing to Other Regulations
      </h2>
      <p className="content-p">
        How do EU AI Act fines stack up against other major regulations?
      </p>

      <EnhancedTable
        caption="Regulatory Penalty Comparison"
        variant="striped"
        columns={[
          { header: 'Regulation', accessor: 'regulation', width: '40%' },
          { header: 'Maximum Fine', accessor: 'maxFine', width: '30%' },
          { header: 'Revenue %', accessor: 'revenuePercentage', width: '30%' }
        ]}
        data={comparisonTableData}
      />

      {/* Timeline Section */}
      <EnhancedArticleContent
        content={timelineContent}
        sources={[]}
      />

      {/* Preparation Checklist */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        How to Prepare for Enforcement
      </h2>

      <ArticleChecklist
        title="Immediate Actions (Now - February 2025)"
        interactive={true}
        items={[
          { id: '1', text: 'Audit for prohibited practices: Are you using any banned AI?', checked: false },
          { id: '2', text: 'Inventory AI systems: Document all AI you provide or deploy', checked: false },
          { id: '3', text: 'Classify systems: Determine risk level for each AI system', checked: false },
          { id: '4', text: 'Designate responsibility: Who owns AI governance in your organization?', checked: false }
        ]}
      />

      <ArticleChecklist
        title="Short-Term Actions (By August 2025)"
        interactive={true}
        items={[
          { id: '5', text: 'GPAI compliance (if applicable): Complete documentation requirements', checked: false },
          { id: '6', text: 'Begin high-risk preparation: Start building compliance infrastructure', checked: false },
          { id: '7', text: 'Establish policies: Create AI governance policies and procedures', checked: false },
          { id: '8', text: 'Train staff: Ensure relevant employees understand obligations', checked: false }
        ]}
      />

      <ArticleChecklist
        title="Medium-Term Actions (By August 2026)"
        interactive={true}
        items={[
          { id: '9', text: 'Complete high-risk compliance: All requirements met', checked: false },
          { id: '10', text: 'Conduct conformity assessment: Self-assessment or third-party', checked: false },
          { id: '11', text: 'Register systems: Enter high-risk systems in EU database', checked: false },
          { id: '12', text: 'Implement monitoring: Set up post-market surveillance', checked: false }
        ]}
      />

      {/* Enforcement Scenarios */}
      <EnhancedArticleContent
        content={enforcementContent}
        sources={[]}
      />

      {/* Pull Quote - Sidebar variant */}
      <PullQuote
        quote="Penalties that can reach 7% of global revenue get attention at the board level."
        attribution="EU AI Act, Article 55"
        variant="sidebar"
      />

      {/* Conclusion */}
      <EnhancedArticleContent
        content={conclusionContent}
        sources={[]}
      />

      {/* Key Takeaways - Accordion above Additional Resources */}
      <KeyTakeaways takeaways={keyTakeawaysData} />

      {/* Additional Resources - Above sources */}
      <AdditionalResources resources={additionalResourcesData} />

      {/* Sources Section - At the bottom */}
      <EnhancedArticleContent
        content=""
        sources={[
          {
            title: 'Regulation (EU) 2024/1689 of the European Parliament and of the Council (EU AI Act)',
            author: 'European Union',
            publication: 'Official Journal of the European Union',
            year: '2024',
            url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
            type: 'government'
          },
          {
            title: 'AI Act: Questions and Answers on Enforcement',
            author: 'European Commission',
            publication: 'European Commission Press Corner',
            year: '2024',
            url: 'https://ec.europa.eu/commission/presscorner/detail/en/qanda_21_1683',
            type: 'government'
          },
          {
            title: 'Enforcement Framework and Procedures',
            author: 'EU AI Office',
            publication: 'EU AI Office',
            year: '2024',
            url: 'https://digital-strategy.ec.europa.eu/en/policies/ai-office',
            type: 'government'
          },
          {
            title: 'GDPR Enforcement Tracker: Lessons for AI Act',
            author: 'European Data Protection Board',
            publication: 'EDPB',
            year: '2018-2024',
            url: 'https://edpb.europa.eu/',
            type: 'government'
          },
          {
            title: 'EU AI Act Enforcement Guide',
            author: 'International Association of Privacy Professionals',
            publication: 'IAPP',
            year: '2024',
            url: 'https://iapp.org/',
            type: 'other'
          }
        ]}
      />
    </ArticleLayout>
  );
}
