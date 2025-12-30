/**
 * Category Classifier
 * Assigns articles to one of 11 AI governance categories based on title and content analysis
 */

import { Category } from '../types';

/**
 * Classification result with confidence score
 */
export interface ClassificationResult {
  category: Category;
  confidence: number;
}

/**
 * Keywords and patterns for each category
 */
const CATEGORY_PATTERNS: Record<Category, { keywords: string[]; titlePatterns: RegExp[] }> = {
  "AI Fundamentals": {
    keywords: [
      "machine learning", "neural network", "deep learning", "algorithm", "model",
      "training", "supervised", "unsupervised", "reinforcement", "transformer",
      "architecture", "llm", "large language model", "foundation model", "generative ai",
      "artificial intelligence basics", "how ai works", "what is ai", "ai technology",
      "compute", "data", "parameters", "inference", "backpropagation"
    ],
    titlePatterns: [
      /fundamentals?/i,
      /basics?/i,
      /introduction/i,
      /what is/i,
      /how.*works?/i,
      /understanding/i,
      /explained/i,
      /building blocks/i,
      /technology stack/i,
      /types? of ai/i
    ]
  },
  "AI Risks & Principles": {
    keywords: [
      "bias", "fairness", "transparency", "explainability", "accountability",
      "ethics", "trustworthy", "responsible ai", "human-centered", "safety",
      "risk", "harm", "discrimination", "privacy", "hallucination",
      "black box", "interpretability", "alignment", "values", "principles",
      "misinformation", "deepfake", "synthetic media", "adversarial"
    ],
    titlePatterns: [
      /risk/i,
      /principle/i,
      /ethic/i,
      /fairness/i,
      /bias/i,
      /trustworthy/i,
      /responsible/i,
      /safety/i,
      /harm/i,
      /goes? wrong/i,
      /problem/i,
      /challenge/i
    ]
  },
  "Legal Frameworks": {
    keywords: [
      "legal", "law", "regulation", "compliance", "liability", "tort",
      "contract", "intellectual property", "copyright", "patent", "gdpr",
      "privacy law", "consumer protection", "anti-discrimination", "civil rights",
      "employment law", "product liability", "legal framework", "jurisdiction",
      "enforcement", "penalty", "fine", "lawsuit", "litigation"
    ],
    titlePatterns: [
      /legal/i,
      /law/i,
      /liability/i,
      /copyright/i,
      /patent/i,
      /intellectual property/i,
      /gdpr/i,
      /privacy law/i,
      /consumer protection/i,
      /anti-discrimination/i,
      /employment law/i
    ]
  },
  "AI Laws": {
    keywords: [
      "eu ai act", "aida", "canada", "colorado ai act", "california",
      "nyc local law 144", "aedt", "state law", "federal law", "regulation",
      "legislative", "bill", "statute", "ordinance", "mandate", "requirement",
      "prohibited", "restricted", "high-risk", "unacceptable risk", "conformity assessment",
      "china ai", "singapore", "brazil", "uk ai"
    ],
    titlePatterns: [
      /eu ai act/i,
      /aida/i,
      /local law/i,
      /state law/i,
      /california.*ai/i,
      /colorado.*ai/i,
      /nyc.*ai/i,
      /china.*ai/i,
      /singapore.*ai/i,
      /brazil.*ai/i,
      /uk.*ai/i,
      /regulation/i,
      /legislative/i
    ]
  },
  "Risk Frameworks & Standards": {
    keywords: [
      "nist", "iso", "ieee", "framework", "standard", "guideline",
      "risk management", "assessment", "methodology", "best practice",
      "iso 42001", "iso 31000", "ieee 7000", "nist ai rmf", "singapore framework",
      "governance framework", "maturity model", "benchmark", "certification",
      "conformity", "audit standard", "control framework"
    ],
    titlePatterns: [
      /nist/i,
      /iso/i,
      /ieee/i,
      /framework/i,
      /standard/i,
      /guideline/i,
      /methodology/i,
      /best practice/i,
      /maturity model/i,
      /assessment/i
    ]
  },
  "AI Development Lifecycle": {
    keywords: [
      "development", "design", "training", "testing", "deployment", "monitoring",
      "lifecycle", "mlops", "devops", "pipeline", "model card", "documentation",
      "validation", "verification", "data preparation", "feature engineering",
      "hyperparameter", "evaluation", "performance", "drift", "retraining",
      "version control", "experiment tracking", "model registry"
    ],
    titlePatterns: [
      /development/i,
      /lifecycle/i,
      /building/i,
      /training/i,
      /testing/i,
      /deployment/i,
      /monitoring/i,
      /mlops/i,
      /pipeline/i,
      /before you build/i,
      /how to build/i
    ]
  },
  "Governance Implementation": {
    keywords: [
      "governance", "policy", "committee", "oversight", "roles", "responsibilities",
      "raci", "organizational structure", "governance board", "chief ai officer",
      "responsible ai office", "ai ethics board", "stakeholder", "process",
      "workflow", "approval", "review", "escalation", "decision-making",
      "governance function", "three lines", "inventory", "vendor management"
    ],
    titlePatterns: [
      /governance/i,
      /policy/i,
      /committee/i,
      /oversight/i,
      /organizational/i,
      /roles/i,
      /responsibilities/i,
      /implementation/i,
      /building.*function/i,
      /establishing/i
    ]
  },
  "AI Auditing & Accountability": {
    keywords: [
      "audit", "auditing", "accountability", "monitoring", "oversight",
      "compliance check", "verification", "validation", "assessment", "review",
      "internal audit", "external audit", "third-party", "independent",
      "algorithmic audit", "bias audit", "conformity assessment", "certification",
      "attestation", "assurance", "continuous monitoring", "red team"
    ],
    titlePatterns: [
      /audit/i,
      /auditing/i,
      /accountability/i,
      /monitoring/i,
      /oversight/i,
      /assessment/i,
      /verification/i,
      /validation/i,
      /compliance check/i,
      /red team/i
    ]
  },
  "Future Concerns": {
    keywords: [
      "agi", "artificial general intelligence", "existential risk", "x-risk",
      "superintelligence", "alignment problem", "control problem", "future",
      "long-term", "emerging", "frontier", "advanced ai", "transformative",
      "singularity", "consciousness", "sentience", "autonomous weapons",
      "concentration of power", "geopolitical", "national security"
    ],
    titlePatterns: [
      /future/i,
      /agi/i,
      /existential/i,
      /long-term/i,
      /emerging/i,
      /frontier/i,
      /advanced ai/i,
      /superintelligence/i,
      /consciousness/i,
      /autonomous weapon/i,
      /concentration.*power/i
    ]
  },
  "Industry-Specific Insights": {
    keywords: [
      "healthcare", "medical", "clinical", "diagnosis", "treatment",
      "financial services", "banking", "credit", "lending", "trading",
      "insurance", "underwriting", "claims", "actuarial",
      "hr", "human resources", "hiring", "recruitment", "performance review",
      "marketing", "advertising", "recommendation", "personalization",
      "education", "learning", "teaching", "assessment",
      "criminal justice", "sentencing", "recidivism", "policing",
      "government", "public sector", "social services",
      "autonomous vehicle", "self-driving", "transportation",
      "content moderation", "social media", "platform"
    ],
    titlePatterns: [
      /healthcare/i,
      /medical/i,
      /financial/i,
      /banking/i,
      /insurance/i,
      /hr/i,
      /hiring/i,
      /recruitment/i,
      /marketing/i,
      /advertising/i,
      /education/i,
      /criminal justice/i,
      /government/i,
      /autonomous vehicle/i,
      /self-driving/i,
      /content moderation/i,
      /industry/i,
      /sector/i
    ]
  },
  "Practical Guides": {
    keywords: [
      "guide", "how to", "template", "checklist", "step-by-step", "practical",
      "implementation", "toolkit", "playbook", "handbook", "manual",
      "best practices", "tips", "advice", "recommendations", "getting started",
      "tutorial", "walkthrough", "example", "case study", "sample",
      "policy template", "assessment template", "framework template"
    ],
    titlePatterns: [
      /guide/i,
      /how to/i,
      /template/i,
      /checklist/i,
      /step-by-step/i,
      /practical/i,
      /toolkit/i,
      /playbook/i,
      /handbook/i,
      /getting started/i,
      /tutorial/i,
      /walkthrough/i
    ]
  }
};

/**
 * Classifies an article into one of the 11 AI governance categories
 * @param title - Article title
 * @param content - Article content
 * @returns Category assignment
 */
export function classifyArticle(title: string, content: string): Category {
  const result = classifyWithConfidence(title, content);
  return result.category;
}

/**
 * Classifies an article and returns confidence score
 * @param title - Article title
 * @param content - Article content
 * @returns Classification result with confidence score
 */
export function classifyWithConfidence(title: string, content: string): ClassificationResult {
  const scores: Record<Category, number> = {} as Record<Category, number>;
  
  // Normalize text for matching
  const normalizedTitle = title.toLowerCase();
  const normalizedContent = content.toLowerCase();
  
  // Calculate scores for each category
  for (const [category, patterns] of Object.entries(CATEGORY_PATTERNS) as [Category, typeof CATEGORY_PATTERNS[Category]][]) {
    let score = 0;
    
    // Title pattern matching (higher weight)
    for (const pattern of patterns.titlePatterns) {
      if (pattern.test(title)) {
        score += 10;
      }
    }
    
    // Keyword matching in title (high weight)
    for (const keyword of patterns.keywords) {
      if (normalizedTitle.includes(keyword)) {
        score += 5;
      }
    }
    
    // Keyword matching in content (lower weight)
    for (const keyword of patterns.keywords) {
      const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      const matches = normalizedContent.match(regex);
      if (matches) {
        score += matches.length * 0.5;
      }
    }
    
    scores[category] = score;
  }
  
  // Find category with highest score
  let maxScore = 0;
  let bestCategory: Category = "AI Fundamentals"; // Default fallback
  
  for (const [category, score] of Object.entries(scores) as [Category, number][]) {
    if (score > maxScore) {
      maxScore = score;
      bestCategory = category;
    }
  }
  
  // Calculate confidence (normalize to 0-1 range)
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const confidence = totalScore > 0 ? maxScore / totalScore : 0;
  
  return {
    category: bestCategory,
    confidence
  };
}

/**
 * Gets confidence score for a specific category assignment
 * @param title - Article title
 * @param content - Article content
 * @param category - Category to score
 * @returns Confidence score (0-1)
 */
export function getConfidenceScore(title: string, content: string, category: Category): number {
  const result = classifyWithConfidence(title, content);
  
  if (result.category === category) {
    return result.confidence;
  }
  
  // If the specified category doesn't match the best category, return a lower confidence
  return 0;
}

/**
 * Gets all category scores for debugging/analysis
 * @param title - Article title
 * @param content - Article content
 * @returns Map of categories to scores
 */
export function getAllCategoryScores(title: string, content: string): Record<Category, number> {
  const scores: Record<Category, number> = {} as Record<Category, number>;
  
  const normalizedTitle = title.toLowerCase();
  const normalizedContent = content.toLowerCase();
  
  for (const [category, patterns] of Object.entries(CATEGORY_PATTERNS) as [Category, typeof CATEGORY_PATTERNS[Category]][]) {
    let score = 0;
    
    for (const pattern of patterns.titlePatterns) {
      if (pattern.test(title)) {
        score += 10;
      }
    }
    
    for (const keyword of patterns.keywords) {
      if (normalizedTitle.includes(keyword)) {
        score += 5;
      }
    }
    
    for (const keyword of patterns.keywords) {
      const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      const matches = normalizedContent.match(regex);
      if (matches) {
        score += matches.length * 0.5;
      }
    }
    
    scores[category] = score;
  }
  
  return scores;
}
