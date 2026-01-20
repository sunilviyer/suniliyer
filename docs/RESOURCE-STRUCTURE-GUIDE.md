# Resource Structure Guide

## Summary of Changes

### Fixed Issues
1. ✅ **Published missing card**: `concept-model-drift` - Now visible in ai-vs-automation article
2. ✅ **Enhanced resource structure**: Added support for rich resources with URLs, types, and descriptions
3. ✅ **Backward compatible**: Existing string resources continue to work

### Articles Missing Resources
All **5 RISK articles** need resources added:
- ❌ risk/when-ai-goes-wrong
- ❌ risk/algorithmic-bias
- ❌ risk/ai-hallucinations
- ❌ risk/ai-privacy
- ❌ risk/deepfakes-synthetic-media

All **8 HISTORY articles** already have resources ✅

---

## Resource Structure

### Current Capabilities

The resource system now supports **TWO formats**:

#### Format 1: Simple String (Backward Compatible)
```json
"additionalResources": [
  "Stanford HAI - Historical Timeline of AI Research"
]
```

#### Format 2: Rich Resource Object (NEW)
```json
"additionalResources": [
  {
    "title": "NIST AI Risk Management Framework",
    "url": "https://www.nist.gov/ai-rmf",           // External or internal link
    "type": "pdf",                                   // Type for icon
    "description": "Official framework for managing AI risks"  // Optional
  }
]
```

### Supported Resource Types

Each type gets a unique icon:

| Type       | Icon | Use For                        |
|------------|------|--------------------------------|
| `pdf`      | 📄   | PDF documents                  |
| `excel`    | 📊   | Excel spreadsheets, data files |
| `video`    | 🎥   | YouTube, Vimeo videos          |
| `article`  | 📰   | Articles, blog posts, papers   |
| `website`  | 🌐   | General websites               |
| `tool`     | 🔧   | Interactive tools, calculators |
| `document` | 📝   | Other documents                |
| (none)     | 🔗   | Default for links without type |

### Sources-Specific Fields

For academic citations in Sources & References:

```json
"sources": [
  {
    "title": "Concrete Problems in AI Safety",
    "author": "Amodei, D., et al.",
    "year": 2016,
    "url": "https://arxiv.org/abs/1606.06565",
    "type": "article",
    "description": "Foundational paper on AI safety research"
  }
]
```

This automatically formats as: **Amodei, D., et al. (2016). Concrete Problems in AI Safety**

---

## How to Add Resources

### Step 1: Prepare Your Data

Use the template in `docs/risk-article-resources-template.json` as a guide. Replace example URLs and content with your actual resources.

### Step 2: Update Database

Create a script to update article resources:

```typescript
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

const resources = {
  additionalResources: [
    {
      title: "AI Incident Database",
      url: "https://incidentdatabase.ai/",
      type: "website",
      description: "Comprehensive database of AI failures"
    },
    // ... more resources
  ],
  sources: [
    {
      title: "Concrete Problems in AI Safety",
      author: "Amodei, D., et al.",
      year: 2016,
      url: "https://arxiv.org/abs/1606.06565",
      type: "article"
    },
    // ... more sources
  ]
};

// Update article
const article = await sql`
  SELECT yaml_content FROM articles WHERE slug = 'when-ai-goes-wrong'
`;

const content = JSON.parse(article[0].yaml_content);
content.additionalResources = resources.additionalResources;
content.sources = resources.sources;

await sql`
  UPDATE articles
  SET yaml_content = ${JSON.stringify(content)}
  WHERE slug = 'when-ai-goes-wrong'
`;
```

### Step 3: Test

1. Start dev server: `npm run dev`
2. Navigate to article: `http://localhost:3006/articles/when-ai-goes-wrong`
3. Scroll to bottom - click "Additional Resources" accordion
4. Verify:
   - ✅ Icons appear for each type
   - ✅ Links are clickable
   - ✅ Descriptions show in italics
   - ✅ Hover effects work on links

---

## File Storage for PDFs/Excel

### Option 1: Store in public folder
```
/public/downloads/
  ├── nist-ai-rmf-2023.pdf
  ├── risk-assessment-toolkit.xlsx
  └── bias-audit-checklist.pdf
```

Reference in database:
```json
{
  "url": "/downloads/nist-ai-rmf-2023.pdf",
  "type": "pdf"
}
```

### Option 2: External hosting
Use cloud storage (AWS S3, Google Drive, Dropbox):
```json
{
  "url": "https://your-bucket.s3.amazonaws.com/documents/ai-safety-report.pdf",
  "type": "pdf"
}
```

---

## Examples by Resource Type

### External Website
```json
{
  "title": "AI Incident Database",
  "url": "https://incidentdatabase.ai/",
  "type": "website",
  "description": "Comprehensive database documenting real-world AI failures"
}
```

### PDF Document
```json
{
  "title": "NIST AI Risk Management Framework",
  "url": "/downloads/nist-ai-rmf-2023.pdf",
  "type": "pdf",
  "description": "Official framework for managing AI risks in organizations"
}
```

### Excel Spreadsheet
```json
{
  "title": "AI Risk Assessment Toolkit",
  "url": "/downloads/risk-assessment-toolkit.xlsx",
  "type": "excel",
  "description": "Template for assessing AI deployment risks"
}
```

### YouTube Video
```json
{
  "title": "Understanding AI Hallucinations",
  "url": "https://www.youtube.com/watch?v=abc123",
  "type": "video",
  "description": "DeepMind research presentation on hallucination mitigation"
}
```

### Interactive Tool
```json
{
  "title": "Fairness Metrics Calculator",
  "url": "https://example.com/fairness-calculator",
  "type": "tool",
  "description": "Interactive tool for comparing fairness metrics"
}
```

### Academic Paper (with full citation)
```json
{
  "title": "Concrete Problems in AI Safety",
  "author": "Amodei, D., Olah, C., Steinhardt, J., et al.",
  "year": 2016,
  "url": "https://arxiv.org/abs/1606.06565",
  "type": "article",
  "description": "Foundational paper identifying key AI safety research areas"
}
```

---

## Visual Examples

### Additional Resources Rendering
```
📄 NIST AI Risk Management Framework
   Official framework for managing AI risks in organizations

🌐 AI Incident Database
   Comprehensive database documenting real-world AI failures

📊 AI Risk Assessment Toolkit
   Template for assessing AI deployment risks
```

### Sources Rendering
```
📰 Amodei, D., et al. (2016). Concrete Problems in AI Safety
   Foundational paper identifying key AI safety research areas

📄 National Transportation Safety Board (2018). Report of Fatal Collision
   Between Vehicle Under Test and Pedestrian
```

---

## Migration Checklist

For each risk article, you need to provide:

### 1. Additional Resources (4-6 items recommended)
- [ ] At least one website/tool
- [ ] At least one PDF document (if available)
- [ ] Optional: Video tutorial or presentation
- [ ] Optional: Excel/data resource
- [ ] Optional: Interactive tool

### 2. Sources & References (3-5 items recommended)
- [ ] Primary academic papers
- [ ] Industry reports
- [ ] Government/regulatory documents
- [ ] News articles about incidents
- [ ] Technical documentation

### 3. For Each Resource
- [ ] Verify URL is accessible
- [ ] Add appropriate type
- [ ] Write clear, concise description
- [ ] For sources: Include author and year

---

## Next Steps

1. **Gather Resources**: Collect URLs, PDFs, Excel files for each risk article
2. **Use Template**: Fill out `docs/risk-article-resources-template.json` with real data
3. **Create Update Script**: Build script to update database with resources
4. **Test Locally**: Verify all resources render correctly
5. **Deploy**: Push changes to production

**Note**: The template file already contains example structures for all 5 risk articles. Replace the example URLs and content with your actual resources.
