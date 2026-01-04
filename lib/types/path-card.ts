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
  lightMode: string;
  darkMode: string;
  lightModeText: string;
  darkModeText: string;
}

export const pathColorMap: Record<PathSlug, PathColors> = {
  history: {
    lightMode: '#FFF8F0', // Cream
    darkMode: '#D4A574', // Toffee Light
    lightModeText: '#000000', // Black on light background
    darkModeText: '#D4A574', // Toffee Light on dark background
  },
  terminology: {
    lightMode: '#FAFAF5', // Off White
    darkMode: '#C4CEB0', // Soft Sage
    lightModeText: '#000000', // Black on light background
    darkModeText: '#C4CEB0', // Soft Sage on dark background
  },
  risk: {
    lightMode: '#FFFFFF', // White
    darkMode: '#FFB347', // Warning Amber
    lightModeText: '#000000', // Black on white background
    darkModeText: '#FFB347', // Warning Amber on dark background
  },
  responsibility: {
    lightMode: '#FFFFF0', // Ivory
    darkMode: '#D4EDDA', // Mint Cream
    lightModeText: '#000000', // Black on light background
    darkModeText: '#D4EDDA', // Mint Cream on dark background
  },
  future: {
    lightMode: '#1A1A2E', // Deep Charcoal
    darkMode: '#FFFFFF', // White
    lightModeText: '#FFFFFF', // White on dark background
    darkModeText: '#FFFFFF', // White on dark background
  },
};
