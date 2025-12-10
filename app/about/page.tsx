import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow py-12 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8 text-center">About AIDefence</h1>
                    <div className="prose prose-lg dark:prose-invert mx-auto">
                        <p>
                            AIDefence is a comprehensive knowledge hub dedicated to the responsible development, governance, and implementation of Artificial Intelligence.
                        </p>
                        <p>
                            Our mission is to empower organizations and individuals with the knowledge and tools needed to navigate the complex landscape of AI ethics, regulation, and safety.
                        </p>
                        <h2>Our Vision</h2>
                        <p>
                            We envision a future where AI technologies are developed and deployed in ways that benefit humanity while minimizing risks and harms.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
