import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-surface text-slate-600 mt-section-gap">
      <div className="container mx-auto px-4 sm:px-gutter max-w-container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-headline-sm text-midnight-navy">CN IT Solutions</span>
            </Link>
            <p className="text-body-md text-slate-500 max-w-md mt-4">
              CN IT Solutions is a performance-driven marketing agency specializing in SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO). We deliver solutions beyond technologies to turn search visibility into predictable corporate pipeline.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-label-caps text-midnight-navy mb-4">Platform Services</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/services/seo" className="text-body-md hover:text-midnight-navy transition-colors">Enterprise SEO</Link>
              </li>
              <li>
                <Link href="/services/aeo" className="text-body-md hover:text-midnight-navy transition-colors">AEO Architecture</Link>
              </li>
              <li>
                <Link href="/services/geo" className="text-body-md hover:text-midnight-navy transition-colors">Generative AI Optimization</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-label-caps text-midnight-navy mb-4">The Almanac</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/almanac/search-ecosystem" className="text-body-md hover:text-midnight-navy transition-colors">Search Ecosystems</Link>
              </li>
              <li>
                <Link href="/almanac/executive-briefings" className="text-body-md hover:text-midnight-navy transition-colors">Executive Briefings</Link>
              </li>
              <li>
                <Link href="/almanac/framework-guides" className="text-body-md hover:text-midnight-navy transition-colors">Framework Guides</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-label-caps text-midnight-navy mb-4">Command Center</h3>
            <p className="text-body-md text-slate-500 mb-4">
              Ready to command the search ecosystem?
            </p>
            <Link
              href="/strategy"
              className="inline-flex h-10 items-center justify-center rounded border border-slate-300 bg-white px-6 text-label-caps text-midnight-navy transition-colors hover:border-midnight-navy hover:bg-slate-50"
            >
              Start Strategy Builder
            </Link>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-label-caps text-slate-400">
            &copy; {new Date().getFullYear()} CN IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-label-caps text-slate-400 hover:text-midnight-navy">Privacy Policy</Link>
            <Link href="/terms" className="text-label-caps text-slate-400 hover:text-midnight-navy">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
