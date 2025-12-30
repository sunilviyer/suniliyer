
![Article 10: The AI Technology Stack – From Chips to Applications]({{IMAGE_PLACEHOLDER_article-10-the-ai-technology-stack-from-chips-to-application}})

---
title: 'Article 10: The AI Technology Stack – From Chips to Applications'
tldr: This article provides a comprehensive framework for AI governance and implementation.
  It provides actionable insights for achieving regulatory compliance and organizational
  readiness.
category: AI Fundamentals
learning_objectives:
- Understand the key concepts and principles of regulatory requirements
- Implement best practices in real-world scenarios
- Evaluate risk assessment frameworks for organizational compliance
seo_keywords:
- article
- technology
- AI governance
- technology stack
- from chips
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: educational diagram showing AI concepts, neural network visualization, technology
    icons, professional illustration, modern flat design style, clean and authoritative,
    high quality, blue and gray color scheme with accent colors, suitable for professional
    article header
- type: table
  label: Company vs Products Table
  section: Key Players
  id: table-key-players
- type: table
  label: Provider vs AI Infrastructure Offerings Table
  section: Key Players
  id: table-key-players
- type: table
  label: Approach vs Description Table
  section: Build vs. Buy Spectrum
  id: table-build-vs-buy-spectrum
- type: table
  label: Characteristic vs Closed Models Table
  section: Open vs. Closed Models
  id: table-open-vs-closed-models
- type: table
  label: Layer vs Concentration Table
  section: Concentration of Power
  id: table-concentration-of-power
- type: table
  label: Layer vs Cost Type Table
  section: Cost Structure
  id: table-cost-structure
- type: table
  label: Regulation vs Primary Layer(s) Table
  section: Regulatory Mapping
  id: table-regulatory-mapping
- type: table
  label: Vendor Type vs Key Questions Table
  section: Vendor Assessment
  id: table-vendor-assessment
- type: table
  label: Area vs Questions Table
  section: Questions for Your Organization
  id: table-questions-for-your-organization
- type: flowchart
  label: Data Flows Through the Stack Process
  section: Data Flows Through the Stack
  id: flowchart-data-flows-through-the-stack
- type: flowchart
  label: Key Principles Process
  section: Key Principles
  id: flowchart-key-principles
- type: flowchart
  label: Summary Process
  section: Summary
  id: flowchart-summary
- type: template
  label: 'Layer 3: Platforms – The Development Environment'
  section: 'Layer 3: Platforms – The Development Environment'
  id: template-layer-3-platforms-the-development-environment
  template_link: /templates/layer-3-platforms-the-development-environment.md
- type: list
  label: Key Principles
  section: Key Principles
  id: list-key-principles
topic_fingerprint:
- large language model
- machine learning
- neural network
- foundation model
- multimodal
named_examples:
- alibaba
- anthropic
- energy
- eu ai act
- gdpr
- github copilot
- google
- hugging face
- manufacturing
- meta
- microsoft
- midjourney
- nvidia
- openai
- oracle
- stability ai
- stanford
word_count: 3018
processed_date: '2025-12-18T20:04:36.281Z'
---


## Layer 1: Hardware – The Foundation


### What Happens Here

At the bottom of the stack is physical hardware—the semiconductors and specialized chips that perform the mathematical operations AI requires. Modern AI workloads are computationally intensive; training a large language model can require thousands of specialized processors running for months.

**Key hardware components:**

**GPUs (Graphics Processing Units)**
Originally designed for rendering video game graphics, GPUs turned out to be excellent for AI because both tasks involve massive parallel mathematical operations. A GPU can perform thousands of calculations simultaneously, making it far more efficient for AI than traditional CPUs.

**TPUs (Tensor Processing Units)**
Google's custom-designed chips specifically optimized for machine learning operations. The name refers to "tensors"—the multi-dimensional arrays of numbers that neural networks manipulate.

**AI Accelerators**
Specialized chips designed specifically for AI inference (running trained models) or training. Examples include AWS Inferentia, Intel Habana, and various startup offerings.

**Networking Hardware**
Connecting thousands of GPUs for training requires specialized high-bandwidth networking. NVLink, InfiniBand, and custom interconnects enable the communication speeds AI training demands.


### Key Players

| Company | Products | Market Position |
<!-- component:table:table-key-players -->
|---------|----------|-----------------|
| NVIDIA | A100, H100 GPUs | ~80% market share for AI training |
| AMD | MI300 series | Distant second, gaining ground |
| Google | TPU v4, v5 | Google-exclusive, cloud access |
| Intel | Gaudi, various accelerators | Enterprise focus |
| Startups | Cerebras, Graphcore, SambaNova | Novel architectures, niche |

**NVIDIA's dominance** is difficult to overstate. Their CUDA software ecosystem, developed over 15+ years, has become the default platform for AI development. Switching to alternatives requires significant code rewrites.


### Governance Implications

**Supply Chain Concentration**
NVIDIA's dominance creates single-point-of-failure risks. Export controls, supply disruptions, or company decisions can affect the entire AI ecosystem.

**Geopolitical Exposure**
Advanced chip manufacturing is concentrated in Taiwan (TSMC) and South Korea (Samsung). Geopolitical tensions create supply chain risks that affect AI development globally.

**Energy and Environmental Impact**
AI training consumes enormous energy. A single large model training run can consume as much electricity as a hundred households use in a year. Data centers for AI are straining power grids.

**Cost Barriers**
High-end AI chips cost $25,000-$40,000 each. Training frontier models requires thousands of them. This creates barriers to entry and concentrates AI development among well-funded organizations.

**Questions to ask:**
- What hardware does our AI infrastructure depend on?
- What are our supply chain risks?
- What is the energy footprint of our AI systems?
- How dependent are we on single hardware vendors?

---


## Layer 2: Infrastructure – The Operating Environment


### What Happens Here

Infrastructure provides the computing resources—servers, storage, networking—that AI systems run on. This layer transforms raw hardware into usable computing capacity, typically delivered through cloud services.

**Key infrastructure components:**

**Compute Clusters**
Groups of servers (often containing multiple GPUs each) connected together to provide the computing power for training or running AI models.

**Storage Systems**
AI requires massive storage for training data and model weights. A large language model's weights alone can exceed 500GB; training datasets can reach petabyte scale.

**Networking**
High-bandwidth, low-latency connections between servers, and between data centers and users.

**Orchestration Software**
Systems like Kubernetes that manage compute resources, schedule jobs, and handle scaling.


### Key Players

| Provider | AI Infrastructure Offerings |
<!-- component:table:table-key-players -->
|----------|---------------------------|
| AWS | EC2 P5 instances, Trainium, Inferentia |
| Microsoft Azure | ND-series VMs, Azure AI infrastructure |
| Google Cloud | TPU pods, A3 GPU VMs |
| Oracle Cloud | GPU clusters, bare metal |
| CoreWeave | GPU-specialized cloud |
| Lambda Labs | GPU cloud for ML |

The "Big Three" cloud providers (AWS, Azure, Google) dominate, but specialized AI clouds are growing to serve specific needs.


### Deployment Models

**Public Cloud**
Rent infrastructure from cloud providers on-demand. Pay-per-use, scales easily, but data leaves your premises.

**Private Cloud**
Build your own data center with dedicated infrastructure. Full control, but massive capital investment.

**Hybrid Cloud**
Combine public and private, running sensitive workloads on-premises while using public cloud for scale.

**Edge Computing**
Run AI models on devices closer to users—phones, IoT devices, local servers. Reduces latency and can keep data local.


### Governance Implications

**Data Residency**
Where your data is physically processed matters for compliance. Cloud regions may or may not align with regulatory requirements.

**Vendor Lock-in**
Moving AI workloads between cloud providers is expensive and time-consuming. Infrastructure choices made today constrain options for years.

**Security Responsibilities**
In cloud deployments, security responsibilities are shared between provider and customer. The line isn't always clear.

**Cost Transparency**
AI compute costs can explode unexpectedly. A runaway training job can generate five-figure bills overnight.

**Availability Dependencies**
Your AI systems are only as available as your infrastructure. Cloud outages affect all dependent services.

**Questions to ask:**
- Where is our data physically processed and stored?
- What are our contractual commitments with infrastructure providers?
- What happens if our primary provider has an outage?
- Who is responsible for security at each level?

---

<!-- component:template:template-layer-3-platforms-the-development-environment -->

## Layer 3: Platforms – The Development Environment


### What Happens Here

AI platforms provide tools, APIs, and services that make it easier to develop, deploy, and manage AI applications. They sit between raw infrastructure and finished models, abstracting complexity and providing standardized interfaces.

**Platform components:**

**ML Platforms**
Tools for training, versioning, and deploying machine learning models. Examples: AWS SageMaker, Google Vertex AI, Azure Machine Learning.

**Model Serving**
Infrastructure for running trained models and exposing them via APIs. Handles scaling, load balancing, and inference optimization.

**MLOps Tools**
DevOps-style tools adapted for machine learning—experiment tracking, model versioning, pipeline automation, monitoring.

**Model APIs**
Hosted models accessible via API calls. Instead of training your own model, you send requests to a provider's model and receive results.


### Key Players

**Integrated Cloud Platforms:**
- AWS SageMaker
- Google Vertex AI
- Azure Machine Learning

**Model API Providers:**
- OpenAI API (GPT-4, DALL-E)
- Anthropic API (Claude)
- Google AI (Gemini)
- Cohere
- AI21 Labs

**MLOps Platforms:**
- MLflow (open source)
- Weights & Biases
- Neptune
- DataRobot

**Specialized Platforms:**
- Hugging Face (model hub and tools)
- Replicate (model hosting)
- Modal (serverless ML)


### Build vs. Buy Spectrum

Organizations face choices about how much to build versus buy:

| Approach | Description | Control | Effort | Cost |
<!-- component:table:table-build-vs-buy-spectrum -->
|----------|-------------|---------|--------|------|
| Use API | Call provider's model | Lowest | Minimal | Per-use |
| Fine-tune | Customize provider's model | Low-Medium | Moderate | Medium |
| Deploy hosted | Run open model on cloud platform | Medium | Moderate | Infrastructure |
| Deploy on-premises | Run model on own infrastructure | Highest | High | Capital + operations |
| Train custom | Build model from scratch | Highest | Massive | Very high |

Most organizations use a mix, with API calls for general capabilities and custom approaches for competitive differentiation.


### Governance Implications

**API Terms and Acceptable Use**
Model API providers have terms of service and acceptable use policies. Violations can result in service termination—potentially disrupting critical applications.

**Data Handling**
When you call a model API, your data is transmitted to the provider. Review data retention, training use, and privacy policies carefully.

**Rate Limits and Availability**
API-based services can rate-limit or deprecate access. Building critical dependencies on third-party APIs creates business continuity risks.

**Model Updates**
Providers update models regularly. An update might improve performance—or break your application's assumptions about model behavior.

**Compliance Documentation**
Demonstrating compliance often requires documentation about AI systems. API providers may or may not provide sufficient transparency.

**Questions to ask:**
- What are the acceptable use policies for platforms we depend on?
- How is our data handled when using model APIs?
- What happens if an API provider changes terms or discontinues service?
- Can we get sufficient documentation for compliance requirements?

---


## Layer 4: Models – The Intelligence


### What Happens Here

Models are the trained neural networks that provide AI capabilities. This layer represents the accumulated "knowledge" learned from training data, encoded in billions of numerical parameters (weights).

**Model types:**

**Foundation Models**
Large models trained on broad data, intended for general-purpose use or as starting points for specialization. Examples: GPT-4, Claude, LLaMA, PaLM.

**Fine-tuned Models**
Foundation models adapted for specific tasks or domains through additional training on specialized data.

**Task-specific Models**
Models trained from scratch for particular applications—often smaller and more efficient for their specific use case.

**Multimodal Models**
Models that process multiple types of data—text, images, audio, video. Examples: GPT-4V, Gemini.


### Key Players

**Closed-source/API-only:**
- OpenAI (GPT-4, GPT-4o)
- Anthropic (Claude 3, Claude 3.5)
- Google (Gemini)

**Open weights:**
- Meta (LLaMA 3)
- Mistral AI (Mistral, Mixtral)
- Technology Innovation Institute (Falcon)
- Alibaba (Qwen)

**Image Generation:**
- OpenAI (DALL-E)
- Midjourney
- Stability AI (Stable Diffusion)

**Specialized:**
- Numerous domain-specific models for code, science, medicine, etc.


### Open vs. Closed Models

| Characteristic | Closed Models | Open-Weight Models |
<!-- component:table:table-open-vs-closed-models -->
|----------------|---------------|-------------------|
| Access | API only | Downloadable weights |
| Customization | Limited fine-tuning | Full fine-tuning, modification |
| Deployment | Provider's infrastructure | Any infrastructure |
| Cost model | Per-token usage | Infrastructure costs |
| Transparency | Limited | Full model inspection |
| Control | Provider controls | Deployer controls |
| Updates | Automatic | Manual |
| Support | Provider support | Community + commercial |

The choice between open and closed models involves tradeoffs between control, cost, capability, and responsibility.


### Governance Implications

**Model Provenance**
What data was a model trained on? This affects bias, capability, and legal exposure. Closed models often provide limited transparency.

**Model Behavior**
Models have different behaviors, safety properties, and failure modes. Switching models isn't just a technical change—it can change application behavior in ways that affect compliance.

**Licensing and IP**
Open-weight models come with licenses that vary from highly permissive to restrictive. Commercial use, modification, and redistribution rights differ.

**Version Management**
Models evolve. Providers release new versions that may behave differently. Organizations need to track which model versions are deployed where.

**Capability Monitoring**
Models can exhibit unexpected capabilities. What a model could do when deployed may differ from what it did during evaluation.

**Questions to ask:**
- What models are we using, and what data were they trained on?
- What are the licensing terms for each model?
- How do we track model versions across our applications?
- What testing have we done for our specific use cases?

---


## Layer 5: Applications – The User Interface


### What Happens Here

Applications are the user-facing products and services built on top of AI models. This is what most people think of when they think of "AI"—ChatGPT, Copilot, smart assistants, recommendation systems, content moderation tools.

**Application types:**

**Chat Interfaces**
Direct conversation with AI models—ChatGPT, Claude, Gemini chat.

**Copilots and Assistants**
AI embedded in productivity tools—Microsoft Copilot, GitHub Copilot, Google Duet AI.

**Embedded AI**
AI capabilities integrated into existing applications—search engines, email clients, content management systems.

**Vertical Solutions**
Industry-specific AI applications—healthcare diagnostics, legal research, financial analysis.

**Custom Enterprise Applications**
Organizations' own AI-powered applications built for internal or customer-facing use.


### Key Players

**Horizontal Applications:**
- ChatGPT (OpenAI)
- Claude.ai (Anthropic)
- Copilot (Microsoft)
- Gemini (Google)

**Productivity Suite Integration:**
- Microsoft 365 Copilot
- Google Workspace AI
- Notion AI
- Canva AI

**Vertical Applications:**
- Healthcare: Nuance DAX, Viz.ai
- Legal: Harvey, CoCounsel
- Finance: Bloomberg Terminal AI, Kensho
- Code: GitHub Copilot, Cursor, Replit


### Governance Implications

**User Behavior**
Applications shape how users interact with AI. Interface design affects what users try to do and how they interpret results.

**Use Case Proliferation**
New applications emerge constantly. Shadow AI—unauthorized AI use—is a growing concern in enterprises.

**Acceptable Use Enforcement**
Application-level controls can restrict what users can do with underlying models. This is often the most practical place to implement governance.

**Data Flows**
Applications determine what user data reaches AI models. Understanding application data flows is essential for privacy compliance.

**Output Verification**
Applications can incorporate verification steps, confidence displays, or human review requirements before AI outputs reach end users.

**Incident Response**
When AI causes problems, it usually manifests at the application layer. Incident response requires understanding the full stack.

**Questions to ask:**
- What AI applications are in use across the organization?
- How do applications handle user data?
- What controls exist at the application level?
- How would we detect and respond to AI-related incidents?

---


## Cross-Stack Considerations


### Concentration of Power

Examine who controls each layer:

| Layer | Concentration | Key Players |
<!-- component:table:table-concentration-of-power -->
|-------|---------------|-------------|
| Hardware | Very high | NVIDIA dominates |
| Infrastructure | High | Big Three clouds |
| Platforms | Medium | Distributed across cloud providers and specialists |
| Models | Medium | Few frontier model makers, many open alternatives |
| Applications | Low | Highly fragmented market |

Power concentrates at lower layers. A small number of companies control the hardware and infrastructure that all AI depends on.

**Governance implications:**
- Decisions by a few companies affect entire ecosystem
- Regulatory pressure on lower layers has broad effects
- Supply chain disruptions cascade upward
- Competition concerns at infrastructure level


### Data Flows Through the Stack

Data moves through the stack in complex ways:

<!-- component:flowchart:flowchart-data-flows-through-the-stack -->
**Training data** → Model parameters (Layer 4)
**User inputs** → Application (Layer 5) → Platform (Layer 3) → Model (Layer 4)
**Model outputs** → Platform (Layer 3) → Application (Layer 5) → User

Understanding these flows is essential for:
- Privacy compliance (where does personal data go?)
- Security assessment (where are attack surfaces?)
- IP protection (where could proprietary data leak?)
- Audit trails (can we track what happened?)


### Cost Structure

Costs distribute differently across layers:

| Layer | Cost Type | Magnitude | Who Pays |
<!-- component:table:table-cost-structure -->
|-------|-----------|-----------|----------|
| Hardware | Capital | Very high | Infrastructure providers |
| Infrastructure | Operations | High | Platform providers or enterprises |
| Platforms | Development + operations | Medium | Model developers or enterprises |
| Models | Training + operations | High (training), lower (inference) | Model providers |
| Applications | Development + operations | Varies | End customers |

For most enterprises, costs appear at Layers 3-5 (platforms, model API calls, application development), while Layers 1-2 costs are embedded in provider pricing.


### Regulatory Mapping

Different regulations apply at different layers:

| Regulation | Primary Layer(s) | Focus |
<!-- component:table:table-regulatory-mapping -->
|------------|------------------|-------|
| EU AI Act | Models, Applications | Risk classification, transparency |
| GDPR | All layers | Data protection |
| Export controls | Hardware, Infrastructure | Technology transfer |
| Copyright law | Models, Training data | Training data, outputs |
| Sector regulations | Applications | Use case specific |

Compliance requires understanding which regulations apply where in your stack.

---


## Building Stack Awareness


### Assessment Framework

For governance purposes, document your AI stack:

**Layer 1-2 (Hardware/Infrastructure):**
- Cloud providers used
- Data center locations
- Contract terms and SLAs
- Concentration risks
- Energy and environmental footprint

**Layer 3 (Platforms):**
- Platform services in use
- API dependencies
- Terms of service
- Data handling practices
- Vendor lock-in exposure

**Layer 4 (Models):**
- Models deployed
- Model versions
- Training data transparency
- Licensing terms
- Performance characteristics

**Layer 5 (Applications):**
- AI applications inventory
- User population
- Data flows
- Use case restrictions
- Monitoring capabilities


### Vendor Assessment

When evaluating AI vendors, understand where they operate in the stack:

| Vendor Type | Key Questions |
<!-- component:table:table-vendor-assessment -->
|-------------|---------------|
| Hardware | Supply chain reliability, technology roadmap |
| Cloud/Infrastructure | Data residency, security certifications, SLAs |
| Platform | Terms of service, data handling, support |
| Model provider | Training data, safety testing, documentation |
| Application | Use case fit, integration, data flows |


### Risk Aggregation

Risks can aggregate across layers. Consider:
- Multiple applications using the same model (model risk multiplies)
- Multiple models on the same platform (platform risk multiplies)
- All platforms on the same cloud (infrastructure risk multiplies)
- All clouds using the same chips (hardware risk multiplies)

Diversification across layers reduces aggregate risk.

---


## Practical Takeaways

<!-- component:list:list-key-principles -->

### Key Principles

<!-- component:flowchart:flowchart-key-principles -->
1. **The stack is deep**. What looks like a simple AI application sits atop layers of complexity. Governance requires understanding the full stack.

2. **Power concentrates at the bottom**. A handful of companies control hardware and infrastructure. Their decisions constrain everyone else.

3. **Each layer has different risks**. Hardware has supply chain risks; models have bias risks; applications have misuse risks. Govern accordingly.

4. **Data flows through all layers**. Privacy and security require understanding how data moves through the stack.

5. **Costs are distributed**. You may not see hardware costs directly, but you pay for them embedded in higher-layer pricing.


### Questions for Your Organization

| Area | Questions |
<!-- component:table:table-questions-for-your-organization -->
|------|-----------|
| Inventory | What is our AI technology stack? Who provides each layer? |
| Concentration | Where do we have single-vendor dependencies? |
| Data flows | How does data move through our stack? Where does it rest? |
| Compliance | Which regulations apply at which layers? |
| Costs | What are the full costs across all layers? |
| Risks | What happens if each layer fails? |


### The Bottom Line

Understanding the AI technology stack transforms you from someone who talks about "AI" in the abstract to someone who can have concrete conversations about hardware dependencies, infrastructure choices, platform trade-offs, model characteristics, and application controls.

This understanding enables better governance because you can identify where controls should be applied, where risks concentrate, and where your organization has leverage. The CEO talking about "AI adoption" doesn't need to know that NVIDIA GPUs run CUDA code on AWS infrastructure accessed via Azure OpenAI Service to serve a fine-tuned GPT-4 model through a custom application. But you do.

---


## Summary

**Key Takeaways:**

<!-- component:flowchart:flowchart-summary -->
- The AI stack has five layers: Hardware → Infrastructure → Platforms → Models → Applications, each building on layers below

- Hardware layer is dominated by NVIDIA (~80% market share); supply chains concentrate in Taiwan, creating geopolitical risks

- Infrastructure layer is controlled by major cloud providers; deployment choices affect data residency, costs, and lock-in

- Platform layer provides tools and APIs; terms of service and data handling policies require careful review

- Model layer includes closed (API-only) and open-weight options with different control, cost, and customization trade-offs

- Application layer is where users interact with AI and where many governance controls can be practically implemented

- Power concentrates at lower layers; risks at one layer cascade upward through dependent layers

- Effective governance requires understanding the full stack, mapping data flows, and applying appropriate controls at each layer

---


## Further Reading

- NVIDIA (2024). "AI Data Center Reference Architecture"
- Stanford HAI (2024). "AI Index Report" - Compute and infrastructure trends
- Epoch AI. "Trends in Machine Learning Hardware"
- Andreessen Horowitz. "The New AI Stack" (emerging market maps)
- OECD (2023). "AI Compute and Climate"

---

*Article 10 of 158 in the AI Governance Mastery series*

*Next: Article 11 - The AI Ecosystem – Understanding Key Players and Dynamics*
