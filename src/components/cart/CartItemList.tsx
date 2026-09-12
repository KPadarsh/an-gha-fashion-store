"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowLeft, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartItemList() {
  const { items, updateQuantity, removeItem, totalCount } = useCart();

  return (
    <div className="flex flex-col space-y-4">
      {/* Table Header Bar */}
      <div className="flex items-center justify-between py-2.5 px-4 bg-[#EFE4D8] border border-[#2B2420]/10 text-[#7A7168]">
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
        <div className="p-12 text-center bg-[#FAF6F1] border border-[#2B2420]/15 flex flex-col items-center gap-3">
          <p className="font-serif text-2xl text-[#2B2420]">Your bag is currently empty.</p>
          <p className="font-sans text-xs text-[#7A7168] max-w-sm">
            Explore our catalogue to curate your seasonal archival wardrobe.
          </p>
          <Link
            href="/shop"
            className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#2B2420] hover:bg-[#C17A63] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            DISCOVER COLLECTION →
          </Link>
        </div>
      ) : (
        items.map((item, idx) => {
          const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
          const itemTotalFormatted = `$${item.price * item.quantity}`;

          return (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-6 p-5 sm:p-6 bg-[#FAF6F1] border border-[#2B2420]/15 transition-all duration-300"
            >
              {/* Thumbnail 3:4 */}
              <Link
                href={item.href}
                className="w-full sm:w-[130px] sm:h-[173px] aspect-[3/4] overflow-hidden bg-[#EDE5DB] shrink-0 relative group"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  quality={90}
                  sizes="130px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-[#2B2420]/85 text-[#FAF6F1] px-1.5 py-0.5 font-mono text-[10px] tracking-wider z-10">
                  N° {numStr}
                </span>
              </Link>

              {/* Details & Controls */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-[#C17A63] font-semibold block">
                        {item.category}
                      </span>
                      <Link
                        href={item.href}
                        className="font-serif text-xl sm:text-2xl text-[#2B2420] hover:text-[#C17A63] transition-colors leading-tight block mt-0.5 font-normal"
                      >
                        {item.name}
                      </Link>
                    </div>
                    <span className="font-sans text-lg text-[#2B2420] font-semibold sm:hidden">
                      {itemTotalFormatted}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#7A7168] tracking-wide pt-1">
                    COLOR: {item.color} · SIZE: {item.size} · {item.specimenNumber}
                  </p>
                  <p className="font-mono text-[11px] text-[#7A7168]/80 uppercase">
                    {item.fabricDetails} {item.careDetails ? `· ${item.careDetails}` : ""}
                  </p>
                </div>

                {/* Stepper & Actions */}
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#2B2420]/10">
                  <div className="flex items-center gap-4">
                    {/* Stepper */}
                    <div className="inline-flex items-center bg-[#EFE4D8] border border-[#2B2420]/15">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                        className="w-9 h-9 flex items-center justify-center text-[#2B2420] hover:bg-[#FAF6F1] transition-colors cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-9 text-center font-mono text-xs font-semibold text-[#2B2420]">
                        {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                        className="w-9 h-9 flex items-center justify-center text-[#2B2420] hover:bg-[#FAF6F1] transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Remove Action */}
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="font-sans text-[10px] uppercase tracking-widest text-[#7A7168] hover:text-[#BA1A1A] transition-colors flex items-center gap-1 cursor-pointer font-semibold"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>REMOVE</span>
                    </button>
                  </div>

                  <div className="hidden sm:block text-right">
                    <span className="font-sans text-lg text-[#2B2420] font-semibold">
                      {itemTotalFormatted}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}

      {/* Continue Shopping Navigation Row */}
      <div className="pt-4 flex items-center justify-between">
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
