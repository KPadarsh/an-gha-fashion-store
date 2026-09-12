"use client";

import React from "react";
import Link from "next/link";
import { Lock, User } from "lucide-react";

export function OrderConfirmationHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F5]/90 backdrop-blur-xl border-b border-[#2B2420]/10 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-20 w-full px-4 md:px-12 flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Brand & Atelier Mark */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-serif text-2xl lg:text-3xl tracking-tight text-[#211A16] hover:text-[#894B37] transition-colors focus-visible:outline-none"
            aria-label="An Gha Home"
          >
            ANGHA
          </Link>
          <span className="font-mono text-xs text-[#85736E] uppercase ml-1 hidden sm:inline">
            / ATELIER
          </span>
        </div>

        {/* Right Status Badge & Client Profile */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-1.5 text-[#53433F]">
            <Lock className="w-3.5 h-3.5 text-[#53433F]" />
            <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest text-[#53433F] font-semibold">
              Order Confirmation
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#894B37] flex items-center justify-center text-white shadow-xs">
            <User className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
    </header>
  );
}
