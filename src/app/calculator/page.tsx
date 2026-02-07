import type { Metadata } from "next";
import Script from "next/script";
import CalculatorForm from "@/components/CalculatorForm";

const baseUrl = "https://freelancer-tax-calculator.salmanizhar.com";

export const metadata: Metadata = {
  title:
    "Freelancer Tax Calculator in Bangladesh (2025) | Income Tax Calculator for Freelancers",
  description:
    "Estimate freelancing income tax in Bangladesh with a simple calculator and clear guide. Learn who should file, how tax is calculated, common mistakes, and FAQs for freelancers.",
  alternates: {
    canonical: `${baseUrl}/calculator`,
  },
  openGraph: {
    title: "Freelancer Tax Calculator in Bangladesh (2025)",
    description:
      "A Bangladesh-focused freelancer tax calculator with a practical guide, examples, and FAQs. Get an estimate and understand next steps.",
    url: `${baseUrl}/calculator`,
    siteName: "Freelancer Tax Calculator",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Freelancer Tax Calculator in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Tax Calculator in Bangladesh (2025)",
    description:
      "Estimate freelancing income tax in Bangladesh with a helpful guide, examples, and FAQs.",
    images: [`${baseUrl}/twitter-image.svg`],
  },
};

const faqItems = [
  {
    question: "Is this freelancer tax calculator official?",
    answer:
      "No. This calculator is an educational estimate to help you understand possible tax obligations. For official guidance, check current NBR rules or consult a licensed tax professional.",
  },
  {
    question: "Do I need a TIN to file taxes as a freelancer?",
    answer:
      "In most cases, you will need a Taxpayer Identification Number (TIN) to file a return. If you are new, start by applying for a TIN before filing.",
  },
  {
    question: "What income should I include in the calculator?",
    answer:
      "Include your total annual freelancing income from platforms like Fiverr or Upwork, direct clients, and any other freelance work. Use a conservative estimate if your income varies.",
  },
  {
    question: "Can I subtract business expenses?",
    answer:
      "Yes, legitimate business expenses may reduce taxable income. Keep records for items like software subscriptions, equipment, internet, and professional services.",
  },
  {
    question: "Is foreign income treated differently than local income?",
    answer:
      "Some rules can differ based on how the income is received and reported. This calculator uses a simplified approach; verify your specific case with NBR guidance.",
  },
  {
    question: "Does the calculator handle tax rebates or minimum tax?",
    answer:
      "The tool provides an estimate using common assumptions and may not capture every rebate, exemption, or minimum tax rule. Review current NBR policies for details.",
  },
  {
    question: "What if my income is below the taxable threshold?",
    answer:
      "If your income is below the threshold, you may not owe tax, but filing requirements can still apply in some situations. Check current NBR guidance.",
  },
  {
    question: "How accurate is the estimate?",
    answer:
      "Accuracy depends on the inputs you provide and how closely your situation matches the calculator assumptions. Treat the result as a starting point for planning.",
  },
  {
    question: "Should I keep records even if I pay no tax?",
    answer:
      "Yes. Maintaining invoices, bank statements, and expense receipts helps in case you need to file or verify income later.",
  },
  {
    question: "How often should I review my tax position?",
    answer:
      "Review it at least quarterly so you can set aside funds and avoid surprises during filing season.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function CalculatorPage() {
  return (
    <div className="bg-gray-50">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-white border-b">
        <div className="py-10 container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-600">
              Bangladesh freelancer tax guide
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Freelancer Tax Calculator in Bangladesh (2025)
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Use this page as a practical guide plus a calculator. It explains
              who should file, how income tax is estimated for freelancers in
              Bangladesh, and how to avoid common mistakes. The calculator below
              provides a quick estimate so you can plan ahead. This content is
              informational only and not legal or tax advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 container-custom">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Who needs to pay income tax as a freelancer in Bangladesh?
              </h2>
              <p className="mt-3">
                If you earn money independently through freelance work, you may
                have a tax filing obligation. This includes income from global
                platforms, direct international clients, or Bangladesh-based
                businesses. Whether you ultimately owe tax depends on your
                annual income, allowable deductions, and current National Board
                of Revenue (NBR) rules. When in doubt, check the latest NBR
                guidance or consult a licensed tax professional.
              </p>
              <p className="mt-3">
                Freelancers often overlook taxes because payments arrive in
                different currencies or are split across platforms. Consolidate
                your annual income into one figure, track expenses, and keep a
                clean record of invoices and bank statements. This helps you
                understand whether you need to file and how much to set aside.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                How tax is calculated (overview)
              </h2>
              <p className="mt-3">
                The calculation is usually based on your total annual income
                minus allowable business expenses, which gives a taxable income
                estimate. The taxable amount is then applied to the current
                income tax slabs published by the NBR. Some taxpayers may be
                eligible for rebates, and certain minimum tax rules may also
                apply depending on the situation. This calculator uses a
                simplified approach intended for planning, not for filing.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Start with your total freelancing income for the year.</li>
                <li>Subtract eligible business expenses you can document.</li>
                <li>Apply current tax slabs to estimate payable tax.</li>
                <li>
                  Compare the estimate with any minimum tax rules or rebates
                  that may apply to you.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Assumptions &amp; limitations of this calculator
              </h2>
              <p className="mt-3">
                This tool assumes common freelancer scenarios and uses a simple
                model to give a quick estimate. It does not account for all
                deductions, exemptions, or special cases, and it cannot replace
                professional advice. Always verify your obligations against the
                latest NBR guidance.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Estimates are based on the inputs you provide and may differ
                  from final tax calculations.
                </li>
                <li>
                  The tool does not validate receipts or eligibility for
                  specific deductions.
                </li>
                <li>
                  Minimum tax, rebates, or sector-specific rules may change.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Quick tips before you calculate
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>✅ Add all platforms and direct client income together.</li>
                <li>✅ Use conservative numbers if income fluctuates.</li>
                <li>✅ Track expenses with receipts or invoices.</li>
                <li>
                  ✅ If you are unsure, check NBR guidance or ask a professional.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-primary-100 bg-primary-50 p-6">
              <h2 className="text-lg font-semibold text-primary-700">
                Related resources
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-primary-700">
                <li>
                  <a
                    href="/blog/freelancer-income-tax-bangladesh-2025-guide"
                    className="font-medium underline"
                  >
                    Freelancer income tax guide for beginners
                  </a>
                </li>
                <li>
                  <a
                    href="/blog/tin-for-freelancers-bangladesh"
                    className="font-medium underline"
                  >
                    How to get a TIN in Bangladesh
                  </a>
                </li>
                <li>
                  <a
                    href="/blog/freelancer-tax-filing-bangladesh"
                    className="font-medium underline"
                  >
                    Step-by-step filing checklist
                  </a>
                </li>
                <li>
                  <a
                    href="/blog/fiverr-income-tax-bangladesh"
                    className="font-medium underline"
                  >
                    Fiverr income tax guide
                  </a>
                </li>
                <li>
                  <a
                    href="/blog/upwork-income-tax-bangladesh"
                    className="font-medium underline"
                  >
                    Upwork income tax guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CalculatorForm />

      <section className="py-12 container-custom">
        <div className="max-w-3xl space-y-10 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Example calculations
            </h2>
            <div className="mt-4 space-y-5">
              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Example 1: Mid-level freelancer with mixed expenses
                </h3>
                <p className="mt-2">
                  A freelancer earns ৳900,000 in a year from international
                  clients and spends ৳150,000 on software, internet, and a new
                  laptop. The calculator estimates taxable income from the net
                  figure and then applies the current NBR slabs. The output is a
                  planning estimate, helping the freelancer set aside funds and
                  check whether filing is required.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Example 2: New freelancer with lower income
                </h3>
                <p className="mt-2">
                  A new freelancer earns ৳320,000 in the year and spends
                  ৳20,000 on tools and training. The calculator may show minimal
                  or no tax owed, but the freelancer should still verify filing
                  requirements and keep records in case of future income growth.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Step-by-step: how to use the calculator
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>Collect your total income from all freelance sources.</li>
              <li>
                Estimate yearly expenses that are directly related to your
                freelance work.
              </li>
              <li>
                Select whether most of your income is from foreign or local
                clients.
              </li>
              <li>
                Click “Calculate My Tax” to view the estimated tax and filing
                guidance.
              </li>
              <li>
                Review the results and compare with official NBR guidance.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Common mistakes freelancers make
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Ignoring taxes until the end of the year and underestimating the
                amount owed.
              </li>
              <li>
                Mixing personal and business expenses, which makes deductions
                harder to justify.
              </li>
              <li>
                Forgetting to include income from smaller clients or local
                projects.
              </li>
              <li>
                Not keeping invoices, bank statements, or receipts for expenses.
              </li>
              <li>
                Assuming that foreign income is automatically tax-free without
                verifying the rules.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">FAQs</h2>
            <div className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-lg border border-gray-200 bg-white p-4"
                >
                  <summary className="cursor-pointer text-base font-semibold text-gray-900">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
