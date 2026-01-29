import * as React from "react"
import { LayoutDashboard, Wallet, PieChart, LineChart, Bell, Settings, Menu, X, TrendingUp, Newspaper, Server, Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
    currentView: string;
    onChangeView: (view: string) => void;
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({ currentView, onChangeView, collapsed, setCollapsed }: SidebarProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // Close mobile menu when view changes
    const handleViewChange = (view: string) => {
        onChangeView(view);
        setMobileOpen(false);
    }

    const navItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "market", label: "Market Data", icon: TrendingUp },
        { id: "news", label: "News Intelligence", icon: Newspaper },
        { id: "holdings", label: "Holdings", icon: Wallet },
        // { id: "analysis", label: "Analysis", icon: PieChart },
        // { id: "activity", label: "Activity", icon: LineChart },
        { id: "jobs", label: "System Status", icon: Server },
        { id: "agents", label: "AI Agents", icon: Bot },
        { id: "alerts", label: "Alerts", icon: Bell },
    ];

    const bottomItems = [
        { id: "settings", label: "Settings", icon: Settings },
    ]

    const SidebarContent = () => (
        <div className="flex h-full flex-col gap-4 py-4">
            <div className={cn("flex h-12 items-center px-4", collapsed ? "justify-center" : "justify-between")}>
                {!collapsed && <span className="text-xl font-bold tracking-tight px-2">Seshan</span>}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCollapsed(!collapsed)}
                    className="hidden md:flex"
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </div>

            <div className="flex-1 space-y-1 px-2">
                {navItems.map((item) => (
                    <Button
                        key={item.id}
                        variant={currentView === item.id ? "secondary" : "ghost"}
                        className={cn(
                            "w-full justify-start",
                            collapsed ? "px-2 justify-center" : "px-4"
                        )}
                        onClick={() => handleViewChange(item.id)}
                    >
                        <item.icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")} />
                        {!collapsed && <span>{item.label}</span>}
                    </Button>
                ))}
            </div>

            <div className="px-2">
                {bottomItems.map((item) => (
                    <Button
                        key={item.id}
                        variant="ghost"
                        className={cn(
                            "w-full justify-start",
                            collapsed ? "px-2 justify-center" : "px-4"
                        )}
                    >
                        <item.icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")} />
                        {!collapsed && <span>{item.label}</span>}
                    </Button>
                ))}
            </div>
        </div>
    )

    return (
        <>
            {/* Mobile Trigger */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <Button variant="outline" size="icon" onClick={() => setMobileOpen(true)}>
                    <Menu className="h-5 w-5" />
                </Button>
            </div>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-black/80 md:hidden" onClick={() => setMobileOpen(false)}>
                    <div
                        className="fixed inset-y-0 left-0 z-50 h-full w-3/4 max-w-sm border-r bg-background p-6 shadow-xl transition-transform slide-in-from-left sm:max-w-sm"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-xl font-bold">Seshan</span>
                            <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Button
                                    key={item.id}
                                    variant={currentView === item.id ? "secondary" : "ghost"}
                                    className="w-full justify-start"
                                    onClick={() => handleViewChange(item.id)}
                                >
                                    <item.icon className="mr-3 h-5 w-5" />
                                    <span>{item.label}</span>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Sidebar */}
            <aside
                className={cn(
                    "hidden md:flex flex-col border-r bg-card transition-all duration-300 ease-in-out",
                    collapsed ? "w-[64px]" : "w-[240px]"
                )}
            >
                <SidebarContent />
            </aside>
        </>
    )
}
