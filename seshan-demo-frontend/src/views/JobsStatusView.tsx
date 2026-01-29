import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, CheckCircle2, Cloud, Server, AlertCircle } from "lucide-react"
import { DemoPopup } from "@/components/ui/demo-popup"

export function JobsStatusView() {
    const [demoState, setDemoState] = useState<{ open: boolean, title: string, desc: string }>({
        open: false,
        title: "",
        desc: ""
    })

    const triggerDemo = (jobName: string, env: string) => {
        setDemoState({
            open: true,
            title: `Triggering ${jobName}`,
            desc: `This would manually trigger the '${jobName}' job on the ${env} environment. It would execute the backend logic defined in the job scheduler.`
        })
    }

    const cloudJobs = [
        { id: 1, name: "Price Updater", schedule: "Every 4 hours", lastRun: "10 mins ago", status: "Success" },
        { id: 2, name: "Portfolio Recalculator", schedule: "Every 15 mins", lastRun: "2 mins ago", status: "Success" },
        { id: 3, name: "Alert Evaluator", schedule: "Every 30 mins", lastRun: "15 mins ago", status: "Success" },
        { id: 4, name: "News Scraper", schedule: "Every 2 hours", lastRun: "1 hour ago", status: "Success" },
        { id: 5, name: "Job Completion Emailer", schedule: "Every 10 mins", lastRun: "5 mins ago", status: "Success" },
    ]

    const localJobs = [
        { id: 6, name: "News Analyzer (Ollama)", schedule: "Every 4 hours", lastRun: "3 hours ago", status: "Running" },
        { id: 7, name: "Learning Agent", schedule: "Daily @ 11 PM", lastRun: "Yesterday", status: "Success" },
        { id: 8, name: "Rebalancing Agent", schedule: "Daily @ 6 PM", lastRun: "Yesterday", status: "Success" },
        { id: 9, name: "Earnings Scraper (Browser)", schedule: "Weekly", lastRun: "Sunday", status: "Success" },
    ]

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">System Status</h2>
                <p className="text-muted-foreground">Monitor and control background jobs across hybrid infrastructure</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Cloud Jobs Column */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Cloud className="h-5 w-5 text-seshan-slate-800" />
                        <h3 className="text-xl font-semibold">Cloud Tier (Render)</h3>
                    </div>
                    {cloudJobs.map((job) => (
                        <Card key={job.id}>
                            <CardContent className="p-4 flex items-center justify-between">
                                <div>
                                    <div className="font-medium">{job.name}</div>
                                    <div className="text-sm text-muted-foreground">{job.schedule} • {job.lastRun}</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Badge variant="secondary" className="bg-seshan-green-200 text-seshan-green-500 hover:bg-seshan-green-200">
                                        {job.status}
                                    </Badge>
                                    <Button size="icon" variant="ghost" onClick={() => triggerDemo(job.name, "Cloud")}>
                                        <Play className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Local Jobs Column */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Server className="h-5 w-5 text-seshan-neutral-700" />
                        <h3 className="text-xl font-semibold">Local Tier (Mac Mini)</h3>
                    </div>
                    {localJobs.map((job) => (
                        <Card key={job.id}>
                            <CardContent className="p-4 flex items-center justify-between">
                                <div>
                                    <div className="font-medium">{job.name}</div>
                                    <div className="text-sm text-muted-foreground">{job.schedule} • {job.lastRun}</div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    {job.status === 'Running' ? (
                                        <Badge variant="secondary" className="bg-seshan-slate-100 text-seshan-slate-800 hover:bg-seshan-slate-100 animate-pulse">
                                            {job.status}
                                        </Badge>
                                    ) : (
                                        <Badge variant="secondary" className="bg-seshan-green-200 text-seshan-green-500 hover:bg-seshan-green-200">
                                            {job.status}
                                        </Badge>
                                    )}

                                    <Button size="icon" variant="ghost" onClick={() => triggerDemo(job.name, "Local")}>
                                        <Play className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
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
