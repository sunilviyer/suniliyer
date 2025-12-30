# The AI Audit – How to Evaluate AI Systems

## TL;DR

An AI audit is a systematic evaluation of an AI system to assess its performance, fairness, compliance, and governance. Audits can be internal (conducted by the organization) or external (by independent third parties), and can focus on different aspects: technical performance, bias and fairness, regulatory compliance, or governance processes. A comprehensive AI audit examines the entire lifecycle—from data and model development to deployment and monitoring. Key audit activities include documentation review, technical testing, stakeholder interviews, and outcome analysis. Organizations should conduct audits before deploying high-risk AI, periodically during operation, and whenever significant changes occur. Effective audits require independence, expertise, access to systems and data, and clear standards against which to evaluate. The goal isn't just finding problems—it's building confidence that AI systems work as intended and identifying opportunities for improvement.

---

## Introduction

In 2021, the U.S. Equal Employment Opportunity Commission announced an initiative to examine how employers use AI in hiring—including conducting audits of AI hiring tools. The same year, New York City passed Local Law 144, requiring annual bias audits of automated employment decision tools. The EU AI Act mandates conformity assessments for high-risk AI systems.

The message is clear: AI systems affecting people's lives must be audited.

But what does an AI audit actually involve? Unlike financial audits, which have centuries of established practice, AI audits are a developing field. Standards are emerging, but many organizations are still figuring out what AI audits should look like.

This article provides a comprehensive guide to AI audits: what they are, why they matter, what they should cover, how to conduct them, and how to use their findings. Whether you're preparing for a regulatory audit, conducting internal reviews, or engaging external auditors, this guide will help you understand what's involved and how to do it well.

---

## What Is an AI Audit?

An AI audit is a systematic, independent examination of an AI system to evaluate its performance, behavior, compliance, and governance against defined criteria.

### Types of AI Audits

**By Focus**:

*Technical Audit*: Examines the AI system's technical performance—accuracy, reliability, robustness, security.

*Bias/Fairness Audit*: Assesses whether the AI system produces discriminatory outcomes or treats different groups inequitably.

*Compliance Audit*: Evaluates whether the AI system meets regulatory requirements, legal obligations, and contractual commitments.

*Governance Audit*: Reviews the processes, controls, and oversight surrounding AI development and deployment.

*Comprehensive Audit*: Covers multiple dimensions in an integrated assessment.

**By Auditor**:

*Internal Audit*: Conducted by the organization's own audit function or designated internal team.

*External Audit*: Conducted by independent third parties—audit firms, consultants, or specialized AI auditors.

*Regulatory Audit*: Conducted by regulatory bodies exercising oversight authority.

**By Timing**:

*Pre-Deployment Audit*: Conducted before an AI system goes live to identify issues before they cause harm.

*Periodic Audit*: Conducted regularly (annually, quarterly) on operational systems.

*Triggered Audit*: Conducted in response to specific events—incidents, complaints, significant changes.

### What Audits Are Not

**Not Quality Assurance**: QA happens during development; audits evaluate after development (or periodically during operation).

**Not Monitoring**: Monitoring is continuous; audits are point-in-time assessments.

**Not Certification**: Audits assess against criteria; certification formally attests to compliance (though audits can support certification).

**Not Penetration Testing**: Security testing is one component; audits are broader.

**Example: The Audit Landscape**

A bank using AI for credit decisions might face multiple audits:

*Internal audits*:
- Annual governance audit by internal audit function
- Quarterly bias audits by risk management
- Technical audits during development by QA team

*External audits*:
- Annual fair lending audit by external specialists
- SOC 2 audit covering AI system controls
- Periodic regulatory examinations

*Triggered audits*:
- Audit after customer complaints about denial patterns
- Audit after significant model update
- Audit after regulatory inquiry

Each audit has different scope, depth, and purpose—but together they provide comprehensive oversight.

---

## Why AI Audits Matter

### Risk Identification

Audits identify risks that internal teams may miss:
- Teams too close to systems may have blind spots
- Independent perspective catches overlooked issues
- Systematic assessment covers areas that informal review skips

### Compliance Verification

Audits verify compliance with:
- Regulatory requirements (EU AI Act, sector regulations)
- Legal obligations (anti-discrimination laws, privacy laws)
- Contractual commitments (vendor agreements, customer promises)
- Internal policies (AI governance framework, ethical principles)

### Trust Building

Audits build stakeholder confidence:
- Executives gain assurance that AI governance is working
- Boards fulfill oversight responsibilities
- Regulators see evidence of responsible practice
- Customers trust audited systems more than unaudited ones
- Employees trust that AI affecting them is fair

### Continuous Improvement

Audits drive improvement:
- Findings identify areas needing enhancement
- Recommendations guide improvement efforts
- Follow-up audits verify improvements were made
- Audit programs create accountability for progress

### Legal Protection

Audits provide legal benefits:
- Documentation of good faith efforts at responsible AI
- Evidence of due diligence if problems arise
- Compliance records for regulatory defense
- Baseline for measuring improvement

---

## The AI Audit Framework

A comprehensive AI audit examines the AI system across multiple dimensions and lifecycle stages.

### Dimension 1: Governance and Accountability

**What to examine**:

*Organizational Structure*:
- Are roles and responsibilities clearly defined?
- Is there appropriate executive oversight?
- Does an ethics committee or review board exist?
- Are accountability chains clear?

*Policies and Procedures*:
- Do AI-specific policies exist?
- Are policies comprehensive and current?
- Are procedures documented and followed?
- Is there a policy review and update process?

*Risk Management*:
- Is there a risk assessment process?
- Are risks identified, assessed, and tracked?
- Are mitigation measures in place?
- Is risk management integrated with enterprise risk?

*Documentation*:
- Is system documentation complete?
- Are decisions recorded and traceable?
- Is documentation maintained and current?
- Can documentation support accountability?

**Key questions**:
- Who is accountable for this AI system?
- How are AI risks governed?
- What oversight mechanisms exist?
- How are governance failures detected and addressed?

### Dimension 2: Data and Model Development

**What to examine**:

*Data Sourcing*:
- Where does training data come from?
- Is data legally obtained with appropriate rights?
- Are data sources documented?
- Is data provenance traceable?

*Data Quality*:
- Is data accurate and complete?
- How is data quality assessed?
- Are data quality issues documented?
- How is data cleaned and prepared?

*Data Representativeness*:
- Does data represent the population the AI will serve?
- Are demographic groups appropriately represented?
- Are edge cases and minorities included?
- How is representativeness assessed?

*Model Development*:
- What modeling approach was used?
- Were alternatives considered?
- Is the approach appropriate for the use case?
- Are development decisions documented?

*Testing and Validation*:
- How was the model tested?
- Were tests comprehensive?
- Were edge cases and adversarial inputs tested?
- How was performance validated?

**Key questions**:
- Is training data appropriate and unbiased?
- Was the model developed following best practices?
- Was testing adequate to identify problems?
- Can development decisions be justified?

### Dimension 3: Fairness and Bias

**What to examine**:

*Disparate Impact Analysis*:
- Are outcomes different across demographic groups?
- Are differences statistically significant?
- What is the magnitude of disparities?
- How do disparities compare to industry benchmarks?

*Fairness Metrics*:
- What fairness definitions are applied?
- How does the system perform on chosen metrics?
- Were trade-offs between fairness definitions considered?
- Is the chosen fairness approach appropriate for context?

*Bias Sources*:
- Are there biases in training data?
- Do features serve as proxies for protected characteristics?
- Are there biases in labeling or target variables?
- Do model choices introduce or amplify bias?

*Mitigation Measures*:
- What bias mitigation techniques are used?
- Are mitigation measures effective?
- Are there ongoing bias monitoring processes?
- How are newly detected biases addressed?

**Key questions**:
- Does the AI system discriminate?
- Are fairness metrics appropriate and satisfied?
- What bias sources exist and are they addressed?
- Is ongoing fairness monitoring in place?

### Dimension 4: Technical Performance

**What to examine**:

*Accuracy and Reliability*:
- How accurate is the system overall?
- How does accuracy vary across conditions?
- Is performance consistent over time?
- How do errors manifest?

*Robustness*:
- How does the system perform on edge cases?
- Is performance robust to input variations?
- How does the system handle adversarial inputs?
- Does performance degrade gracefully?

*Security*:
- Is the system protected against attacks?
- Are data and model secured?
- Are access controls appropriate?
- Are vulnerabilities identified and addressed?

*Scalability and Performance*:
- Does the system perform at required scale?
- Are response times acceptable?
- Are resource requirements sustainable?
- Is system availability adequate?

**Key questions**:
- Does the AI system work correctly?
- Is it reliable and robust?
- Is it secure against attacks?
- Does it perform at required levels?

### Dimension 5: Transparency and Explainability

**What to examine**:

*Documentation*:
- Is system functionality documented?
- Are limitations disclosed?
- Is documentation accessible to stakeholders?
- Is documentation accurate and current?

*Explainability*:
- Can individual decisions be explained?
- Are explanations meaningful to affected individuals?
- Are explanations technically accurate?
- Are explanation tools and processes in place?

*User Disclosure*:
- Are users informed of AI involvement?
- Do affected individuals receive appropriate explanations?
- Are disclosure requirements met?
- Is transparency appropriate for the context?

**Key questions**:
- Can the AI system be understood by relevant stakeholders?
- Are explanations provided and meaningful?
- Are transparency requirements met?
- Is there appropriate disclosure to users?

### Dimension 6: Human Oversight

**What to examine**:

*Oversight Design*:
- Is human oversight built into the system?
- Are oversight roles defined?
- Do overseers have adequate authority?
- Is oversight meaningful or pro forma?

*Override Capabilities*:
- Can humans override AI decisions?
- Are override mechanisms accessible?
- Are overrides documented and reviewed?
- Is there appropriate training for overseers?

*Escalation Processes*:
- Are escalation paths defined?
- Do escalation triggers exist?
- Are escalations handled appropriately?
- Is there learning from escalations?

**Key questions**:
- Is human oversight meaningful?
- Can humans intervene effectively?
- Are oversight mechanisms working?
- Is oversight appropriate for the risk level?

### Dimension 7: Compliance

**What to examine**:

*Regulatory Requirements*:
- What regulations apply?
- Is the system compliant with applicable regulations?
- Are compliance gaps identified and addressed?
- Is regulatory compliance monitored?

*Legal Obligations*:
- What legal requirements apply?
- Are legal obligations met?
- Is legal risk assessed?
- Is legal counsel appropriately involved?

*Contractual Requirements*:
- What contractual commitments exist?
- Are contractual requirements met?
- Are vendor obligations fulfilled?
- Are customer commitments honored?

*Internal Standards*:
- What internal policies apply?
- Is the system compliant with internal standards?
- Are policy gaps addressed?
- Is compliance with internal standards enforced?

**Key questions**:
- What requirements apply to this system?
- Is the system compliant?
- Are compliance gaps identified and being addressed?
- Is ongoing compliance monitored?

---

## Conducting an AI Audit: Step by Step

### Phase 1: Planning

**Define Scope**:
- Which AI system(s) will be audited?
- Which dimensions will be examined?
- What time period does the audit cover?
- What's excluded from scope?

**Establish Criteria**:
- Against what standards will the system be evaluated?
- What regulations, policies, and frameworks apply?
- What thresholds define acceptable vs. problematic?
- How will findings be categorized (critical, high, medium, low)?

**Assemble Team**:
- Who will conduct the audit?
- What expertise is needed?
- What independence requirements exist?
- Are external specialists needed?

**Plan Activities**:
- What audit procedures will be performed?
- What documentation will be reviewed?
- What testing will be conducted?
- Who will be interviewed?

**Coordinate Access**:
- What access to systems, data, and people is needed?
- How will access be provided securely?
- What confidentiality protections apply?
- What timeline is realistic?

### Phase 2: Information Gathering

**Documentation Review**:
- Governance documents (policies, procedures, charters)
- Technical documentation (model cards, data sheets, architecture)
- Testing documentation (test plans, results, validation reports)
- Operational documentation (monitoring reports, incident logs)
- Compliance documentation (assessments, certifications, correspondence)

**Stakeholder Interviews**:
- Technical team (developers, data scientists, engineers)
- Business owners (product managers, business sponsors)
- Governance functions (risk, compliance, legal, ethics)
- Operators (users, administrators, support staff)
- Leadership (executives, board members if appropriate)

**Technical Assessment**:
- System access for testing
- Performance testing
- Bias and fairness testing
- Security assessment
- Code review if appropriate

**Data Analysis**:
- Training data analysis
- Outcome data analysis
- Demographic disparity analysis
- Performance metrics analysis
- Trend analysis over time

### Phase 3: Analysis and Evaluation

**Compare to Criteria**:
- For each dimension, compare findings to established criteria
- Identify gaps between actual state and required state
- Assess severity of gaps
- Determine root causes

**Identify Findings**:
- Document each finding clearly
- Categorize by severity (critical, high, medium, low)
- Link findings to specific criteria
- Support findings with evidence

**Develop Recommendations**:
- For each finding, develop actionable recommendations
- Prioritize recommendations by risk and feasibility
- Consider resource requirements
- Identify responsible parties

**Assess Overall**:
- What is the overall assessment of the AI system?
- Is the system fit for purpose?
- Are there systemic issues requiring attention?
- What's working well?

### Phase 4: Reporting

**Draft Report**:
- Executive summary for leadership
- Detailed findings for technical and governance teams
- Evidence and methodology description
- Recommendations with priorities

**Review and Validate**:
- Review findings with auditee for accuracy
- Correct any factual errors
- Consider auditee responses
- Finalize findings and recommendations

**Finalize Report**:
- Incorporate appropriate responses
- Ensure clarity and completeness
- Appropriate distribution
- Secure handling of sensitive findings

**Report Contents**:
1. Executive Summary
2. Audit Scope and Objectives
3. Methodology
4. Findings by Dimension
5. Recommendations
6. Management Response (if included)
7. Appendices (evidence, detailed analysis)

### Phase 5: Follow-Up

**Track Remediation**:
- Monitor implementation of recommendations
- Verify remediation actions
- Assess effectiveness of remediation
- Report on remediation progress

**Re-Audit as Needed**:
- Schedule follow-up audits
- Re-test remediated areas
- Verify sustained compliance
- Update findings status

**Lessons Learned**:
- What worked well in the audit process?
- What should be improved?
- Are audit criteria appropriate?
- How can future audits be more effective?

---

## Audit Standards and Criteria

Audits require standards against which to evaluate. Several sources provide criteria for AI audits.

### Regulatory Requirements

**EU AI Act**: Detailed requirements for high-risk AI systems including risk management, data governance, technical documentation, transparency, human oversight, accuracy, and robustness.

**NYC Local Law 144**: Requires bias audits of automated employment decision tools, with specific requirements for disparate impact analysis.

**EEOC Guidance**: Guidance on AI in employment decisions under existing anti-discrimination law.

**Sector Regulations**: Banking, healthcare, and other regulated industries have specific requirements.

### Standards and Frameworks

**ISO/IEC 42001**: Management system standard for AI, providing auditable requirements.

**NIST AI RMF**: Framework for AI risk management with characteristics that can be audited.

**IEEE Standards**: Various technical standards for AI systems.

**Industry Standards**: Sector-specific standards (e.g., healthcare AI standards).

### Organizational Policies

**Internal Policies**: Organization's AI governance policies provide audit criteria.

**Ethical Principles**: Organization's AI principles can be translated into auditable requirements.

**Contractual Commitments**: Promises to customers and partners create audit criteria.

### Best Practices

**Model Cards**: Template for model documentation provides audit criteria for documentation completeness.

**Fairness Metrics**: Established fairness definitions provide criteria for bias assessment.

**Security Standards**: Cybersecurity frameworks provide criteria for security assessment.

**Example: Establishing Audit Criteria**

For a bias audit of an AI hiring tool under NYC Local Law 144:

*Regulatory criteria*:
- Impact ratio (selection rate for each group / selection rate for most selected group) must be calculated
- Results must be published on employer's website
- Audit must cover prior 12 months of data

*Additional organizational criteria*:
- Impact ratio should exceed 0.8 (four-fifths rule)
- Analysis must include intersectional categories
- Any adverse impact must be reviewed for business necessity
- Mitigation plans must be documented for disparities

*Audit procedures*:
- Obtain outcome data for all candidates
- Calculate selection rates by race/ethnicity and sex
- Calculate impact ratios
- Compare to criteria
- Document findings and recommendations

---

## Practical Considerations

### Independence

Effective audits require appropriate independence:

**Internal Audits**: Should be conducted by teams not involved in developing or operating the AI system. Internal audit functions should report to audit committees, not management.

**External Audits**: Should be conducted by parties without conflicts of interest. Auditors should not have financial incentives tied to audit outcomes.

**Regulatory Audits**: Conducted by authorities with legal independence from regulated entities.

Independence enables objective assessment and credible findings.

### Expertise

AI audits require diverse expertise:

**Technical Expertise**: Understanding of AI/ML, data science, software engineering.

**Domain Expertise**: Understanding of the application domain (healthcare, finance, HR).

**Audit Expertise**: Understanding of audit methodology, evidence standards, reporting.

**Legal/Regulatory Expertise**: Understanding of applicable laws and regulations.

**Ethics Expertise**: Understanding of AI ethics, fairness concepts, human rights.

Organizations may need to combine internal staff, external specialists, and domain experts.

### Access

Auditors need sufficient access:

**Data Access**: Training data, operational data, outcome data for analysis.

**System Access**: Ability to test and evaluate AI systems directly.

**Documentation Access**: All relevant policies, procedures, and technical documents.

**People Access**: Ability to interview relevant personnel.

Access should be provided securely with appropriate confidentiality protections.

### Proportionality

Audit intensity should match risk:

**High-Risk Systems**: Comprehensive audits covering all dimensions, conducted frequently, with external validation.

**Medium-Risk Systems**: Focused audits on key risks, conducted periodically, internal with selective external review.

**Low-Risk Systems**: Light-touch audits, less frequent, primarily internal.

Over-auditing wastes resources; under-auditing misses risks.

---

## Common Audit Findings

Understanding common findings helps organizations prepare and auditors know what to look for.

### Governance Findings

- Unclear accountability for AI systems
- Missing or outdated AI policies
- Inadequate documentation
- Insufficient executive oversight
- No formal risk assessment process

### Data and Development Findings

- Training data not representative of served population
- Data quality issues not documented or addressed
- Insufficient testing before deployment
- Development decisions not documented
- No version control or change management

### Fairness Findings

- Disparate impact across demographic groups
- No fairness metrics defined or measured
- Bias mitigation not implemented or ineffective
- No ongoing fairness monitoring
- Protected characteristics used inappropriately

### Technical Findings

- Performance below acceptable thresholds
- Degraded performance over time (model drift)
- Security vulnerabilities
- Inadequate logging and monitoring
- No rollback capability

### Transparency Findings

- Users not informed of AI involvement
- Explanations not provided or not meaningful
- Documentation incomplete or inaccessible
- No process for responding to user inquiries

### Compliance Findings

- Requirements not identified
- Gaps in regulatory compliance
- Contractual commitments not met
- Internal policy violations

---

## After the Audit: Using Findings

Audit findings only matter if they drive improvement.

### Remediation Planning

**Prioritize Findings**: Address critical and high findings first.

**Assign Ownership**: Each finding needs a responsible party.

**Set Timelines**: Realistic but accountable deadlines.

**Allocate Resources**: Ensure remediation is resourced.

**Define Success**: Clear criteria for closure.

### Tracking and Verification

**Track Progress**: Monitor remediation implementation.

**Verify Completion**: Don't just close findings—verify they're actually addressed.

**Test Effectiveness**: Confirm remediation actually solves the problem.

**Document Evidence**: Maintain evidence of remediation.

### Escalation

**Escalate Delays**: Bring attention to remediation falling behind.

**Escalate Resistance**: Address organizational resistance to findings.

**Escalate Risk**: If unremediated findings create significant risk, escalate to leadership.

### Integration

**Feed Forward**: Use audit findings to improve AI governance.

**Update Policies**: Revise policies based on findings.

**Improve Processes**: Fix systemic issues, not just individual findings.

**Train Staff**: Address knowledge gaps revealed by audits.

---

## Conclusion

In 2020, a coalition of researchers attempted to audit Amazon's facial recognition system, Rekognition, for racial and gender bias. Amazon refused to provide access, highlighting a fundamental challenge: AI audits only work when there's willingness—or requirement—to submit to examination.

The regulatory tide is turning toward requiring AI audits. The EU AI Act mandates conformity assessments. NYC requires bias audits of hiring AI. More requirements are coming.

But organizations shouldn't wait for mandates. AI audits are how you know if your AI systems are working as intended. They're how you find problems before they become crises. They're how you build the trust that enables AI's continued use and expansion.

An effective AI audit examines governance, data, fairness, technical performance, transparency, human oversight, and compliance. It requires independence, expertise, and access. It produces actionable findings that drive improvement.

The goal isn't to find problems—it's to build confidence. Confidence that AI systems are fair. Confidence that they work correctly. Confidence that governance is effective. Confidence that when regulators, customers, or the public ask "how do you know your AI is responsible?", you have a credible answer.

AI audits provide that answer.

The question isn't whether your AI will be audited. It's whether you'll be ready when it is.

---

## Sources

1. Raji, I.D., et al. (2020). "Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing." Proceedings of the Conference on Fairness, Accountability, and Transparency.

2. New York City Department of Consumer and Worker Protection. (2023). "Automated Employment Decision Tools (AEDT) – Local Law 144."

3. European Commission. (2024). "The EU Artificial Intelligence Act." Official Journal of the European Union.

4. U.S. Equal Employment Opportunity Commission. (2021). "Launch of Initiative on Artificial Intelligence and Algorithmic Fairness."

5. Metaxa, D., et al. (2021). "Auditing Algorithms: Understanding Algorithmic Systems from the Outside In." Foundations and Trends in Human–Computer Interaction, 14(4), 272-344.

6. Sandvig, C., Hamilton, K., Karahalios, K., & Langbort, C. (2014). "Auditing Algorithms: Research Methods for Detecting Discrimination on Internet Platforms."

7. Buolamwini, J., & Gebru, T. (2018). "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." Proceedings of the Conference on Fairness, Accountability, and Transparency.

8. International Organization for Standardization. (2023). "ISO/IEC 42001:2023 - Artificial Intelligence - Management System."

9. National Institute of Standards and Technology. (2023). "AI Risk Management Framework (AI RMF 1.0)."

10. Mitchell, M., et al. (2019). "Model Cards for Model Reporting." Proceedings of the Conference on Fairness, Accountability, and Transparency.

11. Institute of Internal Auditors. (2023). "Artificial Intelligence Auditing Framework."

12. Kroll, J.A. (2018). "The Fallacy of Inscrutability." Philosophical Transactions of the Royal Society A, 376(2133).

13. Vecchione, B., Levy, K., & Barocas, S. (2021). "Algorithmic Auditing and Social Justice: Lessons from the History of Audit Studies." Equity and Access in Algorithms, Mechanisms, and Optimization.
