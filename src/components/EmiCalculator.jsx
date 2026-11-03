import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, TrendingUp, ShieldCheck, ArrowRight, IndianRupee } from 'lucide-react';
import { soundFX } from '../utils/soundFx';

export default function EmiCalculator({ onOpenBooking }) {
  const [propertyPrice, setPropertyPrice] = useState(7500000); // 75 Lakhs default
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // 20%
  const [tenureYears, setTenureYears] = useState(20); // 20 years
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%

  const calculations = useMemo(() => {
    const downPayment = Math.round((propertyPrice * downPaymentPercent) / 100);
    const loanAmount = propertyPrice - downPayment;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;

    let emi = 0;
    if (monthlyRate > 0) {
      emi = Math.round(
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      );
    }

    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - loanAmount;
    const principalPercent = totalPayment > 0 ? Math.round((loanAmount / totalPayment) * 100) : 0;
    const interestPercent = 100 - principalPercent;

    return {
      downPayment,
      loanAmount,
      emi,
      totalInterest,
      totalPayment,
      principalPercent,
      interestPercent
    };
  }, [propertyPrice, downPaymentPercent, tenureYears, interestRate]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="relative py-24 bg-[#08090b] text-white">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[160px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3.5 py-1 text-xs font-semibold text-[#f5d77f]">
            <Calculator className="h-3.5 w-3.5" />
            <span>FINANCIAL TRANSPARENCY & HOME LOAN PLANNER</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            INVESTMENT & <span className="text-gold-gradient font-serif-luxury italic">EMI ESTIMATOR</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Mitkar Group collaborates with India’s leading nationalized and private banks (SBI, HDFC, ICICI, Bank of Baroda) to offer attractive interest rates and zero-hassle documentation.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Sliders */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#101217] p-6 sm:p-8 space-y-7 shadow-2xl">
            
            {/* Slider 1: Property Value */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Property Value (Total Cost)
                </label>
                <span className="text-base sm:text-lg font-mono font-bold text-[#f5d77f]">
                  {formatCurrency(propertyPrice)}
                </span>
              </div>
              <input
                type="range"
                min="4500000"
                max="35000000"
                step="500000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-white/10 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                <span>₹ 45 Lakhs</span>
                <span>₹ 1.5 Cr</span>
                <span>₹ 3.5 Cr</span>
              </div>
            </div>

            {/* Slider 2: Down Payment */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="text-sm sm:text-base font-mono font-bold text-white">
                  {formatCurrency(calculations.downPayment)}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-white/10 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                <span>10% (Min)</span>
                <span>20% (Standard)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Slider 3: Loan Tenure */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Loan Tenure
                </label>
                <span className="text-sm sm:text-base font-mono font-bold text-white">
                  {tenureYears} Years ({tenureYears * 12} Months)
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-white/10 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                <span>5 Yrs</span>
                <span>15 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>

            {/* Slider 4: Interest Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Interest Rate (% p.a.)
                </label>
                <span className="text-sm sm:text-base font-mono font-bold text-[#f5d77f]">
                  {interestRate.toFixed(2)}%
                </span>
              </div>
              <input
                type="range"
                min="7.5"
                max="11.5"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-white/10 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                <span>7.5% (Prime)</span>
                <span>8.5% (Average)</span>
                <span>11.5%</span>
              </div>
            </div>

            {/* Tax Relief Notes */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-gray-300 space-y-2">
              <div className="font-semibold text-[#f5d77f] flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" />
                <span>Tax Savings Under Indian IT Act:</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                • <strong>Section 80C:</strong> Tax deduction up to ₹1.5 Lakhs annually on principal repayment.<br/>
                • <strong>Section 24(b):</strong> Tax exemption up to ₹2.0 Lakhs annually on interest paid.
              </p>
            </div>

          </div>

          {/* Right Column: Visual Breakdown & Monthly EMI */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#d4af37]/30 bg-gradient-to-b from-[#141720] to-[#0c0e13] p-6 sm:p-8 shadow-2xl">
            
            <div className="space-y-6">
              
              {/* Top Monthly EMI Result Badge */}
              <div className="p-5 rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/10 text-center space-y-1 shadow-lg">
                <span className="text-[11px] text-[#f5d77f] uppercase tracking-widest font-semibold">
                  Estimated Monthly EMI
                </span>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-gold-gradient tracking-tight">
                  {formatCurrency(calculations.emi)} <span className="text-xs text-gray-400 font-normal">/ mo</span>
                </div>
              </div>

              {/* Progress Bar Proportion */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1.5 text-white">
                    <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                    Principal: {calculations.principalPercent}%
                  </span>
                  <span className="flex items-center gap-1.5 text-white">
                    <span className="h-2 w-2 rounded-full bg-slate-500" />
                    Interest: {calculations.interestPercent}%
                  </span>
                </div>

                <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden flex">
                  <div
                    style={{ width: `${calculations.principalPercent}%` }}
                    className="h-full bg-gradient-to-r from-[#d4af37] to-[#f5d77f] transition-all duration-300"
                  />
                  <div
                    style={{ width: `${calculations.interestPercent}%` }}
                    className="h-full bg-slate-600 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Numerical Breakdown */}
              <div className="rounded-2xl border border-white/5 bg-black/30 p-4 space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Principal Loan Amount</span>
                  <span className="font-mono font-bold text-white">{formatCurrency(calculations.loanAmount)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Total Interest Payable</span>
                  <span className="font-mono font-bold text-slate-300">{formatCurrency(calculations.totalInterest)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Down Payment Payable</span>
                  <span className="font-mono font-bold text-[#f5d77f]">{formatCurrency(calculations.downPayment)}</span>
                </div>
                <div className="flex justify-between py-1 text-sm font-bold">
                  <span className="text-[#f5d77f]">Total Cost (Loan + Interest)</span>
                  <span className="font-mono text-white">{formatCurrency(calculations.totalPayment + calculations.downPayment)}</span>
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenBooking(`Home Loan Inquiry - Property ₹${(propertyPrice / 100000).toFixed(0)}L`);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] py-3.5 text-xs font-bold text-black shadow-lg hover:scale-105 transition-transform"
              >
                <span>Check Pre-Approved Bank Loan Eligibility</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <div className="text-center text-[10px] text-gray-500">
                Special tie-ups with SBI, HDFC, ICICI for preferential processing fees.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
