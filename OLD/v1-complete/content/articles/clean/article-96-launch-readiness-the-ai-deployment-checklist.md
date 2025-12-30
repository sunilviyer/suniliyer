
![Article 96: Launch Readiness – The AI Deployment Checklist]({{IMAGE_PLACEHOLDER_article-96-launch-readiness-the-ai-deployment-checklist}})

---
category: "AI Development Lifecycle"
learning_objectives:

  - "Understand the key concepts and principles of model validation processes"
  - "Implement regulatory requirements in real-world scenarios"
  - "Evaluate audit procedures for organizational compliance"
seo_keywords:

  - "article"
  - "launch"
  - "AI governance"
  - "AI ethics"
  - "launch readiness"
word_count: 1592
processed_date: "2025-12-18T20:00:54.305Z"
---


## Why Launch Readiness Matters


### The Cost of Premature Launch

| Failure Type | Consequence |
|--------------|-------------|
| Performance failure | Bad predictions, user harm, lost trust |
| Operational failure | Downtime, inability to fix issues, data loss |
| Compliance failure | Regulatory penalties, legal liability |
| Reputational failure | Public embarrassment, customer loss |
| Financial failure | Costs to fix, remediate, and recover |


### The NASA Mindset

NASA doesn't launch rockets until every checklist item is verified. They learned this lesson the hard way through catastrophic failures.

AI systems affect real people. While the consequences may be less visible than a rocket explosion, they're no less real. Systematic readiness verification is how you prevent preventable failures.

---


## The Launch Readiness Framework


### Four Pillars of Readiness

```
                    LAUNCH READINESS
                          │
    ┌─────────────────────┼─────────────────────┐
    │                     │                     │
┌───┴───┐           ┌─────┴─────┐         ┌─────┴─────┐
│Technical│         │Operational│         │Governance │
│Readiness│         │ Readiness │         │ Readiness │
└────┬────┘         └─────┬─────┘         └─────┬─────┘
     │                    │                     │
     │              ┌─────┴─────┐               │
     │              │  Launch   │               │
     └──────────────┤   Day     ├───────────────┘
                    │ Procedures│
                    └───────────┘
```

All four must be satisfied before launch.

---


## Pillar 1: Technical Readiness


### Model Validation

**Performance meets requirements:**

- [ ] Accuracy/precision/recall meet defined thresholds
- [ ] Performance validated on held-out test data
- [ ] Cross-validation results are consistent
- [ ] Performance validated on recent data (not stale test set)

**Slice analysis completed:**

- [ ] Performance analyzed by relevant subgroups
- [ ] No unacceptable performance gaps identified
- [ ] Edge cases tested and documented

**Bias testing passed:**

- [ ] Fairness metrics calculated
- [ ] Disparate impact analysis completed
- [ ] Results documented and reviewed
- [ ] Any issues addressed or accepted with justification

**Robustness verified:**

- [ ] Tested with noisy/corrupted inputs
- [ ] Tested with edge cases and boundary conditions
- [ ] Tested with out-of-distribution inputs
- [ ] Graceful degradation verified


### Infrastructure Readiness

**Compute resources:**

- [ ] Production infrastructure provisioned
- [ ] Capacity sufficient for expected load
- [ ] Scaling configuration tested
- [ ] Resource limits and alerts configured

**Data pipelines:**

- [ ] Production data pipelines tested
- [ ] Data quality checks in place
- [ ] Pipeline failure handling verified
- [ ] Data refresh schedules confirmed

**Model serving:**

- [ ] Model deployed to production environment
- [ ] Inference latency meets requirements
- [ ] Throughput meets requirements
- [ ] Model version clearly identified

**Integration:**

- [ ] All upstream dependencies tested
- [ ] All downstream integrations tested
- [ ] API contracts verified
- [ ] Authentication/authorization configured


### Security Readiness

**Access controls:**

- [ ] Production access limited to authorized personnel
- [ ] Role-based access configured
- [ ] Service accounts properly secured
- [ ] API keys/secrets properly managed

**Data protection:**

- [ ] Sensitive data properly protected
- [ ] Encryption at rest and in transit
- [ ] Privacy controls verified
- [ ] Data retention policies implemented

**Vulnerability assessment:**

- [ ] Security review completed
- [ ] Known vulnerabilities addressed
- [ ] Penetration testing (if applicable)
- [ ] Adversarial testing completed

---


## Pillar 2: Operational Readiness


### Monitoring Setup

**Performance monitoring:**

- [ ] Model performance metrics tracked
- [ ] Prediction distribution monitored
- [ ] Latency and throughput monitored
- [ ] Error rates tracked

**Data monitoring:**

- [ ] Input data distribution monitored
- [ ] Feature drift detection configured
- [ ] Data quality monitoring active
- [ ] Missing/invalid data detection in place

**Infrastructure monitoring:**

- [ ] System health monitoring active
- [ ] Resource utilization tracked
- [ ] Dependency health checked
- [ ] Alerting configured

**Dashboard availability:**

- [ ] Monitoring dashboards created
- [ ] Dashboards accessible to relevant teams
- [ ] Key metrics visible at a glance


### Alerting Configuration

**Alerts defined for:**

- [ ] Performance degradation
- [ ] Error rate spikes
- [ ] Data quality issues
- [ ] Infrastructure problems
- [ ] Security incidents

**Alert routing:**

- [ ] Alerts go to correct teams
- [ ] Escalation paths defined
- [ ] On-call schedule established
- [ ] Contact information current


### Runbooks and Procedures

**Operational runbook:**

- [ ] Normal operation procedures documented
- [ ] Troubleshooting guides created
- [ ] Common issues and resolutions documented
- [ ] Runbook accessible to operations team

**Incident response:**

- [ ] Incident classification defined
- [ ] Response procedures documented
- [ ] Communication templates ready
- [ ] Incident bridge/channel identified


### Rollback Capability

**Rollback plan:**

- [ ] Previous version available for rollback
- [ ] Rollback procedure documented
- [ ] Rollback tested
- [ ] Rollback decision criteria defined

**Rollback automation:**

- [ ] Automated rollback possible (if needed)
- [ ] Rollback time estimate documented
- [ ] Data implications of rollback understood

---


## Pillar 3: Governance Readiness


### Documentation Complete

**Model documentation:**

- [ ] Model card completed
- [ ] Training data documented
- [ ] Performance metrics documented
- [ ] Limitations documented

**System documentation:**

- [ ] Architecture documented
- [ ] Data flows documented
- [ ] Key decisions documented
- [ ] Operational procedures documented

**User documentation:**

- [ ] User guide available
- [ ] Known limitations communicated
- [ ] Support procedures documented


### Approvals Obtained

**Technical approvals:**

- [ ] Model owner sign-off
- [ ] Technical lead sign-off
- [ ] Security review completed
- [ ] Architecture review completed

**Business approvals:**

- [ ] Business owner sign-off
- [ ] Legal review (if required)
- [ ] Compliance review (if required)
- [ ] Executive approval (if required)

**Governance approvals:**

- [ ] AI governance review completed
- [ ] Ethics review (if required)
- [ ] Risk assessment reviewed
- [ ] Audit trail documented


### Compliance Verification

**Regulatory compliance:**

- [ ] Applicable regulations identified
- [ ] Compliance requirements met
- [ ] Documentation satisfies requirements
- [ ] Audit trail maintained

**Policy compliance:**

- [ ] Complies with AI ethics policy
- [ ] Complies with data governance policy
- [ ] Complies with security policies
- [ ] Complies with privacy policies


### Risk Acceptance

**Residual risks:**

- [ ] Known risks documented
- [ ] Risk mitigation measures in place
- [ ] Residual risks formally accepted
- [ ] Risk owner identified

---


## Pillar 4: Organizational Readiness


### Team Readiness

**Operations team:**

- [ ] Trained on the system
- [ ] Knows escalation procedures
- [ ] Has access to required tools
- [ ] On-call rotation established

**Support team:**

- [ ] Knows what the system does
- [ ] Trained on common issues
- [ ] Has escalation path to technical team
- [ ] FAQ/knowledge base available

**Users:**

- [ ] Informed of launch
- [ ] Trained on how to use (if applicable)
- [ ] Know how to report issues
- [ ] Understand limitations


### Communication Ready

**Internal communication:**

- [ ] Stakeholders informed of launch
- [ ] Launch announcement prepared
- [ ] Success criteria communicated

**External communication (if applicable):**

- [ ] Customer communication prepared
- [ ] Public announcement ready (if applicable)
- [ ] Press response prepared (if high-profile)

**Issue communication:**

- [ ] Communication plan for issues
- [ ] Templates for different scenarios
- [ ] Spokesperson identified

---


## The Launch Readiness Review


### Formal Review Process

Before launch, conduct a formal Launch Readiness Review (LRR):

**Participants:**

- Model/system owner
- Technical lead
- Operations representative
- Governance/compliance representative
- Business stakeholder
- Security representative (for high-risk systems)

**Review format:**

1. Walk through each checklist section
2. Verify evidence for each item
3. Discuss any open items
4. Make go/no-go decision
5. Document decision and rationale


### Decision Criteria

**GO criteria:**

- All critical checklist items satisfied
- No blocking issues
- Residual risks accepted
- All required approvals obtained

**NO-GO criteria:**

- Critical items not complete
- Blocking issues unresolved
- Required approvals not obtained
- Unacceptable risk levels

**CONDITIONAL GO criteria:**

- Minor items can be addressed post-launch
- Mitigation measures in place
- Timeline for resolution agreed
- Increased monitoring planned


### Documenting the Decision

```
LAUNCH READINESS REVIEW RECORD

System: Customer Churn Prediction System
Review Date: 2024-03-15
Version: 2.1

PARTICIPANTS
├── Model Owner: J. Smith (Data Science)
├── Technical Lead: A. Johnson (Engineering)
├── Operations: M. Williams (SRE)
├── Governance: S. Brown (Compliance)
└── Business: K. Davis (Customer Success)

CHECKLIST STATUS
├── Technical Readiness: ✓ Complete
├── Operational Readiness: ✓ Complete
├── Governance Readiness: ✓ Complete
└── Organizational Readiness: ✓ Complete

OPEN ITEMS
├── Minor: Dashboard refresh rate optimization (post-launch)
└── Minor: Additional user training sessions (week 2)

DECISION: GO

Rationale:
All critical requirements met. Minor items do not affect 
safety or functionality. Mitigations in place.

APPROVALS
├── Model Owner: J. Smith ✓ 2024-03-15
├── Technical Lead: A. Johnson ✓ 2024-03-15
├── Business Owner: K. Davis ✓ 2024-03-15
└── Governance: S. Brown ✓ 2024-03-15

LAUNCH DATE: 2024-03-18
```

---


## Launch Day Procedures


### Pre-Launch Checklist

**Morning of launch:**

- [ ] Final system health check
- [ ] Team availability confirmed
- [ ] Communication channels open
- [ ] Rollback procedure reviewed


### Launch Execution

**Staged rollout (recommended):**

1. Deploy to small subset (canary)
2. Monitor for issues (30 min - 2 hours)
3. Expand to larger subset
4. Monitor for issues
5. Full deployment
6. Continuous monitoring

**Launch communication:**

- [ ] Announce launch to stakeholders
- [ ] Confirm system is operational
- [ ] Monitor feedback channels


### Post-Launch Monitoring

**First hour:**

- Continuous monitoring by launch team
- Immediate response to any issues
- Frequent checks of key metrics

**First day:**

- Heightened monitoring
- Regular check-ins with users
- Document any issues

**First week:**

- Daily review of metrics
- Address any emerging issues
- Collect user feedback
- Document lessons learned

---


## Launch Readiness Checklist Template


### Summary Checklist

```
LAUNCH READINESS CHECKLIST

System: _________________________________
Target Launch Date: _____________________
Review Date: ____________________________

TECHNICAL READINESS
[ ] Model validation complete
[ ] Infrastructure ready
[ ] Integration tested
[ ] Security verified
[ ] Performance requirements met

OPERATIONAL READINESS
[ ] Monitoring configured
[ ] Alerting set up
[ ] Runbooks available
[ ] Rollback plan ready
[ ] On-call schedule set

GOVERNANCE READINESS
[ ] Documentation complete
[ ] Approvals obtained
[ ] Compliance verified
[ ] Risks accepted

ORGANIZATIONAL READINESS
[ ] Teams trained
[ ] Communications prepared
[ ] Support ready

LAUNCH DAY
[ ] Pre-launch checks complete
[ ] Staged rollout plan
[ ] Post-launch monitoring plan

DECISION: [ ] GO  [ ] NO-GO  [ ] CONDITIONAL GO

Notes: ___________________________________
________________________________________

Approved by: ____________________________
Date: ___________________________________
```

---


## Common Launch Readiness Failures


### Failure 1: "Test in Production"

**What happens:** Skip thorough testing because "we'll find issues in production."

**Why it's bad:** Users become testers; issues cause real harm.

**Prevention:** Complete testing checklist before any production deployment.


### Failure 2: "The Dashboard Isn't Critical"

**What happens:** Deploy without monitoring because "we'll add it later."

**Why it's bad:** Can't detect problems; issues persist unnoticed.

**Prevention:** Monitoring is a launch blocker, not a nice-to-have.


### Failure 3: "We'll Document Later"

**What happens:** Launch without documentation because of time pressure.

**Why it's bad:** Knowledge lost; can't maintain or explain system.

**Prevention:** Documentation is part of definition of done.


### Failure 4: "Rollback? We Won't Need It"

**What happens:** No rollback plan because "the model works."

**Why it's bad:** When issues occur (and they will), no way to quickly recover.

**Prevention:** Rollback capability is a launch requirement.


### Failure 5: "Leadership Approved the Project"

**What happens:** Assume project approval equals launch approval.

**Why it's bad:** Different decision; different criteria.

**Prevention:** Explicit launch approval from designated approvers.

---


## Conclusion

Launch readiness isn't about paperwork—it's about ensuring your AI system is truly ready to serve real users in the real world. Every unchecked item is a potential failure waiting to happen.

Key takeaways:

1. **Four pillars:** Technical, operational, governance, and organizational readiness all matter.

2. **Checklists prevent mistakes:** Systematic verification catches what intuition misses.

3. **Formal review:** A Launch Readiness Review with clear decision criteria.

4. **Rollback is essential:** Always have a way to undo if things go wrong.

5. **Staged rollout:** Don't go from zero to full deployment immediately.

6. **Post-launch monitoring:** Heightened attention in the first hours and days.

The goal isn't to slow things down—it's to prevent the much greater delay of fixing a failed launch. A few hours of careful verification beats weeks of crisis response.

---


## Sources and Further Reading

1. **Google SRE Book** - Launch readiness reviews. Available at: sre.google/sre-book

2. **NIST AI RMF** - Deployment considerations. Available at: nist.gov

3. **Microsoft** - AI deployment checklist. Available at: docs.microsoft.com

4. **AWS** - ML deployment best practices. Available at: aws.amazon.com

5. **MLOps Community** - Deployment patterns. Available at: mlops.community

6. **Made With ML** - Production ML. Available at: madewithml.com

7. **Chip Huyen** - "Designing Machine Learning Systems" - O'Reilly.

8. **EU AI Act** - Deployment requirements for high-risk AI. Available at: eur-lex.europa.eu

9. **NASA** - System readiness review processes. Available at: nasa.gov

10. **DevOps Handbook** - Deployment practices. Gene Kim et al.

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
