#!/bin/bash

# Process a single article with verbose output
# Usage: ./process_single_article.sh "article-slug"

if [ -z "$1" ]; then
  echo "Usage: ./process_single_article.sh <article-slug>"
  echo "Example: ./process_single_article.sh article-105-ai-inventory-management-knowing-what-you-have"
  exit 1
fi

npx ts-node lib/article-processor/cli/consolidate.ts single "$1" --verbose
