#!/bin/bash

# Process Batch 9/17
# Articles 81 to 90
# 10 articles in this batch

set -e

echo "📦 Processing Batch 9/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-72-ieee-7000-ethical-design-for-ai-systems"
echo "   Article 72: IEEE 7000 – Ethical Design for AI Systems"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-72-ieee-7000-ethical-design-for-ai-systems" --verbose
echo ""

echo "📄 Processing 2/10: article-73-the-singapore-model-ai-governance-framework-pract"
echo "   Article 73: The Singapore Model AI Governance Framework – Practical Implementation"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-73-the-singapore-model-ai-governance-framework-pract" --verbose
echo ""

echo "📄 Processing 3/10: article-74-algorithmic-impact-assessments-a-step-by-step-gui"
echo "   Article 74: Algorithmic Impact Assessments – A Step-by-Step Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-74-algorithmic-impact-assessments-a-step-by-step-gui" --verbose
echo ""

echo "📄 Processing 4/10: article-75-ai-risk-assessment-templates-tools-for-practition"
echo "   Article 75: AI Risk Assessment Templates – Tools for Practitioners"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-75-ai-risk-assessment-templates-tools-for-practition" --verbose
echo ""

echo "📄 Processing 5/10: article-76-mapping-frameworks-to-regulations-a-compliance-cr"
echo "   Article 76: Mapping Frameworks to Regulations – A Compliance Crosswalk"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-76-mapping-frameworks-to-regulations-a-compliance-cr" --verbose
echo ""

echo "📄 Processing 6/10: article-77-building-an-ai-risk-register-what-to-track-and-wh"
echo "   Article 77: Building an AI Risk Register – What to Track and Why"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-77-building-an-ai-risk-register-what-to-track-and-wh" --verbose
echo ""

echo "📄 Processing 7/10: article-78-ai-maturity-models-assessing-your-organizations-r"
echo "   Article 78: AI Maturity Models – Assessing Your Organization's Readiness"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-78-ai-maturity-models-assessing-your-organizations-r" --verbose
echo ""

echo "📄 Processing 8/10: article-79-before-you-build-ai-system-planning-essentials"
echo "   Article 79: Before You Build – AI System Planning Essentials"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-79-before-you-build-ai-system-planning-essentials" --verbose
echo ""

echo "📄 Processing 9/10: article-80-the-ai-business-case-roi-risks-and-reality-checks"
echo "   Article 80: The AI Business Case – ROI, Risks, and Reality Checks"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-80-the-ai-business-case-roi-risks-and-reality-checks" --verbose
echo ""

echo "📄 Processing 10/10: article-81-ai-project-scoping-defining-success-criteria"
echo "   Article 81: AI Project Scoping – Defining Success Criteria"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-81-ai-project-scoping-defining-success-criteria" --verbose
echo ""

