"use client";

import {
  Download,
  FileText,
  TrendingUp,
  Calculator,
  RefreshCw,
  Lightbulb,
  Target,
  DollarSign,
} from "lucide-react";
import {
  formatCurrency,
  getTaxSavingTips,
  type TaxResult,
  type TaxInput,
} from "@/lib/tax-calculator";

interface PaidResultProps {
  result: TaxResult;
  input: TaxInput;
  tier: "detailed" | "planning";
  onNewCalculation: () => void;
}

export function PaidResult({
  result,
  input,
  tier,
  onNewCalculation,
}: PaidResultProps) {
  const handleDownloadPDF = () => {
    // PDF generation logic will be implemented here
    console.log("Generating PDF report...");
    alert("PDF download functionality will be implemented");
  };

  const taxSavingTips = getTaxSavingTips(result);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {tier === "detailed" ? "Detailed Tax Report" : "Tax Planning Guide"}
        </h1>
        <p className="text-gray-600">
          Complete analysis with actionable insights • Premium benefits unlocked
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary Card */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Tax Summary
              </h2>
              <button
                onClick={handleDownloadPDF}
                className="btn-primary flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Tax Payable
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  {formatCurrency(result.estimatedTax)}
                </p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Filing Status
                </h3>
                <p className="text-lg font-bold text-green-600">
                  {result.filingRequired ? "Required" : "Optional"}
                </p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Target className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Risk Level
                </h3>
                <p className="text-lg font-bold text-yellow-600 capitalize">
                  {result.riskLevel}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Explanation:</h4>
              <p className="text-gray-700 leading-relaxed">
                {result.explanation}
              </p>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Slab-wise Tax Calculation
            </h2>

            <div className="space-y-4">
              {result.slabBreakdown?.map((slab, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">
                      {slab.description}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {slab.rate * 100}% rate
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Income Range:</p>
                      <p className="font-medium">
                        {formatCurrency(slab.slabMin)} -{" "}
                        {slab.slabMax ? formatCurrency(slab.slabMax) : "Above"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Taxable in This Slab:</p>
                      <p className="font-medium">
                        {formatCurrency(slab.taxableAmount)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tax from this slab:</span>
                      <span className="font-bold text-primary-600">
                        {formatCurrency(slab.taxAmount)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t-2 border-primary-200">
              <div className="flex justify-between items-center text-lg">
                <span className="font-semibold text-gray-900">Total Tax:</span>
                <span className="text-2xl font-bold text-primary-600">
                  {formatCurrency(result.estimatedTax)}
                </span>
              </div>
            </div>
          </div>

          {/* Action Steps */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What Should You Do Next?
            </h2>
            <div className="space-y-4">
              {result.filingRequired ? (
                <>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-900">
                        File Your Tax Return
                      </h3>
                      <p className="text-blue-800 text-sm mt-1">
                        You need to file a tax return by the deadline. Keep all
                        income and expense records ready.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium text-green-900">
                        Prepare Documentation
                      </h3>
                      <p className="text-green-800 text-sm mt-1">
                        Gather income statements, expense receipts, and bank
                        statements for the tax year.
                      </p>
                    </div>
                  </div>
                  {result.estimatedTax > 0 && (
                    <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium text-yellow-900">
                          Arrange Tax Payment
                        </h3>
                        <p className="text-yellow-800 text-sm mt-1">
                          Set aside approximately{" "}
                          {formatCurrency(result.estimatedTax)} for tax payment.
                        </p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium text-green-900">
                      No Immediate Action Required
                    </h3>
                    <p className="text-green-800 text-sm mt-1">
                      Your income is below the filing threshold, but consider
                      filing anyway to establish a tax history.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tax Planning (Only for Planning tier) */}
          {tier === "planning" && (
            <>
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lightbulb className="h-6 w-6 text-yellow-500 mr-2" />
                  Tax-Saving Strategies
                </h2>
                <div className="space-y-4">
                  {taxSavingTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg"
                    >
                      <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <p className="text-purple-900 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Income Planning Recommendations
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">
                      Current Year Planning
                    </h3>
                    <p className="text-blue-800 text-sm">
                      Based on your current income of{" "}
                      {formatCurrency(input.annualIncome)}, consider:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 text-sm mt-2 space-y-1">
                      <li>Maximize legitimate business expense deductions</li>
                      <li>
                        Consider timing of income receipts across financial
                        years
                      </li>
                      <li>
                        Keep detailed records of all professional expenses
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">
                      Future Growth Strategy
                    </h3>
                    <p className="text-green-800 text-sm">
                      As your freelance income grows, consider these approaches:
                    </p>
                    <ul className="list-disc list-inside text-green-800 text-sm mt-2 space-y-1">
                      <li>Set aside 15-25% of income for taxes</li>
                      <li>Explore tax-efficient investment options</li>
                      <li>Consider professional accounting services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key Figures */}
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Key Figures</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Gross Income:</span>
                <span className="font-medium">
                  {formatCurrency(input.annualIncome)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Expenses:</span>
                <span className="font-medium">
                  {formatCurrency(input.expenses || 0)}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-600">Taxable Income:</span>
                <span className="font-medium">
                  {formatCurrency(result.taxableIncome)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Tax:</span>
                <span className="font-bold text-primary-600">
                  {formatCurrency(result.estimatedTax)}
                </span>
              </div>
            </div>
          </div>

          {/* Important Reminders */}
          <div className="card p-6 bg-yellow-50 border-yellow-200">
            <h3 className="font-semibold text-yellow-900 mb-3">
              Important Reminders
            </h3>
            <div className="space-y-2 text-sm text-yellow-800">
              <p>• This is an estimate for guidance only</p>
              <p>• Actual tax may vary based on other factors</p>
              <p>• Consult a professional for complex situations</p>
              <p>• Keep all records for at least 5 years</p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleDownloadPDF}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Download Full Report</span>
            </button>
            <button
              onClick={onNewCalculation}
              className="btn-secondary w-full flex items-center justify-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>New Calculation</span>
            </button>
          </div>

          {/* Support */}
          <div className="card p-4 text-center">
            <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
            <p className="text-sm text-gray-600 mb-3">
              For complex tax situations, consider consulting a licensed tax
              professional in Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
