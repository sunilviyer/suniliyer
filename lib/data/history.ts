import { readFileSync } from 'fs';
import { join } from 'path';
import * as yaml from 'js-yaml';
import { PathCard } from '@/lib/types/path-card';

export type HistoryCard = PathCard;

export interface KnowledgeGraph {
  metadata: {
    total_articles: number;
    total_concept_cards: number;
    total_example_cards: number;
    total_resource_cards: number;
    learning_paths: number;
    generated_date: string;
  };
  learning_paths: Array<{
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
  }>;
  concept_cards_history: Array<{
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
      terminology?: string[];
      risk?: string[];
      responsibility?: string[];
      future?: string[];
    };
    example_refs?: string[];
    tags: string[];
  }>;
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

export async function getHistoryCards(): Promise<HistoryCard[]> {
  const kg = loadKnowledgeGraph();

  return kg.concept_cards_history.map((card) => ({
    id: card.id,
    title: card.title,
    slug: card.slug,
    path: card.path,
    sourceFile: card.source_file,
    tldr: card.tldr,
    contentSections: card.content_sections,
    relatedConcepts: card.related_concepts,
    crossPathRefs: card.cross_path_refs,
    exampleRefs: card.example_refs,
    tags: card.tags,
    image: slugToImageMap[card.slug] || 'what-ai-actually-is.webp',
  }));
}

export async function getHistoryPath() {
  const kg = loadKnowledgeGraph();
  return kg.learning_paths.find(path => path.id === 'history');
}
