import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function SeoPillar() {
  return (
    <div className="bg-surface">
      {/* Hero / Human-to-Answer™ Capsule */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-gutter max-w-container-max">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-sm border border-electric-cyan/30 bg-electric-cyan/10 px-4 py-2 mb-8">
              <span className="text-label-caps text-midnight-navy font-bold">Human-to-Answer™ Capsule</span>
            </div>
            <h1 className="text-display-lg-mobile md:text-headline-md text-midnight-navy mb-6">
              What is Enterprise Search Engine Optimization (SEO)?
            </h1>
            <p className="text-body-lg text-slate-600 mb-8 border-l-4 border-electric-cyan pl-6 bg-slate-50 py-4 pr-4">
              <strong>Enterprise SEO</strong> is the scalable, highly technical process of aligning complex corporate website architectures, comprehensive content ecosystems, and off-site authority signals with the commercial intent of users on traditional search engines like Google. It focuses on maximizing organic revenue from high-value search queries at an enterprise scale.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-gutter max-w-container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h2 className="text-headline-sm text-midnight-navy mb-6">Commanding Traditional Search</h2>
              <p className="text-body-md text-slate-600 mb-6">
                While AI search interfaces are capturing the top of the funnel, traditional Google search remains the dominant force for high-intent, bottom-of-the-funnel commercial queries. Our Enterprise SEO framework is designed not just for traffic, but for predictable pipeline generation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="border border-slate-200 p-6 rounded-sm bg-white shadow-ambient">
                  <Search className="w-8 h-8 text-electric-cyan mb-4" />
                  <h3 className="text-body-lg font-semibold text-midnight-navy mb-2">Technical Infrastructure</h3>
                  <p className="text-body-md text-slate-600">We engineer your site architecture, schema markup, and core web vitals to ensure flawless crawlability and indexation by search bots.</p>
                </div>
                <div className="border border-slate-200 p-6 rounded-sm bg-white shadow-ambient">
                  <Search className="w-8 h-8 text-electric-cyan mb-4" />
                  <h3 className="text-body-lg font-semibold text-midnight-navy mb-2">Commercial Intent Mapping</h3>
                  <p className="text-body-md text-slate-600">Aligning every landing page with precise buyer intent to capture executives precisely when they are ready to evaluate vendors.</p>
                </div>
              </div>

              <h2 className="text-headline-sm text-midnight-navy mb-6">Integration with AEO and GEO</h2>
              <p className="text-body-md text-slate-600">
                Enterprise SEO is the foundational layer. Without a structurally sound website and high domain authority, your Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) efforts will fail. We build SEO as the bedrock upon which AI search dominance is constructed.
              </p>
            </div>
            
            {/* Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 border border-slate-200 bg-white p-8 rounded-sm shadow-ambient">
                <h3 className="text-headline-sm text-midnight-navy mb-4">Analyze Your SEO Foundation</h3>
                <p className="text-body-md text-slate-600 mb-6">
                  Stop guessing. Let our engineers audit your technical infrastructure and commercial keyword coverage.
                </p>
                <Link
                  href="/strategy"
                  className="flex h-12 items-center justify-center rounded bg-midnight-navy px-6 text-label-caps text-white transition-all hover:bg-midnight-navy/90 focus:outline-none focus:ring-2 focus:ring-electric-cyan group w-full"
                >
                  Start Strategy Builder
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
