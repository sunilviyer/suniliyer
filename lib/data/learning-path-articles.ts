/**
 * Canonical index of the published learning-path articles.
 *
 * Single source of truth for anything that has to enumerate the articles
 * without rendering them: app/sitemap.ts and the RSS feed both read this,
 * so the two can't drift apart. Titles and descriptions mirror the
 * getArticleSocialMeta() call in each article's page.tsx.
 */

export type LearningPathSlug =
  | 'history'
  | 'terminology'
  | 'risk'
  | 'responsibility'
  | 'future';

export interface LearningPathArticle {
  /** learning path the article belongs to */
  path: LearningPathSlug;
  /** article slug, i.e. the second segment of /<path>/<slug> */
  slug: string;
  title: string;
  description: string;
  tags: string[];
  /** ISO 8601 publication date; see PUBLICATION_SCHEDULE below */
  publishDate: string;
}

/**
 * The articles were written as one continuous body of work without per-piece
 * publication records, so the dates below are assigned rather than recovered:
 * the series starts 1 February 2024 and advances one week per article in
 * reading order, ending 31 October 2024. The ordering is the real one; the
 * exact days are a stand-in. If real publication dates ever surface (the
 * article rows in the database carry an updatedDate already), replace these
 * and delete this note.
 */
export const PUBLICATION_START_DATE = '2024-02-01T00:00:00Z';
export const PUBLICATION_INTERVAL_DAYS = 7;

export const LEARNING_PATH_SLUGS: LearningPathSlug[] = [
  'history',
  'terminology',
  'risk',
  'responsibility',
  'future',
];

export const learningPathArticles: LearningPathArticle[] = [
  // history
  {
    path: 'history',
    slug: 'ai-family-tree',
    title: 'The AI Family Tree',
    description: 'From symbolic AI to neural networks: Map the evolution of artificial intelligence through its major branches and breakthroughs',
    tags: ['AI', 'History', 'Machine Learning', 'Deep Learning'],
    publishDate: '2024-02-01T00:00:00Z',
  },
  {
    path: 'history',
    slug: 'ai-history',
    title: 'AI History: Dartmouth to DeepMind',
    description: 'From the 1956 Dartmouth Conference to modern breakthroughs: The complete journey of artificial intelligence',
    tags: ['AI History', 'Dartmouth', 'Deep Learning', 'Technology'],
    publishDate: '2024-02-08T00:00:00Z',
  },
  {
    path: 'history',
    slug: 'deep-learning-decoded',
    title: 'Deep Learning Decoded',
    description: 'Neural networks explained: How deep learning revolutionized AI through layered pattern recognition',
    tags: ['Deep Learning', 'Neural Networks', 'AI', 'Technology'],
    publishDate: '2024-02-15T00:00:00Z',
  },
  {
    path: 'history',
    slug: 'generative-ai-explained',
    title: 'Generative AI Explained',
    description: 'From text to images: Understanding the technology behind ChatGPT, DALL-E, and modern generative models',
    tags: ['Generative AI', 'ChatGPT', 'AI', 'LLMs'],
    publishDate: '2024-02-22T00:00:00Z',
  },
  {
    path: 'history',
    slug: 'how-machines-learn',
    title: 'How Machines Learn',
    description: 'From data to decisions: Understanding supervised, unsupervised, and reinforcement learning',
    tags: ['Machine Learning', 'AI', 'Data Science', 'Algorithms'],
    publishDate: '2024-02-29T00:00:00Z',
  },
  {
    path: 'history',
    slug: 'large-language-models',
    title: 'Large Language Models',
    description: 'How ChatGPT and GPT-4 work: Understanding transformer architecture and the technology reshaping AI',
    tags: ['LLMs', 'ChatGPT', 'GPT', 'Transformers'],
    publishDate: '2024-03-07T00:00:00Z',
  },
  {
    path: 'history',
    slug: 'types-of-ai-intelligence',
    title: 'Types of AI Intelligence',
    description: 'Narrow AI vs. General AI vs. Super AI: Understanding the spectrum of artificial intelligence capabilities',
    tags: ['AI', 'AGI', 'Intelligence', 'Technology'],
    publishDate: '2024-03-14T00:00:00Z',
  },
  {
    path: 'history',
    slug: 'what-ai-actually-is',
    title: 'What AI Actually Is',
    description: 'Demystifying artificial intelligence: Understanding the technology reshaping our world',
    tags: ['AI', 'Artificial Intelligence', 'Machine Learning', 'History'],
    publishDate: '2024-03-21T00:00:00Z',
  },
  // terminology
  {
    path: 'terminology',
    slug: 'ai-compute',
    title: 'AI Compute',
    description: 'The computational power behind modern AI: Understanding GPUs, TPUs, and the infrastructure scaling challenge',
    tags: ['AI Compute', 'GPUs', 'Infrastructure', 'Cloud'],
    publishDate: '2024-03-28T00:00:00Z',
  },
  {
    path: 'terminology',
    slug: 'ai-technology-stack',
    title: 'AI Technology Stack',
    description: 'From chips to algorithms: Understanding the hardware and software layers powering modern AI systems',
    tags: ['AI', 'Technology Stack', 'Infrastructure', 'Cloud'],
    publishDate: '2024-04-04T00:00:00Z',
  },
  {
    path: 'terminology',
    slug: 'ai-vs-automation',
    title: 'AI vs Automation',
    description: 'Intelligence vs. instructions: Understanding the critical difference between AI and traditional automation',
    tags: ['AI', 'Automation', 'RPA', 'Technology'],
    publishDate: '2024-04-11T00:00:00Z',
  },
  {
    path: 'terminology',
    slug: 'black-box-problem',
    title: 'The Black Box Problem',
    description: 'Why we can\\\'t always explain AI decisions: Understanding interpretability and explainability challenges',
    tags: ['Explainability', 'AI Ethics', 'Interpretability', 'Transparency'],
    publishDate: '2024-04-18T00:00:00Z',
  },
  {
    path: 'terminology',
    slug: 'data-behind-ai',
    title: 'The Data Behind AI',
    description: 'Quality over quantity: Understanding training data, datasets, and why data determines AI capability',
    tags: ['Data', 'AI Training', 'Datasets', 'Machine Learning'],
    publishDate: '2024-04-25T00:00:00Z',
  },
  {
    path: 'terminology',
    slug: 'environmental-cost-ai',
    title: 'Environmental Cost of AI',
    description: 'The carbon footprint of training models: Understanding AI\\\'s energy consumption and sustainability challenges',
    tags: ['AI Ethics', 'Sustainability', 'Environment', 'Carbon Footprint'],
    publishDate: '2024-05-02T00:00:00Z',
  },
  {
    path: 'terminology',
    slug: 'foundation-models',
    title: 'Foundation Models',
    description: 'The base of modern AI: Understanding large pre-trained models that power ChatGPT, Claude, and beyond',
    tags: ['Foundation Models', 'AI', 'LLMs', 'Transfer Learning'],
    publishDate: '2024-05-09T00:00:00Z',
  },
  {
    path: 'terminology',
    slug: 'multimodal-ai',
    title: 'Multimodal AI',
    description: 'Beyond text: How AI systems process and combine vision, audio, and language',
    tags: ['Multimodal AI', 'Computer Vision', 'NLP', 'AI'],
    publishDate: '2024-05-16T00:00:00Z',
  },
  // risk
  {
    path: 'risk',
    slug: 'ai-hallucinations',
    title: 'AI Hallucinations',
    description: 'When AI confidently lies: Understanding fabricated outputs and the reliability challenge',
    tags: ['AI Hallucinations', 'LLMs', 'Reliability', 'Trust'],
    publishDate: '2024-05-23T00:00:00Z',
  },
  {
    path: 'risk',
    slug: 'ai-misinformation',
    title: 'AI Misinformation',
    description: 'Fighting falsehoods at scale: How AI both creates and combats misinformation',
    tags: ['Misinformation', 'AI Ethics', 'Trust', 'Media'],
    publishDate: '2024-05-30T00:00:00Z',
  },
  {
    path: 'risk',
    slug: 'ai-privacy',
    title: 'AI Privacy Risks',
    description: 'From data collection to model memorization: Understanding privacy threats in the age of AI',
    tags: ['Privacy', 'Data Protection', 'AI Ethics', 'Security'],
    publishDate: '2024-06-06T00:00:00Z',
  },
  {
    path: 'risk',
    slug: 'algorithmic-bias',
    title: 'Algorithmic Bias',
    description: 'When AI amplifies inequality: Understanding how biased data creates discriminatory AI systems',
    tags: ['AI Bias', 'Fairness', 'Ethics', 'Discrimination'],
    publishDate: '2024-06-13T00:00:00Z',
  },
  {
    path: 'risk',
    slug: 'autonomous-weapons',
    title: 'Autonomous Weapons',
    description: 'Machines that kill: The ethical and security implications of AI in warfare',
    tags: ['Autonomous Weapons', 'AI Ethics', 'Security', 'Warfare'],
    publishDate: '2024-06-20T00:00:00Z',
  },
  {
    path: 'risk',
    slug: 'deepfakes-synthetic-media',
    title: 'Deepfakes & Synthetic Media',
    description: 'When seeing isn\\\'t believing: Understanding AI-generated images, videos, and the erosion of trust',
    tags: ['Deepfakes', 'Synthetic Media', 'AI Risk', 'Ethics'],
    publishDate: '2024-06-27T00:00:00Z',
  },
  {
    path: 'risk',
    slug: 'job-displacement',
    title: 'Job Displacement by AI',
    description: 'Automation anxiety: Understanding which jobs are at risk and how the workforce is changing',
    tags: ['Job Displacement', 'Automation', 'Future of Work', 'Economics'],
    publishDate: '2024-07-04T00:00:00Z',
  },
  {
    path: 'risk',
    slug: 'when-ai-goes-wrong',
    title: 'When AI Goes Wrong',
    description: 'High-profile failures: Learning from AI systems that caused harm, bias, and unintended consequences',
    tags: ['AI Failures', 'Case Studies', 'Risk Management', 'Ethics'],
    publishDate: '2024-07-11T00:00:00Z',
  },
  // responsibility
  {
    path: 'responsibility',
    slug: 'ai-accountability',
    title: 'AI Accountability',
    description: 'Who\\\'s responsible when AI fails? Understanding liability, governance, and decision-making frameworks',
    tags: ['Accountability', 'Governance', 'AI Ethics', 'Liability'],
    publishDate: '2024-07-18T00:00:00Z',
  },
  {
    path: 'responsibility',
    slug: 'ai-transparency',
    title: 'AI Transparency',
    description: 'Opening the black box: Why and how organizations should explain their AI systems',
    tags: ['Transparency', 'Explainability', 'AI Ethics', 'Trust'],
    publishDate: '2024-07-25T00:00:00Z',
  },
  {
    path: 'responsibility',
    slug: 'cross-border-compliance',
    title: 'Cross-Border AI Compliance',
    description: 'Operating globally in a fragmented regulatory landscape: Managing multi-jurisdictional AI compliance',
    tags: ['Compliance', 'Regulation', 'International', 'AI Law'],
    publishDate: '2024-08-01T00:00:00Z',
  },
  {
    path: 'responsibility',
    slug: 'eu-ai-act-explained',
    title: 'EU AI Act Explained',
    description: 'The world\\\'s first comprehensive AI law: Understanding risk-based regulation and compliance requirements',
    tags: ['EU AI Act', 'Regulation', 'Compliance', 'AI Law'],
    publishDate: '2024-08-08T00:00:00Z',
  },
  {
    path: 'responsibility',
    slug: 'global-ai-law-tracker',
    title: 'Global AI Law Tracker',
    description: 'Mapping AI regulation worldwide: Understanding the evolving legal landscape across continents',
    tags: ['AI Law', 'Regulation', 'Compliance', 'Global'],
    publishDate: '2024-08-15T00:00:00Z',
  },
  {
    path: 'responsibility',
    slug: 'human-centered-ai',
    title: 'Human-Centered AI',
    description: 'Putting people first: Designing AI systems that augment rather than replace human judgment',
    tags: ['Human-Centered AI', 'Design', 'Ethics', 'UX'],
    publishDate: '2024-08-22T00:00:00Z',
  },
  {
    path: 'responsibility',
    slug: 'iso-42001',
    title: 'ISO 42001',
    description: 'The international standard for AI management systems: Understanding certification and compliance',
    tags: ['ISO 42001', 'Standards', 'Compliance', 'AI Governance'],
    publishDate: '2024-08-29T00:00:00Z',
  },
  {
    path: 'responsibility',
    slug: 'nist-ai-rmf',
    title: 'NIST AI Risk Management Framework',
    description: 'The US government\\\'s blueprint for trustworthy AI: Understanding NIST\\\'s framework for identifying and mitigating AI risks',
    tags: ['NIST', 'Risk Management', 'AI Governance', 'Framework'],
    publishDate: '2024-09-05T00:00:00Z',
  },
  // future
  {
    path: 'future',
    slug: 'agi-governance',
    title: 'AGI Governance',
    description: 'Preparing for artificial general intelligence: Governance frameworks for human-level AI systems',
    tags: ['AGI', 'Governance', 'AI Safety', 'Future'],
    publishDate: '2024-09-12T00:00:00Z',
  },
  {
    path: 'future',
    slug: 'ai-existential-risk',
    title: 'AI Existential Risk',
    description: 'Could AI threaten humanity? Understanding long-term risks and extinction scenarios',
    tags: ['Existential Risk', 'AI Safety', 'Future', 'Ethics'],
    publishDate: '2024-09-19T00:00:00Z',
  },
  {
    path: 'future',
    slug: 'ai-governance-careers',
    title: 'AI Governance Careers',
    description: 'Breaking into AI governance: Skills, roles, and opportunities in this emerging field',
    tags: ['Careers', 'AI Governance', 'Jobs', 'Skills'],
    publishDate: '2024-09-26T00:00:00Z',
  },
  {
    path: 'future',
    slug: 'ai-national-security',
    title: 'AI & National Security',
    description: 'The geopolitical AI race: Understanding how AI reshapes defense, surveillance, and global power',
    tags: ['National Security', 'Geopolitics', 'AI', 'Defense'],
    publishDate: '2024-10-03T00:00:00Z',
  },
  {
    path: 'future',
    slug: 'ai-safety',
    title: 'AI Safety',
    description: 'Building safe AI systems: Understanding alignment, robustness, and the technical safety challenge',
    tags: ['AI Safety', 'Alignment', 'Ethics', 'Risk'],
    publishDate: '2024-10-10T00:00:00Z',
  },
  {
    path: 'future',
    slug: 'future-ai-ethics',
    title: 'The Future of AI Ethics',
    description: 'Beyond compliance: Emerging ethical frameworks for a world transformed by AI',
    tags: ['AI Ethics', 'Future', 'Philosophy', 'Governance'],
    publishDate: '2024-10-17T00:00:00Z',
  },
  {
    path: 'future',
    slug: 'future-ai-regulation',
    title: 'The Future of AI Regulation',
    description: 'What comes after the EU AI Act? Understanding the evolution of AI law and global governance',
    tags: ['Regulation', 'AI Law', 'Future', 'Governance'],
    publishDate: '2024-10-24T00:00:00Z',
  },
  {
    path: 'future',
    slug: 'trustworthy-ai',
    title: 'Trustworthy AI',
    description: 'Building AI systems people can rely on: Understanding the pillars of trust, fairness, and reliability',
    tags: ['Trustworthy AI', 'Ethics', 'Trust', 'Governance'],
    publishDate: '2024-10-31T00:00:00Z',
  },
];

export function getArticlesByPath(
  path: LearningPathSlug
): LearningPathArticle[] {
  return learningPathArticles.filter((article) => article.path === path);
}

/**
 * Publication date for one article, or undefined for a path/slug that is not
 * a learning-path article (constitution and portfolio pages, for instance).
 */
export function getArticlePublishDate(
  path: string,
  slug: string
): string | undefined {
  return learningPathArticles.find(
    (article) => article.path === path && article.slug === slug
  )?.publishDate;
}
