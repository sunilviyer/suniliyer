export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} AIDefence. All rights reserved.</p>
            </div>
        </footer>
    )
}
