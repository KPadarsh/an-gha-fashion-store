"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Truck, Headphones, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartOrderSummary() {
  const { subtotal } = useCart();
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim()) {
      setPromoApplied(true);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Order Summary Box */}
      <div className="bg-[#FAF6F1] p-4 sm:p-6 lg:p-8 border border-[#2B2420]/15 lg:sticky lg:top-28 shadow-xs flex flex-col gap-4 sm:gap-6">
        {/* Title & Valuation Tag */}
        <div className="flex items-center justify-between pb-1 border-b border-[#2B2420]/10 lg:border-b-0 lg:pb-0 lg:block lg:space-y-1">
          <span className="hidden lg:block font-sans text-[10px] uppercase tracking-widest text-[#C17A63] font-semibold">
            VALUATION &amp; SETTLEMENT
          </span>
          <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#2B2420] font-semibold">
            ORDER SUMMARY
          </h3>
          <span className="lg:hidden font-mono text-xs text-[#7A7168]">
            ANG-ORD-2026
          </span>
        </div>

        {/* Price Calculations Matrix */}
        <div className="space-y-2.5 sm:space-y-3 font-sans text-[13px] lg:border-t lg:border-[#2B2420]/10 lg:pt-4">
          <div className="flex items-center justify-between text-[#7A7168]">
            <span>Subtotal</span>
            <span className="font-sans text-sm sm:text-base text-[#2B2420] font-semibold">
              ${subtotal}
            </span>
          </div>

          <div className="flex items-center justify-between text-[#7A7168]">
            <span>Shipping</span>
            <span className="font-sans text-xs text-[#7A7168] italic">
              Calculated at checkout
            </span>
          </div>

          <div className="hidden lg:flex items-center justify-between text-[#7A7168]">
            <span>Estimated Duties &amp; Taxes</span>
            <span className="font-sans text-xs text-[#7A7168] italic">
              Calculated at checkout
            </span>
          </div>
        </div>

        {/* Promo Code Expandable Section */}
        <div className="border-t border-[#2B2420]/10 pt-2.5">
          <button
            type="button"
            onClick={() => setIsPromoOpen((prev) => !prev)}
            className="w-full flex items-center justify-between py-1 text-left font-sans text-[10px] uppercase tracking-widest text-[#7A7168] hover:text-[#2B2420] transition-colors font-semibold cursor-pointer"
          >
            <span>HAVE A PROMO CODE? +</span>
            {isPromoOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </button>

          {isPromoOpen && (
            <form onSubmit={handleApplyPromo} className="mt-2.5 pt-1 space-y-2 animate-in fade-in duration-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="ENTER ARCHIVAL CODE"
                  className="flex-1 px-3 py-2 bg-[#FAF6F1] font-sans text-xs text-[#2B2420] uppercase placeholder:text-[#7A7168]/70 border border-[#2B2420]/20 focus:outline-none focus:border-[#2B2420]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#EFE4D8] text-[#2B2420] font-sans text-[11px] uppercase tracking-wider hover:bg-[#EDE5DB] border border-[#2B2420]/15 transition-colors font-semibold cursor-pointer"
                >
                  APPLY
                </button>
              </div>
              {promoApplied && (
                <p className="text-[10px] font-mono text-[#5C5A3E] uppercase tracking-wider">
                  ARCHIVAL PRIVILEGE CODE RECORDED
                </p>
              )}
            </form>
          )}
        </div>

        {/* Separation Line */}
        <div className="w-full h-px bg-[#2B2420]/10" />

        {/* Prominent Total Bar */}
        <div className="bg-[#EFE4D8] px-4 py-3 flex items-baseline justify-between border border-[#2B2420]/10">
          <span className="font-serif text-xl sm:text-2xl text-[#2B2420] font-medium">Total</span>
          <div className="text-right flex items-baseline gap-1">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-[#2B2420]">
              ${subtotal}
            </span>
            <span className="font-sans text-[10px] text-[#7A7168] uppercase font-semibold">
              USD
            </span>
          </div>
        </div>

        {/* Checkout CTA */}
        <Link
          href="/checkout"
          className="w-full h-12 sm:h-14 bg-[#2B2420] text-[#FAF6F1] hover:bg-[#C17A63] transition-colors flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-xs hover:shadow-sm active:scale-[0.99]"
        >
          <span>PROCEED TO CHECKOUT</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Secondary Back Navigation (Mobile) */}
        <Link
          href="/shop"
          className="md:hidden w-full py-1 text-center font-sans text-[11px] tracking-[0.2em] uppercase text-[#7A7168] hover:text-[#2B2420] transition-colors font-semibold"
        >
          ← CONTINUE SHOPPING
        </Link>

        {/* Desktop Atelier Assurances */}
        <div className="hidden lg:flex flex-col gap-3 pt-2 bg-[#F5EFE8] p-4 border border-[#2B2420]/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#C17A63]">
              <Truck className="w-4 h-4 shrink-0" strokeWidth={1.75} />
              <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-[#2B2420]">
                SHIPPING &amp; RETURNS
              </span>
            </div>
            <p className="font-sans text-[12px] text-[#7A7168] leading-relaxed">
              Shipping, duties, and concierge delivery options will be confirmed at checkout. Complimentary returns within 30 days of arrival.
            </p>
          </div>

          <div className="space-y-1 pt-2 border-t border-[#2B2420]/10">
            <div className="flex items-center gap-2 text-[#5C5A3E]">
              <Headphones className="w-4 h-4 shrink-0" strokeWidth={1.75} />
              <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-[#2B2420]">
                CONCIERGE INQUIRY
              </span>
            </div>
            <p className="font-sans text-[12px] text-[#7A7168] leading-relaxed">
              Need sizing guidance or bespoke fitting?{" "}
              <a
                href="mailto:concierge@angha.com"
                className="text-[#C17A63] underline underline-offset-4 hover:text-[#2B2420] transition-colors"
              >
                Contact Atelier Concierge
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Quiet Delivery Assurance */}
      <div className="lg:hidden text-center px-2 pt-1 pb-4">
        <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
          Shipping and delivery details will be confirmed at checkout. 30-day quiet return window on all unworn pieces.
        </p>
      </div>
    </div>
  );
}
