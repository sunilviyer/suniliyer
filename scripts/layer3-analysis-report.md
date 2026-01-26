# Layer 3 Analysis Report

## Summary
- **Total Missing Cards**: 21
- **Can Reuse from Layer 4**: 4 cards
- **Need New Resource Cards** (PDFs exist): 4 cards
- **Need New Non-Resource Cards**: 13 cards

---

## PART 1: CAN REUSE FROM LAYER 4
These cards exist in database but with different names. Fix by updating article references.

| Missing Reference | Existing DB Card | Type | Articles Using |
|---|---|---|---|
| `res-eu-ai-act-classification-walkthrough` | `res-eu-ai-act-classification` | resource | eu-ai-act-explained |
| `fw-singapore-model-framework` | `fw-singapore-model` | framework | future-ai-regulation, global-ai-law-tracker |
| `res-hcaid-process-guide` | `res-hcai-design-process` | resource | future-ai-ethics, human-centered-ai |
| `res-model-card-template` | `res-transparency-disclosure-templates` | resource | ai-transparency |

**Action**: Update article yaml_content to use correct card_id

---

## PART 2: NEW RESOURCE CARDS NEEDED
These resource PDFs exist in `/public/downloads/resources/` but lack database cards.

| Card ID | PDF File | Articles Using |
|---|---|---|
| `res-governance-raci` | governance-raci.pdf | ai-governance-careers |
| `res-automation-levels-decision-tree` | automation-levels-decision-tree.pdf | human-centered-ai |
| `res-seven-pillars-trustworthy-ai` | seven-pillars-trustworthy-ai.pdf | trustworthy-ai |
| `res-design-review-checklist` | design-review-checklist.pdf | human-centered-ai |

**Action**: Create INSERT statements for these resource cards

---

## PART 3: NON-RESOURCE CARDS NEEDED
These cards need to be created (quotes, insights, patterns, scenarios).

### Quotes (2)
- `quote-sam-altman-agi` - Used in: agi-governance
- `quote-nick-bostrom-alignment` - Used in: ai-existential-risk, future-ai-ethics

### Insights (2)
- `insight-ai-extinction-risk-probability` - Used in: ai-existential-risk
- `insight-eu-ai-act-penalty` - Used in: future-ai-regulation, ai-governance-careers, eu-ai-act-explained

### Frameworks (1)
- `fw-china-gen-ai-regulations` - Used in: ai-national-security, future-ai-regulation, global-ai-law-tracker, cross-border-compliance
  - Note: `fw-china-ai-governance` exists but may not cover Gen AI regulations specifically

### Patterns (5)
- `pattern-defense-in-depth` - Used in: ai-safety, trustworthy-ai
- `pattern-strictest-standard-baseline` - Used in: future-ai-regulation, cross-border-compliance
- `pattern-verification-culture` - Used in: ai-transparency
- `pattern-three-lines-model` - Used in: ai-accountability
- `pattern-graduated-automation` - Used in: human-centered-ai

### Scenarios (3)
- `sc-ai-toy-manipulation` - Used in: eu-ai-act-explained
- `sc-2025-compliance-crisis` - Used in: eu-ai-act-explained
- `sc-techserve-iso-journey` - Used in: iso-42001

**Action**: Research content and create INSERT statements for these cards

---

## Next Steps

1. **Execute Part 1 Fixes** - Update 4 article references to use existing cards
2. **Create Part 2 Resource Cards** - 4 new resource card INSERT statements
3. **Research Part 3 Content** - Gather quotes, insights, patterns, scenarios content
4. **Create Part 3 Cards** - 13 new card INSERT statements
5. **Verify** - Re-run analysis to confirm all Layer 3 cards resolved
