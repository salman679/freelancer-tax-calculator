import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";
import {
  defaultKeywords,
  organizationSchema,
  siteConfig,
  softwareApplicationSchema,
  websiteSchema,
} from "@/lib/seo";
import "./globals.css";

const gaMeasurementId = "G-VJV7PD83VN";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title:
    "Freelancer Tax Calculator Bangladesh | Income Tax Estimator for Freelancers",
  description: siteConfig.description,
  keywords: defaultKeywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "Finance",
  openGraph: {
    title: "Freelancer Tax Calculator in Bangladesh",
    description:
      "Estimate freelancer income tax in Bangladesh with a practical guide, examples, and FAQs.",
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Freelancer Tax Calculator in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Tax Calculator in Bangladesh",
    description:
      "Bangladesh freelancer tax calculator with a guide, examples, and FAQs.",
    images: [siteConfig.twitterImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "eurpip2QfDhrSYVhYNM7A0nnz7QOMd6prQqE7IfUqAQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <JsonLd id="website-schema" data={websiteSchema} />
        <JsonLd id="organization-schema" data={organizationSchema} />
        <JsonLd
          id="software-application-schema"
          data={softwareApplicationSchema}
        />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="min-h-screen bg-gray-50" suppressHydrationWarning={true}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `,
          }}
        />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
