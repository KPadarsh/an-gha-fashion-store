"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="w-full bg-inverse-surface text-inverse-on-surface py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="angha-container relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-4 sm:space-y-5">
          {/* Index & Chapter Marker */}
          <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-fixed block">
            07 / THE CATALOGUE EDIT
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-inverse-on-surface font-normal leading-[1.08]">
            A QUIET UPDATE.
          </h2>

          {/* Body Narrative */}
          <p className="font-sans text-sm sm:text-base text-surface-variant/80 max-w-md mx-auto leading-relaxed">
            New collections, selected pieces, and occasional archival notes from An Gha.
          </p>

          {/* Form / Confirmation */}
          <div className="pt-4 sm:pt-6">
            {isSubmitted ? (
              <div className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/5 border border-primary-fixed/30 rounded-none text-primary-fixed font-sans text-xs font-semibold tracking-[0.18em] uppercase animate-in fade-in duration-300">
                <Check className="w-4 h-4 text-primary-fixed" strokeWidth={2} />
                <span>Thank you for subscribing to the catalogue edit.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch justify-center max-w-md mx-auto gap-2 sm:gap-0"
              >
                <label htmlFor="catalogue-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="catalogue-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-5 py-3.5 sm:py-4 bg-white/5 text-inverse-on-surface placeholder:text-surface-variant/50 border border-surface-variant/30 sm:border-r-0 focus:border-primary-fixed focus:bg-white/10 focus:outline-none font-sans text-xs sm:text-sm tracking-wide transition-all min-h-[48px]"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 sm:py-4 bg-primary text-on-primary hover:bg-primary-container font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 shrink-0 flex items-center justify-center gap-2 min-h-[48px] cursor-pointer active:scale-[0.99]"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
