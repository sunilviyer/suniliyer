---
title: Untitled
slug: article-14-ai-compute-why-gpus-rule-the-ai-world
path: responsibility
tldr: Explore key concepts and practical applications in AI governance.
contentSections:
  - Training vs. Inference
  - Cloud vs. On-Premises
  - Governance Implications
  - Cost Considerations
  - Future Trends
  - Practical Checklist
  - Further Reading
relatedConcepts: []
crossPathRefs:
tags:
  - ai
  - governance
  - responsibility
category: AI & Technology
image: article-14-ai-compute-why-gpus-rule-the-ai-world.jpg
imageAlt: Untitled
author: Sunil Iyer
publishDate: 2025-12-23
readingTime: 8
seoTitle: Untitled
seoDescription: Explore key concepts and practical applications in AI governance.
---



## Training vs. Inference

<!-- component:list:list-different-compute-requirements -->

### Different Compute Requirements

AI compute divides into two phases with different requirements:

**Training:**
- Teaches the model from data
- Extremely compute-intensive
- Happens once (or periodically for retraining)
- Requires highest-performance hardware
- Can take weeks or months
- Typically done by model developers

**Inference:**
- Uses the trained model to make predictions
- Less compute per request
- Happens continuously in production
- Latency often matters more than throughput
- Cost accumulates with usage
- Done by deployers and users

**Comparison:**

| Aspect | Training | Inference |
<!-- component:table:table-different-compute-requirements -->
|--------|----------|-----------|
| Compute intensity | Extreme | Moderate |
| Duration | Weeks-months | Milliseconds-seconds |
| Hardware focus | Throughput | Latency + cost efficiency |
| Cost structure | Large upfront investment | Ongoing per-use cost |
| Who does it | Model developers | Everyone using the model |


### Inference at Scale

While training gets headlines, inference at scale matters more for most organizations:

<!-- component:template:template-inference-at-scale -->
**Example: ChatGPT inference**
- Millions of users making requests
- Each request requires GPU computation
- Responses must be fast (user experience)
- Costs accumulate with every token generated

**Inference optimization:**
- Quantization: Reduce precision to speed computation
- Pruning: Remove unnecessary model parameters
- Distillation: Train smaller models from larger ones
- Batching: Process multiple requests together
- Caching: Store and reuse common computations

**Inference hardware:**
- Can use less expensive chips than training
- Specialized inference chips emerging (Groq, AWS Inferentia)
- Edge deployment for latency-sensitive applications
- CPU inference possible for smaller models

---


## Cloud vs. On-Premises


### Cloud GPU Options

Major cloud providers offer GPU compute:

| Provider | GPU Options | Key Offering |
<!-- component:table:table-cloud-gpu-options -->
|----------|-------------|--------------|
| AWS | NVIDIA (A100, H100), Trainium, Inferentia | Broadest selection |
| Azure | NVIDIA (A100, H100) | OpenAI partnership |
| Google Cloud | NVIDIA, TPUs | TPU availability |
| Oracle Cloud | NVIDIA (A100, H100) | Competitive pricing |
| CoreWeave | NVIDIA focused | GPU specialist |
| Lambda Labs | NVIDIA focused | ML-focused |

**Cloud advantages:**
- No capital expenditure
- Scale up/down as needed
- Access to latest hardware
- Managed infrastructure
- Geographic flexibility

**Cloud disadvantages:**
- Data leaves your premises
- Ongoing operational costs
- Availability not guaranteed
- Potential vendor lock-in
- Limited customization


### On-Premises Deployment

Running your own GPU infrastructure:

**Requirements:**
- Significant capital investment (millions for serious scale)
- Data center space with adequate power and cooling
- Technical expertise for setup and maintenance
- Ongoing hardware refresh cycles
- Software and systems integration

**When it makes sense:**
- Continuous high utilization
- Strict data residency requirements
- Custom hardware configurations needed
- Long-term cost optimization (at scale)
- Control over availability

**DGX systems:**
NVIDIA sells complete AI systems:
- DGX H100: 8x H100 GPUs, ~$300,000+
- Pre-configured and optimized
- Enterprise support included
- Faster deployment than building custom


### Hybrid Approaches

Many organizations use both:

**Pattern 1: Cloud for training, on-prem for inference**
- Training needs burst capacity
- Inference needs predictable performance
- Balances cost and control

**Pattern 2: On-prem primary, cloud for overflow**
- Regular workloads on owned hardware
- Burst to cloud for peaks
- Requires workload portability

**Pattern 3: Multi-cloud for availability**
- Avoid single-provider dependency
- Geographic distribution
- Requires cloud-agnostic approaches

---


## Governance Implications


### Compute as Governance Lever

Compute requirements create natural governance checkpoints:

**Training governance:**
- Large training runs require significant resources
- Resources come from identifiable providers
- Providers can impose acceptable use policies
- Compute access can be conditioned on compliance

<!-- component:template:template-compute-as-governance-lever -->
**Example:** Cloud providers increasingly require customers to agree to AI acceptable use policies before provisioning GPU instances.


### Concentration of Power

Compute requirements concentrate AI development:

**Who can train frontier models:**
- Requires $100M+ in compute
- Plus massive data and expertise
- Only well-funded organizations qualify
- Creates oligopoly in frontier AI

**Governance implications:**
- Small number of organizations set AI trajectory
- Limited competition may reduce safety incentives
- Concentration enables (or requires) focused oversight
- Compute monitoring can track frontier development


### Compute Governance Proposals

Some propose governing AI through compute:

**Compute monitoring:**
- Track large GPU clusters
- Identify potentially risky training runs
- Enable oversight before deployment
- Analogy: Nuclear material monitoring

**Compute thresholds:**
- Define compute levels triggering oversight
- EU AI Act references training compute in GPAI provisions
- Could require disclosure or assessment above thresholds

**Arguments for:**
- Compute is measurable and physical
- Harder to evade than output-based rules
- Enables proactive rather than reactive governance
- Targets capability-relevant resource

**Arguments against:**
- Efficiency improvements shift thresholds
- May disadvantage smaller players
- Doesn't address existing models
- Could push development to less regulated jurisdictions


### Organizational Governance

For organizations using AI compute:

**Cost governance:**
- GPU costs can explode unexpectedly
- Implement budgets and monitoring
- Optimize utilization
- Consider reserved vs. on-demand pricing

**Access governance:**
- Who can provision GPU resources?
- What approval is needed?
- How is usage tracked?
- What acceptable use policies apply?

**Vendor governance:**
- Review cloud provider terms
- Understand data handling
- Plan for availability issues
- Consider multi-vendor strategy

**Sustainability governance:**
- Track energy consumption
- Consider carbon footprint
- Efficiency optimization
- Reporting requirements (emerging)

---


## Cost Considerations


### Training Costs

| Model Size | Approximate Training Cost |
<!-- component:table:table-training-costs -->
|------------|--------------------------|
| 1B parameters | $50,000 - $200,000 |
| 10B parameters | $500,000 - $2M |
| 100B parameters | $5M - $20M |
| 1T+ parameters | $50M - $200M+ |

**Cost drivers:**
- GPU hours required
- GPU type (H100 vs. A100 vs. older)
- Cloud vs. owned infrastructure
- Electricity costs
- Cooling costs
- Personnel costs
- Failed experiments (most training runs fail)


### Inference Costs

Inference costs accumulate with usage:

<!-- component:template:template-inference-costs -->
**Example: LLM inference pricing (approximate)**

| Provider | Input (per 1M tokens) | Output (per 1M tokens) |
<!-- component:table:table-inference-costs -->
|----------|----------------------|------------------------|
| GPT-4 | $30 | $60 |
| GPT-4o | $2.50 | $10 |
| Claude 3.5 Sonnet | $3 | $15 |
| Claude 3 Opus | $15 | $75 |
| Self-hosted LLaMA | Infrastructure cost | Infrastructure cost |

**Cost scaling:**
- Popular applications can generate millions of requests
- Costs scale linearly with usage
- Efficiency optimization critical at scale
- Model selection significantly impacts costs


### Total Cost of Ownership

Consider full costs:

| Cost Category | Cloud | On-Premises |
<!-- component:table:table-total-cost-of-ownership -->
|---------------|-------|-------------|
| Hardware | Per-use | Capital expense |
| Power | Included | Ongoing cost |
| Cooling | Included | Ongoing cost |
| Space | Included | Real estate cost |
| Maintenance | Included | Staff + contracts |
| Refresh | Automatic | 3-5 year cycles |
| Scaling | Instant | Procurement lag |

---


## Future Trends


### Hardware Evolution

**Near-term (1-3 years):**
- Continued NVIDIA leadership
- AMD gaining share
- More specialized inference chips
- Efficiency improvements

**Medium-term (3-7 years):**
- New architectures for AI
- Photonic computing advances
- Neuromorphic chips
- Quantum-classical hybrids

**Long-term (7+ years):**
- Potentially transformative new paradigms
- Much greater energy efficiency
- Broader access to compute
- Uncertain trajectory


### Market Dynamics

**Watch for:**
- Competition to NVIDIA intensifying
- Cloud providers developing custom chips
- Startups challenging with novel architectures
- Geopolitical impacts on supply chains
- Sustainability pressures driving efficiency

---


## Summary

**Key Takeaways:**

- AI requires specialized hardware (GPUs) that can perform massive parallel computations—training frontier models requires enormous compute resources measured in $100M+

- NVIDIA dominates (~80-90% market share) due to hardware performance and the CUDA software ecosystem that creates switching costs

- The supply chain concentrates in Taiwan (TSMC), creating geopolitical vulnerabilities and supply constraints that limit AI development

- Training (one-time, extremely expensive) and inference (ongoing, per-use) have different hardware requirements and cost structures

- Deployment options include cloud (flexible, operational cost), on-premises (control, capital cost), and hybrid approaches

- Compute concentration means only well-funded organizations can train frontier models, enabling focused oversight but raising competition concerns

- Governance should address costs, access controls, vendor management, and sustainability

- Compute-based governance (monitoring, thresholds) is an emerging regulatory approach referenced in frameworks like the EU AI Act

---


## Practical Checklist

**For organizations using AI compute:**

<!-- component:checklist:checklist-practical-checklist -->
- [ ] Inventory current GPU/compute usage
- [ ] Establish cost monitoring and budgets
- [ ] Define access controls and approval processes
- [ ] Review cloud provider terms and policies
- [ ] Assess concentration risks (single provider dependency)
- [ ] Consider sustainability implications
- [ ] Plan for supply constraints
- [ ] Stay informed on export control requirements

---


## Further Reading

- NVIDIA (2024). "Data Center Products" - Hardware specifications
- Epoch AI. "Trends in Machine Learning Hardware"
- Stanford HAI (2024). "AI Index Report" - Compute trends chapter
- CSET Georgetown. "AI Chips: What They Are and Why They Matter"
- Pilz & Heim (2023). "Compute Governance and AI Safety"

---

*Article 14 of 158 in the AI Governance Mastery series*

*Next: Article 15 - The Environmental Cost of AI – Data Centers, Energy, and Sustainability*
