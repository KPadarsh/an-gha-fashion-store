"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export function CartHeader() {
  const { totalCount } = useCart();

  return (
    <section className="w-full px-4 md:px-12 pt-5 md:pt-12 pb-3 md:pb-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 pb-4 md:pb-6 border-b border-[#2B2420]/10">
        <div className="space-y-1.5 md:space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase text-[#C17A63] tracking-[0.2em] font-semibold">
              01 / YOUR SELECTION
            </span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#C17A63]/40" />
            <span className="hidden md:inline-block font-sans text-[11px] uppercase tracking-widest text-[#7A7168] font-semibold">
              EDITION 08 ARCHIVE
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2B2420] tracking-tight leading-none font-normal">
            YOUR BAG.
          </h1>

          <p className="font-sans text-xs sm:text-[14px] text-[#7A7168] pt-0.5 leading-relaxed">
            A considered selection ({totalCount} {totalCount === 1 ? "piece" : "pieces"}).
            <span className="hidden md:inline"> Crafted with tactile restraint and archival precision.</span>
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2.5 py-2 px-4 bg-[#EFE4D8] border border-[#2B2420]/10 self-start md:self-auto shrink-0">
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#7A7168] font-semibold">
            CATALOGUE
          </span>
          <span className="font-sans text-[11px] text-[#2B2420]">/</span>
          <span className="font-sans text-[11px] text-[#2B2420] tracking-widest uppercase font-semibold">
            BAG [{totalCount} {totalCount === 1 ? "PIECE" : "PIECES"}]
          </span>
        </div>
      </div>
    </section>
  );
}
