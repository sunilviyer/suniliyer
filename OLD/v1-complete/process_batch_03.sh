#!/bin/bash

# Process Batch 3/17
# Articles 21 to 30
# 10 articles in this batch

set -e

echo "📦 Processing Batch 3/17 (10 articles)"
echo ""

echo "📄 Processing 1/10: article-117-ai-audit-planning-scope-criteria-and-methodology"
echo "   Article 117: AI Audit Planning – Scope, Criteria, and Methodology"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-117-ai-audit-planning-scope-criteria-and-methodology" --verbose
echo ""

echo "📄 Processing 2/10: article-118-ai-audit-evidence-what-to-collect-and-analyze"
echo "   Article 118: AI Audit Evidence – What to Collect and Analyze"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-118-ai-audit-evidence-what-to-collect-and-analyze" --verbose
echo ""

echo "📄 Processing 3/10: article-119-ai-audit-findings-writing-effective-reports"
echo "   Article 119: AI Audit Findings – Writing Effective Reports"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-119-ai-audit-findings-writing-effective-reports" --verbose
echo ""

echo "📄 Processing 4/10: article-120-internal-ai-audits-building-capability-in-house"
echo "   Article 120: Internal AI Audits – Building Capability In-House"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-120-internal-ai-audits-building-capability-in-house" --verbose
echo ""

echo "📄 Processing 5/10: article-121-external-ai-audits-when-and-why-to-bring-in-expe"
echo "   Article 121: External AI Audits – When and Why to Bring in Experts"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-121-external-ai-audits-when-and-why-to-bring-in-expe" --verbose
echo ""

echo "📄 Processing 6/10: article-122-algorithmic-auditing-technical-assessment-method"
echo "   Article 122: Algorithmic Auditing – Technical Assessment Methods"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-122-algorithmic-auditing-technical-assessment-method" --verbose
echo ""

echo "📄 Processing 7/10: article-123-ai-conformity-assessment-meeting-eu-ai-act-requi"
echo "   Article 123: AI Conformity Assessment – Meeting EU AI Act Requirements"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-123-ai-conformity-assessment-meeting-eu-ai-act-requi" --verbose
echo ""

echo "📄 Processing 8/10: article-124-continuous-ai-monitoring-beyond-point-in-time-au"
echo "   Article 124: Continuous AI Monitoring – Beyond Point-in-Time Audits"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-124-continuous-ai-monitoring-beyond-point-in-time-au" --verbose
echo ""

echo "📄 Processing 9/10: article-125-ai-audit-automation-tools-and-techniques"
echo "   Article 125: AI Audit Automation – Tools and Techniques"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-125-ai-audit-automation-tools-and-techniques" --verbose
echo ""

echo "📄 Processing 10/10: article-126-the-ai-auditor-profession-certifications-and-car"
echo "   Article 126: The AI Auditor Profession – Certifications and Career Paths"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-126-the-ai-auditor-profession-certifications-and-car" --verbose
echo ""

