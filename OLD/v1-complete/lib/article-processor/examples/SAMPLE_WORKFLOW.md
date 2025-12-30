# Sample Processing Workflow

This document provides a complete example workflow for processing AI governance articles using the Article Content Processor. Follow these steps to understand the complete process from setup to output analysis.

## Prerequisites

Before starting, ensure you have:
- Node.js 20+ installed
- TypeScript 5.9+ installed
- Ollama installed and running
- Article Content Processor set up in your project

## Step 1: Environment Setup

### 1.1 Install and Start Ollama

```bash
# Install Ollama (macOS)
brew install ollama

# Start Ollama service
ollama serve

# Pull recommended model
ollama pull llama2

# Verify installation
curl http://localhost:11434/api/version
ollama list
```

### 1.2 Initialize Configuration

```bash
# Initialize default configuration
npm run article-processor config --init

# Verify configuration
npm run article-processor config --show
```

Expected output:
```json
{
  "ollama": {
    "model": "llama2",
    "endpoint": "http://localhost:11434",
    "timeout": 30000
  },
  "directories": {
    "drafts": "content/articles/drafts",
    "processing": "content/articles/articleprocessing",
    "review": "content/articles/review",
    "clean": "content/articles/clean"
  },
  "logging": {
    "verbose": false,
    "showProgress": true
  }
}
```

### 1.3 Create Directory Structure

```bash
# Create required directories
mkdir -p content/articles/{drafts,articleprocessing,review,clean}

# Verify structure
npm run article-processor structure
```

Expected output:
```
Directory Structure:
├── content/articles/drafts (0 files)
├── content/articles/articleprocessing (0 files)
├── content/articles/review (0 files)
└── content/articles/clean (0 files)
```

## Step 2: Prepare Sample Articles

### 2.1 Copy Sample Articles

```bash
# Copy provided sample articles to drafts directory
cp lib/article-processor/examples/sample-articles/*.md content/articles/drafts/

# Verify articles are in place
ls -la content/articles/drafts/
```

Expected files:
- `ai-fundamentals-example.md`
- `practical-guide-example.md`
- `legal-framework-example.md`

### 2.2 Inspect Sample Article Structure

```bash
# View the first sample article
head -20 content/articles/drafts/ai-fundamentals-example.md
```

Expected output:
```markdown
---
week: 2
phase: "Foundation"
domain: "Technical"
target_word_count: 1500
---

# Understanding Neural Networks: The Foundation of Modern AI

Neural networks form the backbone of modern artificial intelligence systems...
```

## Step 3: Single Article Processing (Testing)

### 3.1 Process One Article with Verbose Output

```bash
# Process single article to test the system
npm run article-processor single content/articles/drafts/ai-fundamentals-example.md --verbose
```

Expected verbose output:
```
[INFO] Starting single article processing
[INFO] Configuration loaded: article-processor.config.json
[INFO] Ollama connection test: SUCCESS
[INFO] Processing: content/articles/drafts/ai-fundamentals-example.md

[PARSE] Extracting frontmatter and content
[PARSE] Title extracted: "Understanding Neural Networks: The Foundation of Modern AI"
[PARSE] Word count: 1,247 words

[VALIDATE] Structure validation
[VALIDATE] ✓ H1 title present
[VALIDATE] ✓ Introduction section found
[VALIDATE] ✓ Conclusion section found
[VALIDATE] ✓ Header depth hierarchy valid

[CLASSIFY] Category classification
[CLASSIFY] Assigned category: "AI Fundamentals" (confidence: 0.92)

[ENHANCE] Content enhancement
[ENHANCE] TL;DR already present, skipping generation
[ENHANCE] Learning objectives missing, generating...
[ENHANCE] SEO keywords missing, generating...

[DETECT] Component detection
[DETECT] Found 0 checklists
[DETECT] Found 0 tables
[DETECT] Found 0 flowcharts
[DETECT] Found 0 templates
[DETECT] Found 2 structured lists

[ANALYZE] Cross-reference analysis
[ANALYZE] Topic fingerprint: ["Neural Networks", "Backpropagation", "CNN", "RNN", "Transformer Architecture"]
[ANALYZE] Named entities: ["Netflix", "Amazon", "Spotify", "Tesla"]

[GENERATE] Output generation
[GENERATE] YAML output: 847 bytes
[GENERATE] JSON output: 1,203 bytes
[GENERATE] Cleaned markdown: 1,891 bytes

[FILES] File management
[FILES] Written: content/articles/articleprocessing/understanding-neural-networks-foundation-modern-ai.yaml
[FILES] Written: content/articles/articleprocessing/understanding-neural-networks-foundation-modern-ai.json
[FILES] Moved: content/articles/drafts/ai-fundamentals-example.md → content/articles/review/
[FILES] Written: content/articles/clean/understanding-neural-networks-foundation-modern-ai.md

[SUCCESS] Article processed successfully
```

### 3.2 Examine Generated Outputs

```bash
# Check YAML output
cat content/articles/articleprocessing/understanding-neural-networks-foundation-modern-ai.yaml
```

Expected YAML structure:
```yaml
# === FILE STATUS ===
suggested_slug: "understanding-neural-networks-foundation-modern-ai"
category: "AI Fundamentals"
word_count:
  target: 1500
  actual: 1247
  status: "under"

# === CONTENT VALIDATION ===
structure:
  has_h1: true
  has_intro: true
  has_conclusion: true
  header_depth_valid: true
generated_elements:
  tldr_was_missing: false
  objectives_were_missing: true
  keywords_were_missing: true

# === COMPONENT INVENTORY ===
has_components: true
components:
  - type: "list"
    label: "Key Components"
    detected_at_section: "What Are Neural Networks?"
  - type: "list"
    label: "Real-World Applications"
    detected_at_section: "Real-World Applications"

# === EXTRACTED DATA ===
title: "Understanding Neural Networks: The Foundation of Modern AI"
tldr: "Neural networks form the backbone of modern artificial intelligence systems, from image recognition to natural language processing. This comprehensive guide explores the fundamental concepts, architectures, and applications that make neural networks so powerful."
learning_objectives:
  - "Understand the fundamental structure and components of neural networks"
  - "Identify different neural network architectures and their applications"
  - "Recognize the training process and key challenges in neural network development"
seo_keywords:
  - "neural networks"
  - "artificial intelligence"
  - "machine learning"
  - "deep learning"
  - "AI fundamentals"

# === CROSS REFERENCE DATA ===
topic_fingerprint:
  - "Neural Networks"
  - "Backpropagation"
  - "Convolutional Neural Networks"
  - "Recurrent Neural Networks"
  - "Transformer Architecture"
named_examples:
  - "Netflix"
  - "Amazon"
  - "Spotify"
  - "Tesla"

# === IMAGE GENERATION ===
image_prompt:
  formula: "Abstract geometric illustration, earth tones, minimalist, professional"
  category_motif: "neural networks"
  master_size: "1200x750px"
  css_filters: true
image_placeholder: "![Understanding Neural Networks]({{IMAGE_PLACEHOLDER_understanding-neural-networks-foundation-modern-ai}})"
```

```bash
# Check JSON output
jq . content/articles/articleprocessing/understanding-neural-networks-foundation-modern-ai.json
```

```bash
# Check cleaned markdown
head -20 content/articles/clean/understanding-neural-networks-foundation-modern-ai.md
```

Expected cleaned markdown:
```markdown
# Understanding Neural Networks: The Foundation of Modern AI

![Understanding Neural Networks]({{IMAGE_PLACEHOLDER_understanding-neural-networks-foundation-modern-ai}})

## TL;DR

Neural networks form the backbone of modern artificial intelligence systems, from image recognition to natural language processing. This comprehensive guide explores the fundamental concepts, architectures, and applications that make neural networks so powerful.

## Learning Objectives

By the end of this guide, you will be able to:

- Understand the fundamental structure and components of neural networks
- Identify different neural network architectures and their applications
- Recognize the training process and key challenges in neural network development

Neural networks form the backbone of modern artificial intelligence systems...
```

## Step 4: Batch Processing

### 4.1 Restore Articles for Batch Processing

```bash
# Move the processed article back to drafts for batch demo
mv content/articles/review/ai-fundamentals-example.md content/articles/drafts/

# Verify all articles are in drafts
ls -la content/articles/drafts/
```

### 4.2 Process All Articles

```bash
# Process all articles with progress indicators
npm run article-processor process --verbose
```

Expected batch output:
```
[INFO] Starting batch processing
[INFO] Configuration loaded: article-processor.config.json
[INFO] Ollama connection test: SUCCESS
[INFO] Found 3 markdown files in content/articles/drafts

Processing Articles:
[1/3] ai-fundamentals-example.md ✓
[2/3] practical-guide-example.md ✓
[3/3] legal-framework-example.md ✓

[MASTER] Compiling master JSON
[MASTER] Total articles: 3
[MASTER] Categories: AI Fundamentals (1), Practical Guides (1), Legal Frameworks (1)

[OLLAMA] Analyzing redundancy with llama2
[OLLAMA] Processing time: 8.2 seconds
[OLLAMA] Confidence score: 0.87

[RESULTS] Processing Summary:
- Total processed: 3
- Successful: 3
- Failed: 0
- Master JSON: content/articles/articleprocessing/master.json
- Master YAML: content/articles/articleprocessing/master.yaml

[SUCCESS] Batch processing completed
```

### 4.3 Examine Directory Structure After Processing

```bash
# Check final directory structure
npm run article-processor structure
```

Expected output:
```
Directory Structure:
├── content/articles/drafts (0 files)
├── content/articles/articleprocessing (7 files)
│   ├── understanding-neural-networks-foundation-modern-ai.yaml
│   ├── understanding-neural-networks-foundation-modern-ai.json
│   ├── how-implement-ai-governance-organization-step-step-guide.yaml
│   ├── how-implement-ai-governance-organization-step-step-guide.json
│   ├── understanding-eu-ai-act-key-provisions-compliance-requirements.yaml
│   ├── understanding-eu-ai-act-key-provisions-compliance-requirements.json
│   └── master.json
├── content/articles/review (3 files)
│   ├── ai-fundamentals-example.md
│   ├── practical-guide-example.md
│   └── legal-framework-example.md
└── content/articles/clean (3 files)
    ├── understanding-neural-networks-foundation-modern-ai.md
    ├── how-implement-ai-governance-organization-step-step-guide.md
    └── understanding-eu-ai-act-key-provisions-compliance-requirements.md
```

## Step 5: Analyze Results

### 5.1 Examine Master JSON

```bash
# View master JSON summary
jq '.processing_summary' content/articles/articleprocessing/master.json
```

Expected output:
```json
{
  "total_articles": 3,
  "processing_date": "2025-12-17T15:30:00Z",
  "categories_distribution": {
    "AI Fundamentals": 1,
    "Practical Guides": 1,
    "Legal Frameworks": 1
  }
}
```

### 5.2 Review Redundancy Analysis

```bash
# View redundancy analysis results
jq '.redundancy_analysis' content/articles/articleprocessing/master.json
```

Expected output:
```json
{
  "overlapping_articles": [
    {
      "article1": "understanding-neural-networks-foundation-modern-ai",
      "article2": "how-implement-ai-governance-organization-step-step-guide",
      "overlap_score": 0.15,
      "shared_concepts": ["AI systems", "risk assessment"]
    }
  ],
  "duplicate_examples": [],
  "restructuring_recommendations": [
    {
      "articles": ["how-implement-ai-governance-organization-step-step-guide", "understanding-eu-ai-act-key-provisions-compliance-requirements"],
      "issue": "Both articles discuss compliance frameworks",
      "suggestion": "Consider cross-referencing compliance sections"
    }
  ],
  "ollama_analysis": {
    "model_used": "llama2",
    "confidence_score": 0.87,
    "processing_time": 8200
  }
}
```

### 5.3 Review Cross-Reference Suggestions

```bash
# View cross-reference suggestions
jq '.cross_reference_suggestions' content/articles/articleprocessing/master.json
```

Expected output:
```json
{
  "suggestions": [
    {
      "from_article": "how-implement-ai-governance-organization-step-step-guide",
      "to_article": "understanding-eu-ai-act-key-provisions-compliance-requirements",
      "reason": "Both discuss regulatory compliance requirements",
      "confidence": 0.92
    },
    {
      "from_article": "understanding-eu-ai-act-key-provisions-compliance-requirements",
      "to_article": "how-implement-ai-governance-organization-step-step-guide",
      "reason": "Practical implementation guidance for EU AI Act compliance",
      "confidence": 0.88
    }
  ]
}
```

## Step 6: Validate Outputs

### 6.1 Validate YAML Files

```bash
# Validate all YAML files
find content/articles/articleprocessing/ -name "*.yaml" -exec yamllint {} \;
```

Expected: No errors (clean YAML syntax)

### 6.2 Validate JSON Files

```bash
# Validate all JSON files
find content/articles/articleprocessing/ -name "*.json" -exec jq . {} \; > /dev/null
echo "JSON validation: $?"
```

Expected output: `JSON validation: 0` (success)

### 6.3 Check Cleaned Markdown

```bash
# Verify image placeholders were inserted
grep -n "IMAGE_PLACEHOLDER" content/articles/clean/*.md
```

Expected output:
```
content/articles/clean/understanding-neural-networks-foundation-modern-ai.md:3:![Understanding Neural Networks]({{IMAGE_PLACEHOLDER_understanding-neural-networks-foundation-modern-ai}})
content/articles/clean/how-implement-ai-governance-organization-step-step-guide.md:3:![AI Governance Implementation]({{IMAGE_PLACEHOLDER_how-implement-ai-governance-organization-step-step-guide}})
content/articles/clean/understanding-eu-ai-act-key-provisions-compliance-requirements.md:3:![EU AI Act Compliance]({{IMAGE_PLACEHOLDER_understanding-eu-ai-act-key-provisions-compliance-requirements}})
```

## Step 7: Advanced Usage Examples

### 7.1 Custom Configuration

```bash
# Create custom configuration for development
cat > dev-config.json << 'EOF'
{
  "ollama": {
    "model": "codellama",
    "endpoint": "http://localhost:11434",
    "timeout": 45000
  },
  "directories": {
    "drafts": "./test-articles/drafts",
    "processing": "./test-articles/processing",
    "review": "./test-articles/review",
    "clean": "./test-articles/clean"
  },
  "logging": {
    "verbose": true,
    "showProgress": false
  }
}
EOF

# Create test directories
mkdir -p test-articles/{drafts,processing,review,clean}

# Copy sample article
cp lib/article-processor/examples/sample-articles/ai-fundamentals-example.md test-articles/drafts/

# Process with custom configuration
ARTICLE_PROCESSOR_CONFIG=dev-config.json npm run article-processor process --verbose
```

### 7.2 Performance Monitoring

```bash
# Time the processing
time npm run article-processor process

# Monitor memory usage
/usr/bin/time -v npm run article-processor process 2>&1 | grep -E "(Maximum resident|User time|System time)"
```

### 7.3 Error Handling Demo

```bash
# Create malformed article to test error handling
cat > content/articles/drafts/malformed.md << 'EOF'
---
invalid: yaml: syntax
---

# Missing Content

This article has malformed frontmatter and minimal content.
EOF

# Process and observe error handling
npm run article-processor process --verbose
```

Expected: Graceful error handling with detailed error reporting

## Step 8: Cleanup and Reset

### 8.1 Clean Up Test Files

```bash
# Remove processed files
rm -rf content/articles/articleprocessing/*
rm -rf content/articles/review/*
rm -rf content/articles/clean/*

# Remove test directories
rm -rf test-articles/
rm -f dev-config.json

# Restore sample articles to drafts
cp lib/article-processor/examples/sample-articles/*.md content/articles/drafts/
```

### 8.2 Verify Clean State

```bash
# Check directory structure
npm run article-processor structure
```

Expected output:
```
Directory Structure:
├── content/articles/drafts (3 files)
├── content/articles/articleprocessing (0 files)
├── content/articles/review (0 files)
└── content/articles/clean (0 files)
```

## Expected Processing Results Summary

After completing this workflow, you should have:

### Generated Files
- **3 YAML files**: Structured metadata for each article
- **3 JSON files**: Machine-readable article data
- **1 Master JSON**: Aggregated data with redundancy analysis
- **3 Cleaned Markdown files**: Original content with image placeholders

### Processing Insights
- **Category Distribution**: Articles classified into appropriate categories
- **Content Enhancement**: Missing elements generated (TL;DR, objectives, keywords)
- **Component Detection**: UI components identified (checklists, tables, templates)
- **Cross-References**: Suggestions for linking related articles
- **Redundancy Analysis**: AI-powered overlap detection and recommendations

### Quality Metrics
- **Structure Validation**: All articles validated for proper organization
- **Word Count Analysis**: Target vs actual word count comparison
- **Bias Detection**: Topic fingerprints for collision detection
- **Named Entity Extraction**: Specific examples and case studies identified

## Troubleshooting Common Issues

### Issue: "No markdown files found"
**Solution**: Ensure articles are in the correct drafts directory with `.md` extension

### Issue: "Ollama service not reachable"
**Solution**: Start Ollama service with `ollama serve` and verify with `curl http://localhost:11434/api/version`

### Issue: "Permission denied"
**Solution**: Check directory permissions with `chmod -R 755 content/articles/`

### Issue: "Configuration validation failed"
**Solution**: Validate JSON syntax and reinitialize with `npm run article-processor config --init`

## Next Steps

After completing this workflow:

1. **Customize Configuration**: Adapt settings for your specific use case
2. **Add Real Articles**: Process your actual AI governance articles
3. **Integrate Outputs**: Use generated JSON/YAML in your content management system
4. **Monitor Performance**: Track processing metrics and optimize as needed
5. **Implement Feedback**: Use redundancy analysis to improve content strategy

This workflow demonstrates the complete Article Content Processor capabilities and provides a foundation for processing your own AI governance content.