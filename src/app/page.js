import Hero from "@/components/Home/Hero";
import ProblemDefinition from "@/components/Home/ProblemDefinition";
import SolutionMatrix from "@/components/Home/SolutionMatrix";
import Link from "next/link";
import { CheckCircle2, Award, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemDefinition />
      <SolutionMatrix />

      {/* The Promise Section */}
      <section className="py-20 bg-midnight-navy text-white">
        <div className="container mx-auto px-4 sm:px-gutter max-w-container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-headline-md mb-6">
                Measurable Outcomes for the C-Suite
              </h2>
              <p className="text-body-lg text-slate-300 mb-8">
                We don&apos;t report on vanity metrics. Our performance
                frameworks are engineered to directly impact enterprise growth,
                lowering acquisition costs while increasing pipeline velocity.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-electric-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-body-lg font-semibold mb-1">
                      Increased Multi-Platform Share of Voice
                    </h3>
                    <p className="text-body-md text-slate-400">
                      Dominate branded and unbranded queries across Google,
                      ChatGPT, and Perplexity.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-electric-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-body-lg font-semibold mb-1">
                      Lower Customer Acquisition Costs (CAC)
                    </h3>
                    <p className="text-body-md text-slate-400">
                      Reduce dependency on paid media by building an
                      authoritative organic engine.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-electric-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-body-lg font-semibold mb-1">
                      Accelerated Pipeline Velocity
                    </h3>
                    <p className="text-body-md text-slate-400">
                      Pre-qualify and educate prospects through AI answers
                      before they ever reach sales.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-sm">
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-8 h-8 text-electric-cyan" />
                <h4 className="text-headline-sm">
                  Trusted by Industry Leaders
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 border border-slate-700 p-6 rounded-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <span className="text-label-caps text-gray-900">
                    Enterprise Corp
                  </span>
                </div>
                <div className="bg-gray-200 border border-slate-700 p-6 rounded-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <span className="text-label-caps text-gray-900">
                    FinTech Global
                  </span>
                </div>
                <div className="bg-gray-200 border border-slate-700 p-6 rounded-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <span className="text-label-caps text-gray-900">
                    SaaS Systems
                  </span>
                </div>
                <div className="bg-gray-200 border border-slate-700 p-6 rounded-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <span className="text-label-caps text-gray-900">
                    Data Dynamics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Funnel Hook */}
      <section className="py-24 bg-surface-bright border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-gutter max-w-3xl text-center">
          <div className="inline-flex items-center rounded-sm border border-electric-cyan/30 bg-electric-cyan/10 px-3 py-1 mb-6">
            <span className="text-label-caps text-electric-cyan">
              Take Command
            </span>
          </div>
          <h2 className="text-display-lg-mobile md:text-display-lg text-midnight-navy mb-6">
            Ready to Build Your Search Framework?
          </h2>
          <p className="text-body-lg text-slate-600 mb-10">
            Stop losing market share to competitors who understand the new AI
            search ecosystem. Get a customized growth strategy engineered for
            your enterprise.
          </p>
          <Link
            href="/strategy"
            className="inline-flex h-14 items-center justify-center rounded bg-electric-cyan px-10 text-label-caps text-midnight-navy transition-all hover:bg-electric-cyan/90 focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:ring-offset-2 hover:shadow-ambient group font-bold"
          >
            Claim Your Growth Strategy
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
