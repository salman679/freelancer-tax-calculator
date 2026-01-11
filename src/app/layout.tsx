import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Bangladesh Freelancer Tax Calculator 2024 | Income Tax Calculator BD | Free Tax Estimator",
  description:
    "Free Bangladesh freelancer tax calculator 2024. Calculate income tax for Fiverr, Upwork & freelance earnings. Instant tax estimation, filing requirements & NBR tax slab calculator. Get accurate tax calculations in 30 seconds.",
  keywords: [
    "bangladesh tax calculator",
    "freelancer tax calculator bangladesh",
    "income tax calculator bangladesh",
    "tax calculator bd",
    "nbr tax calculator",
    "freelancer income tax bd",
    "fiverr tax bangladesh",
    "upwork tax calculator bangladesh",
    "bangladesh tax slab 2024",
    "freelance tax bd",
    "self employed tax bangladesh",
    "online income tax bangladesh",
    "tax return bangladesh",
    "nbr tax filing",
    "bangladesh income tax rate",
    "freelancer tax rate bangladesh",
    "how to calculate tax in bangladesh",
    "tax exemption bangladesh",
    "tax planning bangladesh",
    "freelancer tax guide bangladesh",
  ].join(", "),
  authors: [{ name: "FreelancerTax.BD" }],
  creator: "FreelancerTax.BD",
  publisher: "FreelancerTax.BD",
  applicationName: "FreelancerTax.BD",
  category: "Finance",
  classification: "Tax Calculator",
  openGraph: {
    title:
      "Bangladesh Freelancer Tax Calculator 2024 | Free Income Tax Estimator",
    description:
      "Calculate your freelancer tax in Bangladesh instantly. Free tax calculator for Fiverr, Upwork & online income. Get accurate NBR tax estimates, filing requirements & detailed tax breakdowns.",
    type: "website",
    locale: "en_US",
    url: "https://freelancertax.bd",
    siteName: "FreelancerTax.BD",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bangladesh Freelancer Tax Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bangladesh Freelancer Tax Calculator 2024 | Free Tax Estimator",
    description:
      "Calculate freelancer tax in Bangladesh. Free income tax calculator for Fiverr, Upwork earnings. Instant NBR tax estimates & filing requirements.",
    images: ["/twitter-image.png"],
    creator: "@FreelancerTaxBD",
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
    canonical: "https://freelancertax.bd",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FreelancerTax.BD - Bangladesh Freelancer Tax Calculator",
    description:
      "Free online tax calculator for Bangladesh freelancers. Calculate income tax for Fiverr, Upwork and freelance earnings instantly.",
    url: "https://freelancertax.bd",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BDT",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1000",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "FreelancerTax.BD",
      url: "https://freelancertax.bd",
    },
    provider: {
      "@type": "Organization",
      name: "FreelancerTax.BD",
      url: "https://freelancertax.bd",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FreelancerTax.BD",
    url: "https://freelancertax.bd",
    logo: "https://freelancertax.bd/logo.png",
    description:
      "Bangladesh's leading freelancer tax calculator. Free income tax estimation for freelancers, Fiverr sellers, and Upwork workers.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: "Dhaka",
    },
    sameAs: [
      "https://facebook.com/freelancertaxbd",
      "https://twitter.com/freelancertaxbd",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to calculate freelancer tax in Bangladesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use our free tax calculator to estimate your freelancer tax in Bangladesh. Enter your annual income, select income source (foreign/local), add business expenses, and get instant tax calculations based on NBR tax slabs.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to pay tax on Fiverr income in Bangladesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if your annual Fiverr income exceeds the tax-free threshold (৳3,50,000 for individuals), you need to pay income tax in Bangladesh and file a tax return with NBR.",
        },
      },
      {
        "@type": "Question",
        name: "What is the tax rate for freelancers in Bangladesh 2024?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bangladesh freelancer tax rates follow NBR income tax slabs ranging from 0% to 30%. The first ৳3,50,000 is tax-free, then progressive rates apply: 5% up to ৳4,50,000, 10% up to ৳7,50,000, 15% up to ৳11,50,000, 20% up to ৳16,50,000, and 25-30% above that.",
        },
      },
      {
        "@type": "Question",
        name: "Is this tax calculator free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our basic tax calculator is 100% free. Get instant tax estimates, filing requirements, and risk assessment without any signup. Create a free account to unlock detailed tax breakdowns and planning guides.",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <link rel="canonical" href="https://freelancertax.bd" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="min-h-screen bg-gray-50" suppressHydrationWarning={true}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
