import { VideoEmbed } from "@/components/video-embed"
import { TableOfContents } from "@/components/toc"
import { ShareButtons } from "@/components/share-buttons"
import { NewsletterCTA } from "@/components/newsletter-cta"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { articles } from "@/lib/articles"
import { notFound } from "next/navigation"

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const article = articles[slug]

    if (!article) {
        notFound()
    }

    const articleUrl = `https://aidefence.io/articles/${slug}`

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <Link href="/aidefence" className="inline-flex items-center text-sm text-gray-500 hover:text-primary-blue transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Dashboard
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <article className="lg:col-span-8">
                    <header className="mb-10">
                        <div className="flex items-center gap-2 text-sm text-primary-blue font-medium mb-4">
                            <span>{article.category}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-8">
                            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-500">
                                        {article.author.charAt(0)}
                                    </div>
                                    <span>{article.author}</span>
                                </div>
                                <span>•</span>
                                <span>{article.date}</span>
                                <span>•</span>
                                <span>{article.readTime}</span>
                            </div>

                            <ShareButtons title={article.title} url={articleUrl} />
                        </div>

                        {article.image && (
                            <div className="mt-8 relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}
                    </header>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {article.sections.map((section, index) => (
                            <div key={index} className="mb-8">
                                {section.title && (
                                    <h2 id={section.title.toLowerCase().replace(/\s+/g, '-')}>
                                        {section.title}
                                    </h2>
                                )}

                                {section.type === 'text' && (
                                    <p>{section.content}</p>
                                )}

                                {section.type === 'quote' && (
                                    <blockquote className="border-l-4 border-primary-blue pl-4 italic text-gray-700 dark:text-gray-300 my-6 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-r-lg">
                                        {section.content}
                                    </blockquote>
                                )}

                                {section.type === 'list' && (
                                    <div>
                                        <p className="mb-4">{section.content}</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            {section.items?.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}

                        <p className="text-sm text-gray-500 mt-8">
                            Current slug: {slug}
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {article.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <NewsletterCTA />
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="hidden lg:block lg:col-span-4 space-y-8">
                    <div className="sticky top-24">
                        <TableOfContents />

                        <div className="mt-12">
                            <h3 className="font-medium text-sm text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                                Related Articles
                            </h3>
                            <div className="space-y-4">
                                {Object.values(articles)
                                    .filter(a => a.slug !== slug)
                                    .map((a) => (
                                        <Link key={a.slug} href={`/aidefence/articles/${a.slug}`} className="block group">
                                            <h4 className="text-gray-700 dark:text-gray-300 group-hover:text-primary-blue transition-colors text-sm font-medium leading-snug mb-1">
                                                {a.title}
                                            </h4>
                                            <span className="text-xs text-gray-500">{a.readTime}</span>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
