#!/bin/bash

# Process Batch 14/17
# Articles 131 to 140
# 10 articles in this batch

set -e

echo "📦 Processing Batch 14/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-156-how-to-communicate-about-ai-stakeholder-communic"
echo "   Article 156: How to Communicate About AI — Stakeholder Communications Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-156-how-to-communicate-about-ai-stakeholder-communic" --verbose
echo ""

echo "📄 Processing 2/10: article-157-how-to-build-an-ai-governance-roadmap-strategic-"
echo "   Article 157: How to Build an AI Governance Roadmap — Strategic Planning Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-157-how-to-build-an-ai-governance-roadmap-strategic-" --verbose
echo ""

echo "📄 Processing 3/10: article-158-how-to-pass-the-aigp-certification-complete-stud"
echo "   Article 158: How to Pass the AIGP Certification — Complete Study Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-158-how-to-pass-the-aigp-certification-complete-stud" --verbose
echo ""

echo "📄 Processing 4/10: when-ai-goes-wrong-a-taxonomy-of-ai-harms"
echo "   When AI Goes Wrong – A Taxonomy of AI Harms"
npx ts-node lib/article-processor/cli/consolidate.ts single "when-ai-goes-wrong-a-taxonomy-of-ai-harms" --verbose
echo ""

echo "📄 Processing 5/10: algorithmic-bias-how-ai-discriminates-and-why"
echo "   Algorithmic Bias – How AI Discriminates and Why"
npx ts-node lib/article-processor/cli/consolidate.ts single "algorithmic-bias-how-ai-discriminates-and-why" --verbose
echo ""

echo "📄 Processing 6/10: ai-hallucinations-when-machines-confidently-lie"
echo "   AI Hallucinations – When Machines Confidently Lie"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-hallucinations-when-machines-confidently-lie" --verbose
echo ""

echo "📄 Processing 7/10: the-black-box-problem-why-ai-explainability-matters"
echo "   The Black Box Problem – Why AI Explainability Matters"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-black-box-problem-why-ai-explainability-matters" --verbose
echo ""

echo "📄 Processing 8/10: ai-and-privacy-the-data-collection-dilemma"
echo "   AI and Privacy – The Data Collection Dilemma"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-and-privacy-the-data-collection-dilemma" --verbose
echo ""

echo "📄 Processing 9/10: deepfakes-and-synthetic-media-the-trust-crisis"
echo "   Deepfakes and Synthetic Media – The Trust Crisis"
npx ts-node lib/article-processor/cli/consolidate.ts single "deepfakes-and-synthetic-media-the-trust-crisis" --verbose
echo ""

echo "📄 Processing 10/10: ai-powered-misinformation-democracy-at-risk"
echo "   AI-Powered Misinformation – Democracy at Risk"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-powered-misinformation-democracy-at-risk" --verbose
echo ""

