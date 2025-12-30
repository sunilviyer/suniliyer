#!/bin/bash

# Process Batch 5/17
# Articles 41 to 50
# 10 articles in this batch

set -e

echo "📦 Processing Batch 5/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-137-ai-governance-careers-building-your-professional"
echo "   Article 137: AI Governance Careers – Building Your Professional Path"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-137-ai-governance-careers-building-your-professional" --verbose
echo ""

echo "📄 Processing 2/10: article-138-becoming-an-ai-governance-leader-skills-for-the-"
echo "   Article 138: Becoming an AI Governance Leader – Skills for the Future"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-138-becoming-an-ai-governance-leader-skills-for-the-" --verbose
echo ""

echo "📄 Processing 3/10: article-139-ai-in-healthcare-regulatory-landscape-and-best-p"
echo "   Article 139: AI in Healthcare – Regulatory Landscape and Best Practices"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-139-ai-in-healthcare-regulatory-landscape-and-best-p" --verbose
echo ""

echo "📄 Processing 4/10: article-140-ai-in-financial-services-compliance-and-risk-man"
echo "   Article 140: AI in Financial Services – Compliance and Risk Management"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-140-ai-in-financial-services-compliance-and-risk-man" --verbose
echo ""

echo "📄 Processing 5/10: article-141-ai-in-insurance-fairness-pricing-and-claims"
echo "   Article 141: AI in Insurance – Fairness, Pricing, and Claims"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-141-ai-in-insurance-fairness-pricing-and-claims" --verbose
echo ""

echo "📄 Processing 6/10: article-142-ai-in-human-resources-hiring-performance-and-ret"
echo "   Article 142: AI in Human Resources – Hiring, Performance, and Retention"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-142-ai-in-human-resources-hiring-performance-and-ret" --verbose
echo ""

echo "📄 Processing 7/10: article-143-ai-in-marketing-personalization-and-privacy"
echo "   Article 143: AI in Marketing – Personalization and Privacy"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-143-ai-in-marketing-personalization-and-privacy" --verbose
echo ""

echo "📄 Processing 8/10: article-144-ai-in-education-opportunities-and-ethical-concer"
echo "   Article 144: AI in Education – Opportunities and Ethical Concerns"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-144-ai-in-education-opportunities-and-ethical-concer" --verbose
echo ""

echo "📄 Processing 9/10: article-145-ai-in-criminal-justice-risk-assessment-and-civil"
echo "   Article 145: AI in Criminal Justice – Risk Assessment and Civil Liberties"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-145-ai-in-criminal-justice-risk-assessment-and-civil" --verbose
echo ""

echo "📄 Processing 10/10: article-146-ai-in-government-public-sector-implementation"
echo "   Article 146: AI in Government – Public Sector Implementation"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-146-ai-in-government-public-sector-implementation" --verbose
echo ""

