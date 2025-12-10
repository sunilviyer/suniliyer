"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, BookOpen, User, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
    {
        title: "Dashboard",
        href: "/aidefence",
        icon: LayoutDashboard,
    },
    {
        title: "Articles",
        href: "/aidefence/articles",
        icon: BookOpen,
    },
    {
        title: "About Me",
        href: "/about",
        icon: User,
    },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 hidden md:block h-[calc(100vh-4rem)] sticky top-16">
            <div className="p-6">
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Navigation
                </h2>
                <nav className="space-y-1">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                    isActive
                                        ? "bg-primary-blue/10 text-primary-blue"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                )}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.title}
                            </Link>
                        )
                    })}
                </nav>
            </div>

            <div className="absolute bottom-0 w-full p-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>AI Defence v1.0</span>
                </div>
            </div>
        </aside>
    )
}
