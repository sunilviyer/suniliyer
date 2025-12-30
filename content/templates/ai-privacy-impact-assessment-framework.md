# AI Privacy Impact Assessment (PIA) Framework

**Purpose**: Systematic methodology for identifying and mitigating privacy risks before deploying AI systems
**Who This Is For**: Organizations deploying AI that processes personal data (required under GDPR, recommended under CCPA/other laws)
**Coverage**: Complete PIA process from scoping to remediation
**Last Updated**: December 2024

---

## When to Conduct an AI Privacy Impact Assessment

**GDPR Requirement** (Article 35): PIA (called DPIA - Data Protection Impact Assessment) mandatory when processing:
- Uses new technologies and is likely to result in high risk to individuals
- Involves automated decision-making with significant effects
- Processes special category data on a large scale
- Involves systematic monitoring of public areas on a large scale

**For AI systems, conduct PIA when**:
- Processing biometric data (facial recognition, voice, etc.)
- Making automated decisions affecting rights (credit, employment, benefits, insurance)
- Processing health data with AI
- Using AI for surveillance or monitoring
- Profiling individuals for targeted decisions
- Processing children's data
- Processing large-scale sensitive data

**Even if not required, PIAs are best practice** for any AI processing personal data.

---

## PIA Process Overview

**Phase 1: Scoping** (Determine necessity, define system)
**Phase 2: Data Mapping** (What data, from where, to whom)
**Phase 3: Legal Assessment** (Lawful basis, compliance requirements)
**Phase 4: Privacy Risk Analysis** (Identify risks to individuals)
**Phase 5: Risk Mitigation** (Technical and organizational measures)
**Phase 6: Stakeholder Consultation** (DPO, individuals, supervisory authority if needed)
**Phase 7: Approval and Documentation** (Final decision, record keeping)
**Phase 8: Ongoing Monitoring** (Review as system evolves)

---

## Phase 1: Scoping

### Step 1.1: Determine if PIA is Required

| Question | Yes/No | If Yes, PIA Mandatory |
|----------|--------|----------------------|
| Does the system process biometric data for identification? | | ✓ |
| Does it make automated decisions significantly affecting individuals? | | ✓ |
| Does it process health/genetic data at scale? | | ✓ |
| Does it involve systematic monitoring of public areas? | | ✓ |
| Is it a new use of AI or technology? | | If high risk |
| Does it process children's data? | | Likely |
| Does it profile individuals? | | If significant effects |

**If any "PIA Mandatory" box checked → PIA required under GDPR**

### Step 1.2: Define System Scope

**System Description**:
- Name of AI system:
- Purpose: (What problem does it solve?)
- Type of AI: (Classification, prediction, generation, recommendation, etc.)
- Deployment context: (Healthcare, finance, marketing, HR, etc.)

**Stakeholders**:
- Data controller: (Organization responsible for processing)
- Data processor(s): (Third parties processing data on your behalf)
- Data subjects: (Individuals whose data is processed)
- Data Protection Officer: (Contact information)

**Timeline**:
- PIA start date:
- Expected deployment date:
- Review frequency: (Annually, or when system changes significantly)

---

## Phase 2: Data Mapping

### Step 2.1: Data Collection

**What personal data is collected?**

| Data Category | Examples | Collected? | Source | Necessity Justification |
|--------------|----------|------------|--------|------------------------|
| **Identifiers** | Name, email, phone, ID number | | | |
| **Demographic** | Age, gender, race, ethnicity | | | |
| **Biometric** | Facial features, fingerprints, voice | | | |
| **Location** | GPS, IP address, WiFi location | | | |
| **Financial** | Credit card, bank account, transactions | | | |
| **Health** | Medical records, diagnoses, prescriptions | | | |
| **Behavioral** | Browsing history, app usage, purchases | | | |
| **Employment** | Resume, performance reviews, salary | | | |
| **Educational** | Grades, test scores, disciplinary records | | | |
| **Sensitive** | Religion, political views, sexual orientation | | | |
| **Inferred Data** | Predictions, scores, classifications | | | |

**Data Sources**:
- [ ] Direct from individuals (forms, apps, etc.)
- [ ] Third-party providers (data brokers, partners)
- [ ] Public sources (web scraping, public records)
- [ ] Derived/inferred from AI processing
- [ ] Other: _____

### Step 2.2: Data Processing

**How is data processed by the AI?**

**Training**:
- Training dataset size:
- Training data retention period:
- Retraining frequency:

**Inference**:
- Real-time processing or batch?
- Data retained after inference?
- Outputs generated:

**Processing Activities**:
- [ ] Collection
- [ ] Storage
- [ ] Analysis
- [ ] Profiling
- [ ] Automated decision-making
- [ ] Sharing with third parties
- [ ] Cross-border transfers
- [ ] Other: _____

### Step 2.3: Data Flows

```
[Data Source] → [Collection Method] → [Storage Location] → [AI Processing] → [Output] → [Recipients]
```

Example:
```
[Website visitors] → [Cookies/tracking] → [AWS US-East-1] → [Behavioral prediction AI] → [Ad targeting profile] → [Ad platforms]
```

**Cross-Border Transfers**:
- Data transferred to countries outside EU/EEA?
- Countries:
- Transfer mechanism: (Standard Contractual Clauses, Adequacy Decision, etc.)

**Third-Party Recipients**:
- AI vendor(s):
- Cloud providers:
- Analytics platforms:
- Other data processors:

### Step 2.4: Data Retention and Deletion

- Training data retention period:
- Inference data retention period:
- Automated deletion: Yes/No
- Deletion request handling:

---

## Phase 3: Legal Assessment

### Step 3.1: Lawful Basis for Processing (GDPR Article 6)

**Which lawful basis applies?**

| Lawful Basis | Applicable? | Justification |
|-------------|-------------|---------------|
| **Consent** | | Freely given, specific, informed, unambiguous? |
| **Contract** | | Necessary for contract with individual? |
| **Legal obligation** | | Required by law? |
| **Vital interests** | | Life-or-death situation? |
| **Public task** | | Official authority or public interest? |
| **Legitimate interests** | | Balancing test conducted? Less intrusive means considered? |

**For special category data (health, biometric, etc.), additional basis required** (GDPR Article 9).

### Step 3.2: Transparency and Notice

**Privacy notice provided?**
- [ ] Individuals informed about data collection
- [ ] Purpose clearly explained
- [ ] AI use disclosed
- [ ] Automated decision-making explained
- [ ] Third-party sharing disclosed
- [ ] Retention period stated
- [ ] Individual rights explained
- [ ] Contact information provided

**Notice method**:
- [ ] Privacy policy
- [ ] Just-in-time notice (at point of collection)
- [ ] Layered notice (brief + detailed)
- [ ] Other: _____

### Step 3.3: Individual Rights

**How are these rights supported?**

| Right | How Individuals Can Exercise | Process Documented? |
|-------|------------------------------|-------------------|
| **Access** | Request copy of their data | |
| **Rectification** | Correct inaccurate data | |
| **Erasure** | Request deletion ("right to be forgotten") | |
| **Restriction** | Limit processing | |
| **Portability** | Receive data in machine-readable format | |
| **Object** | Object to processing (esp. automated decisions) | |
| **Human review** | Contest automated decisions | |

### Step 3.4: Automated Decision-Making (Article 22)

**Does the AI make automated decisions with legal/significant effects?**
- Examples: Credit denial, employment decisions, insurance pricing

If yes:
- [ ] Explicit consent obtained OR
- [ ] Necessary for contract OR
- [ ] Authorized by law

**Safeguards implemented**:
- [ ] Right to human review
- [ ] Right to explanation
- [ ] Right to contest decision
- [ ] Meaningful information about logic provided

---

## Phase 4: Privacy Risk Analysis

### Step 4.1: Risk Identification

**Risks to Individuals** (not organization):

| Risk | Description | Likelihood | Severity | Example |
|------|-------------|------------|----------|---------|
| **Re-identification** | "Anonymized" data linked back to individuals | Low/Med/High | Low/Med/High | Netflix prize de-anonymization |
| **Function creep** | Data used beyond stated purpose | | | Police access to Ring cameras |
| **Unauthorized access** | Insider abuse or external breach | | | Uber employees tracking exes |
| **Discrimination** | AI bias harms protected groups | | | Amazon recruiting bias |
| **Surveillance** | Excessive monitoring chills behavior | | | Clearview facial recognition |
| **Inference** | AI infers sensitive attributes | | | Pregnancy prediction from purchases |
| **Data quality** | Incorrect data → wrong decisions | | | Wrong credit score |
| **Lack of transparency** | Individuals don't know how decisions made | | | Black-box credit denials |
| **Inability to control** | Can't access, correct, or delete data | | | No opt-out from scraping |
| **Third-party risks** | Sharing with untrustworthy parties | | | Cambridge Analytica |

**Severity Assessment** (for each risk):
- **High**: Could lead to significant harm (discrimination, financial loss, physical danger, severe distress)
- **Medium**: Could lead to moderate harm (inconvenience, stress, minor financial impact)
- **Low**: Minimal impact on individuals

**Likelihood Assessment**:
- **High**: Likely to occur
- **Medium**: Could occur
- **Low**: Unlikely

**Overall Risk**: Likelihood × Severity

### Step 4.2: Special Considerations for AI

**Model Memorization**:
- Can the model regenerate training data?
- Tested for memorization?
- Mitigation: Differential privacy, federated learning?

**Inferred Attributes**:
- Does AI infer sensitive attributes (health, race, sexuality)?
- Even if not collected, can AI infer them?
- Mitigation: Fairness testing, proxy detection?

**Explainability**:
- Can decisions be explained to individuals?
- Black-box AI increases privacy risk (can't contest/understand decisions)

**Bias and Fairness**:
- Privacy violation if AI discriminates against protected groups
- Disaggregated testing conducted?

---

## Phase 5: Risk Mitigation

### Step 5.1: Technical Measures

**Data Minimization**:
- [ ] Collect only necessary data
- [ ] Remove unnecessary fields
- [ ] Limit data retention
- [ ] Automated deletion implemented

**Privacy-Enhancing Technologies**:
- [ ] Anonymization (tested for re-identification)
- [ ] Pseudonymization (separate identifiers from data)
- [ ] Differential privacy (add noise to data/model)
- [ ] Federated learning (train without centralizing data)
- [ ] Homomorphic encryption (compute on encrypted data)
- [ ] Synthetic data (generate statistically similar but fake data)

**Security Measures**:
- [ ] Encryption at rest
- [ ] Encryption in transit
- [ ] Access controls (role-based access)
- [ ] Audit logging
- [ ] Intrusion detection
- [ ] Secure deletion

**Access Controls**:
- [ ] Principle of least privilege
- [ ] Multi-factor authentication
- [ ] Employee access logged and audited
- [ ] Regular access reviews
- [ ] Segregation of duties

### Step 5.2: Organizational Measures

**Policies and Procedures**:
- [ ] Privacy policy published
- [ ] Data handling procedures documented
- [ ] Incident response plan
- [ ] Individual rights request procedures
- [ ] Third-party vendor management

**Training**:
- [ ] Staff trained on privacy requirements
- [ ] AI developers trained on privacy-by-design
- [ ] Regular privacy awareness training

**Governance**:
- [ ] Data Protection Officer appointed (if required)
- [ ] Privacy reviews for AI projects
- [ ] Privacy impact assessments mandatory for high-risk
- [ ] Senior leadership accountability

**Contracts**:
- [ ] Data Processing Agreements with vendors
- [ ] Standard Contractual Clauses for cross-border transfers
- [ ] Confidentiality agreements with employees

### Step 5.3: Design Measures

**Privacy by Design**:
- [ ] Privacy considered from project inception
- [ ] Default settings are privacy-protective
- [ ] User controls for data sharing
- [ ] Clear, accessible privacy notices
- [ ] Easy-to-use privacy tools (access, deletion, opt-out)

**Explainability**:
- [ ] AI decisions can be explained
- [ ] Explanation mechanism for individuals
- [ ] Human review available for contested decisions

**Fairness**:
- [ ] Bias testing conducted
- [ ] Disaggregated performance metrics
- [ ] Fairness mitigation implemented

---

## Phase 6: Stakeholder Consultation

### Step 6.1: Internal Consultation

**Data Protection Officer** (if appointed):
- DPO consulted? Date:
- DPO comments:
- Issues raised:
- Resolution:

**Legal Team**:
- Legal review completed?
- Compliance confirmed for: (GDPR, CCPA, HIPAA, etc.)

**Security Team**:
- Security review completed?
- Security measures adequate?

### Step 6.2: External Consultation

**Individuals (Data Subjects)**:
- Were affected individuals consulted?
- Method: (User research, surveys, focus groups)
- Feedback received:
- Changes made in response:

**Supervisory Authority** (if high residual risk):
- GDPR requires consultation with supervisory authority if high risk remains after mitigation
- Authority contacted?
- Guidance received:

---

## Phase 7: Approval and Documentation

### Step 7.1: Final Risk Assessment

After implementing mitigation measures, reassess risk:

| Risk | Initial Level | Mitigations Implemented | Residual Risk | Acceptable? |
|------|--------------|------------------------|---------------|-------------|
| Re-identification | High | Anonymization + differential privacy | Low | Yes |
| Unauthorized access | Medium | Encryption + access controls | Low | Yes |
| Discrimination | High | Bias testing + fairness constraints | Medium | Requires monitoring |

**Overall Residual Risk**: Low / Medium / High

**Decision**:
- [ ] **Proceed**: Residual risk acceptable, deploy with mitigations
- [ ] **Proceed with conditions**: Deploy with enhanced monitoring, review in X months
- [ ] **Do not proceed**: Residual risk too high, redesign required
- [ ] **Consult supervisory authority**: High residual risk, seeking guidance

### Step 7.2: Approval

**Approved by**:
- Name:
- Title:
- Date:

**Conditions of approval** (if any):

### Step 7.3: Documentation

**PIA Record includes**:
- [ ] System description
- [ ] Data flows
- [ ] Legal basis assessment
- [ ] Privacy risks identified
- [ ] Mitigation measures
- [ ] Residual risk assessment
- [ ] Approval decision
- [ ] Review schedule

**Retention**: Keep PIA documentation for life of system + audit period (typically 3-7 years after decommissioning)

---

## Phase 8: Ongoing Monitoring

### Step 8.1: Review Triggers

**Mandatory review when**:
- System changes significantly
- New data types collected
- New purposes for data use
- New third parties receive data
- Major security incident
- Change in applicable laws
- Annually (minimum)

### Step 8.2: Continuous Monitoring

**Metrics to track**:
- Data minimization: Volume of data collected/retained
- Individual rights: Number of access/deletion requests, response time
- Security: Access logs, anomaly detection, incident reports
- Fairness: Disaggregated performance metrics
- Transparency: User feedback on privacy notices

---

## Simplified PIA Template

For quick reference, use this condensed template:

**1. System Description**:
- What it does:
- Personal data processed:

**2. Legal Basis**:
- GDPR Article 6 basis:
- Article 9 basis (if special category data):

**3. Privacy Risks**:
- Risk 1:
- Risk 2:
- Risk 3:

**4. Mitigations**:
- Mitigation 1:
- Mitigation 2:
- Mitigation 3:

**5. Residual Risk**: Low/Medium/High

**6. Decision**: Proceed / Proceed with conditions / Do not proceed / Consult authority

**7. Review Date**:

---

## PIA Checklist

**Before Starting**:
- [ ] PIA necessity determined
- [ ] DPO involved (if appointed)
- [ ] Stakeholders identified

**During PIA**:
- [ ] Data flows mapped
- [ ] Legal basis confirmed
- [ ] Privacy risks identified
- [ ] Mitigations implemented
- [ ] Residual risks assessed
- [ ] Stakeholders consulted

**After PIA**:
- [ ] Approval obtained
- [ ] Documentation complete
- [ ] Mitigations deployed
- [ ] Review schedule set
- [ ] Staff trained on findings

---

**Used By Articles**:
- AI and Privacy: The Data Collection Dilemma
- GDPR Meets AI: Europe's Privacy Framework Applied
- [Future articles on privacy compliance, data protection, AI governance]

---

**Sources**:
- GDPR Article 35 (Data Protection Impact Assessments)
- UK ICO. "Guide to the GDPR: Data protection impact assessments."
- CNIL (France). "Privacy Impact Assessment (PIA) Methodology."
- WP29 Guidelines on DPIAs (Article 29 Data Protection Working Party)
- NIST Privacy Framework
- ISO/IEC 29134:2017 (Privacy impact assessment guidelines)

**Last Updated**: December 2024
