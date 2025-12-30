---
title: Article 100: Model Maintenance – Updates, Retraining, and Retirement
slug: article-100-model-maintenance-updates-retraining-and-retirem
path: responsibility
tldr: Explore key concepts and practical applications in AI governance.
contentSections:
  - Why Models Need Maintenance
  - Types of Model Maintenance
  - The Retraining Process
  - Maintenance Planning
  - Knowing When to Retire a Model
  - The Model Retirement Process
  - Maintenance Governance
  - Maintenance Anti-Patterns
  - 🎉 Congratulations!
relatedConcepts: []
crossPathRefs:
tags:
  - article
  - model
  - ai governance
  - model maintenance
  - updates
category: AI Development Lifecycle
image: article-100-model-maintenance-updates-retraining-and-retirem.jpg
imageAlt: Article 100: Model Maintenance – Updates, Retraining, and Retirement
author: Sunil Iyer
publishDate: 2025-12-23
readingTime: 12
seoTitle: Article 100: Model Maintenance – Updates, Retraining, and Re
seoDescription: Explore key concepts and practical applications in AI governance.
---



## Why Models Need Maintenance


### The Decay of AI Models

**Models decay because:**

<!-- component:flowchart:flowchart-the-decay-of-ai-models -->
1. **Data drift:** Input data distributions change from training data
2. **Concept drift:** Relationships between inputs and outputs change
3. **World changes:** External factors affect model relevance
4. **Feature staleness:** Features become less predictive
5. **Technical debt:** Infrastructure and dependencies age

<!-- component:template:template-performance-over-time -->

### Performance Over Time

```
Model Performance
     │
100% │ ●───●───●
     │          ╲
 90% │           ●───●
     │                ╲
 80% │                 ●───●
     │                      ╲
 70% │                       ●───●
     │                            ╲  ← Intervention needed
 60% │                             ●
     │
     └──────────────────────────────────
       Deploy   6mo   1yr   18mo   2yr
                    Time
```

Without maintenance, model performance trends downward.


### The Cost of No Maintenance

| Consequence | Impact |
<!-- component:table:table-the-cost-of-no-maintenance -->
|-------------|--------|
| **Declining accuracy** | Wrong predictions, poor decisions |
| **Increasing bias** | Fairness degradation over time |
| **Technical failures** | Dependencies break, security vulnerabilities |
| **Compliance risk** | Model drifts out of documented behavior |
| **Business impact** | Revenue loss, customer harm |

---


## Types of Model Maintenance


### 1. Scheduled Retraining

**What it is:** Regular retraining on a fixed schedule (weekly, monthly, quarterly).

**When to use:**
- Data patterns change predictably
- Continuous stream of new labeled data
- Model performance degrades gradually

**Example schedule:**
- Daily: Fraud detection (fast-changing patterns)
- Weekly: Recommendation systems (preference changes)
- Monthly: Churn prediction (behavioral patterns)
- Quarterly: Credit scoring (slower economic changes)
- Annually: Low-volatility applications


### 2. Triggered Retraining

**What it is:** Retraining triggered by specific conditions, not a schedule.

**Triggers:**
- Performance drops below threshold
- Data drift exceeds threshold
- Business metric changes significantly
- Major external event (pandemic, market crash)
- New data source available

<!-- component:template:template-2-triggered-retraining -->
**Example:**
```
RETRAINING TRIGGER POLICY

Automatic triggers (alert + evaluate):
├── Accuracy drops > 5% from baseline
├── PSI > 0.25 on any key feature
├── AUC-ROC drops > 0.03
└── Fairness metric exceeds threshold

Manual triggers (human decision):
├── Major product change
├── Market disruption
├── New data source available
└── Regulatory requirement change
```


### 3. Model Updates

**What it is:** Modifications to the existing model without full retraining.

**Types of updates:**
- **Feature updates:** Add, remove, or modify features
- **Threshold updates:** Adjust decision thresholds
- **Parameter tuning:** Adjust hyperparameters
- **Calibration:** Recalibrate probability outputs
- **Bug fixes:** Fix implementation issues

**When updates vs. retraining:**
| Situation | Approach |
<!-- component:table:table-3-model-updates -->
|-----------|----------|
| Small performance decline | Update thresholds |
| Feature drift in one feature | Update/replace that feature |
| Systematic drift | Full retraining |
| New feature available | Feature update + retrain |
| Major concept change | Full redesign |


### 4. Model Replacement

**What it is:** Replacing an existing model with a new one (different architecture, approach, or scope).

**When to replace:**
- Current architecture can't improve further
- New approaches significantly better
- Requirements have fundamentally changed
- Technical debt makes maintenance impractical

---


## The Retraining Process


### Step 1: Assess Need

**Questions to answer:**
- What triggered this retraining need?
- How urgent is retraining?
- What are the expected improvements?
- What resources are required?

**Retraining assessment:**
```
RETRAINING ASSESSMENT

Model: Customer Churn Predictor v3.2
Assessment Date: 2024-06-01

TRIGGER
Performance monitoring shows 4.2% accuracy decline over 3 months.
Data drift detected in 3 features (PSI > 0.2).

CURRENT STATE
├── Current accuracy: 83.1%
├── Baseline accuracy: 87.3%
├── Last retrained: 2024-01-15
└── Time in production: 4.5 months

RECOMMENDATION
Schedule retraining for next sprint.
Include 6 months of recent data.
Evaluate new engagement features.

PRIORITY: Medium (not urgent, but declining)
```


### Step 2: Prepare Data

**Data for retraining:**
- More recent data than original training
- Same quality standards
- Validated labels
- Representative distribution

**Data decisions:**
- How much historical data to include?
- Should old data be down-weighted?
- Are there new features to add?
- Has the label definition changed?


### Step 3: Retrain Model

**Retraining approaches:**

**Warm start:** Start from current model weights, fine-tune with new data.
- Faster training
- May retain old patterns (good or bad)
- Best for incremental updates

**Cold start:** Train from scratch on new data.
- Slower training
- Clean slate, learns only from new data
- Best when patterns have fundamentally changed

**Hybrid:** Combine old and new data with appropriate weighting.
- Balance stability and adaptation
- Requires careful data mixing
- Common for production systems


### Step 4: Validate Retrained Model

**Before deployment, validate:**

<!-- component:checklist:checklist-step-4-validate-retrained-model -->
- [ ] Performance meets or exceeds baseline
- [ ] Performance on recent data is good
- [ ] Slice-based analysis shows no new problems
- [ ] Fairness metrics maintained or improved
- [ ] Behavior on known cases is reasonable
- [ ] Integration tests pass

**Compare to current model:**
```
MODEL COMPARISON

Metric          | Current v3.2 | Retrained v3.3 | Change
----------------|--------------|----------------|--------
Accuracy        | 83.1%        | 86.8%          | +3.7%
Precision       | 78.2%        | 81.5%          | +3.3%
Recall          | 71.5%        | 76.2%          | +4.7%
AUC-ROC         | 0.86         | 0.89           | +0.03
Fairness (EO)   | 0.92         | 0.94           | +0.02

Recommendation: APPROVE v3.3 for deployment
```


### Step 5: Deploy Retrained Model

**Use safe deployment strategies:**
- Canary release
- A/B testing if comparing approaches
- Shadow mode if high-risk

**Don't:**
- Big-bang replace without validation
- Deploy without rollback plan
- Skip monitoring during transition


### Step 6: Document and Archive

**Document:**
- What triggered retraining
- What data was used
- What changes were made
- Performance comparisons
- Approval and deployment details

**Archive:**
- Previous model versions (for rollback)
- Training data versions
- Configuration and parameters
- Evaluation results

---


## Maintenance Planning

<!-- component:template:template-maintenance-schedule-template -->

### Maintenance Schedule Template

```
MODEL MAINTENANCE PLAN

Model: Customer Churn Predictor
Owner: Data Science Team
Created: 2024-01-15
Review Schedule: Quarterly

ROUTINE MAINTENANCE
├── Daily: Monitoring dashboard review
├── Weekly: Performance metrics review
├── Monthly: Drift analysis report
├── Quarterly: Comprehensive model review
└── Annually: Full model assessment and planning

RETRAINING POLICY
├── Scheduled: Every 6 months
├── Triggered: If accuracy < 80% or PSI > 0.25
└── Emergency: Major external events

REVIEW CHECKPOINTS
├── Q1: Technical review + drift analysis
├── Q2: Retraining cycle + fairness audit
├── Q3: Technical review + roadmap planning
└── Q4: Retraining cycle + annual assessment

RESOURCES
├── Retraining effort: ~2 weeks
├── Infrastructure: [Specified]
└── Team: 1 DS lead + 1 engineer

STAKEHOLDER COMMUNICATION
├── Monthly: Performance summary to business
├── Quarterly: Review results to leadership
└── Ad-hoc: Issues and changes as needed
```


### Maintenance Metrics

Track maintenance-related metrics:

| Metric | What It Tells You |
<!-- component:table:table-maintenance-metrics -->
|--------|------------------|
| **Time since last retrain** | Is model getting stale? |
| **Retraining frequency** | How often is model updated? |
| **Performance trend** | Is model improving or degrading? |
| **Drift trend** | Is drift increasing or stable? |
| **Maintenance cost** | Resources spent on maintenance |
| **Incident rate** | Issues related to model age |

---


## Knowing When to Retire a Model


### Signs a Model Should Be Retired

**Technical signs:**
- Performance can't be maintained despite retraining
- Architecture is obsolete
- Dependencies can't be updated
- Technical debt exceeds value

**Business signs:**
- Use case no longer relevant
- Better alternatives available
- Cost exceeds value
- Requirements fundamentally changed

**Compliance signs:**
- Can't meet new regulatory requirements
- Documentation can't be reconstructed
- Audit trail is incomplete
- Approved scope no longer valid


### Retirement Decision Framework

```
RETIREMENT DECISION

Should we continue maintaining this model?

1. Is the model still meeting requirements?
   ├── YES → Continue operation
   └── NO → Go to question 2

2. Can retraining fix the issues?
   ├── YES → Retrain
   └── NO → Go to question 3

3. Can model updates fix the issues?
   ├── YES → Update and continue
   └── NO → Go to question 4

4. Is the use case still valid?
   ├── NO → Retire model
   └── YES → Go to question 5

5. Is there a better alternative?
   ├── YES → Plan replacement
   └── NO → Build new model or find alternative

Decision: ________________
```

---


## The Model Retirement Process


### Step 1: Plan Retirement

**Define:**
- Retirement timeline
- Replacement (if any)
- Transition plan
- Communication plan

**Consider:**
- Downstream dependencies
- Data retention requirements
- Historical record needs
- Legal/compliance implications


### Step 2: Communicate

**Notify stakeholders:**
- Users of the model
- Downstream system owners
- Business stakeholders
- Compliance/audit

<!-- component:template:template-step-2-communicate -->
**Communication template:**
```
MODEL RETIREMENT NOTICE

Model: Churn Predictor v2.x
Status: Scheduled for retirement
Retirement Date: 2024-09-30

REASON FOR RETIREMENT
The v2.x model architecture can no longer meet performance 
requirements. It will be replaced by Churn Predictor v3.x, 
which has been validated and approved.

TIMELINE
- 2024-08-01: v3.x deployed alongside v2.x
- 2024-08-15: Traffic migration begins
- 2024-09-15: v2.x traffic reduced to 0%
- 2024-09-30: v2.x decommissioned

ACTION REQUIRED
[Specify any action required by recipients]

CONTACT
Questions: data-science@company.com
```


### Step 3: Transition

If replacing the model:
<!-- component:flowchart:flowchart-step-3-transition -->
1. Deploy replacement in parallel
2. Migrate traffic gradually
3. Validate replacement performance
4. Complete migration
5. Keep old model available for rollback (temporarily)

If not replacing:
1. Identify alternative processes
2. Train users on alternatives
3. Update integrations
4. Disable model access


### Step 4: Decommission

**Technical decommission:**
- Remove from production serving
- Archive model artifacts
- Archive documentation
- Remove or redirect integrations
- Clean up infrastructure

**Data handling:**
- Archive training data (per retention policy)
- Archive predictions (per retention policy)
- Ensure audit trail preserved
- Comply with data retention requirements


### Step 5: Document

**Retirement record:**
```
MODEL RETIREMENT RECORD

Model: Churn Predictor v2.3.1
Retirement Date: 2024-09-30

HISTORY
├── First deployed: 2022-03-15
├── Total time in production: 30 months
├── Number of retraining cycles: 4
└── Total predictions served: ~50 million

REASON FOR RETIREMENT
Architecture reached performance ceiling. Replaced by v3.x.

REPLACEMENT
Churn Predictor v3.1 (deployed 2024-08-01)

ARCHIVED MATERIALS
├── Model artifacts: s3://models/archive/churn-v2/
├── Documentation: confluence.../churn-v2-archive
├── Training data: data-warehouse/archive/churn-v2/
└── Predictions: data-warehouse/predictions/churn-v2/

RETENTION
Materials retained per policy until: 2031-09-30

RETIREMENT APPROVED BY
├── Model Owner: J. Smith
├── Business Owner: K. Davis
└── Compliance: S. Brown
```

---


## Maintenance Governance


### Roles and Responsibilities

| Role | Maintenance Responsibility |
<!-- component:table:table-roles-and-responsibilities -->
|------|---------------------------|
| **Model Owner** | Overall maintenance decisions |
| **Data Science Team** | Retraining, updates, analysis |
| **ML Engineering** | Infrastructure, deployment |
| **Business Owner** | Use case relevance, priorities |
| **Compliance** | Regulatory requirements |
| **Audit** | Verification of processes |


### Maintenance Documentation

**Maintain records of:**
- All retraining events
- All model updates
- Performance over time
- Incidents and responses
- Retirement decisions

**Why documentation matters:**
- Regulatory compliance
- Audit requirements
- Institutional knowledge
- Debugging and analysis


### Compliance Considerations

**EU AI Act requirements:**
- High-risk systems must have update procedures
- Changes require re-assessment
- Documentation must be maintained

**Sector regulations:**
- Financial services: Model risk management
- Healthcare: FDA requirements for updates
- Employment: Audit trail requirements

---


## Maintenance Anti-Patterns


### Anti-Pattern 1: "If It Ain't Broke"

**What it is:** Never maintaining models because they're "still running."

**Why it's bad:** Performance degrades silently; by the time it's "broke," significant harm may have occurred.

**Fix:** Scheduled maintenance and monitoring, regardless of apparent performance.


### Anti-Pattern 2: "Continuous Retraining"

**What it is:** Retraining constantly (daily or more) without evaluation.

**Why it's bad:** Can introduce instability, make debugging hard, and mask problems.

**Fix:** Retrain based on evidence of need, with proper validation.


### Anti-Pattern 3: "The Immortal Model"

**What it is:** Never retiring models, accumulating technical debt.

**Why it's bad:** Old models become unmaintainable, risky, and expensive.

**Fix:** Regular retirement reviews; sunset models that can't be maintained.


### Anti-Pattern 4: "Maintenance by Crisis"

**What it is:** Only maintaining models after incidents.

**Why it's bad:** Reactive maintenance is more expensive and harmful than proactive.

**Fix:** Scheduled maintenance prevents most incidents.

---


## Conclusion

Model maintenance is where AI governance lives or dies. Most AI systems spend far more time in production than in development—and that's where problems accumulate.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Models degrade:** Data drift, concept drift, and world changes erode performance over time.

2. **Plan maintenance from the start:** Maintenance schedules, triggers, and resources should be defined at deployment.

3. **Retrain thoughtfully:** Not too often, not too rarely—based on evidence and appropriate validation.

4. **Document everything:** Maintenance records are essential for compliance and institutional knowledge.

5. **Know when to retire:** Models have lifecycles; knowing when to stop is as important as knowing when to start.

6. **Governance extends through lifecycle:** Compliance doesn't end at deployment—it continues through maintenance and retirement.

The best models are well-maintained models. The best organizations treat model maintenance not as an afterthought, but as a core part of AI operations.

---


## Sources and Further Reading

1. **Google** - "ML System Design: Continuous Training" - MLOps documentation. Available at: cloud.google.com

2. **Chip Huyen** - "Designing Machine Learning Systems" - Maintenance chapters. O'Reilly.

3. **MLflow** - Model lifecycle management. Available at: mlflow.org

4. **Weights & Biases** - Model management guides. Available at: wandb.ai

5. **Neptune.ai** - Model versioning and tracking. Available at: neptune.ai

6. **NIST AI RMF** - Lifecycle management guidance. Available at: nist.gov

7. **EU AI Act** - Update and modification requirements. Available at: eur-lex.europa.eu

8. **OCC/Federal Reserve** - Model risk management guidance. Available at: occ.gov

9. **Made With ML** - MLOps curriculum. Available at: madewithml.com

10. **Evidently AI** - Model monitoring and maintenance. Available at: evidentlyai.com

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*

---


## 🎉 Congratulations!

**You've completed Article 100 of the AI Governance Implementation Program!**

This milestone represents comprehensive coverage of AI governance from foundations through implementation, covering:
- AI fundamentals and risks
- Legal frameworks and emerging regulations
- Development lifecycle and best practices
- Testing, deployment, and production operations
- Governance structures and processes

The knowledge in these articles provides the foundation to become an AI governance professional, ready to help organizations deploy AI responsibly, safely, and in compliance with evolving regulations.

*Keep learning, stay current, and make AI better.*
