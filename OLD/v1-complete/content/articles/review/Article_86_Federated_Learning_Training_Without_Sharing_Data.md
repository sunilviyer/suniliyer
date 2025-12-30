# Article 86: Federated Learning – Training Without Sharing Data

## TL;DR

Federated learning lets you train AI models across multiple devices or organizations without collecting all the data in one place. Instead of sending data to a central server, the model travels to the data. Each participant trains on their local data and sends only model updates (not data) to a coordinator who combines them into an improved global model. This approach is used by Google (keyboard predictions), Apple (Siri), and healthcare consortiums (collaborative research). Federated learning solves real problems—privacy, data sovereignty, bandwidth—but introduces new challenges around communication, heterogeneity, and security. This article explains how it works, when to use it, and what to watch out for.

---

## Introduction

Traditional machine learning works like this: gather all the data in one place, then train the model.

This works fine when you own all the data and can move it freely. But what about when:

- Data is on millions of user devices, and users don't want to share it?
- Multiple hospitals want to collaborate on AI, but can't share patient records?
- Banks want to build a shared fraud model, but data sharing violates regulations?
- Data is so large that moving it is impractical or expensive?

In these scenarios, the traditional "centralize everything" approach fails.

Federated learning flips the paradigm: instead of bringing data to the model, bring the model to the data.

The data stays where it is—on phones, in hospitals, at banks. The model travels to each location, learns from local data, and sends back what it learned (not the data itself). A coordinator combines learning from all participants into a better model.

It's like having a teacher who visits each student's home, learns from their unique experiences, and synthesizes insights to improve their overall teaching—without ever seeing the students' personal diaries.

---

## How Federated Learning Works

### The Basic Process

**Step 1: Initialize**
A central server (coordinator) creates an initial model—or uses an existing one.

**Step 2: Distribute**
The model is sent to participating devices or organizations (called "clients" or "participants").

**Step 3: Local Training**
Each participant trains the model on their local data. They never share this data.

**Step 4: Send Updates**
Participants send model updates (gradients or new weights) back to the server. The raw data stays local.

**Step 5: Aggregate**
The server combines updates from all participants—typically averaging them—to create an improved global model.

**Step 6: Repeat**
The new model is distributed, and the cycle repeats until the model is good enough.

### Visual: The Federated Learning Loop

```
           ┌─────────────────┐
           │  Central Server │
           │  (Coordinator)  │
           └────────┬────────┘
                    │
        ┌───────────┼───────────┐
        │           │           │
        ▼           ▼           ▼
   ┌─────────┐ ┌─────────┐ ┌─────────┐
   │Client 1 │ │Client 2 │ │Client 3 │
   │         │ │         │ │         │
   │ Local   │ │ Local   │ │ Local   │
   │ Data    │ │ Data    │ │ Data    │
   └────┬────┘ └────┬────┘ └────┬────┘
        │           │           │
        │    Model Updates      │
        │     (not data)        │
        │           │           │
        └───────────┼───────────┘
                    │
                    ▼
           ┌─────────────────┐
           │  Aggregated     │
           │  Global Model   │
           └─────────────────┘
```

### Key Insight

**What's shared:** Model parameters, gradients, or weight updates

**What's NOT shared:** Raw data, individual records, personal information

This is the privacy advantage: the sensitive data never leaves the device or organization.

---

## Types of Federated Learning

### Cross-Device Federated Learning

**Participants:** Millions of individual devices (phones, tablets, IoT)

**Characteristics:**
- Massive number of participants
- Each has small amount of data
- Devices may be unavailable (offline, battery)
- Highly heterogeneous data

**Examples:**
- Google Gboard (keyboard predictions)
- Apple Siri (voice recognition)
- Health apps learning from user data

### Cross-Silo Federated Learning

**Participants:** Organizations (hospitals, banks, companies)

**Characteristics:**
- Fewer participants (typically 2-100)
- Each has substantial data
- More reliable participation
- More homogeneous data within each silo

**Examples:**
- Hospital consortiums for medical AI
- Banks collaborating on fraud detection
- Multiple departments within one company

### Comparison

| Aspect | Cross-Device | Cross-Silo |
|--------|--------------|------------|
| Number of clients | Millions | Tens to hundreds |
| Data per client | Small | Large |
| Availability | Intermittent | Reliable |
| Communication | Unreliable | Reliable |
| Data heterogeneity | High | Medium |
| Trust model | Untrusted devices | Semi-trusted organizations |

---

## Why Use Federated Learning?

### Privacy and Data Protection

**The core benefit:** Data never leaves its source

- Personal data stays on user devices
- Patient records stay at hospitals
- Customer data stays at each company
- Reduces breach exposure

**Regulatory compliance:**
- GDPR: Data minimization and storage limitation supported
- HIPAA: PHI doesn't need to transfer
- Cross-border: Avoids data transfer restrictions

### Data Sovereignty

Organizations maintain control over their data:
- No need to share with partners
- Competitive data stays private
- Regulatory requirements satisfied

### Bandwidth and Efficiency

Sometimes it's simply impractical to move data:
- Massive datasets too large to transfer
- Slow or expensive network connections
- Real-time requirements can't wait for data transfer

### Collaboration Without Trust

Enables cooperation between competitors or cautious partners:
- Banks collaborate on fraud without sharing customer data
- Tech companies improve shared standards without revealing user behavior
- Governments share insights without sharing citizen data

---

## Real-World Examples

### Google Gboard

**What it is:** Keyboard app on Android phones

**The problem:** Google wants to improve word predictions and autocorrect. The best data is what you actually type—but collecting that would be a massive privacy violation.

**Federated solution:** 
- Models train on your local typing data
- Only model updates (not what you typed) go to Google
- Millions of phones contribute to improved model
- Your messages stay on your phone

### Apple

**What it uses it for:** Siri, QuickType keyboard, Hey Siri detection

**The approach:**
- On-device learning improves personal experience
- Differential privacy added for extra protection
- User data never leaves Apple devices

### Healthcare Consortiums

**Example: MELLODDY Project**

**Participants:** 10 pharmaceutical companies

**The problem:** Drug discovery benefits from more data, but pharma companies can't share proprietary datasets.

**Federated solution:**
- Each company trains on their chemical compounds data
- Model updates shared; data stays in-house
- Combined learning accelerates drug discovery
- No company sees competitors' data

### Financial Services

**Use case:** Fraud detection across banks

**The problem:** Fraudsters attack multiple banks. If banks could combine knowledge, they'd catch more fraud. But sharing customer data is illegal and risky.

**Federated solution:**
- Banks participate in federated fraud model
- Each learns from their fraud cases
- Model updates aggregated
- Better fraud detection; no data sharing

---

## Challenges and Limitations

### Challenge 1: Communication Costs

**The issue:** Model updates must travel between participants and server. With large models and many participants, this is expensive.

**Scale:** A single training round might involve:
- Millions of devices
- Gigabytes of model parameters
- Many training rounds needed

**Mitigations:**
- Compress model updates
- Select subset of participants per round
- Update less frequently

### Challenge 2: Data Heterogeneity

**The issue:** Data at different participants may be very different—different distributions, different labels, different patterns.

**Example:** Hospital A specializes in pediatrics; Hospital B in geriatrics. Their patient data is fundamentally different. Simple averaging may not work well.

**Impact:**
- Model may not converge
- Performance varies across participants
- Global model may not work for everyone

**Mitigations:**
- Personalization layers per participant
- Weighted aggregation
- Cluster participants with similar data

### Challenge 3: System Heterogeneity

**The issue:** Devices have different capabilities—processing power, memory, network speed.

**Example:** Training on phones—some are new and fast, others are old and slow. The slow ones bottleneck the whole process.

**Mitigations:**
- Asynchronous updates
- Participant selection based on capability
- Flexible participation requirements

### Challenge 4: Privacy Isn't Guaranteed

**The issue:** While raw data doesn't leave, model updates can leak information.

**Attacks:**
- **Gradient inversion:** Reconstruct training data from gradients
- **Membership inference:** Determine if specific data was in training
- **Model stealing:** Extract model functionality

**Mitigations:**
- Differential privacy on updates
- Secure aggregation (updates encrypted until combined)
- Limit update information content

### Challenge 5: Trust and Incentives

**The issue:** Participants must trust the coordinator and each other (to some extent).

**Questions:**
- What if a participant sends poisoned updates?
- What if the coordinator is malicious?
- Why should participants contribute? What's in it for them?

**Mitigations:**
- Robust aggregation (detect and exclude outlier updates)
- Decentralized coordination
- Clear value exchange and governance

---

## Federated Learning + Privacy-Enhancing Technologies

Federated learning is often combined with other PETs for stronger privacy:

### Federated Learning + Differential Privacy

**Why:** Even model updates can leak information. Adding noise to updates provides mathematical privacy guarantees.

**How:** Before sending updates, participants add calibrated random noise.

**Trade-off:** Accuracy loss from noise.

**Example:** Apple uses local differential privacy with on-device learning.

### Federated Learning + Secure Aggregation

**Why:** The coordinator shouldn't see individual updates—only the aggregate.

**How:** Cryptographic protocols let server combine updates without seeing any individual update.

**Benefit:** Even malicious coordinator can't see what any single participant contributed.

### Federated Learning + Homomorphic Encryption

**Why:** Encrypt updates so coordinator processes them without seeing content.

**How:** Participants encrypt updates; server aggregates encrypted values; result decrypted.

**Trade-off:** Significant computational overhead.

---

## When to Use Federated Learning

### Good Candidates

| Scenario | Why Federated Works |
|----------|---------------------|
| User devices with personal data | Data can't/shouldn't centralize |
| Multiple organizations, one model | Data sovereignty requirements |
| Regulated data that can't move | Compliance constraints |
| Massive distributed data | Bandwidth/storage impractical |
| Competitive collaboration | No one trusts anyone with raw data |

### Poor Candidates

| Scenario | Why Federated May Not Work |
|----------|---------------------------|
| Small number of records per participant | Not enough local data to learn |
| Highly imbalanced data | Aggregation challenges |
| Need for real-time training | Communication overhead too high |
| Data quality unknown per participant | Can't verify what's contributed |
| Simple models that don't need much data | Complexity not justified |

### Decision Questions

Before choosing federated learning, ask:

1. **Why can't data be centralized?** (Privacy, regulation, competitive, bandwidth)
2. **Do participants have enough local data?** (Sufficient for meaningful learning)
3. **Can participants reliably participate?** (Availability, connectivity)
4. **Is the added complexity worth it?** (vs. simpler alternatives)
5. **What privacy guarantees are needed?** (May need additional PETs)

---

## Implementing Federated Learning

### Frameworks and Tools

| Tool | Organization | Features |
|------|-------------|----------|
| TensorFlow Federated | Google | Production-tested, simulation and deployment |
| PySyft | OpenMined | Privacy-preserving, research-oriented |
| NVIDIA FLARE | NVIDIA | Enterprise healthcare focus |
| Flower | Flower Labs | Framework-agnostic, easy to use |
| IBM FL | IBM | Enterprise features |
| FedML | FedML Inc | Cross-platform, research-friendly |

### Implementation Considerations

**Define participation model:**
- Who can participate?
- What are participation requirements?
- How are participants selected each round?

**Design communication:**
- How often do rounds occur?
- What's the update format?
- How is compression handled?

**Handle heterogeneity:**
- How different can participant data be?
- How to handle stragglers?
- Personalization strategy?

**Ensure privacy:**
- What privacy guarantees are needed?
- Which additional PETs will you use?
- How will you validate privacy?

**Establish governance:**
- Who coordinates?
- How are disputes resolved?
- What are the terms of participation?

---

## Governance for Federated Learning

### Coordination Structure

**Central coordinator model:**
- One party operates the server
- Simpler; requires trust in coordinator
- Common in cross-device (platform owner coordinates)

**Decentralized model:**
- No central server; peer-to-peer
- More complex; less trust required
- Emerging for cross-silo

### Participant Agreements

Document clearly:

- What data participants agree to use
- What updates will be shared
- Privacy protections in place
- IP rights to resulting model
- Data quality expectations
- Exit rights and procedures

### Model Ownership

**Key questions:**
- Who owns the trained model?
- Who can use it?
- How are benefits distributed?

**Options:**
- Joint ownership among participants
- Coordinator owns; participants license
- Open model; anyone can use

---

## Conclusion

Federated learning solves a real problem: how to learn from distributed data without centralizing it. For organizations facing privacy constraints, regulatory requirements, or data sovereignty concerns, it opens possibilities that traditional machine learning doesn't allow.

Key takeaways:

1. **Data stays local:** The fundamental privacy advantage—raw data never leaves its source.

2. **Two types:** Cross-device (millions of phones) and cross-silo (organizations collaborating).

3. **Real applications exist:** Google, Apple, healthcare, and finance already use federated learning.

4. **Challenges are significant:** Communication costs, data heterogeneity, and privacy of updates require careful handling.

5. **Combine with other PETs:** Differential privacy and secure aggregation strengthen federated learning's privacy properties.

6. **Governance matters:** Clear agreements on participation, ownership, and coordination are essential.

Federated learning isn't right for every situation—the complexity and overhead are real. But when you can't centralize data and still need to learn from it, federated learning may be the only viable path.

---

## Sources and Further Reading

1. **McMahan et al.** - "Communication-Efficient Learning of Deep Networks from Decentralized Data" - Original federated learning paper. Available at: arxiv.org

2. **Google AI Blog** - Federated Learning: Collaborative Machine Learning without Centralized Training Data. Available at: ai.googleblog.com

3. **TensorFlow Federated** - Google's federated learning framework. Available at: tensorflow.org/federated

4. **OpenMined** - Open-source privacy-preserving AI. Available at: openmined.org

5. **Flower Framework** - Federated learning framework. Available at: flower.dev

6. **NVIDIA FLARE** - Federated Learning for healthcare. Available at: nvidia.com

7. **MELLODDY Project** - Pharmaceutical federated learning consortium. Available at: melloddy.eu

8. **Kairouz et al.** - "Advances and Open Problems in Federated Learning" - Comprehensive survey. Available at: arxiv.org

9. **European Commission** - Federated learning and AI governance. Available at: digital-strategy.ec.europa.eu

10. **MIT Technology Review** - Federated learning coverage. Available at: technologyreview.com

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
