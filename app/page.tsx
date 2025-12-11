import Link from "next/link"
import { Linkedin, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 p-4">
      <main className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Sunil Iyer
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 font-light">
          AI Governance Journey
        </p>

        <nav className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <Link
            href="/aidefence"
            className="group flex items-center gap-2 text-lg font-medium text-gray-900 dark:text-white hover:text-primary-blue transition-colors"
          >
            Articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/about"
            className="text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            About Me
          </Link>

          <a
            href="https://www.linkedin.com/in/sunilviyer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-[#0077b5] transition-colors flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </nav>
      </main>

      <footer className="absolute bottom-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sunil Iyer
      </footer>
    </div>
  )
}
