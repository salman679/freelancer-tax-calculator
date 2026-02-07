import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title:
    "How to File Income Tax as a Freelancer in Bangladesh: Documents & Timeline",
  description:
    "A step-by-step Bangladesh guide for freelancer tax filing. Learn which documents to collect, how to estimate tax, and how to prepare for deadlines.",
};

export default function FreelancerTaxFilingBangladesh() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="py-4 container-custom">
          <Link
            href="/blog"
            className="font-semibold text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="inline w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>
      </header>

      <article className="py-16">
        <div className="max-w-4xl container-custom">
          <header className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              How to File Income Tax as a Freelancer in Bangladesh: Documents &amp;
              Timeline
            </h1>
            <p className="text-xl text-gray-600">
              A practical filing guide for Bangladesh freelancers with a clear
              document checklist, planning timeline, and simple explanations.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Updated for 2025 • 10 min read
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Filing income tax as a freelancer in Bangladesh can feel confusing
              if you do not have a structured process. The good news is that you
              can make filing easier by collecting documents early and using a
              calculator to estimate your tax. This guide covers a simple
              timeline, what records to keep, and how to prepare for filing
              season without stress.
            </p>

            <h2>Step 1: Confirm whether you need to file</h2>
            <p>
              Filing requirements depend on your total annual income and the
              current NBR rules. Even if you do not owe tax, some freelancers
              may still be required to file in certain situations. Check the
              latest guidance and seek professional advice if you are unsure.
            </p>

            <h2>Step 2: Collect your income records</h2>
            <p>
              Start by compiling all sources of income, including platform
              earnings and direct clients. Record:
            </p>
            <ul>
              <li>Upwork, Fiverr, and Freelancer.com payouts</li>
              <li>Direct bank transfers from clients</li>
              <li>Local project invoices in BDT</li>
            </ul>
            <p>
              Convert foreign currency payouts to BDT using a consistent method
              such as the exchange rate on the date received. Keep statements as
              evidence.
            </p>

            <h2>Step 3: Gather expense documentation</h2>
            <p>
              Eligible expenses reduce taxable income when properly documented.
              Common expenses include:
            </p>
            <ul>
              <li>Work-related software and tools</li>
              <li>Equipment purchases (laptop, headset, monitor)</li>
              <li>Internet bills and mobile data for work</li>
              <li>Professional training and certifications</li>
            </ul>

            <h2>Step 4: Estimate your tax before filing</h2>
            <p>
              Estimating early helps you avoid a cash crunch. Use the
              <Link
                href="/calculator"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                freelancer tax calculator in Bangladesh
              </Link>
              to calculate an estimated amount. The calculator is the best place
              to calculate tax quickly when you have your yearly totals.
            </p>

            <h2>Example timeline with BDT amounts</h2>
            <p>
              A content writer earns BDT 720,000 in a year and documents BDT
              90,000 in expenses. By mid-year, they estimate tax using the
              calculator and set aside a monthly amount. When filing season
              arrives, their records are ready and there is no financial
              surprise.
            </p>

            <h2>Step 5: Make sure you have a TIN</h2>
            <p>
              A Taxpayer Identification Number (TIN) is usually needed to file a
              return. If you do not have a TIN, follow the steps in our
              <Link
                href="/blog/tin-for-freelancers-bangladesh"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                TIN guide for freelancers in Bangladesh
              </Link>
              before the filing deadline.
            </p>

            <h2>Step 6: Submit and keep records</h2>
            <p>
              Submit your return through the official process and save copies of
              everything. Keep records of income, expenses, and filings for
              future reference.
            </p>

            <h2>Common filing mistakes to avoid</h2>
            <ul>
              <li>Waiting too late to collect income records.</li>
              <li>Not converting foreign income consistently to BDT.</li>
              <li>Misplacing receipts for expenses.</li>
              <li>Estimating tax only at the last minute.</li>
            </ul>

            <h2>Related guides for deeper learning</h2>
            <p>
              For platform-specific tips, explore
              <Link
                href="/blog/fiverr-income-tax-bangladesh"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                Fiverr income tax in Bangladesh
              </Link>
              and
              <Link
                href="/blog/upwork-income-tax-bangladesh"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                Upwork income tax in Bangladesh
              </Link>
              . If you are new to tax planning, start with the
              <Link
                href="/blog/freelancer-income-tax-bangladesh-2025-guide"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                freelancer income tax guide for beginners
              </Link>
              .
            </p>

            <h2>Disclaimer</h2>
            <p>
              This article is for informational purposes only and does not
              provide legal or tax advice. Always check official NBR guidance or
              consult a licensed professional.
            </p>

            <h2>FAQs</h2>
            <h3>Do I need to file if I only work part-time?</h3>
            <p>
              Filing depends on your total annual income and the current NBR
              rules, not on whether you work full-time or part-time.
            </p>
            <h3>How early should I start collecting documents?</h3>
            <p>
              Start as early as possible so you are not rushed during filing
              season.
            </p>
            <h3>What if I earned in multiple currencies?</h3>
            <p>
              Convert all payments to BDT using a consistent method and keep
              records of exchange rates.
            </p>
            <h3>Is an online calculator enough for filing?</h3>
            <p>
              It provides an estimate for planning but does not replace official
              calculations or professional advice.
            </p>
            <h3>Where can I quickly estimate my tax?</h3>
            <p>
              Use the
              <Link
                href="/calculator"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                income tax calculator for freelancers in Bangladesh
              </Link>
              for fast planning.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
