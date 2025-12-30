/**
 * Example usage of the ArticleContentEnhancer
 * 
 * This demonstrates how the ContentEnhancer integrates with the broader
 * article processing pipeline to generate missing content elements.
 */

import { ArticleContentEnhancer } from '../processors/content-enhancer';
import { GeneratedElements } from '../types';

// Example article content that might be missing some elements
const sampleArticleContent = `
# AI Risk Assessment Framework

Artificial intelligence systems present unique risks that require systematic assessment and management. 
Organizations implementing AI must establish comprehensive frameworks to identify, evaluate, and mitigate 
potential risks throughout the AI lifecycle.

## Risk Categories

AI risks can be categorized into several key areas: algorithmic bias, data privacy violations, 
security vulnerabilities, and operational failures. Each category requires specific assessment 
methodologies and mitigation strategies.

## Assessment Process

The risk assessment process should include stakeholder identification, threat modeling, 
impact analysis, and likelihood estimation. Regular reviews ensure that risk profiles 
remain current as systems evolve.

## Mitigation Strategies

Effective risk mitigation combines technical controls, process improvements, and governance 
oversight. Organizations should implement defense-in-depth approaches with multiple 
layers of protection.
`;

// Example frontmatter that might be missing some elements
const sampleFrontmatter = {
  title: "AI Risk Assessment Framework",
  category: "Risk Frameworks & Standards",
  // Missing: tldr, learning_objectives, seo_keywords
};

/**
 * Example function showing how to use the ContentEnhancer
 * to fill in missing content elements
 */
export function enhanceArticleContent(
  title: string,
  content: string,
  frontmatter: Record<string, any>
): {
  enhancedData: {
    tldr: string;
    learning_objectives: string[];
    seo_keywords: string[];
  };
  generatedElements: GeneratedElements;
} {
  const enhancer = new ArticleContentEnhancer();
  
  // Track which elements need to be generated
  const generatedElements: GeneratedElements = {
    tldr_was_missing: !frontmatter.tldr,
    objectives_were_missing: !frontmatter.learning_objectives,
    keywords_were_missing: !frontmatter.seo_keywords
  };
  
  // Generate missing elements
  const enhancedData = {
    tldr: frontmatter.tldr || enhancer.generateTLDR(content),
    learning_objectives: frontmatter.learning_objectives || enhancer.generateLearningObjectives(content),
    seo_keywords: frontmatter.seo_keywords || enhancer.generateSEOKeywords(title, content)
  };
  
  return {
    enhancedData,
    generatedElements: enhancer.trackGeneratedElements(generatedElements)
  };
}

// Example usage
if (require.main === module) {
  console.log('=== Content Enhancement Example ===\n');
  
  const result = enhanceArticleContent(
    sampleFrontmatter.title,
    sampleArticleContent,
    sampleFrontmatter
  );
  
  console.log('Generated TL;DR:');
  console.log(result.enhancedData.tldr);
  console.log('\nGenerated Learning Objectives:');
  result.enhancedData.learning_objectives.forEach((obj, index) => {
    console.log(`${index + 1}. ${obj}`);
  });
  console.log('\nGenerated SEO Keywords:');
  console.log(result.enhancedData.seo_keywords.join(', '));
  console.log('\nGeneration Tracking:');
  console.log(`TL;DR was missing: ${result.generatedElements.tldr_was_missing}`);
  console.log(`Objectives were missing: ${result.generatedElements.objectives_were_missing}`);
  console.log(`Keywords were missing: ${result.generatedElements.keywords_were_missing}`);
}