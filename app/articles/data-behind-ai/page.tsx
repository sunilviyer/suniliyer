'use client';

import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';

export default function DataBehindAIArticle() {
  const cardData = {
    howMachinesLearn: {
      id: 'article-link-how-machines-learn',
      title: 'How Machines Learn',
      type: 'article-link' as const,
      articleSlug: 'how-machines-learn',
      summary: 'An introduction to machine learning fundamentals, explaining how AI systems learn patterns from data through training rather than following explicit programming instructions.',
      tags: ['Machine Learning', 'Training', 'Fundamentals']
    },
    amazonHiring: {
      id: 'ex-amazon-hiring',
      title: 'Amazon Hiring Bias',
      type: 'example' as const,
      summary: 'In 2018, Amazon scrapped an AI recruiting tool that showed bias against women. The system was trained on 10 years of historical resumes, predominantly from men, and learned to penalize resumes containing words like "women\'s." The model replicated historical patterns rather than identifying true talent.',
      tags: ['Bias', 'Hiring', 'Case Study']
    },
    representationBias: {
      id: 'concept-representation-bias',
      title: 'Representation Bias',
      type: 'concept' as const,
      summary: 'When training data does not adequately represent all populations that will be affected by the AI system. Common in facial recognition (lacking diverse skin tones), medical AI (missing certain demographics), and language models (underrepresenting non-English speakers).',
      tags: ['Bias', 'Fairness', 'Data Quality']
    },
    datasheetsForDatasets: {
      id: 'res-datasheets-for-datasets',
      title: 'Datasheets for Datasets',
      type: 'resource' as const,
      summary: 'A standardized documentation framework proposed by researchers at Microsoft and other institutions. It requires dataset creators to document motivation, composition, collection process, preprocessing, distribution, and maintenance—similar to how electronics come with specification sheets.',
      tags: ['Documentation', 'Transparency', 'Best Practice']
    }
  };

  const metadata = {
    title: 'The Data Behind AI',
    slug: 'data-behind-ai',
    path: 'terminology',
    headerImage: '/images/terminology/data-behind-ai.png',
    navigation: {
      prev: {
        slug: '/terminology/ai-vs-automation',
        title: 'AI vs Automation'
      },
      next: {
        slug: '/terminology/foundation-models',
        title: 'Foundation Models'
      }
    },
    keyLearnings: [
      'Data is the foundation of AI; model behavior is a direct reflection of the patterns found in its training data.',
      'The "Garbage In, Garbage Out" rule is amplified in AI, where data errors are learned and applied at scale.',
      'Data quality is multi-dimensional, requiring focus on accuracy, completeness, representativeness, and timeliness.',
      'Algorithmic bias often stems from historical or representation gaps in the data used during the training phase.',
      'Robust data governance requires documentation tools like Datasheets for Datasets and clear lineage tracking.'
    ],
    readTime: '8 min read',
    updatedDate: 'January 2025',
    tags: ['Training Data', 'Data Quality', 'Bias Mitigation'],
    seo: {
      description: 'Learn why training data determines AI behavior and how to implement a robust data strategy focusing on quality, fairness, and provenance.',
      keywords: ['training data', 'AI data quality', 'data provenance', 'algorithmic bias', 'datasheets for datasets']
    }
  };

  return (
    <ArticleLayout metadata={metadata}>
      <h2>The Foundation of the AI House</h2>
      <p>
        Think about how you learned to recognize a 'good' employee or a 'fair' deal. You didn't just read a manual; you observed thousands of interactions over many years. Here is the key insight: AI systems learn in much the same way. While traditional software follows rules we write, AI behavior is determined by the data it 'observes' during training.
      </p>
      <p>
        Think of it this way: the AI model is essentially a compressed representation of its{' '}
        <InlineContextCard trigger="training data" card={cardData.howMachinesLearn} />. If you build a house on a shaky foundation, the whole structure is unstable. In the world of AI, that foundation is your data. If the data is flawed, the AI doesn't just fail; it learns those flaws and applies them to every decision it makes at scale.
      </p>

      <h2>Data In, Behavior Out</h2>
      <p>
        You may have heard the phrase 'Garbage In, Garbage Out.' In AI, we use a stronger version: 'Data In, Behavior Out'. Because AI detects statistical patterns rather than following fixed logic, every error or bias in your dataset becomes a potential pattern in the model's behavior.
      </p>
      <p>
        To understand this, consider the{' '}
        <InlineContextCard trigger="Amazon hiring bias incident" card={cardData.amazonHiring} />. The engineers didn't program the system to be sexist; the model simply learned from a decade of historical data where men were disproportionately hired. The AI wasn't broken—it was doing exactly what it was trained to do: replicate the patterns of the past.
      </p>

      <h2>The Dimensions of Quality</h2>
      <p>
        When we talk about 'good' data, we aren't just talking about it being 'clean.' High-quality data for AI must be assessed across several dimensions. Accuracy is the baseline—are the values correct?. But Completeness and Representativeness are equally vital.
      </p>
      <p>
        If your data is accurate but only represents a narrow slice of the population, your AI will have 'blind spots'. For instance, a facial recognition system trained primarily on lighter skin tones will systematically fail on darker skin tones, not because the math is wrong, but because the{' '}
        <InlineContextCard trigger="representation bias" card={cardData.representationBias} />{' '}
        in the data prevented it from learning the necessary patterns.
      </p>

      <h2>Provenance: Knowing Your Ingredients</h2>
      <p>
        Would you eat a meal if you had no idea where the ingredients came from? Probably not. Similarly, you shouldn't deploy an AI if you don't know the 'provenance' of its data. Data provenance is the documented history of where your data originated, how it was cleaned, and who handled it.
      </p>
      <p>
        Standardized tools like{' '}
        <InlineContextCard trigger="Datasheets for Datasets" card={cardData.datasheetsForDatasets} />{' '}
        help bridge this transparency gap by recording the motivation, composition, and collection process of a dataset. This documentation is essential for accountability; you cannot explain an AI's decision if you cannot explain the information it used to learn.
      </p>

      <h2>The Practical Takeaway</h2>
      <p>As you lead AI initiatives, remember that most AI failures are actually data failures in disguise. Before investing in more powerful algorithms, you should ask your teams these three questions:</p>
      <ul>
        <li>Where did this data come from? (Legal basis and provenance).</li>
        <li>Does it represent the people we serve today? (Representativeness).</li>
        <li>What patterns of the past are we accidentally teaching it? (Historical bias).</li>
      </ul>
      <p>
        By focusing on the data first, you ensure that your AI is built on a foundation of quality and fairness. In our next article, we will look at Foundation Models to see how these massive datasets are used to create the 'all-purpose' AI tools we use today.
      </p>
    </ArticleLayout>
  );
}
