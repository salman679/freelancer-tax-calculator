import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";
import BlogIndexClient from "@/components/BlogIndexClient";
import { JsonLd } from "@/components/JsonLd";
import {
  absoluteUrl,
  blogArticles,
  createBreadcrumbSchema,
  createMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Freelancer Tax Guides Bangladesh | Income Tax Tips & Resources",
  description:
    "Bangladesh-focused freelancer tax guides covering income tax basics, TIN steps, record-keeping, and platform-specific tips for Upwork and Fiverr.",
  path: "/blog",
  keywords: [
    "freelancer tax guide bangladesh",
    "income tax for freelancers",
    "upwork tax bangladesh",
    "fiverr tax bangladesh",
    "tin guide bangladesh",
    "freelancer tax tips",
  ],
});

export default function BlogPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/blog/${article.slug}`),
      name: article.title,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd id="blog-list-schema" data={itemListSchema} />
      <JsonLd
        id="blog-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <header className="border-b border-[#d8c9ad] bg-[#fffdf7]">
        <div className="container-custom flex items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-3 rounded-lg text-sm font-bold text-[#10251d] transition hover:text-[#0f6b43]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10251d] text-white">
              <Calculator className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block leading-tight">FreelancerTax.BD</span>
              <span className="block text-xs font-semibold text-slate-500">
                Tax guide library
              </span>
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#d8c9ad] bg-[#f8f0df] px-4 text-sm font-bold text-[#5c4828] transition hover:border-[#0f6b43] hover:text-[#0f6b43]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Calculator
          </Link>
        </div>
      </header>
      <BlogIndexClient />
    </div>
  );
}
