"use client";

import React from "react";
import Link from "next/link";
import { ReceiptText } from "lucide-react";

interface OrderUnavailableFallbackProps {
  orderId?: string;
  onReset: () => void;
}

export function OrderUnavailableFallback({
  orderId = "ANGHA-2026-1048",
  onReset,
}: OrderUnavailableFallbackProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-md w-full bg-[#FFFFFF] p-8 md:p-10 border border-[#2B2420]/10 shadow-sm text-center">
        <div className="w-12 h-12 rounded-full bg-[#F9EBE5] flex items-center justify-center mx-auto mb-5">
          <ReceiptText className="w-6 h-6 text-[#625B52]" />
        </div>

        <span className="font-sans text-[11px] uppercase tracking-widest text-[#894B37] font-semibold block mb-2">
          Registry Status Notice
        </span>

        <h2 className="font-serif text-xl sm:text-2xl text-[#362F2B] mb-3 font-normal">
          Order Details Unavailable
        </h2>

        <p className="font-sans text-xs sm:text-sm text-[#625B52] leading-relaxed mb-6">
          We are temporarily unable to pull the historical record for this reference code from the archive database. Your transaction remains secured.
        </p>

        <div className="bg-[#FFF1EA] p-4 border border-[#2B2420]/5 mb-8 text-left">
          <p className="font-sans text-[10px] uppercase text-[#85736E] tracking-wider font-semibold">
            Assistance Hotline
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#211A16] font-medium mt-1">
            Please quote reference{" "}
            <span className="font-mono text-[#362F2B] font-semibold">
              {orderId}
            </span>{" "}
            to our client concierge:
          </p>
          <a
            className="font-sans text-xs sm:text-sm text-[#894B37] hover:underline block mt-1 font-medium"
            href="mailto:concierge@angha-atelier.com"
          >
            concierge@angha-atelier.com
          </a>
        </div>

        <div className="space-y-3">
          <Link
            href="/shop"
            className="w-full bg-[#362F2B] text-[#FCEEE7] hover:bg-[#894B37] transition-colors py-3 px-6 font-sans text-xs uppercase tracking-widest font-semibold block"
          >
            Continue Shopping →
          </Link>
          <button
            type="button"
            onClick={onReset}
            className="w-full bg-transparent text-[#625B52] hover:text-[#362F2B] font-sans text-[11px] uppercase tracking-wider py-2 cursor-pointer transition-colors"
          >
            Reload Order Reference
          </button>
        </div>
      </div>
    </div>
  );
}
