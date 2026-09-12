"use client";

import React from "react";
import Link from "next/link";
import { Lock } from "lucide-react";

export function CheckoutFooter() {
  return (
    <>
      {/* Mobile Fixed Bottom Security Bar (< md) */}
      <footer className="block md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF6F1]/95 backdrop-blur-xl border-t border-[#2B2420]/10 shadow-[0_-1px_10px_rgba(0,0,0,0.03)]">
        <div className="h-12 px-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="font-sans text-[10px] font-semibold text-[#7A7168] uppercase tracking-widest">
              ENCRYPTED COMMERCE
            </span>
          </div>
          <div className="flex items-center gap-1 text-[#2B2420]">
            <Lock className="w-3.5 h-3.5 text-[#7A7168]" strokeWidth={1.75} />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-[#2B2420]">
              256-BIT TLS
            </span>
          </div>
        </div>
      </footer>

      {/* Desktop Footer (>= md) */}
      <footer className="hidden md:block w-full bg-[#FAF6F1] py-8 border-t border-[#2B2420]/10">
        <div className="w-full px-12 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-sans text-[11px] font-semibold text-[#7A7168] uppercase tracking-widest">
            © 2026 ANGHA SARTORIAL ARCHIVE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/shop"
              className="font-sans text-[11px] font-semibold text-[#7A7168] hover:text-[#2B2420] uppercase tracking-widest transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/shop"
              className="font-sans text-[11px] font-semibold text-[#7A7168] hover:text-[#2B2420] uppercase tracking-widest transition-colors"
            >
              TERMS OF SERVICE
            </Link>
            <Link
              href="/shop"
              className="font-sans text-[11px] font-semibold text-[#7A7168] hover:text-[#2B2420] uppercase tracking-widest transition-colors"
            >
              CLIENT ASSISTANCE
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
