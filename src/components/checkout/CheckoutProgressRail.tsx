"use client";

import React from "react";
import { Check } from "lucide-react";

export function CheckoutProgressRail() {
  return (
    <div className="w-full">
      {/* Mobile Numerical Progress Card (< md) */}
      <section
        aria-label="Checkout Progress"
        className="block md:hidden pb-4"
      >
        <div className="bg-[#FFF1EA] p-4 border border-[#2B2420]/10 shadow-xs">
          <div className="grid grid-cols-3 gap-2 items-center text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1">
                <span className="font-mono text-xs text-[#894B37] font-semibold">
                  01
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#894B37]" />
              </div>
              <span className="font-sans text-[10px] font-semibold text-[#894B37] tracking-widest uppercase">
                INFO
              </span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-1 opacity-90">
              <div className="flex items-center gap-1">
                <span className="font-mono text-xs text-[#7A7168] font-medium">
                  02
                </span>
              </div>
              <span className="font-sans text-[10px] font-semibold text-[#7A7168] tracking-widest uppercase">
                DELIVERY
              </span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-1 opacity-60">
              <div className="flex items-center gap-1">
                <span className="font-mono text-xs text-[#7A7168] font-medium">
                  03
                </span>
              </div>
              <span className="font-sans text-[10px] font-semibold text-[#7A7168] tracking-widest uppercase">
                PAYMENT
              </span>
            </div>
          </div>

          {/* Minimal running rule track */}
          <div className="mt-3 w-full h-[2px] bg-[#EDE0D9] flex">
            <div className="w-2/3 h-full bg-[#894B37] transition-all duration-500" />
            <div className="w-1/3 h-full bg-[#EDE0D9]" />
          </div>
        </div>
      </section>

      {/* Desktop 3-Step Rail (>= md) */}
      <nav
        aria-label="Checkout Progress"
        className="hidden md:block w-full py-4 mb-6 md:mb-8"
      >
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
    </div>
  );
}
