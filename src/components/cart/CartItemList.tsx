"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowLeft, Plus, Minus, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartItemList() {
  const { items, updateQuantity, removeItem, totalCount } = useCart();

  return (
    <div className="flex flex-col space-y-4">
      {/* Table Header Bar (Desktop/Tablet) */}
      <div className="hidden md:flex items-center justify-between py-2.5 px-4 bg-[#EFE4D8] border border-[#2B2420]/10 text-[#7A7168]">
        <span className="font-sans text-xs uppercase tracking-widest text-[#2B2420] font-semibold">
          SELECTION ({totalCount})
        </span>
        <div className="flex items-center gap-12 sm:gap-16">
          <span className="font-sans text-[10px] uppercase tracking-wider hidden sm:inline-block font-semibold">
            QUANTITY
          </span>
          <span className="font-sans text-[10px] uppercase tracking-wider pr-2 font-semibold">
            TOTAL
          </span>
        </div>
      </div>

      {/* Item Rows */}
      {items.length === 0 ? (
        <div className="p-8 sm:p-12 text-center bg-[#FAF6F1] border border-[#2B2420]/15 flex flex-col items-center gap-3">
          <p className="font-serif text-2xl text-[#2B2420]">Your bag is currently empty.</p>
          <p className="font-sans text-xs text-[#7A7168] max-w-sm">
            Explore our catalogue to curate your seasonal archival wardrobe.
          </p>
          <Link
            href="/shop"
            className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#2B2420] hover:bg-[#C17A63] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            DISCOVER ARCHIVE →
          </Link>
        </div>
      ) : (
        items.map((item, idx) => {
          const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
          const itemTotalFormatted = `$${item.price * item.quantity}`;

          return (
            <article
              key={item.id}
              className="flex flex-col p-4 sm:p-6 bg-[#FAF6F1] border border-[#2B2420]/15 transition-all duration-300"
            >
              {/* Top Row: Thumbnail + Info */}
              <div className="flex gap-4 sm:gap-6 items-start">
                {/* 3:4 Thumbnail */}
                <Link
                  href={item.href}
                  className="w-[98px] sm:w-[130px] sm:h-[173px] aspect-[3/4] overflow-hidden bg-[#EDE5DB] shrink-0 relative group"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 98px, 130px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#2B2420]/85 text-[#FAF6F1] px-1.5 py-0.5 font-mono text-[9px] sm:text-[10px] tracking-wider z-10">
                    N° {numStr}
                  </span>
                </Link>

                {/* Details Column */}
                <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
                  <div className="space-y-1">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C17A63] font-semibold block">
                      {item.category}
                    </span>
                    <Link
                      href={item.href}
                      className="font-serif text-lg sm:text-2xl text-[#2B2420] hover:text-[#C17A63] transition-colors leading-tight block truncate font-normal"
                    >
                      {item.name}
                    </Link>
                    <p className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-[#7A7168] pt-0.5">
                      {item.color} · SIZE {item.size}
                    </p>
                    <p className="hidden sm:block font-mono text-[11px] text-[#7A7168]/80 uppercase pt-0.5">
                      {item.fabricDetails} {item.careDetails ? `· ${item.careDetails}` : ""}
                    </p>
                  </div>

                  {/* Price on Mobile / Subtotal */}
                  <div className="font-sans text-base sm:text-lg text-[#2B2420] font-semibold pt-1">
                    ${item.price}
                  </div>
                </div>
              </div>

              {/* Subtle Hairline Division */}
              <div className="w-full h-px bg-[#2B2420]/10 my-3 sm:my-4" />

              {/* Bottom Row: Stepper & Remove Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Stepper */}
                  <div className="inline-flex items-center bg-[#EFE4D8] border border-[#2B2420]/15">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -1)}
                      aria-label="Decrease quantity"
                      className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center text-[#2B2420] hover:bg-[#FAF6F1] transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 sm:w-9 text-center font-mono text-xs font-semibold text-[#2B2420]">
                      {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label="Increase quantity"
                      className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center text-[#2B2420] hover:bg-[#FAF6F1] transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="h-9 sm:h-10 px-2 flex items-center justify-center font-sans text-[11px] uppercase tracking-[0.18em] text-[#7A7168] hover:text-[#BA1A1A] font-semibold transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5 mr-1 hidden sm:inline-block" />
                    <span>REMOVE</span>
                  </button>
                </div>

                {/* Line Total (Desktop) */}
                <div className="hidden sm:block text-right">
                  <span className="font-sans text-lg text-[#2B2420] font-semibold">
                    {itemTotalFormatted}
                  </span>
                </div>
              </div>
            </article>
          );
        })
      )}

      {/* Editorial Packaging Note / Archival Touch */}
      <div className="bg-[#FAF6F1] p-4 border border-[#2B2420]/10 flex items-start gap-3 mt-1">
        <CheckCircle2 className="w-4 h-4 text-[#C17A63] shrink-0 mt-0.5" strokeWidth={1.75} />
        <div className="flex flex-col gap-0.5">
          <span className="font-sans text-[10px] uppercase tracking-wider text-[#2B2420] font-semibold">
            ATELIER COMPLIMENTARY BOXING
          </span>
          <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
            Each garment is individually wrapped in unbleached archival tissue with cedar protective sachet.
          </p>
        </div>
      </div>

      {/* Continue Shopping Navigation Row (Desktop) */}
      <div className="hidden md:flex pt-4 items-center justify-between">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-[#2B2420] hover:text-[#C17A63] transition-colors group font-semibold"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>CONTINUE SHOPPING</span>
        </Link>
        <span className="font-mono text-xs text-[#7A7168] uppercase tracking-widest">
          SPECIMEN LOG // SEC.08
        </span>
      </div>
    </div>
  );
}

