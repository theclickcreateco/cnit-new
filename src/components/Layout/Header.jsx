import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-surface-bright/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-gutter max-w-container-max flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-headline-sm text-midnight-navy">CN IT</span>
            <span className="text-label-caps text-slate-400 mt-1">Solutions</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <div className="group relative">
              <button className="flex items-center gap-1 text-body-md text-slate-600 hover:text-midnight-navy font-medium transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 hidden w-56 rounded-md border border-slate-200 bg-white shadow-ambient group-hover:block">
                <div className="p-2 flex flex-col gap-1">
                  <Link href="/services/seo" className="block rounded-sm px-4 py-2 text-body-md text-slate-600 hover:bg-slate-50 hover:text-midnight-navy">
                    Enterprise SEO
                  </Link>
                  <Link href="/services/aeo" className="block rounded-sm px-4 py-2 text-body-md text-slate-600 hover:bg-slate-50 hover:text-midnight-navy">
                    Answer Engine Optimization
                  </Link>
                  <Link href="/services/geo" className="block rounded-sm px-4 py-2 text-body-md text-slate-600 hover:bg-slate-50 hover:text-midnight-navy">
                    Generative Engine Optimization
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/#framework" className="text-body-md text-slate-600 hover:text-midnight-navy font-medium transition-colors">
              Our Framework
            </Link>
            
            <Link href="/case-studies" className="text-body-md text-slate-600 hover:text-midnight-navy font-medium transition-colors">
              Case Studies
            </Link>
            
            <Link href="/almanac" className="text-body-md text-slate-600 hover:text-midnight-navy font-medium transition-colors">
              The Almanac
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/strategy"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded bg-midnight-navy px-6 text-label-caps text-white transition-colors hover:bg-midnight-navy/90 focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:ring-offset-2"
          >
            Claim Your Growth Strategy
          </Link>
        </div>
      </div>
    </header>
  );
}
