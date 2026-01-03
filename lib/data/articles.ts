import { readFileSync } from 'fs';
import { join } from 'path';
import * as yaml from 'js-yaml';

export interface Article {
  id: string;
  title: string;
  slug: string;
  path: string;
  pathTitle: string;
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

interface ConceptCard {
  id: string;
  title: string;
  slug: string;
  path: string;
  source_file: string;
  tldr: string;
  content_sections?: string[];
  related_concepts?: string[];
  cross_path_refs?: {
    terminology?: string[];
    risk?: string[];
    responsibility?: string[];
    future?: string[];
  };
  example_refs?: string[];
  tags?: string[];
}

interface KnowledgeGraph {
  learning_paths: Array<{
    id: string;
    title: string;
    slug: string;
  }>;
  concept_cards_history: ConceptCard[];
  concept_cards_terminology?: ConceptCard[];
  concept_cards_risk?: ConceptCard[];
  concept_cards_responsibility?: ConceptCard[];
  concept_cards_future?: ConceptCard[];
}

function loadKnowledgeGraph(): KnowledgeGraph {
  const filePath = join(process.cwd(), 'content/knowledge-graph.yaml');
  const fileContent = readFileSync(filePath, 'utf-8');
  return yaml.load(fileContent) as KnowledgeGraph;
}

// Map slug to image filename
const slugToImageMap: Record<string, string> = {
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
};

// Map path IDs to titles
const pathTitles: Record<string, string> = {
  history: 'History & Foundations',
  terminology: 'Terminology',
  risk: 'Risk',
  responsibility: 'Responsibility',
  future: 'Future',
};

export async function getAllArticleSlugs(): Promise<string[]> {
  const kg = loadKnowledgeGraph();
  const slugs: string[] = [];

  // Collect all concept cards from all paths
  const allCards = [
    ...(kg.concept_cards_history || []),
    ...(kg.concept_cards_terminology || []),
    ...(kg.concept_cards_risk || []),
    ...(kg.concept_cards_responsibility || []),
    ...(kg.concept_cards_future || []),
  ];

  allCards.forEach((card) => {
    if (card.slug) {
      slugs.push(card.slug);
    }
  });

  return slugs;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const kg = loadKnowledgeGraph();

  // Search in all concept card arrays
  const allCards = [
    ...(kg.concept_cards_history || []),
    ...(kg.concept_cards_terminology || []),
    ...(kg.concept_cards_risk || []),
    ...(kg.concept_cards_responsibility || []),
    ...(kg.concept_cards_future || []),
  ];

  const card = allCards.find((c) => c.slug === slug);

  if (!card) {
    return null;
  }

  return {
    id: card.id,
    title: card.title,
    slug: card.slug,
    path: card.path,
    pathTitle: pathTitles[card.path] || card.path,
    sourceFile: card.source_file,
    tldr: card.tldr,
    contentSections: card.content_sections || [],
    relatedConcepts: card.related_concepts || [],
    crossPathRefs: card.cross_path_refs,
    exampleRefs: card.example_refs,
    tags: card.tags || [],
    image: `/images/${card.path}/${slugToImageMap[card.slug] || 'default.webp'}`,
  };
}

export async function getRelatedArticles(
  conceptIds: string[],
  path: string
): Promise<Article[]> {
  const kg = loadKnowledgeGraph();
  const articles: Article[] = [];

  // Map path to the correct concept cards array
  let conceptCards: ConceptCard[] = [];
  switch (path) {
    case 'history':
      conceptCards = kg.concept_cards_history || [];
      break;
    case 'terminology':
      conceptCards = kg.concept_cards_terminology || [];
      break;
    case 'risk':
      conceptCards = kg.concept_cards_risk || [];
      break;
    case 'responsibility':
      conceptCards = kg.concept_cards_responsibility || [];
      break;
    case 'future':
      conceptCards = kg.concept_cards_future || [];
      break;
  }

  conceptIds.forEach((id) => {
    const card = conceptCards.find((c) => c.id === id);
    if (card) {
      articles.push({
        id: card.id,
        title: card.title,
        slug: card.slug,
        path: card.path,
        pathTitle: pathTitles[card.path] || card.path,
        sourceFile: card.source_file,
        tldr: card.tldr,
        contentSections: card.content_sections || [],
        relatedConcepts: card.related_concepts || [],
        crossPathRefs: card.cross_path_refs,
        exampleRefs: card.example_refs,
        tags: card.tags || [],
        image: `/images/${card.path}/${slugToImageMap[card.slug] || 'default.webp'}`,
      });
    }
  });

  return articles;
}

export async function getNextPrevArticles(
  path: string,
  currentSlug: string
): Promise<{ prev: Article | null; next: Article | null }> {
  const kg = loadKnowledgeGraph();

  // Map path to the correct concept cards array
  let conceptCards: ConceptCard[] = [];
  switch (path) {
    case 'history':
      conceptCards = kg.concept_cards_history || [];
      break;
    case 'terminology':
      conceptCards = kg.concept_cards_terminology || [];
      break;
    case 'risk':
      conceptCards = kg.concept_cards_risk || [];
      break;
    case 'responsibility':
      conceptCards = kg.concept_cards_responsibility || [];
      break;
    case 'future':
      conceptCards = kg.concept_cards_future || [];
      break;
  }

  const currentIndex = conceptCards.findIndex((c) => c.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prevCard = currentIndex > 0 ? conceptCards[currentIndex - 1] : null;
  const nextCard =
    currentIndex < conceptCards.length - 1 ? conceptCards[currentIndex + 1] : null;

  const mapToArticle = (card: ConceptCard | null): Article | null => {
    if (!card) return null;
    return {
      id: card.id,
      title: card.title,
      slug: card.slug,
      path: card.path,
      pathTitle: pathTitles[card.path] || card.path,
      sourceFile: card.source_file,
      tldr: card.tldr,
      contentSections: card.content_sections || [],
      relatedConcepts: card.related_concepts || [],
      crossPathRefs: card.cross_path_refs,
      exampleRefs: card.example_refs,
      tags: card.tags || [],
      image: `/images/${card.path}/${slugToImageMap[card.slug] || 'default.webp'}`,
    };
  };

  return {
    prev: mapToArticle(prevCard),
    next: mapToArticle(nextCard),
  };
}
