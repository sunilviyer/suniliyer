#!/usr/bin/env python3
"""
Create task lists to process all articles into the final directory
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
        title = article.get('extracted_data', {}).get('title', 'Unknown Title')
        category = article.get('file_status', {}).get('category', 'Unknown Category')
        word_count = article.get('file_status', {}).get('word_count_check', {}).get('actual', 0)
        components = len(article.get('component_inventory', {}).get('items', []))
        
        if slug:
            slugs.append({
                'slug': slug,
                'title': title,
                'category': category,
                'word_count': word_count,
                'components': components
            })
    
    return slugs

def categorize_articles(articles):
    """Categorize articles by type and priority"""
    categories = {
        'foundation_path': [],      # AI Fundamentals
        'risk_ethics_path': [],     # AI Risks & Principles  
        'legal_compliance_path': [],# Legal Frameworks, AI Laws
        'implementation_path': [],  # Governance Implementation, Development Lifecycle
        'application_path': [],     # Industry-Specific, Practical Guides
        'other': []
    }
    
    for article in articles:
        category = article['category']
        slug = article['slug']
        
        if category in ['AI Fundamentals']:
            categories['foundation_path'].append(article)
        elif category in ['AI Risks & Principles']:
            categories['risk_ethics_path'].append(article)
        elif category in ['Legal Frameworks', 'AI Laws']:
            categories['legal_compliance_path'].append(article)
        elif category in ['Governance Implementation', 'AI Development Lifecycle', 'Risk Frameworks & Standards']:
            categories['implementation_path'].append(article)
        elif category in ['Industry-Specific Insights', 'Practical Guides', 'AI Auditing & Accountability']:
            categories['application_path'].append(article)
        else:
            categories['other'].append(article)
    
    return categories

def create_processing_scripts():
    """Create comprehensive processing scripts and task lists"""
    print("📊 Creating final processing task lists...")
    
    articles = get_all_slugs()
    categories = categorize_articles(articles)
    
    print(f"📄 Total articles: {len(articles)}")
    
    # Create main processing script
    with open('process_all_to_final.sh', 'w') as f:
        f.write('#!/bin/bash\n\n')
        f.write('# Process ALL articles to final directory\n')
        f.write(f'# Total: {len(articles)} articles\n')
        f.write('# Output: content/articles/final/\n\n')
        f.write('set -e  # Exit on any error\n\n')
        f.write(f'echo "🚀 Processing {len(articles)} articles to final directory..."\n')
        f.write('echo "📁 Output directory: content/articles/final/"\n')
        f.write('echo ""\n\n')
        
        for i, article in enumerate(articles, 1):
            slug = article['slug']
            title = article['title']
            f.write(f'echo "📄 Processing {i}/{len(articles)}: {slug}"\n')
            f.write(f'echo "   Title: {title}"\n')
            f.write(f'npx ts-node lib/article-processor/cli/consolidate.ts single "{slug}" --verbose\n')
            f.write('if [ $? -eq 0 ]; then\n')
            f.write(f'  echo "✅ Success: {slug}"\n')
            f.write('else\n')
            f.write(f'  echo "❌ Failed: {slug}"\n')
            f.write('  echo "Continuing with next article..."\n')
            f.write('fi\n')
            f.write('echo ""\n\n')
        
        f.write('echo "🎉 Processing complete!"\n')
        f.write('echo "📊 Final directory contents:"\n')
        f.write('ls -la content/articles/final/ | wc -l\n')
    
    # Create category-specific scripts
    for category_name, category_articles in categories.items():
        if category_articles:
            filename = f'process_{category_name}.sh'
            with open(filename, 'w') as f:
                f.write('#!/bin/bash\n\n')
                f.write(f'# Process {category_name.replace("_", " ").title()}\n')
                f.write(f'# {len(category_articles)} articles\n\n')
                f.write('set -e\n\n')
                f.write(f'echo "📚 Processing {category_name.replace("_", " ").title()} ({len(category_articles)} articles)"\n')
                f.write('echo ""\n\n')
                
                for i, article in enumerate(category_articles, 1):
                    slug = article['slug']
                    title = article['title']
                    f.write(f'echo "📄 Processing {i}/{len(category_articles)}: {slug}"\n')
                    f.write(f'echo "   {title}"\n')
                    f.write(f'npx ts-node lib/article-processor/cli/consolidate.ts single "{slug}" --verbose\n')
                    f.write('echo ""\n\n')
    
    # Create batch processing script (10 articles at a time)
    batch_size = 10
    batches = [articles[i:i + batch_size] for i in range(0, len(articles), batch_size)]
    
    for batch_num, batch in enumerate(batches, 1):
        filename = f'process_batch_{batch_num:02d}.sh'
        with open(filename, 'w') as f:
            f.write('#!/bin/bash\n\n')
            f.write(f'# Process Batch {batch_num}/{len(batches)}\n')
            f.write(f'# Articles {(batch_num-1)*batch_size + 1} to {min(batch_num*batch_size, len(articles))}\n')
            f.write(f'# {len(batch)} articles in this batch\n\n')
            f.write('set -e\n\n')
            f.write(f'echo "📦 Processing Batch {batch_num}/{len(batches)} ({len(batch)} articles)"\n')
            f.write('echo ""\n\n')
            
            for i, article in enumerate(batch, 1):
                slug = article['slug']
                title = article['title']
                f.write(f'echo "📄 Processing {i}/{len(batch)}: {slug}"\n')
                f.write(f'echo "   {title}"\n')
                f.write(f'npx ts-node lib/article-processor/cli/consolidate.ts single "{slug}" --verbose\n')
                f.write('echo ""\n\n')
    
    # Create comprehensive markdown task list
    with open('FINAL_PROCESSING_TASKS.md', 'w') as f:
        f.write('# Final Article Processing Tasks\n\n')
        f.write(f'**Generated:** {os.popen("date").read().strip()}\n')
        f.write(f'**Output Directory:** `content/articles/final/`\n\n')
        
        f.write('## Summary\n\n')
        f.write(f'- **Total Articles:** {len(articles)}\n')
        f.write(f'- **Output Directory:** `content/articles/final/`\n')
        f.write(f'- **Processing Method:** One-by-one with full content loading\n\n')
        
        f.write('## Processing Options\n\n')
        f.write('### 🚀 Process All Articles (Recommended)\n')
        f.write('```bash\n')
        f.write('chmod +x process_all_to_final.sh\n')
        f.write('./process_all_to_final.sh\n')
        f.write('```\n\n')
        
        f.write('### 📦 Process in Batches (10 articles each)\n')
        f.write('```bash\n')
        for i in range(1, len(batches) + 1):
            f.write(f'chmod +x process_batch_{i:02d}.sh && ./process_batch_{i:02d}.sh\n')
        f.write('```\n\n')
        
        f.write('### 📚 Process by Learning Path\n')
        for category_name, category_articles in categories.items():
            if category_articles:
                f.write(f'```bash\n')
                f.write(f'# {category_name.replace("_", " ").title()} ({len(category_articles)} articles)\n')
                f.write(f'chmod +x process_{category_name}.sh && ./process_{category_name}.sh\n')
                f.write('```\n\n')
        
        f.write('### 🎯 Process Individual Articles\n')
        f.write('```bash\n')
        f.write('npx ts-node lib/article-processor/cli/consolidate.ts single "article-slug" --verbose\n')
        f.write('```\n\n')
        
        f.write('## Article Categories\n\n')
        for category_name, category_articles in categories.items():
            if category_articles:
                f.write(f'### {category_name.replace("_", " ").title()} ({len(category_articles)} articles)\n\n')
                for article in sorted(category_articles, key=lambda x: x['slug']):
                    f.write(f'- [ ] `{article["slug"]}` - {article["title"]}\n')
                f.write('\n')
        
        f.write('## Batch Processing\n\n')
        for batch_num, batch in enumerate(batches, 1):
            f.write(f'### Batch {batch_num}/{len(batches)} ({len(batch)} articles)\n\n')
            for article in batch:
                f.write(f'- [ ] `{article["slug"]}` - {article["title"]}\n')
            f.write('\n')
        
        f.write('## Monitoring Progress\n\n')
        f.write('```bash\n')
        f.write('# Check how many articles have been processed\n')
        f.write('ls content/articles/final/*.md | wc -l\n\n')
        f.write('# Check total size of processed content\n')
        f.write('du -sh content/articles/final/\n\n')
        f.write('# List recently processed articles\n')
        f.write('ls -lt content/articles/final/ | head -10\n')
        f.write('```\n\n')
        
        f.write('## Expected Results\n\n')
        f.write('Each processed article will have:\n')
        f.write('- ✅ Complete frontmatter with metadata\n')
        f.write('- ✅ Full original content (introduction, sections, tables, references)\n')
        f.write('- ✅ Component metadata for frontend rendering\n')
        f.write('- ✅ Learning path navigation data\n')
        f.write('- ✅ Enhanced structure with image placeholders\n\n')
        
        f.write('## Troubleshooting\n\n')
        f.write('If an article fails to process:\n')
        f.write('1. Check if the slug exists in master.json\n')
        f.write('2. Verify original content exists in `content/articles/review/`\n')
        f.write('3. Add manual mapping to `slug_to_filename_mapping.json`\n')
        f.write('4. Re-run the single article command\n')
    
    print(f"\n📋 Created processing task lists:")
    print(f"  📄 FINAL_PROCESSING_TASKS.md - Complete overview and instructions")
    print(f"  🚀 process_all_to_final.sh - Process all {len(articles)} articles")
    
    for category_name, category_articles in categories.items():
        if category_articles:
            print(f"  📚 process_{category_name}.sh - {len(category_articles)} articles")
    
    print(f"  📦 process_batch_XX.sh - {len(batches)} batch files ({batch_size} articles each)")
    
    print(f"\n🎯 Recommended approach:")
    print(f"  1. Review FINAL_PROCESSING_TASKS.md")
    print(f"  2. Make scripts executable: chmod +x *.sh")
    print(f"  3. Start with a small batch: ./process_batch_01.sh")
    print(f"  4. If successful, run: ./process_all_to_final.sh")
    print(f"  5. Monitor progress: ls content/articles/final/ | wc -l")

if __name__ == "__main__":
    create_processing_scripts()