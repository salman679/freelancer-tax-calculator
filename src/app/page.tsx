import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title:
    "Freelancer Tax Calculator Bangladesh | Income Tax Estimator for Freelancers",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return <HomePageClient />;
}
