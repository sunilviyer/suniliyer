import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { mockHoldings } from "@/lib/mockData"
import { cn } from "@/lib/utils"
import { Plus, ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react"

export function HoldingsView() {
    const { toast } = useToast()
    const [open, setOpen] = React.useState(false)

    const handleSave = () => {
        setOpen(false)
        toast({
            title: "Holding Added",
            description: "Successfully added new position to portfolio.",
            duration: 3000,
        })
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Holdings</h2>
                    <p className="text-muted-foreground">Manage and view your investment positions.</p>
                </div>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Holding
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Holding</DialogTitle>
                            <DialogDescription>
                                Add a new position to your portfolio manually.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="symbol">Symbol</Label>
                                <Input id="symbol" placeholder="e.g. AAPL" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="shares">Shares</Label>
                                    <Input id="shares" type="number" placeholder="0" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="price">Avg Price</Label>
                                    <Input id="price" type="number" placeholder="$0.00" />
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button onClick={handleSave}>Save Position</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="rounded-md border bg-card">
                {/* Table Header Look-alike */}
                <div className="hidden md:flex items-center px-4 py-3 border-b text-sm font-medium text-muted-foreground">
                    <div className="flex-1">Symbol / Name</div>
                    <div className="w-[120px] text-right">Price</div>
                    <div className="w-[120px] text-right">Shares</div>
                    <div className="w-[140px] text-right">Value</div>
                    <div className="w-[120px] text-right">Gain/Loss</div>
                    <div className="w-[40px]"></div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {mockHoldings.map((holding) => (
                        <AccordionItem key={holding.id} value={holding.id}>
                            <AccordionTrigger className="hover:no-underline px-4 py-3 hover:bg-muted/50 transition-colors">
                                {/* Mobile View (Compact) handled via CSS hiding/showing if needed, sticking to desktop-first table layout for demo simplicity but with flex */}
                                <div className="flex flex-1 items-center justify-between text-left">
                                    <div className="flex-1">
                                        <div className="font-semibold">{holding.symbol}</div>
                                        <div className="text-xs text-muted-foreground hidden sm:block">{holding.name}</div>
                                    </div>

                                    <div className="w-[120px] text-right hidden md:block">
                                        <div className="font-mono">${holding.price.toFixed(2)}</div>
                                    </div>

                                    <div className="w-[120px] text-right hidden md:block">
                                        <div className="font-mono">{holding.shares}</div>
                                    </div>

                                    <div className="w-[140px] text-right">
                                        <div className="font-mono font-medium">${holding.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                                    </div>

                                    <div className="w-[120px] text-right">
                                        <div className={cn(
                                            "font-mono flex items-center justify-end",
                                            holding.totalGain >= 0 ? "text-money-positive" : "text-money-negative"
                                        )}>
                                            {holding.totalGainPercent > 0 ? "+" : ""}{holding.totalGainPercent.toFixed(2)}%
                                        </div>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="bg-muted/30 px-6 py-4">
                                <div className="grid gap-6 md:grid-cols-3">
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-semibold tracking-tight">Strategy & Position</h4>
                                        <div className="grid grid-cols-2 gap-y-2 text-sm">
                                            <span className="text-muted-foreground">Avg Cost</span>
                                            <span className="font-mono text-right">${holding.avgCost.toFixed(2)}</span>

                                            <span className="text-muted-foreground">Total Gain</span>
                                            <span className={cn("font-mono text-right", holding.totalGain >= 0 ? "text-money-positive" : "text-money-negative")}>
                                                {holding.totalGain >= 0 ? "+" : "-"}${Math.abs(holding.totalGain).toLocaleString()}
                                            </span>

                                            <span className="text-muted-foreground">Portfolio %</span>
                                            <span className="font-mono text-right">{(holding.totalValue / 120000 * 100).toFixed(1)}%</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-sm font-semibold tracking-tight">Fundamentals</h4>
                                        <div className="grid grid-cols-2 gap-y-2 text-sm">
                                            <span className="text-muted-foreground">Sector</span>
                                            <span className="text-right">{holding.sector}</span>

                                            <span className="text-muted-foreground">P/E Ratio</span>
                                            <span className="font-mono text-right">{holding.peRatio || "-"}</span>

                                            <span className="text-muted-foreground">Div Yield</span>
                                            <span className="font-mono text-right">{(holding.divYield * 100).toFixed(2)}%</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-sm font-semibold tracking-tight">Actions</h4>
                                        <div className="flex flex-col gap-2">
                                            <Button size="sm" variant="secondary">View Transactions</Button>
                                            <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">Sell Position</Button>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
