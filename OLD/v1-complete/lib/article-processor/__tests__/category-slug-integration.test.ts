/**
 * Category Classifier and Slug Generator Integration Tests
 * Tests that verify both components work together correctly
 */

import { classifyArticle } from '../classifiers/category-classifier';
import { generateSlug, isValidSlug } from '../utils/slug-generator';

describe('Category Classification and Slug Generation Integration', () => {
  it('should classify article and generate valid slug', () => {
    const title = 'Understanding Neural Networks: A Beginner\'s Guide';
    const content = `
      This article explains the fundamentals of neural networks and deep learning.
      We'll cover machine learning basics, training algorithms, and how transformers work.
    `;
    
    const category = classifyArticle(title, content);
    const slug = generateSlug(title);
    
    expect(category).toBe('AI Fundamentals');
    expect(slug).toBe('understanding-neural-networks-a-beginners-guide');
    expect(isValidSlug(slug)).toBe(true);
  });

  it('should handle multiple articles with different categories', () => {
    const articles = [
      {
        title: 'The EU AI Act Explained',
        content: 'The EU AI Act is landmark legislation for AI regulation.',
        expectedCategory: 'AI Laws'
      },
      {
        title: 'How to Write an AI Policy: A Template Guide',
        content: 'Step-by-step guide with templates and checklists.',
        expectedCategory: 'Practical Guides'
      },
      {
        title: 'AI Auditing Fundamentals',
        content: 'This article covers AI audit processes and accountability.',
        expectedCategory: 'AI Auditing & Accountability'
      }
    ];
    
    articles.forEach(article => {
      const category = classifyArticle(article.title, article.content);
      const slug = generateSlug(article.title);
      
      expect(category).toBe(article.expectedCategory);
      expect(isValidSlug(slug)).toBe(true);
      expect(slug.length).toBeLessThanOrEqual(60);
    });
  });

  it('should generate unique slugs for similar titles', () => {
    const titles = [
      'AI Governance Guide',
      'AI Governance: A Guide',
      'AI Governance - Complete Guide'
    ];
    
    const slugs = titles.map(title => generateSlug(title));
    
    // All should be valid
    slugs.forEach(slug => {
      expect(isValidSlug(slug)).toBe(true);
    });
    
    // They should normalize to similar or same slugs (which is expected)
    expect(slugs[0]).toBe('ai-governance-guide');
    expect(slugs[1]).toBe('ai-governance-a-guide');
    expect(slugs[2]).toBe('ai-governance-complete-guide');
  });

  it('should handle long titles with classification', () => {
    const title = 'Understanding Artificial Intelligence Risk Management Frameworks and Standards: A Comprehensive Guide';
    const content = 'This article covers NIST AI RMF, ISO standards, and best practices.';
    
    const category = classifyArticle(title, content);
    const slug = generateSlug(title);
    
    expect(category).toBe('Risk Frameworks & Standards');
    expect(slug.length).toBeLessThanOrEqual(60);
    expect(isValidSlug(slug)).toBe(true);
  });

  it('should process article with special characters in title', () => {
    const title = 'AI & Machine Learning: Ethics, Governance & Best Practices!';
    const content = 'This article discusses ethical principles and governance frameworks.';
    
    const category = classifyArticle(title, content);
    const slug = generateSlug(title);
    
    expect(category).toBeDefined();
    expect(isValidSlug(slug)).toBe(true);
    expect(slug).not.toContain('&');
    expect(slug).not.toContain('!');
    expect(slug).not.toContain(':');
  });
});
