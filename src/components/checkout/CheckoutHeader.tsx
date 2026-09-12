"use client";

import React from "react";
import Link from "next/link";
import { Lock, User, ArrowLeft } from "lucide-react";

export function CheckoutHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF6F1]/95 backdrop-blur-md border-b border-[#2B2420]/10 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      {/* Mobile Header (< md) */}
      <div className="h-14 px-4 flex md:hidden items-center justify-between">
        <Link
          href="/cart"
          aria-label="Return to Bag"
          className="flex items-center justify-center w-11 h-11 text-[#2B2420] hover:text-[#894B37] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        <div className="flex flex-col items-center justify-center text-center">
          <Link
            href="/home"
            className="font-serif text-lg tracking-[0.18em] text-[#2B2420] leading-none hover:text-[#894B37] transition-colors"
          >
            An Gha
          </Link>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7A7168] mt-1">
            CHECKOUT
          </span>
        </div>

        <div className="flex items-center justify-end w-11 h-11">
          <div className="w-8 h-8 rounded-full bg-[#894B37] flex items-center justify-center text-[#FAF6F1]">
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Desktop Header (>= md) */}
      <div className="hidden md:flex h-20 w-full px-12 max-w-[1440px] mx-auto items-center justify-between">
        {/* Logo & Section Title */}
        <div className="flex items-baseline gap-2.5">
          <Link
            href="/home"
            className="font-serif text-2xl lg:text-3xl font-normal tracking-[0.18em] text-[#2B2420] hover:text-[#894B37] transition-colors"
          >
            An Gha
          </Link>
          <span className="font-sans text-[11px] font-semibold text-[#7A7168] uppercase tracking-widest">
            — CHECKOUT
          </span>
        </div>

        {/* 3-Step Navigation Links (Desktop) */}
        <nav className="flex items-center gap-6 md:gap-8">
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
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#7A7168] hidden lg:inline">
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
