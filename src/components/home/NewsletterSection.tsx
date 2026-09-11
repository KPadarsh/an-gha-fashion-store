"use client";

import React, { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="w-full bg-inverse-surface text-inverse-on-surface py-12 sm:py-16 lg:py-24">
      <div className="angha-container">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-fixed block">
            07 / THE CATALOGUE EDIT
          </span>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-inverse-on-surface font-normal">
            A QUIET UPDATE.
          </h2>

          <p className="font-sans text-xs sm:text-sm lg:text-base text-surface-variant/80 max-w-lg mx-auto leading-relaxed">
            New collections, selected pieces, and occasional notes from ANGHA.
          </p>

          {isSubmitted ? (
            <div className="pt-4 text-primary-fixed font-sans text-xs tracking-widest uppercase">
              Thank you for subscribing to the catalogue edit.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch justify-center max-w-md mx-auto gap-0"
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
                className="w-full px-4 py-3 sm:py-3.5 bg-white/10 text-inverse-on-surface placeholder:text-surface-variant/50 border-b border-surface-variant/40 focus:border-primary-fixed focus:outline-none font-sans text-xs sm:text-sm tracking-wide min-h-[44px]"
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-on-primary font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:bg-primary-container transition-colors duration-150 shrink-0 mt-3 sm:mt-0 min-h-[44px]"
              >
                JOIN
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
