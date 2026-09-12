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
    <section className="px-4 md:px-12 py-12 md:py-20 bg-[#EDE5DB]/60 border-t border-[#2B2420]/15 flex flex-col items-center text-center">
      <div className="max-w-xl mx-auto flex flex-col gap-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#C17A63] font-semibold">
          MONOGRAPH CORRESPONDENCE
        </span>

        <h2 className="font-serif text-2xl md:text-3xl text-[#2B2420] font-light">
          A Quiet Update
        </h2>

        <p className="font-sans text-[13px] text-[#7A7168] leading-relaxed max-w-md mx-auto">
          Occasional dispatch on limited release editions, natural dye research, and atelier invitations. Zero spam, unhurried cadence.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 pt-2 max-w-md w-full mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 min-h-[46px] px-3.5 bg-[#FAF6F1] text-sm text-[#2B2420] placeholder:text-[#7A7168] border border-[#2B2420]/20 focus:outline-none focus:border-[#2B2420] transition-colors"
          />
          <button
            type="submit"
            className="min-h-[46px] px-6 bg-[#2B2420] hover:bg-[#C17A63] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest flex items-center justify-center transition-colors active:scale-95 border border-[#2B2420] shrink-0 font-semibold cursor-pointer"
          >
            <span>JOIN</span>
          </button>
        </form>

        {isSubmitted && (
          <span className="text-[#5C5A3E] font-sans text-[11px] pt-1 font-semibold uppercase tracking-wider animate-in fade-in duration-200">
            Thank you. You are now inscribed on the register.
          </span>
        )}
      </div>
    </section>
  );
}
