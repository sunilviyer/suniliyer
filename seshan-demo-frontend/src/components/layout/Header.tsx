import * as React from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

interface HeaderProps {
    breadcrumbs: string[];
    primaryAction?: React.ReactNode;
}

export function Header({ breadcrumbs, primaryAction }: HeaderProps) {
    return (
        <header className="flex h-16 items-center justify-between border-b px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
                {breadcrumbs.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <ChevronRight className="h-4 w-4" />}
                        <span className={index === breadcrumbs.length - 1 ? "font-semibold text-foreground" : ""}>
                            {item}
                        </span>
                    </React.Fragment>
                ))}
            </nav>

            <div className="flex items-center space-x-4">
                {primaryAction}
                <ModeToggle />
            </div>
        </header>
    )
}
