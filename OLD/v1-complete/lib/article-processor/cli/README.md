# Article Content Processor CLI

A comprehensive command-line interface for processing AI governance articles with automated content analysis, validation, and structured output generation.

## Features

- **Batch Processing**: Process all articles in the drafts directory
- **Single Article Processing**: Process individual articles
- **Ollama Integration**: AI-powered redundancy analysis using local Ollama models
- **Multi-Format Output**: Generate YAML, JSON, and cleaned markdown outputs
- **Configuration Management**: Flexible configuration with validation
- **Progress Reporting**: Verbose logging and progress indicators
- **Directory Management**: Organized output across multiple directories

## Installation

The CLI is included with the Article Processor package. No additional installation required.

## Quick Start

1. **Initialize Configuration**:
   ```bash
   npm run article-processor config --init
   ```

2. **Add Articles**: Place markdown articles in `content/articles/drafts/`

3. **Start Ollama** (for redundancy analysis):
   ```bash
   ollama serve
   ollama pull llama2
   ```

4. **Process Articles**:
   ```bash
   npm run article-processor process
   ```

## Commands

### Process All Articles (Default)

```bash
npm run article-processor process [options]
```

**Options:**
- `-v, --verbose` - Enable verbose logging
- `-m, --model <model>` - Ollama model to use (default: llama2)
- `--drafts <path>` - Path to drafts directory
- `--processing <path>` - Path to processing output directory
- `--review <path>` - Path to review directory
- `--clean <path>` - Path to clean output directory
- `--show-structure` - Display directory structure before processing

**Examples:**
```bash
# Basic processing
npm run article-processor process

# Verbose processing with custom model
npm run article-processor process --verbose --model mistral

# Custom directories
npm run article-processor process --drafts ./my-drafts --processing ./output
```

### Process Single Article

```bash
npm run article-processor single <file> [options]
```

**Examples:**
```bash
# Process single article
npm run article-processor single content/articles/drafts/my-article.md

# With verbose logging
npm run article-processor single my-article.md --verbose
```

### Configuration Management

```bash
npm run article-processor config [options]
```

**Options:**
- `--show` - Show current configuration
- `--validate` - Validate configuration
- `--init` - Initialize default configuration file

**Examples:**
```bash
# Show current configuration
npm run article-processor config --show

# Validate configuration
npm run article-processor config --validate

# Initialize new configuration
npm run article-processor config --init
```

### Directory Structure

```bash
npm run article-processor structure [options]
```

Display the output directory structure and file counts.

## Configuration

The CLI uses a JSON configuration file for settings. Configuration files are loaded in this order:

1. `article-processor.config.json` (current directory)
2. `.article-processor.json` (current directory)
3. `config/article-processor.json` (config subdirectory)

### Configuration Structure

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

### Configuration Options

#### Ollama Settings
- **model**: Ollama model for AI analysis (e.g., "llama2", "mistral", "codellama")
- **endpoint**: Ollama API endpoint (default: http://localhost:11434)
- **timeout**: Request timeout in milliseconds (default: 30000)

#### Directory Settings
- **drafts**: Input directory for draft articles
- **processing**: Output directory for YAML/JSON processing results
- **review**: Directory for original articles after processing
- **clean**: Output directory for cleaned markdown files

#### Logging Settings
- **verbose**: Enable detailed logging
- **showProgress**: Show progress indicators during processing

## Directory Structure

The processor organizes files across four directories:

```
content/articles/
├── drafts/           # Input: Original markdown articles
├── articleprocessing/ # Output: YAML and JSON processing results
├── review/           # Archive: Original articles after processing
└── clean/            # Output: Cleaned markdown with image placeholders
```

### Directory Purposes

- **drafts/**: Contains original markdown articles to be processed
- **articleprocessing/**: Contains structured YAML and JSON outputs for each article, plus master.json
- **review/**: Contains original draft articles moved after successful processing
- **clean/**: Contains cleaned markdown files with image placeholders inserted

## Output Formats

### YAML Output
Structured YAML with clear section delimiters:
```yaml
# === FILE STATUS ===
suggested_slug: "ai-policy-guide"
category: "Practical Guides"

# === CONTENT VALIDATION ===
structure:
  has_h1: true
  has_intro: true

# === EXTRACTED DATA ===
title: "How to Write an AI Policy"
tldr: "A comprehensive guide..."
```

### JSON Output
Machine-readable JSON for programmatic processing:
```json
{
  "file_status": {
    "suggested_slug": "ai-policy-guide",
    "category": "Practical Guides"
  },
  "extracted_data": {
    "title": "How to Write an AI Policy",
    "tldr": "A comprehensive guide..."
  }
}
```

### Cleaned Markdown
Original markdown with image placeholders:
```markdown
# How to Write an AI Policy

![AI Policy Guide]({{IMAGE_PLACEHOLDER_ai-policy-guide}})

This article provides...
```

## Ollama Integration

The CLI integrates with Ollama for AI-powered redundancy analysis:

### Setup Ollama

1. **Install Ollama**: https://ollama.ai/download
2. **Start Service**: `ollama serve`
3. **Pull Model**: `ollama pull llama2`

### Supported Models

- **llama2**: General purpose, good balance of speed and quality
- **mistral**: Fast and efficient for analysis tasks
- **codellama**: Optimized for technical content analysis
- **Custom models**: Any model available in your Ollama installation

### Redundancy Analysis

Ollama analyzes the master JSON to identify:
- Overlapping content between articles
- Duplicate examples and case studies
- Cross-reference opportunities
- Restructuring recommendations

## Error Handling

The CLI provides comprehensive error handling:

### Processing Errors
- Individual article failures don't stop batch processing
- Detailed error reporting by processing stage
- Graceful degradation when components are unavailable

### Configuration Errors
- Validation with specific error messages
- Recommendations for fixing issues
- Fallback to default values where possible

### Network Errors
- Ollama connectivity issues are handled gracefully
- Timeout handling for long-running operations
- Retry logic for transient failures

## Logging and Progress

### Verbose Mode
Enable with `-v` or `--verbose`:
- Detailed processing steps
- Configuration information
- File operation details
- Timing information

### Progress Indicators
- Real-time progress bars
- Article-by-article status
- Processing statistics
- Error summaries

## Examples

### Basic Workflow

```bash
# 1. Initialize configuration
npm run article-processor config --init

# 2. Add articles to drafts directory
cp my-articles/*.md content/articles/drafts/

# 3. Start Ollama
ollama serve &
ollama pull llama2

# 4. Process all articles
npm run article-processor process --verbose

# 5. Check results
npm run article-processor structure
```

### Advanced Usage

```bash
# Process with custom model and directories
npm run article-processor process \
  --model mistral \
  --drafts ./input \
  --processing ./output/processing \
  --review ./output/review \
  --clean ./output/clean \
  --verbose

# Process single article with custom settings
npm run article-processor single article.md \
  --model codellama \
  --verbose

# Validate configuration before processing
npm run article-processor config --validate
```

## Troubleshooting

### Common Issues

1. **"No markdown files found"**
   - Check that articles exist in the drafts directory
   - Ensure files have `.md` extension

2. **"Ollama service not reachable"**
   - Start Ollama: `ollama serve`
   - Check endpoint configuration
   - Verify model is available: `ollama list`

3. **"Permission denied" errors**
   - Check write permissions on output directories
   - Run with appropriate user permissions

4. **Configuration validation failed**
   - Run `npm run article-processor config --validate`
   - Check configuration file syntax
   - Ensure all required fields are present

### Debug Mode

Enable verbose logging for detailed troubleshooting:
```bash
npm run article-processor process --verbose
```

### Log Files

Processing logs are output to the console. For persistent logging, redirect output:
```bash
npm run article-processor process --verbose > processing.log 2>&1
```

## Contributing

The CLI is part of the Article Content Processor system. See the main project documentation for contribution guidelines.

## License

This CLI tool is part of the AIDefence project and follows the same licensing terms.