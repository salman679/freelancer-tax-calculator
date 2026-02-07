import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://freelancer-tax-calculator.salmanizhar.com";

  const blogRoutes = [
    "freelancer-income-tax-bangladesh-2025-guide",
    "fiverr-income-tax-bangladesh",
    "upwork-income-tax-bangladesh",
    "tin-for-freelancers-bangladesh",
    "freelancer-tax-records-bangladesh",
    "freelancer-tax-filing-bangladesh",
    "freelancer-tax-guide-bangladesh",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogRoutes.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
