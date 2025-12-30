/**
 * Tests for ComponentDetector
 */

import { ComponentDetector } from '../detectors/component-detector';
import { ComponentItem } from '../types';

describe('ComponentDetector', () => {
  let detector: ComponentDetector;

  beforeEach(() => {
    detector = new ComponentDetector();
  });

  describe('detectChecklists', () => {
    it('should detect explicit checklist headers', () => {
      const content = `
# Introduction
Some intro text.

## Pre-Deployment Checklist
This is a checklist for deployment.

## Other Section
Some other content.
      `;

      const result = detector.detectChecklists(content);
      
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        type: 'checklist',
        label: 'Pre-Deployment Checklist',
        detected_at_section: 'Pre-Deployment Checklist'
      });
    });

    it('should detect checkbox patterns', () => {
      const content = `
# Setup Requirements

Before starting, ensure you have:

- [ ] Node.js installed
- [x] Git configured
- [ ] Database access
      `;

      const result = detector.detectChecklists(content);
      
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        type: 'checklist',
        label: 'Setup Requirements',
        detected_at_section: 'Setup Requirements'
      });
    });

    it('should exclude internal publishing checklists', () => {
      const content = `
# Review Checklist

- [ ] Grammar checked
- [ ] Links verified
- [ ] SEO optimized

# User Checklist

- [ ] Account created
- [ ] Profile completed
      `;

      const result = detector.detectChecklists(content);
      

      
      // Should detect User Checklist (both header and checkbox pattern, but deduplicated)
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('User Checklist');
    });

    it('should handle different checkbox formats', () => {
      const content = `
# Task List

* [ ] First task
* [x] Completed task
- [ ] Another task
- [X] Also completed
      `;

      const result = detector.detectChecklists(content);
      
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('Task List');
    });
  });

  describe('detectTables', () => {
    it('should detect markdown tables', () => {
      const content = `
# Comparison

| Feature | Plan A | Plan B |
|---------|--------|--------|
| Price   | $10    | $20    |
| Storage | 1GB    | 5GB    |
      `;

      const result = detector.detectTables(content);
      
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        type: 'table',
        label: 'Feature vs Plan A Table',
        detected_at_section: 'Comparison'
      });
    });

    it('should handle tables with different separators', () => {
      const content = `
# Data Analysis

| Metric | Q1 | Q2 | Q3 |
|:-------|:--:|:--:|---:|
| Revenue| 100| 150| 200|
      `;

      const result = detector.detectTables(content);
      
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('Metric vs Q1 Table');
    });

    it('should not detect malformed tables', () => {
      const content = `
# Not a Table

This is just text with | pipes | in it.
But no proper table structure.
      `;

      const result = detector.detectTables(content);
      
      expect(result).toHaveLength(0);
    });
  });

  describe('detectFlowcharts', () => {
    it('should detect MermaidJS blocks', () => {
      const content = `
# Process Flow

Here's the workflow:

\`\`\`mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
\`\`\`
      `;

      const result = detector.detectFlowcharts(content);
      
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        type: 'flowchart',
        label: 'Process Flow Flowchart',
        detected_at_section: 'Process Flow'
      });
    });

    it('should detect step-by-step processes', () => {
      const content = `
# Installation Process

Follow these steps:

Step 1: Download the software
Step 2: Run the installer
Step 3: Configure settings
      `;

      const result = detector.detectFlowcharts(content);
      
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('Installation Process Process');
    });

    it('should detect numbered processes', () => {
      const content = `
# Deployment

1. Build the application
2. Run tests
3. Deploy to staging
4. Deploy to production
      `;

      const result = detector.detectFlowcharts(content);
      
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('Deployment Process');
    });

    it('should detect arrow-based flows', () => {
      const content = `
# Data Flow

Input → Processing → Validation → Output
      `;

      const result = detector.detectFlowcharts(content);
      
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('Data Flow Process');
    });
  });

  describe('detectTemplates', () => {
    it('should detect template headers', () => {
      const content = `
# Email Template

Use this template for notifications:

Subject: Welcome to our service
Body: Hello {{name}}, welcome!
      `;

      const result = detector.detectTemplates(content);
      
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        type: 'template',
        label: 'Email Template',
        detected_at_section: 'Email Template',
        template_link: '/templates/email-template.md'
      });
    });

    it('should detect questionnaire templates', () => {
      const content = `
# Risk Assessment Questionnaire

**Template:**

1. What is the risk level?
2. What are the mitigation strategies?
      `;

      const result = detector.detectTemplates(content);
      
      expect(result).toHaveLength(2); // Header + content template
      expect(result[0].template_link).toBe('/templates/risk-assessment-questionnaire.md');
      expect(result[1].template_link).toBe('/templates/template.md');
    });

    it('should generate proper template links', () => {
      const content = `
# AI Policy Boilerplate Template

Copy this format for your policy.
      `;

      const result = detector.detectTemplates(content);
      
      expect(result).toHaveLength(2); // Header + content template
      expect(result[0].template_link).toBe('/templates/ai-policy-boilerplate-template.md');
      expect(result[1].template_link).toBe('/templates/copy-this-format-for-your-policy.md');
    });
  });

  describe('detectStructuredLists', () => {
    it('should detect pros and cons lists', () => {
      const content = `
# Analysis

## Pros and Cons

**Pros:**
- Easy to use
- Cost effective

**Cons:**
- Limited features
- No support
      `;

      const result = detector.detectStructuredLists(content);
      
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        type: 'list',
        label: 'Pros and Cons',
        detected_at_section: 'Pros and Cons'
      });
    });

    it('should detect key risk factors', () => {
      const content = `
# Risk Assessment

## Key Risk Factors

The main risks include:
- Technical complexity
- Resource constraints
      `;

      const result = detector.detectStructuredLists(content);
      
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('Key Risk Factors');
    });

    it('should detect best practices', () => {
      const content = `
# Guidelines

## Best Practices

Follow these guidelines:
- Use version control
- Write tests
      `;

      const result = detector.detectStructuredLists(content);
      
      expect(result).toHaveLength(2); // Both "Guidelines" and "Best Practices"
      expect(result.some(r => r.label === 'Best Practices')).toBe(true);
      expect(result.some(r => r.label === 'Guidelines')).toBe(true);
    });

    it('should detect requirements lists', () => {
      const content = `
# System Requirements

- Minimum 8GB RAM
- 100GB storage
- Network access
      `;

      const result = detector.detectStructuredLists(content);
      
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('System Requirements');
    });
  });

  describe('detectAllComponents', () => {
    it('should detect all component types in a single document', () => {
      const content = `
# AI Policy Guide

## Introduction
This guide covers AI policy creation.

## Requirements
- Legal review
- Stakeholder input

## Comparison Table

| Feature | Option A | Option B |
|---------|----------|----------|
| Cost    | Low      | High     |

## Implementation Checklist
- [ ] Draft policy
- [ ] Review with legal
- [ ] Get approval

## Process Flow

Step 1: Gather requirements
Step 2: Draft policy
Step 3: Review and approve

## Policy Template

**Template:**
Use this format for your policy.

## Pros and Cons

**Pros:**
- Comprehensive coverage

**Cons:**
- Time consuming
      `;

      const result = detector.detectAllComponents(content);
      
      // Should detect: requirements list, table, checklist, flowchart, template, pros/cons
      expect(result.length).toBeGreaterThanOrEqual(5);
      
      const types = result.map(c => c.type);
      expect(types).toContain('list');
      expect(types).toContain('table');
      expect(types).toContain('checklist');
      expect(types).toContain('flowchart');
      expect(types).toContain('template');
    });

    it('should return empty array for content with no components', () => {
      const content = `
# Simple Article

This is just a regular article with paragraphs.

It has no special components, just text.

The end.
      `;

      const result = detector.detectAllComponents(content);
      
      expect(result).toHaveLength(0);
    });
  });

  describe('edge cases', () => {
    it('should handle empty content', () => {
      const result = detector.detectAllComponents('');
      expect(result).toHaveLength(0);
    });

    it('should handle content with only headers', () => {
      const content = `
# Header 1
## Header 2
### Header 3
      `;

      const result = detector.detectAllComponents(content);
      expect(result).toHaveLength(0);
    });

    it('should handle malformed markdown gracefully', () => {
      const content = `
# Broken Table

| Header 1 | Header 2
Missing separator line
| Data 1 | Data 2 |

# Broken Checklist
- [ Incomplete checkbox
- [x] Good checkbox
      `;

      const result = detector.detectAllComponents(content);
      
      // Should still detect the good checkbox
      expect(result.some(c => c.type === 'checklist')).toBe(true);
    });

    it('should track sections correctly across complex documents', () => {
      const content = `
# Main Section

## Subsection A
- [ ] Task in A

### Deep Subsection
- [ ] Task in deep section

## Subsection B
- [ ] Task in B
      `;

      const result = detector.detectChecklists(content);
      
      expect(result).toHaveLength(3);
      expect(result[0].detected_at_section).toBe('Subsection A');
      expect(result[1].detected_at_section).toBe('Deep Subsection');
      expect(result[2].detected_at_section).toBe('Subsection B');
    });
  });
});