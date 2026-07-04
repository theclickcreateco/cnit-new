"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function StrategyScheduler() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("submitting");
    
    try {
      const response = await fetch("/api/strategy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: e.target.url.value,
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
          budget: e.target.budget.value,
          bottleneck: e.target.bottleneck.value,
        }),
      });
      
      if (response.ok) {
        setFormState("success");
      } else {
        console.error("Failed to submit form");
        setFormState("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-surface">
        <div className="bg-white p-12 rounded-sm border border-slate-200 shadow-ambient max-w-lg w-full text-center">
          <div className="w-16 h-16 bg-electric-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-electric-cyan" />
          </div>
          <h2 className="text-headline-md text-midnight-navy mb-4">Request Received</h2>
          <p className="text-body-lg text-slate-600 mb-8">
            Our strategic engineering team will review your domain and current market positioning. We will reach out within 24 hours to schedule your briefing.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="inline-flex h-12 items-center justify-center rounded bg-midnight-navy px-8 text-label-caps text-white transition-all hover:bg-midnight-navy/90"
          >
            Return to Command Center
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-surface">
      {/* Left Column: Context */}
      <div className="w-full md:w-1/2 bg-midnight-navy p-8 md:p-16 lg:p-24 flex flex-col justify-center text-white">
        <div className="max-w-md">
          <div className="inline-flex items-center rounded-sm border border-electric-cyan/30 bg-electric-cyan/10 px-3 py-1 mb-6">
            <span className="text-label-caps text-electric-cyan font-bold">Qualification Required</span>
          </div>
          <h1 className="text-display-lg-mobile md:text-headline-md mb-6">
            Claim Your Growth Strategy
          </h1>
          <p className="text-body-lg text-slate-300 mb-8">
            We partner exclusively with organizations serious about dominating their search ecosystem. Fill out the application below to see if we are a mutual fit.
          </p>
          
          <div className="space-y-6 border-t border-slate-700 pt-8 mt-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-sm bg-slate-800 flex items-center justify-center font-mono text-electric-cyan font-bold text-sm">1</div>
              <div>
                <h4 className="text-body-md font-semibold mb-1">Domain Analysis</h4>
                <p className="text-body-md text-slate-400">We dissect your current SEO/AEO/GEO baseline.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-sm bg-slate-800 flex items-center justify-center font-mono text-electric-cyan font-bold text-sm">2</div>
              <div>
                <h4 className="text-body-md font-semibold mb-1">Market Mapping</h4>
                <p className="text-body-md text-slate-400">We identify the highest-value conversational queries.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-sm bg-slate-800 flex items-center justify-center font-mono text-electric-cyan font-bold text-sm">3</div>
              <div>
                <h4 className="text-body-md font-semibold mb-1">Execution Briefing</h4>
                <p className="text-body-md text-slate-400">A custom 3-layer optimization roadmap delivered by our experts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto md:mx-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <label htmlFor="url" className="block text-label-caps text-midnight-navy">Target Website URL</label>
              <input 
                type="url" 
                id="url" 
                required
                placeholder="https://yourcompany.com" 
                className="w-full h-12 px-4 border border-slate-200 rounded-sm text-body-md focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-label-caps text-midnight-navy">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  required
                  className="w-full h-12 px-4 border border-slate-200 rounded-sm text-body-md focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-label-caps text-midnight-navy">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  required
                  className="w-full h-12 px-4 border border-slate-200 rounded-sm text-body-md focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-label-caps text-midnight-navy">Corporate Email</label>
              <input 
                type="email" 
                id="email" 
                required
                placeholder="you@company.com"
                className="w-full h-12 px-4 border border-slate-200 rounded-sm text-body-md focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="block text-label-caps text-midnight-navy">Current Monthly Marketing Budget</label>
              <div className="relative">
                <select 
                  id="budget" 
                  required
                  defaultValue=""
                  className="w-full h-12 px-4 border border-slate-200 rounded-sm text-body-md appearance-none bg-white focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="3k-5k">$3k - $5k</option>
                  <option value="5k-10k">$5k - $10k</option>
                  <option value="10k+">$10k+</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="bottleneck" className="block text-label-caps text-midnight-navy">Primary Growth Bottleneck</label>
              <textarea 
                id="bottleneck" 
                required
                rows={4}
                placeholder="What is preventing your organic growth right now?"
                className="w-full p-4 border border-slate-200 rounded-sm text-body-md focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={formState === "submitting"}
              className="w-full flex h-14 items-center justify-center rounded bg-midnight-navy px-8 text-label-caps text-white transition-all hover:bg-midnight-navy/90 focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:ring-offset-2 disabled:opacity-70 group"
            >
              {formState === "submitting" ? "Processing Application..." : formState === "error" ? "Submission Failed. Try Again" : "Submit Strategic Application"}
              {formState !== "submitting" && formState !== "error" && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              Your data is secure. By submitting, you agree to our Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
