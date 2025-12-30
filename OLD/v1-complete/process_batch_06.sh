#!/bin/bash

# Process Batch 6/17
# Articles 51 to 60
# 10 articles in this batch

set -e

echo "📦 Processing Batch 6/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-147-ai-in-autonomous-vehicles-safety-liability-and-r"
echo "   Article 147: AI in Autonomous Vehicles – Safety, Liability, and Regulation"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-147-ai-in-autonomous-vehicles-safety-liability-and-r" --verbose
echo ""

echo "📄 Processing 2/10: article-148-ai-in-content-moderation-platforms-and-free-spee"
echo "   Article 148: AI in Content Moderation – Platforms and Free Speech"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-148-ai-in-content-moderation-platforms-and-free-spee" --verbose
echo ""

echo "📄 Processing 3/10: article-149-ai-in-media-disney-handing-over-characters-to-op"
echo "   Article 149: AI in Media – Disney Handing Over Characters to OpenAI"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-149-ai-in-media-disney-handing-over-characters-to-op" --verbose
echo ""

echo "📄 Processing 4/10: article-150-ai-in-fraud-detection-financial-crime-and-insura"
echo "   Article 150: AI in Fraud Detection – Financial Crime and Insurance Fraud"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-150-ai-in-fraud-detection-financial-crime-and-insura" --verbose
echo ""

echo "📄 Processing 5/10: article-151-ai-in-advertising-user-information-concerns"
echo "   Article 151: AI in Advertising – User Information Concerns"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-151-ai-in-advertising-user-information-concerns" --verbose
echo ""

echo "📄 Processing 6/10: article-152-ai-in-innovation-potential-ideas-and-future-appl"
echo "   Article 152: AI in Innovation – Potential Ideas and Future Applications"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-152-ai-in-innovation-potential-ideas-and-future-appl" --verbose
echo ""

echo "📄 Processing 7/10: article-153-ai-as-therapist-and-support-tool-risks-pitfalls-"
echo "   Article 153: AI as Therapist and Support Tool – Risks, Pitfalls, and Challenges"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-153-ai-as-therapist-and-support-tool-risks-pitfalls-" --verbose
echo ""

echo "📄 Processing 8/10: responsibility-of-responsible-ai-for-organizations"
echo "   Responsibility of Responsible AI for Organizations"
npx ts-node lib/article-processor/cli/consolidate.ts single "responsibility-of-responsible-ai-for-organizations" --verbose
echo ""

echo "📄 Processing 9/10: article-title"
echo "   Article Title"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-title" --verbose
echo ""

echo "📄 Processing 10/10: article-51-the-eu-ai-act-europes-landmark-regulation-explain"
echo "   Article 51: The EU AI Act – Europe's Landmark Regulation Explained"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-51-the-eu-ai-act-europes-landmark-regulation-explain" --verbose
echo ""

