export interface PathCard {
  id: string;
  title: string;
  slug: string;
  path: string;
  sourceFile: string;
  tldr: string;
  contentSections: string[];
  relatedConcepts: string[];
  crossPathRefs?: {
    terminology?: string[];
    risk?: string[];
    responsibility?: string[];
    future?: string[];
  };
  exampleRefs?: string[];
  tags: string[];
  image: string;
}

export type PathSlug = 'history' | 'terminology' | 'risk' | 'responsibility' | 'future';

export interface PathColors {
  primary: string;
  hover: string;
  light: string;
}

export const pathColorMap: Record<PathSlug, PathColors> = {
  history: {
    primary: '#936639',
    hover: '#333d29',
    light: '#414833',
  },
  terminology: {
    primary: '#4A90E2',
    hover: '#2E5C8A',
    light: '#3A6FA8',
  },
  risk: {
    primary: '#E63946',
    hover: '#A02834',
    light: '#C42F3C',
  },
  responsibility: {
    primary: '#06A77D',
    hover: '#047857',
    light: '#059669',
  },
  future: {
    primary: '#9333EA',
    hover: '#6B21A8',
    light: '#7C3AED',
  },
};
