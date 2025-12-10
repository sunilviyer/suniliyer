import { VideoEmbed } from "@/components/video-embed"
import { TableOfContents } from "@/components/toc"
import { ShareButtons } from "@/components/share-buttons"
import { NewsletterCTA } from "@/components/newsletter-cta"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    // In a real app, fetch data based on slug
    const articleUrl = `https://aidefence.io/articles/${slug}` // Example URL

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
                            <span>Foundations</span>
                            <span>•</span>
                            <span>Week 1</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                            Introduction to AI Governance: Why It Matters
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-8">
                            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                                    <span>Sunil Iyer</span>
                                </div>
                                <span>•</span>
                                <span>Oct 24, 2024</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>

                            <ShareButtons title="Introduction to AI Governance" url={articleUrl} />
                        </div>
                    </header>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            As artificial intelligence systems become increasingly integrated into our daily lives and critical infrastructure, the need for robust governance frameworks has never been more urgent.
                        </p>

                        <VideoEmbed videoId="dQw4w9WgXcQ" title="AI Governance Explained" />

                        <h2 id="what-is-ai-governance">What is AI Governance?</h2>
                        <p>
                            AI governance refers to the legal frameworks, ethical guidelines, and organizational policies that ensure artificial intelligence technologies are developed and deployed responsibly. It encompasses a wide range of issues, from data privacy and security to fairness, transparency, and accountability.
                        </p>

                        <h3 id="key-components">Key Components</h3>
                        <ul>
                            <li><strong>Transparency:</strong> Understanding how AI models make decisions.</li>
                            <li><strong>Fairness:</strong> Ensuring AI systems do not discriminate against protected groups.</li>
                            <li><strong>Accountability:</strong> Establishing clear lines of responsibility for AI outcomes.</li>
                            <li><strong>Privacy:</strong> Protecting user data throughout the AI lifecycle.</li>
                        </ul>

                        <blockquote>
                            "The goal of AI governance is not to stifle innovation, but to ensure that innovation aligns with human values and societal well-being."
                        </blockquote>

                        <h2 id="why-now">Why Now?</h2>
                        <p>
                            With the rapid advancement of generative AI and large language models, the capabilities of AI systems have expanded exponentially. This growth brings both immense opportunities and significant risks that must be managed proactively.
                        </p>

                        <p className="text-sm text-gray-500 mt-8">
                            Current slug: {slug}
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["AI Governance", "Ethics", "Introduction"].map(tag => (
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
                                {[
                                    "AI Fundamentals: Types and Applications",
                                    "The AI Technology Stack Explained",
                                    "AI Ethics: Core Principles"
                                ].map((title, i) => (
                                    <Link key={i} href="#" className="block group">
                                        <h4 className="text-gray-700 dark:text-gray-300 group-hover:text-primary-blue transition-colors text-sm font-medium leading-snug mb-1">
                                            {title}
                                        </h4>
                                        <span className="text-xs text-gray-500">5 min read</span>
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
