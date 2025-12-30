---
type: concept
id: 15
path: history
title: Environmental Cost of AI
slug: environmental-cost-ai
tldr: AI systems have a substantial and rapidly growing environmental footprint. Training GPT-3 generated ~552 tonnes of CO2 equivalent to 550 transatlantic flights. Inference at scale compounds this impact daily. Geographic location, energy sources, model size, and deployment scale drive environmental costs that organizations must measure, mitigate, and report under emerging regulations.
category: AI Fundamentals

# Learning Path
learning_objectives:
  - Understand the environmental footprint of AI training and inference operations
  - Recognize drivers of AI environmental impact (model size, scale, inefficiency)
  - Measure AI energy consumption and carbon emissions using available frameworks
  - Apply mitigation strategies including efficiency improvements and clean energy
  - Integrate environmental considerations into AI governance and reporting

# SEO
seo_keywords:
  - ai carbon footprint
  - sustainable ai
  - ai energy consumption
  - data center emissions
  - green computing
  - ai environmental impact
  - mlops sustainability
  - carbon accounting
  - ai water usage
  - embodied carbon

# Knowledge Graph
related_concepts:
  - ai-compute-gpus
  - foundation-models
  - large-language-models
  - deep-learning-explained
  - ai-technology-stack

cross_path_refs:
  - path: terminology
    concepts:
      - training-vs-inference
      - power-usage-effectiveness
      - carbon-intensity
  - path: risk
    concepts:
      - sustainability-risk
      - reputational-risk
      - regulatory-compliance

example_refs:
  - gpt3-training-emissions
  - chatgpt-water-consumption
  - google-24-7-carbon-free

# Visual Components
components:
  - type: image_prompt
    id: hero
    prompt: "Data center environmental visualization, rows of servers with energy consumption metrics overlay, carbon footprint visualization, green leaves contrasting with technology, sustainable computing concept, professional infographic style, earth tones with technology blue, climate impact theme"

  - type: table
    id: energy-examples
    label: "AI Model Training Energy Consumption"
    section: "The Scale of AI's Energy Footprint"

  - type: table
    id: carbon-intensity
    label: "Grid Carbon Intensity by Region"
    section: "From Energy to Carbon"

  - type: table
    id: metrics-tracking
    label: "Environmental Metrics to Track"
    section: "Metrics to Track"

  - type: table
    id: model-efficiency
    label: "Model Selection for Efficiency"
    section: "Model Selection"

  - type: table
    id: governance-actions
    label: "Governance Integration Actions"
    section: "Governance Integration"

  - type: table
    id: reporting-framework
    label: "Environmental Reporting Framework"
    section: "Reporting Requirements"

  - type: list
    id: current-regulations
    label: "Current Environmental Requirements"
    section: "Current Requirements"

  - type: list
    id: emerging-regulations
    label: "Emerging Environmental Requirements"
    section: "Emerging Requirements"

  - type: template
    id: gpt3-case-study
    label: "GPT-3 Training Emissions Case Study"
    section: "The Scale of AI's Energy Footprint"
    template_link: /examples/gpt3-training-emissions

  - type: checklist
    id: sustainability-checklist
    label: "Organizational Sustainability Checklist"
    section: "Practical Checklist"

# Metadata
word_count: 2247
source_articles:
  - article-15-the-environmental-cost-of-ai-data-centers-energy-.md
processed_date: 2025-12-19
---

## Introduction

In 2019, researchers at the University of Massachusetts Amherst calculated that training a single large AI model can emit as much carbon as five cars over their entire lifetimes—including manufacturing. Training GPT-3 generated an estimated 552 tonnes of CO2 equivalent—roughly the same as 550 transatlantic flights or 120 cars driven for a year.

And that's just training. Once deployed, inference at scale compounds the environmental impact daily. ChatGPT's massive user base means millions of GPU hours consumed continuously, with associated energy and water costs.

AI's environmental footprint is substantial, rapidly growing, and increasingly subject to regulatory scrutiny. For governance professionals, understanding and managing this impact is becoming essential—both for compliance and for organizational sustainability commitments.

This isn't about preventing AI development. It's about understanding the environmental costs, measuring them accurately, implementing reasonable mitigation strategies, and being transparent about tradeoffs.

---

## The Scale of AI's Energy Footprint

### Training Energy Consumption

AI model training consumes enormous amounts of electricity:

<!-- component:template:gpt3-case-study -->
**Documented examples:**

| Model | Training Energy | Carbon Emissions | Comparison |
<!-- component:table:energy-examples -->
|-------|----------------|------------------|------------|
| GPT-3 (2020) | 1,287 MWh | ~552 tonnes CO2e | 120 cars/year |
| BLOOM (2022) | ~433 MWh | ~25 tonnes CO2e (France grid) | Lower due to nuclear power |
| Gopher (2021) | ~1,066 MWh | ~380 tonnes CO2e | 85 cars/year |
| Average large LLM | 500-2,000 MWh | 200-800 tonnes CO2e | Highly variable by location |

**Key insights:**
- Training frontier models requires megawatt-hours of electricity
- Carbon emissions depend heavily on energy source (coal vs. renewable)
- Public disclosure remains limited—most models lack published data
- Each new generation of models tends to be larger and more energy-intensive

### Inference at Scale

While training gets headlines, inference can exceed training's environmental impact for popular models:

**ChatGPT inference estimates:**
- Serves 100+ million users generating billions of requests
- Each response requires GPU computation
- Estimated 500 ml of water per 20-50 queries (cooling requirements)
- Daily inference energy likely exceeds training energy within months of launch
- Cumulative environmental impact grows with every conversation

**The inference challenge:**
- Training: one-time cost
- Inference: continuous, ongoing cost that scales with usage
- Popular models multiply environmental impact through deployment
- Every new feature or integration adds inference load

### Infrastructure Overhead

Beyond direct computation, supporting infrastructure adds environmental costs:

**Data center overhead:**
- Power Usage Effectiveness (PUE): ratio of total facility power to IT equipment power
- Industry average PUE: ~1.5-1.6 (50-60% overhead for cooling, power delivery)
- Best-in-class facilities: ~1.1-1.2 PUE
- Redundancy for reliability multiplies resource requirements

**Network infrastructure:**
- Data transmission between data centers
- Content delivery networks
- Edge computing infrastructure
- Each layer adds energy consumption

---

## The Carbon Footprint

### From Energy to Carbon

Energy consumption translates to carbon emissions based on electricity source. Identical AI workloads have vastly different carbon footprints depending on location:

**Grid carbon intensity (kg CO2 per kWh):**

| Region/Source | Carbon Intensity | Impact |
<!-- component:table:carbon-intensity -->
|---------------|------------------|--------|
| Coal power | 0.9-1.0 kg CO2/kWh | Highest emissions |
| Natural gas | 0.4-0.5 kg CO2/kWh | Moderate emissions |
| US average grid | 0.4 kg CO2/kWh | Mixed sources |
| EU average grid | 0.3 kg CO2/kWh | More renewables |
| France (nuclear-heavy) | 0.06 kg CO2/kWh | Very low operational emissions |
| Norway (hydro-heavy) | 0.02 kg CO2/kWh | Near-zero operational emissions |
| 100% renewable | ~0 kg CO2/kWh | Zero operational (embodied carbon remains) |

**Geographic implications:**
- Same training run in coal-powered region: 10x+ emissions vs. renewable-powered region
- Location choice is a critical sustainability decision
- Cloud providers increasingly consider grid mix in data center siting
- Time-shifting compute to match renewable availability emerging as strategy

### Embodied Carbon

Beyond operational emissions, hardware manufacturing contributes significant embodied carbon:

**Hardware embodied emissions:**
- **GPU manufacturing**: 150-350 kg CO2e per chip
  - Semiconductor fabrication is extremely energy-intensive
  - Requires rare earth mining and processing
  - Complex global supply chains
- **Server systems**: 500-2,000 kg CO2e per server
  - Includes all components, assembly, transportation
- **For short hardware lifecycles**, embodied carbon can exceed operational carbon

**Infrastructure embodied emissions:**
- Data center construction materials (concrete, steel)
- Cooling system manufacturing and installation
- Power delivery equipment
- Network infrastructure
- Can take years of efficient operation to "pay back" construction emissions

### Water Consumption

AI systems consume substantial water for cooling:

**Data center water use:**
- Evaporative cooling is efficient but water-intensive
- **GPT-3 training**: estimated 700,000 liters of water consumed
- **ChatGPT inference**: estimated 500 ml per 20-50 queries
- Cumulative water consumption at scale is substantial

**Geographic water stress:**
- Water availability varies dramatically by region
- Some data center locations strain local water supplies
- Drought conditions exacerbate concerns
- Cooling efficiency vs. water use creates tradeoffs

---

## What Drives AI's Environmental Impact

### Model Size and Scaling

Larger models require exponentially more resources:

**Scaling dynamics:**
- Energy scales roughly with (parameter count × training tokens)
- Doubling model size often more than doubles energy (3-4× typical)
- Frontier models grow with each generation
- Competitive pressures push toward larger models
- No natural stopping point in capability race

**The size arms race:**
- Larger models often (but not always) perform better
- First-mover advantages create pressure to scale quickly
- Environmental costs secondary to capability competition
- Each generation substantially larger than previous

### Training Inefficiency and Experimentation

Much training energy produces no final value:

**Experimentation overhead:**
- Most training runs fail or produce suboptimal models
- Hyperparameter search requires dozens or hundreds of runs
- Architecture exploration multiplies compute requirements
- Final successful model represents small fraction of total compute invested

**Estimates suggest:**
- 10-100× more compute in experimentation than final training run
- Failed runs contribute emissions without ultimate benefit
- Research culture emphasizes capability over efficiency
- Waste is inherent to current development processes

### Deployment Scale and Feature Proliferation

AI proliferation multiplies environmental impact:

**Deployment patterns:**
- AI added to increasing number of products and services
- Default-on AI features in applications
- Background AI processing (recommendations, personalization)
- Every new feature or integration adds inference load

**Usage patterns:**
- Popular applications serve millions or billions of users
- Each user interaction triggers inference
- Cumulative impact grows linearly with adoption
- Success multiplies environmental footprint

### Infrastructure Redundancy

Reliability requirements multiply resource consumption:

**Redundancy overhead:**
- Backup systems for availability and fault tolerance
- Geographic distribution for latency and resilience
- Hot standby capacity (running but unused)
- Each reliability improvement adds resource consumption

**The PUE penalty:**
- Even best-in-class data centers have ~10-20% overhead
- Average facilities: 50-60% overhead for non-compute functions
- Cooling, power conditioning, networking all consume energy
- Overhead multiplies the environmental impact of computation

---

## Measuring Environmental Impact

### Measurement Challenges

Accurate environmental accounting for AI is difficult:

**Data availability constraints:**
- Companies rarely disclose detailed energy consumption
- Training details often proprietary and secret
- Inference volume typically not public information
- Grid mix varies by location and changes over time

**Attribution complexity:**
- Shared infrastructure complicates allocation
- How to attribute multi-tenant cloud usage?
- Background vs. AI-specific loads difficult to separate
- Indirect impacts (network, storage) hard to quantify

**Scope definition challenges:**
- What counts as "AI environmental impact"?
- Training only? Inference? Supporting infrastructure? Research and development?
- Embodied carbon in hardware manufacturing?
- Upstream supply chain emissions?

### Measurement Tools and Frameworks

**ML Emissions Calculator:**
- Open-source tool for estimating training emissions
- Inputs: hardware type, training duration, geographic location
- Outputs: estimated energy consumption and CO2 emissions
- Available at mlco2.github.io
- Useful for approximate impact assessment

**CodeCarbon:**
- Python library that tracks emissions during code execution
- Integrates into ML training pipelines
- Provides real-time tracking during development
- Open-source and actively maintained
- Enables continuous monitoring

**Cloud provider tools:**
- **AWS Customer Carbon Footprint Tool**: AWS infrastructure emissions
- **Google Cloud Carbon Footprint**: GCP usage emissions
- **Azure Emissions Impact Dashboard**: Azure carbon accounting
- Varying levels of detail, granularity, and accuracy
- Often lag actual usage by weeks or months

### Metrics to Track

Organizations should monitor multiple environmental dimensions:

| Metric | What It Measures | Tracking Method |
<!-- component:table:metrics-tracking -->
|--------|------------------|-----------------|
| **Training energy (kWh)** | Electricity per training run | Power monitoring, estimation tools |
| **Inference energy (kWh)** | Electricity per N inferences | Cloud dashboards, estimates |
| **Carbon emissions (kg CO2e)** | Climate impact | Energy × grid carbon intensity |
| **PUE** | Infrastructure efficiency | Facility-level measurement |
| **Water usage (liters)** | Water consumption | Facility-level measurement |
| **Hardware utilization (%)** | Efficiency of resource use | Monitoring and alerting systems |
| **Embodied carbon** | Manufacturing emissions | Supplier data, estimates |

---

## Mitigation Strategies

### Efficiency Improvements

**Algorithmic efficiency:**
- More efficient training algorithms and techniques
- Sparse models (not all parameters active for all inputs)
- Mixture of Experts (MoE) architectures activate subset of parameters
- Distillation: train smaller models to mimic larger ones
- Pruning: remove unnecessary parameters post-training
- Quantization: reduce numerical precision

**Hardware efficiency:**
- Each GPU generation delivers better performance per watt
- Specialized inference chips optimize for deployment
- Advanced cooling systems (liquid cooling, free cooling)
- Optimized data center design and airflow management

**Operational efficiency:**
- Maximize hardware utilization rates
- Right-size models to actual task requirements
- Cache frequent computations and responses
- Batch requests to improve throughput
- Schedule training during renewable energy availability

**Efficiency paradox:**
- 10-100× efficiency improvements are technically possible
- However, gains often absorbed by scaling to larger models
- Efficiency enables growth rather than reducing absolute impact
- Governance must address absolute limits, not just efficiency

### Clean Energy Transition

**Geographic location decisions:**
- Train models in regions with low-carbon electricity grids
- Consider grid mix in cloud region selection
- Time-shift workloads to match renewable availability
- Regional variation creates substantial emissions differences

**Renewable energy procurement:**
- Power Purchase Agreements (PPAs) for dedicated renewable energy
- On-site renewable generation (solar, wind where feasible)
- Renewable Energy Certificates (RECs) for accounting
- Carbon offsets (controversial and varying quality)

**24/7 carbon-free energy:**
- Google and Microsoft committing to hourly matching
- More rigorous than annual renewable matching
- Requires energy storage or geographic distribution
- True carbon-free operation substantially harder than accounting-based claims

**Reality check on renewable claims:**
- "100% renewable" often relies on RECs or offsets
- Accounting-based claims differ from physical grid impact
- Additionality matters: does it create new renewable capacity?
- Transparency about methodology essential

### Model Selection and Right-Sizing

**Choose appropriate model for task:**

| Model Class | Relative Inference Cost | Appropriate Use Cases |
<!-- component:table:model-efficiency -->
|-------------|------------------------|----------------------|
| Frontier LLMs (GPT-4 class) | 100× | Complex reasoning, novel tasks, maximum capability |
| Mid-tier LLMs (GPT-4o class) | 10× | General tasks, good capability-cost balance |
| Efficient LLMs (GPT-3.5 class) | 1× | Simpler tasks, high-volume applications |
| Fine-tuned specialized models | 0.1× | Domain-specific tasks, constrained scope |
| Traditional ML | 0.01× | Well-defined problems, structured data |

**Right-sizing principles:**
- Use smallest adequate model for each task
- Larger models aren't always better for specific applications
- Evaluate efficiency-capability tradeoffs explicitly
- Test whether simpler approaches suffice before deploying LLMs

### Lifecycle Thinking

**Hardware lifecycle management:**
- Extend useful life of computing equipment
- Refurbish and redeploy older hardware for less-demanding workloads
- Responsible e-waste handling and recycling
- Consider embodied carbon in procurement decisions
- Avoid premature replacement driven only by performance

**Model lifecycle management:**
- Avoid unnecessary retraining of models
- Incremental fine-tuning vs. full retraining
- Archive models rather than keeping all versions deployed
- Retire models when no longer needed
- Plan for eventual decommissioning

---

## Regulatory Landscape

<!-- component:list:current-regulations -->

### Current Requirements

**European Union:**
- **Corporate Sustainability Reporting Directive (CSRD)**: Requires large companies to report environmental impacts including data center energy consumption
- **Energy Efficiency Directive**: Applies standards to data centers
- **Growing mandatory disclosure**: AI energy use increasingly within scope

**United States:**
- **SEC climate disclosure rules**: In development, applicability to AI uncertain
- **State-level requirements**: California climate disclosure laws emerging
- **Voluntary frameworks**: CDP, TCFD widely adopted by major companies
- **Investor pressure**: Increasing demands for sustainability transparency

**Industry initiatives:**
- Growing voluntary disclosure by tech companies
- Climate commitments (net zero, renewable energy targets)
- Sustainability reporting in annual reports and CSR publications
- Peer pressure and reputation management driving transparency

<!-- component:list:emerging-regulations -->

### Emerging Requirements

**EU AI Act provisions:**
- High-risk AI systems must document energy consumption
- Foundation model providers must disclose training compute
- Resource utilization reporting requirements
- Environmental impact as part of technical documentation

**Anticipated regulatory developments:**
- Stricter data center energy efficiency standards
- AI-specific environmental reporting requirements
- Carbon pricing mechanisms affecting compute costs
- Scope 3 emissions focus (supply chain, including cloud providers)

### Governance Integration

Organizations should integrate environmental considerations throughout AI governance:

| Action | Rationale |
<!-- component:table:governance-actions -->
|--------|-----------|
| **Inventory AI systems** | Understand what's deployed and where |
| **Track energy consumption** | Establish baseline for improvement |
| **Estimate carbon emissions** | Quantify climate impact |
| **Set reduction targets** | Drive continuous improvement |
| **Report transparently** | Meet regulatory requirements, build stakeholder trust |
| **Engage cloud providers** | Influence supplier sustainability practices |
| **Integrate into procurement** | Environmental criteria for vendor selection |
| **Environmental impact assessment** | Include in AI project approval processes |

---

## Organizational Governance Framework

### Policy Development

**Environmental AI Policy components:**
- Organizational commitment to sustainable AI practices
- Quantitative targets for efficiency improvement
- Requirements for environmental impact assessment
- Transparency and reporting commitments
- Accountability for environmental outcomes

**Procurement Standards:**
- Environmental criteria for AI vendor and cloud provider selection
- Sustainability requirements in contracts
- Hardware lifecycle and end-of-life requirements
- Minimum energy efficiency standards

**Development Standards:**
- Efficiency requirements for new model development
- Justification required for large model training
- Energy tracking mandatory in development workflows
- Optimization required before production deployment
- Regular efficiency audits

### Implementation Practices

**Environmental impact assessment:**
- Required for major AI projects and model training
- Integrate into existing AI governance review process
- Consider alternatives with lower environmental impact
- Document decisions, tradeoffs, and rationale
- Approval thresholds for high-impact activities

**Continuous monitoring:**
- Track energy consumption of deployed AI systems
- Monitor cloud provider sustainability dashboards
- Regular reporting on environmental metrics
- Anomaly detection for unusual consumption patterns
- Attribution to business units or projects

**Ongoing optimization:**
- Regular efficiency reviews of deployed systems
- Retire unnecessary or redundant models
- Right-size deployments to actual usage
- Consolidate workloads where possible
- Continuous improvement culture

### Reporting Requirements

**Environmental reporting framework:**

| Metric | Reporting Frequency | Primary Audience |
<!-- component:table:reporting-framework -->
|--------|-------------------|------------------|
| **Total AI energy consumption** | Quarterly | Internal leadership, operations |
| **Carbon emissions from AI** | Annually | External stakeholders, investors |
| **Efficiency improvements** | Annually | Regulators, investors, public |
| **Major training run impacts** | Per significant project | Internal governance, leadership |
| **Water consumption** | Annually | Sustainability reporting, public |
| **Progress vs. targets** | Quarterly | Leadership, board |

**Reporting best practices:**
- Align with established frameworks (CDP, GRI, TCFD, SASB)
- Transparent about methodology and limitations
- Include both absolute emissions and intensity metrics
- Show progress toward reduction targets
- Third-party verification where material
- Acknowledge uncertainties and data gaps

---

## Critical Tradeoffs

### Sustainability vs. Capability

**The fundamental tension:**
- More capable AI models often require substantially more compute
- Efficiency improvements frequently used to train larger models rather than reduce impact
- Competitive dynamics prioritize capability over environmental cost
- Environmental constraints may limit AI capability growth

**Navigating the tension:**
- Acknowledge tradeoffs explicitly in governance decisions
- Set organizational boundaries on acceptable environmental impact
- Invest in efficiency research and optimization
- Accept that some capability improvements may not justify environmental cost
- Balance innovation with sustainability commitments

### Accuracy and Greenwashing

**Common problematic claims:**
- "Carbon neutral" through low-quality offsets
- "100% renewable" based on annual accounting rather than hourly matching
- Efficiency improvements claimed while absolute impact grows
- Marketing sustainability vs. material environmental impact

**Credible approach:**
- Be specific and precise about what claims actually mean
- Distinguish operational emissions from lifecycle (embodied) emissions
- Acknowledge limitations, uncertainties, and data quality issues
- Use credible third-party verification and recognized frameworks
- Avoid overstating achievements or understating challenges

### Equity and Justice

**Global dimension:**
- Environmental impacts are global (climate change)
- AI development and benefits concentrate in wealthy nations
- Climate costs disproportionately affect developing regions
- Energy consumption may divert resources from other needs
- Access to AI may become limited by environmental constraints

**Considerations for governance:**
- Who benefits from AI capabilities vs. who bears environmental costs?
- Equitable distribution of both benefits and burdens
- Support for affected communities
- Investment in sustainable development alongside AI development

---

## Future Outlook

### Technology Trends

**Positive developments:**
- Continued hardware efficiency improvements (better performance per watt)
- Algorithmic innovations reducing compute requirements
- Renewable energy expansion and grid decarbonization
- Better measurement tools and transparency
- Growing focus on sustainable AI research

**Concerning trends:**
- Model size growth continues to outpace efficiency gains
- AI proliferating across applications and industries
- Inference at unprecedented scale (billions of daily requests)
- Competitive race dynamics prioritize capability over sustainability
- Absolute environmental impact growing despite efficiency improvements

### Regulatory Evolution

**Likely developments:**
- Mandatory environmental disclosure for AI systems
- Data center energy efficiency regulations tightening
- AI-specific environmental requirements in legislation
- International coordination attempts (OECD, UN)
- Integration with climate policy frameworks
- Potential compute or emissions caps for largest training runs

### Market Dynamics

**Emerging trends:**
- Efficiency becoming competitive differentiator
- Customer and employee demand for sustainable AI
- Investor pressure on AI companies for environmental performance
- Cost pressures increasingly align with sustainability
- Sustainability as prerequisite for market access

---

## Key Takeaways

**Environmental impact is substantial and growing:**
- Training frontier models generates hundreds of tonnes of CO2
- Inference at scale compounds impact daily for popular systems
- Water consumption substantial (700,000 liters for GPT-3 training)
- Embodied carbon in hardware manufacturing adds to operational emissions

**Geographic location and energy sources matter enormously:**
- Same workload can have 10× different emissions based on grid mix
- Location choices are critical sustainability decisions
- Clean energy procurement reduces operational emissions
- 24/7 carbon-free energy more rigorous than annual accounting

**Multiple drivers compound environmental impact:**
- Model size growth (frontier models keep getting larger)
- Training inefficiency (failed experiments waste resources)
- Deployment scale (millions of users multiply inference impact)
- Infrastructure overhead (PUE, redundancy requirements)

**Measurement is challenging but increasingly possible:**
- Data availability, attribution, and scope definition create obstacles
- Tools exist: ML Emissions Calculator, CodeCarbon, cloud provider dashboards
- Track multiple metrics: energy, carbon, water, utilization, embodied emissions
- Transparency about methodology and limitations essential

**Mitigation requires multiple approaches:**
- Algorithmic efficiency (sparsity, MoE, distillation, quantization)
- Clean energy transition (renewable procurement, location choices)
- Right-sizing models to task requirements
- Lifecycle thinking (hardware longevity, avoid unnecessary retraining)

**Regulatory requirements are emerging:**
- EU: CSRD, AI Act provisions for environmental disclosure
- Mandatory reporting increasingly likely globally
- Integration with climate disclosure frameworks
- Organizational governance must prepare for compliance

**Tradeoffs must be acknowledged:**
- Capability growth often outpaces efficiency gains
- Competitive pressures prioritize performance over sustainability
- Explicit boundaries and targets necessary
- Greenwashing risks require transparent, verified reporting

---

## Practical Checklist

**Organizational sustainability checklist for AI:**

<!-- component:checklist:sustainability-checklist -->
- [ ] Inventory all AI systems and their compute requirements
- [ ] Estimate current energy consumption and carbon emissions
- [ ] Understand cloud provider sustainability practices and tools
- [ ] Set organizational environmental targets for AI operations
- [ ] Integrate environmental assessment into AI governance processes
- [ ] Implement tracking for AI environmental metrics (energy, carbon, water)
- [ ] Evaluate model efficiency in deployment and procurement decisions
- [ ] Engage suppliers and cloud providers on sustainability commitments
- [ ] Monitor emerging regulatory requirements (EU AI Act, CSRD, etc.)
- [ ] Consider full lifecycle impacts (embodied carbon, end-of-life)
- [ ] Establish transparent reporting aligned with frameworks (CDP, GRI, TCFD)
- [ ] Review and optimize existing AI deployments for efficiency
- [ ] Avoid greenwashing through precise, verified claims
- [ ] Document tradeoffs between capability and sustainability

---

## Further Reading

- Strubell et al. (2019). "Energy and Policy Considerations for Deep Learning in NLP" - Seminal paper quantifying NLP model training costs
- Patterson et al. (2021). "Carbon Emissions and Large Neural Network Training" - Comprehensive analysis of training emissions
- IEA (2024). "Data Centres and Data Transmission Networks" - Global energy consumption analysis
- Luccioni et al. (2022). "Estimating the Carbon Footprint of BLOOM" - Detailed case study of large model training
- MIT Technology Review. "The AI Industry's Environmental Problem" - Accessible journalism on the topic
- OECD (2022). "Measuring the Environmental Impacts of Artificial Intelligence" - Policy framework perspective
- Green Software Foundation - Industry collaboration on sustainable software practices
- Climate Change AI - Research community focused on AI and climate

---

*Concept 15 of 15 in the History learning path*

*History path complete! Continue to Terminology or Risk learning paths.*
