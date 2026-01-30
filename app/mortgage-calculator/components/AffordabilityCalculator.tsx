'use client';

import { useState, useMemo } from 'react';

export default function AffordabilityCalculator() {
  // Income-Based Calculations
  const [annualIncome, setAnnualIncome] = useState(150000);
  const [maxDebtPercent, setMaxDebtPercent] = useState(44);

  // Current Home / Selling
  const [currentMortgage, setCurrentMortgage] = useState(500000);
  const [salePrice, setSalePrice] = useState(1000000);
  const [commissionRate] = useState(5.0);
  const [stagingCost] = useState(3500);
  const [sellingLegalFees] = useState(1500);
  const [mortgageBreakPenalty] = useState(0);

  // Target Budget Constraints
  const [targetMortgagePayment, setTargetMortgagePayment] = useState(4900);
  const [targetPropertyTax, setTargetPropertyTax] = useState(6500); // Annual

  // Buying Costs
  const [buyingLegalFees] = useState(2000);
  const [homeInspection] = useState(500);
  const [titleInsurance] = useState(400);
  const [movingCosts] = useState(2500);
  const [immediateRepairs] = useState(5000);

  // Mortgage Options
  const [interestRate] = useState(3.76);
  const [amortization] = useState(30);
  const [extraDownPayment] = useState(0);

  const calculations = useMemo(() => {
    // Price scenarios to compare
    const priceScenarios = [1250000, 1350000, 1450000, 1550000];

    // ===== INCOME-BASED CALCULATIONS =====
    const monthlyIncome = annualIncome / 12;
    const maxMonthlyDebt = (annualIncome * (maxDebtPercent / 100)) / 12;
    const suggestedMortgagePayment = (annualIncome * 0.30) / 12;

    // ===== SELLING CALCULATIONS =====
    const commission = salePrice * (commissionRate / 100);
    const totalSellingCosts = commission + stagingCost + sellingLegalFees + mortgageBreakPenalty;
    const netFromSale = salePrice - currentMortgage - totalSellingCosts;

    // ===== CALCULATE MAX AFFORDABLE MORTGAGE FROM TARGET PAYMENT =====
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = amortization * 12;

    // Reverse mortgage formula
    const maxMortgageFromPayment = targetMortgagePayment *
      (Math.pow(1 + monthlyRate, totalPayments) - 1) /
      (monthlyRate * Math.pow(1 + monthlyRate, totalPayments));

    // ===== BUYING CALCULATIONS HELPER =====
    const calculateLTT = (price: number) => {
      let ltt = 0;
      if (price > 55000) ltt += Math.min(price, 55000) * 0.005;
      if (price > 55000) ltt += (Math.min(price, 250000) - 55000) * 0.01;
      if (price > 250000) ltt += (Math.min(price, 400000) - 250000) * 0.015;
      if (price > 400000) ltt += (Math.min(price, 2000000) - 400000) * 0.02;
      if (price > 2000000) ltt += (price - 2000000) * 0.025;
      return ltt;
    };

    const getClosingCosts = (price: number) => {
      return calculateLTT(price) + buyingLegalFees + homeInspection + titleInsurance + movingCosts + immediateRepairs;
    };

    // ===== CALCULATE MAX PURCHASE PRICE =====
    let maxPurchasePrice = 0;
    let maxPurchaseClosingCosts = 0;
    let maxPurchaseDownPayment = 0;
    let iterations = 0;
    let testPrice = netFromSale + maxMortgageFromPayment + extraDownPayment;

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
    maxPurchasePrice = Math.floor(maxPurchasePrice / 1000) * 1000;

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

      const monthlyPayment = totalMortgage *
        (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);

      const totalInterest = (monthlyPayment * totalPayments) - totalMortgage;
      const monthlyPropertyTax = targetPropertyTax / 12;
      const totalMonthly = monthlyPayment + monthlyPropertyTax;
      const paymentDiff = monthlyPayment - targetMortgagePayment;
      const isAffordable = availableDownPayment > 0 && monthlyPayment <= targetMortgagePayment * 1.05;
      const isWithinBudget = monthlyPayment <= targetMortgagePayment;
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
      annualIncome,
      monthlyIncome,
      maxMonthlyDebt,
      suggestedMortgagePayment,
      salePrice,
      commission,
      totalSellingCosts,
      currentMortgage,
      netFromSale,
      maxMortgageFromPayment,
      maxPurchasePrice,
      maxPurchaseClosingCosts,
      maxPurchaseDownPayment,
      scenarios,
      targetMortgagePayment,
      targetPropertyTax,
      targetTotalMonthly: targetMortgagePayment + (targetPropertyTax / 12),
      monthlyRate,
      totalPayments
    };
  }, [annualIncome, maxDebtPercent, currentMortgage, salePrice, commissionRate, stagingCost, sellingLegalFees, mortgageBreakPenalty,
      buyingLegalFees, homeInspection, titleInsurance, movingCosts, immediateRepairs,
      interestRate, amortization, extraDownPayment, targetMortgagePayment, targetPropertyTax]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0
    }).format(num);
  };

  const formatCurrencyDetailed = (num: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  return (
    <div className="affordability-calculator">
      {/* TARGET BUDGET - HERO SECTION */}
      <div className="hero-budget-section slide-in">
        <h2 className="section-heading">💰 Your Target Monthly Budget</h2>

        <div className="budget-grid">
          <div className="budget-input-card">
            <label className="input-label">Annual Income</label>
            <div className="currency-input-group">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="currency-input large"
              />
              <span className="currency-suffix">/yr</span>
            </div>
            <div className="input-hint">= {formatCurrency(calculations.monthlyIncome)}/month</div>
          </div>

          <div className="budget-input-card">
            <label className="input-label">Max Debt Ratio (Ontario Regulation)</label>
            <div className="currency-input-group">
              <input
                type="number"
                value={maxDebtPercent}
                onChange={(e) => setMaxDebtPercent(Number(e.target.value))}
                className="currency-input large"
                min="0"
                max="100"
              />
              <span className="currency-suffix">%</span>
            </div>
            <div className="input-hint regulation-note">44% is max debt allowed in Ontario per mortgage regulation</div>
          </div>

          <div className="budget-input-card">
            <label className="input-label">Target Mortgage Payment</label>
            <div className="currency-input-group">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                value={targetMortgagePayment}
                onChange={(e) => setTargetMortgagePayment(Number(e.target.value))}
                className="currency-input large"
              />
              <span className="currency-suffix">/mo</span>
            </div>
          </div>

          <div className="budget-input-card">
            <label className="input-label">Annual Property Tax</label>
            <div className="currency-input-group">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                value={targetPropertyTax}
                onChange={(e) => setTargetPropertyTax(Number(e.target.value))}
                className="currency-input large"
              />
              <span className="currency-suffix">/yr</span>
            </div>
            <div className="input-hint">= {formatCurrency(targetPropertyTax / 12)}/month</div>
          </div>

          <div className="budget-summary-card">
            <div className="summary-label">Total Monthly Target</div>
            <div className="summary-value">{formatCurrencyDetailed(calculations.targetTotalMonthly)}</div>
            <div className="summary-hint">Mortgage + Property Tax</div>
          </div>
        </div>

        {/* Income-Based Debt Analysis */}
        <div className="debt-analysis-section">
          <div className="debt-analysis-grid">
            <div className="debt-card">
              <div className="debt-label">Max Monthly Debt Permitted</div>
              <div className="debt-value permitted">{formatCurrency(calculations.maxMonthlyDebt)}</div>
              <div className="debt-hint">Based on {maxDebtPercent}% of annual income</div>
            </div>
            <div className="debt-card">
              <div className="debt-label">Suggested Mortgage Payment</div>
              <div className="debt-value suggested">{formatCurrency(calculations.suggestedMortgagePayment)}</div>
              <div className="debt-hint">30% of annual income (conservative guideline)</div>
            </div>
          </div>
        </div>

        {/* Max Mortgage Calculation Breakdown */}
        <div className="calculation-breakdown">
          <h3 className="breakdown-title">📊 Max Mortgage Calculation</h3>
          <div className="breakdown-formula">
            <div className="formula-row">
              <span className="formula-label">Monthly Payment Target:</span>
              <span className="formula-value">{formatCurrency(targetMortgagePayment)}</span>
            </div>
            <div className="formula-row">
              <span className="formula-label">Interest Rate:</span>
              <span className="formula-value">{interestRate}%</span>
            </div>
            <div className="formula-row">
              <span className="formula-label">Amortization Period:</span>
              <span className="formula-value">{amortization} years</span>
            </div>
            <div className="formula-row result-row">
              <span className="formula-label">= Maximum Mortgage:</span>
              <span className="formula-value highlight">{formatCurrency(calculations.maxMortgageFromPayment)}</span>
            </div>
          </div>
        </div>

        {/* Down Payment & Purchase Price Breakdown */}
        <div className="budget-calculation-display">
          <div className="calc-step">
            <div className="calc-value primary">{formatCurrency(calculations.maxMortgageFromPayment)}</div>
            <div className="calc-label">Max Mortgage</div>
          </div>
          <div className="calc-operator">+</div>
          <div className="calc-step">
            <div className="calc-value secondary">{formatCurrency(calculations.maxPurchaseDownPayment)}</div>
            <div className="calc-label">Down Payment Available</div>
            <div className="calc-note">From home sale equity</div>
          </div>
          <div className="calc-operator">=</div>
          <div className="calc-step">
            <div className="calc-value result">{formatCurrency(calculations.maxPurchasePrice)}</div>
            <div className="calc-label">Max Purchase Price</div>
          </div>
        </div>

        <div className="important-note">
          ⚠️ <strong>Important:</strong> The down payment shown above is after deducting estimated closing costs from your home sale equity.
          Make sure you have additional funds available to cover buying costs (legal fees, inspection, moving, etc.).
        </div>
      </div>

      {/* Input Sections Grid */}
      <div className="inputs-grid slide-in-delayed">
        {/* Selling Section */}
        <div className="input-section">
          <h3 className="input-section-title">🏷️ Your Current Home Sale</h3>

          <div className="input-group">
            <label>Sale Price: {formatCurrency(salePrice)}</label>
            <input
              type="range"
              min="100000"
              max="3000000"
              step="5000"
              value={salePrice}
              onChange={(e) => setSalePrice(Number(e.target.value))}
              className="slider"
            />
          </div>

          <div className="input-group">
            <label>Current Home Mortgage: {formatCurrency(currentMortgage)}</label>
            <input
              type="range"
              min="0"
              max="2000000"
              step="5000"
              value={currentMortgage}
              onChange={(e) => setCurrentMortgage(Number(e.target.value))}
              className="slider"
            />
          </div>

          <div className="equity-summary">
            <div className="summary-row">
              <span>Sale Price</span>
              <span className="equity-value positive">{formatCurrency(salePrice)}</span>
            </div>
            <div className="summary-row">
              <span>- Mortgage</span>
              <span className="equity-value negative">{formatCurrency(currentMortgage)}</span>
            </div>
            <div className="summary-row">
              <span>- Selling Costs</span>
              <span className="equity-value negative">{formatCurrency(calculations.totalSellingCosts)}</span>
            </div>
            <div className="summary-row total">
              <span>= Your Equity</span>
              <span className="equity-value final">{formatCurrency(calculations.netFromSale)}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .affordability-calculator {
          width: 100%;
        }

        .hero-budget-section {
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 24px;
          padding: 48px;
          margin-bottom: 48px;
          box-shadow: var(--shadow-lg);
        }

        .section-heading {
          font-family: var(--font-funnel-display);
          font-size: 32px;
          font-weight: 700;
          color: var(--accent-primary);
          margin: 0 0 32px 0;
          text-align: center;
        }

        .budget-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .budget-input-card {
          background: var(--bg-secondary);
          padding: 24px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
        }

        .input-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .currency-input-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .currency-symbol,
        .currency-suffix {
          font-size: 18px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .currency-input {
          flex: 1;
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 12px;
          padding: 16px;
          font-size: 24px;
          font-weight: 700;
          color: var(--accent-primary);
          text-align: center;
          transition: all 0.3s ease;
        }

        .currency-input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(199, 81, 70, 0.1);
        }

        .input-hint {
          margin-top: 8px;
          font-size: 12px;
          color: var(--text-secondary);
          text-align: center;
        }

        .regulation-note {
          font-weight: 600;
          color: var(--accent-primary);
        }

        .budget-summary-card {
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          padding: 24px;
          border-radius: 16px;
          text-align: center;
          color: white;
        }

        .summary-label {
          font-size: 14px;
          opacity: 0.9;
          margin-bottom: 8px;
        }

        .summary-value {
          font-size: 36px;
          font-weight: 800;
          margin: 8px 0;
        }

        .summary-hint {
          font-size: 12px;
          opacity: 0.8;
        }

        .budget-calculation-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 32px;
          background: var(--bg-secondary);
          border-radius: 16px;
          flex-wrap: wrap;
        }

        .calc-step {
          text-align: center;
        }

        .calc-value {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .calc-value.primary {
          color: var(--color-positive);
        }

        .calc-value.secondary {
          color: var(--accent-secondary);
        }

        .calc-value.result {
          color: var(--accent-primary);
          font-size: 32px;
        }

        .calc-label {
          font-size: 12px;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .calc-note {
          font-size: 11px;
          color: var(--text-tertiary);
          margin-top: 4px;
          font-style: italic;
        }

        .calc-operator {
          font-size: 32px;
          color: var(--text-secondary);
          font-weight: 300;
        }

        /* Debt Analysis Section */
        .debt-analysis-section {
          margin-top: 32px;
        }

        .debt-analysis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .debt-card {
          background: linear-gradient(135deg, rgba(199, 81, 70, 0.05) 0%, rgba(199, 81, 70, 0.02) 100%);
          border: 2px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
        }

        .debt-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .debt-value {
          font-size: 28px;
          font-weight: 800;
          margin: 8px 0;
        }

        .debt-value.permitted {
          color: var(--accent-primary);
        }

        .debt-value.suggested {
          color: var(--color-positive);
        }

        .debt-hint {
          font-size: 11px;
          color: var(--text-tertiary);
          margin-top: 8px;
        }

        /* Calculation Breakdown */
        .calculation-breakdown {
          margin: 32px 0;
          background: var(--bg-secondary);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid var(--border-color);
        }

        .breakdown-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 16px 0;
        }

        .breakdown-formula {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .formula-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: var(--card-bg);
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .formula-row.result-row {
          background: linear-gradient(135deg, rgba(199, 81, 70, 0.1) 0%, rgba(199, 81, 70, 0.05) 100%);
          border: 2px solid var(--accent-primary);
          margin-top: 8px;
          padding: 16px;
        }

        .formula-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .formula-value {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .formula-value.highlight {
          font-size: 20px;
          color: var(--accent-primary);
        }

        /* Important Note */
        .important-note {
          margin-top: 24px;
          padding: 16px 20px;
          background: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0.05) 100%);
          border: 2px solid #ffc107;
          border-radius: 12px;
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-primary);
        }

        .important-note strong {
          color: #ffc107;
        }

        .inputs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 32px;
          margin-bottom: 48px;
        }

        .input-section {
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 20px;
          padding: 32px;
          box-shadow: var(--shadow-md);
        }

        .input-section-title {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 24px 0;
          color: var(--text-primary);
        }

        .input-group {
          margin-bottom: 24px;
        }

        .input-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .slider {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: var(--border-color);
          outline: none;
          -webkit-appearance: none;
          accent-color: var(--accent-primary);
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--accent-secondary);
          border: 3px solid var(--accent-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .equity-summary {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 2px solid var(--border-color);
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-secondary);
        }

        .summary-row.total {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 2px solid var(--border-color);
          font-size: 20px;
          color: var(--text-primary);
        }

        .equity-value {
          font-size: 18px;
          font-weight: 800;
        }

        .equity-value.positive {
          color: var(--color-positive);
        }

        .equity-value.negative {
          color: var(--color-negative);
        }

        .equity-value.final {
          color: var(--color-positive);
          font-size: 28px;
        }

        /* Animations */
        .slide-in {
          animation: slideInUp 0.6s ease;
        }

        .slide-in-delayed {
          animation: slideInUp 0.6s ease 0.2s both;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-budget-section {
            padding: 32px 24px;
          }

          .budget-grid {
            grid-template-columns: 1fr;
          }

          .inputs-grid {
            grid-template-columns: 1fr;
          }

          .calc-value.result {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
