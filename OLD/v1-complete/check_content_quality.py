#!/usr/bin/env python3
"""
Check which articles in clean directory actually have content vs just metadata
"""

import os
import json

def check_article_content_quality():
    """Check which articles have actual content vs just metadata"""
    clean_dir = "content/articles/clean"
    
    if not os.path.exists(clean_dir):
        print(f"Clean directory not found: {clean_dir}")
        return
    
    articles_with_content = []
    articles_without_content = []
    articles_with_placeholder = []
    
    md_files = [f for f in os.listdir(clean_dir) if f.endswith('.md')]
    
    print(f"📊 Analyzing {len(md_files)} articles in clean directory...")
    
    for filename in md_files:
        filepath = os.path.join(clean_dir, filename)
        slug = filename[:-3]  # Remove .md extension
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check for content quality indicators
            has_placeholder = "Content Not Found" in content
            has_substantial_content = len(content) > 5000  # Arbitrary threshold
            has_sections = content.count('##') > 3  # Has multiple sections
            
            if has_placeholder:
                articles_with_placeholder.append(slug)
            elif has_substantial_content and has_sections:
                articles_with_content.append(slug)
            else:
                articles_without_content.append(slug)
                
        except Exception as e:
            print(f"⚠️  Error reading {filename}: {e}")
            articles_without_content.append(slug)
    
    print(f"\n📊 Content Quality Analysis:")
    print(f"  ✅ Articles with good content: {len(articles_with_content)}")
    print(f"  ⚠️  Articles with placeholder content: {len(articles_with_placeholder)}")
    print(f"  ❌ Articles with insufficient content: {len(articles_without_content)}")
    
    # Articles that need reprocessing
    needs_reprocessing = articles_with_placeholder + articles_without_content
    
    print(f"\n🔄 Articles needing reprocessing: {len(needs_reprocessing)}")
    
    # Create reprocessing task list
    if needs_reprocessing:
        with open('REPROCESS_ARTICLES.md', 'w') as f:
            f.write('# Articles Needing Reprocessing\n\n')
            f.write(f'**Total articles needing reprocessing:** {len(needs_reprocessing)}\n\n')
            
            if articles_with_placeholder:
                f.write(f'## Articles with "Content Not Found" ({len(articles_with_placeholder)})\n\n')
                f.write('These articles have placeholder content and need original content loaded:\n\n')
                for slug in sorted(articles_with_placeholder):
                    f.write(f'- [ ] `{slug}`\n')
                f.write('\n')
            
            if articles_without_content:
                f.write(f'## Articles with Insufficient Content ({len(articles_without_content)})\n\n')
                f.write('These articles may have metadata but lack substantial content:\n\n')
                for slug in sorted(articles_without_content):
                    f.write(f'- [ ] `{slug}`\n')
                f.write('\n')
            
            f.write('## Processing Commands\n\n')
            f.write('### Reprocess All Problem Articles\n')
            f.write('```bash\n')
            for slug in needs_reprocessing:
                f.write(f'npx ts-node lib/article-processor/cli/consolidate.ts single "{slug}" --verbose\n')
            f.write('```\n\n')
            
            f.write('### Or process individually:\n')
            f.write('```bash\n')
            f.write('./process_single_article.sh "article-slug"\n')
            f.write('```\n')
        
        # Create shell script for reprocessing
        with open('reprocess_problem_articles.sh', 'w') as f:
            f.write('#!/bin/bash\n\n')
            f.write('# Reprocess articles with content issues\n')
            f.write(f'# {len(needs_reprocessing)} articles need reprocessing\n\n')
            f.write('set -e\n\n')
            f.write(f'echo "🔄 Reprocessing {len(needs_reprocessing)} articles with content issues..."\n\n')
            
            for i, slug in enumerate(needs_reprocessing, 1):
                f.write(f'echo "📄 Reprocessing {i}/{len(needs_reprocessing)}: {slug}"\n')
                f.write(f'npx ts-node lib/article-processor/cli/consolidate.ts single "{slug}" --verbose\n')
                f.write('if [ $? -eq 0 ]; then\n')
                f.write(f'  echo "✅ Success: {slug}"\n')
                f.write('else\n')
                f.write(f'  echo "❌ Failed: {slug}"\n')
                f.write('  echo "Continuing with next article..."\n')
                f.write('fi\n')
                f.write('echo ""\n\n')
        
        print(f"\n📋 Created reprocessing task lists:")
        print(f"  📄 REPROCESS_ARTICLES.md - Detailed list of problem articles")
        print(f"  🔧 reprocess_problem_articles.sh - Script to reprocess all problem articles")
        
        # Show some examples
        print(f"\n📋 Sample articles needing reprocessing:")
        for slug in needs_reprocessing[:10]:
            print(f"  - {slug}")
        if len(needs_reprocessing) > 10:
            print(f"  ... and {len(needs_reprocessing) - 10} more")
    
    else:
        print(f"\n🎉 All articles appear to have good content!")
    
    # Show some examples of good articles
    if articles_with_content:
        print(f"\n✅ Sample articles with good content:")
        for slug in articles_with_content[:5]:
            print(f"  - {slug}")

if __name__ == "__main__":
    check_article_content_quality()