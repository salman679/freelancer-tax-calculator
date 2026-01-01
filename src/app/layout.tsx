import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelancer Tax Calculator Bangladesh | Calculate Your Tax Obligation",
  description:
    "Free tax calculator for Bangladesh freelancers. Estimate your income tax, check filing requirements, and get detailed tax breakdowns. Works with Fiverr, Upwork, and direct client income.",
  keywords:
    "freelancer tax calculator bangladesh, freelancer income tax bd, tax for freelancers bangladesh, bangladesh freelancer tax, upwork tax bd, fiverr tax bangladesh",
  authors: [{ name: "Tax Calculator BD" }],
  openGraph: {
    title: "Freelancer Tax Calculator Bangladesh",
    description:
      "Calculate your freelancer tax obligation in Bangladesh. Free estimates with detailed paid reports.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Tax Calculator Bangladesh",
    description:
      "Calculate your freelancer tax obligation in Bangladesh. Free estimates with detailed paid reports.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="min-h-screen bg-gray-50" suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  );
}
