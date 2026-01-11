# Card Component Reference Guide
## UI Design Specification for AI Governance Learning Platform

---

## Overview

| Card Type | ID Prefix | Count | Purpose |
|-----------|-----------|-------|---------|
| Example Cards | `ex-` | 36 | Real-world incidents, case studies |
| Milestone Cards | `ms-` | 14 | Historical AI achievements |
| Framework Cards | `fw-` | 14 | Regulations, standards, laws |
| Scenario Cards | `sc-` | 27 | Hypothetical teaching examples |
| Resource Cards | `res-` | ~20 | Templates, checklists, tools |
| Expert Quotes | `quote-` | 8 | Notable predictions/statements |
| Market Insights | `insight-` | 11 | Statistics, costs, market data |
| Workforce Trends | `trend-` | 8 | Job impact statistics |
| Technical Concepts | `concept-` | 22 | Definitions linking to Terminology |
| Operational Patterns | `pattern-` | 13 | Implementation patterns |
| Article Links | `article-link-` | Variable | Links to related articles |
| **Total** | | **~173+** | |

---

## 1. Example Cards (`ex-`)

### Purpose
Real-world incidents, case studies, and documented AI failures or successes that illustrate governance principles.

### Data Schema
```yaml
id: ex-amazon-hiring
title: "Amazon's Biased Hiring Algorithm"
type: incident | case_study | research | legal_case | product | historical
organization: Amazon
year: 2018
summary: "Amazon scrapped AI recruiting tool that penalized resumes containing 'women's', learning bias from historical hiring data."
key_facts:
  - Trained on 10 years of resume data
  - Penalized terms like "women's chess club"
  - Scrapped before deployment
outcome: "Tool was discontinued; highlighted risks of training on biased historical data"
governance_lesson: "Training data reflects historical biases that AI can amplify"
source: "Reuters (Dastin, 2018)"
source_url: "https://..."
tags:
  - bias
  - hiring
  - discrimination
  - employment
used_in_articles:
  - risk-2
  - resp-38
  - resp-39
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ 🔴 INCIDENT                                    2018     │
│                                                         │
│ Amazon's Biased Hiring Algorithm                        │
│                                                         │
│ Amazon scrapped AI recruiting tool that penalized       │
│ resumes containing "women's", learning bias from        │
│ historical hiring data.                                 │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 💡 Governance Lesson                                │ │
│ │ Training data reflects historical biases that AI    │ │
│ │ can amplify                                         │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 🏢 Amazon    📰 Reuters    🏷️ bias, hiring, employment  │
│                                                         │
│ [Expand for Details ▼]                                  │
└─────────────────────────────────────────────────────────┘
```

### Expanded State (Optional)
```
┌─────────────────────────────────────────────────────────┐
│ Key Facts:                                              │
│ • Trained on 10 years of resume data                    │
│ • Penalized terms like "women's chess club"             │
│ • Scrapped before deployment                            │
│                                                         │
│ Outcome:                                                │
│ Tool was discontinued; highlighted risks of training    │
│ on biased historical data.                              │
│                                                         │
│ 📖 Source: Reuters (Dastin, 2018) [→]                   │
└─────────────────────────────────────────────────────────┘
```

### Type Badges
| Type | Badge | Color |
|------|-------|-------|
| incident | 🔴 INCIDENT | Red |
| case_study | 📘 CASE STUDY | Blue |
| research | 🔬 RESEARCH | Purple |
| legal_case | ⚖️ LEGAL CASE | Orange |
| product | 🚀 PRODUCT | Green |
| historical | 📜 HISTORICAL | Brown |

### Sample IDs
- `ex-amazon-hiring`
- `ex-compas`
- `ex-apple-card`
- `ex-gender-shades`
- `ex-uk-grading`
- `ex-healthcare-algo`
- `ex-predictive-policing`
- `ex-chatgpt`
- `ex-deepfake-elections`

---

## 2. Milestone Cards (`ms-`)

### Purpose
Historical AI achievements, breakthroughs, and founding moments that shaped the field.

### Data Schema
```yaml
id: ms-dartmouth-workshop
title: "Dartmouth Workshop"
year: 1956
significance: "The conference that coined 'Artificial Intelligence' and launched AI as a field"
key_figures:
  - John McCarthy
  - Marvin Minsky
  - Claude Shannon
  - Nathaniel Rochester
impact: "Established AI as a formal academic discipline"
location: "Dartmouth College, New Hampshire"
tags:
  - founding
  - academic
  - terminology
used_in_articles:
  - history-4
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ 🏆 MILESTONE                                   1956     │
│                                                         │
│ Dartmouth Workshop                                      │
│                                                         │
│ The conference that coined "Artificial Intelligence"    │
│ and launched AI as a field.                             │
│                                                         │
│ 👤 McCarthy, Minsky, Shannon, Rochester                 │
│                                                         │
│ 📍 Dartmouth College, New Hampshire                     │
└─────────────────────────────────────────────────────────┘
```

### Sample IDs
- `ms-dartmouth-workshop` (1956)
- `ms-first-neural-network` (1958)
- `ms-ai-winter-1` (1974)
- `ms-expert-systems` (1980s)
- `ms-ai-winter-2` (1987)
- `ms-deep-blue` (1997)
- `ms-alexnet` (2012)
- `ms-alphago` (2016)
- `ms-transformer-paper` (2017)
- `ms-gpt3` (2020)
- `ms-chatgpt` (2022)
- `ms-gpt4` (2023)
- `ms-eu-ai-act` (2024)

---

## 3. Framework Cards (`fw-`)

### Purpose
Regulations, standards, guidelines, and formal governance structures.

### Data Schema
```yaml
id: fw-eu-ai-act
title: "EU AI Act"
jurisdiction: European Union
year_enacted: 2024
type: regulation | standard | guideline | law | executive_order
overview: "World's first comprehensive AI regulation, establishing a risk-based framework for AI systems."
risk_categories:
  - Unacceptable Risk (banned)
  - High Risk (strict requirements)
  - Limited Risk (transparency obligations)
  - Minimal Risk (no specific obligations)
key_requirements:
  - Risk assessments for high-risk AI
  - Human oversight mechanisms
  - Transparency for AI-generated content
  - Conformity assessments
applies_to: "Providers and deployers of AI systems in EU market"
penalties: "Up to €35 million or 7% of global turnover"
effective_dates:
  - "Feb 2025: Prohibited practices"
  - "Aug 2025: GPAI rules"
  - "Aug 2026: High-risk requirements"
official_url: "https://..."
tags:
  - regulation
  - risk-based
  - compliance
used_in_articles:
  - resp-17
  - risk-14
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ ⚖️ REGULATION                          EU • 2024        │
│                                                         │
│ EU AI Act                                               │
│                                                         │
│ World's first comprehensive AI regulation, establishing │
│ a risk-based framework for AI systems.                  │
│                                                         │
│ Risk Categories:                                        │
│ ├── 🚫 Unacceptable (banned)                            │
│ ├── 🔴 High Risk (strict requirements)                  │
│ ├── 🟡 Limited Risk (transparency)                      │
│ └── 🟢 Minimal Risk (no obligations)                    │
│                                                         │
│ Key Requirements:                                       │
│ • Risk assessments for high-risk AI                     │
│ • Human oversight mechanisms                            │
│ • Transparency for AI-generated content                 │
│                                                         │
│ ⚠️ Penalties: Up to €35M or 7% global revenue           │
│                                                         │
│ 📅 Effective: Feb 2025 → Aug 2026 (phased)              │
│                                                         │
│ [📄 Official Document →]                                │
└─────────────────────────────────────────────────────────┘
```

### Type Badges
| Type | Badge | Color |
|------|-------|-------|
| regulation | ⚖️ REGULATION | Orange |
| standard | 📐 STANDARD | Blue |
| guideline | 📋 GUIDELINE | Green |
| law | 🏛️ LAW | Purple |
| executive_order | 🖊️ EXECUTIVE ORDER | Red |

### Sample IDs
- `fw-eu-ai-act`
- `fw-gdpr`
- `fw-nist-ai-rmf`
- `fw-oecd-principles`
- `fw-unesco-ai-ethics`
- `fw-us-ai-bill-of-rights`
- `fw-us-executive-order-14110`
- `fw-nyc-local-law-144`
- `fw-colorado-ai-act`
- `fw-iso-iec-22989`
- `fw-iso-iec-42001`
- `fw-china-algorithm-rules`
- `fw-singapore-model-framework`
- `fw-uk-ai-framework`

---

## 4. Scenario Cards (`sc-`)

### Purpose
Hypothetical teaching examples, thought experiments, and decision-making exercises.

### Data Schema
```yaml
id: sc-hiring-algorithm-dilemma
title: "The Hiring Algorithm Dilemma"
setup: "Your company's AI screening tool improves efficiency 40% but shows 15% lower selection rate for women."
challenge: "Balance efficiency gains against potential discrimination and legal liability"
options:
  - "Continue using with monitoring"
  - "Adjust algorithm to equalize rates"
  - "Discontinue AI screening"
  - "Implement hybrid human-AI review"
teaching_point: "Efficiency vs fairness tradeoffs require human judgment, not just optimization"
related_concepts:
  - Disparate impact
  - Four-fifths rule
  - Business necessity defense
discussion_questions:
  - "What data would you need to make this decision?"
  - "Who should be involved in the decision?"
  - "What are the legal implications of each option?"
tags:
  - hiring
  - bias
  - decision-making
  - ethics
used_in_articles:
  - resp-2
  - risk-2
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ 💭 SCENARIO                                             │
│                                                         │
│ The Hiring Algorithm Dilemma                            │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 📋 Setup                                            │ │
│ │ Your company's AI screening tool improves           │ │
│ │ efficiency 40% but shows 15% lower selection        │ │
│ │ rate for women.                                     │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ ❓ What do you do?                                      │
│                                                         │
│ Options:                                                │
│ ○ Continue using with monitoring                        │
│ ○ Adjust algorithm to equalize rates                    │
│ ○ Discontinue AI screening                              │
│ ○ Implement hybrid human-AI review                      │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 🎯 Teaching Point                                   │ │
│ │ Efficiency vs fairness tradeoffs require human      │ │
│ │ judgment, not just optimization.                    │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ [💬 Discussion Questions ▼]                             │
└─────────────────────────────────────────────────────────┘
```

### Sample IDs
- `sc-hiring-algorithm-dilemma`
- `sc-autonomous-vehicle-trolley`
- `sc-credit-denial-explanation`
- `sc-facial-recognition-mall`
- `sc-content-moderation-speech`
- `sc-medical-diagnosis-override`
- `sc-predictive-policing-deployment`
- `sc-chatbot-mental-health`
- `sc-deepfake-whistleblower`
- `sc-ai-generated-evidence`

---

## 5. Resource Cards (`res-`)

### Purpose
Practical tools, templates, checklists, and downloadable assets.

### Data Schema
```yaml
id: res-model-card-template
title: "AI Model Card Template"
type: template | checklist | assessment | decision-tree | playbook | matrix | guide
purpose: "Standardized documentation for ML models covering purpose, performance, limitations, and ethical considerations"
when_to_use:
  - Before model deployment
  - During governance reviews
  - For regulatory compliance
key_sections:
  - Model Details
  - Intended Use
  - Training Data
  - Performance Metrics
  - Limitations
  - Ethical Considerations
format:
  - markdown
  - pdf
  - docx
downloadable: true
download_url: "/downloads/model-card-template.docx"
preview_available: true
tags:
  - documentation
  - model-cards
  - compliance
used_in_articles:
  - resp-95
  - risk-14
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ 📋 TEMPLATE                                             │
│                                                         │
│ AI Model Card Template                                  │
│                                                         │
│ Standardized documentation for ML models covering       │
│ purpose, performance, limitations, and ethical          │
│ considerations.                                         │
│                                                         │
│ 📂 Sections Included:                                   │
│ • Model Details                                         │
│ • Intended Use                                          │
│ • Training Data                                         │
│ • Performance Metrics                                   │
│ • Limitations                                           │
│ • Ethical Considerations                                │
│                                                         │
│ 🕐 Use When:                                            │
│ • Before model deployment                               │
│ • During governance reviews                             │
│ • For regulatory compliance                             │
│                                                         │
│ ┌───────────┐ ┌───────────┐ ┌───────────┐               │
│ │ 📥 DOCX   │ │ 📥 PDF    │ │ 👁️ Preview │               │
│ └───────────┘ └───────────┘ └───────────┘               │
└─────────────────────────────────────────────────────────┘
```

### Type Badges
| Type | Badge | Color |
|------|-------|-------|
| template | 📋 TEMPLATE | Blue |
| checklist | ✅ CHECKLIST | Green |
| assessment | 📊 ASSESSMENT | Purple |
| decision-tree | 🌳 DECISION TREE | Orange |
| playbook | 📕 PLAYBOOK | Red |
| matrix | 📐 MATRIX | Teal |
| guide | 📖 GUIDE | Brown |

### Sample IDs
- `res-model-card-template`
- `res-bias-audit-checklist`
- `res-risk-assessment-template`
- `res-impact-assessment-guide`
- `res-policy-templates`
- `res-ethics-review-process`
- `res-incident-response-playbook`
- `res-vendor-evaluation-framework`
- `res-governance-roadmap`
- `res-aigp-study-guide`

---

## 6. Expert Quotes (`quote-`)

### Purpose
Notable predictions, warnings, or insights from AI thought leaders.

### Data Schema
```yaml
id: quote-hinton-existential-risk
speaker: Geoffrey Hinton
role: "Former Google AI Lead, Turing Award Winner"
quote: "AI could be more dangerous than nuclear weapons."
year: 2023
context: "On leaving Google to speak freely about AI risks"
source: "New York Times Interview"
source_url: "https://..."
tags:
  - existential-risk
  - safety
  - warning
used_in_articles:
  - future-1
  - risk-10
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ 💬 EXPERT INSIGHT                              2023     │
│                                                         │
│ "AI could be more dangerous than nuclear weapons."      │
│                                                         │
│ — Geoffrey Hinton                                       │
│   Former Google AI Lead, Turing Award Winner            │
│                                                         │
│ 📍 Context: On leaving Google to speak freely about     │
│ AI risks                                                │
│                                                         │
│ 📰 New York Times [→]                                   │
└─────────────────────────────────────────────────────────┘
```

### Sample IDs
- `quote-hinton-existential-risk`
- `quote-altman-agi-timeline`
- `quote-lecun-ai-not-dangerous`
- `quote-bengio-pause-letter`
- `quote-ng-ai-electricity`
- `quote-musk-ai-demon`
- `quote-gates-ai-opportunity`
- `quote-amodei-responsible-scaling`

---

## 7. Market Insights (`insight-`)

### Purpose
Statistics, costs, market data, and quantitative insights about AI industry.

### Data Schema
```yaml
id: insight-gpu-training-costs
metric: "Cost to Train GPT-4 Scale Model"
value: "$100M+"
year: 2024
source: "Industry estimates, OpenAI disclosures"
source_url: "https://..."
significance: "Creates massive barrier to entry, concentrating AI development among few players"
trend: "increasing"
comparison:
  - "GPT-3 (2020): ~$4.6M"
  - "GPT-4 (2023): ~$100M"
  - "GPT-5 (est.): $500M+"
tags:
  - costs
  - compute
  - barriers
used_in_articles:
  - history-14
  - future-3
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ 📊 MARKET DATA                                 2024     │
│                                                         │
│ Cost to Train GPT-4 Scale Model                         │
│                                                         │
│           ┌─────────────────────┐                       │
│           │      $100M+         │                       │
│           └─────────────────────┘                       │
│                    📈                                   │
│                                                         │
│ 📈 Why It Matters:                                      │
│ Creates massive barrier to entry, concentrating AI      │
│ development among few players.                          │
│                                                         │
│ 📉 Trend:                                               │
│ • GPT-3 (2020): ~$4.6M                                  │
│ • GPT-4 (2023): ~$100M                                  │
│ • GPT-5 (est.): $500M+                                  │
│                                                         │
│ 📰 Source: Industry estimates                           │
└─────────────────────────────────────────────────────────┘
```

### Sample IDs
- `insight-gpu-training-costs`
- `insight-ai-market-size`
- `insight-chatgpt-growth`
- `insight-nvidia-market-cap`
- `insight-ai-investment-2024`
- `insight-foundation-model-compute`
- `insight-ai-chip-shortage`
- `insight-cloud-ai-revenue`
- `insight-ai-startup-funding`
- `insight-enterprise-ai-adoption`
- `insight-ai-talent-shortage`

---

## 8. Workforce Trends (`trend-`)

### Purpose
Job impact statistics, employment predictions, and workforce transformation data.

### Data Schema
```yaml
id: trend-300m-jobs-affected
metric: "Jobs Affected by AI Automation"
value: "300 Million"
source: "Goldman Sachs (2023)"
source_url: "https://..."
timeframe: "Next 10 years"
sectors_impacted:
  - Legal
  - Finance
  - Administrative
  - Customer Service
  - Creative
impact_type: "displaced | augmented | created"
geographic_scope: "Global"
significance: "Largest workforce transformation since Industrial Revolution"
tags:
  - automation
  - jobs
  - displacement
used_in_articles:
  - risk-8
  - future-5
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ 👥 WORKFORCE IMPACT                                     │
│                                                         │
│ Jobs Affected by AI Automation                          │
│                                                         │
│           ┌─────────────────────┐                       │
│           │   300 Million       │                       │
│           │      Global         │                       │
│           └─────────────────────┘                       │
│                                                         │
│ 🏭 Sectors Most Impacted:                               │
│ • Legal                                                 │
│ • Finance                                               │
│ • Administrative                                        │
│ • Customer Service                                      │
│                                                         │
│ 📅 Timeframe: Next 10 years                             │
│                                                         │
│ 📰 Source: Goldman Sachs (2023)                         │
└─────────────────────────────────────────────────────────┘
```

### Sample IDs
- `trend-300m-jobs-affected`
- `trend-ai-job-creation`
- `trend-skill-shift-demand`
- `trend-ai-governance-careers`
- `trend-automation-by-sector`
- `trend-wage-polarization`
- `trend-remote-work-ai`
- `trend-gig-economy-ai`

---

## 9. Technical Concepts (`concept-`)

### Purpose
Technical terms that should link to detailed explanations in the Terminology path.

### Data Schema
```yaml
id: concept-model-drift
term: "Model Drift"
definition: "When an AI model's performance degrades over time because real-world data changes from what it was trained on."
plain_english: "The AI gets worse because the world changed but the AI didn't"
category: drift | bias | architecture | method | metric | security
related_terms:
  - Data drift
  - Concept drift
  - Covariate shift
symptoms:
  - Declining accuracy over time
  - Increased false positives/negatives
  - User complaints about recommendations
mitigation:
  - Continuous monitoring
  - Regular retraining
  - Drift detection alerts
links_to_article: "term-14"
tags:
  - monitoring
  - performance
  - operations
used_in_articles:
  - resp-95
  - risk-10
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ 🔧 TECHNICAL TERM                                       │
│                                                         │
│ Model Drift                                             │
│                                                         │
│ When an AI model's performance degrades over time       │
│ because real-world data changes from what it was        │
│ trained on.                                             │
│                                                         │
│ 💡 Plain English:                                       │
│ "The AI gets worse because the world changed but        │
│ the AI didn't"                                          │
│                                                         │
│ 🔗 Related: Data drift, Concept drift, Covariate shift  │
│                                                         │
│ [📖 Learn more in Terminology Path →]                   │
└─────────────────────────────────────────────────────────┘
```

### Category Badges
| Category | Badge | Color |
|----------|-------|-------|
| drift | 📉 DRIFT | Orange |
| bias | ⚖️ BIAS | Red |
| architecture | 🏗️ ARCHITECTURE | Blue |
| method | ⚙️ METHOD | Green |
| metric | 📏 METRIC | Purple |
| security | 🔒 SECURITY | Gray |

### Sample IDs
- `concept-model-drift`
- `concept-bias-variance`
- `concept-overfitting`
- `concept-feature-engineering`
- `concept-embedding`
- `concept-attention-mechanism`
- `concept-backpropagation`
- `concept-gradient-descent`
- `concept-regularization`
- `concept-cross-validation`
- `concept-precision-recall`
- `concept-auc-roc`
- `concept-confusion-matrix`
- `concept-f1-score`
- `concept-hallucination`
- `concept-prompt-injection`
- `concept-adversarial-attack`
- `concept-differential-privacy`
- `concept-federated-learning`
- `concept-rlhf`
- `concept-fine-tuning`
- `concept-transfer-learning`

---

## 10. Article Links (`article-link`)

### Purpose
Inline links to related articles within the platform. These cards have the same animation as other cards but navigate to the article instead of expanding.

### Data Schema
```yaml
id: article-link-algorithmic-bias
title: "Algorithmic Bias"
type: article-link
articleSlug: "algorithmic-bias"
summary: "Understanding how AI systems can perpetuate and amplify societal biases through training data."
tags:
  - bias
  - fairness
  - ethics
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ 🔗 RELATED ARTICLE                                      │
│                                                         │
│ Algorithmic Bias                                        │
│                                                         │
│ Understanding how AI systems can perpetuate and         │
│ amplify societal biases through training data.         │
│                                                         │
│ 🏷️ bias • fairness • ethics                            │
│                                                         │
│ [Click to read article →]                               │
└─────────────────────────────────────────────────────────┘
```

### Behavior
- **Trigger**: Same animated text as other cards
- **Click**: Navigates to `/articles/{articleSlug}` instead of expanding
- **No Image**: Does not display background image like other cards
- **Same Animation**: Retains the smooth letter-by-letter animation on hover

### Usage Example
```jsx
<InlineContextCard
  trigger="algorithmic bias"
  card={{
    id: 'article-link-algorithmic-bias',
    title: 'Algorithmic Bias',
    type: 'article-link',
    articleSlug: 'algorithmic-bias',
    summary: 'Understanding how AI systems can perpetuate and amplify societal biases through training data.',
    tags: ['bias', 'fairness', 'ethics']
  }}
/>
```

### Sample IDs
- `article-link-algorithmic-bias`
- `article-link-ai-hallucinations`
- `article-link-deepfakes`
- `article-link-eu-ai-act`
- `article-link-model-governance`
- `article-link-explainability`

---

## 11. Operational Patterns (`pattern-`)

### Purpose
Implementation patterns, organizational structures, and governance practices.

### Data Schema
```yaml
id: pattern-three-lines-model
name: "Three Lines Model"
context: "Organizational governance structure for risk management"
problem_solved: "Unclear accountability and oversight for AI systems"
implementation:
  first_line: "Business operations - owns and manages AI risks"
  second_line: "Risk & compliance - provides oversight, frameworks, policies"
  third_line: "Internal audit - independent assurance"
benefits:
  - Clear accountability
  - Separation of duties
  - Independent verification
challenges:
  - Resource requirements
  - Coordination overhead
  - Expertise gaps
used_by:
  - Banks
  - Insurers
  - Regulated industries
source: "Institute of Internal Auditors (IIA)"
tags:
  - governance
  - risk-management
  - organization
used_in_articles:
  - resp-102
  - resp-113
```

### UI Wireframe
```
┌─────────────────────────────────────────────────────────┐
│ ⚙️ OPERATIONAL PATTERN                                  │
│                                                         │
│ Three Lines Model                                       │
│                                                         │
│ Organizational governance structure for risk management │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 1st Line │ Business operations                      │ │
│ │          │ Owns and manages AI risks                │ │
│ ├──────────┼──────────────────────────────────────────┤ │
│ │ 2nd Line │ Risk & Compliance                        │ │
│ │          │ Provides oversight, frameworks, policies │ │
│ ├──────────┼──────────────────────────────────────────┤ │
│ │ 3rd Line │ Internal Audit                           │ │
│ │          │ Independent assurance                    │ │
│ └──────────┴──────────────────────────────────────────┘ │
│                                                         │
│ 🏢 Used By: Banks, Insurers, Regulated Industries       │
│                                                         │
│ 📚 Source: Institute of Internal Auditors (IIA)         │
└─────────────────────────────────────────────────────────┘
```

### Sample IDs
- `pattern-three-lines-model`
- `pattern-human-in-the-loop`
- `pattern-human-on-the-loop`
- `pattern-human-out-of-loop`
- `pattern-red-teaming`
- `pattern-model-cards`
- `pattern-datasheets-for-datasets`
- `pattern-ai-incident-response`
- `pattern-continuous-monitoring`
- `pattern-staged-rollout`
- `pattern-shadow-mode`
- `pattern-canary-deployment`
- `pattern-a-b-testing-ai`

---

## Card Display Modes

### Inline Mode (Within Article)
- Compact view
- Shows title, type badge, summary
- Click to expand or link to full card

### Modal Mode (Popup)
- Full card details
- All fields displayed
- Close button to return

### Sidebar Mode (Reference Panel)
- List of relevant cards
- Quick preview on hover
- Click to scroll to usage in article

### Standalone Mode (Card Library)
- Full card with all details
- Navigation to related cards
- List of articles using this card

---

## Card Interaction Behaviors

### Hover
- Slight elevation/glow
- Preview tooltip (title + summary)

### Click
- Expand inline OR open modal (configurable)
- Smooth animation

### Link
- Cards can link to each other
- Cards link to articles that use them
- Articles link to cards they reference

---

## Color Scheme Suggestions

| Card Type | Primary Color | Badge Background |
|-----------|---------------|------------------|
| Example | Red `#E53E3E` | Red-50 |
| Milestone | Gold `#D69E2E` | Yellow-50 |
| Framework | Orange `#DD6B20` | Orange-50 |
| Scenario | Purple `#805AD5` | Purple-50 |
| Resource | Blue `#3182CE` | Blue-50 |
| Quote | Teal `#319795` | Teal-50 |
| Insight | Green `#38A169` | Green-50 |
| Trend | Pink `#D53F8C` | Pink-50 |
| Concept | Gray `#718096` | Gray-50 |
| Pattern | Indigo `#5A67D8` | Indigo-50 |
| Article Link | Indigo `#6366F1` | Indigo-100 |

---

## Summary

**Total Card Components: ~173+**

| Type | Count | Primary Use |
|------|-------|-------------|
| Example Cards | 36 | Illustrate real-world governance lessons |
| Milestone Cards | 14 | Provide historical context |
| Framework Cards | 14 | Reference regulations and standards |
| Scenario Cards | 27 | Enable interactive learning |
| Resource Cards | ~20 | Provide practical tools |
| Expert Quotes | 8 | Add authority and perspective |
| Market Insights | 11 | Ground content in data |
| Workforce Trends | 8 | Show human impact |
| Technical Concepts | 22 | Link to detailed explanations |
| Operational Patterns | 13 | Provide implementation guidance |
| Article Links | Variable | Navigate to related articles |

---

*Document Version: 1.0*
*Created: January 6, 2026*
*Purpose: UI Design Reference for Card Components*
