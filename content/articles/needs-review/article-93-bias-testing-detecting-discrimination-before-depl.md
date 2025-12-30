---
title: 'Article 93: Bias Testing – Detecting Discrimination Before Deployment'
tldr: ''
category: AI Risks & Principles
learning_objectives:
- Understand the key concepts and principles of ai governance principles
- Implement implementation strategies in real-world scenarios
- Evaluate compliance frameworks for organizational compliance
seo_keywords:
- article
- bias
- AI governance
- bias testing
- this
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: balanced composition showing risk and safety elements, warning symbols with
    protective shields, balanced scales, diverse people silhouettes, equality symbols,
    deployment pipeline, implementation stages, production environment, professional
    illustration, modern flat design style, clean and authoritative, high quality,
    blue and gray color scheme with accent colors, suitable for professional article
    header
- type: table
  label: Use Case vs Primary Fairness Concern Table
  section: 'Step 3: Choose Fairness Metrics'
  id: table-step-3-choose-fairness-metrics
- type: table
  label: Attribute vs Metric Table
  section: 'Step 6: Document Findings'
  id: table-step-6-document-findings
- type: table
  label: Metric vs Warning Threshold Table
  section: Alert Thresholds
  id: table-alert-thresholds
- type: flowchart
  label: Bias Can Be Hidden Process
  section: Bias Can Be Hidden
  id: flowchart-bias-can-be-hidden
- type: flowchart
  label: 'Step 2: Obtain Group Data Process'
  section: 'Step 2: Obtain Group Data'
  id: flowchart-step-2-obtain-group-data
- type: flowchart
  label: Conclusion Process
  section: Conclusion
  id: flowchart-conclusion
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: template
  label: '*Example'
  section: Key Fairness Metrics
  id: template-key-fairness-metrics
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: The Impossibility Theorem
  id: template-the-impossibility-theorem
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: Disparate Impact Framework (US)
  id: template-disparate-impact-framework-us
  template_link: /templates/example.md
- type: list
  label: EU AI Act Requirements
  section: EU AI Act Requirements
  id: list-eu-ai-act-requirements
topic_fingerprint:
- machine learning
- fairness
- algorithmic bias
- risk assessment
- responsible ai
named_examples:
- amazon
- eu ai act
- fair
- google
- ibm
- microsoft
- nist
word_count: 1937
processed_date: '2025-12-18T02:17:05.333Z'
---


## Understanding AI Bias


### Where Does Bias Come From?

AI bias doesn't appear from nowhere. It has sources:

**Historical bias in training data:**
If the data reflects past discrimination, the model learns that discrimination.
- Hiring data where certain groups were historically excluded
- Lending data where certain neighborhoods were redlined
- Medical data where certain conditions were under-diagnosed in some populations

**Representation bias:**
If some groups are underrepresented in training data, the model performs worse for them.
- Facial recognition trained mostly on lighter-skinned faces
- Voice recognition trained mostly on certain accents
- Data from some regions but deployed globally

**Measurement bias:**
If outcomes are measured differently for different groups, the model learns those differences.
- "Performance" ratings that include manager bias
- "Success" metrics that favor certain demographics
- Labels that reflect biased human decisions

**Algorithmic bias:**
Design choices that affect groups differently.
- Features that correlate with protected characteristics
- Optimization objectives that advantage some groups
- Threshold choices that create disparate impact

**Deployment bias:**
How the model is used affects different groups differently.
- Used more heavily for certain populations
- Humans override decisions differently by group
- Context of use varies


### Bias Can Be Hidden

<!-- component:flowchart:flowchart-bias-can-be-hidden -->
Obvious bias: Model explicitly uses race as input → model considers race.

Hidden bias: Model uses zip code, which correlates with race → model indirectly considers race.

This "proxy discrimination" is why bias testing is necessary. You can't just check if protected attributes are used directly.

---


## Fairness Metrics: Different Definitions of "Fair"


### The Uncomfortable Truth

There are multiple ways to define "fair"—and they can't all be achieved simultaneously (mathematically proven in many cases).

You have to choose which type of fairness matters most for your use case.


### Key Fairness Metrics

**1. Demographic Parity (Statistical Parity)**

*Definition:* Selection rates should be equal across groups.

*Formula:* P(Prediction = Positive | Group A) = P(Prediction = Positive | Group B)

*In plain language:* The same percentage of each group should be selected/approved/flagged.

*When it matters:* When representation or access is the goal.

<!-- component:template:template-key-fairness-metrics -->
*Example:* 30% of men and 30% of women should be approved for loans.

---

**2. Equal Opportunity**

*Definition:* True positive rates should be equal across groups.

*Formula:* P(Prediction = Positive | Actual = Positive, Group A) = P(Prediction = Positive | Actual = Positive, Group B)

*In plain language:* Among qualified individuals, the same percentage of each group should be selected.

*When it matters:* When you want to ensure qualified members of all groups are identified.

<!-- component:template:template-key-fairness-metrics -->
*Example:* Among creditworthy applicants, approval rates should be equal across groups.

---

**3. Equalized Odds**

*Definition:* Both true positive rates AND false positive rates should be equal across groups.

*In plain language:* Both correct acceptances and incorrect acceptances should be proportionally equal.

*When it matters:* When both accepting qualified applicants and not incorrectly accepting unqualified applicants matters.

---

**4. Predictive Parity**

*Definition:* Precision (positive predictive value) should be equal across groups.

*Formula:* P(Actual = Positive | Prediction = Positive, Group A) = P(Actual = Positive | Prediction = Positive, Group B)

*In plain language:* When the model predicts positive, it should be equally accurate for all groups.

*When it matters:* When the cost of false positives is high.

---

**5. Calibration**

*Definition:* Predicted probabilities should mean the same thing across groups.

*In plain language:* If the model says 70% probability for someone in Group A, it should also be 70% accurate. Same for Group B.

*When it matters:* When decisions are based on probability thresholds.

---


### The Impossibility Theorem

**Critical insight:** In most cases, you cannot satisfy all fairness metrics simultaneously. If groups have different base rates (different actual rates of the target outcome), achieving one type of fairness often means failing another.

<!-- component:template:template-the-impossibility-theorem -->
**Example:**
- If Group A has a 5% fraud rate and Group B has a 10% fraud rate
- Equal accuracy for both groups (calibration) means different selection rates (violates demographic parity)
- Equal selection rates (demographic parity) means different accuracy for groups (violates calibration)

**Implication:** You must decide which fairness definition matters most for your context. This is a values decision, not a technical one.

---


## Conducting Bias Testing


### Step 1: Define Protected Groups

Identify which groups you're testing fairness across:

**Legally protected characteristics:**
- Race/ethnicity
- Gender
- Age
- Religion
- National origin
- Disability status

**Contextually important groups:**
- Geographic region
- Socioeconomic status
- Language
- Education level
- Other domain-specific categories

**Intersection groups:**
- Combinations (e.g., age AND gender)
- Smaller subgroups may have hidden disparities


### Step 2: Obtain Group Data

**Challenge:** You need demographic data to test for demographic fairness—but collecting demographic data has its own issues.

**Options:**
- Explicit collection (if legal and appropriate)
<!-- component:flowchart:flowchart-step-2-obtain-group-data -->
- Proxy inference (geolocation → demographics)
- Representative test sets with known demographics
- Third-party fairness audits with appropriate data

**Caution:** Proxy inference can be inaccurate and creates its own biases.


### Step 3: Choose Fairness Metrics

Based on your use case, decide which fairness definitions matter:

| Use Case | Primary Fairness Concern | Suggested Metrics |
<!-- component:table:table-step-3-choose-fairness-metrics -->
|----------|-------------------------|-------------------|
| Hiring | Equal access to jobs | Demographic parity, Equal opportunity |
| Lending | Equal access + accurate risk assessment | Equal opportunity, Calibration |
| Criminal justice | Not falsely flagging innocent people | Equalized odds, False positive parity |
| Healthcare | Identifying all who need care | Equal opportunity, True positive parity |


### Step 4: Calculate Metrics

For each protected group, calculate:

```
BIAS TESTING REPORT

Model: Loan Approval Classifier v2.3
Date: 2024-03-15
Protected Attribute: Gender

POPULATION BREAKDOWN
├── Male: 60% (n = 12,000)
└── Female: 40% (n = 8,000)

SELECTION RATES (Demographic Parity)
├── Male: 45% approved
├── Female: 38% approved
├── Disparity ratio: 0.84
└── Status: ⚠️ Below 0.80 threshold = violation

TRUE POSITIVE RATES (Equal Opportunity)
├── Male: 82% of creditworthy approved
├── Female: 79% of creditworthy approved
├── Disparity ratio: 0.96
└── Status: ✓ Above 0.80 threshold = pass

FALSE POSITIVE RATES
├── Male: 12% of non-creditworthy approved
├── Female: 8% of non-creditworthy approved
├── Disparity ratio: 0.67
└── Status: Women have lower false positive rate

ASSESSMENT
- Selection rate disparity detected
- Equal opportunity roughly satisfied
- Consider investigating proxy features driving selection disparity
```


### Step 5: Interpret Results

Findings require interpretation:

**Statistical significance:**
Is the disparity real or random noise? With small sample sizes, apparent disparities may not be meaningful.

**Practical significance:**
Is the disparity large enough to matter? A 1% difference might be statistically significant but practically insignificant.

**Root cause:**
Why does the disparity exist? Is it:
- Data bias (historical patterns)?
- Feature bias (proxies for protected attributes)?
- Model bias (architecture choices)?
- Legitimate differences (appropriate for the use case)?

**Context:**
What are the consequences of the disparity? A hiring model's bias has different implications than a recommendation model's bias.


### Step 6: Document Findings

```
BIAS TESTING DOCUMENTATION

Test Date: 2024-03-15
Tester: AI Governance Team
Model Version: loan_classifier_v2.3

PROTECTED ATTRIBUTES TESTED
[x] Gender
[x] Age (18-30, 31-50, 51-70, 70+)
[x] Race/Ethnicity
[ ] Disability (data not available)

FAIRNESS METRICS EVALUATED
[x] Demographic parity
[x] Equal opportunity
[x] Equalized odds
[x] Calibration

FINDINGS SUMMARY
| Attribute | Metric | Group A | Group B | Ratio | Status |
<!-- component:table:table-step-6-document-findings -->
|-----------|--------|---------|---------|-------|--------|
| Gender | Selection Rate | 45% | 38% | 0.84 | ⚠️ |
| Gender | Equal Opp. | 82% | 79% | 0.96 | ✓ |
| Age | Selection Rate | Varies | Varies | See detail | ⚠️ |
| Race | Selection Rate | Varies | Varies | See detail | ⚠️ |

RECOMMENDATIONS
1. Investigate zip code feature as proxy for race
2. Consider age-specific threshold adjustments
3. Conduct root cause analysis on gender selection gap

APPROVAL STATUS
[ ] Pass - Deploy without modifications
[x] Conditional - Deploy with mitigation plan
[ ] Fail - Do not deploy until issues resolved

Reviewed by: ________________  Date: ____________
```

---


## Bias Mitigation Strategies

When bias is found, options include:


### Pre-Processing Mitigation

Fix the data before training.

**Techniques:**
- Rebalancing (oversample underrepresented groups)
- Reweighting (give more weight to underrepresented groups)
- Removing biased features
- Transforming data to reduce correlation with protected attributes

**Pros:** Model-agnostic; addresses root cause
**Cons:** May lose information; doesn't guarantee fairness


### In-Processing Mitigation

Modify the training process to incorporate fairness.

**Techniques:**
- Add fairness constraints to optimization
- Use adversarial training to remove protected information
- Multi-objective optimization balancing accuracy and fairness

**Pros:** Directly optimizes for fairness
**Cons:** More complex training; may reduce accuracy


### Post-Processing Mitigation

Adjust outputs after the model makes predictions.

**Techniques:**
- Group-specific thresholds
- Calibration adjustments
- Reject option (don't decide on uncertain cases)

**Pros:** Simple to implement; doesn't require retraining
**Cons:** May feel like "two different standards"; legal considerations


### The Trade-off Reality

Bias mitigation usually involves trade-offs:
- Fairness vs. accuracy
- One fairness metric vs. another
- Complexity vs. simplicity

Document these trade-offs and the decisions made.

---


## Ongoing Bias Monitoring

Bias testing isn't one-time. AI systems can develop bias over time.


### Why Ongoing Monitoring?

**Data drift:** Population characteristics change.
**Feedback loops:** Model decisions affect future data.
**Concept drift:** Relationships in data change.
**Deployment changes:** Who the model serves may change.


### Monitoring Framework

```
BIAS MONITORING DASHBOARD

Period: March 2024

DEMOGRAPHIC PARITY (Selection Rates)
├── Target: All groups within 80% of highest group
│
│   Group A: ████████████████████ 42%
│   Group B: ██████████████████   38%
│   Group C: ████████████████     35%
│   Group D: ████████████         29% ← Below threshold!
│
└── Status: ⚠️ Group D below threshold - Alert triggered

TREND (Last 6 Months)
├── Oct: 0.88
├── Nov: 0.86
├── Dec: 0.84
├── Jan: 0.81
├── Feb: 0.77
└── Mar: 0.69 ← Declining trend

ACTION ITEMS
[!] Investigate Group D disparity increase
[!] Review February data changes
[ ] Schedule root cause analysis
```


### Alert Thresholds

Set thresholds that trigger review:

| Metric | Warning Threshold | Critical Threshold |
<!-- component:table:table-alert-thresholds -->
|--------|-------------------|-------------------|
| Selection ratio | < 0.85 | < 0.80 |
| Equal opportunity ratio | < 0.90 | < 0.85 |
| Month-over-month change | > 5% | > 10% |

---


## Common Bias Testing Mistakes


### Mistake 1: Testing Only One Metric

**Problem:** Satisfy demographic parity but violate equal opportunity.

**Fix:** Test multiple fairness metrics and understand trade-offs.


### Mistake 2: Ignoring Intersectionality

**Problem:** Fair for men, fair for over-50, but not fair for men over 50.

**Fix:** Test intersectional groups, not just single attributes.


### Mistake 3: Using Proxy Data Without Validation

**Problem:** Inferring race from zip code, but inference is inaccurate.

**Fix:** Validate proxy accuracy; acknowledge limitations.


### Mistake 4: Setting Arbitrary Thresholds

**Problem:** "80% rule" may not be appropriate for your context.

**Fix:** Choose thresholds based on context, consequences, and legal requirements.


### Mistake 5: One-Time Testing Only

**Problem:** Model was fair at deployment but drifted over time.

**Fix:** Continuous monitoring with alerting.


### Mistake 6: Technical Fix Without Understanding

**Problem:** Applied mitigation without understanding root cause.

**Fix:** Investigate why bias exists before mitigating.

---


## Legal Context


### Disparate Impact Framework (US)

Under US employment and lending law, practices that have disparate impact on protected groups may be illegal—even without discriminatory intent.

**The 80% Rule (Four-Fifths Rule):**
If the selection rate for a protected group is less than 80% of the rate for the group with the highest rate, this may constitute evidence of disparate impact.

<!-- component:template:template-disparate-impact-framework-us -->
**Example:**
- Male approval rate: 50%
- Female approval rate: 35%
- Ratio: 35/50 = 70%
- This is less than 80%, so may indicate disparate impact

**Caveat:** This is a guideline, not an absolute rule. Legal assessment is more nuanced.

<!-- component:list:list-eu-ai-act-requirements -->

### EU AI Act Requirements

High-risk AI systems must:
- Use training data that is sufficiently representative
- Test for bias before deployment
- Document testing results
- Monitor for bias during operation


### Documentation for Legal Protection

Thorough bias testing documentation:
- Demonstrates due diligence
- Shows intentional effort to prevent discrimination
- Provides evidence if challenged
- Supports continuous improvement

---


## Conclusion

Bias testing is how you find discrimination before it harms people. It's not optional for responsible AI—it's essential.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Bias has sources:** Historical data, representation gaps, measurement issues, and design choices all contribute.

2. **Fairness has multiple definitions:** Choose which type of fairness matters for your context.

3. **Trade-offs exist:** You can't satisfy all fairness metrics simultaneously. Document your choices.

4. **Testing must be systematic:** Define groups, choose metrics, calculate, interpret, and document.

5. **Mitigation options exist:** Pre-processing, in-processing, and post-processing techniques can address bias.

6. **Monitoring is ongoing:** Bias can emerge or worsen over time. Continuous monitoring is required.

7. **Context matters:** What counts as "fair" depends on the use case, consequences, and legal requirements.

Finding bias is the first step. Deciding what to do about it—and documenting that decision—is how you move from bias testing to responsible AI.

---


## Sources and Further Reading

1. **"Fairness and Machine Learning"** - Barocas, Hardt, Narayanan. Comprehensive textbook. Available at: fairmlbook.org

2. **AI Fairness 360** - IBM's fairness toolkit. Available at: aif360.mybluemix.net

3. **Fairlearn** - Microsoft's fairness toolkit. Available at: fairlearn.org

4. **Google What-If Tool** - Fairness visualization. Available at: pair-code.github.io/what-if-tool

5. **EEOC** - Four-Fifths Rule guidance. Available at: eeoc.gov

6. **NIST AI RMF** - Fairness testing guidance. Available at: nist.gov

7. **EU AI Act** - Bias requirements for high-risk AI. Available at: eur-lex.europa.eu

8. **ProPublica** - COMPAS investigation. Available at: propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing

9. **Gender Shades** - Joy Buolamwini's research on facial recognition bias. Available at: gendershades.org

10. **ACM Conference on Fairness, Accountability, and Transparency (FAccT)** - Research papers. Available at: facctconference.org

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
