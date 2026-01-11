'use client';

import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';

export default function FoundationModelsArticle() {
  const cardData = {
    largeLanguageModels: {
      id: 'article-link-large-language-models',
      title: 'Large Language Models',
      type: 'article-link' as const,
      articleSlug: 'large-language-models',
      summary: 'Deep dive into Large Language Models (LLMs) like GPT-4 and Claude—how they work, their capabilities, limitations, and implications for organizations deploying them at scale.',
      tags: ['LLMs', 'Foundation Models', 'NLP']
    },
    euAIAct: {
      id: 'fw-eu-ai-act',
      title: 'EU AI Act',
      type: 'framework' as const,
      summary: 'The European Union\'s comprehensive AI regulation, categorizing AI systems by risk level. Foundation models are regulated as "General-Purpose AI" (GPAI), with additional requirements for those posing systemic risk (e.g., models trained on >10^25 FLOPs).',
      tags: ['Regulation', 'EU', 'GPAI']
    },
    rag: {
      id: 'concept-rag',
      title: 'Retrieval-Augmented Generation (RAG)',
      type: 'concept' as const,
      summary: 'A technique that combines foundation models with external knowledge retrieval. Instead of relying solely on the model\'s training data, RAG systems fetch relevant documents from a database and use them to ground the model\'s response, reducing hallucinations and enabling use of private data.',
      tags: ['RAG', 'Architecture', 'Accuracy']
    }
  };

  const metadata = {
    title: 'Foundation Models',
    slug: 'foundation-models',
    path: 'terminology',
    headerImage: '/images/terminology/foundation-models.png',
    navigation: {
      prev: {
        slug: '/terminology/data-behind-ai',
        title: 'The Data Behind AI'
      },
      next: {
        slug: '/terminology/multimodal-ai',
        title: 'Multimodal AI'
      }
    },
    keyLearnings: [
      'Foundation models are large-scale systems trained on broad data that can be adapted to many different tasks.',
      'The shift to foundation models allows organizations to specialize one model for many uses rather than building new models from scratch.',
      'Homogenization risk means that a single flaw in a foundation model can cascade through every application built on top of it.',
      'The EU AI Act regulates these as "General-Purpose AI" (GPAI) models, with stricter rules for those posing "systemic risk."',
      'Adaptation through prompting or fine-tuning allows these general systems to solve specific business problems.'
    ],
    readTime: '8 min read',
    updatedDate: 'January 2025',
    tags: ['Foundation Models', 'GPAI', 'AI Infrastructure'],
    seo: {
      description: 'Learn what foundation models are and why they have become the primary building blocks of modern AI systems like GPT-4 and Claude.',
      keywords: ['foundation models', 'general purpose AI', 'GPAI', 'transfer learning', 'model adaptation']
    }
  };

  return (
    <ArticleLayout metadata={metadata}>
      <h2>The Skyscraper and the Foundation</h2>
      <p>
        Think of it this way: In the past, if you wanted to build a house, you built a unique foundation specifically for that one structure. If you then wanted a warehouse, you started from scratch with a different foundation. In the world of AI, we used to do the same—we built one specialized model for translation, another for sentiment analysis, and a third for summarizing reports.
      </p>
      <p>
        Here is the key insight: We have moved to a world where we build one massive, incredibly strong foundation that can support a skyscraper, a cottage, or a warehouse all at once. In AI, we call these <strong>foundation models</strong>. They are large models trained on a broad ocean of data that can be adapted to a wide range of downstream tasks.
      </p>

      <h2>Scale and Emergence</h2>
      <p>
        You might wonder what makes these models so much more powerful than the tools of five years ago. It comes down to scale—billions or even trillions of parameters trained on a substantial portion of the written internet. This broad training allows the model to learn language patterns, facts, and reasoning skills that it was never explicitly told to learn.
      </p>
      <p>
        We call these emergent capabilities. For example, a model trained primarily to predict the next word in a sentence might suddenly "emerge" with the ability to write computer code or solve logic puzzles. Because these models, such as a{' '}
        <InlineContextCard trigger="Large Language Model (LLM)" card={cardData.largeLanguageModels} />, serve as the base for many different products, they have become the essential infrastructure of the modern AI ecosystem.
      </p>

      <h2>The Governance Jenga Tower</h2>
      <p>
        While foundation models make development faster and cheaper, they introduce a significant challenge for leadership: homogenization risk. If a single foundation model has a hidden bias or a security flaw, every application your company builds on top of it inherits that same flaw. If the foundation is unstable, the whole building is at risk.
      </p>
      <p>
        This is why the{' '}
        <InlineContextCard trigger="EU AI Act" card={cardData.euAIAct} />{' '}
        created a special category for these systems called General-Purpose AI (GPAI). Regulators recognize that because these models are "general," their risks are also general. Providers must now document their training data and comply with copyright laws to ensure the foundation they provide to the rest of us is reliable.
      </p>

      <h2>How We Specialize</h2>
      <p>
        Most organizations don't need to build their own foundation model from scratch—which can cost over $100 million in compute power alone. Instead, we adapt existing models to our needs. You might use fine-tuning to teach a model your company's specific legal terminology, or use{' '}
        <InlineContextCard trigger="Retrieval-Augmented Generation (RAG)" card={cardData.rag} />{' '}
        to ensure the model only answers questions using your private internal documents.
      </p>
      <p>
        By using these general building blocks, we can achieve high performance on specialized tasks without the "skyscrapers" cost. As a leader, your role is to ensure that the foundation model you select is well-documented, tested for your specific use cases, and monitored for the unexpected capabilities that may emerge as the technology continues to advance.
      </p>
    </ArticleLayout>
  );
}
