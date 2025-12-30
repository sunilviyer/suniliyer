/**
 * Image Prompt Generator Usage Examples
 * 
 * This file demonstrates how to use the ImagePromptGenerator
 * to create category-specific image prompts and placeholders.
 */

import { ImagePromptGeneratorImpl } from '../generators/image-prompt-generator';
import { Category } from '../types';

// Create an instance of the generator
const generator = new ImagePromptGeneratorImpl();

// Example 1: Generate a prompt for an AI Fundamentals article
console.log('=== AI Fundamentals Article ===');
const fundamentalsPrompt = generator.generatePrompt('AI Fundamentals', 'Understanding Neural Networks');
console.log('Generated Prompt:', fundamentalsPrompt);
console.log('Complete Prompt String:', generator.getCompletePromptString('AI Fundamentals', 'Understanding Neural Networks'));
console.log('Image Placeholder:', generator.createImagePlaceholder('understanding-neural-networks'));
console.log();

// Example 2: Generate prompts for different categories
console.log('=== Category-Specific Prompts ===');
const categories: Category[] = [
  'AI Risks & Principles',
  'Legal Frameworks', 
  'Practical Guides',
  'Governance Implementation'
];

categories.forEach(category => {
  const prompt = generator.generatePrompt(category, 'Sample Article Title');
  console.log(`${category}:`);
  console.log(`  Motif: ${prompt.category_motif}`);
  console.log(`  Complete Prompt: ${generator.getCompletePromptString(category, 'Sample Article Title')}`);
  console.log();
});

// Example 3: Validate category mappings
console.log('=== Category Validation ===');
const allCategories = generator.getAvailableCategories();
console.log(`Total Categories: ${allCategories.length}`);
console.log('All Categories:', allCategories);
console.log();

const allMotifs = generator.getAvailableMotifs();
console.log(`Total Motifs: ${allMotifs.length}`);
console.log('All Motifs:', allMotifs);
console.log();

// Example 4: Create image placeholders for different slugs
console.log('=== Image Placeholders ===');
const slugs = [
  'ai-policy-guide',
  'neural-networks-explained',
  'eu-ai-act-overview',
  'risk-management-framework'
];

slugs.forEach(slug => {
  const placeholder = generator.createImagePlaceholder(slug);
  console.log(`${slug}: ${placeholder}`);
});
console.log();

// Example 5: Demonstrate consistent output
console.log('=== Consistency Check ===');
const category: Category = 'Practical Guides';
const title = 'AI Policy Template';

const prompt1 = generator.generatePrompt(category, title);
const prompt2 = generator.generatePrompt(category, title);

console.log('First generation:', prompt1);
console.log('Second generation:', prompt2);
console.log('Are they identical?', JSON.stringify(prompt1) === JSON.stringify(prompt2));
console.log();

// Example 6: Error handling
console.log('=== Error Handling ===');
try {
  const invalidCategory = 'Invalid Category' as Category;
  generator.generatePrompt(invalidCategory, 'Test Title');
} catch (error) {
  console.log('Caught expected error:', (error as Error).message);
}

// Example 7: Integration with article processing workflow
console.log('=== Integration Example ===');
interface MockArticle {
  title: string;
  category: Category;
  slug: string;
}

const mockArticles: MockArticle[] = [
  { title: 'Building AI Systems', category: 'AI Development Lifecycle', slug: 'building-ai-systems' },
  { title: 'GDPR and AI', category: 'Legal Frameworks', slug: 'gdpr-and-ai' },
  { title: 'AI Audit Checklist', category: 'Practical Guides', slug: 'ai-audit-checklist' }
];

mockArticles.forEach(article => {
  const prompt = generator.generatePrompt(article.category, article.title);
  const placeholder = generator.createImagePlaceholder(article.slug);
  
  console.log(`Article: ${article.title}`);
  console.log(`  Category: ${article.category}`);
  console.log(`  Motif: ${prompt.category_motif}`);
  console.log(`  Placeholder: ${placeholder}`);
  console.log(`  Full Prompt: ${generator.getCompletePromptString(article.category, article.title)}`);
  console.log();
});

export { generator };