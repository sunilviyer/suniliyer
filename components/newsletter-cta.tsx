export function NewsletterCTA() {
    return (
        <div className="bg-primary-blue/5 dark:bg-primary-blue/10 border border-primary-blue/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Stay Updated on AI Governance
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
                Join my weekly newsletter where I break down the latest regulations, ethical frameworks, and safety research.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    required
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-primary-blue text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                    Subscribe
                </button>
            </form>
        </div>
    )
}
