import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, TrendingUp, TrendingDown, DollarSign, Calendar } from "lucide-react"
import { DemoPopup } from "@/components/ui/demo-popup"

export function MarketDataView() {
    const [activeTab, setActiveTab] = useState('prices')
    const [demoState, setDemoState] = useState<{ open: boolean, title: string, desc: string }>({
        open: false,
        title: "",
        desc: ""
    })

    const triggerDemo = (title: string, desc: string) => {
        setDemoState({ open: true, title, desc })
    }

    const tabs = [
        { id: 'prices', label: 'Prices' },
        { id: 'indices', label: 'Indices' },
        { id: 'fundamentals', label: 'Fundamentals' },
        { id: 'earnings', label: 'Earnings' }
    ]

    const prices = [
        { symbol: 'AAPL', price: 232.45, change: 1.25, shares: 15 },
        { symbol: 'MSFT', price: 425.10, change: -0.45, shares: 10 },
        { symbol: 'GOOGL', price: 178.30, change: 0.85, shares: 20 },
        { symbol: 'AMZN', price: 185.90, change: 2.10, shares: 8 },
        { symbol: 'TSLA', price: 245.60, change: -3.20, shares: 5 },
        { symbol: 'NVDA', price: 135.20, change: 4.50, shares: 25 },
    ]

    const indices = [
        { name: 'S&P 500', value: 5560.40, change: 0.85 },
        { name: 'NASDAQ', value: 17850.20, change: 1.20 },
        { name: 'Dow Jones', value: 40120.50, change: 0.45 },
        { name: 'TSX', value: 22450.80, change: -0.15 },
        { name: 'VIX', value: 12.45, change: -2.30 },
    ]

    const fundamentals = [
        { symbol: 'AAPL', pe: 32.5, mktCap: '3.4T', divYield: '0.55%' },
        { symbol: 'MSFT', pe: 35.2, mktCap: '3.1T', divYield: '0.72%' },
        { symbol: 'NVDA', pe: 65.4, mktCap: '3.2T', divYield: '0.04%' },
    ]

    const earnings = [
        { symbol: 'NVDA', date: '2025-02-21', estimate: '$0.75' },
        { symbol: 'CRM', date: '2025-02-28', estimate: '$1.20' },
    ]

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Market Data</h2>
                    <p className="text-muted-foreground">Real-time market intelligence and data coverage</p>
                </div>
                <Button
                    onClick={() => triggerDemo(
                        "Triggering Cloud Price Updater",
                        "This action would connect to the Render API, initiate the 'price_updater' job, and fetch real-time quotes from Alpha Vantage for 39 holdings and 5 watchlist items."
                    )}
                >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh Prices
                </Button>
            </div>

            <div className="flex space-x-2 border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 hover:text-primary ${activeTab === tab.id
                            ? 'border-primary text-primary'
                            : 'border-transparent text-muted-foreground'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {activeTab === 'prices' && prices.map((stock) => (
                    <Card key={stock.symbol}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stock.symbol}</CardTitle>
                            {stock.change >= 0 ?
                                <TrendingUp className="h-4 w-4 text-money-positive" /> :
                                <TrendingDown className="h-4 w-4 text-money-negative" />
                            }
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${stock.price.toFixed(2)}</div>
                            <p className={`text-xs ${stock.change >= 0 ? 'text-money-positive' : 'text-money-negative'}`}>
                                {stock.change >= 0 ? '+' : ''}{stock.change}%
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                                {stock.shares} shares held
                            </p>
                        </CardContent>
                    </Card>
                ))}

                {activeTab === 'indices' && indices.map((index) => (
                    <Card key={index.name}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{index.name}</CardTitle>
                            {index.change >= 0 ?
                                <TrendingUp className="h-4 w-4 text-money-positive" /> :
                                <TrendingDown className="h-4 w-4 text-money-negative" />
                            }
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{index.value.toLocaleString()}</div>
                            <p className={`text-xs ${index.change >= 0 ? 'text-money-positive' : 'text-money-negative'}`}>
                                {index.change >= 0 ? '+' : ''}{index.change}%
                            </p>
                        </CardContent>
                    </Card>
                ))}

                {activeTab === 'fundamentals' && fundamentals.map((stock) => (
                    <Card key={stock.symbol}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stock.symbol}</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <p className="text-muted-foreground">P/E Ratio</p>
                                    <p className="font-medium">{stock.pe}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Mkt Cap</p>
                                    <p className="font-medium">{stock.mktCap}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Div Yield</p>
                                    <p className="font-medium">{stock.divYield}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {activeTab === 'earnings' && earnings.map((stock) => (
                    <Card key={stock.symbol}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stock.symbol}</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stock.date}</div>
                            <p className="text-xs text-muted-foreground">
                                Est. EPS: {stock.estimate}
                            </p>
                            <Button
                                variant="outline"
                                size="sm"
                                className="mt-4 w-full"
                                onClick={() => triggerDemo("Scraping Earnings", "This would trigger the Playwright Browser Agent to verify this date against Yahoo Finance data.")}
                            >
                                Verify Date
                            </Button>
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
