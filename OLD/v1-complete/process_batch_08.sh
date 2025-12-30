#!/bin/bash

# Process Batch 8/17
# Articles 71 to 80
# 10 articles in this batch

set -e

echo "📦 Processing Batch 8/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-62-singapores-ai-framework-the-business-friendly-app"
echo "   Article 62: Singapore's AI Framework – The Business-Friendly Approach"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-62-singapores-ai-framework-the-business-friendly-app" --verbose
echo ""

echo "📄 Processing 2/10: article-63-brazils-ai-bill-regulation-in-latin-america"
echo "   Article 63: Brazil's AI Bill – Regulation in Latin America"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-63-brazils-ai-bill-regulation-in-latin-america" --verbose
echo ""

echo "📄 Processing 3/10: article-64-uk-ai-regulation-the-pro-innovation-framework"
echo "   Article 64: UK AI Regulation – The Pro-Innovation Framework"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-64-uk-ai-regulation-the-pro-innovation-framework" --verbose
echo ""

echo "📄 Processing 4/10: article-65-global-ai-law-tracker-whos-regulating-what"
echo "   Article 65: Global AI Law Tracker – Who's Regulating What"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-65-global-ai-law-tracker-whos-regulating-what" --verbose
echo ""

echo "📄 Processing 5/10: article-66-ai-regulatory-sandboxes-testing-innovation-safely"
echo "   Article 66: AI Regulatory Sandboxes – Testing Innovation Safely"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-66-ai-regulatory-sandboxes-testing-innovation-safely" --verbose
echo ""

echo "📄 Processing 6/10: article-67-cross-border-ai-compliance-navigating-multiple-ju"
echo "   Article 67: Cross-Border AI Compliance – Navigating Multiple Jurisdictions"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-67-cross-border-ai-compliance-navigating-multiple-ju" --verbose
echo ""

echo "📄 Processing 7/10: article-68-nist-ai-risk-management-framework-the-complete-gu"
echo "   Article 68: NIST AI Risk Management Framework – The Complete Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-68-nist-ai-risk-management-framework-the-complete-gu" --verbose
echo ""

echo "📄 Processing 8/10: article-69-nist-ai-rmf-core-functions-govern-map-measure-man"
echo "   Article 69: NIST AI RMF Core Functions – Govern, Map, Measure, Manage"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-69-nist-ai-rmf-core-functions-govern-map-measure-man" --verbose
echo ""

echo "📄 Processing 9/10: article-70-isoiec-42001-the-ai-management-system-standard"
echo "   Article 70: ISO/IEC 42001 – The AI Management System Standard"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-70-isoiec-42001-the-ai-management-system-standard" --verbose
echo ""

echo "📄 Processing 10/10: article-71-iso-31000-for-ai-applying-risk-management-princip"
echo "   Article 71: ISO 31000 for AI – Applying Risk Management Principles"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-71-iso-31000-for-ai-applying-risk-management-princip" --verbose
echo ""

