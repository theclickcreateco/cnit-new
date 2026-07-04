export default function ProblemDefinition() {
  return (
    <section className="py-20 lg:py-section-gap bg-white relative">
      <div className="container mx-auto px-4 sm:px-gutter max-w-container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-headline-md text-midnight-navy mb-6">
              Traditional marketing agencies are failing their clients in the age of AI search.
            </h2>
            <div className="w-16 h-1 bg-electric-cyan mb-8" />
            <div className="space-y-6">
              <p className="text-body-lg text-slate-600">
                For the past decade, SEO was a game of keywords, backlinks, and generic content mills. Today, Large Language Models (LLMs) and conversational AI interfaces have fundamentally shifted how buyers find solutions.
              </p>
              <p className="text-body-lg text-slate-600">
                Relying solely on legacy Google SEO means you are invisible to the next generation of enterprise decision-makers who use ChatGPT, Perplexity, and Gemini to curate vendor lists.
              </p>
              <p className="text-body-lg text-slate-600 font-medium">
                If your brand is not engineered as a verified entity within these Answer Engines, you are ceding market share to competitors who are.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 rounded-sm bg-slate-50 border border-slate-100 transform rotate-2"></div>
            <div className="relative bg-white border border-slate-200 rounded-sm p-8 shadow-ambient">
              <div className="flex flex-col gap-6">
                <div className="border-l-2 border-error pl-4 py-1">
                  <h4 className="text-label-caps text-slate-400 mb-1">The Old Model</h4>
                  <p className="text-body-md text-midnight-navy">High-volume keywords with zero commercial intent. Vanity metrics disguised as ROI.</p>
                </div>
                <div className="border-l-2 border-electric-cyan pl-4 py-1">
                  <h4 className="text-label-caps text-electric-cyan mb-1">The New Reality</h4>
                  <p className="text-body-md text-midnight-navy">Multi-platform Share of Voice. Direct answers in LLM interfaces. Accelerated pipeline velocity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
