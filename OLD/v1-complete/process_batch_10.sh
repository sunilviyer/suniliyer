#!/bin/bash

# Process Batch 10/17
# Articles 91 to 100
# 10 articles in this batch

set -e

echo "📦 Processing Batch 10/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-82-ai-governance-structures-roles-responsibilities-a"
echo "   Article 82: AI Governance Structures – Roles, Responsibilities, and RACI"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-82-ai-governance-structures-roles-responsibilities-a" --verbose
echo ""

echo "📄 Processing 2/10: article-83-designing-responsibly-the-ai-system-design-phase"
echo "   Article 83: Designing Responsibly – The AI System Design Phase"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-83-designing-responsibly-the-ai-system-design-phase" --verbose
echo ""

echo "📄 Processing 3/10: article-84-data-strategy-for-ai-collection-quality-and-gover"
echo "   Article 84: Data Strategy for AI – Collection, Quality, and Governance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-84-data-strategy-for-ai-collection-quality-and-gover" --verbose
echo ""

echo "📄 Processing 4/10: article-85-privacy-enhancing-technologies-differential-priva"
echo "   Article 85: Privacy-Enhancing Technologies – Differential Privacy and Beyond"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-85-privacy-enhancing-technologies-differential-priva" --verbose
echo ""

echo "📄 Processing 5/10: article-86-federated-learning-training-without-sharing-data"
echo "   Article 86: Federated Learning – Training Without Sharing Data"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-86-federated-learning-training-without-sharing-data" --verbose
echo ""

echo "📄 Processing 6/10: article-87-model-selection-choosing-the-right-ai-approach"
echo "   Article 87: Model Selection – Choosing the Right AI Approach"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-87-model-selection-choosing-the-right-ai-approach" --verbose
echo ""

echo "📄 Processing 7/10: article-88-the-build-vs-buy-decision-when-to-use-third-party"
echo "   Article 88: The Build vs. Buy Decision – When to Use Third-Party AI"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-88-the-build-vs-buy-decision-when-to-use-third-party" --verbose
echo ""

echo "📄 Processing 8/10: article-89-ai-development-best-practices-from-code-to-compli"
echo "   Article 89: AI Development Best Practices – From Code to Compliance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-89-ai-development-best-practices-from-code-to-compli" --verbose
echo ""

echo "📄 Processing 9/10: article-90-feature-engineering-the-art-of-training-data-prep"
echo "   Article 90: Feature Engineering – The Art of Training Data Preparation"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-90-feature-engineering-the-art-of-training-data-prep" --verbose
echo ""

echo "📄 Processing 10/10: article-91-model-training-hyperparameters-validation-and-ove"
echo "   Article 91: Model Training – Hyperparameters, Validation, and Overfitting"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-91-model-training-hyperparameters-validation-and-ove" --verbose
echo ""

