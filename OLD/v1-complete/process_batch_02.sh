#!/bin/bash

# Process Batch 2/17
# Articles 11 to 20
# 10 articles in this batch

set -e

echo "📦 Processing Batch 2/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-107-ai-procurement-contract-terms-and-due-diligence"
echo "   Article 107: AI Procurement – Contract Terms and Due Diligence"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-107-ai-procurement-contract-terms-and-due-diligence" --verbose
echo ""

echo "📄 Processing 2/10: article-108-ai-training-programs-building-organizational-cap"
echo "   Article 108: AI Training Programs – Building Organizational Capability"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-108-ai-training-programs-building-organizational-cap" --verbose
echo ""

echo "📄 Processing 3/10: article-109-ai-governance-metrics-measuring-what-matters"
echo "   Article 109: AI Governance Metrics – Measuring What Matters"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-109-ai-governance-metrics-measuring-what-matters" --verbose
echo ""

echo "📄 Processing 4/10: article-110-stakeholder-engagement-building-trust-through-tr"
echo "   Article 110: Stakeholder Engagement – Building Trust Through Transparency"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-110-stakeholder-engagement-building-trust-through-tr" --verbose
echo ""

echo "📄 Processing 5/10: article-111-ai-communications-disclosure-notification-and-co"
echo "   Article 111: AI Communications – Disclosure, Notification, and Consent"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-111-ai-communications-disclosure-notification-and-co" --verbose
echo ""

echo "📄 Processing 6/10: article-112-integrating-ai-risk-security-privacy-and-enterpr"
echo "   Article 112: Integrating AI Risk – Security, Privacy, and Enterprise Risk"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-112-integrating-ai-risk-security-privacy-and-enterpr" --verbose
echo ""

echo "📄 Processing 7/10: article-113-the-three-lines-model-for-ai-defense-in-depth"
echo "   Article 113: The Three Lines Model for AI – Defense in Depth"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-113-the-three-lines-model-for-ai-defense-in-depth" --verbose
echo ""

echo "📄 Processing 8/10: article-114-ai-governance-tools-software-and-platforms"
echo "   Article 114: AI Governance Tools – Software and Platforms"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-114-ai-governance-tools-software-and-platforms" --verbose
echo ""

echo "📄 Processing 9/10: article-115-scaling-ai-governance-from-pilot-to-enterprise-w"
echo "   Article 115: Scaling AI Governance – From Pilot to Enterprise-Wide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-115-scaling-ai-governance-from-pilot-to-enterprise-w" --verbose
echo ""

echo "📄 Processing 10/10: article-116-ai-auditing-fundamentals-what-why-and-how"
echo "   Article 116: AI Auditing Fundamentals – What, Why, and How"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-116-ai-auditing-fundamentals-what-why-and-how" --verbose
echo ""

