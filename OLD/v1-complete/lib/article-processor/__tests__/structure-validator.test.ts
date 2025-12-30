/**
 * Structure Validator Tests
 * Tests for article structure validation
 */

import {
  validateStructure,
  hasH1Title,
  hasRequiredSections,
  validateHeaderDepth,
  getValidationIssues
} from '../validators/structure-validator';

describe('Structure Validator', () => {
  describe('hasH1Title', () => {
    it('should detect H1 title', () => {
      const content = '# My Article Title\n\nSome content here.';
      expect(hasH1Title(content)).toBe(true);
    });

    it('should return false when no H1 present', () => {
      const content = '## My Article Title\n\nSome content here.';
      expect(hasH1Title(content)).toBe(false);
    });

    it('should return false for empty content', () => {
      expect(hasH1Title('')).toBe(false);
    });

    it('should detect H1 with leading whitespace', () => {
      const content = '   # My Article Title\n\nSome content here.';
      expect(hasH1Title(content)).toBe(false); // Should be at start of line
    });
  });

  describe('hasRequiredSections', () => {
    it('should detect introduction after H1', () => {
      const content = `# Article Title

This is a substantial introduction paragraph that explains what the article is about. It provides context and sets up the main discussion. This introduction has enough words to be considered valid and substantial for the reader to understand the topic.

## Main Section

Content here.`;
      
      const result = hasRequiredSections(content);
      expect(result.has_intro).toBe(true);
    });

    it('should detect explicit Introduction header', () => {
      const content = `# Article Title

## Introduction

This is the introduction section.

## Main Content

More content.`;
      
      const result = hasRequiredSections(content);
      expect(result.has_intro).toBe(true);
    });

    it('should detect conclusion section', () => {
      const content = `# Article Title

Content here.

## Conclusion

This is the conclusion.`;
      
      const result = hasRequiredSections(content);
      expect(result.has_conclusion).toBe(true);
    });

    it('should detect various conclusion header names', () => {
      const conclusionHeaders = [
        'Conclusion',
        'Summary',
        'Final Thoughts',
        'Takeaways',
        'Key Points',
        'Wrap-Up',
        'Looking Ahead',
        'Next Steps'
      ];

      conclusionHeaders.forEach(header => {
        const content = `# Article\n\nContent.\n\n## ${header}\n\nConclusion text.`;
        const result = hasRequiredSections(content);
        expect(result.has_conclusion).toBe(true);
      });
    });

    it('should detect main content', () => {
      const content = `# Article Title

${'word '.repeat(250)}`;
      
      const result = hasRequiredSections(content);
      expect(result.has_main_content).toBe(true);
    });

    it('should return false for insufficient main content', () => {
      const content = `# Article Title

Short content.`;
      
      const result = hasRequiredSections(content);
      expect(result.has_main_content).toBe(false);
    });
  });

  describe('validateHeaderDepth', () => {
    it('should validate correct header hierarchy', () => {
      const content = `# Title
## Section 1
### Subsection 1.1
### Subsection 1.2
## Section 2
### Subsection 2.1`;
      
      expect(validateHeaderDepth(content)).toBe(true);
    });

    it('should detect skipped header levels', () => {
      const content = `# Title
### Subsection (skipped H2)
Content here.`;
      
      expect(validateHeaderDepth(content)).toBe(false);
    });

    it('should allow going back to previous levels', () => {
      const content = `# Title
## Section 1
### Subsection 1.1
#### Deep section
## Section 2 (back to H2)`;
      
      expect(validateHeaderDepth(content)).toBe(true);
    });

    it('should validate single header', () => {
      const content = `# Title\n\nContent without other headers.`;
      expect(validateHeaderDepth(content)).toBe(true);
    });

    it('should return false if not starting with H1', () => {
      const content = `## Section\n### Subsection`;
      expect(validateHeaderDepth(content)).toBe(false);
    });

    it('should handle content with no headers', () => {
      const content = 'Just plain text without headers.';
      expect(validateHeaderDepth(content)).toBe(true);
    });
  });

  describe('validateStructure', () => {
    it('should validate complete valid structure', () => {
      const content = `# Article Title

This is a comprehensive introduction that provides substantial context about the topic we're discussing. It sets up the main points and gives readers a clear understanding of what to expect. This introduction is long enough to be considered valid and provides readers with the necessary background information they need.

## Main Section

Content here with substantial information that goes into detail about the topic.

## Conclusion

This wraps up the article nicely with final thoughts.`;
      
      const result = validateStructure(content);
      expect(result.has_h1).toBe(true);
      expect(result.has_intro).toBe(true);
      expect(result.has_conclusion).toBe(true);
      expect(result.header_depth_valid).toBe(true);
    });

    it('should identify missing elements', () => {
      const content = `## Section (no H1)
### Subsection

Short content.`;
      
      const result = validateStructure(content);
      expect(result.has_h1).toBe(false);
      expect(result.has_intro).toBe(false);
      expect(result.has_conclusion).toBe(false);
      // Header depth is invalid because it doesn't start with H1
      expect(result.header_depth_valid).toBe(false);
    });
  });

  describe('getValidationIssues', () => {
    it('should return empty array for valid structure', () => {
      const content = `# Article Title

This is a comprehensive introduction that provides substantial context about the topic we're discussing. It sets up the main points and gives readers a clear understanding of what to expect. This introduction is long enough to be considered valid and provides all necessary background.

## Main Section

Content here with detailed information about the topic at hand.

## Conclusion

Final thoughts and summary of key points discussed.`;
      
      const issues = getValidationIssues(content);
      expect(issues).toHaveLength(0);
    });

    it('should list all validation issues', () => {
      const content = `## Section (no H1)
### Subsection

Short.`;
      
      const issues = getValidationIssues(content);
      expect(issues.length).toBeGreaterThan(0);
      expect(issues).toContain('Missing H1 title');
      expect(issues).toContain('Missing introduction section');
      expect(issues).toContain('Missing conclusion section');
      expect(issues).toContain('Invalid header hierarchy - headers skip levels');
    });
  });
});
