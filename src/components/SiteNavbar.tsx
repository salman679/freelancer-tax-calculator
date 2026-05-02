"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Calculator, FileText, Home } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/calculator", label: "Calculator", icon: Calculator },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/privacy", label: "Privacy", icon: FileText },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="container-custom">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex min-w-0 items-center gap-3 rounded-lg text-gray-900 transition hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-purple-600 text-white">
              <Calculator className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block truncate bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-base font-extrabold leading-tight text-transparent sm:text-lg">
                FreelancerTax.BD
              </span>
              <span className="block truncate text-xs font-semibold text-slate-500">
                Calculator and tax guides
              </span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-100 p-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActivePath(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`inline-flex min-h-[40px] items-center gap-2 rounded-lg px-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                        active
                          ? "bg-primary-600 text-white shadow-sm"
                          : "text-gray-600 hover:bg-white hover:text-primary-700"
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/calculator"
            className="hidden min-h-[44px] items-center justify-center rounded-lg bg-primary-600 px-4 text-sm font-semibold text-white transition hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 sm:inline-flex"
          >
            Calculate Now
          </Link>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex gap-2 overflow-x-auto border-t border-gray-200 py-2 md:hidden"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-[40px] shrink-0 items-center gap-2 rounded-lg border px-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                  active
                    ? "border-primary-600 bg-primary-600 text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-primary-300 hover:text-primary-700"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
