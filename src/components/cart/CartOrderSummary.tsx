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
    <div className="bg-[#FAF6F1] p-6 lg:p-8 border border-[#2B2420]/15 lg:sticky lg:top-28 shadow-xs flex flex-col gap-6">
      {/* Title & Valuation Tag */}
      <div className="space-y-1">
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#C17A63] font-semibold block">
          VALUATION &amp; SETTLEMENT
        </span>
        <h3 className="font-sans text-xs uppercase tracking-widest text-[#2B2420] font-semibold">
          ORDER SUMMARY
        </h3>
      </div>

      {/* Price Calculations Matrix */}
      <div className="space-y-3 font-sans text-[13px] border-t border-[#2B2420]/10 pt-4">
        <div className="flex items-center justify-between text-[#7A7168]">
          <span>Subtotal</span>
          <span className="font-sans text-base text-[#2B2420] font-semibold">
            ${subtotal}
          </span>
        </div>

        <div className="flex items-center justify-between text-[#7A7168]">
          <span>Shipping</span>
          <span className="font-sans text-xs text-[#7A7168] italic">
            Calculated at checkout
          </span>
        </div>

        <div className="flex items-center justify-between text-[#7A7168]">
          <span>Estimated Duties &amp; Taxes</span>
          <span className="font-sans text-xs text-[#7A7168] italic">
            Calculated at checkout
          </span>
        </div>
      </div>

      {/* Prominent Total Bar */}
      <div className="bg-[#EFE4D8] px-4 py-3 flex items-baseline justify-between border border-[#2B2420]/10">
        <span className="font-serif text-2xl text-[#2B2420] font-normal">Total</span>
        <div className="text-right flex items-baseline gap-1">
          <span className="font-serif text-2xl font-semibold text-[#2B2420]">
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
        className="w-full py-4 bg-[#2B2420] text-[#FAF6F1] hover:bg-[#C17A63] transition-colors flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold shadow-xs hover:shadow-sm active:scale-[0.99]"
      >
        <span>PROCEED TO CHECKOUT</span>
        <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Promo Code Expandable Section */}
      <div className="border-t border-[#2B2420]/10 pt-3">
        <button
          type="button"
          onClick={() => setIsPromoOpen((prev) => !prev)}
          className="w-full flex items-center justify-between py-1 text-left font-sans text-[10px] uppercase tracking-widest text-[#2B2420] hover:text-[#C17A63] transition-colors font-semibold cursor-pointer"
        >
          <span>HAVE A PROMO CODE?</span>
          {isPromoOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </button>

        {isPromoOpen && (
          <form onSubmit={handleApplyPromo} className="mt-3 pt-1 space-y-2 animate-in fade-in duration-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="ENTER CODE"
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

      {/* Atelier Assurances */}
      <div className="space-y-3.5 pt-4 bg-[#F5EFE8] p-4 border border-[#2B2420]/10">
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
  );
}
