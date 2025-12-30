#!/bin/bash

# Process Batch 1/17
# Articles 1 to 10
# 10 articles in this batch

set -e

echo "📦 Processing Batch 1/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-title"
echo "   Article Title"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-title" --verbose
echo ""

echo "📄 Processing 2/10: the-ai-family-tree-types-of-ai-systems"
echo "   The AI Family Tree - Types of AI Systems"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-ai-family-tree-types-of-ai-systems" --verbose
echo ""

echo "📄 Processing 3/10: ai-history-from-dartmouth-to-deepmind"
echo "   AI History — From Dartmouth to DeepMind"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-history-from-dartmouth-to-deepmind" --verbose
echo ""

echo "📄 Processing 4/10: article-100-model-maintenance-updates-retraining-and-retirem"
echo "   Article 100: Model Maintenance – Updates, Retraining, and Retirement"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-100-model-maintenance-updates-retraining-and-retirem" --verbose
echo ""

echo "📄 Processing 5/10: article-101-building-the-ai-governance-function-where-to-sta"
echo "   Article 101: Building the AI Governance Function – Where to Start"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-101-building-the-ai-governance-function-where-to-sta" --verbose
echo ""

echo "📄 Processing 6/10: article-102-ai-governance-roles-cpo-cao-and-the-responsible-"
echo "   Article 102: AI Governance Roles – CPO, CAO, and the Responsible AI Office"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-102-ai-governance-roles-cpo-cao-and-the-responsible-" --verbose
echo ""

echo "📄 Processing 7/10: article-103-the-ai-ethics-board-structure-charter-and-effect"
echo "   Article 103: The AI Ethics Board – Structure, Charter, and Effectiveness"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-103-the-ai-ethics-board-structure-charter-and-effect" --verbose
echo ""

echo "📄 Processing 8/10: article-104-ai-policy-development-templates-and-best-practic"
echo "   Article 104: AI Policy Development – Templates and Best Practices"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-104-ai-policy-development-templates-and-best-practic" --verbose
echo ""

echo "📄 Processing 9/10: article-105-ai-inventory-management-knowing-what-you-have"
echo "   Article 105: AI Inventory Management – Knowing What You Have"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-105-ai-inventory-management-knowing-what-you-have" --verbose
echo ""

echo "📄 Processing 10/10: article-106-third-party-ai-risk-vendor-assessment-and-manage"
echo "   Article 106: Third-Party AI Risk – Vendor Assessment and Management"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-106-third-party-ai-risk-vendor-assessment-and-manage" --verbose
echo ""

