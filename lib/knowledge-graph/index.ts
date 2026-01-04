import { readFileSync } from 'fs';
import { join } from 'path';
import * as yaml from 'js-yaml';

// Type definitions for Knowledge Graph structure
export interface KGMetadata {
  total_articles: number;
  total_concept_cards: number;
  total_example_cards: number;
  total_resource_cards: number;
  learning_paths: number;
  generated_date: string;
}

export interface KGLearningPath {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  card_count: number;
  estimated_reading_time: string;
  primary_keywords: string[];
  concept_cards: string[];
  example_cards: string[];
  resource_cards: string[];
}

export interface KGConceptCard {
  id: string;
  title: string;
  slug: string;
  path: string;
  source_file: string;
  source_phase?: string;
  tldr: string;
  content_sections: string[];
  related_concepts: string[];
  cross_path_refs?: {
    history?: string[];
    terminology?: string[];
    risk?: string[];
    responsibility?: string[];
    future?: string[];
  };
  example_refs?: string[];
  tags: string[];
}

export interface KnowledgeGraph {
  metadata: KGMetadata;
  learning_paths: KGLearningPath[];
  concept_cards_history?: KGConceptCard[];
  concept_cards_terminology?: KGConceptCard[];
  concept_cards_risk?: KGConceptCard[];
  concept_cards_responsibility?: KGConceptCard[];
  concept_cards_future?: KGConceptCard[];
}

// Singleton instance
let kgCache: KnowledgeGraph | null = null;

/**
 * Load and cache the knowledge graph
 */
export function loadKnowledgeGraph(): KnowledgeGraph {
  if (kgCache) {
    return kgCache;
  }

  const filePath = join(process.cwd(), 'content/knowledge-graph.yaml');
  const fileContent = readFileSync(filePath, 'utf-8');
  kgCache = yaml.load(fileContent) as KnowledgeGraph;

  return kgCache;
}

/**
 * Get all concept cards from all paths
 */
export function getAllConceptCards(kg?: KnowledgeGraph): KGConceptCard[] {
  const graph = kg || loadKnowledgeGraph();

  return [
    ...(graph.concept_cards_history || []),
    ...(graph.concept_cards_terminology || []),
    ...(graph.concept_cards_risk || []),
    ...(graph.concept_cards_responsibility || []),
    ...(graph.concept_cards_future || []),
  ];
}

/**
 * Get concept cards for a specific path
 */
export function getConceptCardsByPath(
  pathId: string,
  kg?: KnowledgeGraph
): KGConceptCard[] {
  const graph = kg || loadKnowledgeGraph();
  const pathKey = `concept_cards_${pathId}` as keyof KnowledgeGraph;
  return (graph[pathKey] as KGConceptCard[]) || [];
}

/**
 * Find a concept card by ID
 */
export function findConceptCardById(
  id: string,
  kg?: KnowledgeGraph
): KGConceptCard | null {
  const allCards = getAllConceptCards(kg);
  return allCards.find((card) => card.id === id) || null;
}

/**
 * Find a concept card by slug
 */
export function findConceptCardBySlug(
  slug: string,
  kg?: KnowledgeGraph
): KGConceptCard | null {
  const allCards = getAllConceptCards(kg);
  return allCards.find((card) => card.slug === slug) || null;
}

/**
 * Find a learning path by ID
 */
export function findLearningPathById(
  id: string,
  kg?: KnowledgeGraph
): KGLearningPath | null {
  const graph = kg || loadKnowledgeGraph();
  return graph.learning_paths.find((path) => path.id === id) || null;
}

/**
 * Get all cards that reference a specific card ID
 */
export function getCardReferences(
  cardId: string,
  kg?: KnowledgeGraph
): KGConceptCard[] {
  const allCards = getAllConceptCards(kg);

  return allCards.filter((card) => {
    // Check related concepts
    if (card.related_concepts?.includes(cardId)) {
      return true;
    }

    // Check cross-path references
    if (card.cross_path_refs) {
      const allRefs = [
        ...(card.cross_path_refs.history || []),
        ...(card.cross_path_refs.terminology || []),
        ...(card.cross_path_refs.risk || []),
        ...(card.cross_path_refs.responsibility || []),
        ...(card.cross_path_refs.future || []),
      ];
      if (allRefs.includes(cardId)) {
        return true;
      }
    }

    return false;
  });
}

/**
 * Get all tags used across all concept cards
 */
export function getAllTags(kg?: KnowledgeGraph): string[] {
  const allCards = getAllConceptCards(kg);
  const tagSet = new Set<string>();

  allCards.forEach((card) => {
    card.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

/**
 * Search concept cards by tag
 */
export function getCardsByTag(tag: string, kg?: KnowledgeGraph): KGConceptCard[] {
  const allCards = getAllConceptCards(kg);
  return allCards.filter((card) => card.tags.includes(tag));
}

/**
 * Get statistics about the knowledge graph
 */
export function getKnowledgeGraphStats(kg?: KnowledgeGraph) {
  const graph = kg || loadKnowledgeGraph();
  const allCards = getAllConceptCards(graph);

  return {
    metadata: graph.metadata,
    totalPaths: graph.learning_paths.length,
    totalConceptCards: allCards.length,
    cardsByPath: {
      history: graph.concept_cards_history?.length || 0,
      terminology: graph.concept_cards_terminology?.length || 0,
      risk: graph.concept_cards_risk?.length || 0,
      responsibility: graph.concept_cards_responsibility?.length || 0,
      future: graph.concept_cards_future?.length || 0,
    },
    totalTags: getAllTags(graph).length,
  };
}

/**
 * Validate a concept card reference exists
 */
export function validateConceptReference(
  cardId: string,
  kg?: KnowledgeGraph
): boolean {
  return findConceptCardById(cardId, kg) !== null;
}

/**
 * Clear the knowledge graph cache (useful for testing)
 */
export function clearKnowledgeGraphCache(): void {
  kgCache = null;
}
