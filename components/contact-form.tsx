"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus("submitting")

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000))

        setStatus("success")
        // In a real app, you would send the data to an API route here
    }

    if (status === "success") {
        return (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 p-6 rounded-xl text-center">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
                <p className="text-green-700 dark:text-green-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm font-medium text-green-800 dark:text-green-300 hover:underline"
                >
                    Send another message
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can I help you?"
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "submitting" ? (
                    "Sending..."
                ) : (
                    <>
                        Send Message
                        <Send className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    )
}
