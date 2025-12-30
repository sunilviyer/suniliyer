#!/bin/bash

# Process Other
# 7 articles

set -e

echo "📚 Processing Other (7 articles)"
echo ""

echo "📄 Processing 1/7: article-127-artificial-general-intelligence-hype-hope-and-go"
echo "   Article 127: Artificial General Intelligence – Hype, Hope, and Governance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-127-artificial-general-intelligence-hype-hope-and-go" --verbose
echo ""

echo "📄 Processing 2/7: article-129-ai-and-national-security-the-geopolitical-dimens"
echo "   Article 129: AI and National Security – The Geopolitical Dimension"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-129-ai-and-national-security-the-geopolitical-dimens" --verbose
echo ""

echo "📄 Processing 3/7: article-130-ai-concentration-of-power-big-tech-and-the-ai-ol"
echo "   Article 130: AI Concentration of Power – Big Tech and the AI Oligopoly"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-130-ai-concentration-of-power-big-tech-and-the-ai-ol" --verbose
echo ""

echo "📄 Processing 4/7: article-135-ai-consciousness-philosophical-and-practical-imp"
echo "   Article 135: AI Consciousness – Philosophical and Practical Implications"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-135-ai-consciousness-philosophical-and-practical-imp" --verbose
echo ""

echo "📄 Processing 5/7: article-152-ai-in-innovation-potential-ideas-and-future-appl"
echo "   Article 152: AI in Innovation – Potential Ideas and Future Applications"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-152-ai-in-innovation-potential-ideas-and-future-appl" --verbose
echo ""

echo "📄 Processing 6/7: job-displacement-ai-and-the-future-of-work"
echo "   Job Displacement – AI and the Future of Work"
npx ts-node lib/article-processor/cli/consolidate.ts single "job-displacement-ai-and-the-future-of-work" --verbose
echo ""

echo "📄 Processing 7/7: autonomous-weapons-the-ai-arms-race"
echo "   Autonomous Weapons – The AI Arms Race"
npx ts-node lib/article-processor/cli/consolidate.ts single "autonomous-weapons-the-ai-arms-race" --verbose
echo ""

