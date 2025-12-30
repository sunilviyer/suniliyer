#!/bin/bash

# Process Batch 4/17
# Articles 31 to 40
# 10 articles in this batch

set -e

echo "📦 Processing Batch 4/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-127-artificial-general-intelligence-hype-hope-and-go"
echo "   Article 127: Artificial General Intelligence – Hype, Hope, and Governance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-127-artificial-general-intelligence-hype-hope-and-go" --verbose
echo ""

echo "📄 Processing 2/10: article-128-ai-existential-risk-separating-signal-from-noise"
echo "   Article 128: AI Existential Risk – Separating Signal from Noise"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-128-ai-existential-risk-separating-signal-from-noise" --verbose
echo ""

echo "📄 Processing 3/10: article-129-ai-and-national-security-the-geopolitical-dimens"
echo "   Article 129: AI and National Security – The Geopolitical Dimension"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-129-ai-and-national-security-the-geopolitical-dimens" --verbose
echo ""

echo "📄 Processing 4/10: article-130-ai-concentration-of-power-big-tech-and-the-ai-ol"
echo "   Article 130: AI Concentration of Power – Big Tech and the AI Oligopoly"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-130-ai-concentration-of-power-big-tech-and-the-ai-ol" --verbose
echo ""

echo "📄 Processing 5/10: article-131-open-source-ai-benefits-risks-and-governance"
echo "   Article 131: Open Source AI – Benefits, Risks, and Governance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-131-open-source-ai-benefits-risks-and-governance" --verbose
echo ""

echo "📄 Processing 6/10: article-132-ai-and-copyright-the-unresolved-legal-questions"
echo "   Article 132: AI and Copyright – The Unresolved Legal Questions"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-132-ai-and-copyright-the-unresolved-legal-questions" --verbose
echo ""

echo "📄 Processing 7/10: article-133-ai-generated-content-authenticity-and-attributio"
echo "   Article 133: AI-Generated Content – Authenticity and Attribution"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-133-ai-generated-content-authenticity-and-attributio" --verbose
echo ""

echo "📄 Processing 8/10: article-134-ai-and-elections-protecting-democratic-processes"
echo "   Article 134: AI and Elections – Protecting Democratic Processes"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-134-ai-and-elections-protecting-democratic-processes" --verbose
echo ""

echo "📄 Processing 9/10: article-135-ai-consciousness-philosophical-and-practical-imp"
echo "   Article 135: AI Consciousness – Philosophical and Practical Implications"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-135-ai-consciousness-philosophical-and-practical-imp" --verbose
echo ""

echo "📄 Processing 10/10: article-136-the-future-of-ai-regulation-whats-coming-next"
echo "   Article 136: The Future of AI Regulation – What's Coming Next"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-136-the-future-of-ai-regulation-whats-coming-next" --verbose
echo ""

