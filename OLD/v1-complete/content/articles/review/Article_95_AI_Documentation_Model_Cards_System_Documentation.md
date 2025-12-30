# Article 95: AI Documentation – Model Cards and System Documentation

## TL;DR

AI documentation is how you explain what an AI system does, how it works, what data trained it, how well it performs, and what its limitations are. The key formats are model cards (standardized documentation for individual models) and system documentation (comprehensive records of the entire AI system). Good documentation enables transparency (users understand what they're interacting with), accountability (someone can be held responsible), reproducibility (you can recreate the system), auditability (regulators can assess compliance), and maintainability (future teams can update the system). This article covers what to document, how to document it, and why documentation is increasingly required by regulation—not just good practice.

---

## Introduction

A data scientist leaves the company. Six months later, a model they built starts behaving strangely. The team trying to fix it discovers:

- No documentation of what the model does
- No record of what data trained it
- No explanation of design decisions
- No list of known limitations
- No performance benchmarks to compare against

They're flying blind. Fixing the model means reverse-engineering everything from scratch—if that's even possible.

This scenario happens more often than anyone likes to admit. And it's entirely preventable with proper documentation.

Documentation in AI isn't just nice to have. It's essential for:
- Understanding what you built
- Explaining it to others
- Maintaining it over time
- Complying with regulations
- Demonstrating due diligence

This article covers what AI documentation should include, focusing on model cards (the standardized format for model documentation) and broader system documentation.

---

## Why Documentation Matters

### The Documentation Gap

Many AI systems are poorly documented because:
- **Speed pressure:** "Ship now, document later" (but later never comes)
- **Tacit knowledge:** "The team knows how it works" (until they leave)
- **Undervaluation:** "Documentation isn't real work" (until auditors ask)
- **Uncertainty:** "We don't know what to document" (this article helps)

### Consequences of Poor Documentation

| Problem | Impact |
|---------|--------|
| Team member leaves | Knowledge lost; system becomes unmaintainable |
| Model behaves unexpectedly | Can't diagnose without knowing expected behavior |
| Audit or regulatory inquiry | Can't demonstrate compliance |
| Need to retrain model | Don't know what data or settings were used |
| User harm occurs | Can't explain what happened or why |
| New team inherits system | Months spent understanding before improving |

### Benefits of Good Documentation

**Transparency:**
Users, stakeholders, and affected parties understand what the AI does.

**Accountability:**
Clear ownership and decision history enables responsibility.

**Reproducibility:**
Can recreate the model if needed.

**Auditability:**
Regulators and auditors can assess compliance.

**Maintainability:**
Future teams can update, fix, and improve the system.

**Trust:**
Documented systems inspire more confidence than black boxes.

---

## Model Cards: The Standard Format

### What Is a Model Card?

A model card is a standardized document that accompanies a machine learning model. Think of it like a nutrition label for AI—it tells you what's inside and how to use it safely.

**Origin:** Introduced by researchers at Google in 2018 (Mitchell et al., "Model Cards for Model Reporting").

**Purpose:** Provide transparent, standardized reporting about model performance and limitations.

### Model Card Structure

A complete model card includes:

**1. Model Details**
Basic information about the model itself.

```
MODEL DETAILS

Name: Customer Churn Predictor v3.2
Version: 3.2.1
Type: Binary Classification (XGBoost)
Owner: Customer Analytics Team
Contact: analytics@company.com
Date Created: 2024-01-15
Last Updated: 2024-03-01

Description:
Predicts probability that a customer will churn (cancel service)
within the next 90 days based on behavioral and demographic features.

License: Internal use only
```

**2. Intended Use**
What the model is designed for—and what it's NOT designed for.

```
INTENDED USE

Primary Use Cases:
- Identify high-risk customers for retention outreach
- Prioritize customer success team efforts
- Inform marketing campaign targeting

Primary Users:
- Customer Success Team
- Marketing Team
- Product Analytics

Out-of-Scope Uses:
- Individual pricing decisions
- Credit decisions
- Automated service termination without human review
- Use for customers outside North America (not validated)
```

**3. Training Data**
What data was used to train the model.

```
TRAINING DATA

Source: Company CRM and transaction database
Date Range: January 2022 - December 2023
Size: 450,000 customer records
Split: 70% train, 15% validation, 15% test

Features (47 total):
- Behavioral: login frequency, feature usage, support tickets
- Transactional: purchase history, payment patterns
- Demographic: account age, plan type, company size
- Derived: engagement scores, trend indicators

Target Variable:
- Churn = 1 if customer cancelled within 90 days of observation
- Churn = 0 otherwise
- Base rate: 12% churn

Data Quality Notes:
- Some records have incomplete usage data (handled via imputation)
- Data before 2022 excluded due to product changes
```

**4. Evaluation Data**
How the model was tested.

```
EVALUATION DATA

Test Set:
- 67,500 customers (15% of total)
- Temporally held out (after training period)
- Same feature distribution as training

Additional Validation:
- Cross-validated on 5 folds during development
- Tested on Q1 2024 data after deployment
```

**5. Metrics and Performance**
How well the model performs.

```
PERFORMANCE METRICS

Overall Performance (Test Set):
┌────────────────┬─────────────┐
│ Metric         │ Value       │
├────────────────┼─────────────┤
│ Accuracy       │ 0.87        │
│ Precision      │ 0.73        │
│ Recall         │ 0.68        │
│ F1 Score       │ 0.70        │
│ AUC-ROC        │ 0.89        │
│ AUC-PR         │ 0.71        │
└────────────────┴─────────────┘

Threshold: 0.5 (default); can be adjusted based on business needs

Calibration:
- Well-calibrated across probability range
- Brier score: 0.08
```

**6. Disaggregated Performance**
How the model performs for different groups.

```
DISAGGREGATED PERFORMANCE

By Customer Segment:
┌──────────────────┬──────────┬───────────┬────────┐
│ Segment          │ Accuracy │ Precision │ Recall │
├──────────────────┼──────────┼───────────┼────────┤
│ Enterprise       │ 0.89     │ 0.78      │ 0.72   │
│ Mid-Market       │ 0.87     │ 0.74      │ 0.69   │
│ Small Business   │ 0.84     │ 0.68      │ 0.63   │
│ Startup          │ 0.81     │ 0.61      │ 0.58   │
└──────────────────┴──────────┴───────────┴────────┘

By Account Age:
┌──────────────────┬──────────┬───────────┬────────┐
│ Account Age      │ Accuracy │ Precision │ Recall │
├──────────────────┼──────────┼───────────┼────────┤
│ < 6 months       │ 0.79     │ 0.58      │ 0.52   │
│ 6-12 months      │ 0.85     │ 0.70      │ 0.65   │
│ 1-2 years        │ 0.88     │ 0.76      │ 0.71   │
│ > 2 years        │ 0.91     │ 0.82      │ 0.77   │
└──────────────────┴──────────┴───────────┴────────┘

Note: Performance is notably weaker for new customers and startups.
```

**7. Ethical Considerations**
Potential concerns and mitigations.

```
ETHICAL CONSIDERATIONS

Sensitive Attributes:
- Model does not directly use protected characteristics
- Geographic features may correlate with demographics (monitored)

Bias Testing:
- Tested for disparate impact across industry segments
- No significant disparities detected (see Bias Audit report)

Potential Harms:
- False positives may result in unnecessary outreach (annoyance)
- False negatives may miss customers who need help
- Over-reliance on model could reduce personal relationships

Mitigations:
- Human review required before any adverse action
- Model predictions are one input, not sole decision factor
- Regular fairness monitoring in production
```

**8. Caveats and Limitations**
What the model can't do or shouldn't be used for.

```
CAVEATS AND LIMITATIONS

Known Limitations:
- Weaker performance for customers < 6 months old (insufficient history)
- Not validated for international customers
- May not perform well during unusual events (recession, pandemic)
- Does not account for announced product changes

Failure Modes:
- Customers with anomalous behavior may receive unreliable predictions
- Bulk actions (e.g., company-wide downgrades) not modeled well

Update Requirements:
- Should be retrained if churn base rate changes significantly
- Product changes may require feature updates
- Quarterly performance review recommended
```

**9. Recommendations**
How to use the model appropriately.

```
RECOMMENDATIONS

For Users:
- Use as input to human decision-making, not autonomous action
- Consider prediction confidence when prioritizing outreach
- Combine with qualitative customer knowledge

For Operators:
- Monitor for performance degradation monthly
- Track feature distributions for drift
- Review fairness metrics quarterly
- Retrain at least annually or after major product changes

For Reviewers:
- Validate against current customer population before approval
- Review disaggregated metrics for concerning patterns
- Ensure monitoring plan is in place
```

---

## System Documentation: The Bigger Picture

Model cards document individual models. System documentation covers the entire AI system—including how models fit into the broader context.

### System Documentation Components

**1. System Overview**
What the system does at a high level.

```
SYSTEM OVERVIEW

System Name: Customer Retention Intelligence Platform
Version: 2.1
Owner: Customer Analytics Team
Last Updated: 2024-03-01

Purpose:
Identify customers at risk of churning and recommend retention actions
to Customer Success team.

Components:
- Data Pipeline: Collects and processes customer data daily
- Churn Prediction Model: Predicts 90-day churn probability
- Action Recommendation Model: Suggests retention actions
- Integration Layer: Pushes predictions to CRM
- Dashboard: Displays insights to Customer Success team

Users:
- Customer Success Team (primary)
- Marketing Team (secondary)
- Product Team (analytics only)
```

**2. Architecture Documentation**
How components fit together.

```
SYSTEM ARCHITECTURE

Data Flow:
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  CRM Data   │───>│   Data      │───>│   Feature   │
│  Source     │    │   Pipeline  │    │   Store     │
└─────────────┘    └─────────────┘    └─────────────┘
                                            │
                                            ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  CRM        │<───│ Integration │<───│   Churn     │
│  Dashboard  │    │   Layer     │    │   Model     │
└─────────────┘    └─────────────┘    └─────────────┘

Infrastructure:
- Data Pipeline: Apache Airflow on AWS
- Model Serving: SageMaker endpoints
- Feature Store: Feast on PostgreSQL
- Monitoring: Datadog + custom dashboards

Dependencies:
- CRM API (Salesforce)
- Data Warehouse (Snowflake)
- Identity Service (internal)
```

**3. Data Documentation**
What data the system uses and how.

```
DATA DOCUMENTATION

Data Sources:
┌─────────────────┬─────────────────┬─────────────────┐
│ Source          │ Data Type       │ Refresh Rate    │
├─────────────────┼─────────────────┼─────────────────┤
│ Salesforce CRM  │ Customer info   │ Real-time sync  │
│ Product DB      │ Usage metrics   │ Daily batch     │
│ Billing System  │ Payment history │ Daily batch     │
│ Support System  │ Ticket history  │ Hourly          │
└─────────────────┴─────────────────┴─────────────────┘

Data Retention:
- Raw data: 7 years (compliance requirement)
- Processed features: 2 years
- Predictions: 1 year

Data Quality:
- Automated validation checks on each pipeline run
- Data quality dashboard monitored daily
- Alerts on schema changes or quality degradation

Privacy:
- No direct identifiers in training data
- Customer ID hashed for model training
- Access controlled via role-based permissions
```

**4. Decision Documentation**
Key decisions made during development and why.

```
DECISION LOG

Decision: Use XGBoost instead of neural network
Date: 2023-11-15
Rationale: Similar accuracy, better interpretability, faster training
Alternatives Considered: Random Forest, Neural Network, Logistic Regression
Decision Maker: Data Science Lead

Decision: 90-day prediction window
Date: 2023-10-20
Rationale: Balances prediction accuracy with actionable timeframe
Alternatives Considered: 30-day, 60-day, 180-day windows
Decision Maker: Product + Customer Success stakeholders

Decision: Exclude customers < 30 days old
Date: 2023-12-01
Rationale: Insufficient behavioral data for reliable prediction
Impact: ~5% of customer base excluded from predictions
Decision Maker: Data Science Lead
```

**5. Operational Documentation**
How to run and maintain the system.

```
OPERATIONAL RUNBOOK

Daily Operations:
- Data pipeline runs at 2 AM UTC
- Model inference runs at 4 AM UTC
- Predictions available in CRM by 6 AM UTC
- No manual intervention required for normal operation

Monitoring:
- Pipeline health: Airflow UI + PagerDuty alerts
- Model health: Custom dashboard at analytics.company.com/churn
- Key metrics: Prediction distribution, feature drift, latency

On-Call:
- Primary: Data Engineering team (pipeline issues)
- Secondary: Data Science team (model issues)
- Escalation: Analytics Manager

Common Issues:
| Issue | Symptom | Resolution |
|-------|---------|------------|
| Pipeline failure | No new predictions | Check Airflow logs, rerun |
| Data quality drop | Alert from validation | Investigate source, pause if severe |
| Model drift | Distribution shift alert | Review, consider retraining |
```

**6. Change History**
Record of updates and modifications.

```
CHANGE HISTORY

Version 2.1 (2024-03-01)
- Updated model to v3.2 with improved small business performance
- Added action recommendation component
- Fixed timezone handling in data pipeline

Version 2.0 (2023-09-15)
- Major rewrite of data pipeline for scalability
- Migrated from on-premise to AWS
- Added real-time CRM sync

Version 1.5 (2023-06-01)
- Added disaggregated metrics tracking
- Implemented fairness monitoring
- Updated documentation format
```

---

## Documentation Best Practices

### Write for Your Audience

Different readers need different information:

| Audience | What They Need |
|----------|----------------|
| Users | What it does, how to use it, limitations |
| Operators | How to run it, what to monitor, how to fix issues |
| Developers | How it works, how to modify it |
| Auditors | Evidence of compliance, testing, governance |
| Executives | Business purpose, risks, outcomes |

Consider creating different views for different audiences.

### Make Documentation Discoverable

Documentation that can't be found is useless.

**Best practices:**
- Single source of truth (one location for all docs)
- Consistent structure across systems
- Search functionality
- Links from code to documentation
- Documentation catalog or registry

### Keep Documentation Current

Outdated documentation may be worse than no documentation—it misleads.

**Strategies:**
- Documentation as part of definition of "done"
- Automated documentation generation where possible
- Regular documentation reviews (quarterly)
- Change triggers documentation updates
- Version documentation with code/model

### Make Documentation Actionable

Good documentation enables action:
- Clear enough that someone can use the system correctly
- Complete enough that someone can maintain the system
- Honest enough that someone knows the limitations

---

## Regulatory Requirements

### EU AI Act

High-risk AI systems must include:
- Technical documentation covering design, development, and performance
- Instructions for use explaining capabilities and limitations
- Record-keeping of testing and validation
- Documentation sufficient for conformity assessment

### NIST AI RMF

Recommends documentation of:
- AI system purpose and context
- Data and model information
- Performance and limitations
- Risks and mitigation measures

### Sector-Specific Requirements

**Financial services:** Model risk management requires comprehensive documentation
**Healthcare:** FDA requires documentation for AI/ML medical devices
**Employment:** EEOC guidance implies documentation of algorithm validation

---

## Documentation Checklist

### For Every Model:

- [ ] Model card completed (all sections)
- [ ] Training data documented
- [ ] Performance metrics calculated and recorded
- [ ] Disaggregated metrics by relevant groups
- [ ] Known limitations documented
- [ ] Intended use and out-of-scope use specified
- [ ] Ethical considerations reviewed
- [ ] Version control for documentation

### For Every System:

- [ ] System overview documented
- [ ] Architecture diagram current
- [ ] Data flows documented
- [ ] Key decisions logged with rationale
- [ ] Operational runbook available
- [ ] Change history maintained
- [ ] Access and ownership clear

### For Ongoing Maintenance:

- [ ] Documentation review scheduled (quarterly)
- [ ] Update triggers defined
- [ ] Documentation accuracy validated
- [ ] Gaps identified and addressed

---

## Conclusion

Documentation is how you capture the knowledge needed to understand, use, maintain, and govern AI systems. Without it, AI becomes a black box that nobody fully understands—a risk to users, operators, and the organization.

Key takeaways:

1. **Model cards are the standard:** Use the established format for consistent, comprehensive model documentation.

2. **System documentation goes beyond models:** Document architecture, data, decisions, and operations.

3. **Different audiences need different information:** Write for users, operators, developers, and auditors.

4. **Keep documentation current:** Outdated documentation misleads. Update with every change.

5. **Regulations increasingly require it:** EU AI Act, NIST AI RMF, and sector regulations all expect documentation.

6. **Documentation enables accountability:** You can't be responsible for what you can't explain.

The time spent on documentation pays dividends in maintainability, compliance, and trust. Skip it, and you're building on undocumented assumptions that will eventually fail.

---

## Sources and Further Reading

1. **Mitchell et al.** - "Model Cards for Model Reporting" - Original model card paper. Available at: arxiv.org/abs/1810.03993

2. **Gebru et al.** - "Datasheets for Datasets" - Companion to model cards for data. Available at: arxiv.org

3. **Google Model Cards** - Examples and toolkit. Available at: modelcards.withgoogle.com

4. **Hugging Face** - Model card examples. Available at: huggingface.co

5. **NIST AI RMF** - Documentation requirements. Available at: nist.gov

6. **EU AI Act** - Documentation requirements for high-risk AI. Available at: eur-lex.europa.eu

7. **FDA** - AI/ML medical device documentation guidance. Available at: fda.gov

8. **OCC/Federal Reserve** - Model Risk Management guidance. Available at: occ.gov

9. **Partnership on AI** - ABOUT ML project. Available at: partnershiponai.org

10. **Microsoft** - Responsible AI documentation. Available at: microsoft.com

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
