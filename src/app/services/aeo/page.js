import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function AeoPillar() {
  return (
    <div className="bg-surface">
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-gutter max-w-container-max">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-sm border border-electric-cyan/30 bg-electric-cyan/10 px-4 py-2 mb-8">
              <span className="text-label-caps text-midnight-navy font-bold">Human-to-Answer™ Capsule</span>
            </div>
            <h1 className="text-display-lg-mobile md:text-headline-md text-midnight-navy mb-6">
              What is Answer Engine Optimization (AEO)?
            </h1>
            <p className="text-body-lg text-slate-600 mb-8 border-l-4 border-electric-cyan pl-6 bg-slate-50 py-4 pr-4">
              <strong>Answer Engine Optimization (AEO)</strong> is the discipline of structuring content and data specifically to be extracted and presented as direct answers by conversational AI interfaces, voice assistants, and search engine featured snippets. It prioritizes answering natural language questions (NLQs) with high-confidence, perfectly structured entity data.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-gutter max-w-container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h2 className="text-headline-sm text-midnight-navy mb-6">Owning the Conversational Interface</h2>
              <p className="text-body-md text-slate-600 mb-6">
                When a CEO asks Siri, or types into Google&apos;s AI Overview, "What is the best marketing agency for B2B SaaS?", they don&apos;t want a list of blue links. They want a definitive answer. AEO ensures your brand is the entity provided in that single, highly-coveted answer slot.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="border border-slate-200 p-6 rounded-sm bg-white shadow-ambient">
                  <MessageSquare className="w-8 h-8 text-electric-cyan mb-4" />
                  <h3 className="text-body-lg font-semibold text-midnight-navy mb-2">NLQ Content Architecture</h3>
                  <p className="text-body-md text-slate-600">We map out the exact natural language questions your buyers are asking and construct &quot;Capsule Blocks&quot; designed explicitly for AI extraction.</p>
                </div>
                <div className="border border-slate-200 p-6 rounded-sm bg-white shadow-ambient">
                  <MessageSquare className="w-8 h-8 text-electric-cyan mb-4" />
                  <h3 className="text-body-lg font-semibold text-midnight-navy mb-2">Semantic Code Structuring</h3>
                  <p className="text-body-md text-slate-600">Implementing advanced Schema.org markup and semantic HTML5 to feed answer engines the structured data they crave.</p>
                </div>
              </div>

              <h2 className="text-headline-sm text-midnight-navy mb-6">The Almanac: Your AEO Factory</h2>
              <p className="text-body-md text-slate-600">
                AEO requires a dedicated hub of answers. This is why we deploy &apos;The Almanac&apos;—a precisely engineered resources section built to answer the exact queries LLMs are processing.
              </p>
            </div>
            
            <div className="lg:col-span-4">
              <div className="sticky top-32 border border-slate-200 bg-white p-8 rounded-sm shadow-ambient">
                <h3 className="text-headline-sm text-midnight-navy mb-4">Capture the AI Snippet</h3>
                <p className="text-body-md text-slate-600 mb-6">
                  Are your competitors stealing your brand&apos;s answers in AI overviews? Let&apos;s fix that.
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
