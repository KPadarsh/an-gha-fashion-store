"use client";

import React, { useState } from "react";
import { SlidersHorizontal, ChevronDown, X, Check } from "lucide-react";

export interface FilterState {
  selectedCategories: string[];
  selectedSizes: string[];
  selectedColors: string[];
  selectedPriceRange: string | null;
  inStockOnly: boolean;
  sortBy: string;
}

interface ShopFilterBarProps {
  totalCount: number;
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
}

const CATEGORY_OPTIONS = [
  { id: "Dresses", label: "Dresses", count: 8 },
  { id: "Knitwear", label: "Knitwear", count: 6 },
  { id: "Outerwear", label: "Outerwear", count: 6 },
  { id: "Accessories", label: "Accessories", count: 4 },
];

const SIZE_OPTIONS_DESKTOP = ["XS", "S", "M", "L", "XL"];

const SIZE_OPTIONS_MOBILE = [
  { id: "XS", label: "00 / XS" },
  { id: "S", label: "01 / S" },
  { id: "M", label: "02 / M" },
  { id: "L", label: "03 / L" },
];

const COLOR_OPTIONS = [
  { id: "Terracotta", label: "Terracotta", hex: "#894b37" },
  { id: "Charcoal", label: "Charcoal", hex: "#211a16" },
  { id: "Sand", label: "Sand", hex: "#e5d7d1" },
  { id: "Olive", label: "Olive", hex: "#625f43" },
  { id: "Cream", label: "Ivory", hex: "#fff8f5" },
];

const PRICE_OPTIONS = [
  { id: "under-100", label: "Under $100" },
  { id: "100-200", label: "$100 — $200" },
  { id: "200-above", label: "$200 and above" },
];

export function ShopFilterBar({
  totalCount = 24,
  isDrawerOpen,
  onToggleDrawer,
  filters,
  onFilterChange,
  onResetFilters,
}: ShopFilterBarProps) {
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const activeChipsCount =
    filters.selectedCategories.length +
    filters.selectedSizes.length +
    filters.selectedColors.length +
    (filters.selectedPriceRange ? 1 : 0);

  const toggleCategory = (cat: string) => {
    const next = filters.selectedCategories.includes(cat)
      ? filters.selectedCategories.filter((c) => c !== cat)
      : [...filters.selectedCategories, cat];
    onFilterChange({ ...filters, selectedCategories: next });
  };

  const toggleSize = (size: string) => {
    const next = filters.selectedSizes.includes(size)
      ? filters.selectedSizes.filter((s) => s !== size)
      : [...filters.selectedSizes, size];
    onFilterChange({ ...filters, selectedSizes: next });
  };

  const toggleColor = (color: string) => {
    const next = filters.selectedColors.includes(color)
      ? filters.selectedColors.filter((c) => c !== color)
      : [...filters.selectedColors, color];
    onFilterChange({ ...filters, selectedColors: next });
  };

  const togglePriceRange = (range: string) => {
    const next = filters.selectedPriceRange === range ? null : range;
    onFilterChange({ ...filters, selectedPriceRange: next });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, sortBy: e.target.value });
  };

  return (
    <>
      <section className="w-full px-margin mb-4 sm:mb-6 lg:mb-10">
        {/* Mobile Sticky Bar View (< md) */}
        <div className="md:hidden sticky top-14 sm:top-16 z-30 bg-surface/95 backdrop-blur-md -mx-4 px-4 sm:-mx-8 sm:px-8 py-2 border-b border-surface-dim/30">
          <div className="flex items-center justify-between py-1">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-on-surface">
              {totalCount} PIECES
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileModalOpen(true)}
                className="min-h-[38px] px-3 bg-surface-container-high flex items-center gap-1.5 font-sans text-xs uppercase font-semibold text-on-surface hover:bg-surface-container-highest transition-colors"
                aria-label="Open filter modal"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>FILTER ({activeChipsCount > 0 ? activeChipsCount : 2})</span>
              </button>

              <div className="relative inline-flex items-center">
                <select
                  value={filters.sortBy}
                  onChange={handleSortChange}
                  className="appearance-none min-h-[38px] bg-surface-container-low text-on-surface font-sans text-xs font-semibold uppercase pl-3 pr-7 py-1.5 outline-none"
                >
                  <option value="featured">SORT: FEATURED</option>
                  <option value="low-to-high">PRICE: LOW TO HIGH</option>
                  <option value="high-to-low">PRICE: HIGH TO LOW</option>
                  <option value="newest">NEWEST ARCHIVE</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-on-surface absolute right-2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Active filter chips (Mobile) */}
          <div
            className="flex items-center gap-1.5 pt-1.5 pb-0.5 overflow-x-auto no-scrollbar scroll-touch touch-pan-x overscroll-x-contain"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <span className="font-sans text-[10px] text-tertiary uppercase tracking-wider pr-0.5 shrink-0">
              APPLIED:
            </span>

            {filters.selectedCategories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-container-highest text-on-surface font-sans text-[10px] font-semibold uppercase tracking-wider shrink-0"
              >
                <span>{cat}</span>
                <button
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  aria-label={`Remove filter ${cat}`}
                  className="hover:text-primary transition-colors flex items-center"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </span>
            ))}

            {filters.selectedColors.map((color) => (
              <span
                key={color}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary-fixed text-on-primary-fixed font-sans text-[10px] font-semibold uppercase tracking-wider shrink-0"
              >
                <span>{color}</span>
                <button
                  type="button"
                  onClick={() => toggleColor(color)}
                  aria-label={`Remove filter ${color}`}
                  className="hover:text-primary transition-colors flex items-center"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </span>
            ))}

            <button
              type="button"
              onClick={onResetFilters}
              className="font-sans text-[10px] font-semibold text-tertiary underline uppercase ml-auto hover:text-primary transition-colors pl-2 shrink-0"
            >
              CLEAR ALL
            </button>
          </div>
        </div>

        {/* Desktop Top Bar (>= md) */}
        <div className="hidden md:flex w-full bg-surface-container px-6 py-4 flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-on-surface">
              {totalCount} PIECES
            </span>
            <span className="w-1 h-1 rounded-full bg-tertiary" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
              IN STOCK & READY TO DISPATCH
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onToggleDrawer}
              className={`flex items-center gap-2 px-4 py-2 text-white font-sans text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                isDrawerOpen
                  ? "bg-primary"
                  : "bg-inverse-surface hover:bg-primary"
              }`}
              aria-expanded={isDrawerOpen}
              aria-label="Toggle Filter Drawer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>FILTER ({activeChipsCount > 0 ? activeChipsCount : 2})</span>
            </button>

            <div className="relative inline-flex items-center">
              <select
                value={filters.sortBy}
                onChange={handleSortChange}
                className="appearance-none bg-surface-container-highest text-on-surface font-sans text-xs font-semibold uppercase tracking-wider pl-4 pr-9 py-2 cursor-pointer outline-none hover:bg-surface-variant transition-colors"
              >
                <option value="featured">SORT: FEATURED</option>
                <option value="low-to-high">PRICE: LOW TO HIGH</option>
                <option value="high-to-low">PRICE: HIGH TO LOW</option>
                <option value="newest">NEWEST ARCHIVE</option>
              </select>
              <ChevronDown className="w-4 h-4 text-on-surface absolute right-2.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Desktop Active Filter Chips Bar (>= md) */}
        <div className="hidden md:flex flex-wrap items-center gap-2 pt-3">
          {filters.selectedCategories.map((cat) => (
            <div
              key={cat}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-variant text-on-surface font-sans text-[11px] font-semibold uppercase tracking-wider"
            >
              <span>{cat}</span>
              <button
                type="button"
                onClick={() => toggleCategory(cat)}
                aria-label={`Remove filter ${cat}`}
                className="hover:text-primary transition-colors flex items-center"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}

          {filters.selectedColors.map((color) => (
            <div
              key={color}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-variant text-on-surface font-sans text-[11px] font-semibold uppercase tracking-wider"
            >
              <span>{color}</span>
              <button
                type="button"
                onClick={() => toggleColor(color)}
                aria-label={`Remove filter ${color}`}
                className="hover:text-primary transition-colors flex items-center"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}

          {filters.selectedPriceRange && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-variant text-on-surface font-sans text-[11px] font-semibold uppercase tracking-wider">
              <span>
                {filters.selectedPriceRange === "under-100"
                  ? "UNDER $100"
                  : filters.selectedPriceRange === "100-200"
                  ? "$100 — $200"
                  : "$200 & ABOVE"}
              </span>
              <button
                type="button"
                onClick={() => togglePriceRange(filters.selectedPriceRange!)}
                aria-label="Remove price filter"
                className="hover:text-primary transition-colors flex items-center"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={onResetFilters}
            className="ml-2 font-sans text-[11px] font-semibold text-primary hover:text-on-surface uppercase tracking-widest underline underline-offset-4 transition-colors"
          >
            CLEAR ALL
          </button>
        </div>

        {/* Collapsible 5-Column Filter Drawer (Desktop >= md) */}
        {isDrawerOpen && (
          <div className="hidden md:block w-full mt-4 bg-surface-container-high p-6 sm:p-8 lg:p-10 transition-all duration-300">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
              {/* Column 1: Category */}
              <div>
                <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-on-surface mb-4">
                  CATEGORY
                </h4>
                <div className="space-y-2.5 font-sans text-sm text-on-surface-variant">
                  {CATEGORY_OPTIONS.map((item) => {
                    const isChecked = filters.selectedCategories.includes(item.id);
                    return (
                      <label
                        key={item.id}
                        onClick={() => toggleCategory(item.id)}
                        className="flex items-center gap-3 cursor-pointer hover:text-on-surface transition-colors"
                      >
                        <span
                          className={`w-4 h-4 flex items-center justify-center transition-colors ${
                            isChecked
                              ? "bg-inverse-surface text-inverse-on-surface"
                              : "bg-surface-container-highest"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <span>
                          {item.label} ({item.count})
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: Size */}
              <div>
                <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-on-surface mb-4">
                  SIZE
                </h4>
                <div className="flex flex-wrap gap-2">
                  {SIZE_OPTIONS_DESKTOP.map((size) => {
                    const isSelected = filters.selectedSizes.includes(size);
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => toggleSize(size)}
                        className={`w-10 h-10 font-sans text-xs font-semibold uppercase transition-colors ${
                          isSelected
                            ? "bg-inverse-surface text-inverse-on-surface"
                            : "bg-surface-container-highest hover:bg-inverse-surface hover:text-inverse-on-surface text-on-surface"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Column 3: Color */}
              <div>
                <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-on-surface mb-4">
                  COLOR
                </h4>
                <div className="flex items-center gap-2.5">
                  {COLOR_OPTIONS.map((c) => {
                    const isSelected = filters.selectedColors.includes(c.id);
                    return (
                      <div
                        key={c.id}
                        onClick={() => toggleColor(c.id)}
                        title={c.label}
                        className={`relative p-1 flex items-center justify-center cursor-pointer transition-all ${
                          isSelected
                            ? "bg-surface-variant ring-1 ring-on-surface/40"
                            : "hover:bg-surface-variant"
                        }`}
                      >
                        <div
                          className="w-6 h-6 border border-black/10"
                          style={{ backgroundColor: c.hex }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Column 4: Price Range */}
              <div>
                <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-on-surface mb-4">
                  PRICE RANGE
                </h4>
                <div className="space-y-2.5 font-sans text-sm text-on-surface-variant">
                  {PRICE_OPTIONS.map((opt) => {
                    const isChecked = filters.selectedPriceRange === opt.id;
                    return (
                      <label
                        key={opt.id}
                        onClick={() => togglePriceRange(opt.id)}
                        className="flex items-center gap-3 cursor-pointer hover:text-on-surface transition-colors"
                      >
                        <span
                          className={`w-4 h-4 flex items-center justify-center transition-colors ${
                            isChecked
                              ? "bg-inverse-surface text-inverse-on-surface"
                              : "bg-surface-container-highest"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <span>{opt.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Column 5: Stock & Execution */}
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-on-surface mb-4">
                    AVAILABILITY
                  </h4>
                  <label
                    onClick={() =>
                      onFilterChange({
                        ...filters,
                        inStockOnly: !filters.inStockOnly,
                      })
                    }
                    className="flex items-center gap-3 cursor-pointer hover:text-on-surface font-sans text-sm text-on-surface-variant transition-colors"
                  >
                    <span
                      className={`w-4 h-4 flex items-center justify-center transition-colors ${
                        filters.inStockOnly
                          ? "bg-inverse-surface text-inverse-on-surface"
                          : "bg-surface-container-highest"
                      }`}
                    >
                      {filters.inStockOnly && (
                        <Check className="w-3 h-3 stroke-[3]" />
                      )}
                    </span>
                    <span>In Stock Only</span>
                  </label>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <button
                    type="button"
                    onClick={onToggleDrawer}
                    className="w-full py-2 bg-inverse-surface text-inverse-on-surface font-sans text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors text-center cursor-pointer"
                  >
                    APPLY
                  </button>
                  <button
                    type="button"
                    onClick={onResetFilters}
                    className="px-4 py-2 bg-surface-container-highest text-on-surface font-sans text-xs font-semibold uppercase tracking-wider hover:bg-surface-variant transition-colors cursor-pointer"
                  >
                    RESET
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Mobile Full-Width Filter Drawer Modal */}
      {isMobileModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-xs flex flex-col justify-end md:hidden animate-in fade-in duration-200"
        >
          <div className="w-full max-h-[85vh] bg-surface text-on-surface flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-300">
            {/* Modal Header */}
            <div className="px-4 py-3.5 flex items-center justify-between bg-surface-container">
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-medium">
                  FILTER CATALOGUE
                </span>
                <span className="font-sans text-xs text-primary font-semibold">
                  ({activeChipsCount > 0 ? activeChipsCount : 2} APPLIED)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-primary transition-colors"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-4 overflow-y-auto flex flex-col gap-5 flex-1">
              {/* Category */}
              <div className="flex flex-col gap-2">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-tertiary">
                  GARMENT CLASS
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORY_OPTIONS.map((item) => {
                    const isChecked = filters.selectedCategories.includes(
                      item.id
                    );
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleCategory(item.id)}
                        className={`py-2.5 px-3 font-sans text-xs uppercase text-left flex items-center justify-between transition-colors ${
                          isChecked
                            ? "bg-inverse-surface text-inverse-on-surface font-semibold"
                            : "bg-surface-container font-medium text-on-surface hover:bg-surface-container-high"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isChecked && <span className="text-xs">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Color Swatches */}
              <div className="flex flex-col gap-2">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-tertiary">
                  PALETTE & TONE
                </span>
                <div className="flex items-center gap-3">
                  {COLOR_OPTIONS.map((c) => {
                    const isSelected = filters.selectedColors.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => toggleColor(c.id)}
                        title={c.label}
                        className={`w-8 h-8 flex items-center justify-center text-xs transition-all ${
                          isSelected
                            ? "ring-2 ring-primary ring-offset-2 text-white font-bold"
                            : "text-transparent"
                        } ${c.id === "Cream" ? "border border-outline" : ""}`}
                        style={{ backgroundColor: c.hex }}
                      >
                        {isSelected ? "✓" : ""}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Run */}
              <div className="flex flex-col gap-2">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-tertiary">
                  SIZE RUN
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {SIZE_OPTIONS_MOBILE.map((s) => {
                    const isSelected = filters.selectedSizes.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleSize(s.id)}
                        className={`py-2 font-sans text-[11px] text-center uppercase transition-colors ${
                          isSelected
                            ? "bg-inverse-surface text-inverse-on-surface font-semibold"
                            : "bg-surface-container text-on-surface hover:bg-surface-container-high font-medium"
                        }`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="p-4 bg-surface-container-lowest flex items-center gap-3 border-t border-surface-dim/30 pb-safe">
              <button
                type="button"
                onClick={onResetFilters}
                className="w-1/3 py-3.5 bg-surface-container text-on-surface font-sans text-xs font-semibold uppercase tracking-wider hover:bg-surface-container-high transition-colors"
              >
                RESET
              </button>
              <button
                type="button"
                onClick={() => setIsMobileModalOpen(false)}
                className="w-2/3 py-3.5 bg-primary text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-primary-container transition-colors"
              >
                APPLY ({totalCount} PIECES)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
