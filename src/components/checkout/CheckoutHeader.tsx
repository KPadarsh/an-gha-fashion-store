"use client";

import React from "react";
import Link from "next/link";
import { Lock, User } from "lucide-react";

export function CheckoutHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF6F1]/95 backdrop-blur-md border-b border-[#2B2420]/10">
      <div className="h-20 w-full px-4 md:px-12 max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo & Section Title */}
        <div className="flex items-baseline gap-2.5">
          <Link
            href="/"
            className="font-serif text-2xl tracking-tight text-[#2B2420] uppercase hover:text-[#894B37] transition-colors"
          >
            ANGHA
          </Link>
          <span className="font-sans text-[11px] font-semibold text-[#7A7168] uppercase tracking-widest">
            — CHECKOUT
          </span>
        </div>

        {/* 3-Step Navigation Links (Desktop) */}
        <nav className="hidden sm:flex items-center gap-6 md:gap-8">
          <span className="font-sans text-xs uppercase tracking-wider text-[#2B2420] font-semibold">
            01 Shipping
          </span>
          <span className="font-sans text-xs uppercase tracking-wider text-[#7A7168]">
            02 Delivery
          </span>
          <span className="font-sans text-xs uppercase tracking-wider text-[#7A7168]">
            03 Payment
          </span>
        </nav>

        {/* Security Badge & User Avatar */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#7A7168]">
            <Lock className="w-4 h-4 text-[#7A7168]" strokeWidth={1.75} />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#7A7168] hidden md:inline">
              SECURE CHECKOUT
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#894B37] flex items-center justify-center shrink-0 text-[#FAF6F1]">
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
