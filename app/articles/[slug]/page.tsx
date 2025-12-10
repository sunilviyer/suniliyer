import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VideoEmbed } from "@/components/video-embed"

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow py-12 bg-white dark:bg-gray-950">
                <article className="container mx-auto px-4 max-w-3xl">
                    <header className="mb-10 text-center">
                        <div className="flex items-center justify-center gap-2 text-sm text-primary-blue font-medium mb-4">
                            <span>Foundations</span>
                            <span>•</span>
                            <span>Week 1</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                            Introduction to AI Governance: Why It Matters
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-gray-500 dark:text-gray-400">
                            <span>By Sunil Iyer</span>
                            <span>•</span>
                            <span>Oct 24, 2024</span>
                            <span>•</span>
                            <span>5 min read</span>
                        </div>
                    </header>

                    <div className="prose prose-lg dark:prose-invert mx-auto">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            As artificial intelligence systems become increasingly integrated into our daily lives and critical infrastructure, the need for robust governance frameworks has never been more urgent.
                        </p>

                        <VideoEmbed videoId="dQw4w9WgXcQ" title="AI Governance Explained" />

                        <h2>What is AI Governance?</h2>
                        <p>
                            AI governance refers to the legal frameworks, ethical guidelines, and organizational policies that ensure artificial intelligence technologies are developed and deployed responsibly. It encompasses a wide range of issues, from data privacy and security to fairness, transparency, and accountability.
                        </p>

                        <h3>Key Components</h3>
                        <ul>
                            <li><strong>Transparency:</strong> Understanding how AI models make decisions.</li>
                            <li><strong>Fairness:</strong> Ensuring AI systems do not discriminate against protected groups.</li>
                            <li><strong>Accountability:</strong> Establishing clear lines of responsibility for AI outcomes.</li>
                            <li><strong>Privacy:</strong> Protecting user data throughout the AI lifecycle.</li>
                        </ul>

                        <blockquote>
                            "The goal of AI governance is not to stifle innovation, but to ensure that innovation aligns with human values and societal well-being."
                        </blockquote>

                        <h2>Why Now?</h2>
                        <p>
                            With the rapid advancement of generative AI and large language models, the capabilities of AI systems have expanded exponentially. This growth brings both immense opportunities and significant risks that must be managed proactively.
                        </p>

                        <p className="text-sm text-gray-500 mt-8">
                            Current slug: {slug}
                        </p>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
