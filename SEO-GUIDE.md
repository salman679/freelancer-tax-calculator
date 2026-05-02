# SEO Guide - Freelancer Tax Calculator

Last updated: May 3, 2026

This project targets Bangladesh freelancers who need a fast way to estimate income tax and learn basic filing steps. The live site is:

`https://freelancer-tax-calculator.salmanizhar.com`

## Current Implementation

### Technical SEO

- Route-specific canonical URLs are generated for the homepage, calculator, blog index, blog articles, and privacy page.
- `src/app/sitemap.ts` generates a sitemap for all current public routes.
- `public/robots.txt` allows crawling and references the live sitemap.
- Security headers are configured in `next.config.js`, including CSP, HSTS, Permissions-Policy, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy.
- The PWA manifest includes the app name, description, SVG icon, and shortcuts to the calculator and guides.

### Metadata

- Shared site metadata lives in `src/lib/seo.ts`.
- Homepage metadata is emitted from a server page, while the interactive homepage UI lives in `src/components/HomePageClient.tsx`.
- Blog article metadata is generated from the shared `blogArticles` list to keep titles, descriptions, canonicals, sitemap URLs, and schema aligned.
- Open Graph and Twitter card images use:
  - `public/og-image.svg`
  - `public/twitter-image.svg`

### Structured Data

The project now includes:

- `WebSite`
- `Organization`
- `SoftwareApplication`
- `FAQPage` on `/calculator`
- `ItemList` on `/blog`
- `BlogPosting` on each article
- `BreadcrumbList` on calculator, blog index, and article pages

Validate deployed pages with Google Rich Results Test:

`https://search.google.com/test/rich-results`

### Analytics

Google Analytics 4 is configured in `src/app/layout.tsx` with measurement ID:

`G-VJV7PD83VN`

Vercel Analytics is also enabled.

## Keyword Focus

Primary keyword themes:

- freelancer tax calculator bangladesh
- income tax calculator for freelancers
- freelancing income tax in bangladesh
- fiverr income tax bangladesh
- upwork income tax bangladesh
- TIN for freelancers Bangladesh
- freelancer tax filing Bangladesh

Use Search Console data after indexing to validate which terms actually drive impressions and clicks.

## Content Map

Published pages:

- `/` - Main calculator landing page
- `/calculator` - Calculator plus long-form guide and FAQ
- `/blog` - Guide index
- `/blog/freelancer-income-tax-bangladesh-2025-guide`
- `/blog/fiverr-income-tax-bangladesh`
- `/blog/upwork-income-tax-bangladesh`
- `/blog/tin-for-freelancers-bangladesh`
- `/blog/freelancer-tax-records-bangladesh`
- `/blog/freelancer-tax-filing-bangladesh`
- `/blog/freelancer-tax-guide-bangladesh`
- `/privacy`

Recommended next content:

- Bangladesh tax deductions for freelancers
- Freelancer tax planning strategies Bangladesh
- Common tax mistakes freelancers make in Bangladesh
- Quarterly tax payment guide for freelancers
- Bengali version of the calculator guide
- Downloadable PDF tax guide

## Search Console Setup

1. Go to Google Search Console.
2. Add this property:
   `https://freelancer-tax-calculator.salmanizhar.com`
3. Verify using the HTML tag method. The verification tag is already in `src/app/layout.tsx`.
4. Submit:
   `https://freelancer-tax-calculator.salmanizhar.com/sitemap.xml`
5. Request indexing for the homepage, calculator, blog index, and every article.

## Manual Growth Work

These tasks cannot be completed only from the codebase:

- Create real Facebook and Twitter/X accounts.
- Add those profile URLs to `organizationSchema.sameAs` after they exist.
- Submit the site to relevant Bangladesh freelancer/business directories.
- Share guides in relevant communities without spam.
- Build links through guest posts, expert quotes, and partnerships.

## Ongoing SEO Checks

- Run PageSpeed Insights after deployment.
- Validate structured data with Rich Results Test.
- Watch Search Console for indexing, schema, and Core Web Vitals issues.
- Refresh tax-year-sensitive pages when NBR rules change.
- Review GA4 landing pages and Search Console query data monthly.
