import { PathCard, PathSlug } from '@/lib/types/path-card';
import {
  loadKnowledgeGraph,
  getAllConceptCards,
  getConceptCardsByPath,
  findConceptCardBySlug,
} from '@/lib/knowledge-graph';

export interface LearningPath {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  cardCount: number;
  estimatedReadingTime: string;
  primaryKeywords: string[];
  conceptCards: string[];
  exampleCards: string[];
  resourceCards: string[];
}

// Map slug to image filename for each path
const slugToImageMap: Record<string, string> = {
  // History images
  'what-ai-actually-is': 'what-ai-actually-is.webp',
  'ai-family-tree': 'ai-family-tree.webp',
  'ai-technology-stack': 'ai-technology-stack.webp',
  'ai-history-timeline': 'ai-history-timeline-f.webp',
  'strong-vs-weak-ai': 'strong-vs-weak-ai.webp',
  'machine-learning-explained': 'machine-learning-explained.webp',
  'deep-learning-explained': 'deep-learning-explained.webp',
  'generative-ai-explained': 'generative-ai-explained.webp',
  'large-language-models': 'large-language-models.webp',
  'ai-vs-automation': 'ai-vs-automation.webp',
  'data-behind-ai': 'data-behind-ai.webp',
  'foundation-models': 'foundation-models.webp',
  'multimodal-ai': 'multimodal-ai.webp',
  'ai-compute-gpus': 'ai-compute-gpus.webp',
  'environmental-cost-ai': 'environmental-cost-ai.webp',
  // Add more images for other paths as needed
};

// Get all cards for a specific path
export async function getCardsByPath(pathSlug: PathSlug): Promise<PathCard[]> {
  const cards = getConceptCardsByPath(pathSlug);

  return cards.map((card) => ({
    id: card.id,
    title: card.title,
    slug: card.slug,
    path: card.path,
    sourceFile: card.source_file,
    tldr: card.tldr,
    contentSections: card.content_sections || [],
    relatedConcepts: card.related_concepts || [],
    crossPathRefs: card.cross_path_refs,
    exampleRefs: card.example_refs,
    tags: card.tags || [],
    image: slugToImageMap[card.slug] || 'default.webp',
  }));
}

// Get path info by slug
export async function getPathBySlug(pathSlug: PathSlug): Promise<LearningPath | null> {
  const kg = loadKnowledgeGraph();
  // Match by id instead of slug, since slugs in KG have /learn/ prefix
  const path = kg.learning_paths.find(p => p.id === pathSlug);

  if (!path) return null;

  return {
    id: path.id,
    title: path.title,
    slug: path.slug,
    tagline: path.tagline,
    description: path.description,
    cardCount: path.card_count,
    estimatedReadingTime: path.estimated_reading_time,
    primaryKeywords: path.primary_keywords,
    conceptCards: path.concept_cards,
    exampleCards: path.example_cards,
    resourceCards: path.resource_cards,
  };
}

// Get all valid path slugs for static generation
export async function getAllPathSlugs(): Promise<PathSlug[]> {
  return ['history', 'terminology', 'risk', 'responsibility', 'future'];
}

// Get path-specific headline text
export function getPathHeadline(pathSlug: PathSlug, pathTitle: string): string {
  const headlines: Record<PathSlug, string> = {
    history: `${pathTitle} from Dartmouth to DeepMind`,
    terminology: `${pathTitle}: Your AI Vocabulary Guide`,
    risk: `${pathTitle}: Understanding AI Dangers`,
    responsibility: `${pathTitle}: Building Ethical AI`,
    future: `${pathTitle}: What's Coming Next`,
  };

  return headlines[pathSlug] || pathTitle;
}

// Get card by slug across all paths
export async function getCardBySlug(slug: string): Promise<PathCard | null> {
  const card = findConceptCardBySlug(slug);
  if (!card) return null;

  return {
    id: card.id,
    title: card.title,
    slug: card.slug,
    path: card.path,
    sourceFile: card.source_file,
    tldr: card.tldr,
    contentSections: card.content_sections || [],
    relatedConcepts: card.related_concepts || [],
    crossPathRefs: card.cross_path_refs,
    exampleRefs: card.example_refs,
    tags: card.tags || [],
    image: slugToImageMap[card.slug] || 'default.webp',
  };
}

// Get related cards by IDs
export async function getRelatedCards(cardIds: string[]): Promise<PathCard[]> {
  const allCards = getAllConceptCards();

  return cardIds
    .map((id) => {
      const card = allCards.find((c) => c.id === id);
      if (!card) return null;

      return {
        id: card.id,
        title: card.title,
        slug: card.slug,
        path: card.path,
        sourceFile: card.source_file,
        tldr: card.tldr,
        contentSections: card.content_sections || [],
        relatedConcepts: card.related_concepts || [],
        crossPathRefs: card.cross_path_refs,
        exampleRefs: card.example_refs,
        tags: card.tags || [],
        image: slugToImageMap[card.slug] || 'default.webp',
      };
    })
    .filter((card): card is PathCard => card !== null);
}

// Get all cards across all paths
export async function getAllCards(): Promise<PathCard[]> {
  const allCards = getAllConceptCards();

  return allCards.map((card) => ({
    id: card.id,
    title: card.title,
    slug: card.slug,
    path: card.path,
    sourceFile: card.source_file,
    tldr: card.tldr,
    contentSections: card.content_sections || [],
    relatedConcepts: card.related_concepts || [],
    crossPathRefs: card.cross_path_refs,
    exampleRefs: card.example_refs,
    tags: card.tags || [],
    image: slugToImageMap[card.slug] || 'default.webp',
  }));
}

// Get total card count
export async function getTotalCardCount(): Promise<number> {
  const kg = loadKnowledgeGraph();
  return kg.metadata.total_concept_cards;
}

// Get all learning paths info
export async function getAllPaths(): Promise<LearningPath[]> {
  const kg = loadKnowledgeGraph();

  return kg.learning_paths.map((path) => ({
    id: path.id,
    title: path.title,
    slug: path.slug,
    tagline: path.tagline,
    description: path.description,
    cardCount: path.card_count,
    estimatedReadingTime: path.estimated_reading_time,
    primaryKeywords: path.primary_keywords,
    conceptCards: path.concept_cards,
    exampleCards: path.example_cards,
    resourceCards: path.resource_cards,
  }));
}
