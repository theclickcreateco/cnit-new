import Link from "next/link";
import { ArrowRight, BrainCircuit } from "lucide-react";

export default function GeoPillar() {
  return (
    <div className="bg-surface">
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-gutter max-w-container-max">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-sm border border-electric-cyan/30 bg-electric-cyan/10 px-4 py-2 mb-8">
              <span className="text-label-caps text-midnight-navy font-bold">Human-to-Answer™ Capsule</span>
            </div>
            <h1 className="text-display-lg-mobile md:text-headline-md text-midnight-navy mb-6">
              What is Generative Engine Optimization (GEO)?
            </h1>
            <p className="text-body-lg text-slate-600 mb-8 border-l-4 border-electric-cyan pl-6 bg-slate-50 py-4 pr-4">
              <strong>Generative Engine Optimization (GEO)</strong> is the strategic alignment of a brand&apos;s digital footprint to ensure it is frequently, accurately, and favorably cited by Large Language Models (LLMs) like ChatGPT, Perplexity, and Gemini. It involves entity engineering, digital PR, and authoritative citation building to shape how AI "understands" and recommends your company.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-gutter max-w-container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h2 className="text-headline-sm text-midnight-navy mb-6">Influencing the AI Brain</h2>
              <p className="text-body-md text-slate-600 mb-6">
                Unlike traditional search engines that retrieve links, generative engines synthesize knowledge. To rank in ChatGPT or Perplexity, you don&apos;t optimize a page—you optimize an <em>entity</em>. You must prove to the AI that your brand is the most authoritative source on a given topic across the entire internet.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="border border-slate-200 p-6 rounded-sm bg-white shadow-ambient">
                  <BrainCircuit className="w-8 h-8 text-electric-cyan mb-4" />
                  <h3 className="text-body-lg font-semibold text-midnight-navy mb-2">Entity Salience Engineering</h3>
                  <p className="text-body-md text-slate-600">We map your brand to core industry concepts within the Knowledge Graph, increasing the likelihood that LLMs associate your company with specific solutions.</p>
                </div>
                <div className="border border-slate-200 p-6 rounded-sm bg-white shadow-ambient">
                  <BrainCircuit className="w-8 h-8 text-electric-cyan mb-4" />
                  <h3 className="text-body-lg font-semibold text-midnight-navy mb-2">Citation & PR Building</h3>
                  <p className="text-body-md text-slate-600">LLMs trust high-authority data sources. We execute targeted digital PR to get your brand mentioned on the platforms that train these AI models.</p>
                </div>
              </div>

              <h2 className="text-headline-sm text-midnight-navy mb-6">The Future of B2B Procurement</h2>
              <p className="text-body-md text-slate-600">
                Procurement teams are already using AI to generate vendor shortlists. If your GEO strategy is non-existent, your company won&apos;t even make the initial consideration set. We ensure your brand is the default recommendation.
              </p>
            </div>
            
            <div className="lg:col-span-4">
              <div className="sticky top-32 border border-slate-200 bg-white p-8 rounded-sm shadow-ambient">
                <h3 className="text-headline-sm text-midnight-navy mb-4">Command AI Recommendations</h3>
                <p className="text-body-md text-slate-600 mb-6">
                  Are LLMs recommending your competitors over you? Secure your position in the generative search landscape.
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
