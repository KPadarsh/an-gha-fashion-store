"use client";

import React from "react";
import { Check } from "lucide-react";

export function CheckoutProgressRail() {
  return (
    <nav aria-label="Checkout Progress" className="w-full py-4 mb-6 md:mb-8">
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {/* Step 1: Information */}
        <div className="flex flex-col gap-1.5">
          <div className="h-[2px] w-full bg-[#894B37] transition-all duration-300" />
          <div className="flex items-center justify-between pt-1">
            <span className="font-sans text-[11px] font-semibold text-[#894B37] tracking-[0.18em] uppercase">
              01 / INFORMATION
            </span>
            <Check className="w-3.5 h-3.5 text-[#894B37]" />
          </div>
        </div>

        {/* Step 2: Delivery */}
        <div className="flex flex-col gap-1.5">
          <div className="h-[2px] w-full bg-[#A6634E] transition-all duration-300" />
          <div className="flex items-center justify-between pt-1">
            <span className="font-sans text-[11px] font-semibold text-[#894B37] tracking-[0.18em] uppercase">
              02 / DELIVERY
            </span>
            <span className="font-mono text-[11px] text-[#894B37] font-medium tracking-wider">
              CURRENT
            </span>
          </div>
        </div>

        {/* Step 3: Payment & Review */}
        <div className="flex flex-col gap-1.5">
          <div className="h-[2px] w-full bg-[#2B2420]/15 transition-all duration-300" />
          <div className="flex items-center justify-between pt-1">
            <span className="font-sans text-[11px] font-semibold text-[#7A7168] tracking-[0.18em] uppercase">
              03 / REVIEW &amp; PAYMENT
            </span>
            <span className="font-mono text-[11px] text-[#7A7168] tracking-wider">
              PENDING
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
