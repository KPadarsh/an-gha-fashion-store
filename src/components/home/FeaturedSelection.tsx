import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";

export function FeaturedSelection() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section className="w-full angha-container py-10 sm:py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-200">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B]">
            03 / FEATURED SELECTION
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Trending Collection
          </h2>
        </div>
        <Link
          href="#curated-products"
          className="text-xs font-semibold text-[#1B3B2B] hover:underline flex items-center gap-1"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4-Col Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
