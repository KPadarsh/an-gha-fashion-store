"use client";

import React, { useState, useMemo } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterPillsBar, FilterState } from "@/components/home/FilterPillsBar";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Sparkles, RotateCcw } from "lucide-react";

export function CuratedProductsSection() {
  const { searchQuery, selectedCategory, setSelectedCategory } = useCart();

  const initialFilters: FilterState = {
    priceRange: "all",
    minRating: 0,
    color: "all",
    material: "all",
    offerOnly: false,
    sortBy: "popular",
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const resetFilters = () => {
    setFilters(initialFilters);
    setSelectedCategory("All");
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item: Product) => {
      // 1. Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesSubtitle = item.subtitle.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesCategory && !matchesSubtitle && !matchesDesc) {
          return false;
        }
      }

      // 2. Category filter
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }

      // 3. Price filter
      if (filters.priceRange === "under-100" && item.price >= 100) return false;
      if (filters.priceRange === "100-300" && (item.price < 100 || item.price > 300)) return false;
      if (filters.priceRange === "above-300" && item.price <= 300) return false;

      // 4. Rating filter
      if (filters.minRating > 0 && item.rating < filters.minRating) return false;

      // 5. Offer filter
      if (filters.offerOnly && !item.isOffer) return false;

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "price-asc") return a.price - b.price;
      if (filters.sortBy === "price-desc") return b.price - a.price;
      if (filters.sortBy === "rating") return b.rating - a.rating;
      return 0; // Default popular order
    });
  }, [searchQuery, selectedCategory, filters]);

  return (
    <section id="curated-products" className="w-full py-6 sm:py-10">
      {/* 1. Filter Pills Row */}
      <FilterPillsBar
        filters={filters}
        onFilterChange={setFilters}
        onResetFilters={resetFilters}
      />

      {/* 2. Section Heading & Grid */}
      <div className="angha-container mt-4 sm:mt-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#1F2124] tracking-tight">
            {selectedCategory === "All"
              ? "Headphones For You!"
              : `${selectedCategory} For You!`}
          </h2>

          <span className="text-xs text-gray-500 font-medium">
            Showing {filteredProducts.length} items
          </span>
        </div>

        {/* 4-Column Grid matching Reference Image */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-[#F8F7F4] rounded-2xl p-12 text-center border border-gray-200/60 my-6">
            <Sparkles className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-gray-800">
              No products found matching your filters
            </h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              Try adjusting your category, price range, or search keywords to explore more pieces.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B3B2B] text-white rounded-full text-xs font-semibold hover:bg-[#132A1F] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
