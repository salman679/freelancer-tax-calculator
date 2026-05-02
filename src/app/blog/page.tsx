import type { Metadata } from "next";
import BlogIndexClient from "@/components/BlogIndexClient";
import { JsonLd } from "@/components/JsonLd";
import { SiteNavbar } from "@/components/SiteNavbar";
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

      <SiteNavbar />
      <BlogIndexClient />
    </div>
  );
}
