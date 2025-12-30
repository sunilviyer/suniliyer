#!/usr/bin/env python3
"""
Extract all image generation prompts from articles and create a reference document
"""

import os
import re
import yaml

def extract_article_data(filepath):
    """Extract title, prompt, and placeholder from an article"""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract title
    title_match = re.search(r'title:\s*["\']?([^"\'\n]+)["\']?', content)
    title = title_match.group(1).strip() if title_match else 'Unknown Title'
    
    # Extract image placeholder
    placeholder_match = re.search(r'!\[([^\]]+)\]\(\{\{(IMAGE_PLACEHOLDER_[^}]+)\}\}\)', content)
    placeholder_text = placeholder_match.group(1) if placeholder_match else title
    placeholder_var = placeholder_match.group(2) if placeholder_match else f'IMAGE_PLACEHOLDER_{os.path.basename(filepath)[:-3]}'
    
    # Extract image generation prompt
    prompt_match = re.search(r'type:\s*image_prompt.*?prompt:\s*([^\n]+(?:\n\s+[^\n-]+)*)', content, re.DOTALL)
    if prompt_match:
        prompt = prompt_match.group(1).strip()
        # Clean up multi-line YAML strings
        prompt = ' '.join(line.strip() for line in prompt.split('\n') if line.strip())
        # Remove YAML formatting
        prompt = prompt.replace('|', '').replace('>', '').strip()
    else:
        prompt = 'No prompt found'
    
    return {
        'title': title,
        'prompt': prompt,
        'placeholder_text': placeholder_text,
        'placeholder_var': placeholder_var,
        'filename': os.path.basename(filepath)
    }

def main():
    """Extract all article data and create reference document"""
    
    final_dir = 'content/articles/final'
    articles = [f for f in os.listdir(final_dir) if f.endswith('.md')]
    
    article_data = []
    
    print(f"Processing {len(articles)} articles...")
    
    for article in sorted(articles):
        filepath = os.path.join(final_dir, article)
        try:
            data = extract_article_data(filepath)
            article_data.append(data)
        except Exception as e:
            print(f"Error processing {article}: {e}")
    
    # Generate the reference document
    with open('ARTICLE_IMAGE_GENERATION_REFERENCE.md', 'a', encoding='utf-8') as f:
        for i, data in enumerate(article_data, 1):
            f.write(f"\n## {i:03d}. {data['title']}\n\n")
            f.write(f"**Filename:** `{data['filename']}`\n\n")
            f.write(f"**Placeholder:** `{{{{{data['placeholder_var']}}}}}`\n\n")
            f.write(f"**Prompt:**\n```\n{data['prompt']}\n```\n\n")
            f.write("---\n")
    
    print(f"\n✅ Generated reference document with {len(article_data)} articles")
    print("📄 File: ARTICLE_IMAGE_GENERATION_REFERENCE.md")

if __name__ == '__main__':
    main()