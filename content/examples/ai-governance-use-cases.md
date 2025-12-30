# AI Governance Use Cases and Examples

**Purpose**: Real-world examples of AI governance frameworks, classification systems, and socio-technical implementation
**Concepts**: ai-governance, governance-frameworks, oecd-principles, socio-technical-systems, ai-classification

---

## Use Case 1: Netflix - Personalization Algorithm Governance

### The System

Netflix's recommendation algorithm accounts for approximately 80% of content watched on the platform. The company estimates its personalization system saves over $1 billion annually in customer retention by reducing churn.

The algorithm analyzes:
- Viewing history (what you watched, when, how long)
- Viewing patterns (binge-watching, time of day, device used)
- Ratings and interactions
- Content characteristics (genre, cast, themes)
- Behavior of similar users

### Governance Challenges

**Transparency vs. Competitive Advantage**: Netflix's algorithm is a core business differentiator. Full transparency would benefit competitors. But lack of transparency makes external accountability difficult.

**Filter Bubbles**: Personalization can create "recommendation bubbles" where users only see content similar to what they've already watched, limiting discovery and diversity of perspectives.

**Content Amplification**: The algorithm significantly influences which content succeeds—creating power over creators, potentially affecting cultural production.

**A/B Testing Ethics**: Netflix constantly experiments on users (different thumbnails, different recommendations). When does optimization cross into manipulation?

### How Netflix Governs This AI

**Internal Governance**:
- Dedicated ethics and policy team reviewing algorithm changes
- A/B test review process for significant changes
- Diversity metrics tracked alongside engagement metrics
- "Unexpectedness" factored into recommendations to combat filter bubbles

**External Accountability**:
- Transparency reports (limited but published)
- User controls (thumbs up/down, "not interested," viewing history management)
- Opt-out mechanisms for personalization
- Regular academic partnerships for external research

**Regulatory Compliance**:
- GDPR compliance for EU users (data access, deletion, portability rights)
- California Consumer Privacy Act (CCPA) compliance
- Age-appropriate content filtering for kids' profiles

### Lessons for Governance Frameworks

1. **Balance competing interests**: Transparency, competition, user privacy, and business value often conflict
2. **User agency matters**: Give users meaningful control, not just binary opt-in/opt-out
3. **Internal accountability structures**: Ethics review before deployment, not as afterthought
4. **Metrics beyond engagement**: Track diversity, unexpectedness, user wellbeing—not just clicks
5. **External oversight**: Academic partnerships and transparency reports enable accountability without revealing trade secrets

**OECD Classification Dimensions**:
- **People & Planet**: Billions of users affected; impacts on culture, information diversity
- **Economic Context**: Entertainment sector; subscription model; deployed by platform owner
- **Data & Input**: User behavior data; continuous collection; quality varies
- **AI Model**: Collaborative filtering + deep learning; proprietary; robust but opaque
- **Task & Output**: Content recommendation; no life-changing decisions; users can ignore recommendations

**Risk Level**: Medium (high impact on culture/information, but low stakes per individual decision)

---

## Use Case 2: Healthcare AI - Socio-Technical Implementation Failure and Success

### Case Study A: Sepsis Prediction Algorithm (Failure)

**The Promise**: An AI system to predict sepsis (life-threatening infection) hours before clinical symptoms appear, allowing early intervention.

**Technical Performance**: In lab testing, 85% accuracy for sepsis prediction 6 hours before onset.

**Real-World Performance**: Deployed in multiple hospitals, but clinical outcomes didn't improve. In some cases, false alarms increased clinician burnout.

**Why It Failed (Socio-Technical Issues)**:

1. **Workflow Mismatch**: Algorithm generated alerts but didn't integrate into existing clinical workflows. Nurses received alerts via separate system they didn't regularly check.

2. **Trust Calibration**: Early false positives eroded clinician trust. When real alerts came, clinicians dismissed them ("alert fatigue").

3. **Lack of Context**: Algorithm didn't know patient was already on antibiotics, already being monitored, or had advance directives limiting intervention.

4. **No Feedback Loop**: When clinicians overrode algorithm, system didn't learn why or improve.

5. **Training Data Mismatch**: Algorithm trained on data from academic medical centers but deployed in community hospitals with different patient populations and resources.

**Governance Lessons**:
- Technical validation ≠ clinical validation
- Involve end users (clinicians, nurses) from day one
- Pilot in deployment context, not just lab
- Build feedback mechanisms for continuous learning
- Consider workflow integration as primary design constraint

---

### Case Study B: Diabetic Retinopathy Screening (Success)

**The System**: AI algorithm (IDx-DR) analyzes retinal images to detect diabetic retinopathy, a leading cause of blindness.

**FDA Approval**: First autonomous AI diagnostic system approved by FDA (2018).

**Real-World Success**: Deployed in primary care clinics and pharmacies, dramatically expanding access to screening in underserved communities.

**Why It Succeeded (Socio-Technical Design)**:

1. **Workflow Integration**: Designed for primary care settings where specialists aren't available. Fits into existing check-up visits.

2. **Clear Decision Protocol**: Binary output (refer to specialist / no referral needed), not probabilistic score requiring clinical interpretation.

3. **Autonomous but Bounded**: Makes one specific decision (referral yes/no), doesn't try to diagnose or treat.

4. **Training Data Diversity**: Deliberately trained on diverse patient populations (race, ethnicity, image quality variations).

5. **Human Oversight Built In**: Positive results trigger specialist referral (human expert makes treatment decisions).

6. **Implementation Support**: Company provides training, workflow consulting, quality monitoring.

**Governance Framework**:

**Pre-Deployment**:
- FDA regulatory review (clinical trials, safety, effectiveness)
- Diverse training data requirements
- Transparent performance metrics by demographic group
- Clear indications for use and limitations

**Deployment**:
- Operator training requirements
- Image quality standards
- Maintenance and calibration protocols
- Incident reporting system

**Post-Deployment**:
- Ongoing performance monitoring
- Regular audits for bias/accuracy
- User feedback collection
- System updates require FDA review

**Lessons for Governance**:
- Narrow, well-defined use cases enable better governance
- Regulatory oversight + company responsibility work together
- Success requires technical excellence AND socio-technical design
- Clear scope limitations prevent mission creep
- Ongoing monitoring essential, not one-time approval

---

## Use Case 3: EU AI Act - OECD Definition in Practice

### How the EU Used OECD Definition

The EU AI Act directly incorporates the OECD definition of AI systems, demonstrating international alignment on AI governance.

**OECD Definition (2023)**:
> "An AI system is a machine-based system that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments."

**Why the EU Chose It**:
1. **International consensus**: 47 countries already adhered to OECD AI Principles
2. **Technology-neutral**: Doesn't hard-code specific techniques (future-proof)
3. **Functionally focused**: Defines AI by what it does, not how it does it
4. **Legally operational**: Clear enough for enforcement, flexible enough for innovation

### How It's Applied in the AI Act

**High-Risk AI Systems** (Subject to strict requirements):

Using OECD definition + OECD classification dimensions, the EU identified:

| Domain | Examples | OECD Dimensions | Requirements |
|--------|----------|-----------------|--------------|
| **Biometric Identification** | Facial recognition, fingerprints | People & Planet (fundamental rights) | Prohibited for real-time public surveillance (with exceptions) |
| **Critical Infrastructure** | AI managing water, gas, electricity | People & Planet (safety), Task & Output (critical decisions) | Mandatory conformity assessment, human oversight |
| **Education & Employment** | AI for exam scoring, hiring, worker management | People & Planet (equal opportunity), Task & Output (life-affecting decisions) | Transparency, explainability, human review |
| **Law Enforcement** | Predictive policing, criminal risk assessment | People & Planet (fundamental rights), Task & Output (liberty at stake) | Strict oversight, regular audits, redress mechanisms |
| **Essential Services** | Credit scoring, insurance underwriting, benefits eligibility | People & Planet (access to services), Task & Output (significant impact) | Accuracy requirements, bias mitigation, transparency |

**Minimal Risk AI** (Self-regulation acceptable):
- Spam filters
- Video game AI
- Inventory management
- AI-enabled video or audio editing

**How Organizations Classify Their AI**:

Companies use OECD framework dimensions to determine if their AI is "high-risk":

**Step 1**: Identify the AI system (does it meet OECD definition?)
**Step 2**: Classify using OECD dimensions:
- **People & Planet**: Who is affected? What rights are at stake?
- **Economic Context**: What sector? High-risk sectors (health, finance, justice, employment)?
- **Data & Input**: Sensitive data (biometric, health, financial)?
- **AI Model**: Opaque "black box" or transparent?
- **Task & Output**: What decisions? Automated or human-in-loop?

**Step 3**: Map to EU AI Act risk categories:
- Prohibited (unacceptable risk)
- High-risk (strict requirements)
- Limited risk (transparency obligations)
- Minimal risk (voluntary codes of conduct)

### Governance Lessons

1. **Standardized definitions enable interoperability**: OECD definition allows cross-border compliance
2. **Classification drives proportional governance**: Not all AI needs same level of oversight
3. **Risk-based approach balances innovation and safety**: Heavy regulation where stakes are high, lighter where stakes are low
4. **International alignment reduces compliance burden**: Companies operating globally benefit from harmonized definitions

**Example in Practice: Hiring AI**

An AI resume screening tool under EU AI Act:

- **Meets OECD definition?** Yes (infers from input, generates recommendations/decisions)
- **OECD Classification**:
  - People & Planet: Affects employment access (fundamental right)
  - Economic Context: Employment sector
  - Task & Output: Makes hiring decisions
- **EU AI Act Category**: High-risk
- **Requirements**: Conformity assessment, human oversight, transparency to candidates, bias testing, documentation, incident reporting

Same algorithm for internal job recommendations (not hiring decisions): Limited risk, just transparency required.

---

## Use Case 4: ISO/IEC 22989 - Shared Terminology in Action

### The Problem: Tower of Babel

Before ISO/IEC 22989, the term "bias" had different meanings:

- **Statisticians**: Systematic error in estimation
- **ML Engineers**: Model underfitting or overfitting
- **Ethicists**: Unfair discrimination
- **Social Scientists**: Historical or systemic inequality
- **Legal Experts**: Violation of anti-discrimination laws

Policy conversations devolved into definitional arguments instead of substance.

### ISO/IEC 22989 Solution: Standardized Definitions

**Published June 2022**, ISO/IEC 22989 "Artificial Intelligence Concepts and Terminology" provides standardized definitions for AI governance.

**Key Terms Defined**:

| Term | ISO/IEC 22989 Definition | Why It Matters |
|------|-------------------------|----------------|
| **AI System** | Engineered system that generates outputs such as content, forecasts, recommendations or decisions for a given set of objectives | Aligns with OECD definition; determines what's in scope for AI policy |
| **Bias (AI)** | Systematic difference in treatment of certain objects, people, or groups in comparison to others | Distinguishes statistical bias from fairness bias |
| **Explainability** | Property that pertains to understanding how an AI system arrives at its results | Differentiates from "interpretability" and "transparency" |
| **Fairness** | Property of an AI system to avoid creating or reinforcing unfair bias | Operationalizable definition for audits and compliance |
| **Transparency** | Property of being open, comprehensive and understandable about the processes and decision-making procedures of an AI system | Enables accountability without requiring explainability |
| **Robustness** | Ability of an AI system to maintain its level of performance under a variety of conditions | Critical for safety-critical applications |

### Impact: UN Global Digital Compact (2024)

The UN's "Global Digital Compact" (September 2024) references ISO/IEC 22989 as foundational for international AI governance.

**How It's Used**:
- Treaty negotiations use standardized terms (reducing translation/interpretation errors)
- Countries developing national AI strategies cite ISO definitions
- Companies building governance frameworks use ISO terms in policies
- Auditors and regulators use consistent terminology in assessments

### Example: New York City Local Law 144 (Bias Audit for Hiring AI)

NYC's law requires bias audits for automated employment decision tools (AEDTs).

**Without ISO/IEC 22989**:
- Companies unsure if their tool counts as "AEDT"
- Auditors using different definitions of "bias"
- Compliance impossible to verify objectively

**With ISO/IEC 22989**:
- Clear definition of AI system → determines what's covered
- Standardized "bias" definition → enables consistent audits
- Shared "fairness" concept → measurable compliance criteria
- Common "transparency" requirements → comparable documentation

**Practical Impact**:
- Reduces compliance costs (vendors can use same definitions across jurisdictions)
- Enables meaningful audits (auditors assess against shared standards)
- Facilitates enforcement (regulators can objectively determine violations)

---

## Use Case 5: Facial Recognition - Same Technology, Different Governance

### The Technology (Same)

AI-powered facial recognition: analyzes facial features, creates mathematical representation ("faceprint"), matches against database.

### The Use Cases (Very Different Governance Needs)

| Use Case | Governance Approach | Why Different |
|----------|-------------------|---------------|
| **Smartphone Unlock** | Minimal regulation | User controls their data, low stakes (inconvenience if fails), opt-in, no third-party surveillance |
| **Airport Identity Verification** | Moderate oversight | Voluntary enrollment, defined purpose, limited retention, accuracy requirements, redress mechanisms |
| **Police Criminal Identification** | Strict oversight | High stakes (wrongful arrest), potential for abuse, accuracy disparities by race, transparency essential |
| **Real-Time Public Surveillance** | Prohibited (EU) or heavily restricted | Mass surveillance, chilling effects on rights, disproportionate impact on minorities, no opt-out |

### OECD Classification Drives Different Governance

**Dimension: People & Planet** (Who is affected? What rights?)

- **Smartphone**: One user, convenience
- **Airport**: Travelers, security vs. privacy balance
- **Police**: Suspects, fundamental rights (liberty, due process)
- **Public surveillance**: Everyone in public, freedom of assembly, expression, movement

**Dimension: Task & Output** (What decisions? What impact?)

- **Smartphone**: Unlock device or don't (low stakes)
- **Airport**: Allow boarding or secondary screening (moderate stakes)
- **Police**: Investigate suspect or not (high stakes)
- **Public surveillance**: Track movements, identify protesters (extreme stakes)

**Dimension: Data & Input** (What data? Consent?)

- **Smartphone**: User's own face, explicit consent
- **Airport**: Traveler photo, enrollment-based consent
- **Police**: Mugshot database, no individual consent
- **Public surveillance**: Everyone in public, no consent, no knowledge

### Governance Lessons

1. **Technology-neutral governance fails**: The same AI can be beneficial or harmful depending on use case
2. **Context determines risk**: Deployment context matters more than technical capabilities
3. **OECD dimensions operationalize risk assessment**: Systematic framework prevents inconsistent regulation
4. **Purpose limitations essential**: Smartphone facial recognition shouldn't be repurposed for surveillance
5. **Opt-out matters**: High-stakes AI should require opt-in or provide meaningful alternatives

**Example: EU AI Act Application**

- **Smartphone unlock**: Minimal risk → voluntary codes of conduct
- **Airport verification**: Limited risk → transparency obligations
- **Police identification**: High-risk → strict requirements (accuracy, human review, logging, audits)
- **Real-time public surveillance**: Prohibited (with narrow exceptions for serious crimes)

---

## Cross-Cutting Governance Lessons

### Lesson 1: Proportionality

Not all AI requires the same governance. Spam filters and criminal sentencing algorithms shouldn't be regulated identically.

**Framework**: Use OECD classification to determine proportional governance:
- High impact on people + high stakes decisions = strict oversight
- Low impact + low stakes = light-touch governance

---

### Lesson 2: Socio-Technical Thinking

Governing AI code isn't enough. Governance must address:
- Who labels training data (and their biases)
- How users interact with outputs (trust calibration)
- When humans override AI (and why)
- Where AI fits in workflows (integration, not bolted-on)
- Why AI is deployed (business model, incentives)

**Healthcare AI lesson**: Technical excellence + poor workflow integration = failure

---

### Lesson 3: International Alignment

OECD definition and ISO/IEC 22989 enable:
- Cross-border compliance (same definitions)
- Regulatory interoperability (EU Act references OECD)
- Reduced fragmentation (companies don't navigate 200 different definitions)

**But**: Alignment on definitions doesn't mean alignment on values. What's "high-risk" in EU may not be in US.

---

### Lesson 4: User Agency and Transparency

Effective governance gives users:
- **Knowledge**: You're interacting with AI
- **Choice**: Opt-out or alternatives when stakes are high
- **Control**: Manage your data, challenge decisions
- **Redress**: Appeal processes when AI harms you

**Netflix example**: Users can rate, hide, delete history, opt out of personalization

**Contrast**: Many hiring AI systems don't tell candidates AI was used—no knowledge, no choice, no control, no redress

---

### Lesson 5: Ongoing Monitoring, Not One-Time Approval

AI systems learn and adapt. Governance can't be "approve and forget."

**Diabetic retinopathy AI**: FDA approval + ongoing performance monitoring + regular audits + update review process

**Problem**: Many organizations deploy AI, don't monitor post-deployment performance or bias drift

---

## Applying These Lessons: Governance Framework Checklist

```
AI GOVERNANCE USE CASE ASSESSMENT

System Name: _________________________

1. CLASSIFICATION (Use OECD Framework)
   □ People & Planet: Who affected? What rights at stake?
   □ Economic Context: What sector? Business model?
   □ Data & Input: What data? Source? Consent?
   □ AI Model: Type? Transparency? Robustness?
   □ Task & Output: What decisions? Impact? Opt-out?

2. RISK LEVEL
   □ Prohibited (unacceptable harm to rights)
   □ High-risk (significant impact, strict requirements)
   □ Limited risk (transparency obligations)
   □ Minimal risk (voluntary best practices)

3. SOCIO-TECHNICAL CONSIDERATIONS
   □ Workflow integration planned?
   □ End users involved in design?
   □ Training data matches deployment context?
   □ Feedback loops for continuous improvement?
   □ Human oversight mechanisms?

4. USER AGENCY
   □ Users know AI is being used?
   □ Opt-out or alternatives available?
   □ Users control their data?
   □ Appeal/redress process exists?

5. GOVERNANCE MECHANISMS
   □ Pre-deployment: Testing, validation, bias audit
   □ Deployment: Documentation, training, monitoring
   □ Post-deployment: Performance tracking, incident response, audits
   □ Ongoing: Updates reviewed, feedback incorporated, re-validation

6. COMPLIANCE
   □ Meets OECD AI Principles?
   □ Complies with relevant regulations (EU AI Act, etc.)?
   □ Uses ISO/IEC 22989 standardized terminology?
   □ Documentation complete (model cards, datasheets)?
```

---

**Used By Articles**:
- AI Governance Frameworks: Building Your Organization's Approach
- [Future articles on AI policy, regulatory compliance, risk management]

**Reusable For**:
- AI governance articles
- Regulatory compliance articles
- Risk assessment articles
- Socio-technical systems articles
- Healthcare AI articles
- Use-case specific governance
