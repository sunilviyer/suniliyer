# AI Explainability Assessment and Implementation Framework

## Purpose
Systematic framework for evaluating explainability requirements, choosing appropriate model complexity, implementing explanation techniques, and building explanation infrastructure for AI systems across the interpretability spectrum.

## When to Use This Template
- Designing new AI systems where transparency requirements must be determined
- Evaluating existing black-box systems for explainability improvement
- Responding to regulatory requirements for AI transparency
- Building stakeholder-facing explanation capabilities
- Making model selection decisions (interpretable vs complex)

---

## Part 1: Explainability Needs Assessment

### Step 1.1: Determine Consequence Level

**Use Case Description:**

| Element | Details |
|---------|---------|
| AI system name | |
| Primary function | |
| Decision type (recommendation / automated decision / human-in-loop) | |
| Frequency of decisions | |
| Stakeholders affected | |

**Consequence Assessment:**

| Question | Yes/No | Details | Severity (1-5) |
|----------|--------|---------|----------------|
| Could decisions significantly affect individual rights or freedoms? | | | |
| Could wrong decisions cause financial harm? | | | |
| Could wrong decisions cause reputational harm? | | | |
| Could wrong decisions cause physical harm or safety risks? | | | |
| Could wrong decisions affect employment or economic opportunities? | | | |
| Could wrong decisions affect access to essential services (housing, credit, healthcare, education)? | | | |
| Could decisions disproportionately affect vulnerable populations? | | | |
| Could decisions be legally challenged or require appeal processes? | | | |

**Overall Consequence Level:**
- [ ] **Critical** (Safety-critical, life-affecting, irreversible harm possible) → **REQUIRE HIGH EXPLAINABILITY**
- [ ] **High** (Significant individual impact, legal/financial consequences) → **REQUIRE MODERATE-HIGH EXPLAINABILITY**
- [ ] **Medium** (Moderate impact, reversible, appeal available) → **REQUIRE MODERATE EXPLAINABILITY**
- [ ] **Low** (Minor convenience, easily reversible, low stakes) → **MINIMAL EXPLAINABILITY ACCEPTABLE**

---

### Step 1.2: Identify Regulatory and Legal Requirements

**Applicable Regulations:**

| Regulation/Law | Applies? | Specific Requirements | Explainability Level Needed |
|----------------|----------|----------------------|----------------------------|
| **GDPR Article 22** (EU) | ☐ Yes ☐ No | Right to "meaningful information about the logic involved" | High |
| **EU AI Act** | ☐ Yes ☐ No | High-risk AI transparency requirements | High |
| **Equal Credit Opportunity Act** (US) | ☐ Yes ☐ No | Specific reasons required for credit denials | High |
| **Fair Credit Reporting Act** (US) | ☐ Yes ☐ No | Adverse action notices with specific factors | Moderate-High |
| **Colorado AI Act** | ☐ Yes ☐ No | Statement of AI purpose, nature, and limitations | Moderate |
| **EEOC hiring guidance** (US) | ☐ Yes ☐ No | Justification for employment decisions | High |
| **FDA medical device requirements** (US) | ☐ Yes ☐ No | Interpretability for diagnostic AI | High |
| **Financial services regulations** (varies by jurisdiction) | ☐ Yes ☐ No | Model risk management, explainability | Moderate-High |
| **Industry-specific requirements** (specify): | ☐ Yes ☐ No | | |

**Highest Regulatory Requirement:** ___________________

---

### Step 1.3: Assess Stakeholder Needs

**Stakeholder Explainability Requirements:**

| Stakeholder Type | Explanation Need | Preferred Format | Technical Level | Priority |
|------------------|------------------|------------------|-----------------|----------|
| **Affected individuals** (customers, applicants, patients) | What decision was made and why | Simple language, key factors, actionable feedback | Low | High |
| **Customer service / support staff** | Enough detail to answer questions and handle appeals | Moderate detail, factor contributions, decision logic | Medium | High |
| **Internal decision-makers** (doctors, loan officers, HR) | Full decision reasoning to override or validate | Detailed factor breakdown, confidence scores, alternative scenarios | Medium-High | High |
| **Auditors / compliance** | Ability to verify decisions comply with policies | Complete audit trail, all factors, decision rules, bias metrics | High | Medium |
| **Regulators** | Demonstration that system is non-discriminatory and fair | Statistical fairness metrics, model documentation, decision logs | High | Medium |
| **Executives / board** | Risk overview and governance assurance | Aggregate performance, risk metrics, exception reports | Low-Medium | Medium |
| **Technical team** (ML engineers, data scientists) | Model debugging and improvement | Model internals, feature importance, performance metrics, drift detection | Very High | Medium |
| **Legal / risk management** | Defensibility of decisions in litigation | Complete decision reconstruction, protected characteristic analysis, expert witness materials | High | Medium-Low |
| **General public / media** (if relevant) | Basic understanding of how AI is used | High-level description, key decision factors, fairness commitment | Low | Low-High (varies) |

**Most Critical Stakeholder:** _____________________
**Minimum Explainability to Satisfy Critical Stakeholder:** _____________________

---

### Step 1.4: Evaluate Discrimination Risk

**Protected Characteristics Assessment:**

| Protected Characteristic | Used Directly? | Could Be Proxied? | Proxies Identified | Risk Level |
|--------------------------|---------------|-------------------|-------------------|------------|
| Race/ethnicity | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |
| Gender/sex | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |
| Age | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |
| Disability status | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |
| Religion | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |
| National origin | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |
| Sexual orientation | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |
| Pregnancy/family status | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |
| Genetic information | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |
| Zip code / geography | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |
| Socioeconomic proxies | ☐ Yes ☐ No | ☐ Yes ☐ No | | ☐ High ☐ Medium ☐ Low |

**Overall Discrimination Risk:**
- [ ] **High** → **REQUIRE HIGH EXPLAINABILITY** (must demonstrate no proxying, all factors justified)
- [ ] **Medium** → **REQUIRE MODERATE EXPLAINABILITY** (must monitor for disparate impact)
- [ ] **Low** → **STANDARD EXPLAINABILITY** (basic fairness monitoring)

---

### Step 1.5: Assess Operational Needs

**Operational Considerations:**

| Consideration | Assessment | Impact on Explainability |
|--------------|------------|--------------------------|
| **Need to debug and fix model errors** | ☐ Critical ☐ Important ☐ Minor | High explainability enables faster debugging |
| **Need to detect model drift** | ☐ Critical ☐ Important ☐ Minor | Explanations help detect when model behaves unexpectedly |
| **Need to audit decisions retrospectively** | ☐ Critical ☐ Important ☐ Minor | Requires comprehensive decision logging |
| **Need to handle appeals and challenges** | ☐ Critical ☐ Important ☐ Minor | Requires customer-facing explanations |
| **Need to build user/customer trust** | ☐ Critical ☐ Important ☐ Minor | Transparency builds trust |
| **Need to train staff on AI system** | ☐ Critical ☐ Important ☐ Minor | Explainable systems easier to teach |
| **Need to evolve model over time** | ☐ Critical ☐ Important ☐ Minor | Understanding current model helps guide improvements |

**Operational Explainability Need:** ___________________

---

### Step 1.6: Overall Explainability Requirement

**Synthesize all assessment factors:**

| Assessment Factor | Level Determined |
|-------------------|------------------|
| Consequence level | |
| Regulatory requirement | |
| Critical stakeholder need | |
| Discrimination risk | |
| Operational need | |

**Final Explainability Requirement (highest level from above):**

- [ ] **CRITICAL** - Full transparency required (life/safety critical, strict regulations, high discrimination risk)
  - → Must use inherently interpretable models OR comprehensive post-hoc explanations with human oversight

- [ ] **HIGH** - Substantial explainability required (significant individual impact, regulatory requirements, moderate discrimination risk)
  - → Should use interpretable models if feasible, OR robust post-hoc explanations with validation

- [ ] **MODERATE** - Meaningful explainability required (some individual impact, stakeholder trust important)
  - → Can use complex models with post-hoc explanations, must provide stakeholder-appropriate explanations

- [ ] **LOW** - Basic explainability acceptable (minor impact, low stakes, minimal regulatory concern)
  - → Can use black-box models with minimal explanation infrastructure

---

## Part 2: Model Selection Decision (Accuracy-Interpretability Tradeoff)

### Step 2.1: Evaluate Interpretable Model Options

**Test inherently interpretable models first:**

| Model Type | Description | Tested? | Accuracy | Interpretability | Notes |
|------------|-------------|---------|----------|------------------|-------|
| **Decision Tree** | Binary decisions, visible rules | ☐ Yes ☐ No | _____% | Complete | Simple, easy to communicate |
| **Rule-Based System** | If-then rules, expert knowledge | ☐ Yes ☐ No | _____% | Complete | Fully transparent, expert-validated |
| **Linear Regression** | Weighted sum of factors | ☐ Yes ☐ No | _____% | Complete | Simple coefficients, linear relationships |
| **Logistic Regression** | Weighted sum → probability | ☐ Yes ☐ No | _____% | Complete | Standard for binary classification |
| **GAM** (Generalized Additive Model) | Non-linear but interpretable | ☐ Yes ☐ No | _____% | High | Allows non-linearity while remaining transparent |
| **Linear SVM** | Linear decision boundary | ☐ Yes ☐ No | _____% | High | Support vectors visible |
| **Sparse Models** (LASSO, Ridge) | Few important features | ☐ Yes ☐ No | _____% | High | Feature selection built-in |

**Best Interpretable Model:**
- Model type: _____________________
- Accuracy: _____________________
- Interpretability: _____________________

---

### Step 2.2: Evaluate Complex Model Options

**Test complex models for performance comparison:**

| Model Type | Description | Tested? | Accuracy | Interpretability | Notes |
|------------|-------------|---------|----------|------------------|-------|
| **Random Forest** | Ensemble of decision trees | ☐ Yes ☐ No | _____% | Low-Moderate | Some feature importance available |
| **Gradient Boosting** | Sequential tree ensemble | ☐ Yes ☐ No | _____% | Low-Moderate | Feature importance, SHAP works well |
| **Neural Network** (shallow) | 1-2 hidden layers | ☐ Yes ☐ No | _____% | Low | Some post-hoc techniques applicable |
| **Deep Neural Network** | Many layers | ☐ Yes ☐ No | _____% | Very Low | Requires sophisticated post-hoc methods |
| **Transformer** | Attention-based architecture | ☐ Yes ☐ No | _____% | Very Low | Attention visualization possible |
| **Ensemble** (multiple models) | Combines multiple algorithms | ☐ Yes ☐ No | _____% | Very Low | Complex but often highest performance |

**Best Complex Model:**
- Model type: _____________________
- Accuracy: _____________________
- Accuracy improvement over interpretable model: _____% (______ percentage points)

---

### Step 2.3: Justify Model Complexity Decision

**Accuracy-Interpretability Tradeoff Analysis:**

| Metric | Interpretable Model | Complex Model | Delta |
|--------|---------------------|---------------|-------|
| Accuracy / F1 / AUROC | | | |
| False positive rate | | | |
| False negative rate | | | |
| Demographic fairness (worst-case) | | | |

**Performance Justification Questions:**

| Question | Answer | Justification |
|----------|--------|---------------|
| Is accuracy improvement >10 percentage points? | ☐ Yes ☐ No | If No, may not justify opacity |
| Is accuracy improvement critical to mission success? | ☐ Yes ☐ No | Even small gains might matter for safety-critical apps |
| Do false negatives/positives have significantly different costs? | ☐ Yes ☐ No | Complex model might optimize specific error type |
| Does complex model perform better on fairness metrics? | ☐ Yes ☐ No | Sometimes complex models can be *more* fair |
| Can post-hoc explanation techniques provide sufficient transparency? | ☐ Yes ☐ No | If No, must use interpretable model |
| Have we tested whether complex model actually outperforms on real deployment data (not just test set)? | ☐ Yes ☐ No | Lab performance doesn't always transfer |

**Decision:**

- [ ] **USE INTERPRETABLE MODEL**
  - Justification: _______________________________________________
  - Model selected: ______________________________________________

- [ ] **USE COMPLEX MODEL WITH POST-HOC EXPLANATIONS**
  - Justification: _______________________________________________
  - Model selected: ______________________________________________
  - Performance improvement: ______% (______ percentage points)
  - Explanation technique(s) to be implemented: __________________
  - Human oversight plan: ________________________________________

---

### Step 2.4: Document Decision for Audit/Compliance

**Model Selection Documentation:**

```
AI SYSTEM: [Name]
DATE: [Date]
DECISION-MAKER: [Name/Role]

EXPLAINABILITY REQUIREMENT: [Critical / High / Moderate / Low]
BASIS: [Regulatory, consequence level, discrimination risk, stakeholder needs]

MODELS EVALUATED:
- Interpretable: [Model type, accuracy: ___%]
- Complex: [Model type, accuracy: ___%]
- Performance difference: ___% (______ percentage points)

DECISION: [Interpretable / Complex with post-hoc explanations]

JUSTIFICATION:
[Detailed explanation of why this tradeoff is appropriate given the use case, regulatory requirements, stakeholder needs, and performance considerations]

POST-HOC EXPLANATION COMMITMENT (if complex model):
- Techniques to be implemented: [LIME, SHAP, attention visualization, counterfactuals, etc.]
- Validation plan: [How explanations will be tested for accuracy]
- Human oversight: [When and how humans will review AI decisions]
- Audit trail: [What will be logged for each decision]

APPROVAL:
- Technical lead: _________________ Date: _______
- Compliance/legal: _______________ Date: _______
- Executive sponsor: ______________ Date: _______
```

---

## Part 3: Explanation Technique Implementation

### Step 3.1: Select Explanation Technique(s)

**If using inherently interpretable model:**

- [ ] **Decision Tree Visualization**
  - Tool: [Graphviz, dtreeviz, custom visualization]
  - Output format: [Diagram, text rules, interactive explorer]
  - Audience: [Stakeholder types]

- [ ] **Coefficient Display** (linear/logistic regression)
  - Format: [Weights table, feature importance chart]
  - Normalization: [Standardized coefficients for comparability]
  - Audience: [Stakeholder types]

- [ ] **GAM Shape Functions**
  - Visualization: [Partial dependence plots, individual feature curves]
  - Format: [Static charts, interactive plots]
  - Audience: [Technical and clinical staff]

**If using complex model with post-hoc explanations:**

- [ ] **LIME** (Local Interpretable Model-agnostic Explanations)
  - **When to use:** Individual decision explanations, debugging specific predictions
  - **Implementation:** [Python library: lime, integration with model]
  - **Parameters:** Number of samples: _____, number of features to explain: _____
  - **Validation:** Test stability (same input → same explanation)
  - **Limitations:** Local only, can be unstable, approximation

- [ ] **SHAP** (SHapley Additive exPlanations)
  - **When to use:** Feature importance (global and local), compliance documentation
  - **Implementation:** [Python library: shap, model type: TreeExplainer / DeepExplainer / KernelExplainer]
  - **Output:** [Waterfall plots, force plots, summary plots, dependence plots]
  - **Validation:** Check that SHAP values sum to delta from base prediction
  - **Limitations:** Computationally expensive, still approximation for complex models

- [ ] **Attention Visualization** (for neural networks)
  - **When to use:** Understanding what model focused on (text, images)
  - **Implementation:** [Extract attention weights, visualization tool]
  - **Output:** [Heatmaps, highlighted text, saliency maps]
  - **Validation:** Human review - does attention align with intuition?
  - **Limitations:** Shows correlation (what model looked at) not causation (why it mattered)

- [ ] **Counterfactual Explanations**
  - **When to use:** User-facing explanations, actionable feedback
  - **Implementation:** [DiCE library, custom counterfactual search]
  - **Constraints:** [Feasibility, actionability, protected characteristics exclusion]
  - **Format:** "Your decision would change if [factor X] changed from [A] to [B]"
  - **Validation:** Verify counterfactuals actually do change prediction
  - **Limitations:** Can be gamed if attackers know what changes to make

- [ ] **Partial Dependence Plots**
  - **When to use:** Understanding how one feature affects predictions globally
  - **Implementation:** [sklearn.inspection.PartialDependenceDisplay]
  - **Output:** [Curves showing feature effect across its range]
  - **Limitations:** Assumes feature independence (may not reflect interactions)

- [ ] **Feature Importance** (global)
  - **When to use:** High-level understanding of what model considers important
  - **Implementation:** [Model-specific: feature_importances_, permutation importance]
  - **Output:** [Ranked list or bar chart of feature importance]
  - **Limitations:** Doesn't explain individual decisions, can be misleading for correlated features

**Selected Technique(s):** _______________________________
**Rationale:** ___________________________________________

---

### Step 3.2: Build Tiered Explanation System

**Design explanations for each stakeholder type:**

**Tier 1 - Affected Individuals (customers, applicants, patients):**

**Format:**
- [ ] Simple language (8th grade reading level or below)
- [ ] Key decision factors only (3-5 most important)
- [ ] Actionable feedback (what they could change)
- [ ] Next steps (appeal process, how to improve)

**Example template:**

```
Your [loan/application/claim] was [approved/denied].

WHY:
- [Factor 1]: [Simple explanation]
- [Factor 2]: [Simple explanation]
- [Factor 3]: [Simple explanation]

WHAT THIS MEANS:
[Outcome in plain language]

WHAT YOU CAN DO:
- [Actionable step 1]
- [Actionable step 2]
- [How to appeal if you believe this is wrong]
```

**Delivery method:** ☐ Email ☐ Web portal ☐ Mobile app ☐ Paper letter ☐ In-person

---

**Tier 2 - Customer Service / Support Staff:**

**Format:**
- [ ] Moderate detail (all significant factors)
- [ ] Factor contributions (numeric or qualitative)
- [ ] Confidence/uncertainty indicators
- [ ] Guidance for handling appeals
- [ ] FAQs for common questions

**Example template:**

```
DECISION: [Approved/Denied]
CONFIDENCE: [High/Medium/Low] (Score: 0.78)

FACTORS:
- [Factor 1]: [Contribution: +0.22] [Explanation for customer]
- [Factor 2]: [Contribution: +0.15] [Explanation for customer]
- [Factor 3]: [Contribution: -0.08] [Explanation for customer]
- [Factor 4]: [Contribution: +0.12] [Explanation for customer]

IF CUSTOMER ASKS:
- "Why was I denied?" → [Talking points]
- "What can I change?" → [Actionable advice]
- "How do I appeal?" → [Process]

ESCALATION TRIGGERS:
- Customer claims discrimination → Escalate to [role]
- Customer requests human review → [Process]
```

**Delivery method:** ☐ Internal dashboard ☐ CRM integration ☐ Knowledge base

---

**Tier 3 - Internal Decision-Makers (doctors, loan officers, HR staff):**

**Format:**
- [ ] Detailed factor breakdown
- [ ] All features considered (not just top factors)
- [ ] Confidence scores and uncertainty ranges
- [ ] Alternative scenarios ("what-if" analysis)
- [ ] Override capability with documentation

**Example template:**

```
AI RECOMMENDATION: [Decision]
CONFIDENCE: 0.78 (Range: 0.73-0.82 based on input uncertainty)

DETAILED FACTOR ANALYSIS:
[Full SHAP waterfall or similar detailed breakdown]

ALTERNATIVE SCENARIOS:
- If [factor X] were [value Y]: Score would be [0.65] → [Different decision]
- If [factor Z] were [value W]: Score would be [0.81] → [Same decision, higher confidence]

SIMILAR CASES:
- 78% of similar cases resulted in [same decision]
- 22% of similar cases resulted in [different decision] - reasons: [...]

OVERRIDE OPTIONS:
☐ Accept AI recommendation
☐ Override with justification: _________________________

HUMAN DECISION: _______________
RATIONALE: _____________________
```

**Delivery method:** ☐ Workflow integration ☐ Decision support dashboard ☐ Clinical/business system

---

**Tier 4 - Auditors / Compliance / Regulators:**

**Format:**
- [ ] Complete audit trail
- [ ] All features and weights/contributions
- [ ] Model version and training data provenance
- [ ] Protected characteristic analysis
- [ ] Statistical fairness metrics
- [ ] Decision reconstruction capability

**Example template:**

```
AUDIT REPORT: Decision ID [12345]

TIMESTAMP: [ISO format]
MODEL VERSION: [v2.4.1]
TRAINING DATA: [Dataset version, date]

INPUT FEATURES (all 47):
[Complete list with values]

DECISION LOGIC:
[Complete trace: if interpretable model, full rules; if black box, complete SHAP/LIME analysis]

PROTECTED CHARACTERISTIC ANALYSIS:
- Age: [value] → Contribution: [0.00] ✓ (No discriminatory use detected)
- Gender: [not collected] → Contribution: N/A ✓
- Race/ethnicity: [not collected] → Contribution: N/A ✓
- Proxy detection: [List of potential proxies checked] → [All showed 0.00 contribution]

FAIRNESS METRICS (for this decision demographic group):
- Similar approval rate to overall population: [Yes/No]
- Flagged for review: [Yes/No]

APPEALS/OVERRIDES:
- Human review requested: [Yes/No]
- Override decision: [Yes/No]
- Override rationale: [If applicable]

COMPLIANCE VERIFICATION:
- Regulatory requirements checked: [GDPR Art 22, EU AI Act, ECOA, etc.]
- All requirements met: ☐ Yes ☐ No - Gaps: [list]
```

**Delivery method:** ☐ Audit database ☐ Compliance reporting system ☐ API for regulator access

---

### Step 3.3: Implement Explanation Infrastructure

**Technical Architecture:**

**Component 1: Feature Contribution Capture**
- [ ] Log all input features for each decision
- [ ] Calculate and store explanation (LIME/SHAP/etc.) at decision time
- [ ] Store explanation results with decision record
- [ ] Retention period: _______ (based on regulatory/legal requirements)

**Component 2: Decision Logging**
- [ ] Unique decision ID for each prediction
- [ ] Timestamp (UTC)
- [ ] Model version used
- [ ] Input features and values
- [ ] Output decision/score
- [ ] Explanation (feature contributions)
- [ ] Confidence/uncertainty metrics
- [ ] Human override (if applicable)

**Component 3: Explanation API**
- [ ] Endpoint for retrieving explanation by decision ID
- [ ] Endpoint for generating counterfactual explanations on demand
- [ ] Endpoint for "what-if" scenario analysis
- [ ] Access control (different tiers for different roles)
- [ ] Audit logging of who accessed which explanations

**Component 4: Visualization Interface**
- [ ] User-facing explanation display (Tier 1)
- [ ] Support staff dashboard (Tier 2)
- [ ] Decision-maker tools (Tier 3)
- [ ] Audit/compliance reporting (Tier 4)

**Implementation Checklist:**
- [ ] Explanation generation adds <100ms latency to decisions (performance requirement)
- [ ] Explanation storage estimated at [___GB/month] (capacity planning)
- [ ] Backup and recovery plan for explanation data
- [ ] Explanation data included in disaster recovery
- [ ] Privacy/security controls on explanation data (may contain sensitive features)

---

## Part 4: Validation and Testing

### Step 4.1: Validate Explanation Accuracy

**For post-hoc explanations (LIME/SHAP), verify they approximate the model accurately:**

**Test 1: Fidelity Check**
- Generate explanations for 100 random test cases
- Perturb features according to explanation (remove high-importance features)
- Verify prediction changes as explanation suggests
- **Acceptance criterion:** >90% of cases show prediction change aligned with explanation

**Test 2: Stability Check**
- Generate explanation for same input 10 times (for stochastic methods like LIME)
- Measure explanation variance
- **Acceptance criterion:** Top 3 features consistent across all runs

**Test 3: Consistency Check**
- For similar inputs, verify explanations are similar
- Identify 20 pairs of very similar cases
- Measure explanation similarity
- **Acceptance criterion:** Similar cases have similar explanations (correlation >0.7)

**Test 4: Ground Truth Check** (if possible)
- For interpretable baseline model, compare post-hoc explanation to true feature importance
- Measure alignment
- **Acceptance criterion:** Explanation identifies true important features in top 5

**Validation Results:**

| Test | Pass/Fail | Notes |
|------|-----------|-------|
| Fidelity | | |
| Stability | | |
| Consistency | | |
| Ground truth | | |

---

### Step 4.2: Test Explanations with Users

**User Comprehension Testing:**

**Test with Tier 1 audience (affected individuals):**
- Recruit 10-20 representative users
- Show them actual decision explanations
- Ask comprehension questions:
  - "Why was this decision made?"
  - "What could you do to change the outcome?"
  - "Do you understand what factors mattered most?"
  - "Do you trust this explanation?"
- Measure comprehension rate
- **Acceptance criterion:** >80% can correctly identify top 2 factors and actionable next steps

**Test with Tier 2 audience (support staff):**
- Recruit 5-10 customer service representatives
- Give them decision explanations and mock customer questions
- Measure:
  - Time to answer customer questions
  - Accuracy of explanations provided to customers
  - Confidence in explanations
- **Acceptance criterion:** Staff can answer >90% of questions correctly using explanations

**Test with Tier 3 audience (decision-makers):**
- Recruit 5-10 doctors/loan officers/HR staff
- Show AI recommendations with explanations
- Measure:
  - Do explanations help them decide whether to trust/override AI?
  - Are explanations aligned with their domain expertise?
  - Do they identify cases where explanation reveals problems?
- **Acceptance criterion:** >75% say explanations are useful and aligned with expertise

**User Testing Results:**

| Audience | Comprehension Rate | Satisfaction | Issues Identified |
|----------|-------------------|--------------|-------------------|
| Tier 1 | | | |
| Tier 2 | | | |
| Tier 3 | | | |

**Improvements needed:** ___________________________

---

### Step 4.3: Validate Non-Discrimination

**Protected Characteristic Contribution Check:**

For every decision in test set:
- Run explanation technique (SHAP/LIME)
- Extract contribution of protected characteristics (if collected) and known proxies
- Verify contributions are zero or negligible

**Test Procedure:**

| Protected Characteristic or Proxy | Mean Absolute Contribution | Max Contribution | Accept? |
|-----------------------------------|---------------------------|------------------|---------|
| Age (if used for non-discriminatory purpose) | | | ☐ <0.05 |
| Gender / Sex | | | ☐ =0.00 |
| Race / Ethnicity | | | ☐ =0.00 |
| Zip code (race/ethnicity proxy) | | | ☐ <0.05 |
| Name-based features (ethnicity proxy) | | | ☐ =0.00 |
| [Other proxies identified in Step 1.4] | | | |

**Proxy Detection:**
- [ ] Test whether removing proxies changes decision rates for protected groups
- [ ] Statistical parity check: Decision rates similar across groups when controlling for legitimate factors?
- [ ] Equalized odds check: False positive/negative rates similar across groups?

**Findings:**
- Issues identified: _________________________________
- Remediation plan: _________________________________

---

## Part 5: Documentation and Governance

### Step 5.1: Create Model Card

**Model Card: [AI System Name]**

```
MODEL DETAILS
- Developed by: [Organization/Team]
- Model date: [Date]
- Model version: [Version]
- Model type: [Decision tree / Neural network / etc.]
- Purpose: [What decisions this model makes]

INTENDED USE
- Primary intended uses: [Describe]
- Primary intended users: [Who will use this]
- Out-of-scope uses: [What this should NOT be used for]

FACTORS
- Relevant factors: [Demographics, conditions, etc. that model considers]
- Evaluation factors: [How performance varies across subgroups]

METRICS
- Model performance measures: [Accuracy, F1, AUROC, etc.]
- Decision thresholds: [What score triggers what decision]
- Variation across factors: [Performance by demographic group]

TRAINING DATA
- Datasets: [Training data source and size]
- Preprocessing: [How data was cleaned/transformed]
- Known limitations: [Bias in training data, missing populations, etc.]

EVALUATION DATA
- Datasets: [Test/validation data]
- Preprocessing: [Same as training or different]
- Performance: [Results on test set]

EXPLAINABILITY
- Interpretability level: [Fully transparent / Post-hoc explainable / Limited]
- Explanation techniques: [LIME, SHAP, attention, counterfactuals, etc.]
- Explanation validation: [How explanations were tested]
- Stakeholder-specific explanations: [Tiered system described]

FAIRNESS
- Protected characteristics: [How they are/aren't used]
- Fairness metrics: [Statistical parity, equalized odds, etc. - results]
- Bias mitigation: [Techniques applied]
- Disparate impact testing: [Results]

ETHICAL CONSIDERATIONS
- Potential harms: [Identified in Step 1]
- Mitigation strategies: [How harms are addressed]
- Human oversight: [When and how humans review AI decisions]

CAVEATS AND RECOMMENDATIONS
- Known limitations: [What this model cannot do]
- Recommended monitoring: [What to watch for in deployment]
- Update frequency: [How often model should be retrained]
```

---

### Step 5.2: Create System Card (Deployment Context)

**System Card: [AI System Name in Production]**

```
SYSTEM OVERVIEW
- AI system name: [Name]
- Deployment date: [Date]
- Business process: [What process this AI supports]
- Decision authority: [Fully automated / Human-in-loop / Recommendation only]

EXPLANATION INFRASTRUCTURE
- Tier 1 (affected individuals): [Format, delivery method, sample]
- Tier 2 (support staff): [Format, delivery method, sample]
- Tier 3 (decision-makers): [Format, delivery method, sample]
- Tier 4 (audit/compliance): [Format, delivery method, sample]

EXPLANATION PERFORMANCE
- Latency: [Time to generate explanation]
- Storage: [Explanation data volume]
- Retention: [How long explanations are kept]
- Access controls: [Who can access what tier]

HUMAN OVERSIGHT
- Automatic human review triggers: [When human must review]
- Override capability: [Who can override AI decision]
- Override documentation: [What must be recorded]
- Appeal process: [How affected individuals can appeal]

MONITORING
- Explanation quality monitoring: [How explanations are validated ongoing]
- Explanation drift detection: [Alerts if explanations change unexpectedly]
- User feedback on explanations: [How users can report unclear explanations]
- Regular review schedule: [Quarterly / annually / etc.]

INCIDENT RESPONSE
- Unexplainable decision protocol: [What to do if explanation fails]
- Contradictory explanation protocol: [What to do if explanation contradicts known facts]
- Escalation path: [Who to contact]

COMPLIANCE
- Regulatory requirements met: [List]
- Audit trail capabilities: [What can be reconstructed]
- Regulator access: [How regulators can request explanations]
```

---

### Step 5.3: Establish Ongoing Monitoring

**Explanation Quality Metrics:**

| Metric | Target | Current | Trend | Alert Threshold |
|--------|--------|---------|-------|-----------------|
| **Explanation generation success rate** | 100% | | | <99.5% |
| **Explanation latency** (p95) | <100ms | | | >200ms |
| **User comprehension rate** (survey) | >80% | | | <70% |
| **Support staff satisfaction with explanations** | >4.0/5.0 | | | <3.5/5.0 |
| **Override rate** (human disagrees with AI) | <15% | | | >25% |
| **Appeal rate** (users challenge decision) | <5% | | | >10% |
| **Explanation stability** (LIME variance) | <10% change | | | >20% change |
| **Explanation-prediction alignment** (fidelity) | >90% | | | <80% |

**Model Drift Detection via Explanations:**

Monitor explanation distributions:
- [ ] Top 5 features by importance - should remain stable
- [ ] Feature contribution distributions - sharp changes indicate drift
- [ ] Alert if feature importance ranking changes significantly

**Example alert:**
```
ALERT: Explanation drift detected
- Feature "zip_code" importance increased from rank 12 to rank 3
- Investigation needed: Is model starting to proxy for protected characteristics?
- Action: Freeze model pending review
```

**Bias Monitoring via Explanations:**

Monthly fairness audit:
- [ ] Run SHAP on 1000 random decisions
- [ ] Break down by demographic group
- [ ] Verify protected characteristics contribute 0.00 across all groups
- [ ] Verify similar feature importance distributions across groups

---

### Step 5.4: Train Staff

**Training Program:**

**Tier 1 - Customer Service / Support Staff:**
- [ ] How to access explanations for decisions
- [ ] How to interpret Tier 2 explanations
- [ ] How to communicate explanations to customers (translate Tier 2 → Tier 1)
- [ ] How to handle appeals and escalations
- [ ] When explanations are NOT sufficient (escalation triggers)
- **Duration:** 4 hours
- **Frequency:** Initial + annual refresher

**Tier 2 - Decision-Makers (doctors, loan officers, HR):**
- [ ] How AI model works (high-level)
- [ ] How to interpret Tier 3 explanations
- [ ] When to trust vs override AI
- [ ] How to document overrides
- [ ] Ethical considerations and bias awareness
- [ ] How to provide feedback for model improvement
- **Duration:** 8 hours
- **Frequency:** Initial + annual refresher + updates when model changes

**Tier 3 - Technical Staff (ML engineers, data scientists):**
- [ ] Deep dive into model architecture
- [ ] Explanation technique implementation details
- [ ] Validation procedures
- [ ] Monitoring and drift detection
- [ ] Incident response for explanation failures
- [ ] Bias testing and remediation
- **Duration:** 16 hours
- **Frequency:** Initial + quarterly updates

**Tier 4 - Executives / Governance:**
- [ ] Business case for explainability
- [ ] Regulatory requirements and compliance
- [ ] Risk implications of black-box vs explainable AI
- [ ] Oversight responsibilities
- [ ] High-level model performance and fairness metrics
- **Duration:** 2 hours
- **Frequency:** Initial + annual update

---

## Part 6: Continuous Improvement

### Step 6.1: Collect Feedback

**User Feedback Channels:**

**From affected individuals (Tier 1):**
- [ ] Post-decision survey: "Did you understand why this decision was made?" (Yes/No + comments)
- [ ] Appeal submissions (analyze common themes in appeals)
- [ ] Customer service call analysis (what questions do people ask?)

**From support staff (Tier 2):**
- [ ] Weekly survey: "How helpful were explanations this week?" (1-5 scale + comments)
- [ ] Identify most common customer questions that explanations don't address
- [ ] Escalation logs (when explanations weren't sufficient)

**From decision-makers (Tier 3):**
- [ ] Monthly survey: "How often do explanations help you make better decisions?" (1-5 scale)
- [ ] Override logs with reasons (helps identify where AI and experts disagree)
- [ ] Feature requests for better explanation tools

**From auditors/compliance (Tier 4):**
- [ ] Audit findings related to explanations
- [ ] Regulator feedback on transparency
- [ ] Legal review of explanation adequacy

---

### Step 6.2: Improve Explanations

**Iterative Improvement Process:**

**Monthly Review:**
- [ ] Analyze feedback from all tiers
- [ ] Identify top 3 issues with current explanations
- [ ] Prioritize improvements
- [ ] Implement and test improvements
- [ ] Deploy updated explanations

**Common Improvement Areas:**

| Issue | Solution |
|-------|----------|
| Explanations use technical jargon | Simplify language, create glossary |
| Too many factors shown (overwhelming) | Show only top 3-5 factors by default, "show more" option |
| Not actionable (users don't know what to change) | Add counterfactual explanations |
| Contradicts user's understanding | Investigate - may indicate model error or user education need |
| Different explanations for similar cases | May indicate explanation instability (LIME) - switch to SHAP or other technique |
| Users game the system | Add privacy layer to explanations, constrain counterfactuals |

---

### Step 6.3: Update Model and Explanations Together

**When model is updated (retrained/new version):**

- [ ] **BEFORE deployment:**
  - Generate explanations for test set with new model
  - Compare to explanations from old model
  - Verify explanation quality hasn't degraded
  - Verify feature importance hasn't shifted unexpectedly
  - Verify protected characteristics still contribute 0.00
  - Update model card with new version info

- [ ] **DURING deployment:**
  - Shadow mode: Run new model alongside old, compare explanations
  - Verify new explanations are understandable to users
  - Monitor for unexpected changes in explanation patterns

- [ ] **AFTER deployment:**
  - Monitor explanation quality metrics (from Step 5.3)
  - Alert for any degradation
  - Collect user feedback on new explanations
  - Be prepared to rollback if explanation quality drops

**Version Control:**
- Model version: [v2.5.0]
- Explanation technique version: [SHAP v0.42.0]
- Explanation templates version: [v1.3]
- All three must be tracked together for audit trail

---

## Part 7: Compliance Checklist

### Regulatory Compliance Verification

**GDPR Article 22 (if applicable):**
- [ ] Affected individuals informed that automated decision-making is used
- [ ] Right not to be subject to solely automated decisions (for significant decisions) - human review available
- [ ] "Meaningful information about the logic involved" provided
- [ ] Ability to challenge automated decisions
- [ ] Human intervention for review/appeal

**EU AI Act (if applicable):**
- [ ] High-risk AI system identified and documented
- [ ] Technical documentation includes explainability approach
- [ ] Human oversight mechanisms in place
- [ ] Transparency obligations met (users informed about AI use)
- [ ] Conformity assessment passed

**Equal Credit Opportunity Act / FCRA (if applicable):**
- [ ] Specific reasons provided for credit denial (not "the algorithm decided")
- [ ] Adverse action notices include actual factors that led to denial
- [ ] Ability to dispute inaccurate information
- [ ] Explanations are specific to individual applicant

**Employment Discrimination Laws (EEOC guidance) (if applicable):**
- [ ] Can explain every hiring/promotion decision
- [ ] Protected characteristics not used inappropriately
- [ ] Disparate impact analysis conducted and documented
- [ ] Selection criteria job-related and justified

**State AI Laws (Colorado, etc.) (if applicable):**
- [ ] Impact assessments completed
- [ ] Disclosures about AI use provided
- [ ] Opt-out mechanisms (if required)
- [ ] Discrimination safeguards implemented

**Industry-Specific (healthcare, financial services, etc.):**
- [ ] Model risk management requirements met
- [ ] Clinical validation (for healthcare AI)
- [ ] Audit trail for all decisions
- [ ] Regular review by qualified professionals

---

## Part 8: Final Documentation Package

**Complete Explainability Documentation:**

1. **Explainability Needs Assessment** (Part 1)
   - Consequence level: _______
   - Regulatory requirements: _______
   - Stakeholder needs: _______
   - Final explainability requirement: _______

2. **Model Selection Documentation** (Part 2)
   - Models tested: _______
   - Performance comparison: _______
   - Decision: _______
   - Justification: _______

3. **Explanation Technique Implementation** (Part 3)
   - Techniques selected: _______
   - Tiered explanation system: [Documented]
   - Infrastructure: [Documented]

4. **Validation Results** (Part 4)
   - Explanation accuracy: _______
   - User comprehension: _______
   - Non-discrimination verification: _______

5. **Model Card** (Part 5.1)

6. **System Card** (Part 5.2)

7. **Monitoring Plan** (Part 5.3)

8. **Training Materials** (Part 5.4)

9. **Compliance Checklist** (Part 7) - All applicable items checked

**Approval Signatures:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| AI/ML Technical Lead | | | |
| Compliance Officer | | | |
| Legal Counsel | | | |
| Data Protection Officer (if applicable) | | | |
| Business Owner | | | |
| Executive Sponsor | | | |

---

**Document Version:** 1.0
**Last Updated:** [Date]
**Next Review Date:** [Date + 6 months]

---

## Related Examples
- XAI Techniques - Implementation Examples (LIME, SHAP, Attention, Counterfactuals, Interpretable Models)

## Related Templates
- AI Transparency - Multi-Layered Disclosure Template
- Trustworthy AI - Seven Pillars Implementation Framework
- AI Governance Framework Builder
