"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, User } from "lucide-react";

export function AuthHeader() {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";
  const isSignUp = pathname === "/sign-up";

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF6F1]/95 backdrop-blur-md border-b border-[#2B2420]/10 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      {/* Mobile Header (< md) */}
      <div className="h-16 px-4 flex md:hidden items-center justify-between">
        <Link
          href="/shop"
          aria-label="Return to Archive"
          className="flex items-center gap-1.5 text-[#2B2420] hover:text-[#894B37] transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
          <span className="font-sans text-[11px] uppercase tracking-wider font-semibold">
            Archive
          </span>
        </Link>

        <div className="flex flex-col items-center justify-center text-center select-none">
          <Link
            href="/home"
            className="font-serif text-lg tracking-[0.18em] text-[#2B2420] leading-none hover:text-[#894B37] transition-colors"
          >
            An Gha
          </Link>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7A7168] mt-0.5">
            Client Atelier
          </span>
        </div>

        <div className="flex items-center justify-end">
          <div className="w-8 h-8 rounded-full bg-[#894B37] flex items-center justify-center text-[#FAF6F1]">
            <User className="w-4 h-4" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Desktop Header (>= md) */}
      <div className="hidden md:flex h-20 w-full px-8 lg:px-12 max-w-[1440px] mx-auto items-center justify-between">
        {/* Left: Return to Catalogue */}
        <div className="flex-1 flex items-center justify-start">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A7168] hover:text-[#2B2420] transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="underline decoration-[#2B2420]/20 underline-offset-4 group-hover:decoration-[#2B2420]">
              Return to Catalogue
            </span>
          </Link>
        </div>

        {/* Center: Brand Wordmark & Atelier Subtitle */}
        <div className="flex flex-col items-center justify-center text-center select-none">
          <Link
            href="/home"
            className="font-serif text-2xl lg:text-3xl font-normal tracking-[0.18em] text-[#2B2420] hover:text-[#894B37] transition-colors"
          >
            An Gha
          </Link>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7A7168] mt-0.5">
            Client Atelier — Sartorial Archive
          </span>
        </div>

        {/* Right: Auth Navigation Links & User Avatar */}
        <div className="flex-1 flex items-center justify-end gap-6 lg:gap-8">
          <nav className="flex items-center gap-6">
            <Link
              href="/sign-in"
              className={`font-sans text-[11px] uppercase tracking-[0.18em] transition-colors ${
                isSignIn
                  ? "text-[#2B2420] font-semibold underline decoration-[#894B37] underline-offset-4"
                  : "text-[#7A7168] hover:text-[#2B2420]"
              }`}
            >
              Client Login
            </Link>
            <Link
              href="/sign-up"
              className={`font-sans text-[11px] uppercase tracking-[0.18em] transition-colors ${
                isSignUp
                  ? "text-[#2B2420] font-semibold underline decoration-[#894B37] underline-offset-4"
                  : "text-[#7A7168] hover:text-[#2B2420]"
              }`}
            >
              Register
            </Link>
            <a
              href="mailto:concierge@angha.com"
              className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#7A7168] hover:text-[#2B2420] transition-colors"
            >
              Concierge
            </a>
          </nav>

          <div className="w-8 h-8 rounded-full bg-[#894B37] flex items-center justify-center text-[#FAF6F1] shrink-0">
            <User className="w-4 h-4" strokeWidth={2} />
          </div>
        </div>
      </div>
    </header>
  );
}
