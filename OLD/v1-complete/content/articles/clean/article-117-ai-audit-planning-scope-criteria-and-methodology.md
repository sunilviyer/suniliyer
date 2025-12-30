
![Article 117: AI Audit Planning – Scope, Criteria, and Methodology]({{IMAGE_PLACEHOLDER_article-117-ai-audit-planning-scope-criteria-and-methodology}})

---
category: "AI Auditing & Accountability"
learning_objectives:

  - "Understand the key concepts and principles of ai governance frameworks"
  - "Implement ethical ai principles in real-world scenarios"
  - "Evaluate bias detection techniques for organizational compliance"
seo_keywords:

  - "article"
  - "audit"
  - "AI governance"
  - "artificial intelligence"
  - "AI ethics"
word_count: 2586
processed_date: "2025-12-18T20:00:53.509Z"
---


## Pillar 1: Defining the Audit Scope


### What Is Audit Scope?

Audit scope defines the boundaries of your examination. It answers the questions: What exactly are we auditing? How deep will we go? What's included and what's excluded?

A well-defined scope is like a fence around a construction site—it tells everyone what's inside the project and what's outside. Without clear scope, audits expand endlessly or skip important areas.


### Elements of Audit Scope

**The AI System Itself**

Start by clearly identifying which AI system you're auditing. This sounds obvious, but organizations often have multiple versions of AI systems, integrations with other tools, or unclear boundaries between systems.

Be specific:

- *Vague:* "Our hiring AI"
- *Better:* "RecruitBot v3.2, the resume screening module used by HR to filter applications for positions in the North American region, including its integration with our Applicant Tracking System"

**The Lifecycle Stage**

AI systems exist at different stages, and your scope should specify which stage you're auditing:

- **Pre-deployment:** The system is built but not yet live. You're checking if it's ready for production.
- **In production:** The system is actively making decisions. You're examining real-world performance.
- **Post-incident:** Something went wrong. You're investigating what happened and why.

**The Functional Areas**

Which aspects of the AI system will you examine? Common functional areas include:

| Area | What It Covers |
|------|----------------|
| Performance | Accuracy, precision, recall, error rates |
| Fairness | Bias across demographic groups, equitable outcomes |
| Transparency | Explainability, documentation, disclosure to users |
| Privacy | Data protection, consent, minimization |
| Security | Access controls, adversarial robustness, data integrity |
| Governance | Policies, oversight, accountability, training |
| Compliance | Legal requirements, industry standards |

You might audit all areas or focus on specific concerns. A bias audit, for example, focuses primarily on fairness while touching lightly on governance and compliance.

**The Depth of Examination**

How deep will you go? Options range from:

- **Document review:** Examining policies, procedures, and records without testing the system itself
- **Limited testing:** Running basic tests with sample data
- **Comprehensive testing:** Extensive evaluation across multiple scenarios and populations
- **Code-level review:** Examining the actual algorithms and training data

Deeper examinations cost more time and money but find more problems.

**Time Period**

For production systems, specify what time period you're examining:

- *Point-in-time:* "System performance as of March 15, 2024"
- *Period-based:* "Decisions made between January 1 and March 31, 2024"
- *Continuous:* "Ongoing monitoring starting April 1, 2024"


### Example: Scoping a Hiring AI Audit

Let's say a company wants an audit of its hiring AI. Here's how a well-defined scope statement might look:

> **Audit Scope Statement**
>
> **System:** TalentScreen Pro, version 4.1, the AI-powered resume screening application deployed in March 2023.
>
> **Coverage:** Resume-to-interview decision recommendations for all U.S.-based positions at salary grade 6 and above.
>
> **Lifecycle Stage:** Post-deployment production review.
>
> **Functional Areas:** This audit will examine (1) fairness across race, gender, and age groups; (2) performance accuracy relative to human recruiter decisions; (3) transparency of decision rationale to candidates; and (4) compliance with EEOC guidelines and NYC Local Law 144.
>
> **Depth:** Comprehensive testing using historical decision data from Q4 2023, document review of development and deployment records, and interviews with key stakeholders.
>
> **Exclusions:** This audit excludes the interview scheduling module, background check integrations, and the system's use in international locations.


### Common Scoping Mistakes

**Too broad:** "We'll audit all our AI systems for everything." This leads to shallow, superficial reviews that miss important details.

**Too narrow:** Focusing only on accuracy while ignoring fairness, or examining only technical aspects while skipping governance.

**Unclear boundaries:** Failing to specify exactly where the AI system ends and other systems begin.

**Ignoring stakeholders:** Not involving the people who know the system best in defining what should be examined.

---


## Pillar 2: Establishing Audit Criteria


### What Are Audit Criteria?

Audit criteria are the standards, benchmarks, and rules you measure the AI system against. They answer the question: How do we know if what we find is good or bad?

Think of buying a used car. You might check the mileage—but is 50,000 miles good or bad? It depends on your criteria. For a 10-year-old car, that's excellent. For a 2-year-old car, it's concerning.

AI audits need clear criteria so everyone understands what "pass" and "fail" mean.


### Types of Audit Criteria

**Legal and Regulatory Requirements**

These are non-negotiable standards set by law:

| Regulation | Key Requirements |
|------------|-----------------|
| EU AI Act | Risk classification, conformity assessment, human oversight for high-risk systems |
| NYC Local Law 144 | Annual bias audit, published results for hiring AI |
| GDPR Article 22 | Right to human review, meaningful information about automated decisions |
| ECOA (Equal Credit Opportunity Act) | Non-discrimination in credit decisions |
| Fair Housing Act | Non-discrimination in housing-related AI |

**Industry Standards and Frameworks**

These are widely accepted practices that, while not always legally required, represent good practice:

| Standard | Focus Area |
|----------|------------|
| NIST AI RMF | Comprehensive risk management across AI lifecycle |
| ISO/IEC 42001 | AI management system requirements |
| IEEE 7000-21 | Ethical design process |
| ISO/IEC 38507 | Governance of AI |

**Organizational Policies**

Your organization's own commitments and standards:

- AI ethics principles
- Data handling policies
- Risk tolerance thresholds
- Documentation requirements

**Industry Benchmarks**

Performance standards typical for your sector or use case:

- "Industry-standard hiring AI achieves 85% accuracy relative to human decisions"
- "Comparable fraud detection systems maintain false positive rates below 5%"

**Technical Thresholds**

Specific numerical standards for technical performance:

| Metric | Threshold | Meaning |
|--------|-----------|---------|
| Accuracy | ≥ 90% | System should be correct at least 90% of the time |
| Disparate Impact Ratio | ≥ 80% (4/5ths rule) | Selection rates for protected groups should be at least 80% of the highest group's rate |
| False Positive Rate Difference | ≤ 5% | Error rates shouldn't differ by more than 5% across groups |
| AUC-ROC | ≥ 0.85 | Model should have strong predictive discrimination |


### Developing Your Criteria Checklist

Here's a practical approach to establishing audit criteria:

**Step 1: Identify Applicable Laws**
Research which laws and regulations apply based on:

- Where the system operates (jurisdiction)
- What domain it operates in (healthcare, finance, employment)
- What decisions it makes (credit, housing, hiring)
- Who it affects (consumers, employees, patients)

**Step 2: Map Relevant Standards**
Identify which industry standards apply to your organization and use case. Most organizations find NIST AI RMF and ISO/IEC 42001 broadly applicable.

**Step 3: Review Organizational Commitments**
Gather your organization's AI ethics policies, risk appetite statements, and any public commitments about AI use.

**Step 4: Establish Technical Baselines**
Determine acceptable performance thresholds. These might come from:

- Vendor specifications
- Industry benchmarks
- Historical performance data
- Regulatory requirements

**Step 5: Document and Validate**
Write down your criteria clearly and have them approved by relevant stakeholders before beginning the audit.


### Example: Criteria for a Credit Scoring AI Audit

| Category | Criterion | Source | Threshold |
|----------|-----------|--------|-----------|
| Legal | Non-discrimination | ECOA, Fair Housing Act | No prohibited basis for denial |
| Legal | Adverse action notices | FCRA | Must provide reasons for denial |
| Regulatory | Model risk management | SR 11-7 (Bank Examiners) | Documented validation process |
| Standard | Risk management | NIST AI RMF | Governance, Mapping, Measuring, Managing functions addressed |
| Organizational | AI ethics | Company Policy A-42 | Ethics review completed |
| Technical | Approval rate parity | 4/5ths rule | Protected groups within 80% of reference group |
| Technical | Prediction accuracy | Industry benchmark | AUC-ROC ≥ 0.75 |
| Technical | Model stability | Internal policy | Performance drift < 5% per quarter |

---


## Pillar 3: Designing the Audit Methodology


### What Is Audit Methodology?

Audit methodology is your plan for how you'll conduct the audit. It answers: What steps will we follow? What tools will we use? How will we gather and analyze evidence?

A good methodology is like a recipe—it specifies the ingredients, the steps, and the expected outcome.


### Core Methodological Components

**1. Audit Team and Responsibilities**

Who will do what?

| Role | Responsibilities |
|------|-----------------|
| Audit Lead | Overall planning, stakeholder management, final report |
| Technical Auditor | System testing, data analysis, technical documentation review |
| Governance Auditor | Policy review, interview analysis, compliance assessment |
| Subject Matter Expert | Domain-specific knowledge (e.g., HR for hiring AI) |
| Data Analyst | Statistical testing, bias analysis, performance metrics |

**2. Information Gathering Techniques**

How will you collect evidence?

| Technique | What It Involves | When to Use |
|-----------|-----------------|-------------|
| Document Review | Examining policies, procedures, technical specs, meeting minutes | Always—foundational step |
| Stakeholder Interviews | Conversations with developers, operators, affected parties | Understanding context and intentions |
| System Testing | Running the AI with test inputs and analyzing outputs | Evaluating actual performance |
| Data Analysis | Statistical examination of historical decisions | Identifying patterns and disparities |
| Observation | Watching how the system is used in practice | Understanding real-world operation |
| Code Review | Examining source code and algorithms | Deep technical assessment |

**3. Testing Approach**

How will you test the AI system?

**Performance Testing**

- Run the system on known inputs with known correct answers
- Compare outputs to expected results
- Calculate accuracy, precision, recall, and other metrics

**Fairness Testing**

- Analyze outcomes across demographic groups
- Calculate disparate impact ratios
- Test for differential error rates
- Consider intersectional groups (e.g., older Black women, not just "older" or "Black")

**Robustness Testing**

- Test with edge cases and unusual inputs
- Check behavior under stress conditions
- Attempt adversarial inputs if appropriate

**Example: Testing a Loan Approval AI**

You might structure your testing like this:

*Sample Selection:* Random sample of 10,000 loan applications from 2023
*Demographic Groups:* Race, gender, age, geographic location
*Tests to Perform:*

- Approval rates by group
- Denial reason accuracy
- Model score distribution by group
- Appeal/override outcomes
- Comparison to human decisions (where available)

**4. Analysis Methods**

How will you make sense of what you find?

| Analysis Type | Purpose | Example Output |
|---------------|---------|----------------|
| Descriptive Statistics | Summarize basic patterns | "Approval rate was 62% overall" |
| Comparative Analysis | Compare across groups | "Male applicants approved at 68% vs. 56% for females" |
| Statistical Significance | Determine if differences are meaningful | "Difference is statistically significant (p < 0.05)" |
| Root Cause Analysis | Understand why problems exist | "Disparity stems from proxy variable 'zip code'" |
| Gap Analysis | Compare actual vs. required | "System meets 8 of 12 EU AI Act requirements" |

**5. Timeline and Milestones**

When will each phase happen?

| Phase | Duration | Milestone |
|-------|----------|-----------|
| Planning | Week 1-2 | Scope approved, criteria documented |
| Document Review | Week 2-3 | Documentation inventory complete |
| Interviews | Week 3-4 | All interviews conducted |
| Testing | Week 4-6 | Test results compiled |
| Analysis | Week 6-7 | Findings documented |
| Reporting | Week 7-8 | Draft report circulated |
| Final Report | Week 8 | Final report delivered |


### Building Your Audit Plan

A complete audit plan document typically includes:

1. **Executive Summary:** Brief overview of what's being audited and why
2. **Scope Statement:** Detailed description of what's included and excluded
3. **Criteria:** Standards and benchmarks to measure against
4. **Methodology:** Step-by-step approach, tools, and techniques
5. **Timeline:** Schedule with milestones and deadlines
6. **Resources:** Team members, tools, and budget
7. **Communication Plan:** Who gets informed of what and when
8. **Risk Management:** What could go wrong and how you'll handle it


### Common Methodology Mistakes

**Insufficient preparation:** Jumping into testing without understanding the system, its context, and applicable requirements.

**Over-reliance on one method:** Only doing technical testing without document review, or only doing interviews without quantitative analysis.

**Ignoring stakeholders:** Not talking to the people who built, operate, or are affected by the AI system.

**Testing in a vacuum:** Evaluating the AI in isolation without considering how it fits into broader business processes.

**One-and-done testing:** Running tests once rather than examining performance over time and under varying conditions.

---


## Practical Example: Complete Audit Plan for a Healthcare AI

Here's how all three pillars come together in a real audit plan:

**Context:** A hospital is using an AI system to predict which patients are likely to be readmitted within 30 days of discharge. The hospital wants an audit before renewing the vendor contract.

**Scope**

- System: ReadmitPredict 2.0, patient readmission risk scoring module
- Coverage: All adult inpatients discharged from Hospital Main Campus, January-June 2024
- Areas: Performance accuracy, fairness across patient demographics, clinical validity, HIPAA compliance
- Exclusions: Pediatric patients, outpatient settings, vendor's internal development practices

**Criteria**
| Category | Criterion | Source |
|----------|-----------|--------|
| Legal | Patient data protection | HIPAA |
| Regulatory | Clinical decision support requirements | FDA guidance |
| Performance | Prediction accuracy | ≥ 0.70 AUC-ROC (vendor contract) |
| Fairness | Equitable performance | Performance gap < 10% across racial groups |
| Clinical | Valid clinical factors | Alignment with medical literature |
| Organizational | AI ethics compliance | Hospital Policy AI-001 |

**Methodology**

- Phase 1: Document review (vendor documentation, hospital policies, training records)
- Phase 2: Stakeholder interviews (IT, clinical staff, compliance, patient advocates)
- Phase 3: Performance testing (retrospective analysis of 5,000 discharge records)
- Phase 4: Fairness analysis (performance stratified by race, age, insurance status)
- Phase 5: Compliance assessment (HIPAA requirements checklist)
- Phase 6: Report development and presentation

---


## Conclusion

Planning an AI audit is like planning a journey—you need to know your destination (scope), the map you'll follow (criteria), and how you'll travel (methodology). Skip the planning, and you'll end up lost, wasting time on detours while missing what matters.

The three pillars work together:

- **Scope** tells you what to examine
- **Criteria** tell you what good looks like
- **Methodology** tells you how to examine it

Invest adequate time in planning—typically 15-20% of the total audit effort. It might feel slow at first, but a well-planned audit runs smoothly and produces findings that people can actually use.

Remember: the goal of an AI audit isn't just to produce a report. It's to provide clarity about whether an AI system is working as intended, identify problems before they cause harm, and give decision-makers the information they need to take action.

---


## Sources and Further Reading

1. **NIST AI Risk Management Framework:** National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework

2. **ISO/IEC 42001:** International Organization for Standardization. (2023). ISO/IEC 42001:2023 Information technology — Artificial intelligence — Management system.

3. **NYC Local Law 144 Guidance:** NYC Department of Consumer and Worker Protection. (2023). Rules on Automated Employment Decision Tools.

4. **EU AI Act:** European Parliament and Council. (2024). Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence.

5. **SR 11-7 Model Risk Management:** Board of Governors of the Federal Reserve System. (2011). Supervisory Guidance on Model Risk Management.

6. **EEOC Technical Assistance Document:** U.S. Equal Employment Opportunity Commission. (2023). The Americans with Disabilities Act and the Use of Software, Algorithms, and Artificial Intelligence to Assess Job Applicants and Employees.

7. **Four-Fifths Rule:** U.S. Equal Employment Opportunity Commission. (1978). Uniform Guidelines on Employee Selection Procedures. 29 C.F.R. § 1607.

8. **IEEE 7000-2021:** IEEE. (2021). IEEE Standard Model Process for Addressing Ethical Concerns during System Design.

9. **HIPAA Security Rule:** U.S. Department of Health and Human Services. 45 C.F.R. Part 160 and Part 164.

10. **FDA Clinical Decision Support Guidance:** U.S. Food and Drug Administration. (2022). Clinical Decision Support Software: Guidance for Industry and Food and Drug Administration Staff.

---

*This article is part of the AI Governance Mastery Program by AIDefence (suniliyer.ca). For more resources on AI governance, visit the complete article series.*
