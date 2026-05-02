import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { createArticleMetadata } from "@/lib/seo";

export const metadata: Metadata = createArticleMetadata(
  "tin-for-freelancers-bangladesh"
);

export default function TinForFreelancersBangladesh() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ArticleJsonLd slug="tin-for-freelancers-bangladesh" />
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
              How to Get a TIN in Bangladesh for Freelancers (Simple Steps)
            </h1>
            <p className="text-xl text-gray-600">
              A beginner-friendly overview of why a TIN matters for freelancers
              and how to prepare for the application process.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Updated for 2025 • 8 min read
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              A Taxpayer Identification Number (TIN) is often required when you
              file income tax in Bangladesh. Many freelancers postpone getting a
              TIN because they are unsure about the process. This guide explains
              why a TIN is important, what documents you may need, and how it
              fits into your overall freelancer tax planning.
            </p>

            <h2>Why freelancers need a TIN</h2>
            <p>
              A TIN helps the National Board of Revenue (NBR) identify your tax
              records. Even if your income is below the taxable threshold, a
              TIN can be required for certain official processes or if you plan
              to file a return in the future. It is a key step toward building a
              clean tax profile as a freelancer.
            </p>

            <h2>What to prepare before applying</h2>
            <p>
              Requirements can change, so always verify the latest NBR
              documentation. As a general preparation checklist, you may need:
            </p>
            <ul>
              <li>National ID (NID) or passport details</li>
              <li>Basic contact information and address</li>
              <li>Employment status (freelancer or self-employed)</li>
              <li>Supporting documents if requested by the portal</li>
            </ul>

            <h2>How a TIN supports your tax planning</h2>
            <p>
              A TIN is often needed to file taxes, apply for certain financial
              services, or complete compliance requirements. Once you have a
              TIN, you can use the
              <Link
                href="/calculator"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                freelancer tax calculator in Bangladesh
              </Link>
              to estimate your yearly income tax and plan your savings. It also
              makes it easier to keep your documentation in one place.
            </p>

            <h2>Example: why a TIN matters even for small earnings</h2>
            <p>
              A new freelancer earns BDT 250,000 from Fiverr and local projects
              in a year. Even if they do not owe tax, having a TIN and keeping
              records helps them when income grows in the future. This early
              preparation avoids last-minute confusion during filing season.
            </p>

            <h2>Step-by-step checklist for freelancers</h2>
            <ol>
              <li>Review NBR guidance for the latest TIN requirements.</li>
              <li>Gather NID or passport details and contact information.</li>
              <li>Submit the application using the official portal.</li>
              <li>Save the confirmation details for future tax filing.</li>
              <li>
                Use the
                <Link
                  href="/calculator"
                  className="font-semibold text-primary-600 hover:text-primary-700"
                >
                  income tax calculator for freelancers in Bangladesh
                </Link>
                to estimate taxes once your income grows.
              </li>
            </ol>

            <h2>Related reading for next steps</h2>
            <p>
              After getting a TIN, focus on tracking your income and expenses.
              The
              <Link
                href="/blog/freelancer-income-tax-bangladesh-2025-guide"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                freelancer income tax guide for beginners
              </Link>
              explains the basics, while the
              <Link
                href="/blog/freelancer-tax-filing-bangladesh"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                tax filing guide for freelancers in Bangladesh
              </Link>
              provides a filing timeline. For platform-specific notes, see the
              <Link
                href="/blog/fiverr-income-tax-bangladesh"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                Fiverr income tax guide
              </Link>
              and
              <Link
                href="/blog/upwork-income-tax-bangladesh"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                Upwork income tax guide
              </Link>
              .
            </p>

            <h2>Disclaimer</h2>
            <p>
              This article is for informational purposes only and does not
              provide legal or tax advice. Always check official NBR guidance or
              consult a licensed professional for your situation.
            </p>

            <h2>FAQs</h2>
            <h3>Can freelancers apply for a TIN online?</h3>
            <p>
              Many applications are handled online through official portals.
              Check NBR guidance for the latest instructions.
            </p>
            <h3>Is a TIN required if I am under the taxable threshold?</h3>
            <p>
              It may still be required for certain processes or if you plan to
              file a return. Verify your specific requirements.
            </p>
            <h3>Do I need a trade license to get a TIN?</h3>
            <p>
              Requirements can vary. Check official guidance or ask a licensed
              tax advisor if you are unsure.
            </p>
            <h3>How long does it take to get a TIN?</h3>
            <p>
              Processing times depend on the system and documentation. Apply
              early if you plan to file in the same year.
            </p>
            <h3>Where can I estimate my tax after getting a TIN?</h3>
            <p>
              Use the
              <Link
                href="/calculator"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                freelancer tax calculator in Bangladesh
              </Link>
              as a planning tool.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
