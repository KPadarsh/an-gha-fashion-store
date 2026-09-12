"use client";

import React, { useState } from "react";
import { Package, Headset, Award, Check } from "lucide-react";

export function OrderNewsletterAssurance() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <>
      {/* ================= MOBILE VIEW (< md) ================= */}
      <section aria-label="Archive Subscription" className="block md:hidden py-8">
        <div className="bg-[#F3E5DF] p-6 shadow-xs border border-[#2B2420]/10 flex flex-col">
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#894B37] font-semibold mb-1">
            MONOGRAPH DISPATCH
          </span>
          <h3 className="font-serif text-xl text-[#211A16] mb-1 font-normal">
            A Quiet Update
          </h3>
          <p className="font-sans text-xs text-[#53433F] mb-4 leading-relaxed">
            Receive occasional notes on new silhouettes, textile origins, and atelier releases.
          </p>

          {subscribed ? (
            <div className="bg-[#FFFFFF] border border-[#2B2420]/10 p-3 text-center">
              <p className="font-sans text-xs text-[#894B37] font-medium">
                Thank you for joining our private reading list.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <label htmlFor="mobile-newsletter-email" className="sr-only">
                Email Address
              </label>
              <input
                id="mobile-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="w-full h-11 px-3 bg-[#FFF8F5] text-[#211A16] font-sans text-xs uppercase tracking-wider placeholder:text-[#85736E]/70 focus:outline-none focus:bg-[#FFFFFF] border border-[#2B2420]/15"
              />
              <button
                type="submit"
                className="w-full h-11 bg-[#894B37] text-white font-sans text-xs uppercase tracking-[0.16em] hover:bg-[#6F3724] transition-colors font-semibold cursor-pointer"
              >
                Join — Index
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ================= DESKTOP VIEW (>= md) ================= */}
      <div className="hidden md:block">
        {/* 6. NEWSLETTER SUBSCRIPTION BOX */}
        <section className="w-full bg-[#F3E5DF]/60 p-8 md:p-12 border border-[#2B2420]/10 my-8">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#894B37] font-bold mb-2">
              The Catalogue Edit
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#362F2B] tracking-tight mb-3 font-normal">
              A quiet update on limited monograph releases.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#625B52] max-w-md mb-8 leading-relaxed">
              Seasonal dispatches on textile provenance, bespoke tailoring schedules, and archival salon invitations. No algorithmic cadence.
            </p>

            {subscribed ? (
              <div className="bg-[#FFFFFF] border border-[#2B2420]/10 px-6 py-3 flex items-center gap-2 text-[#894B37]">
                <Check className="w-4 h-4" />
                <p className="font-sans text-xs sm:text-sm font-medium">
                  Thank you. You have been registered in the atelier salon roster.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="w-full max-w-md flex flex-col sm:flex-row gap-2"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#FFFFFF] text-[#211A16] px-4 py-3 font-sans text-xs sm:text-sm placeholder:text-[#85736E] border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#362F2B] text-[#FCEEE7] hover:bg-[#894B37] transition-colors px-6 py-3 font-sans text-xs uppercase tracking-widest shrink-0 font-semibold cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}

            <span className="font-mono text-[11px] text-[#85736E] mt-3">
              Dispatched quarterly. Unsubscribe at client discretion.
            </span>
          </div>
        </section>

        {/* 7. CLIENT CONCIERGE ASSURANCE BAR */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 text-center md:text-left border-t border-[#2B2420]/10">
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <Package className="w-5 h-5 text-[#894B37] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-[#362F2B] font-semibold">
                Archival Returns
              </h4>
              <p className="font-sans text-xs text-[#625B52] mt-1 leading-relaxed">
                Complimentary domestic return collection within 28 days of delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 justify-center md:justify-start">
            <Headset className="w-5 h-5 text-[#894B37] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-[#362F2B] font-semibold">
                Atelier Concierge
              </h4>
              <p className="font-sans text-xs text-[#625B52] mt-1 leading-relaxed">
                Direct access to our garment care and alteration specialists.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 justify-center md:justify-start">
            <Award className="w-5 h-5 text-[#894B37] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-[#362F2B] font-semibold">
                Provenance Verified
              </h4>
              <p className="font-sans text-xs text-[#625B52] mt-1 leading-relaxed">
                Each garment carries a unique serialized archival passport code.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

