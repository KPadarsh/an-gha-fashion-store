"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock, User } from "lucide-react";
import { useRouter } from "next/navigation";

export function OrderConfirmationHeader() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F5]/90 backdrop-blur-xl border-b border-[#2B2420]/10 shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      {/* Mobile Header (< md) */}
      <div className="flex md:hidden h-16 sm:h-20 px-4 items-center justify-between relative w-full">
        <button
          type="button"
          onClick={() => router.push("/shop")}
          aria-label="Return to Catalogue"
          className="w-11 h-11 flex items-center justify-center text-[#211A16] hover:text-[#894B37] transition-colors -ml-2"
        >
          <ArrowLeft className="w-5 h-5 text-[#211A16]" strokeWidth={1.75} />
        </button>

        <div className="flex flex-col items-center justify-center text-center select-none">
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.18em] text-[#211A16] leading-none hover:text-[#894B37] transition-colors"
          >
            An Gha
          </Link>
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#53433F] mt-1 font-semibold">
            Order Confirmation
          </span>
        </div>

        <div className="w-11 h-11 flex items-center justify-end -mr-2">
          <div className="w-8 h-8 rounded-full bg-[#894B37] flex items-center justify-center text-white shadow-xs">
            <User className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Desktop Header (>= md) */}
      <div className="hidden md:flex h-20 w-full px-12 items-center justify-between max-w-[1440px] mx-auto">
        {/* Brand & Atelier Mark */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-serif text-2xl lg:text-3xl font-normal tracking-[0.18em] text-[#211A16] hover:text-[#894B37] transition-colors focus-visible:outline-none"
            aria-label="An Gha Home"
          >
            An Gha
          </Link>
          <span className="font-mono text-xs text-[#85736E] uppercase ml-1 hidden sm:inline">
            / ATELIER
          </span>
        </div>

        {/* Right Status Badge & Client Profile */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-1.5 text-[#53433F]">
            <Lock className="w-3.5 h-3.5 text-[#53433F]" />
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#53433F] font-semibold">
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
