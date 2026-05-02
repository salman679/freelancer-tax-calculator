import type { Metadata } from "next";

export const siteConfig = {
  name: "Freelancer Tax Calculator",
  shortName: "Freelancer Tax",
  url: "https://freelancer-tax-calculator.salmanizhar.com",
  description:
    "Bangladesh-focused freelancer tax calculator and guide. Estimate income tax, understand filing needs, and get practical tips for freelancers earning locally or abroad.",
  locale: "en_US",
  ogImage: "/og-image.svg",
  twitterImage: "/twitter-image.svg",
};

export const defaultKeywords = [
  "freelancing income tax in bangladesh",
  "freelancer tax calculator in bangladesh",
  "income tax calculator for freelancers",
  "tax for freelancers bangladesh",
  "bangladesh freelancer tax guide",
  "freelancer income tax bd",
];

export const blogArticles = [
  {
    slug: "freelancer-income-tax-bangladesh-2025-guide",
    title: "Freelancer Income Tax in Bangladesh (2025): Simple Guide",
    metadataTitle:
      "Freelancer Income Tax in Bangladesh (2025): Simple Guide for Beginners",
    description:
      "A beginner-friendly guide to freelancer income tax in Bangladesh for 2025. Learn what counts as income, how to track expenses, and how to estimate taxes using a calculator.",
    category: "Beginner Guide",
    datePublished: "2025-01-05",
    dateModified: "2025-01-05",
    readTime: "10 min read",
  },
  {
    slug: "fiverr-income-tax-bangladesh",
    title: "Fiverr Income Tax in Bangladesh: Practical Guide",
    metadataTitle:
      "Fiverr Income Tax in Bangladesh: A Practical Guide for Freelancers",
    description:
      "Learn how Fiverr income is treated for freelancers in Bangladesh. Track earnings, estimate taxes in BDT, and prepare for filing with a simple checklist.",
    category: "Platform Guide",
    datePublished: "2025-01-05",
    dateModified: "2025-01-05",
    readTime: "9 min read",
  },
  {
    slug: "upwork-income-tax-bangladesh",
    title: "Upwork Income Tax in Bangladesh: Checklist & Examples",
    metadataTitle: "Upwork Income Tax in Bangladesh: Checklist & Examples (2025)",
    description:
      "A clear, Bangladesh-specific guide to Upwork income tax. Learn how to track earnings, estimate taxes in BDT, and prepare documents for filing.",
    category: "Platform Guide",
    datePublished: "2025-01-05",
    dateModified: "2025-01-05",
    readTime: "9 min read",
  },
  {
    slug: "tin-for-freelancers-bangladesh",
    title: "How to Get a TIN in Bangladesh for Freelancers",
    metadataTitle: "How to Get a TIN in Bangladesh for Freelancers (Simple Steps)",
    description:
      "A clear, Bangladesh-specific guide to getting a TIN for freelancers. Learn why it matters, what documents to prepare, and how it supports tax filing.",
    category: "Compliance",
    datePublished: "2025-01-05",
    dateModified: "2025-01-05",
    readTime: "8 min read",
  },
  {
    slug: "freelancer-tax-records-bangladesh",
    title: "Freelancer Tax Records in Bangladesh: Simple Bookkeeping",
    metadataTitle:
      "Freelancer Tax Records in Bangladesh: Simple Bookkeeping for Income Tax",
    description:
      "A practical guide to record-keeping for Bangladesh freelancers. Learn how to track income, expenses, and invoices to prepare for income tax filing.",
    category: "Planning",
    datePublished: "2025-01-05",
    dateModified: "2025-01-05",
    readTime: "9 min read",
  },
  {
    slug: "freelancer-tax-filing-bangladesh",
    title: "How to File Income Tax as a Freelancer in Bangladesh",
    metadataTitle:
      "How to File Income Tax as a Freelancer in Bangladesh: Documents & Timeline",
    description:
      "A step-by-step Bangladesh guide for freelancer tax filing. Learn which documents to collect, how to estimate tax, and how to prepare for deadlines.",
    category: "Filing Guide",
    datePublished: "2025-01-05",
    dateModified: "2025-01-05",
    readTime: "10 min read",
  },
  {
    slug: "freelancer-tax-guide-bangladesh",
    title: "Complete Freelancer Tax Guide for Bangladesh",
    metadataTitle:
      "Complete Freelancer Tax Guide Bangladesh 2024 | NBR Tax Rates & Filing",
    description:
      "Ultimate guide to freelancer taxes in Bangladesh. Learn NBR tax slabs, filing requirements, deductions, tax-free thresholds, and how to calculate income tax on freelance earnings.",
    category: "Tax Guide",
    datePublished: "2024-01-01",
    dateModified: "2025-01-05",
    readTime: "10 min read",
  },
] as const;

export type BlogArticle = (typeof blogArticles)[number];
export type BlogSlug = BlogArticle["slug"];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getBlogArticle(slug: BlogSlug) {
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    throw new Error(`Unknown blog article: ${slug}`);
  }

  return article;
}

export function createMetadata({
  title,
  description,
  path,
  keywords = defaultKeywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: "Freelancer Tax Calculator in Bangladesh",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.twitterImage)],
    },
  };
}

export function createArticleMetadata(slug: BlogSlug): Metadata {
  const article = getBlogArticle(slug);
  const url = absoluteUrl(`/blog/${article.slug}`);

  return {
    ...createMetadata({
      title: article.metadataTitle,
      description: article.description,
      path: `/blog/${article.slug}`,
    }),
    openGraph: {
      title: article.metadataTitle,
      description: article.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [siteConfig.name],
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/calculator?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.ogImage),
  description:
    "Educational resource for freelancers in Bangladesh to estimate income tax and understand filing basics.",
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  url: siteConfig.url,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BDT",
  },
};

export function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createArticleSchema(slug: BlogSlug) {
  const article = getBlogArticle(slug);
  const articleUrl = absoluteUrl(`/blog/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.metadataTitle,
    description: article.description,
    image: absoluteUrl(siteConfig.ogImage),
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.ogImage),
      },
    },
  };
}
