
![Article 105: AI Inventory Management – Knowing What You Have]({{IMAGE_PLACEHOLDER_article-105-ai-inventory-management-knowing-what-you-have}})

---
category: "Governance Implementation"
learning_objectives:

  - "Understand the key concepts and principles of ai governance frameworks"
  - "Implement model validation processes in real-world scenarios"
  - "Evaluate regulatory requirements for organizational compliance"
seo_keywords:

  - "article"
  - "inventory"
  - "AI governance"
  - "inventory management"
  - "knowing what you have"
word_count: 1559
processed_date: "2025-12-18T20:00:53.382Z"
---


## What Is an AI Inventory?


### Definition

An AI inventory is a centralized registry of all AI and algorithmic systems within an organization, documenting key attributes including purpose, ownership, data, risks, and governance status.

**Other names:**

- AI Registry
- Algorithm Register
- Model Inventory
- AI Asset Register
- AI Catalog


### What Gets Included?

The scope question is important. What counts as "AI" for inventory purposes?

**Definitely include:**

- Machine learning models
- Deep learning systems
- Natural language processing
- Computer vision systems
- Recommendation engines
- Predictive analytics
- Generative AI applications

**Consider including:**

- Rule-based expert systems
- Automated decision systems
- Statistical models
- Algorithmic systems affecting people
- RPA with decision logic

**May exclude:**

- Simple business rules without learning
- Basic statistical calculations
- Standard software features
- General-purpose tools (unless customized)

**Best practice:** Err on the side of inclusion. It's easier to exclude something from governance requirements than to discover ungoverned systems later.

---


## Why You Need an AI Inventory


### Regulatory Requirements

Regulations increasingly require inventories:

**EU AI Act:**

- Requires documentation of high-risk AI systems
- Registration in EU database for certain systems
- Traceability throughout lifecycle

**NYC Local Law 144:**

- Requires bias audits for automated employment decision tools
- Implies need to identify which systems are in scope

**Financial services regulations:**

- Model risk management requires model inventories
- OCC/Fed SR 11-7 guidance

**Sector-specific requirements:**

- Healthcare: FDA AI/ML tracking
- Insurance: Algorithm transparency requirements


### Governance Benefits

Even without regulatory requirements, inventories enable:

| Benefit | How Inventory Helps |
|---------|-------------------|
| Risk visibility | Know where the high-risk AI is |
| Resource allocation | Focus governance on what matters |
| Incident response | Quickly identify affected systems |
| Audit readiness | Show what you have and how it's governed |
| Lifecycle management | Track what needs updates or retirement |
| Compliance | Demonstrate control over AI assets |
| Duplication reduction | Avoid building what already exists |


### The Cost of Not Having One

**Without an inventory:**

- Can't answer basic questions about AI deployment
- Risks unknown and unmanaged
- Compliance gaps invisible until audit
- Incidents harder to respond to
- Governance is theoretical, not practical

---


## What to Capture in the Inventory


### Essential Fields

These fields should be captured for every AI system:

```
CORE INVENTORY FIELDS

IDENTIFICATION
├── System ID (unique identifier)
├── System Name
├── Description (what it does)
├── Version (current production version)
└── Status (development, production, retired)

OWNERSHIP
├── System Owner (accountable individual)
├── Business Unit
├── Technical Contact
└── Vendor (if third-party)

PURPOSE
├── Business Purpose
├── Use Cases
├── Decisions Supported/Made
└── Affected Populations

TECHNICAL
├── AI Type (ML, NLP, computer vision, etc.)
├── Model Architecture (if applicable)
├── Development Platform
└── Deployment Environment

DATA
├── Training Data Sources
├── Input Data Sources
├── Data Classifications (PII, sensitive, etc.)
└── Data Retention

DATES
├── Development Start Date
├── First Deployment Date
├── Last Updated Date
└── Next Review Date
```


### Risk and Governance Fields

```
RISK AND GOVERNANCE FIELDS

RISK
├── Risk Classification (high, medium, low)
├── Risk Assessment Date
├── Key Risks Identified
└── Regulatory Category (if applicable)

GOVERNANCE
├── Approval Status
├── Approval Date
├── Approving Authority
├── Documentation Status
└── Compliance Status

MONITORING
├── Monitoring Active (yes/no)
├── Last Review Date
├── Performance Status
└── Issues/Incidents
```


### Extended Fields (For High-Risk Systems)

```
EXTENDED FIELDS

FAIRNESS
├── Bias Testing Date
├── Bias Testing Results
├── Protected Attributes Considered
└── Fairness Metrics

TRANSPARENCY
├── Explainability Approach
├── User Disclosure Status
└── Documentation Links

HUMAN OVERSIGHT
├── Level of Autonomy
├── Human Review Process
├── Override Capability
└── Escalation Path

LIFECYCLE
├── Retraining Schedule
├── Last Retrained
├── Performance Trend
└── Planned Retirement Date
```

---


## Building Your AI Inventory


### Phase 1: Discovery

Find all the AI systems. This is often harder than expected.

**Discovery methods:**

**1. Survey business units**
```
AI DISCOVERY SURVEY

Please identify any systems in your area that:

- Use machine learning or AI
- Make automated predictions or recommendations
- Automatically classify, score, or rank things
- Make or support decisions about people
- Are described as "intelligent" or "smart"

For each system, provide:

- Name: _______________
- Description: _______________
- Owner: _______________
- Vendor (if external): _______________
```

**2. Review technology assets**

- Data science platform usage
- ML infrastructure (GPUs, specialized compute)
- AI/ML tools and libraries
- Model serving infrastructure

**3. Review vendor contracts**

- Search for "AI," "ML," "algorithm," "automated"
- SaaS products with AI features
- Cloud AI services

**4. Interview key people**

- Data science teams
- Product managers
- IT leadership
- Procurement

**5. Check for AI indicators**

- API calls to AI services
- ML framework usage
- Model files and artifacts


### Phase 2: Documentation

For each discovered system, gather required information.

**Documentation approach:**

**Owner-completed:**
System owners complete inventory form with technical and business information.

**Governance-reviewed:**
Governance team reviews for completeness and accuracy.

**Risk-classified:**
Risk classification applied based on documented information.


### Phase 3: Centralization

Create a single source of truth.

**Options for inventory management:**

| Option | Pros | Cons |
|--------|------|------|
| Spreadsheet | Simple, quick to start | Hard to scale, version control issues |
| Database | Flexible, queryable | Requires development, maintenance |
| GRC platform | Integrates with risk management | Cost, implementation time |
| Specialized AI governance tool | Purpose-built features | Cost, vendor dependency |
| IT asset management extension | Leverages existing system | May lack AI-specific features |

**Minimum requirements:**

- Searchable
- Reportable
- Access controlled
- Version controlled
- Linkable to documentation


### Phase 4: Validation

Verify inventory accuracy.

**Validation activities:**

- Cross-check against technology assets
- Verify owners are current
- Confirm status (production, retired, etc.)
- Validate risk classifications
- Check for missing systems

---


## Maintaining the Inventory


### Triggers for Updates

The inventory must stay current. Define update triggers:

**New system triggers:**

- New AI project initiated
- New AI vendor contracted
- New AI feature added to existing system

**Change triggers:**

- System updated or retrained
- Owner changed
- Risk classification changed
- Status changed (deployed, retired)

**Periodic triggers:**

- Annual review of all entries
- Quarterly review of high-risk systems


### Integration Points

Connect inventory updates to existing processes:

```
INVENTORY INTEGRATION POINTS

Project Management
└── New AI projects registered at initiation

Change Management
└── Changes to AI systems trigger inventory update

Procurement
└── AI vendor contracts trigger inventory entry

Incident Management
└── Incidents linked to inventory records

Audit
└── Inventory provides scope for AI audits

Risk Management
└── Risk assessments linked to inventory
```


### Ownership and Accountability

**Who maintains the inventory:**

**Centralized model:**

- Governance team maintains
- System owners provide information
- Single point of responsibility

**Distributed model:**

- System owners maintain their entries
- Governance team oversees and validates
- Scales better but requires coordination

**Hybrid model:**

- Governance team manages registry
- System owners update key fields
- Periodic validation by governance

---


## Using the Inventory for Governance


### Risk-Based Prioritization

Use the inventory to focus governance efforts:

```
INVENTORY RISK DASHBOARD

Total AI Systems: 47

By Risk Level:
├── High Risk: 8 (17%)
├── Medium Risk: 19 (40%)
└── Low Risk: 20 (43%)

High-Risk Systems Needing Attention:
┌──────────────────────────────────────────────────────┐
│ System           │ Issue          │ Owner   │ Due   │
├──────────────────────────────────────────────────────┤
│ Credit Scoring   │ Bias test due  │ J. Kim  │ 15 Mar│
│ Resume Screener  │ Review overdue │ A. Patel│ Overdue│
│ Fraud Detection  │ Retrain needed │ M. Chen │ 30 Mar│
└──────────────────────────────────────────────────────┘
```


### Compliance Tracking

Track compliance status across systems:

```
COMPLIANCE STATUS REPORT

Documentation Complete:
├── High-risk systems: 6/8 (75%)
├── Medium-risk: 12/19 (63%)
└── Low-risk: 8/20 (40%)

Bias Testing Current:
├── Required systems: 12
├── Complete: 9 (75%)
└── Overdue: 3 (25%)

Approval Status:
├── Approved: 40
├── Conditional: 5
└── Pending: 2
```


### Lifecycle Management

Track systems through their lifecycle:

```
LIFECYCLE STATUS

Systems by Status:
├── Development: 7
├── Staging: 3
├── Production: 35
└── Retired (this year): 2

Age of Production Systems:
├── < 1 year: 12
├── 1-2 years: 15
├── 2-3 years: 5
└── > 3 years: 3 ← Review priority

Upcoming:
├── Reviews due this month: 4
├── Planned retirements: 2
└── Expected deployments: 3
```


### Incident Connection

Link incidents to inventory for pattern analysis:

```
INCIDENT ANALYSIS

Systems with Incidents (last 12 months):
├── Fraud Detection v2: 3 incidents
├── Customer Churn: 2 incidents
└── Product Recommendations: 1 incident

Incident by Risk Level:
├── High-risk systems: 2 incidents (25% of category)
├── Medium-risk: 3 incidents (16%)
└── Low-risk: 1 incident (5%)
```

---


## Regulatory Reporting


### EU AI Act Requirements

The EU AI Act requires registration of high-risk AI systems:

**Required information:**

- System name and description
- Provider information
- Intended purpose
- Conformity assessment status
- Risk classification

**Use inventory to:**

- Identify systems in scope
- Track compliance status
- Generate registration information
- Maintain evidence of compliance


### Other Regulatory Requirements

**Financial services (SR 11-7):**

- Model inventory required
- Validation status tracked
- Risk tiering documented

**NYC Local Law 144:**

- Identify in-scope systems
- Track bias audit status
- Document public notice

---


## Common Challenges


### Challenge 1: "We Don't Know What AI We Have"

**The problem:** Discovery is incomplete; hidden AI exists.

**Solutions:**

- Multiple discovery methods (don't rely on surveys alone)
- Broad definition initially
- Periodic re-discovery
- Make registration part of project process


### Challenge 2: "Nobody Wants to Register"

**The problem:** System owners resist adding to inventory.

**Solutions:**

- Make it easy (simple forms, minimal fields initially)
- Make it required (policy mandate)
- Make it valuable (provide benefits for registered systems)
- Executive sponsorship


### Challenge 3: "Information Is Always Outdated"

**The problem:** Inventory becomes stale quickly.

**Solutions:**

- Integrate with existing processes
- Automate where possible
- Assign clear ownership
- Regular validation cycles
- Consequences for outdated entries


### Challenge 4: "Too Much Detail Requested"

**The problem:** Detailed requirements slow registration.

**Solutions:**

- Tier requirements by risk level
- Start simple, add detail over time
- Collect only what you'll use
- Make some fields optional


### Challenge 5: "Disagreement on What's AI"

**The problem:** Scope debates slow progress.

**Solutions:**

- Define clearly in policy
- Err on side of inclusion
- Don't over-philosophize
- Focus on impact, not terminology

---


## Inventory Maturity Model


### Level 1: Ad Hoc

- No formal inventory
- Some tribal knowledge of AI systems
- Discovery is manual and incomplete


### Level 2: Initial

- Basic inventory exists
- Core fields captured
- Manual updates
- Some systems still missing


### Level 3: Defined

- Comprehensive inventory
- Standard fields and processes
- Regular updates
- Integrated with governance


### Level 4: Managed

- Automated where possible
- Metrics and reporting
- Connected to workflows
- Audit-ready


### Level 5: Optimized

- Real-time accuracy
- Full integration with AI lifecycle
- Predictive analytics on inventory
- Continuous improvement

---


## Inventory Template


### Quick-Start Spreadsheet Columns

For organizations starting with a spreadsheet:

```
MINIMUM VIABLE INVENTORY (Spreadsheet)

Column A: System ID (unique)
Column B: System Name
Column C: Description
Column D: Owner Name
Column E: Owner Email
Column F: Business Unit
Column G: Status (Dev/Prod/Retired)
Column H: AI Type
Column I: Risk Level (H/M/L)
Column J: Vendor (if external)
Column K: Go-Live Date
Column L: Last Updated
Column M: Next Review Date
Column N: Documentation Link
Column O: Notes
```


### Inventory Entry Form

```
AI SYSTEM INVENTORY FORM

SECTION 1: BASIC INFORMATION
System Name: _______________________
Description: _______________________
Business Unit: _______________________
System Owner: _______________________
Technical Contact: _______________________

SECTION 2: SYSTEM DETAILS
AI Type: [ ] ML  [ ] NLP  [ ] Vision  [ ] GenAI  [ ] Other
Development: [ ] Internal  [ ] Vendor  [ ] Hybrid
Vendor (if applicable): _______________________
Status: [ ] Development  [ ] Staging  [ ] Production  [ ] Retired
Go-Live Date: _______________________

SECTION 3: PURPOSE
What business problem does this solve? _______________________
What decisions does it support or make? _______________________
Who is affected by these decisions? _______________________

SECTION 4: DATA
Training Data Sources: _______________________
Input Data Sources: _______________________
Contains PII? [ ] Yes  [ ] No
Contains Sensitive Data? [ ] Yes  [ ] No

SECTION 5: RISK
Preliminary Risk Level: [ ] High  [ ] Medium  [ ] Low
Regulatory Considerations: _______________________
Key Risks: _______________________

SECTION 6: GOVERNANCE
Documentation Status: [ ] Complete  [ ] Partial  [ ] None
Approval Status: [ ] Approved  [ ] Pending  [ ] N/A
Monitoring Active? [ ] Yes  [ ] No

Submitted by: _______________  Date: _______________
```

---


## Conclusion

An AI inventory is the foundation of AI governance. Without knowing what AI you have, you cannot assess risks, ensure compliance, or manage AI effectively.

Key takeaways:

1. **Start with discovery:** Find all the AI, even the systems nobody thinks of as "AI."

2. **Capture essential information:** System details, ownership, purpose, data, and risk level at minimum.

3. **Centralize and standardize:** Single source of truth with consistent format.

4. **Keep it current:** Integrate with processes, assign ownership, validate regularly.

5. **Use it for governance:** Prioritize by risk, track compliance, manage lifecycle.

6. **Start simple, improve over time:** A basic inventory today is better than a perfect inventory next year.

7. **Make registration mandatory:** Governance only works if systems are in the inventory.

The inventory isn't bureaucracy—it's visibility. And you can't govern what you can't see.

---


## Sources and Further Reading

1. **NIST AI RMF** - Inventory and documentation guidance. Available at: nist.gov

2. **EU AI Act** - Registration requirements. Available at: eur-lex.europa.eu

3. **OCC/Federal Reserve SR 11-7** - Model inventory requirements. Available at: occ.gov

4. **NYC DCWP** - Local Law 144 requirements. Available at: nyc.gov

5. **Gartner** - AI governance and inventory research. Available at: gartner.com

6. **Deloitte** - AI inventory practices. Available at: deloitte.com

7. **McKinsey** - AI scaling and governance. Available at: mckinsey.com

8. **ISACA** - AI governance frameworks. Available at: isaca.org

9. **World Economic Forum** - AI governance toolkit. Available at: weforum.org

10. **UK Government** - Algorithmic Transparency Recording Standard. Available at: gov.uk

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
