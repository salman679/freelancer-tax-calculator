import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Complete Freelancer Tax Guide Bangladesh 2024 | NBR Tax Rates & Filing",
  description:
    "Ultimate guide to freelancer taxes in Bangladesh. Learn NBR tax slabs 2024, filing requirements, deductions, tax-free threshold, and how to calculate income tax on freelance earnings.",
  keywords:
    "freelancer tax guide bangladesh, nbr tax rates 2024, bangladesh tax slab, freelancer tax filing, income tax bangladesh, tax free threshold bd, freelance tax calculation",
};

export default function FreelancerTaxGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="py-4 container-custom">
          <Link
            href="/blog"
            className="font-semibold text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="inline w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>
      </header>

      <article className="py-16">
        <div className="max-w-4xl container-custom">
          <header className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              Complete Freelancer Tax Guide for Bangladesh 2024
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about paying taxes as a freelancer in
              Bangladesh
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Last updated: January 1, 2024 • 10 min read
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>Do Freelancers Need to Pay Tax in Bangladesh?</h2>
            <p>
              Yes, if you're earning money as a freelancer in Bangladesh through
              platforms like Fiverr, Upwork, or direct clients, you are required
              to pay income tax if your annual income exceeds the tax-free
              threshold of <strong>৳3,50,000</strong> (Three Lakh Fifty Thousand
              Taka).
            </p>

            <h2>Bangladesh Tax Slabs for Freelancers 2024</h2>
            <p>
              The National Board of Revenue (NBR) has set progressive tax rates
              for individual taxpayers. Here's the complete breakdown:
            </p>

            <div className="p-6 my-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="mb-4 text-xl font-bold">NBR Tax Rates 2024</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>First ৳3,50,000:</strong> Tax-Free (0%)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Next ৳1,00,000 (৳3,50,001 to ৳4,50,000):</strong> 5%
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Next ৳3,00,000 (৳4,50,001 to ৳7,50,000):</strong>{" "}
                    10%
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Next ৳4,00,000 (৳7,50,001 to ৳11,50,000):</strong>{" "}
                    15%
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Next ৳5,00,000 (৳11,50,001 to ৳16,50,000):</strong>{" "}
                    20%
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Above ৳16,50,000:</strong> 25-30%
                  </span>
                </li>
              </ul>
            </div>

            <h2>How to Calculate Your Freelancer Tax</h2>
            <p>
              Use our{" "}
              <Link
                href="/"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                free tax calculator
              </Link>{" "}
              to get instant estimates. The calculation follows these steps:
            </p>
            <ol>
              <li>
                Calculate your total annual income from all freelance sources
              </li>
              <li>
                Subtract legitimate business expenses (equipment, software,
                internet, etc.)
              </li>
              <li>Apply the progressive tax rates based on NBR slabs</li>
              <li>Get your total tax liability</li>
            </ol>

            <h2>Tax Filing Requirements for Freelancers</h2>
            <p>If your annual income exceeds ৳3,50,000, you must:</p>
            <ul>
              <li>Obtain a Tax Identification Number (TIN) from NBR</li>
              <li>File an annual tax return by November 30th</li>
              <li>
                Keep records of all income and expenses for at least 5 years
              </li>
              <li>Pay any tax due within the deadline</li>
            </ul>

            <h2>Tax Deductions for Freelancers</h2>
            <p>
              You can reduce your taxable income by claiming legitimate business
              expenses:
            </p>
            <ul>
              <li>Computer and equipment purchases</li>
              <li>Software subscriptions and licenses</li>
              <li>Internet and phone bills (business portion)</li>
              <li>Office rent (if applicable)</li>
              <li>Professional development and training</li>
              <li>Bank charges and transaction fees</li>
            </ul>

            <h2>Fiverr and Upwork Tax in Bangladesh</h2>
            <p>
              Income earned from international platforms like Fiverr and Upwork
              is treated as foreign income and is fully taxable in Bangladesh.
              You must declare all earnings, whether received through bank
              transfer, PayPal, Payoneer, or any other method.
            </p>

            <h2>Tax Planning Tips for Freelancers</h2>
            <ul>
              <li>
                Keep detailed records of all income and expenses throughout the
                year
              </li>
              <li>Set aside 15-25% of your income for tax payments</li>
              <li>Maximize legitimate business expense deductions</li>
              <li>Consider quarterly tax payments to avoid year-end burden</li>
              <li>Consult with a tax professional for complex situations</li>
            </ul>

            <div className="p-6 my-8 border-l-4 rounded-lg bg-primary-50 border-primary-600">
              <h3 className="mb-2 text-xl font-bold text-primary-900">
                Calculate Your Tax Now
              </h3>
              <p className="mb-4 text-primary-800">
                Use our free calculator to get instant tax estimates based on
                your freelance income.
              </p>
              <Link href="/" className="inline-block btn-primary">
                Calculate Tax Free →
              </Link>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>Do I need to pay tax if I earn less than ৳3,50,000?</h3>
            <p>
              No, the first ৳3,50,000 of income is tax-free. However, you may
              still want to file a return to establish a tax history.
            </p>

            <h3>Can I deduct my internet bill?</h3>
            <p>
              Yes, you can deduct the business portion of your internet bill as
              a legitimate business expense.
            </p>

            <h3>What happens if I don't file my tax return?</h3>
            <p>
              Failure to file can result in penalties, fines, and legal
              consequences. It's important to comply with NBR regulations.
            </p>

            <h3>How do I get a TIN number?</h3>
            <p>
              You can apply for a TIN online through the NBR e-TIN portal or
              visit your local tax office with required documents.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
