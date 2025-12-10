"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TOCItem {
    id: string
    title: string
    level: number
}

export function TableOfContents() {
    const [headings, setHeadings] = useState<TOCItem[]>([])
    const [activeId, setActiveId] = useState<string>("")

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h2, h3"))
            .map((elem) => ({
                id: elem.id,
                title: elem.textContent || "",
                level: Number(elem.tagName.substring(1)),
            }))
        setHeadings(elements)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "0% 0% -80% 0%" }
        )

        elements.forEach((elem) => {
            const el = document.getElementById(elem.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    if (headings.length === 0) return null

    return (
        <div className="space-y-2">
            <h3 className="font-medium text-sm text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                On this page
            </h3>
            <ul className="space-y-2 text-sm">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={cn(
                                "block transition-colors hover:text-primary-blue",
                                activeId === heading.id
                                    ? "text-primary-blue font-medium"
                                    : "text-gray-500 dark:text-gray-400"
                            )}
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }}
                        >
                            {heading.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
