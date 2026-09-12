"use client";

import React from "react";
import Link from "next/link";
import { Archive } from "lucide-react";

interface OrderUnavailableFallbackProps {
  orderId?: string;
  onReset: () => void;
}

export function OrderUnavailableFallback({
  orderId = "ANGHA-2026-1048",
  onReset,
}: OrderUnavailableFallbackProps) {
  return (
    <section
      aria-label="Unavailable Archive View"
      className="flex flex-col px-4 py-16 md:py-24 text-center items-center max-w-md mx-auto w-full"
    >
      <div className="w-12 h-12 bg-[#EDE0D9] flex items-center justify-center mb-4 border border-[#2B2420]/5">
        <Archive className="w-6 h-6 text-[#894B37]" />
      </div>

      <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#894B37] mb-1 font-semibold">
        NOTICE — ARCHIVE NOT RETRIEVED
      </span>

      <h2 className="font-serif text-2xl md:text-3xl text-[#211A16] mb-2 font-normal">
        Order Record Unavailable
      </h2>

      <p className="font-sans text-xs md:text-sm text-[#53433F] max-w-[300px] mb-6 leading-relaxed">
        This transaction identifier cannot be recalled at this moment. Please check your network or consult our client atelier.
      </p>

      <div className="w-full flex flex-col gap-2.5">
        <Link
          href="/shop"
          className="w-full h-12 bg-[#211A16] text-[#FCEEE7] font-sans text-xs uppercase tracking-[0.16em] flex items-center justify-center hover:bg-[#894B37] transition-colors font-semibold"
        >
          Return to Catalogue — 01
        </Link>
        <button
          type="button"
          onClick={onReset}
          className="w-full py-2.5 text-center font-sans text-[11px] uppercase tracking-wider text-[#625B52] hover:text-[#211A16] transition-colors cursor-pointer"
        >
          Reload Order Reference ({orderId})
        </button>
      </div>
    </section>
  );
}

