import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl text-primary-blue">
                    AI Defence
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary-blue transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-primary-blue transition-colors">
                        About Me
                    </Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
}
