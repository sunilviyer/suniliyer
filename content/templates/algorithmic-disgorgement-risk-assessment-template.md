# Algorithmic Disgorgement Risk Assessment Template

## Purpose
This template helps organizations assess the risk that the FTC could require deletion of AI models under its "algorithmic disgorgement" remedy due to improper data collection. This assessment should be completed before significant AI development investment.

## When to Use This Template
- Before beginning major AI model training
- When acquiring third-party datasets for training
- When inheriting AI systems through acquisition
- Before deploying AI systems in high-stakes contexts
- During FTC investigation response planning

## What is Algorithmic Disgorgement?

**Definition**: FTC remedy requiring companies to delete not just improperly collected data, but AI models and algorithms trained on that data.

**Legal Basis**: FTC Section 5 authority + equitable remedy principles ("fruit of the poisonous tree")

**When Applied**:
- Data collected in violation of consumer protection laws
- Data obtained through deceptive practices
- COPPA violations (children's data without parental consent)
- Privacy policy violations (using data beyond disclosed purposes)
- Consent violations (using data without required consent)

**Precedent Cases**:
- Weight Watchers/Kurbo (2022): $1.5M penalty + model deletion for COPPA violations
- Everalbum (2021): Model deletion for deceptive facial recognition data use
- Future cases likely as remedy becomes more common

---

## Risk Assessment Framework

### Step 1: Training Data Inventory

**Objective**: Catalog all data sources used to train AI models

```markdown
## Training Data Inventory

**AI Model**: [Model name/identifier]
**Model Purpose**: [What the model does]
**Training Date**: [When trained]
**Business Value**: [Criticality - Low/Medium/High/Critical]

### Data Source Catalog

| Source ID | Data Type | Source | Collection Date | Volume | % of Training Data |
|-----------|-----------|--------|-----------------|-----------|-------------------|
| DS-001 | [Personal data type] | [Origin] | [Date range] | [N records] | X% |
| DS-002 | | | | | |
| DS-003 | | | | | |

**Total Data Sources**: [N]
**Total Training Records**: [N]
```

---

### Step 2: Data Legitimacy Assessment

**For each data source, assess legitimacy across six risk dimensions:**

#### Dimension 1: Consent

```markdown
### Consent Assessment: [Source ID]

**Consent Mechanism**:
- [ ] Explicit opt-in consent obtained
- [ ] Implied consent (disclosed in privacy policy/terms)
- [ ] Legitimate interest claimed (no consent)
- [ ] No consent mechanism ⚠

**Consent Documentation**:
- **When implemented**: [Date]
- **Consent language**: "[Exact text presented to users]"
- **Where disclosed**: [Privacy policy URL, version]
- **Consent storage**: [Where consent records maintained]
- **Consent verification**: Can prove consent for [X%] of records

**Quality of Consent**:
- [ ] **Clear and conspicuous**: Disclosure easy to find and understand
- [ ] **Specific**: Disclosed AI training use specifically
- [ ] **Affirmative**: Required active user action
- [ ] **Documented**: Consent records maintained

**Consent Weaknesses**:
- [ ] Buried in fine print
- [ ] Vague language ("improve our services")
- [ ] Pre-checked boxes
- [ ] Added retroactively (data collected before consent mechanism)
- [ ] Cannot verify consent for all records

**Risk Level**: ✓ Low | ⚠ Medium | ⛔ High

**If Medium/High, explain**: [What makes consent questionable]
```

---

#### Dimension 2: Purpose Limitation

```markdown
### Purpose Limitation Assessment: [Source ID]

**Disclosed Purpose** (what privacy policy/terms said):
"[Exact language from disclosure at time of collection]"

**Actual Use** (how data is being used):
"[How data is actually used in AI training]"

**Alignment Analysis**:
- [ ] ✓ **Perfect alignment**: Disclosed "AI training" or equivalently specific purpose
- [ ] ⚠ **Reasonably aligned**: Disclosed "improve services" and AI training reasonably included
- [ ] ⛔ **Misaligned**: AI training not contemplated by disclosed purpose

**Examples of Misalignment**:
- Collected for "account security," used for marketing AI
- Collected for "service delivery," used for entirely different product
- Collected under old privacy policy that didn't mention AI

**Retroactive Consent**:
- If misaligned, was retroactive consent obtained? Yes / No / Partial
- If yes, method: [Re-consent campaign, updated terms with continued use = consent, etc.]
- If yes, success rate: [X% of affected users consented]

**Risk Level**: ✓ Low | ⚠ Medium | ⛔ High

**If Medium/High, explain**: [Nature of misalignment and why problematic]
```

---

#### Dimension 3: COPPA Compliance (if applicable)

```markdown
### COPPA Compliance Assessment: [Source ID]

**Child Users Potential**:
- [ ] Service clearly not directed at children (e.g., business SaaS)
- [ ] Service may appeal to some children but not directed at them
- [ ] Service directed at children or mixed audience

**If children potential:**

**Age Verification**:
- [ ] Neutral age screen implemented
- [ ] Age gate before data collection
- [ ] No age verification ⚠

**Known Under-13 Users**:
- Count: [N or "Unknown" ⚠]
- Percentage of dataset: [X%]

**Parental Consent**:
- [ ] Verifiable parental consent obtained for all under-13 users
- [ ] Partial consent (X% of under-13 users)
- [ ] No parental consent obtained ⚠

**Consent Method** (if applicable):
- [ ] Email confirmation from parent
- [ ] Parent credit card verification
- [ ] Government ID verification
- [ ] Video conference with parent
- [ ] Other: ___________

**Special Data from Children**:
- [ ] Collected precise geolocation from children ⚠
- [ ] Collected photos/videos of children ⚠
- [ ] Collected biometric data from children ⚠
- [ ] Collected persistent identifiers for behavioral advertising ⚠

**COPPA Risk Level**: N/A | ✓ Low | ⚠ Medium | ⛔ High | ⛔ **Critical**

**If Medium/High/Critical**: [Explain COPPA violation and remediation options]

**Note**: COPPA violations have resulted in algorithmic disgorgement in all enforcement actions to date.
```

---

#### Dimension 4: Deceptive Collection

```markdown
### Deceptive Collection Assessment: [Source ID]

**Collection Method**:
- [ ] Directly from users (they provided it)
- [ ] Scraped from public sources
- [ ] Purchased from data broker
- [ ] Obtained from third-party app/platform
- [ ] Collected via tracking/analytics
- [ ] Other: ___________

**User Awareness**:
- [ ] Users clearly aware data being collected
- [ ] Users potentially unaware (background collection)
- [ ] Users explicitly misled about collection ⚠

**Dark Patterns**:
- [ ] None
- [ ] Confusing consent flow
- [ ] Hidden data collection
- [ ] Misleading language
- [ ] Forced disclosure (must share to use service when not necessary)

**Misrepresentation**:
- [ ] No misrepresentations
- [ ] Claimed data wouldn't be collected when it was
- [ ] Claimed data would be deleted but wasn't
- [ ] Claimed data wouldn't be shared but was
- [ ] Other deception: ___________

**Risk Level**: ✓ Low | ⚠ Medium | ⛔ High

**If Medium/High, explain**: [How collection was deceptive]
```

---

#### Dimension 5: Third-Party Data Compliance

```markdown
### Third-Party Data Assessment: [Source ID]

**Applicable if data obtained from third-party**

**Vendor**: [Vendor name]
**Data Purchased/Obtained**: [Description]
**Purchase Date**: [Date]
**Contract Terms**: [Link to vendor agreement]

**Vendor's Collection Method**:
- How vendor collected data: [Description]
- Vendor's consent basis: [What consent vendor obtained]

**Vendor Compliance Review**:
- [ ] Reviewed vendor's privacy policy at time of collection
- [ ] Verified vendor obtained appropriate consent
- [ ] Confirmed vendor's use terms allow our use
- [ ] Vendor has no known FTC enforcement history
- [ ] Vendor has no known privacy violations

**Red Flags**:
- [ ] Vendor scraped data from platforms (may violate platform ToS)
- [ ] Vendor's collection method unclear or suspicious
- [ ] Vendor obtained data through app that has since been banned/investigated
- [ ] Vendor cannot document consent chain
- [ ] Vendor's own privacy policy doesn't cover this data type
- [ ] Vendor implicated in Cambridge Analytica or similar scandal

**Example Issues**:
- Data scraped from Facebook in violation of Facebook ToS
- Data from third-party quiz app that deceived users
- Broker selling data obtained through deception

**Risk Level**: ✓ Low | ⚠ Medium | ⛔ High

**If Medium/High**: [Explain third-party compliance concerns]
```

---

#### Dimension 6: Retention Limits

```markdown
### Retention Limits Assessment: [Source ID]

**Disclosed Retention Period**:
- What privacy policy said: "[Quote retention period disclosure]"
- Retention commitment: [X months/years or "as long as needed" or "no limit stated"]

**Actual Retention**:
- Data collected: [Date range]
- Still retained: Yes / No / Partially
- If yes, duration: [X years]

**Retention Policy Compliance**:
- [ ] ✓ Within disclosed retention period
- [ ] ⚠ Exceeded disclosed period
- [ ] No retention period was disclosed

**User Deletion Requests**:
- Deletion right disclosed: Yes / No
- Deletion requests received: [N]
- Deletion requests honored: [N or %]
- Training data updated after deletion: Yes / No / Partial ⚠

**Risk**: If trained on data that should have been deleted (exceeded retention period or user requested deletion), FTC may view as improper retention.

**Risk Level**: ✓ Low | ⚠ Medium | ⛔ High

**If Medium/High**: [Explain retention violation]
```

---

### Step 3: Overall Risk Scoring

```markdown
## Algorithmic Disgorgement Risk Score

**Model**: [Name]

### Risk by Data Source

| Source ID | % of Training | Consent Risk | Purpose Risk | COPPA Risk | Deception Risk | 3rd Party Risk | Retention Risk | **Overall Risk** |
|-----------|---------------|--------------|--------------|------------|----------------|----------------|----------------|------------------|
| DS-001 | X% | Low/Med/High | Low/Med/High | Low/Med/High | Low/Med/High | Low/Med/High | Low/Med/High | Low/Med/High/Critical |
| DS-002 | X% | | | | | | | |

### Aggregate Risk Calculation

**High-Risk Data** (High or Critical rating): [X%] of training data
**Medium-Risk Data**: [X%] of training data
**Low-Risk Data**: [X%] of training data

### Overall Model Risk

**Risk Level**:

- [ ] ✓ **LOW RISK** - All data sources low risk or <5% medium risk
- [ ] ⚠ **MEDIUM RISK** - 5-20% of data medium risk or <5% high risk
- [ ] ⛔ **HIGH RISK** - >20% medium risk or 5-20% high risk
- [ ] ⛔ **CRITICAL RISK** - >20% high risk or any COPPA violations

### Risk Factors

**Aggravating Factors** (increase risk):
- [ ] COPPA violations present (automatic Critical)
- [ ] Known FTC enforcement focus area (facial recognition, children, health)
- [ ] High-profile product or company (FTC targets visible cases)
- [ ] Consumer complaints about data practices
- [ ] Prior FTC consent order (repeat violations = massive penalties)
- [ ] Deceptive marketing about data practices
- [ ] Vulnerable populations affected

**Mitigating Factors** (decrease risk):
- [ ] Good faith effort to obtain consent
- [ ] Proactive compliance program
- [ ] Limited collection (data minimization)
- [ ] Transparent about AI use
- [ ] Model is not core business asset (can afford to lose)
- [ ] Can retrain on legitimate-only subset

### Risk Summary

**Overall Disgorgement Risk**: Low / Medium / High / Critical

**Likelihood if FTC Investigates**: [Low / Medium / High] chance FTC would require model deletion

**Business Impact if Disgorged**: [Low / Medium / High / Existential]
```

---

### Step 4: Remediation Options

```markdown
## Remediation Strategy

**Current Risk Level**: [From Step 3]

### Option 1: Accept the Risk

**When Appropriate**:
- Risk is Low and business can tolerate investigation
- Cost of remediation exceeds potential penalties
- Model not critical to business

**Mitigation**:
- Document risk assessment
- Get executive sign-off on risk acceptance
- Prepare incident response plan
- Consider insurance

**Monitoring**:
- Watch for FTC enforcement trends
- Track consumer complaints
- Review if risk factors change

---

### Option 2: Obtain Retroactive Consent

**When Feasible**:
- Can identify and contact affected users
- Users likely to provide consent
- Consent mechanism can be implemented

**Process**:
1. Draft clear consent request explaining:
   - What data will be used for
   - Option to opt out and data deletion
   - No penalty for refusing

2. Deliver consent request:
   - Email to registered users
   - In-app notification
   - Website banner for active users

3. Track responses:
   - Consents obtained: [Target: X%]
   - Opt-outs: [Expected: Y%]
   - Non-responses: [Plan]

4. Data cleanup:
   - Remove data from non-consenters
   - Update training dataset
   - Retrain model or validate performance unchanged

**Timeline**: [X weeks/months]
**Cost**: [Estimated]
**Success Criteria**: Obtain consent for >[X%] of training data

---

### Option 3: Retrain on Legitimate-Only Subset

**When Feasible**:
- Sufficient legitimate data to maintain performance
- Retraining resources available
- Timeline permits retraining

**Analysis**:
- **Legitimate data**: [X%] of current training data
- **Estimated performance impact**: [X% accuracy reduction expected]
- **Acceptable performance**: Yes / No / Unknown

**Process**:
1. Isolate legitimate data subset
   - Remove all High/Critical risk data sources
   - Remove non-consented data
   - Remove COPPA-violation data

2. Retrain model:
   - Use same architecture
   - Compare performance to original
   - Bias test new model

3. Validate acceptable performance:
   - Performance acceptable: Yes / No
   - If yes, deploy new model
   - If no, pursue other options

**Timeline**: [X weeks/months]
**Cost**: [Compute + engineering time]
**Risk**: May still need to explain why original model trained on problematic data

---

### Option 4: Do Not Deploy Current Model

**When Necessary**:
- Risk is Critical
- Remediation options infeasible
- Business cannot tolerate enforcement action

**Alternative Paths**:
1. **Start fresh with clean data**:
   - Implement proper consent mechanisms first
   - Collect new data with appropriate disclosures
   - Train new model from scratch
   - Timeline: [X months]

2. **Use third-party model**:
   - License model from vendor
   - Verify vendor's data legitimacy
   - Lower disgorgement risk (vendor's problem)

3. **Abandon AI approach**:
   - Use non-AI alternative
   - Reduces capability but eliminates risk

**Decision**:
- [ ] Deploy current model (document risk acceptance)
- [ ] Retrain on legitimate subset
- [ ] Obtain retroactive consent
- [ ] Start fresh with clean data
- [ ] License third-party model
- [ ] Abandon AI approach

---

### Option 5: Hybrid Approach

**Combination Strategy**:
1. Remove Critical risk data immediately (especially COPPA violations)
2. Attempt retroactive consent for Medium/High risk data
3. Retrain on legitimate + consented data
4. Deploy if performance acceptable

**Decision Matrix**:

| Data Source | Risk Level | Action |
|-------------|------------|--------|
| DS-001 | Critical (COPPA) | **Remove immediately** |
| DS-002 | High (no consent) | **Seek retroactive consent** |
| DS-003 | Medium (vague disclosure) | **Seek retroactive consent** |
| DS-004 | Low | **Retain** |

---

## Step 5: Documentation

```markdown
## Algorithmic Disgorgement Risk Assessment - Final Documentation

**Assessment Date**: [Date]
**Assessed By**: [Team/Individuals]
**Model**: [Name]

### Executive Summary

**Overall Risk**: Low / Medium / High / Critical
**Primary Risk Factors**: [Top 3 concerns]
**Remediation Recommended**: Yes / No
**Business Decision**: [Deploy as-is / Remediate / Do not deploy]

### Risk Details

**Training Data Assessment**:
- Total data sources: [N]
- High/Critical risk sources: [N] representing [X%] of training data
- Primary violations: [COPPA / Consent / Purpose / Deception / Third-party / Retention]

**Likelihood of FTC Action**:
- Probability if complaints arise: Low / Medium / High
- Probability of algorithmic disgorgement if FTC investigates: Low / Medium / High

**Business Impact**:
- Model criticality: Low / Medium / High / Existential
- Replacement cost: $[Amount] and [X months]
- Retraining feasibility: Feasible / Difficult / Infeasible

### Remediation Plan

**Selected Approach**: [Option from Step 4]

**Implementation Timeline**:
- Week 1-2: [Actions]
- Week 3-4: [Actions]
- Week 5+: [Actions]

**Success Metrics**:
- Risk reduction target: [Critical → High, High → Medium, etc.]
- Consent rate target: [X%]
- Performance maintenance: [Accuracy within X% of baseline]

**Contingency**:
- If remediation fails: [Alternative plan]

### Approvals

- **Technical review**: [Name, Date]
- **Privacy/Legal review**: [Name, Date]
- **Executive approval**: [Name, Title, Date]

**Decision**:
- [ ] Proceed with deployment (risk accepted/remediated)
- [ ] Do not deploy (risk unacceptable)

---

## Post-Deployment Monitoring

**If model deployed with residual risk:**

**Ongoing Monitoring**:
- [ ] Track consumer complaints for data practice concerns
- [ ] Monitor FTC enforcement actions for similar cases
- [ ] Review data legitimacy quarterly
- [ ] Maintain incident response plan

**Incident Triggers**:
- Consumer complaint alleging improper data use
- Media inquiry about data practices
- FTC inquiry or investigation
- Similar enforcement action in industry

**Response Plan**:
1. Immediately notify legal counsel
2. Preserve all documentation (litigation hold)
3. Assess whether model should be voluntarily retired
4. Prepare for potential FTC investigation (see FTC Section 5 Compliance Framework)
```

---

## Red Flags Checklist

**Critical Red Flags** (Likely algorithmic disgorgement if FTC investigates):

- [ ] ⛔ Data collected from children under 13 without parental consent
- [ ] ⛔ Explicit promise not to use data for purpose, then used anyway
- [ ] ⛔ Data obtained through deception or fraud
- [ ] ⛔ Massive scale (millions of users affected)
- [ ] ⛔ Previous FTC consent order violation

**High Risk Red Flags**:

- [ ] ⚠ No consent obtained for sensitive personal data
- [ ] ⚠ Data used beyond disclosed purpose
- [ ] ⚠ Third-party data from questionable source (scraping, ToS violations)
- [ ] ⚠ Retained data beyond disclosed period
- [ ] ⚠ Didn't honor user deletion requests
- [ ] ⚠ Vulnerable populations affected (children, elderly, health conditions)

**Medium Risk Red Flags**:

- [ ] ⚠ Vague consent language ("improve services")
- [ ] ⚠ Consent buried in fine print
- [ ] ⚠ Pre-checked boxes or implied consent
- [ ] ⚠ Retroactive application of terms to old data
- [ ] ⚠ Cannot verify consent for all records

---

## FTC Enforcement Likelihood Factors

**What makes FTC action more likely**:

1. **Consumer harm**: Actual harm to individuals (discrimination, privacy violation)
2. **Scale**: Large numbers of affected consumers
3. **Vulnerability**: Children, health, financial, or other sensitive contexts
4. **Public attention**: Media coverage or advocacy group complaints
5. **Repeat offender**: Prior FTC settlements or consent orders
6. **Egregious conduct**: Intentional deception or reckless disregard

**Protective factors**:

1. **Good faith efforts**: Documented compliance attempts
2. **Proactive remediation**: Fixed issues before FTC contact
3. **Limited harm**: No evidence of consumer injury
4. **Small scale**: Limited numbers affected
5. **First offense**: No prior enforcement history

---

## Decision Framework

```markdown
## Final Risk-Based Decision

### If Risk is LOW:
**Recommended**: Proceed with deployment
**Requirements**:
- Document risk assessment
- Implement monitoring
- Maintain incident response plan
- Annual review of data legitimacy

### If Risk is MEDIUM:
**Recommended**: Remediate before deployment OR accept risk with executive approval
**Requirements**:
- Attempt retroactive consent or data cleanup
- Document remediation efforts
- Get executive sign-off if proceeding with residual risk
- Enhanced monitoring and complaint tracking
- Quarterly risk review

### If Risk is HIGH:
**Recommended**: Do not deploy until remediated
**Requirements**:
- Mandatory remediation (retroactive consent, retraining, or new data collection)
- Cannot proceed without material risk reduction
- If deployed anyway, requires board-level approval
- Prepare for potential FTC action

### If Risk is CRITICAL:
**Recommended**: DO NOT DEPLOY - Model deletion likely if FTC investigates
**Requirements**:
- Immediate data deletion (especially COPPA violations)
- Do not deploy current model under any circumstances
- Start fresh with compliant data collection OR use alternative approach
- Consider voluntary disclosure to FTC if egregious violation
```

---

## Related Concepts
- Algorithmic disgorgement
- FTC Section 5
- Training data legitimacy
- COPPA compliance
- Consent violations
- Purpose limitation
- Data provenance
- Third-party data risk
- Equitable remedies
- Fruit of the poisonous tree

## Version
Template Version 1.0 | Created: 2025-12-24 | Source: "Consumer Protection and AI: FTC Section 5 Explained"
