#!/bin/bash

# Process Batch 15/17
# Articles 141 to 150
# 10 articles in this batch

set -e

echo "📦 Processing Batch 15/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: job-displacement-ai-and-the-future-of-work"
echo "   Job Displacement – AI and the Future of Work"
npx ts-node lib/article-processor/cli/consolidate.ts single "job-displacement-ai-and-the-future-of-work" --verbose
echo ""

echo "📄 Processing 2/10: autonomous-weapons-the-ai-arms-race"
echo "   Autonomous Weapons – The AI Arms Race"
npx ts-node lib/article-processor/cli/consolidate.ts single "autonomous-weapons-the-ai-arms-race" --verbose
echo ""

echo "📄 Processing 3/10: ai-safety-preventing-catastrophic-failures"
echo "   AI Safety – Preventing Catastrophic Failures"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-safety-preventing-catastrophic-failures" --verbose
echo ""

echo "📄 Processing 4/10: building-trustworthy-ai-the-seven-pillars"
echo "   Building Trustworthy AI – The Seven Pillars"
npx ts-node lib/article-processor/cli/consolidate.ts single "building-trustworthy-ai-the-seven-pillars" --verbose
echo ""

echo "📄 Processing 5/10: human-centered-ai-design-keeping-people-in-the-loop"
echo "   Human-Centered AI Design – Keeping People in the Loop"
npx ts-node lib/article-processor/cli/consolidate.ts single "human-centered-ai-design-keeping-people-in-the-loop" --verbose
echo ""

echo "📄 Processing 6/10: fairness-in-ai-definitions-metrics-and-trade-offs"
echo "   Fairness in AI – Definitions, Metrics, and Trade-offs"
npx ts-node lib/article-processor/cli/consolidate.ts single "fairness-in-ai-definitions-metrics-and-trade-offs" --verbose
echo ""

echo "📄 Processing 7/10: ai-transparency-what-users-deserve-to-know"
echo "   AI Transparency – What Users Deserve to Know"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-transparency-what-users-deserve-to-know" --verbose
echo ""

echo "📄 Processing 8/10: ai-accountability-who-is-responsible-when-ai-causes-harm"
echo "   AI Accountability – Who Is Responsible When AI Causes Harm"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-accountability-who-is-responsible-when-ai-causes-harm" --verbose
echo ""

echo "📄 Processing 9/10: ai-governance-frameworks-building-your-organizations-approac"
echo "   AI Governance Frameworks – Building Your Organization's Approach"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-governance-frameworks-building-your-organizations-approac" --verbose
echo ""

echo "📄 Processing 10/10: the-ai-audit-how-to-evaluate-ai-systems"
echo "   The AI Audit – How to Evaluate AI Systems"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-ai-audit-how-to-evaluate-ai-systems" --verbose
echo ""

