const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Read knowledge graph
const kgPath = path.join(__dirname, '..', 'content', 'knowledge-graph.yaml');
const kgContent = fs.readFileSync(kgPath, 'utf-8');
const kg = yaml.load(kgContent);

// Path titles
const pathTitles = {
  history: 'History & Foundations',
  terminology: 'Terminology',
  risk: 'Risk',
  responsibility: 'Responsibility',
  future: 'Future',
};

// Collect all concept cards
const allCards = [
  ...(kg.concept_cards_history || []),
  ...(kg.concept_cards_terminology || []),
  ...(kg.concept_cards_risk || []),
  ...(kg.concept_cards_responsibility || []),
  ...(kg.concept_cards_future || []),
];

// Sort by path, then by id
allCards.sort((a, b) => {
  if (a.path !== b.path) {
    return a.path.localeCompare(b.path);
  }
  return a.id.localeCompare(b.id);
});

// Generate markdown content
let output = `# Article URL Mapping Reference

This document provides a complete mapping of article URLs to their source files and metadata.
Use this to quickly find which file to edit for any given article.

Last updated: ${new Date().toISOString().split('T')[0]}

---

## How to Use This Document

- **URL**: The live URL path where the article appears (e.g., \`/articles/what-ai-actually-is\`)
- **Title**: The article title shown to users
- **Source File**: The markdown file to edit
- **Path**: The learning path this article belongs to
- **ID**: The concept card ID in knowledge-graph.yaml

---

## Quick Stats

- Total Articles: ${allCards.length}
- History Articles: ${kg.concept_cards_history?.length || 0}
- Terminology Articles: ${kg.concept_cards_terminology?.length || 0}
- Risk Articles: ${kg.concept_cards_risk?.length || 0}
- Responsibility Articles: ${kg.concept_cards_responsibility?.length || 0}
- Future Articles: ${kg.concept_cards_future?.length || 0}

---

`;

// Group by path
const pathGroups = {
  history: [],
  terminology: [],
  risk: [],
  responsibility: [],
  future: [],
};

allCards.forEach((card) => {
  if (pathGroups[card.path]) {
    pathGroups[card.path].push(card);
  }
});

// Generate sections for each path
Object.entries(pathGroups).forEach(([pathId, cards]) => {
  if (cards.length === 0) return;

  output += `## ${pathTitles[pathId]} (${cards.length} articles)\n\n`;

  cards.forEach((card, index) => {
    output += `### ${index + 1}. ${card.title}\n\n`;
    output += `- **URL**: \`/articles/${card.slug}\`\n`;
    output += `- **ID**: \`${card.id}\`\n`;
    output += `- **Source File**: \`${card.source_file}\`\n`;
    output += `- **TLDR**: ${card.tldr}\n`;

    if (card.tags && card.tags.length > 0) {
      output += `- **Tags**: ${card.tags.join(', ')}\n`;
    }

    if (card.content_sections && card.content_sections.length > 0) {
      output += `- **Sections**: ${card.content_sections.length} sections\n`;
    }

    output += '\n';
  });

  output += '---\n\n';
});

// Add alphabetical index
output += `## Alphabetical Index\n\n`;
const sortedByTitle = [...allCards].sort((a, b) => a.title.localeCompare(b.title));

sortedByTitle.forEach((card) => {
  output += `- **${card.title}**\n`;
  output += `  - URL: \`/articles/${card.slug}\`\n`;
  output += `  - File: \`${card.source_file}\`\n`;
  output += `  - Path: ${pathTitles[card.path]}\n`;
  output += '\n';
});

// Write output
const outputPath = path.join(__dirname, '..', 'docs', 'article-url-mapping.md');
fs.writeFileSync(outputPath, output, 'utf-8');

console.log(`✓ Generated article mapping documentation at ${outputPath}`);
console.log(`✓ Total articles: ${allCards.length}`);
