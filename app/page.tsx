import { ArticleCard } from "@/components/article-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { BookOpen, TrendingUp, Shield } from "lucide-react"

export default function Home() {
  const articles = [
    {
      title: "Introduction to AI Governance: Why It Matters",
      excerpt: "Setting the stage for AI governance importance. Understand why responsible AI is crucial for the future of technology and business.",
      date: "Week 1",
      slug: "intro-to-ai-governance",
      category: "Foundations",
      readTime: "5 min read"
    },
    {
      title: "AI Fundamentals: Types and Applications",
      excerpt: "Explore the difference between narrow and broad AI, types of machine learning, and real-world applications transforming industries.",
      date: "Week 2",
      slug: "ai-fundamentals",
      category: "Foundations",
      readTime: "6 min read"
    },
    {
      title: "The AI Technology Stack Explained",
      excerpt: "A comprehensive look at the AI infrastructure, platforms, and application layers that power modern AI systems.",
      date: "Week 3",
      slug: "ai-tech-stack",
      category: "Technology",
      readTime: "5 min read"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">

        {/* Dashboard Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to AI Defence
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My journey to learn about AI Governance and help others navigate the landscape.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Current Focus Card */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-4 text-primary-blue">
              <TrendingUp className="w-6 h-6" />
              <h2 className="font-semibold text-lg">Current Focus</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Exploring the ethical implications of Large Language Models and the EU AI Act compliance requirements.
            </p>
            <div className="text-sm font-medium text-gray-500">
              Week 4 of 12
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-4 text-primary-blue">
              <BookOpen className="w-6 h-6" />
              <h2 className="font-semibold text-lg">Learning Path</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Follow the structured 12-week curriculum on AI Governance.
            </p>
            <Link href="/course-overview" className="block w-full py-2 text-center bg-primary-blue text-white rounded-lg hover:bg-primary-dark transition-colors">
              Go to Course Overview
            </Link>
          </div>

          {/* Mission Card */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-4 text-primary-blue">
              <Shield className="w-6 h-6" />
              <h2 className="font-semibold text-lg">My Mission</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To demystify AI regulation and safety for practitioners and enthusiasts alike, building a safer digital future.
            </p>
          </div>

        </div>

        {/* Recent Insights Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Insights</h2>
            <Link href="/articles" className="text-primary-blue hover:underline text-sm font-medium">
              View all articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
