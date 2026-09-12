"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ShopHeader, CategoryFilter } from "@/components/shop/ShopHeader";
import {
  ShopFilterBar,
  FilterState,
} from "@/components/shop/ShopFilterBar";
import { ShopEditorialInterruption } from "@/components/shop/ShopEditorialInterruption";
import { ShopPagination } from "@/components/shop/ShopPagination";
import { ShopNewsletter } from "@/components/shop/ShopNewsletter";
import { ProductCard } from "@/components/ui/ProductCard";
import { SHOP_PRODUCTS } from "@/data/shopProducts";

function ShopPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const collectionParam = searchParams.get("collection");

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // Default open in Stitch desktop demo
  const [filters, setFilters] = useState<FilterState>({
    selectedCategories: ["Dresses"],
    selectedSizes: ["S"],
    selectedColors: ["Terracotta"],
    selectedPriceRange: "100-200",
    inStockOnly: true,
    sortBy: "featured",
  });

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
  };

  const handleCategorySelect = (category: CategoryFilter) => {
    setActiveCategory(category);
    if (category === "ALL") {
      setFilters((prev) => ({ ...prev, selectedCategories: [] }));
    } else if (category === "NEW IN") {
      setFilters((prev) => ({ ...prev, selectedCategories: [] }));
    } else {
      // capitalize for filter e.g. "Dresses"
      const formatted =
        category.charAt(0) + category.slice(1).toLowerCase();
      setFilters((prev) => ({ ...prev, selectedCategories: [formatted] }));
    }
  };


  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let list = [...SHOP_PRODUCTS];

    if (activeCategory === "NEW IN") {
      list = list.filter((p) => p.badge?.text === "NEW" || p.price > 200);
    } else if (activeCategory !== "ALL") {
      list = list.filter(
        (p) => p.category.toUpperCase() === activeCategory.toUpperCase()
      );
    }

    if (filters.selectedColors.length > 0) {
      list = list.filter((p) => filters.selectedColors.includes(p.color));
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

    // Default or fallback: ensure we show products for the Stitch view
    if (list.length === 0) {
      return SHOP_PRODUCTS;
    }
    return list;
  }, [activeCategory, filters]);

  // For visual exactness with Stitch:
  // First 8 cards in Grid Part 1, remaining 4 cards in Grid Part 2
  const firstEightProducts = SHOP_PRODUCTS.slice(0, 8);
  const secondFourProducts = SHOP_PRODUCTS.slice(8, 12);

  return (
    <main className="w-full bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        {/* SECTION 1: EDITORIAL HEADER & CATEGORY NAVIGATION */}
        <ShopHeader
          activeCategory={activeCategory}
          onSelectCategory={handleCategorySelect}
          totalCount={24}
        />

        {/* SECTION 2: COMMERCE CONTROL BAR & EXPANDABLE DRAWER */}
        <ShopFilterBar
          totalCount={24}
          isDrawerOpen={isDrawerOpen}
          onToggleDrawer={() => setIsDrawerOpen((prev) => !prev)}
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={handleResetFilters}
        />

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

        {/* SECTION 4: EDITORIAL MICRO-INTERRUPTION */}
        <ShopEditorialInterruption />

        {/* SECTION 5: SECOND COMMERCE ROW (4 CARDS) */}
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

        {/* SECTION 6: CATALOGUE PAGINATION */}
        <ShopPagination
          totalItems={24}
          currentCount={12}
        />

        {/* SECTION 7: COMPACT NEWSLETTER */}
        <ShopNewsletter />
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

