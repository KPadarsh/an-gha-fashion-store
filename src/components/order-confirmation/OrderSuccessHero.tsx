"use client";

import React from "react";
import { MailCheck } from "lucide-react";
import { Order } from "@/types/order";

interface OrderSuccessHeroProps {
  order: Order;
}

export function OrderSuccessHero({ order }: OrderSuccessHeroProps) {
  return (
    <section className="mb-8 md:mb-16">
      {/* 01 / Order Confirmed Tag */}
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        <span className="w-2 h-2 rounded-full bg-[#894B37] inline-block shrink-0" />
        <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#894B37] font-semibold">
          01 / Order Confirmed
        </span>
      </div>

      {/* Mobile Title & Lead (< md) */}
      <div className="flex md:hidden flex-col">
        <h1 className="font-serif text-[2.25rem] text-[#211A16] tracking-tight leading-none mb-2 font-normal">
          Thank You.
        </h1>
        <p className="font-sans text-sm text-[#53433F] leading-relaxed mb-4">
          Your order has been received and is now being prepared in our atelier.
        </p>

        {/* Mobile Order Badge Receipt Card */}
        <article className="bg-[#FFF1EA] p-4 border border-[#2B2420]/10 shadow-xs relative overflow-hidden">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-baseline">
              <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#53433F] font-semibold">
                Order Number
              </span>
              <span className="font-mono text-xs tracking-wider text-[#211A16] font-semibold">
                {order.id}
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#53433F] font-semibold">
                Order Date
              </span>
              <span className="font-sans text-xs text-[#211A16]">{order.date}</span>
            </div>
            <div className="flex justify-between items-baseline pt-2 mt-1 bg-[#F3E5DF]/60 p-2.5 border border-[#2B2420]/5">
              <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-[#53433F] font-semibold">
                Notice Sent To
              </span>
              <span className="font-sans text-xs text-[#894B37] font-medium truncate max-w-[190px]">
                {order.customer.email || "hello@example.com"}
              </span>
            </div>
          </div>
        </article>
      </div>

      {/* Desktop Layout (>= md) */}
      <div className="hidden md:block">
        <div className="flex flex-row items-end justify-between gap-6 pb-8 border-b border-[#2B2420]/10">
          <div>
            <h1 className="font-serif text-5xl lg:text-[4rem] text-[#362F2B] tracking-tight leading-[0.95] font-normal">
              THANK YOU.
            </h1>
            <p className="font-sans text-lg text-[#625B52] mt-3 max-w-xl font-normal leading-relaxed">
              Your order has been received and is now being prepared in our atelier archive.
            </p>
          </div>

          <div className="flex flex-col items-end gap-1.5 self-end shrink-0">
            <div className="bg-[#F3E5DF] px-3.5 py-1.5 border border-[#2B2420]/10 flex items-center gap-2.5">
              <span className="font-mono text-xs text-[#625B52] tracking-wider uppercase">
                Order Reference
              </span>
              <span className="font-mono text-base font-semibold text-[#362F2B] tracking-widest">
                {order.id}
              </span>
            </div>
            <p className="font-sans text-xs text-[#85736E] tracking-normal">
              Recorded on <time dateTime={order.date}>{order.date}</time>
            </p>
          </div>
        </div>

        {/* Confirmation Monograph Email Notice */}
        <div className="mt-5 bg-[#FFF1EA]/60 p-4 border border-[#2B2420]/10 flex items-center gap-3">
          <MailCheck className="w-5 h-5 text-[#894B37] shrink-0" />
          <p className="font-sans text-sm text-[#53433F] leading-relaxed">
            A confirmation dispatch monograph has been addressed to{" "}
            <span className="font-medium text-[#211A16] underline decoration-[#D8C2BB] underline-offset-4">
              {order.customer.email || "hello@example.com"}
            </span>{" "}
            (prototype reference).
          </p>
        </div>
      </div>
    </section>
  );
}
