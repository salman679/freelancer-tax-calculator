import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Freelancer Tax Guide Bangladesh 2024 | NBR Tax Filing Tips & Articles",
  description:
    "Complete guide to freelancer taxes in Bangladesh. Learn about NBR tax filing, income tax rates, Fiverr & Upwork tax obligations, deductions, and tax planning strategies for 2024.",
  keywords:
    "freelancer tax guide bangladesh, nbr tax filing, fiverr tax guide, upwork tax bangladesh, freelancer tax tips, bangladesh tax planning, online income tax bd",
};

export default function BlogPage() {
  const articles = [
    {
      slug: "freelancer-tax-guide-bangladesh",
      title: "Complete Freelancer Tax Guide for Bangladesh 2024",
      excerpt:
        "Everything you need to know about paying taxes as a freelancer in Bangladesh. NBR tax slabs, filing requirements, and tax-saving strategies.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Tax Guide",
    },
    {
      slug: "fiverr-tax-bangladesh",
      title: "How to Pay Tax on Fiverr Income in Bangladesh",
      excerpt:
        "Step-by-step guide to calculating and paying tax on your Fiverr earnings. Learn about NBR requirements, tax rates, and filing procedures.",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Platform Guide",
    },
    {
      slug: "upwork-tax-bangladesh",
      title: "Upwork Tax Calculator Bangladesh: Complete Guide 2024",
      excerpt:
        "Calculate your Upwork tax obligations in Bangladesh. Understand tax rates, deductions, and how to file your tax return with NBR.",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Platform Guide",
    },
    {
      slug: "nbr-tax-filing-guide",
      title: "NBR Tax Filing Guide for Freelancers 2024",
      excerpt:
        "Complete guide to filing your tax return with NBR as a freelancer. Documents needed, deadlines, and step-by-step filing process.",
      date: "2024-01-01",
      readTime: "12 min read",
      category: "Filing Guide",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Hero */}
      <section className="py-16 text-white bg-gradient-to-br from-primary-600 to-purple-600">
        <div className="text-center container-custom">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            Freelancer Tax Guide Bangladesh
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-primary-100">
            Expert guides and tips for managing your freelancer taxes in
            Bangladesh
          </p>
        </div>
      </section>

      {/* Articles Grid */}
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
