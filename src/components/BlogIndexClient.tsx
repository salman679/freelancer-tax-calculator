"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Calendar,
  Calculator,
  ClipboardList,
  Database,
  FileText,
  ReceiptText,
} from "lucide-react";
import { type BlogArticle, blogArticles } from "@/lib/seo";

const visualStyles = [
  "from-primary-100 via-blue-50 to-white text-primary-700 border-primary-100",
  "from-purple-100 via-indigo-50 to-white text-purple-700 border-purple-100",
  "from-success-100 via-green-50 to-white text-success-600 border-success-100",
  "from-warning-100 via-yellow-50 to-white text-warning-600 border-warning-100",
  "from-danger-100 via-red-50 to-white text-danger-600 border-danger-100",
  "from-cyan-100 via-sky-50 to-white text-cyan-700 border-cyan-100",
  "from-slate-100 via-gray-50 to-white text-slate-700 border-slate-200",
];

const iconBySlug = {
  "freelancer-income-tax-bangladesh-2025-guide": Calculator,
  "fiverr-income-tax-bangladesh": ReceiptText,
  "upwork-income-tax-bangladesh": ClipboardList,
  "tin-for-freelancers-bangladesh": BadgeCheck,
  "freelancer-tax-records-bangladesh": Database,
  "freelancer-tax-filing-bangladesh": FileText,
  "freelancer-tax-guide-bangladesh": BookOpen,
} satisfies Record<BlogArticle["slug"], typeof Calculator>;

const guideStats = [
  {
    value: "07",
    label: "Guides",
    detail: "Income, TIN, records, filing",
  },
  {
    value: "05",
    label: "Tax topics",
    detail: "Grouped by freelancer tasks",
  },
  {
    value: "30s",
    label: "Calculator",
    detail: "Read, estimate, prepare",
  },
];

function formatDisplayDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function getArticleNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function ArticleVisual({
  article,
  index,
  size = "default",
}: {
  article: BlogArticle;
  index: number;
  size?: "default" | "large";
}) {
  const Icon = iconBySlug[article.slug];
  const style = visualStyles[index % visualStyles.length];
  const articleNumber = getArticleNumber(index);

  return (
    <div
      className={`relative overflow-hidden border bg-gradient-to-br ${style} ${
        size === "large" ? "min-h-[250px]" : "aspect-[16/10]"
      }`}
    >
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_16px_16px,rgba(255,255,255,.9)_2px,transparent_2px)] [background-size:30px_30px]" />
      <div className="absolute left-5 top-5 text-5xl font-bold leading-none text-slate-950/10 sm:text-6xl">
        {articleNumber}
      </div>
      <div className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-lg bg-white/85 shadow-sm">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-700 shadow-sm">
            {article.category}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {article.readTime}
          </span>
        </div>
        <p className="mt-4 max-w-[14rem] text-lg font-bold leading-tight text-slate-950">
          Bangladesh freelancer tax guide
        </p>
      </div>
    </div>
  );
}

function FeaturedArticleCard({
  article,
  index,
}: {
  article: BlogArticle;
  index: number;
}) {
  const articleNumber = getArticleNumber(index);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
    >
      <article className="grid h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition duration-200 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
        <ArticleVisual article={article} index={index} size="large" />
        <div className="flex flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <span className="text-4xl font-bold leading-none text-primary-600">
              {articleNumber}
            </span>
            <span className="rounded-full bg-primary-100 px-3 py-1.5 text-xs font-bold uppercase text-primary-700">
              Priority read
            </span>
          </div>
          <h2 className="mt-7 text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-primary-700 sm:text-3xl">
            {article.title}
          </h2>
          <p className="mt-4 flex-1 leading-7 text-gray-600">
            {article.description}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {formatDisplayDate(article.dateModified)}
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary-700">
              Open guide
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function ArticleCard({
  article,
  index,
}: {
  article: BlogArticle;
  index: number;
}) {
  const articleNumber = getArticleNumber(index);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl">
        <ArticleVisual article={article} index={index} />
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <span className="text-3xl font-bold leading-none text-primary-100">
              {articleNumber}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
              {article.category}
            </span>
          </div>
          <h3 className="mt-5 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary-700">
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-gray-600">
            {article.description}
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 text-xs text-gray-500">
            <span>{article.readTime}</span>
            <span className="inline-flex items-center gap-1 font-semibold text-primary-700">
              Read
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function ReadingPath() {
  const pathArticles = blogArticles.slice(0, 4);

  return (
    <div className="rounded-lg border border-gray-200 bg-white/80 p-5 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-primary-700">
            Reading order
          </p>
          <h2 className="mt-1 text-xl font-bold text-gray-900">
            Start here before filing
          </h2>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-purple-600 text-white">
          <Calculator className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {pathArticles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group grid grid-cols-[3rem_1fr] gap-3 rounded-lg border border-transparent p-2 transition hover:border-primary-100 hover:bg-primary-50"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-lg font-bold text-primary-700">
              {getArticleNumber(index)}
            </span>
            <span>
              <span className="block text-sm font-bold leading-5 text-gray-900 group-hover:text-primary-700">
                {article.title}
              </span>
              <span className="mt-1 block text-xs font-semibold text-gray-500">
                {article.category} - {article.readTime}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function BlogIndexClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categoryTabs = useMemo(() => {
    const categorySet = Array.from(
      new Set(blogArticles.map((item) => item.category))
    );

    return ["All", ...categorySet].map((category) => ({
      category,
      count:
        category === "All"
          ? blogArticles.length
          : blogArticles.filter((article) => article.category === category)
              .length,
    }));
  }, []);
  const filteredArticles =
    selectedCategory === "All"
      ? blogArticles
      : blogArticles.filter((article) => article.category === selectedCategory);
  const featuredArticles = blogArticles.slice(0, 2);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900">
      <section className="relative overflow-hidden border-b border-gray-200 py-14 lg:py-20">
        <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20px_20px,rgba(14,165,233,.14)_2px,transparent_2px)] [background-size:36px_36px]" />
        <div className="container-custom relative">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
                Bangladesh freelancer tax library
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Numbered tax guides for freelancers who need a filing plan.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
                Read the guides in order, jump to your platform, then use the
                calculator with the records you have already prepared.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#articles"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 text-sm font-semibold text-white transition hover:bg-primary-700"
                >
                  Browse numbered guides
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-700 transition hover:border-primary-300 hover:text-primary-700"
                >
                  Open calculator
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {guideStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-gray-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm"
                  >
                    <div className="text-3xl font-bold leading-none text-primary-600">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-bold text-gray-900">
                      {stat.label}
                    </div>
                    <p className="mt-1 text-xs leading-5 text-gray-600">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ReadingPath />
          </div>
        </div>
      </section>

      <section className="sticky top-[118px] z-20 border-b border-gray-200 bg-white/90 py-4 backdrop-blur md:top-[72px]">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categoryTabs.map((item) => (
              <button
                key={item.category}
                type="button"
                onClick={() => setSelectedCategory(item.category)}
                className={`min-h-[44px] shrink-0 cursor-pointer rounded-lg border px-3 text-sm font-semibold transition ${
                  selectedCategory === item.category
                    ? "border-primary-600 bg-primary-600 text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-primary-300 hover:text-primary-700"
                }`}
              >
                <span>{item.category}</span>
                <span className="ml-2 text-base font-bold">
                  {String(item.count).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory === "All" && (
        <section className="border-b border-gray-200 bg-white py-14 lg:py-20">
          <div className="container-custom">
            <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-primary-700">
                  First two reads
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  Build the baseline before choosing platform-specific advice.
                </h2>
              </div>
              <p className="max-w-2xl leading-7 text-gray-600 lg:justify-self-end">
                The first guides set the tax vocabulary, then the platform and
                compliance guides help you prepare numbers, TIN details, and
                documents for filing.
              </p>
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-2">
              {featuredArticles.map((article, index) => (
                <FeaturedArticleCard
                  key={article.slug}
                  article={article}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="articles" className="bg-gray-50 py-14 lg:py-20">
        <div className="container-custom">
          <div className="flex flex-col gap-4 border-b border-gray-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-primary-700">
                Article index
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {selectedCategory === "All"
                  ? "Every guide, numbered by reading priority"
                  : `${selectedCategory} guides`}
              </h2>
              <p className="mt-3 text-gray-600">
                Showing {String(filteredArticles.length).padStart(2, "0")} of{" "}
                {String(blogArticles.length).padStart(2, "0")} guides.
              </p>
            </div>
            {selectedCategory !== "All" && (
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className="min-h-[44px] cursor-pointer rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 transition hover:border-primary-300 hover:text-primary-700"
              >
                View all 07 guides
              </button>
            )}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => {
              const absoluteIndex = blogArticles.findIndex(
                (item) => item.slug === article.slug
              );

              return (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  index={absoluteIndex}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary-600 to-purple-600 py-14 text-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-primary-100">
                Next step
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                Finished a guide? Turn the numbers into an estimate.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-primary-100">
                Use your platform income, expenses, and records to check filing
                risk before you prepare the full return.
              </p>
            </div>
            <Link
              href="/calculator"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
            >
              Estimate my tax
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
