#!/usr/bin/env python3
"""
Manually fix the remaining articles that had YAML parsing issues
"""

import os
import re

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
    
    if any(word in title_lower for word in ['audit', 'assessment', 'evaluation']):
        specific_elements.append("checklist, magnifying glass, inspection tools, quality badges")
    
    if any(word in title_lower for word in ['testing', 'qa', 'quality']):
        specific_elements.append("testing tools, quality assurance symbols, validation checkmarks")
    
    if any(word in title_lower for word in ['deployment', 'implementation', 'production']):
        specific_elements.append("deployment pipeline, implementation stages, production environment")
    
    if any(word in title_lower for word in ['framework', 'governance']):
        specific_elements.append("structured framework diagram, building blocks, architectural blueprint")
    
    if any(word in title_lower for word in ['bias', 'fairness']):
        specific_elements.append("balanced scales, diverse people silhouettes, equality symbols")
    
    if any(word in title_lower for word in ['roadmap', 'strategic']):
        specific_elements.append("roadmap visualization, strategic planning elements, milestone markers")
    
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

def add_image_prompt_manually(filepath, title, category):
    """Manually add image prompt to an article"""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Generate the prompt
    prompt = generate_image_prompt(title, category)
    
    # Create the component YAML
    component_yaml = f"""- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: {prompt}"""
    
    # Find the components section and add the image prompt
    lines = content.split('\n')
    
    # Find where components start
    components_start = -1
    for i, line in enumerate(lines):
        if line.strip() == 'components:':
            components_start = i
            break
    
    if components_start != -1:
        # Insert the image prompt component at the beginning of components
        lines.insert(components_start + 1, component_yaml)
        
        # Write back
        new_content = '\n'.join(lines)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✓ Added image_prompt to {os.path.basename(filepath)}")
        return True
    else:
        print(f"✗ Could not find components section in {os.path.basename(filepath)}")
        return False

def main():
    """Fix the remaining articles"""
    
    articles_to_fix = [
        ('ai-governance-frameworks-building-your-organizations-approac.md', 'AI Governance Frameworks – Building Your Organization\'s Approach', 'Governance Implementation'),
        ('ai-history-from-dartmouth-to-deepmind.md', 'AI History — From Dartmouth to DeepMind', 'AI Fundamentals'),
        ('article-125-ai-audit-automation-tools-and-techniques.md', 'Article 125: AI Audit Automation – Tools and Techniques', 'AI Auditing & Accountability'),
        ('article-152-how-to-perform-a-bias-audit-methodology-and-tool.md', 'Article 152: How to Perform a Bias Audit – Methodology and Tools', 'Practical Guides'),
        ('article-157-how-to-build-an-ai-governance-roadmap-strategic-.md', 'Article 157: How to Build an AI Governance Roadmap – Strategic Planning', 'Practical Guides'),
        ('article-92-testing-ai-systems-beyond-traditional-software-qa.md', 'Article 92: Testing AI Systems – Beyond Traditional Software QA', 'AI Development Lifecycle'),
        ('article-97-deployment-strategies-canary-releases-ab-testing-.md', 'Article 97: Deployment Strategies – Canary Releases, A/B Testing, and Rollbacks', 'AI Development Lifecycle'),
        ('article-title.md', 'Article Title', 'AI Governance'),
        ('responsibility-of-responsible-ai-for-organizations.md', 'Responsibility of Responsible AI for Organizations', 'AI Risks & Principles')
    ]
    
    success_count = 0
    
    for filename, title, category in articles_to_fix:
        filepath = f'content/articles/final/{filename}'
        if os.path.exists(filepath):
            if add_image_prompt_manually(filepath, title, category):
                success_count += 1
        else:
            print(f"✗ File not found: {filename}")
    
    print(f"\n=== SUMMARY ===")
    print(f"Successfully fixed: {success_count}/{len(articles_to_fix)} articles")

if __name__ == '__main__':
    main()