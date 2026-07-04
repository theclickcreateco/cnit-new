import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-section-gap border-b border-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-surface to-surface opacity-80" />
      
      <div className="container mx-auto px-4 sm:px-gutter max-w-container-max relative z-10">
        <div className="max-w-4xl flex flex-col items-center text-center mx-auto">
          <div className="inline-flex items-center rounded-sm border border-electric-cyan/30 bg-electric-cyan/10 px-3 py-1 mb-6">
            <span className="text-label-caps text-electric-cyan">The AI Search Evolution is Here</span>
          </div>
          
          <h1 className="text-display-lg-mobile md:text-display-lg text-midnight-navy mb-6">
            Stop Paying for Clicks that Don&apos;t Convert.<br />
            <span className="text-slate-500">Command the Search Ecosystem Instead.</span>
          </h1>
          
          <p className="text-body-lg text-slate-600 max-w-2xl mb-10">
            Solutions beyond technologies mean focusing entirely on your bottom line. By optimizing your business for both Google and modern AI engines, CN IT Solutions builds data-backed search frameworks (SEO, AEO, and GEO) that consistently turn organic traffic into predictable inbound pipeline and measurable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link
              href="/strategy"
              className="inline-flex h-12 items-center justify-center rounded bg-midnight-navy px-8 text-label-caps text-white transition-all hover:bg-midnight-navy/90 focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:ring-offset-2 hover:shadow-ambient group"
            >
              Claim Your Growth Strategy
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="#framework"
              className="inline-flex h-12 items-center justify-center rounded border border-slate-300 bg-white px-8 text-label-caps text-midnight-navy transition-colors hover:border-midnight-navy hover:bg-slate-50"
            >
              See Our Framework
            </Link>
          </div>
        </div>
        
        {/* Abstract structural graphic */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full pointer-events-none opacity-40">
          <div className="absolute right-10 top-1/2 w-64 h-64 border border-slate-300 rounded-sm transform rotate-12" />
          <div className="absolute right-20 top-1/3 w-48 h-48 border border-electric-cyan/30 rounded-sm transform -rotate-6" />
          <div className="absolute right-32 top-2/3 w-56 h-56 border border-slate-200 rounded-sm transform rotate-45" />
        </div>
      </div>
    </section>
  );
}
