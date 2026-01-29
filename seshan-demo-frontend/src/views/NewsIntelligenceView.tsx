import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Newspaper, ExternalLink, Bot } from "lucide-react"
import { DemoPopup } from "@/components/ui/demo-popup"

export function NewsIntelligenceView() {
    const [demoState, setDemoState] = useState<{ open: boolean, title: string, desc: string }>({
        open: false,
        title: "",
        desc: ""
    })

    const triggerDemo = (title: string, desc: string) => {
        setDemoState({ open: true, title, desc })
    }

    const articles = [
        {
            id: 1,
            title: "NVIDIA (NVDA) Stock Falls Despite Record Revenue",
            source: "Reuters",
            time: "2 hours ago",
            sentiment: -0.4,
            score: "Negative",
            aiSummary: "Market reacts negatively to guidance despite beating earnings estimates. High expectations were not fully met."
        },
        {
            id: 2,
            title: "Tech Sector Rally Continues as AI Demand Surges",
            source: "Bloomberg",
            time: "4 hours ago",
            sentiment: 0.8,
            score: "Positive",
            aiSummary: "AI infrastructure spending is driving growth across the semiconductor and cloud computing sectors."
        },
        {
            id: 3,
            title: "Fed Signals Potential Rate Cut in September",
            source: "CNBC",
            time: "6 hours ago",
            sentiment: 0.6,
            score: "Positive",
            aiSummary: "Macro environment improving for growth stocks as inflation data comes in cooler than expected."
        },
        {
            id: 4,
            title: "Tesla CyberTruck Production Delays Reported",
            source: "The Verge",
            time: "8 hours ago",
            sentiment: -0.7,
            score: "Negative",
            aiSummary: "Supply chain issues and manufacturing complexities are pushing back delivery timelines for volume production."
        },
    ]

    const getSentimentColor = (sentiment: number) => {
        if (sentiment >= 0.5) return "bg-seshan-green-200 text-seshan-green-500 border-seshan-green-200"
        if (sentiment > 0) return "bg-seshan-green-200 text-seshan-green-500 border-seshan-green-200"
        if (sentiment <= -0.5) return "bg-seshan-red-200 text-seshan-red-500 border-seshan-red-200"
        return "bg-seshan-slate-100 text-seshan-slate-800 border-seshan-slate-100"
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">News Intelligence</h2>
                    <p className="text-muted-foreground">AI-powered sentiment analysis and news aggregation</p>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" onClick={() => triggerDemo("Scrape News", "This would trigger the 'News Scraper' job to fetch fresh articles from NewsAPI and Google News.")}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Refresh
                    </Button>
                    <Button onClick={() => triggerDemo("AI Analysis", "This would trigger the Local Ollama Llama 3.2 model to analyze the sentiment of pending articles, extract symbols, and generate relevance scores.")}>
                        <Bot className="mr-2 h-4 w-4" />
                        Analyze Sentiment
                    </Button>
                </div>
            </div>

            <div className="grid gap-4">
                {articles.map((article) => (
                    <Card key={article.id}>
                        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                            <div className="space-y-1">
                                <CardTitle className="text-base font-semibold leading-none">
                                    {article.title}
                                </CardTitle>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Newspaper className="mr-1 h-3 w-3" />
                                    {article.source} • {article.time}
                                </div>
                            </div>
                            <Badge variant="outline" className={`${getSentimentColor(article.sentiment)}`}>
                                {article.score} ({article.sentiment})
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                                <span className="font-semibold text-foreground">AI Summary:</span> {article.aiSummary}
                            </div>
                            <div className="flex justify-end mt-4">
                                <Button variant="ghost" size="sm" className="h-8" onClick={() => triggerDemo("Open Article", "This would open the original article URL in a new tab.")}>
                                    Read Source <ExternalLink className="ml-2 h-3 w-3" />
                                </Button>
                            </div>
                        </CardContent>
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
