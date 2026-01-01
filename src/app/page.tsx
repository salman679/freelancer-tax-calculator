"use client";

import {
  Calculator,
  CheckCircle,
  FileText,
  Shield,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="py-4 container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calculator className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">
                FreelancerTax.BD
              </span>
            </div>
            <Link href="/calculator" className="btn-primary">
              Calculate Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
              Freelancer Tax Calculator for{" "}
              <span className="text-primary-600">Bangladesh</span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              Stop worrying about your tax obligations. Get clear answers about
              whether you need to pay tax, file returns, and how much you might
              owe. Simple, reliable, and built for Bangladesh freelancers.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/calculator"
                className="px-8 py-3 text-lg btn-primary"
              >
                Calculate Your Tax - Free
              </Link>
              <button className="px-8 py-3 text-lg btn-secondary">
                See How It Works
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              ✅ Free basic calculation • ✅ No signup required • ✅ Instant
              results
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Built for Bangladesh Freelancers
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Whether you work on Fiverr, Upwork, or with direct clients, get
              the clarity you need about your tax situation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Instant Decision</h3>
              <p className="text-gray-600">
                Get immediate answers: Do you owe tax? Do you need to file?
                What's your risk level?
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Detailed Breakdown</h3>
              <p className="text-gray-600">
                Upgrade for slab-wise calculations, PDF reports, and
                step-by-step explanations.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Tax Planning</h3>
              <p className="text-gray-600">
                Get optimization tips, expense planning, and income distribution
                strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Simple, Fair Pricing
            </h2>
            <p className="text-gray-600">
              No subscriptions. Pay once, use forever.
            </p>
          </div>

          <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
            {/* Free Tier */}
            <div className="p-6 text-center border-2 border-green-200 card">
              <div className="mb-2 font-semibold text-green-600">FREE</div>
              <div className="mb-4 text-3xl font-bold">৳0</div>
              <ul className="mb-6 space-y-3">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Estimated tax amount</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Filing requirement</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Risk assessment</span>
                </li>
              </ul>
              <Link href="/calculator" className="w-full btn-secondary">
                Start Free Calculation
              </Link>
            </div>

            {/* Basic Paid */}
            <div className="relative p-6 text-center border-2 border-blue-500 card">
              <div className="absolute px-3 py-1 text-sm font-medium text-white transform -translate-x-1/2 bg-blue-500 rounded-full -top-3 left-1/2">
                Most Popular
              </div>
              <div className="mb-2 font-semibold text-blue-600">DETAILED</div>
              <div className="mb-4 text-3xl font-bold">৳299</div>
              <ul className="mb-6 space-y-3">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Slab-wise breakdown</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>PDF report</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Action steps</span>
                </li>
              </ul>
              <button className="w-full btn-primary">
                Unlock Detailed Report
              </button>
            </div>

            {/* Premium */}
            <div className="p-6 text-center border-2 border-purple-200 card">
              <div className="mb-2 font-semibold text-purple-600">PLANNING</div>
              <div className="mb-4 text-3xl font-bold">৳499</div>
              <ul className="mb-6 space-y-3">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Everything in Detailed</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Tax-saving tips</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Income planning</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Optimization guide</span>
                </li>
              </ul>
              <button className="w-full btn-secondary">
                Get Planning Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="text-center container-custom">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 mr-2 text-green-600" />
            <h3 className="text-2xl font-semibold text-gray-900">
              Guidance, Not Advice
            </h3>
          </div>
          <p className="max-w-3xl mx-auto leading-relaxed text-gray-600">
            This tool helps you understand your tax situation and make informed
            decisions. It provides estimates and guidance only - not legal or
            accounting advice. Results are for informational purposes. Please
            consult a licensed professional for official matters.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-white bg-gray-900">
        <div className="container-custom">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <Calculator className="w-6 h-6 text-primary-400" />
                <span className="text-lg font-semibold">FreelancerTax.BD</span>
              </div>
              <p className="text-gray-300">
                Making tax calculations simple for Bangladesh freelancers.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">
                © 2024 FreelancerTax.BD. All rights reserved.
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Built for freelancers, by understanding.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
