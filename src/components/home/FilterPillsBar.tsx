"use client";

import React, { useState } from "react";
import { ChevronDown, SlidersHorizontal, Check, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface FilterState {
  priceRange: string;
  minRating: number;
  color: string;
  material: string;
  offerOnly: boolean;
  sortBy: string;
}

interface FilterPillsBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
}

export function FilterPillsBar({
  filters,
  onFilterChange,
  onResetFilters,
}: FilterPillsBarProps) {
  const { selectedCategory, setSelectedCategory } = useCart();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const categories = ["All", "Headphones", "Dresses", "Knitwear", "Outerwear", "Accessories"];
  const priceOptions = [
    { label: "All Prices", value: "all" },
    { label: "Under $100", value: "under-100" },
    { label: "$100 - $300", value: "100-300" },
    { label: "Above $300", value: "above-300" },
  ];
  const reviewOptions = [
    { label: "All Reviews", value: 0 },
    { label: "5.0 Stars (★★★★★)", value: 5 },
    { label: "4.8+ Stars", value: 4.8 },
  ];
  const colorOptions = [
    { label: "All Colors", value: "all" },
    { label: "Black / Dark", value: "black" },
    { label: "Coral / Red", value: "coral" },
    { label: "Olive / Green", value: "green" },
    { label: "Ivory / Sand", value: "ivory" },
  ];
  const materialOptions = [
    { label: "All Materials", value: "all" },
    { label: "Silk & Cashmere", value: "silk" },
    { label: "Wool & Merino", value: "wool" },
    { label: "Alloy & Polymer", value: "polymer" },
  ];
  const sortOptions = [
    { label: "Popularity", value: "popular" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Highest Rated", value: "rating" },
  ];

  const hasActiveFilters =
    selectedCategory !== "All" ||
    filters.priceRange !== "all" ||
    filters.minRating > 0 ||
    filters.color !== "all" ||
    filters.material !== "all" ||
    filters.offerOnly;

  return (
    <div className="w-full py-4 relative z-30">
      <div className="angha-container">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Left Pill Group */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-2.5">
            {/* 1. Category / Headphone Type Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("category")}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                  selectedCategory !== "All"
                    ? "bg-[#1B3B2B] text-white border-[#1B3B2B]"
                    : "bg-[#F3F4F6] text-gray-800 border-gray-200/60 hover:bg-gray-200"
                }`}
              >
                <span>{selectedCategory === "All" ? "Headphone Type" : selectedCategory}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === "category" && (
                <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs hover:bg-gray-50 flex items-center justify-between"
                    >
                      <span>{cat}</span>
                      {selectedCategory === cat && <Check className="w-3.5 h-3.5 text-[#1B3B2B]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Price Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("price")}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                  filters.priceRange !== "all"
                    ? "bg-[#1B3B2B] text-white border-[#1B3B2B]"
                    : "bg-[#F3F4F6] text-gray-800 border-gray-200/60 hover:bg-gray-200"
                }`}
              >
                <span>Price</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === "price" && (
                <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                  {priceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        onFilterChange({ ...filters, priceRange: opt.value });
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs hover:bg-gray-50 flex items-center justify-between"
                    >
                      <span>{opt.label}</span>
                      {filters.priceRange === opt.value && (
                        <Check className="w-3.5 h-3.5 text-[#1B3B2B]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Review Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("review")}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                  filters.minRating > 0
                    ? "bg-[#1B3B2B] text-white border-[#1B3B2B]"
                    : "bg-[#F3F4F6] text-gray-800 border-gray-200/60 hover:bg-gray-200"
                }`}
              >
                <span>Review</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === "review" && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                  {reviewOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        onFilterChange({ ...filters, minRating: opt.value });
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs hover:bg-gray-50 flex items-center justify-between"
                    >
                      <span>{opt.label}</span>
                      {filters.minRating === opt.value && (
                        <Check className="w-3.5 h-3.5 text-[#1B3B2B]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Color Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("color")}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                  filters.color !== "all"
                    ? "bg-[#1B3B2B] text-white border-[#1B3B2B]"
                    : "bg-[#F3F4F6] text-gray-800 border-gray-200/60 hover:bg-gray-200"
                }`}
              >
                <span>Color</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === "color" && (
                <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                  {colorOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        onFilterChange({ ...filters, color: opt.value });
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs hover:bg-gray-50 flex items-center justify-between"
                    >
                      <span>{opt.label}</span>
                      {filters.color === opt.value && (
                        <Check className="w-3.5 h-3.5 text-[#1B3B2B]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Material Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("material")}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                  filters.material !== "all"
                    ? "bg-[#1B3B2B] text-white border-[#1B3B2B]"
                    : "bg-[#F3F4F6] text-gray-800 border-gray-200/60 hover:bg-gray-200"
                }`}
              >
                <span>Material</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === "material" && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                  {materialOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        onFilterChange({ ...filters, material: opt.value });
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs hover:bg-gray-50 flex items-center justify-between"
                    >
                      <span>{opt.label}</span>
                      {filters.material === opt.value && (
                        <Check className="w-3.5 h-3.5 text-[#1B3B2B]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Offer Pill */}
            <button
              type="button"
              onClick={() =>
                onFilterChange({ ...filters, offerOnly: !filters.offerOnly })
              }
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                filters.offerOnly
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-[#F3F4F6] text-gray-800 border-gray-200/60 hover:bg-gray-200"
              }`}
            >
              <span>Offer</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {/* 7. All Filters Toggle */}
            <button
              type="button"
              onClick={() => {
                if (hasActiveFilters) {
                  onResetFilters();
                  setSelectedCategory("All");
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-[#F3F4F6] text-gray-800 border border-gray-200/60 hover:bg-gray-200 transition-all"
            >
              <span>All Filters</span>
              {hasActiveFilters ? (
                <X className="w-3.5 h-3.5 text-red-500" />
              ) : (
                <SlidersHorizontal className="w-3.5 h-3.5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Right Group: Sort by */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("sort")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#F3F4F6] text-gray-900 border border-gray-200/80 hover:bg-gray-200 transition-all"
            >
              <span className="text-gray-500 font-normal">Sort by</span>
              <span>
                {sortOptions.find((o) => o.value === filters.sortBy)?.label || "Popularity"}
              </span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {activeDropdown === "sort" && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onFilterChange({ ...filters, sortBy: opt.value });
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3.5 py-2 text-xs hover:bg-gray-50 flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    {filters.sortBy === opt.value && (
                      <Check className="w-3.5 h-3.5 text-[#1B3B2B]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
