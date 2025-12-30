/**
 * Constants for the Article Content Processor
 */

import { Category, CategoryMotif } from '../types';

// ============================================================================
// Directory Paths
// ============================================================================

export const DIRECTORIES = {
  DRAFTS: 'content/articles/drafts',
  PROCESSING: 'content/articles/articleprocessing',
  REVIEW: 'content/articles/review',
  CLEAN: 'content/articles/clean'
} as const;

// ============================================================================
// Category to Motif Mapping
// ============================================================================

export const CATEGORY_MOTIF_MAP: Record<Category, CategoryMotif> = {
  "AI Fundamentals": "neural networks",
  "AI Risks & Principles": "warning triangles",
  "Legal Frameworks": "scales",
  "AI Laws": "legal documents",
  "Risk Frameworks & Standards": "shields",
  "AI Development Lifecycle": "flowcharts",
  "Governance Implementation": "org charts",
  "AI Auditing & Accountability": "magnifying glass",
  "Future Concerns": "crystal ball",
  "Industry-Specific Insights": "industry icons",
  "Practical Guides": "toolbox"
};

// ============================================================================
// Image Generation
// ============================================================================

export const IMAGE_GENERATION = {
  BASE_FORMULA: "Abstract geometric illustration, earth tones, minimalist, professional",
  MASTER_SIZE: "1200x750px" as const,
  CSS_FILTERS_ENABLED: true
};

// ============================================================================
// Content Validation
// ============================================================================

export const VALIDATION_PATTERNS = {
  H1_HEADER: /^#\s+(.+)$/m,
  H2_HEADER: /^##\s+(.+)$/gm,
  H3_HEADER: /^###\s+(.+)$/gm,
  H4_HEADER: /^####\s+(.+)$/gm,
  H5_HEADER: /^#####\s+(.+)$/gm,
  H6_HEADER: /^######\s+(.+)$/gm,
  CHECKLIST_ITEM: /^\s*-?\s*\[[ x]\]/gm,
  MARKDOWN_TABLE: /^\|(.+)\|$/gm,
  MERMAID_BLOCK: /```mermaid\n([\s\S]*?)```/g,
  CODE_BLOCK: /```(\w+)?\n([\s\S]*?)```/g
};

// ============================================================================
// Word Count
// ============================================================================

export const WORD_COUNT = {
  TOLERANCE_PERCENTAGE: 10, // 10% tolerance for "within_range"
  MIN_WORDS_FOR_ARTICLE: 500
};

// ============================================================================
// Slug Generation
// ============================================================================

export const SLUG_CONFIG = {
  MAX_LENGTH: 60,
  SEPARATOR: '-'
};

// ============================================================================
// Cross-Reference Analysis
// ============================================================================

export const CROSS_REFERENCE = {
  MAX_TOPIC_FINGERPRINT_ITEMS: 5,
  MIN_CONCEPT_LENGTH: 3,
  GENERIC_TERMS: [
    'ai', 'artificial intelligence', 'machine learning', 'system', 'data',
    'model', 'algorithm', 'technology', 'software', 'application'
  ]
};

// ============================================================================
// Content Enhancement
// ============================================================================

export const CONTENT_ENHANCEMENT = {
  TLDR_SENTENCES: 2,
  LEARNING_OBJECTIVES_COUNT: 3,
  SEO_KEYWORDS_COUNT: 5
};

// ============================================================================
// Ollama Configuration
// ============================================================================

export const OLLAMA_DEFAULTS = {
  MODEL: 'llama2',
  ENDPOINT: 'http://localhost:11434',
  TIMEOUT: 30000
};

// ============================================================================
// File Extensions
// ============================================================================

export const FILE_EXTENSIONS = {
  MARKDOWN: '.md',
  YAML: '.yaml',
  JSON: '.json'
};

// ============================================================================
// YAML Section Delimiters
// ============================================================================

export const YAML_SECTIONS = {
  FILE_STATUS: '# === FILE STATUS ===',
  CONTENT_VALIDATION: '# === CONTENT VALIDATION ===',
  COMPONENT_INVENTORY: '# === COMPONENT INVENTORY ===',
  EXTRACTED_DATA: '# === EXTRACTED DATA ===',
  CROSS_REFERENCE_DATA: '# === CROSS REFERENCE DATA ===',
  IMAGE_GENERATION: '# === IMAGE GENERATION ==='
};
