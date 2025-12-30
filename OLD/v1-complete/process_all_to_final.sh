#!/bin/bash

# Process ALL articles to final directory
# Total: 168 articles
# Output: content/articles/final/

set -e  # Exit on any error

echo "🚀 Processing 168 articles to final directory..."
echo "📁 Output directory: content/articles/final/"
echo ""

echo "📄 Processing 1/168: article-title"
echo "   Title: Article Title"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-title" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-title"
else
  echo "❌ Failed: article-title"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 2/168: the-ai-family-tree-types-of-ai-systems"
echo "   Title: The AI Family Tree - Types of AI Systems"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-ai-family-tree-types-of-ai-systems" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: the-ai-family-tree-types-of-ai-systems"
else
  echo "❌ Failed: the-ai-family-tree-types-of-ai-systems"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 3/168: ai-history-from-dartmouth-to-deepmind"
echo "   Title: AI History — From Dartmouth to DeepMind"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-history-from-dartmouth-to-deepmind" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: ai-history-from-dartmouth-to-deepmind"
else
  echo "❌ Failed: ai-history-from-dartmouth-to-deepmind"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 4/168: article-100-model-maintenance-updates-retraining-and-retirem"
echo "   Title: Article 100: Model Maintenance – Updates, Retraining, and Retirement"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-100-model-maintenance-updates-retraining-and-retirem" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-100-model-maintenance-updates-retraining-and-retirem"
else
  echo "❌ Failed: article-100-model-maintenance-updates-retraining-and-retirem"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 5/168: article-101-building-the-ai-governance-function-where-to-sta"
echo "   Title: Article 101: Building the AI Governance Function – Where to Start"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-101-building-the-ai-governance-function-where-to-sta" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-101-building-the-ai-governance-function-where-to-sta"
else
  echo "❌ Failed: article-101-building-the-ai-governance-function-where-to-sta"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 6/168: article-102-ai-governance-roles-cpo-cao-and-the-responsible-"
echo "   Title: Article 102: AI Governance Roles – CPO, CAO, and the Responsible AI Office"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-102-ai-governance-roles-cpo-cao-and-the-responsible-" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-102-ai-governance-roles-cpo-cao-and-the-responsible-"
else
  echo "❌ Failed: article-102-ai-governance-roles-cpo-cao-and-the-responsible-"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 7/168: article-103-the-ai-ethics-board-structure-charter-and-effect"
echo "   Title: Article 103: The AI Ethics Board – Structure, Charter, and Effectiveness"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-103-the-ai-ethics-board-structure-charter-and-effect" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-103-the-ai-ethics-board-structure-charter-and-effect"
else
  echo "❌ Failed: article-103-the-ai-ethics-board-structure-charter-and-effect"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 8/168: article-104-ai-policy-development-templates-and-best-practic"
echo "   Title: Article 104: AI Policy Development – Templates and Best Practices"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-104-ai-policy-development-templates-and-best-practic" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-104-ai-policy-development-templates-and-best-practic"
else
  echo "❌ Failed: article-104-ai-policy-development-templates-and-best-practic"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 9/168: article-105-ai-inventory-management-knowing-what-you-have"
echo "   Title: Article 105: AI Inventory Management – Knowing What You Have"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-105-ai-inventory-management-knowing-what-you-have" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-105-ai-inventory-management-knowing-what-you-have"
else
  echo "❌ Failed: article-105-ai-inventory-management-knowing-what-you-have"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 10/168: article-106-third-party-ai-risk-vendor-assessment-and-manage"
echo "   Title: Article 106: Third-Party AI Risk – Vendor Assessment and Management"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-106-third-party-ai-risk-vendor-assessment-and-manage" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-106-third-party-ai-risk-vendor-assessment-and-manage"
else
  echo "❌ Failed: article-106-third-party-ai-risk-vendor-assessment-and-manage"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 11/168: article-107-ai-procurement-contract-terms-and-due-diligence"
echo "   Title: Article 107: AI Procurement – Contract Terms and Due Diligence"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-107-ai-procurement-contract-terms-and-due-diligence" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-107-ai-procurement-contract-terms-and-due-diligence"
else
  echo "❌ Failed: article-107-ai-procurement-contract-terms-and-due-diligence"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 12/168: article-108-ai-training-programs-building-organizational-cap"
echo "   Title: Article 108: AI Training Programs – Building Organizational Capability"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-108-ai-training-programs-building-organizational-cap" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-108-ai-training-programs-building-organizational-cap"
else
  echo "❌ Failed: article-108-ai-training-programs-building-organizational-cap"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 13/168: article-109-ai-governance-metrics-measuring-what-matters"
echo "   Title: Article 109: AI Governance Metrics – Measuring What Matters"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-109-ai-governance-metrics-measuring-what-matters" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-109-ai-governance-metrics-measuring-what-matters"
else
  echo "❌ Failed: article-109-ai-governance-metrics-measuring-what-matters"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 14/168: article-110-stakeholder-engagement-building-trust-through-tr"
echo "   Title: Article 110: Stakeholder Engagement – Building Trust Through Transparency"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-110-stakeholder-engagement-building-trust-through-tr" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-110-stakeholder-engagement-building-trust-through-tr"
else
  echo "❌ Failed: article-110-stakeholder-engagement-building-trust-through-tr"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 15/168: article-111-ai-communications-disclosure-notification-and-co"
echo "   Title: Article 111: AI Communications – Disclosure, Notification, and Consent"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-111-ai-communications-disclosure-notification-and-co" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-111-ai-communications-disclosure-notification-and-co"
else
  echo "❌ Failed: article-111-ai-communications-disclosure-notification-and-co"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 16/168: article-112-integrating-ai-risk-security-privacy-and-enterpr"
echo "   Title: Article 112: Integrating AI Risk – Security, Privacy, and Enterprise Risk"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-112-integrating-ai-risk-security-privacy-and-enterpr" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-112-integrating-ai-risk-security-privacy-and-enterpr"
else
  echo "❌ Failed: article-112-integrating-ai-risk-security-privacy-and-enterpr"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 17/168: article-113-the-three-lines-model-for-ai-defense-in-depth"
echo "   Title: Article 113: The Three Lines Model for AI – Defense in Depth"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-113-the-three-lines-model-for-ai-defense-in-depth" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-113-the-three-lines-model-for-ai-defense-in-depth"
else
  echo "❌ Failed: article-113-the-three-lines-model-for-ai-defense-in-depth"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 18/168: article-114-ai-governance-tools-software-and-platforms"
echo "   Title: Article 114: AI Governance Tools – Software and Platforms"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-114-ai-governance-tools-software-and-platforms" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-114-ai-governance-tools-software-and-platforms"
else
  echo "❌ Failed: article-114-ai-governance-tools-software-and-platforms"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 19/168: article-115-scaling-ai-governance-from-pilot-to-enterprise-w"
echo "   Title: Article 115: Scaling AI Governance – From Pilot to Enterprise-Wide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-115-scaling-ai-governance-from-pilot-to-enterprise-w" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-115-scaling-ai-governance-from-pilot-to-enterprise-w"
else
  echo "❌ Failed: article-115-scaling-ai-governance-from-pilot-to-enterprise-w"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 20/168: article-116-ai-auditing-fundamentals-what-why-and-how"
echo "   Title: Article 116: AI Auditing Fundamentals – What, Why, and How"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-116-ai-auditing-fundamentals-what-why-and-how" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-116-ai-auditing-fundamentals-what-why-and-how"
else
  echo "❌ Failed: article-116-ai-auditing-fundamentals-what-why-and-how"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 21/168: article-117-ai-audit-planning-scope-criteria-and-methodology"
echo "   Title: Article 117: AI Audit Planning – Scope, Criteria, and Methodology"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-117-ai-audit-planning-scope-criteria-and-methodology" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-117-ai-audit-planning-scope-criteria-and-methodology"
else
  echo "❌ Failed: article-117-ai-audit-planning-scope-criteria-and-methodology"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 22/168: article-118-ai-audit-evidence-what-to-collect-and-analyze"
echo "   Title: Article 118: AI Audit Evidence – What to Collect and Analyze"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-118-ai-audit-evidence-what-to-collect-and-analyze" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-118-ai-audit-evidence-what-to-collect-and-analyze"
else
  echo "❌ Failed: article-118-ai-audit-evidence-what-to-collect-and-analyze"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 23/168: article-119-ai-audit-findings-writing-effective-reports"
echo "   Title: Article 119: AI Audit Findings – Writing Effective Reports"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-119-ai-audit-findings-writing-effective-reports" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-119-ai-audit-findings-writing-effective-reports"
else
  echo "❌ Failed: article-119-ai-audit-findings-writing-effective-reports"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 24/168: article-120-internal-ai-audits-building-capability-in-house"
echo "   Title: Article 120: Internal AI Audits – Building Capability In-House"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-120-internal-ai-audits-building-capability-in-house" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-120-internal-ai-audits-building-capability-in-house"
else
  echo "❌ Failed: article-120-internal-ai-audits-building-capability-in-house"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 25/168: article-121-external-ai-audits-when-and-why-to-bring-in-expe"
echo "   Title: Article 121: External AI Audits – When and Why to Bring in Experts"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-121-external-ai-audits-when-and-why-to-bring-in-expe" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-121-external-ai-audits-when-and-why-to-bring-in-expe"
else
  echo "❌ Failed: article-121-external-ai-audits-when-and-why-to-bring-in-expe"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 26/168: article-122-algorithmic-auditing-technical-assessment-method"
echo "   Title: Article 122: Algorithmic Auditing – Technical Assessment Methods"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-122-algorithmic-auditing-technical-assessment-method" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-122-algorithmic-auditing-technical-assessment-method"
else
  echo "❌ Failed: article-122-algorithmic-auditing-technical-assessment-method"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 27/168: article-123-ai-conformity-assessment-meeting-eu-ai-act-requi"
echo "   Title: Article 123: AI Conformity Assessment – Meeting EU AI Act Requirements"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-123-ai-conformity-assessment-meeting-eu-ai-act-requi" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-123-ai-conformity-assessment-meeting-eu-ai-act-requi"
else
  echo "❌ Failed: article-123-ai-conformity-assessment-meeting-eu-ai-act-requi"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 28/168: article-124-continuous-ai-monitoring-beyond-point-in-time-au"
echo "   Title: Article 124: Continuous AI Monitoring – Beyond Point-in-Time Audits"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-124-continuous-ai-monitoring-beyond-point-in-time-au" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-124-continuous-ai-monitoring-beyond-point-in-time-au"
else
  echo "❌ Failed: article-124-continuous-ai-monitoring-beyond-point-in-time-au"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 29/168: article-125-ai-audit-automation-tools-and-techniques"
echo "   Title: Article 125: AI Audit Automation – Tools and Techniques"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-125-ai-audit-automation-tools-and-techniques" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-125-ai-audit-automation-tools-and-techniques"
else
  echo "❌ Failed: article-125-ai-audit-automation-tools-and-techniques"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 30/168: article-126-the-ai-auditor-profession-certifications-and-car"
echo "   Title: Article 126: The AI Auditor Profession – Certifications and Career Paths"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-126-the-ai-auditor-profession-certifications-and-car" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-126-the-ai-auditor-profession-certifications-and-car"
else
  echo "❌ Failed: article-126-the-ai-auditor-profession-certifications-and-car"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 31/168: article-127-artificial-general-intelligence-hype-hope-and-go"
echo "   Title: Article 127: Artificial General Intelligence – Hype, Hope, and Governance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-127-artificial-general-intelligence-hype-hope-and-go" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-127-artificial-general-intelligence-hype-hope-and-go"
else
  echo "❌ Failed: article-127-artificial-general-intelligence-hype-hope-and-go"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 32/168: article-128-ai-existential-risk-separating-signal-from-noise"
echo "   Title: Article 128: AI Existential Risk – Separating Signal from Noise"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-128-ai-existential-risk-separating-signal-from-noise" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-128-ai-existential-risk-separating-signal-from-noise"
else
  echo "❌ Failed: article-128-ai-existential-risk-separating-signal-from-noise"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 33/168: article-129-ai-and-national-security-the-geopolitical-dimens"
echo "   Title: Article 129: AI and National Security – The Geopolitical Dimension"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-129-ai-and-national-security-the-geopolitical-dimens" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-129-ai-and-national-security-the-geopolitical-dimens"
else
  echo "❌ Failed: article-129-ai-and-national-security-the-geopolitical-dimens"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 34/168: article-130-ai-concentration-of-power-big-tech-and-the-ai-ol"
echo "   Title: Article 130: AI Concentration of Power – Big Tech and the AI Oligopoly"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-130-ai-concentration-of-power-big-tech-and-the-ai-ol" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-130-ai-concentration-of-power-big-tech-and-the-ai-ol"
else
  echo "❌ Failed: article-130-ai-concentration-of-power-big-tech-and-the-ai-ol"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 35/168: article-131-open-source-ai-benefits-risks-and-governance"
echo "   Title: Article 131: Open Source AI – Benefits, Risks, and Governance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-131-open-source-ai-benefits-risks-and-governance" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-131-open-source-ai-benefits-risks-and-governance"
else
  echo "❌ Failed: article-131-open-source-ai-benefits-risks-and-governance"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 36/168: article-132-ai-and-copyright-the-unresolved-legal-questions"
echo "   Title: Article 132: AI and Copyright – The Unresolved Legal Questions"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-132-ai-and-copyright-the-unresolved-legal-questions" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-132-ai-and-copyright-the-unresolved-legal-questions"
else
  echo "❌ Failed: article-132-ai-and-copyright-the-unresolved-legal-questions"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 37/168: article-133-ai-generated-content-authenticity-and-attributio"
echo "   Title: Article 133: AI-Generated Content – Authenticity and Attribution"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-133-ai-generated-content-authenticity-and-attributio" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-133-ai-generated-content-authenticity-and-attributio"
else
  echo "❌ Failed: article-133-ai-generated-content-authenticity-and-attributio"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 38/168: article-134-ai-and-elections-protecting-democratic-processes"
echo "   Title: Article 134: AI and Elections – Protecting Democratic Processes"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-134-ai-and-elections-protecting-democratic-processes" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-134-ai-and-elections-protecting-democratic-processes"
else
  echo "❌ Failed: article-134-ai-and-elections-protecting-democratic-processes"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 39/168: article-135-ai-consciousness-philosophical-and-practical-imp"
echo "   Title: Article 135: AI Consciousness – Philosophical and Practical Implications"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-135-ai-consciousness-philosophical-and-practical-imp" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-135-ai-consciousness-philosophical-and-practical-imp"
else
  echo "❌ Failed: article-135-ai-consciousness-philosophical-and-practical-imp"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 40/168: article-136-the-future-of-ai-regulation-whats-coming-next"
echo "   Title: Article 136: The Future of AI Regulation – What's Coming Next"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-136-the-future-of-ai-regulation-whats-coming-next" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-136-the-future-of-ai-regulation-whats-coming-next"
else
  echo "❌ Failed: article-136-the-future-of-ai-regulation-whats-coming-next"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 41/168: article-137-ai-governance-careers-building-your-professional"
echo "   Title: Article 137: AI Governance Careers – Building Your Professional Path"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-137-ai-governance-careers-building-your-professional" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-137-ai-governance-careers-building-your-professional"
else
  echo "❌ Failed: article-137-ai-governance-careers-building-your-professional"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 42/168: article-138-becoming-an-ai-governance-leader-skills-for-the-"
echo "   Title: Article 138: Becoming an AI Governance Leader – Skills for the Future"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-138-becoming-an-ai-governance-leader-skills-for-the-" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-138-becoming-an-ai-governance-leader-skills-for-the-"
else
  echo "❌ Failed: article-138-becoming-an-ai-governance-leader-skills-for-the-"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 43/168: article-139-ai-in-healthcare-regulatory-landscape-and-best-p"
echo "   Title: Article 139: AI in Healthcare – Regulatory Landscape and Best Practices"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-139-ai-in-healthcare-regulatory-landscape-and-best-p" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-139-ai-in-healthcare-regulatory-landscape-and-best-p"
else
  echo "❌ Failed: article-139-ai-in-healthcare-regulatory-landscape-and-best-p"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 44/168: article-140-ai-in-financial-services-compliance-and-risk-man"
echo "   Title: Article 140: AI in Financial Services – Compliance and Risk Management"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-140-ai-in-financial-services-compliance-and-risk-man" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-140-ai-in-financial-services-compliance-and-risk-man"
else
  echo "❌ Failed: article-140-ai-in-financial-services-compliance-and-risk-man"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 45/168: article-141-ai-in-insurance-fairness-pricing-and-claims"
echo "   Title: Article 141: AI in Insurance – Fairness, Pricing, and Claims"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-141-ai-in-insurance-fairness-pricing-and-claims" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-141-ai-in-insurance-fairness-pricing-and-claims"
else
  echo "❌ Failed: article-141-ai-in-insurance-fairness-pricing-and-claims"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 46/168: article-142-ai-in-human-resources-hiring-performance-and-ret"
echo "   Title: Article 142: AI in Human Resources – Hiring, Performance, and Retention"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-142-ai-in-human-resources-hiring-performance-and-ret" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-142-ai-in-human-resources-hiring-performance-and-ret"
else
  echo "❌ Failed: article-142-ai-in-human-resources-hiring-performance-and-ret"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 47/168: article-143-ai-in-marketing-personalization-and-privacy"
echo "   Title: Article 143: AI in Marketing – Personalization and Privacy"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-143-ai-in-marketing-personalization-and-privacy" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-143-ai-in-marketing-personalization-and-privacy"
else
  echo "❌ Failed: article-143-ai-in-marketing-personalization-and-privacy"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 48/168: article-144-ai-in-education-opportunities-and-ethical-concer"
echo "   Title: Article 144: AI in Education – Opportunities and Ethical Concerns"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-144-ai-in-education-opportunities-and-ethical-concer" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-144-ai-in-education-opportunities-and-ethical-concer"
else
  echo "❌ Failed: article-144-ai-in-education-opportunities-and-ethical-concer"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 49/168: article-145-ai-in-criminal-justice-risk-assessment-and-civil"
echo "   Title: Article 145: AI in Criminal Justice – Risk Assessment and Civil Liberties"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-145-ai-in-criminal-justice-risk-assessment-and-civil" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-145-ai-in-criminal-justice-risk-assessment-and-civil"
else
  echo "❌ Failed: article-145-ai-in-criminal-justice-risk-assessment-and-civil"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 50/168: article-146-ai-in-government-public-sector-implementation"
echo "   Title: Article 146: AI in Government – Public Sector Implementation"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-146-ai-in-government-public-sector-implementation" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-146-ai-in-government-public-sector-implementation"
else
  echo "❌ Failed: article-146-ai-in-government-public-sector-implementation"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 51/168: article-147-ai-in-autonomous-vehicles-safety-liability-and-r"
echo "   Title: Article 147: AI in Autonomous Vehicles – Safety, Liability, and Regulation"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-147-ai-in-autonomous-vehicles-safety-liability-and-r" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-147-ai-in-autonomous-vehicles-safety-liability-and-r"
else
  echo "❌ Failed: article-147-ai-in-autonomous-vehicles-safety-liability-and-r"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 52/168: article-148-ai-in-content-moderation-platforms-and-free-spee"
echo "   Title: Article 148: AI in Content Moderation – Platforms and Free Speech"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-148-ai-in-content-moderation-platforms-and-free-spee" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-148-ai-in-content-moderation-platforms-and-free-spee"
else
  echo "❌ Failed: article-148-ai-in-content-moderation-platforms-and-free-spee"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 53/168: article-149-ai-in-media-disney-handing-over-characters-to-op"
echo "   Title: Article 149: AI in Media – Disney Handing Over Characters to OpenAI"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-149-ai-in-media-disney-handing-over-characters-to-op" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-149-ai-in-media-disney-handing-over-characters-to-op"
else
  echo "❌ Failed: article-149-ai-in-media-disney-handing-over-characters-to-op"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 54/168: article-150-ai-in-fraud-detection-financial-crime-and-insura"
echo "   Title: Article 150: AI in Fraud Detection – Financial Crime and Insurance Fraud"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-150-ai-in-fraud-detection-financial-crime-and-insura" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-150-ai-in-fraud-detection-financial-crime-and-insura"
else
  echo "❌ Failed: article-150-ai-in-fraud-detection-financial-crime-and-insura"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 55/168: article-151-ai-in-advertising-user-information-concerns"
echo "   Title: Article 151: AI in Advertising – User Information Concerns"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-151-ai-in-advertising-user-information-concerns" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-151-ai-in-advertising-user-information-concerns"
else
  echo "❌ Failed: article-151-ai-in-advertising-user-information-concerns"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 56/168: article-152-ai-in-innovation-potential-ideas-and-future-appl"
echo "   Title: Article 152: AI in Innovation – Potential Ideas and Future Applications"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-152-ai-in-innovation-potential-ideas-and-future-appl" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-152-ai-in-innovation-potential-ideas-and-future-appl"
else
  echo "❌ Failed: article-152-ai-in-innovation-potential-ideas-and-future-appl"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 57/168: article-153-ai-as-therapist-and-support-tool-risks-pitfalls-"
echo "   Title: Article 153: AI as Therapist and Support Tool – Risks, Pitfalls, and Challenges"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-153-ai-as-therapist-and-support-tool-risks-pitfalls-" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-153-ai-as-therapist-and-support-tool-risks-pitfalls-"
else
  echo "❌ Failed: article-153-ai-as-therapist-and-support-tool-risks-pitfalls-"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 58/168: responsibility-of-responsible-ai-for-organizations"
echo "   Title: Responsibility of Responsible AI for Organizations"
npx ts-node lib/article-processor/cli/consolidate.ts single "responsibility-of-responsible-ai-for-organizations" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: responsibility-of-responsible-ai-for-organizations"
else
  echo "❌ Failed: responsibility-of-responsible-ai-for-organizations"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 59/168: article-title"
echo "   Title: Article Title"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-title" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-title"
else
  echo "❌ Failed: article-title"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 60/168: article-51-the-eu-ai-act-europes-landmark-regulation-explain"
echo "   Title: Article 51: The EU AI Act – Europe's Landmark Regulation Explained"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-51-the-eu-ai-act-europes-landmark-regulation-explain" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-51-the-eu-ai-act-europes-landmark-regulation-explain"
else
  echo "❌ Failed: article-51-the-eu-ai-act-europes-landmark-regulation-explain"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 61/168: article-52-eu-ai-act-risk-classification-prohibited-high-ris"
echo "   Title: Article 52: EU AI Act Risk Classification – Prohibited, High-Risk, and Beyond"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-52-eu-ai-act-risk-classification-prohibited-high-ris" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-52-eu-ai-act-risk-classification-prohibited-high-ris"
else
  echo "❌ Failed: article-52-eu-ai-act-risk-classification-prohibited-high-ris"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 62/168: article-53-high-risk-ai-systems-the-complete-requirements-ch"
echo "   Title: Article 53: High-Risk AI Systems – The Complete Requirements Checklist"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-53-high-risk-ai-systems-the-complete-requirements-ch" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-53-high-risk-ai-systems-the-complete-requirements-ch"
else
  echo "❌ Failed: article-53-high-risk-ai-systems-the-complete-requirements-ch"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 63/168: article-54-foundation-model-obligations-what-the-eu-ai-act-r"
echo "   Title: Article 54: Foundation Model Obligations – What the EU AI Act Requires"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-54-foundation-model-obligations-what-the-eu-ai-act-r" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-54-foundation-model-obligations-what-the-eu-ai-act-r"
else
  echo "❌ Failed: article-54-foundation-model-obligations-what-the-eu-ai-act-r"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 64/168: article-55-eu-ai-act-enforcement-penalties-and-compliance-ti"
echo "   Title: Article 55: EU AI Act Enforcement – Penalties and Compliance Timelines"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-55-eu-ai-act-enforcement-penalties-and-compliance-ti" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-55-eu-ai-act-enforcement-penalties-and-compliance-ti"
else
  echo "❌ Failed: article-55-eu-ai-act-enforcement-penalties-and-compliance-ti"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 65/168: article-56-canadas-aida-the-artificial-intelligence-and-data"
echo "   Title: Article 56: Canada's AIDA – The Artificial Intelligence and Data Act"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-56-canadas-aida-the-artificial-intelligence-and-data" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-56-canadas-aida-the-artificial-intelligence-and-data"
else
  echo "❌ Failed: article-56-canadas-aida-the-artificial-intelligence-and-data"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 66/168: article-57-us-state-ai-laws-the-patchwork-approach"
echo "   Title: Article 57: US State AI Laws – The Patchwork Approach"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-57-us-state-ai-laws-the-patchwork-approach" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-57-us-state-ai-laws-the-patchwork-approach"
else
  echo "❌ Failed: article-57-us-state-ai-laws-the-patchwork-approach"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 67/168: article-58-colorado-ai-act-consumer-protection-for-algorithm"
echo "   Title: Article 58: Colorado AI Act – Consumer Protection for Algorithmic Decisions"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-58-colorado-ai-act-consumer-protection-for-algorithm" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-58-colorado-ai-act-consumer-protection-for-algorithm"
else
  echo "❌ Failed: article-58-colorado-ai-act-consumer-protection-for-algorithm"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 68/168: article-59-nyc-local-law-144-automated-employment-decision-t"
echo "   Title: Article 59: NYC Local Law 144 – Automated Employment Decision Tools"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-59-nyc-local-law-144-automated-employment-decision-t" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-59-nyc-local-law-144-automated-employment-decision-t"
else
  echo "❌ Failed: article-59-nyc-local-law-144-automated-employment-decision-t"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 69/168: article-60-california-ai-regulations-the-golden-states-appro"
echo "   Title: Article 60: California AI Regulations – The Golden State's Approach"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-60-california-ai-regulations-the-golden-states-appro" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-60-california-ai-regulations-the-golden-states-appro"
else
  echo "❌ Failed: article-60-california-ai-regulations-the-golden-states-appro"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 70/168: article-61-chinas-ai-governance-a-different-model"
echo "   Title: Article 61: China's AI Governance – A Different Model"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-61-chinas-ai-governance-a-different-model" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-61-chinas-ai-governance-a-different-model"
else
  echo "❌ Failed: article-61-chinas-ai-governance-a-different-model"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 71/168: article-62-singapores-ai-framework-the-business-friendly-app"
echo "   Title: Article 62: Singapore's AI Framework – The Business-Friendly Approach"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-62-singapores-ai-framework-the-business-friendly-app" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-62-singapores-ai-framework-the-business-friendly-app"
else
  echo "❌ Failed: article-62-singapores-ai-framework-the-business-friendly-app"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 72/168: article-63-brazils-ai-bill-regulation-in-latin-america"
echo "   Title: Article 63: Brazil's AI Bill – Regulation in Latin America"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-63-brazils-ai-bill-regulation-in-latin-america" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-63-brazils-ai-bill-regulation-in-latin-america"
else
  echo "❌ Failed: article-63-brazils-ai-bill-regulation-in-latin-america"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 73/168: article-64-uk-ai-regulation-the-pro-innovation-framework"
echo "   Title: Article 64: UK AI Regulation – The Pro-Innovation Framework"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-64-uk-ai-regulation-the-pro-innovation-framework" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-64-uk-ai-regulation-the-pro-innovation-framework"
else
  echo "❌ Failed: article-64-uk-ai-regulation-the-pro-innovation-framework"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 74/168: article-65-global-ai-law-tracker-whos-regulating-what"
echo "   Title: Article 65: Global AI Law Tracker – Who's Regulating What"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-65-global-ai-law-tracker-whos-regulating-what" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-65-global-ai-law-tracker-whos-regulating-what"
else
  echo "❌ Failed: article-65-global-ai-law-tracker-whos-regulating-what"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 75/168: article-66-ai-regulatory-sandboxes-testing-innovation-safely"
echo "   Title: Article 66: AI Regulatory Sandboxes – Testing Innovation Safely"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-66-ai-regulatory-sandboxes-testing-innovation-safely" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-66-ai-regulatory-sandboxes-testing-innovation-safely"
else
  echo "❌ Failed: article-66-ai-regulatory-sandboxes-testing-innovation-safely"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 76/168: article-67-cross-border-ai-compliance-navigating-multiple-ju"
echo "   Title: Article 67: Cross-Border AI Compliance – Navigating Multiple Jurisdictions"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-67-cross-border-ai-compliance-navigating-multiple-ju" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-67-cross-border-ai-compliance-navigating-multiple-ju"
else
  echo "❌ Failed: article-67-cross-border-ai-compliance-navigating-multiple-ju"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 77/168: article-68-nist-ai-risk-management-framework-the-complete-gu"
echo "   Title: Article 68: NIST AI Risk Management Framework – The Complete Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-68-nist-ai-risk-management-framework-the-complete-gu" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-68-nist-ai-risk-management-framework-the-complete-gu"
else
  echo "❌ Failed: article-68-nist-ai-risk-management-framework-the-complete-gu"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 78/168: article-69-nist-ai-rmf-core-functions-govern-map-measure-man"
echo "   Title: Article 69: NIST AI RMF Core Functions – Govern, Map, Measure, Manage"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-69-nist-ai-rmf-core-functions-govern-map-measure-man" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-69-nist-ai-rmf-core-functions-govern-map-measure-man"
else
  echo "❌ Failed: article-69-nist-ai-rmf-core-functions-govern-map-measure-man"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 79/168: article-70-isoiec-42001-the-ai-management-system-standard"
echo "   Title: Article 70: ISO/IEC 42001 – The AI Management System Standard"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-70-isoiec-42001-the-ai-management-system-standard" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-70-isoiec-42001-the-ai-management-system-standard"
else
  echo "❌ Failed: article-70-isoiec-42001-the-ai-management-system-standard"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 80/168: article-71-iso-31000-for-ai-applying-risk-management-princip"
echo "   Title: Article 71: ISO 31000 for AI – Applying Risk Management Principles"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-71-iso-31000-for-ai-applying-risk-management-princip" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-71-iso-31000-for-ai-applying-risk-management-princip"
else
  echo "❌ Failed: article-71-iso-31000-for-ai-applying-risk-management-princip"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 81/168: article-72-ieee-7000-ethical-design-for-ai-systems"
echo "   Title: Article 72: IEEE 7000 – Ethical Design for AI Systems"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-72-ieee-7000-ethical-design-for-ai-systems" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-72-ieee-7000-ethical-design-for-ai-systems"
else
  echo "❌ Failed: article-72-ieee-7000-ethical-design-for-ai-systems"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 82/168: article-73-the-singapore-model-ai-governance-framework-pract"
echo "   Title: Article 73: The Singapore Model AI Governance Framework – Practical Implementation"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-73-the-singapore-model-ai-governance-framework-pract" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-73-the-singapore-model-ai-governance-framework-pract"
else
  echo "❌ Failed: article-73-the-singapore-model-ai-governance-framework-pract"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 83/168: article-74-algorithmic-impact-assessments-a-step-by-step-gui"
echo "   Title: Article 74: Algorithmic Impact Assessments – A Step-by-Step Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-74-algorithmic-impact-assessments-a-step-by-step-gui" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-74-algorithmic-impact-assessments-a-step-by-step-gui"
else
  echo "❌ Failed: article-74-algorithmic-impact-assessments-a-step-by-step-gui"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 84/168: article-75-ai-risk-assessment-templates-tools-for-practition"
echo "   Title: Article 75: AI Risk Assessment Templates – Tools for Practitioners"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-75-ai-risk-assessment-templates-tools-for-practition" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-75-ai-risk-assessment-templates-tools-for-practition"
else
  echo "❌ Failed: article-75-ai-risk-assessment-templates-tools-for-practition"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 85/168: article-76-mapping-frameworks-to-regulations-a-compliance-cr"
echo "   Title: Article 76: Mapping Frameworks to Regulations – A Compliance Crosswalk"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-76-mapping-frameworks-to-regulations-a-compliance-cr" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-76-mapping-frameworks-to-regulations-a-compliance-cr"
else
  echo "❌ Failed: article-76-mapping-frameworks-to-regulations-a-compliance-cr"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 86/168: article-77-building-an-ai-risk-register-what-to-track-and-wh"
echo "   Title: Article 77: Building an AI Risk Register – What to Track and Why"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-77-building-an-ai-risk-register-what-to-track-and-wh" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-77-building-an-ai-risk-register-what-to-track-and-wh"
else
  echo "❌ Failed: article-77-building-an-ai-risk-register-what-to-track-and-wh"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 87/168: article-78-ai-maturity-models-assessing-your-organizations-r"
echo "   Title: Article 78: AI Maturity Models – Assessing Your Organization's Readiness"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-78-ai-maturity-models-assessing-your-organizations-r" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-78-ai-maturity-models-assessing-your-organizations-r"
else
  echo "❌ Failed: article-78-ai-maturity-models-assessing-your-organizations-r"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 88/168: article-79-before-you-build-ai-system-planning-essentials"
echo "   Title: Article 79: Before You Build – AI System Planning Essentials"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-79-before-you-build-ai-system-planning-essentials" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-79-before-you-build-ai-system-planning-essentials"
else
  echo "❌ Failed: article-79-before-you-build-ai-system-planning-essentials"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 89/168: article-80-the-ai-business-case-roi-risks-and-reality-checks"
echo "   Title: Article 80: The AI Business Case – ROI, Risks, and Reality Checks"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-80-the-ai-business-case-roi-risks-and-reality-checks" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-80-the-ai-business-case-roi-risks-and-reality-checks"
else
  echo "❌ Failed: article-80-the-ai-business-case-roi-risks-and-reality-checks"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 90/168: article-81-ai-project-scoping-defining-success-criteria"
echo "   Title: Article 81: AI Project Scoping – Defining Success Criteria"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-81-ai-project-scoping-defining-success-criteria" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-81-ai-project-scoping-defining-success-criteria"
else
  echo "❌ Failed: article-81-ai-project-scoping-defining-success-criteria"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 91/168: article-82-ai-governance-structures-roles-responsibilities-a"
echo "   Title: Article 82: AI Governance Structures – Roles, Responsibilities, and RACI"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-82-ai-governance-structures-roles-responsibilities-a" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-82-ai-governance-structures-roles-responsibilities-a"
else
  echo "❌ Failed: article-82-ai-governance-structures-roles-responsibilities-a"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 92/168: article-83-designing-responsibly-the-ai-system-design-phase"
echo "   Title: Article 83: Designing Responsibly – The AI System Design Phase"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-83-designing-responsibly-the-ai-system-design-phase" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-83-designing-responsibly-the-ai-system-design-phase"
else
  echo "❌ Failed: article-83-designing-responsibly-the-ai-system-design-phase"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 93/168: article-84-data-strategy-for-ai-collection-quality-and-gover"
echo "   Title: Article 84: Data Strategy for AI – Collection, Quality, and Governance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-84-data-strategy-for-ai-collection-quality-and-gover" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-84-data-strategy-for-ai-collection-quality-and-gover"
else
  echo "❌ Failed: article-84-data-strategy-for-ai-collection-quality-and-gover"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 94/168: article-85-privacy-enhancing-technologies-differential-priva"
echo "   Title: Article 85: Privacy-Enhancing Technologies – Differential Privacy and Beyond"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-85-privacy-enhancing-technologies-differential-priva" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-85-privacy-enhancing-technologies-differential-priva"
else
  echo "❌ Failed: article-85-privacy-enhancing-technologies-differential-priva"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 95/168: article-86-federated-learning-training-without-sharing-data"
echo "   Title: Article 86: Federated Learning – Training Without Sharing Data"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-86-federated-learning-training-without-sharing-data" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-86-federated-learning-training-without-sharing-data"
else
  echo "❌ Failed: article-86-federated-learning-training-without-sharing-data"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 96/168: article-87-model-selection-choosing-the-right-ai-approach"
echo "   Title: Article 87: Model Selection – Choosing the Right AI Approach"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-87-model-selection-choosing-the-right-ai-approach" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-87-model-selection-choosing-the-right-ai-approach"
else
  echo "❌ Failed: article-87-model-selection-choosing-the-right-ai-approach"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 97/168: article-88-the-build-vs-buy-decision-when-to-use-third-party"
echo "   Title: Article 88: The Build vs. Buy Decision – When to Use Third-Party AI"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-88-the-build-vs-buy-decision-when-to-use-third-party" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-88-the-build-vs-buy-decision-when-to-use-third-party"
else
  echo "❌ Failed: article-88-the-build-vs-buy-decision-when-to-use-third-party"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 98/168: article-89-ai-development-best-practices-from-code-to-compli"
echo "   Title: Article 89: AI Development Best Practices – From Code to Compliance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-89-ai-development-best-practices-from-code-to-compli" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-89-ai-development-best-practices-from-code-to-compli"
else
  echo "❌ Failed: article-89-ai-development-best-practices-from-code-to-compli"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 99/168: article-90-feature-engineering-the-art-of-training-data-prep"
echo "   Title: Article 90: Feature Engineering – The Art of Training Data Preparation"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-90-feature-engineering-the-art-of-training-data-prep" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-90-feature-engineering-the-art-of-training-data-prep"
else
  echo "❌ Failed: article-90-feature-engineering-the-art-of-training-data-prep"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 100/168: article-91-model-training-hyperparameters-validation-and-ove"
echo "   Title: Article 91: Model Training – Hyperparameters, Validation, and Overfitting"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-91-model-training-hyperparameters-validation-and-ove" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-91-model-training-hyperparameters-validation-and-ove"
else
  echo "❌ Failed: article-91-model-training-hyperparameters-validation-and-ove"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 101/168: article-92-testing-ai-systems-beyond-traditional-software-qa"
echo "   Title: Article 92: Testing AI Systems – Beyond Traditional Software QA"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-92-testing-ai-systems-beyond-traditional-software-qa" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-92-testing-ai-systems-beyond-traditional-software-qa"
else
  echo "❌ Failed: article-92-testing-ai-systems-beyond-traditional-software-qa"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 102/168: article-93-bias-testing-detecting-discrimination-before-depl"
echo "   Title: Article 93: Bias Testing – Detecting Discrimination Before Deployment"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-93-bias-testing-detecting-discrimination-before-depl" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-93-bias-testing-detecting-discrimination-before-depl"
else
  echo "❌ Failed: article-93-bias-testing-detecting-discrimination-before-depl"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 103/168: article-94-red-teaming-ai-adversarial-testing-for-safety"
echo "   Title: Article 94: Red Teaming AI – Adversarial Testing for Safety"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-94-red-teaming-ai-adversarial-testing-for-safety" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-94-red-teaming-ai-adversarial-testing-for-safety"
else
  echo "❌ Failed: article-94-red-teaming-ai-adversarial-testing-for-safety"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 104/168: article-95-ai-documentation-model-cards-and-system-documenta"
echo "   Title: Article 95: AI Documentation – Model Cards and System Documentation"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-95-ai-documentation-model-cards-and-system-documenta" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-95-ai-documentation-model-cards-and-system-documenta"
else
  echo "❌ Failed: article-95-ai-documentation-model-cards-and-system-documenta"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 105/168: article-96-launch-readiness-the-ai-deployment-checklist"
echo "   Title: Article 96: Launch Readiness – The AI Deployment Checklist"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-96-launch-readiness-the-ai-deployment-checklist" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-96-launch-readiness-the-ai-deployment-checklist"
else
  echo "❌ Failed: article-96-launch-readiness-the-ai-deployment-checklist"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 106/168: article-97-deployment-strategies-canary-releases-ab-testing-"
echo "   Title: Article 97: Deployment Strategies – Canary Releases, A/B Testing, and Rollbacks"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-97-deployment-strategies-canary-releases-ab-testing-" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-97-deployment-strategies-canary-releases-ab-testing-"
else
  echo "❌ Failed: article-97-deployment-strategies-canary-releases-ab-testing-"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 107/168: article-98-monitoring-ai-in-production-drift-degradation-and"
echo "   Title: Article 98: Monitoring AI in Production – Drift, Degradation, and Detection"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-98-monitoring-ai-in-production-drift-degradation-and" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-98-monitoring-ai-in-production-drift-degradation-and"
else
  echo "❌ Failed: article-98-monitoring-ai-in-production-drift-degradation-and"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 108/168: article-99-ai-incident-response-when-things-go-wrong"
echo "   Title: Article 99: AI Incident Response – When Things Go Wrong"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-99-ai-incident-response-when-things-go-wrong" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-99-ai-incident-response-when-things-go-wrong"
else
  echo "❌ Failed: article-99-ai-incident-response-when-things-go-wrong"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 109/168: ai-governance-mastery-article-titles"
echo "   Title: AI Governance Mastery — Article Titles"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-governance-mastery-article-titles" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: ai-governance-mastery-article-titles"
else
  echo "❌ Failed: ai-governance-mastery-article-titles"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 110/168: the-ai-family-tree-understanding-ai-intelligence-levels"
echo "   Title: The AI Family Tree - Understanding AI Intelligence Levels"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-ai-family-tree-understanding-ai-intelligence-levels" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: the-ai-family-tree-understanding-ai-intelligence-levels"
else
  echo "❌ Failed: the-ai-family-tree-understanding-ai-intelligence-levels"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 111/168: how-machines-learn-training-methods-and-automation-explained"
echo "   Title: How Machines Learn — Training Methods and Automation Explained"
npx ts-node lib/article-processor/cli/consolidate.ts single "how-machines-learn-training-methods-and-automation-explained" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: how-machines-learn-training-methods-and-automation-explained"
else
  echo "❌ Failed: how-machines-learn-training-methods-and-automation-explained"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 112/168: the-ai-technology-stack-explained"
echo "   Title: The AI Technology Stack Explained"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-ai-technology-stack-explained" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: the-ai-technology-stack-explained"
else
  echo "❌ Failed: the-ai-technology-stack-explained"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 113/168: article-5-strong-vs-weak-ai-why-the-difference-matters-for-g"
echo "   Title: Article 5: Strong vs. Weak AI – Why the Difference Matters for Governance"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-5-strong-vs-weak-ai-why-the-difference-matters-for-g" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-5-strong-vs-weak-ai-why-the-difference-matters-for-g"
else
  echo "❌ Failed: article-5-strong-vs-weak-ai-why-the-difference-matters-for-g"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 114/168: article-7-deep-learning-decoded-neural-networks-for-non-engi"
echo "   Title: Article 7: Deep Learning Decoded – Neural Networks for Non-Engineers"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-7-deep-learning-decoded-neural-networks-for-non-engi" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-7-deep-learning-decoded-neural-networks-for-non-engi"
else
  echo "❌ Failed: article-7-deep-learning-decoded-neural-networks-for-non-engi"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 115/168: article-8-generative-ai-explained-how-chatgpt-dall-e-and-cla"
echo "   Title: Article 8: Generative AI Explained – How ChatGPT, DALL-E, and Claude Work"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-8-generative-ai-explained-how-chatgpt-dall-e-and-cla" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-8-generative-ai-explained-how-chatgpt-dall-e-and-cla"
else
  echo "❌ Failed: article-8-generative-ai-explained-how-chatgpt-dall-e-and-cla"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 116/168: article-9-large-language-models-the-technology-behind-the-hy"
echo "   Title: Article 9: Large Language Models – The Technology Behind the Hype"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-9-large-language-models-the-technology-behind-the-hy" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-9-large-language-models-the-technology-behind-the-hy"
else
  echo "❌ Failed: article-9-large-language-models-the-technology-behind-the-hy"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 117/168: article-10-the-ai-technology-stack-from-chips-to-application"
echo "   Title: Article 10: The AI Technology Stack – From Chips to Applications"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-10-the-ai-technology-stack-from-chips-to-application" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-10-the-ai-technology-stack-from-chips-to-application"
else
  echo "❌ Failed: article-10-the-ai-technology-stack-from-chips-to-application"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 118/168: article-10-ai-vs-automation-understanding-the-distinction"
echo "   Title: Article 10: AI vs. Automation – Understanding the Distinction"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-10-ai-vs-automation-understanding-the-distinction" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-10-ai-vs-automation-understanding-the-distinction"
else
  echo "❌ Failed: article-10-ai-vs-automation-understanding-the-distinction"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 119/168: article-11-the-data-behind-ai-why-training-data-determines-e"
echo "   Title: Article 11: The Data Behind AI – Why Training Data Determines Everything"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-11-the-data-behind-ai-why-training-data-determines-e" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-11-the-data-behind-ai-why-training-data-determines-e"
else
  echo "❌ Failed: article-11-the-data-behind-ai-why-training-data-determines-e"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 120/168: article-12-foundation-models-the-new-building-blocks-of-ai"
echo "   Title: Article 12: Foundation Models – The New Building Blocks of AI"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-12-foundation-models-the-new-building-blocks-of-ai" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-12-foundation-models-the-new-building-blocks-of-ai"
else
  echo "❌ Failed: article-12-foundation-models-the-new-building-blocks-of-ai"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 121/168: article-13-multimodal-ai-when-machines-see-hear-and-speak"
echo "   Title: Article 13: Multimodal AI – When Machines See, Hear, and Speak"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-13-multimodal-ai-when-machines-see-hear-and-speak" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-13-multimodal-ai-when-machines-see-hear-and-speak"
else
  echo "❌ Failed: article-13-multimodal-ai-when-machines-see-hear-and-speak"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 122/168: article-14-ai-compute-why-gpus-rule-the-ai-world"
echo "   Title: Article 14: AI Compute – Why GPUs Rule the AI World"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-14-ai-compute-why-gpus-rule-the-ai-world" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-14-ai-compute-why-gpus-rule-the-ai-world"
else
  echo "❌ Failed: article-14-ai-compute-why-gpus-rule-the-ai-world"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 123/168: article-15-the-environmental-cost-of-ai-data-centers-energy-"
echo "   Title: Article 15: The Environmental Cost of AI – Data Centers, Energy, and Sustainability"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-15-the-environmental-cost-of-ai-data-centers-energy-" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-15-the-environmental-cost-of-ai-data-centers-energy-"
else
  echo "❌ Failed: article-15-the-environmental-cost-of-ai-data-centers-energy-"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 124/168: article-149-how-to-write-an-ai-policy-a-template-based-guide"
echo "   Title: Article 149: How to Write an AI Policy — A Template-Based Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-149-how-to-write-an-ai-policy-a-template-based-guide" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-149-how-to-write-an-ai-policy-a-template-based-guide"
else
  echo "❌ Failed: article-149-how-to-write-an-ai-policy-a-template-based-guide"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 125/168: article-150-how-to-conduct-an-ai-impact-assessment-step-by-s"
echo "   Title: Article 150: How to Conduct an AI Impact Assessment — Step by Step"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-150-how-to-conduct-an-ai-impact-assessment-step-by-s" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-150-how-to-conduct-an-ai-impact-assessment-step-by-s"
else
  echo "❌ Failed: article-150-how-to-conduct-an-ai-impact-assessment-step-by-s"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 126/168: article-151-how-to-build-a-model-card-documentation-best-pra"
echo "   Title: Article 151: How to Build a Model Card — Documentation Best Practices"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-151-how-to-build-a-model-card-documentation-best-pra" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-151-how-to-build-a-model-card-documentation-best-pra"
else
  echo "❌ Failed: article-151-how-to-build-a-model-card-documentation-best-pra"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 127/168: article-152-how-to-perform-a-bias-audit-methodology-and-tool"
echo "   Title: Article 152: How to Perform a Bias Audit — Methodology and Tools"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-152-how-to-perform-a-bias-audit-methodology-and-tool" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-152-how-to-perform-a-bias-audit-methodology-and-tool"
else
  echo "❌ Failed: article-152-how-to-perform-a-bias-audit-methodology-and-tool"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 128/168: article-153-how-to-create-an-ai-ethics-review-process"
echo "   Title: Article 153: How to Create an AI Ethics Review Process"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-153-how-to-create-an-ai-ethics-review-process" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-153-how-to-create-an-ai-ethics-review-process"
else
  echo "❌ Failed: article-153-how-to-create-an-ai-ethics-review-process"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 129/168: article-154-how-to-respond-to-an-ai-incident-playbook-and-ch"
echo "   Title: Article 154: How to Respond to an AI Incident — Playbook and Checklist"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-154-how-to-respond-to-an-ai-incident-playbook-and-ch" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-154-how-to-respond-to-an-ai-incident-playbook-and-ch"
else
  echo "❌ Failed: article-154-how-to-respond-to-an-ai-incident-playbook-and-ch"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 130/168: article-155-how-to-evaluate-ai-vendors-due-diligence-framewo"
echo "   Title: Article 155: How to Evaluate AI Vendors — Due Diligence Framework"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-155-how-to-evaluate-ai-vendors-due-diligence-framewo" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-155-how-to-evaluate-ai-vendors-due-diligence-framewo"
else
  echo "❌ Failed: article-155-how-to-evaluate-ai-vendors-due-diligence-framewo"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 131/168: article-156-how-to-communicate-about-ai-stakeholder-communic"
echo "   Title: Article 156: How to Communicate About AI — Stakeholder Communications Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-156-how-to-communicate-about-ai-stakeholder-communic" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-156-how-to-communicate-about-ai-stakeholder-communic"
else
  echo "❌ Failed: article-156-how-to-communicate-about-ai-stakeholder-communic"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 132/168: article-157-how-to-build-an-ai-governance-roadmap-strategic-"
echo "   Title: Article 157: How to Build an AI Governance Roadmap — Strategic Planning Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-157-how-to-build-an-ai-governance-roadmap-strategic-" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-157-how-to-build-an-ai-governance-roadmap-strategic-"
else
  echo "❌ Failed: article-157-how-to-build-an-ai-governance-roadmap-strategic-"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 133/168: article-158-how-to-pass-the-aigp-certification-complete-stud"
echo "   Title: Article 158: How to Pass the AIGP Certification — Complete Study Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-158-how-to-pass-the-aigp-certification-complete-stud" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-158-how-to-pass-the-aigp-certification-complete-stud"
else
  echo "❌ Failed: article-158-how-to-pass-the-aigp-certification-complete-stud"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 134/168: when-ai-goes-wrong-a-taxonomy-of-ai-harms"
echo "   Title: When AI Goes Wrong – A Taxonomy of AI Harms"
npx ts-node lib/article-processor/cli/consolidate.ts single "when-ai-goes-wrong-a-taxonomy-of-ai-harms" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: when-ai-goes-wrong-a-taxonomy-of-ai-harms"
else
  echo "❌ Failed: when-ai-goes-wrong-a-taxonomy-of-ai-harms"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 135/168: algorithmic-bias-how-ai-discriminates-and-why"
echo "   Title: Algorithmic Bias – How AI Discriminates and Why"
npx ts-node lib/article-processor/cli/consolidate.ts single "algorithmic-bias-how-ai-discriminates-and-why" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: algorithmic-bias-how-ai-discriminates-and-why"
else
  echo "❌ Failed: algorithmic-bias-how-ai-discriminates-and-why"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 136/168: ai-hallucinations-when-machines-confidently-lie"
echo "   Title: AI Hallucinations – When Machines Confidently Lie"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-hallucinations-when-machines-confidently-lie" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: ai-hallucinations-when-machines-confidently-lie"
else
  echo "❌ Failed: ai-hallucinations-when-machines-confidently-lie"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 137/168: the-black-box-problem-why-ai-explainability-matters"
echo "   Title: The Black Box Problem – Why AI Explainability Matters"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-black-box-problem-why-ai-explainability-matters" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: the-black-box-problem-why-ai-explainability-matters"
else
  echo "❌ Failed: the-black-box-problem-why-ai-explainability-matters"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 138/168: ai-and-privacy-the-data-collection-dilemma"
echo "   Title: AI and Privacy – The Data Collection Dilemma"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-and-privacy-the-data-collection-dilemma" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: ai-and-privacy-the-data-collection-dilemma"
else
  echo "❌ Failed: ai-and-privacy-the-data-collection-dilemma"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 139/168: deepfakes-and-synthetic-media-the-trust-crisis"
echo "   Title: Deepfakes and Synthetic Media – The Trust Crisis"
npx ts-node lib/article-processor/cli/consolidate.ts single "deepfakes-and-synthetic-media-the-trust-crisis" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: deepfakes-and-synthetic-media-the-trust-crisis"
else
  echo "❌ Failed: deepfakes-and-synthetic-media-the-trust-crisis"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 140/168: ai-powered-misinformation-democracy-at-risk"
echo "   Title: AI-Powered Misinformation – Democracy at Risk"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-powered-misinformation-democracy-at-risk" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: ai-powered-misinformation-democracy-at-risk"
else
  echo "❌ Failed: ai-powered-misinformation-democracy-at-risk"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 141/168: job-displacement-ai-and-the-future-of-work"
echo "   Title: Job Displacement – AI and the Future of Work"
npx ts-node lib/article-processor/cli/consolidate.ts single "job-displacement-ai-and-the-future-of-work" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: job-displacement-ai-and-the-future-of-work"
else
  echo "❌ Failed: job-displacement-ai-and-the-future-of-work"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 142/168: autonomous-weapons-the-ai-arms-race"
echo "   Title: Autonomous Weapons – The AI Arms Race"
npx ts-node lib/article-processor/cli/consolidate.ts single "autonomous-weapons-the-ai-arms-race" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: autonomous-weapons-the-ai-arms-race"
else
  echo "❌ Failed: autonomous-weapons-the-ai-arms-race"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 143/168: ai-safety-preventing-catastrophic-failures"
echo "   Title: AI Safety – Preventing Catastrophic Failures"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-safety-preventing-catastrophic-failures" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: ai-safety-preventing-catastrophic-failures"
else
  echo "❌ Failed: ai-safety-preventing-catastrophic-failures"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 144/168: building-trustworthy-ai-the-seven-pillars"
echo "   Title: Building Trustworthy AI – The Seven Pillars"
npx ts-node lib/article-processor/cli/consolidate.ts single "building-trustworthy-ai-the-seven-pillars" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: building-trustworthy-ai-the-seven-pillars"
else
  echo "❌ Failed: building-trustworthy-ai-the-seven-pillars"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 145/168: human-centered-ai-design-keeping-people-in-the-loop"
echo "   Title: Human-Centered AI Design – Keeping People in the Loop"
npx ts-node lib/article-processor/cli/consolidate.ts single "human-centered-ai-design-keeping-people-in-the-loop" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: human-centered-ai-design-keeping-people-in-the-loop"
else
  echo "❌ Failed: human-centered-ai-design-keeping-people-in-the-loop"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 146/168: fairness-in-ai-definitions-metrics-and-trade-offs"
echo "   Title: Fairness in AI – Definitions, Metrics, and Trade-offs"
npx ts-node lib/article-processor/cli/consolidate.ts single "fairness-in-ai-definitions-metrics-and-trade-offs" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: fairness-in-ai-definitions-metrics-and-trade-offs"
else
  echo "❌ Failed: fairness-in-ai-definitions-metrics-and-trade-offs"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 147/168: ai-transparency-what-users-deserve-to-know"
echo "   Title: AI Transparency – What Users Deserve to Know"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-transparency-what-users-deserve-to-know" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: ai-transparency-what-users-deserve-to-know"
else
  echo "❌ Failed: ai-transparency-what-users-deserve-to-know"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 148/168: ai-accountability-who-is-responsible-when-ai-causes-harm"
echo "   Title: AI Accountability – Who Is Responsible When AI Causes Harm"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-accountability-who-is-responsible-when-ai-causes-harm" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: ai-accountability-who-is-responsible-when-ai-causes-harm"
else
  echo "❌ Failed: ai-accountability-who-is-responsible-when-ai-causes-harm"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 149/168: ai-governance-frameworks-building-your-organizations-approac"
echo "   Title: AI Governance Frameworks – Building Your Organization's Approach"
npx ts-node lib/article-processor/cli/consolidate.ts single "ai-governance-frameworks-building-your-organizations-approac" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: ai-governance-frameworks-building-your-organizations-approac"
else
  echo "❌ Failed: ai-governance-frameworks-building-your-organizations-approac"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 150/168: the-ai-audit-how-to-evaluate-ai-systems"
echo "   Title: The AI Audit – How to Evaluate AI Systems"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-ai-audit-how-to-evaluate-ai-systems" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: the-ai-audit-how-to-evaluate-ai-systems"
else
  echo "❌ Failed: the-ai-audit-how-to-evaluate-ai-systems"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 151/168: regulatory-landscape-global-ai-laws-and-standards"
echo "   Title: Regulatory Landscape – Global AI Laws and Standards"
npx ts-node lib/article-processor/cli/consolidate.ts single "regulatory-landscape-global-ai-laws-and-standards" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: regulatory-landscape-global-ai-laws-and-standards"
else
  echo "❌ Failed: regulatory-landscape-global-ai-laws-and-standards"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 152/168: preparing-for-ai-regulation-a-compliance-roadmap"
echo "   Title: Preparing for AI Regulation – A Compliance Roadmap"
npx ts-node lib/article-processor/cli/consolidate.ts single "preparing-for-ai-regulation-a-compliance-roadmap" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: preparing-for-ai-regulation-a-compliance-roadmap"
else
  echo "❌ Failed: preparing-for-ai-regulation-a-compliance-roadmap"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 153/168: the-future-of-ai-ethics-emerging-challenges-and-opportunitie"
echo "   Title: The Future of AI Ethics – Emerging Challenges and Opportunities"
npx ts-node lib/article-processor/cli/consolidate.ts single "the-future-of-ai-ethics-emerging-challenges-and-opportunitie" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: the-future-of-ai-ethics-emerging-challenges-and-opportunitie"
else
  echo "❌ Failed: the-future-of-ai-ethics-emerging-challenges-and-opportunitie"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 154/168: article-36-the-legal-patchwork-existing-laws-that-apply-to-a"
echo "   Title: Article 36: The Legal Patchwork – Existing Laws That Apply to AI"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-36-the-legal-patchwork-existing-laws-that-apply-to-a" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-36-the-legal-patchwork-existing-laws-that-apply-to-a"
else
  echo "❌ Failed: article-36-the-legal-patchwork-existing-laws-that-apply-to-a"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 155/168: article-37-consumer-protection-and-ai-ftc-section-5-explaine"
echo "   Title: Article 37: Consumer Protection and AI – FTC Section 5 Explained"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-37-consumer-protection-and-ai-ftc-section-5-explaine" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-37-consumer-protection-and-ai-ftc-section-5-explaine"
else
  echo "❌ Failed: article-37-consumer-protection-and-ai-ftc-section-5-explaine"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 156/168: article-38-anti-discrimination-laws-and-ai-civil-rights-in-t"
echo "   Title: Article 38: Anti-Discrimination Laws and AI – Civil Rights in the Algorithm Age"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-38-anti-discrimination-laws-and-ai-civil-rights-in-t" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-38-anti-discrimination-laws-and-ai-civil-rights-in-t"
else
  echo "❌ Failed: article-38-anti-discrimination-laws-and-ai-civil-rights-in-t"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 157/168: article-39-ai-and-employment-law-hiring-algorithms-under-scr"
echo "   Title: Article 39: AI and Employment Law – Hiring Algorithms Under Scrutiny"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-39-ai-and-employment-law-hiring-algorithms-under-scr" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-39-ai-and-employment-law-hiring-algorithms-under-scr"
else
  echo "❌ Failed: article-39-ai-and-employment-law-hiring-algorithms-under-scr"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 158/168: article-40-product-liability-for-ai-when-software-causes-har"
echo "   Title: Article 40: Product Liability for AI – When Software Causes Harm"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-40-product-liability-for-ai-when-software-causes-har" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-40-product-liability-for-ai-when-software-causes-har"
else
  echo "❌ Failed: article-40-product-liability-for-ai-when-software-causes-har"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 159/168: article-41-ai-and-intellectual-property-copyright-patents-an"
echo "   Title: Article 41: AI and Intellectual Property – Copyright, Patents, and Training Data"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-41-ai-and-intellectual-property-copyright-patents-an" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-41-ai-and-intellectual-property-copyright-patents-an"
else
  echo "❌ Failed: article-41-ai-and-intellectual-property-copyright-patents-an"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 160/168: article-42-gdpr-meets-ai-europes-privacy-framework-applied"
echo "   Title: Article 42: GDPR Meets AI – Europe's Privacy Framework Applied"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-42-gdpr-meets-ai-europes-privacy-framework-applied" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-42-gdpr-meets-ai-europes-privacy-framework-applied"
else
  echo "❌ Failed: article-42-gdpr-meets-ai-europes-privacy-framework-applied"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 161/168: article-43-automated-decision-making-understanding-gdpr-arti"
echo "   Title: Article 43: Automated Decision-Making – Understanding GDPR Article 22"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-43-automated-decision-making-understanding-gdpr-arti" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-43-automated-decision-making-understanding-gdpr-arti"
else
  echo "❌ Failed: article-43-automated-decision-making-understanding-gdpr-arti"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 162/168: article-44-data-protection-impact-assessments-the-ai-dpia-gu"
echo "   Title: Article 44: Data Protection Impact Assessments – The AI DPIA Guide"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-44-data-protection-impact-assessments-the-ai-dpia-gu" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-44-data-protection-impact-assessments-the-ai-dpia-gu"
else
  echo "❌ Failed: article-44-data-protection-impact-assessments-the-ai-dpia-gu"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 163/168: article-45-the-right-to-explanation-what-gdpr-actually-requi"
echo "   Title: Article 45: The Right to Explanation – What GDPR Actually Requires"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-45-the-right-to-explanation-what-gdpr-actually-requi" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-45-the-right-to-explanation-what-gdpr-actually-requi"
else
  echo "❌ Failed: article-45-the-right-to-explanation-what-gdpr-actually-requi"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 164/168: article-46-ai-and-hipaa-healthcare-privacy-implications"
echo "   Title: Article 46: AI and HIPAA – Healthcare Privacy Implications"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-46-ai-and-hipaa-healthcare-privacy-implications" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-46-ai-and-hipaa-healthcare-privacy-implications"
else
  echo "❌ Failed: article-46-ai-and-hipaa-healthcare-privacy-implications"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 165/168: article-47-financial-services-ai-regulatory-requirements-exp"
echo "   Title: Article 47: Financial Services AI – Regulatory Requirements Explained"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-47-financial-services-ai-regulatory-requirements-exp" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-47-financial-services-ai-regulatory-requirements-exp"
else
  echo "❌ Failed: article-47-financial-services-ai-regulatory-requirements-exp"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 166/168: article-48-ai-in-insurance-fairness-and-discrimination-conce"
echo "   Title: Article 48: AI in Insurance – Fairness and Discrimination Concerns"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-48-ai-in-insurance-fairness-and-discrimination-conce" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-48-ai-in-insurance-fairness-and-discrimination-conce"
else
  echo "❌ Failed: article-48-ai-in-insurance-fairness-and-discrimination-conce"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 167/168: article-49-who-pays-when-ai-fails-the-liability-reform-debat"
echo "   Title: Article 49: Who Pays When AI Fails? – The Liability Reform Debate"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-49-who-pays-when-ai-fails-the-liability-reform-debat" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-49-who-pays-when-ai-fails-the-liability-reform-debat"
else
  echo "❌ Failed: article-49-who-pays-when-ai-fails-the-liability-reform-debat"
  echo "Continuing with next article..."
fi
echo ""

echo "📄 Processing 168/168: article-50-the-eu-ai-liability-directive-shifting-the-burden"
echo "   Title: Article 50: The EU AI Liability Directive – Shifting the Burden"
npx ts-node lib/article-processor/cli/consolidate.ts single "article-50-the-eu-ai-liability-directive-shifting-the-burden" --verbose
if [ $? -eq 0 ]; then
  echo "✅ Success: article-50-the-eu-ai-liability-directive-shifting-the-burden"
else
  echo "❌ Failed: article-50-the-eu-ai-liability-directive-shifting-the-burden"
  echo "Continuing with next article..."
fi
echo ""

echo "🎉 Processing complete!"
echo "📊 Final directory contents:"
ls -la content/articles/final/ | wc -l
