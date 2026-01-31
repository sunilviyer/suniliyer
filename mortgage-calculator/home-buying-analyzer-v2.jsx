import React, { useState, useMemo } from 'react';

export default function HomeBuyingAnalyzer() {
  // Current Home / Selling
  const [currentMortgage, setCurrentMortgage] = useState(672000);
  const [salePrice, setSalePrice] = useState(1025000);
  const [commissionRate, setCommissionRate] = useState(5.0);
  const [stagingCost, setStagingCost] = useState(3500);
  const [sellingLegalFees, setSellingLegalFees] = useState(1500);
  const [mortgageBreakPenalty, setMortgageBreakPenalty] = useState(0);
  
  // New Home / Buying
  const [purchasePrice, setPurchasePrice] = useState(1550000);
  const [buyingLegalFees, setBuyingLegalFees] = useState(2000);
  const [homeInspection, setHomeInspection] = useState(500);
  const [titleInsurance, setTitleInsurance] = useState(400);
  const [movingCosts, setMovingCosts] = useState(2500);
  const [immediateRepairs, setImmediateRepairs] = useState(5000);
  
  // Annual Carrying Costs
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.25); // Hamilton approx rate
  const [homeInsurance, setHomeInsurance] = useState(2400);
  const [maintenanceRate, setMaintenanceRate] = useState(1.0); // 1% of home value rule
  const [utilities, setUtilities] = useState(400); // monthly
  
  // Mortgage Options
  const [interestRate, setInterestRate] = useState(3.76);
  const [amortization, setAmortization] = useState(25);
  const [extraDownPayment, setExtraDownPayment] = useState(0);
  
  // Expanded rows state for TRUE COST breakdown
  const [expandedRows, setExpandedRows] = useState({
    closing: false,
    cmhc: false,
    interest: false,
    tax: false,
    insurance: false,
    maintenance: false,
    utilities: false
  });

  const calculations = useMemo(() => {
    // ===== SELLING CALCULATIONS =====
    const commission = salePrice * (commissionRate / 100);
    const totalSellingCosts = commission + stagingCost + sellingLegalFees + mortgageBreakPenalty;
    const netFromSale = salePrice - currentMortgage - totalSellingCosts;
    
    // ===== BUYING CALCULATIONS =====
    // Ontario Land Transfer Tax (Hamilton - no municipal tax like Toronto)
    const calculateLTT = (price) => {
      let ltt = 0;
      if (price > 55000) ltt += Math.min(price, 55000) * 0.005;
      if (price > 55000) ltt += (Math.min(price, 250000) - 55000) * 0.01;
      if (price > 250000) ltt += (Math.min(price, 400000) - 250000) * 0.015;
      if (price > 400000) ltt += (Math.min(price, 2000000) - 400000) * 0.02;
      if (price > 2000000) ltt += (price - 2000000) * 0.025;
      return ltt;
    };
    
    const landTransferTax = calculateLTT(purchasePrice);
    const totalBuyingCosts = landTransferTax + buyingLegalFees + homeInspection + titleInsurance + movingCosts + immediateRepairs;
    
    // ===== DOWN PAYMENT & MORTGAGE =====
    const availableForDownPayment = netFromSale - totalBuyingCosts + extraDownPayment;
    const downPaymentPercent = (availableForDownPayment / purchasePrice) * 100;
    
    // CMHC Insurance (if down payment < 20%)
    let cmhcRate = 0;
    if (downPaymentPercent < 20 && downPaymentPercent >= 5) {
      if (downPaymentPercent >= 15) cmhcRate = 0.028;
      else if (downPaymentPercent >= 10) cmhcRate = 0.031;
      else cmhcRate = 0.04;
    }
    
    const mortgageNeeded = purchasePrice - availableForDownPayment;
    const cmhcInsurance = mortgageNeeded * cmhcRate;
    const totalMortgage = mortgageNeeded + cmhcInsurance;
    
    // ===== MORTGAGE PAYMENT CALCULATIONS =====
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = amortization * 12;
    
    const monthlyPayment = totalMortgage * 
      (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
    
    const totalInterest = (monthlyPayment * totalPayments) - totalMortgage;
    const totalMortgageCost = monthlyPayment * totalPayments;
    
    // Compare 25 vs 30 year
    const calculateMortgage = (years) => {
      const payments = years * 12;
      const payment = totalMortgage * 
        (monthlyRate * Math.pow(1 + monthlyRate, payments)) /
        (Math.pow(1 + monthlyRate, payments) - 1);
      const interest = (payment * payments) - totalMortgage;
      return { payment, interest, totalCost: payment * payments };
    };
    
    const mort25 = calculateMortgage(25);
    const mort30 = calculateMortgage(30);
    
    // ===== ANNUAL CARRYING COSTS =====
    const annualPropertyTax = purchasePrice * (propertyTaxRate / 100);
    const monthlyPropertyTax = annualPropertyTax / 12;
    const annualMaintenance = purchasePrice * (maintenanceRate / 100);
    const monthlyMaintenance = annualMaintenance / 12;
    const annualInsurance = homeInsurance;
    const monthlyInsurance = homeInsurance / 12;
    const monthlyUtilities = utilities;
    const annualUtilities = utilities * 12;
    
    const totalAnnualCarryingCosts = annualPropertyTax + annualMaintenance + annualInsurance + annualUtilities;
    const totalMonthlyCarryingCosts = monthlyPropertyTax + monthlyMaintenance + monthlyInsurance + monthlyUtilities;
    
    // Total monthly housing cost (mortgage + carrying)
    const totalMonthlyHousingCost = monthlyPayment + totalMonthlyCarryingCosts;
    
    // Total carrying costs over amortization period
    const totalCarryingCostsOverLife = totalAnnualCarryingCosts * amortization;
    
    // ===== TRUE COST OF OWNERSHIP =====
    const trueCostOfHome = purchasePrice + totalBuyingCosts + totalInterest + cmhcInsurance + totalCarryingCostsOverLife;
    
    // ===== AFFORDABILITY CHECK =====
    const isAffordable = availableForDownPayment > 0 && downPaymentPercent >= 5;
    const cashShortfall = availableForDownPayment < 0 ? Math.abs(availableForDownPayment) : 0;
    
    // ===== MAX AFFORDABLE PRICE =====
    const maxPriceFor20Down = (netFromSale - totalBuyingCosts + extraDownPayment) / 0.20;
    
    // Extra needed for 20% down
    const twentyPercentRequired = purchasePrice * 0.20;
    const extraNeededFor20Percent = twentyPercentRequired - availableForDownPayment;
    
    return {
      // Selling
      salePrice,
      commission,
      stagingCost,
      sellingLegalFees,
      mortgageBreakPenalty,
      totalSellingCosts,
      currentMortgage,
      netFromSale,
      
      // Buying
      purchasePrice,
      landTransferTax,
      buyingLegalFees,
      homeInspection,
      titleInsurance,
      movingCosts,
      immediateRepairs,
      totalBuyingCosts,
      
      // Down Payment & Mortgage
      availableForDownPayment,
      downPaymentPercent,
      mortgageNeeded,
      cmhcInsurance,
      cmhcRate,
      totalMortgage,
      
      // Payments
      monthlyPayment,
      totalInterest,
      totalMortgageCost,
      
      // Comparison
      mort25,
      mort30,
      interestSavings: mort30.interest - mort25.interest,
      paymentDiff: mort25.payment - mort30.payment,
      
      // Annual Carrying Costs
      annualPropertyTax,
      monthlyPropertyTax,
      annualMaintenance,
      monthlyMaintenance,
      annualInsurance,
      monthlyInsurance,
      annualUtilities,
      monthlyUtilities,
      totalAnnualCarryingCosts,
      totalMonthlyCarryingCosts,
      totalMonthlyHousingCost,
      totalCarryingCostsOverLife,
      
      // True Cost
      trueCostOfHome,
      
      // Affordability
      isAffordable,
      cashShortfall,
      maxPriceFor20Down,
      extraNeededFor20Percent
    };
  }, [currentMortgage, salePrice, commissionRate, stagingCost, sellingLegalFees, mortgageBreakPenalty,
      purchasePrice, buyingLegalFees, homeInspection, titleInsurance, movingCosts, immediateRepairs,
      interestRate, amortization, extraDownPayment, propertyTaxRate, homeInsurance, maintenanceRate, utilities]);

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-CA', { 
      style: 'currency', 
      currency: 'CAD',
      maximumFractionDigits: 0 
    }).format(num);
  };

  const formatCurrencyDetailed = (num) => {
    return new Intl.NumberFormat('en-CA', { 
      style: 'currency', 
      currency: 'CAD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(num);
  };

  const formatPercent = (num) => num.toFixed(2) + '%';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 text-emerald-400">🏠 Complete Home Sale & Purchase Analyzer</h1>
        <p className="text-center text-slate-400 mb-6">Including property taxes, insurance, and ALL carrying costs</p>
        
        {/* Affordability Alert */}
        {!calculations.isAffordable && (
          <div className="bg-red-900/50 border border-red-500 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 text-red-400 font-semibold">
              <span className="text-2xl">⚠️</span>
              <span>Cash Shortfall: You need {formatCurrency(calculations.cashShortfall)} more to make this purchase work.</span>
            </div>
          </div>
        )}

        {/* TOP SUMMARY CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-emerald-900/30 rounded-xl p-4 border border-emerald-700/50">
            <div className="text-sm text-emerald-400 mb-1">Monthly Mortgage</div>
            <div className="text-2xl font-bold">{formatCurrencyDetailed(calculations.monthlyPayment)}</div>
          </div>
          <div className="bg-amber-900/30 rounded-xl p-4 border border-amber-700/50">
            <div className="text-sm text-amber-400 mb-1">Monthly Carrying Costs</div>
            <div className="text-2xl font-bold">{formatCurrencyDetailed(calculations.totalMonthlyCarryingCosts)}</div>
          </div>
          <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-700/50">
            <div className="text-sm text-purple-400 mb-1">Total Monthly Cost</div>
            <div className="text-2xl font-bold">{formatCurrencyDetailed(calculations.totalMonthlyHousingCost)}</div>
          </div>
          <div className="bg-rose-900/30 rounded-xl p-4 border border-rose-700/50">
            <div className="text-sm text-rose-400 mb-1">True Cost ({amortization} yrs)</div>
            <div className="text-2xl font-bold">{formatCurrency(calculations.trueCostOfHome)}</div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* COLUMN 1: SELLING YOUR HOME */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <h2 className="text-lg font-semibold text-rose-400 mb-4 flex items-center gap-2">
              <span>🏷️</span> Selling Your Current Home
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Sale Price</label>
                <div className="text-xl font-bold text-white mb-2">{formatCurrency(salePrice)}</div>
                <input
                  type="range"
                  min="800000"
                  max="1200000"
                  step="5000"
                  value={salePrice}
                  onChange={(e) => setSalePrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$800K</span>
                  <span>$1.2M</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Current Mortgage Owing</label>
                <div className="text-lg font-bold text-white mb-2">{formatCurrency(currentMortgage)}</div>
                <input
                  type="range"
                  min="500000"
                  max="800000"
                  step="1000"
                  value={currentMortgage}
                  onChange={(e) => setCurrentMortgage(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Agent Commission: {commissionRate}%</label>
                <input
                  type="range"
                  min="3"
                  max="6"
                  step="0.25"
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="text-sm text-rose-400 mt-1">{formatCurrency(calculations.commission)}</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Staging</label>
                  <input
                    type="number"
                    value={stagingCost}
                    onChange={(e) => setStagingCost(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Legal Fees</label>
                  <input
                    type="number"
                    value={sellingLegalFees}
                    onChange={(e) => setSellingLegalFees(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Mortgage Break Penalty</label>
                <input
                  type="number"
                  value={mortgageBreakPenalty}
                  onChange={(e) => setMortgageBreakPenalty(Number(e.target.value))}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  placeholder="Check with your lender"
                />
              </div>
            </div>

            {/* Selling Summary */}
            <div className="mt-4 pt-4 border-t border-slate-600 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Sale Price</span>
                <span>{formatCurrency(salePrice)}</span>
              </div>
              <div className="flex justify-between text-rose-400">
                <span>− Mortgage Payoff</span>
                <span>({formatCurrency(currentMortgage)})</span>
              </div>
              <div className="flex justify-between text-rose-400">
                <span>− Total Selling Costs</span>
                <span>({formatCurrency(calculations.totalSellingCosts)})</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-slate-600">
                <span className="text-emerald-400">Net Proceeds</span>
                <span className={calculations.netFromSale >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                  {formatCurrency(calculations.netFromSale)}
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: BUYING NEW HOME */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <h2 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <span>🏡</span> Buying New Home
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Purchase Price</label>
                <div className="text-xl font-bold text-white mb-2">{formatCurrency(purchasePrice)}</div>
                <input
                  type="range"
                  min="1200000"
                  max="2000000"
                  step="10000"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$1.2M</span>
                  <span>$2M</span>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-lg p-3 border border-amber-700/50">
                <div className="flex justify-between text-sm">
                  <span className="text-amber-400">Ontario Land Transfer Tax</span>
                  <span className="font-semibold">{formatCurrency(calculations.landTransferTax)}</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Calculated automatically based on price</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Legal Fees</label>
                  <input
                    type="number"
                    value={buyingLegalFees}
                    onChange={(e) => setBuyingLegalFees(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Home Inspection</label>
                  <input
                    type="number"
                    value={homeInspection}
                    onChange={(e) => setHomeInspection(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Title Insurance</label>
                  <input
                    type="number"
                    value={titleInsurance}
                    onChange={(e) => setTitleInsurance(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Moving Costs</label>
                  <input
                    type="number"
                    value={movingCosts}
                    onChange={(e) => setMovingCosts(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Immediate Repairs/Updates</label>
                <input
                  type="number"
                  value={immediateRepairs}
                  onChange={(e) => setImmediateRepairs(Number(e.target.value))}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Extra Down Payment (Additional Cash)</label>
                <input
                  type="number"
                  value={extraDownPayment}
                  onChange={(e) => setExtraDownPayment(Number(e.target.value))}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  placeholder="From savings, investments, etc."
                />
              </div>
            </div>

            {/* Buying Summary */}
            <div className="mt-4 pt-4 border-t border-slate-600 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Closing Costs</span>
                <span className="text-blue-400">{formatCurrency(calculations.totalBuyingCosts)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Available for Down Payment</span>
                <span className={calculations.availableForDownPayment >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                  {formatCurrency(calculations.availableForDownPayment)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Down Payment %</span>
                <span className={calculations.downPaymentPercent >= 20 ? 'text-emerald-400' : 'text-amber-400'}>
                  {formatPercent(calculations.downPaymentPercent)}
                </span>
              </div>
              {calculations.cmhcInsurance > 0 && (
                <div className="flex justify-between text-amber-400">
                  <span>+ CMHC Insurance</span>
                  <span>{formatCurrency(calculations.cmhcInsurance)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-slate-600">
                <span className="text-blue-400">New Mortgage</span>
                <span>{formatCurrency(calculations.totalMortgage)}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: MORTGAGE & CARRYING COSTS */}
          <div className="space-y-6">
            {/* Mortgage Options */}
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
              <h2 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <span>📊</span> Mortgage Options
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Interest Rate: {interestRate}%</label>
                  <input
                    type="range"
                    min="2"
                    max="7"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Amortization Period</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setAmortization(25)}
                      className={`p-2 rounded-lg border text-sm transition-all ${
                        amortization === 25 
                          ? 'bg-emerald-600 border-emerald-500' 
                          : 'bg-slate-700 border-slate-600 hover:bg-slate-600'
                      }`}
                    >
                      25 Years
                    </button>
                    <button
                      onClick={() => setAmortization(30)}
                      className={`p-2 rounded-lg border text-sm transition-all ${
                        amortization === 30 
                          ? 'bg-emerald-600 border-emerald-500' 
                          : 'bg-slate-700 border-slate-600 hover:bg-slate-600'
                      }`}
                    >
                      30 Years
                    </button>
                  </div>
                </div>

                {/* Quick Comparison */}
                <div className="bg-slate-900/50 rounded-lg p-3 text-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">25yr payment:</span>
                    <span>{formatCurrencyDetailed(calculations.mort25.payment)}/mo</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">30yr payment:</span>
                    <span>{formatCurrencyDetailed(calculations.mort30.payment)}/mo</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 pt-2 border-t border-slate-700">
                    <span>25yr saves:</span>
                    <span>{formatCurrency(calculations.interestSavings)} interest</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ANNUAL CARRYING COSTS - NEW! */}
            <div className="bg-slate-800/50 rounded-xl p-5 border border-amber-700/50">
              <h2 className="text-lg font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <span>🏛️</span> Annual Carrying Costs
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">
                    Property Tax Rate: {propertyTaxRate}%
                    <span className="text-xs text-slate-500 ml-2">(Hamilton ~1.2-1.4%)</span>
                  </label>
                  <input
                    type="range"
                    min="0.8"
                    max="2.0"
                    step="0.05"
                    value={propertyTaxRate}
                    onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-amber-400">{formatCurrency(calculations.annualPropertyTax)}/year</span>
                    <span className="text-slate-400">{formatCurrency(calculations.monthlyPropertyTax)}/month</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Home Insurance (Annual)</label>
                  <input
                    type="number"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">
                    Maintenance: {maintenanceRate}% of home value
                    <span className="text-xs text-slate-500 ml-2">(Rule of thumb: 1%)</span>
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={maintenanceRate}
                    onChange={(e) => setMaintenanceRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="text-sm text-slate-400 mt-1">{formatCurrency(calculations.annualMaintenance)}/year</div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Utilities (Monthly)</label>
                  <input
                    type="number"
                    value={utilities}
                    onChange={(e) => setUtilities(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
              </div>

              {/* Carrying Cost Summary */}
              <div className="mt-4 pt-3 border-t border-slate-600">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Total Annual</span>
                  <span className="text-amber-400 font-semibold">{formatCurrency(calculations.totalAnnualCarryingCosts)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Monthly</span>
                  <span className="text-amber-400 font-semibold">{formatCurrency(calculations.totalMonthlyCarryingCosts)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MONTHLY COST BREAKDOWN */}
        <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 mb-6">
          <h2 className="text-lg font-semibold mb-4">📅 Your Total Monthly Housing Cost</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                  <div className="flex-1 flex justify-between">
                    <span className="text-slate-400">Mortgage Payment</span>
                    <span className="font-semibold">{formatCurrencyDetailed(calculations.monthlyPayment)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-amber-500 rounded"></div>
                  <div className="flex-1 flex justify-between">
                    <span className="text-slate-400">Property Tax</span>
                    <span className="font-semibold">{formatCurrencyDetailed(calculations.monthlyPropertyTax)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <div className="flex-1 flex justify-between">
                    <span className="text-slate-400">Home Insurance</span>
                    <span className="font-semibold">{formatCurrencyDetailed(calculations.monthlyInsurance)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <div className="flex-1 flex justify-between">
                    <span className="text-slate-400">Maintenance Reserve</span>
                    <span className="font-semibold">{formatCurrencyDetailed(calculations.monthlyMaintenance)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                  <div className="flex-1 flex justify-between">
                    <span className="text-slate-400">Utilities</span>
                    <span className="font-semibold">{formatCurrencyDetailed(calculations.monthlyUtilities)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-600">
                  <div className="w-4 h-4 bg-white rounded"></div>
                  <div className="flex-1 flex justify-between">
                    <span className="font-bold">TOTAL MONTHLY</span>
                    <span className="font-bold text-xl text-emerald-400">{formatCurrencyDetailed(calculations.totalMonthlyHousingCost)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Bar */}
            <div>
              <div className="h-12 flex rounded-lg overflow-hidden mb-4">
                <div 
                  className="bg-emerald-500 flex items-center justify-center text-xs font-medium"
                  style={{ width: `${(calculations.monthlyPayment / calculations.totalMonthlyHousingCost) * 100}%` }}
                >
                  {((calculations.monthlyPayment / calculations.totalMonthlyHousingCost) * 100).toFixed(0)}%
                </div>
                <div 
                  className="bg-amber-500 flex items-center justify-center text-xs font-medium"
                  style={{ width: `${(calculations.monthlyPropertyTax / calculations.totalMonthlyHousingCost) * 100}%` }}
                >
                  {((calculations.monthlyPropertyTax / calculations.totalMonthlyHousingCost) * 100).toFixed(0)}%
                </div>
                <div 
                  className="bg-blue-500"
                  style={{ width: `${(calculations.monthlyInsurance / calculations.totalMonthlyHousingCost) * 100}%` }}
                ></div>
                <div 
                  className="bg-purple-500"
                  style={{ width: `${(calculations.monthlyMaintenance / calculations.totalMonthlyHousingCost) * 100}%` }}
                ></div>
                <div 
                  className="bg-cyan-500"
                  style={{ width: `${(calculations.monthlyUtilities / calculations.totalMonthlyHousingCost) * 100}%` }}
                ></div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="text-sm text-slate-400 mb-2">💡 Affordability Check</div>
                <div className="text-xs text-slate-300">
                  <p className="mb-2">Banks typically allow housing costs to be 32-39% of gross income (GDS ratio).</p>
                  <p>To afford {formatCurrencyDetailed(calculations.totalMonthlyHousingCost)}/month, you'd need:</p>
                  <div className="mt-2 font-semibold text-emerald-400">
                    {formatCurrency(calculations.totalMonthlyHousingCost / 0.32 * 12)}/year gross income (at 32% GDS)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRUE COST SUMMARY */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-xl p-6 border border-emerald-700/50 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-emerald-400">🎯 TRUE Cost of This Home Over {amortization} Years</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-slate-400">Click on any row with ▶ to see detailed breakdown</p>
            <div className="flex gap-2">
              <button
                onClick={() => setExpandedRows({
                  closing: true, cmhc: true, interest: true, 
                  tax: true, insurance: true, maintenance: true, utilities: true
                })}
                className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={() => setExpandedRows({
                  closing: false, cmhc: false, interest: false, 
                  tax: false, insurance: false, maintenance: false, utilities: false
                })}
                className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              {/* Purchase Price - No expansion */}
              <div className="flex justify-between py-3 border-b border-slate-700">
                <span className="text-slate-400">Purchase Price</span>
                <span className="font-semibold">{formatCurrency(purchasePrice)}</span>
              </div>
              
              {/* Closing Costs - Expandable */}
              <div className="border-b border-slate-700">
                <button 
                  onClick={() => setExpandedRows(prev => ({...prev, closing: !prev.closing}))}
                  className="w-full flex justify-between py-3 hover:bg-slate-700/30 transition-colors"
                >
                  <span className="text-slate-400 flex items-center gap-2">
                    <span className={`transform transition-transform ${expandedRows.closing ? 'rotate-90' : ''}`}>▶</span>
                    + Closing Costs
                  </span>
                  <span className="text-blue-400">+{formatCurrency(calculations.totalBuyingCosts)}</span>
                </button>
                {expandedRows.closing && (
                  <div className="bg-slate-900/50 rounded-lg p-3 mb-3 ml-6 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Land Transfer Tax (Ontario)</span>
                      <span>{formatCurrency(calculations.landTransferTax)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Legal Fees</span>
                      <span>{formatCurrency(buyingLegalFees)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Home Inspection</span>
                      <span>{formatCurrency(homeInspection)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Title Insurance</span>
                      <span>{formatCurrency(titleInsurance)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Moving Costs</span>
                      <span>{formatCurrency(movingCosts)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Immediate Repairs</span>
                      <span>{formatCurrency(immediateRepairs)}</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* CMHC Insurance - Expandable if applicable */}
              {calculations.cmhcInsurance > 0 && (
                <div className="border-b border-slate-700">
                  <button 
                    onClick={() => setExpandedRows(prev => ({...prev, cmhc: !prev.cmhc}))}
                    className="w-full flex justify-between py-3 hover:bg-slate-700/30 transition-colors"
                  >
                    <span className="text-slate-400 flex items-center gap-2">
                      <span className={`transform transition-transform ${expandedRows.cmhc ? 'rotate-90' : ''}`}>▶</span>
                      + CMHC Insurance
                    </span>
                    <span className="text-amber-400">+{formatCurrency(calculations.cmhcInsurance)}</span>
                  </button>
                  {expandedRows.cmhc && (
                    <div className="bg-slate-900/50 rounded-lg p-3 mb-3 ml-6 text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Your Down Payment</span>
                        <span>{formatPercent(calculations.downPaymentPercent)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">CMHC Premium Rate</span>
                        <span>{(calculations.cmhcRate * 100).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Mortgage Before CMHC</span>
                        <span>{formatCurrency(calculations.mortgageNeeded)}</span>
                      </div>
                      <div className="flex justify-between text-amber-400">
                        <span>CMHC Added to Mortgage</span>
                        <span>{formatCurrency(calculations.cmhcInsurance)}</span>
                      </div>
                      <div className="text-xs text-slate-500 pt-2 border-t border-slate-700">
                        💡 Put down 20% ({formatCurrency(purchasePrice * 0.2)}) to avoid this!
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Mortgage Interest - Expandable */}
              <div className="border-b border-slate-700">
                <button 
                  onClick={() => setExpandedRows(prev => ({...prev, interest: !prev.interest}))}
                  className="w-full flex justify-between py-3 hover:bg-slate-700/30 transition-colors"
                >
                  <span className="text-slate-400 flex items-center gap-2">
                    <span className={`transform transition-transform ${expandedRows.interest ? 'rotate-90' : ''}`}>▶</span>
                    + Mortgage Interest ({amortization} yrs)
                  </span>
                  <span className="text-rose-400">+{formatCurrency(calculations.totalInterest)}</span>
                </button>
                {expandedRows.interest && (
                  <div className="bg-slate-900/50 rounded-lg p-3 mb-3 ml-6 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Total Mortgage (with CMHC)</span>
                      <span>{formatCurrency(calculations.totalMortgage)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Interest Rate</span>
                      <span>{interestRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Monthly Payment</span>
                      <span>{formatCurrencyDetailed(calculations.monthlyPayment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Total Payments ({amortization} × 12)</span>
                      <span>{amortization * 12} payments</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Total Paid to Bank</span>
                      <span>{formatCurrency(calculations.totalMortgageCost)}</span>
                    </div>
                    <div className="flex justify-between text-rose-400 pt-2 border-t border-slate-700">
                      <span>Pure Interest Cost</span>
                      <span>{formatCurrency(calculations.totalInterest)}</span>
                    </div>
                    <div className="text-xs text-slate-500 pt-2">
                      💡 That's {((calculations.totalInterest / calculations.totalMortgage) * 100).toFixed(0)}% of your borrowed amount in interest!
                    </div>
                  </div>
                )}
              </div>
              
              {/* Property Taxes - Expandable */}
              <div className="border-b border-slate-700">
                <button 
                  onClick={() => setExpandedRows(prev => ({...prev, tax: !prev.tax}))}
                  className="w-full flex justify-between py-3 hover:bg-slate-700/30 transition-colors"
                >
                  <span className="text-slate-400 flex items-center gap-2">
                    <span className={`transform transition-transform ${expandedRows.tax ? 'rotate-90' : ''}`}>▶</span>
                    + Property Taxes ({amortization} yrs)
                  </span>
                  <span className="text-amber-400">+{formatCurrency(calculations.annualPropertyTax * amortization)}</span>
                </button>
                {expandedRows.tax && (
                  <div className="bg-slate-900/50 rounded-lg p-3 mb-3 ml-6 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Home Value (assessed)</span>
                      <span>{formatCurrency(purchasePrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Tax Rate</span>
                      <span>{propertyTaxRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Annual Property Tax</span>
                      <span>{formatCurrency(calculations.annualPropertyTax)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Monthly Amount</span>
                      <span>{formatCurrencyDetailed(calculations.monthlyPropertyTax)}</span>
                    </div>
                    <div className="flex justify-between text-amber-400 pt-2 border-t border-slate-700">
                      <span>Total over {amortization} years</span>
                      <span>{formatCurrency(calculations.annualPropertyTax * amortization)}</span>
                    </div>
                    <div className="text-xs text-slate-500 pt-2">
                      ⚠️ Property tax rates can increase yearly. This assumes constant rate.
                    </div>
                  </div>
                )}
              </div>
              
              {/* Insurance - Expandable */}
              <div className="border-b border-slate-700">
                <button 
                  onClick={() => setExpandedRows(prev => ({...prev, insurance: !prev.insurance}))}
                  className="w-full flex justify-between py-3 hover:bg-slate-700/30 transition-colors"
                >
                  <span className="text-slate-400 flex items-center gap-2">
                    <span className={`transform transition-transform ${expandedRows.insurance ? 'rotate-90' : ''}`}>▶</span>
                    + Home Insurance ({amortization} yrs)
                  </span>
                  <span className="text-blue-400">+{formatCurrency(calculations.annualInsurance * amortization)}</span>
                </button>
                {expandedRows.insurance && (
                  <div className="bg-slate-900/50 rounded-lg p-3 mb-3 ml-6 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Annual Premium</span>
                      <span>{formatCurrency(calculations.annualInsurance)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Monthly Amount</span>
                      <span>{formatCurrencyDetailed(calculations.monthlyInsurance)}</span>
                    </div>
                    <div className="flex justify-between text-blue-400 pt-2 border-t border-slate-700">
                      <span>Total over {amortization} years</span>
                      <span>{formatCurrency(calculations.annualInsurance * amortization)}</span>
                    </div>
                    <div className="text-xs text-slate-500 pt-2">
                      💡 Higher value homes typically have higher premiums. Shop around!
                    </div>
                  </div>
                )}
              </div>
              
              {/* Maintenance - Expandable */}
              <div className="border-b border-slate-700">
                <button 
                  onClick={() => setExpandedRows(prev => ({...prev, maintenance: !prev.maintenance}))}
                  className="w-full flex justify-between py-3 hover:bg-slate-700/30 transition-colors"
                >
                  <span className="text-slate-400 flex items-center gap-2">
                    <span className={`transform transition-transform ${expandedRows.maintenance ? 'rotate-90' : ''}`}>▶</span>
                    + Maintenance ({amortization} yrs)
                  </span>
                  <span className="text-purple-400">+{formatCurrency(calculations.annualMaintenance * amortization)}</span>
                </button>
                {expandedRows.maintenance && (
                  <div className="bg-slate-900/50 rounded-lg p-3 mb-3 ml-6 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Home Value</span>
                      <span>{formatCurrency(purchasePrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Maintenance Rate</span>
                      <span>{maintenanceRate}% per year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Annual Reserve</span>
                      <span>{formatCurrency(calculations.annualMaintenance)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Monthly Set-Aside</span>
                      <span>{formatCurrencyDetailed(calculations.monthlyMaintenance)}</span>
                    </div>
                    <div className="flex justify-between text-purple-400 pt-2 border-t border-slate-700">
                      <span>Total over {amortization} years</span>
                      <span>{formatCurrency(calculations.annualMaintenance * amortization)}</span>
                    </div>
                    <div className="text-xs text-slate-500 pt-2">
                      🔧 Covers: roof repairs, HVAC, appliances, plumbing, painting, etc.
                    </div>
                  </div>
                )}
              </div>
              
              {/* Utilities - Expandable */}
              <div className="border-b border-slate-700">
                <button 
                  onClick={() => setExpandedRows(prev => ({...prev, utilities: !prev.utilities}))}
                  className="w-full flex justify-between py-3 hover:bg-slate-700/30 transition-colors"
                >
                  <span className="text-slate-400 flex items-center gap-2">
                    <span className={`transform transition-transform ${expandedRows.utilities ? 'rotate-90' : ''}`}>▶</span>
                    + Utilities ({amortization} yrs)
                  </span>
                  <span className="text-cyan-400">+{formatCurrency(calculations.annualUtilities * amortization)}</span>
                </button>
                {expandedRows.utilities && (
                  <div className="bg-slate-900/50 rounded-lg p-3 mb-3 ml-6 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Monthly Utilities</span>
                      <span>{formatCurrency(utilities)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Annual Utilities</span>
                      <span>{formatCurrency(calculations.annualUtilities)}</span>
                    </div>
                    <div className="flex justify-between text-cyan-400 pt-2 border-t border-slate-700">
                      <span>Total over {amortization} years</span>
                      <span>{formatCurrency(calculations.annualUtilities * amortization)}</span>
                    </div>
                    <div className="text-xs text-slate-500 pt-2">
                      ⚡ Includes: hydro, gas, water, internet. Larger homes cost more!
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-slate-900/70 rounded-xl p-6 text-center">
                <div className="text-sm text-slate-400 mb-2">TRUE TOTAL COST</div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">{formatCurrency(calculations.trueCostOfHome)}</div>
                <div className="text-sm text-rose-400">
                  That's {formatCurrency(calculations.trueCostOfHome - purchasePrice)} more than the sticker price!
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-amber-400">{formatCurrency(calculations.annualPropertyTax)}</div>
                  <div className="text-xs text-slate-400">Property Tax/Year</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">{formatPercent(calculations.downPaymentPercent)}</div>
                  <div className="text-xs text-slate-400">Down Payment</div>
                </div>
              </div>
              
              {calculations.downPaymentPercent < 20 && calculations.downPaymentPercent >= 5 && (
                <div className="mt-4 p-3 bg-amber-900/30 rounded-lg border border-amber-700/50">
                  <div className="text-sm text-amber-400">⚠️ To avoid CMHC ({formatCurrency(calculations.cmhcInsurance)})</div>
                  <div className="text-xs text-slate-300 mt-1">
                    Need {formatCurrency(calculations.extraNeededFor20Percent)} more for 20% down
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          📌 Property tax rates vary by municipality. Hamilton is ~1.25%, Toronto ~0.63%, Mississauga ~0.85%. Check your specific city!
        </p>
      </div>
    </div>
  );
}
