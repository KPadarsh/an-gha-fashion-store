"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { Order } from "@/types/order";

interface OrderItemsMatrixProps {
  order: Order;
}

export function OrderItemsMatrix({ order }: OrderItemsMatrixProps) {
  const totalItemCount = order.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="flex flex-col">
      {/* ================= MOBILE VIEW (< md) ================= */}
      <div className="flex md:hidden flex-col">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#894B37] font-semibold">
            02 / Your Order ({totalItemCount} {totalItemCount === 1 ? "Piece" : "Pieces"})
          </span>
          <span className="font-mono text-[10px] text-[#53433F] uppercase">
            SERIES 2026
          </span>
        </div>

        {/* Mobile Product Item Cards */}
        <div className="flex flex-col gap-2.5">
          {order.items.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-[#FFF1EA] p-2.5 flex gap-3 items-center shadow-xs border border-[#2B2420]/10"
            >
              <div className="w-[70px] h-[90px] shrink-0 bg-[#F3E5DF] overflow-hidden relative">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="70px"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <span className="font-mono text-[10px] text-[#53433F] block uppercase tracking-wider">
                    {item.specimenNumber || `CAT. NO. 081${index + 1}`}
                  </span>
                  <Link
                    href={item.href || `/shop/${item.productId}`}
                    className="font-serif text-base leading-snug text-[#211A16] truncate block font-normal"
                  >
                    {item.name}
                  </Link>
                  <p className="font-sans text-xs text-[#53433F] mt-0.5">
                    {item.color} • Size {item.size} • Qty: {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                  </p>
                </div>
                <span className="font-sans text-base text-[#211A16] font-medium pt-1">
                  ${(item.price * item.quantity).toFixed(0)} USD
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Financial Ledger Summary */}
        <div className="bg-[#F9EBE5] p-4 mt-3 shadow-xs border border-[#2B2420]/10 flex flex-col gap-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#53433F]">
              Subtotal
            </span>
            <span className="font-mono text-xs text-[#211A16]">
              ${order.subtotal.toFixed(0)} USD
            </span>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#53433F]">
              Atelier Shipping
            </span>
            {order.shippingCost === 0 ? (
              <span className="font-sans text-xs text-[#894B37] uppercase font-medium">
                Complimentary
              </span>
            ) : (
              <span className="font-mono text-xs text-[#211A16]">
                ${order.shippingCost.toFixed(0)} USD
              </span>
            )}
          </div>

          <div className="flex justify-between items-baseline pt-2.5 mt-1 bg-[#EDE0D9]/50 -mx-4 -mb-4 p-3 border-t border-[#2B2420]/10">
            <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#211A16] font-semibold">
              Total Amount
            </span>
            <span className="font-serif text-xl text-[#211A16] leading-none font-normal">
              ${order.total.toFixed(0)} USD
            </span>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW (>= md) ================= */}
      <div className="hidden md:flex flex-col">
        {/* 02 / Your Order Heading */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#2B2420]/10">
          <h2 className="font-sans text-[11px] uppercase tracking-widest text-[#53433F] font-bold">
            02 / Your Order ({totalItemCount} {totalItemCount === 1 ? "Piece" : "Pieces"})
          </h2>
          <span className="font-mono text-xs text-[#85736E] uppercase">
            ARCHIVE SERIES 08
          </span>
        </div>

        {/* Product Items List */}
        <div className="space-y-4">
          {order.items.map((item, index) => (
            <div
              key={item.id || index}
              className="flex gap-5 p-4 bg-[#FFFFFF] border border-[#2B2420]/10 shadow-xs transition hover:border-[#2B2420]/30"
            >
              {/* 3:4 Thumbnail Image */}
              <div className="w-[90px] h-[120px] bg-[#F3E5DF] overflow-hidden shrink-0 relative">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="90px"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Item Details */}
              <div className="flex flex-col justify-between py-0.5 w-full min-w-0">
                <div>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-[#625B52] block mb-1">
                    {item.category || `Archive Specimen 0${index + 1}`}
                  </span>
                  <Link
                    href={item.href || `/shop/${item.productId}`}
                    className="font-serif text-[1.15rem] sm:text-[1.2rem] text-[#362F2B] leading-snug truncate hover:text-[#894B37] transition-colors block font-normal"
                  >
                    {item.name}
                  </Link>
                  <p className="font-sans text-xs sm:text-sm text-[#625B52] mt-1">
                    Color:{" "}
                    <span className="text-[#211A16] font-medium">{item.color}</span>{" "}
                    · Size:{" "}
                    <span className="text-[#211A16] font-medium">{item.size}</span>
                  </p>
                  {item.fabricDetails && (
                    <p className="font-sans text-[11px] text-[#85736E] mt-0.5 uppercase tracking-wide">
                      {item.fabricDetails}
                    </p>
                  )}
                </div>

                {/* Quantity & Unit Price */}
                <div className="flex items-baseline justify-between pt-2 border-t border-[#2B2420]/5">
                  <span className="font-mono text-xs sm:text-sm text-[#85736E]">
                    Qty: {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                  </span>
                  <span className="font-sans text-base sm:text-lg text-[#362F2B] font-semibold">
                    ${(item.price * item.quantity).toFixed(0)} USD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Breakdown Card */}
        <div className="mt-8 bg-[#F3E5DF] p-6 md:p-7 border border-[#2B2420]/10 space-y-3">
          {/* Subtotal */}
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-[#625B52]">
              Subtotal ({totalItemCount} {totalItemCount === 1 ? "Item" : "Items"})
            </span>
            <span className="font-mono text-[#211A16] font-medium">
              ${order.subtotal.toFixed(2)} USD
            </span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div>
              <span className="text-[#625B52]">
                {order.shippingMethod === "express"
                  ? "Express Atelier Courier"
                  : "Standard Atelier Shipping"}
              </span>
              <span className="block text-[11px] text-[#85736E] font-normal">
                Calculated based on delivery zone
              </span>
            </div>
            {order.shippingCost === 0 ? (
              <span className="font-mono text-[#625F43] font-medium tracking-wide uppercase text-xs">
                Complimentary
              </span>
            ) : (
              <span className="font-mono text-[#211A16] font-medium">
                ${order.shippingCost.toFixed(2)} USD
              </span>
            )}
          </div>

          {/* Estimated Duties & Taxes */}
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-[#625B52]">Estimated Duties &amp; Taxes</span>
            <span className="font-sans text-xs text-[#625B52] uppercase tracking-wider font-medium">
              Included
            </span>
          </div>

          {/* Grand Total */}
          <div className="pt-4 mt-2 flex justify-between items-baseline bg-[#EDE0D9]/50 -mx-6 -mb-6 p-6 border-t border-[#2B2420]/10">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#362F2B] font-bold block">
                Grand Total
              </span>
              <span className="font-mono text-[11px] text-[#85736E]">
                All taxes &amp; bespoke handling accounted
              </span>
            </div>
            <span className="font-serif text-2xl md:text-3xl text-[#362F2B] font-normal tracking-tight">
              ${order.total.toFixed(2)}{" "}
              <span className="text-xs font-sans font-semibold text-[#625B52] tracking-wider uppercase">
                USD
              </span>
            </span>
          </div>
        </div>

        {/* Sustainable Packaging Seal */}
        <div className="mt-6 flex items-center gap-3 px-3 py-2 text-[#85736E] text-xs font-sans border border-[#2B2420]/10 bg-[#FAF6F1]">
          <Leaf className="w-4 h-4 text-[#894B37] shrink-0" />
          <span>
            Shipped in FSC-certified unbleached botanical craft pulp with water-soluble starch seal.
          </span>
        </div>
      </div>
    </div>
  );
}
