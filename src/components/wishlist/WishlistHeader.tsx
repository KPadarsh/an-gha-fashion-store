"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Trash2, Check } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface WishlistHeaderProps {
  totalCount: number;
}

export function WishlistHeader({ totalCount }: WishlistHeaderProps) {
  const { addAllToCart, clearWishlist } = useWishlist();
  const [isAddedAll, setIsAddedAll] = useState(false);

  const handleAddAll = () => {
    addAllToCart();
    setIsAddedAll(true);
    setTimeout(() => setIsAddedAll(false), 2500);
  };

  return (
    <div className="w-full flex flex-col bg-[#FAF6F1]">
      {/* 1. TOP ARCHIVAL TRACKER STRIP */}
      <section className="w-full px-4 md:px-12 py-2.5 bg-[#FFF1EA]/60 border-b border-[#2B2420]/10 flex items-center justify-between text-[#7A7168]">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#894B37]">
            PORTFOLIO INDEX
          </span>
          <span className="font-mono text-xs tracking-widest text-[#7A7168]">
            FOLIO REF. 26-WL00
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A7168]">
            EDITION 08 / SAVED SPECIMENS: {totalCount} {totalCount === 1 ? "PIECE" : "PIECES"}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#894B37]/80 animate-pulse" />
        </div>
      </section>

      {/* 2. EDITORIAL PAGE HEADER & ACTIONS */}
      <section className="w-full px-4 md:px-12 pt-8 md:pt-14 pb-8 max-w-[1440px] mx-auto border-b border-[#2B2420]/10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          {/* Editorial Title & Lead */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#894B37] inline-block" />
              <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#894B37] font-semibold">
                01 / Private Index
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2B2420] uppercase tracking-tight font-normal leading-[1.05]">
              SAVED SPECIMENS
            </h1>

            <p className="font-sans text-xs sm:text-sm text-[#7A7168] mt-3 sm:mt-4 leading-relaxed max-w-xl">
              A private repository of considered silhouettes, untreated wools, and washed silks reserved for your bespoke wardrobe curation.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleAddAll}
              className="inline-flex items-center justify-center gap-2 bg-[#2B2420] text-[#FAF6F1] px-6 py-3.5 font-sans text-xs uppercase tracking-[0.14em] font-semibold hover:bg-[#894B37] transition-all duration-300 shadow-xs cursor-pointer"
            >
              {isAddedAll ? (
                <>
                  <Check className="w-4 h-4 text-[#FAF6F1]" />
                  <span>ALL PIECES ADDED TO BAG</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD ALL TO BAG</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={clearWishlist}
              className="inline-flex items-center justify-center gap-1.5 bg-[#FFF1EA] text-[#7A7168] hover:text-[#2B2420] hover:bg-[#F3E5DF] px-4 py-3.5 font-sans text-xs uppercase tracking-wider font-semibold transition-colors border border-[#2B2420]/10 cursor-pointer"
              title="Clear all saved pieces"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>CLEAR</span>
            </button>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-1.5 text-[#2B2420] hover:text-[#894B37] px-3 py-3.5 font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              <span>EXPLORE SHOP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
