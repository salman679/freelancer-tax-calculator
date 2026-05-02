import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Freelancer Tax Calculator",
  description:
    "Privacy policy for Freelancer Tax Calculator. Learn what data the calculator uses, how analytics works, and how your information is handled.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd
        id="privacy-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <header className="bg-white border-b shadow-sm">
        <div className="py-4 container-custom">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Calculator
          </Link>
        </div>
      </header>

      <main className="py-16">
        <article className="max-w-3xl container-custom">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              This page explains how Freelancer Tax Calculator handles basic
              usage data and calculator inputs.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>Calculator inputs</h2>
            <p>
              The calculator uses the numbers you enter to estimate possible
              income tax obligations. Do not enter sensitive personal data, tax
              identification numbers, bank details, or client information.
            </p>

            <h2>Analytics</h2>
            <p>
              The site uses Google Analytics and Vercel Analytics to understand
              aggregate usage patterns such as page views, device type, and
              general traffic sources. Analytics data helps improve page speed,
              content, and navigation.
            </p>

            <h2>Cookies and similar technologies</h2>
            <p>
              Analytics tools may use cookies or similar browser technologies to
              measure site usage. You can limit cookies through your browser
              settings.
            </p>

            <h2>Educational use only</h2>
            <p>
              Tax estimates are informational and are not legal, accounting, or
              professional tax advice. Always verify your situation with current
              NBR guidance or a licensed professional.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy or site questions, visit{" "}
              <a href="https://freelancer-tax-calculator.salmanizhar.com">
                freelancer-tax-calculator.salmanizhar.com
              </a>
              .
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
