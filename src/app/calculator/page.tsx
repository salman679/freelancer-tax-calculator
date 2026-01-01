"use client";

import { useState, useEffect, Suspense } from "react";
import {
  Calculator,
  ArrowLeft,
  DollarSign,
  FileText,
  TrendingUp,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  calculateTax,
  formatCurrency,
  getTaxSavingTips,
  type TaxInput,
  type TaxResult,
} from "@/lib/tax-calculator";
import { FreeResult } from "@/components/FreeResult";
import { PaidResult } from "@/components/PaidResult";

type CalculationStep = "input" | "free-result" | "premium-result";
export type BenefitTier = "detailed" | "planning";

function CalculatorContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<CalculationStep>("input");
  const [input, setInput] = useState<TaxInput>({
    annualIncome: 0,
    incomeSource: "foreign",
    expenses: 0,
  });
  const [result, setResult] = useState<TaxResult | null>(null);
  const [benefitTier, setBenefitTier] = useState<BenefitTier>("detailed");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  // Check if user is signed up from localStorage on mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedUserId = localStorage.getItem("userId");

    if (storedEmail && storedUserId) {
      setUserEmail(storedEmail);
      setUserId(storedUserId);
      setIsSignedUp(true);
    }
  }, []);

  const handleCalculate = () => {
    const taxResult = calculateTax(input);
    setResult(taxResult);
    setStep("free-result");
  };

  const handleSignup = (tier: BenefitTier) => {
    setBenefitTier(tier);
    setShowSignupModal(true);
  };

  const handleSignupSubmit = async (email: string, name?: string) => {
    setSignupLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          benefitTier,
        }),
      });

      const data = await response.json();

      if (data.success && data.user) {
        // Store user info in localStorage
        localStorage.setItem("userEmail", data.user.email);
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("userBenefitTier", data.user.benefitTier);

        setUserEmail(data.user.email);
        setUserId(data.user.id);
        setIsSignedUp(true);
        setShowSignupModal(false);
        setStep("premium-result");

        // Save the current calculation to database
        if (result) {
          await saveCalculation(data.user.id);
        }
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setSignupLoading(false);
    }
  };

  const saveCalculation = async (userIdParam?: string) => {
    if (!result) return;

    try {
      await fetch("/api/calculations/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userIdParam || userId,
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
                  Calculate My Tax - Free
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

        {step === "free-result" && result && (
          <FreeResult
            result={result}
            input={input}
            onSignup={handleSignup}
            onRecalculate={resetCalculation}
            isSignedUp={isSignedUp}
          />
        )}

        {step === "premium-result" && result && (
          <PaidResult
            result={result}
            input={input}
            tier={benefitTier}
            onNewCalculation={resetCalculation}
          />
        )}

        {/* Signup Modal */}
        {showSignupModal && (
          <SignupModal
            onClose={() => setShowSignupModal(false)}
            onSubmit={handleSignupSubmit}
            loading={signupLoading}
            tier={benefitTier}
          />
        )}
      </div>
    </div>
  );
}

interface SignupModalProps {
  onClose: () => void;
  onSubmit: (email: string, name?: string) => void;
  loading: boolean;
  tier: BenefitTier;
}

function SignupModal({ onClose, onSubmit, loading, tier }: SignupModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email, name);
    }
  };

  const tierInfo = {
    detailed: "Detailed Tax Report",
    planning: "Tax Planning Guide",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Sign Up for Free Benefits
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            disabled={loading}
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        <div className="p-3 mb-4 rounded-lg bg-primary-50">
          <p className="text-sm text-primary-800">
            You're signing up for: <strong>{tierInfo[tier]}</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="input-field"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name (Optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="input-field"
              disabled={loading}
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary disabled:opacity-50"
              disabled={loading || !email}
            >
              {loading ? "Signing Up..." : "Sign Up Free"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-xs text-center text-gray-500">
          No payment required • Instant access • 100% free
        </p>
      </div>
    </div>
  );
}

export default function CalculatorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-gray-600">Loading...</div>
        </div>
      }
    >
      <CalculatorContent />
    </Suspense>
  );
}
