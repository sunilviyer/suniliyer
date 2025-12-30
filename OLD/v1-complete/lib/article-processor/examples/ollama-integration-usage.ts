/**
 * Example usage of Ollama AI integration for redundancy analysis
 * Demonstrates how to use the OllamaClient for AI-powered content analysis
 */

import { OllamaClient } from '../clients/ollama-client';
import { createCrossReferenceAnalyzer } from '../analyzers/cross-reference-analyzer';
import { MasterJSON, OllamaConfig } from '../types';

/**
 * Example: Basic Ollama client usage
 */
async function basicOllamaUsage() {
  console.log('=== Basic Ollama Client Usage ===');
  
  // Create Ollama client with default configuration
  const client = new OllamaClient();
  
  // Test connection to local Ollama instance
  const isConnected = await client.testConnection();
  console.log('Ollama connection status:', isConnected);
  
  if (isConnected) {
    try {
      // Generate a simple completion
      const response = await client.generate('What is artificial intelligence?');
      console.log('AI Response:', response.substring(0, 100) + '...');
    } catch (error) {
      console.error('Generation failed:', error);
    }
  }
}

/**
 * Example: Custom Ollama configuration
 */
async function customOllamaConfiguration() {
  console.log('\n=== Custom Ollama Configuration ===');
  
  // Custom configuration for different model and endpoint
  const customConfig: OllamaConfig = {
    model: 'mistral',           // Use Mistral model instead of default llama2
    endpoint: 'http://localhost:11434',  // Custom endpoint
    timeout: 60000              // 60 second timeout
  };
  
  const client = new OllamaClient(customConfig);
  console.log('Custom config:', client.getConfig());
  
  // Update configuration dynamically
  client.updateConfig({ model: 'codellama' });
  console.log('Updated config:', client.getConfig());
}

/**
 * Example: AI-powered redundancy analysis
 */
async function redundancyAnalysisExample() {
  console.log('\n=== AI-Powered Redundancy Analysis ===');
  
  // Sample master JSON with articles
  const sampleMasterJSON: MasterJSON = {
    processing_summary: {
      total_articles: 3,
      processing_date: new Date().toISOString(),
      categories_distribution: {
        'AI Fundamentals': 2,
        'AI Risks & Principles': 0,
        'Legal Frameworks': 0,
        'AI Laws': 1,
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
          suggested_slug: 'neural-networks-basics',
          category: 'AI Fundamentals',
          word_count_check: { target: 1500, actual: 1600, status: 'within_range' }
        },
        content_validation: {
          structure: { has_h1: true, has_intro: true, has_conclusion: true, header_depth_valid: true },
          generated_elements: { tldr_was_missing: false, objectives_were_missing: false, keywords_were_missing: false }
        },
        component_inventory: { has_components: false, items: [] },
        extracted_data: {
          title: 'Neural Networks Basics',
          tldr: 'Introduction to neural networks and deep learning fundamentals',
          learning_objectives: ['Understand neural network architecture', 'Learn backpropagation', 'Apply to real problems'],
          seo_keywords: ['neural networks', 'deep learning', 'AI fundamentals', 'machine learning', 'artificial intelligence'],
          references: []
        },
        cross_reference_data: {
          topic_fingerprint: ['neural networks', 'deep learning', 'backpropagation', 'gradient descent', 'activation functions'],
          named_examples: ['tensorflow', 'pytorch', 'keras', 'mnist dataset', 'imagenet']
        },
        image_generation: {
          prompt: { formula: 'Abstract geometric illustration, earth tones, minimalist, professional', category_motif: 'neural networks', master_size: '1200x750px', css_filters: true },
          placeholder: '![Neural Networks]({{IMAGE_PLACEHOLDER_neural-networks-basics}})'
        }
      },
      {
        file_status: {
          suggested_slug: 'deep-learning-guide',
          category: 'AI Fundamentals',
          word_count_check: { target: 2000, actual: 1800, status: 'within_range' }
        },
        content_validation: {
          structure: { has_h1: true, has_intro: true, has_conclusion: true, header_depth_valid: true },
          generated_elements: { tldr_was_missing: false, objectives_were_missing: true, keywords_were_missing: false }
        },
        component_inventory: { has_components: true, items: [{ type: 'checklist', label: 'Deep Learning Checklist', detected_at_section: 'Getting Started' }] },
        extracted_data: {
          title: 'Complete Deep Learning Guide',
          tldr: 'Comprehensive guide to deep learning techniques and applications',
          learning_objectives: ['Master deep learning concepts', 'Build neural networks', 'Deploy AI models'],
          seo_keywords: ['deep learning', 'neural networks', 'AI guide', 'machine learning', 'artificial intelligence'],
          references: []
        },
        cross_reference_data: {
          topic_fingerprint: ['deep learning', 'neural networks', 'convolutional networks', 'recurrent networks', 'transformers'],
          named_examples: ['tensorflow', 'pytorch', 'google colab', 'kaggle', 'hugging face']
        },
        image_generation: {
          prompt: { formula: 'Abstract geometric illustration, earth tones, minimalist, professional', category_motif: 'neural networks', master_size: '1200x750px', css_filters: true },
          placeholder: '![Deep Learning]({{IMAGE_PLACEHOLDER_deep-learning-guide}})'
        }
      },
      {
        file_status: {
          suggested_slug: 'eu-ai-act-overview',
          category: 'AI Laws',
          word_count_check: { target: 2500, actual: 2400, status: 'within_range' }
        },
        content_validation: {
          structure: { has_h1: true, has_intro: true, has_conclusion: true, header_depth_valid: true },
          generated_elements: { tldr_was_missing: false, objectives_were_missing: false, keywords_were_missing: false }
        },
        component_inventory: { has_components: true, items: [{ type: 'table', label: 'Risk Categories', detected_at_section: 'Classification System' }] },
        extracted_data: {
          title: 'EU AI Act: Complete Overview',
          tldr: 'Comprehensive analysis of the European Union Artificial Intelligence Act',
          learning_objectives: ['Understand AI Act requirements', 'Classify AI systems', 'Ensure compliance'],
          seo_keywords: ['EU AI Act', 'artificial intelligence act', 'AI regulation', 'european union', 'compliance'],
          references: []
        },
        cross_reference_data: {
          topic_fingerprint: ['eu ai act', 'ai regulation', 'high risk ai', 'prohibited practices', 'conformity assessment'],
          named_examples: ['european commission', 'ce marking', 'gdpr', 'digital services act', 'openai']
        },
        image_generation: {
          prompt: { formula: 'Abstract geometric illustration, earth tones, minimalist, professional', category_motif: 'legal documents', master_size: '1200x750px', css_filters: true },
          placeholder: '![EU AI Act]({{IMAGE_PLACEHOLDER_eu-ai-act-overview}})'
        }
      }
    ],
    redundancy_analysis: {
      overlapping_articles: [],
      duplicate_examples: [],
      restructuring_recommendations: [],
      ollama_analysis: { model_used: '', confidence_score: 0, processing_time: 0 }
    },
    cross_reference_suggestions: { suggestions: [] }
  };
  
  // Create cross-reference analyzer with Ollama integration
  const analyzer = createCrossReferenceAnalyzer();
  
  try {
    // Perform redundancy analysis
    console.log('Analyzing content for redundancy...');
    const redundancyAnalysis = await analyzer.analyzeRedundancy(sampleMasterJSON);
    
    console.log('Redundancy Analysis Results:');
    console.log('- Overlapping articles:', redundancyAnalysis.overlapping_articles.length);
    console.log('- Duplicate examples:', redundancyAnalysis.duplicate_examples.length);
    console.log('- Restructuring recommendations:', redundancyAnalysis.restructuring_recommendations.length);
    console.log('- Analysis method:', redundancyAnalysis.ollama_analysis.model_used);
    console.log('- Confidence score:', redundancyAnalysis.ollama_analysis.confidence_score);
    
    // Generate cross-reference suggestions
    console.log('\nGenerating cross-reference suggestions...');
    const crossReferences = await analyzer.generateCrossReferences(sampleMasterJSON);
    
    console.log('Cross-Reference Suggestions:');
    console.log('- Total suggestions:', crossReferences.suggestions.length);
    
    if (crossReferences.suggestions.length > 0) {
      console.log('- Sample suggestion:');
      const sample = crossReferences.suggestions[0];
      console.log(`  From: ${sample.from_article}`);
      console.log(`  To: ${sample.to_article}`);
      console.log(`  Reason: ${sample.reason}`);
      console.log(`  Confidence: ${sample.confidence}%`);
    }
    
  } catch (error) {
    console.error('Analysis failed:', error);
  }
}

/**
 * Example: Direct Ollama client redundancy analysis
 */
async function directOllamaAnalysis() {
  console.log('\n=== Direct Ollama Analysis ===');
  
  const client = new OllamaClient();
  const isConnected = await client.testConnection();
  
  if (!isConnected) {
    console.log('Ollama not available - skipping direct analysis example');
    return;
  }
  
  // Sample master JSON for analysis
  const sampleData = {
    articles: [
      {
        title: 'AI Ethics Fundamentals',
        topic_fingerprint: ['ai ethics', 'responsible ai', 'fairness', 'transparency'],
        named_examples: ['google', 'openai', 'microsoft']
      },
      {
        title: 'Responsible AI Implementation',
        topic_fingerprint: ['responsible ai', 'ai governance', 'ethical ai', 'bias detection'],
        named_examples: ['google', 'ibm', 'fairness toolkit']
      }
    ]
  };
  
  try {
    console.log('Performing direct Ollama redundancy analysis...');
    const analysis = await client.performRedundancyAnalysis(sampleData as any);
    
    console.log('Direct Analysis Results:');
    console.log('- Model used:', analysis.ollama_analysis.model_used);
    console.log('- Processing time:', analysis.ollama_analysis.processing_time, 'ms');
    console.log('- Confidence score:', analysis.ollama_analysis.confidence_score);
    console.log('- Found overlaps:', analysis.overlapping_articles.length);
    
  } catch (error) {
    console.error('Direct analysis failed:', error);
  }
}

/**
 * Example: Configuration best practices
 */
function configurationBestPractices() {
  console.log('\n=== Configuration Best Practices ===');
  
  console.log('1. Model Selection:');
  console.log('   - llama2: Good general purpose, fast');
  console.log('   - mistral: Better for analysis tasks');
  console.log('   - codellama: Best for technical content');
  
  console.log('\n2. Timeout Configuration:');
  console.log('   - Short articles: 30s (default)');
  console.log('   - Large collections: 60-120s');
  console.log('   - Production: Consider retry logic');
  
  console.log('\n3. Error Handling:');
  console.log('   - Always test connection first');
  console.log('   - Implement fallback to local analysis');
  console.log('   - Log failures for debugging');
  
  console.log('\n4. Performance Tips:');
  console.log('   - Use local Ollama instance for best performance');
  console.log('   - Consider batching small articles');
  console.log('   - Monitor memory usage with large datasets');
}

/**
 * Run all examples
 */
async function runAllExamples() {
  console.log('🤖 Ollama Integration Examples\n');
  
  await basicOllamaUsage();
  await customOllamaConfiguration();
  await redundancyAnalysisExample();
  await directOllamaAnalysis();
  configurationBestPractices();
  
  console.log('\n✅ All examples completed!');
  console.log('\nTo use Ollama integration:');
  console.log('1. Install Ollama: https://ollama.ai');
  console.log('2. Pull a model: ollama pull llama2');
  console.log('3. Start Ollama service: ollama serve');
  console.log('4. Use the examples above in your code');
}

// Run examples if this file is executed directly
if (require.main === module) {
  runAllExamples().catch(console.error);
}

export {
  basicOllamaUsage,
  customOllamaConfiguration,
  redundancyAnalysisExample,
  directOllamaAnalysis,
  configurationBestPractices,
  runAllExamples
};