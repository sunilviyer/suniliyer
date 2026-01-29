import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockPortfolioSummary, mockMarketIndices } from "@/lib/mockData"
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function DashboardView() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
                        <span className="text-muted-foreground">$</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            ${mockPortfolioSummary.totalValue.toLocaleString()}
                        </div>
                        <p className={cn(
                            "text-xs flex items-center mt-1",
                            mockPortfolioSummary.dayChangeAmount >= 0 ? "text-money-positive" : "text-money-negative"
                        )}>
                            {mockPortfolioSummary.dayChangeAmount >= 0 ? "+" : ""}
                            {mockPortfolioSummary.dayChangePercent}% from yesterday
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Gain/Loss</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className={cn(
                            "text-2xl font-bold",
                            mockPortfolioSummary.totalGainAmount >= 0 ? "text-money-positive" : "text-money-negative"
                        )}>
                            {mockPortfolioSummary.totalGainAmount >= 0 ? "+" : ""}
                            ${mockPortfolioSummary.totalGainAmount.toLocaleString()}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            {mockPortfolioSummary.totalGainPercent}% all time return
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Holdings</CardTitle>
                        <div className="h-4 w-4 text-muted-foreground">#</div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Across 3 sectors
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Upcoming Earnings</CardTitle>
                        <div className="h-4 w-4 text-muted-foreground">📅</div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            In the next 30 days
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Market Overview</CardTitle>
                        <CardDescription>Major market indices performance today.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {mockMarketIndices.map((index) => (
                                <div key={index.name} className="flex items-center">
                                    <div className="w-[100px] font-medium">{index.name}</div>
                                    <div className="flex-1">
                                        {/* Simple visual bar for demo */}
                                        <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                                            <div
                                                className={cn("h-full", index.change >= 0 ? "bg-money-positive" : "bg-money-negative")}
                                                style={{ width: `${Math.abs(index.change) * 20}%` }} // Mock width
                                            />
                                        </div>
                                    </div>
                                    <div className={cn(
                                        "w-[80px] text-right font-medium",
                                        index.change >= 0 ? "text-money-positive" : "text-money-negative"
                                    )}>
                                        {index.change > 0 ? "+" : ""}{index.change}%
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Latest portfolio transactions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            <div className="flex items-center">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                                    <ArrowDownRight className="h-4 w-4 text-money-positive" />
                                </div>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Dividend Received</p>
                                    <p className="text-xs text-muted-foreground max-w-[200px]">Apple Inc. (AAPL)</p>
                                </div>
                                <div className="ml-auto font-medium">+$34.50</div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                                    <ArrowUpRight className="h-4 w-4 text-money-negative" />
                                </div>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Market Buy</p>
                                    <p className="text-xs text-muted-foreground max-w-[200px]">Vanguard Growth ETF</p>
                                </div>
                                <div className="ml-auto font-medium">-$2,500.00</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
