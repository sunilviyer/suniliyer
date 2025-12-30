#!/usr/bin/env node

/**
 * Simple CLI test to verify basic functionality
 */

const { program } = require('commander');

program
  .name('article-processor-test')
  .description('Test CLI for Article Content Processor')
  .version('1.0.0');

program
  .command('test')
  .description('Test command')
  .action(() => {
    console.log('✅ CLI is working!');
    console.log('📁 Directory structure:');
    console.log('   drafts       → content/articles/drafts');
    console.log('   processing   → content/articles/articleprocessing');
    console.log('   review       → content/articles/review');
    console.log('   clean        → content/articles/clean');
  });

program
  .command('config')
  .description('Show configuration help')
  .action(() => {
    console.log('⚙️  Configuration Management:');
    console.log('');
    console.log('The Article Processor uses a JSON configuration file:');
    console.log('');
    console.log('Example configuration (article-processor.config.json):');
    console.log(JSON.stringify({
      "ollama": {
        "model": "llama2",
        "endpoint": "http://localhost:11434",
        "timeout": 30000
      },
      "directories": {
        "drafts": "content/articles/drafts",
        "processing": "content/articles/articleprocessing",
        "review": "content/articles/review",
        "clean": "content/articles/clean"
      },
      "logging": {
        "verbose": false,
        "showProgress": true
      }
    }, null, 2));
  });

if (require.main === module) {
  program.parse();
}

module.exports = { program };