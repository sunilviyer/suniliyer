# AI System Classification Template (OECD Framework)

**Purpose**: Systematic framework for classifying AI systems to determine appropriate governance, risk level, and regulatory requirements
**Based on**: OECD Framework for the Classification of AI Systems (2022)
**Use Case**: AI governance teams, compliance officers, risk managers, policymakers

---

## Overview

The OECD Framework for Classification of AI Systems provides a structured approach to characterizing AI systems for governance purposes. It uses five dimensions to capture the characteristics that matter most for policy and risk assessment.

**Why Classification Matters**:
- Determines regulatory requirements (EU AI Act, national laws)
- Informs risk assessment and mitigation strategies
- Enables AI inventory and registry management
- Supports incident reporting and accountability
- Facilitates sector-specific governance frameworks

**Key Principle**: Not all AI is created equal. A spam filter and a criminal sentencing algorithm require vastly different governance approaches.

---

## The Five OECD Dimensions

```
┌─────────────────────────────────────────────────────────┐
│         OECD AI SYSTEM CLASSIFICATION FRAMEWORK         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. PEOPLE & PLANET                                     │
│     Who is affected? What are the impacts?              │
│                                                         │
│  2. ECONOMIC CONTEXT                                    │
│     What sector? Who deploys it? Business model?        │
│                                                         │
│  3. DATA & INPUT                                        │
│     What data? How collected? Quality?                  │
│                                                         │
│  4. AI MODEL                                            │
│     What type? How transparent? How robust?             │
│                                                         │
│  5. TASK & OUTPUT                                       │
│     What does it do? What decisions? Can users opt out? │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Dimension 1: People & Planet

**Purpose**: Understand who is affected by the AI system and what impacts it has on human rights, wellbeing, safety, and the environment.

### Assessment Questions

```
PEOPLE & PLANET ASSESSMENT

AFFECTED POPULATIONS
□ Who interacts with this AI system directly?
  _______________________________________

□ Who is affected by decisions made by this AI?
  _______________________________________

□ Are vulnerable populations affected? (Check all that apply)
  □ Children
  □ Elderly
  □ People with disabilities
  □ Marginalized communities
  □ Economically disadvantaged
  □ Other: _______________

□ How many people are affected?
  □ Individual users only (<100)
  □ Small group (100-10,000)
  □ Large group (10,000-1M)
  □ Mass scale (>1M)

HUMAN RIGHTS IMPACTS
□ Which fundamental rights are implicated? (Check all)
  □ Privacy and data protection
  □ Non-discrimination and equality
  □ Freedom of expression
  □ Freedom of assembly
  □ Right to work / employment
  □ Access to education
  □ Access to essential services (healthcare, housing, credit)
  □ Due process and fair trial
  □ Safety and security
  □ Human dignity
  □ Other: _______________

WELLBEING & SAFETY IMPACTS
□ Could this AI cause physical harm?
  □ No
  □ Indirect (e.g., through poor medical advice)
  □ Direct (e.g., autonomous vehicle, medical device)

□ Could this AI cause psychological harm?
  □ No
  □ Possible (e.g., discriminatory outcomes, privacy violations)
  □ Likely (e.g., manipulative content targeting vulnerable users)

□ Could this AI affect access to critical services?
  □ No
  □ Yes - which services? _______________

ENVIRONMENTAL IMPACTS
□ Energy consumption and carbon footprint
  □ Low (inference only, small scale)
  □ Moderate (regular retraining, medium scale)
  □ High (large language models, massive scale)

□ Resource requirements (compute, water for cooling, rare materials)
  _______________________________________________

IRREVERSIBILITY
□ Can harm from this AI be easily reversed?
  □ Yes (e.g., bad movie recommendation)
  □ Partially (e.g., credit denial - can reapply)
  □ Difficult (e.g., wrongful arrest - lasting reputation harm)
  □ Irreversible (e.g., autonomous weapon)

ASSESSMENT SCORE
Based on above, impact on People & Planet is:
□ Minimal (low stakes, few people, no fundamental rights)
□ Limited (moderate stakes or fundamental rights for small group)
□ Significant (high stakes or affects many people)
□ Critical (fundamental rights at stake for large populations)
```

---

## Dimension 2: Economic Context

**Purpose**: Understand the sector, business model, deployment context, and economic incentives shaping the AI system.

### Assessment Questions

```
ECONOMIC CONTEXT ASSESSMENT

SECTOR & DOMAIN
□ What sector does this AI operate in?
  □ Healthcare
  □ Finance & Banking
  □ Education
  □ Employment & HR
  □ Law Enforcement & Justice
  □ Transportation
  □ Critical Infrastructure (energy, water, etc.)
  □ Retail & E-commerce
  □ Entertainment & Media
  □ Social Media & Platforms
  □ Government & Public Services
  □ Agriculture
  □ Manufacturing
  □ Other: _______________

□ Is this a regulated sector? (Check if yes)
  □ Yes - which regulations apply? _______________

BUSINESS MODEL
□ How does this AI create value?
  □ Automation (reduces costs)
  □ Optimization (improves efficiency)
  □ Personalization (increases engagement/sales)
  □ Prediction (enables better decisions)
  □ Generation (creates content/products)
  □ Surveillance (monitors behavior)
  □ Other: _______________

□ Who pays for this AI?
  □ Users pay directly (subscription, purchase)
  □ Third parties pay (advertising model)
  □ Free public service
  □ Internal organizational use (cost center)

DEPLOYMENT & OWNERSHIP
□ Who developed this AI?
  □ Internal development
  □ Purchased from vendor
  □ Open-source
  □ Government/public sector
  □ Partnership/collaboration

□ Who deploys/operates this AI?
  □ Technology provider (vendor)
  □ End-use organization (buyer)
  □ Third-party operator
  □ User-controlled (e.g., personal device)

□ Who owns the data used/generated?
  □ Users
  □ Deploying organization
  □ Technology provider
  □ Public domain
  □ Disputed/unclear

MARKET DYNAMICS
□ Competitive landscape
  □ Many alternatives available
  □ Few alternatives (oligopoly)
  □ No alternatives (monopoly)
  □ Required by law/regulation

□ Can users/organizations opt out?
  □ Yes, easily (competitive market)
  □ Difficult (switching costs, lock-in)
  □ Impossible (monopoly, regulatory requirement)

INCENTIVE ALIGNMENT
□ Are the AI provider's incentives aligned with user/societal wellbeing?
  □ Yes (provider benefits when users benefit)
  □ Partially (some alignment, some conflicts)
  □ No (provider profits from user harm)

  Example misalignment: _______________

ASSESSMENT SCORE
Based on above, economic context risk is:
□ Low (competitive market, aligned incentives, easy opt-out)
□ Medium (some market power, partial alignment)
□ High (monopoly, misaligned incentives, no alternatives, critical sector)
```

---

## Dimension 3: Data & Input

**Purpose**: Understand what data powers the AI, how it was collected, its quality, and potential biases.

### Assessment Questions

```
DATA & INPUT ASSESSMENT

DATA SOURCES
□ What types of data does this AI use? (Check all)
  □ Personal data (names, contact, demographics)
  □ Behavioral data (clicks, purchases, usage patterns)
  □ Biometric data (face, fingerprints, voice, gait)
  □ Health data (medical records, symptoms, genetics)
  □ Financial data (transactions, credit history, income)
  □ Location data (GPS, IP address)
  □ Communication data (emails, messages, calls)
  □ Social data (connections, relationships, affiliations)
  □ User-generated content (posts, photos, videos)
  □ Sensor data (IoT devices, cameras, microphones)
  □ Public records (government databases, court records)
  □ Proprietary data (internal business data)
  □ Scraped web data
  □ Synthetic data (artificially generated)
  □ Other: _______________

DATA SENSITIVITY
□ Is the data considered "sensitive" under data protection laws?
  □ No
  □ Yes - which categories?
    □ Racial or ethnic origin
    □ Political opinions
    □ Religious beliefs
    □ Trade union membership
    □ Genetic data
    □ Biometric data for unique identification
    □ Health data
    □ Sex life or sexual orientation
    □ Criminal convictions

DATA COLLECTION
□ How was data collected?
  □ Directly from users (surveys, forms)
  □ Observed behavior (tracking, monitoring)
  □ Third-party sources (data brokers, partners)
  □ Public sources (web scraping, government records)
  □ Sensors and devices
  □ Generated by system itself

□ Was consent obtained?
  □ Explicit, informed consent
  □ Implied consent (terms of service)
  □ No consent (public data, legal basis)
  □ Unclear

□ Can users access, correct, delete their data?
  □ Yes, easily
  □ Yes, but difficult process
  □ No

DATA QUALITY
□ How complete is the data?
  □ Comprehensive (few missing values)
  □ Moderate (some gaps)
  □ Sparse (many missing values)

□ How accurate is the data?
  □ High accuracy (verified, validated)
  □ Moderate accuracy (some errors expected)
  □ Low accuracy (high error rate)
  □ Unknown

□ How representative is the data?
  □ Highly representative of deployment population
  □ Somewhat representative
  □ Not representative (training ≠ deployment population)
  □ Unknown

DATA BIAS
□ Does the data reflect historical biases?
  □ No
  □ Possibly
  □ Yes - what biases? _______________

□ Are any demographic groups underrepresented?
  □ No
  □ Yes - which groups? _______________

□ Does data reflect systemic inequalities?
  (e.g., hiring data from era of discrimination, healthcare data reflecting unequal access)
  □ No
  □ Yes - describe: _______________

DATA LINEAGE
□ Is data source documented?
  □ Yes, comprehensive documentation
  □ Partial documentation
  □ No documentation

□ Can you trace data back to origin?
  □ Yes
  □ Partially
  □ No

□ Is there a data sheet (Gebru et al. 2021 format)?
  □ Yes
  □ In progress
  □ No

ASSESSMENT SCORE
Based on above, data risk is:
□ Low (non-sensitive, consented, high-quality, representative, well-documented)
□ Medium (some sensitive data, consent unclear, moderate quality)
□ High (sensitive data, no consent, poor quality, biased, undocumented)
```

---

## Dimension 4: AI Model

**Purpose**: Understand the technical characteristics of the AI model—what type, how transparent, how robust.

### Assessment Questions

```
AI MODEL ASSESSMENT

MODEL TYPE
□ What AI/ML technique(s) are used? (Check all)
  □ Rule-based system
  □ Decision tree / Random forest
  □ Linear regression / Logistic regression
  □ Support Vector Machine (SVM)
  □ Neural network (specify type below)
  □ Deep learning
    □ Convolutional Neural Network (CNN)
    □ Recurrent Neural Network (RNN / LSTM / GRU)
    □ Transformer (BERT, GPT, etc.)
    □ Generative Adversarial Network (GAN)
    □ Diffusion model
  □ Ensemble methods
  □ Reinforcement learning
  □ Other: _______________

MODEL COMPLEXITY
□ Model size/complexity
  □ Simple (few parameters, interpretable)
  □ Moderate (thousands to millions of parameters)
  □ Large (tens of millions of parameters)
  □ Massive (billions+ parameters, foundation model)

TRANSPARENCY & EXPLAINABILITY
□ Can the model explain individual decisions?
  □ Yes, directly interpretable (e.g., decision tree)
  □ Post-hoc explanations possible (e.g., LIME, SHAP)
  □ Limited explanations (e.g., feature importance only)
  □ Black box (no explanations)

□ Is the model architecture documented?
  □ Yes, fully documented
  □ Partially documented
  □ Proprietary / not documented

□ Is there a model card (Mitchell et al. 2019 format)?
  □ Yes
  □ In progress
  □ No

ROBUSTNESS
□ How robust is the model to adversarial attacks?
  □ Tested against adversarial examples, robust
  □ Some testing, moderate robustness
  □ No adversarial testing
  □ Known vulnerabilities

□ How robust is the model to distribution shift?
  (When deployment data differs from training data)
  □ Handles distribution shift well
  □ Moderate robustness
  □ Fails when data shifts
  □ Unknown

□ Are failure modes known and documented?
  □ Yes, comprehensive failure mode analysis
  □ Partially documented
  □ No

PERFORMANCE
□ What is the model's accuracy/performance?
  Overall accuracy: ______%

□ Has performance been measured across demographic groups?
  □ Yes, disaggregated metrics available
  □ No, only overall metrics

□ Is performance adequate for the use case?
  □ Yes
  □ Borderline
  □ No

ADAPTIVITY
□ Does the model learn/adapt after deployment?
  □ No, static model
  □ Yes, continuously learns from new data
  □ Yes, periodic retraining
  □ Yes, reinforcement learning from user feedback

□ If adaptive, are learning mechanisms monitored?
  □ Yes, comprehensive monitoring
  □ Partial monitoring
  □ No monitoring
  □ N/A (static model)

DEPENDENCIES
□ Does the model rely on third-party components?
  □ No, fully in-house
  □ Yes - pre-trained models (transfer learning)
  □ Yes - APIs or external services
  □ Yes - open-source libraries

□ Are dependencies documented and monitored?
  □ Yes
  □ Partially
  □ No

ASSESSMENT SCORE
Based on above, model risk is:
□ Low (simple, transparent, robust, well-documented, high-performance)
□ Medium (moderate complexity, some explainability, adequate robustness)
□ High (black box, brittle, poor documentation, unknown failure modes)
```

---

## Dimension 5: Task & Output

**Purpose**: Understand what the AI system actually does, what decisions it makes, and how users can interact with or override it.

### Assessment Questions

```
TASK & OUTPUT ASSESSMENT

PRIMARY TASK
□ What is the AI's primary task? (Check main category)
  □ Recognition / Detection (identify patterns, objects, anomalies)
  □ Forecasting / Prediction (predict future events, risks, behaviors)
  □ Personalization / Recommendation (tailor content, suggestions)
  □ Optimization (find best solution within constraints)
  □ Generation / Creation (create content, designs, code)
  □ Decision / Classification (approve/deny, categorize)
  □ Interaction / Dialogue (chatbots, virtual assistants)
  □ Control / Automation (autonomous systems, robotics)

  Specific task: _______________________________________________

OUTPUT TYPE
□ What does the AI produce?
  □ Score or ranking (e.g., credit score, search results)
  □ Classification (e.g., spam/not spam, high-risk/low-risk)
  □ Prediction (e.g., likelihood of event, estimated value)
  □ Recommendation (e.g., products, content, candidates)
  □ Generated content (e.g., text, images, code)
  □ Decision (e.g., approve/deny, hire/reject)
  □ Action (e.g., autonomous vehicle steering, robotic movement)
  □ Other: _______________

DECISION AUTONOMY
□ How automated is decision-making?
  □ Fully automated (AI decides, no human review)
  □ Human-on-the-loop (AI decides, human reviews exceptions)
  □ Human-in-the-loop (AI recommends, human decides)
  □ Human-over-the-loop (AI assists, human fully controls)

□ Can humans override AI decisions?
  □ Yes, easily
  □ Yes, but difficult or discouraged
  □ No override mechanism

DECISION STAKES
□ What are the consequences of AI decisions?
  □ Low stakes (inconvenience if wrong, e.g., bad movie recommendation)
  □ Medium stakes (financial or time impact, e.g., longer commute, delivery delay)
  □ High stakes (affects opportunities, e.g., job offer, loan approval, college admission)
  □ Critical stakes (affects fundamental rights, safety, or liberty)

□ If the AI makes a mistake, what happens?
  _______________________________________________

TEMPORAL CHARACTERISTICS
□ How time-sensitive are AI outputs?
  □ Real-time (immediate decision required)
  □ Near real-time (seconds to minutes)
  □ Batch processing (hours to days acceptable)

□ How long do AI decisions/outputs persist?
  □ Ephemeral (seconds, e.g., navigation suggestions)
  □ Short-term (days to months, e.g., content recommendations)
  □ Long-term (years, e.g., credit scoring)
  □ Permanent (affects permanent records, e.g., criminal risk scores)

USER AGENCY
□ Are users aware the AI is being used?
  □ Yes, clearly disclosed
  □ Partially (mentioned in terms of service)
  □ No, hidden

□ Can users opt out of AI system?
  □ Yes, alternatives available
  □ Partial (can opt out but with significant costs)
  □ No opt-out

□ Can users challenge AI decisions?
  □ Yes, clear appeal/redress process
  □ Possible but unclear how
  □ No mechanism for challenge

FEEDBACK & LEARNING
□ Does the system learn from its outputs/outcomes?
  □ Yes, continuous feedback loop
  □ Periodic updates based on outcomes
  □ No, static system

□ Are there risks of feedback loops amplifying bias?
  (e.g., predictive policing directing more police to already over-policed areas)
  □ No
  □ Possible
  □ Yes - describe risk: _______________

SCOPE & PURPOSE LIMITATION
□ Is the AI used only for its intended purpose?
  □ Yes
  □ No, purpose has expanded beyond original intent
  □ Unknown

□ Are there controls preventing purpose creep?
  □ Yes, technical and policy controls
  □ Policy controls only
  □ No controls

ASSESSMENT SCORE
Based on above, task/output risk is:
□ Low (low stakes, human decides, opt-out available, transparent)
□ Medium (medium stakes, human oversight, limited opt-out)
□ High (critical stakes, fully automated, no opt-out, opaque)
```

---

## Overall Classification & Risk Determination

After assessing all five dimensions, synthesize into overall risk classification.

```
OVERALL AI SYSTEM CLASSIFICATION

SYSTEM NAME: _______________________________
DATE: _____________
ASSESSED BY: _______________________________

DIMENSION SCORES:
1. People & Planet:    □ Minimal  □ Limited  □ Significant  □ Critical
2. Economic Context:   □ Low      □ Medium   □ High
3. Data & Input:       □ Low      □ Medium   □ High
4. AI Model:           □ Low      □ Medium   □ High
5. Task & Output:      □ Low      □ Medium   □ High

OVERALL RISK LEVEL:
□ MINIMAL RISK
  - Minimal impact on people/planet
  - Low stakes
  - Voluntary codes of conduct sufficient

□ LIMITED RISK
  - Limited impact on people/planet or fundamental rights for small group
  - Medium stakes
  - Transparency obligations recommended

□ HIGH RISK
  - Significant impact on fundamental rights or affects many people
  - High stakes decisions
  - Strict governance requirements

□ UNACCEPTABLE RISK / PROHIBITED
  - Violates fundamental rights
  - Critical safety risks
  - Should not be deployed

REGULATORY MAPPING:
(Map to applicable frameworks)

EU AI Act Category:
□ Prohibited
□ High-Risk (strict requirements apply)
□ Limited Risk (transparency obligations)
□ Minimal Risk

Other Applicable Regulations:
□ GDPR (data protection)
□ Sector-specific (healthcare, finance, etc.): _______________
□ National AI laws: _______________
□ Other: _______________

GOVERNANCE REQUIREMENTS:
Based on risk level, this AI system requires:

Pre-Deployment:
□ Bias audit / fairness testing
□ Conformity assessment
□ Risk assessment
□ Validation/testing documentation
□ Data quality assessment
□ Model card / documentation

Deployment:
□ Human oversight mechanisms
□ Transparency to users (disclosure of AI use)
□ User opt-out mechanisms
□ Logging and record-keeping
□ Incident response plan

Post-Deployment:
□ Ongoing performance monitoring
□ Regular bias audits
□ Drift detection
□ Impact assessments
□ External audits

NEXT STEPS:
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
```

---

## Application Examples

### Example 1: Resume Screening AI (High-Risk)

```
DIMENSION ASSESSMENT:
1. People & Planet: SIGNIFICANT (affects employment access - fundamental right)
2. Economic Context: HIGH (HR/employment sector, monopoly employer in some markets)
3. Data & Input: HIGH (historical hiring data reflects past discrimination)
4. AI Model: MEDIUM (neural network, moderate explainability)
5. Task & Output: HIGH (hiring decision, high stakes, limited opt-out)

OVERALL RISK: HIGH-RISK

GOVERNANCE REQUIREMENTS:
- Mandatory bias audit (NYC Local Law 144)
- Disaggregated performance testing
- Human review of decisions
- Transparency to candidates
- Challenge/redress mechanism
- Regular audits
```

### Example 2: Spam Filter (Minimal Risk)

```
DIMENSION ASSESSMENT:
1. People & Planet: MINIMAL (inconvenience if wrong, affects individuals only)
2. Economic Context: LOW (competitive market, easy alternatives)
3. Data & Input: LOW (email content, user labels spam/not spam)
4. AI Model: LOW (relatively simple, understandable)
5. Task & Output: LOW (low stakes, user overrides easily)

OVERALL RISK: MINIMAL RISK

GOVERNANCE REQUIREMENTS:
- Voluntary best practices
- User control (mark spam/not spam)
- Basic transparency (users know filter exists)
```

### Example 3: Medical Diagnosis AI (High-Risk)

```
DIMENSION ASSESSMENT:
1. People & Planet: CRITICAL (patient health, safety at stake)
2. Economic Context: HIGH (healthcare sector, highly regulated)
3. Data & Input: HIGH (sensitive health data, potential bias)
4. AI Model: MEDIUM-HIGH (deep learning, limited explainability)
5. Task & Output: CRITICAL (medical decisions, life/death stakes)

OVERALL RISK: HIGH-RISK / CRITICAL

GOVERNANCE REQUIREMENTS:
- Clinical validation trials
- FDA/regulatory approval
- Physician oversight (human-in-loop)
- Explainability for medical decisions
- Diverse training data
- Ongoing performance monitoring
- Adverse event reporting
```

---

## Integration with Other Frameworks

### Mapping to OECD AI Principles

After classifying your AI system, ensure it aligns with OECD AI Principles:

1. **Inclusive Growth, Sustainable Development, and Well-being**: Does this AI benefit society? Who is excluded?
2. **Human-Centered Values and Fairness**: Does it respect human rights, diversity, fairness?
3. **Transparency and Explainability**: Can stakeholders understand how it works?
4. **Robustness, Security, and Safety**: Is it reliable, secure, safe throughout lifecycle?
5. **Accountability**: Are there clear lines of responsibility?

### Mapping to ISO/IEC Standards

- **ISO/IEC 22989** (AI Concepts): Use standardized terminology in documentation
- **ISO/IEC 23053** (AI Framework): Incorporate into AI management system
- **ISO/IEC 42001** (AI Management System): Integrate classification into organizational AI governance

### Mapping to National/Regional Regulations

**EU AI Act**: Use classification to determine if system is high-risk under Annex III
**U.S. AI Bill of Rights**: Assess alignment with five principles (safe/effective, discrimination protections, data privacy, notice/explanation, opt-out)
**Canada's AIDA**: Determine if system is high-impact
**UK National AI Strategy**: Map to pro-innovation framework requirements

---

## Maintaining the Classification

AI systems evolve. Classification should be reviewed:

**Triggers for Re-Classification**:
- [ ] Significant model update or retraining
- [ ] Change in deployment context (new sector, new users)
- [ ] Change in purpose or use case (scope expansion)
- [ ] New data sources added
- [ ] Regulatory changes
- [ ] Incident or failure revealing new risks
- [ ] Periodic review (annually minimum for high-risk)

**Version Control**:
- Track classification version with model version
- Document changes between classifications
- Maintain classification history for audit trail

---

**Used By Articles**:
- AI Governance Frameworks: Building Your Organization's Approach
- [Future articles on AI risk assessment, regulatory compliance, AI inventory management]

**Reusable For**:
- AI governance articles
- Regulatory compliance articles
- Risk management articles
- AI inventory/registry articles
- Policy development articles
