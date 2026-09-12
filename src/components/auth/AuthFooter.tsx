"use client";

import React from "react";
import Link from "next/link";

export function AuthFooter() {
  return (
    <footer className="w-full bg-[#FAF6F1] border-t border-[#2B2420]/10">
      {/* Mobile Footer (< md) */}
      <div className="flex md:hidden flex-col items-center text-center py-8 px-4 space-y-3">
        <div className="flex items-center justify-center gap-3 font-sans text-[11px] font-semibold text-[#7A7168] uppercase tracking-wider">
          <Link href="/shop" className="hover:text-[#2B2420] transition-colors py-1">
            Privacy Policy
          </Link>
          <span className="text-[#2B2420]/20 select-none">·</span>
          <Link href="/shop" className="hover:text-[#2B2420] transition-colors py-1">
            Terms
          </Link>
          <span className="text-[#2B2420]/20 select-none">·</span>
          <a href="mailto:concierge@angha.com" className="hover:text-[#2B2420] transition-colors py-1">
            Concierge
          </a>
        </div>
        <p className="font-sans text-[10px] font-semibold text-[#7A7168]/80 uppercase tracking-[0.22em] select-none">
          © 2026 ANGHA SARTORIAL ARCHIVE
        </p>
      </div>

      {/* Desktop Footer (>= md) */}
      <div className="hidden md:flex w-full px-8 lg:px-12 py-6 max-w-[1440px] mx-auto items-center justify-between gap-4 font-sans text-[11px] font-semibold uppercase tracking-widest text-[#7A7168]">
        <div>
          © 2026 ANGHA SARTORIAL ARCHIVE. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:concierge@angha.com"
            className="hover:text-[#2B2420] transition-colors underline decoration-transparent hover:decoration-[#2B2420]/30 underline-offset-4"
          >
            Client Concierge
          </a>
          <span className="text-[#2B2420]/20">•</span>
          <Link
            href="/shop"
            className="hover:text-[#2B2420] transition-colors underline decoration-transparent hover:decoration-[#2B2420]/30 underline-offset-4"
          >
            Terms of Atelier
          </Link>
          <span className="text-[#2B2420]/20">•</span>
          <Link
            href="/shop"
            className="hover:text-[#2B2420] transition-colors underline decoration-transparent hover:decoration-[#2B2420]/30 underline-offset-4"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
