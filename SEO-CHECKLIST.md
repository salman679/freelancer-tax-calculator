# SEO Implementation Checklist

Last updated: May 3, 2026

## Completed In Code

### Search And Indexing

- [x] Google Search Console verification meta tag is configured in `src/app/layout.tsx`
- [x] Live domain is configured as `https://freelancer-tax-calculator.salmanizhar.com`
- [x] Canonical URLs are route-specific for homepage, calculator, blog, articles, and privacy page
- [x] `sitemap.xml` includes homepage, calculator, blog index, privacy page, and all current blog articles
- [x] `robots.txt` points to the live sitemap

### Metadata And Social Sharing

- [x] Default metadata is centralized in `src/lib/seo.ts`
- [x] Homepage metadata is exported from a server page
- [x] Calculator metadata includes canonical, Open Graph, and Twitter card data
- [x] Blog index metadata includes canonical, Open Graph, and Twitter card data
- [x] Blog article metadata is generated from the shared article list
- [x] OG image is configured at `public/og-image.svg`
- [x] Twitter image is configured at `public/twitter-image.svg`
- [x] SVG app icon is configured through `src/app/icon.svg` and `manifest.ts`

### Structured Data

- [x] WebSite schema
- [x] Organization schema
- [x] SoftwareApplication schema
- [x] FAQPage schema on the calculator page
- [x] ItemList schema on the blog index
- [x] BlogPosting schema on every blog article
- [x] BreadcrumbList schema on calculator, blog index, and every blog article

### Analytics

- [x] Google Analytics 4 tag configured with measurement ID `G-VJV7PD83VN`
- [x] Vercel Analytics is enabled

### Technical SEO And Trust

- [x] Security headers include HSTS, Permissions-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and CSP
- [x] Privacy policy page added at `/privacy`
- [x] Footer privacy link points to `/privacy`
- [x] PWA manifest includes app shortcuts for calculator and guides
- [x] Decorative icons used in updated areas are hidden from assistive tech

## Manual Setup Required

### Google Search Console

- [ ] Add property: `https://freelancer-tax-calculator.salmanizhar.com`
- [ ] Submit sitemap: `https://freelancer-tax-calculator.salmanizhar.com/sitemap.xml`
- [ ] Request indexing for `/`, `/calculator`, `/blog`, and article URLs
- [ ] Monitor indexing, Core Web Vitals, and rich result enhancements

### Social Media Accounts

- [ ] Create Facebook page for Freelancer Tax Calculator
- [ ] Create Twitter/X account for Freelancer Tax Calculator
- [ ] Add real social profile URLs to `organizationSchema.sameAs` after the accounts exist

### External Distribution

- [ ] Submit to relevant Bangladesh freelancer and business directories
- [ ] Share the calculator in relevant freelancer communities
- [ ] Pitch existing tax guides to Bangladesh tech/freelance blogs
- [ ] Track backlinks and referral traffic monthly

## Content Status

### Published Or Implemented

- [x] Freelancer income tax beginner guide
- [x] Fiverr income tax guide
- [x] Upwork income tax guide
- [x] Freelancer tax filing guide
- [x] TIN guide for freelancers
- [x] Freelancer tax record-keeping guide
- [x] Complete freelancer tax guide
- [x] FAQ section on the calculator page

### Still Worth Creating

- [ ] Bangladesh tax deductions for freelancers
- [ ] Freelancer tax planning strategies Bangladesh
- [ ] Common tax mistakes freelancers make in Bangladesh
- [ ] Quarterly tax payment guide for freelancers
- [ ] Downloadable PDF tax guide
- [ ] Tax calendar/deadline reminder page
- [ ] Bengali-language version of the core calculator guide

## Ongoing Checks

- [ ] Run Google PageSpeed Insights after deployment
- [ ] Validate JSON-LD with Google Rich Results Test
- [ ] Confirm Google Analytics receives live traffic
- [ ] Check mobile layout after deployment
- [ ] Review Search Console weekly for indexing or schema warnings
- [ ] Refresh tax-year-sensitive content when NBR rules change
