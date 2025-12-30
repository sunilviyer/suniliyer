/**
 * Tests for ArticleContentEnhancer
 * 
 * Tests the content enhancement functionality including TL;DR generation,
 * learning objectives creation, and SEO keyword extraction.
 */

import { ArticleContentEnhancer } from '../processors/content-enhancer';

describe('ArticleContentEnhancer', () => {
  let enhancer: ArticleContentEnhancer;

  beforeEach(() => {
    enhancer = new ArticleContentEnhancer();
  });

  describe('generateTLDR', () => {
    it('should generate a 2-sentence TL;DR for AI governance content', () => {
      const content = `
# AI Governance Framework

AI governance is essential for organizations implementing artificial intelligence systems. 
This framework provides comprehensive guidance for establishing governance structures, 
risk management processes, and compliance mechanisms.

## Key Components

The framework includes policy development, stakeholder engagement, and continuous monitoring.
Organizations must establish clear roles and responsibilities for AI oversight.
Risk assessment should be conducted throughout the AI lifecycle.

## Implementation

Successful implementation requires executive support and cross-functional collaboration.
Regular audits ensure ongoing compliance with regulatory requirements.
      `;

      const tldr = enhancer.generateTLDR(content);
      
      expect(tldr).toBeDefined();
      expect(typeof tldr).toBe('string');
      
      // Should be approximately 2 sentences
      const sentences = tldr.split(/[.!?]+/).filter(s => s.trim().length > 0);
      expect(sentences.length).toBe(2);
      
      // Should contain relevant AI governance terms
      expect(tldr.toLowerCase()).toMatch(/ai|governance|framework|implementation|compliance/);
    });

    it('should handle empty content gracefully', () => {
      const tldr = enhancer.generateTLDR('');
      
      expect(tldr).toBeDefined();
      expect(typeof tldr).toBe('string');
      expect(tldr.length).toBeGreaterThan(0);
    });

    it('should handle content with only markdown formatting', () => {
      const content = `
# Title
**Bold text** and *italic text*
\`code\` and [links](http://example.com)
![image](image.png)
      `;

      const tldr = enhancer.generateTLDR(content);
      
      expect(tldr).toBeDefined();
      expect(typeof tldr).toBe('string');
      expect(tldr.length).toBeGreaterThan(0);
    });
  });

  describe('generateLearningObjectives', () => {
    it('should generate 3 action-oriented learning objectives', () => {
      const content = `
# AI Risk Management

This article covers risk assessment methodologies, compliance strategies, 
and implementation frameworks for AI governance. Organizations need to 
establish clear policies and procedures for managing AI-related risks.

Key topics include bias detection, model validation, and audit procedures.
      `;

      const objectives = enhancer.generateLearningObjectives(content);
      
      expect(objectives).toBeDefined();
      expect(Array.isArray(objectives)).toBe(true);
      expect(objectives.length).toBe(3);
      
      // Each objective should be a non-empty string
      objectives.forEach(objective => {
        expect(typeof objective).toBe('string');
        expect(objective.length).toBeGreaterThan(0);
      });
      
      // Should contain action verbs
      const allObjectives = objectives.join(' ');
      expect(allObjectives).toMatch(/Understand|Implement|Evaluate|Analyze|Create|Apply|Assess|Design|Develop|Identify|Compare|Establish/);
    });

    it('should handle empty content by generating generic objectives', () => {
      const objectives = enhancer.generateLearningObjectives('');
      
      expect(objectives).toBeDefined();
      expect(objectives.length).toBe(3);
      objectives.forEach(objective => {
        expect(typeof objective).toBe('string');
        expect(objective.length).toBeGreaterThan(0);
      });
    });
  });

  describe('generateSEOKeywords', () => {
    it('should generate 5 relevant SEO keywords', () => {
      const title = 'AI Policy Development Guide';
      const content = `
This comprehensive guide covers AI governance frameworks, compliance strategies,
and risk management approaches. Organizations implementing artificial intelligence
systems need robust policies and procedures.

Key areas include ethical AI principles, bias detection, and regulatory compliance.
      `;

      const keywords = enhancer.generateSEOKeywords(title, content);
      
      expect(keywords).toBeDefined();
      expect(Array.isArray(keywords)).toBe(true);
      expect(keywords.length).toBe(5);
      
      // Each keyword should be a non-empty string
      keywords.forEach(keyword => {
        expect(typeof keyword).toBe('string');
        expect(keyword.length).toBeGreaterThan(0);
      });
      
      // Should contain relevant AI terms
      const allKeywords = keywords.join(' ').toLowerCase();
      expect(allKeywords).toMatch(/ai|artificial|intelligence|governance|policy|compliance|framework/);
    });

    it('should handle empty title and content', () => {
      const keywords = enhancer.generateSEOKeywords('', '');
      
      expect(keywords).toBeDefined();
      expect(keywords.length).toBe(5);
      keywords.forEach(keyword => {
        expect(typeof keyword).toBe('string');
        expect(keyword.length).toBeGreaterThan(0);
      });
    });

    it('should prioritize title words in keywords', () => {
      const title = 'GDPR Compliance Framework';
      const content = 'General content about data protection and privacy regulations.';

      const keywords = enhancer.generateSEOKeywords(title, content);
      
      const keywordString = keywords.join(' ').toLowerCase();
      expect(keywordString).toMatch(/gdpr|compliance|framework/);
    });
  });

  describe('trackGeneratedElements', () => {
    it('should return the same GeneratedElements object', () => {
      const elements = {
        tldr_was_missing: true,
        objectives_were_missing: false,
        keywords_were_missing: true
      };

      const result = enhancer.trackGeneratedElements(elements);
      
      expect(result).toEqual(elements);
      expect(result).toBe(elements); // Should be the same reference
    });
  });

  describe('integration scenarios', () => {
    it('should work with real AI governance article content', () => {
      const content = `
# EU AI Act: A Comprehensive Guide

The European Union's Artificial Intelligence Act represents the world's first 
comprehensive AI regulation. This landmark legislation establishes a risk-based 
approach to AI governance, categorizing AI systems based on their potential impact.

## Risk Categories

The Act defines four risk categories: minimal risk, limited risk, high risk, and 
unacceptable risk. High-risk AI systems face the most stringent requirements, 
including conformity assessments, risk management systems, and human oversight.

## Compliance Requirements

Organizations must implement robust governance frameworks, conduct regular audits, 
and maintain detailed documentation. The Act includes significant penalties for 
non-compliance, with fines up to 6% of global annual turnover.

## Implementation Timeline

The Act will be phased in over several years, with different provisions taking 
effect at different times. Organizations should begin preparation immediately 
to ensure compliance.
      `;

      const tldr = enhancer.generateTLDR(content);
      const objectives = enhancer.generateLearningObjectives(content);
      const keywords = enhancer.generateSEOKeywords('EU AI Act Guide', content);

      // Validate TL;DR
      expect(tldr).toBeDefined();
      expect(tldr.split(/[.!?]+/).filter(s => s.trim().length > 0).length).toBe(2);
      expect(tldr.toLowerCase()).toMatch(/eu|ai|act|regulation|compliance/);

      // Validate objectives
      expect(objectives.length).toBe(3);
      objectives.forEach(obj => {
        expect(obj).toMatch(/^(Understand|Implement|Evaluate|Analyze|Create|Apply|Assess|Design|Develop|Identify|Compare|Establish)/);
      });

      // Validate keywords
      expect(keywords.length).toBe(5);
      const keywordString = keywords.join(' ').toLowerCase();
      expect(keywordString).toMatch(/eu|ai|act|compliance|regulation|governance/);
    });
  });
});