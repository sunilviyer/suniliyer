# Article 152: How to Perform a Bias Audit — Methodology and Tools

## Comprehensive Step-by-Step Guide

---

## Introduction

A Bias Audit is a systematic examination of an AI system to identify, measure, and document discriminatory patterns in its outputs. Think of it as a "fairness check-up" — examining whether an AI system treats different groups of people equitably.

This guide walks you through conducting a complete bias audit from planning to reporting, with practical tools, statistical methods, and real-world examples.

---

## What is a Bias Audit?

### Definition

A Bias Audit is a structured assessment that:

- **Identifies** whether an AI system produces different outcomes for different demographic groups
- **Measures** the magnitude of any disparities found
- **Evaluates** whether disparities constitute unlawful discrimination or unfair treatment
- **Documents** findings in a standardized format
- **Recommends** actions to address identified issues

### Types of Bias Audits

| Type | Focus | When Used |
|------|-------|-----------|
| **Pre-deployment Audit** | Assess before launch | New AI systems |
| **Ongoing Monitoring** | Continuous assessment | Production systems |
| **Retrospective Audit** | Analyze historical decisions | Existing systems, incidents |
| **Regulatory Audit** | Meet legal requirements | NYC Local Law 144, EU AI Act |
| **Third-Party Audit** | Independent assessment | High-risk systems, compliance |

### Why Conduct Bias Audits?

| Reason | Benefit |
|--------|---------|
| **Legal Compliance** | Required by NYC Local Law 144, EU AI Act, and other regulations |
| **Risk Mitigation** | Identify issues before they cause harm or liability |
| **Fairness** | Ensure equitable treatment of all individuals |
| **Trust** | Demonstrate commitment to responsible AI |
| **Performance** | Biased models often have hidden quality issues |
| **Reputation** | Avoid public relations crises from biased AI |

### Regulatory Requirements

```
REGULATORY BIAS AUDIT REQUIREMENTS

NYC Local Law 144 (Automated Employment Decision Tools):
- Annual bias audit required
- Must be conducted by independent auditor
- Results must be publicly posted
- Must calculate impact ratios by sex and race/ethnicity
- Applies to hiring and promotion tools

EU AI Act (High-Risk AI Systems):
- Bias testing required as part of conformity assessment
- Must test for discriminatory impacts
- Documentation requirements
- Ongoing monitoring obligations

EEOC/OFCCP (US Employment):
- Adverse impact analysis required
- Four-fifths (80%) rule as guideline
- Applies to employment selection procedures

State Laws (Colorado, Illinois, etc.):
- Various bias audit and disclosure requirements
- Check jurisdiction-specific requirements
```

---

## Understanding Bias in AI

### Types of Bias

```
TYPES OF BIAS IN AI SYSTEMS

HISTORICAL BIAS
Definition: Bias present in the real world that gets encoded into training data
Example: If historical hiring data reflects past discrimination, the model learns to discriminate
Detection: Compare training data patterns to equitable baselines

REPRESENTATION BIAS
Definition: Training data doesn't represent all groups equally
Example: Facial recognition trained mostly on lighter-skinned faces
Detection: Analyze demographic distribution in training data

MEASUREMENT BIAS
Definition: The way outcomes are measured differs across groups
Example: Using arrest records as proxy for criminal behavior (policing disparities)
Detection: Examine outcome variable definition and collection

AGGREGATION BIAS
Definition: Model assumes one-size-fits-all when groups have different patterns
Example: Medical model that works differently for men and women
Detection: Test for different optimal models across subgroups

EVALUATION BIAS
Definition: Test data doesn't represent deployment population
Example: Testing image classifier on professional photos, deploying on user selfies
Detection: Compare evaluation data demographics to deployment context

DEPLOYMENT BIAS
Definition: System used differently than designed
Example: Hiring tool designed for one role used for all roles
Detection: Monitor actual usage patterns vs. intended use

ALGORITHMIC BIAS
Definition: Model architecture or optimization introduces bias
Example: Optimizing for overall accuracy at expense of minority groups
Detection: Analyze model internals, feature importance, decision boundaries
```

### Protected Characteristics

```
PROTECTED CHARACTERISTICS

Characteristics typically protected by law:

United States:
□ Race
□ Color
□ National origin
□ Sex (including pregnancy, sexual orientation, gender identity)
□ Religion
□ Age (40+)
□ Disability
□ Genetic information
□ Veteran status

European Union:
□ Racial or ethnic origin
□ Political opinions
□ Religious or philosophical beliefs
□ Trade union membership
□ Genetic data
□ Biometric data
□ Health data
□ Sex life or sexual orientation

Additional characteristics often considered:
□ Socioeconomic status
□ Geographic location
□ Language
□ Immigration status
□ Criminal history
□ Credit history
□ Education level

Note: Applicable characteristics depend on jurisdiction, context, and use case.
```

### Proxy Variables

```
PROXY VARIABLES

Proxies are variables correlated with protected characteristics:

| Protected Characteristic | Common Proxies |
|-------------------------|----------------|
| Race/Ethnicity | Zip code, name, school attended |
| Sex/Gender | Name, job title history |
| Age | Graduation year, years of experience |
| Disability | Employment gaps, accommodation requests |
| Socioeconomic Status | Address, school, credit score |
| National Origin | Name, language, address |
| Religion | Name, school, holidays taken |

Why Proxies Matter:
- Removing protected characteristics doesn't eliminate bias
- Proxies can encode discrimination indirectly
- Must audit for proxy discrimination

Detection Approaches:
- Correlation analysis between features and protected groups
- Feature importance analysis
- Counterfactual testing
```

---

## Before You Start: Prerequisites

### Information Needed

```
BIAS AUDIT PREREQUISITES

System Information:
□ System documentation and design specs
□ Model type and architecture
□ Feature list and definitions
□ Training methodology
□ Decision thresholds and rules
□ Deployment context and use cases

Data Required:
□ Historical decisions/predictions with outcomes
□ Demographic data for subjects (or proxies)
□ Ground truth labels (if available)
□ Sample sizes by demographic group

Minimum Sample Sizes:
- General guideline: 100+ per group for statistical validity
- For rare outcomes: May need larger samples
- Document when sample sizes are insufficient

Access Needed:
□ Model predictions or scores
□ Final decisions (if different from predictions)
□ Demographic information
□ Feature values (for proxy analysis)
□ System logs (for deployment analysis)
```

### Audit Team

```
AUDIT TEAM COMPOSITION

Core Team:
| Role | Responsibility |
|------|---------------|
| Audit Lead | Overall coordination, methodology, reporting |
| Data Analyst/Statistician | Statistical analysis, metrics calculation |
| Data Engineer | Data extraction, preparation, quality |
| Domain Expert | Context for use case, outcome interpretation |

Extended Team (as needed):
| Role | Responsibility |
|------|---------------|
| Legal Counsel | Regulatory requirements, legal interpretation |
| Ethicist | Fairness framework selection, ethical analysis |
| Community Representative | Affected group perspective |
| External Auditor | Independence, credibility (if required) |

Independence Requirements:
□ Check if independent auditor required by regulation
□ Document auditor qualifications
□ Disclose any conflicts of interest
□ Ensure access to necessary data and systems
```

### Tools and Software

```
BIAS AUDIT TOOLS

Statistical Analysis:
- Python (pandas, numpy, scipy)
- R (for statistical tests)
- SQL (for data extraction)

Fairness Toolkits:
| Tool | Provider | Strengths |
|------|----------|-----------|
| Fairlearn | Microsoft | Comprehensive metrics, mitigation |
| AI Fairness 360 | IBM | Wide metric coverage, algorithms |
| Aequitas | UChicago | Audit-focused, visualization |
| What-If Tool | Google | Interactive exploration |
| Themis-ML | Various | Statistical testing |

Visualization:
- Matplotlib, Seaborn (Python)
- ggplot2 (R)
- Tableau, Power BI

Documentation:
- Jupyter Notebooks (reproducible analysis)
- Model Card generators
```

---

## The Bias Audit Process: Overview

```
┌─────────────────────────────────────────────────────────────┐
│  PHASE 1: PLANNING                                          │
│  Step 1: Define Scope and Objectives                        │
│  Step 2: Select Fairness Metrics                            │
│  Step 3: Identify Groups to Analyze                         │
├─────────────────────────────────────────────────────────────┤
│  PHASE 2: DATA PREPARATION                                  │
│  Step 4: Collect and Prepare Data                           │
│  Step 5: Validate Data Quality                              │
├─────────────────────────────────────────────────────────────┤
│  PHASE 3: ANALYSIS                                          │
│  Step 6: Calculate Fairness Metrics                         │
│  Step 7: Perform Statistical Testing                        │
│  Step 8: Analyze Root Causes                                │
├─────────────────────────────────────────────────────────────┤
│  PHASE 4: REPORTING AND ACTION                              │
│  Step 9: Document Findings                                  │
│  Step 10: Develop Recommendations                           │
└─────────────────────────────────────────────────────────────┘
```

---

## PHASE 1: PLANNING

### Step 1: Define Scope and Objectives

#### 1.1 Audit Scope

```
AUDIT SCOPE DEFINITION

System Being Audited:
- System name: _______________________
- System version: _______________________
- Deployment date: _______________________
- System owner: _______________________

Audit Type:
□ Pre-deployment audit
□ Annual/periodic audit
□ Regulatory compliance audit
□ Incident-triggered audit
□ Other: _______________________

Regulatory Framework:
□ NYC Local Law 144
□ EU AI Act
□ EEOC Adverse Impact
□ Internal policy
□ Other: _______________________

Scope Boundaries:

IN SCOPE:
□ Model predictions/scores
□ Final decisions
□ Historical decisions (period: _______)
□ Training data analysis
□ Feature/proxy analysis
□ Intersectional analysis
□ Other: _______________________

OUT OF SCOPE:
□ _______________________
□ _______________________

Rationale for Scope:
_____________________________________________________________
```

#### 1.2 Audit Objectives

```
AUDIT OBJECTIVES

Primary Question:
Does this AI system produce equitable outcomes across demographic groups?

Specific Objectives:
□ Determine if selection/positive rates differ significantly by group
□ Determine if error rates differ significantly by group
□ Calculate impact ratios for regulatory compliance
□ Identify potential proxy discrimination
□ Assess intersectional disparities
□ Benchmark against fairness thresholds
□ Other: _______________________

Success Criteria:
What would constitute a "pass"?
_____________________________________________________________

What would require remediation?
_____________________________________________________________

Stakeholders:
| Stakeholder | Interest | Deliverable |
|-------------|----------|-------------|
|             |          |             |
|             |          |             |
```

---

### Step 2: Select Fairness Metrics

#### 2.1 Understanding Fairness Metrics

```
FAIRNESS METRICS REFERENCE

═══════════════════════════════════════════════════════════════
GROUP FAIRNESS METRICS
═══════════════════════════════════════════════════════════════

DEMOGRAPHIC PARITY (Statistical Parity)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Equal positive prediction rates across groups
Formula: P(Ŷ=1|A=a) = P(Ŷ=1|A=b) for all groups a, b
Plain English: The same proportion of each group should receive 
               positive outcomes

Use When: 
- Want equal representation in outcomes
- Historical labels may be biased
- Focus is on equal opportunity for positive outcome

Limitations:
- May conflict with accuracy if base rates differ
- Doesn't account for qualifications

Example: 30% of men and 30% of women should be selected for interviews

───────────────────────────────────────────────────────────────

EQUALIZED ODDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Equal true positive rates AND false positive rates
Formula: P(Ŷ=1|Y=1,A=a) = P(Ŷ=1|Y=1,A=b) AND
         P(Ŷ=1|Y=0,A=a) = P(Ŷ=1|Y=0,A=b)
Plain English: Both correct acceptances and incorrect acceptances 
               should be equal across groups

Use When:
- Want equal error rates across groups
- Labels are reliable
- Both false positives and false negatives matter

Limitations:
- Requires reliable ground truth labels
- Can be difficult to satisfy perfectly

Example: Qualified candidates have same chance of selection regardless 
         of group; unqualified candidates have same chance of incorrect 
         selection regardless of group

───────────────────────────────────────────────────────────────

EQUAL OPPORTUNITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Equal true positive rates across groups
Formula: P(Ŷ=1|Y=1,A=a) = P(Ŷ=1|Y=1,A=b)
Plain English: Qualified individuals have equal chance of positive 
               outcome regardless of group

Use When:
- Focus is on not missing qualified individuals
- False negatives are the primary concern
- "Equal chance for those who deserve it"

Limitations:
- Doesn't address false positives
- Requires reliable labels

Example: Qualified loan applicants should have equal approval rates

───────────────────────────────────────────────────────────────

PREDICTIVE PARITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Equal precision (positive predictive value) across groups
Formula: P(Y=1|Ŷ=1,A=a) = P(Y=1|Ŷ=1,A=b)
Plain English: When the model predicts positive, it should be equally 
               accurate across groups

Use When:
- Focus on accuracy of positive predictions
- Want predictions to be equally trustworthy across groups

Limitations:
- May conflict with equal opportunity
- Penalizes groups with different base rates

Example: Of those predicted to succeed, same proportion actually 
         succeeds across groups

───────────────────────────────────────────────────────────────

CALIBRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Predicted probabilities match actual outcomes across groups
Formula: P(Y=1|Score=s,A=a) = P(Y=1|Score=s,A=b) = s
Plain English: A 70% confidence score means 70% actual positive rate 
               for all groups

Use When:
- Model outputs probabilities
- Want scores to have same meaning across groups

Example: Candidates scored 80% should have 80% success rate regardless 
         of demographic group

═══════════════════════════════════════════════════════════════
IMPACT METRICS (Regulatory)
═══════════════════════════════════════════════════════════════

IMPACT RATIO (Selection Rate Ratio)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: Selection rate of group / Selection rate of reference group
Formula: (Positive rate for Group A) / (Positive rate for Group B)
Threshold: Four-fifths rule: ratio ≥ 0.80 generally acceptable

Use When:
- EEOC/OFCCP compliance (employment)
- NYC Local Law 144 compliance
- Regulatory reporting

Example: If 50% of Group A selected and 40% of Group B selected:
         Impact ratio = 40/50 = 0.80 (meets four-fifths rule)

───────────────────────────────────────────────────────────────

ADVERSE IMPACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Definition: When selection rate for protected group is less than 80% 
            of rate for highest-rate group
Detection: Impact ratio < 0.80

Use When:
- Employment decisions
- Legal compliance analysis
- Determining if further investigation needed

Note: Four-fifths rule is a guideline, not absolute threshold
```

#### 2.2 Metric Selection Framework

```
METRIC SELECTION

Step 1: Identify Your Context

Use Case Category:
□ Employment/HR (hiring, promotion, termination)
□ Credit/Lending
□ Insurance
□ Healthcare
□ Criminal Justice
□ Housing
□ Education
□ Content/Recommendations
□ Other: _______________________

Decision Type:
□ Binary (yes/no)
□ Scoring/ranking
□ Multi-class
□ Continuous prediction

Stakes Level:
□ High (significant legal/financial/life impact)
□ Medium (moderate impact)
□ Low (minimal impact)

Step 2: Select Primary Metric

For Employment (NYC LL144 required):
☑ Impact Ratio (by sex, race/ethnicity)

For Equal Treatment Focus:
☑ Demographic Parity

For Qualified Candidate Focus:
☑ Equal Opportunity

For Error Rate Focus:
☑ Equalized Odds

For Prediction Accuracy Focus:
☑ Predictive Parity

Step 3: Select Secondary Metrics

□ Impact Ratio
□ Demographic Parity
□ Equal Opportunity
□ Equalized Odds
□ Predictive Parity
□ Calibration
□ False Positive Rate Parity
□ False Negative Rate Parity

Selected Metrics for This Audit:
| Metric | Priority | Threshold | Rationale |
|--------|----------|-----------|-----------|
|        | Primary  |           |           |
|        | Secondary|           |           |
|        | Secondary|           |           |
```

#### 2.3 Impossibility Theorem Awareness

```
FAIRNESS METRIC TRADE-OFFS

Important: It is mathematically impossible to satisfy all fairness 
metrics simultaneously when base rates differ across groups.

Key Trade-offs:

Demographic Parity vs. Predictive Parity:
- If Group A has 30% base rate and Group B has 50% base rate
- Equal selection rates → unequal precision
- Equal precision → unequal selection rates

Equal Opportunity vs. False Positive Parity:
- Equalizing true positive rates may increase false positive 
  disparity (or vice versa)

Implications for Auditing:
1. Choose metrics based on values and context
2. Document trade-off decisions
3. Don't expect perfect scores on all metrics
4. Focus on metrics most relevant to harms
5. Consider which errors are most costly

Trade-off Documentation:
Metric prioritized: _______________________
Metric deprioritized: _______________________
Rationale: _______________________
```

---

### Step 3: Identify Groups to Analyze

#### 3.1 Group Definition

```
GROUP DEFINITION

Protected Characteristics to Analyze:

REQUIRED (if applicable by regulation):
□ Sex/Gender
  Categories: _______________________
  Data source: _______________________
  
□ Race/Ethnicity
  Categories: _______________________
  Data source: _______________________

ADDITIONAL (based on context):
□ Age
  Categories: _______________________
  
□ Disability
  Categories: _______________________
  
□ Other: _______________________
  Categories: _______________________

Data Availability:
| Characteristic | Available? | Source | Quality |
|----------------|------------|--------|---------|
| Sex/Gender     |            |        |         |
| Race/Ethnicity |            |        |         |
| Age            |            |        |         |
| Other          |            |        |         |

When Demographic Data Unavailable:
□ Use proxy methods (BISG for race/ethnicity)
□ Request from subjects
□ Infer from other data (with documentation)
□ Conduct audit without demographic breakdown
□ Document limitation
```

#### 3.2 Reference Group Selection

```
REFERENCE GROUP SELECTION

For Impact Ratio calculations, select reference group:

Option 1: Highest Selection Rate Group
- Most conservative approach
- Standard for adverse impact analysis
- All other groups compared to highest rate

Option 2: Majority Group
- Uses largest demographic group
- Common in practice
- May not be highest-rate group

Option 3: Overall Population Rate
- Compares each group to overall average
- Useful when no clear majority

Selected Approach: _______________________

Reference Groups:
| Characteristic | Reference Group | Rationale |
|----------------|-----------------|-----------|
| Sex/Gender     |                 |           |
| Race/Ethnicity |                 |           |
| Age            |                 |           |
```

#### 3.3 Intersectional Groups

```
INTERSECTIONAL ANALYSIS

Intersections to Analyze:
[Combinations of characteristics that may reveal hidden disparities]

□ Sex × Race/Ethnicity
  Groups: _______________________

□ Sex × Age
  Groups: _______________________

□ Race × Age
  Groups: _______________________

□ Other: _______________________

Sample Size Considerations:
| Intersection | Expected N | Sufficient? |
|--------------|------------|-------------|
|              |            |             |
|              |            |             |

Note: Small sample sizes limit intersectional analysis validity.
Document when samples are too small for reliable conclusions.
```

---

## PHASE 2: DATA PREPARATION

### Step 4: Collect and Prepare Data

#### 4.1 Data Requirements

```
DATA COLLECTION

Required Data Elements:

| Element | Description | Source | Format |
|---------|-------------|--------|--------|
| Subject ID | Unique identifier | | |
| Prediction/Score | Model output | | |
| Decision | Final outcome (if different) | | |
| Ground Truth | Actual outcome (if available) | | |
| Demographic: Sex | | | |
| Demographic: Race | | | |
| Demographic: Other | | | |
| Features | Model inputs | | |
| Timestamp | When decision made | | |

Data Period:
- Start date: _______________________
- End date: _______________________
- Rationale: _______________________

Population:
- Total records: _______________________
- Inclusion criteria: _______________________
- Exclusion criteria: _______________________
```

#### 4.2 Data Extraction

```
DATA EXTRACTION

Extraction Query/Script:
[Document or reference the extraction code]

Location: _______________________

Extraction Date: _______________________

Extracted By: _______________________

Row Count Verification:
- Expected: _______________________
- Actual: _______________________
- Discrepancy explanation: _______________________

Column Verification:
| Column | Expected Type | Actual Type | Issues |
|--------|---------------|-------------|--------|
|        |               |             |        |
|        |               |             |        |
```

#### 4.3 Data Preparation

```
DATA PREPARATION STEPS

Step 1: Handle Missing Values
| Field | Missing Count | Missing % | Treatment |
|-------|---------------|-----------|-----------|
|       |               |           |           |
|       |               |           |           |

Treatments Applied:
□ Exclude records with missing demographics
□ Impute using [method]
□ Create "Unknown" category
□ Other: _______________________

Step 2: Standardize Categories
| Original Value | Standardized Value |
|----------------|-------------------|
|                |                   |
|                |                   |

Step 3: Create Derived Variables
| Variable | Definition | Rationale |
|----------|------------|-----------|
|          |            |           |

Step 4: Filter to Analysis Population
- Starting N: _______________________
- After exclusions N: _______________________
- Exclusion reasons: _______________________
```

---

### Step 5: Validate Data Quality

#### 5.1 Data Quality Checks

```
DATA QUALITY VALIDATION

Completeness Check:
| Field | Complete Records | % Complete | Acceptable? |
|-------|------------------|------------|-------------|
|       |                  |            |             |
|       |                  |            |             |

Validity Check:
| Field | Valid Values | Invalid Count | Action |
|-------|--------------|---------------|--------|
|       |              |               |        |
|       |              |               |        |

Consistency Check:
□ Prediction values within expected range
□ Decision values are valid categories
□ Demographics match expected distributions
□ Timestamps are logical
□ No duplicate records

Accuracy Check (if possible):
□ Sample verified against source systems
□ Spot-check of calculations
□ Reconciliation to known totals
```

#### 5.2 Sample Size Assessment

```
SAMPLE SIZE ASSESSMENT

Minimum Sample Sizes:
- For reliable proportions: n ≥ 100 per group
- For statistical tests: varies by test
- For regulatory compliance: check requirements

Actual Sample Sizes:
| Group | N | % of Total | Sufficient? |
|-------|---|------------|-------------|
| Overall |  |            |             |
| Male |    |            |             |
| Female | |            |             |
| White |  |            |             |
| Black |  |            |             |
| Hispanic | |          |             |
| Asian |  |            |             |
| Other |  |            |             |

Groups with Insufficient Samples:
| Group | N | Action |
|-------|---|--------|
|       |   | □ Combine categories □ Report with caveat □ Exclude |

Statistical Power Consideration:
- Effect size detectable with current N: _______________________
- Implications for conclusions: _______________________
```

---

## PHASE 3: ANALYSIS

### Step 6: Calculate Fairness Metrics

#### 6.1 Selection Rate Calculation

```
SELECTION RATE ANALYSIS

Overall Selection Rate:
- Total applicants/subjects: _______________________
- Total selected/positive: _______________________
- Overall selection rate: _______________________

Selection Rate by Group:

| Group | N | Selected | Selection Rate |
|-------|---|----------|----------------|
| Overall |  |          |                |
| Male |    |          |                |
| Female | |          |                |
| White |  |          |                |
| Black |  |          |                |
| Hispanic | |        |                |
| Asian |  |          |                |
| Other |  |          |                |

Visualization: [Create bar chart of selection rates by group]
```

#### 6.2 Impact Ratio Calculation

```
IMPACT RATIO CALCULATION

Reference Group: _______________________
Reference Rate: _______________________

Impact Ratios by Sex:
| Group | Selection Rate | Impact Ratio | Meets 80%? |
|-------|----------------|--------------|------------|
| [Reference] | | 1.00 | N/A |
| | | | |
| | | | |

Impact Ratios by Race/Ethnicity:
| Group | Selection Rate | Impact Ratio | Meets 80%? |
|-------|----------------|--------------|------------|
| [Reference] | | 1.00 | N/A |
| | | | |
| | | | |
| | | | |

Impact Ratio Formula:
Impact Ratio = Selection Rate (Group) / Selection Rate (Reference)

Interpretation:
- Ratio ≥ 0.80: Generally acceptable (four-fifths rule)
- Ratio < 0.80: Potential adverse impact, investigate further
- Ratio > 1.00: Group selected at higher rate than reference
```

#### 6.3 Detailed Fairness Metrics

```
DETAILED FAIRNESS METRICS

For each metric, calculate overall and by group:

CONFUSION MATRIX BY GROUP
[Calculate for each demographic group]

Group: _______________________
|                | Predicted + | Predicted - |
|----------------|-------------|-------------|
| Actual +       | TP =        | FN =        |
| Actual -       | FP =        | TN =        |

Derived Metrics:
- True Positive Rate (Recall) = TP / (TP + FN) = _______
- False Positive Rate = FP / (FP + TN) = _______
- Precision = TP / (TP + FP) = _______
- False Negative Rate = FN / (TP + FN) = _______

[Repeat for each group]

METRIC COMPARISON TABLE

| Metric | Overall | Group A | Group B | Group C | Max Gap |
|--------|---------|---------|---------|---------|---------|
| Selection Rate |  |  |  |  |  |
| True Positive Rate |  |  |  |  |  |
| False Positive Rate |  |  |  |  |  |
| Precision |  |  |  |  |  |
| False Negative Rate |  |  |  |  |  |

Gap Analysis:
| Metric | Largest Gap | Between Groups | Acceptable? |
|--------|-------------|----------------|-------------|
|        |             |                |             |
|        |             |                |             |
```

#### 6.4 Code Examples

```python
# PYTHON CODE EXAMPLES FOR BIAS AUDIT

# Using Fairlearn
from fairlearn.metrics import (
    demographic_parity_difference,
    equalized_odds_difference,
    MetricFrame
)
from sklearn.metrics import accuracy_score, precision_score, recall_score

# Calculate metrics by group
metric_frame = MetricFrame(
    metrics={
        'accuracy': accuracy_score,
        'precision': precision_score,
        'recall': recall_score,
        'selection_rate': lambda y_true, y_pred: y_pred.mean()
    },
    y_true=y_true,
    y_pred=y_pred,
    sensitive_features=demographic_groups
)

# View metrics by group
print(metric_frame.by_group)

# Calculate disparities
print("Demographic Parity Difference:", 
      demographic_parity_difference(y_true, y_pred, sensitive_features=demographic_groups))

# Using Aequitas
from aequitas.group import Group
from aequitas.bias import Bias

g = Group()
xtab, _ = g.get_crosstabs(df)

b = Bias()
bdf = b.get_disparity_predefined_groups(
    xtab, 
    original_df=df,
    ref_groups_dict={'race': 'White', 'sex': 'Male'}
)

# Calculate impact ratio manually
def impact_ratio(df, group_col, outcome_col, reference_group):
    rates = df.groupby(group_col)[outcome_col].mean()
    ref_rate = rates[reference_group]
    return rates / ref_rate

impact_ratios = impact_ratio(df, 'race', 'selected', 'White')
print(impact_ratios)
```

---

### Step 7: Perform Statistical Testing

#### 7.1 Statistical Significance Tests

```
STATISTICAL TESTING

Purpose: Determine if observed differences are statistically significant
         or could have occurred by chance.

TEST SELECTION GUIDE

For Comparing Proportions (2 groups):
□ Chi-square test
□ Fisher's exact test (small samples)
□ Z-test for proportions

For Comparing Proportions (multiple groups):
□ Chi-square test of independence
□ G-test

For Comparing Means:
□ t-test (2 groups)
□ ANOVA (multiple groups)
□ Mann-Whitney U (non-parametric)

For Impact Ratio:
□ Fisher's exact test
□ Bootstrap confidence intervals
```

#### 7.2 Statistical Test Results

```
STATISTICAL TEST RESULTS

Test 1: Selection Rate Difference by Sex
- Test used: _______________________
- Groups compared: _______________________
- Test statistic: _______________________
- p-value: _______________________
- Significant at α=0.05? □ Yes □ No
- Effect size: _______________________

Test 2: Selection Rate Difference by Race
- Test used: _______________________
- Groups compared: _______________________
- Test statistic: _______________________
- p-value: _______________________
- Significant at α=0.05? □ Yes □ No
- Effect size: _______________________

[Repeat for each comparison]

SUMMARY OF STATISTICAL FINDINGS

| Comparison | p-value | Significant? | Effect Size | Interpretation |
|------------|---------|--------------|-------------|----------------|
|            |         |              |             |                |
|            |         |              |             |                |

Note on Statistical vs. Practical Significance:
- Statistical significance indicates difference unlikely due to chance
- Practical significance considers whether difference matters
- Large samples may show statistical significance for small differences
- Focus on effect size and impact ratios for practical interpretation
```

#### 7.3 Confidence Intervals

```
CONFIDENCE INTERVALS

Calculate 95% confidence intervals for key metrics:

Selection Rates:
| Group | Selection Rate | 95% CI Lower | 95% CI Upper |
|-------|----------------|--------------|--------------|
|       |                |              |              |
|       |                |              |              |

Impact Ratios:
| Comparison | Impact Ratio | 95% CI Lower | 95% CI Upper |
|------------|--------------|--------------|--------------|
|            |              |              |              |
|            |              |              |              |

Interpretation:
- If CI for impact ratio includes 0.80, cannot definitively conclude 
  adverse impact
- If CI for rate difference includes 0, difference may not be meaningful
- Wide CIs indicate uncertainty (often due to small samples)
```

---

### Step 8: Analyze Root Causes

#### 8.1 Feature Analysis

```
ROOT CAUSE ANALYSIS

Feature Importance by Group:
[Analyze whether different features drive predictions for different groups]

| Feature | Overall Importance | Group A Importance | Group B Importance |
|---------|-------------------|-------------------|-------------------|
|         |                   |                   |                   |
|         |                   |                   |                   |

Proxy Variable Analysis:
[Examine correlation between features and protected characteristics]

| Feature | Correlation with Sex | Correlation with Race |
|---------|---------------------|----------------------|
|         |                     |                      |
|         |                     |                      |

High-correlation features (potential proxies):
1. _______________________
2. _______________________
```

#### 8.2 Training Data Analysis

```
TRAINING DATA ANALYSIS

Training Data Demographics vs. Population:
| Group | Training Data % | Population % | Difference |
|-------|-----------------|--------------|------------|
|       |                 |              |            |
|       |                 |              |            |

Training Data Label Analysis:
| Group | Positive Label % | Expected % | Difference |
|-------|------------------|------------|------------|
|       |                  |            |            |
|       |                  |            |            |

Historical Bias Assessment:
□ Are historical labels potentially biased?
□ Do labels reflect past discrimination?
□ Was labeling process equitable?

Findings: _______________________
```

#### 8.3 Threshold Analysis

```
THRESHOLD ANALYSIS

Current Threshold: _______________________

Impact of Different Thresholds:

| Threshold | Overall Rate | Group A Rate | Group B Rate | Impact Ratio |
|-----------|--------------|--------------|--------------|--------------|
| 0.3       |              |              |              |              |
| 0.4       |              |              |              |              |
| 0.5       |              |              |              |              |
| 0.6       |              |              |              |              |
| 0.7       |              |              |              |              |

Optimal Threshold for Fairness: _______________________
Trade-off with Performance: _______________________

Group-Specific Thresholds (if considered):
| Group | Threshold | Rationale |
|-------|-----------|-----------|
|       |           |           |

Note: Group-specific thresholds may raise legal and ethical concerns.
Document carefully if used.
```

#### 8.4 Counterfactual Analysis

```
COUNTERFACTUAL ANALYSIS

Question: Would the prediction change if only the protected characteristic 
          changed?

Method:
1. Take sample of records
2. Change protected characteristic (e.g., male → female)
3. Run through model
4. Compare predictions

Results:
| Original Group | Changed To | Prediction Changed | % Changed |
|----------------|------------|-------------------|-----------|
|                |            |                   |           |
|                |            |                   |           |

Interpretation:
- High % changed suggests model is using protected characteristic or proxies
- Low % changed suggests model is relatively fair on this dimension

Findings: _______________________
```

---

## PHASE 4: REPORTING AND ACTION

### Step 9: Document Findings

#### 9.1 Audit Report Structure

```
BIAS AUDIT REPORT STRUCTURE

1. EXECUTIVE SUMMARY
   - Audit scope and objectives
   - Key findings (1-2 sentences each)
   - Overall assessment
   - Critical recommendations

2. INTRODUCTION
   - System description
   - Audit purpose
   - Regulatory context
   - Methodology overview

3. METHODOLOGY
   - Metrics selected and rationale
   - Groups analyzed
   - Data sources and period
   - Statistical methods
   - Limitations

4. FINDINGS
   - Selection rate analysis
   - Impact ratio results
   - Fairness metric results
   - Statistical test results
   - Intersectional analysis
   - Root cause analysis

5. INTERPRETATION
   - What findings mean
   - Comparison to thresholds
   - Context and caveats
   - Comparison to benchmarks

6. RECOMMENDATIONS
   - Required actions
   - Suggested improvements
   - Monitoring plan
   - Timeline

7. APPENDICES
   - Detailed data tables
   - Statistical outputs
   - Code/methodology details
   - Glossary
```

#### 9.2 Findings Summary Template

```
FINDINGS SUMMARY

OVERALL ASSESSMENT:
□ No significant bias detected
□ Minor disparities detected (within acceptable thresholds)
□ Moderate disparities detected (some remediation recommended)
□ Significant bias detected (remediation required)

KEY FINDINGS:

Finding 1: [Selection Rate Disparity]
- Groups compared: _______________________
- Disparity: _______________________
- Impact ratio: _______________________
- Significance: _______________________
- Severity: □ Critical □ High □ Medium □ Low

Finding 2: [Error Rate Disparity]
- Groups compared: _______________________
- Disparity: _______________________
- Significance: _______________________
- Severity: □ Critical □ High □ Medium □ Low

Finding 3: [Root Cause]
- Issue identified: _______________________
- Evidence: _______________________
- Impact: _______________________

METRICS SUMMARY TABLE:

| Metric | Threshold | Result | Pass/Fail |
|--------|-----------|--------|-----------|
| Impact Ratio (Sex) | ≥ 0.80 |        |           |
| Impact Ratio (Race) | ≥ 0.80 |       |           |
| TPR Difference | < 0.10 |            |           |
| FPR Difference | < 0.10 |            |           |
```

#### 9.3 Regulatory Compliance Summary

```
REGULATORY COMPLIANCE SUMMARY

NYC LOCAL LAW 144 (if applicable):

Required Elements:
□ Impact ratio calculated for sex categories
□ Impact ratio calculated for race/ethnicity categories
□ Impact ratio calculated for intersectional categories
□ Audit conducted within past year
□ Audit conducted by independent auditor
□ Results available for public posting

Impact Ratio Results:
| Category | Impact Ratio | Compliant? |
|----------|--------------|------------|
| Male |              |            |
| Female |            |            |
| Hispanic/Latino |  |            |
| White |            |            |
| Black/African American | |       |
| Asian |            |            |
| Native Hawaiian/Pacific Islander | | |
| American Indian/Alaska Native | | |
| Two or More Races | |            |

Auditor Certification:
Auditor Name: _______________________
Auditor Organization: _______________________
Date of Audit: _______________________
Certification Statement: _______________________
```

---

### Step 10: Develop Recommendations

#### 10.1 Remediation Options

```
REMEDIATION OPTIONS

OPTION 1: Data Interventions
□ Collect more representative training data
□ Rebalance training data
□ Remove or adjust biased labels
□ Add fairness constraints to data

OPTION 2: Model Interventions
□ Apply pre-processing techniques (reweighting, sampling)
□ Apply in-processing techniques (fairness constraints)
□ Apply post-processing techniques (threshold adjustment)
□ Retrain model with fairness objectives
□ Use different model architecture

OPTION 3: Process Interventions
□ Add human review for edge cases
□ Implement diverse decision committees
□ Create appeal process
□ Modify decision thresholds
□ Remove or modify problematic features

OPTION 4: Governance Interventions
□ Enhance monitoring program
□ Increase audit frequency
□ Add fairness checkpoints in development
□ Train staff on bias awareness
□ Establish fairness review board
```

#### 10.2 Recommendation Development

```
RECOMMENDATIONS

RECOMMENDATION 1: [Title]
Priority: □ Critical □ High □ Medium □ Low
Finding Addressed: _______________________
Action: _______________________
Expected Impact: _______________________
Owner: _______________________
Timeline: _______________________
Success Metric: _______________________

RECOMMENDATION 2: [Title]
Priority: □ Critical □ High □ Medium □ Low
Finding Addressed: _______________________
Action: _______________________
Expected Impact: _______________________
Owner: _______________________
Timeline: _______________________
Success Metric: _______________________

RECOMMENDATION 3: [Title]
Priority: □ Critical □ High □ Medium □ Low
Finding Addressed: _______________________
Action: _______________________
Expected Impact: _______________________
Owner: _______________________
Timeline: _______________________
Success Metric: _______________________
```

#### 10.3 Monitoring Plan

```
MONITORING PLAN

Ongoing Monitoring:
| Metric | Frequency | Threshold | Alert Process |
|--------|-----------|-----------|---------------|
|        |           |           |               |
|        |           |           |               |

Monitoring Responsibilities:
| Task | Owner | Frequency |
|------|-------|-----------|
| Calculate metrics |  |  |
| Review results |  |  |
| Investigate alerts |  |  |
| Report to leadership |  |  |

Reassessment Triggers:
□ Significant model changes
□ Significant population changes
□ Threshold breach
□ Annual review due
□ Regulatory change
□ Incident or complaint

Next Full Audit:
Date: _______________________
Scope: _______________________
```

---

## Tools Reference

### Fairlearn (Microsoft)

```python
# Fairlearn Quick Reference

# Installation
pip install fairlearn

# Key Functions
from fairlearn.metrics import (
    MetricFrame,
    selection_rate,
    demographic_parity_difference,
    demographic_parity_ratio,
    equalized_odds_difference,
    equalized_odds_ratio
)

# Mitigation Algorithms
from fairlearn.reductions import (
    ExponentiatedGradient,
    GridSearch,
    DemographicParity,
    EqualizedOdds
)

from fairlearn.postprocessing import ThresholdOptimizer

# Example: Calculate metrics by group
mf = MetricFrame(
    metrics={'selection_rate': selection_rate},
    y_true=y_test,
    y_pred=y_pred,
    sensitive_features=sensitive_features
)
print(mf.by_group)
print(mf.difference())
print(mf.ratio())
```

### AI Fairness 360 (IBM)

```python
# AIF360 Quick Reference

# Installation
pip install aif360

# Key Classes
from aif360.datasets import BinaryLabelDataset
from aif360.metrics import BinaryLabelDatasetMetric, ClassificationMetric
from aif360.algorithms.preprocessing import Reweighing, DisparateImpactRemover
from aif360.algorithms.inprocessing import PrejudiceRemover
from aif360.algorithms.postprocessing import CalibratedEqOddsPostprocessing

# Example: Calculate disparate impact
metric = BinaryLabelDatasetMetric(
    dataset,
    unprivileged_groups=[{'race': 0}],
    privileged_groups=[{'race': 1}]
)
print("Disparate Impact:", metric.disparate_impact())
print("Statistical Parity Difference:", metric.statistical_parity_difference())
```

### Aequitas

```python
# Aequitas Quick Reference

# Installation
pip install aequitas

# Key Classes
from aequitas.group import Group
from aequitas.bias import Bias
from aequitas.fairness import Fairness

# Example workflow
g = Group()
xtab, _ = g.get_crosstabs(df)

b = Bias()
bdf = b.get_disparity_predefined_groups(xtab, original_df=df, 
    ref_groups_dict={'race': 'White', 'sex': 'Male'})

f = Fairness()
fdf = f.get_group_value_fairness(bdf)
```

---

## Common Challenges and Solutions

| Challenge | Solution |
|-----------|----------|
| **No demographic data** | Use proxy methods (BISG), request data, document limitation |
| **Small sample sizes** | Combine categories, report with caveats, collect more data |
| **Conflicting metrics** | Prioritize based on context, document trade-offs |
| **Historical bias in labels** | Use alternative labels, adjust for known bias, document |
| **Proxy variables** | Analyze feature correlations, consider removing proxies |
| **Intersectional complexity** | Focus on highest-risk intersections, increase sample sizes |
| **Threshold selection** | Analyze sensitivity, document rationale, consider group-specific |
| **Stakeholder pushback** | Present business case, regulatory requirements, risk analysis |
| **Model complexity** | Use model-agnostic methods, SHAP values, counterfactual analysis |
| **Changing populations** | Continuous monitoring, regular reaudits, adaptive thresholds |

---

## Summary Checklist

```
BIAS AUDIT COMPLETION CHECKLIST

PLANNING
□ Scope defined
□ Metrics selected
□ Groups identified
□ Team assembled

DATA
□ Data collected
□ Data quality validated
□ Sample sizes assessed
□ Demographics prepared

ANALYSIS
□ Selection rates calculated
□ Impact ratios calculated
□ Fairness metrics calculated
□ Statistical tests performed
□ Root causes analyzed
□ Intersections examined

REPORTING
□ Findings documented
□ Regulatory requirements met
□ Recommendations developed
□ Monitoring plan established

REVIEW
□ Report reviewed by legal
□ Report reviewed by stakeholders
□ Remediation plan approved
□ Publication/disclosure completed (if required)
```

---

**Word Count:** Approximately 6,400 words
**Estimated Reading Time:** 30-35 minutes
**Templates Included:** 25+
**Code Examples:** Python (Fairlearn, AIF360, Aequitas)

---

*End of Guide*
