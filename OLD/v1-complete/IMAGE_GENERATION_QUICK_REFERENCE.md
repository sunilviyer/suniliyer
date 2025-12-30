# Image Generation Quick Reference

**Date:** December 18, 2025  
**Total Articles:** 167  
**Status:** ✅ All articles have image generation prompts

## Files Created

1. **`ARTICLE_IMAGE_GENERATION_REFERENCE.md`** - Complete markdown reference with all articles, titles, prompts, and placeholders
2. **`article_image_prompts.csv`** - CSV format for easy import into spreadsheets or databases

## Usage Instructions

### For Image Generation

1. **Choose an article** from the reference document
2. **Copy the prompt** from the article entry
3. **Use with AI image tools:**
   - **DALL-E**: Paste into ChatGPT or DALL-E interface
   - **Midjourney**: Use `/imagine` command + prompt
   - **Stable Diffusion**: Use in any SD interface
4. **Save the generated image** with a filename that matches the placeholder

### Image Naming Convention

When saving generated images, use the placeholder variable name:
- **Placeholder**: `{{IMAGE_PLACEHOLDER_ai-and-privacy-the-data-collection-dilemma}}`
- **Image filename**: `ai-and-privacy-the-data-collection-dilemma.jpg` (or .png)

### Replacing Placeholders

Once you have generated images, replace the placeholder in each article:

**From:**
```markdown
![Article Title]({{IMAGE_PLACEHOLDER_filename}})
```

**To:**
```markdown
![Article Title](/images/filename.jpg)
```

## Prompt Guidelines Based on UX Design Specification

### Design Philosophy & Visual Requirements

**Core Visual Identity:**
- **Premium minimalist approach** with earth-tone aesthetic
- **Professional credibility** balanced with approachability
- **Abstract geometric illustrations** (not photorealistic)
- **Consistent earth-tone palette** across all images
- **Modern flat design style** with clean, authoritative feel

### Master Prompt Formula

**Base Structure:**
```
Abstract geometric illustration, [CATEGORY_MOTIF], earth tones, minimalist, professional, modern flat design style, clean composition, high quality, suitable for professional article header
```

**Required Elements:**
1. **Abstract geometric illustration** (never photorealistic)
2. **Category-specific motif** (see category guide below)
3. **Earth tones** (browns, beiges, muted greens)
4. **Minimalist** (clean, uncluttered)
5. **Professional** (business/academic context)
6. **Modern flat design** (no 3D effects, gradients minimal)

### Earth-Tone Color Palette for Prompts

**Primary Colors to Specify:**
- **Charcoal Brown** (#333d29) - Dark backgrounds
- **Moss Green** (#414833) - Natural elements
- **Fern** (#656d4a) - Mid-tone accents
- **Dry Sage** (#a4ac86) - Light accents
- **Khaki Beige** (#c2c5aa) - Neutral backgrounds
- **Tan** (#b6ad90) - Warm neutrals
- **Camel** (#a68a64) - Warm accents
- **Toffee Brown** (#936639) - Rich browns
- **Saddle Brown** (#7f4f24) - Deep browns
- **Dark Walnut** (#582f0e) - Darkest browns
- **Beige Ivory** (#F5F5DC) - Light backgrounds

**Color Prompt Addition:**
```
, color palette: charcoal brown, moss green, fern, dry sage, khaki beige, tan, camel, toffee brown, muted earth tones
```

### Category-Specific Motifs & Prompts

### 1. AI Fundamentals (Toffee Brown #936639)
**Motifs:** Neural networks, brain structures, interconnected nodes, data flow diagrams, circuit patterns
```
Abstract geometric illustration, neural network visualization with interconnected nodes, brain-inspired geometric patterns, data flow diagrams, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: toffee brown, charcoal brown, moss green, beige ivory, high quality, suitable for professional article header
```

### 2. AI Risks & Principles (Camel #a68a64)
**Motifs:** Balanced scales, warning symbols, protective shields, risk assessment matrices, ethical frameworks
```
Abstract geometric illustration, balanced scales and protective shield elements, warning triangles integrated with safety symbols, risk assessment geometric patterns, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: camel, charcoal brown, fern, dry sage, high quality, suitable for professional article header
```

### 3. Legal Frameworks (Dry Sage #a4ac86)
**Motifs:** Scales of justice, legal documents, regulatory frameworks, government buildings, compliance structures
```
Abstract geometric illustration, scales of justice with geometric legal document patterns, regulatory framework visualization, government building silhouettes, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: dry sage, charcoal brown, moss green, tan, high quality, suitable for professional article header
```

### 4. AI Laws (Saddle Brown #7f4f24)
**Motifs:** Legislative buildings, legal codes, international flags, compliance checkmarks, law books
```
Abstract geometric illustration, legislative building geometric forms, legal code patterns, international regulatory symbols, compliance checkmark elements, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: saddle brown, charcoal brown, beige ivory, fern, high quality, suitable for professional article header
```

### 5. Risk Frameworks & Standards (Dark Walnut #582f0e)
**Motifs:** Framework diagrams, interconnected standards, quality assurance symbols, certification badges
```
Abstract geometric illustration, structured framework diagrams, interconnected standards visualization, quality assurance geometric symbols, certification badge patterns, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: dark walnut, charcoal brown, tan, khaki beige, high quality, suitable for professional article header
```

### 6. AI Development Lifecycle (Tan #b6ad90)
**Motifs:** Circular process flows, development stages, iterative cycles, project timelines
```
Abstract geometric illustration, circular process flow with development stage markers, iterative cycle visualization, project timeline geometric elements, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: tan, charcoal brown, moss green, camel, high quality, suitable for professional article header
```

### 7. Governance Implementation (Khaki Beige #c2c5aa)
**Motifs:** Organizational structures, implementation roadmaps, strategic planning elements, hierarchy charts
```
Abstract geometric illustration, organizational structure diagrams, implementation roadmap visualization, strategic planning geometric elements, hierarchy chart patterns, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: khaki beige, charcoal brown, fern, toffee brown, high quality, suitable for professional article header
```

### 8. AI Auditing & Accountability (Fern #656d4a)
**Motifs:** Audit checklists, magnifying glasses, accountability chains, inspection tools, quality badges
```
Abstract geometric illustration, audit checklist geometric patterns, magnifying glass elements, accountability chain visualization, inspection tool symbols, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: fern, charcoal brown, dry sage, tan, high quality, suitable for professional article header
```

### 9. Future Concerns (Moss Green #414833)
**Motifs:** Futuristic technology, forward-looking perspectives, emerging trends, innovation symbols
```
Abstract geometric illustration, futuristic technology geometric forms, forward-looking perspective elements, emerging trend visualization, innovation symbol patterns, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: moss green, charcoal brown, camel, beige ivory, high quality, suitable for professional article header
```

### 10. Industry-Specific Insights (Moss Green #414833)
**Motifs:** Industry icons, sector applications, business context, market analysis
```
Abstract geometric illustration, industry sector geometric symbols, business context visualization, market analysis patterns, professional application elements, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: moss green, charcoal brown, tan, dry sage, high quality, suitable for professional article header
```

### 11. Practical Guides (Camel #a68a64)
**Motifs:** Step-by-step guides, practical tools, how-to diagrams, implementation steps
```
Abstract geometric illustration, step-by-step guide visualization, practical tool geometric elements, how-to diagram patterns, implementation step markers, earth tones, minimalist, professional, modern flat design style, clean composition, color palette: camel, charcoal brown, khaki beige, fern, high quality, suitable for professional article header
```

## Batch Processing Strategy

### Generation Workflow
1. **Group by Category** - Process all articles in same category together for visual consistency
2. **Use Category Templates** - Start with category-specific prompt template, customize per article
3. **Consistent Parameters** - Same aspect ratio (16:10), same style settings across all images
4. **Quality Control** - Generate 2-3 variations per article, select best one
5. **Naming Convention** - Save as `{article-slug}.png` to match placeholder variables

### Recommended Generation Order
1. **AI Fundamentals** (30 articles) - Neural network motifs
2. **AI Risks & Principles** (31 articles) - Risk/safety motifs  
3. **Legal Frameworks** (17 articles) - Legal/justice motifs
4. **Governance Implementation** (24 articles) - Organizational motifs
5. **AI Development Lifecycle** (16 articles) - Process flow motifs
6. **AI Auditing & Accountability** (16 articles) - Audit/inspection motifs
7. **Remaining Categories** (33 articles) - Mixed motifs

### Tool-Specific Settings

**DALL-E 3 (Recommended):**
- Size: 1792x1024 (closest to 16:10)
- Style: Natural (not vivid)
- Quality: HD
- Use full prompt with negative elements described

**Midjourney:**
- Aspect ratio: `--ar 16:10`
- Style: `--style raw` (less stylized)
- Quality: `--q 2` (higher quality)
- Version: `--v 6` (latest)
- Negative prompt: `--no photorealistic, people, text, bright colors`

**Stable Diffusion:**
- Size: 1216x768 (16:10 ratio)
- Steps: 30-50
- CFG Scale: 7-9
- Sampler: DPM++ 2M Karras
- Model: SDXL or SD 1.5 with appropriate checkpoint

### Consistency Validation
- **Color Check**: All images use earth-tone palette
- **Style Check**: All images are abstract geometric, flat design
- **Quality Check**: All images scale well to 400px width
- **Category Check**: Motifs match category themes
- **Professional Check**: Suitable for business/academic context

## Technical Specifications & Quality Guidelines

### Image Specifications
- **Master Size**: 1200x750px (16:10 aspect ratio)
- **Card Display**: 400x250px (scaled down)
- **Format**: PNG preferred (better for geometric illustrations)
- **Optimization**: Use Next.js Image component for automatic optimization

### Style Requirements
- **Illustration Type**: Abstract geometric only (no photorealistic elements)
- **Design Style**: Modern flat design, minimalist composition
- **Color Palette**: Earth tones only (see color guide above)
- **Complexity**: Clean, uncluttered, professional business context
- **Text**: No text or typography in images (titles handled by UI)

### Quality Standards
- **Visual Hierarchy**: Clear focal point, balanced composition
- **Scalability**: Must look good at both 1200px and 400px widths
- **Consistency**: All images should feel part of same design system
- **Professional Context**: Suitable for business/academic presentations
- **Accessibility**: Sufficient contrast for earth-tone palette

### Dark/Light Mode Strategy
- **Single Image**: Generate one version per article
- **CSS Filters**: Use CSS filters for theme adaptation
  - Light mode: `filter: brightness(1.1) contrast(0.9)`
  - Dark mode: `filter: brightness(0.8) contrast(1.1)`
- **Storage Savings**: 50% reduction vs generating separate versions

### Prompt Optimization Tips

**DO Include:**
- "Abstract geometric illustration" (first phrase)
- Specific category motif from guide above
- "Earth tones" and specific color palette
- "Minimalist, professional, modern flat design"
- "Clean composition, high quality"
- "Suitable for professional article header"

**DO NOT Include:**
- Photorealistic elements
- People or faces
- Bright colors (blues, reds, oranges)
- 3D effects or heavy gradients
- Text or typography
- Specific brand logos
- Complex detailed scenes

**Example Negative Prompts:**
```
--no photorealistic, people, faces, text, typography, bright colors, 3D effects, logos, complex details, cluttered composition
```

## Next Steps

1. Generate images using the prompts
2. Save with appropriate filenames
3. Replace placeholders in articles
4. Test image loading in the application
5. Optimize images for web if needed

## Advanced Prompt Techniques

### Keyword Enhancement Based on Article Content

**Privacy/Data/GDPR/HIPAA Articles:**
Add: `data protection symbols, privacy locks, secure data flow, encryption patterns`

**Bias/Fairness Articles:**
Add: `balanced scales, diverse geometric patterns, equality symbols, fairness visualization`

**Transparency/Explainability Articles:**
Add: `transparent glass elements, light rays, clarity symbols, revelation patterns`

**Audit/Assessment Articles:**
Add: `checklist patterns, magnifying glass elements, inspection symbols, quality badges`

**Risk/Safety/Security Articles:**
Add: `shield icons, warning triangles, protective barriers, safety net patterns`

**Framework/Standard Articles:**
Add: `structured diagrams, building blocks, architectural blueprints, foundation elements`

**Training/Learning Articles:**
Add: `learning path visualization, educational symbols, knowledge transfer patterns`

**Deployment/Implementation Articles:**
Add: `deployment pipeline, implementation stages, production environment symbols`

### Negative Prompts (What to Avoid)

Always include these negative prompts to maintain quality:
```
, avoid: photorealistic, 3D rendering, bright neon colors, cluttered composition, cartoon style, overly complex details, human figures, specific brand logos, text overlays
```

### Tool-Specific Optimizations

#### For DALL-E 3:
- Use detailed descriptions
- Specify "professional illustration" early in prompt
- Include aspect ratio: "1200x750 aspect ratio"
- Example: `Create a professional illustration with 1200x750 aspect ratio showing...`

#### For Midjourney:
- Use `--ar 8:5` for 1200x750 aspect ratio
- Add `--style raw` for cleaner results
- Use `--v 6` for latest model
- Example: `/imagine [prompt] --ar 8:5 --style raw --v 6`

#### For Stable Diffusion:
- Use negative prompts extensively
- Set CFG scale to 7-10 for better adherence
- Use 30-50 steps for quality
- Recommended model: SDXL or similar

### Design System Compliance

**Whitespace Requirements:**
- Generous negative space around main elements
- Uncluttered composition with breathing room
- Elements should not touch edges of frame

**Color Palette Enforcement:**
- Primary: Charcoal Brown (#333d29), Moss Green (#414833)
- Secondary: Fern (#656d4a), Dry Sage (#a4ac86), Khaki Beige (#c2c5aa)
- Accent: Tan (#b6ad90), Camel (#a68a64), Toffee Brown (#936639)
- Deep: Saddle Brown (#7f4f24), Dark Walnut (#582f0e)
- Light: Beige Ivory (#F5F5DC)

**Typography Integration:**
- No text in images (handled by CSS overlay)
- Leave space for title overlay at bottom
- Consider text readability over image areas

### Quality Assurance Checklist

Before finalizing any generated image:

- [ ] **Earth-tone palette only** (no bright colors)
- [ ] **Abstract geometric style** (not photorealistic)
- [ ] **Professional appearance** (suitable for business context)
- [ ] **Generous whitespace** (uncluttered composition)
- [ ] **Category-appropriate motifs** (matches article topic)
- [ ] **High resolution** (1200x750 minimum)
- [ ] **Clean edges** (no artifacts or distortion)
- [ ] **Consistent style** (matches other generated images)

---

**Total prompts ready for generation: 167**  
**Estimated generation time: 2-4 hours (depending on tool and batch size)**  
**Quality assurance time: Additional 1-2 hours for review and refinement**