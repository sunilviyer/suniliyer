# Article Content Processor

A comprehensive system for processing, validating, and enhancing AI governance articles.

## Directory Structure

```
lib/article-processor/
├── types/              # TypeScript type definitions
│   └── index.ts       # Core data models
├── interfaces/         # Component interface definitions
│   └── index.ts       # Processing stage contracts
├── clients/           # External service clients
│   └── ollama-client.ts  # Ollama AI integration
├── processors/        # Main processing orchestration
├── analyzers/         # Content analysis components
├── generators/        # Output generation components
├── utils/            # Utility functions and constants
│   └── constants.ts  # System-wide constants
├── __tests__/        # Test files
│   ├── setup.ts      # Test configuration
│   └── types.test.ts # Type validation tests
├── index.ts          # Main entry point
└── README.md         # This file
```

## Core Components

### Types (`types/index.ts`)
Defines all data models used throughout the system:
- `Category` - 11 AI governance categories
- `ArticleJSON` - Structured article metadata
- `ProcessedArticle` - Internal article representation
- `MasterJSON` - Collection of all processed articles
- `OllamaConfig` - AI integration configuration

### Interfaces (`interfaces/index.ts`)
Defines contracts for each processing stage:
- `ArticleProcessor` - Main orchestrator
- `ContentValidator` - Structure validation
- `CategoryClassifier` - Category assignment
- `ContentEnhancer` - Missing element generation
- `ComponentDetector` - UI component identification
- `ImagePromptGenerator` - Image prompt creation
- `CrossReferenceAnalyzer` - Topic fingerprinting
- `OutputGenerator` - Multi-format output
- `FileManager` - File system operations

### Clients (`clients/`)
External service integrations:
- `OllamaClient` - Local AI model for redundancy analysis

### Constants (`utils/constants.ts`)
System-wide configuration:
- Directory paths
- Category-to-motif mappings
- Validation patterns
- Content enhancement settings
- Ollama defaults

## Testing

The system uses a dual testing approach:

### Unit Tests
- Test specific functionality with known inputs
- Validate error handling
- Test edge cases

### Property-Based Tests (fast-check)
- Verify universal properties across all inputs
- Run minimum 100 iterations per property
- Test with realistic generated data
- Each property references design document

## Configuration

### Ollama Integration
```typescript
import { OllamaClient } from './clients/ollama-client';

const client = new OllamaClient({
  model: 'llama2',
  endpoint: 'http://localhost:11434',
  timeout: 30000
});
```

### Directory Structure
```typescript
import { DEFAULT_DIRECTORIES } from './types';

// Access configured directories
const draftsDir = DEFAULT_DIRECTORIES.drafts;
const processingDir = DEFAULT_DIRECTORIES.processing;
const reviewDir = DEFAULT_DIRECTORIES.review;
const cleanDir = DEFAULT_DIRECTORIES.clean;
```

## Usage

```typescript
import { ArticleProcessor } from './article-processor';

// Process all draft articles
const processor = new ArticleProcessor();
const result = await processor.processAllDrafts();

console.log(`Processed ${result.successful} articles`);
console.log(`Failed: ${result.failed}`);
```

## Requirements

- Node.js 20+
- TypeScript 5.9+
- fast-check (for property-based testing)
- Ollama (for AI-powered redundancy analysis)

## Development

### Running Tests
```bash
npm test
```

### Type Checking
```bash
npx tsc --noEmit
```

## Next Steps

Implement the following components in order:
1. File discovery and content parsing
2. Content validation and structure analysis
3. Category classification
4. Content enhancement
5. Component detection
6. Image prompt generation
7. Cross-reference analysis
8. Ollama AI integration
9. Multi-format output generation
10. File management system
