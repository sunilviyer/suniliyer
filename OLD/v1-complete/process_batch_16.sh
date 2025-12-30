#!/bin/bash

# Process Batch 16/17
# Articles 151 to 160
# 10 articles in this batch

set -e

echo "📦 Processing Batch 16/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: regulatory-landscape-global-ai-laws-and-standards"
echo "   Regulatory Landscape – Global AI Laws and Standards"
npx ts-node lib/article-processor/cli/consolidate.ts single "regulatory-landscape-global-ai-laws-and-standards" --verbose
echo ""

echo "📄 Processing 2/10: preparing-for-ai-regulation-a-compliance-roadmap"
echo "   Preparing for AI Regulation – A Compliance Roadmap"
npx ts-node lib/article-processor/cli/consolidate.ts single "preparing-for-ai-regulation-a-compliance-roadmap" --verbose
echo ""

echo "📄 Processing 3/10: the-future-of-ai-ethics-emerging-challenges-and-opportunitie"
echo "   The Future of AI Ethics – Emerging Challenges and Opportunities"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-future-of-ai-ethics-emerging-challenges-and-opportunitie" --verbose
echo ""

echo "📄 Processing 4/10: article-36-the-legal-patchwork-existing-laws-that-apply-to-a"
echo "   Article 36: The Legal Patchwork – Existing Laws That Apply to AI"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-36-the-legal-patchwork-existing-laws-that-apply-to-a" --verbose
echo ""

echo "📄 Processing 5/10: article-37-consumer-protection-and-ai-ftc-section-5-explaine"
echo "   Article 37: Consumer Protection and AI – FTC Section 5 Explained"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-37-consumer-protection-and-ai-ftc-section-5-explaine" --verbose
echo ""

echo "📄 Processing 6/10: article-38-anti-discrimination-laws-and-ai-civil-rights-in-t"
echo "   Article 38: Anti-Discrimination Laws and AI – Civil Rights in the Algorithm Age"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-38-anti-discrimination-laws-and-ai-civil-rights-in-t" --verbose
echo ""

echo "📄 Processing 7/10: article-39-ai-and-employment-law-hiring-algorithms-under-scr"
echo "   Article 39: AI and Employment Law – Hiring Algorithms Under Scrutiny"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-39-ai-and-employment-law-hiring-algorithms-under-scr" --verbose
echo ""

echo "📄 Processing 8/10: article-40-product-liability-for-ai-when-software-causes-har"
echo "   Article 40: Product Liability for AI – When Software Causes Harm"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-40-product-liability-for-ai-when-software-causes-har" --verbose
echo ""

echo "📄 Processing 9/10: article-41-ai-and-intellectual-property-copyright-patents-an"
echo "   Article 41: AI and Intellectual Property – Copyright, Patents, and Training Data"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-41-ai-and-intellectual-property-copyright-patents-an" --verbose
echo ""

echo "📄 Processing 10/10: article-42-gdpr-meets-ai-europes-privacy-framework-applied"
echo "   Article 42: GDPR Meets AI – Europe's Privacy Framework Applied"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-42-gdpr-meets-ai-europes-privacy-framework-applied" --verbose
echo ""

