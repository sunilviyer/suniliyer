#!/usr/bin/env python3
"""
Remove duplicate image_prompt components from articles
"""

import os
import re

def remove_duplicate_image_prompts(filepath):
    """Remove duplicate image_prompt components, keeping only the first complete one"""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    
    # Find all image_prompt component starts
    image_prompt_starts = []
    for i, line in enumerate(lines):
        if 'type: image_prompt' in line:
            image_prompt_starts.append(i)
    
    if len(image_prompt_starts) <= 1:
        return False  # No duplicates
    
    # Keep only the first complete image_prompt component
    # Find the end of the first component
    first_start = image_prompt_starts[0]
    first_end = first_start
    
    # Find where the first component ends (next component or end of components section)
    for i in range(first_start + 1, len(lines)):
        line = lines[i].strip()
        if line.startswith('- type:') and 'image_prompt' not in line:
            first_end = i - 1
            break
        elif line and not line.startswith(' ') and not line.startswith('-'):
            first_end = i - 1
            break
        elif 'prompt:' in line:
            first_end = i
    
    # Remove all subsequent image_prompt components
    lines_to_remove = []
    for start_idx in image_prompt_starts[1:]:
        # Find the end of this component
        end_idx = start_idx
        for i in range(start_idx + 1, len(lines)):
            line = lines[i].strip()
            if line.startswith('- type:'):
                end_idx = i - 1
                break
            elif line and not line.startswith(' ') and not line.startswith('-'):
                end_idx = i - 1
                break
            elif 'prompt:' in line:
                end_idx = i
                break
        
        # Mark lines for removal
        for i in range(start_idx, end_idx + 1):
            lines_to_remove.append(i)
    
    # Remove the duplicate lines (in reverse order to maintain indices)
    for i in sorted(lines_to_remove, reverse=True):
        if i < len(lines):
            lines.pop(i)
    
    # Write back the cleaned content
    new_content = '\n'.join(lines)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✓ Removed duplicates from {os.path.basename(filepath)}")
    return True

def main():
    """Remove duplicates from all articles"""
    
    duplicate_articles = [
        'article-152-how-to-perform-a-bias-audit-methodology-and-tool.md',
        'responsibility-of-responsible-ai-for-organizations.md',
        'article-97-deployment-strategies-canary-releases-ab-testing-.md',
        'article-157-how-to-build-an-ai-governance-roadmap-strategic-.md',
        'ai-governance-frameworks-building-your-organizations-approac.md',
        'article-title.md',
        'article-92-testing-ai-systems-beyond-traditional-software-qa.md',
        'article-125-ai-audit-automation-tools-and-techniques.md',
        'ai-history-from-dartmouth-to-deepmind.md'
    ]
    
    fixed_count = 0
    
    for filename in duplicate_articles:
        filepath = f'content/articles/final/{filename}'
        if os.path.exists(filepath):
            if remove_duplicate_image_prompts(filepath):
                fixed_count += 1
        else:
            print(f"✗ File not found: {filename}")
    
    print(f"\n=== SUMMARY ===")
    print(f"Fixed duplicates in: {fixed_count}/{len(duplicate_articles)} articles")

if __name__ == '__main__':
    main()