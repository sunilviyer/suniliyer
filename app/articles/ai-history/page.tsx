'use client';

import { ArticleLayout } from '@/components/articles/ArticleLayout';
import { InlineContextCard } from '@/components/articles/InlineContextCard';

export default function AIHistoryArticle() {
  const cardData = {
    dartmouthWorkshop: {
      id: 'ms-dartmouth-workshop',
      title: 'Dartmouth Workshop (1956)',
      type: 'milestone' as const,
      summary: 'The foundational conference where the term "Artificial Intelligence" was coined by John McCarthy, Marvin Minsky, and others who believed they could solve intelligence in just eight weeks.',
      tags: ['Origins', 'History', '1956']
    },
    lighthillReport: {
      id: 'ms-lighthill-report',
      title: 'Lighthill Report (1973)',
      type: 'milestone' as const,
      summary: 'A critical British government report that concluded AI research had fundamentally failed to deliver on its promises, triggering the first AI Winter by drastically cutting funding.',
      tags: ['AI Winter', 'Criticism', '1973']
    },
    alexnetImagenet: {
      id: 'ms-alexnet-imagenet',
      title: 'AlexNet ImageNet Victory (2012)',
      type: 'milestone' as const,
      summary: 'The breakthrough moment when AlexNet, a deep convolutional neural network, won the ImageNet challenge by a massive margin, proving that deep learning could work at scale with enough data and compute power.',
      tags: ['Deep Learning', 'Breakthrough', '2012']
    },
    deepmindAlphago: {
      id: 'ex-deepmind-alphago',
      title: 'AlphaGo Defeats Lee Sedol',
      type: 'example' as const,
      summary: 'In 2016, DeepMind\'s AlphaGo defeated world champion Lee Sedol at Go, a game considered far more complex than chess. AlphaGo made unconventional moves that demonstrated true pattern learning rather than brute-force calculation.',
      tags: ['DeepMind', 'Reinforcement Learning', 'Go']
    },
    chatgptRelease: {
      id: 'ms-chatgpt-release',
      title: 'ChatGPT Release (November 2022)',
      type: 'milestone' as const,
      summary: 'OpenAI released ChatGPT to the public, reaching 1 million users in 5 days and triggering the current AI boom. It demonstrated that large language models could be genuinely useful to mainstream consumers.',
      tags: ['LLMs', 'ChatGPT', 'Mainstream AI']
    }
  };

  const metadata = {
    title: 'AI History: Dartmouth to DeepMind',
    slug: 'ai-history',
    path: 'history',
    headerImage: '/images/history/ai-history.png',
    navigation: {
      prev: {
        slug: '/history/large-language-models',
        title: 'Large Language Models'
      },
      next: null
    },
    keyLearnings: [
      'The term "Artificial Intelligence" was coined at the 1956 Dartmouth Workshop by scientists who believed they could solve it in just eight weeks.',
      'The history of AI is cyclical, defined by "AI Winters" where overpromising led to significant drops in funding and public interest.',
      'Early successes relied on "Symbolic AI" or fixed rules, whereas modern breakthroughs depend on neural networks and massive scale.',
      'The 2012 AlexNet victory proved that deep learning was the path forward, provided we had enough data and computing power.',
      'Understanding this history allows governance leaders to manage expectations and build systems that outlast the current hype cycle.'
    ],
    readTime: '8 min read',
    updatedDate: 'January 2025',
    tags: ['AI History', 'Milestones', 'AI Winter'],
    seo: {
      description: 'Trace the history of AI from the 1956 Dartmouth Workshop to the rise of DeepMind, exploring the cycles of hype, AI winters, and technical breakthroughs.',
      keywords: ['AI history', 'Dartmouth Workshop', 'AlphaGo', 'Deep Blue', 'AI Winter', 'Lighthill Report']
    }
  };

  return (
    <ArticleLayout metadata={metadata}>
      <h2>The Summer of Great Expectations</h2>
      <p>
        Imagine thinking you could solve the entire mystery of intelligence in just two months. In the summer of 1956, a small group of scientists gathered at{' '}
        <InlineContextCard trigger="Dartmouth College" card={cardData.dartmouthWorkshop} />{' '}
        with exactly that plan. They believed that every aspect of learning could be described so precisely that a machine could simulate it. While they were spectacularly wrong about the timeline—we are still working on it seven decades later—that workshop gave the field its name: Artificial Intelligence.
      </p>
      <p>
        Think of it this way: AI wasn't born from a slow, steady climb. It was born from a burst of wild optimism. Early pioneers like Arthur Samuel built a checkers program that could beat its creator, and optimism ran so high that some predicted machines would do any work a man could do within twenty years.
      </p>

      <h2>The Seasons of AI: Understanding the Winters</h2>
      <p>
        When technology fails to meet grand promises, reality often bites back. By the early 1970s, the British government released the{' '}
        <InlineContextCard trigger="Lighthill Report" card={cardData.lighthillReport} />, which concluded that AI research had fundamentally failed to deliver. Funding plummeted, and the first "AI Winter" began. A second winter followed in the late 1980s when "expert systems"—tools that tried to hard-code human expertise—proved too brittle and expensive to maintain.
      </p>
      <p>
        Here is the key insight: For a governance professional, these winters are a cautionary tale. History shows us that overpromising leads to underfunding. When we manage AI today, we must distinguish between real capabilities and the "marketing release" hype to ensure we don't trigger another cycle of disappointment.
      </p>

      <h2>From Games to Modern Intelligence</h2>
      <p>
        The thaw of the modern era began with benchmarks that the whole world could see. In 1997, IBM's Deep Blue defeated a world chess champion, but it did so through sheer "brute force" calculation rather than learning. The real shift toward the intelligence we see today happened in 2012. A neural network called{' '}
        <InlineContextCard trigger="AlexNet" card={cardData.alexnetImagenet} />{' '}
        won a major image recognition challenge by a staggering margin, proving that deep learning could finally work if you had enough data and powerful hardware.
      </p>
      <p>
        Perhaps the most profound moment for modern intuition was the{' '}
        <InlineContextCard trigger="AlphaGo victory" card={cardData.deepmindAlphago} />{' '}
        in 2016. Unlike previous systems, AlphaGo didn't just follow rules; it taught itself by playing millions of games against itself. It made moves so unconventional that human experts initially thought the machine had made a mistake. It was a clear sign that AI had moved from "calculating" to "learning patterns" at a level we could no longer easily predict.
      </p>

      <h2>Why History Is Your Map</h2>
      <p>
        As we conclude our look at the foundations of AI, you might wonder why this history matters for your current strategy. It matters because we are currently living through the most significant boom in the field's history, triggered by the{' '}
        <InlineContextCard trigger="release of ChatGPT" card={cardData.chatgptRelease} />{' '}
        in 2022. This explosion of interest has brought back the same level of excitement we saw in 1956.
      </p>
      <p>
        By understanding where we came from, you can lead with perspective. You can recognize that while the current capabilities are real, our tendency toward overconfidence is also a historical pattern. Governance serves as the steady hand that allows your organization to capture the benefits of these breakthroughs while building the structures—risk management, oversight, and culture—that will outlast the current cycle of hype.
      </p>
    </ArticleLayout>
  );
}
