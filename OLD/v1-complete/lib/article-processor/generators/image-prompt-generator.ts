/**
 * Image Prompt Generator
 * 
 * Generates category-specific image prompts and placeholders for articles.
 * Maps categories to visual motifs and creates consistent image generation prompts.
 */

import { Category, CategoryMotif, ImagePrompt } from '../types';
import { ImagePromptGenerator } from '../interfaces';

export class ImagePromptGeneratorImpl implements ImagePromptGenerator {
  private readonly BASE_FORMULA = "Abstract geometric illustration, earth tones, minimalist, professional";
  private readonly MASTER_SIZE = "1200x750px" as const;
  
  private readonly categoryMotifMap: Record<Category, CategoryMotif> = {
    "AI Fundamentals": "neural networks",
    "AI Risks & Principles": "warning triangles", 
    "Legal Frameworks": "scales",
    "AI Laws": "legal documents",
    "Risk Frameworks & Standards": "shields",
    "AI Development Lifecycle": "flowcharts",
    "Governance Implementation": "org charts",
    "AI Auditing & Accountability": "magnifying glass",
    "Future Concerns": "crystal ball",
    "Industry-Specific Insights": "industry icons",
    "Practical Guides": "toolbox"
  };

  /**
   * Generate a complete image prompt for a given category and title
   */
  generatePrompt(category: Category, title: string): ImagePrompt {
    const motif = this.getCategoryMotif(category);
    
    return {
      formula: this.BASE_FORMULA,
      category_motif: motif,
      master_size: this.MASTER_SIZE,
      css_filters: true // Always true for light/dark mode variants
    };
  }

  /**
   * Get the visual motif associated with a category
   */
  getCategoryMotif(category: Category): CategoryMotif {
    const motif = this.categoryMotifMap[category];
    if (!motif) {
      throw new Error(`No motif mapping found for category: ${category}`);
    }
    return motif;
  }

  /**
   * Create a consistent image placeholder for markdown
   */
  createImagePlaceholder(slug: string): string {
    // Create a placeholder that can be processed later by the markdown generator
    return `![${this.formatSlugForAlt(slug)}]({{IMAGE_PLACEHOLDER_${slug}}})`;
  }

  /**
   * Format slug for alt text (convert kebab-case to title case)
   */
  private formatSlugForAlt(slug: string): string {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  /**
   * Get all available categories
   */
  getAvailableCategories(): Category[] {
    return Object.keys(this.categoryMotifMap) as Category[];
  }

  /**
   * Get all available motifs
   */
  getAvailableMotifs(): CategoryMotif[] {
    return Object.values(this.categoryMotifMap);
  }

  /**
   * Validate that a category has a corresponding motif
   */
  validateCategoryMapping(category: Category): boolean {
    return category in this.categoryMotifMap;
  }

  /**
   * Get the complete prompt string that would be sent to an image generation service
   */
  getCompletePromptString(category: Category, title: string): string {
    const prompt = this.generatePrompt(category, title);
    return `${prompt.formula}, featuring ${prompt.category_motif}`;
  }
}

// Export a default instance for convenience
export const imagePromptGenerator = new ImagePromptGeneratorImpl();