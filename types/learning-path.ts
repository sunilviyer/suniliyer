export interface LearningPath {
  id: string;
  title: string;
  slug: string;
  color: string;
  description: string;
  cardCount: number;
  heroImage: string;
}

export type PathId = 'history' | 'terminology' | 'risk' | 'responsibility' | 'future';
