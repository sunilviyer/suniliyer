'use client';

import { useState, useMemo } from 'react';

export default function CompleteAnalysisCalculator() {
  // UI State
  const [showCostsBreakdown, setShowCostsBreakdown] = useState(false);
  const [showBuyingCostsBreakdown, setShowBuyingCostsBreakdown] = useState(false);

  // Current Home / Selling
  const [currentMortgage, setCurrentMortgage] = useState(500000);
  const [salePrice, setSalePrice] = useState(1025000);

  // Selling Closing Costs
  const [staging, setStaging] = useState(3500);
  const [realtorCommission, setRealtorCommission] = useState(4.5);
  const [closingRepairs, setClosingRepairs] = useState(0);
  const [preInspection, setPreInspection] = useState(0);
  const [storageFacility, setStorageFacility] = useState(0);
  const [lawyerFees, setLawyerFees] = useState(1000);

  // New Home / Buying
  const [purchasePrice, setPurchasePrice] = useState(1550000);

  // Buying Closing Costs
  const [movingCost, setMovingCost] = useState(10000);
  const [buyingLawyerFees, setBuyingLawyerFees] = useState(1500);
  const [inspection, setInspection] = useState(500);
  const [renovation, setRenovation] = useState(0);
  const [titleInsurance, setTitleInsurance] = useState(400);
  const [utilitiesDeposit, setUtilitiesDeposit] = useState(350);
  const [propertySurvey, setPropertySurvey] = useState(1000);

  // Mortgage Options
  const [interestRate, setInterestRate] = useState(3.76);
  const [amortization, setAmortization] = useState(25);
  const [extraDownPayment] = useState(0);

  // Annual Carrying Costs
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.25);
  const [homeInsurance] = useState(2400);
  const [maintenanceRate, setMaintenanceRate] = useState(1.0);
  const [utilities] = useState(400);

  const calculations = useMemo(() => {
    // SELLING
    const commission = salePrice * (realtorCommission / 100);
    const totalSellingCosts = commission + staging + closingRepairs + preInspection + storageFacility + lawyerFees;
    const netFromSale = salePrice - currentMortgage - totalSellingCosts;

    // BUYING
    const calculateLTT = (price: number) => {
      let ltt = 0;
      if (price > 55000) ltt += Math.min(price, 55000) * 0.005;
      if (price > 55000) ltt += (Math.min(price, 250000) - 55000) * 0.01;
      if (price > 250000) ltt += (Math.min(price, 400000) - 250000) * 0.015;
      if (price > 400000) ltt += (Math.min(price, 2000000) - 400000) * 0.02;
      if (price > 2000000) ltt += (price - 2000000) * 0.025;
      return ltt;
    };

    const landTransferTax = calculateLTT(purchasePrice);
    const totalBuyingCosts = landTransferTax + movingCost + buyingLawyerFees + inspection +
                             renovation + titleInsurance + utilitiesDeposit + propertySurvey;

    // DOWN PAYMENT & MORTGAGE
    const availableForDownPayment = netFromSale - totalBuyingCosts + extraDownPayment;
    const downPaymentPercent = (availableForDownPayment / purchasePrice) * 100;

    // CMHC
    let cmhcRate = 0;
    if (downPaymentPercent < 20 && downPaymentPercent >= 5) {
      if (downPaymentPercent >= 15) cmhcRate = 0.028;
      else if (downPaymentPercent >= 10) cmhcRate = 0.031;
      else cmhcRate = 0.04;
    }

    const mortgageNeeded = purchasePrice - availableForDownPayment;
    const cmhcInsurance = mortgageNeeded * cmhcRate;
    const totalMortgage = mortgageNeeded + cmhcInsurance;

    // PAYMENTS
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = amortization * 12;

    const monthlyPayment = totalMortgage *
      (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    const totalInterest = (monthlyPayment * totalPayments) - totalMortgage;

    // CARRYING COSTS
    const annualPropertyTax = purchasePrice * (propertyTaxRate / 100);
    const monthlyPropertyTax = annualPropertyTax / 12;
    const annualMaintenance = purchasePrice * (maintenanceRate / 100);
    const monthlyMaintenance = annualMaintenance / 12;
    const monthlyInsurance = homeInsurance / 12;

    const totalMonthlyCarryingCosts = monthlyPropertyTax + monthlyMaintenance + monthlyInsurance + utilities;
    const totalMonthlyHousingCost = monthlyPayment + totalMonthlyCarryingCosts;

    // TRUE COST
    const totalCarryingCostsOverLife = (annualPropertyTax + annualMaintenance + homeInsurance + utilities * 12) * amortization;
    const trueCostOfHome = purchasePrice + totalBuyingCosts + totalInterest + cmhcInsurance + totalCarryingCostsOverLife;

    return {
      salePrice,
      currentMortgage,
      commission,
      totalSellingCosts,
      netFromSale,
      purchasePrice,
      landTransferTax,
      totalBuyingCosts,
      availableForDownPayment,
      downPaymentPercent,
      totalMortgage,
      cmhcInsurance,
      monthlyPayment,
      totalInterest,
      annualPropertyTax,
      monthlyPropertyTax,
      annualMaintenance,
      monthlyMaintenance,
      monthlyInsurance,
      utilities,
      totalMonthlyCarryingCosts,
      totalMonthlyHousingCost,
      trueCostOfHome,
      totalCarryingCostsOverLife
    };
  }, [salePrice, currentMortgage, realtorCommission, staging, closingRepairs, preInspection,
      storageFacility, lawyerFees, purchasePrice, movingCost, buyingLawyerFees, inspection,
      renovation, titleInsurance, utilitiesDeposit, propertySurvey, interestRate, amortization,
      extraDownPayment, propertyTaxRate, homeInsurance, maintenanceRate, utilities]);

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
    <div className="complete-calculator">
      {/* Summary Cards */}
      <div className="summary-cards slide-in">
        <div className="summary-card mortgage">
          <div className="card-label">Monthly Mortgage</div>
          <div className="card-value">{formatCurrencyDetailed(calculations.monthlyPayment)}</div>
        </div>
        <div className="summary-card carrying">
          <div className="card-label">Monthly Carrying Costs</div>
          <div className="card-value">{formatCurrencyDetailed(calculations.totalMonthlyCarryingCosts)}</div>
        </div>
        <div className="summary-card total">
          <div className="card-label">Total Monthly Cost</div>
          <div className="card-value">{formatCurrencyDetailed(calculations.totalMonthlyHousingCost)}</div>
        </div>
        <div className="summary-card true-cost">
          <div className="card-label">True Cost ({amortization} yrs)</div>
          <div className="card-value">{formatCurrency(calculations.trueCostOfHome)}</div>
        </div>
      </div>

      {/* Selling Section - Full Width */}
      <div className="full-section slide-in-delayed">
        <h3 className="section-title">🏷️ Selling Your Current Home</h3>

        <div className="inputs-grid">
          <div className="input-group">
            <label>Sale Price</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="1"
                max="3000000"
                step="5000"
                value={salePrice}
                onChange={(e) => setSalePrice(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="1"
                max="3000000"
                step="5000"
                value={salePrice}
                onChange={(e) => setSalePrice(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Current Mortgage</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="1"
                max="3000000"
                step="5000"
                value={currentMortgage}
                onChange={(e) => setCurrentMortgage(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="1"
                max="3000000"
                step="5000"
                value={currentMortgage}
                onChange={(e) => setCurrentMortgage(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Staging</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="15000"
                step="100"
                value={staging}
                onChange={(e) => setStaging(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="15000"
                step="100"
                value={staging}
                onChange={(e) => setStaging(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Realtor Commission (%)</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={realtorCommission}
                onChange={(e) => setRealtorCommission(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={realtorCommission}
                onChange={(e) => setRealtorCommission(Number(e.target.value) || 0)}
                className="number-input percent"
              />
            </div>
            <div className="input-hint">{formatCurrency(calculations.commission)}</div>
          </div>

          <div className="input-group">
            <label>Closing Repairs</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="50000"
                step="500"
                value={closingRepairs}
                onChange={(e) => setClosingRepairs(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="50000"
                step="500"
                value={closingRepairs}
                onChange={(e) => setClosingRepairs(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Pre-Inspection</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={preInspection}
                onChange={(e) => setPreInspection(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="1000"
                step="50"
                value={preInspection}
                onChange={(e) => setPreInspection(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Storage Facility</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="2000"
                step="50"
                value={storageFacility}
                onChange={(e) => setStorageFacility(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="2000"
                step="50"
                value={storageFacility}
                onChange={(e) => setStorageFacility(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Lawyer Fees</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="2500"
                step="50"
                value={lawyerFees}
                onChange={(e) => setLawyerFees(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="2500"
                step="50"
                value={lawyerFees}
                onChange={(e) => setLawyerFees(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>
        </div>

        <div className="summary-box">
          <div className="summary-row">
            <span>Sale Price</span>
            <span className="value positive">{formatCurrency(calculations.salePrice)}</span>
          </div>
          <div className="summary-row">
            <span>- Current Mortgage</span>
            <span className="value negative">{formatCurrency(calculations.currentMortgage)}</span>
          </div>
          <div
            className="summary-row clickable"
            onClick={() => setShowCostsBreakdown(!showCostsBreakdown)}
          >
            <span className="with-icon">
              <span className="expand-icon">{showCostsBreakdown ? '−' : '+'}</span>
              - Total Selling Costs
            </span>
            <span className="value negative">{formatCurrency(calculations.totalSellingCosts)}</span>
          </div>

          {showCostsBreakdown && (
            <div className="costs-breakdown">
              <div className="breakdown-row">
                <span>Realtor Commission ({realtorCommission}%)</span>
                <span className="breakdown-value">{formatCurrency(calculations.commission)}</span>
              </div>
              <div className="breakdown-row">
                <span>Staging</span>
                <span className="breakdown-value">{formatCurrency(staging)}</span>
              </div>
              <div className="breakdown-row">
                <span>Closing Repairs</span>
                <span className="breakdown-value">{formatCurrency(closingRepairs)}</span>
              </div>
              <div className="breakdown-row">
                <span>Pre-Inspection</span>
                <span className="breakdown-value">{formatCurrency(preInspection)}</span>
              </div>
              <div className="breakdown-row">
                <span>Storage Facility</span>
                <span className="breakdown-value">{formatCurrency(storageFacility)}</span>
              </div>
              <div className="breakdown-row">
                <span>Lawyer Fees</span>
                <span className="breakdown-value">{formatCurrency(lawyerFees)}</span>
              </div>
            </div>
          )}

          <div className="summary-row total">
            <span>= Net Proceeds</span>
            <span className={`value ${calculations.netFromSale >= 0 ? 'highlight' : 'highlight-negative'}`}>
              {formatCurrency(calculations.netFromSale)}
            </span>
          </div>
        </div>
      </div>

      {/* Buying Section - Full Width */}
      <div className="full-section slide-in-delayed">
        <h3 className="section-title">🏡 Buying New Home</h3>

        <div className="inputs-grid">
          <div className="input-group">
            <label>Purchase Price</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="1"
                max="3000000"
                step="10000"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="1"
                max="3000000"
                step="10000"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Moving Cost</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="20000"
                step="500"
                value={movingCost}
                onChange={(e) => setMovingCost(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="20000"
                step="500"
                value={movingCost}
                onChange={(e) => setMovingCost(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Lawyer Fees</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="2000"
                step="50"
                value={buyingLawyerFees}
                onChange={(e) => setBuyingLawyerFees(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="2000"
                step="50"
                value={buyingLawyerFees}
                onChange={(e) => setBuyingLawyerFees(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Inspection</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={inspection}
                onChange={(e) => setInspection(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="1000"
                step="50"
                value={inspection}
                onChange={(e) => setInspection(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Renovation</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="50000"
                step="500"
                value={renovation}
                onChange={(e) => setRenovation(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="50000"
                step="500"
                value={renovation}
                onChange={(e) => setRenovation(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Title Insurance</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={titleInsurance}
                onChange={(e) => setTitleInsurance(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="1000"
                step="50"
                value={titleInsurance}
                onChange={(e) => setTitleInsurance(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Utilities Deposit</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="700"
                step="25"
                value={utilitiesDeposit}
                onChange={(e) => setUtilitiesDeposit(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="700"
                step="25"
                value={utilitiesDeposit}
                onChange={(e) => setUtilitiesDeposit(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Property Survey</label>
            <div className="slider-input-row">
              <input
                type="range"
                min="0"
                max="2000"
                step="50"
                value={propertySurvey}
                onChange={(e) => setPropertySurvey(Number(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="0"
                max="2000"
                step="50"
                value={propertySurvey}
                onChange={(e) => setPropertySurvey(Number(e.target.value) || 0)}
                className="number-input"
              />
            </div>
          </div>
        </div>

        <div className="summary-box">
          <div className="summary-row">
            <span>Purchase Price</span>
            <span className="value positive">{formatCurrency(calculations.purchasePrice)}</span>
          </div>
          <div
            className="summary-row clickable"
            onClick={() => setShowBuyingCostsBreakdown(!showBuyingCostsBreakdown)}
          >
            <span className="with-icon">
              <span className="expand-icon">{showBuyingCostsBreakdown ? '−' : '+'}</span>
              + Total Buying Costs
            </span>
            <span className="value negative">{formatCurrency(calculations.totalBuyingCosts)}</span>
          </div>

          {showBuyingCostsBreakdown && (
            <div className="costs-breakdown">
              <div className="breakdown-row">
                <span>Land Transfer Tax</span>
                <span className="breakdown-value">{formatCurrency(calculations.landTransferTax)}</span>
              </div>
              <div className="breakdown-row">
                <span>Moving Cost</span>
                <span className="breakdown-value">{formatCurrency(movingCost)}</span>
              </div>
              <div className="breakdown-row">
                <span>Lawyer Fees</span>
                <span className="breakdown-value">{formatCurrency(buyingLawyerFees)}</span>
              </div>
              <div className="breakdown-row">
                <span>Inspection</span>
                <span className="breakdown-value">{formatCurrency(inspection)}</span>
              </div>
              <div className="breakdown-row">
                <span>Renovation</span>
                <span className="breakdown-value">{formatCurrency(renovation)}</span>
              </div>
              <div className="breakdown-row">
                <span>Title Insurance</span>
                <span className="breakdown-value">{formatCurrency(titleInsurance)}</span>
              </div>
              <div className="breakdown-row">
                <span>Utilities Deposit</span>
                <span className="breakdown-value">{formatCurrency(utilitiesDeposit)}</span>
              </div>
              <div className="breakdown-row">
                <span>Property Survey</span>
                <span className="breakdown-value">{formatCurrency(propertySurvey)}</span>
              </div>
            </div>
          )}

          <div className="summary-row">
            <span>Down Payment Available</span>
            <span className="value">{formatCurrency(calculations.availableForDownPayment)}</span>
          </div>
          <div className="summary-row">
            <span>Down Payment %</span>
            <span className="value">{calculations.downPaymentPercent.toFixed(1)}%</span>
          </div>
          {calculations.cmhcInsurance > 0 && (
            <div className="summary-row warning">
              <span>CMHC Insurance</span>
              <span className="value">{formatCurrency(calculations.cmhcInsurance)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Other Options Grid */}
      <div className="calculator-grid slide-in-delayed">

        {/* Mortgage Options */}
        <div className="calc-section">
          <h3 className="section-title">📊 Mortgage Options</h3>

          <div className="input-group">
            <label>Interest Rate: {interestRate}%</label>
            <input
              type="range"
              min="2"
              max="7"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="slider"
            />
          </div>

          <div className="amortization-buttons">
            <button
              className={`amt-button ${amortization === 25 ? 'active' : ''}`}
              onClick={() => setAmortization(25)}
            >
              25 Years
            </button>
            <button
              className={`amt-button ${amortization === 30 ? 'active' : ''}`}
              onClick={() => setAmortization(30)}
            >
              30 Years
            </button>
          </div>
        </div>

        {/* Carrying Costs */}
        <div className="calc-section">
          <h3 className="section-title">🏛️ Annual Carrying Costs</h3>

          <div className="input-group">
            <label>Property Tax Rate: {propertyTaxRate}%</label>
            <input
              type="range"
              min="0.8"
              max="2.0"
              step="0.05"
              value={propertyTaxRate}
              onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
              className="slider"
            />
            <div className="input-hint">{formatCurrency(calculations.annualPropertyTax)}/year</div>
          </div>

          <div className="input-group">
            <label>Maintenance: {maintenanceRate}% of home value</label>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.1"
              value={maintenanceRate}
              onChange={(e) => setMaintenanceRate(Number(e.target.value))}
              className="slider"
            />
            <div className="input-hint">{formatCurrency(calculations.annualMaintenance)}/year</div>
          </div>
        </div>
      </div>

      {/* True Cost Breakdown */}
      <div className="true-cost-section slide-in-final">
        <h2 className="true-cost-title">🎯 TRUE Cost of This Home Over {amortization} Years</h2>

        <div className="cost-breakdown">
          <div className="cost-item">
            <span className="cost-label">Purchase Price</span>
            <span className="cost-value">{formatCurrency(calculations.purchasePrice)}</span>
          </div>
          <div className="cost-item">
            <span className="cost-label">+ Mortgage Interest ({amortization} yrs)</span>
            <span className="cost-value accent">{formatCurrency(calculations.totalInterest)}</span>
          </div>
          {calculations.cmhcInsurance > 0 && (
            <div className="cost-item">
              <span className="cost-label">+ CMHC Insurance</span>
              <span className="cost-value warning">{formatCurrency(calculations.cmhcInsurance)}</span>
            </div>
          )}
          <div className="cost-item">
            <span className="cost-label">+ Total Carrying Costs ({amortization} yrs)</span>
            <span className="cost-value">{formatCurrency(calculations.totalCarryingCostsOverLife)}</span>
          </div>
          <div className="cost-item total-row">
            <span className="cost-label">= TRUE TOTAL COST</span>
            <span className="cost-value highlight">{formatCurrency(calculations.trueCostOfHome)}</span>
          </div>
        </div>

        <div className="cost-insight">
          That&apos;s {formatCurrency(calculations.trueCostOfHome - calculations.purchasePrice)} more than the sticker price!
        </div>
      </div>

      <style jsx>{`
        .complete-calculator {
          width: 100%;
        }

        /* Summary Cards */
        .summary-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }

        .summary-card {
          padding: 24px;
          border-radius: 16px;
          border: 2px solid var(--border-color);
          background: var(--card-bg);
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }

        .summary-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .summary-card.mortgage {
          border-color: var(--color-positive);
        }

        .summary-card.carrying {
          border-color: var(--color-warning);
        }

        .summary-card.total {
          border-color: var(--accent-secondary);
        }

        .summary-card.true-cost {
          border-color: var(--accent-primary);
        }

        .card-label {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 12px;
          font-weight: 600;
        }

        .card-value {
          font-size: 28px;
          font-weight: 800;
          color: var(--text-primary);
        }

        /* Full Width Sections */
        .full-section {
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 24px;
          padding: 48px;
          margin-bottom: 32px;
          box-shadow: var(--shadow-lg);
        }

        .inputs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        /* Calculator Grid */
        .calculator-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
          margin-bottom: 48px;
        }

        .calc-section {
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 20px;
          padding: 32px;
          box-shadow: var(--shadow-md);
        }

        .section-title {
          font-size: 22px;
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

        .slider-input-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .slider {
          flex: 1;
          height: 8px;
          border-radius: 4px;
          background: var(--border-color);
          outline: none;
          -webkit-appearance: none;
          accent-color: var(--accent-primary);
          cursor: pointer;
        }

        .number-input {
          width: 120px;
          padding: 10px 12px;
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          text-align: right;
          transition: all 0.2s ease;
        }

        .number-input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(199, 81, 70, 0.1);
        }

        .number-input:hover {
          border-color: var(--accent-secondary);
        }

        .number-input.percent {
          width: 80px;
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

        .input-hint {
          margin-top: 8px;
          font-size: 12px;
          color: var(--color-warning);
          font-weight: 600;
        }

        .summary-box {
          margin-top: 24px;
          padding: 20px;
          background: var(--bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-color);
        }

        .summary-row:last-child {
          border-bottom: none;
        }

        .summary-row span {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .summary-row .value {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .summary-row .value.positive {
          color: var(--color-positive);
        }

        .summary-row .value.negative {
          color: var(--color-negative);
        }

        .summary-row .value.highlight {
          color: var(--color-positive);
          font-size: 24px;
        }

        .summary-row .value.highlight-negative {
          color: var(--color-negative);
          font-size: 24px;
        }

        .summary-row.clickable {
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .summary-row.clickable:hover {
          background-color: rgba(0, 0, 0, 0.02);
          border-radius: 8px;
        }

        [data-theme='dark'] .summary-row.clickable:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .with-icon {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .expand-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: var(--accent-primary);
          color: white;
          border-radius: 4px;
          font-size: 18px;
          font-weight: 700;
          line-height: 1;
        }

        .costs-breakdown {
          margin: 12px 0 12px 32px;
          padding: 16px;
          background: var(--card-bg);
          border-radius: 8px;
          border-left: 3px solid var(--accent-secondary);
        }

        .breakdown-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          font-size: 13px;
          color: var(--text-secondary);
        }

        .breakdown-row:not(:last-child) {
          border-bottom: 1px dotted var(--border-color);
        }

        .breakdown-value {
          font-weight: 600;
          color: var(--text-primary);
        }

        .summary-row.total {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 2px solid var(--accent-primary);
          font-size: 18px;
          font-weight: 800;
        }

        .summary-row.warning .value {
          color: var(--color-warning);
        }

        .amortization-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .amt-button {
          padding: 16px;
          border: 2px solid var(--border-color);
          background: transparent;
          color: var(--text-primary);
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .amt-button:hover {
          border-color: var(--accent-primary);
          background: var(--bg-secondary);
        }

        .amt-button.active {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
        }

        /* True Cost Section */
        .true-cost-section {
          background: linear-gradient(135deg, var(--card-bg) 0%, var(--bg-secondary) 100%);
          border: 3px solid var(--accent-primary);
          border-radius: 24px;
          padding: 48px;
          box-shadow: var(--shadow-lg);
        }

        .true-cost-title {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 32px 0;
          text-align: center;
          color: var(--accent-primary);
        }

        .cost-breakdown {
          max-width: 800px;
          margin: 0 auto 24px;
        }

        .cost-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-color);
        }

        .cost-label {
          font-size: 16px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .cost-value {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .cost-value.accent {
          color: var(--accent-primary);
        }

        .cost-value.warning {
          color: var(--color-warning);
        }

        .cost-item.total-row {
          border-bottom: none;
          padding-top: 32px;
          margin-top: 16px;
          border-top: 3px solid var(--accent-primary);
        }

        .cost-item.total-row .cost-label {
          font-size: 20px;
          color: var(--text-primary);
          font-weight: 800;
        }

        .cost-item.total-row .cost-value {
          font-size: 36px;
          color: var(--accent-primary);
        }

        .cost-insight {
          text-align: center;
          font-size: 18px;
          color: var(--accent-primary);
          font-weight: 700;
          margin-top: 24px;
        }

        /* Animations */
        .slide-in {
          animation: slideInUp 0.6s ease;
        }

        .slide-in-delayed {
          animation: slideInUp 0.6s ease 0.2s both;
        }

        .slide-in-final {
          animation: slideInUp 0.6s ease 0.4s both;
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
          .full-section {
            padding: 32px 24px;
          }

          .inputs-grid {
            grid-template-columns: 1fr;
          }

          .calculator-grid {
            grid-template-columns: 1fr;
          }

          .slider-input-row {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }

          .number-input {
            width: 100%;
          }

          .number-input.percent {
            width: 100%;
          }

          .true-cost-section {
            padding: 32px 24px;
          }

          .cost-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .card-value {
            font-size: 24px;
          }

          .summary-row .value.highlight,
          .summary-row .value.highlight-negative {
            font-size: 20px;
          }

          .costs-breakdown {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
