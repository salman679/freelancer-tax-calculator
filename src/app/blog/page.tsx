import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Freelancer Tax Guides Bangladesh | Income Tax Tips & Resources",
  description:
    "Bangladesh-focused freelancer tax guides covering income tax basics, TIN steps, record-keeping, and platform-specific tips for Upwork and Fiverr.",
  keywords:
    "freelancer tax guide bangladesh, income tax for freelancers, upwork tax bangladesh, fiverr tax bangladesh, tin guide bangladesh, freelancer tax tips",
};

export default function BlogPage() {
  const articles = [
    {
      slug: "freelancer-income-tax-bangladesh-2025-guide",
      title: "Freelancer Income Tax in Bangladesh (2025): Simple Guide",
      excerpt:
        "A beginner-friendly overview of what counts as income, how to track expenses, and how to estimate freelancer income tax in Bangladesh.",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Beginner Guide",
    },
    {
      slug: "fiverr-income-tax-bangladesh",
      title: "Fiverr Income Tax in Bangladesh: Practical Guide",
      excerpt:
        "Learn how to track Fiverr earnings in BDT, document expenses, and estimate taxes before filing season.",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "Platform Guide",
    },
    {
      slug: "upwork-income-tax-bangladesh",
      title: "Upwork Income Tax in Bangladesh: Checklist & Examples",
      excerpt:
        "A clear checklist for Upwork freelancers, with examples and steps to estimate tax and prepare records.",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "Platform Guide",
    },
    {
      slug: "tin-for-freelancers-bangladesh",
      title: "How to Get a TIN in Bangladesh for Freelancers",
      excerpt:
        "Simple steps and preparation notes for freelancers applying for a TIN in Bangladesh.",
      date: "2025-01-05",
      readTime: "8 min read",
      category: "Compliance",
    },
    {
      slug: "freelancer-tax-records-bangladesh",
      title: "Freelancer Tax Records in Bangladesh: Simple Bookkeeping",
      excerpt:
        "A practical guide to tracking income, expenses, and invoices so tax filing becomes easier.",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "Planning",
    },
    {
      slug: "freelancer-tax-filing-bangladesh",
      title: "How to File Income Tax as a Freelancer in Bangladesh",
      excerpt:
        "A step-by-step filing timeline with document checklists and tips for organizing your tax season.",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Filing Guide",
    },
    {
      slug: "freelancer-tax-guide-bangladesh",
      title: "Complete Freelancer Tax Guide for Bangladesh",
      excerpt:
        "Core overview of freelancer tax responsibilities, filing guidance, and planning notes for Bangladesh.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Tax Guide",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="py-4 container-custom">
          <Link
            href="/"
            className="font-semibold text-primary-600 hover:text-primary-700"
          >
            ← Back to Calculator
          </Link>
        </div>
      </header>

      <section className="py-16 text-white bg-gradient-to-br from-primary-600 to-purple-600">
        <div className="text-center container-custom">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            Freelancer Tax Guides for Bangladesh
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-primary-100">
            Practical, Bangladesh-specific resources to help freelancers plan
            income tax, track earnings, and file with confidence.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="p-6 transition-shadow card hover:shadow-xl"
              >
                <div className="flex items-center mb-3 space-x-2 text-sm text-primary-600">
                  <FileText className="w-4 h-4" />
                  <span className="font-medium">{article.category}</span>
                </div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  {article.title}
                </h2>
                <p className="mb-4 text-gray-600">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
