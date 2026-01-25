-- ============================================================================
-- HISTORY-02: THE AI FAMILY TREE
-- ============================================================================

UPDATE articles
SET 
    yaml_content = '{
  "tldr": "AI development split into two branches: Symbolic AI (rule-based) and Connectionist AI (neural networks). All current systems are Narrow AI, not the general intelligence of science fiction.",
  "tags": ["AI History", "Taxonomy", "Symbolic AI", "Narrow AI"],
  "content": "<h2 class=\"content-h2\"><span class=\"heading-decoration\"></span>Two Approaches to Intelligence</h2>\n<div class=\"content-p\">Think about how you might teach someone to play chess versus how you might teach them to recognize a face. For chess, you can write down specific rules: \"knights move in an L-shape.\" For recognizing a face, it is much harder to write a rule; you just have to see enough examples to build an intuition. The history of AI is essentially a debate between these two approaches—teaching computers the rules or letting them learn from experience.</div>\n<div class=\"content-p\">The first branch of the family tree is {{CARD|concept-symbolic-ai|Symbolic AI}}. This approach dominated from the {{CARD|ms-dartmouth-workshop|1956 Dartmouth Workshop}} until the 1990s. Scientists believed that if they could describe the world in precise logical symbols, a machine could \"think\" by manipulating those symbols. A famous success from this era was {{CARD|ex-ibm-deep-blue|Deep Blue}}, the chess computer that defeated Garry Kasparov. It didn''t \"learn\" chess in the modern sense; it used brute force calculation based on rules humans provided.</div>\n<div class=\"content-p\">The second branch, which dominates today, is the \"Connectionist\" approach, or neural networks. Instead of giving the computer rules, we give it data and let it discover the patterns. This shift from \"logic\" to \"learning\" is what enables modern breakthroughs like ChatGPT.</div>\n\n<h2 class=\"content-h2\"><span class=\"heading-decoration\"></span>Narrow vs. General Intelligence</h2>\n<div class=\"content-p\">You might wonder where current technology fits in this lineage. Despite the impressive capabilities of modern systems, every AI that exists today is classified as {{CARD|concept-narrow-ai|Narrow AI}}. These systems are brilliant at specific tasks—predicting protein structures or writing code—but they are brittle. They cannot transfer their knowledge to new, unrelated domains. A chess-playing AI cannot play checkers without being reprogrammed.</div>\n<div class=\"content-p\">This stands in contrast to {{CARD|concept-agi|Artificial General Intelligence (AGI)}}, which refers to a hypothetical system that possesses human-level cognitive abilities across all domains. While AGI is the goal for companies like OpenAI and Google DeepMind, it is critical for governance professionals to remember that we are not there yet. We must govern the specific, limited tools we have, rather than the sci-fi entities we imagine.</div>\n\n<h2 class=\"content-h2\"><span class=\"heading-decoration\"></span>The Seasons of AI</h2>\n<div class=\"content-p\">The path of AI progress has not been a straight line. It has been a cycle of boom and bust. When researchers in the 1960s promised machines that could do any work a man could do within twenty years, they set expectations they could not meet. The resulting disappointment led to funding cuts known as \"AI Winters.\"</div>\n<div class=\"content-p\">To understand this, consider the {{CARD|ms-lighthill-report|Lighthill Report}} of 1973. It was a devastating critique commissioned by the British government that concluded AI had failed to deliver on its grand promises. It triggered a massive reduction in support for the field. Another winter followed the collapse of the {{CARD|insight-japan-fifth-gen-funding|Japanese Fifth Generation}} computer project in the 1980s.</div>\n<div class=\"content-p\">For a governance leader, these winters are a cautionary tale. They remind us that hype is dangerous. When we overpromise what AI can do—selling it as magic rather than math—we risk a backlash that can stall genuine progress.</div>\n\n<h2 class=\"content-h2\"><span class=\"heading-decoration\"></span>Why the Taxonomy Matters</h2>\n<div class=\"content-p\">Understanding this family tree helps you ask the right questions. If a vendor tries to sell you a \"cognitive solution,\" you can now ask: \"Is this a symbolic system following fixed rules, or a machine learning system based on probabilistic patterns?\"</div>\n<div class=\"content-p\">If it is symbolic, you govern it by auditing the rules. If it is machine learning, you govern it by auditing the data. By correctly placing a system on the AI family tree, you can choose the right tools to manage it. Now that we have mapped the family tree, we can look deeper into the specific types of intelligence these systems exhibit in our next article, <em>Types of AI Intelligence</em>.</div>",
  "keyLearnings": [
    "The AI family tree splits into two main branches: Symbolic AI (rule-based) and Connectionist AI (pattern-based).",
    "Narrow AI excels at specific tasks but lacks the broad adaptability of human intelligence.",
    "Artificial General Intelligence (AGI) remains a theoretical concept, distinct from the specialized systems we use today.",
    "The history of AI is marked by ''AI Winters,'' periods of reduced funding triggered by overpromising and underdelivering.",
    "Effective governance requires identifying whether a system operates on fixed logic or probabilistic learning."
  ],
  "readTime": "8 min read",
  "updatedDate": "January 2025",
  "headerImage": "/images/history/the-ai-family-tree.png",
  "inlineCards": [
    {"card_id": "concept-symbolic-ai", "trigger_text": "Symbolic AI"},
    {"card_id": "ms-dartmouth-workshop", "trigger_text": "1956 Dartmouth Workshop"},
    {"card_id": "ex-ibm-deep-blue", "trigger_text": "Deep Blue"},
    {"card_id": "concept-narrow-ai", "trigger_text": "Narrow AI"},
    {"card_id": "concept-agi", "trigger_text": "Artificial General Intelligence (AGI)"},
    {"card_id": "ms-lighthill-report", "trigger_text": "Lighthill Report"},
    {"card_id": "insight-japan-fifth-gen-funding", "trigger_text": "Japanese Fifth Generation"}
  ],
  "additionalResources": [
    {"title": "IBM: Types of Artificial Intelligence", "url": "https://www.ibm.com/think/topics/artificial-intelligence-types", "type": "website", "description": "IBM''s overview of AI types and classifications."},
    {"title": "OECD Framework for the Classification of AI Systems", "url": "https://oecd.ai/en/classification", "type": "website", "description": "International framework for categorizing AI systems."},
    {"title": "AWS: What is Artificial General Intelligence?", "url": "https://aws.amazon.com/what-is/artificial-general-intelligence/", "type": "website", "description": "Amazon''s explainer on AGI concepts and implications."}
  ],
  "sources": [
    "Vaswani, A., et al. (2017). Attention Is All You Need. arXiv:1706.03762.",
    "Bostrom, N. (2014). Superintelligence: Paths, Dangers, Strategies. Oxford University Press.",
    "McKinsey & Company. (2016). The next acronym you need to know about: RPA."
  ],
  "seo": {
    "description": "Explore the lineage of artificial intelligence, from Symbolic AI to modern Neural Networks, and understand the crucial distinction between Narrow AI and AGI.",
    "keywords": ["AI taxonomy", "Symbolic AI vs Connectionism", "Narrow AI vs AGI", "AI Winter history", "Lighthill Report"]
  }
}',
    status = 'published',
    processed_at = NOW(),
    updated_at = NOW()
WHERE article_id = 'history-02';