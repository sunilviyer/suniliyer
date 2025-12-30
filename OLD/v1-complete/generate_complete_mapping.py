#!/usr/bin/env python3
"""
Generate complete slug-to-filename mapping for all articles
"""

import json
import os
import re

def generate_slug_from_filename(filename):
    """Generate slug from filename"""
    # Remove .md extension
    name = filename.replace('.md', '')
    
    # Convert to lowercase
    name = name.lower()
    
    # Replace underscores with hyphens
    name = name.replace('_', '-')
    
    # Remove special characters except hyphens
    name = re.sub(r'[^a-z0-9\s-]', '', name)
    
    # Replace spaces with hyphens
    name = re.sub(r'\s+', '-', name)
    
    # Remove multiple consecutive hyphens
    name = re.sub(r'-+', '-', name)
    
    # Remove leading/trailing hyphens
    name = name.strip('-')
    
    return name

def load_master_json():
    """Load master.json to get all article slugs"""
    with open('content/articles/articleprocessing/master.json', 'r') as f:
        data = json.load(f)
    
    slugs = []
    for article in data['articles']:
        slugs.append(article['file_status']['suggested_slug'])
    
    return slugs

def get_review_files():
    """Get all markdown files in review directory"""
    review_dir = 'content/articles/review'
    files = []
    
    for filename in os.listdir(review_dir):
        if filename.endswith('.md') and not filename.endswith('.backup1.md'):
            files.append(filename)
    
    return files

def create_mapping():
    """Create complete slug-to-filename mapping"""
    slugs = load_master_json()
    files = get_review_files()
    
    mapping = {}
    
    # First, try exact matches
    for slug in slugs:
        for filename in files:
            file_slug = generate_slug_from_filename(filename)
            if slug == file_slug:
                mapping[slug] = filename
                break
    
    # For unmatched slugs, try fuzzy matching
    unmatched_slugs = [s for s in slugs if s not in mapping]
    unmatched_files = [f for f in files if f not in mapping.values()]
    
    for slug in unmatched_slugs:
        slug_parts = slug.split('-')
        best_match = None
        best_score = 0
        
        for filename in unmatched_files:
            filename_lower = filename.lower()
            score = 0
            
            # Count matching parts
            for part in slug_parts:
                if part in filename_lower:
                    score += 1
            
            # Bonus for article number matches
            if slug.startswith('article-'):
                article_num = slug.split('-')[1]
                if article_num in filename:
                    score += 2
            
            if score > best_score:
                best_score = score
                best_match = filename
        
        if best_match and best_score > 0:
            mapping[slug] = best_match
            unmatched_files.remove(best_match)
    
    return mapping, unmatched_slugs

def main():
    mapping, unmatched = create_mapping()
    
    print(f"Generated mapping for {len(mapping)} articles")
    print(f"Unmatched slugs: {len(unmatched)}")
    
    if unmatched:
        print("Unmatched slugs:")
        for slug in unmatched[:10]:  # Show first 10
            print(f"  - {slug}")
    
    # Save mapping
    with open('slug_to_filename_mapping_complete.json', 'w') as f:
        json.dump(mapping, f, indent=2, sort_keys=True)
    
    print("Saved complete mapping to slug_to_filename_mapping_complete.json")

if __name__ == "__main__":
    main()