"use client";

import React from "react";

export type CategoryFilter =
  | "ALL"
  | "NEW IN"
  | "DRESSES"
  | "KNITWEAR"
  | "OUTERWEAR"
  | "ACCESSORIES";

interface ShopHeaderProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  totalCount?: number;
}

const CATEGORIES: CategoryFilter[] = [
  "ALL",
  "NEW IN",
  "DRESSES",
  "KNITWEAR",
  "OUTERWEAR",
  "ACCESSORIES",
];

export function ShopHeader({
  activeCategory,
  onSelectCategory,
  totalCount = 24,
}: ShopHeaderProps) {
  return (
    <section className="w-full px-margin pt-4 sm:pt-8 lg:pt-10 pb-2 sm:pb-6">
      {/* Top Editorial Headline & Series Archive Split */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 pb-4 sm:pb-6 lg:pb-10">
        <div className="max-w-xl">
          {/* Mobile Index Marker */}
          <div className="flex md:hidden items-center gap-2 mb-1.5">
            <span className="font-sans text-[11px] font-medium tracking-[0.18em] text-tertiary uppercase">
              01 / COLLECTION
            </span>
            <span className="w-8 h-[1px] bg-outline-variant" />
            <span className="font-sans text-[11px] font-medium tracking-[0.18em] text-primary uppercase">
              EDITION N° 08
            </span>
          </div>

          {/* Desktop Index Marker */}
          <div className="hidden md:flex items-center gap-2 mb-2">
            <span className="font-sans text-[11px] font-medium tracking-[0.18em] text-primary uppercase">
              01 / COLLECTION
            </span>
            <div className="w-12 h-[1px] bg-primary/40" />
          </div>

          <h1 className="font-serif text-2xl sm:text-5xl lg:text-[4.5rem] text-on-surface tracking-tight uppercase leading-[1.08] sm:leading-[1.05] font-normal">
            THE COLLECTION.
          </h1>

          <p className="font-sans text-sm sm:text-lg text-on-surface-variant mt-1.5 sm:mt-2 max-w-sm sm:max-w-lg leading-relaxed">
            Contemporary pieces shaped by quiet structure, tactile textures, and everyday movement.
          </p>
        </div>

        {/* Series Archive Badge (Desktop) */}
        <div className="hidden lg:flex flex-col items-end text-right">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-tertiary">
            SERIES ARCHIVE
          </span>
          <span className="font-sans text-xs font-medium text-on-surface uppercase tracking-[0.15em] mt-1">
            EDITION NO. 04 / AUTUMN
          </span>
        </div>
      </div>

      {/* Mobile Horizontal Category Pill Buttons (< md) */}
      <div
        className="flex md:hidden items-center gap-2 overflow-x-auto py-2 -mx-4 px-4 sm:-mx-8 sm:px-8 no-scrollbar scroll-touch touch-pan-x overscroll-x-contain"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        role="tablist"
      >
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const label = category === "ALL" ? `ALL [${totalCount}]` : category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`whitespace-nowrap px-4 py-2 font-sans text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer ${
                isActive
                  ? "bg-inverse-surface text-inverse-on-surface font-semibold"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high font-medium"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Desktop Category Underline Navigation Bar (>= md) */}
      <div className="hidden md:flex w-full items-center justify-between border-t border-surface-dim/40 pt-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-6 lg:gap-10 min-w-max pb-1">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelectCategory(category)}
                className={`group relative py-1 font-sans text-xs uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "text-on-surface font-semibold"
                    : "text-on-surface-variant hover:text-on-surface font-medium"
                }`}
              >
                {category}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 font-sans text-xs font-medium text-tertiary tracking-[0.15em] uppercase">
          <span>CURATED ARCHIVE</span>
        </div>
      </div>
    </section>
  );
}
