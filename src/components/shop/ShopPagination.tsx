"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ShopPaginationProps {
  totalItems?: number;
  currentCount?: number;
  onLoadMore?: () => void;
}

export function ShopPagination({
  totalItems = 24,
  currentCount = 12,
  onLoadMore,
}: ShopPaginationProps) {
  const [activePage, setActivePage] = useState("01");
  const [isLoadedAll, setIsLoadedAll] = useState(false);

  const handleLoadMore = () => {
    setIsLoadedAll(true);
    if (onLoadMore) {
      onLoadMore();
    }
  };

  return (
    <section className="w-full px-margin mb-8 sm:mb-12 lg:mb-20">
      {/* Mobile Pagination View (< md) */}
      <div className="md:hidden flex flex-col items-center gap-4 text-center">
        <div className="w-full flex items-center justify-center gap-3">
          <div className="h-[1px] bg-surface-dim flex-1" />
          <span className="font-sans text-[11px] text-tertiary uppercase tracking-widest shrink-0">
            SHOWING 1–{isLoadedAll ? totalItems : currentCount} OF {totalItems} PIECES
          </span>
          <div className="h-[1px] bg-surface-dim flex-1" />
        </div>

        <button
          type="button"
          onClick={handleLoadMore}
          className={`w-full py-4 bg-inverse-surface text-inverse-on-surface font-sans text-xs uppercase tracking-widest font-semibold hover:bg-primary transition-colors cursor-pointer ${
            isLoadedAll ? "opacity-75" : ""
          }`}
        >
          {isLoadedAll ? "[ ALL 24 PIECES LOADED ]" : "[ LOAD MORE PIECES ]"}
        </button>

        {/* Mobile Page Rail Indicators */}
        <div className="flex items-center gap-3 pt-1 font-sans text-xs">
          <span className="text-primary font-bold">01</span>
          <span className="w-8 h-[1px] bg-outline-variant" />
          <button
            type="button"
            onClick={() => setActivePage("02")}
            className="text-tertiary hover:text-on-surface transition-colors"
          >
            02
          </button>
          <span className="w-8 h-[1px] bg-outline-variant" />
          <button
            type="button"
            onClick={() => setActivePage("03")}
            className="text-tertiary hover:text-on-surface transition-colors"
          >
            03
          </button>
        </div>
      </div>

      {/* Desktop Pagination View (>= md) */}
      <div className="hidden md:flex w-full py-8 sm:py-10 flex-col items-center justify-center gap-4 bg-surface-container">
        <span className="font-sans text-xs sm:text-[13px] text-on-surface-variant tracking-wide">
          Showing 1–{isLoadedAll ? totalItems : currentCount} of {totalItems} pieces
        </span>

        <div className="flex items-center gap-6 font-sans text-xs sm:text-[13px] tracking-[0.18em]">
          {["01", "02", "03"].map((page) => {
            const isActive = activePage === page;
            return (
              <button
                key={page}
                type="button"
                onClick={() => setActivePage(page)}
                className={`transition-colors cursor-pointer ${
                  isActive
                    ? "text-on-surface font-semibold underline underline-offset-8 decoration-primary decoration-2"
                    : "text-tertiary hover:text-on-surface font-medium"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setActivePage("02")}
            aria-label="Next Page"
            className="text-on-surface flex items-center hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleLoadMore}
          className="mt-2 px-8 sm:px-12 py-3 bg-transparent hover:bg-inverse-surface text-on-surface hover:text-inverse-on-surface border border-on-surface/20 hover:border-transparent font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-colors cursor-pointer"
        >
          {isLoadedAll ? "[ ALL 24 PIECES LOADED ]" : "[ LOAD MORE PIECES ]"}
        </button>
      </div>
    </section>
  );
}
