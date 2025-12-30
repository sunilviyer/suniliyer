#!/bin/bash

# Process Batch 7/17
# Articles 61 to 70
# 10 articles in this batch

set -e

echo "📦 Processing Batch 7/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-52-eu-ai-act-risk-classification-prohibited-high-ris"
echo "   Article 52: EU AI Act Risk Classification – Prohibited, High-Risk, and Beyond"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-52-eu-ai-act-risk-classification-prohibited-high-ris" --verbose
echo ""

echo "📄 Processing 2/10: article-53-high-risk-ai-systems-the-complete-requirements-ch"
echo "   Article 53: High-Risk AI Systems – The Complete Requirements Checklist"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-53-high-risk-ai-systems-the-complete-requirements-ch" --verbose
echo ""

echo "📄 Processing 3/10: article-54-foundation-model-obligations-what-the-eu-ai-act-r"
echo "   Article 54: Foundation Model Obligations – What the EU AI Act Requires"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-54-foundation-model-obligations-what-the-eu-ai-act-r" --verbose
echo ""

echo "📄 Processing 4/10: article-55-eu-ai-act-enforcement-penalties-and-compliance-ti"
echo "   Article 55: EU AI Act Enforcement – Penalties and Compliance Timelines"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-55-eu-ai-act-enforcement-penalties-and-compliance-ti" --verbose
echo ""

echo "📄 Processing 5/10: article-56-canadas-aida-the-artificial-intelligence-and-data"
echo "   Article 56: Canada's AIDA – The Artificial Intelligence and Data Act"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-56-canadas-aida-the-artificial-intelligence-and-data" --verbose
echo ""

echo "📄 Processing 6/10: article-57-us-state-ai-laws-the-patchwork-approach"
echo "   Article 57: US State AI Laws – The Patchwork Approach"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-57-us-state-ai-laws-the-patchwork-approach" --verbose
echo ""

echo "📄 Processing 7/10: article-58-colorado-ai-act-consumer-protection-for-algorithm"
echo "   Article 58: Colorado AI Act – Consumer Protection for Algorithmic Decisions"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-58-colorado-ai-act-consumer-protection-for-algorithm" --verbose
echo ""

echo "📄 Processing 8/10: article-59-nyc-local-law-144-automated-employment-decision-t"
echo "   Article 59: NYC Local Law 144 – Automated Employment Decision Tools"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-59-nyc-local-law-144-automated-employment-decision-t" --verbose
echo ""

echo "📄 Processing 9/10: article-60-california-ai-regulations-the-golden-states-appro"
echo "   Article 60: California AI Regulations – The Golden State's Approach"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-60-california-ai-regulations-the-golden-states-appro" --verbose
echo ""

echo "📄 Processing 10/10: article-61-chinas-ai-governance-a-different-model"
echo "   Article 61: China's AI Governance – A Different Model"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-61-chinas-ai-governance-a-different-model" --verbose
echo ""

