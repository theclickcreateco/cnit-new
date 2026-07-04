import { Search, MessageSquare, BrainCircuit } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "seo",
    title: "Enterprise SEO",
    icon: <Search className="w-6 h-6 text-electric-cyan" />,
    description: "Traditional Google search dominance, technical infrastructure, and commercial keyword intent mapping.",
    href: "/services/seo",
    metrics: ["Organic Traffic", "Domain Authority", "Keyword Rankings"]
  },
  {
    id: "aeo",
    title: "Answer Engine Optimization (AEO)",
    icon: <MessageSquare className="w-6 h-6 text-electric-cyan" />,
    description: "Optimizing for voice search, featured snippets, and structuring code so conversational interfaces pull your data.",
    href: "/services/aeo",
    metrics: ["Snippet Capture Rate", "Voice Search Impressions"]
  },
  {
    id: "geo",
    title: "Generative Engine Optimization (GEO)",
    icon: <BrainCircuit className="w-6 h-6 text-electric-cyan" />,
    description: "Brand-entity alignment and citation engineering to ensure LLMs (ChatGPT, Gemini, Perplexity) actively recommend you.",
    href: "/services/geo",
    metrics: ["LLM Share of Voice", "Entity Salience"]
  }
];

export default function SolutionMatrix() {
  return (
    <section id="framework" className="py-20 lg:py-section-gap bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-gutter max-w-container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-headline-md text-midnight-navy mb-4">
            The 3-Layer Optimization Matrix
          </h2>
          <p className="text-body-lg text-slate-600">
            A comprehensive, data-backed search framework designed to secure maximum visibility across both traditional search engines and emerging AI platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <Link 
              key={pillar.id} 
              href={pillar.href}
              className="group flex flex-col bg-white border border-slate-200 p-8 rounded-sm transition-all hover:border-midnight-navy hover:shadow-ambient"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm mb-6 group-hover:bg-midnight-navy group-hover:border-midnight-navy transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-headline-sm text-midnight-navy mb-3">
                {pillar.title}
              </h3>
              <p className="text-body-md text-slate-600 mb-8 flex-1">
                {pillar.description}
              </p>
              
              <div className="border-t border-slate-100 pt-6 mt-auto">
                <h4 className="text-label-caps text-slate-400 mb-3">Key Metrics Monitored</h4>
                <ul className="flex flex-col gap-2">
                  {pillar.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-data-point text-midnight-navy">
                      <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
