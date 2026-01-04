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

// Map slug to image filename for special cases
const slugToImageMap: Record<string, string> = {
  'ai-history-timeline': 'ai-history-timeline-f.webp',
};

// Helper function to get image filename from slug
function getImageFilename(slug: string): string {
  // Check if there's a special mapping
  if (slugToImageMap[slug]) {
    return slugToImageMap[slug];
  }

  // Default: use slug as filename with .webp extension
  return `${slug}.webp`;
}

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
    image: getImageFilename(card.slug),
  }));
}

export async function getHistoryPath() {
  const kg = loadKnowledgeGraph();
  return kg.learning_paths.find(path => path.id === 'history');
}
