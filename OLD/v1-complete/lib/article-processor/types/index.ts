/**
 * Core type definitions for the Article Content Processor
 * These interfaces define the data models used throughout the processing pipeline
 */

// ============================================================================
// Category Types
// ============================================================================

export type Category = 
  | "AI Fundamentals"
  | "AI Risks & Principles" 
  | "Legal Frameworks"
  | "AI Laws"
  | "Risk Frameworks & Standards"
  | "AI Development Lifecycle"
  | "Governance Implementation"
  | "AI Auditing & Accountability"
  | "Future Concerns"
  | "Industry-Specific Insights"
  | "Practical Guides";

export type CategoryMotif = 
  | "neural networks"      // AI Fundamentals
  | "warning triangles"    // AI Risks & Principles
  | "scales"               // Legal Frameworks
  | "legal documents"      // AI Laws
  | "shields"              // Risk Frameworks & Standards
  | "flowcharts"           // AI Development Lifecycle
  | "org charts"           // Governance Implementation
  | "magnifying glass"     // AI Auditing & Accountability
  | "crystal ball"         // Future Concerns
  | "industry icons"       // Industry-Specific Insights
  | "toolbox";             // Practical Guides

// ============================================================================
// Structure Validation Types
// ============================================================================

export interface StructureValidation {
  has_h1: boolean;
  has_intro: boolean;
  has_conclusion: boolean;
  header_depth_valid: boolean;
}

export interface SectionValidation {
  has_intro: boolean;
  has_conclusion: boolean;
  has_main_content: boolean;
}

export interface GeneratedElements {
  tldr_was_missing: boolean;
  objectives_were_missing: boolean;
  keywords_were_missing: boolean;
}

// ============================================================================
// Component Types
// ============================================================================

export type ComponentType = "checklist" | "table" | "flowchart" | "template" | "list";

export interface ComponentItem {
  type: ComponentType;
  label: string;
  detected_at_section: string;
  template_link?: string; // For templates only
}

// ============================================================================
// Image Generation Types
// ============================================================================

export interface ImagePrompt {
  formula: string;
  category_motif: CategoryMotif;
  master_size: "1200x750px";
  css_filters: boolean;
}

// ============================================================================
// Cross-Reference Types
// ============================================================================

export interface Reference {
  title: string;
  url?: string;
  type: "internal" | "external";
}

export interface OverlapPair {
  article1: string;
  article2: string;
  overlap_score: number;
  shared_concepts: string[];
}

export interface DuplicateExample {
  example: string;
  appears_in: string[];
  recommendation: string;
}

export interface RestructuringRecommendation {
  articles: string[];
  issue: string;
  suggestion: string;
}

export interface CrossReferenceRecommendations {
  suggestions: Array<{
    from_article: string;
    to_article: string;
    reason: string;
    confidence: number;
  }>;
}

export interface RedundancyAnalysis {
  overlapping_articles: OverlapPair[];
  duplicate_examples: DuplicateExample[];
  restructuring_recommendations: RestructuringRecommendation[];
  ollama_analysis: {
    model_used: string;
    confidence_score: number;
    processing_time: number;
  };
}

// ============================================================================
// Article Data Models
// ============================================================================

export interface ArticleJSON {
  slug?: string; // Add slug property for compatibility
  file_status: {
    suggested_slug: string;
    category: Category;
    word_count_check: {
      target: number | null;
      actual: number;
      status: "within_range" | "under" | "over";
    };
  };
  content_validation: {
    structure: StructureValidation;
    generated_elements: GeneratedElements;
  };
  component_inventory: {
    has_components: boolean;
    items: ComponentItem[];
  };
  extracted_data: {
    title: string;
    tldr: string;
    learning_objectives: string[];
    seo_keywords: string[];
    references: Reference[];
  };
  cross_reference_data: {
    topic_fingerprint: string[];
    named_examples: string[];
  };
  image_generation: {
    prompt: ImagePrompt;
    placeholder: string;
  };
}

export interface ProcessedArticle {
  filePath: string;
  originalContent: string;
  frontmatter: Record<string, any>;
  title: string;
  content: string;
  wordCount: number;
  structure: StructureValidation;
  category: Category;
  components: ComponentItem[];
  topicFingerprint: string[];
  namedEntities: string[];
  crossReferenceData?: {
    topic_fingerprint: string[];
    named_examples: string[];
  };
  enhancedElements: {
    tldr?: string;
    objectives?: string[];
    keywords?: string[];
  };
  imageGeneration: ImagePrompt;
}

export interface MasterJSON {
  processing_summary: {
    total_articles: number;
    processing_date: string;
    categories_distribution: Record<Category, number>;
  };
  articles: ArticleJSON[];
  redundancy_analysis: RedundancyAnalysis;
  cross_reference_suggestions: CrossReferenceRecommendations;
}

// ============================================================================
// Processing Result Types
// ============================================================================

export interface ProcessingError {
  filePath: string;
  stage: string;
  error: string;
  timestamp: string;
}

export interface ArticleResult {
  success: boolean;
  filePath: string;
  article?: ArticleJSON;
  error?: string;
}

export interface ProcessingResult {
  totalProcessed: number;
  successful: number;
  failed: number;
  errors: ProcessingError[];
  masterJSON: MasterJSON;
}

// ============================================================================
// Ollama Configuration Types
// ============================================================================

export interface OllamaConfig {
  model: string;
  endpoint: string;
  timeout: number;
}

// ============================================================================
// Directory Structure
// ============================================================================

export interface DirectoryStructure {
  drafts: string;
  processing: string;
  review: string;
  clean: string;
}

export const DEFAULT_DIRECTORIES: DirectoryStructure = {
  drafts: 'content/articles/drafts',
  processing: 'content/articles/articleprocessing',
  review: 'content/articles/review',
  clean: 'content/articles/clean'
};

// ============================================================================
// Content Consolidation Types
// ============================================================================

export interface ConsolidationPlan {
  targetExample: string;
  relevantArticles: string[];
  consolidatedSlug: string;
  crossReferenceStrategy: 'replace_detailed_example' | 'add_see_also' | 'brief_mention_plus_link';
}

export interface ConsolidatedContent {
  title: string;
  slug: string;
  category: string;
  tldr: string;
  learning_objectives: string[];
  seo_keywords: string[];
  case_studies: Array<{
    title: string;
    description: string;
    governance_lessons: string[];
    referenced_in_articles: string[];
  }>;
  implementation_framework: {
    best_practices: string[];
    risk_mitigation: string[];
    monitoring_recommendations: string[];
  };
  content_outline: string[];
  cross_references: Array<{
    article_slug: string;
    cross_reference_text: string;
    section_context: string;
    replacement_strategy: string;
  }>;
  learning_path_data: any;
  articles_to_update: string[];
}
