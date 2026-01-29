import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, AlertTriangle, CheckCircle, Plus } from "lucide-react"
import { DemoPopup } from "@/components/ui/demo-popup"

export function AlertsView() {
    const [demoState, setDemoState] = useState<{ open: boolean, title: string, desc: string }>({
        open: false,
        title: "",
        desc: ""
    })

    const triggerDemo = (desc: string) => {
        setDemoState({
            open: true,
            title: "Manage Alerts",
            desc: desc
        })
    }

    const activeAlerts = [
        { id: 1, type: "Price Target", message: "Notify when NVDA drops below $130", status: "Active" },
        { id: 2, type: "Data Quality", message: "Monitor for stale prices > 24h", status: "Active" },
    ]

    const alertHistory = [
        { id: 1, type: "System", message: "Daily backup completed successfully", time: "2 hours ago", icon: CheckCircle, color: "text-green-500" },
        { id: 2, type: "Price Alert", message: "AAPL crossed above $230 target", time: "Yesterday", icon: Bell, color: "text-blue-500" },
        { id: 3, type: "Data Quality", message: "Detected 3 missing sector classifications", time: "2 days ago", icon: AlertTriangle, color: "text-amber-500" },
    ]

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Alerts & Notifications</h2>
                    <p className="text-muted-foreground">Manage system alerts and notification preferences</p>
                </div>
                <Button onClick={() => triggerDemo("This would open a form to configure a new alert. The backend validates the conditions and adds it to the 'enhanced_alerts' table for monitoring by the Alert Evaluator.")}>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Alert
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Active Alerts</CardTitle>
                        <CardDescription>Currently monitored conditions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {activeAlerts.map((alert) => (
                            <div key={alert.id} className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <Bell className="h-4 w-4 text-blue-500" />
                                    <div>
                                        <div className="font-medium text-sm">{alert.type}</div>
                                        <div className="text-sm text-muted-foreground">{alert.message}</div>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => triggerDemo("This would disable the alert in the database.")}>Edit</Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Alert History</CardTitle>
                        <CardDescription>Recent notifications and events</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {alertHistory.map((history) => (
                            <div key={history.id} className="flex items-start space-x-3 pb-3 border-b last:border-0">
                                <history.icon className={`h-5 w-5 mt-0.5 ${history.color}`} />
                                <div>
                                    <div className="text-sm font-medium">{history.message}</div>
                                    <div className="text-xs text-muted-foreground">{history.type} • {history.time}</div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
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
