export interface Holding {
    id: string;
    symbol: string;
    name: string;
    shares: number;
    price: number;
    avgCost: number;
    changePercent: number;
    changeAmount: number;
    totalValue: number;
    totalGain: number;
    totalGainPercent: number;
    sector: string;
    peRatio: number;
    divYield: number;
    earningsDate: string;
}

export const mockHoldings: Holding[] = [
    {
        id: "1",
        symbol: "AAPL",
        name: "Apple Inc.",
        shares: 150,
        price: 185.92,
        avgCost: 142.50,
        changePercent: 1.25,
        changeAmount: 2.30,
        totalValue: 27888.00,
        totalGain: 6513.00,
        totalGainPercent: 30.47,
        sector: "Technology",
        peRatio: 28.5,
        divYield: 0.52,
        earningsDate: "2026-02-01"
    },
    {
        id: "2",
        symbol: "MSFT",
        name: "Microsoft Corp.",
        shares: 85,
        price: 402.10,
        avgCost: 285.00,
        changePercent: 0.85,
        changeAmount: 3.40,
        totalValue: 34178.50,
        totalGain: 9953.50,
        totalGainPercent: 41.09,
        sector: "Technology",
        peRatio: 36.2,
        divYield: 0.74,
        earningsDate: "2026-01-25"
    },
    {
        id: "3",
        symbol: "JPM",
        name: "JPMorgan Chase",
        shares: 200,
        price: 172.50,
        avgCost: 155.00,
        changePercent: -0.45,
        changeAmount: -0.78,
        totalValue: 34500.00,
        totalGain: 3500.00,
        totalGainPercent: 11.29,
        sector: "Financials",
        peRatio: 11.4,
        divYield: 2.45,
        earningsDate: "2026-04-12"
    },
    {
        id: "4",
        symbol: "VGRO.TO",
        name: "Vanguard Growth ETF",
        shares: 500,
        price: 34.25,
        avgCost: 31.50,
        changePercent: 0.12,
        changeAmount: 0.04,
        totalValue: 17125.00,
        totalGain: 1375.00,
        totalGainPercent: 8.73,
        sector: "ETF",
        peRatio: 0,
        divYield: 2.10,
        earningsDate: "N/A"
    },
    {
        id: "5",
        symbol: "TSLA",
        name: "Tesla Inc.",
        shares: 50,
        price: 215.00,
        avgCost: 245.00,
        changePercent: -2.30,
        changeAmount: -5.06,
        totalValue: 10750.00,
        totalGain: -1500.00,
        totalGainPercent: -12.24,
        sector: "Consumer Cyclical",
        peRatio: 65.4,
        divYield: 0,
        earningsDate: "2026-01-24"
    }
];

export const mockPortfolioSummary = {
    totalValue: 124441.50,
    dayChangeAmount: 1250.45,
    dayChangePercent: 1.01,
    totalGainAmount: 19841.50,
    totalGainPercent: 18.97,
};

export const mockMarketIndices = [
    { name: "S&P 500", value: 4925.50, change: 0.85 },
    { name: "NASDAQ", value: 15620.10, change: 1.12 },
    { name: "TSX", value: 21050.25, change: -0.15 },
];
