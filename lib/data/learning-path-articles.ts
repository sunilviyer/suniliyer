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
}

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
  },
  {
    path: 'history',
    slug: 'ai-history',
    title: 'AI History: Dartmouth to DeepMind',
    description: 'From the 1956 Dartmouth Conference to modern breakthroughs: The complete journey of artificial intelligence',
    tags: ['AI History', 'Dartmouth', 'Deep Learning', 'Technology'],
  },
  {
    path: 'history',
    slug: 'deep-learning-decoded',
    title: 'Deep Learning Decoded',
    description: 'Neural networks explained: How deep learning revolutionized AI through layered pattern recognition',
    tags: ['Deep Learning', 'Neural Networks', 'AI', 'Technology'],
  },
  {
    path: 'history',
    slug: 'generative-ai-explained',
    title: 'Generative AI Explained',
    description: 'From text to images: Understanding the technology behind ChatGPT, DALL-E, and modern generative models',
    tags: ['Generative AI', 'ChatGPT', 'AI', 'LLMs'],
  },
  {
    path: 'history',
    slug: 'how-machines-learn',
    title: 'How Machines Learn',
    description: 'From data to decisions: Understanding supervised, unsupervised, and reinforcement learning',
    tags: ['Machine Learning', 'AI', 'Data Science', 'Algorithms'],
  },
  {
    path: 'history',
    slug: 'large-language-models',
    title: 'Large Language Models',
    description: 'How ChatGPT and GPT-4 work: Understanding transformer architecture and the technology reshaping AI',
    tags: ['LLMs', 'ChatGPT', 'GPT', 'Transformers'],
  },
  {
    path: 'history',
    slug: 'types-of-ai-intelligence',
    title: 'Types of AI Intelligence',
    description: 'Narrow AI vs. General AI vs. Super AI: Understanding the spectrum of artificial intelligence capabilities',
    tags: ['AI', 'AGI', 'Intelligence', 'Technology'],
  },
  {
    path: 'history',
    slug: 'what-ai-actually-is',
    title: 'What AI Actually Is',
    description: 'Demystifying artificial intelligence: Understanding the technology reshaping our world',
    tags: ['AI', 'Artificial Intelligence', 'Machine Learning', 'History'],
  },
  // terminology
  {
    path: 'terminology',
    slug: 'ai-compute',
    title: 'AI Compute',
    description: 'The computational power behind modern AI: Understanding GPUs, TPUs, and the infrastructure scaling challenge',
    tags: ['AI Compute', 'GPUs', 'Infrastructure', 'Cloud'],
  },
  {
    path: 'terminology',
    slug: 'ai-technology-stack',
    title: 'AI Technology Stack',
    description: 'From chips to algorithms: Understanding the hardware and software layers powering modern AI systems',
    tags: ['AI', 'Technology Stack', 'Infrastructure', 'Cloud'],
  },
  {
    path: 'terminology',
    slug: 'ai-vs-automation',
    title: 'AI vs Automation',
    description: 'Intelligence vs. instructions: Understanding the critical difference between AI and traditional automation',
    tags: ['AI', 'Automation', 'RPA', 'Technology'],
  },
  {
    path: 'terminology',
    slug: 'black-box-problem',
    title: 'The Black Box Problem',
    description: 'Why we can\\\'t always explain AI decisions: Understanding interpretability and explainability challenges',
    tags: ['Explainability', 'AI Ethics', 'Interpretability', 'Transparency'],
  },
  {
    path: 'terminology',
    slug: 'data-behind-ai',
    title: 'The Data Behind AI',
    description: 'Quality over quantity: Understanding training data, datasets, and why data determines AI capability',
    tags: ['Data', 'AI Training', 'Datasets', 'Machine Learning'],
  },
  {
    path: 'terminology',
    slug: 'environmental-cost-ai',
    title: 'Environmental Cost of AI',
    description: 'The carbon footprint of training models: Understanding AI\\\'s energy consumption and sustainability challenges',
    tags: ['AI Ethics', 'Sustainability', 'Environment', 'Carbon Footprint'],
  },
  {
    path: 'terminology',
    slug: 'foundation-models',
    title: 'Foundation Models',
    description: 'The base of modern AI: Understanding large pre-trained models that power ChatGPT, Claude, and beyond',
    tags: ['Foundation Models', 'AI', 'LLMs', 'Transfer Learning'],
  },
  {
    path: 'terminology',
    slug: 'multimodal-ai',
    title: 'Multimodal AI',
    description: 'Beyond text: How AI systems process and combine vision, audio, and language',
    tags: ['Multimodal AI', 'Computer Vision', 'NLP', 'AI'],
  },
  // risk
  {
    path: 'risk',
    slug: 'ai-hallucinations',
    title: 'AI Hallucinations',
    description: 'When AI confidently lies: Understanding fabricated outputs and the reliability challenge',
    tags: ['AI Hallucinations', 'LLMs', 'Reliability', 'Trust'],
  },
  {
    path: 'risk',
    slug: 'ai-misinformation',
    title: 'AI Misinformation',
    description: 'Fighting falsehoods at scale: How AI both creates and combats misinformation',
    tags: ['Misinformation', 'AI Ethics', 'Trust', 'Media'],
  },
  {
    path: 'risk',
    slug: 'ai-privacy',
    title: 'AI Privacy Risks',
    description: 'From data collection to model memorization: Understanding privacy threats in the age of AI',
    tags: ['Privacy', 'Data Protection', 'AI Ethics', 'Security'],
  },
  {
    path: 'risk',
    slug: 'algorithmic-bias',
    title: 'Algorithmic Bias',
    description: 'When AI amplifies inequality: Understanding how biased data creates discriminatory AI systems',
    tags: ['AI Bias', 'Fairness', 'Ethics', 'Discrimination'],
  },
  {
    path: 'risk',
    slug: 'autonomous-weapons',
    title: 'Autonomous Weapons',
    description: 'Machines that kill: The ethical and security implications of AI in warfare',
    tags: ['Autonomous Weapons', 'AI Ethics', 'Security', 'Warfare'],
  },
  {
    path: 'risk',
    slug: 'deepfakes-synthetic-media',
    title: 'Deepfakes & Synthetic Media',
    description: 'When seeing isn\\\'t believing: Understanding AI-generated images, videos, and the erosion of trust',
    tags: ['Deepfakes', 'Synthetic Media', 'AI Risk', 'Ethics'],
  },
  {
    path: 'risk',
    slug: 'job-displacement',
    title: 'Job Displacement by AI',
    description: 'Automation anxiety: Understanding which jobs are at risk and how the workforce is changing',
    tags: ['Job Displacement', 'Automation', 'Future of Work', 'Economics'],
  },
  {
    path: 'risk',
    slug: 'when-ai-goes-wrong',
    title: 'When AI Goes Wrong',
    description: 'High-profile failures: Learning from AI systems that caused harm, bias, and unintended consequences',
    tags: ['AI Failures', 'Case Studies', 'Risk Management', 'Ethics'],
  },
  // responsibility
  {
    path: 'responsibility',
    slug: 'ai-accountability',
    title: 'AI Accountability',
    description: 'Who\\\'s responsible when AI fails? Understanding liability, governance, and decision-making frameworks',
    tags: ['Accountability', 'Governance', 'AI Ethics', 'Liability'],
  },
  {
    path: 'responsibility',
    slug: 'ai-transparency',
    title: 'AI Transparency',
    description: 'Opening the black box: Why and how organizations should explain their AI systems',
    tags: ['Transparency', 'Explainability', 'AI Ethics', 'Trust'],
  },
  {
    path: 'responsibility',
    slug: 'cross-border-compliance',
    title: 'Cross-Border AI Compliance',
    description: 'Operating globally in a fragmented regulatory landscape: Managing multi-jurisdictional AI compliance',
    tags: ['Compliance', 'Regulation', 'International', 'AI Law'],
  },
  {
    path: 'responsibility',
    slug: 'eu-ai-act-explained',
    title: 'EU AI Act Explained',
    description: 'The world\\\'s first comprehensive AI law: Understanding risk-based regulation and compliance requirements',
    tags: ['EU AI Act', 'Regulation', 'Compliance', 'AI Law'],
  },
  {
    path: 'responsibility',
    slug: 'global-ai-law-tracker',
    title: 'Global AI Law Tracker',
    description: 'Mapping AI regulation worldwide: Understanding the evolving legal landscape across continents',
    tags: ['AI Law', 'Regulation', 'Compliance', 'Global'],
  },
  {
    path: 'responsibility',
    slug: 'human-centered-ai',
    title: 'Human-Centered AI',
    description: 'Putting people first: Designing AI systems that augment rather than replace human judgment',
    tags: ['Human-Centered AI', 'Design', 'Ethics', 'UX'],
  },
  {
    path: 'responsibility',
    slug: 'iso-42001',
    title: 'ISO 42001',
    description: 'The international standard for AI management systems: Understanding certification and compliance',
    tags: ['ISO 42001', 'Standards', 'Compliance', 'AI Governance'],
  },
  {
    path: 'responsibility',
    slug: 'nist-ai-rmf',
    title: 'NIST AI Risk Management Framework',
    description: 'The US government\\\'s blueprint for trustworthy AI: Understanding NIST\\\'s framework for identifying and mitigating AI risks',
    tags: ['NIST', 'Risk Management', 'AI Governance', 'Framework'],
  },
  // future
  {
    path: 'future',
    slug: 'agi-governance',
    title: 'AGI Governance',
    description: 'Preparing for artificial general intelligence: Governance frameworks for human-level AI systems',
    tags: ['AGI', 'Governance', 'AI Safety', 'Future'],
  },
  {
    path: 'future',
    slug: 'ai-existential-risk',
    title: 'AI Existential Risk',
    description: 'Could AI threaten humanity? Understanding long-term risks and extinction scenarios',
    tags: ['Existential Risk', 'AI Safety', 'Future', 'Ethics'],
  },
  {
    path: 'future',
    slug: 'ai-governance-careers',
    title: 'AI Governance Careers',
    description: 'Breaking into AI governance: Skills, roles, and opportunities in this emerging field',
    tags: ['Careers', 'AI Governance', 'Jobs', 'Skills'],
  },
  {
    path: 'future',
    slug: 'ai-national-security',
    title: 'AI & National Security',
    description: 'The geopolitical AI race: Understanding how AI reshapes defense, surveillance, and global power',
    tags: ['National Security', 'Geopolitics', 'AI', 'Defense'],
  },
  {
    path: 'future',
    slug: 'ai-safety',
    title: 'AI Safety',
    description: 'Building safe AI systems: Understanding alignment, robustness, and the technical safety challenge',
    tags: ['AI Safety', 'Alignment', 'Ethics', 'Risk'],
  },
  {
    path: 'future',
    slug: 'future-ai-ethics',
    title: 'The Future of AI Ethics',
    description: 'Beyond compliance: Emerging ethical frameworks for a world transformed by AI',
    tags: ['AI Ethics', 'Future', 'Philosophy', 'Governance'],
  },
  {
    path: 'future',
    slug: 'future-ai-regulation',
    title: 'The Future of AI Regulation',
    description: 'What comes after the EU AI Act? Understanding the evolution of AI law and global governance',
    tags: ['Regulation', 'AI Law', 'Future', 'Governance'],
  },
  {
    path: 'future',
    slug: 'trustworthy-ai',
    title: 'Trustworthy AI',
    description: 'Building AI systems people can rely on: Understanding the pillars of trust, fairness, and reliability',
    tags: ['Trustworthy AI', 'Ethics', 'Trust', 'Governance'],
  },
];

export function getArticlesByPath(
  path: LearningPathSlug
): LearningPathArticle[] {
  return learningPathArticles.filter((article) => article.path === path);
}
