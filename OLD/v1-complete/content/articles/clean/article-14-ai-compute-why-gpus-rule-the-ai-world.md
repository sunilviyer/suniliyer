
![Article 14: AI Compute – Why GPUs Rule the AI World]({{IMAGE_PLACEHOLDER_article-14-ai-compute-why-gpus-rule-the-ai-world}})

---
tldr: "This article provides a comprehensive framework for AI governance and implementation. It provides actionable insights for achieving regulatory compliance and organizational readiness."
category: "AI Fundamentals"
learning_objectives:

  - "Understand the key concepts and principles of ai governance frameworks"
  - "Implement regulatory requirements in real-world scenarios"
  - "Evaluate risk assessment frameworks for organizational compliance"
seo_keywords:

  - "article"
  - "compute"
  - "AI governance"
  - "rule"
  - "world introduction here"
word_count: 2247
processed_date: "2025-12-18T20:00:54.454Z"
---


## The GPU Landscape


### NVIDIA's Dominance

NVIDIA controls approximately 80-90% of the AI accelerator market. This dominance stems from both hardware and software:

**Hardware leadership:**

- Consistent architecture improvements
- High memory bandwidth (critical for AI)
- Tensor Cores optimized for AI operations
- NVLink for connecting multiple GPUs
- Reliability and performance at scale

**Software ecosystem (CUDA):**

- CUDA: NVIDIA's parallel computing platform
- 15+ years of development and optimization
- Extensive library of AI tools (cuDNN, TensorRT)
- Deep integration with AI frameworks (PyTorch, TensorFlow)
- Massive developer community

**Current flagship products:**

| Product | Year | AI Performance | Memory | Price Range |
|---------|------|----------------|--------|-------------|
| A100 | 2020 | 312 TFLOPS (FP16) | 40/80 GB | $10,000-15,000 |
| H100 | 2022 | 989 TFLOPS (FP16) | 80 GB | $25,000-40,000 |
| H200 | 2024 | ~989 TFLOPS | 141 GB | $30,000-40,000+ |
| B200 | 2024 | ~2,500 TFLOPS | 192 GB | $30,000-40,000+ |


### The Competition

**AMD:**

- MI300X: Competitive with H100 on some benchmarks
- Growing market share, especially in cloud
- ROCm software ecosystem (less mature than CUDA)
- Price competitive

**Intel:**

- Gaudi accelerators (from Habana acquisition)
- Enterprise market focus
- Software ecosystem challenges
- Smaller AI market presence

**Google TPUs:**

- Tensor Processing Units: Custom AI chips
- Available only through Google Cloud
- Optimized for TensorFlow (and now JAX)
- Competitive performance, limited availability

**Startups:**

- Cerebras: Wafer-scale chips (entire wafer = one chip)
- Graphcore: Intelligence Processing Units (IPUs)
- SambaNova: Dataflow architecture
- Groq: Inference-optimized chips
- Innovative architectures, limited scale


### Why NVIDIA Wins (So Far)

**The CUDA moat:**
Most AI software is written for CUDA. Switching to alternatives means:

- Rewriting code
- Testing on new architecture
- Risking bugs and performance issues
- Losing NVIDIA-specific optimizations

**Network effects:**

- More users → More software written for CUDA
- More software → More users choose NVIDIA
- More users → More NVIDIA investment in CUDA
- Cycle reinforces dominance

**Ecosystem lock-in:**

- Research papers use NVIDIA
- Tutorials assume NVIDIA
- Production systems run on NVIDIA
- Expertise concentrates on NVIDIA

---


## The Supply Chain


### Semiconductor Manufacturing

Modern AI chips are manufactured using cutting-edge semiconductor fabrication:

**The manufacturing chain:**

```
Design (NVIDIA, AMD, etc.)
    ↓
Fabrication (TSMC, Samsung)
    ↓
Packaging and Testing
    ↓
System Integration
    ↓
Data Centers
```

**Key bottleneck: TSMC**
Taiwan Semiconductor Manufacturing Company (TSMC) fabricates the most advanced chips for NVIDIA, AMD, Apple, and others. Their leading-edge processes (currently 3nm, moving to 2nm) are years ahead of competitors.

**Geographic concentration:**

- TSMC: Taiwan (majority of advanced production)
- Samsung: South Korea
- Intel: US (catching up on advanced nodes)


### Geopolitical Implications

AI chips have become a geopolitical flashpoint:

**US export controls (2022-2024):**

- Restrict advanced AI chip exports to China
- Target NVIDIA A100, H100, and equivalents
- Include manufacturing equipment restrictions
- Affect cloud access from Chinese entities

**China's response:**

- Domestic chip development acceleration
- Stockpiling before restrictions
- NVIDIA creating China-specific (limited) chips
- Huawei developing AI accelerators

**Governance implications:**

- Supply availability may be affected by geopolitics
- Export controls may limit where AI can be deployed
- Due diligence on chip sourcing may be required
- Regulatory compliance for international AI projects


### Supply Constraints

Demand for AI chips exceeds supply:

**Current situation:**

- Wait times for H100s measured in months
- Cloud GPU availability limited
- Prices remain high despite scale
- New customers face allocation limits

**Causes:**

- Explosive AI demand growth
- Limited advanced fabrication capacity
- Complex manufacturing (low yields at cutting edge)
- Infrastructure requirements (power, cooling)

**Implications:**

- AI development constrained by hardware access
- Wealthy organizations have advantages
- Cloud providers allocate scarce supply
- Innovation bottlenecked by silicon

---


## Training vs. Inference


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
|--------|----------|-----------|
| Compute intensity | Extreme | Moderate |
| Duration | Weeks-months | Milliseconds-seconds |
| Hardware focus | Throughput | Latency + cost efficiency |
| Cost structure | Large upfront investment | Ongoing per-use cost |
| Who does it | Model developers | Everyone using the model |


### Inference at Scale

While training gets headlines, inference at scale matters more for most organizations:

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

**Example: LLM inference pricing (approximate)**

| Provider | Input (per 1M tokens) | Output (per 1M tokens) |
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
