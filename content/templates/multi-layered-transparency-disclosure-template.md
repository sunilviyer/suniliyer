# Multi-Layered Transparency Disclosure Template

## Purpose
This template provides a structured approach to implementing transparency at all stages of AI interaction, ensuring users have appropriate information at each touchpoint.

## When to Use This Template
- Implementing transparency for any user-facing AI system
- Ensuring regulatory compliance (GDPR, EU AI Act, state laws)
- Building user trust through progressive disclosure
- Designing communication strategies for AI deployment

## Four Layers of Transparency

### Layer 1: Pre-Use Disclosure (Before Interaction)

**Purpose**: Inform users before they invest time or share data

**Required Information:**
- [ ] AI involvement clearly stated
- [ ] Purpose of AI system explained
- [ ] Data collection described (what, why, how)
- [ ] Alternatives to AI processing offered (if applicable)
- [ ] User rights explained
- [ ] Link to detailed information provided

**Template:**
```
[ORGANIZATION] uses artificial intelligence to [PURPOSE].

What the AI does:
- [Primary function]
- [Secondary functions]
- [What AI does NOT do]

Information we collect:
- [Data point 1] - used for [purpose]
- [Data point 2] - used for [purpose]
- We do not collect or use: [Excluded data types]

Your rights:
- Request human review of AI decisions
- Opt out of AI processing (where applicable)
- Access your data and AI-generated scores
- [Additional jurisdiction-specific rights]

[Learn more: Link to detailed documentation]
[Privacy Policy: Link]
[Contact us: Link/Email]
```

**Communication Channels:**
- Website landing page
- App splash screen
- Email before first interaction
- Terms of service
- Privacy policy
- FAQ section

**Compliance Mapping:**
- GDPR Article 13-14: Disclosure at data collection ✓
- EU AI Act Article 13: Informing of high-risk AI use ✓
- NYC Local Law 144: Candidate notification ✓
- Colorado AI Act: Pre-use disclosure ✓

---

### Layer 2: Real-Time Transparency (During Interaction)

**Purpose**: Maintain awareness during active AI engagement

**Required Information:**
- [ ] Clear AI vs. human distinction
- [ ] Confidence levels (when appropriate)
- [ ] System limitations affecting user
- [ ] Real-time data processing visibility
- [ ] Unexpected behavior explanations

**Template:**
```
[AI Indicator Icon] You are interacting with an AI system

Current status: [Processing | Analyzing | Generating response]

Data being used:
- [Currently accessed data sources]

Confidence: [High | Medium | Low] [Optional: Percentage if appropriate]

Limitations for this interaction:
- [Relevant limitation 1]
- [Relevant limitation 2]

[Switch to human agent] [If applicable]
```

**Implementation Strategies:**

**Chatbots/Conversational AI:**
- Persistent AI indicator in interface
- "Typing" indicator labeled as "AI is composing response"
- Low-confidence warnings: "I'm not certain about this; consider verifying"
- Escalation option: "Speak with a human agent"

**Decision Support Systems:**
- Real-time status: "AI is analyzing your [application | request | data]"
- Progress indicators when processing time is long
- Data source visibility: "Accessing [credit bureau | database | records]"

**Generative AI:**
- Clear labeling: "AI-generated content"
- Confidence indicators for factual claims
- "Hallucination warnings" for uncertain outputs
- Version/model identification

**Compliance Mapping:**
- EU AI Act: AI must disclose its nature ✓
- California AB 2013: Bots must disclose ✓
- Best practice for transparency ✓

---

### Layer 3: Post-Decision Explanation (After Outcomes)

**Purpose**: Help users understand what happened and what they can do

**Required Information:**
- [ ] Clear decision outcome
- [ ] Key influencing factors (ranked)
- [ ] Actionable information for improvement
- [ ] Accuracy and confidence metrics
- [ ] Human review process access
- [ ] Appeal/challenge mechanism

**Template:**
```
## Decision: [OUTCOME]

### What was decided:
[Clear, unambiguous statement of the decision or recommendation]

### Key factors that influenced this decision:
1. [Primary factor with explanation]
   - Expected: [Requirement or benchmark]
   - Observed: [What was found in your case]
   - Impact: [How this affected the decision]

2. [Secondary factor with explanation]
   - Expected: [Requirement]
   - Observed: [Actual]
   - Impact: [Effect]

3. [Tertiary factor]
   - Expected: [Requirement]
   - Observed: [Actual]
   - Impact: [Effect]

### To improve future outcomes:
- [Actionable recommendation 1]
- [Actionable recommendation 2]
- [Actionable recommendation 3]

### About this assessment:
- System accuracy: [Overall metric]
- Confidence in this decision: [Percentage or High/Medium/Low]
- Human involvement: [Reviewed by | Solely AI | Hybrid approach]

### Your options:
- **Request human review**: [Link/Process]
  Deadline: [Timeframe]
- **Provide additional information**: [Link/Process]
- **Appeal this decision**: [Link/Process]
  Deadline: [Timeframe]

### Questions?
Contact: [Email | Phone | Chat]

---

This decision was made with AI assistance [and reviewed by our team].

AI System: [Model name/version] | Decision Date: [Date]
```

**Domain-Specific Adaptations:**

**Credit Decisions (FCRA/ECOA Compliance):**
```
Adverse Action Notice

We are unable to approve your credit application.

Principal reasons:
1. Credit score: 580 (Minimum required: 650)
2. Debt-to-income ratio: 52% (Maximum allowed: 43%)
3. Credit history: 1 year (Minimum preferred: 2 years)

This information was obtained from: [Credit bureau name]
Your credit score: 580 (Range: 300-850)

To improve your creditworthiness:
- Reduce outstanding debt to lower debt-to-income ratio
- Make on-time payments to improve credit score
- Build credit history over time

Your rights under federal law:
- Request free credit report: [Link to AnnualCreditReport.com]
- Dispute inaccurate information with credit bureau
- Add statement to your credit file

Reapply when you meet our criteria.
Contact: [Phone/Email]
```

**Hiring Decisions:**
```
Application Status Update

We have decided not to advance your application for [Position] at this time.

Our assessment considered:
1. Experience: Position requires 5+ years in [field]; application shows 2 years
2. Technical skills: Required [Skill A, Skill B]; application shows [Skill C, Skill D]
3. Education: Preferred [Degree level/field]; application shows [Actual credentials]

This assessment was made using AI-assisted screening reviewed by our hiring team.

To strengthen future applications:
- Gain additional experience in [specific area]
- Develop skills in [specific technologies]
- Consider positions requiring [your experience level]

We maintain your application for 6 months for other suitable openings.

Request human review: [Link] (Deadline: 30 days)
Contact our recruitment team: [Email]
```

**Healthcare:**
```
Imaging Results Summary

AI-Assisted Analysis: [Finding]
Reviewed by: Dr. [Name], [Credentials]

The AI system identified:
- [Primary finding] with [confidence level]
- [Supporting findings]

Final diagnosis: [Diagnosis - made by physician]

The AI analysis highlighted [specific area] for closer examination, which
Dr. [Name] reviewed and confirmed. This AI assistance helps ensure thorough
review and may catch details that could otherwise be missed.

Your radiologist made the final medical determination based on:
- AI analysis
- Medical imaging expertise
- Your clinical history
- Additional test results

Questions about AI in your care? [Contact info]
```

**Compliance Mapping:**
- GDPR Article 22: Right to explanation ✓
- FCRA Section 615: Adverse action notice ✓
- ECOA: Reasons for credit denial ✓
- NYC Local Law 144: Candidate notification ✓
- Colorado AI Act: Explanation rights ✓

---

### Layer 4: System-Level Documentation (General Information)

**Purpose**: Enable oversight, audit, and informed public understanding

**Required Information:**
- [ ] System description and capabilities
- [ ] Training data sources and methods
- [ ] Performance metrics (overall and by group)
- [ ] Known biases and limitations
- [ ] Governance and oversight
- [ ] Update history and change log
- [ ] Contact for questions and concerns

**Template:**
```markdown
# AI System Documentation: [System Name]

*Last updated: [Date] | Version: [X.X]*

## System Overview

### What This System Does
[2-3 sentence plain language description of the AI system's purpose and function]

### Who Uses This System
- **Primary users**: [User type - e.g., "Our customer service team"]
- **Affected individuals**: [Who is impacted - e.g., "Customers contacting support"]
- **Decision authority**: [Who makes final decisions - e.g., "AI provides recommendations; humans decide"]

### Classification
- **Risk level**: [High | Limited | Minimal] (per EU AI Act)
- **Regulatory scope**: [Applicable regulations]
- **Automated decision-making**: [Yes - fully automated | Partially - human oversight | No - advisory only]

## How It Works

### AI Approach
- **Technology type**: [e.g., "Large Language Model" | "Convolutional Neural Network" | "Gradient Boosting Decision Trees"]
- **Input data**: [What information the AI analyzes]
- **Output**: [What the AI produces - recommendations, classifications, scores, etc.]
- **Decision factors**: [Top 5-7 factors the AI considers, in plain language]

### Training Information

**Training data sources**:
- [Source 1]: [Description, size, time period]
- [Source 2]: [Description, size, time period]
- Total training examples: [Number]
- Collection period: [Date range]

**Data demographics** (if applicable):
| Demographic | Training Data % | User Population % |
|-------------|----------------|-------------------|
| [Group 1] | XX% | XX% |
| [Group 2] | XX% | XX% |
[Note any under or over-represented groups]

**Known data limitations**:
- [Limitation 1 - e.g., "Training data primarily from urban areas"]
- [Limitation 2 - e.g., "Limited representation of [specific group]"]
- [Limitation 3]

## Performance

### Overall Performance Metrics
- **Accuracy**: XX% (Correctly classified XX out of 100 cases)
- **Precision**: XX% (When AI says "yes," correct XX% of the time)
- **Recall**: XX% (Detects XX out of 100 true cases)
- [Additional relevant metrics]

Measured on: [Test set description] (N=[size], Date=[period])

### Performance by Demographics
| Group | Accuracy | Precision | Recall | Sample Size |
|-------|----------|-----------|--------|-------------|
| [Demographic 1] | XX% | XX% | XX% | N |
| [Demographic 2] | XX% | XX% | XX% | N |
| [Demographic 3] | XX% | XX% | XX% | N |

**Performance gap analysis**:
- Largest accuracy gap: [X percentage points] between [Group A] and [Group B]
- Statistical significance: [Yes/No, p-value if applicable]
- Remediation efforts: [What we're doing to address gaps]

### Real-World Performance (if available)
- **Deployment performance**: [Metrics from actual use]
- **Comparison to validation**: [Any performance drift noted]
- **Monitoring frequency**: [How often we check performance]

### Known Limitations
1. [Limitation 1 - e.g., "Lower accuracy for edge cases representing <5% of inputs"]
2. [Limitation 2 - e.g., "Not validated for [specific conditions or populations]"]
3. [Limitation 3 - e.g., "Performance degrades when [specific condition]"]

## Governance

### Responsible Parties
- **System owner**: [Name/Title]
- **Technical lead**: [Name/Title]
- **Compliance officer**: [Name/Title]
- **Oversight committee**: [Committee name]

### Review and Approval
- **Development approval**: [Committee/Role] on [Date]
- **Deployment approval**: [Committee/Role] on [Date]
- **Last governance review**: [Date]
- **Next scheduled review**: [Date]

### Monitoring and Auditing
- **Performance monitoring**: [Frequency and method]
- **Bias monitoring**: [Frequency and method]
- **Human review rate**: [Percentage of decisions reviewed]
- **Escalation process**: [How issues are flagged and addressed]

**Recent audits**:
- [Date]: [Audit type] - [Outcome/Findings]
- [Date]: [Audit type] - [Outcome/Findings]

### User Rights and Recourse
- **Human review**: [Available/Not applicable] - [How to request]
- **Appeal process**: [Procedure and timeline]
- **Opt-out option**: [Available/Not applicable] - [How to exercise]
- **Data access**: [How users access their data and AI-generated information]

### Incident Reporting
- **Incidents tracked**: [Types of incidents logged]
- **Reporting mechanism**: [Email/form/hotline]
- **Incident response SLA**: [Timeframe for addressing reported issues]

## Version History and Updates

### Current Version: [X.X] (Deployed: [Date])
[Description of current version capabilities and any significant changes from previous]

### Update History
| Version | Date | Changes | Impact on Users |
|---------|------|---------|-----------------|
| [X.X] | [Date] | [Major changes] | [How users affected] |
| [X.X] | [Date] | [Major changes] | [How users affected] |
| [X.X] | [Date] | Initial deployment | N/A |

### Planned Updates
- [Upcoming change 1] - Expected: [Timeframe]
- [Upcoming change 2] - Expected: [Timeframe]

**How users are notified of changes**:
- [Notification method 1 - e.g., "Email to all affected users"]
- [Notification method 2 - e.g., "In-app notification"]
- [Advance notice period - e.g., "30 days before significant changes"]

## Transparency and Explanations

### Individual Explanations
- **Available**: [Yes/No]
- **Format**: [How explanations are provided - email, interface, API]
- **Content**: [What explanations include - key factors, counterfactuals, etc.]
- **Request process**: [How users request explanations]

### Explanation Techniques Used
- [ ] Feature attribution (SHAP/LIME)
- [ ] Counterfactual explanations
- [ ] Example-based explanations
- [ ] Rule-based explanations
- [ ] Natural language summaries
- [Other - specify]

### Documentation Accessibility
- **Languages available**: [List]
- **Accessibility features**: [Screen reader compatible, plain language summary, etc.]
- **Formats**: [Web, PDF, API, etc.]

## Contact and Support

### Questions About AI Decisions
- **Email**: [Address]
- **Phone**: [Number]
- **Hours**: [Availability]
- **Response time**: [SLA]

### Technical Documentation Requests
- **For regulators**: [Contact]
- **For researchers**: [Contact and process]
- **For third-party auditors**: [Contact and process]

### Concerns or Complaints
- **Escalation process**: [Procedure]
- **External oversight**: [Regulator contact if applicable]

## Regulatory and Compliance Information

### Applicable Regulations
- [Regulation 1 - e.g., "EU AI Act - High-Risk AI System"]
- [Regulation 2 - e.g., "GDPR Article 22"]
- [Regulation 3 - e.g., "State of [X] AI regulation"]

### Compliance Documentation
- [Document type 1 - e.g., "DPIA completed [Date]"]
- [Document type 2 - e.g., "Conformity assessment [Date]"]
- [Audit reports - availability]

### Certifications
- [Certification 1 - if applicable]
- [Certification 2 - if applicable]

---

*This documentation is updated [frequency] and is current as of [date].*

*For questions about this AI system, contact [email/phone].*
```

**Publication Channels:**
- Dedicated webpage (/ai-transparency or /ai-systems)
- PDF download
- API endpoint (for programmatic access)
- Physical locations (where required)
- Regulatory portals (where required)

**Update Process:**
1. System changes trigger documentation review
2. Technical team updates metrics and performance data
3. Compliance team reviews regulatory requirements
4. Plain language review for comprehension
5. Publication with version control
6. Notification to affected users (for significant changes)

**Compliance Mapping:**
- EU AI Act Article 13: Technical documentation ✓
- GDPR Article 13-14: Processing information ✓
- NYC Local Law 144: Bias audit publication ✓
- ISO 42001: AI management system documentation ✓

---

## Implementation Guide

### Phase 1: Planning (Weeks 1-2)
- [ ] Identify all AI touchpoints in user journey
- [ ] Map current disclosures to four layers
- [ ] Conduct gap analysis
- [ ] Define compliance requirements
- [ ] Assign responsibilities for each layer

### Phase 2: Content Creation (Weeks 3-6)
- [ ] Draft pre-use disclosure content
- [ ] Design real-time transparency interfaces
- [ ] Create post-decision explanation templates
- [ ] Compile system-level documentation
- [ ] Legal review of all content
- [ ] Plain language review

### Phase 3: Technical Implementation (Weeks 7-12)
- [ ] Implement pre-use disclosure in interfaces
- [ ] Build real-time transparency indicators
- [ ] Develop explanation generation system
- [ ] Publish system documentation
- [ ] Create logging for audit trail
- [ ] Set up monitoring dashboards

### Phase 4: Testing (Weeks 13-14)
- [ ] Internal review with cross-functional team
- [ ] User testing for comprehension
- [ ] Accessibility testing
- [ ] Compliance verification
- [ ] Load testing for explanation systems

### Phase 5: Launch and Monitor (Week 15+)
- [ ] Phased rollout
- [ ] User feedback collection
- [ ] Monitoring of clarity metrics
- [ ] Iterative improvements
- [ ] Regular compliance audits

## Measuring Success

### Comprehension Metrics
- **User understanding**: "Do you understand when AI is involved?" (Target: >80% yes)
- **Explanation clarity**: "Were the reasons for the decision clear?" (Target: >75% yes)
- **Rights awareness**: "Do you know how to request human review?" (Target: >70% yes)

### Engagement Metrics
- **Disclosure viewing**: % users who access detailed information
- **Explanation requests**: # of post-decision explanation requests
- **Human review requests**: # and % of AI decisions escalated
- **Appeal usage**: # and % of decisions appealed

### Compliance Metrics
- **Coverage**: % of AI touchpoints with proper disclosure (Target: 100%)
- **Timeliness**: Disclosures provided before/during/after as required (Target: 100%)
- **Accuracy**: Explanations match actual AI logic (Target: 100%)
- **Accessibility**: Information available in required formats (Target: 100%)

### Quality Metrics
- **Support inquiries**: # of questions about AI (decreasing over time indicates clarity)
- **Complaints**: # of complaints about lack of transparency (Target: Near zero)
- **Trust scores**: User trust in AI fairness (Measured via surveys)
- **Regulatory feedback**: Feedback from authorities on disclosure adequacy

## Common Pitfalls and How to Avoid Them

### Pitfall 1: Burying Disclosure in Legal Text
**Problem**: Users don't read 50-page terms of service
**Solution**: Separate, prominent disclosure with plain language; link to legal details

### Pitfall 2: Technical Jargon in Explanations
**Problem**: "Feature vector X contributed 0.23 to logit" meaningless to users
**Solution**: User testing to ensure comprehension; plain language rewrites

### Pitfall 3: One-Size-Fits-All Explanations
**Problem**: Same detail level for all users (experts and novices)
**Solution**: Progressive disclosure - summary first, details available

### Pitfall 4: Static Documentation
**Problem**: Outdated information when AI system changes
**Solution**: Automated documentation updates tied to deployment process

### Pitfall 5: Theoretical Rights Without Practical Access
**Problem**: "Request human review at [email]" but no one responds
**Solution**: Functional processes with SLAs, monitoring, and accountability

### Pitfall 6: Overwhelming Information
**Problem**: Too much transparency creating cognitive overload
**Solution**: Layered approach - right information at right time

### Pitfall 7: Transparency Theater
**Problem**: Disclosure that doesn't actually inform (vague, generic)
**Solution**: Specific, actionable information; user testing for usefulness

## Related Concepts
- Transparency
- Explainability
- Model cards
- Datasheets for datasets
- GDPR Article 13-14
- GDPR Article 22
- EU AI Act Article 13
- NYC Local Law 144
- Colorado AI Act
- Progressive disclosure
- Plain language
- Feature attribution (SHAP, LIME)
- Counterfactual explanations

## Additional Resources
- Google Model Cards: https://modelcards.withgoogle.com/
- Datasheets for Datasets: https://arxiv.org/abs/1803.09010
- EU AI Act Text: https://artificialintelligenceact.eu/
- GDPR Article 22 Guidance: [Data protection authority guidance]
- SHAP Documentation: https://shap.readthedocs.io/
- LIME Documentation: https://github.com/marcotcr/lime

## Template Version
Version 1.0 | Created: 2025-12-24 | Source: "AI Transparency: What Users Deserve to Know"
