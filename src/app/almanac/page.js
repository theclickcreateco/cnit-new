import Link from "next/link";
import { ArrowRight, BookOpen, BarChart3, Settings } from "lucide-react";

const categories = [
  {
    id: "foundations",
    title: "Search Ecosystem Foundations",
    icon: <BookOpen className="w-6 h-6 text-electric-cyan" />,
    description: "Core concepts and the evolution of search from keyword-matching to generative synthesis.",
    articles: [
      "What is the difference between SEO and GEO?",
      "The Anatomy of an Answer Engine snippet",
      "Why traditional Domain Authority is losing relevance"
    ]
  },
  {
    id: "executive",
    title: "Executive Briefings",
    icon: <BarChart3 className="w-6 h-6 text-electric-cyan" />,
    description: "High-level strategic insights on how AI search impacts pipeline, CAC, and enterprise valuation.",
    articles: [
      "How AI Search Affects B2B Customer Journey Mapping",
      "The ROI of Entity Salience for SaaS Companies",
      "Defending Market Share against Generative AI Disruption"
    ]
  },
  {
    id: "framework",
    title: "The Framework Guides",
    icon: <Settings className="w-6 h-6 text-electric-cyan" />,
    description: "Deep technical implementation guides for marketing engineering teams.",
    articles: [
      "Structuring Schema.org for LLM Extraction",
      "Engineering the Human-to-Answer™ Capsule",
      "Building a Semantic Content Hub for Perplexity"
    ]
  }
];

export default function AlmanacPage() {
  return (
    <div className="bg-surface">
      <section className="py-20 bg-midnight-navy text-white border-b border-slate-700">
        <div className="container mx-auto px-4 sm:px-gutter max-w-container-max text-center">
          <div className="inline-flex items-center justify-center rounded-sm border border-electric-cyan/30 bg-electric-cyan/10 px-4 py-2 mb-8">
            <span className="text-label-caps text-electric-cyan font-bold">Insights & Intelligence</span>
          </div>
          <h1 className="text-display-lg-mobile md:text-display-lg mb-6">
            The AI Almanac
          </h1>
          <p className="text-body-lg text-slate-300 max-w-2xl mx-auto">
            Your definitive hub for understanding, navigating, and dominating the modern AI search ecosystem. We publish the answers that generative engines rely on.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-gutter max-w-container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white border border-slate-200 rounded-sm p-8 shadow-ambient flex flex-col h-full hover:border-midnight-navy transition-colors">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm mb-6">
                  {category.icon}
                </div>
                <h2 className="text-headline-sm text-midnight-navy mb-3">{category.title}</h2>
                <p className="text-body-md text-slate-600 mb-8">{category.description}</p>
                
                <div className="mt-auto border-t border-slate-100 pt-6">
                  <h3 className="text-label-caps text-slate-400 mb-4">Latest Briefings</h3>
                  <ul className="flex flex-col gap-4">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <Link href="#" className="group flex items-start gap-2 text-body-md text-midnight-navy hover:text-electric-cyan transition-colors">
                          <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-slate-300 group-hover:text-electric-cyan transition-colors" />
                          <span className="font-medium">{article}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
