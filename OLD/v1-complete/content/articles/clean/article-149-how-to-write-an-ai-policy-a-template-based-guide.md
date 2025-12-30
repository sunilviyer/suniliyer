
![Article 149: How to Write an AI Policy — A Template-Based Guide]({{IMAGE_PLACEHOLDER_article-149-how-to-write-an-ai-policy-a-template-based-guide}})

---
tldr: "This article provides a comprehensive framework for AI governance and implementation. It provides actionable insights for achieving regulatory compliance and organizational readiness."
category: "Governance Implementation"
learning_objectives:

  - "Understand the key concepts and principles of ai governance frameworks"
  - "Implement ethical ai principles in real-world scenarios"
  - "Evaluate regulatory requirements for organizational compliance"
seo_keywords:

  - "article"
  - "write"
  - "AI governance"
  - "artificial intelligence"
  - "policy"
word_count: 1078
processed_date: "2025-12-18T20:00:54.485Z"
---


## Before You Start: Prerequisites


### What You Need to Gather

1. **Organizational Context**
   - Your company's mission and values statement
   - Existing policies (data privacy, information security, ethics, HR)
   - Industry regulations that apply to your organization
   - Current AI systems in use (if any)
   - Planned AI initiatives

2. **Stakeholder Input**
   - Legal/Compliance team perspective
   - IT/Technology team requirements
   - HR considerations
   - Business unit needs
   - Executive priorities

3. **Regulatory Requirements**
   - Applicable laws (EU AI Act, GDPR, state laws, industry regulations)
   - Industry standards (ISO, NIST frameworks)
   - Contractual obligations with customers/partners


### Who Should Be Involved

| Role | Contribution |
|------|-------------|
| Executive Sponsor | Approval authority, resource allocation |
| Legal/Compliance | Regulatory requirements, liability concerns |
| IT/Security | Technical feasibility, security requirements |
| HR | Workforce implications, training needs |
| Privacy Officer | Data protection requirements |
| Business Units | Practical implementation concerns |
| Ethics Representative | Values alignment, ethical considerations |

---


## Step 1: Define the Policy Purpose and Scope


### 1.1 Write the Purpose Statement

**What to include:**

- Why this policy exists
- What problem it solves
- What it aims to achieve

**Template:**

```
PURPOSE

This AI Policy establishes [Organization Name]'s framework for the 
responsible development, deployment, procurement, and use of artificial 
intelligence systems. This policy ensures that AI technologies are 
implemented in a manner that:

- Aligns with our organizational values and mission
- Complies with applicable laws and regulations
- Protects the rights and interests of affected individuals
- Maintains trust with customers, employees, and stakeholders
- Manages risks associated with AI systems
- Promotes beneficial and ethical use of AI
```

**Customization Tips:**

- Reference your organization's specific mission
- Highlight industry-specific concerns (healthcare: patient safety; finance: fair lending)
- Connect to existing organizational values


### 1.2 Define the Scope

**Questions to answer:**

- What AI systems does this policy cover?
- Who must follow this policy?
- What activities are included?
- Are there any exclusions?

**Template:**

```
SCOPE

This policy applies to:

Systems Covered:

- All AI and machine learning systems developed internally
- All AI systems procured from third-party vendors
- All AI systems deployed in production environments
- AI features embedded in existing software products
- Generative AI tools used by employees
- Automated decision-making systems

Personnel Covered:

- All employees, contractors, and temporary workers
- Third-party vendors developing or providing AI systems
- Partners with access to organizational AI systems

Activities Covered:

- Development and training of AI models
- Testing and validation of AI systems
- Deployment and operation of AI systems
- Procurement and vendor selection
- Monitoring and maintenance
- Decommissioning and retirement

Exclusions:

- [Specify any exclusions, e.g., "Basic automation scripts without 
  machine learning components"]

- [Research and experimentation in sandbox environments, subject to 
  separate research guidelines]
```


### 1.3 Add Definitions

**Essential terms to define:**

```
DEFINITIONS

Artificial Intelligence (AI): Technology that enables machines to 
perform tasks that typically require human intelligence, including 
learning, reasoning, problem-solving, perception, and language 
understanding.

Machine Learning (ML): A subset of AI where systems learn and improve 
from experience without being explicitly programmed.

Automated Decision-Making (ADM): The process of making decisions by 
automated means without human involvement.

High-Risk AI System: An AI system that poses significant risks to 
health, safety, fundamental rights, or has significant legal or 
similarly significant effects on individuals.

AI System Owner: The individual or team responsible for an AI system 
throughout its lifecycle.

Affected Persons: Individuals whose rights, interests, or circumstances 
may be impacted by an AI system's outputs or decisions.

Training Data: The dataset used to train a machine learning model.

Model: The mathematical representation learned from training data that 
makes predictions or decisions.

Bias: Systematic errors in AI system outputs that create unfair 
outcomes for certain groups.

Explainability: The ability to describe how an AI system reaches its 
outputs in understandable terms.
```

---


## Step 2: Establish Governing Principles


### 2.1 Select Your Core Principles

Choose principles that align with your organization's values. Common principles include:

**Template with 8 Core Principles:**

```
GOVERNING PRINCIPLES

All AI systems at [Organization Name] shall adhere to the following 
principles:

1. HUMAN-CENTERED
   AI systems shall be designed to augment human capabilities, not 
   replace human judgment in critical decisions. Meaningful human 
   oversight shall be maintained for high-risk applications.

2. FAIR AND NON-DISCRIMINATORY
   AI systems shall not create or reinforce unfair bias. Systems shall 
   be tested for discriminatory outcomes across protected 
   characteristics including race, gender, age, disability, and other 
   legally protected classes.

3. TRANSPARENT AND EXPLAINABLE
   AI systems shall be transparent in their operation. Affected 
   individuals shall be informed when AI is being used to make 
   decisions about them and shall receive meaningful explanations of 
   how decisions are made.

4. SAFE AND SECURE
   AI systems shall be designed with safety as a priority. Systems 
   shall be protected against adversarial attacks, unauthorized access, 
   and misuse.

5. PRIVACY-PRESERVING
   AI systems shall respect individual privacy rights. Data collection 
   and use shall be minimized to what is necessary, and appropriate 
   protections shall be implemented.

6. ACCOUNTABLE
   Clear accountability shall be established for all AI systems. 
   Individuals and teams shall be designated as responsible for system 
   outcomes.

7. RELIABLE AND ROBUST
   AI systems shall perform consistently and reliably under expected 
   conditions. Systems shall be tested for edge cases and failure modes.

8. BENEFICIAL
   AI systems shall be developed and deployed only when they provide 
   genuine benefit to the organization, its stakeholders, and society. 
   Potential harms shall be weighed against benefits.
```


### 2.2 Create a Principles Hierarchy

**Define how to handle conflicts between principles:**

```
PRINCIPLES HIERARCHY

When principles conflict, the following hierarchy applies:

1. Safety and legal compliance take precedence over all other 
   considerations

2. Fairness and non-discrimination take precedence over efficiency 
   and performance

3. Privacy and transparency requirements take precedence over 
   convenience

4. Human oversight requirements take precedence over automation 
   efficiency

In cases of uncertainty, escalate to the AI Governance Committee 
for guidance.
```

---


## Step 3: Define Roles and Responsibilities


### 3.1 Governance Structure

**Template:**

```
GOVERNANCE STRUCTURE

AI Governance Committee

- Chair: [Title, e.g., Chief Data Officer]
- Members: Representatives from Legal, IT, HR, Privacy, Ethics, 
  Business Units

- Meeting Frequency: Monthly, or as needed for urgent matters
- Responsibilities:
  * Approve high-risk AI deployments
  * Review and update this policy annually
  * Resolve escalated AI governance issues
  * Oversee AI risk management program
  * Report to executive leadership and Board

AI Ethics Review Board (if applicable)

- Composition: [Internal and/or external ethics experts]
- Responsibilities:
  * Review AI use cases with significant ethical implications
  * Provide guidance on ethical dilemmas
  * Conduct periodic ethics assessments
```


### 3.2 Role Definitions

**Template:**

```
ROLES AND RESPONSIBILITIES

Executive Sponsor

- Provides strategic direction for AI initiatives
- Allocates resources for AI governance
- Accountable to the Board for AI risk management
- Approves this policy and significant policy changes

Chief AI Officer / AI Program Lead

- Oversees enterprise AI strategy and governance
- Ensures policy compliance across the organization
- Reports AI governance status to executives
- Coordinates cross-functional AI initiatives

AI System Owner
Every AI system must have a designated owner who:

- Maintains accountability for the system throughout its lifecycle
- Ensures compliance with this policy
- Conducts required risk assessments and documentation
- Manages system monitoring and incident response
- Approves system changes and updates
- Ensures proper decommissioning

AI Development Teams

- Follow secure development practices
- Document systems according to requirements
- Conduct required testing (bias, security, performance)
- Participate in review processes
- Report issues and incidents promptly

Data Stewards

- Ensure training data quality and appropriateness
- Maintain data lineage documentation
- Enforce data governance requirements
- Approve data use for AI training

Legal and Compliance

- Advise on regulatory requirements
- Review high-risk AI deployments
- Monitor regulatory developments
- Support incident response and disclosure

Information Security

- Assess AI system security risks
- Implement security controls
- Monitor for security incidents
- Conduct security testing

Privacy Office

- Ensure privacy compliance (GDPR, CCPA, etc.)
- Review data processing activities
- Conduct privacy impact assessments
- Handle data subject requests

Human Resources

- Address workforce implications of AI
- Ensure compliance with employment laws for AI hiring tools
- Coordinate AI training programs
- Support change management

All Employees

- Use AI tools in accordance with this policy
- Report concerns or potential policy violations
- Complete required AI training
- Protect confidential information when using AI
```

---


## Step 4: Create the AI Lifecycle Requirements


### 4.1 Planning and Initiation Requirements

**Template:**

```
PLANNING AND INITIATION

Before any AI project begins, the following must be completed:

Business Case Approval

- Document the business problem being solved
- Identify why AI is the appropriate solution
- Estimate costs, benefits, and ROI
- Obtain approval from [appropriate authority based on project size]

Initial Risk Assessment

- Complete the AI Risk Assessment Questionnaire (Appendix A)
- Determine risk classification (High/Medium/Low)
- Identify potentially affected persons
- Document potential harms and benefits

Stakeholder Identification

- Identify all stakeholders (internal and external)
- Document stakeholder concerns and requirements
- Plan stakeholder engagement approach

Resource Planning

- Identify required skills and team composition
- Assess data availability and quality
- Determine infrastructure requirements
- Establish budget and timeline

Approval Gates

- Low Risk: Department head approval
- Medium Risk: AI Program Lead approval
- High Risk: AI Governance Committee approval
```


### 4.2 Design and Development Requirements

**Template:**

```
DESIGN AND DEVELOPMENT

Data Requirements

- Document all data sources and obtain necessary permissions
- Assess data quality before use in training
- Document data lineage and provenance
- Implement data minimization (use only necessary data)
- Conduct bias assessment of training data
- Ensure compliance with privacy requirements
- Maintain data documentation in the AI Registry

Design Requirements

- Document system architecture and design decisions
- Select appropriate model type based on use case
- Consider explainability requirements in design
- Design for appropriate human oversight
- Plan for system monitoring and maintenance
- Document fail-safe mechanisms

Development Standards

- Follow secure coding practices
- Use version control for all code and models
- Document model training procedures
- Maintain reproducibility of training process
- Implement logging and audit trails
- Follow accessibility standards where applicable

Testing Requirements
All AI systems must undergo:

- Functional testing (does it work as intended?)
- Performance testing (does it meet performance requirements?)
- Bias and fairness testing (does it produce equitable outcomes?)
- Security testing (is it protected against attacks?)
- Edge case testing (how does it handle unusual inputs?)
- User acceptance testing (does it meet user needs?)

Documentation Requirements
Complete the following before deployment:

- Model Card (Appendix B)
- System Documentation
- Test Results Summary
- Risk Assessment Update
- Data Processing Records
```


### 4.3 Deployment Requirements

**Template:**

```
DEPLOYMENT

Pre-Deployment Checklist
Before any AI system is deployed to production:

□ Risk assessment completed and approved
□ All required testing completed and documented
□ Model Card completed
□ System registered in AI Inventory
□ Data processing registered with Privacy Office
□ Security review completed (for High/Medium risk)
□ Legal review completed (for High risk)
□ Human oversight mechanisms in place
□ Monitoring and alerting configured
□ Incident response procedures documented
□ Rollback plan documented
□ User training completed (if applicable)
□ Affected persons notification plan (if required)
□ Appropriate approvals obtained

Approval Requirements by Risk Level

High-Risk Systems:

- AI Governance Committee approval required
- Legal sign-off required
- Executive sponsor sign-off required
- Privacy Impact Assessment completed
- External audit may be required

Medium-Risk Systems:

- AI Program Lead approval required
- Legal consultation completed
- Privacy review completed

Low-Risk Systems:

- AI System Owner approval required
- Standard documentation completed

Deployment Approach

- Use phased rollout for high-risk systems
- Implement A/B testing where appropriate
- Maintain rollback capability
- Monitor closely during initial deployment period
- Document deployment date and configuration
```


### 4.4 Monitoring and Operations Requirements

**Template:**

```
MONITORING AND OPERATIONS

Continuous Monitoring Requirements

Performance Monitoring

- Track key performance metrics
- Set alerting thresholds for degradation
- Review performance monthly (or more frequently for high-risk)
- Document and investigate anomalies

Bias and Fairness Monitoring

- Monitor outcomes across protected groups
- Set thresholds for acceptable disparities
- Investigate and address emerging biases
- Conduct periodic fairness audits (quarterly for high-risk)

Model Drift Monitoring

- Monitor for data drift (input distribution changes)
- Monitor for concept drift (relationship changes)
- Set retraining triggers
- Document drift incidents

Security Monitoring

- Monitor for adversarial attacks
- Track unauthorized access attempts
- Review security logs regularly
- Conduct periodic penetration testing

Incident Response

- Report all AI incidents within [24 hours]
- Follow the AI Incident Response Procedure (Appendix C)
- Document root cause analysis
- Implement corrective actions
- Report significant incidents to AI Governance Committee

Model Updates and Retraining

- Document justification for all updates
- Repeat testing requirements for significant changes
- Obtain appropriate approvals before deployment
- Maintain version history
- Preserve ability to rollback

Periodic Reviews

- Annual review required for all AI systems
- Quarterly review required for high-risk systems
- Review includes: performance, bias, security, continued necessity
- Document review outcomes
- Update risk assessment as needed
```


### 4.5 Decommissioning Requirements

**Template:**

```
DECOMMISSIONING

When an AI system is retired, the following must be completed:

Planning

- Document reason for decommissioning
- Identify dependencies and affected users
- Plan data retention/deletion
- Schedule decommissioning activities
- Notify affected stakeholders

Execution

- Remove system from production
- Archive or delete data per retention policy
- Archive documentation per retention requirements
- Update AI Inventory to reflect retired status
- Revoke system access and credentials

Documentation

- Complete decommissioning record
- Document lessons learned
- Archive final model card and documentation
- Retain records per legal and regulatory requirements

Post-Decommissioning

- Verify system is no longer accessible
- Confirm data deletion (where required)
- Close related tickets and documentation
- Conduct post-mortem if applicable
```

---


## Step 5: Risk Classification Framework


### 5.1 Risk Categories

**Template:**

```
RISK CLASSIFICATION

All AI systems shall be classified into one of four risk categories:

PROHIBITED
AI applications that are not permitted under any circumstances:

- Social scoring of individuals
- Real-time biometric identification in public spaces (unless legally 
  required for law enforcement)

- Manipulation of individuals through subliminal techniques
- Exploitation of vulnerabilities of specific groups
- [Add organization-specific prohibitions]

HIGH-RISK
AI systems that require the most rigorous governance:

- Systems making or significantly influencing decisions about:
  * Employment (hiring, promotion, termination)
  * Credit and lending
  * Insurance underwriting or claims
  * Healthcare diagnosis or treatment
  * Education admissions or assessment
  * Law enforcement or judicial processes
  * Access to essential services
- Systems that could cause significant harm if they fail
- Systems processing sensitive personal data at scale
- Systems with significant legal or financial impact on individuals

MEDIUM-RISK
AI systems requiring standard governance:

- Customer-facing AI with moderate impact
- Internal decision-support tools
- Content recommendation systems
- Fraud detection systems
- Process automation with human oversight

LOW-RISK
AI systems requiring minimal governance:

- Spam filters
- Basic chatbots for general inquiries
- Document classification
- Search and retrieval systems
- Internal productivity tools
```


### 5.2 Risk Assessment Process

**Template:**

```
RISK ASSESSMENT PROCESS

Step 1: Initial Screening
Complete the AI Risk Screening Questionnaire (Appendix A) to determine 
preliminary risk level.

Step 2: Detailed Assessment (Medium and High-Risk)
For systems identified as Medium or High-Risk:

- Identify all potential harms (individual, group, societal)
- Assess likelihood of each harm (Rare/Unlikely/Possible/Likely/Almost Certain)
- Assess severity of each harm (Negligible/Minor/Moderate/Major/Severe)
- Calculate risk rating using Risk Matrix (Appendix D)
- Document mitigating controls
- Determine residual risk level

Step 3: Classification Decision

- Compile assessment findings
- Present to appropriate approver
- Document final classification and rationale
- Record in AI Inventory

Step 4: Periodic Reassessment

- Reassess risk when system changes significantly
- Reassess risk when context changes (new regulations, incidents)
- Conduct annual reassessment for all systems
- Document any classification changes
```

---


## Step 6: Specific Use Case Requirements


### 6.1 Generative AI (ChatGPT, Claude, etc.)

**Template:**

```
GENERATIVE AI USE

Approved Uses

- Drafting and editing documents (with human review)
- Research and information gathering
- Brainstorming and ideation
- Code assistance and review
- Translation assistance
- Summarization of documents

Prohibited Uses

- Submitting confidential or proprietary information
- Processing personal data of customers or employees
- Making final decisions without human review
- Creating content that misrepresents AI involvement
- Generating content for legal filings without attorney review
- [Industry-specific prohibitions]

Required Practices

- Review all AI-generated content before use
- Do not assume AI outputs are accurate — verify facts
- Disclose AI assistance where required by policy or regulation
- Report any concerning outputs to [designated contact]
- Complete Generative AI training before use

Approved Tools
[List approved generative AI tools and any restrictions]

- [Tool 1]: Approved for [specific uses]
- [Tool 2]: Approved for [specific uses]
- Unapproved tools may not be used for work purposes

Data Restrictions

- Do not input confidential business information
- Do not input personal data
- Do not input customer data
- Do not input proprietary code
- When in doubt, consult with [Privacy Office/Legal]
```


### 6.2 AI in Human Resources

**Template:**

```
AI IN HUMAN RESOURCES

Additional Requirements for HR AI Systems

All AI systems used in employment decisions are classified as 
HIGH-RISK and require:

Pre-Deployment

- Bias audit by qualified third party (for hiring tools)
- Legal review for compliance with employment laws
- Privacy Impact Assessment
- AI Governance Committee approval

Transparency Requirements

- Notify candidates when AI is used in hiring process
- Provide information about how AI is used
- Offer alternative process upon request (where feasible)
- Comply with jurisdiction-specific disclosure requirements 
  (e.g., NYC Local Law 144, Illinois AIPA)

Ongoing Requirements

- Annual bias audit
- Regular monitoring of outcomes by protected class
- Documentation of adverse impact analysis
- Human review of all AI-influenced termination decisions

Prohibited HR Uses

- Fully automated termination decisions
- Emotion recognition in interviews (unless disclosed and consented)
- Social media analysis without disclosure
- Predicting unionization activity
```


### 6.3 Customer-Facing AI

**Template:**

```
CUSTOMER-FACING AI

Additional Requirements for Customer-Facing AI Systems

Transparency

- Clearly disclose when customers are interacting with AI
- Provide option to reach human support
- Explain how AI is used in decision-making that affects customers
- Make AI-related terms and conditions available

Customer Rights

- Honor customer requests to opt-out where feasible
- Respond to customer inquiries about AI decisions
- Provide human review of AI decisions upon request
- Maintain complaint process for AI-related concerns

Quality Standards

- Test customer-facing AI for accessibility
- Ensure AI provides accurate information
- Monitor customer satisfaction with AI interactions
- Escalate complex issues to human agents

Data Use

- Clearly disclose data collection and use
- Obtain appropriate consents
- Honor data deletion requests
- Do not use customer data for AI training without consent
```

---


## Step 7: Third-Party and Procurement Requirements

**Template:**

```
THIRD-PARTY AI

Procurement Requirements

Before procuring any third-party AI system:

Due Diligence

- Assess vendor's AI governance practices
- Review vendor's security certifications
- Evaluate vendor's bias testing practices
- Understand training data sources and practices
- Assess vendor's regulatory compliance
- Review vendor's incident response capabilities

Contractual Requirements
Include the following in AI vendor contracts:

- Right to audit AI systems
- Transparency about AI system operation
- Notification of material changes to AI systems
- Incident notification requirements
- Data protection and security requirements
- Liability allocation for AI failures
- Compliance with applicable regulations
- Cooperation with regulatory inquiries
- Exit provisions and data portability

Ongoing Management

- Include vendor AI systems in AI Inventory
- Apply same risk classification as internal systems
- Monitor vendor performance and incidents
- Conduct periodic vendor reviews
- Ensure contract terms remain current

Prohibited Vendors
Do not procure AI systems from vendors who:

- Cannot demonstrate basic AI governance practices
- Refuse to provide transparency about AI operation
- Have unacceptable security practices
- Are subject to sanctions or prohibited jurisdictions
```

---


## Step 8: Training and Awareness

**Template:**

```
TRAINING AND AWARENESS

Required Training

All Employees

- AI Awareness Training (annual)
  * What is AI and how it's used at [Organization]
  * This policy overview
  * Responsible use of AI tools
  * How to report concerns

AI Development Teams

- AI Ethics and Governance Training (annual)
  * Detailed policy requirements
  * Bias detection and mitigation
  * Documentation requirements
  * Testing requirements

AI System Owners

- AI System Owner Training (upon assignment)
  * Lifecycle management responsibilities
  * Risk assessment process
  * Monitoring requirements
  * Incident response

Leadership

- AI Governance Briefing (annual)
  * Strategic AI governance
  * Risk landscape
  * Regulatory developments
  * Organizational AI status

Training Records

- Maintain records of all AI training
- Track completion rates
- Follow up on non-completion
- Include training status in performance management
```

---


## Step 9: Compliance and Enforcement

**Template:**

```
COMPLIANCE AND ENFORCEMENT

Compliance Monitoring

The AI Governance Committee shall:

- Review AI Inventory quarterly for policy compliance
- Conduct periodic audits of AI systems
- Review incident reports and trends
- Monitor regulatory compliance
- Report compliance status to leadership

Policy Violations

Reporting Violations

- Report suspected violations to [reporting channel]
- Reports may be made anonymously
- No retaliation for good-faith reports
- All reports will be investigated

Investigation Process

- AI Governance Committee investigates violations
- Investigations completed within [30 days]
- Findings documented and reported
- Corrective actions implemented

Consequences
Violations of this policy may result in:

- Required remediation of AI system
- Suspension or termination of AI system
- Disciplinary action up to and including termination
- Contract termination for vendors
- Legal action where appropriate

Escalation

- Significant violations escalated to executive leadership
- Regulatory violations reported as required by law
- Board notification for material incidents
```

---


## Step 10: Policy Administration

**Template:**

```
POLICY ADMINISTRATION

Policy Owner

- This policy is owned by [Title/Department]
- Questions about this policy should be directed to [contact]

Review and Updates

- This policy shall be reviewed annually
- Reviews shall consider:
  * Regulatory changes
  * Technology developments
  * Organizational changes
  * Incident lessons learned
  * Stakeholder feedback
- Material changes require AI Governance Committee approval
- Minor clarifications may be made by the Policy Owner

Version History
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial release |

Related Documents

- AI Risk Assessment Questionnaire (Appendix A)
- Model Card Template (Appendix B)
- AI Incident Response Procedure (Appendix C)
- Risk Matrix (Appendix D)
- AI Inventory
- Data Governance Policy
- Information Security Policy
- Privacy Policy
- Code of Conduct

Approval

This policy has been approved by:

_______________________________     _______________
[Executive Sponsor Name/Title]              Date

_______________________________     _______________
[AI Governance Committee Chair]             Date

Effective Date: [Date]
Next Review Date: [Date + 1 year]
```

---


## Step 11: Create the Appendices


### Appendix A: AI Risk Assessment Questionnaire

```
AI RISK ASSESSMENT QUESTIONNAIRE

Complete this questionnaire for all proposed AI systems.

Section 1: System Identification

1. System name:
2. System owner:
3. Business purpose:
4. Department:
5. Proposed go-live date:

Section 2: System Description

6. What type of AI/ML does this system use?
   □ Rule-based AI
   □ Traditional machine learning
   □ Deep learning
   □ Generative AI
   □ Other: _______

7. Is this system:
   □ Developed in-house
   □ Procured from vendor
   □ Open source
   □ Combination

8. What inputs does the system use?
   □ Text
   □ Images
   □ Audio
   □ Video
   □ Structured data
   □ Personal data
   □ Other: _______

9. What outputs does the system produce?
   □ Recommendations
   □ Predictions
   □ Classifications
   □ Decisions
   □ Generated content
   □ Other: _______

Section 3: Impact Assessment

10. Who is affected by this system's outputs?
    □ Employees
    □ Customers
    □ Job applicants
    □ General public
    □ Other: _______

11. What decisions does this system make or influence?
    □ Employment decisions
    □ Credit/lending decisions
    □ Insurance decisions
    □ Healthcare decisions
    □ Pricing decisions
    □ Content recommendations
    □ Access to services
    □ Other: _______

12. What is the potential impact if the system makes errors?
    □ Financial harm to individuals
    □ Discrimination against protected groups
    □ Safety risks
    □ Privacy violations
    □ Reputational damage
    □ Legal/regulatory violations
    □ Minimal impact

13. Is human review of outputs:
    □ Always performed
    □ Sometimes performed
    □ Rarely performed
    □ Never performed

Section 4: Data Assessment

14. Does the system use personal data?
    □ Yes → Continue to question 15
    □ No → Skip to question 18

15. What categories of personal data?
    □ Name/contact information
    □ Financial information
    □ Health information
    □ Biometric data
    □ Location data
    □ Behavioral data
    □ Protected characteristics (race, gender, etc.)
    □ Other: _______

16. How is personal data obtained?
    □ Directly from individuals
    □ From third parties
    □ Publicly available sources
    □ Generated/inferred
    □ Other: _______

17. Have you completed a Privacy Impact Assessment?
    □ Yes
    □ No
    □ Not yet, but planned

Section 5: Risk Indicators

18. Does this system: (Check all that apply)
    □ Make fully automated decisions without human review
    □ Process data about children
    □ Use biometric identification
    □ Monitor employees
    □ Assess creditworthiness
    □ Determine eligibility for benefits
    □ Use emotion recognition
    □ Generate synthetic media (deepfakes)
    □ None of the above

Section 6: Preliminary Classification
Based on responses, preliminary risk level is:
□ High-Risk (requires AI Governance Committee approval)
□ Medium-Risk (requires AI Program Lead approval)
□ Low-Risk (requires System Owner approval)

Completed by: _____________ Date: _____________
Reviewed by: _____________ Date: _____________
```


### Appendix B: Model Card Template

```
MODEL CARD

1. Model Details
- Model name:
- Version:
- Model type:
- Developer/vendor:
- Development date:
- License:

2. Intended Use
- Primary intended uses:
- Primary intended users:
- Out-of-scope uses:

3. Training Data
- Data sources:
- Data size:
- Data preprocessing:
- Known limitations:

4. Evaluation Data
- Evaluation datasets:
- Evaluation methodology:

5. Performance Metrics
- Metrics used:
- Performance results:
- Performance by subgroup:

6. Ethical Considerations
- Potential harms:
- Mitigations implemented:
- Populations at risk:

7. Limitations
- Known limitations:
- Failure modes:
- When not to use:

8. Recommendations
- Best practices for use:
- Monitoring recommendations:
- Feedback mechanisms:
```


### Appendix C: AI Incident Response Procedure Summary

```
AI INCIDENT RESPONSE PROCEDURE

1. Detection and Reporting
- Report incidents to [AI Governance email/system] within 24 hours
- Include: System name, description of incident, impact, initial actions

2. Initial Assessment
- AI Program Lead assesses severity (Critical/High/Medium/Low)
- Determine if system should be suspended
- Identify immediate containment actions

3. Investigation
- Assign investigation lead
- Gather evidence and document findings
- Identify root cause
- Determine scope of impact

4. Remediation
- Implement fixes
- Test thoroughly before restoring
- Obtain appropriate approvals

5. Notification
- Notify affected parties as required
- Regulatory notification if required
- Executive notification for significant incidents

6. Post-Incident
- Complete incident report
- Conduct lessons learned
- Update policies/procedures as needed
- Close incident
```

---


## Step 12: Final Review and Approval


### 12.1 Review Checklist

Before finalizing your AI Policy, verify:

**Completeness**

- [ ] Purpose and scope clearly defined
- [ ] All necessary definitions included
- [ ] Governing principles established
- [ ] Roles and responsibilities assigned
- [ ] Lifecycle requirements documented
- [ ] Risk classification framework complete
- [ ] Specific use cases addressed
- [ ] Third-party requirements included
- [ ] Training requirements specified
- [ ] Compliance and enforcement provisions included
- [ ] Policy administration details complete
- [ ] All appendices created

**Legal Review**

- [ ] Legal team has reviewed for regulatory compliance
- [ ] Privacy requirements aligned with privacy laws
- [ ] Employment law requirements addressed (for HR AI)
- [ ] Industry-specific regulations addressed
- [ ] Contractual provisions reviewed

**Stakeholder Review**

- [ ] IT/Security team has reviewed technical requirements
- [ ] HR has reviewed workforce provisions
- [ ] Business units have reviewed practical implications
- [ ] Privacy office has reviewed data requirements
- [ ] Compliance has reviewed monitoring provisions

**Practical Review**

- [ ] Requirements are achievable with current resources
- [ ] Processes are practical and not overly burdensome
- [ ] Templates and tools are usable
- [ ] Training is feasible to deliver
- [ ] Monitoring is achievable


### 12.2 Approval Process

1. **Circulate Final Draft**
   - Send to all reviewers for final comments
   - Allow [5-10 business days] for review
   - Compile and address feedback

2. **AI Governance Committee Approval**
   - Present policy to AI Governance Committee
   - Address questions and concerns
   - Obtain formal approval

3. **Executive Approval**
   - Present to executive sponsor
   - Obtain signature
   - Confirm effective date

4. **Board Notification** (if applicable)
   - Notify Board of new policy
   - Provide summary of key provisions

---


## Step 13: Communication and Implementation


### 13.1 Communication Plan

**Template:**

| Audience | Message | Channel | Timing |
|----------|---------|---------|--------|
| All employees | Policy announcement + training requirement | Email, intranet | Day 1 |
| Leadership | Detailed briefing | Meeting | Week 1 |
| AI teams | Detailed requirements walkthrough | Workshop | Week 1-2 |
| IT/Security | Technical requirements | Meeting | Week 1 |
| Legal/Compliance | Monitoring requirements | Meeting | Week 1 |
| Vendors | New contract requirements | Email | Week 2 |


### 13.2 Implementation Timeline

**Template:**

| Phase | Activities | Timeline |
|-------|-----------|----------|
| Announce | Communicate policy, begin training | Weeks 1-2 |
| Inventory | Document existing AI systems | Weeks 2-6 |
| Assess | Risk assess existing systems | Weeks 4-8 |
| Remediate | Address gaps in existing systems | Weeks 6-12 |
| Operationalize | Full enforcement begins | Week 12+ |


### 13.3 Success Metrics

Track these metrics to measure policy effectiveness:

- % of AI systems documented in inventory
- % of AI systems with completed risk assessments
- % of high-risk systems with required approvals
- % of employees completing AI training
- Number of policy violations identified
- Number of AI incidents reported
- Time to resolve AI incidents
- Stakeholder satisfaction with AI governance

---


## Quick Reference: Policy Length Guidelines

| Organization Size | Recommended Length |
|-------------------|-------------------|
| Small (<100 employees) | 8-15 pages |
| Medium (100-1000 employees) | 15-25 pages |
| Large (1000+ employees) | 25-40+ pages |

**Note:** Appendices are in addition to core policy length.

---


## Common Mistakes to Avoid

1. **Too Vague**: Don't use language so general it provides no guidance
2. **Too Prescriptive**: Don't make requirements so specific they can't adapt
3. **No Teeth**: Ensure there are real consequences for violations
4. **No Resources**: Don't create requirements without providing support
5. **Set and Forget**: Plan for regular review and updates
6. **Copy-Paste**: Customize for your organization's context
7. **No Stakeholders**: Involve affected parties in development
8. **All Stick, No Carrot**: Balance restrictions with enablement
9. **Ignoring Culture**: Consider organizational culture in design
10. **Perfect Enemy of Good**: Launch an MVP and improve over time

---


## Summary

Creating an AI Policy requires:

1. **Gathering context** — Understand your organization, regulations, and stakeholders
2. **Defining scope** — Be clear about what's covered
3. **Establishing principles** — Create the ethical foundation
4. **Assigning roles** — Ensure clear accountability
5. **Creating lifecycle requirements** — From planning through retirement
6. **Classifying risk** — Proportionate governance based on risk
7. **Addressing specific uses** — Provide clear guidance for common scenarios
8. **Managing third parties** — Extend governance to vendors
9. **Building capability** — Train people to follow the policy
10. **Enforcing compliance** — Monitor and enforce
11. **Administering the policy** — Keep it current and effective

Start with the templates in this guide, customize for your organization, get stakeholder input, and iterate. Your first version doesn't need to be perfect — it needs to exist and be improved over time.

---

**Word Count:** Approximately 5,500 words
**Estimated Reading Time:** 25-30 minutes
**Estimated Implementation Time:** 4-12 weeks depending on organization size

---

*End of Guide*
