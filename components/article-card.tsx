import Link from "next/link"
import Image from "next/image"

interface ArticleCardProps {
    title: string
    excerpt: string
    date: string
    slug: string
    imageUrl?: string
    category?: string
    readTime?: string
}

export function ArticleCard({ title, excerpt, date, slug, imageUrl, category, readTime }: ArticleCardProps) {
    return (
        <Link href={`/articles/${slug}`} className="group block h-full">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full border border-gray-100 dark:border-gray-800 flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <span className="text-gray-400">No Image</span>
                        </div>
                    )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <span>{date}</span>
                        {readTime && (
                            <>
                                <span>•</span>
                                <span>{readTime}</span>
                            </>
                        )}
                        {category && (
                            <>
                                <span>•</span>
                                <span className="text-primary-blue font-medium">{category}</span>
                            </>
                        )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-blue transition-colors line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-grow">
                        {excerpt}
                    </p>
                    <div className="text-primary-blue font-medium text-sm mt-auto">
                        Read Article →
                    </div>
                </div>
            </div>
        </Link>
    )
}
