#!/usr/bin/env python3
"""
Extract all article slugs from master.json and create processing task lists
"""

import json
import os

def get_all_slugs():
    """Get all article slugs from master.json"""
    master_json_path = "content/articles/articleprocessing/master.json"
    
    if not os.path.exists(master_json_path):
        print(f"Master JSON not found: {master_json_path}")
        return []
    
    with open(master_json_path, 'r') as f:
        master_data = json.load(f)
    
    slugs = []
    for article in master_data.get('articles', []):
        slug = article.get('file_status', {}).get('suggested_slug', '')
        if slug:
            slugs.append(slug)
    
    return slugs

def check_processed_articles():
    """Check which articles have already been processed"""
    clean_dir = "content/articles/clean"
    processed = []
    
    if os.path.exists(clean_dir):
        for filename in os.listdir(clean_dir):
            if filename.endswith('.md'):
                # Remove .md extension to get slug
                slug = filename[:-3]
                processed.append(slug)
    
    return processed

def categorize_slugs(all_slugs, processed_slugs):
    """Categorize slugs by processing status and type"""
    remaining = [slug for slug in all_slugs if slug not in processed_slugs]
    
    # Categorize by prefix/type
    categories = {
        'numbered_articles': [],
        'named_articles': [],
        'how_to_guides': [],
        'other': []
    }
    
    for slug in remaining:
        if slug.startswith('article-') and any(char.isdigit() for char in slug[:15]):
            categories['numbered_articles'].append(slug)
        elif slug.startswith('article-') and 'how-to' in slug:
            categories['how_to_guides'].append(slug)
        elif slug.startswith('article-'):
            categories['named_articles'].append(slug)
        else:
            categories['other'].append(slug)
    
    return categories, remaining

def create_task_lists():
    """Create organized task lists for processing"""
    print("📊 Analyzing article processing status...")
    
    all_slugs = get_all_slugs()
    processed_slugs = check_processed_articles()
    
    print(f"📄 Total articles: {len(all_slugs)}")
    print(f"✅ Already processed: {len(processed_slugs)}")
    print(f"⏳ Remaining to process: {len(all_slugs) - len(processed_slugs)}")
    
    categories, remaining = categorize_slugs(all_slugs, processed_slugs)
    
    # Create shell script for batch processing
    with open('process_all_remaining.sh', 'w') as f:
        f.write('#!/bin/bash\n\n')
        f.write('# Process all remaining articles\n')
        f.write('# Generated automatically - edit with caution\n\n')
        f.write('set -e  # Exit on any error\n\n')
        f.write('TOTAL_ARTICLES=' + str(len(remaining)) + '\n')
        f.write('CURRENT=0\n\n')
        f.write('echo "🚀 Processing $TOTAL_ARTICLES remaining articles..."\n\n')
        
        for i, slug in enumerate(remaining, 1):
            f.write(f'echo "📄 Processing {i}/{len(remaining)}: {slug}"\n')
            f.write(f'npx ts-node lib/article-processor/cli/consolidate.ts single "{slug}" --verbose\n')
            f.write('if [ $? -eq 0 ]; then\n')
            f.write(f'  echo "✅ Success: {slug}"\n')
            f.write('else\n')
            f.write(f'  echo "❌ Failed: {slug}"\n')
            f.write('  echo "Continuing with next article..."\n')
            f.write('fi\n')
            f.write('echo ""\n\n')
    
    # Create categorized task lists
    print("\n📋 Creating categorized task lists...")
    
    for category, slugs in categories.items():
        if slugs:
            filename = f'process_{category}.sh'
            with open(filename, 'w') as f:
                f.write('#!/bin/bash\n\n')
                f.write(f'# Process {category.replace("_", " ").title()}\n')
                f.write(f'# {len(slugs)} articles\n\n')
                f.write('set -e\n\n')
                
                for i, slug in enumerate(slugs, 1):
                    f.write(f'echo "📄 Processing {i}/{len(slugs)}: {slug}"\n')
                    f.write(f'npx ts-node lib/article-processor/cli/consolidate.ts single "{slug}" --verbose\n')
                    f.write('echo ""\n\n')
            
            print(f"  📝 {filename}: {len(slugs)} articles")
    
    # Create markdown task list
    with open('ARTICLE_PROCESSING_TASKS.md', 'w') as f:
        f.write('# Article Processing Task List\n\n')
        f.write(f'**Generated:** {os.popen("date").read().strip()}\n\n')
        f.write('## Summary\n\n')
        f.write(f'- **Total Articles:** {len(all_slugs)}\n')
        f.write(f'- **Already Processed:** {len(processed_slugs)}\n')
        f.write(f'- **Remaining:** {len(remaining)}\n\n')
        
        f.write('## Processing Status\n\n')
        f.write('### ✅ Already Processed\n\n')
        for slug in sorted(processed_slugs):
            f.write(f'- [x] `{slug}`\n')
        
        f.write('\n### ⏳ Remaining to Process\n\n')
        
        for category, slugs in categories.items():
            if slugs:
                f.write(f'#### {category.replace("_", " ").title()} ({len(slugs)} articles)\n\n')
                for slug in sorted(slugs):
                    f.write(f'- [ ] `{slug}`\n')
                f.write('\n')
        
        f.write('## Processing Commands\n\n')
        f.write('### Process All Remaining\n')
        f.write('```bash\n')
        f.write('chmod +x process_all_remaining.sh\n')
        f.write('./process_all_remaining.sh\n')
        f.write('```\n\n')
        
        f.write('### Process by Category\n')
        for category, slugs in categories.items():
            if slugs:
                f.write(f'```bash\n')
                f.write(f'chmod +x process_{category}.sh\n')
                f.write(f'./process_{category}.sh\n')
                f.write('```\n\n')
        
        f.write('### Process Individual Articles\n')
        f.write('```bash\n')
        f.write('# Single article\n')
        f.write('npx ts-node lib/article-processor/cli/consolidate.ts single "article-slug" --verbose\n\n')
        f.write('# Or use the helper script\n')
        f.write('./process_single_article.sh "article-slug"\n')
        f.write('```\n\n')
        
        f.write('## Troubleshooting\n\n')
        f.write('### If an article fails:\n')
        f.write('1. Check the slug exists in master.json\n')
        f.write('2. Check if original content exists in `content/articles/review/`\n')
        f.write('3. Add manual mapping to `slug_to_filename_mapping.json`\n')
        f.write('4. Re-run the single article command\n\n')
        
        f.write('### Common issues:\n')
        f.write('- **Slug not found:** Article may not be in master.json\n')
        f.write('- **Content not found:** Original file may have different naming pattern\n')
        f.write('- **Timeout:** Ollama may be slow, increase timeout in config\n')
    
    print(f"\n📋 Task lists created:")
    print(f"  📄 ARTICLE_PROCESSING_TASKS.md - Complete task overview")
    print(f"  🔧 process_all_remaining.sh - Process all {len(remaining)} remaining articles")
    
    for category, slugs in categories.items():
        if slugs:
            print(f"  📝 process_{category}.sh - {len(slugs)} articles")
    
    print(f"\n🎯 Next steps:")
    print(f"  1. Review ARTICLE_PROCESSING_TASKS.md")
    print(f"  2. Make scripts executable: chmod +x *.sh")
    print(f"  3. Run category scripts or process_all_remaining.sh")
    print(f"  4. Monitor progress and handle any failures")

if __name__ == "__main__":
    create_task_lists()