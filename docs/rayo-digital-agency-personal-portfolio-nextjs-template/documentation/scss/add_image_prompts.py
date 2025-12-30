#!/usr/bin/env python3
"""
Add image generation prompts to all articles
Analyzes article titles and content to generate appropriate image prompts
"""

import os
import re
import yaml
from pathlib import Path

def extract_frontmatter(content):
    """Extract YAML frontmatter from markdown content"""
    # Handle format where frontmatter comes after image placeholder
    # Look for the pattern: image line, empty line, ---, frontmatter, ---
    
    lines = content.split('\n')
    
    # Find the start of frontmatter (first --- after image)
    frontmatter_start = -1
    for i, line in enumerate(lines):
        if line.strip() == '---' and i > 0:  # Skip first line if it's ---
            frontmatter_start = i
            break
    
    if frontmatter_start == -1:
        return None, content
    
    # Find the end of frontmatter (next ---)
    frontmatter_end = -1
    for i in range(frontmatter_start + 1, len(lines)):
        if lines[i].strip() == '---':
            frontmatter_end = i
            break
    
    if frontmatter_end == -1:
        return None, content
    
    # Extract frontmatter content
    frontmatter_lines = lines[frontmatter_start + 1:frontmatter_end]
    frontmatter_text = '\n'.join(frontmatter_lines)
    
    try:
        frontmatter = yaml.safe_load(frontmatter_text)
        
        # Reconstruct content with frontmatter removed for processing
        before_frontmatter = '\n'.join(lines[:frontmatter_start])
        after_frontmatter = '\n'.join(lines[frontmatter_end + 1:])
        remaining_content = before_frontmatter + '\n' + after_frontmatter
        
        return frontmatter, remaining_content, frontmatter_start, frontmatter_end
    except yaml.YAMLError as e:
        print(f"Error parsing YAML: {e}")
        return None, content, -1, -1

def generate_image_prompt(title, category):
    """Generate an image prompt based on article title and category"""
    
    # Base style for all AI governance images
    base_style = "professional illustration, modern flat design style, clean and authoritative, high quality"
    
    # Category-specific themes
    category_themes = {
        "AI Fundamentals": "educational diagram showing AI concepts, neural network visualization, technology icons",
        "AI Risks & Principles": "balanced composition showing risk and safety elements, warning symbols with protective shields",
        "Legal Frameworks": "legal documents, scales of justice, regulatory framework visualization, government buildings",
        "AI Laws": "legislative building, legal codes, international flags, compliance checkmarks",
        "Risk Frameworks & Standards": "framework diagram, interconnected standards, quality assurance symbols, certification badges",
        "AI Development Lifecycle": "circular process flow, development stages, iterative cycle visualization",
        "Governance Implementation": "organizational structure, implementation roadmap, strategic planning elements",
        "AI Auditing & Accountability": "audit checklist, magnifying glass over AI system, accountability chain visualization",
        "Future Concerns": "futuristic technology, forward-looking perspective, emerging trends visualization",
        "Industry-Specific Insights": "industry-specific icons, sector applications, business context",
        "Practical Guides": "step-by-step guide visualization, practical tools, how-to diagram"
    }
    
    theme = category_themes.get(category, "AI governance concept visualization")
    
    # Extract key concepts from title
    title_lower = title.lower()
    
    # Add specific elements based on title keywords
    specific_elements = []
    
    if any(word in title_lower for word in ['privacy', 'data', 'gdpr', 'hipaa']):
        specific_elements.append("data protection symbols, privacy locks, secure data flow")
    
    if any(word in title_lower for word in ['bias', 'fairness', 'discrimination']):
        specific_elements.append("balanced scales, diverse people silhouettes, equality symbols")
    
    if any(word in title_lower for word in ['transparency', 'explainability', 'black box']):
        specific_elements.append("transparent glass box revealing inner workings, light rays, clarity symbols")
    
    if any(word in title_lower for word in ['audit', 'assessment', 'evaluation']):
        specific_elements.append("checklist, magnifying glass, inspection tools, quality badges")
    
    if any(word in title_lower for word in ['risk', 'safety', 'security']):
        specific_elements.append("shield icons, warning triangles, protective barriers, safety nets")
    
    if any(word in title_lower for word in ['framework', 'standard', 'iso', 'nist']):
        specific_elements.append("structured framework diagram, building blocks, architectural blueprint")
    
    if any(word in title_lower for word in ['training', 'learning', 'education']):
        specific_elements.append("learning path, educational icons, knowledge transfer visualization")
    
    if any(word in title_lower for word in ['deployment', 'implementation', 'production']):
        specific_elements.append("deployment pipeline, implementation stages, production environment")
    
    if any(word in title_lower for word in ['regulation', 'law', 'compliance', 'legal']):
        specific_elements.append("legal documents, regulatory symbols, compliance checkmarks")
    
    if any(word in title_lower for word in ['eu', 'europe', 'gdpr']):
        specific_elements.append("European Union flag colors, EU stars")
    
    # Construct the full prompt
    prompt_parts = [
        theme,
        ", ".join(specific_elements) if specific_elements else "",
        base_style,
        "blue and gray color scheme with accent colors",
        "suitable for professional article header"
    ]
    
    prompt = ", ".join(filter(None, prompt_parts))
    
    return prompt

def add_image_prompt_to_article(filepath):
    """Add image generation prompt to an article if it doesn't have one"""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    result = extract_frontmatter(content)
    if len(result) == 2:  # Old format, no frontmatter
        print(f"Skipping {filepath.name}: No frontmatter found")
        return False
    
    frontmatter, remaining_content, fm_start, fm_end = result
    
    if not frontmatter:
        print(f"Skipping {filepath.name}: No frontmatter found")
        return False
    
    # Check if image_prompt component already exists
    components = frontmatter.get('components', [])
    has_image_prompt = any(c.get('type') == 'image_prompt' for c in components)
    
    if has_image_prompt:
        print(f"Skipping {filepath.name}: Already has image_prompt component")
        return False
    
    # Generate image prompt
    title = frontmatter.get('title', filepath.stem)
    category = frontmatter.get('category', 'AI Governance')
    
    prompt = generate_image_prompt(title, category)
    
    # Create image_prompt component
    image_prompt_component = {
        'type': 'image_prompt',
        'label': 'Article Hero Image',
        'section': 'Header',
        'id': 'image-prompt-hero',
        'prompt': prompt
    }
    
    # Add to components list
    if 'components' not in frontmatter:
        frontmatter['components'] = []
    
    # Insert at the beginning of components list
    frontmatter['components'].insert(0, image_prompt_component)
    
    # Reconstruct the file
    lines = content.split('\n')
    before_frontmatter = '\n'.join(lines[:fm_start])
    after_frontmatter = '\n'.join(lines[fm_end + 1:])
    
    new_frontmatter = yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True, sort_keys=False)
    new_content = f"{before_frontmatter}\n---\n{new_frontmatter}---\n{after_frontmatter}"
    
    # Write back to file
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✓ Added image_prompt to {filepath.name}")
    return True

def main():
    """Process all articles in the final directory"""
    
    final_dir = Path('content/articles/final')
    
    if not final_dir.exists():
        print(f"Error: Directory {final_dir} does not exist")
        return
    
    articles = list(final_dir.glob('*.md'))
    
    print(f"Found {len(articles)} articles to process\n")
    
    updated_count = 0
    skipped_count = 0
    
    for article_path in sorted(articles):
        if add_image_prompt_to_article(article_path):
            updated_count += 1
        else:
            skipped_count += 1
    
    print(f"\n=== SUMMARY ===")
    print(f"Total articles: {len(articles)}")
    print(f"Updated: {updated_count}")
    print(f"Skipped: {skipped_count}")

if __name__ == '__main__':
    main()
