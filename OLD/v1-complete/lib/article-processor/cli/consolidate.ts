#!/usr/bin/env node

/**
 * Content Consolidation CLI
 * 
 * Command-line interface for consolidating content and adding learning paths
 */

import { program } from 'commander';
import { ContentConsolidator } from '../processors/content-consolidator';
import { LearningPathEnhancer } from '../processors/learning-path-enhancer';
import { EnhancedMarkdownGenerator } from '../generators/enhanced-markdown-generator';
import { CLILogger } from './logger';
import { loadConfig } from './config';
import * as fs from 'fs/promises';
import * as path from 'path';

class ConsolidationCLI {
  private logger: CLILogger;
  private config: any;

  constructor() {
    this.logger = new CLILogger();
    this.config = loadConfig();
  }

  async run(): Promise<void> {
    program
      .name('consolidate')
      .description('Content consolidation and learning path enhancement')
      .version('1.0.0');

    // Amazon consolidation command
    program
      .command('amazon')
      .description('Consolidate Amazon references into a comprehensive case study')
      .option('-v, --verbose', 'Enable verbose logging')
      .option('--dry-run', 'Show what would be done without making changes')
      .action(async (options) => {
        await this.handleAmazonConsolidation(options);
      });

    // Learning paths command
    program
      .command('learning-paths')
      .description('Add learning path metadata to all articles')
      .option('-v, --verbose', 'Enable verbose logging')
      .option('--dry-run', 'Show what would be done without making changes')
      .action(async (options) => {
        await this.handleLearningPaths(options);
      });

    // Enhanced markdown command
    program
      .command('enhance-markdown')
      .description('Regenerate markdown files with component metadata')
      .option('-v, --verbose', 'Enable verbose logging')
      .option('--dry-run', 'Show what would be done without making changes')
      .action(async (options) => {
        await this.handleEnhancedMarkdown(options);
      });

    // Single article command
    program
      .command('single <slug>')
      .description('Process a single article by slug')
      .option('-v, --verbose', 'Enable verbose logging')
      .option('--dry-run', 'Show what would be done without making changes')
      .action(async (slug, options) => {
        await this.handleSingleArticle(slug, options);
      });

    // Full consolidation command
    program
      .command('full')
      .description('Run complete consolidation process')
      .option('-v, --verbose', 'Enable verbose logging')
      .option('--dry-run', 'Show what would be done without making changes')
      .action(async (options) => {
        await this.handleFullConsolidation(options);
      });

    await program.parseAsync();
  }

  /**
   * Handle Amazon consolidation
   */
  private async handleAmazonConsolidation(options: any): Promise<void> {
    if (options.verbose) this.logger.setVerbose(true);

    this.logger.info('🔄 Starting Amazon content consolidation...');

    try {
      // Load master JSON
      const masterJsonPath = path.join(this.config.directories.processing, 'master.json');
      const masterJsonContent = await fs.readFile(masterJsonPath, 'utf-8');
      const masterJSON = JSON.parse(masterJsonContent);

      // Initialize consolidator
      const consolidator = new ContentConsolidator(this.config.ollama);

      // Configure consolidation
      const consolidationConfig = {
        targetExample: 'amazon',
        outputPath: path.join(this.config.directories.clean, 'amazon-ai-case-study-comprehensive.md'),
        crossReferenceTemplate: 'For a detailed analysis of Amazon\'s AI governance challenges, see our [Amazon AI Case Study](amazon-ai-case-study-comprehensive).',
        learningPathIntegration: true
      };

      if (options.dryRun) {
        this.logger.info('🔍 DRY RUN: Would consolidate Amazon references from these articles:');
        const relevantArticles = masterJSON.articles.filter((article: any) => 
          article.cross_reference_data.named_examples.includes('amazon')
        );
        relevantArticles.forEach((article: any) => {
          this.logger.info(`  - ${article.file_status.suggested_slug}`);
        });
        return;
      }

      // Generate consolidated content
      this.logger.info('🤖 Generating consolidated Amazon case study using Ollama...');
      const consolidatedContent = await consolidator.consolidateExample(masterJSON, consolidationConfig);

      // Create consolidated article
      await this.createConsolidatedArticle(consolidatedContent, consolidationConfig.outputPath);

      // Update existing articles with cross-references
      this.logger.info('🔗 Updating existing articles with cross-references...');
      await consolidator.updateArticlesWithCrossReferences(
        consolidatedContent.cross_references,
        this.config.directories.final
      );

      this.logger.success(`✅ Amazon consolidation complete!`);
      this.logger.info(`📄 Created: ${consolidationConfig.outputPath}`);
      this.logger.info(`🔗 Updated ${consolidatedContent.articles_to_update.length} articles with cross-references`);

    } catch (error) {
      this.logger.error(`❌ Amazon consolidation failed: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  }

  /**
   * Handle learning paths enhancement
   */
  private async handleLearningPaths(options: any): Promise<void> {
    if (options.verbose) this.logger.setVerbose(true);

    this.logger.info('🛤️  Starting learning path enhancement...');

    try {
      // Load master JSON
      const masterJsonPath = path.join(this.config.directories.processing, 'master.json');
      const masterJsonContent = await fs.readFile(masterJsonPath, 'utf-8');
      const masterJSON = JSON.parse(masterJsonContent);

      // Initialize learning path enhancer
      const enhancer = new LearningPathEnhancer(this.config.ollama);

      if (options.dryRun) {
        this.logger.info('🔍 DRY RUN: Would enhance these articles with learning path data:');
        masterJSON.articles.forEach((article: any) => {
          this.logger.info(`  - ${article.file_status.suggested_slug} (${article.file_status.category})`);
        });
        return;
      }

      // Enhance all articles with learning path data
      this.logger.info('🤖 Organizing articles into learning paths using Ollama...');
      await enhancer.enhanceAllArticles(masterJSON);

      this.logger.success(`✅ Learning path enhancement complete!`);
      this.logger.info(`📚 Enhanced ${masterJSON.articles.length} articles with learning path metadata`);

      // Display learning path summary
      const learningPaths = enhancer.getLearningPaths();
      this.logger.info('\n📋 Learning Path Summary:');
      learningPaths.forEach(path => {
        this.logger.info(`  ${path.id}. ${path.name}: ${path.articles.length} articles`);
      });

    } catch (error) {
      this.logger.error(`❌ Learning path enhancement failed: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  }

  /**
   * Handle enhanced markdown generation
   */
  private async handleEnhancedMarkdown(options: any): Promise<void> {
    if (options.verbose) this.logger.setVerbose(true);

    this.logger.info('📝 Starting enhanced markdown generation...');

    try {
      // Load master JSON
      const masterJsonPath = path.join(this.config.directories.processing, 'master.json');
      const masterJsonContent = await fs.readFile(masterJsonPath, 'utf-8');
      const masterJSON = JSON.parse(masterJsonContent);

      // Initialize enhanced markdown generator
      const generator = new EnhancedMarkdownGenerator();

      if (options.dryRun) {
        this.logger.info('🔍 DRY RUN: Would regenerate enhanced markdown for:');
        masterJSON.articles.forEach((article: any) => {
          const componentCount = article.component_inventory?.items?.length || 0;
          this.logger.info(`  - ${article.file_status.suggested_slug} (${componentCount} components)`);
        });
        return;
      }

      // Regenerate all markdown files with component metadata
      let processedCount = 0;
      for (const article of masterJSON.articles) {
        try {
          // Convert article data to ProcessedArticle format
          const processedArticle = await this.convertToProcessedArticle(article);
          
          // Generate enhanced markdown
          const enhancedMarkdown = generator.generateEnhancedMarkdown(processedArticle);
          
          // Write to final directory
          const outputPath = path.join(
            this.config.directories.final, 
            `${article.file_status.suggested_slug}.md`
          );
          await fs.writeFile(outputPath, enhancedMarkdown, 'utf-8');
          
          processedCount++;
          this.logger.verbose(`✅ Enhanced: ${article.file_status.suggested_slug}`);
          
        } catch (error) {
          this.logger.warn(`⚠️  Failed to enhance ${article.file_status.suggested_slug}: ${error}`);
        }
      }

      this.logger.success(`✅ Enhanced markdown generation complete!`);
      this.logger.info(`📝 Regenerated ${processedCount}/${masterJSON.articles.length} articles with component metadata`);

    } catch (error) {
      this.logger.error(`❌ Enhanced markdown generation failed: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  }

  /**
   * Handle single article processing
   */
  private async handleSingleArticle(slug: string, options: any): Promise<void> {
    if (options.verbose) this.logger.setVerbose(true);

    this.logger.info(`🔍 Processing single article: ${slug}`);

    try {
      // Load master JSON
      const masterJsonPath = path.join(this.config.directories.processing, 'master.json');
      const masterJsonContent = await fs.readFile(masterJsonPath, 'utf-8');
      const masterJSON = JSON.parse(masterJsonContent);

      // Find the specific article
      const article = masterJSON.articles.find((a: any) => 
        a.file_status.suggested_slug === slug
      );

      if (!article) {
        this.logger.error(`❌ Article not found: ${slug}`);
        this.logger.info('Available slugs:');
        masterJSON.articles.slice(0, 10).forEach((a: any) => {
          this.logger.info(`  - ${a.file_status.suggested_slug}`);
        });
        if (masterJSON.articles.length > 10) {
          this.logger.info(`  ... and ${masterJSON.articles.length - 10} more`);
        }
        return;
      }

      this.logger.info(`📄 Found article: ${article.extracted_data.title}`);
      this.logger.info(`📂 Category: ${article.file_status.category}`);
      this.logger.info(`📊 Word count: ${article.file_status.word_count_check.actual}`);
      this.logger.info(`🧩 Components: ${article.component_inventory.items.length}`);

      if (options.dryRun) {
        this.logger.info('🔍 DRY RUN: Would process this article');
        return;
      }

      // Initialize enhanced markdown generator
      const generator = new EnhancedMarkdownGenerator();

      // Convert article data to ProcessedArticle format
      this.logger.info('🔄 Loading original content...');
      const processedArticle = await this.convertToProcessedArticle(article);
      
      this.logger.info(`📖 Content loaded: ${processedArticle.content.length} characters`);
      
      // Generate enhanced markdown
      this.logger.info('✨ Generating enhanced markdown...');
      const enhancedMarkdown = generator.generateEnhancedMarkdown(processedArticle);
      
      // Write to final directory
      const outputPath = path.join(
        this.config.directories.final, 
        `${article.file_status.suggested_slug}.md`
      );
      await fs.writeFile(outputPath, enhancedMarkdown, 'utf-8');
      
      this.logger.success(`✅ Enhanced article created: ${outputPath}`);
      this.logger.info(`📝 Output size: ${enhancedMarkdown.length} characters`);

      // Show a preview of the content
      const lines = enhancedMarkdown.split('\n');
      this.logger.info('\n📋 Content preview:');
      this.logger.info('---');
      lines.slice(0, 20).forEach(line => {
        this.logger.info(line);
      });
      if (lines.length > 20) {
        this.logger.info(`... and ${lines.length - 20} more lines`);
      }
      this.logger.info('---');

    } catch (error) {
      this.logger.error(`❌ Single article processing failed: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  }

  /**
   * Handle full consolidation process
   */
  private async handleFullConsolidation(options: any): Promise<void> {
    if (options.verbose) this.logger.setVerbose(true);

    this.logger.info('🚀 Starting full consolidation process...');

    // Run all consolidation steps
    await this.handleAmazonConsolidation({ ...options, verbose: false });
    await this.handleLearningPaths({ ...options, verbose: false });
    await this.handleEnhancedMarkdown({ ...options, verbose: false });

    this.logger.success('🎉 Full consolidation process complete!');
  }

  /**
   * Create consolidated article file
   */
  private async createConsolidatedArticle(consolidatedContent: any, outputPath: string): Promise<void> {
    const markdown = this.generateConsolidatedMarkdown(consolidatedContent);
    await fs.writeFile(outputPath, markdown, 'utf-8');
  }

  /**
   * Generate markdown for consolidated article
   */
  private generateConsolidatedMarkdown(content: any): string {
    const frontmatter = [
      '---',
      `title: "${content.title}"`,
      `category: "${content.category}"`,
      `tldr: "${content.tldr}"`,
      'learning_objectives:',
      ...content.learning_objectives.map((obj: string) => `  - "${obj}"`),
      'seo_keywords:',
      ...content.seo_keywords.map((keyword: string) => `  - "${keyword}"`),
      `processed_date: "${new Date().toISOString()}"`,
      'consolidated_from:',
      ...content.articles_to_update.map((slug: string) => `  - "${slug}"`),
      '---',
      ''
    ].join('\n');

    const contentSections = [
      `# ${content.title}`,
      '',
      content.tldr,
      '',
      '## Learning Objectives',
      '',
      ...content.learning_objectives.map((obj: string) => `- ${obj}`),
      '',
      '## Case Studies',
      ''
    ];

    // Add case studies
    content.case_studies.forEach((caseStudy: any, index: number) => {
      contentSections.push(`### ${index + 1}. ${caseStudy.title}`);
      contentSections.push('');
      contentSections.push(caseStudy.description);
      contentSections.push('');
      contentSections.push('**Governance Lessons:**');
      caseStudy.governance_lessons.forEach((lesson: string) => {
        contentSections.push(`- ${lesson}`);
      });
      contentSections.push('');
    });

    // Add implementation framework
    if (content.implementation_framework) {
      contentSections.push('## Implementation Framework');
      contentSections.push('');
      
      if (content.implementation_framework.best_practices?.length > 0) {
        contentSections.push('### Best Practices');
        content.implementation_framework.best_practices.forEach((practice: string) => {
          contentSections.push(`- ${practice}`);
        });
        contentSections.push('');
      }
      
      if (content.implementation_framework.risk_mitigation?.length > 0) {
        contentSections.push('### Risk Mitigation');
        content.implementation_framework.risk_mitigation.forEach((mitigation: string) => {
          contentSections.push(`- ${mitigation}`);
        });
        contentSections.push('');
      }
    }

    return frontmatter + contentSections.join('\n');
  }

  /**
   * Convert article JSON to ProcessedArticle format
   */
  private async convertToProcessedArticle(article: any): Promise<any> {
    // Load original content from review directory
    const originalContent = await this.loadOriginalContent(article.file_status.suggested_slug);
    
    return {
      title: article.extracted_data.title,
      content: originalContent,
      frontmatter: {
        title: article.extracted_data.title,
        tldr: article.extracted_data.tldr,
        learning_objectives: article.extracted_data.learning_objectives,
        seo_keywords: article.extracted_data.seo_keywords
      },
      category: article.file_status.category,
      wordCount: article.file_status.word_count_check.actual,
      components: article.component_inventory.items,
      crossReferenceData: article.cross_reference_data,
      enhancedElements: {
        tldr: article.content_validation.generated_elements.tldr_was_missing ? article.extracted_data.tldr : null,
        objectives: article.content_validation.generated_elements.objectives_were_missing ? article.extracted_data.learning_objectives : null,
        keywords: article.content_validation.generated_elements.keywords_were_missing ? article.extracted_data.seo_keywords : null
      }
    };
  }

  /**
   * Load original content from review directory
   */
  private async loadOriginalContent(slug: string): Promise<string> {
    const reviewDir = this.config.directories.review || 'content/articles/review';
    
    // Try to load the slug mapping file
    let mapping: Record<string, string> = {};
    try {
      const mappingContent = await fs.readFile('slug_to_filename_mapping.json', 'utf-8');
      mapping = JSON.parse(mappingContent);
    } catch (error) {
      this.logger.verbose(`📋 No mapping file found, using fallback matching`);
    }

    // First try the mapping file
    if (mapping[slug]) {
      try {
        const filePath = path.join(reviewDir, mapping[slug]);
        const content = await fs.readFile(filePath, 'utf-8');
        this.logger.verbose(`📖 Loaded content from mapping: ${mapping[slug]}`);
        return content;
      } catch (error) {
        this.logger.verbose(`⚠️  Mapping file exists but content not found: ${mapping[slug]}`);
      }
    }

    // Fallback to original matching logic
    const possibleFilenames = [
      `${slug}.md`,
      slug.replace(/-/g, '_') + '.md',
      slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '_') + '.md',
      // Handle article- prefix variations
      slug.replace(/^article-/, 'Article_') + '.md',
      slug.replace(/^article-/, 'article_') + '.md',
      slug.replace(/^article-/, 'Article-') + '.md'
    ];

    for (const filename of possibleFilenames) {
      try {
        const filePath = path.join(reviewDir, filename);
        const content = await fs.readFile(filePath, 'utf-8');
        this.logger.verbose(`📖 Loaded content from pattern match: ${filename}`);
        return content;
      } catch (error) {
        continue;
      }
    }

    // If no exact match found, try fuzzy matching
    try {
      const files = await fs.readdir(reviewDir);
      const mdFiles = files.filter(f => f.endsWith('.md'));
      
      // Try to find a file that contains the slug or similar pattern
      const slugParts = slug.toLowerCase().split('-');
      const matchingFile = mdFiles.find(file => {
        const fileLower = file.toLowerCase();
        return slugParts.every(part => fileLower.includes(part));
      });

      if (matchingFile) {
        const filePath = path.join(reviewDir, matchingFile);
        const content = await fs.readFile(filePath, 'utf-8');
        this.logger.verbose(`📖 Loaded content from fuzzy match: ${matchingFile}`);
        return content;
      }
    } catch (error) {
      this.logger.warn(`⚠️  Could not read review directory: ${error}`);
    }

    // If still no content found, return a placeholder
    this.logger.warn(`⚠️  Could not find original content for: ${slug}`);
    return `# Content Not Found\n\nOriginal content for "${slug}" could not be located in the review directory.\n\nPlease check the file exists in: ${reviewDir}`;
  }
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  const cli = new ConsolidationCLI();
  await cli.run();
}

// Run CLI if this file is executed directly
if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal consolidation error:', error);
    process.exit(1);
  });
}

export { ConsolidationCLI };