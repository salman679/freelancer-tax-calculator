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
  {
    frame: "border-[#a8dcc3] bg-[#e8f7ef] text-[#0f6b43]",
    chip: "bg-[#d9f3e6] text-[#0f6b43]",
    line: "bg-[#14935f]",
  },
  {
    frame: "border-[#a9c9ee] bg-[#e8f1fb] text-[#125a94]",
    chip: "bg-[#d9eafa] text-[#125a94]",
    line: "bg-[#1f74b7]",
  },
  {
    frame: "border-[#edcf8f] bg-[#fff4d8] text-[#8a570f]",
    chip: "bg-[#f9e7b7] text-[#8a570f]",
    line: "bg-[#c77810]",
  },
  {
    frame: "border-[#d2c1f0] bg-[#f0eafb] text-[#5f3aa3]",
    chip: "bg-[#e4d8f8] text-[#5f3aa3]",
    line: "bg-[#7a4fd1]",
  },
  {
    frame: "border-[#e9b9c5] bg-[#fff0f3] text-[#9b3651]",
    chip: "bg-[#f8dce4] text-[#9b3651]",
    line: "bg-[#c44d68]",
  },
  {
    frame: "border-[#a7dce3] bg-[#e8f8fa] text-[#0d6873]",
    chip: "bg-[#d7f0f3] text-[#0d6873]",
    line: "bg-[#168996]",
  },
  {
    frame: "border-[#b8d99f] bg-[#eff8e6] text-[#4f7418]",
    chip: "bg-[#e0f0d2] text-[#4f7418]",
    line: "bg-[#75a925]",
  },
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
    detail: "Grouped by real freelancer tasks",
  },
  {
    value: "30s",
    label: "Calculator",
    detail: "Read, estimate, then prepare",
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
      className={`relative overflow-hidden border ${style.frame} ${
        size === "large" ? "min-h-[260px]" : "aspect-[16/10]"
      }`}
    >
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(15,23,42,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.08)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute left-5 top-5 font-serif text-6xl leading-none text-slate-950/10 sm:text-7xl">
        {articleNumber}
      </div>
      <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-lg border border-current/20 bg-white/70 shadow-sm">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/70 bg-white/72 p-4 shadow-[0_16px_35px_-28px_rgba(15,23,42,0.5)] backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase ${style.chip}`}
          >
            {article.category}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {article.readTime}
          </span>
        </div>
        <div className="mt-4 space-y-2">
          <span className={`block h-1.5 w-2/3 rounded-full ${style.line}`} />
          <span className="block h-1.5 w-full rounded-full bg-slate-900/10" />
          <span className="block h-1.5 w-5/6 rounded-full bg-slate-900/10" />
        </div>
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
      className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14935f] focus-visible:ring-offset-2"
    >
      <article className="grid h-full overflow-hidden rounded-lg border border-[#d9cfbd] bg-[#fffdf7] shadow-[0_24px_70px_-42px_rgba(54,45,30,0.55)] transition duration-200 hover:-translate-y-1 hover:border-[#14935f]/50 hover:shadow-[0_30px_80px_-42px_rgba(54,45,30,0.68)] lg:grid-cols-[0.86fr_1.14fr]">
        <ArticleVisual article={article} index={index} size="large" />
        <div className="flex flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <span className="font-serif text-5xl leading-none text-[#14935f]">
              {articleNumber}
            </span>
            <span className="rounded-full border border-[#d9cfbd] bg-[#f6efdf] px-3 py-1.5 text-xs font-bold uppercase text-[#6b5735]">
              Priority read
            </span>
          </div>
          <h2 className="mt-7 text-2xl font-bold leading-tight text-slate-950 transition-colors group-hover:text-[#0f6b43] sm:text-3xl">
            {article.title}
          </h2>
          <p className="mt-4 flex-1 leading-7 text-slate-600">
            {article.description}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#e4dac8] pt-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {formatDisplayDate(article.dateModified)}
            </span>
            <span className="inline-flex items-center gap-1.5 font-bold text-[#0f6b43]">
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
      className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14935f] focus-visible:ring-offset-2"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-[#ded3c0] bg-[#fffdf8] shadow-[0_18px_50px_-38px_rgba(54,45,30,0.45)] transition duration-200 hover:-translate-y-1 hover:border-[#14935f]/45 hover:shadow-[0_28px_70px_-44px_rgba(54,45,30,0.62)]">
        <ArticleVisual article={article} index={index} />
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <span className="font-serif text-4xl leading-none text-slate-950/20">
              {articleNumber}
            </span>
            <span className="rounded-full border border-[#ded3c0] bg-[#f6efdf] px-3 py-1 text-xs font-bold text-[#6b5735]">
              {article.category}
            </span>
          </div>
          <h3 className="mt-5 text-xl font-bold leading-snug text-slate-950 transition-colors group-hover:text-[#0f6b43]">
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">
            {article.description}
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-[#e4dac8] pt-4 text-xs text-slate-600">
            <span>{article.readTime}</span>
            <span className="inline-flex items-center gap-1 font-bold text-[#0f6b43]">
              Read
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function ReadingDesk() {
  const deskArticles = blogArticles.slice(0, 4);

  return (
    <div className="relative overflow-hidden rounded-lg border border-[#d8c9ad] bg-[#fffdf7] p-5 shadow-[0_28px_80px_-48px_rgba(54,45,30,0.65)]">
      <div className="absolute inset-x-0 top-0 h-2 bg-[repeating-linear-gradient(90deg,#14935f_0_56px,#f0b747_56px_84px,#1f74b7_84px_140px)]" />
      <div className="mt-3 flex items-center justify-between border-b border-[#e4dac8] pb-4">
        <div>
          <p className="text-xs font-bold uppercase text-[#7a6846]">
            Reading order
          </p>
          <h2 className="mt-1 text-xl font-bold text-slate-950">
            Start here before filing
          </h2>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#10251d] text-white">
          <Calculator className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {deskArticles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group grid grid-cols-[3rem_1fr] gap-3 rounded-lg border border-transparent p-2 transition hover:border-[#d8c9ad] hover:bg-[#f8f0df]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#d8c9ad] bg-[#f6efdf] font-serif text-xl text-[#0f6b43]">
              {getArticleNumber(index)}
            </span>
            <span>
              <span className="block text-sm font-bold leading-5 text-slate-950 group-hover:text-[#0f6b43]">
                {article.title}
              </span>
              <span className="mt-1 block text-xs font-semibold text-slate-500">
                {article.category} · {article.readTime}
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
    <div className="bg-[#f3ead9] text-slate-950">
      <section className="relative overflow-hidden border-b border-[#d8c9ad] bg-[#f7f1e6] py-14 lg:py-20">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(54,45,30,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(54,45,30,.07)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="container-custom relative">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-[#d8c9ad] bg-[#fffdf7] px-4 py-2 text-sm font-bold text-[#0f6b43] shadow-sm">
                Bangladesh freelancer tax library
              </span>
              <h1 className="mt-6 max-w-4xl font-serif text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
                Numbered tax guides for freelancers who need a filing plan.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                Read the guides in order, jump to your platform, then use the
                calculator with the records you have already prepared.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#articles"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#10251d] px-5 text-sm font-bold text-white transition hover:bg-[#183a2e]"
                >
                  Browse numbered guides
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#bdaa8b] bg-[#fffdf7] px-5 text-sm font-bold text-[#5c4828] transition hover:border-[#0f6b43] hover:text-[#0f6b43]"
                >
                  Open calculator
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {guideStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-[#d8c9ad] bg-[#fffdf7]/82 p-4 shadow-sm"
                  >
                    <div className="font-serif text-4xl font-bold leading-none text-[#0f6b43]">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-bold text-slate-950">
                      {stat.label}
                    </div>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ReadingDesk />
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-20 border-b border-[#d8c9ad] bg-[#fffdf7]/94 py-4 backdrop-blur">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categoryTabs.map((item) => (
              <button
                key={item.category}
                type="button"
                onClick={() => setSelectedCategory(item.category)}
                className={`min-h-[44px] shrink-0 cursor-pointer rounded-lg border px-3 text-sm font-bold transition ${
                  selectedCategory === item.category
                    ? "border-[#10251d] bg-[#10251d] text-white"
                    : "border-[#d8c9ad] bg-[#f8f0df] text-[#5c4828] hover:border-[#0f6b43] hover:text-[#0f6b43]"
                }`}
              >
                <span>{item.category}</span>
                <span className="ml-2 font-serif text-base">
                  {String(item.count).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory === "All" && (
        <section className="border-b border-[#d8c9ad] bg-[#efe3cf] py-14 lg:py-20">
          <div className="container-custom">
            <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase text-[#0f6b43]">
                  First two reads
                </p>
                <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-slate-950">
                  Build the baseline before choosing platform-specific advice.
                </h2>
              </div>
              <p className="max-w-2xl leading-7 text-slate-700 lg:justify-self-end">
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

      <section id="articles" className="bg-[#f7f1e6] py-14 lg:py-20">
        <div className="container-custom">
          <div className="flex flex-col gap-4 border-b border-[#d8c9ad] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-[#0f6b43]">
                Article index
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold tracking-normal text-slate-950">
                {selectedCategory === "All"
                  ? "Every guide, numbered by reading priority"
                  : `${selectedCategory} guides`}
              </h2>
              <p className="mt-3 text-slate-700">
                Showing {String(filteredArticles.length).padStart(2, "0")} of{" "}
                {String(blogArticles.length).padStart(2, "0")} guides.
              </p>
            </div>
            {selectedCategory !== "All" && (
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className="min-h-[44px] cursor-pointer rounded-lg border border-[#d8c9ad] bg-[#fffdf7] px-4 text-sm font-bold text-[#5c4828] transition hover:border-[#0f6b43] hover:text-[#0f6b43]"
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

      <section className="border-t border-[#d8c9ad] bg-[#10251d] py-14 text-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase text-[#9de0bf]">
                Next step
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight">
                Finished a guide? Turn the numbers into an estimate.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/72">
                Use your platform income, expenses, and records to check filing
                risk before you prepare the full return.
              </p>
            </div>
            <Link
              href="/calculator"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#f0b747] px-5 text-sm font-bold text-[#10251d] transition hover:bg-[#ffd26c]"
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
