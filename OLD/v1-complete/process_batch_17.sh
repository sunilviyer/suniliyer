#!/bin/bash

# Process Batch 17/17
# Articles 161 to 168
# 8 articles in this batch

set -e

echo "📦 Processing Batch 17/17 (8 articles)"
echo ""

echo "📄 Processing 1/8: article-43-automated-decision-making-understanding-gdpr-arti"
echo "   Article 43: Automated Decision-Making – Understanding GDPR Article 22"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-43-automated-decision-making-understanding-gdpr-arti" --verbose
echo ""

echo "📄 Processing 2/8: article-44-data-protection-impact-assessments-the-ai-dpia-gu"
echo "   Article 44: Data Protection Impact Assessments – The AI DPIA Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-44-data-protection-impact-assessments-the-ai-dpia-gu" --verbose
echo ""

echo "📄 Processing 3/8: article-45-the-right-to-explanation-what-gdpr-actually-requi"
echo "   Article 45: The Right to Explanation – What GDPR Actually Requires"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-45-the-right-to-explanation-what-gdpr-actually-requi" --verbose
echo ""

echo "📄 Processing 4/8: article-46-ai-and-hipaa-healthcare-privacy-implications"
echo "   Article 46: AI and HIPAA – Healthcare Privacy Implications"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-46-ai-and-hipaa-healthcare-privacy-implications" --verbose
echo ""

echo "📄 Processing 5/8: article-47-financial-services-ai-regulatory-requirements-exp"
echo "   Article 47: Financial Services AI – Regulatory Requirements Explained"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-47-financial-services-ai-regulatory-requirements-exp" --verbose
echo ""

echo "📄 Processing 6/8: article-48-ai-in-insurance-fairness-and-discrimination-conce"
echo "   Article 48: AI in Insurance – Fairness and Discrimination Concerns"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-48-ai-in-insurance-fairness-and-discrimination-conce" --verbose
echo ""

echo "📄 Processing 7/8: article-49-who-pays-when-ai-fails-the-liability-reform-debat"
echo "   Article 49: Who Pays When AI Fails? – The Liability Reform Debate"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-49-who-pays-when-ai-fails-the-liability-reform-debat" --verbose
echo ""

echo "📄 Processing 8/8: article-50-the-eu-ai-liability-directive-shifting-the-burden"
echo "   Article 50: The EU AI Liability Directive – Shifting the Burden"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-50-the-eu-ai-liability-directive-shifting-the-burden" --verbose
echo ""

