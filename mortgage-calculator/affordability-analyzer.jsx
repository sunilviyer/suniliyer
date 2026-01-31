import React, { useState, useMemo } from 'react';

export default function AffordabilityAnalyzer() {
  // Current Home / Selling
  const [currentMortgage, setCurrentMortgage] = useState(672000);
  const [salePrice, setSalePrice] = useState(1025000);
  const [commissionRate, setCommissionRate] = useState(5.0);
  const [stagingCost, setStagingCost] = useState(3500);
  const [sellingLegalFees, setSellingLegalFees] = useState(1500);
  const [mortgageBreakPenalty, setMortgageBreakPenalty] = useState(0);
  
  // Target Budget Constraints
  const [targetMortgagePayment, setTargetMortgagePayment] = useState(4900);
  const [targetPropertyTax, setTargetPropertyTax] = useState(6500); // Annual
  
  // Buying Costs
  const [buyingLegalFees, setBuyingLegalFees] = useState(2000);
  const [homeInspection, setHomeInspection] = useState(500);
  const [titleInsurance, setTitleInsurance] = useState(400);
  const [movingCosts, setMovingCosts] = useState(2500);
  const [immediateRepairs, setImmediateRepairs] = useState(5000);
  
  // Mortgage Options
  const [interestRate, setInterestRate] = useState(3.76);
  const [amortization, setAmortization] = useState(30);
  const [extraDownPayment, setExtraDownPayment] = useState(0);
  
  // Price scenarios to compare
  const priceScenarios = [1250000, 1350000, 1450000, 1550000];

  const calculations = useMemo(() => {
    // ===== SELLING CALCULATIONS =====
    const commission = salePrice * (commissionRate / 100);
    const totalSellingCosts = commission + stagingCost + sellingLegalFees + mortgageBreakPenalty;
    const netFromSale = salePrice - currentMortgage - totalSellingCosts;
    
    // ===== CALCULATE MAX AFFORDABLE MORTGAGE FROM TARGET PAYMENT =====
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = amortization * 12;
    
    // Reverse mortgage formula: P = M * [(1+r)^n - 1] / [r * (1+r)^n]
    const maxMortgageFromPayment = targetMortgagePayment * 
      (Math.pow(1 + monthlyRate, totalPayments) - 1) / 
      (monthlyRate * Math.pow(1 + monthlyRate, totalPayments));
    
    // ===== BUYING CALCULATIONS HELPER =====
    const calculateLTT = (price) => {
      let ltt = 0;
      if (price > 55000) ltt += Math.min(price, 55000) * 0.005;
      if (price > 55000) ltt += (Math.min(price, 250000) - 55000) * 0.01;
      if (price > 250000) ltt += (Math.min(price, 400000) - 250000) * 0.015;
      if (price > 400000) ltt += (Math.min(price, 2000000) - 400000) * 0.02;
      if (price > 2000000) ltt += (price - 2000000) * 0.025;
      return ltt;
    };
    
    const getClosingCosts = (price) => {
      return calculateLTT(price) + buyingLegalFees + homeInspection + titleInsurance + movingCosts + immediateRepairs;
    };
    
    // ===== CALCULATE MAX PURCHASE PRICE =====
    // Formula: Max Purchase = Down Payment + Mortgage
    //          Down Payment = Equity - Closing Costs
    //          So: Max Purchase = (Equity - Closing Costs) + Max Mortgage
    
    // This is iterative because closing costs (especially LTT) depend on price
    let maxPurchasePrice = 0;
    let maxPurchaseClosingCosts = 0;
    let maxPurchaseDownPayment = 0;
    let iterations = 0;
    let testPrice = netFromSale + maxMortgageFromPayment + extraDownPayment; // Starting estimate
    
    while (iterations < 20) {
      const closingCosts = getClosingCosts(testPrice);
      const availableDownPayment = netFromSale - closingCosts + extraDownPayment;
      const newPrice = availableDownPayment + maxMortgageFromPayment;
      
      if (Math.abs(newPrice - testPrice) < 1000) {
        maxPurchasePrice = newPrice;
        maxPurchaseClosingCosts = closingCosts;
        maxPurchaseDownPayment = availableDownPayment;
        break;
      }
      testPrice = newPrice;
      iterations++;
    }
    maxPurchasePrice = Math.floor(maxPurchasePrice / 1000) * 1000; // Round to nearest $1000
    
    // ===== CALCULATE SCENARIOS =====
    const scenarios = priceScenarios.map(price => {
      const ltt = calculateLTT(price);
      const closingCosts = getClosingCosts(price);
      const availableDownPayment = netFromSale - closingCosts + extraDownPayment;
      const downPaymentPercent = (availableDownPayment / price) * 100;
      
      // CMHC if < 20% down
      let cmhcRate = 0;
      if (downPaymentPercent < 20 && downPaymentPercent >= 5) {
        if (downPaymentPercent >= 15) cmhcRate = 0.028;
        else if (downPaymentPercent >= 10) cmhcRate = 0.031;
        else cmhcRate = 0.04;
      }
      
      const mortgageNeeded = price - availableDownPayment;
      const cmhcInsurance = mortgageNeeded * cmhcRate;
      const totalMortgage = mortgageNeeded + cmhcInsurance;
      
      // Calculate actual monthly payment for this mortgage
      const monthlyPayment = totalMortgage * 
        (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
      
      const totalInterest = (monthlyPayment * totalPayments) - totalMortgage;
      
      // Monthly property tax (using fixed annual amount)
      const monthlyPropertyTax = targetPropertyTax / 12;
      
      // Total monthly (mortgage + property tax only as per user's focus)
      const totalMonthly = monthlyPayment + monthlyPropertyTax;
      
      // Difference from target
      const paymentDiff = monthlyPayment - targetMortgagePayment;
      const isAffordable = availableDownPayment > 0 && monthlyPayment <= targetMortgagePayment * 1.05; // 5% buffer
      const isWithinBudget = monthlyPayment <= targetMortgagePayment;
      
      // Cash needed if short on down payment for 20%
      const twentyPercentNeeded = price * 0.20;
      const extraCashFor20Percent = Math.max(0, twentyPercentNeeded - availableDownPayment);
      
      return {
        price,
        ltt,
        closingCosts,
        availableDownPayment,
        downPaymentPercent,
        cmhcRate,
        cmhcInsurance,
        mortgageNeeded,
        totalMortgage,
        monthlyPayment,
        monthlyPropertyTax,
        totalMonthly,
        totalInterest,
        paymentDiff,
        isAffordable,
        isWithinBudget,
        extraCashFor20Percent
      };
    });
    
    return {
      // Selling
      salePrice,
      commission,
      totalSellingCosts,
      currentMortgage,
      netFromSale,
      
      // Max affordable
      maxMortgageFromPayment,
      maxPurchasePrice,
      maxPurchaseClosingCosts,
      maxPurchaseDownPayment,
      
      // Scenarios
      scenarios,
      
      // Budget targets
      targetMortgagePayment,
      targetPropertyTax,
      targetTotalMonthly: targetMortgagePayment + (targetPropertyTax / 12)
    };
  }, [currentMortgage, salePrice, commissionRate, stagingCost, sellingLegalFees, mortgageBreakPenalty,
      buyingLegalFees, homeInspection, titleInsurance, movingCosts, immediateRepairs,
      interestRate, amortization, extraDownPayment, targetMortgagePayment, targetPropertyTax]);

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

  const formatPercent = (num) => num.toFixed(1) + '%';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 text-emerald-400">🎯 Affordability Calculator</h1>
        <p className="text-center text-slate-400 mb-6">Work backwards from your target monthly budget</p>
        
        {/* TARGET BUDGET - HERO SECTION */}
        <div className="bg-gradient-to-r from-emerald-900/40 to-blue-900/40 rounded-xl p-6 border border-emerald-700/50 mb-6">
          <h2 className="text-lg font-semibold text-emerald-400 mb-4">💰 Your Target Monthly Budget</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Target Mortgage Payment</label>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">$</span>
                <input
                  type="number"
                  value={targetMortgagePayment}
                  onChange={(e) => setTargetMortgagePayment(Number(e.target.value))}
                  className="flex-1 bg-slate-800 border border-emerald-600 rounded-lg p-3 text-2xl font-bold text-emerald-400"
                />
                <span className="text-slate-500">/mo</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-slate-400 mb-2">Annual Property Tax (Oakville)</label>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">$</span>
                <input
                  type="number"
                  value={targetPropertyTax}
                  onChange={(e) => setTargetPropertyTax(Number(e.target.value))}
                  className="flex-1 bg-slate-800 border border-amber-600 rounded-lg p-3 text-2xl font-bold text-amber-400"
                />
                <span className="text-slate-500">/yr</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">= {formatCurrency(targetPropertyTax / 12)}/month</div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="text-sm text-slate-400 mb-1">Total Monthly Target</div>
              <div className="text-3xl font-bold text-white">
                {formatCurrencyDetailed(calculations.targetTotalMonthly)}
              </div>
              <div className="text-xs text-slate-500">Mortgage + Property Tax</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-slate-900/50 rounded-lg">
            <div className="text-sm text-slate-400 mb-2">📐 The Math (verify it yourself!):</div>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-emerald-400">{formatCurrency(calculations.maxMortgageFromPayment)}</div>
                <div className="text-xs text-slate-500">Max Mortgage</div>
              </div>
              <div className="text-2xl text-slate-500">+</div>
              <div>
                <div className="text-lg font-bold text-purple-400">{formatCurrency(calculations.maxPurchaseDownPayment)}</div>
                <div className="text-xs text-slate-500">Down Payment</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">=  {formatCurrency(calculations.maxPurchasePrice)}</div>
                <div className="text-xs text-slate-500">Max Purchase</div>
              </div>
            </div>
            <div className="text-xs text-slate-500 mt-3 text-center">
              Down Payment = Equity ({formatCurrency(calculations.netFromSale)}) − Closing Costs (~{formatCurrency(calculations.maxPurchaseClosingCosts)}) {extraDownPayment > 0 ? `+ Extra Cash (${formatCurrency(extraDownPayment)})` : ''}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* COLUMN 1: SELLING */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <h2 className="text-lg font-semibold text-rose-400 mb-4">🏷️ Your Current Home Sale</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Sale Price</label>
                <div className="text-xl font-bold text-white mb-2">{formatCurrency(salePrice)}</div>
                <input
                  type="range"
                  min="900000"
                  max="1150000"
                  step="5000"
                  value={salePrice}
                  onChange={(e) => setSalePrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Current Mortgage</label>
                <div className="text-lg font-bold text-white mb-2">{formatCurrency(currentMortgage)}</div>
                <input
                  type="range"
                  min="600000"
                  max="750000"
                  step="1000"
                  value={currentMortgage}
                  onChange={(e) => setCurrentMortgage(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Commission: {commissionRate}%</label>
                <input
                  type="range"
                  min="3"
                  max="6"
                  step="0.25"
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
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
                  <label className="block text-xs text-slate-400 mb-1">Break Penalty</label>
                  <input
                    type="number"
                    value={mortgageBreakPenalty}
                    onChange={(e) => setMortgageBreakPenalty(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Net Proceeds */}
            <div className="mt-4 pt-4 border-t border-slate-600">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Sale Price</span>
                <span>{formatCurrency(salePrice)}</span>
              </div>
              <div className="flex justify-between text-sm mb-1 text-rose-400">
                <span>− Mortgage & Costs</span>
                <span>({formatCurrency(currentMortgage + calculations.totalSellingCosts)})</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-slate-600">
                <span className="text-emerald-400">Your Equity</span>
                <span className="text-emerald-400">{formatCurrency(calculations.netFromSale)}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: MORTGAGE OPTIONS */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <h2 className="text-lg font-semibold text-blue-400 mb-4">📊 Mortgage Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Interest Rate: {interestRate}%</label>
                <input
                  type="range"
                  min="2.5"
                  max="6"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Amortization</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setAmortization(25)}
                    className={`p-2 rounded-lg border text-sm transition-all ${
                      amortization === 25 
                        ? 'bg-blue-600 border-blue-500' 
                        : 'bg-slate-700 border-slate-600 hover:bg-slate-600'
                    }`}
                  >
                    25 Years
                  </button>
                  <button
                    onClick={() => setAmortization(30)}
                    className={`p-2 rounded-lg border text-sm transition-all ${
                      amortization === 30 
                        ? 'bg-blue-600 border-blue-500' 
                        : 'bg-slate-700 border-slate-600 hover:bg-slate-600'
                    }`}
                  >
                    30 Years
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-xs text-slate-400 mb-1">Extra Cash for Down Payment</label>
                <input
                  type="number"
                  value={extraDownPayment}
                  onChange={(e) => setExtraDownPayment(Number(e.target.value))}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  placeholder="From savings, RRSP, etc."
                />
              </div>
            </div>
            
            {/* Buying Costs */}
            <div className="mt-4 pt-4 border-t border-slate-600">
              <h3 className="text-sm font-medium text-slate-300 mb-3">Closing Costs (adjust if needed)</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Legal</label>
                  <input
                    type="number"
                    value={buyingLegalFees}
                    onChange={(e) => setBuyingLegalFees(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Inspection</label>
                  <input
                    type="number"
                    value={homeInspection}
                    onChange={(e) => setHomeInspection(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Moving</label>
                  <input
                    type="number"
                    value={movingCosts}
                    onChange={(e) => setMovingCosts(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Repairs</label>
                  <input
                    type="number"
                    value={immediateRepairs}
                    onChange={(e) => setImmediateRepairs(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: MAX AFFORDABLE SUMMARY */}
          <div className="bg-slate-800/50 rounded-xl p-5 border border-emerald-700/50">
            <h2 className="text-lg font-semibold text-emerald-400 mb-4">✅ Your Affordability Math</h2>
            
            <div className="space-y-3">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="text-xs text-slate-500 mb-1">Step 1: Max Mortgage from Payment</div>
                <div className="text-xl font-bold text-emerald-400">{formatCurrency(calculations.maxMortgageFromPayment)}</div>
                <div className="text-xs text-slate-500 mt-1">
                  {formatCurrencyDetailed(targetMortgagePayment)}/mo @ {interestRate}% × {amortization}yr
                </div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="text-xs text-slate-500 mb-1">Step 2: Your Equity from Sale</div>
                <div className="text-xl font-bold text-blue-400">{formatCurrency(calculations.netFromSale)}</div>
                <div className="text-xs text-slate-500 mt-1">
                  {formatCurrency(salePrice)} - {formatCurrency(currentMortgage)} - {formatCurrency(calculations.totalSellingCosts)} costs
                </div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="text-xs text-slate-500 mb-1">Step 3: Minus Closing Costs (~)</div>
                <div className="text-xl font-bold text-rose-400">− {formatCurrency(calculations.maxPurchaseClosingCosts)}</div>
                <div className="text-xs text-slate-500 mt-1">
                  LTT + legal + inspection + moving + repairs
                </div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="text-xs text-slate-500 mb-1">Step 4: Available for Down Payment</div>
                <div className="text-xl font-bold text-purple-400">{formatCurrency(calculations.maxPurchaseDownPayment)}</div>
                <div className="text-xs text-slate-500 mt-1">
                  {formatCurrency(calculations.netFromSale)} − {formatCurrency(calculations.maxPurchaseClosingCosts)} {extraDownPayment > 0 ? `+ ${formatCurrency(extraDownPayment)} extra` : ''}
                </div>
              </div>
              
              <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-600">
                <div className="text-xs text-emerald-500 mb-1">Step 5: Max Purchase Price</div>
                <div className="text-2xl font-bold text-emerald-400">{formatCurrency(calculations.maxPurchasePrice)}</div>
                <div className="text-xs text-slate-400 mt-2 font-mono bg-slate-900 p-2 rounded">
                  {formatCurrency(calculations.maxPurchaseDownPayment)} + {formatCurrency(calculations.maxMortgageFromPayment)} = {formatCurrency(calculations.maxPurchasePrice)}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Down Payment + Max Mortgage = Max Price
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRICE COMPARISON TABLE */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
          <h2 className="text-xl font-semibold mb-2">📊 Price Scenario Comparison</h2>
          <p className="text-sm text-slate-400 mb-4">See how different purchase prices affect your monthly payment</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-2 text-slate-400 font-medium">Purchase Price</th>
                  <th className="text-right py-3 px-2 text-slate-400 font-medium">Down Payment</th>
                  <th className="text-right py-3 px-2 text-slate-400 font-medium">CMHC</th>
                  <th className="text-right py-3 px-2 text-slate-400 font-medium">Mortgage</th>
                  <th className="text-right py-3 px-2 text-slate-400 font-medium">Monthly Mortgage</th>
                  <th className="text-right py-3 px-2 text-slate-400 font-medium">+ Prop Tax</th>
                  <th className="text-right py-3 px-2 text-slate-400 font-medium">Total Monthly</th>
                  <th className="text-center py-3 px-2 text-slate-400 font-medium">vs Budget</th>
                </tr>
              </thead>
              <tbody>
                {calculations.scenarios.map((scenario, idx) => (
                  <tr 
                    key={idx} 
                    className={`border-b border-slate-700/50 ${
                      scenario.isWithinBudget ? 'bg-emerald-900/10' : 'bg-rose-900/10'
                    }`}
                  >
                    <td className="py-4 px-2">
                      <div className="font-bold text-lg">{formatCurrency(scenario.price)}</div>
                      <div className="text-xs text-slate-500">LTT: {formatCurrency(scenario.ltt)}</div>
                    </td>
                    <td className="text-right py-4 px-2">
                      <div className={scenario.downPaymentPercent >= 20 ? 'text-emerald-400' : 'text-amber-400'}>
                        {formatPercent(scenario.downPaymentPercent)}
                      </div>
                      <div className="text-xs text-slate-500">{formatCurrency(scenario.availableDownPayment)}</div>
                    </td>
                    <td className="text-right py-4 px-2">
                      {scenario.cmhcInsurance > 0 ? (
                        <div className="text-amber-400">{formatCurrency(scenario.cmhcInsurance)}</div>
                      ) : (
                        <div className="text-emerald-400">None ✓</div>
                      )}
                    </td>
                    <td className="text-right py-4 px-2">
                      <div>{formatCurrency(scenario.totalMortgage)}</div>
                    </td>
                    <td className="text-right py-4 px-2">
                      <div className="font-semibold">{formatCurrencyDetailed(scenario.monthlyPayment)}</div>
                    </td>
                    <td className="text-right py-4 px-2 text-amber-400">
                      +{formatCurrency(scenario.monthlyPropertyTax)}
                    </td>
                    <td className="text-right py-4 px-2">
                      <div className={`font-bold text-lg ${scenario.isWithinBudget ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {formatCurrencyDetailed(scenario.totalMonthly)}
                      </div>
                    </td>
                    <td className="text-center py-4 px-2">
                      {scenario.isWithinBudget ? (
                        <div className="inline-flex items-center gap-1 bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded-full text-xs">
                          ✓ Within
                          <span className="text-emerald-300">
                            (-{formatCurrency(Math.abs(scenario.paymentDiff))})
                          </span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 bg-rose-900/50 text-rose-400 px-2 py-1 rounded-full text-xs">
                          ✗ Over
                          <span className="text-rose-300">
                            (+{formatCurrency(scenario.paymentDiff)})
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-xs text-slate-500">
            * Your target: {formatCurrencyDetailed(targetMortgagePayment)}/mo mortgage + {formatCurrency(targetPropertyTax/12)}/mo property tax = {formatCurrencyDetailed(calculations.targetTotalMonthly)}/mo total
          </div>
        </div>

        {/* DETAILED BREAKDOWN FOR EACH SCENARIO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {calculations.scenarios.map((scenario, idx) => (
            <div 
              key={idx} 
              className={`rounded-xl p-4 border ${
                scenario.isWithinBudget 
                  ? 'bg-emerald-900/20 border-emerald-700/50' 
                  : 'bg-slate-800/50 border-slate-700'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-xl font-bold">{formatCurrency(scenario.price)}</div>
                {scenario.isWithinBudget && (
                  <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded">✓ Fits Budget</span>
                )}
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Down Payment</span>
                  <span className={scenario.downPaymentPercent >= 20 ? 'text-emerald-400' : 'text-amber-400'}>
                    {formatPercent(scenario.downPaymentPercent)}
                  </span>
                </div>
                
                {scenario.cmhcInsurance > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">CMHC Added</span>
                    <span className="text-amber-400">{formatCurrency(scenario.cmhcInsurance)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-slate-400">Mortgage</span>
                  <span>{formatCurrency(scenario.totalMortgage)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-slate-400">Land Transfer Tax</span>
                  <span>{formatCurrency(scenario.ltt)}</span>
                </div>
                
                <div className="pt-2 border-t border-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monthly Mortgage</span>
                    <span className="font-semibold">{formatCurrencyDetailed(scenario.monthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monthly Tax</span>
                    <span>{formatCurrency(scenario.monthlyPropertyTax)}</span>
                  </div>
                  <div className="flex justify-between mt-2 pt-2 border-t border-slate-700">
                    <span className="font-semibold">Total Monthly</span>
                    <span className={`font-bold ${scenario.isWithinBudget ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {formatCurrencyDetailed(scenario.totalMonthly)}
                    </span>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-slate-700">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Total Interest ({amortization}yr)</span>
                    <span className="text-rose-400">{formatCurrency(scenario.totalInterest)}</span>
                  </div>
                </div>
                
                {scenario.extraCashFor20Percent > 0 && (
                  <div className="mt-2 p-2 bg-amber-900/30 rounded text-xs">
                    <span className="text-amber-400">Need {formatCurrency(scenario.extraCashFor20Percent)} more for 20% down (avoid CMHC)</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* KEY INSIGHTS */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-700/30">
          <h2 className="text-lg font-semibold mb-4">💡 Key Insights for Your Situation</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 text-xl">✓</span>
                <div>
                  <div className="font-medium">Best Fit: {formatCurrency(calculations.scenarios.filter(s => s.isWithinBudget).slice(-1)[0]?.price || calculations.scenarios[0].price)}</div>
                  <div className="text-sm text-slate-400">Highest price that stays within your {formatCurrencyDetailed(targetMortgagePayment)}/mo mortgage budget</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-xl">⚠️</span>
                <div>
                  <div className="font-medium">CMHC Threshold</div>
                  <div className="text-sm text-slate-400">
                    {calculations.scenarios.find(s => s.downPaymentPercent >= 20) 
                      ? `At ${formatCurrency(calculations.scenarios.find(s => s.downPaymentPercent >= 20).price)}, you hit 20% down and avoid CMHC`
                      : 'All scenarios require CMHC insurance (under 20% down)'
                    }
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">📊</span>
                <div>
                  <div className="font-medium">Price Sensitivity</div>
                  <div className="text-sm text-slate-400">
                    Each $100K in price adds ~{formatCurrency(
                      100000 * (interestRate/100/12) * (Math.pow(1 + interestRate/100/12, amortization*12)) / 
                      (Math.pow(1 + interestRate/100/12, amortization*12) - 1)
                    )}/mo to your mortgage payment
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-purple-400 text-xl">🎯</span>
                <div>
                  <div className="font-medium">Your Max Price</div>
                  <div className="text-sm text-slate-400">
                    Based on your {formatCurrencyDetailed(targetMortgagePayment)}/mo target, max is ~{formatCurrency(calculations.maxPurchasePrice)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          📌 Based on {amortization}-year amortization @ {interestRate}%. Oakville property tax entered as fixed amount (not % of purchase price).
        </p>
      </div>
    </div>
  );
}
