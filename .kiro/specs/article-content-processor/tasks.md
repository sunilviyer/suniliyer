# Implementation Plan

- [x] 1. Set up project structure and core interfaces
  - Create directory structure for processors, analyzers, generators, and utilities
  - Define TypeScript interfaces for all data models (ArticleJSON, ProcessedArticle, ImagePrompt, etc.)
  - Set up testing framework with fast-check for property-based testing
  - Configure Ollama client for local AI integration
  - _Requirements: 1.1, 6.1_

- [x] 2. Implement file discovery and content parsing
- [x] 2.1 Create file discovery utilities
  - Write functions to scan `content/articles/drafts` directory for markdown files
  - Implement file filtering to identify only .md files
  - Add error handling for directory access issues
  - _Requirements: 1.1_

- [ ]* 2.2 Write property test for file discovery
  - **Property 1: File Discovery and Processing**
  - **Validates: Requirements 1.1, 1.4, 1.5**

- [x] 2.3 Implement markdown content parser
  - Create parser to extract frontmatter and content from markdown files
  - Handle malformed markdown gracefully
  - Extract title from H1 headers
  - Calculate word count accurately
  - _Requirements: 1.2, 2.4, 2.5_

- [ ]* 2.4 Write property test for content parsing
  - **Property 2: Content Structure Validation**
  - **Validates: Requirements 1.2, 1.3**

- [x] 3. Implement content validation and structure analysis
- [x] 3.1 Create structure validator
  - Implement validation for H1 title presence
  - Check for introduction and conclusion sections
  - Validate header depth hierarchy (H1 -> H2 -> H3, etc.)
  - Identify document organization issues
  - _Requirements: 1.2, 1.3_

- [ ]* 3.2 Write property test for structure validation
  - **Property 2: Content Structure Validation**
  - **Validates: Requirements 1.2, 1.3**

- [x] 3.3 Implement word count analysis
  - Create accurate word counting function
  - Compare against target word counts when available
  - Generate status classifications (within_range, under, over)
  - _Requirements: 2.5_

- [ ]* 3.4 Write property test for word count analysis
  - **Property 6: Word Count Analysis**
  - **Validates: Requirements 2.5**

- [x] 4. Implement category classification system
- [x] 4.1 Create category classifier
  - Implement classification logic for 11 AI governance categories
  - Use title and content analysis for category assignment
  - Ensure exactly one category is assigned per article
  - Add confidence scoring for classifications
  - _Requirements: 2.1, 2.2_

- [ ]* 4.2 Write property test for category classification
  - **Property 3: Category Classification Consistency**
  - **Validates: Requirements 2.1, 2.2**

- [x] 4.3 Implement slug generation
  - Create URL-friendly slug generator using kebab-case
  - Ensure slugs are under 60 characters
  - Handle special characters and spaces appropriately
  - _Requirements: 2.3_

- [ ]* 4.4 Write property test for slug generation
  - **Property 5: Slug Generation Compliance**
  - **Validates: Requirements 2.3**

- [-] 5. Implement content enhancement system
- [x] 5.1 Create content enhancer
  - Implement TL;DR generation for missing summaries (2 sentences)
  - Generate 3 action-oriented learning objectives when missing
  - Create 5 relevant SEO keywords when missing
  - Track which elements were generated vs extracted
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ]* 5.2 Write property test for content enhancement
  - **Property 4: Metadata Extraction and Enhancement**
  - **Validates: Requirements 2.4, 3.1, 3.2, 3.3, 3.4**

- [x] 6. Implement component detection system
- [x] 6.1 Create component detector
  - Implement checklist detection ([ ] patterns and "Checklist" headers)
  - Detect markdown tables and capture section locations
  - Identify flowcharts (MermaidJS blocks and step-by-step processes)
  - Find templates and generate downloadable links
  - Detect structured lists (Pros & Cons, Key Risk Factors, etc.)
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ]* 6.2 Write property test for component detection
  - **Property 7: Component Detection Accuracy**
  - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**

- [-] 7. Implement image prompt generation system
- [x] 7.1 Create image prompt generator
  - Implement category-to-motif mapping (neural networks, scales, shields, etc.)
  - Generate image prompts using base formula + category motifs
  - Create consistent image placeholders for markdown
  - Set master size to 1200x750px and enable CSS filters
  - _Requirements: Image generation requirements_

- [ ]* 7.2 Write property test for image generation
  - **Property 11: Image Generation Integration**
  - **Validates: Image generation requirements**

- [-] 8. Implement cross-reference analysis system
- [x] 8.1 Create cross-reference analyzer
  - Extract top 5 core technical concepts for topic fingerprinting
  - Identify specific named entities (companies, regulations, case studies)
  - Filter out generic terms unless specific brands/models are named
  - Focus on technical concepts useful for collision detection
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ]* 8.2 Write property test for cross-reference analysis
  - **Property 8: Cross-Reference Data Extraction**
  - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**

- [x] 9. Implement Ollama AI integration for redundancy analysis
- [x] 9.1 Set up Ollama client and configuration
  - Create Ollama client with configurable endpoint and model
  - Implement timeout and error handling for AI requests
  - Add configuration for user-specified models
  - Test connection to local Ollama instance
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 9.2 Implement AI-powered redundancy analysis
  - Send master JSON to Ollama for content overlap analysis
  - Parse AI responses for redundancy identification
  - Generate cross-reference suggestions with rationale
  - Add confidence scoring and processing time tracking
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ]* 9.3 Write property test for Ollama redundancy analysis
  - **Property 10: Ollama AI Redundancy Analysis**
  - **Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5**

- [x] 10. Implement multi-format output generation
- [x] 10.1 Create YAML output generator
  - Generate structured YAML with clear section delimiters (# === SECTION ===)
  - Include all required sections: file_status, content_validation, component_inventory, extracted_data, cross_reference_data, image_generation
  - Ensure consistent formatting for parser compatibility
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 10.2 Create JSON output generator
  - Generate valid JSON matching ArticleJSON interface
  - Include all required fields and nested structures
  - Validate JSON output before writing
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 10.3 Create cleaned markdown generator
  - Generate cleaned markdown with image placeholders for `content/articles/clean`
  - Insert image placeholders in appropriate locations
  - Preserve original content structure while adding enhancements
  - Remove any processing artifacts and ensure clean formatting
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ]* 10.4 Write property test for multi-format output
  - **Property 9: Multi-Format Output Compliance**
  - **Validates: Requirements 6.1, 6.2, 6.3, 6.4, 6.5**

- [x] 11. Implement file management system
- [x] 11.1 Create file manager with three-directory structure
  - Write YAML and JSON outputs to `content/articles/articleprocessing`
  - Move original drafts to `content/articles/review` for review
  - Write cleaned markdown to `content/articles/clean`
  - Preserve original filenames during all operations
  - Ensure data integrity with before/after validation
  - Create all required directories if they don't exist
  - Handle file conflicts and permission issues
  - _Requirements: 1.4, 1.5_

- [ ]* 11.2 Write property test for file management
  - **Property 1: File Discovery and Processing** (covers file operations)
  - **Validates: Requirements 1.1, 1.4, 1.5**

- [x] 12. Implement main article processor orchestrator
- [x] 12.1 Create article processor orchestrator
  - Coordinate all processing stages in correct order
  - Handle errors gracefully and continue processing other articles
  - Generate comprehensive processing reports
  - Compile master JSON from all processed articles
  - _Requirements: All requirements_

- [x] 12.2 Add comprehensive error handling
  - Implement error recovery for each processing stage
  - Log detailed error information for debugging
  - Provide meaningful error messages for validation failures
  - Continue processing when individual articles fail
  - _Requirements: All requirements_

- [x] 13. Create command-line interface and configuration
- [x] 13.1 Implement CLI interface
  - Create command-line tool for processing articles
  - Add options for single article vs batch processing
  - Include configuration options for Ollama model selection
  - Add verbose logging and progress reporting
  - Display output directory structure (articleprocessing, review, clean)
  - _Requirements: All requirements_

- [x] 13.2 Add configuration management
  - Create configuration file for Ollama settings
  - Allow customization of output directories (articleprocessing, review, clean)
  - Add validation for configuration parameters
  - Document directory structure in configuration
  - _Requirements: All requirements_

- [x] 14. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [-] 15. Create integration and end-to-end testing
- [x] 15.1 Implement integration tests
  - Test complete pipeline with sample articles
  - Verify master JSON generation with multiple articles
  - Test Ollama integration with mock responses
  - Validate file operations end-to-end
  - _Requirements: All requirements_

- [ ]* 15.2 Create test utilities and fixtures
  - Generate realistic test articles for property testing
  - Create mock Ollama responses for testing
  - Build test data generators for various content types
  - _Requirements: All requirements_

- [x] 16. Add documentation and usage examples
- [x] 16.1 Create comprehensive documentation
  - Document all interfaces and configuration options
  - Provide usage examples for CLI tool
  - Create troubleshooting guide for common issues
  - Document Ollama setup and model requirements
  - _Requirements: All requirements_

- [x] 16.2 Create sample processing workflow
  - Provide example configuration files
  - Create sample articles for testing
  - Document expected output formats
  - _Requirements: All requirements_

- [x] 17. Final Checkpoint - Complete system validation
  - Ensure all tests pass, ask the user if questions arise.