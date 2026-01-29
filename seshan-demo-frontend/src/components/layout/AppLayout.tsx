import * as React from "react"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"

interface AppLayoutProps {
    children: React.ReactNode;
    currentView: string;
    onChangeView: (view: string) => void;
    breadcrumbs: string[];
    primaryAction?: React.ReactNode;
}

export function AppLayout({
    children,
    currentView,
    onChangeView,
    breadcrumbs,
    primaryAction
}: AppLayoutProps) {
    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

    return (
        <div className="flex h-screen w-full bg-background text-foreground overflow-hidden">
            <Sidebar
                currentView={currentView}
                onChangeView={onChangeView}
                collapsed={sidebarCollapsed}
                setCollapsed={setSidebarCollapsed}
            />

            <div className="flex flex-1 flex-col overflow-hidden">
                <Header breadcrumbs={breadcrumbs} primaryAction={primaryAction} />
                <main className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="mx-auto max-w-7xl animate-fade-in">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
