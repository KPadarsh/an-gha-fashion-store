"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export function CheckoutEmptyState() {
  return (
    <div className="w-full px-4 md:px-12 py-20 lg:py-28 flex items-center justify-center">
      <div className="max-w-xl w-full text-center flex flex-col items-center gap-6 bg-[#FFF1EA] p-8 sm:p-12 border border-[#2B2420]/10 shadow-xs">
        <span className="font-mono text-xs text-[#7A7168] uppercase tracking-widest">
          ATELIER ARCHIVE REGISTER
        </span>

        <div className="w-16 h-16 rounded-full bg-[#F3E5DF] flex items-center justify-center text-[#894B37]">
          <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2420] font-normal">
            YOUR BAG IS EMPTY
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#7A7168] max-w-md mx-auto leading-relaxed">
            You cannot proceed to checkout without an archive garment selected. Please browse our latest collection to continue.
          </p>
        </div>

        <Link
          href="/shop"
          className="mt-2 px-8 py-4 bg-[#2B2420] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#894B37] transition-colors shadow-xs"
        >
          RETURN TO SHOPPING — BROWSE PIECES
        </Link>

        <div className="pt-4 flex items-center gap-4 text-[#7A7168] font-sans text-[11px] uppercase tracking-wider font-semibold border-t border-[#2B2420]/10 w-full justify-center">
          <Link href="/shop" className="hover:text-[#2B2420] transition-colors">
            CURATED CAPSULE 24
          </Link>
          <span>•</span>
          <Link href="/shop?category=Dresses" className="hover:text-[#2B2420] transition-colors">
            SILK &amp; DRAPED ARCHIVE
          </Link>
        </div>
      </div>
    </div>
  );
}
