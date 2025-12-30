#!/bin/bash

# Process Batch 13/17
# Articles 121 to 130
# 10 articles in this batch

set -e

echo "📦 Processing Batch 13/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-13-multimodal-ai-when-machines-see-hear-and-speak"
echo "   Article 13: Multimodal AI – When Machines See, Hear, and Speak"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-13-multimodal-ai-when-machines-see-hear-and-speak" --verbose
echo ""

echo "📄 Processing 2/10: article-14-ai-compute-why-gpus-rule-the-ai-world"
echo "   Article 14: AI Compute – Why GPUs Rule the AI World"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-14-ai-compute-why-gpus-rule-the-ai-world" --verbose
echo ""

echo "📄 Processing 3/10: article-15-the-environmental-cost-of-ai-data-centers-energy-"
echo "   Article 15: The Environmental Cost of AI – Data Centers, Energy, and Sustainability"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-15-the-environmental-cost-of-ai-data-centers-energy-" --verbose
echo ""

echo "📄 Processing 4/10: article-149-how-to-write-an-ai-policy-a-template-based-guide"
echo "   Article 149: How to Write an AI Policy — A Template-Based Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-149-how-to-write-an-ai-policy-a-template-based-guide" --verbose
echo ""

echo "📄 Processing 5/10: article-150-how-to-conduct-an-ai-impact-assessment-step-by-s"
echo "   Article 150: How to Conduct an AI Impact Assessment — Step by Step"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-150-how-to-conduct-an-ai-impact-assessment-step-by-s" --verbose
echo ""

echo "📄 Processing 6/10: article-151-how-to-build-a-model-card-documentation-best-pra"
echo "   Article 151: How to Build a Model Card — Documentation Best Practices"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-151-how-to-build-a-model-card-documentation-best-pra" --verbose
echo ""

echo "📄 Processing 7/10: article-152-how-to-perform-a-bias-audit-methodology-and-tool"
echo "   Article 152: How to Perform a Bias Audit — Methodology and Tools"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-152-how-to-perform-a-bias-audit-methodology-and-tool" --verbose
echo ""

echo "📄 Processing 8/10: article-153-how-to-create-an-ai-ethics-review-process"
echo "   Article 153: How to Create an AI Ethics Review Process"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-153-how-to-create-an-ai-ethics-review-process" --verbose
echo ""

echo "📄 Processing 9/10: article-154-how-to-respond-to-an-ai-incident-playbook-and-ch"
echo "   Article 154: How to Respond to an AI Incident — Playbook and Checklist"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-154-how-to-respond-to-an-ai-incident-playbook-and-ch" --verbose
echo ""

echo "📄 Processing 10/10: article-155-how-to-evaluate-ai-vendors-due-diligence-framewo"
echo "   Article 155: How to Evaluate AI Vendors — Due Diligence Framework"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-155-how-to-evaluate-ai-vendors-due-diligence-framewo" --verbose
echo ""

