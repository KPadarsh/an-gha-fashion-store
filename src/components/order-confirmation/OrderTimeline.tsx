"use client";

import React from "react";
import { Order } from "@/types/order";

interface OrderTimelineProps {
  order: Order;
}

export function OrderTimeline({ order }: OrderTimelineProps) {
  return (
    <>
      {/* Mobile Atelier Progression (Vertical Stepper < md) */}
      <section aria-label="Order Progress" className="block md:hidden mb-8">
        <div className="bg-[#F9EBE5] p-4 border border-[#2B2420]/10 shadow-xs">
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#53433F] font-semibold block mb-4">
            ATELIER PROGRESSION
          </span>
          <div className="relative pl-6 flex flex-col gap-4">
            {/* Continuous Vertical Rail */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[#D8C2BB]" />

            {/* Step 1: Active */}
            <div className="relative flex items-start">
              <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[#894B37] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFF8F5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xs uppercase tracking-wider text-[#211A16] font-semibold">
                  01 Order Confirmed
                </span>
                <span className="font-sans text-xs text-[#53433F]">
                  Logged &amp; indexed into our archive (#{order.ledgerNumber})
                </span>
              </div>
            </div>

            {/* Step 2: Upcoming */}
            <div className="relative flex items-start opacity-70">
              <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[#EDE0D9] shadow-xs" />
              <div className="flex flex-col">
                <span className="font-sans text-xs uppercase tracking-wider text-[#211A16]">
                  02 Preparing
                </span>
                <span className="font-sans text-xs text-[#53433F]">
                  Hand-wrapped in raw tissue
                </span>
              </div>
            </div>

            {/* Step 3: Upcoming */}
            <div className="relative flex items-start opacity-50">
              <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[#EDE0D9] shadow-xs" />
              <div className="flex flex-col">
                <span className="font-sans text-xs uppercase tracking-wider text-[#211A16]">
                  03 Shipped
                </span>
                <span className="font-sans text-xs text-[#53433F]">
                  Dispatch with tracking code
                </span>
              </div>
            </div>

            {/* Step 4: Upcoming */}
            <div className="relative flex items-start opacity-40">
              <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[#EDE0D9] shadow-xs" />
              <div className="flex flex-col">
                <span className="font-sans text-xs uppercase tracking-wider text-[#211A16]">
                  04 Delivered
                </span>
                <span className="font-sans text-xs text-[#53433F]">
                  Signature atelier arrival
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Atelier Trajectory (Horizontal Stepper >= md) */}
      <section className="hidden md:block mb-14 md:mb-20 bg-[#FFFFFF] p-6 md:p-8 border border-[#2B2420]/10 shadow-xs">
        {/* Trajectory Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#85736E] font-semibold">
            Atelier Trajectory
          </span>
          <span className="font-mono text-xs text-[#625B52] uppercase">
            Phase 01 of 04
          </span>
        </div>

        {/* Stepper Visual */}
        <div className="relative">
          {/* Continuous Background Rail */}
          <div className="absolute top-3.5 left-3 right-3 h-[2px] bg-[#F3E5DF] -z-0" />
          {/* Active Segment */}
          <div className="absolute top-3.5 left-3 w-[15%] h-[2px] bg-[#894B37] -z-0" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {/* Step 1 (Active) */}
            <div className="flex flex-col items-start pr-2">
              <div className="w-7 h-7 bg-[#894B37] text-white flex items-center justify-center text-xs font-mono font-bold ring-4 ring-[#FFFFFF]">
                01
              </div>
              <div className="mt-3">
                <p className="font-sans text-xs uppercase tracking-widest text-[#362F2B] font-semibold">
                  Order Confirmed
                </p>
                <p className="font-sans text-xs text-[#894B37] font-medium mt-0.5">
                  Received today
                </p>
                <p className="font-sans text-[11px] text-[#625B52] mt-1">
                  Logged to ledger #{order.ledgerNumber}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-start pr-2">
              <div className="w-7 h-7 bg-[#F9EBE5] text-[#625B52] flex items-center justify-center text-xs font-mono ring-4 ring-[#FFFFFF]">
                02
              </div>
              <div className="mt-3">
                <p className="font-sans text-xs uppercase tracking-widest text-[#53433F]">
                  Preparing
                </p>
                <p className="font-sans text-xs text-[#625B52] mt-0.5">
                  Atelier curation
                </p>
                <p className="font-sans text-[11px] text-[#85736E] mt-1">
                  Hand-pressed &amp; wrapped
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-start pr-2">
              <div className="w-7 h-7 bg-[#F9EBE5] text-[#85736E] flex items-center justify-center text-xs font-mono ring-4 ring-[#FFFFFF]">
                03
              </div>
              <div className="mt-3">
                <p className="font-sans text-xs uppercase tracking-widest text-[#85736E]">
                  Shipped
                </p>
                <p className="font-sans text-xs text-[#85736E] mt-0.5">
                  In dispatch transit
                </p>
                <p className="font-sans text-[11px] text-[#85736E]/80 mt-1">
                  Carbon-neutral freight
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-start">
              <div className="w-7 h-7 bg-[#F9EBE5] text-[#85736E] flex items-center justify-center text-xs font-mono ring-4 ring-[#FFFFFF]">
                04
              </div>
              <div className="mt-3">
                <p className="font-sans text-xs uppercase tracking-widest text-[#85736E]">
                  Delivered
                </p>
                <p className="font-sans text-xs text-[#85736E] mt-0.5">
                  Doorstep presentation
                </p>
                <p className="font-sans text-[11px] text-[#85736E]/80 mt-1">
                  Signature receipt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
