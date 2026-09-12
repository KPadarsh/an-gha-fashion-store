"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Plus, Minus, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CheckoutOrderSummaryProps {
  deliveryMethod: "standard" | "express";
  onPlaceOrder?: () => void;
}

export function CheckoutOrderSummary({
  deliveryMethod,
  onPlaceOrder,
}: CheckoutOrderSummaryProps) {
  const { items, subtotal, totalCount } = useCart();
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const shippingCost = deliveryMethod === "express" ? 45 : 0;
  const discountAmount = isPromoApplied ? 20 : 0;
  const totalAmount = Math.max(0, subtotal + shippingCost - discountAmount);
  const taxEstimate = (subtotal * 0.18).toFixed(2);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim()) {
      setIsPromoApplied(true);
    }
  };

  return (
    <section className="bg-[#FFF1EA] p-6 sm:p-8 flex flex-col gap-6 lg:sticky lg:top-28 border border-[#2B2420]/10 shadow-xs">
      {/* Summary Header */}
      <div className="flex items-baseline justify-between border-b border-[#2B2420]/10 pb-4">
        <div className="flex items-baseline gap-2">
          <h3 className="font-serif text-xl sm:text-2xl text-[#2B2420] uppercase tracking-tight font-normal">
            YOUR ORDER
          </h3>
          <span className="font-sans text-[11px] font-semibold text-[#7A7168] uppercase">
            ({totalCount} {totalCount === 1 ? "PIECE" : "PIECES"})
          </span>
        </div>

        <Link
          href="/cart"
          className="font-sans text-[11px] font-semibold text-[#894B37] hover:text-[#2B2420] transition-colors uppercase tracking-widest flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>EDIT BAG</span>
        </Link>
      </div>

      {/* Product Line Items */}
      <div className="flex flex-col gap-4">
        {items.map((item, idx) => {
          const itemNum = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
          const itemFeatureTag =
            item.category === "DRESSES"
              ? "COMPLIMENTARY HEMMING"
              : item.category === "KNITWEAR"
              ? "PURE MERINO"
              : "ARCHIVAL SELECTION";

          return (
            <React.Fragment key={item.id}>
              <div className="flex gap-4 items-start pt-1">
                {/* 3:4 Thumbnail with Qty overlay */}
                <div className="w-20 h-28 shrink-0 bg-[#EDE0D9] overflow-hidden relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    quality={90}
                    sizes="80px"
                    className="object-cover object-center"
                  />
                  <span className="absolute bottom-1 right-1 bg-[#FAF6F1]/90 text-[#2B2420] font-mono text-[9px] px-1 font-semibold">
                    QTY {item.quantity}
                  </span>
                </div>

                {/* Details Column */}
                <div className="flex-1 flex flex-col justify-between h-28 py-0.5">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#7A7168] uppercase">
                      ARCHIVE ITEM #{itemNum}
                    </span>
                    <h4 className="font-serif text-[1.125rem] text-[#2B2420] leading-snug font-normal">
                      {item.name}
                    </h4>
                    <span className="font-sans text-xs text-[#7A7168] pt-0.5">
                      {item.color} · Size {item.size}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-sans text-[10px] font-semibold text-[#5C5A3E] uppercase tracking-wider">
                      {itemFeatureTag}
                    </span>
                    <span className="font-sans text-sm font-semibold text-[#2B2420]">
                      ${item.price * item.quantity} USD
                    </span>
                  </div>
                </div>
              </div>

              {idx < items.length - 1 && (
                <div className="w-full h-px bg-[#2B2420]/10" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Expandable Promo Code Accordion */}
      <div className="flex flex-col pt-2 border-t border-[#2B2420]/10">
        <button
          type="button"
          onClick={() => setIsPromoOpen((prev) => !prev)}
          className="flex items-center justify-between w-full py-1 text-left group cursor-pointer"
        >
          <span className="font-sans text-[11px] font-semibold text-[#2B2420] uppercase tracking-widest group-hover:text-[#894B37] transition-colors">
            {isPromoOpen ? "ENTER ATELIER CODE —" : "HAVE A PROMO CODE? +"}
          </span>
          {isPromoOpen ? (
            <Minus className="w-3.5 h-3.5 text-[#7A7168] group-hover:text-[#894B37]" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-[#7A7168] group-hover:text-[#894B37]" />
          )}
        </button>

        {isPromoOpen && (
          <form
            onSubmit={handleApplyPromo}
            className="pt-2.5 animate-in fade-in duration-200 space-y-2"
          >
            <div className="flex items-stretch gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="ENTER ATELIER VOUCHER"
                className="flex-1 bg-[#FAF6F1] px-4 py-2.5 font-sans text-xs text-[#2B2420] uppercase tracking-wider placeholder:text-[#7A7168]/60 border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420]"
              />
              <button
                type="submit"
                className="px-5 bg-[#2B2420] text-[#FAF6F1] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#894B37] transition-colors cursor-pointer"
              >
                APPLY
              </button>
            </div>
            {isPromoApplied && (
              <p className="font-mono text-[10px] text-[#5C5A3E] uppercase tracking-wider">
                VOUCHER APPLIED • $20 ATELIER PRIVILEGE
              </p>
            )}
          </form>
        )}
      </div>

      {/* Calculations Matrix */}
      <div className="flex flex-col gap-2.5 pt-4 border-t border-[#2B2420]/10 font-sans text-[13px]">
        <div className="flex justify-between items-center text-[#7A7168]">
          <span>Subtotal</span>
          <span className="text-[#2B2420] font-semibold text-sm">
            ${subtotal} USD
          </span>
        </div>

        <div className="flex justify-between items-center text-[#7A7168]">
          <div className="flex flex-col">
            <span>
              {deliveryMethod === "express"
                ? "Express Bespoke Courier"
                : "Atelier Standard Shipping"}
            </span>
            {deliveryMethod === "standard" && (
              <span className="font-sans text-[10px] text-[#5C5A3E] font-semibold tracking-wider">
                ORDERS OVER $200 QUALIFY
              </span>
            )}
          </div>
          <span
            className={`font-sans text-xs font-semibold ${
              deliveryMethod === "express"
                ? "text-[#2B2420]"
                : "text-[#5C5A3E] uppercase tracking-wider"
            }`}
          >
            {deliveryMethod === "express" ? "+$45 USD" : "COMPLIMENTARY"}
          </span>
        </div>

        <div className="flex justify-between items-center text-[#7A7168]">
          <span>Estimated Tax (GST 18% included)</span>
          <span className="text-[#2B2420] font-medium">${taxEstimate} USD</span>
        </div>

        {isPromoApplied && (
          <div className="flex justify-between items-center text-[#5C5A3E] font-semibold">
            <span>Atelier Privilege Discount</span>
            <span>-$20 USD</span>
          </div>
        )}

        <div className="w-full h-px bg-[#2B2420]/15 my-1" />

        {/* Total Balance Due */}
        <div className="flex justify-between items-baseline pt-1">
          <div className="flex flex-col">
            <span className="font-sans text-[11px] font-semibold text-[#7A7168] uppercase tracking-widest">
              TOTAL BALANCE DUE
            </span>
            <span className="font-sans text-[11px] text-[#7A7168]/80">
              INCLUDING ALL TARIFFS &amp; DUTIES
            </span>
          </div>
          <div className="text-right">
            <span className="font-serif text-3xl text-[#2B2420] font-normal tracking-tight">
              ${totalAmount}{" "}
              <span className="font-sans text-sm text-[#7A7168] font-medium">
                USD
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Checkout Primary CTA */}
      <div className="flex flex-col gap-2.5 pt-2">
        <button
          type="button"
          onClick={onPlaceOrder}
          className="w-full py-4 bg-[#2B2420] text-[#FAF6F1] hover:bg-[#894B37] transition-colors duration-200 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-center shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>PLACE ORDER — ${totalAmount} USD</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="font-sans text-xs text-[#7A7168] text-center leading-relaxed">
          By placing your order, you agree to ANGHA&apos;s{" "}
          <Link href="/shop" className="underline hover:text-[#2B2420]">
            Terms of Atelier
          </Link>{" "}
          and{" "}
          <Link href="/shop" className="underline hover:text-[#2B2420]">
            Privacy Statement
          </Link>
          .
        </p>
      </div>

      {/* Quiet Reassurance Badges */}
      <div className="p-4 bg-[#F3E5DF]/70 border border-[#2B2420]/10 flex flex-col gap-1 text-center">
        <div className="flex items-center justify-center gap-1.5 text-[#5C5A3E]">
          <ShieldCheck className="w-4 h-4" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-widest">
            ANGHA ATELIER GUARANTEE
          </span>
        </div>
        <p className="font-sans text-[11px] text-[#7A7168]">
          SECURE CHECKOUT · DATA PROTECTED · 30-DAY QUIET RETURNS
        </p>
      </div>
    </section>
  );
}
