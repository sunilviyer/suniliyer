import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/articles"

export default function ArticlesIndexPage() {
    const allArticles = Object.values(articles)

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allArticles.map((article) => (
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
        </div>
    )
}
