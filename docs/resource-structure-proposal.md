# Resource Structure Proposal

## Current Structure (Simple Strings)
```json
{
  "additionalResources": [
    "Stanford HAI - Historical Timeline of AI Research",
    "MIT Technology Review - The AI Winter: Historical Perspective"
  ],
  "sources": [
    "McCarthy, J., et al. (1956). A Proposal for the Dartmouth Summer Research Project"
  ]
}
```

## Proposed Enhanced Structure (Backward Compatible)

### TypeScript Interface
```typescript
type ResourceItem = string | {
  title: string;
  url?: string;           // External link or internal path
  type?: 'article' | 'video' | 'pdf' | 'excel' | 'document' | 'website' | 'tool';
  description?: string;   // Optional description
  author?: string;        // For academic sources
  year?: number;          // Publication year for citations
};

interface ArticleContent {
  additionalResources?: ResourceItem[];
  sources?: ResourceItem[];
}
```

### Example Data Structure
```json
{
  "additionalResources": [
    // Simple string (backward compatible)
    "AI Safety Forum - Learning from Past AI Cycles",

    // Rich resource with external link
    {
      "title": "Stanford HAI - Historical Timeline of AI Research",
      "url": "https://hai.stanford.edu/timeline",
      "type": "website",
      "description": "Comprehensive timeline of AI research milestones from 1950s to present"
    },

    // PDF resource
    {
      "title": "AI Safety Research Report 2024",
      "url": "/downloads/ai-safety-2024.pdf",
      "type": "pdf",
      "description": "In-depth analysis of emerging AI safety concerns and mitigation strategies"
    },

    // Excel/data resource
    {
      "title": "AI Model Performance Benchmarks",
      "url": "/downloads/benchmarks-2024.xlsx",
      "type": "excel",
      "description": "Comparative performance data across major AI models"
    },

    // Video resource
    {
      "title": "AlphaGo Documentary",
      "url": "https://www.youtube.com/watch?v=WXuK6gekU1Y",
      "type": "video",
      "description": "DeepMind's documentary about AlphaGo defeating world champion Lee Sedol"
    },

    // Tool/interactive resource
    {
      "title": "AI Risk Assessment Tool",
      "url": "https://example.com/risk-tool",
      "type": "tool",
      "description": "Interactive tool for assessing AI deployment risks"
    }
  ],

  "sources": [
    // Academic citation with all metadata
    {
      "title": "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence",
      "author": "McCarthy, J., Minsky, M., Rochester, N., & Shannon, C.",
      "year": 1956,
      "url": "http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf",
      "type": "pdf"
    },

    // Simple citation (backward compatible)
    "Lighthill, J. (1973). Artificial Intelligence: A General Survey",

    // Modern paper with DOI
    {
      "title": "Mastering the Game of Go with Deep Neural Networks and Tree Search",
      "author": "Silver, D., et al.",
      "year": 2016,
      "url": "https://doi.org/10.1038/nature16961",
      "type": "article",
      "description": "Nature publication describing AlphaGo's architecture"
    }
  ]
}
```

## Rendering Logic

### For Additional Resources
- **String**: Render as plain text (current behavior)
- **Object with URL**: Render as clickable link with type icon
- **Object without URL**: Render as text with optional description
- **PDF/Excel**: Show download icon and file size if available

### For Sources
- **String**: Render as citation text (current behavior)
- **Object**: Format as proper citation with clickable link
  - Format: `Author (Year). Title. [Type Icon] [Link]`

## Benefits

1. **Backward Compatible**: Existing string resources continue to work
2. **Flexible**: Can add simple strings or rich objects as needed
3. **No Database Migration**: Uses existing JSONB columns
4. **Type Safety**: Icons/badges for different resource types
5. **Accessibility**: Proper links for screen readers and SEO
6. **Download Support**: Can track PDFs, Excel files, etc.

## Implementation Checklist

- [ ] Update TypeScript interfaces in components
- [ ] Update DatabaseArticleRenderer to handle both string and object formats
- [ ] Add type icons/badges (PDF, Excel, Video, etc.)
- [ ] Add link styling for clickable resources
- [ ] Add download indicators for file resources
- [ ] Test with existing string-based resources
- [ ] Create migration helper for upgrading string resources to objects
