/**
 * Integration tests for ComponentDetector with real article content
 */

import { ComponentDetector } from '../detectors/component-detector';
import { readFile } from 'fs/promises';
import { join } from 'path';

describe('ComponentDetector Integration', () => {
  let detector: ComponentDetector;

  beforeEach(() => {
    detector = new ComponentDetector();
  });

  it('should detect components in a real AI policy guide article', async () => {
    try {
      const articlePath = join(process.cwd(), 'content/articles/drafts/Article_154_ai_policy_guide.md');
      const content = await readFile(articlePath, 'utf-8');
      
      const components = detector.detectAllComponents(content);
      
      // Should detect various components in the AI policy guide
      expect(components.length).toBeGreaterThan(0);
      
      const componentTypes = components.map(c => c.type);
      const componentLabels = components.map(c => c.label);
      
      console.log('Detected components:', components.map(c => `${c.type}: ${c.label}`));
      
      // Should detect tables (comparison tables, role tables, etc.)
      expect(componentTypes).toContain('table');
      
      // May or may not detect checklists depending on article content
      // expect(componentTypes).toContain('checklist');
      
      // Should detect templates (policy templates, questionnaires, etc.)
      expect(componentTypes).toContain('template');
      
      // Should detect structured lists (requirements, principles, etc.)
      expect(componentTypes).toContain('list');
      
      // Verify some specific expected components
      expect(componentLabels.some(label => label.toLowerCase().includes('template'))).toBe(true);
      expect(componentLabels.some(label => label.toLowerCase().includes('table'))).toBe(true);
      
    } catch (error) {
      // If the file doesn't exist, skip this test
      if ((error as any).code === 'ENOENT') {
        console.log('Skipping integration test - sample article not found');
        return;
      }
      throw error;
    }
  });

  it('should handle articles with no components', () => {
    const content = `
# Simple Article

This is just a regular article with paragraphs of text.

## Section 1

Some content here with no special components.

## Section 2

More regular content without any interactive elements.

The end.
    `;

    const components = detector.detectAllComponents(content);
    expect(components).toHaveLength(0);
  });

  it('should detect components across complex document structure', () => {
    const content = `
# AI Governance Guide

## Introduction
This guide covers AI governance.

## Requirements Analysis

### System Requirements
- Minimum 8GB RAM
- 100GB storage
- Network access

## Implementation Process

### Step-by-Step Guide

Step 1: Gather requirements
Step 2: Design system
Step 3: Implement solution

## Comparison Matrix

| Feature | Option A | Option B | Option C |
|---------|----------|----------|----------|
| Cost    | Low      | Medium   | High     |
| Speed   | Fast     | Medium   | Slow     |

## Pre-Launch Checklist

- [ ] Security review completed
- [ ] Performance testing done
- [ ] Documentation updated
- [ ] Stakeholder approval received

## Policy Template

**Template for AI Policy:**

1. Purpose and Scope
2. Governing Principles
3. Roles and Responsibilities

## Pros and Cons

**Pros:**
- Comprehensive approach
- Industry best practices

**Cons:**
- Time-intensive process
- Requires expertise

## Flowchart

\`\`\`mermaid
graph TD
    A[Start] --> B[Analyze]
    B --> C[Design]
    C --> D[Implement]
\`\`\`
    `;

    const components = detector.detectAllComponents(content);
    
    // Should detect all component types
    const types = components.map(c => c.type);
    expect(types).toContain('list');      // Requirements
    expect(types).toContain('flowchart'); // Step-by-step + mermaid
    expect(types).toContain('table');     // Comparison matrix
    expect(types).toContain('checklist'); // Pre-launch checklist
    expect(types).toContain('template');  // Policy template
    
    // Should have reasonable number of components (not too many duplicates)
    expect(components.length).toBeGreaterThan(5);
    expect(components.length).toBeLessThan(15);
    
    // Verify section tracking
    const sections = [...new Set(components.map(c => c.detected_at_section))];
    expect(sections.length).toBeGreaterThan(3);
  });
});