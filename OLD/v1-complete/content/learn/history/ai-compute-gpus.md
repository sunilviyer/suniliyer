---
type: concept
id: 14
path: history
title: AI Compute & GPUs
slug: ai-compute-gpus
tldr: Modern AI demands specialized computing hardware—GPUs—that can perform massive parallel computations. NVIDIA's 80-90% market dominance, TSMC's manufacturing monopoly, and the multi-million dollar costs of training frontier models create critical governance implications around concentration of power, supply chain vulnerabilities, and who can participate in AI development.
category: AI Fundamentals

# Learning Path
learning_objectives:
  - Understand why AI requires GPUs and how they differ from traditional CPUs
  - Recognize the supply chain concentration (NVIDIA, TSMC) and geopolitical vulnerabilities
  - Differentiate between training and inference compute requirements and costs
  - Evaluate cloud vs on-premises deployment options and their governance implications
  - Apply compute-based governance approaches and organizational controls

# SEO
seo_keywords:
  - gpu computing
  - nvidia dominance
  - ai training costs
  - inference optimization
  - cuda ecosystem
  - ai supply chain
  - compute governance
  - ai accelerators
  - tensor cores
  - tsmc semiconductor

# Knowledge Graph
related_concepts:
  - foundation-models
  - deep-learning-explained
  - large-language-models
  - environmental-cost-ai
  - ai-technology-stack

cross_path_refs:
  - path: terminology
    concepts:
      - training-vs-inference
      - quantization
      - model-parameters
  - path: risk
    concepts:
      - concentration-risk
      - supply-chain-risk
      - vendor-lock-in

# Visual Components
components:
  - type: image_prompt
    id: hero
    prompt: "GPU data center visualization, rows of NVIDIA GPUs with glowing green lights, neural network computations flowing through parallel processors, high-tech server room, professional technology photography, dramatic lighting, blue and green color scheme"

  - type: table
    id: nvidia-dominance
    label: "NVIDIA Flagship Products"
    section: "NVIDIA's Dominance"

  - type: flowchart
    id: cuda-network-effects
    label: "CUDA Network Effects"
    section: "Why NVIDIA Wins"

  - type: table
    id: training-vs-inference
    label: "Training vs Inference Comparison"
    section: "Different Compute Requirements"

  - type: template
    id: chatgpt-inference-example
    label: "ChatGPT Inference at Scale"
    section: "Inference at Scale"
    template_link: /examples/chatgpt-inference-scale

  - type: table
    id: cloud-providers
    label: "Cloud GPU Options"
    section: "Cloud GPU Options"

  - type: table
    id: training-costs
    label: "Model Training Costs"
    section: "Training Costs"

  - type: table
    id: inference-costs
    label: "LLM Inference Pricing"
    section: "Inference Costs"

  - type: table
    id: total-cost-ownership
    label: "Total Cost of Ownership"
    section: "Cost Considerations"

  - type: template
    id: cloud-aup-example
    label: "Cloud Provider Acceptable Use"
    section: "Compute as Governance Lever"
    template_link: /examples/cloud-acceptable-use-policies

  - type: checklist
    id: organizational-checklist
    label: "Organizational Compute Governance"
    section: "Practical Checklist"

# Metadata
word_count: 2156
source_articles:
  - article-14-ai-compute-why-gpus-rule-the-ai-world.md
processed_date: 2025-12-19
---

## Introduction

When ChatGPT launched in November 2022, OpenAI wasn't just running software on regular servers. Behind the scenes, tens of thousands of NVIDIA GPUs worked in parallel to process each conversation. Training GPT-4 required compute resources costing over $100 million. Inference—just running the model for users—consumes thousands of GPUs continuously.

This isn't a software story. It's a hardware story.

Modern AI doesn't run on traditional computers. It requires specialized chips called GPUs (Graphics Processing Units) that can perform thousands of calculations simultaneously. The cost, availability, and control of these chips shapes who can build AI, where AI development happens, and how AI can be governed.

For governance professionals, compute represents a critical leverage point: it's physical, measurable, expensive, and concentrated in a small number of organizations and geographic locations.

---

## Why AI Needs GPUs

### The Computational Challenge

Deep learning—the technology behind modern AI—trains models by:

1. **Feeding data through neural networks** (billions of parameters)
2. **Calculating prediction errors** across the entire dataset
3. **Adjusting parameters** to reduce errors
4. **Repeating millions of times** until the model learns patterns

Each training iteration requires trillions of mathematical operations. Training a large language model might involve:

- 10^24 floating-point operations (FLOPs)
- Processing terabytes of text data
- Weeks or months of continuous computation
- Thousands of GPUs working in parallel

Traditional CPUs (Central Processing Units) can't handle this efficiently. They're designed for sequential operations—doing one thing at a time, very quickly. AI needs the opposite: doing millions of simple things simultaneously.

### Enter the GPU

GPUs were originally designed for rendering graphics—calculating the color of millions of pixels simultaneously. This same parallel architecture works perfectly for AI:

**GPU advantages for AI:**

- **Massive parallelism**: Thousands of cores vs. dozens in CPUs
- **High memory bandwidth**: Moving data quickly between memory and processors
- **Specialized tensor cores**: Hardware optimized for AI matrix operations
- **Floating-point performance**: Trillions of operations per second

A single NVIDIA H100 GPU can perform about 2,000 trillion operations per second (2 petaFLOPS) on AI workloads. Training frontier models requires connecting thousands of these together.

---

## The GPU Landscape

### NVIDIA's Dominance

NVIDIA controls approximately 80-90% of the AI accelerator market. This dominance stems from both hardware leadership and software lock-in:

**Hardware advantages:**
- Consistent architecture improvements
- High memory bandwidth (critical for AI workloads)
- Tensor Cores optimized for matrix operations
- NVLink for high-speed GPU-to-GPU communication
- Proven reliability and performance at massive scale

**The CUDA moat:**
NVIDIA's real advantage is CUDA—its parallel computing platform and programming model. After 15+ years of development:
- Most AI software is written for CUDA
- Extensive libraries optimize AI operations (cuDNN, TensorRT)
- Deep integration with AI frameworks (PyTorch, TensorFlow)
- Massive developer community and knowledge base
- Switching costs are enormous

**Current flagship products:**

| Product | Year | AI Performance | Memory | Approximate Price |
<!-- component:table:nvidia-dominance -->
|---------|------|----------------|--------|-------------------|
| A100 | 2020 | 312 TFLOPS (FP16) | 40/80 GB | $10,000-$15,000 |
| H100 | 2022 | 989 TFLOPS (FP16) | 80 GB | $25,000-$40,000 |
| H200 | 2024 | ~989 TFLOPS | 141 GB | $30,000-$40,000+ |
| B200 | 2024 | ~2,500 TFLOPS | 192 GB | $30,000-$40,000+ |

### The Competition

**AMD:** MI300X series competes with H100 on benchmarks. Growing cloud market share. ROCm software ecosystem still less mature than CUDA but improving. Generally more price-competitive.

**Intel:** Gaudi accelerators from Habana acquisition. Focus on enterprise market. Smaller AI presence, software ecosystem challenges persist.

**Google TPUs:** Tensor Processing Units optimized for TensorFlow and JAX. Competitive performance but only available through Google Cloud. Limited portability.

**Startups:** Cerebras (wafer-scale chips), Graphcore (IPUs), SambaNova (dataflow architecture), Groq (inference-optimized). Innovative architectures but limited scale and ecosystem support.

### Why NVIDIA Wins

The CUDA ecosystem creates a powerful network effect:

<!-- component:flowchart:cuda-network-effects -->
```
More developers use NVIDIA
    ↓
More AI software optimized for CUDA
    ↓
Better performance on NVIDIA hardware
    ↓
More organizations choose NVIDIA
    ↓
More NVIDIA investment in CUDA tools
    ↓
[Cycle reinforces dominance]
```

**Ecosystem lock-in:**
- Research papers benchmark on NVIDIA
- Tutorials assume NVIDIA GPUs
- Production systems standardize on NVIDIA
- Technical expertise concentrates on NVIDIA
- Rewriting for alternatives risks bugs and performance loss

---

## Supply Chain Realities

### Manufacturing Concentration

Modern AI chips use cutting-edge semiconductor fabrication:

**The manufacturing chain:**
1. Design (NVIDIA, AMD, etc.)
2. Fabrication (TSMC, Samsung)
3. Packaging and testing
4. System integration
5. Data center deployment

**Critical bottleneck: TSMC**

Taiwan Semiconductor Manufacturing Company (TSMC) fabricates the most advanced chips for NVIDIA, AMD, and Apple. Their leading-edge processes (currently 3nm, moving toward 2nm) are years ahead of competitors.

**Geographic concentration:**
- TSMC: Taiwan (majority of advanced chip production)
- Samsung: South Korea (secondary advanced production)
- Intel: United States (catching up on advanced nodes)

This concentration creates significant vulnerability.

### Geopolitical Implications

AI chips have become a geopolitical flashpoint:

**US export controls (2022-2024):**
- Restrict advanced AI chip exports to China
- Target NVIDIA A100, H100, and equivalent performance levels
- Include manufacturing equipment restrictions
- Extend to cloud computing access from Chinese entities

**China's response:**
- Accelerated domestic chip development programs
- Stockpiling chips before restrictions took effect
- NVIDIA creating China-specific chips with reduced capabilities
- Huawei and others developing domestic AI accelerators

**Governance implications:**
- Supply availability affected by international relations
- Export controls limit where AI systems can be deployed
- Due diligence may require verifying chip sourcing
- Regulatory compliance essential for international AI projects

### Supply Constraints

Demand for advanced AI chips exceeds supply:

**Current situation:**
- Wait times for H100s measured in months
- Cloud GPU availability often limited or allocated
- Prices remain high despite production scaling
- New customers face allocation limits from providers

**Why constraints persist:**
- Explosive growth in AI demand
- Limited advanced fabrication capacity
- Complex manufacturing with low yields at cutting edge
- Infrastructure requirements (power, cooling) at data centers

**Implications:**
- AI development bottlenecked by hardware access
- Well-funded organizations have significant advantages
- Cloud providers must allocate scarce GPU resources
- Innovation constrained by silicon availability

---

## Training vs. Inference

### Different Compute Requirements

AI compute divides into two phases with fundamentally different characteristics:

**Training:**
- Teaches the model patterns from data
- Extremely compute-intensive
- Happens once (or periodically for retraining)
- Requires highest-performance hardware
- Can take weeks or months for frontier models
- Typically done only by model developers

**Inference:**
- Uses the trained model to make predictions
- Less compute per individual request
- Happens continuously in production
- Latency often matters more than raw throughput
- Costs accumulate with every use
- Done by anyone deploying the model

**Comparison:**

| Aspect | Training | Inference |
<!-- component:table:training-vs-inference -->
|--------|----------|-----------|
| **Compute intensity** | Extreme | Moderate per request |
| **Duration** | Weeks to months | Milliseconds to seconds |
| **Hardware priority** | Throughput | Latency + efficiency |
| **Cost structure** | Large upfront investment | Ongoing per-use cost |
| **Who performs it** | Model developers | Everyone using the model |
| **Optimization focus** | Scale and parallelization | Speed and cost efficiency |

### Inference at Scale

While training gets headlines, inference at scale matters more for most organizations:

<!-- component:template:chatgpt-inference-example -->
**Example: ChatGPT inference**
- Millions of users making concurrent requests
- Each request requires GPU computation
- Responses must be fast (user experience requirement)
- Costs accumulate with every token generated
- Requires thousands of GPUs running continuously

**Inference optimization techniques:**
- **Quantization**: Reduce numerical precision to speed computation
- **Pruning**: Remove unnecessary model parameters
- **Distillation**: Train smaller models to mimic larger ones
- **Batching**: Process multiple requests together
- **Caching**: Store and reuse common computations

**Inference hardware options:**
- Less expensive GPUs than training requires
- Specialized inference chips (Groq, AWS Inferentia)
- Edge deployment for latency-sensitive applications
- CPU inference possible for smaller models

---

## Deployment Options

### Cloud GPU Options

Major cloud providers offer GPU compute for AI workloads:

| Provider | GPU Options | Key Differentiator |
<!-- component:table:cloud-providers -->
|----------|-------------|-------------------|
| AWS | NVIDIA (A100, H100), Trainium, Inferentia | Broadest hardware selection |
| Azure | NVIDIA (A100, H100) | OpenAI partnership, integration |
| Google Cloud | NVIDIA, TPUs | Proprietary TPU availability |
| Oracle Cloud | NVIDIA (A100, H100) | Competitive pricing |
| CoreWeave | NVIDIA focused | GPU specialist, performance |
| Lambda Labs | NVIDIA focused | ML-optimized infrastructure |

**Cloud advantages:**
- No capital expenditure required
- Scale resources up or down as needed
- Access to latest hardware generations
- Managed infrastructure and maintenance
- Geographic distribution options

**Cloud considerations:**
- Data leaves your physical premises
- Ongoing operational costs accumulate
- Availability not always guaranteed
- Potential vendor lock-in risks
- Limited infrastructure customization

### On-Premises Deployment

Running your own GPU infrastructure:

**Requirements:**
- Significant capital investment (millions for serious scale)
- Data center space with adequate power and cooling
- Technical expertise for setup and ongoing maintenance
- Hardware refresh cycles every 3-5 years
- Software stack and systems integration

**When it makes sense:**
- Continuous high GPU utilization
- Strict data residency or sovereignty requirements
- Custom hardware configurations needed
- Long-term cost optimization (at sufficient scale)
- Control over compute availability critical

**NVIDIA DGX systems:**
Pre-configured AI computing systems:
- DGX H100: 8× H100 GPUs, ~$300,000+
- Optimized configuration for AI workloads
- Enterprise support included
- Faster deployment than custom builds

### Hybrid Approaches

Many organizations combine deployment models:

**Pattern 1: Cloud for training, on-premises for inference**
- Training needs burst capacity
- Inference needs predictable performance
- Balances cost and control

**Pattern 2: On-premises primary, cloud for overflow**
- Regular workloads on owned hardware
- Burst to cloud for peak demands
- Requires workload portability

**Pattern 3: Multi-cloud for resilience**
- Avoid single-provider dependency
- Geographic distribution
- Requires cloud-agnostic architectures

---

## Cost Considerations

### Training Costs

Training costs scale dramatically with model size:

| Model Size | Approximate Training Cost |
<!-- component:table:training-costs -->
|------------|--------------------------|
| 1B parameters | $50,000 - $200,000 |
| 10B parameters | $500,000 - $2M |
| 100B parameters | $5M - $20M |
| 1T+ parameters (frontier) | $50M - $200M+ |

**Cost drivers:**
- GPU hours required for training run
- GPU type (H100 vs. A100 vs. older generations)
- Cloud vs. owned infrastructure economics
- Electricity costs (massive consumption)
- Cooling infrastructure costs
- Personnel costs (ML engineers, researchers)
- Failed experiments (most training runs don't succeed)

### Inference Costs

Inference costs accumulate with usage and can exceed training costs at scale:

**LLM inference pricing (approximate, per 1M tokens):**

| Provider | Input Tokens | Output Tokens |
<!-- component:table:inference-costs -->
|----------|-------------|---------------|
| GPT-4 | $30 | $60 |
| GPT-4o | $2.50 | $10 |
| Claude 3.5 Sonnet | $3 | $15 |
| Claude 3 Opus | $15 | $75 |
| Self-hosted (e.g., LLaMA) | Infrastructure cost | Infrastructure cost |

**Cost scaling:**
- Popular applications generate millions of requests daily
- Costs scale linearly with usage volume
- Efficiency optimization becomes critical at scale
- Model selection significantly impacts economics

### Total Cost of Ownership

Consider the full cost picture:

| Cost Element | Cloud | On-Premises |
<!-- component:table:total-cost-ownership -->
|--------------|-------|-------------|
| **Hardware** | Per-use pricing | Capital expenditure |
| **Electricity** | Included in pricing | Ongoing operational cost |
| **Cooling** | Included | Separate infrastructure cost |
| **Physical space** | Included | Real estate cost |
| **Maintenance** | Included | Staff + service contracts |
| **Hardware refresh** | Automatic upgrades | 3-5 year replacement cycles |
| **Scaling** | Instant | Procurement lead time |
| **Utilization risk** | Pay only for usage | Pay for capacity whether used or not |

---

## Governance Implications

### Compute as Governance Lever

Compute requirements create natural governance checkpoints:

**Training governance:**
Large training runs require identifiable resources from specific providers. This creates intervention points:

- Providers can impose acceptable use policies
- Access can be conditioned on compliance requirements
- Large compute allocations are visible and trackable
- Resource provisioning can require approvals

<!-- component:template:cloud-aup-example -->
**Example:** Major cloud providers increasingly require customers to agree to AI acceptable use policies before provisioning GPU instances. These policies prohibit certain applications (e.g., surveillance in some jurisdictions, generation of certain content types) and create contractual compliance obligations.

### Concentration of Power

Compute requirements concentrate AI development in well-funded organizations:

**Who can train frontier models:**
- Requires $100M+ in compute resources
- Plus massive datasets and rare expertise
- Only highly capitalized organizations qualify
- Creates effective oligopoly in frontier AI

**Governance implications:**
- Small number of organizations shape AI trajectory
- Limited competition may reduce safety incentives
- Concentration enables focused oversight (if regulators choose)
- Compute monitoring could track frontier development activities

### Compute-Based Governance Proposals

Some policy proposals suggest governing AI through compute:

**Compute monitoring:**
- Track large GPU clusters and training runs
- Identify potentially high-risk development activities
- Enable oversight before deployment
- Analogy: Nuclear material accounting and monitoring

**Compute thresholds:**
- Define compute levels that trigger regulatory requirements
- EU AI Act references training compute in GPAI provisions
- Could require disclosure or assessment above thresholds
- Enables risk-proportionate regulation

**Arguments for compute-based governance:**
- Compute is measurable and physical (hard to hide)
- More difficult to evade than output-based rules
- Enables proactive rather than reactive oversight
- Directly targets capability-relevant resources

**Arguments against:**
- Efficiency improvements shift threshold relevance over time
- May disadvantage smaller players and researchers
- Doesn't address existing deployed models
- Could push development to less-regulated jurisdictions

### Organizational Governance

For organizations using AI compute:

**Cost governance:**
- GPU costs can escalate rapidly and unexpectedly
- Implement budgets, monitoring, and approval processes
- Optimize utilization to control costs
- Consider reserved vs. on-demand pricing strategies

**Access governance:**
- Who can provision GPU resources?
- What approval processes are required?
- How is usage tracked and attributed?
- What acceptable use policies apply?

**Vendor governance:**
- Review cloud provider terms and data handling
- Understand service level agreements
- Plan for availability constraints
- Consider multi-vendor strategies for resilience

**Sustainability governance:**
- Track energy consumption and carbon footprint
- Prioritize efficiency optimization
- Consider renewable energy sourcing
- Prepare for emerging reporting requirements

---

## Future Trends

### Hardware Evolution

**Near-term (1-3 years):**
- Continued NVIDIA leadership likely
- AMD gaining market share gradually
- More specialized inference chips emerging
- Steady efficiency improvements

**Medium-term (3-7 years):**
- New architectures specifically for AI workloads
- Photonic computing advances
- Neuromorphic chip development
- Quantum-classical hybrid systems

**Long-term (7+ years):**
- Potentially transformative computing paradigms
- Orders of magnitude efficiency gains possible
- Broader access to compute resources
- Trajectory remains uncertain

### Market Dynamics to Watch

- Competition to NVIDIA intensifying from multiple directions
- Cloud providers developing custom AI chips
- Startups challenging incumbents with novel architectures
- Geopolitical impacts on supply chains and availability
- Sustainability pressures driving efficiency innovation

---

## Key Takeaways

**Compute is critical infrastructure for AI:**
- Modern AI requires specialized hardware (GPUs) for parallel computation
- Training frontier models costs $100M+ in compute resources
- Inference at scale requires thousands of GPUs running continuously

**Concentration creates governance implications:**
- NVIDIA holds 80-90% market share (hardware + CUDA ecosystem lock-in)
- TSMC manufactures most advanced chips (Taiwan geographic concentration)
- Only well-funded organizations can train frontier models
- Supply chain vulnerable to geopolitical disruption

**Training and inference differ fundamentally:**
- Training: one-time, extremely expensive, highest-performance hardware
- Inference: ongoing, per-use costs, optimization for speed and efficiency
- Organizations must plan for both phases

**Deployment involves tradeoffs:**
- Cloud: flexibility, operational cost, data considerations
- On-premises: control, capital cost, infrastructure requirements
- Hybrid: combines advantages but adds complexity

**Compute enables governance:**
- Physical, measurable, concentrated resources create intervention points
- Compute thresholds emerging in regulation (EU AI Act)
- Organizational governance should address costs, access, vendors, sustainability
- Monitoring large training runs could enable proactive oversight

---

## Practical Checklist

**Organizational compute governance checklist:**

<!-- component:checklist:organizational-checklist -->
- [ ] Inventory current GPU and compute usage across the organization
- [ ] Establish cost monitoring, budgets, and approval processes
- [ ] Define access controls: who can provision GPU resources?
- [ ] Review cloud provider terms, policies, and data handling practices
- [ ] Assess vendor concentration risks and consider multi-provider strategy
- [ ] Track energy consumption and evaluate sustainability implications
- [ ] Plan for supply constraints and allocation limits
- [ ] Stay informed on export control requirements for international deployments
- [ ] Optimize utilization to control costs (batching, scheduling, right-sizing)
- [ ] Document acceptable use policies for organizational AI compute

---

## Further Reading

- NVIDIA Data Center Documentation - Technical specifications and architecture
- Epoch AI: "Trends in Machine Learning Hardware" - Compute tracking and analysis
- Stanford HAI AI Index Report - Annual compute trends and benchmarks
- CSET Georgetown: "AI Chips: What They Are and Why They Matter"
- Pilz & Heim (2023): "Compute Governance and AI Safety" - Policy frameworks
- EU AI Act provisions on general-purpose AI and compute thresholds

---

*Concept 14 of 15 in the History learning path*

*Next: Environmental Cost of AI - Data centers, energy consumption, and sustainability*
