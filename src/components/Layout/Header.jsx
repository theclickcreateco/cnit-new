"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-surface-bright/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-gutter max-w-container-max flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-headline-sm text-midnight-navy font-bold">
              CN IT Solutions
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="group relative">
            <button className="flex items-center gap-1 text-body-md text-slate-600 hover:text-midnight-navy font-medium transition-colors">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full mt-2 hidden w-56 rounded-md border border-slate-200 bg-white shadow-ambient group-hover:block">
              <div className="p-2 flex flex-col gap-1">
                <Link
                  href="/services/seo"
                  className="block rounded-sm px-4 py-2 text-body-md text-slate-600 hover:bg-slate-50 hover:text-midnight-navy"
                >
                  Enterprise SEO
                </Link>
                <Link
                  href="/services/aeo"
                  className="block rounded-sm px-4 py-2 text-body-md text-slate-600 hover:bg-slate-50 hover:text-midnight-navy"
                >
                  Answer Engine Optimization
                </Link>
                <Link
                  href="/services/geo"
                  className="block rounded-sm px-4 py-2 text-body-md text-slate-600 hover:bg-slate-50 hover:text-midnight-navy"
                >
                  Generative Engine Optimization
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/#framework"
            className="text-body-md text-slate-600 hover:text-midnight-navy font-medium transition-colors"
          >
            Our Framework
          </Link>

          <Link
            href="/case-studies"
            className="text-body-md text-slate-600 hover:text-midnight-navy font-medium transition-colors"
          >
            Case Studies
          </Link>

          <Link
            href="/almanac"
            className="text-body-md text-slate-600 hover:text-midnight-navy font-medium transition-colors"
          >
            The Almanac
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/strategy"
            className="hidden md:inline-flex h-10 items-center justify-center rounded bg-midnight-navy px-6 text-label-caps text-white transition-colors hover:bg-midnight-navy/90 focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:ring-offset-2"
          >
            Claim Your Growth Strategy
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-midnight-navy hover:bg-slate-100 rounded-sm transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-ambient py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2 border-b border-slate-100 pb-4">
            <span className="text-label-caps text-slate-400 pl-2">
              Services
            </span>
            <Link
              href="/services/seo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-body-md text-midnight-navy hover:bg-slate-50 rounded-sm transition-colors"
            >
              Enterprise SEO
            </Link>
            <Link
              href="/services/aeo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-body-md text-midnight-navy hover:bg-slate-50 rounded-sm transition-colors"
            >
              Answer Engine Optimization
            </Link>
            <Link
              href="/services/geo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-body-md text-midnight-navy hover:bg-slate-50 rounded-sm transition-colors"
            >
              Generative Engine Optimization
            </Link>
          </div>

          <Link
            href="/#framework"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-2 text-body-md text-midnight-navy hover:bg-slate-50 rounded-sm transition-colors"
          >
            Our Framework
          </Link>
          <Link
            href="/case-studies"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-2 text-body-md text-midnight-navy hover:bg-slate-50 rounded-sm transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/almanac"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-2 text-body-md text-midnight-navy hover:bg-slate-50 rounded-sm transition-colors"
          >
            The Almanac
          </Link>

          <Link
            href="/strategy"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 flex h-12 w-full items-center justify-center rounded bg-midnight-navy px-6 text-label-caps text-white transition-colors hover:bg-midnight-navy/90"
          >
            Claim Your Growth Strategy
          </Link>
        </div>
      )}
    </header>
  );
}
