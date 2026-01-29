import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, BrainCircuit, Globe, LineChart } from "lucide-react"
import { DemoPopup } from "@/components/ui/demo-popup"

export function AIAgentsView() {
    const [demoState, setDemoState] = useState<{ open: boolean, title: string, desc: string }>({
        open: false,
        title: "",
        desc: ""
    })

    const triggerDemo = (desc: string) => {
        setDemoState({ open: true, title: "Agent Interaction", desc })
    }

    const agents = [
        {
            id: "decision",
            name: "Decision Agent",
            role: "Orchestrator",
            desc: "Routes jobs between cloud and local execution based on resources.",
            status: "Active",
            icon: BrainCircuit,
            color: "text-seshan-slate-800",
            stats: "Routed 25 jobs today"
        },
        {
            id: "browser",
            name: "Browser Agent",
            role: "Scraper",
            desc: "Handles complex web scraping tasks using Playwright.",
            status: "Idle",
            icon: Globe,
            color: "text-seshan-slate-800",
            stats: "Scraped 19 earnings dates"
        },
        {
            id: "learning",
            name: "Learning Agent",
            role: "Optimizer",
            desc: "Self-improves by analyzing error patterns and tuning prompts.",
            status: "Scheduled (11 PM)",
            icon: Bot,
            color: "text-seshan-green-500",
            stats: "98% accuracy rate"
        },
        {
            id: "rebalancing",
            name: "Rebalancing Agent",
            role: "Advisor",
            desc: "Generates tax-efficient portfolio rebalancing suggestions.",
            status: "Scheduled (6 PM)",
            icon: LineChart,
            color: "text-seshan-gold-500",
            stats: "Optimized $260k assets"
        },
    ]

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">AI Agents</h2>
                <p className="text-muted-foreground">Autonomous agents powering the intelligence engine</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {agents.map((agent) => (
                    <Card key={agent.id} className="relative overflow-hidden">
                        <div className={`absolute top-0 right-0 p-3 opacity-10`}>
                            <agent.icon className="h-24 w-24" />
                        </div>
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <agent.icon className={`h-6 w-6 ${agent.color}`} />
                                <CardTitle>{agent.name}</CardTitle>
                            </div>
                            <Badge variant="outline" className="w-fit mt-1">{agent.role}</Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground min-h-[40px]">{agent.desc}</p>
                            <div className="mt-4 flex items-center justify-between text-sm">
                                <span className="font-medium">Status: {agent.status}</span>
                                <span className="text-muted-foreground">{agent.stats}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4 bg-muted/20">
                            <Button variant="secondary" className="w-full" onClick={() => triggerDemo(`The ${agent.name} ${agent.desc.toLowerCase()} In production, this button would open detailed execution logs and configuration options.`)}>
                                View Logs
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <DemoPopup
                isOpen={demoState.open}
                onClose={() => setDemoState({ ...demoState, open: false })}
                title={demoState.title}
                description={demoState.desc}
            />
        </div>
    )
}
