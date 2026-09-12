"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ShopHeader, CategoryFilter } from "@/components/shop/ShopHeader";
import {
  ShopFilterBar,
  FilterState,
} from "@/components/shop/ShopFilterBar";
import { ShopEditorialInterruption } from "@/components/shop/ShopEditorialInterruption";
import { ShopPagination } from "@/components/shop/ShopPagination";
import { ProductCard } from "@/components/ui/ProductCard";
import { SHOP_PRODUCTS } from "@/data/shopProducts";
import { RotateCcw } from "lucide-react";

function ShopPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const collectionParam = searchParams.get("collection");
  const searchQuery = searchParams.get("search") || searchParams.get("q") || "";

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    selectedCategories: [],
    selectedSizes: [],
    selectedColors: [],
    selectedPriceRange: null,
    inStockOnly: false,
    sortBy: "featured",
  });

  // Synchronize state when URL search parameters change
  useEffect(() => {
    if (categoryParam) {
      const upper = categoryParam.toUpperCase();
      if (
        ["DRESSES", "KNITWEAR", "OUTERWEAR", "ACCESSORIES"].includes(upper)
      ) {
        setActiveCategory(upper as CategoryFilter);
        setFilters((prev) => ({
          ...prev,
          selectedCategories: [
            categoryParam.charAt(0).toUpperCase() +
              categoryParam.slice(1).toLowerCase(),
          ],
        }));
      }
    } else if (collectionParam === "new-in") {
      setActiveCategory("NEW IN");
      setFilters((prev) => ({ ...prev, selectedCategories: [] }));
    } else {
      setActiveCategory("ALL");
      setFilters((prev) => ({ ...prev, selectedCategories: [] }));
    }
  }, [categoryParam, collectionParam]);

  const handleResetFilters = () => {
    setFilters({
      selectedCategories: [],
      selectedSizes: [],
      selectedColors: [],
      selectedPriceRange: null,
      inStockOnly: false,
      sortBy: "featured",
    });
    router.push("/shop");
  };

  const handleCategorySelect = (category: CategoryFilter) => {
    setActiveCategory(category);
    if (category === "ALL") {
      router.push("/shop");
    } else if (category === "NEW IN") {
      router.push("/shop?collection=new-in");
    } else {
      const formatted =
        category.charAt(0) + category.slice(1).toLowerCase();
      router.push(`/shop?category=${formatted}`);
    }
  };

  // Filter and sort products dynamically
  const filteredProducts = useMemo(() => {
    let list = [...SHOP_PRODUCTS];

    if (activeCategory === "NEW IN") {
      list = list.filter((p) => p.badge?.text === "NEW" || p.price > 200);
    } else if (activeCategory !== "ALL") {
      list = list.filter(
        (p) => p.category.toUpperCase() === activeCategory.toUpperCase()
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q)
      );
    }

    if (filters.selectedCategories.length > 0 && activeCategory === "ALL") {
      list = list.filter((p) =>
        filters.selectedCategories.some(
          (c) => c.toUpperCase() === p.category.toUpperCase()
        )
      );
    }

    if (filters.selectedColors.length > 0) {
      list = list.filter((p) => filters.selectedColors.includes(p.color));
    }

    if (filters.selectedSizes.length > 0) {
      list = list.filter((p) =>
        p.sizes.some((s) => filters.selectedSizes.includes(s))
      );
    }

    if (filters.inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    if (filters.selectedPriceRange === "under-100") {
      list = list.filter((p) => p.price < 100);
    } else if (filters.selectedPriceRange === "100-200") {
      list = list.filter((p) => p.price >= 100 && p.price <= 200);
    } else if (filters.selectedPriceRange === "200-above") {
      list = list.filter((p) => p.price > 200);
    }

    if (filters.sortBy === "low-to-high") {
      list.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "high-to-low") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [activeCategory, filters, searchQuery]);

  const firstEightProducts = filteredProducts.slice(0, 8);
  const secondFourProducts = filteredProducts.slice(8, 12);

  return (
    <main className="w-full bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        {/* SECTION 1: EDITORIAL HEADER & CATEGORY NAVIGATION */}
        <ShopHeader
          activeCategory={activeCategory}
          onSelectCategory={handleCategorySelect}
          totalCount={filteredProducts.length}
        />

        {/* SECTION 2: COMMERCE CONTROL BAR & EXPANDABLE DRAWER */}
        <ShopFilterBar
          totalCount={filteredProducts.length}
          isDrawerOpen={isDrawerOpen}
          onToggleDrawer={() => setIsDrawerOpen((prev) => !prev)}
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={handleResetFilters}
        />

        {/* Search Query Feedback if searching */}
        {searchQuery.trim() && (
          <div className="w-full px-margin py-3 mb-4 bg-[#FFF1EA]/60 border-b border-[#2B2420]/10 flex items-center justify-between">
            <span className="font-sans text-xs uppercase tracking-wider text-[#7A7168]">
              Showing results for: <strong className="text-[#2B2420]">"{searchQuery}"</strong> ({filteredProducts.length} {filteredProducts.length === 1 ? "specimen" : "specimens"})
            </span>
            <button
              type="button"
              onClick={() => router.push("/shop")}
              className="font-sans text-xs uppercase tracking-widest text-[#894B37] hover:underline font-semibold"
            >
              Clear Search
            </button>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          /* Empty State View when filters/search yield no matches */
          <section className="w-full px-margin py-16 text-center max-w-lg mx-auto flex flex-col items-center">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#894B37] mb-2">
              ARCHIVAL INDEX
            </span>
            <h2 className="font-serif text-3xl text-[#2B2420] uppercase font-normal mb-3">
              NO SPECIMENS MATCH YOUR CRITERIA
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#7A7168] mb-6 leading-relaxed">
              We could not find pieces matching your active selections. Try resetting filters or exploring the broader collection.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 bg-[#2B2420] text-[#FAF6F1] px-6 py-3 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#894B37] transition-colors shadow-xs cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET ALL FILTERS</span>
            </button>
          </section>
        ) : (
          <>
            {/* SECTION 3: COMMERCE GRID (FIRST 8 CARDS) */}
            <section className="w-full px-margin mb-6 sm:mb-10 lg:mb-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 gap-y-6 sm:gap-y-8 lg:gap-y-12">
                {firstEightProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    indexNumber={product.indexNumber}
                    category={product.category}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    imageAlt={product.imageAlt}
                    badge={product.badge}
                    sizes={product.sizes}
                    href={`/shop/${product.id}`}
                  />
                ))}
              </div>
            </section>

            {/* SECTION 4: EDITORIAL MICRO-INTERRUPTION (Show only if all/large list) */}
            {filteredProducts.length > 8 && <ShopEditorialInterruption />}

            {/* SECTION 5: SECOND COMMERCE ROW (REMAINING CARDS) */}
            {secondFourProducts.length > 0 && (
              <section className="w-full px-margin mb-8 sm:mb-12 lg:mb-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 gap-y-6 sm:gap-y-8 lg:gap-y-12">
                  {secondFourProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      indexNumber={product.indexNumber}
                      category={product.category}
                      name={product.name}
                      price={product.price}
                      imageUrl={product.imageUrl}
                      imageAlt={product.imageAlt}
                      badge={product.badge}
                      sizes={product.sizes}
                      href={`/shop/${product.id}`}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* SECTION 6: CATALOGUE PAGINATION */}
            <ShopPagination
              totalItems={24}
              currentCount={filteredProducts.length}
            />
          </>
        )}
      </div>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <ShopPageContent />
    </Suspense>
  );
}
