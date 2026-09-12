"use client";

import React, { useState } from "react";
import {
  ProductColorOption,
  SizeMeasurement,
  AccordionSection,
} from "@/data/productDetailData";

interface ProductInfoPanelProps {
  categoryLine?: string;
  stockStatus?: string;
  name: string;
  price: number;
  currency?: string;
  edition?: string;
  description: string;
  colors: ProductColorOption[];
  sizes: string[];
  measurements: SizeMeasurement[];
  accordions: AccordionSection[];
}

export function ProductInfoPanel({
  categoryLine = "ARCHIVE DRESSES · SPECIMEN 01",
  stockStatus = "IN STOCK [4 UNITS]",
  name,
  price,
  currency = "USD",
  edition = "EDITION N° 08 / AUTUMN 2026",
  description,
  colors,
  sizes,
  measurements,
  accordions,
}: ProductInfoPanelProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name || "TERRACOTTA");
  const [selectedSize, setSelectedSize] = useState(sizes[1] || sizes[0] || "S");
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    mat: true, // First accordion expanded by default
  });

  const handleAlterQty = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleAddToBag = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalFormattedPrice = `$${price * quantity}`;

  return (
    <div className="w-full flex flex-col gap-6 lg:sticky lg:top-20">
      {/* Product Title & Reference Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.22em] uppercase">
          <span className="text-[#C17A63]">{categoryLine}</span>
          <span className="text-[#7A7168]">{stockStatus}</span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl text-[#2B2420] font-normal tracking-tight pt-0.5 leading-tight">
          {name}
        </h1>

        <div className="flex items-baseline justify-between pt-1 border-b border-[#2B2420]/10 pb-3">
          <span className="text-xl font-medium tracking-wide text-[#2B2420]">
            ${price} {currency}
          </span>
          <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#7A7168]">
            {edition}
          </span>
        </div>
      </div>

      {/* Short Editorial Description */}
      <p className="text-[13px] leading-relaxed text-[#7A7168]">{description}</p>

      {/* Color Swatches */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[11px] tracking-[0.18em] uppercase">
          <span className="text-[#2B2420] font-semibold">
            COLOR — <span className="text-[#C17A63]">{selectedColor}</span>
          </span>
          <span className="text-[10px] text-[#7A7168]">{colors.length} PALETTES</span>
        </div>

        <div className="flex items-center gap-3">
          {colors.map((c) => {
            const isActive = selectedColor === c.name;
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(c.name)}
                aria-label={`Select color ${c.name}`}
                className={`w-7 h-7 rounded-none transition-all cursor-pointer ${
                  isActive
                    ? "ring-2 ring-[#C17A63] ring-offset-2 ring-offset-[#FAF6F1]"
                    : "ring-1 ring-[#2B2420]/20 hover:ring-[#2B2420]"
                } ${c.isLight ? "border border-black/10" : ""}`}
                style={{ backgroundColor: c.hex }}
              />
            );
          })}
        </div>
      </div>

      {/* Size Selector */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[11px] tracking-[0.18em] uppercase">
          <span className="text-[#2B2420] font-semibold">
            SIZE: <span className="text-[#C17A63]">{selectedSize}</span>
          </span>
          <button
            type="button"
            onClick={() => setIsSizeGuideOpen((prev) => !prev)}
            className="text-[10px] text-[#7A7168] hover:text-[#2B2420] underline underline-offset-4 tracking-[0.14em] uppercase transition-colors cursor-pointer"
          >
            Size Guide →
          </button>
        </div>

        {/* Minimal Rectangular Size Buttons */}
        <div className="grid grid-cols-5 gap-2">
          {sizes.map((s) => {
            const isSelected = selectedSize === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSize(s)}
                className={`h-11 text-[11px] font-semibold tracking-wider transition-colors flex items-center justify-center cursor-pointer ${
                  isSelected
                    ? "bg-[#2B2420] text-[#FAF6F1]"
                    : "border border-[#2B2420]/15 bg-[#FAF6F1] text-[#2B2420] hover:border-[#2B2420]"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Expandable Size Guide Drawer */}
      {isSizeGuideOpen && (
        <div className="bg-[#F5EFE8] p-4 text-[12px] text-[#7A7168] flex flex-col gap-2 border border-[#2B2420]/10 animate-in fade-in duration-200">
          <div className="flex justify-between items-center text-[10px] font-semibold tracking-widest uppercase text-[#2B2420]">
            <span>Garment Measurements (Inches)</span>
            <button
              type="button"
              onClick={() => setIsSizeGuideOpen(false)}
              className="text-[#C17A63] hover:underline cursor-pointer"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-4 text-center text-[11px] gap-1 pt-1">
            <div className="bg-[#FAF6F1] py-1 font-semibold text-[#2B2420]">SIZE</div>
            <div className="bg-[#FAF6F1] py-1 font-semibold text-[#2B2420]">BUST</div>
            <div className="bg-[#FAF6F1] py-1 font-semibold text-[#2B2420]">WAIST</div>
            <div className="bg-[#FAF6F1] py-1 font-semibold text-[#2B2420]">LENGTH</div>

            {measurements.map((m) => {
              const isSelected = m.size === selectedSize;
              return (
                <React.Fragment key={m.size}>
                  <div
                    className={`py-1 ${
                      isSelected
                        ? "bg-[#FAF6F1] text-[#C17A63] font-bold"
                        : "bg-[#FAF6F1]/60"
                    }`}
                  >
                    {m.size}
                  </div>
                  <div
                    className={`py-1 ${
                      isSelected
                        ? "bg-[#FAF6F1] text-[#C17A63] font-bold"
                        : "bg-[#FAF6F1]/60"
                    }`}
                  >
                    {m.bust}
                  </div>
                  <div
                    className={`py-1 ${
                      isSelected
                        ? "bg-[#FAF6F1] text-[#C17A63] font-bold"
                        : "bg-[#FAF6F1]/60"
                    }`}
                  >
                    {m.waist}
                  </div>
                  <div
                    className={`py-1 ${
                      isSelected
                        ? "bg-[#FAF6F1] text-[#C17A63] font-bold"
                        : "bg-[#FAF6F1]/60"
                    }`}
                  >
                    {m.length}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}

      {/* Quantity + Primary Add CTA */}
      <div className="flex flex-col gap-3 pt-1">
        <div className="flex items-stretch gap-2.5">
          {/* Stepped quantity toggle '− 01 +' */}
          <div className="flex items-center bg-[#F5EFE8] border border-[#2B2420]/15 px-2">
            <button
              type="button"
              onClick={() => handleAlterQty(-1)}
              aria-label="Decrease quantity"
              className="w-8 h-12 flex items-center justify-center text-[#2B2420] hover:text-[#C17A63] transition-colors text-base cursor-pointer"
            >
              −
            </button>
            <span className="w-8 text-center text-[12px] font-semibold text-[#2B2420]">
              {quantity < 10 ? `0${quantity}` : quantity}
            </span>
            <button
              type="button"
              onClick={() => handleAlterQty(1)}
              aria-label="Increase quantity"
              className="w-8 h-12 flex items-center justify-center text-[#2B2420] hover:text-[#C17A63] transition-colors text-base cursor-pointer"
            >
              +
            </button>
          </div>

          {/* Primary Add CTA */}
          <button
            type="button"
            onClick={handleAddToBag}
            className={`flex-1 text-[11px] font-semibold uppercase tracking-[0.22em] py-3.5 px-6 transition-colors flex items-center justify-center gap-2 cursor-pointer ${
              isAdded
                ? "bg-[#C17A63] text-[#FAF6F1]"
                : "bg-[#2B2420] hover:bg-[#C17A63] text-[#FAF6F1]"
            }`}
          >
            <span>
              {isAdded ? "SPECIMEN RESERVED ✓" : `ADD TO BAG — ${totalFormattedPrice}`}
            </span>
          </button>
        </div>

        {/* Wishlist trigger */}
        <button
          type="button"
          onClick={() => setIsWishlisted((prev) => !prev)}
          className={`py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
            isWishlisted
              ? "text-[#C17A63]"
              : "text-[#7A7168] hover:text-[#2B2420]"
          }`}
        >
          <span className="text-xs">{isWishlisted ? "♥" : "♡"}</span>
          <span>
            {isWishlisted
              ? "SAVED IN PERMANENT ARCHIVE"
              : "SAVE TO PERMANENT ARCHIVE"}
          </span>
        </button>
      </div>

      {/* Delivery & Trust Notes */}
      <div className="flex flex-col gap-2.5 bg-[#F5EFE8] p-4 border border-[#2B2420]/10">
        <div className="flex items-center gap-3 text-[12px] text-[#2B2420]">
          <svg
            className="w-4 h-4 text-[#C17A63] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Complimentary Worldwide Shipping</span>
        </div>

        <div className="flex items-center gap-3 text-[12px] text-[#2B2420]">
          <svg
            className="w-4 h-4 text-[#C17A63] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>30-Day Quiet Returns</span>
        </div>

        <div className="flex items-center gap-3 text-[12px] text-[#2B2420]">
          <svg
            className="w-4 h-4 text-[#C17A63] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Atelier Concierge & Bespoke Tailoring</span>
        </div>
      </div>

      {/* Materials & Care Accordion */}
      <div className="flex flex-col border-t border-[#2B2420]/10 pt-2">
        {accordions.map((acc) => {
          const isOpen = !!openAccordions[acc.id];
          return (
            <div key={acc.id} className="border-b border-[#2B2420]/10">
              <button
                type="button"
                onClick={() => toggleAccordion(acc.id)}
                className="w-full py-3.5 flex items-center justify-between text-left hover:text-[#C17A63] transition-colors cursor-pointer"
              >
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2B2420]">
                  {acc.index} / {acc.title}
                </span>
                <span className="text-sm font-mono text-[#7A7168]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="pb-3 text-[12px] text-[#7A7168] leading-relaxed animate-in fade-in duration-200">
                  {acc.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
