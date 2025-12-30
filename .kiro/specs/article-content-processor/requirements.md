# Requirements Document

## Introduction

This feature will create a comprehensive system to process existing draft articles in `/content/articles/drafts`, analyze their content against governance standards, generate structured JSON metadata for automated processing, and move validated articles to `/content/articles/review`. The system acts as a content validation and metadata extraction pipeline for AI governance articles.

## Glossary

- **Article_Processor**: The main system that orchestrates the analysis and processing of draft articles
- **Content_Validator**: Component that validates article structure and content against governance standards
- **Metadata_Extractor**: Component that extracts and generates structured metadata from article content
- **JSON_Generator**: Component that creates standardized JSON output for each processed article
- **File_Manager**: Component that handles moving files from drafts to review directory
- **Category_Classifier**: Component that assigns articles to one of the 11 predefined categories
- **Component_Detector**: Component that identifies UI components within article content (checklists, tables, flowcharts, etc.)
- **Cross_Reference_Analyzer**: Component that extracts topic fingerprints and named entities for collision detection
- **Content_Enhancer**: Component that generates missing elements like TL;DR, objectives, and keywords

## Requirements

### Requirement 1

**User Story:** As a content manager, I want to process all draft articles in the drafts folder, so that I can validate their structure and extract standardized metadata for each article.

#### Acceptance Criteria

1. WHEN the system processes the drafts directory, THE Article_Processor SHALL identify all markdown files in `/content/articles/drafts`
2. WHEN processing each file, THE Content_Validator SHALL verify the presence of H1 title, introduction, main content, and conclusion
3. WHEN analyzing content structure, THE Content_Validator SHALL check header depth validity and overall document organization
4. WHEN processing is complete, THE File_Manager SHALL write processing outputs to `/content/articles/articleprocessing`, move validated articles to `/content/articles/review`, and write cleaned markdown to `/content/articles/clean`
5. WHEN managing files, THE File_Manager SHALL preserve original filenames and ensure no data loss during transfer

### Requirement 2

**User Story:** As a content architect, I want each article classified into exactly one category, so that content can be properly organized and cross-referenced within the governance framework.

#### Acceptance Criteria

1. WHEN analyzing article content, THE Category_Classifier SHALL assign each article to exactly one of these categories: AI Fundamentals, AI Risks & Principles, Legal Frameworks, AI Laws, Risk Frameworks & Standards, AI Development Lifecycle, Governance Implementation, AI Auditing & Accountability, Future Concerns, Industry-Specific Insights, Practical Guides
2. WHEN multiple categories could apply, THE Category_Classifier SHALL choose the primary category based on the main focus of the content
3. WHEN generating slugs, THE JSON_Generator SHALL create URL-friendly filenames using lowercase kebab-case under 60 characters
4. WHEN extracting metadata, THE Metadata_Extractor SHALL identify Week, Phase, Domain, and Target Word Count fields or return null if missing
5. WHEN calculating word count, THE JSON_Generator SHALL provide approximate word count and status (within_range, under, over) compared to target

### Requirement 3

**User Story:** As a content editor, I want missing content elements automatically generated, so that all articles have consistent structure and completeness without manual intervention.

#### Acceptance Criteria

1. WHEN a TL;DR or Executive Summary is missing, THE Content_Enhancer SHALL generate a high-quality 2-sentence summary based on the article content
2. WHEN learning objectives are missing, THE Content_Enhancer SHALL generate 3 distinct action-oriented objectives based on the article text
3. WHEN SEO keywords are missing, THE Content_Enhancer SHALL generate 5 high-value keywords relevant to the article topic
4. WHEN generating missing elements, THE JSON_Generator SHALL track which elements were generated versus extracted in the content_validation section
5. WHEN enhancing content, THE Content_Enhancer SHALL ensure generated elements maintain the same quality and style as manually created ones

### Requirement 4

**User Story:** As a web developer, I want to identify interactive UI components within articles, so that the frontend can render specialized components for enhanced user experience.

#### Acceptance Criteria

1. WHEN analyzing article content, THE Component_Detector SHALL identify checklists (interactive lists with [ ] or explicit "Checklist" headers, excluding internal publishing checklists)
2. WHEN scanning for structured content, THE Component_Detector SHALL detect markdown tables and capture their section location
3. WHEN finding process descriptions, THE Component_Detector SHALL identify flowcharts (MermaidJS code blocks OR step-by-step process descriptions like "Step 1 -> Step 2")
4. WHEN locating reusable content, THE Component_Detector SHALL find templates (code blocks or sections meant for copying like "Email Template" or "Policy Boilerplate") and generate downloadable template links instead of embedding full template content in articles
5. WHEN identifying organized information, THE Component_Detector SHALL detect structured lists (named, distinct lists like "Pros & Cons" or "Key Risk Factors" that are not standard body paragraphs)

### Requirement 5

**User Story:** As a content strategist, I want cross-reference data extracted from each article, so that I can detect content overlap and ensure comprehensive coverage across the article collection.

#### Acceptance Criteria

1. WHEN analyzing article content, THE Cross_Reference_Analyzer SHALL extract the top 5 core technical concepts discussed (e.g., "Transformer Architecture", "GDPR Article 22")
2. WHEN identifying examples, THE Cross_Reference_Analyzer SHALL list every specific named entity, company, regulation, or real-world case study used (e.g., "Netflix", "Amazon Hiring Algorithm", "EU AI Act")
3. WHEN extracting entities, THE Cross_Reference_Analyzer SHALL NOT include generic terms like "spam filter" or "self-driving car" unless a specific brand/model is named
4. WHEN creating topic fingerprints, THE Cross_Reference_Analyzer SHALL focus on technical concepts that can be used for collision detection between articles
5. WHEN building named examples lists, THE Cross_Reference_Analyzer SHALL capture concrete, specific references that demonstrate real-world applications

### Requirement 6

**User Story:** As a system administrator, I want structured JSON output for each processed article, so that the metadata can be used for automated processing, database storage, and content management workflows.

#### Acceptance Criteria

1. WHEN processing is complete, THE JSON_Generator SHALL output valid JSON without markdown code block wrapping
2. WHEN creating JSON structure, THE JSON_Generator SHALL include file_status, content_validation, component_inventory, extracted_data, and cross_reference_data sections
3. WHEN generating file status, THE JSON_Generator SHALL provide suggested_slug, category, and word_count_check with target, actual, and status fields
4. WHEN validating content, THE JSON_Generator SHALL track structure validation results and which elements were generated versus extracted
5. WHEN creating the master JSON collection, THE JSON_Generator SHALL compile all individual article JSON objects into a single master file for batch processing

### Requirement 7

**User Story:** As a content strategist, I want the master JSON to identify redundant and repetitive information across articles, so that I can ensure articles reference each other appropriately and maintain a structured, readable knowledge base.

#### Acceptance Criteria

1. WHEN analyzing the master JSON collection, THE Cross_Reference_Analyzer SHALL identify articles with overlapping topic fingerprints and flag potential redundancy
2. WHEN detecting repetitive content, THE Cross_Reference_Analyzer SHALL suggest which articles should reference each other instead of duplicating information
3. WHEN finding similar named examples across articles, THE Cross_Reference_Analyzer SHALL recommend consolidating examples and creating cross-references
4. WHEN identifying content overlap, THE Cross_Reference_Analyzer SHALL generate recommendations for article restructuring to eliminate redundancy
5. WHEN creating reference suggestions, THE Cross_Reference_Analyzer SHALL provide specific recommendations for which articles should link to each other and why