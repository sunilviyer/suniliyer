# Bias Detection Framework

**Purpose**: Systematic approach to detecting algorithmic bias in AI systems before and after deployment
**Use Case**: AI governance teams, compliance officers, product managers, engineers

---

## Overview

Algorithmic bias won't announce itself. Organizations must actively look for it through systematic testing, disaggregated analysis, and continuous monitoring. This framework provides a structured approach to bias detection across the AI lifecycle.

**Key Principle**: Test early, test often, test across groups.

---

## Phase 1: Pre-Deployment Bias Detection

### Step 1: Data Audit

Before training any model, audit your data for bias.

**Training Data Analysis**:

```
DATA AUDIT CHECKLIST

□ Data Source Documentation
  - Where did this data come from?
  - What time period does it cover?
  - Who created/collected it, and why?
  - What historical context matters?

□ Representation Analysis
  - What demographic groups are included?
  - What's the distribution across groups?
  - Are any groups underrepresented?
  - Are any groups missing entirely?

□ Historical Bias Assessment
  - Does this data reflect past discrimination?
  - Were decisions in this data made fairly?
  - What systemic inequalities might be encoded?

□ Proxy Variable Check
  - What features correlate with protected attributes?
  - Could the model infer race, gender, age indirectly?
  - Do any features encode systemic injustice?
```

**Red Flags**:
- Training data from era with documented discrimination (pre-1970s credit decisions, historical hiring)
- Severe underrepresentation of groups (<5% of dataset)
- Use of proxy variables that correlate with protected attributes (zip code → race, first name → gender)
- Data reflecting outcomes of biased human decisions (judicial sentencing, loan approvals)

---

### Step 2: Disaggregated Performance Testing

Never rely on overall accuracy alone. Test performance separately for each demographic group.

**Testing Protocol**:

```
DISAGGREGATED PERFORMANCE METRICS

For each protected attribute (race, gender, age, disability status):

1. Overall Accuracy by Group
   - Model accuracy for Group A: ____%
   - Model accuracy for Group B: ____%
   - Difference: ____% (FLAG if >5%)

2. False Positive Rate by Group
   - FPR for Group A: ____%
   - FPR for Group B: ____%
   - Difference: ____% (FLAG if >5%)

3. False Negative Rate by Group
   - FNR for Group A: ____%
   - FNR for Group B: ____%
   - Difference: ____% (FLAG if >5%)

4. Precision by Group
   - Precision for Group A: ____%
   - Precision for Group B: ____%
   - Difference: ____% (FLAG if >5%)

5. Recall by Group
   - Recall for Group A: ____%
   - Recall for Group B: ____%
   - Difference: ____% (FLAG if >5%)
```

**Intersectional Analysis**:

Don't just test race and gender separately. Test their intersection.

| Group | Accuracy | FPR | FNR |
|-------|----------|-----|-----|
| White Men | | | |
| White Women | | | |
| Black Men | | | |
| Black Women | | | |
| Hispanic Men | | | |
| Hispanic Women | | | |
| Asian Men | | | |
| Asian Women | | | |

**Gender Shades Lesson**: Bias compounds at intersections. A model might perform "okay" for women and "okay" for Black individuals, but terribly for Black women.

---

### Step 3: Fairness Metrics Evaluation

Choose the fairness definition(s) that matter for your use case, then test against them.

**Fairness Metric Selection Guide**:

| Use Case | Recommended Fairness Metric | Why |
|----------|----------------------------|-----|
| **Lending** | Predictive parity + Equal opportunity | If you predict someone will repay, that should be equally accurate across groups. Among actual good borrowers, approval rates should be equal. |
| **Hiring** | Equal opportunity | Among actually qualified candidates, selection rates should be equal across groups. |
| **Criminal Justice** | Equal opportunity + Calibration | Among actual recidivists, prediction rates should be equal. Predictions should be equally accurate across groups. |
| **Content Moderation** | Demographic parity | Enforcement rates should be similar across groups (assuming violation rates are similar). |
| **Healthcare** | Equal opportunity | Among patients who actually need intervention, identification rates should be equal. |

**Fairness Metrics Formulas**:

**1. Demographic Parity** (Statistical Parity)
```
P(Ŷ = 1 | Group A) = P(Ŷ = 1 | Group B)
```
The AI makes positive predictions at equal rates across groups.

**When to use**: When you want equal treatment rates regardless of outcomes (content moderation, opportunity access).

**When NOT to use**: When base rates legitimately differ across groups.

---

**2. Equal Opportunity** (True Positive Rate Parity)
```
P(Ŷ = 1 | Y = 1, Group A) = P(Ŷ = 1 | Y = 1, Group B)
```
Among individuals who deserve a positive outcome, the AI predicts it at equal rates across groups.

**When to use**: High-stakes decisions where you want to ensure qualified individuals from all groups have equal chances (hiring, lending, admissions).

**When NOT to use**: When false positives are more costly than false negatives.

---

**3. Equalized Odds** (TPR + FPR Parity)
```
P(Ŷ = 1 | Y = 1, Group A) = P(Ŷ = 1 | Y = 1, Group B)  AND
P(Ŷ = 1 | Y = 0, Group A) = P(Ŷ = 1 | Y = 0, Group B)
```
Both true positive rates AND false positive rates are equal across groups.

**When to use**: When both types of errors matter (criminal justice, medical diagnosis).

**When NOT to use**: When you can't satisfy both simultaneously (often mathematically impossible).

---

**4. Predictive Parity** (Precision Parity)
```
P(Y = 1 | Ŷ = 1, Group A) = P(Y = 1 | Ŷ = 1, Group B)
```
When the AI predicts a positive outcome, it's equally accurate across groups.

**When to use**: When trust in positive predictions matters (loan approvals, medical diagnoses).

**When NOT to use**: When base rates differ significantly across groups.

---

**5. Calibration**
```
P(Y = 1 | Ŷ = p, Group A) = P(Y = 1 | Ŷ = p, Group B) = p
```
For any predicted probability p, the actual outcome rate equals p across all groups.

**When to use**: Risk scores, probability predictions, ranking systems.

**When NOT to use**: Binary classification without probability outputs.

---

**Important Mathematical Reality**:

⚠️ **You usually cannot satisfy all fairness metrics simultaneously** (except in special cases).

- Demographic parity and equal opportunity conflict when base rates differ
- Equalized odds and predictive parity are often mutually exclusive
- Calibration and equal opportunity can't both be satisfied when base rates differ

**What This Means**: You must choose which fairness definition matters most for your use case. This is a **values decision**, not a technical optimization problem.

---

### Step 4: Adversarial Testing

Actively try to break your AI. Test edge cases. Have diverse users try it and report unexpected behavior.

**Red Team Exercise Template**:

```
RED TEAM BIAS TESTING

Assemble diverse team (different backgrounds, perspectives, experiences)

TASK: Try to make the AI fail in ways that disadvantage specific groups

Test Categories:

1. Edge Cases
   - Unusual names (non-Western, hyphenated, single names)
   - Atypical career paths
   - Non-traditional backgrounds
   - [Add domain-specific edge cases]

2. Group-Specific Scenarios
   - Create identical profiles differing only in inferred demographics
   - Test with resumes from all-women's colleges vs. coed institutions
   - Test addresses from different zip codes (affluent vs. poor)
   - Test common names from different ethnic backgrounds

3. Intersectional Stress Tests
   - Combinations of multiple protected attributes
   - Minority within minority (e.g., disabled woman of color)

4. Feedback Loop Simulations
   - What happens if we use AI outputs as future inputs?
   - Does bias amplify over time?

DOCUMENT FINDINGS:
- What failed?
- How did it fail?
- Which groups were disadvantaged?
- What patterns emerged?
```

---

### Step 5: External Audit

Internal teams are often too close to their work to see problems. Bring in fresh eyes.

**When External Audit Is Required**:
- High-stakes use cases (hiring, lending, criminal justice, healthcare)
- Regulatory requirements (NYC Local Law 144, EU AI Act high-risk systems)
- Significant disparate impact risk
- Deployment affecting vulnerable populations

**What External Auditors Should Evaluate**:

```
EXTERNAL AUDIT SCOPE

□ Training Data
  - Sources and representativeness
  - Historical bias assessment
  - Documentation quality

□ Model Performance
  - Disaggregated metrics across groups
  - Fairness metric evaluation
  - Intersectional analysis

□ Design Choices
  - Feature selection justification
  - Proxy variable assessment
  - Optimization objective appropriateness

□ Testing Procedures
  - Adequacy of pre-deployment testing
  - Coverage of demographic groups
  - Red team exercise quality

□ Deployment Context
  - Match between training data and deployment context
  - Human oversight mechanisms
  - Feedback and appeal processes

□ Documentation
  - Model cards / datasheets
  - Known limitations
  - Intended use cases

□ Monitoring Plans
  - Post-deployment monitoring approach
  - Drift detection mechanisms
  - Bias audit frequency
```

---

## Phase 2: Post-Deployment Bias Detection

Bias detection doesn't stop at launch. Models drift, contexts change, and real-world performance often differs from test performance.

### Step 6: Continuous Monitoring

**What to Monitor**:

```
ONGOING MONITORING DASHBOARD

Weekly/Monthly Metrics (depending on volume):

1. Disaggregated Performance
   - Accuracy by group
   - Error rates by group
   - Flag: >5% difference between groups

2. Prediction Distribution
   - Positive prediction rate by group
   - Flag: Significant deviation from baseline

3. Outcome Distribution
   - Actual outcomes by group
   - Flag: Unexpected changes in patterns

4. User Feedback
   - Complaints by group
   - Appeal rate by group
   - Flag: Disproportionate feedback from any group

5. Model Drift
   - Performance degradation over time
   - Feature importance shifts
   - Flag: >10% accuracy drop for any group

6. Fairness Metrics
   - Track chosen fairness metric(s) over time
   - Flag: Metric falls outside acceptable range
```

---

### Step 7: Feedback Channel Analysis

Make it easy for affected individuals to report problems. Analyze this feedback for patterns.

**Feedback Analysis Template**:

```
BIAS COMPLAINT ANALYSIS

Month: __________

Total Feedback Received: _____

Breakdown by Type:
- Fairness concerns: _____ (____%)
- Accuracy concerns: _____ (____%)
- Transparency concerns: _____ (____%)
- Other: _____ (____%)

Breakdown by Demographic (if available):
- Group A: _____ (____% of total, ____% of Group A users)
- Group B: _____ (____% of total, ____% of Group B users)
- Unknown: _____ (____%)

⚠️ Red Flag: If complaint rate from Group A is >2x complaint rate from Group B

Patterns Identified:
1. _________________________________
2. _________________________________
3. _________________________________

Actions Taken:
1. _________________________________
2. _________________________________
3. _________________________________

Follow-up Required: □ Yes  □ No
```

---

### Step 8: Periodic Re-Audits

Schedule regular bias audits. Don't wait for problems to emerge.

**Audit Frequency Guide**:

| Risk Level | Audit Frequency |
|------------|----------------|
| **High-risk** (hiring, lending, criminal justice, healthcare) | Quarterly |
| **Medium-risk** (customer service, content moderation) | Semi-annually |
| **Low-risk** (recommendations, internal tools) | Annually |

**Triggers for Immediate Re-Audit**:
- Significant model update or retraining
- Deployment to new population or context
- Complaint pattern suggesting bias
- Regulatory change or new legal standard
- Detection of performance drift
- Major organizational change (merger, new market)

---

## Bias Detection Checklist Summary

```
PRE-DEPLOYMENT
□ Data audit completed
□ Disaggregated performance tested
□ Fairness metrics evaluated
□ Adversarial testing conducted
□ External audit completed (if high-risk)
□ Documentation complete (model card, datasheet)
□ Monitoring plan established

POST-DEPLOYMENT
□ Continuous monitoring dashboard active
□ Feedback channels operational
□ Weekly/monthly metric review scheduled
□ Periodic re-audit scheduled
□ Incident response plan in place
□ Stakeholder reporting established
```

---

## Tools and Resources

### Statistical Testing Tools

**Open-Source Fairness Libraries**:
- **Fairlearn** (Microsoft): Fairness assessment and mitigation algorithms
- **AI Fairness 360** (IBM): Comprehensive bias detection and mitigation toolkit
- **What-If Tool** (Google): Interactive visualization of model behavior across groups
- **Aequitas** (UChicago): Bias and fairness audit toolkit

### Documentation Templates

- **Model Cards** (Mitchell et al., 2019): Standardized model documentation
- **Datasheets for Datasets** (Gebru et al., 2021): Standardized dataset documentation

### Regulatory Guidance

- **NYC Local Law 144**: Bias audit requirements for hiring AI
- **EU AI Act**: High-risk system requirements
- **EEOC Guidance**: AI and employment discrimination
- **FTC Guidance**: Using AI and algorithms (truth, fairness, equity)

---

## Common Mistakes to Avoid

### Mistake 1: Testing Overall Accuracy Only
**Problem**: 90% overall accuracy can hide 60% accuracy for a minority group.

**Fix**: Always disaggregate performance by demographic groups.

---

### Mistake 2: "Fairness Through Unawareness"
**Problem**: Removing protected attributes (race, gender) from training data doesn't prevent bias.

**Fix**: Test for bias using proxy variables and indirect inference.

---

### Mistake 3: Testing Only at Launch
**Problem**: Models drift, contexts change, bias emerges over time.

**Fix**: Continuous monitoring and periodic re-audits.

---

### Mistake 4: Choosing Wrong Fairness Metric
**Problem**: Optimizing for demographic parity when equal opportunity matters (or vice versa).

**Fix**: Carefully consider which fairness definition aligns with use case values.

---

### Mistake 5: No Intersectional Analysis
**Problem**: Testing race and gender separately misses compounded bias (e.g., Black women).

**Fix**: Test intersections of protected attributes, not just individual attributes.

---

### Mistake 6: Ignoring Small Groups
**Problem**: "Sample too small to test" excludes vulnerable populations.

**Fix**: Oversample underrepresented groups for testing, or acknowledge limitation explicitly.

---

### Mistake 7: Internal-Only Review
**Problem**: Internal teams have blind spots and conflicts of interest.

**Fix**: External audits for high-stakes systems.

---

## When to Bring in Experts

**You Need Expert Help If**:
- Use case affects civil rights (employment, housing, credit, criminal justice)
- High financial or safety risk
- Regulatory requirements (NYC LL144, EU AI Act, etc.)
- Complex fairness trade-offs requiring values judgments
- Black box model with limited explainability
- Significant complaint patterns suggesting bias

**Types of Experts**:
- Algorithmic bias auditor
- AI ethics consultant
- Domain expert (legal for hiring, medical for healthcare, etc.)
- Statistician / fairness researcher
- Civil rights attorney

---

## Reporting Template

```
BIAS DETECTION REPORT

System: _______________________
Date: _________________________
Auditor: ______________________

EXECUTIVE SUMMARY
Overall Assessment: □ No bias detected  □ Minor concerns  □ Significant bias  □ Critical bias

Key Findings:
1. _________________________________
2. _________________________________
3. _________________________________

DETAILED FINDINGS

Data Audit:
- Data sources: _________________
- Representation: _______________
- Historical bias: ______________
- Concerns: ____________________

Performance Analysis:
[Insert disaggregated performance table]

- Group with highest accuracy: _____ (____%)
- Group with lowest accuracy: _____ (____%)
- Largest disparity: _____%

Fairness Metrics:
- Metric used: _________________
- Results: _____________________
- Pass/Fail: ___________________

Adversarial Testing:
- Tests conducted: _____________
- Failures identified: _________
- Groups affected: _____________

RECOMMENDATIONS

Immediate Actions Required:
1. _________________________________
2. _________________________________

Medium-Term Improvements:
1. _________________________________
2. _________________________________

Long-Term Considerations:
1. _________________________________
2. _________________________________

APPROVAL FOR DEPLOYMENT
□ Approved - No bias concerns
□ Approved with monitoring - Minor concerns, monitor closely
□ Conditional approval - Address issues before deployment
□ Not approved - Significant bias, do not deploy

Signature: ________________  Date: __________
```

---

**Used By Articles**:
- Algorithmic Bias: How AI Discriminates and Why
- [Future articles on AI fairness, bias auditing, AI governance, compliance]

**Reusable For**:
- AI governance frameworks
- Compliance documentation
- Procurement evaluation
- Risk assessment processes
