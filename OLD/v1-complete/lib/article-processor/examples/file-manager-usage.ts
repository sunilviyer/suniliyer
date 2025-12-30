/**
 * Example usage of the File Manager
 * Demonstrates how to use the ArticleFileManager for processing articles
 */

import { ArticleFileManager } from '../utils/file-manager';

async function demonstrateFileManager() {
  const fileManager = new ArticleFileManager();
  
  console.log('=== File Manager Usage Example ===\n');
  
  // 1. Get directory configuration
  console.log('1. Directory Configuration:');
  const directories = fileManager.getDirectories();
  console.log('   Drafts:', directories.drafts);
  console.log('   Processing:', directories.processing);
  console.log('   Review:', directories.review);
  console.log('   Clean:', directories.clean);
  console.log();
  
  // 2. Create directories if they don't exist
  console.log('2. Creating directories...');
  try {
    await fileManager.createDirectoryIfNotExists(directories.processing);
    await fileManager.createDirectoryIfNotExists(directories.review);
    await fileManager.createDirectoryIfNotExists(directories.clean);
    console.log('   ✓ All directories created successfully');
  } catch (error) {
    console.error('   ✗ Error creating directories:', error);
  }
  console.log();
  
  // 3. Write processing output (YAML and JSON)
  console.log('3. Writing processing output...');
  const slug = 'example-article';
  const yamlContent = `# === FILE STATUS ===
suggested_slug: "${slug}"
category: "AI Fundamentals"
word_count:
  target: 1500
  actual: 1200
  status: "under"

# === CONTENT VALIDATION ===
structure:
  has_h1: true
  has_intro: true
  has_conclusion: true
  header_depth_valid: true`;

  const jsonContent = JSON.stringify({
    file_status: {
      suggested_slug: slug,
      category: "AI Fundamentals",
      word_count_check: {
        target: 1500,
        actual: 1200,
        status: "under"
      }
    },
    content_validation: {
      structure: {
        has_h1: true,
        has_intro: true,
        has_conclusion: true,
        header_depth_valid: true
      },
      generated_elements: {
        tldr_was_missing: false,
        objectives_were_missing: true,
        keywords_were_missing: false
      }
    }
  }, null, 2);
  
  try {
    await fileManager.writeProcessingOutput(slug, yamlContent, jsonContent);
    console.log('   ✓ Processing output written successfully');
  } catch (error) {
    console.error('   ✗ Error writing processing output:', error);
  }
  console.log();
  
  // 4. Write cleaned markdown
  console.log('4. Writing cleaned markdown...');
  const cleanedMarkdown = `# Example Article

This is an example article that has been processed and cleaned.

![AI Fundamentals]({{IMAGE_PLACEHOLDER_example-article}})

## Introduction

This article demonstrates the file management system.

## Conclusion

The file manager successfully handles all three output directories.`;
  
  try {
    await fileManager.writeCleanedMarkdown(slug, cleanedMarkdown);
    console.log('   ✓ Cleaned markdown written successfully');
  } catch (error) {
    console.error('   ✗ Error writing cleaned markdown:', error);
  }
  console.log();
  
  // 5. Demonstrate file integrity check
  console.log('5. Checking file integrity...');
  try {
    const yamlPath = `${directories.processing}/${slug}.yaml`;
    const jsonPath = `${directories.processing}/${slug}.json`;
    
    const integrity = await fileManager.preserveFileIntegrity(yamlPath, yamlPath);
    console.log('   ✓ File integrity check (same file):', integrity);
  } catch (error) {
    console.error('   ✗ Error checking file integrity:', error);
  }
  console.log();
  
  // 6. Clean up temporary files
  console.log('6. Cleaning up temporary files...');
  try {
    await fileManager.cleanup();
    console.log('   ✓ Cleanup completed successfully');
  } catch (error) {
    console.error('   ✗ Error during cleanup:', error);
  }
  console.log();
  
  console.log('=== File Manager Demo Complete ===');
}

// Run the demonstration
if (require.main === module) {
  demonstrateFileManager().catch(console.error);
}

export { demonstrateFileManager };