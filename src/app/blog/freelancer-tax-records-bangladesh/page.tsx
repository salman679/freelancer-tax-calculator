import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { createArticleMetadata } from "@/lib/seo";

export const metadata: Metadata = createArticleMetadata(
  "freelancer-tax-records-bangladesh"
);

export default function FreelancerTaxRecordsBangladesh() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ArticleJsonLd slug="freelancer-tax-records-bangladesh" />
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
              Freelancer Tax Records in Bangladesh: Simple Bookkeeping for Income
              Tax
            </h1>
            <p className="text-xl text-gray-600">
              Learn the simplest way to track freelancing income, expenses, and
              invoices in BDT so tax filing becomes easier and more accurate.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Updated for 2025 • 9 min read
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Most tax problems for freelancers start with messy records. If you
              track income and expenses consistently, you can estimate tax
              confidently and file without stress. This guide shares a
              Bangladesh-specific, beginner-friendly system for record-keeping
              that works whether you earn through Upwork, Fiverr, or direct
              clients.
            </p>

            <h2>Why record-keeping matters for freelancers</h2>
            <p>
              Your total annual income and your eligible business expenses are
              the foundation of any income tax estimate. Without clear records,
              you may overpay or underpay. Good records also help you justify
              deductions and respond to any follow-up questions from tax
              authorities.
            </p>

            <h2>What to track every month</h2>
            <p>
              Keep it simple. A basic spreadsheet or bookkeeping app is enough.
              Track these fields:
            </p>
            <ul>
              <li>Date received</li>
              <li>Client or platform (Upwork, Fiverr, direct client)</li>
              <li>Amount received and currency</li>
              <li>Exchange rate used to convert to BDT</li>
              <li>Short note about the project</li>
            </ul>

            <h2>Income sources to include</h2>
            <p>
              Your income may come from multiple channels. Make sure you include
              all of them:
            </p>
            <ul>
              <li>Platform payouts (Upwork, Fiverr, Freelancer.com)</li>
              <li>Direct bank transfers from international clients</li>
              <li>Local projects paid in BDT</li>
            </ul>
            <p>
              If you use multiple platforms, keep separate tabs in your tracking
              sheet and combine totals at the end of the year.
            </p>

            <h2>Expense tracking: keep it realistic</h2>
            <p>
              Business expenses can reduce taxable income when documented. Common
              freelancer expenses include software, equipment, internet, and
              training. Save receipts digitally and label each expense with a
              short note about how it supports your work.
            </p>

            <h2>Example: monthly record-keeping in BDT</h2>
            <p>
              A freelancer earns BDT 85,000 in March: BDT 60,000 from Upwork and
              BDT 25,000 from direct clients. They spend BDT 6,000 on software
              and BDT 1,500 on internet. By recording income and expenses
              monthly, the freelancer knows their net estimate and can use the
              <Link
                href="/calculator"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                freelancer tax calculator in Bangladesh
              </Link>
              to plan ahead.
            </p>

            <h2>How record-keeping supports tax estimates</h2>
            <p>
              With clean records, you can quickly total yearly income and
              expenses. Then use the
              <Link
                href="/calculator"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                income tax calculator for freelancers in Bangladesh
              </Link>
              to estimate tax. The calculator is the best place to calculate
              tax once you have complete totals.
            </p>

            <h2>Connect records with filing tasks</h2>
            <p>
              Record-keeping is only half the job. Filing requires a TIN and a
              basic understanding of the process. If you are not prepared, start
              with the
              <Link
                href="/blog/tin-for-freelancers-bangladesh"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                TIN guide for freelancers in Bangladesh
              </Link>
              and the
              <Link
                href="/blog/freelancer-tax-filing-bangladesh"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                tax filing guide
              </Link>
              . These resources help you use your records effectively.
            </p>

            <h2>Disclaimer</h2>
            <p>
              This article is for informational purposes only and does not
              provide legal or tax advice. Always verify current NBR guidance or
              consult a licensed professional for your situation.
            </p>

            <h2>FAQs</h2>
            <h3>Do I need a separate bank account for freelance income?</h3>
            <p>
              It helps, but it is not required. A separate account makes records
              cleaner and easier to manage.
            </p>
            <h3>How often should I update my records?</h3>
            <p>
              Monthly updates are usually enough. Weekly updates are even better
              if you have frequent payments.
            </p>
            <h3>Should I keep paper receipts?</h3>
            <p>
              Digital copies are fine, but keep them organized with a clear file
              name and date.
            </p>
            <h3>What if I forget to record some income?</h3>
            <p>
              Check your platform statements and bank records regularly to
              ensure you capture all earnings.
            </p>
            <h3>Where can I estimate my tax once records are ready?</h3>
            <p>
              Use the
              <Link
                href="/calculator"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                freelancer tax calculator in Bangladesh
              </Link>
              for a fast estimate.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
