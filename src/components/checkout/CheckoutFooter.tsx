"use client";

import React from "react";
import Link from "next/link";

export function CheckoutFooter() {
  return (
    <footer className="w-full bg-[#FAF6F1] py-8 border-t border-[#2B2420]/10">
      <div className="w-full px-4 md:px-12 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
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
  );
}
