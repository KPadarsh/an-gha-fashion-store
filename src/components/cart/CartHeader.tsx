"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export function CartHeader() {
  const { totalCount } = useCart();

  return (
    <section className="w-full px-6 md:px-12 pt-8 md:pt-12 pb-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2B2420]/10">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs uppercase text-[#C17A63] tracking-widest font-semibold">
              01 / YOUR SELECTION
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C17A63]/40" />
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#7A7168] font-semibold">
              EDITION 08 ARCHIVE
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B2420] tracking-tight leading-none font-normal">
            YOUR BAG.
          </h1>

          <p className="font-sans text-[13.5px] sm:text-[14px] text-[#7A7168] pt-1 leading-relaxed">
            A considered selection, ready when you are. Crafted with tactile restraint and archival precision.
          </p>
        </div>

        <div className="flex items-center gap-2.5 py-2 px-4 bg-[#EFE4D8] border border-[#2B2420]/10 self-start md:self-auto shrink-0">
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
