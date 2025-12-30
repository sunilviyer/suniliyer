---
title: "CNNs for Images"
slug: "cnns-for-images"
description: "Understand how Convolutional Neural Networks revolutionized computer vision by learning hierarchical visual patterns through specialized architectural components"
category: "terminology"
pubDate: 2024-01-17
author: "AIDefence Team"
tags: ["deep-learning", "computer-vision", "neural-networks", "image-processing", "convolution"]
prerequisites: ["neural-networks-basics", "machine-learning-terminology"]
related: ["rnns-for-sequences", "transformers-architecture", "feature-engineering"]
difficulty: "intermediate"
learningPath: "terminology"
order: 7
estimatedTime: "18 minutes"
---

# CNNs for Images

**Convolutional Neural Networks (CNNs) are specialized neural architectures designed to process grid-structured data like images by learning hierarchical visual patterns through local receptive fields and parameter sharing.** They're the backbone of modern computer vision—from facial recognition to medical image analysis to autonomous vehicles.

## Why Standard Neural Networks Fail at Images

Before CNNs, applying standard fully-connected neural networks to images hit fundamental problems:

<!-- component:example:image-dimensionality -->

**Dimensionality explosion:**

A small 224×224 color image has 224 × 224 × 3 = 150,528 pixels. A fully-connected neural network would need:

- **First hidden layer (1000 neurons):** 150,528 × 1000 = **150 million parameters**
- Just for the first layer!
- A medium-depth network: **billions of parameters**

**Problems with this approach:**

1. **Overfitting:** Too many parameters relative to training data
2. **Computational cost:** Cannot train or store billions of parameters efficiently
3. **Lost spatial structure:** Fully-connected layers treat pixel 1 and pixel 150,000 identically—no awareness that nearby pixels form coherent patterns
4. **No translation invariance:** A cat in the top-left requires completely different weights than a cat in the bottom-right

CNNs solve all four problems through a single architectural insight: **local receptive fields with shared weights**.

## Core CNN Components

### 1. Convolutional Layers: Learning Local Patterns

Instead of connecting every pixel to every neuron, convolutional layers use small **filters (kernels)** that slide across the image.

<!-- component:diagram:convolution -->

**How convolution works:**

```
Input image (7×7):          Filter (3×3):              Output feature map (5×5):
[pixel values]              [learnable weights]        [activation values]

┌─────────────────┐        ┌─────────┐               ┌──────────────┐
│ 1  2  3  4  5...│        │ 1  0 -1 │               │ [computed    │
│ 6  7  8  9  10..│   ×    │ 1  0 -1 │      →        │  values from │
│ 11 12 13 14 15..│        │ 1  0 -1 │               │  filter]     │
│ ... ... ... ... │        └─────────┘               └──────────────┘
└─────────────────┘
```

**Operation:** The filter slides across the image, computing dot products at each position:

- Position (0,0): Multiply filter with top-left 3×3 patch, sum → output value
- Position (0,1): Slide one pixel right, repeat
- Continue until entire image is covered

**Key insight:** The same filter weights are used across the entire image—**parameter sharing** reduces the 150 million parameters to just 3×3×3 = 27 per filter.

### 2. What Filters Learn

CNNs automatically learn useful filters through backpropagation.

<!-- component:table:filter-patterns -->

| Layer Depth | What Filters Detect | Example Patterns | Visualization |
|-------------|---------------------|------------------|---------------|
| **Layer 1** (early) | Low-level features | Edges, corners, color gradients | Horizontal line, vertical line, diagonal |
| **Layer 2-3** (middle) | Mid-level features | Textures, simple shapes, patterns | Grid pattern, circle, fur texture |
| **Layer 4-5** (deep) | High-level features | Object parts, complex patterns | Eye, wheel, window, face |
| **Final layers** | Complete objects | Full object representations | Cat, car, person |

**The hierarchy emerges automatically**—early layers combine to form middle layers, which combine to form deep layers. No human designs these filters; they're learned from data.

### 3. Pooling Layers: Reducing Dimensionality

Pooling layers downsample feature maps, reducing computation and introducing translation invariance.

<!-- component:example:pooling -->

**Max pooling (2×2 window):**

```
Input feature map:          After max pooling:
┌────────────────┐          ┌──────────┐
│  1   3  │ 2   8│          │  3  │  8 │
│  4   2  │ 1   5│    →     │     │    │
├─────────┼──────┤          ├─────┼────┤
│  6   1  │ 9   3│          │  6  │  9 │
│  2   5  │ 7   2│          │     │    │
└────────────────┘          └──────────┘
```

- Divides feature map into 2×2 regions
- Takes maximum value from each region
- Result: Feature map 1/4 the size

**Why this works:** If a feature (like an edge) was detected anywhere in the region, max pooling preserves it. This creates **position invariance**—a cat's ear detected 2 pixels left still triggers the same pooled activation.

**Trade-off:** Pooling loses precise spatial information. Modern architectures (ResNet, etc.) use less aggressive pooling or learned downsampling to preserve more detail.

### 4. Classic CNN Architecture: LeNet-5 to AlexNet

<!-- component:table:architecture-evolution -->

| Architecture | Year | Key Innovation | Impact |
|--------------|------|----------------|--------|
| **LeNet-5** | 1998 | First practical CNN (digit recognition) | Proved CNN viability |
| **AlexNet** | 2012 | Deep CNN + GPU training + ReLU | ImageNet breakthrough—started deep learning revolution |
| **VGGNet** | 2014 | Very deep with small (3×3) filters | Showed depth matters more than filter size |
| **GoogLeNet** | 2014 | Inception modules (multi-scale filters) | Efficient multi-scale feature extraction |
| **ResNet** | 2015 | Skip connections (residual learning) | Enabled 100+ layer networks |
| **EfficientNet** | 2019 | Systematic scaling (depth/width/resolution) | State-of-art efficiency |

**Modern standard architecture:**

```
Input Image (224×224×3)
    ↓
Conv Layer 1 (64 filters, 3×3) → ReLU → BatchNorm
    ↓
Max Pool (2×2)
    ↓
Conv Layer 2 (128 filters, 3×3) → ReLU → BatchNorm
    ↓
Max Pool (2×2)
    ↓
Conv Layer 3 (256 filters, 3×3) → ReLU → BatchNorm
    ↓
Global Average Pool
    ↓
Fully Connected Layer (1000 classes)
    ↓
Softmax → Output Probabilities
```

## Key Architectural Concepts

### Receptive Field: What Each Neuron "Sees"

A neuron's **receptive field** is the region of the input image that influences it.

<!-- component:example:receptive-field -->

**Growing receptive fields through layers:**

- **Layer 1 neuron:** 3×3 receptive field (sees 9 pixels)
- **Layer 2 neuron:** 5×5 receptive field (aggregates Layer 1 neurons)
- **Layer 3 neuron:** 7×7 receptive field
- **Layer 10 neuron:** Might see the entire image

Deep networks build global understanding from local patterns—early layers see pixels, final layers see objects.

### Stride and Padding

**Stride:** How many pixels the filter moves at each step

- Stride 1: Move one pixel at a time (overlap between positions)
- Stride 2: Move two pixels (faster computation, smaller output)

**Padding:** Adding border pixels to control output size

- No padding: Output smaller than input (loses border information)
- Same padding: Output same size as input (preserves dimensions)

<!-- component:table:stride-padding-effects -->

| Stride | Padding | Effect | Use Case |
|--------|---------|--------|----------|
| 1 | Same | Output = Input size | Preserve spatial resolution |
| 1 | Valid (no padding) | Output shrinks | Aggressive dimensionality reduction |
| 2 | Valid | Output = Input/2 | Downsample (alternative to pooling) |

## CNNs in Practice: Common Applications

### 1. Image Classification

**Task:** Assign label to entire image

**Examples:**
- Medical diagnosis: Is this X-ray normal or showing pneumonia?
- Content moderation: Does this image contain prohibited content?
- Quality control: Is this manufactured part defective?

**Architecture:** Standard CNN with final softmax layer outputting class probabilities

### 2. Object Detection

**Task:** Find objects in image + draw bounding boxes + classify them

**Examples:**
- Autonomous vehicles: Detect pedestrians, cars, traffic signs
- Surveillance: Identify suspicious activities
- Retail: Track inventory via visual recognition

**Architecture:** Two-stage detectors (Faster R-CNN) or single-stage (YOLO, SSD)

### 3. Semantic Segmentation

**Task:** Classify every pixel (which object does this pixel belong to?)

**Examples:**
- Medical imaging: Segment tumor boundaries in MRI scans
- Autonomous driving: Distinguish road, sidewalk, buildings, sky
- Agriculture: Identify diseased plant leaves

**Architecture:** Fully convolutional networks (FCN), U-Net

### 4. Facial Recognition

**Task:** Identify or verify individuals from face images

**Examples:**
- Device unlock: Verify owner identity
- Law enforcement: Identify suspects
- Access control: Authenticate users

**Architecture:** CNNs learn face embeddings (numerical representations) where similar faces have similar embeddings

**Governance concern:** Facial recognition has documented demographic biases and raises serious privacy concerns—many jurisdictions restrict or ban its use.

## Transfer Learning: Leveraging Pre-trained CNNs

Training CNNs from scratch requires millions of images and days of GPU time. **Transfer learning** reuses knowledge from pre-trained models.

<!-- component:checklist:transfer-learning-workflow -->

**Transfer learning process:**

- [ ] **1. Start with pre-trained model** (e.g., ResNet-50 trained on ImageNet—1.2M images, 1000 classes)
- [ ] **2. Remove final classification layer** (1000-class layer specific to ImageNet)
- [ ] **3. Add new classification layer** for your specific task (e.g., 5 classes for medical conditions)
- [ ] **4. Fine-tune on your dataset:**
  - **Option A (small dataset):** Freeze early layers, train only final layers
  - **Option B (medium dataset):** Freeze first few layers, fine-tune later layers + new classifier
  - **Option C (large dataset):** Fine-tune entire network with low learning rate

**Why this works:** Early CNN layers learn general visual features (edges, textures) that transfer across domains. Only final layers need adjustment for specific tasks.

**Example impact:** Training from scratch on 5,000 medical images: 60% accuracy. Transfer learning from ImageNet pre-training: 92% accuracy with same data.

## CNN Limitations and Governance Considerations

### 1. Data Efficiency

CNNs require large labeled datasets—often tens of thousands to millions of images.

**Governance implication:** If training data isn't representative (e.g., skin disease dataset mostly contains light skin tones), model performance degrades on underrepresented groups. This isn't a technical bug—it's a data collection failure with real-world harm.

### 2. Adversarial Vulnerabilities

Small, carefully crafted perturbations (invisible to humans) can fool CNNs.

<!-- component:example:adversarial -->

**Adversarial attack example:**

```
Original image: Panda → CNN classifies as "Panda" (98% confidence)
    +
Adversarial noise: Tiny imperceptible perturbations
    =
Adversarial image: Still looks like panda to humans
    → CNN classifies as "Gibbon" (99% confidence)
```

**Governance concern:** This vulnerability matters for:
- **Security systems:** Can attackers bypass facial recognition with adversarial glasses?
- **Autonomous vehicles:** Can adversarial stickers make stop signs invisible?
- **Content moderation:** Can prohibited content evade detection with pixel manipulation?

### 3. Lack of Explainability

CNNs are black boxes—understanding why a specific prediction was made is challenging.

**Explainability techniques:**
- **Saliency maps:** Highlight which pixels influenced the decision
- **Grad-CAM:** Show which image regions activated most strongly
- **LIME:** Approximate local decision boundaries

**Limitation:** These techniques show correlation (which pixels mattered) but not causation (why those pixels led to this decision).

**Governance requirement:** High-stakes decisions (medical diagnosis, criminal justice, loan underwriting) increasingly require explainability. "The CNN said so" isn't sufficient justification.

### 4. Bias Amplification

CNNs learn—and often amplify—biases present in training data.

<!-- component:example:bias -->

**Documented CNN biases:**

- **Gender stereotypes:** Image captioning systems more likely to label women as "cooking" and men as "working"
- **Racial disparities:** Facial recognition error rates 10-100× higher for dark-skinned individuals
- **Socioeconomic bias:** Object detection trained on Western images fails on everyday objects from other cultures

**Root cause:** Training datasets (ImageNet, COCO, etc.) reflect photographer demographics, cultural contexts, and historical inequities.

**Governance response:** Bias testing across demographic groups, diverse dataset curation, fairness constraints during training, regular audits.

## Modern CNN Innovations

### 1. Residual Connections (ResNet)

**Problem:** Very deep networks (50+ layers) become harder to train—gradients vanish

**Solution:** Skip connections that add input directly to output

```
x → [Conv → ReLU → Conv] → Add (with x) → ReLU → next layer
    \_______________________↑
          Skip connection
```

**Impact:** Enables 100+ layer networks, state-of-art performance

### 2. Depthwise Separable Convolutions (MobileNet)

**Problem:** Standard convolutions are computationally expensive for mobile devices

**Solution:** Factor convolution into two cheaper operations (depthwise + pointwise)

**Impact:** Real-time inference on smartphones, edge devices

### 3. Attention Mechanisms

**Problem:** CNNs treat all spatial locations equally—no focus on important regions

**Solution:** Attention layers learn to weight important features more heavily

**Impact:** Better performance, especially when combined with transformers (Vision Transformers)

## CNNs vs. Transformers: The Changing Landscape

Transformers (originally designed for NLP) are increasingly used for vision tasks.

<!-- component:table:cnn-vs-transformer -->

| Aspect | CNNs | Vision Transformers |
|--------|------|---------------------|
| **Inductive bias** | Strong locality assumption | Weak/no spatial bias |
| **Data efficiency** | Better with small datasets | Require massive datasets |
| **Computational cost** | Efficient | Expensive (quadratic in image size) |
| **Long-range dependencies** | Limited (small receptive fields) | Excellent (global attention) |
| **Current status** | Mature, widely deployed | Cutting-edge research, increasingly adopted |

**Governance implication:** Newer isn't always better. CNNs remain more interpretable, data-efficient, and deployable than transformers for many real-world applications.

<!-- component:summary -->

## Key Takeaways

- CNNs solve the dimensionality problem of image processing through local receptive fields and parameter sharing
- Core components: convolutional layers (learn features), pooling layers (downsample), fully-connected layers (classify)
- Filters learn hierarchical patterns: edges → textures → object parts → full objects
- Transfer learning enables high performance with limited data by reusing pre-trained models
- Common applications: classification, object detection, segmentation, facial recognition
- Limitations: require large datasets, vulnerable to adversarial attacks, limited explainability, can amplify bias
- Governance concerns: demographic bias, privacy (facial recognition), explainability requirements, adversarial robustness
- Modern innovations: residual connections (depth), depthwise separable convolutions (efficiency), attention (focus)

**Bottom line:** CNNs revolutionized computer vision by learning spatial hierarchies automatically. But their power comes with governance responsibilities—ensuring representative data, testing for bias, providing explanations, and protecting against adversarial manipulation.

---

**Related concepts:** [Neural Networks Basics](/learn/terminology/neural-networks-basics) • [RNNs for Sequences](/learn/terminology/rnns-for-sequences) • [Transformers Architecture](/learn/terminology/transformers-architecture) • [Feature Engineering](/learn/terminology/feature-engineering)
