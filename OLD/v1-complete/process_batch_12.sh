#!/bin/bash

# Process Batch 12/17
# Articles 111 to 120
# 10 articles in this batch

set -e

echo "📦 Processing Batch 12/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: how-machines-learn-training-methods-and-automation-explained"
echo "   How Machines Learn — Training Methods and Automation Explained"
npx ts-node lib/article-processor/cli/consolidate.ts single "how-machines-learn-training-methods-and-automation-explained" --verbose
echo ""

echo "📄 Processing 2/10: the-ai-technology-stack-explained"
echo "   The AI Technology Stack Explained"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-ai-technology-stack-explained" --verbose
echo ""

echo "📄 Processing 3/10: article-5-strong-vs-weak-ai-why-the-difference-matters-for-g"
echo "   Article 5: Strong vs. Weak AI – Why the Difference Matters for Governance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-5-strong-vs-weak-ai-why-the-difference-matters-for-g" --verbose
echo ""

echo "📄 Processing 4/10: article-7-deep-learning-decoded-neural-networks-for-non-engi"
echo "   Article 7: Deep Learning Decoded – Neural Networks for Non-Engineers"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-7-deep-learning-decoded-neural-networks-for-non-engi" --verbose
echo ""

echo "📄 Processing 5/10: article-8-generative-ai-explained-how-chatgpt-dall-e-and-cla"
echo "   Article 8: Generative AI Explained – How ChatGPT, DALL-E, and Claude Work"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-8-generative-ai-explained-how-chatgpt-dall-e-and-cla" --verbose
echo ""

echo "📄 Processing 6/10: article-9-large-language-models-the-technology-behind-the-hy"
echo "   Article 9: Large Language Models – The Technology Behind the Hype"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-9-large-language-models-the-technology-behind-the-hy" --verbose
echo ""

echo "📄 Processing 7/10: article-10-the-ai-technology-stack-from-chips-to-application"
echo "   Article 10: The AI Technology Stack – From Chips to Applications"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-10-the-ai-technology-stack-from-chips-to-application" --verbose
echo ""

echo "📄 Processing 8/10: article-10-ai-vs-automation-understanding-the-distinction"
echo "   Article 10: AI vs. Automation – Understanding the Distinction"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-10-ai-vs-automation-understanding-the-distinction" --verbose
echo ""

echo "📄 Processing 9/10: article-11-the-data-behind-ai-why-training-data-determines-e"
echo "   Article 11: The Data Behind AI – Why Training Data Determines Everything"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-11-the-data-behind-ai-why-training-data-determines-e" --verbose
echo ""

echo "📄 Processing 10/10: article-12-foundation-models-the-new-building-blocks-of-ai"
echo "   Article 12: Foundation Models – The New Building Blocks of AI"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-12-foundation-models-the-new-building-blocks-of-ai" --verbose
echo ""

