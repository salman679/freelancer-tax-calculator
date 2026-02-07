"use client";

import { useState, type FormEvent } from "react";
import { ArrowLeft, Calculator, DollarSign } from "lucide-react";
import Link from "next/link";
import {
  calculateTax,
  type TaxInput,
  type TaxResult,
} from "@/lib/tax-calculator";
import { PaidResult } from "@/components/PaidResult";

type CalculationStep = "input" | "result";

type IncomeSourceOption = {
  id: TaxInput["incomeSource"];
  title: string;
  description: string;
};

const incomeSourceOptions: IncomeSourceOption[] = [
  {
    id: "foreign",
    title: "Foreign Clients",
    description: "Upwork, Fiverr, international contracts",
  },
  {
    id: "local",
    title: "Local Clients",
    description: "Bangladesh-based companies",
  },
];

export default function CalculatorForm() {
  const [step, setStep] = useState<CalculationStep>("input");
  const [input, setInput] = useState<TaxInput>({
    annualIncome: 0,
    incomeSource: "foreign",
    expenses: 0,
  });
  const [result, setResult] = useState<TaxResult | null>(null);

  const handleCalculate = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const taxResult = calculateTax(input);
    setResult(taxResult);
    setStep("result");

    await saveCalculation(taxResult);
  };

  const saveCalculation = async (taxResult: TaxResult) => {
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
          estimatedTax: taxResult.estimatedTax,
          taxableIncome: taxResult.taxableIncome,
          filingRequired: taxResult.filingRequired,
          riskLevel: taxResult.riskLevel,
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
      <header className="bg-white border-b shadow-sm">
        <div className="py-4 container-custom">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Calculator
                className="w-6 h-6 text-primary-600"
                aria-hidden="true"
              />
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
              <h2 className="mb-3 text-2xl font-bold text-gray-900">
                Estimate your freelancer tax
              </h2>
              <p className="text-gray-600">
                Get a quick estimate of filing needs and approximate payable tax
                based on the details you provide.
              </p>
            </div>

            <div className="p-8 card">
              <form className="space-y-6" onSubmit={handleCalculate}>
                <div>
                  <label
                    htmlFor="annual-income"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Annual Income (৳) *
                  </label>
                  <div className="relative">
                    <DollarSign
                      className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                      aria-hidden="true"
                    />
                    <input
                      id="annual-income"
                      name="annual-income"
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
                      required
                      inputMode="numeric"
                      aria-describedby="annual-income-help"
                    />
                  </div>
                  <p
                    className="mt-1 text-xs text-gray-500"
                    id="annual-income-help"
                  >
                    Include income from all sources (Fiverr, Upwork, direct
                    clients, etc.).
                  </p>
                </div>

                <fieldset>
                  <legend className="block mb-2 text-sm font-medium text-gray-700">
                    Primary Income Source *
                  </legend>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {incomeSourceOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`flex flex-col gap-1 rounded-lg border-2 p-3 text-sm font-medium transition-colors cursor-pointer peer-checked:shadow-sm ${
                          input.incomeSource === option.id
                            ? "border-primary-500 bg-primary-50 text-primary-700"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="income-source"
                          value={option.id}
                          checked={input.incomeSource === option.id}
                          onChange={() =>
                            setInput({ ...input, incomeSource: option.id })
                          }
                          className="sr-only"
                        />
                        <span>{option.title}</span>
                        <span className="text-xs opacity-75">
                          {option.description}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="business-expenses"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Approximate Business Expenses (৳)
                    <span className="font-normal text-gray-400">
                      {" "}- Optional
                    </span>
                  </label>
                  <input
                    id="business-expenses"
                    name="business-expenses"
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
                    inputMode="numeric"
                    aria-describedby="expenses-help"
                  />
                  <p className="mt-1 text-xs text-gray-500" id="expenses-help">
                    Legitimate business expenses may reduce taxable income.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!input.annualIncome}
                  className="w-full py-3 text-lg font-semibold btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculate My Tax
                </button>

                <div className="p-4 rounded-lg bg-blue-50">
                  <p className="text-sm text-blue-800">
                    <strong>Important:</strong> This calculator provides
                    estimated guidance only. Results are not legal or accounting
                    advice. Consult a licensed professional for official
                    matters.
                  </p>
                </div>
              </form>
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
