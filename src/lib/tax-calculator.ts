// Bangladesh Tax Calculation Logic for Freelancers
// Based on simplified tax slab structure for individual taxpayers

export interface TaxInput {
  annualIncome: number;
  incomeSource: "foreign" | "local";
  expenses?: number;
}

export interface TaxResult {
  taxableIncome: number;
  estimatedTax: number;
  filingRequired: boolean;
  riskLevel: "low" | "medium";
  explanation: string;
  slabBreakdown?: TaxSlabBreakdown[];
}

export interface TaxSlabBreakdown {
  slabMin: number;
  slabMax: number | null;
  rate: number;
  taxableAmount: number;
  taxAmount: number;
  description: string;
}

// Bangladesh Tax Slabs for Individual Taxpayers (Simplified for freelancers)
const TAX_SLABS = [
  { min: 0, max: 350000, rate: 0, description: "Tax-free threshold" },
  { min: 350000, max: 450000, rate: 0.05, description: "5% on next ৳1,00,000" },
  { min: 450000, max: 750000, rate: 0.1, description: "10% on next ৳3,00,000" },
  {
    min: 750000,
    max: 1150000,
    rate: 0.15,
    description: "15% on next ৳4,00,000",
  },
  {
    min: 1150000,
    max: 1650000,
    rate: 0.2,
    description: "20% on next ৳5,00,000",
  },
  {
    min: 1650000,
    max: null,
    rate: 0.25,
    description: "25% on remaining amount",
  },
];

const MIN_TAXABLE_THRESHOLD = 350000; // ৳3.5 lakh
const FILING_THRESHOLD = 300000; // ৳3 lakh - filing required even if no tax due

export function calculateTax(input: TaxInput): TaxResult {
  const { annualIncome, incomeSource, expenses = 0 } = input;

  // Deduct expenses from income
  const taxableIncome = Math.max(0, annualIncome - expenses);

  // Check if filing is required
  const filingRequired = annualIncome >= FILING_THRESHOLD;

  // Calculate tax using slab method
  let totalTax = 0;
  const slabBreakdown: TaxSlabBreakdown[] = [];

  for (const slab of TAX_SLABS) {
    if (taxableIncome <= slab.min) break;

    const slabMax = slab.max || taxableIncome;
    const taxableInThisSlab = Math.min(taxableIncome, slabMax) - slab.min;

    if (taxableInThisSlab > 0) {
      const taxInThisSlab = taxableInThisSlab * slab.rate;
      totalTax += taxInThisSlab;

      slabBreakdown.push({
        slabMin: slab.min,
        slabMax: slab.max,
        rate: slab.rate,
        taxableAmount: taxableInThisSlab,
        taxAmount: taxInThisSlab,
        description: slab.description,
      });
    }
  }

  // Round to nearest taka
  const estimatedTax = Math.round(totalTax);

  // Determine risk level
  const riskLevel: "low" | "medium" =
    taxableIncome > 1000000 ? "medium" : "low";

  // Generate explanation
  const explanation = generateExplanation(
    taxableIncome,
    estimatedTax,
    filingRequired,
    incomeSource
  );

  return {
    taxableIncome,
    estimatedTax,
    filingRequired,
    riskLevel,
    explanation,
    slabBreakdown,
  };
}

function generateExplanation(
  taxableIncome: number,
  estimatedTax: number,
  filingRequired: boolean,
  incomeSource: "foreign" | "local"
): string {
  if (taxableIncome < MIN_TAXABLE_THRESHOLD) {
    return `Your income is below the tax-free threshold of ৳${MIN_TAXABLE_THRESHOLD.toLocaleString()}. You likely owe no tax, but ${
      filingRequired
        ? "you should still file a return"
        : "filing may not be required"
    }.`;
  }

  const sourceText =
    incomeSource === "foreign" ? "foreign clients" : "local sources";

  return `Based on your ৳${taxableIncome.toLocaleString()} taxable income from ${sourceText}, you may owe approximately ৳${estimatedTax.toLocaleString()} in tax. ${
    filingRequired
      ? "Tax return filing is recommended."
      : "Consider filing a tax return."
  }`;
}

export function formatCurrency(amount: number): string {
  return `৳${amount.toLocaleString()}`;
}

export function getTaxSavingTips(taxResult: TaxResult): string[] {
  const tips: string[] = [];

  if (taxResult.estimatedTax > 0) {
    tips.push(
      "Track all business-related expenses (equipment, software, internet)"
    );
    tips.push("Keep receipts for professional development and training costs");
    tips.push("Consider legitimate home office expense deductions");
  }

  if (taxResult.taxableIncome > 500000) {
    tips.push("Plan income distribution across financial years");
    tips.push("Explore investment options that offer tax benefits");
  }

  if (taxResult.filingRequired) {
    tips.push("File returns on time to avoid penalties");
    tips.push("Keep detailed records of all income and expenses");
    tips.push("Consider consulting a tax professional for complex cases");
  }

  return tips;
}
