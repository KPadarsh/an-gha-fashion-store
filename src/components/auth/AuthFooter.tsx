"use client";

import React from "react";
import Link from "next/link";

export function AuthFooter() {
  return (
    <footer className="w-full bg-[#FAF6F1] border-t border-[#2B2420]/10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[880px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7168]">
        <p className="font-sans select-none">
          © 2026 An Gha. All rights reserved.
        </p>
        <div className="flex items-center gap-5 font-sans">
          <Link
            href="/shop"
            className="hover:text-[#2B2420] transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-[#2B2420]/20 select-none">·</span>
          <Link
            href="/shop"
            className="hover:text-[#2B2420] transition-colors"
          >
            Terms of Service
          </Link>
          <span className="text-[#2B2420]/20 select-none">·</span>
          <a
            href="mailto:concierge@angha.com"
            className="hover:text-[#2B2420] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
