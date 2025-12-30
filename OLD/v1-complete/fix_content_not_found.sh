#!/bin/bash

# Fix articles with "Content Not Found" by reprocessing them
# This script processes only the articles that currently have missing content

set -e

echo "🔍 Finding articles with 'Content Not Found'..."

# Get list of articles with missing content
articles_to_fix=$(grep -l "Content Not Found" content/articles/final/*.md | sed 's|content/articles/final/||' | sed 's|\.md||')

# Count total articles to fix
total_count=$(echo "$articles_to_fix" | wc -l)
echo "📊 Found $total_count articles to fix"

# Process each article
counter=1
for article_slug in $articles_to_fix; do
    echo ""
    echo "🔄 [$counter/$total_count] Processing: $article_slug"
    
    # Run the consolidation for this article
    if npx ts-node lib/article-processor/cli/consolidate.ts single "$article_slug" --verbose; then
        echo "✅ [$counter/$total_count] Success: $article_slug"
    else
        echo "❌ [$counter/$total_count] Failed: $article_slug"
    fi
    
    counter=$((counter + 1))
    
    # Add a small delay to prevent overwhelming the system
    sleep 0.5
done

echo ""
echo "🎉 Batch processing complete!"
echo "📊 Processed $total_count articles"

# Check how many still have issues
remaining_issues=$(grep -l "Content Not Found" content/articles/final/*.md | wc -l)
echo "📊 Remaining articles with issues: $remaining_issues"