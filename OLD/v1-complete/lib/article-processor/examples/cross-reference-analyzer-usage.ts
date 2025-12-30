/**
 * Example usage of the Cross-Reference Analyzer
 * Demonstrates how to extract topic fingerprints and named entities from article content
 */

import { 
  createCrossReferenceAnalyzer, 
  extractTopicFingerprint, 
  extractNamedEntities 
} from '../analyzers/cross-reference-analyzer';
import { MasterJSON, ArticleJSON } from '../types';

/**
 * Example: Extract topic fingerprint and named entities from article content
 */
function demonstrateBasicExtraction() {
  console.log('=== Basic Cross-Reference Analysis ===\n');

  const sampleContent = `
    This comprehensive guide explores the EU AI Act and its implications for organizations.
    We'll discuss how GDPR Article 22 relates to automated decision-making systems,
    and examine case studies from companies like OpenAI, Google, and Microsoft.
    
    The article covers transformer architecture, neural networks, and machine learning
    approaches used in large language models. We'll also explore responsible AI
    practices, algorithmic bias detection, and the NIST AI Risk Management Framework.
    
    Real-world examples include the Amazon hiring algorithm controversy,
    Netflix recommendation systems, and Tesla Autopilot safety considerations.
  `;

  // Extract topic fingerprint (top 5 technical concepts)
  const topicFingerprint = extractTopicFingerprint(sampleContent);
  console.log('Topic Fingerprint (Technical Concepts):');
  topicFingerprint.forEach((concept, index) => {
    console.log(`  ${index + 1}. ${concept}`);
  });

  console.log('\n');

  // Extract named entities (companies, regulations, case studies)
  const namedEntities = extractNamedEntities(sampleContent);
  console.log('Named Entities (Companies, Regulations, Case Studies):');
  namedEntities.forEach((entity, index) => {
    console.log(`  ${index + 1}. ${entity}`);
  });

  console.log('\n');
}

/**
 * Example: Analyze redundancy across multiple articles
 */
async function demonstrateRedundancyAnalysis() {
  console.log('=== Redundancy Analysis ===\n');

  const analyzer = createCrossReferenceAnalyzer();

  // Mock master JSON with sample articles
  const mockMasterJSON: MasterJSON = {
    processing_summary: {
      total_articles: 3,
      processing_date: '2024-01-01',
      categories_distribution: {
        'AI Fundamentals': 1,
        'AI Risks & Principles': 0,
        'Legal Frameworks': 1,
        'AI Laws': 0,
        'Risk Frameworks & Standards': 0,
        'AI Development Lifecycle': 0,
        'Governance Implementation': 1,
        'AI Auditing & Accountability': 0,
        'Future Concerns': 0,
        'Industry-Specific Insights': 0,
        'Practical Guides': 0
      }
    },
    articles: [
      {
        file_status: { 
          suggested_slug: 'transformer-guide', 
          category: 'AI Fundamentals', 
          word_count_check: { target: 2000, actual: 1800, status: 'under' } 
        },
        content_validation: { 
          structure: { has_h1: true, has_intro: true, has_conclusion: true, header_depth_valid: true }, 
          generated_elements: { tldr_was_missing: false, objectives_were_missing: false, keywords_were_missing: false } 
        },
        component_inventory: { has_components: false, items: [] },
        extracted_data: { 
          title: 'Understanding Transformer Architecture', 
          tldr: 'A deep dive into transformer models', 
          learning_objectives: [], 
          seo_keywords: [], 
          references: [] 
        },
        cross_reference_data: { 
          topic_fingerprint: ['transformer', 'neural network', 'attention mechanism', 'deep learning', 'machine learning'], 
          named_examples: ['openai', 'google', 'bert', 'gpt'] 
        },
        image_generation: { 
          prompt: { formula: 'test', category_motif: 'neural networks', master_size: '1200x750px', css_filters: true }, 
          placeholder: 'test' 
        }
      } as ArticleJSON,
      {
        file_status: { 
          suggested_slug: 'llm-fundamentals', 
          category: 'AI Fundamentals', 
          word_count_check: { target: 2000, actual: 2100, status: 'within_range' } 
        },
        content_validation: { 
          structure: { has_h1: true, has_intro: true, has_conclusion: true, header_depth_valid: true }, 
          generated_elements: { tldr_was_missing: false, objectives_were_missing: false, keywords_were_missing: false } 
        },
        component_inventory: { has_components: false, items: [] },
        extracted_data: { 
          title: 'Large Language Models Explained', 
          tldr: 'Comprehensive guide to LLMs', 
          learning_objectives: [], 
          seo_keywords: [], 
          references: [] 
        },
        cross_reference_data: { 
          topic_fingerprint: ['large language model', 'transformer', 'generative ai', 'neural network', 'foundation model'], 
          named_examples: ['openai', 'anthropic', 'chatgpt', 'claude'] 
        },
        image_generation: { 
          prompt: { formula: 'test', category_motif: 'neural networks', master_size: '1200x750px', css_filters: true }, 
          placeholder: 'test' 
        }
      } as ArticleJSON,
      {
        file_status: { 
          suggested_slug: 'eu-ai-act-guide', 
          category: 'Legal Frameworks', 
          word_count_check: { target: 3000, actual: 3200, status: 'within_range' } 
        },
        content_validation: { 
          structure: { has_h1: true, has_intro: true, has_conclusion: true, header_depth_valid: true }, 
          generated_elements: { tldr_was_missing: false, objectives_were_missing: false, keywords_were_missing: false } 
        },
        component_inventory: { has_components: true, items: [] },
        extracted_data: { 
          title: 'EU AI Act: Complete Implementation Guide', 
          tldr: 'Everything you need to know about the EU AI Act', 
          learning_objectives: [], 
          seo_keywords: [], 
          references: [] 
        },
        cross_reference_data: { 
          topic_fingerprint: ['eu ai act', 'high-risk ai', 'conformity assessment', 'ai governance', 'regulatory compliance'], 
          named_examples: ['european commission', 'openai', 'google', 'microsoft'] 
        },
        image_generation: { 
          prompt: { formula: 'test', category_motif: 'legal documents', master_size: '1200x750px', css_filters: true }, 
          placeholder: 'test' 
        }
      } as ArticleJSON
    ],
    redundancy_analysis: {} as any,
    cross_reference_suggestions: { suggestions: [] }
  };

  // Analyze redundancy
  const redundancyAnalysis = await analyzer.analyzeRedundancy(mockMasterJSON);

  console.log('Overlapping Articles:');
  redundancyAnalysis.overlapping_articles.forEach((overlap, index) => {
    console.log(`  ${index + 1}. ${overlap.article1} ↔ ${overlap.article2}`);
    console.log(`     Overlap Score: ${Math.round(overlap.overlap_score * 100)}%`);
    console.log(`     Shared Concepts: ${overlap.shared_concepts.join(', ')}`);
  });

  console.log('\nDuplicate Examples:');
  redundancyAnalysis.duplicate_examples.forEach((duplicate, index) => {
    console.log(`  ${index + 1}. "${duplicate.example}" appears in: ${duplicate.appears_in.join(', ')}`);
    console.log(`     Recommendation: ${duplicate.recommendation}`);
  });

  console.log('\n');
}

/**
 * Example: Generate cross-reference suggestions
 */
async function demonstrateCrossReferenceSuggestions() {
  console.log('=== Cross-Reference Suggestions ===\n');

  const analyzer = createCrossReferenceAnalyzer();

  // Use the same mock data as above
  const mockMasterJSON: MasterJSON = {
    processing_summary: {
      total_articles: 2,
      processing_date: '2024-01-01',
      categories_distribution: {
        'AI Fundamentals': 1,
        'AI Risks & Principles': 0,
        'Legal Frameworks': 1,
        'AI Laws': 0,
        'Risk Frameworks & Standards': 0,
        'AI Development Lifecycle': 0,
        'Governance Implementation': 0,
        'AI Auditing & Accountability': 0,
        'Future Concerns': 0,
        'Industry-Specific Insights': 0,
        'Practical Guides': 0
      }
    },
    articles: [
      {
        file_status: { 
          suggested_slug: 'transformer-guide', 
          category: 'AI Fundamentals', 
          word_count_check: { target: 2000, actual: 1800, status: 'under' } 
        },
        content_validation: { 
          structure: { has_h1: true, has_intro: true, has_conclusion: true, header_depth_valid: true }, 
          generated_elements: { tldr_was_missing: false, objectives_were_missing: false, keywords_were_missing: false } 
        },
        component_inventory: { has_components: false, items: [] },
        extracted_data: { 
          title: 'Understanding Transformer Architecture', 
          tldr: 'A deep dive into transformer models', 
          learning_objectives: [], 
          seo_keywords: [], 
          references: [] 
        },
        cross_reference_data: { 
          topic_fingerprint: ['transformer', 'neural network', 'attention mechanism'], 
          named_examples: ['openai', 'google'] 
        },
        image_generation: { 
          prompt: { formula: 'test', category_motif: 'neural networks', master_size: '1200x750px', css_filters: true }, 
          placeholder: 'test' 
        }
      } as ArticleJSON,
      {
        file_status: { 
          suggested_slug: 'ai-governance-openai', 
          category: 'Governance Implementation', 
          word_count_check: { target: 2500, actual: 2400, status: 'within_range' } 
        },
        content_validation: { 
          structure: { has_h1: true, has_intro: true, has_conclusion: true, header_depth_valid: true }, 
          generated_elements: { tldr_was_missing: false, objectives_were_missing: false, keywords_were_missing: false } 
        },
        component_inventory: { has_components: false, items: [] },
        extracted_data: { 
          title: 'AI Governance at OpenAI: Case Study', 
          tldr: 'How OpenAI implements AI governance', 
          learning_objectives: [], 
          seo_keywords: [], 
          references: [] 
        },
        cross_reference_data: { 
          topic_fingerprint: ['ai governance', 'responsible ai', 'ai safety'], 
          named_examples: ['openai', 'chatgpt'] 
        },
        image_generation: { 
          prompt: { formula: 'test', category_motif: 'org charts', master_size: '1200x750px', css_filters: true }, 
          placeholder: 'test' 
        }
      } as ArticleJSON
    ],
    redundancy_analysis: {} as any,
    cross_reference_suggestions: { suggestions: [] }
  };

  // Generate cross-reference suggestions
  const suggestions = await analyzer.generateCrossReferences(mockMasterJSON);

  console.log('Cross-Reference Suggestions:');
  suggestions.suggestions.forEach((suggestion, index) => {
    console.log(`  ${index + 1}. ${suggestion.from_article} → ${suggestion.to_article}`);
    console.log(`     Reason: ${suggestion.reason}`);
    console.log(`     Confidence: ${Math.round(suggestion.confidence * 100)}%`);
  });

  console.log('\n');
}

/**
 * Run all examples
 */
async function runExamples() {
  console.log('Cross-Reference Analyzer Usage Examples\n');
  console.log('=====================================\n');

  demonstrateBasicExtraction();
  await demonstrateRedundancyAnalysis();
  await demonstrateCrossReferenceSuggestions();

  console.log('Examples completed successfully!');
}

// Run examples if this file is executed directly
if (require.main === module) {
  runExamples().catch(console.error);
}

export {
  demonstrateBasicExtraction,
  demonstrateRedundancyAnalysis,
  demonstrateCrossReferenceSuggestions,
  runExamples
};