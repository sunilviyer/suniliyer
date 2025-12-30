# FTC Section 5 Compliance Framework Template

## Purpose
This template provides a systematic approach to ensuring AI systems comply with FTC Section 5's prohibition on unfair or deceptive trade practices, based on enforcement patterns and FTC guidance.

## When to Use This Template
- Before deploying any consumer-facing AI system
- When collecting data for AI training
- When making marketing claims about AI capabilities
- When assessing FTC enforcement risk
- When preparing for potential FTC investigation

## Three-Phase Compliance Framework

---

## Phase 1: Before AI Deployment

### 1.1 Claims Substantiation

**Requirement**: All AI capability claims must be truthful and backed by evidence

**Checklist:**
- [ ] Identify all marketing claims about AI (accuracy, fairness, capabilities)
- [ ] Document evidence supporting each claim
- [ ] Test claims on representative data (not cherry-picked examples)
- [ ] Verify claims remain accurate as AI system evolves
- [ ] Review claims with legal/compliance team

**Documentation Template:**

```markdown
## AI Claim Substantiation Record

**Claim**: [The specific marketing claim - e.g., "Our AI is 95% accurate"]

**Evidence**:
- Testing methodology: [Description of how tested]
- Test data: [Description of dataset used for testing]
- Sample size: [N =]
- Results: [Actual performance metrics]
- Date of testing: [When tested]
- Tested by: [Who conducted testing]

**Representative Data Verification**:
- [ ] Test data includes diverse demographics
- [ ] Test data reflects real-world usage conditions
- [ ] Test data not cherry-picked for favorable results

**Ongoing Validation**:
- Performance monitoring in production: [How monitored]
- Claim review frequency: [How often reviewed]
- Trigger for claim revision: [What would require updating claim]

**Approval**:
- Legal review: [Name, Date]
- Compliance approval: [Name, Date]
```

**Red Flags to Avoid**:
- "99% accurate" without rigorous testing
- "Eliminates bias" (impossible to guarantee)
- "AI-powered" as vague marketing term
- Claims that can't be independently verified

---

### 1.2 Discrimination Testing

**Requirement**: AI systems must be tested for discriminatory outcomes before deployment

**Checklist:**
- [ ] Define protected characteristics to test (race, gender, age, disability, etc.)
- [ ] Obtain representative test data across demographics
- [ ] Conduct disaggregated performance testing
- [ ] Calculate disparate impact ratios
- [ ] Perform statistical significance testing
- [ ] Document results and interpretation
- [ ] Implement mitigations for identified disparities
- [ ] Retest after mitigations
- [ ] Get legal review of testing results

**Testing Template:**

```markdown
## Discrimination Testing Report

**AI System**: [Name and purpose]
**Testing Date**: [Date]
**Tested By**: [Team/Individual]

### Test Methodology
- **Test dataset**: [Description, size, time period]
- **Ground truth**: [How correct answers determined]
- **Metrics**: [Accuracy, precision, recall, false positive/negative rates]
- **Statistical tests**: [Methods used to assess significance]

### Overall Performance
| Metric | Value | Benchmark |
|--------|-------|-----------|
| Accuracy | XX% | [Target] |
| Precision | XX% | [Target] |
| Recall | XX% | [Target] |
| False Positive Rate | XX% | [Target] |
| False Negative Rate | XX% | [Target] |

### Disaggregated Performance by Race/Ethnicity
| Group | Accuracy | FPR | FNR | Sample Size |
|-------|----------|-----|-----|-------------|
| White | XX% | XX% | XX% | N |
| Black/African American | XX% | XX% | XX% | N |
| Hispanic/Latino | XX% | XX% | XX% | N |
| Asian | XX% | XX% | XX% | N |
| Other/Multiracial | XX% | XX% | XX% | N |

**Largest disparity**: [X percentage points] between [Group A] and [Group B]
**Statistical significance**: [p-value, confidence interval]

### Disaggregated Performance by Gender
| Group | Accuracy | FPR | FNR | Sample Size |
|-------|----------|-----|-----|-------------|
| Male | XX% | XX% | XX% | N |
| Female | XX% | XX% | XX% | N |
| Non-binary/Other | XX% | XX% | XX% | N |

**Largest disparity**: [X percentage points] between [Group A] and [Group B]
**Statistical significance**: [p-value]

### Disaggregated Performance by Age
| Group | Accuracy | FPR | FNR | Sample Size |
|-------|----------|-----|-----|-------------|
| 18-25 | XX% | XX% | XX% | N |
| 26-40 | XX% | XX% | XX% | N |
| 41-60 | XX% | XX% | XX% | N |
| 61+ | XX% | XX% | XX% | N |

**Largest disparity**: [X percentage points] between [Group A] and [Group B]

### Findings Summary
- **No significant disparities** ✓ / **Disparities identified** ⚠
- **Disparities identified**: [Description of groups affected and magnitude]
- **Root cause analysis**: [Why disparities exist - training data, features, model architecture]

### Mitigation Strategy
1. [Mitigation approach 1 - e.g., "Rebalance training data"]
2. [Mitigation approach 2 - e.g., "Remove proxy variables for protected characteristics"]
3. [Mitigation approach 3 - e.g., "Implement fairness constraints"]

### Post-Mitigation Retesting
- Retesting date: [Date]
- Results: [Improved disparities by X percentage points]
- Residual disparities: [Remaining differences and justification]

### Deployment Recommendation
- [ ] **APPROVED** - No significant disparities or mitigated to acceptable levels
- [ ] **CONDITIONAL** - Deploy with monitoring and specified restrictions
- [ ] **REJECTED** - Disparities too large, do not deploy

**Approvals**:
- Technical review: [Name, Date]
- Legal review: [Name, Date]
- Compliance approval: [Name, Date]
```

**Acceptable Disparity Thresholds**:
- **No universal standard**, but consider:
  - EEOC 80% rule (if employment context)
  - Statistical significance at p < 0.05
  - Material harm to affected group
  - Business justification strength

**If Disparities Found**:
1. Document root cause
2. Implement technical mitigations
3. Consider if deployment justified despite residual disparity
4. Implement monitoring for drift
5. Prepare to explain to FTC if needed

---

### 1.3 Data Collection Review

**Requirement**: Training data must be collected properly with appropriate consent and disclosures

**Checklist:**
- [ ] Audit all training data sources
- [ ] Verify consent obtained for each data category
- [ ] Confirm data use aligns with privacy disclosures
- [ ] Check for COPPA compliance (if children potentially included)
- [ ] Review third-party data for legitimate sourcing
- [ ] Document data provenance
- [ ] Assess algorithmic disgorgement risk
- [ ] Get privacy/legal review

**Data Collection Audit Template:**

```markdown
## Training Data Collection Audit

**AI System**: [Name]
**Audit Date**: [Date]
**Audited By**: [Team/Individual]

### Data Source Inventory

| Data Source | Type | Collection Method | Volume | Date Range | Third-Party? |
|-------------|------|-------------------|--------|------------|--------------|
| [Source 1] | [Personal data, behavioral, etc.] | [How collected] | [N records] | [Start - End] | Yes/No |
| [Source 2] | | | | | |

### Consent Review

**For each data source:**

#### Source: [Name]

**Consent mechanism**:
- [ ] Explicit opt-in consent obtained
- [ ] Implied consent (disclosed in privacy policy)
- [ ] Legitimate interest basis (document justification)
- [ ] No consent obtained ⚠ [RISK]

**Consent Documentation**:
- Privacy policy version: [Link to archived version]
- Consent language: "[Exact text shown to users]"
- Date consent mechanism implemented: [Date]
- Consent storage: [Where consent records maintained]

**Purpose Alignment**:
- **Disclosed purpose**: [What privacy policy said data would be used for]
- **Actual use**: [How data actually used in AI training]
- **Alignment**: ✓ Aligned / ⚠ Misaligned

**If Misaligned**: [Describe discrepancy and risk]

#### COPPA Compliance (if applicable)

- **Age verification**: How ages verified: [Method]
- **Under-13 users**: [N or "None" or "Unknown" ⚠]
- **Parental consent**: If under-13 users, parental consent obtained: Yes/No
- **COPPA risk**: None / Low / Medium / High ⚠

**If COPPA risk identified**:
- Remediation plan: [Delete data, obtain consent retroactively, age-gate]
- Algorithmic disgorgement risk: [Could models need deletion?]

#### Third-Party Data Review

**For each third-party source:**

- **Vendor**: [Name]
- **Data obtained**: [What data purchased/accessed]
- **Vendor's collection method**: [How vendor collected it]
- **Vendor's consent**: [What consent vendor obtained]
- **Terms of use**: [Link to vendor's terms]
- **Permitted use**: [What vendor terms allow]
- **Our use**: [How we're using it]
- **Compliance**: ✓ Compliant / ⚠ Risk

**Red flags**:
- Vendor collected data deceptively
- Vendor violated platform terms to obtain data
- Our use exceeds vendor's permitted use
- Vendor can't document consent

### Overall Data Legitimacy Assessment

| Risk Category | Risk Level | Notes |
|---------------|------------|-------|
| Missing consent | None / Low / Medium / High | |
| Purpose misalignment | None / Low / Medium / High | |
| COPPA violations | None / Low / Medium / High | |
| Third-party issues | None / Low / Medium / High | |
| Deceptive collection | None / Low / Medium / High | |

### Algorithmic Disgorgement Risk

**Overall risk**: None / Low / Medium / High / Critical ⚠

**If Medium/High/Critical**:
- Which training data has legitimacy concerns: [List]
- Percentage of training data affected: [X%]
- Can model be retrained on legitimate data only: Yes / No / Unknown
- If retrained, expected performance impact: [Estimate]

### Remediation Plan (if needed)

1. [Action 1 - e.g., "Obtain retroactive consent from users"]
2. [Action 2 - e.g., "Delete data from users who didn't provide consent"]
3. [Action 3 - e.g., "Retrain model on legitimate data subset"]
4. [Action 4 - e.g., "Do not deploy current model"]

### Approvals

- Data privacy review: [Name, Date]
- Legal review: [Name, Date]
- **Deployment approved**: Yes / No / Conditional
```

---

### 1.4 Documentation Package

**Requirement**: Maintain comprehensive records of AI development and deployment decisions

**Essential Documentation:**
1. **Model Development Records**
   - Architecture decisions and rationale
   - Training data sources and characteristics
   - Hyperparameter choices and tuning methodology
   - Performance metrics from development/testing

2. **Testing and Validation**
   - Bias testing results (see template above)
   - Accuracy testing across use cases
   - Edge case testing
   - User acceptance testing

3. **Risk Assessments**
   - Identified risks (bias, privacy, accuracy, security)
   - Risk mitigation strategies
   - Residual risks and acceptance rationale

4. **Approval Records**
   - Technical review and approval
   - Legal review and sign-off
   - Privacy review
   - Executive approval for deployment

5. **Deployment Plan**
   - Rollout strategy (phased, full, A/B test)
   - Success metrics and monitoring plan
   - Incident response procedures
   - Rollback criteria

**Storage Requirements**:
- Centralized repository (not scattered across email/drives)
- Version control for evolving documents
- Retention for duration of AI system operation + 7 years
- Accessible for FTC investigation response

---

## Phase 2: During AI Operation

### 2.1 Continuous Monitoring

**Requirement**: Monitor AI performance and impacts during production use

**Monitoring Dashboard Template:**

```markdown
## AI System Monitoring Dashboard

**System**: [Name]
**Monitoring Period**: [Date range]
**Report Generated**: [Date]

### Performance Metrics

| Metric | Current | Baseline | Change | Trend | Status |
|--------|---------|----------|--------|-------|--------|
| Overall accuracy | XX% | XX% | +/-X% | ↑↓→ | ✓⚠⛔ |
| Precision | XX% | XX% | +/-X% | ↑↓→ | ✓⚠⛔ |
| Recall | XX% | XX% | +/-X% | ↑↓→ | ✓⚠⛔ |
| False positive rate | XX% | XX% | +/-X% | ↑↓→ | ✓⚠⛔ |
| False negative rate | XX% | XX% | +/-X% | ↑↓→ | ✓⚠⛔ |

**Status Legend**: ✓ Within acceptable range | ⚠ Approaching threshold | ⛔ Threshold exceeded

### Fairness Metrics (by demographic group)

**Accuracy Disparity Tracking**:
| Comparison | Disparity | Baseline | Change | Status |
|------------|-----------|----------|--------|--------|
| Max vs. Min across races | X.X% | X.X% | +/-X% | ✓⚠⛔ |
| Male vs. Female | X.X% | X.X% | +/-X% | ✓⚠⛔ |
| Youngest vs. Oldest age groups | X.X% | X.X% | +/-X% | ✓⚠⛔ |

**Alerts**:
- [ ] No alerts
- [ ] ⚠ Fairness metrics degrading
- [ ] ⛔ Fairness thresholds exceeded

### Consumer Complaints

| Complaint Type | Count | % of Total | Change from Last Period |
|----------------|-------|------------|-------------------------|
| Inaccurate results | XX | XX% | +/-XX |
| Perceived bias | XX | XX% | +/-XX |
| Privacy concerns | XX | XX% | +/-XX |
| Other | XX | XX% | +/-XX |
| **Total** | **XX** | **100%** | **+/-XX** |

**Complaint Pattern Analysis**:
- Demographic patterns: [Any groups over-represented in complaints?]
- Use case patterns: [Any scenarios generating disproportionate complaints?]
- Severity: [Any complaints indicating serious harm?]

**Alert Status**:
- [ ] No concerning patterns
- [ ] ⚠ Complaint volume increasing
- [ ] ⛔ Pattern indicates serious issue

### Incident Log

| Date | Incident Type | Severity | Description | Resolution | Status |
|------|---------------|----------|-------------|------------|--------|
| [Date] | [Bias/Error/Privacy/Other] | Low/Med/High | [Brief description] | [What was done] | Open/Closed |

**Open High-Severity Incidents**: [Count]

### Data Drift Detection

| Metric | Current | Baseline | Drift | Status |
|--------|---------|----------|-------|--------|
| Input data distribution | [Summary] | [Baseline] | X% | ✓⚠⛔ |
| Output distribution | [Summary] | [Baseline] | X% | ✓⚠⛔ |
| Prediction confidence | XX% | XX% | +/-X% | ✓⚠⛔ |

### Action Items

**Priority 1 (Immediate)**:
1. [Item requiring immediate attention]

**Priority 2 (Within 30 days)**:
1. [Item for near-term resolution]

**Priority 3 (Monitoring)**:
1. [Item to continue monitoring]

### Next Review Date: [Date]
```

**Monitoring Frequency**:
- **Daily**: Automated performance metrics, error logs
- **Weekly**: Complaint review, incident assessment
- **Monthly**: Fairness metrics review, data drift analysis
- **Quarterly**: Comprehensive review with legal/compliance team
- **Annually**: Full re-validation including bias testing

---

### 2.2 Complaint Response Process

**Requirement**: Systematic handling of consumer complaints about AI systems

**Complaint Intake Template:**

```markdown
## AI System Complaint Record

**Complaint ID**: [Auto-generated]
**Date Received**: [Date]
**Received Via**: Email / Phone / Web form / Social media / Other

### Consumer Information
- Name: [If provided]
- Contact: [Email/phone if provided]
- Account ID: [If applicable]

### Complaint Details
**Complaint Type**: [ ] Inaccuracy [ ] Bias [ ] Privacy [ ] Other: ___
**Description**: [Consumer's description of issue]

**AI System Involved**: [Which AI system]
**Decision/Output Complained About**: [Specific AI output]
**Harm Alleged**: [What consumer says was the impact]

### Initial Assessment
**Severity**: Low / Medium / High / Critical
**Category**: Isolated incident / Potential pattern / Systemic issue

**Criteria**:
- **Low**: Minor inconvenience, no harm
- **Medium**: Moderate inconvenience or potential for harm
- **High**: Actual harm occurred or serious potential for harm
- **Critical**: Severe harm, safety risk, or legal violation

### Investigation
**Assigned To**: [Name]
**Investigation Date**: [Date]

**Steps Taken**:
1. [Reproduced issue: Yes/No]
2. [Reviewed AI logic for this case]
3. [Checked if demographic factor]
4. [Examined similar cases]

**Findings**:
- Root cause: [What caused the complained-of outcome]
- AI error: Yes / No
- If error, type: [Logic error, training data issue, bias, etc.]
- Affected population: [Just this user / Broader group]

### Resolution
**Date**: [Date]
**Resolution**: [What was done]

**Consumer Communication**: [How complainant was informed]

**System Changes**:
- [ ] No changes needed
- [ ] Monitoring enhanced
- [ ] Model updated
- [ ] Process changed
- [ ] Feature disabled

**Prevention**:
- Will this prevent recurrence: Yes / Partially / No
- Additional actions needed: [List]

### Reporting
- [ ] Complaint logged in tracking system
- [ ] Reported to legal/compliance (if High/Critical)
- [ ] Included in monthly complaints report
- [ ] Flagged for FTC disclosure (if required)

### Follow-Up
**Follow-up date**: [30 days after resolution]
**Follow-up outcome**: [Confirmed issue resolved]
```

**Escalation Triggers**:
- Any complaint alleging discrimination based on protected characteristic
- Any complaint alleging harm to children
- Any complaint indicating serious privacy violation
- Pattern of similar complaints (>3 in 30 days)
- Media inquiry related to complaint
- Potential legal violation identified

---

### 2.3 Disclosure Updates

**Requirement**: Keep consumer-facing information current and accurate

**Disclosure Review Checklist** (Quarterly):

```markdown
## AI System Disclosure Review

**Review Date**: [Date]
**Reviewer**: [Name/Team]
**AI System**: [Name]

### Current Disclosures

**Location 1**: [Website privacy policy]
- Last updated: [Date]
- Current language: "[Exact text]"
- Still accurate: Yes / No / Partially

**Location 2**: [Terms of service]
- Last updated: [Date]
- Current language: "[Exact text]"
- Still accurate: Yes / No / Partially

**Location 3**: [Product marketing]
- Last updated: [Date]
- Current claims: "[Summary]"
- Still accurate: Yes / No / Partially

### Accuracy Assessment

**AI Capabilities**:
- Disclosed capabilities: [What we say AI can do]
- Actual capabilities: [What AI actually does]
- Discrepancy: None / Minor / Significant ⚠

**AI Limitations**:
- Disclosed limitations: [What we say AI cannot do or limitations]
- Actual limitations: [Actual limitations discovered in operation]
- Missing disclosures: [Limitations not currently disclosed] ⚠

**Performance Claims**:
- Disclosed accuracy: [What we claim]
- Actual accuracy: [Current measured performance]
- Discrepancy: None / Minor / Significant ⚠

### Required Updates

**High Priority** (Update within 7 days):
1. [Update needed due to material discrepancy]

**Medium Priority** (Update within 30 days):
1. [Update needed for completeness/clarity]

**Low Priority** (Next scheduled update):
1. [Minor clarifications]

### Approval
- Content updated: [Date]
- Legal review: [Name, Date]
- Published: [Date]
```

**Update Triggers**:
- Material change in AI capabilities
- Discovery of new limitation
- Change in accuracy/performance
- New use case added
- Incident revealing undisclosed risk

---

## Phase 3: FTC Investigation Preparedness

### 3.1 Investigation Response Plan

**If FTC Investigation Initiated:**

**DO**:
- ✓ Notify legal counsel immediately (preferably FTC-experienced attorney)
- ✓ Preserve all relevant documents (litigation hold)
- ✓ Designate single point of contact for FTC communications
- ✓ Cooperate with document requests (with legal guidance)
- ✓ Respond to Civil Investigative Demands (CIDs) timely
- ✓ Be truthful in all communications

**DON'T**:
- ✗ Delete documents or communications
- ✗ Communicate with FTC without legal counsel present
- ✗ Make statements that could be interpreted as admissions
- ✗ Miss deadlines for responses
- ✗ Provide incomplete or misleading information

**Investigation Response Team**:
- **Legal Lead**: [External FTC counsel]
- **Company Legal**: [In-house counsel]
- **Technical Lead**: [Can explain AI system]
- **Compliance**: [Can provide documentation]
- **Communications**: [Media strategy if public]

---

### 3.2 Document Preservation

**Litigation Hold Notice Template:**

```
TO: [All employees who worked on AI system]
FROM: [Legal Department]
RE: Document Preservation - FTC Investigation
DATE: [Date]

The Federal Trade Commission has initiated an investigation regarding [AI system].
You are required to preserve ALL documents related to this matter.

PRESERVE (do not delete, destroy, or alter):
- All emails, messages, chats mentioning [AI system]
- All documents related to development, testing, deployment
- All consumer complaints
- All meeting notes, presentations, reports
- All versions of code, models, data
- All communications with third-parties about [AI system]

This includes documents on:
- Company email and drives
- Personal devices used for work
- Cloud storage (Dropbox, Google Drive, etc.)
- Messaging apps (Slack, Teams, etc.)

CONTACT [Legal contact] immediately if you have questions or if you accidentally
delete any relevant documents.

This preservation requirement remains in effect until further notice.
```

---

### 3.3 Negotiation Strategy

**Settlement Considerations:**

**Penalties**:
- **Size based on**:
  - Severity of violation
  - Number of consumers affected
  - Intent (negligence vs. knowingly)
  - Cooperation during investigation
  - Prior violations
- **Negotiation**: Limited flexibility, but cooperation helps

**Algorithmic Disgorgement**:
- **If data collection was improper**: Likely non-negotiable
- **Partial disgorgement**: May negotiate which models if some data legitimate
- **Retaining alternatives**: Argue model can be retrained on legitimate data

**Compliance Program**:
- **FTC will require**: Comprehensive AI governance
- **Negotiable elements**: Specific structure, reporting frequency
- **Non-negotiable**: Independent assessments, ongoing oversight

**Oversight Duration**:
- **Typical**: 10-20 years
- **Somewhat negotiable**: If first violation, may get shorter period
- **Non-negotiable**: If consent order violation

**Publicity**:
- **FTC will announce**: Public press release
- **Prepare**: Communications strategy for reputation management

---

## Ongoing Compliance Maintenance

### Annual Compliance Review

```markdown
## Annual FTC Section 5 Compliance Review

**Year**: [Year]
**Review Date**: [Date]
**Reviewers**: [Legal, Compliance, Technical leads]

### AI Systems Inventory
| System | Risk Level | Last Bias Test | Last Audit | Status |
|--------|------------|----------------|------------|--------|
| [System 1] | High/Med/Low | [Date] | [Date] | ✓⚠⛔ |
| [System 2] | | | | |

### Compliance Metrics
- **Claims substantiation**: [X] systems reviewed, [X] claims updated
- **Bias testing**: [X] systems tested, [X] disparities identified, [X] mitigated
- **Consumer complaints**: [X] total, [X] serious, [X] resolved
- **Incidents**: [X] total, [X] high-severity, [X] resolved
- **Documentation**: [X] systems fully documented, [X] needing updates

### Identified Risks
1. [Risk 1 - description and mitigation plan]
2. [Risk 2 - description and mitigation plan]

### Improvement Initiatives
1. [Initiative to strengthen compliance]
2. [Initiative to reduce risk]

### Approval
- Legal sign-off: [Name, Date]
- Compliance approval: [Name, Date]
- Executive acknowledgment: [Name, Date]
```

---

## Related Resources
- FTC Section 5 of the FTC Act: https://www.ftc.gov/enforcement/statutes/federal-trade-commission-act
- FTC Business Blog (AI guidance): https://www.ftc.gov/business-guidance/blog
- FTC AI enforcement actions: https://www.ftc.gov/news-events/topics/technology/artificial-intelligence

## Version
Template Version 1.0 | Created: 2025-12-24 | Source: "Consumer Protection and AI: FTC Section 5 Explained"
