
![Article 123: AI Conformity Assessment – Meeting EU AI Act Requirements]({{IMAGE_PLACEHOLDER_article-123-ai-conformity-assessment-meeting-eu-ai-act-requi}})

---
category: "AI Auditing & Accountability"
learning_objectives:

  - "Understand the key concepts and principles of model validation processes"
  - "Implement audit procedures in real-world scenarios"
  - "Evaluate transparency measures for organizational compliance"
seo_keywords:

  - "article"
  - "conformity"
  - "AI governance"
  - "artificial intelligence"
  - "AI risk management"
word_count: 2639
processed_date: "2025-12-18T20:00:53.578Z"
---


## What Is Conformity Assessment?


### The Basic Concept

Conformity assessment is a formal process to verify that a product meets applicable legal requirements. For AI systems under the EU AI Act, it means demonstrating that your high-risk AI system complies with the requirements laid out in the regulation.

The outcome of successful conformity assessment:

- **EU Declaration of Conformity:** A document you create stating your system complies
- **CE Marking:** The familiar "CE" mark you can then place on your product
- **Registration:** Entry in the EU's AI database
- **Legal permission:** Authorization to sell or deploy in the EU market


### Why Conformity Assessment Matters

**Legal requirement:** You cannot legally place a high-risk AI system on the EU market without conformity assessment.

**Market access:** The EU has 450 million consumers and represents a major market for AI products and services.

**Global standard-setting:** Like GDPR before it, EU AI Act standards are influencing AI governance worldwide. Compliance positions you for other markets too.

**Liability protection:** Proper conformity assessment provides evidence of due diligence if something goes wrong.

---


## When Is Conformity Assessment Required?


### The Risk-Based Framework

The EU AI Act categorizes AI systems by risk level. Conformity assessment applies to high-risk systems.

| Risk Level | Examples | Conformity Assessment Required? |
|------------|----------|-------------------------------|
| Unacceptable | Social scoring, subliminal manipulation | Not applicable—these are prohibited |
| High-risk | Hiring, credit, education, medical devices, law enforcement | **Yes** |
| Limited risk | Chatbots, emotion recognition | No—but transparency requirements apply |
| Minimal risk | Spam filters, video games | No |


### High-Risk Categories (Annex III)

The EU AI Act identifies specific use cases that are automatically high-risk:

**1. Biometric identification and categorization**

- Remote biometric identification systems
- Biometric categorization systems

**2. Critical infrastructure management**

- AI in water, gas, electricity, heating supply
- AI in road traffic management

**3. Education and vocational training**

- AI determining access to education
- AI for assessing students
- AI detecting prohibited behavior during exams

**4. Employment and workers management**

- AI for recruitment and selection
- AI for task allocation based on behavior or traits
- AI for promotion/termination decisions
- AI for performance monitoring

**5. Access to essential services**

- AI evaluating creditworthiness
- AI assessing public assistance eligibility
- AI for emergency services dispatching
- AI for health/life insurance risk assessment

**6. Law enforcement**

- AI for risk assessment of individuals
- Polygraph/deception detection AI
- AI for profiling in criminal investigations

**7. Migration, asylum, border control**

- AI for examining asylum applications
- AI for security risk assessment
- AI for detecting irregular migration

**8. Administration of justice**

- AI assisting judicial research
- AI applying law to facts


### Products Covered by Existing Legislation (Annex I)

Some AI systems are high-risk because they're components of products already covered by EU safety legislation:

- Machinery and equipment
- Medical devices
- Automotive vehicles
- Aviation systems
- Marine equipment
- Toys
- Lifts/elevators
- Radio equipment
- Personal protective equipment

**Example:** An AI system that controls an autonomous vehicle is high-risk both as a safety component AND potentially as an Annex III system.

---


## The Two Pathways: Self-Assessment vs. Third-Party


### Pathway 1: Self-Assessment (Internal Control)

**When it applies:** Most high-risk AI systems can use self-assessment if they're not biometric identification systems.

**What it involves:**

- You assess your own system against requirements
- You create your own technical documentation
- You issue your own EU Declaration of Conformity
- You apply the CE marking yourself
- You register in the EU database

**Key advantage:** Faster and less expensive than third-party assessment.

**Key risk:** You bear full responsibility if the assessment is wrong.


### Pathway 2: Third-Party Assessment (Notified Body)

**When it applies:** 

- Biometric identification systems used for law enforcement
- AI systems under certain existing product safety regulations
- Any high-risk AI if you choose this path voluntarily

**What it involves:**

- A "notified body" (accredited third-party) examines your system
- They review documentation and may test the system
- They issue a certificate of conformity
- You still create the Declaration and apply CE marking

**Key advantage:** Independent verification provides stronger credibility.

**Key risk:** Takes longer and costs more.


### Notified Bodies Explained

Notified bodies are organizations accredited by EU member states to perform conformity assessments. They must:

- Be independent from AI providers and users
- Have technical competence
- Maintain impartiality
- Follow specific procedures
- Be registered in the EU's NANDO database

**Example:** An organization already accredited to certify medical devices might expand to become a notified body for AI in medical devices.

---


## What Requirements Must Be Met?

The EU AI Act sets out specific requirements that high-risk AI must satisfy. Conformity assessment verifies you meet these.


### Requirement 1: Risk Management System (Article 9)

**What's required:**

- Establish and maintain a risk management process
- Identify and analyze known and foreseeable risks
- Estimate and evaluate risks
- Implement risk mitigation measures
- Ensure residual risks are acceptable

**Evidence needed:**

- Documented risk management process
- Risk assessment records
- Mitigation measures and their effectiveness
- Ongoing monitoring procedures

**Example for a hiring AI:**

- Identified risk: Bias against certain demographic groups
- Analysis: Tested model across age, gender, ethnicity
- Mitigation: Implemented fairness constraints, human review process
- Residual risk: Documented remaining disparity and monitoring plan


### Requirement 2: Data Governance (Article 10)

**What's required:**

- Training data must be relevant, representative, and as error-free as possible
- Data sets must be appropriate for the intended purpose
- Data must account for specific geographic, contextual, or behavioral settings
- Biases must be identified and addressed

**Evidence needed:**

- Data documentation (sources, characteristics, limitations)
- Data quality assessments
- Bias analysis results
- Data processing records


### Requirement 3: Technical Documentation (Article 11)

**What's required:**
Create documentation before the system goes to market, including:

- General system description
- Design and development information
- Monitoring, functioning, and control details
- Risk management documentation
- Change records

**Evidence needed:**

- Comprehensive technical file
- Model cards or equivalent documentation
- Architecture diagrams
- Development methodology records


### Requirement 4: Record-Keeping (Article 12)

**What's required:**

- Automatic logging of system operation
- Logs must enable traceability
- Logs must be retained for appropriate periods
- Log integrity must be protected

**Evidence needed:**

- Logging system documentation
- Sample log outputs
- Retention policies
- Integrity protection measures


### Requirement 5: Transparency (Article 13)

**What's required:**

- System must be transparent and explainable to deployers
- Instructions for use must accompany the system
- Deployers must be able to understand and use outputs properly

**Evidence needed:**

- Instructions for use document
- User training materials
- Explainability capabilities documentation
- Output interpretation guidance


### Requirement 6: Human Oversight (Article 14)

**What's required:**

- System must be designed for effective human oversight
- Humans must be able to understand system capabilities and limitations
- Humans must be able to interpret outputs
- Humans must be able to override or intervene

**Evidence needed:**

- Human oversight mechanism documentation
- Operator interface descriptions
- Override capability demonstration
- Training requirements for operators


### Requirement 7: Accuracy, Robustness, Cybersecurity (Article 15)

**What's required:**

- Achieve appropriate levels of accuracy
- Be resilient to errors, faults, and inconsistencies
- Be resistant to manipulation by malicious actors
- Address cybersecurity vulnerabilities

**Evidence needed:**

- Performance testing results
- Robustness testing records
- Security assessment reports
- Vulnerability management processes

---


## The Conformity Assessment Process: Step by Step


### Step 1: Determine If You're a Provider

**Provider (developer):** The entity that develops the AI system and places it on the market or puts it into service. Providers bear primary conformity assessment responsibility.

**Deployer (user):** The entity that uses the AI system. Deployers have obligations but don't perform conformity assessment.

**Key question:** Are you building/selling the AI, or are you using someone else's AI?


### Step 2: Classify Your System

Determine the risk classification:

1. Is the use case in Annex III (high-risk categories)?
2. Is the AI a component of a product in Annex I (existing safety legislation)?
3. Could the use case be considered prohibited (Article 5)?

If yes to 1 or 2 (and not prohibited), the system is high-risk.


### Step 3: Choose Assessment Pathway

| Situation | Required Pathway |
|-----------|------------------|
| Biometric identification for law enforcement | Third-party (notified body) |
| Medical device AI (under existing regulation) | Follows medical device conformity assessment |
| Most other Annex III high-risk | Self-assessment allowed |
| Voluntary enhanced scrutiny | Third-party available by choice |


### Step 4: Prepare Documentation

Create the technical documentation package:

**A. General Description**

- Provider name and contact
- Intended purpose and use cases
- User categories
- Hardware and software requirements
- Version information

**B. Detailed Design Information**

- System architecture
- Development methodology
- Training processes
- Algorithms and approaches used
- Trade-off decisions made

**C. Data Documentation**

- Training data sources and characteristics
- Data processing steps
- Validation and test data sets
- Bias analysis results

**D. Risk Management**

- Risk assessment methodology
- Identified risks
- Mitigation measures
- Residual risk evaluation

**E. Performance Documentation**

- Test results
- Accuracy metrics
- Fairness analysis
- Robustness testing

**F. Human Oversight**

- Oversight mechanisms
- Operator capabilities
- Override procedures
- Training requirements


### Step 5: Conduct Assessment

**For self-assessment:**

1. Review technical documentation for completeness
2. Verify compliance with each Article 9-15 requirement
3. Confirm quality management system is in place
4. Document assessment results

**For notified body assessment:**

1. Submit documentation to notified body
2. Respond to questions and requests
3. Facilitate any testing or inspection
4. Receive certificate of conformity


### Step 6: Create EU Declaration of Conformity

Draft a formal declaration stating:

- Provider identification
- AI system identification
- Reference to the EU AI Act
- Statement that the system conforms to requirements
- Reference to harmonized standards used (if applicable)
- Notified body details (if applicable)
- Date and signature of responsible person


### Step 7: Apply CE Marking

After successful conformity assessment:

- Affix CE marking to the AI system or documentation
- Ensure marking is visible, legible, and permanent
- Include notified body identification number (if applicable)


### Step 8: Register in EU Database

Register the system in the EU's AI database:

- Provider information
- System description
- Intended purpose
- Risk classification
- Conformity assessment basis
- Declaration of conformity reference

---


## Timeline and Practical Considerations


### When Requirements Apply

| Category | Timeline |
|----------|----------|
| Prohibited AI practices | February 2025 (6 months after entry into force) |
| GPAI/Foundation model rules | August 2025 (12 months) |
| Most high-risk requirements | August 2026 (24 months) |
| High-risk in Annex I products | August 2027 (36 months) |


### How Long Does Conformity Assessment Take?

**Self-assessment:**

- Preparation: 3-6 months (if starting from scratch)
- Assessment itself: 2-4 weeks
- Total: 4-8 months

**Notified body assessment:**

- Preparation: 3-6 months
- Notified body queue: 1-3 months
- Assessment process: 2-4 months
- Total: 6-12 months


### Cost Estimates

| Activity | Estimated Cost |
|----------|---------------|
| Documentation preparation (internal) | $50,000-$200,000 |
| Notified body assessment | $30,000-$150,000+ |
| Consultant assistance | $100,000-$500,000 |
| Ongoing compliance management | $25,000-$100,000/year |

*Note: Costs vary significantly based on system complexity and organizational readiness.*

---


## Common Challenges and Solutions


### Challenge 1: Incomplete Documentation

**Problem:** Most AI systems weren't built with EU AI Act documentation requirements in mind.

**Solution:**

- Conduct gap analysis early
- Prioritize documentation remediation
- Implement documentation practices for new development
- Consider tool-based documentation automation


### Challenge 2: Data Governance Gaps

**Problem:** Training data may not meet provenance, quality, and bias requirements.

**Solution:**

- Document what you know about existing data
- Implement data quality processes going forward
- Conduct bias analysis and document findings
- For legacy systems, document limitations and controls


### Challenge 3: Lack of Explainability

**Problem:** Complex models may not provide the transparency required.

**Solution:**

- Implement explainability tools (LIME, SHAP)
- Document model decision factors
- Create user-facing explanations
- Balance explainability with performance through design choices


### Challenge 4: Human Oversight Limitations

**Problem:** System wasn't designed with human override capabilities.

**Solution:**

- Implement operator review interfaces
- Build override mechanisms
- Document appropriate use limitations
- Train operators on system limitations


### Challenge 5: Notified Body Availability

**Problem:** Limited number of accredited notified bodies, especially initially.

**Solution:**

- Plan early and get in queue
- Consider self-assessment where permitted
- Monitor notified body accreditation developments
- Engage with potential notified bodies early

---


## Preparing Your Organization


### Assessment Readiness Checklist

**Governance:**

- [ ] Designated responsible person for conformity assessment
- [ ] Quality management system in place
- [ ] Risk management process established
- [ ] Change management procedures documented

**Documentation:**

- [ ] Technical documentation template created
- [ ] Data governance records available
- [ ] Development methodology documented
- [ ] Test results recorded

**Technical:**

- [ ] Logging and traceability implemented
- [ ] Human oversight mechanisms designed
- [ ] Performance testing completed
- [ ] Security assessment conducted

**Organizational:**

- [ ] Staff trained on requirements
- [ ] Resources allocated
- [ ] Timeline established
- [ ] External support engaged (if needed)


### Building Conformity Assessment into the AI Lifecycle

Don't treat conformity assessment as a last step. Integrate requirements throughout development:

**Design Phase:**

- Build documentation requirements into project plans
- Design for explainability and human oversight
- Establish data governance from the start

**Development Phase:**

- Maintain development records
- Conduct incremental testing
- Document design decisions and trade-offs

**Testing Phase:**

- Comprehensive performance testing
- Fairness and bias analysis
- Robustness and security testing

**Deployment Phase:**

- Finalize documentation
- Complete conformity assessment
- Register and apply CE marking

**Post-Deployment:**

- Maintain monitoring and logging
- Document changes and reassess as needed
- Prepare for potential audits

---


## Consequences of Non-Compliance


### Enforcement and Penalties

| Violation | Maximum Penalty |
|-----------|----------------|
| Prohibited AI practices | €35 million or 7% of global revenue |
| High-risk requirements violation | €15 million or 3% of global revenue |
| Incorrect information to authorities | €7.5 million or 1.5% of global revenue |

*For SMEs, penalties are the lower of the fixed amount or percentage.*


### Beyond Fines

- **Market exclusion:** Cannot legally sell or deploy in EU
- **Product recalls:** Authorities can require withdrawal from market
- **Reputational damage:** Public notification of violations
- **Contract issues:** Customers may terminate agreements
- **Insurance impacts:** May affect coverage or premiums

---


## Conclusion

Conformity assessment is the gateway to the European AI market for high-risk systems. It's a structured process to demonstrate your AI system meets the EU AI Act's requirements for safety, transparency, fairness, and accountability.

Key takeaways:

1. **Know your classification:** Determine if your AI is high-risk and which pathway applies
2. **Prepare documentation:** Start early—comprehensive documentation takes time
3. **Meet the requirements:** Articles 9-15 set the bar you must clear
4. **Choose the right pathway:** Self-assessment for most; notified body when required or for added credibility
5. **Build it in:** Integrate conformity requirements into your AI development lifecycle

The EU AI Act's conformity assessment requirements are demanding, but they're also an opportunity. Organizations that get this right won't just have legal permission to operate—they'll have demonstrably trustworthy AI systems that can compete on quality and reliability.

Start now. The deadlines are coming, and preparation takes time.

---


## Sources and Further Reading

1. **EU AI Act Full Text:** European Parliament and Council. (2024). Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence. Official Journal of the European Union. https://eur-lex.europa.eu/

2. **European Commission AI Act Q&A:** European Commission. AI Act: Questions and Answers. https://ec.europa.eu/commission/presscorner/

3. **NANDO Database:** European Commission. New Approach Notified and Designated Organisations Information System. https://ec.europa.eu/growth/tools-databases/nando/

4. **CE Marking Guidance:** European Commission. CE marking – Conformity marking. https://single-market-economy.ec.europa.eu/single-market/ce-marking_en

5. **EU AI Office:** European Commission. AI Office. https://digital-strategy.ec.europa.eu/en/policies/ai-office

6. **ISO/IEC 42001:** International Organization for Standardization. (2023). ISO/IEC 42001:2023 Information technology — Artificial intelligence — Management system.

7. **NIST AI RMF:** National Institute of Standards and Technology. (2023). AI Risk Management Framework. https://www.nist.gov/itl/ai-risk-management-framework

8. **Medical Device Regulation:** European Parliament and Council. (2017). Regulation (EU) 2017/745 on medical devices.

9. **High-Level Expert Group on AI:** European Commission. (2019). Ethics Guidelines for Trustworthy AI.

10. **Future of Life Institute AI Act Analysis:** Future of Life Institute. EU AI Act Resources. https://artificialintelligenceact.eu/

---

*This article is part of the AI Governance Mastery Program by AIDefence (suniliyer.ca). For more resources on AI governance, visit the complete article series.*
