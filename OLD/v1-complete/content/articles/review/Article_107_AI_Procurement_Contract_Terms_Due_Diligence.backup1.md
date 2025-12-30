# Article 107: AI Procurement – Contract Terms and Due Diligence

## TL;DR

When you buy AI, the contract matters more than with traditional software. Standard procurement terms don't address AI-specific risks: What happens when the model is biased? Who's liable when AI makes a wrong decision? Can you audit the system? What if the model changes without warning? This article covers the essential contract terms for AI procurement, the due diligence you should conduct before signing, and how to protect your organization when buying AI from vendors.

---

## Introduction

The contract said: "Vendor provides machine learning services."

That was the entire description of the AI component in a multi-million dollar deal. No performance guarantees. No bias testing requirements. No audit rights. No change notification. No liability for AI failures.

When the AI started producing problematic outputs, the organization had no contractual basis to demand fixes, get information, or hold the vendor accountable. The contract never contemplated that AI might behave differently than traditional software.

AI procurement requires AI-specific contract terms. Traditional software contracts assume:
- Functionality is defined and static
- Bugs are binary (works or doesn't)
- Testing verifies correctness
- Updates are improvements

AI breaks these assumptions:
- Behavior emerges from data, not just code
- "Wrong" is probabilistic, not binary
- Testing can't cover all scenarios
- Updates may change behavior unexpectedly

This article covers how to procure AI with appropriate protections.

---

## Why AI Contracts Are Different

### Traditional Software vs. AI

| Aspect | Traditional Software | AI Systems |
|--------|---------------------|------------|
| **Functionality** | Specified in requirements | Learned from data |
| **Behavior** | Deterministic | Probabilistic |
| **Testing** | Can verify all functions | Can't test all scenarios |
| **Updates** | Add features, fix bugs | May change predictions |
| **Warranty** | Meets specifications | Performance metrics |
| **Defects** | Clear definition | Subjective and contextual |

### AI Contract Challenges

**Defining "works correctly":**
Traditional: "Shall process transactions per specification"
AI: What accuracy is acceptable? For which populations?

**Defining defects:**
Traditional: "Fails to perform documented function"
AI: Is 15% error rate a defect? Is 3% bias a defect?

**Updates and changes:**
Traditional: Patches fix bugs
AI: Retraining may change behavior significantly

**Liability for decisions:**
Traditional: System does what code says
AI: System makes decisions—who's responsible?

---

## Essential Contract Terms

### 1. System Description

Don't accept vague descriptions. Require specificity.

**Weak:** "Vendor provides AI-powered analytics."

**Strong:**
```
SYSTEM DESCRIPTION

The Vendor shall provide a machine learning system that:
- Purpose: Predicts customer churn risk
- Method: Supervised learning classification model
- Inputs: Customer behavioral and demographic data
- Outputs: Churn probability score (0-100) and risk tier
- Scope: B2B customers in North America
- Exclusions: Does not apply to B2C or international customers

The system shall integrate via REST API with:
- Authentication: OAuth 2.0
- Data format: JSON
- Rate limits: 1,000 requests/minute
```

### 2. Performance Requirements

Define measurable performance standards.

```
PERFORMANCE REQUIREMENTS

2.1 Accuracy Metrics
The system shall maintain the following minimum performance:
- Overall accuracy: ≥ 85%
- Precision (high-risk tier): ≥ 80%
- Recall (high-risk tier): ≥ 75%
- AUC-ROC: ≥ 0.88

Measured on: Customer's production data
Measurement period: Rolling 30-day average
Measurement method: As defined in Exhibit A

2.2 Operational Performance
- Availability: 99.9% uptime, excluding scheduled maintenance
- Response time: ≤ 200ms for 95% of requests
- Throughput: Capable of 10,000 requests per hour

2.3 Performance Validation
Vendor shall provide monthly performance reports.
Customer may conduct independent performance validation.
```

### 3. Fairness and Bias Requirements

Explicitly address bias and discrimination.

```
FAIRNESS REQUIREMENTS

3.1 Non-Discrimination
The system shall not discriminate on the basis of [protected 
characteristics as defined by applicable law including race, 
gender, age, national origin, religion, or disability].

3.2 Fairness Testing
Vendor shall test the system for bias prior to deployment and 
following any material changes, using the following metrics:
- Demographic parity ratio: ≥ 0.80 across protected groups
- Equal opportunity ratio: ≥ 0.80 across protected groups

3.3 Bias Audit Rights
Customer may conduct independent bias audits at Customer's 
expense, with reasonable notice. Vendor shall cooperate and 
provide necessary access and information.

3.4 Remediation
If bias is detected exceeding thresholds in 3.2, Vendor shall:
- Notify Customer within 5 business days
- Provide remediation plan within 15 business days
- Implement remediation within 60 days
- Bear remediation costs
```

### 4. Transparency and Explainability

Ensure you can understand and explain the AI.

```
TRANSPARENCY REQUIREMENTS

4.1 Documentation
Vendor shall provide:
- System architecture overview
- Model type and methodology (without disclosing trade secrets)
- Description of training data sources and characteristics
- Performance metrics and validation approach
- Known limitations and failure modes
- User guidance documentation

4.2 Explainability
Upon request, Vendor shall provide explanations for individual 
predictions including:
- Primary factors influencing the prediction
- Confidence level
- Any applicable caveats

Explanation format: As defined in Exhibit B
Response time: Within 24 hours for routine requests

4.3 Decision Support
For each prediction, the system shall provide:
- Prediction result
- Confidence score
- Top 5 contributing factors
```

### 5. Data Terms

Protect your data and understand vendor data use.

```
DATA TERMS

5.1 Customer Data Ownership
Customer retains all rights to Customer Data. Vendor acquires 
no rights except as necessary to provide the Services.

5.2 Data Use Restrictions
Vendor shall not:
- Use Customer Data to train models used for other customers
- Share Customer Data with third parties except subprocessors
- Use Customer Data for any purpose beyond providing Services
- Retain Customer Data beyond the retention period

5.3 Data Security
Vendor shall maintain security measures as specified in 
Exhibit C, including:
- Encryption at rest (AES-256 or equivalent)
- Encryption in transit (TLS 1.2 or higher)
- Access controls and audit logging
- SOC 2 Type II certification (or equivalent)

5.4 Data Retention and Deletion
Vendor shall:
- Retain Customer Data only during the term plus 30 days
- Delete Customer Data within 30 days of termination
- Provide certification of deletion upon request

5.5 Data Portability
Upon termination or request, Vendor shall export Customer 
Data in [specified format] within 30 days.
```

### 6. Change Management

Control how the AI changes over time.

```
CHANGE MANAGEMENT

6.1 Change Notification
Vendor shall notify Customer in writing at least:
- 30 days before material changes to the model
- 14 days before material changes to the API
- 7 days before scheduled maintenance

Material change means any change that:
- May affect prediction accuracy by more than 2%
- Changes the methodology or approach
- Alters input or output specifications
- Affects documented performance metrics

6.2 Change Testing
For material changes, Customer shall have the opportunity to 
test in a staging environment for 14 days before production 
deployment.

6.3 Version Control
Customer may specify which version of the model to use.
Vendor shall maintain previous versions for 12 months.
Customer may request rollback within 30 days of a change.

6.4 Emergency Changes
For critical security patches, Vendor may deploy with 
24 hours notice. Vendor shall provide post-deployment 
documentation within 5 business days.
```

### 7. Audit Rights

Ensure you can verify vendor claims.

```
AUDIT RIGHTS

7.1 Right to Audit
Customer may, upon 30 days written notice:
- Audit Vendor's AI development and testing practices
- Review documentation and records related to the system
- Conduct independent testing of the system
- Review security and data handling practices

Audits limited to once per year unless triggered by:
- Material performance issue
- Security incident
- Regulatory inquiry

7.2 Audit Cooperation
Vendor shall:
- Provide reasonable access to personnel and documentation
- Answer questions truthfully and completely
- Provide access to test environments
- Not interfere with legitimate audit activities

7.3 Audit Costs
Each party bears its own audit costs unless audit reveals 
material breach, in which case Vendor bears Customer's 
reasonable audit costs.

7.4 Third-Party Audits
Customer may use qualified third-party auditors subject to 
appropriate confidentiality agreements.
```

### 8. Liability and Indemnification

Allocate responsibility for AI failures.

```
LIABILITY TERMS

8.1 Vendor Indemnification
Vendor shall indemnify Customer against claims arising from:
- Vendor's violation of applicable law
- Infringement of intellectual property rights
- Breach of data protection obligations
- Grossly negligent or willful misconduct

8.2 AI-Specific Indemnification
Vendor shall indemnify Customer against claims arising from:
- Discrimination caused by the system
- Material inaccuracy of system documentation
- Failure to disclose known material defects

8.3 Limitation of Liability
Subject to 8.1 and 8.2:
- Direct damages limited to [fees paid in prior 12 months]
- Consequential damages excluded except for:
  * Data breach
  * Indemnification obligations
  * Willful misconduct

8.4 Allocation of Responsibility
Vendor is responsible for: System design, training, testing
Customer is responsible for: Use within scope, data quality
Shared responsibility for: Performance monitoring, issue resolution
```

### 9. Representations and Warranties

Get explicit commitments.

```
REPRESENTATIONS AND WARRANTIES

9.1 Vendor Represents and Warrants:

General:
- Has authority to enter this agreement
- Services will be performed professionally
- Will comply with applicable laws

AI-Specific:
- System has been tested for material defects
- System has been tested for bias (methodology in Exhibit D)
- Documentation accurately describes system capabilities
- Training data was lawfully obtained
- No known material limitations beyond those documented
- System performs materially as described

9.2 Warranty Remedies
If system fails to meet warranties:
- Vendor shall remedy at no additional cost
- If Vendor cannot remedy within 60 days, Customer may 
  terminate and receive refund of prepaid fees

9.3 Warranty Exclusions
Warranties do not apply to:
- Use outside documented scope
- Customer modifications
- Customer-provided data quality issues
- Integration issues caused by Customer
```

### 10. Termination and Transition

Plan for the end of the relationship.

```
TERMINATION TERMS

10.1 Termination for Convenience
Either party may terminate with 90 days written notice.

10.2 Termination for Cause
Either party may terminate if:
- Material breach not cured within 30 days
- Insolvency or bankruptcy
- Change of control to competitor

10.3 Termination for AI Failure
Customer may terminate immediately if:
- System materially fails to meet performance requirements 
  for 30 consecutive days
- Bias audit reveals unlawful discrimination
- Security breach affecting Customer Data

10.4 Transition Assistance
Upon termination, Vendor shall:
- Continue services for up to 90 days (at prevailing rates)
- Export Customer Data per Section 5.5
- Provide documentation necessary for transition
- Cooperate reasonably with successor vendor
```

---

## Due Diligence Checklist

### Before the Contract

```
PRE-CONTRACT DUE DILIGENCE

TECHNICAL ASSESSMENT
□ Received system documentation
□ Understand how the AI works
□ Reviewed performance metrics and evidence
□ Reviewed bias testing results
□ Tested system with our data (POC)
□ Evaluated integration requirements
□ Assessed explainability capabilities

VENDOR ASSESSMENT
□ Verified vendor financial stability
□ Checked references (3+ similar customers)
□ Reviewed vendor AI governance practices
□ Assessed security posture (SOC 2, penetration tests)
□ Evaluated vendor support capabilities
□ Reviewed vendor incident history
□ Assessed vendor's regulatory compliance

RISK ASSESSMENT
□ Identified key risks
□ Assessed vendor controls
□ Identified gaps requiring contract terms
□ Determined residual risk acceptability
□ Defined monitoring requirements
□ Established exit strategy

LEGAL REVIEW
□ Legal reviewed all contract terms
□ Privacy/data protection terms adequate
□ Liability allocation acceptable
□ Compliance requirements addressed
□ Intellectual property terms clear
```

### Vendor Questionnaire

Questions to include in RFP or due diligence:

```
VENDOR AI QUESTIONNAIRE

SYSTEM INFORMATION
1. Describe your AI/ML system architecture
2. What type of model do you use? (Decision tree, neural network, etc.)
3. What data was used to train the model?
4. When was the model last updated?
5. What is the expected model accuracy?

DEVELOPMENT PRACTICES
6. Describe your AI development methodology
7. How do you test models before deployment?
8. How do you test for bias and fairness?
9. What validation do you perform?
10. How do you handle model updates and retraining?

TRANSPARENCY
11. Can you explain individual predictions?
12. What documentation do you provide?
13. What factors most influence predictions?
14. What are the known limitations?
15. How do you communicate changes?

DATA PRACTICES
16. How is customer data used?
17. Is customer data used to train shared models?
18. How long is data retained?
19. What security measures protect data?
20. How is data deleted upon termination?

GOVERNANCE
21. Do you have an AI ethics policy?
22. How do you handle reported issues?
23. What is your incident response process?
24. Do you allow customer audits?
25. What certifications do you hold?
```

---

## Contract Negotiation Tips

### Know Your Leverage

**You have more leverage when:**
- You're a significant customer
- You have alternatives
- Vendor wants the relationship
- You're willing to walk away

**You have less leverage when:**
- Vendor has market dominance
- You need the specific solution
- You're in a hurry
- Switching costs are high

### Prioritize Your Terms

Not everything is equally negotiable. Prioritize:

**Must have:**
- Core performance requirements
- Basic data protections
- Minimum audit rights
- Reasonable liability allocation

**Should have:**
- Change notification
- Bias testing requirements
- Detailed documentation
- Transition assistance

**Nice to have:**
- Extended warranty
- Price protections
- Enhanced support
- Custom reporting

### Common Vendor Pushback

| Vendor Says | You Can Respond |
|-------------|-----------------|
| "That's not in our standard contract" | "We're asking because AI is different; here's why it matters" |
| "We can't disclose that (trade secrets)" | "We don't need the algorithm, just evidence it works properly" |
| "We've never had complaints" | "We still need protections; absence of complaints isn't assurance" |
| "Our model doesn't discriminate" | "Please provide bias testing results so we can verify" |
| "We can't guarantee accuracy" | "Then what performance can you commit to?" |

---

## Post-Contract Governance

### Contract Compliance Monitoring

After signing, monitor contract compliance:

```
CONTRACT COMPLIANCE TRACKING

Performance SLAs:
├── Accuracy: [Current] vs [Required] → Status
├── Availability: [Current] vs [Required] → Status
├── Response time: [Current] vs [Required] → Status
└── Issue resolution: [Current] vs [Required] → Status

Vendor Obligations:
├── Monthly reports: [Received/Overdue]
├── Change notifications: [Compliance status]
├── Security certifications: [Current/Expiring]
└── Bias testing: [Due date/Status]

Customer Rights:
├── Audit rights: [Last exercised/Next planned]
├── Documentation: [Current/Needs update]
└── Data exports: [Tested/Not tested]
```

### Renewal Considerations

Before renewal, assess:

1. **Performance:** Has the system met requirements?
2. **Issues:** Were issues resolved satisfactorily?
3. **Changes:** Have our needs changed?
4. **Market:** Are there better alternatives?
5. **Terms:** Do contract terms still work?
6. **Pricing:** Is pricing still competitive?

---

## Conclusion

AI procurement requires more than standard software contract terms. The unique characteristics of AI—probabilistic behavior, potential bias, continuous change—demand specific protections that traditional contracts don't provide.

Key takeaways:

1. **Be specific:** Vague descriptions lead to disputes. Define the AI precisely.

2. **Require performance standards:** Measurable metrics with consequences.

3. **Address bias explicitly:** Fairness testing, audit rights, remediation requirements.

4. **Protect your data:** Usage restrictions, security requirements, portability rights.

5. **Control changes:** Notification, testing periods, version control.

6. **Get audit rights:** Verify vendor claims; don't just trust.

7. **Allocate liability fairly:** Understand who's responsible for what.

8. **Plan for exit:** Transition assistance, data portability, continuity.

The contract is your protection when things go wrong—and with AI, things can go wrong in ways nobody anticipated.

---

## Sources and Further Reading

1. **IAPP** - AI contract considerations. Available at: iapp.org

2. **World Economic Forum** - AI procurement guidelines. Available at: weforum.org

3. **UK Government** - Guidelines for AI procurement. Available at: gov.uk

4. **EU AI Act** - Provider and deployer obligations. Available at: eur-lex.europa.eu

5. **NIST AI RMF** - Third-party considerations. Available at: nist.gov

6. **American Bar Association** - AI contract terms. Available at: americanbar.org

7. **Gartner** - AI vendor management. Available at: gartner.com

8. **Stanford HAI** - AI procurement research. Available at: hai.stanford.edu

9. **Partnership on AI** - Responsible AI licensing. Available at: partnershiponai.org

10. **IEEE** - AI standards and contracts. Available at: ieee.org

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
