"use client";

import { useState, Suspense } from "react";
import { Calculator, ArrowLeft, DollarSign } from "lucide-react";
import Link from "next/link";
import {
  calculateTax,
  formatCurrency,
  getTaxSavingTips,
  type TaxInput,
  type TaxResult,
} from "@/lib/tax-calculator";
import { PaidResult } from "@/components/PaidResult";

type CalculationStep = "input" | "result";

function CalculatorContent() {
  const [step, setStep] = useState<CalculationStep>("input");
  const [input, setInput] = useState<TaxInput>({
    annualIncome: 0,
    incomeSource: "foreign",
    expenses: 0,
  });
  const [result, setResult] = useState<TaxResult | null>(null);

  const handleCalculate = async () => {
    const taxResult = calculateTax(input);
    setResult(taxResult);
    setStep("result");

    // Save calculation to database (anonymous)
    await saveCalculation();
  };

  const saveCalculation = async () => {
    if (!result) return;

    try {
      await fetch("/api/calculations/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          annualIncome: input.annualIncome,
          incomeSource: input.incomeSource,
          expenses: input.expenses,
          estimatedTax: result.estimatedTax,
          taxableIncome: result.taxableIncome,
          filingRequired: result.filingRequired,
          riskLevel: result.riskLevel,
        }),
      });
    } catch (error) {
      console.error("Failed to save calculation:", error);
    }
  };

  const resetCalculation = () => {
    setStep("input");
    setResult(null);
    setInput({
      annualIncome: 0,
      incomeSource: "foreign",
      expenses: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="py-4 container-custom">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Calculator className="w-6 h-6 text-primary-600" />
              <span className="font-semibold text-gray-900">
                Tax Calculator
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="py-8 container-custom">
        {step === "input" && (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="mb-3 text-3xl font-bold text-gray-900">
                Calculate Your Freelancer Tax
              </h1>
              <p className="text-gray-600">
                Get instant answers about your tax obligations in Bangladesh
              </p>
            </div>

            <div className="p-8 card">
              <div className="space-y-6">
                {/* Annual Income */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Annual Income (৳) *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type="number"
                      value={input.annualIncome || ""}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          annualIncome: parseFloat(e.target.value) || 0,
                        })
                      }
                      placeholder="Enter your total yearly income"
                      className="pl-10 input-field"
                      min="0"
                      step="1000"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Include income from all sources (Fiverr, Upwork, direct
                    clients, etc.)
                  </p>
                </div>

                {/* Income Source */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Primary Income Source *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setInput({ ...input, incomeSource: "foreign" })
                      }
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                        input.incomeSource === "foreign"
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Foreign Clients
                      <p className="mt-1 text-xs opacity-75">
                        Upwork, Fiverr, International
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setInput({ ...input, incomeSource: "local" })
                      }
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                        input.incomeSource === "local"
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Local Clients
                      <p className="mt-1 text-xs opacity-75">
                        Bangladesh-based companies
                      </p>
                    </button>
                  </div>
                </div>

                {/* Expenses */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Approximate Business Expenses (৳)
                    <span className="font-normal text-gray-400">
                      {" "}
                      - Optional
                    </span>
                  </label>
                  <input
                    type="number"
                    value={input.expenses || ""}
                    onChange={(e) =>
                      setInput({
                        ...input,
                        expenses: parseFloat(e.target.value) || 0,
                      })
                    }
                    placeholder="Equipment, software, internet, etc."
                    className="input-field"
                    min="0"
                    step="1000"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Legitimate business expenses that may reduce your taxable
                    income
                  </p>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={handleCalculate}
                  disabled={!input.annualIncome}
                  className="w-full py-3 text-lg font-semibold btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculate My Tax
                </button>

                {/* Disclaimer */}
                <div className="p-4 rounded-lg bg-blue-50">
                  <p className="text-sm text-blue-800">
                    <strong>Important:</strong> This calculator provides
                    estimated guidance only. Results are not legal or accounting
                    advice. Consult a licensed professional for official
                    matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "result" && result && (
          <PaidResult
            result={result}
            input={input}
            tier={"detailed"}
            onNewCalculation={resetCalculation}
          />
        )}
      </div>
    </div>
  );
}

export default function CalculatorPage() {
  return <CalculatorContent />;
}
