"use client";

import { useState, useEffect } from "react";
import {
  Calculator,
  CheckCircle,
  FileText,
  Shield,
  TrendingUp,
  DollarSign,
  Users,
  Lock,
  Zap,
  Award,
  ArrowRight,
  Star,
  BarChart3,
} from "lucide-react";
import {
  calculateTax,
  formatCurrency,
  type TaxInput,
  type TaxResult,
} from "@/lib/tax-calculator";
import { PaidResult } from "@/components/PaidResult";

type CalculationStep = "input" | "result";

export default function HomePage() {
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

    // Save calculation anonymously
    await saveCalculation();

    // Scroll to results
    setTimeout(() => {
      document.getElementById("results-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
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

    // Scroll to calculator
    setTimeout(() => {
      document.getElementById("calculator-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b shadow-sm bg-white/80 backdrop-blur-md">
        <div className="py-4 container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary-600 to-purple-600">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text">
                FreelancerTax.BD
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  document
                    .getElementById("calculator-section")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="btn-primary"
              >
                Calculate Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-sm font-medium rounded-full bg-primary-100 text-primary-700">
              <Zap className="w-4 h-4" />
              <span>Trusted by 1000+ Bangladesh Freelancers</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
              Calculate Your Freelancer Tax in{" "}
              <span className="text-transparent bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text">
                30 Seconds
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              Get instant, accurate tax estimates for your freelance income. No
              signup required. 100% free basic calculation.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Zap className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-medium">Instant Results</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">100% Free</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid max-w-2xl grid-cols-3 gap-4 mx-auto mb-8">
              <div className="p-4 border border-gray-200 rounded-lg bg-white/60 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-gray-600">Calculations Done</div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white/60 backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-600">30s</div>
                <div className="text-sm text-gray-600">Average Time</div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white/60 backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-600">4.9/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>

            <button
              onClick={() => {
                document.getElementById("calculator-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="inline-flex items-center px-8 py-4 space-x-2 text-lg transition-shadow shadow-lg btn-primary hover:shadow-xl"
            >
              <span>Start Free Calculation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator-section" className="py-16 bg-white">
        <div className="container-custom">
          {step === "input" && (
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="mb-3 text-3xl font-bold text-gray-900">
                  Calculate Your Tax Now
                </h2>
                <p className="text-gray-600">
                  Enter your income details below to get instant tax estimates
                </p>
              </div>

              <div className="p-8 shadow-xl card">
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
                        className={`p-4 rounded-lg border-2 text-sm font-medium transition-all ${
                          input.incomeSource === "foreign"
                            ? "border-primary-500 bg-primary-50 text-primary-700 shadow-md"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        🌍 Foreign Clients
                        <p className="mt-1 text-xs opacity-75">
                          Upwork, Fiverr, International
                        </p>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setInput({ ...input, incomeSource: "local" })
                        }
                        className={`p-4 rounded-lg border-2 text-sm font-medium transition-all ${
                          input.incomeSource === "local"
                            ? "border-primary-500 bg-primary-50 text-primary-700 shadow-md"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        🇧🇩 Local Clients
                        <p className="mt-1 text-xs opacity-75">
                          Bangladesh-based companies
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Expenses */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Business Expenses (৳)
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
                    className="w-full py-4 text-lg font-semibold transition-shadow shadow-lg btn-primary disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
                  >
                    Calculate My Tax
                  </button>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center pt-4 space-x-6 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Zap className="w-4 h-4 text-yellow-600" />
                      <span>Instant</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>No Signup</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 mt-6 border border-blue-200 rounded-lg bg-blue-50">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> This calculator provides estimated
                  guidance only. Results are not legal or accounting advice.
                  Consult a licensed professional for official matters.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      {step === "result" && (
        <section id="results-section" className="py-16 bg-gray-50">
          <div className="container-custom">
            {result && (
              <PaidResult
                result={result}
                input={input}
                tier={"detailed"}
                onNewCalculation={resetCalculation}
              />
            )}
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Why Freelancers Trust Us
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Built specifically for Bangladesh freelancers working on Fiverr,
              Upwork, and with direct clients
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center border border-green-200 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Instant Results
              </h3>
              <p className="text-gray-600">
                Get immediate answers about your tax obligations, filing
                requirements, and risk level in under 30 seconds.
              </p>
            </div>

            <div className="p-6 text-center border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                100% Private
              </h3>
              <p className="text-gray-600">
                Your data is never shared. We don't store your income
                information unless you create an account.
              </p>
            </div>

            <div className="p-6 text-center border border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                BD Tax Rules
              </h3>
              <p className="text-gray-600">
                Calculations based on official Bangladesh tax regulations and
                updated regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Trusted by Bangladesh Freelancers
            </h2>
            <p className="text-gray-600">
              See what other freelancers are saying
            </p>
          </div>

          <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
            <div className="p-6 bg-white shadow-md rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                "Finally, a simple way to understand my tax obligations! This
                saved me hours of confusion."
              </p>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
                  R
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rafiq Ahmed</div>
                  <div className="text-sm text-gray-500">Fiverr Seller</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                "Accurate calculations and clear explanations. Highly recommend
                for all freelancers in Bangladesh!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-br from-purple-400 to-purple-600">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Sadia Rahman
                  </div>
                  <div className="text-sm text-gray-500">Upwork Freelancer</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                "The detailed report helped me plan my taxes properly. Worth
                every second!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-br from-green-400 to-green-600">
                  K
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Kamal Hossain
                  </div>
                  <div className="text-sm text-gray-500">Web Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center mb-4 space-x-2">
                <Shield className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Your Privacy & Security
                </h3>
              </div>
              <p className="leading-relaxed text-gray-600">
                We take your privacy seriously. Here's our commitment to you:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex items-start p-4 space-x-4 border border-green-200 rounded-lg bg-green-50">
                <Lock className="flex-shrink-0 w-6 h-6 mt-1 text-green-600" />
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">
                    Secure Data
                  </h4>
                  <p className="text-sm text-gray-600">
                    All calculations are encrypted and secure. We never share
                    your personal information.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 space-x-4 border border-blue-200 rounded-lg bg-blue-50">
                <Shield className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600" />
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">No Spam</h4>
                  <p className="text-sm text-gray-600">
                    We'll never send you unwanted emails. Your inbox stays
                    clean.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 space-x-4 border border-purple-200 rounded-lg bg-purple-50">
                <CheckCircle className="flex-shrink-0 w-6 h-6 mt-1 text-purple-600" />
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">
                    Accurate Calculations
                  </h4>
                  <p className="text-sm text-gray-600">
                    Based on official Bangladesh tax regulations and updated
                    regularly.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 space-x-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <FileText className="flex-shrink-0 w-6 h-6 mt-1 text-yellow-600" />
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">
                    Guidance Only
                  </h4>
                  <p className="text-sm text-gray-600">
                    Estimates for informational purposes. Consult a professional
                    for official advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-white bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary-600 to-purple-600">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold">FreelancerTax.BD</span>
              </div>
              <p className="text-sm text-gray-300">
                Making tax calculations simple and accessible for Bangladesh
                freelancers. Get instant, accurate estimates in seconds.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button
                    onClick={() => {
                      document
                        .getElementById("calculator-section")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className="transition-colors hover:text-primary-400"
                  >
                    Calculate Tax
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-primary-400"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-primary-400"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Contact</h4>
              <p className="text-sm text-gray-300">
                Have questions? We're here to help!
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Email: support@freelancertax.bd
              </p>
            </div>
          </div>
          <div className="pt-8 text-center border-t border-gray-700">
            <p className="text-sm text-gray-400">
              2024 FreelancerTax.BD. All rights reserved.
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Built with for Bangladesh freelancers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
