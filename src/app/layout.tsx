import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const baseUrl = "https://freelancer-tax-calculator.salmanizhar.com";

export const metadata: Metadata = {
  title:
    "Freelancer Tax Calculator Bangladesh | Income Tax Estimator for Freelancers",
  description:
    "Bangladesh-focused freelancer tax calculator and guide. Estimate income tax, understand filing needs, and get practical tips for freelancers earning locally or abroad.",
  keywords: [
    "freelancing income tax in bangladesh",
    "freelancer tax calculator in bangladesh",
    "income tax calculator for freelancers",
    "tax for freelancers bangladesh",
    "bangladesh freelancer tax guide",
    "freelancer income tax bd",
  ].join(", "),
  authors: [{ name: "Freelancer Tax Calculator" }],
  creator: "Freelancer Tax Calculator",
  publisher: "Freelancer Tax Calculator",
  applicationName: "Freelancer Tax Calculator",
  category: "Finance",
  openGraph: {
    title: "Freelancer Tax Calculator in Bangladesh",
    description:
      "Estimate freelancer income tax in Bangladesh with a practical guide, examples, and FAQs.",
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Freelancer Tax Calculator",
    images: [
      {
        url: `${baseUrl}/og-image.svg`,
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
    images: [`${baseUrl}/twitter-image.svg`],
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
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Freelancer Tax Calculator",
    url: baseUrl,
    description:
      "Bangladesh-focused freelancer tax calculator and educational guide for estimating income tax.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/calculator?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Freelancer Tax Calculator",
    url: baseUrl,
    logo: `${baseUrl}/og-image.svg`,
    description:
      "Educational resource for freelancers in Bangladesh to estimate income tax and understand filing basics.",
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="canonical" href={baseUrl} />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="min-h-screen bg-gray-50" suppressHydrationWarning={true}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
