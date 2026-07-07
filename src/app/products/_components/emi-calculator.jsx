"use client";
import { useEffect, useState } from "react";
import PaymentBreakdownChart from "./payment-breakdown-chart";
import FinancerLogos from "./financers";

export default function EMICalculator({
  product,
  selectedState,
  selectedCity,
}) {
  const [loanTenure, setLoanTenure] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0); // State for interest rate
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    if (product) {
      setLoanTenure(product.emi_calculator.default_values.loan_tenure);
      setDownPayment(product.emi_calculator.default_values.down_payment);
      setInterestRate(0); // Reset interest rate when product changes
      setCurrentPrice(product.pricing?.[0]?.base_price || 0);
    }
  }, [product]);

  const formatPrice = (value) => {
    return value ? value.toLocaleString("en-IN") : "0";
  };

  const loanAmount = currentPrice - downPayment;
  const totalInterest = interestRate
    ? (loanAmount * interestRate * loanTenure) / (12 * 100)
    : 0;
  const emiAmount = loanTenure ? (loanAmount + totalInterest) / loanTenure : 0;

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-md lg:p-8 p-6    border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            EMI Calculator
          </h2>

          {/* Location Display */}

          <div className="grid  lg:grid-cols-2 gap-8 justify-center items-center overflow-visible">
            {/* Left Inputs */}
            <div className="space-y-6 ">
              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium text-green-600 mb-3">
                  Down Payment Amount
                </label>
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  ₹{formatPrice(downPayment)}
                </div>
                <input
                  type="range"
                  min={product.emi_calculator.ranges.down_payment.min}
                  max={currentPrice * 0.5}
                  step={product.emi_calculator.ranges.down_payment.step}
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 accent-[var(--color-secondary)] bg-green-100 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>
                    ₹
                    {formatPrice(
                      product.emi_calculator.ranges.down_payment.min
                    )}
                  </span>
                  <span>₹{formatPrice(currentPrice * 0.5)}</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <label className="block text-sm font-medium text-green-600 mb-3">
                  Loan Tenure (Months)
                </label>
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  {loanTenure} months
                </div>
                <input
                  type="range"
                  min={product.emi_calculator.ranges.loan_tenure.min}
                  max={product.emi_calculator.ranges.loan_tenure.max}
                  step={product.emi_calculator.ranges.loan_tenure.step}
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full h-2 accent-[var(--color-secondary)] bg-green-100 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>
                    {product.emi_calculator.ranges.loan_tenure.min} months
                  </span>
                  <span>
                    {product.emi_calculator.ranges.loan_tenure.max} months
                  </span>
                </div>
              </div>

              {/* Financer Logos */}
              <div>
                <label className="block text-sm font-medium text-green-600 mb-3">
                  Select Financing Partner
                </label>
                <FinancerLogos
                  selectedState={selectedState}
                  selectedCity={selectedCity}
                  onInterestRateChange={setInterestRate} // Pass setInterestRate directly
                />

                {interestRate === 0 && (
                  <p className="text-sm text-red-500 mt-2">
                    Please select a financer to apply interest rate.
                  </p>
                )}
              </div>
            </div>

            {/* Right Result */}
            <div className="relative">
              {/* Loan Summary */}
              <PaymentBreakdownChart
                loanAmount={loanAmount}
                totalInterest={totalInterest}
                downPayment={downPayment}
                formatPrice={formatPrice}
              />
              <div className="bg-gray-50 rounded-t-2xl p-6">
                <h3 className="font-semibold text-gray-700 text-xl mb-4">
                  Loan Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle Price</span>
                    <span className="font-semibold">
                      ₹{formatPrice(currentPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Down Payment</span>
                    <span className="font-semibold">
                      ₹{formatPrice(downPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount</span>
                    <span className="font-semibold">
                      ₹{formatPrice(loanAmount)}
                    </span>
                  </div>
                  {interestRate > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-semibold">
                        {interestRate}% p.a.
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-b-2xl p-6 text-white">
                <h3 className="font-semibold mb-4">Monthly Payment</h3>
                <div className="mt-6 pb-4 border-b border-green-400">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm opacity-90">Total Interest</span>
                    <span className="font-bold">
                      ₹{formatPrice(totalInterest)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm opacity-90">
                      Total Amount Payable
                    </span>
                    <span className="font-bold">
                      ₹{formatPrice(emiAmount * loanTenure + downPayment)}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-4xl font-bold mb-2">
                    ₹{formatPrice(emiAmount)}
                  </div>
                  <div className="text-sm opacity-90">
                    per month for {loanTenure} months
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
