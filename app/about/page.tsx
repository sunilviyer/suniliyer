import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Linkedin } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
            <Header />
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4 max-w-4xl">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Content Column */}
                        <div className="prose prose-lg dark:prose-invert">
                            <h1 className="text-4xl font-bold mb-6">About Me</h1>
                            <p className="lead text-xl text-gray-600 dark:text-gray-300">
                                Welcome to my AI Governance journey. I'm Sunil Iyer, and this platform documents my path to mastering the complexities of responsible AI.
                            </p>

                            <h2>My Journey</h2>
                            <p>
                                As Artificial Intelligence reshapes our world, the need for robust governance frameworks has never been more critical. I started this journey to not only understand these changes myself but to create a resource for others facing the same challenges.
                            </p>
                            <p>
                                From understanding the technical underpinnings of LLMs to navigating the legal labyrinths of the EU AI Act, I am documenting every step of my learning process. My goal is to demystify AI regulation and safety for practitioners and enthusiasts alike.
                            </p>

                            <h2>Why AI Defence?</h2>
                            <p>
                                "Defence" isn't just about protection; it's about proactive preparation. By understanding the risks and regulations today, we can build a safer, more innovative tomorrow.
                            </p>

                            <div className="not-prose mt-8">
                                <a
                                    href="https://www.linkedin.com/in/sunilviyer/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg font-medium hover:bg-[#006396] transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Contact Column */}
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 sticky top-24">
                            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Have questions about AI Governance? Want to collaborate or just say hi? Drop me a message below.
                            </p>
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}
