"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Truck, RotateCcw, Headphones } from "lucide-react";

export function EmptyBagView() {
  return (
    <div className="w-full flex flex-col bg-[#FAF6F1] min-h-[70vh]">
      {/* SECTION 1: TOP ARCHIVAL TRACKER STRIP */}
      <section className="w-full px-4 md:px-12 py-2.5 bg-[#FFF1EA]/60 border-b border-[#2B2420]/10 flex items-center justify-between text-[#7A7168]">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#894B37]">
            PORTFOLIO INDEX
          </span>
          <span className="font-mono text-xs tracking-widest text-[#7A7168]">
            FOLIO REF. 24-AC00
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A7168]">
            CART STATUS: EMPTY [0 ITEMS]
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#894B37]/40" />
        </div>
      </section>

      {/* SECTION 2: CLEAN MINIMALIST EDITORIAL EMPTY STATE */}
      <section className="w-full px-4 md:px-12 py-16 lg:py-28 max-w-3xl mx-auto text-center flex flex-col items-center justify-center flex-1">
        <div className="w-14 h-14 rounded-full bg-[#FFF1EA] border border-[#2B2420]/10 flex items-center justify-center text-[#894B37] mb-6">
          <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#894B37] uppercase tracking-widest font-medium">
            01 / YOUR SELECTION
          </span>
          <span className="w-6 h-px bg-[#2B2420]/20" />
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#7A7168] font-semibold">
            BAG EMPTY
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2B2420] uppercase tracking-tight mb-4 leading-[1.08] font-normal">
          YOUR BAG<br />
          <span className="italic font-normal font-serif text-[#894B37]">
            IS EMPTY.
          </span>
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#7A7168] max-w-md mb-8 leading-relaxed">
          There are currently no pieces in your bag. Explore our collection of architectural silhouettes and tactile materials to add items.
        </p>

        <Link
          href="/shop"
          className="inline-flex items-center justify-center gap-2.5 bg-[#2B2420] text-[#FAF6F1] px-8 py-4 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#894B37] transition-all duration-300 shadow-xs hover:shadow-sm"
        >
          <span>EXPLORE THE ARCHIVE</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* SECTION 3: ASSURANCE & SERVICE PLEDGES BAR */}
      <section className="w-full bg-[#F9EBE5] py-10 lg:py-14 px-4 md:px-12 border-t border-[#2B2420]/10 mt-auto">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Assurance 01 */}
          <div className="flex items-start gap-4">
            <Truck className="w-6 h-6 text-[#894B37] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2420] mb-1">
                COMPLIMENTARY WORLDWIDE DELIVERY
              </h4>
              <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                All atelier pieces are packaged in untreated archival cotton and carbon-neutral express courier.
              </p>
            </div>
          </div>

          {/* Assurance 02 */}
          <div className="flex items-start gap-4">
            <RotateCcw className="w-6 h-6 text-[#894B37] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2420] mb-1">
                30-DAY QUIET RETURN POLICY
              </h4>
              <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                Home evaluations are accompanied by prepaid doorstep collection at your preferred cadence.
              </p>
            </div>
          </div>

          {/* Assurance 03 */}
          <div className="flex items-start gap-4">
            <Headphones className="w-6 h-6 text-[#894B37] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2420] mb-1">
                ATELIER CONCIERGE ASSISTANCE
              </h4>
              <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                Direct dialogue with our master tailors for sizing advisory, fiber inquiries, or bespoke commissions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
