#!/bin/bash

# Process Batch 11/17
# Articles 101 to 110
# 10 articles in this batch

set -e

echo "📦 Processing Batch 11/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-92-testing-ai-systems-beyond-traditional-software-qa"
echo "   Article 92: Testing AI Systems – Beyond Traditional Software QA"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-92-testing-ai-systems-beyond-traditional-software-qa" --verbose
echo ""

echo "📄 Processing 2/10: article-93-bias-testing-detecting-discrimination-before-depl"
echo "   Article 93: Bias Testing – Detecting Discrimination Before Deployment"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-93-bias-testing-detecting-discrimination-before-depl" --verbose
echo ""

echo "📄 Processing 3/10: article-94-red-teaming-ai-adversarial-testing-for-safety"
echo "   Article 94: Red Teaming AI – Adversarial Testing for Safety"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-94-red-teaming-ai-adversarial-testing-for-safety" --verbose
echo ""

echo "📄 Processing 4/10: article-95-ai-documentation-model-cards-and-system-documenta"
echo "   Article 95: AI Documentation – Model Cards and System Documentation"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-95-ai-documentation-model-cards-and-system-documenta" --verbose
echo ""

echo "📄 Processing 5/10: article-96-launch-readiness-the-ai-deployment-checklist"
echo "   Article 96: Launch Readiness – The AI Deployment Checklist"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-96-launch-readiness-the-ai-deployment-checklist" --verbose
echo ""

echo "📄 Processing 6/10: article-97-deployment-strategies-canary-releases-ab-testing-"
echo "   Article 97: Deployment Strategies – Canary Releases, A/B Testing, and Rollbacks"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-97-deployment-strategies-canary-releases-ab-testing-" --verbose
echo ""

echo "📄 Processing 7/10: article-98-monitoring-ai-in-production-drift-degradation-and"
echo "   Article 98: Monitoring AI in Production – Drift, Degradation, and Detection"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-98-monitoring-ai-in-production-drift-degradation-and" --verbose
echo ""

echo "📄 Processing 8/10: article-99-ai-incident-response-when-things-go-wrong"
echo "   Article 99: AI Incident Response – When Things Go Wrong"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-99-ai-incident-response-when-things-go-wrong" --verbose
echo ""

echo "📄 Processing 9/10: ai-governance-mastery-article-titles"
echo "   AI Governance Mastery — Article Titles"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-governance-mastery-article-titles" --verbose
echo ""

echo "📄 Processing 10/10: the-ai-family-tree-understanding-ai-intelligence-levels"
echo "   The AI Family Tree - Understanding AI Intelligence Levels"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-ai-family-tree-understanding-ai-intelligence-levels" --verbose
echo ""

