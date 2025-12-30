/**
 * Category Classifier Tests
 * Tests for article category classification
 */

import {
  classifyArticle,
  classifyWithConfidence,
  getConfidenceScore,
  getAllCategoryScores
} from '../classifiers/category-classifier';
import { Category } from '../types';

describe('Category Classifier', () => {
  describe('classifyArticle', () => {
    it('should classify AI Fundamentals article', () => {
      const title = 'Understanding Neural Networks: A Beginner\'s Guide';
      const content = `
        This article explains the fundamentals of neural networks and deep learning.
        We'll cover machine learning basics, training algorithms, and how transformers work.
        Neural networks are the building blocks of modern AI systems.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('AI Fundamentals');
    });

    it('should classify AI Risks & Principles article', () => {
      const title = 'Algorithmic Bias: When AI Goes Wrong';
      const content = `
        This article discusses bias in AI systems, fairness concerns, and ethical principles.
        We explore transparency, accountability, and responsible AI development.
        Trustworthy AI requires addressing discrimination and ensuring explainability.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('AI Risks & Principles');
    });

    it('should classify Legal Frameworks article', () => {
      const title = 'AI and Product Liability: Legal Considerations';
      const content = `
        This article examines legal frameworks for AI, including liability, tort law, and compliance.
        We discuss GDPR implications, intellectual property rights, and consumer protection laws.
        Legal considerations are crucial for AI deployment.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('Legal Frameworks');
    });

    it('should classify AI Laws article', () => {
      const title = 'The EU AI Act Explained';
      const content = `
        This article breaks down the EU AI Act, its risk classification system, and requirements.
        We cover high-risk AI systems, prohibited practices, and conformity assessment.
        The EU AI Act is landmark legislation for artificial intelligence regulation.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('AI Laws');
    });

    it('should classify Risk Frameworks & Standards article', () => {
      const title = 'NIST AI Risk Management Framework: Complete Guide';
      const content = `
        This article explains the NIST AI RMF, ISO 42001 standard, and IEEE guidelines.
        We cover risk assessment methodologies, best practices, and governance frameworks.
        Standards and frameworks provide structure for AI risk management.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('Risk Frameworks & Standards');
    });

    it('should classify AI Development Lifecycle article', () => {
      const title = 'Building AI Systems: Development Best Practices';
      const content = `
        This article covers the AI development lifecycle from design to deployment.
        We discuss training, testing, validation, monitoring, and MLOps practices.
        Model cards, documentation, and version control are essential for development.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('AI Development Lifecycle');
    });

    it('should classify Governance Implementation article', () => {
      const title = 'Building an AI Governance Function';
      const content = `
        This article explains how to establish AI governance structures and policies.
        We cover governance committees, roles and responsibilities, and oversight processes.
        The Chief AI Officer and AI Ethics Board are key governance components.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('Governance Implementation');
    });

    it('should classify AI Auditing & Accountability article', () => {
      const title = 'AI Auditing Fundamentals';
      const content = `
        This article covers AI audit processes, accountability mechanisms, and monitoring.
        We discuss internal audits, external audits, and algorithmic auditing approaches.
        Continuous monitoring and red teaming ensure AI system compliance.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('AI Auditing & Accountability');
    });

    it('should classify Future Concerns article', () => {
      const title = 'AGI and Existential Risk';
      const content = `
        This article explores artificial general intelligence and long-term AI risks.
        We discuss the alignment problem, superintelligence, and existential threats.
        Future concerns include autonomous weapons and concentration of power.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('Future Concerns');
    });

    it('should classify Industry-Specific Insights article', () => {
      const title = 'AI in Healthcare: Clinical Applications';
      const content = `
        This article examines AI applications in healthcare, including diagnosis and treatment.
        We cover medical AI systems, clinical decision support, and regulatory requirements.
        Healthcare AI faces unique challenges around patient safety and privacy.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('Industry-Specific Insights');
    });

    it('should classify Practical Guides article', () => {
      const title = 'How to Write an AI Policy: A Template-Based Guide';
      const content = `
        This practical guide provides step-by-step instructions and templates for AI policies.
        We include checklists, examples, and a toolkit for implementation.
        This handbook offers practical advice and best practices for getting started.
      `;
      
      const category = classifyArticle(title, content);
      expect(category).toBe('Practical Guides');
    });

    it('should handle empty title and content', () => {
      const category = classifyArticle('', '');
      expect(category).toBeDefined();
      expect(typeof category).toBe('string');
    });

    it('should return exactly one category', () => {
      const title = 'AI Governance and Risk Management';
      const content = 'This article covers multiple topics.';
      
      const category = classifyArticle(title, content);
      expect(category).toBeDefined();
      
      // Verify it's one of the valid categories
      const validCategories: Category[] = [
        "AI Fundamentals",
        "AI Risks & Principles",
        "Legal Frameworks",
        "AI Laws",
        "Risk Frameworks & Standards",
        "AI Development Lifecycle",
        "Governance Implementation",
        "AI Auditing & Accountability",
        "Future Concerns",
        "Industry-Specific Insights",
        "Practical Guides"
      ];
      
      expect(validCategories).toContain(category);
    });
  });

  describe('classifyWithConfidence', () => {
    it('should return category with confidence score', () => {
      const title = 'Understanding Neural Networks';
      const content = 'Deep learning and machine learning fundamentals.';
      
      const result = classifyWithConfidence(title, content);
      
      expect(result.category).toBeDefined();
      expect(result.confidence).toBeGreaterThanOrEqual(0);
      expect(result.confidence).toBeLessThanOrEqual(1);
    });

    it('should have higher confidence for clear matches', () => {
      const title = 'The EU AI Act: Complete Guide';
      const content = `
        The EU AI Act is the European Union's comprehensive AI regulation.
        It establishes risk classifications and requirements for AI systems.
        High-risk AI systems must meet conformity assessment requirements.
      `;
      
      const result = classifyWithConfidence(title, content);
      
      expect(result.category).toBe('AI Laws');
      expect(result.confidence).toBeGreaterThan(0.3);
    });

    it('should have lower confidence for ambiguous content', () => {
      const title = 'AI Systems';
      const content = 'Brief article about AI.';
      
      const result = classifyWithConfidence(title, content);
      
      expect(result.confidence).toBeDefined();
      expect(result.confidence).toBeGreaterThanOrEqual(0);
    });
  });

  describe('getConfidenceScore', () => {
    it('should return confidence for matching category', () => {
      const title = 'NIST AI Risk Management Framework';
      const content = 'Framework for AI risk assessment and standards.';
      
      const confidence = getConfidenceScore(title, content, 'Risk Frameworks & Standards');
      
      expect(confidence).toBeGreaterThan(0);
    });

    it('should return 0 for non-matching category', () => {
      const title = 'NIST AI Risk Management Framework';
      const content = 'Framework for AI risk assessment and standards.';
      
      const confidence = getConfidenceScore(title, content, 'AI Fundamentals');
      
      expect(confidence).toBe(0);
    });
  });

  describe('getAllCategoryScores', () => {
    it('should return scores for all categories', () => {
      const title = 'AI Governance';
      const content = 'Article about AI governance and policy.';
      
      const scores = getAllCategoryScores(title, content);
      
      expect(Object.keys(scores)).toHaveLength(11);
      expect(scores['Governance Implementation']).toBeGreaterThan(0);
    });

    it('should have highest score for best matching category', () => {
      const title = 'How to Build AI Systems: A Developer Guide';
      const content = 'Step-by-step guide with templates and checklists for building AI.';
      
      const scores = getAllCategoryScores(title, content);
      
      const maxScore = Math.max(...Object.values(scores));
      const bestCategory = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0];
      
      expect(bestCategory).toBe('Practical Guides');
    });
  });
});
