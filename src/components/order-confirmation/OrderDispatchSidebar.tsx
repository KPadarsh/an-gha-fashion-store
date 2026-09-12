"use client";

import React from "react";
import Link from "next/link";
import { Truck, CreditCard, ShieldCheck, Printer, Download, QrCode } from "lucide-react";
import { Order } from "@/types/order";

interface OrderDispatchSidebarProps {
  order: Order;
}

export function OrderDispatchSidebar({ order }: OrderDispatchSidebarProps) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleDownloadMonograph = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(
      `Archival Monograph for Order ${order.id} is being generated for ${order.customer.email}.`
    );
  };

  return (
    <div className="flex flex-col space-y-6 md:space-y-8">
      {/* 03 / Dispatch & Destination */}
      <div className="bg-[#FFFFFF] p-6 border border-[#2B2420]/10 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2B2420]/10">
          <h2 className="font-sans text-[11px] uppercase tracking-widest text-[#53433F] font-bold">
            03 / Dispatch &amp; Destination
          </h2>
          <Truck className="w-4 h-4 text-[#85736E]" />
        </div>

        <div className="space-y-4">
          <div>
            <p className="font-sans text-[10px] uppercase text-[#85736E] tracking-wider mb-1 font-semibold">
              Delivering To
            </p>
            <div className="font-sans text-sm text-[#211A16] leading-relaxed">
              <p className="font-semibold text-[#362F2B]">
                {order.customer.firstName} {order.customer.lastName}
              </p>
              <p>{order.customer.address}</p>
              {order.customer.apartment && <p>{order.customer.apartment}</p>}
              <p>
                {order.customer.city}, {order.customer.state} {order.customer.pin},{" "}
                {order.customer.country}
              </p>
              <p className="text-[#625B52] text-xs mt-1">
                {order.customer.phone} (Prototype Client Record)
              </p>
            </div>
          </div>

          <div className="bg-[#F9EBE5] p-3 border border-[#2B2420]/10">
            <p className="font-sans text-[10px] uppercase text-[#625B52] tracking-wider mb-0.5 font-semibold">
              Transit Method
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#211A16] font-medium">
              {order.shippingMethod === "express"
                ? "Express Atelier Courier"
                : "Standard Atelier Transit"}
            </p>
            <p className="font-sans text-xs text-[#85736E] mt-0.5">
              {order.shippingMethod === "express"
                ? "Guaranteed 1–2 business days · Priority expedited courier"
                : "Estimated 3–5 business days · Zero-emission route courier"}
            </p>
          </div>
        </div>
      </div>

      {/* 04 / Payment Method */}
      <div className="bg-[#FFFFFF] p-6 border border-[#2B2420]/10 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2B2420]/10">
          <h2 className="font-sans text-[11px] uppercase tracking-widest text-[#53433F] font-bold">
            04 / Payment Method
          </h2>
          <CreditCard className="w-4 h-4 text-[#85736E]" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {order.payment.method === "upi" ? (
                <div className="w-10 h-7 bg-[#F3E5DF] border border-[#2B2420]/10 flex items-center justify-center font-mono text-[10px] font-bold tracking-wider text-[#362F2B]">
                  UPI
                </div>
              ) : order.payment.method === "cod" ? (
                <div className="w-10 h-7 bg-[#F3E5DF] border border-[#2B2420]/10 flex items-center justify-center font-mono text-[10px] font-bold tracking-wider text-[#362F2B]">
                  COD
                </div>
              ) : (
                <div className="w-10 h-7 bg-[#F3E5DF] border border-[#2B2420]/10 flex items-center justify-center font-mono text-[11px] font-bold tracking-wider text-[#362F2B]">
                  {order.payment.cardBrand || "VISA"}
                </div>
              )}

              <div>
                <p className="font-sans text-xs sm:text-sm text-[#211A16] font-semibold">
                  {order.payment.method === "upi"
                    ? `UPI ID: ${order.payment.upiId || "client@okhdfcbank"}`
                    : order.payment.method === "cod"
                    ? "Payable upon delivery"
                    : `Ending in ${order.payment.cardLast4 || "4821"}`}
                </p>
                <p className="font-sans text-xs text-[#625B52]">
                  {order.payment.method === "cod"
                    ? "Exact cash or card at doorstep presentation"
                    : "Verified via 3D Secure Gateway"}
                </p>
              </div>
            </div>

            <ShieldCheck className="w-5 h-5 text-[#625F43] shrink-0" />
          </div>

          <div className="pt-2 border-t border-[#2B2420]/5">
            <p className="font-sans text-[10px] uppercase text-[#85736E] tracking-wider font-semibold">
              Billing Address
            </p>
            <p className="font-sans text-xs text-[#625B52] mt-0.5">
              Identical to destination record
            </p>
          </div>
        </div>
      </div>

      {/* What Happens Next Block */}
      <div className="bg-[#FFF1EA]/80 p-6 border border-[#2B2420]/10">
        <h3 className="font-sans text-[11px] uppercase tracking-widest text-[#362F2B] font-bold mb-4 flex items-center gap-2">
          <span>What Happens Next</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#625B52] inline-block" />
        </h3>
        <ol className="space-y-4 font-sans text-xs sm:text-sm">
          <li className="flex gap-3">
            <span className="font-mono text-xs text-[#894B37] font-bold shrink-0 mt-0.5">
              01
            </span>
            <div>
              <span className="font-semibold text-[#362F2B] block">
                Order Confirmed
              </span>
              <p className="text-[#625B52] text-xs leading-relaxed mt-0.5">
                Your bespoke reservation is inscribed into the atelier master registry.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-xs text-[#894B37] font-bold shrink-0 mt-0.5">
              02
            </span>
            <div>
              <span className="font-semibold text-[#362F2B] block">
                Preparing in Atelier
              </span>
              <p className="text-[#625B52] text-xs leading-relaxed mt-0.5">
                Pieces are hand-inspected, folded in unbleached archival tissue, and scented with cedar wood shavings.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-xs text-[#894B37] font-bold shrink-0 mt-0.5">
              03
            </span>
            <div>
              <span className="font-semibold text-[#362F2B] block">
                On the Way
              </span>
              <p className="text-[#625B52] text-xs leading-relaxed mt-0.5">
                Tracking link and transit monograph are dispatched to your email immediately upon courier handoff.
              </p>
            </div>
          </li>
        </ol>
      </div>

      {/* Primary Actions Block */}
      <div className="pt-2 flex flex-col gap-3">
        <Link
          href="/shop"
          className="w-full text-center bg-[#362F2B] text-[#FCEEE7] hover:bg-[#894B37] transition-colors py-4 px-6 font-sans text-xs uppercase tracking-[0.18em] font-semibold block"
        >
          Continue Shopping →
        </Link>
        <div className="flex items-center justify-between px-1">
          <button
            type="button"
            onClick={handlePrint}
            className="text-[#625B52] hover:text-[#362F2B] font-sans text-[11px] uppercase tracking-wider flex items-center gap-1.5 py-1 cursor-pointer transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Archival Receipt
          </button>
          <button
            type="button"
            onClick={handleDownloadMonograph}
            className="text-[#625B52] hover:text-[#362F2B] font-sans text-[11px] uppercase tracking-wider flex items-center gap-1.5 py-1 cursor-pointer transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Order Monograph (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
