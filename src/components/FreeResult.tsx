"use client";

import {
  AlertCircle,
  CheckCircle,
  TrendingUp,
  FileText,
  Calculator,
} from "lucide-react";
import {
  formatCurrency,
  type TaxResult,
  type TaxInput,
} from "@/lib/tax-calculator";

interface FreeResultProps {
  result: TaxResult;
  input: TaxInput;
  onSignup: (tier: "detailed" | "planning") => void;
  onRecalculate: () => void;
  isSignedUp: boolean;
}

export function FreeResult({
  result,
  input,
  onSignup,
  onRecalculate,
  isSignedUp,
}: FreeResultProps) {
  const getRiskColor = (risk: "low" | "medium") => {
    return risk === "low"
      ? "text-green-600 bg-green-50"
      : "text-yellow-600 bg-yellow-50";
  };

  const getRiskIcon = (risk: "low" | "medium") => {
    return risk === "low" ? CheckCircle : AlertCircle;
  };

  const RiskIcon = getRiskIcon(result.riskLevel);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Your Tax Estimate
        </h1>
        <p className="text-gray-600">
          {isSignedUp
            ? "Free basic calculation • Sign up for detailed breakdown and guidance"
            : "Free basic calculation • Create an account for premium benefits"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Free Results */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Results Card */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Estimated Results
              </h2>
              <div
                className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(
                  result.riskLevel
                )}`}
              >
                <RiskIcon className="h-4 w-4" />
                <span>
                  {result.riskLevel === "low" ? "Low Risk" : "Medium Risk"}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Tax Amount */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <h3 className="font-medium text-gray-900">
                    Estimated Tax Payable
                  </h3>
                  <p className="text-sm text-gray-500">
                    Approximate amount you may owe
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(result.estimatedTax)}
                  </div>
                  {result.estimatedTax === 0 && (
                    <p className="text-sm text-green-600">
                      Below tax threshold
                    </p>
                  )}
                </div>
              </div>

              {/* Filing Requirement */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <h3 className="font-medium text-gray-900">
                    Tax Return Filing
                  </h3>
                  <p className="text-sm text-gray-500">
                    Whether you need to file
                  </p>
                </div>
                <div className="text-right">
                  <div
                    className={`text-xl font-bold ${
                      result.filingRequired ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {result.filingRequired ? "Required" : "Optional"}
                  </div>
                  <p className="text-sm text-gray-500">
                    {result.filingRequired
                      ? "You should file"
                      : "May not be needed"}
                  </p>
                </div>
              </div>

              {/* Income Summary */}
              <div className="flex items-center justify-between py-3">
                <div>
                  <h3 className="font-medium text-gray-900">Taxable Income</h3>
                  <p className="text-sm text-gray-500">After expenses</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-700">
                    {formatCurrency(result.taxableIncome)}
                  </div>
                  <p className="text-sm text-gray-500">
                    From {formatCurrency(input.annualIncome)} gross
                  </p>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">
                What this means:
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                {result.explanation}
              </p>
            </div>

            {/* Recalculate Button */}
            <div className="mt-6">
              <button
                onClick={onRecalculate}
                className="btn-secondary w-full flex items-center justify-center"
              >
                <Calculator className="h-4 w-4 mr-2" />
                Recalculate with Different Numbers
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
            <p className="text-sm text-gray-700">
              <strong>Disclaimer:</strong> This is an estimated calculation for
              guidance only. It does not constitute legal, financial, or
              accounting advice. Actual tax obligations may vary. Please consult
              a licensed professional for final decisions.
            </p>
          </div>
        </div>

        {/* Signup Benefits */}
        <div className="space-y-6">
          {/* Detailed Report */}
          <div className="card p-6 border-2 border-primary-200">
            <div className="text-center mb-4">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Detailed Breakdown
              </h3>
              <p className="text-2xl font-bold text-primary-600 mt-1">FREE</p>
              <p className="text-sm text-primary-600 font-medium">
                With Account
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Slab-wise tax calculation
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Step-by-step explanation
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Clear action steps
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Downloadable PDF report
                </span>
              </div>
            </div>

            <button
              onClick={() => onSignup("detailed")}
              className="btn-primary w-full"
              disabled={isSignedUp}
            >
              {isSignedUp ? "Already Signed Up" : "Sign Up for Detailed Report"}
            </button>
          </div>

          {/* Tax Planning */}
          <div className="card p-6 border-2 border-purple-200">
            <div className="text-center mb-4">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Tax Planning Guide
              </h3>
              <p className="text-2xl font-bold text-purple-600 mt-1">FREE</p>
              <p className="text-sm text-purple-600 font-medium">
                Most Comprehensive
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Everything in Detailed Report
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Tax-saving strategies
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Expense optimization tips
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Income planning advice
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Future risk reduction
                </span>
              </div>
            </div>

            <button
              onClick={() => onSignup("planning")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSignedUp}
            >
              {isSignedUp ? "Already Signed Up" : "Sign Up for Planning Guide"}
            </button>
          </div>

          {/* Trust Badge */}
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-medium text-green-900 mb-1">
              100% Free Benefits
            </h4>
            <p className="text-sm text-green-700">
              No payment required • Create account • Unlock all features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
