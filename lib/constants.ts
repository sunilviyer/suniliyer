import { LearningPath } from '@/types/learning-path';

export const LEARNING_PATHS: readonly LearningPath[] = [
  {
    id: 'history',
    title: 'History & Foundations',
    slug: 'history',
    color: '#936639',
    description: 'Understand what AI is, how it works, and why it matters. Explore the evolution of AI from early concepts to modern systems.',
    cardCount: 15,
    heroImage: '/images/heroes/history-hero.webp',
  },
  {
    id: 'terminology',
    title: 'Terminology & Concepts',
    slug: 'terminology',
    color: '#a68a64',
    description: 'Master the essential vocabulary and core concepts that define modern AI systems and machine learning.',
    cardCount: 14,
    heroImage: '/images/heroes/terminology-hero.webp',
  },
  {
    id: 'risk',
    title: 'Risk & Ethics',
    slug: 'risk',
    color: '#582f0e',
    description: 'Navigate the ethical challenges and risk management strategies for responsible AI deployment.',
    cardCount: 20,
    heroImage: '/images/heroes/risk-hero.webp',
  },
  {
    id: 'responsibility',
    title: 'Responsibility & Regulation',
    slug: 'responsibility',
    color: '#a4ac86',
    description: 'Understand global AI regulations, compliance frameworks, and governance best practices.',
    cardCount: 20,
    heroImage: '/images/heroes/responsibility-hero.webp',
  },
  {
    id: 'future',
    title: 'Future of AI',
    slug: 'future',
    color: '#4285F4',
    description: 'Explore emerging technologies, AGI/ASI developments, space applications, and the evolution of human-AI collaboration.',
    cardCount: 20,
    heroImage: '/images/heroes/future-hero.webp',
  },
] as const;

export const PATH_COLORS = {
  history: '#936639',
  terminology: '#a68a64',
  risk: '#582f0e',
  responsibility: '#a4ac86',
  future: '#4285F4',
} as const;
