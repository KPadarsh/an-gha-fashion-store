"use client";

import React, { useState } from "react";

export function ProductNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="w-full bg-[#EDE5DB] py-16 md:py-20 mt-12 border-t border-[#2B2420]/10">
      <div className="max-w-xl mx-auto px-6 text-center flex flex-col items-center gap-4">
        <span className="text-[10px] font-semibold text-[#C17A63] tracking-[0.25em] uppercase">
          03 / THE CATALOGUE EDIT — A QUIET UPDATE
        </span>

        <h3 className="font-serif text-3xl text-[#2B2420] font-normal">
          A quiet update.
        </h3>

        <p className="text-[13px] text-[#7A7168] leading-relaxed max-w-md">
          Receive unreleased catalogue monographs, private fitting invitations, and notifications when limited archival editions are cut.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-2 pt-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR EMAIL ADDRESS"
            required
            className="flex-1 bg-[#FAF6F1] px-4 py-3 text-[11px] font-semibold text-[#2B2420] placeholder:text-[#7A7168]/70 border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] uppercase tracking-wider"
          />
          <button
            type="submit"
            className="bg-[#2B2420] hover:bg-[#C17A63] text-[#FAF6F1] text-[11px] font-semibold uppercase tracking-[0.2em] px-8 py-3 transition-colors cursor-pointer"
          >
            JOIN
          </button>
        </form>

        {isSubmitted && (
          <span className="text-[11px] font-semibold text-[#C17A63] tracking-widest pt-1 uppercase animate-in fade-in duration-200">
            YOUR CORRESPONDENCE IS RECORDED IN OUR REGISTRY.
          </span>
        )}
      </div>
    </section>
  );
}
