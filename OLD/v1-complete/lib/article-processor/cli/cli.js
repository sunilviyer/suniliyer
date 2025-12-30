#!/usr/bin/env node

/**
 * Article Content Processor CLI - JavaScript Entry Point
 * 
 * This is a JavaScript wrapper for the TypeScript CLI to avoid module resolution issues.
 */

const { program } = require('commander');
const path = require('path');

// Register TypeScript support
require('ts-node/register');

// Set up TypeScript configuration for ts-node
process.env.TS_NODE_PROJECT = path.join(__dirname, 'tsconfig.json');

async function main() {
  try {
    // Import the TypeScript CLI
    const { ArticleProcessorCLI } = require('./index.ts');
    
    // Create and run CLI
    const cli = new ArticleProcessorCLI();
    await cli.run();
  } catch (error) {
    console.error('❌ Fatal CLI error:', error.message || error);
    
    // Show helpful error messages for common issues
    if (error.code === 'ERR_MODULE_NOT_FOUND') {
      console.error('\n💡 This might be a module resolution issue.');
      console.error('   Try running: npm install');
      console.error('   Or check that all dependencies are installed.');
    }
    
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

// Run the CLI
if (require.main === module) {
  main();
}

module.exports = { main };