import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/articles"

export default function ArticlesIndexPage() {
    const allArticles = Object.values(articles)

    const categories = [
        "AI Fundamentals",
        "AI Risks & Principles",
        "Legal Frameworks",
        "AI Laws",
        "Risk Frameworks & Standards",
        "AI Development Lifecycle",
        "Governance Implementation",
        "AI Auditing & Accountability",
        "Future Concerns",
        "Industry-Specific Insights",
        "Practical Guides"
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    All Articles
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Browse the complete collection of AI Governance resources.
                </p>
            </div>

            <div className="space-y-16">
                {categories.map((category) => {
                    const categoryArticles = allArticles.filter(article => article.category === category)

                    if (categoryArticles.length === 0) return null

                    return (
                        <section key={category}>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                                {category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categoryArticles.map((article) => (
                                    <ArticleCard
                                        key={article.slug}
                                        slug={article.slug}
                                        title={article.title}
                                        excerpt={article.description}
                                        date={article.date}
                                        category={article.category}
                                        readTime={article.readTime}
                                        imageUrl={article.image}
                                    />
                                ))}
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}
