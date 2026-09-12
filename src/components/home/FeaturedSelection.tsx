import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard, ProductCardProps } from "@/components/ui/ProductCard";

const FEATURED_PRODUCTS: ProductCardProps[] = [
  {
    id: "elara-draped-dress",
    indexNumber: "01 / 12",
    category: "DRESSES",
    name: "Elara Draped Dress",
    price: 128,
    imageUrl: "/images/dresses-1.png",
    imageAlt: "Elara Draped Dress in terracotta linen",
    href: "/shop/elara-draped-dress",
  },
  {
    id: "solis-ribbed-knit-sweater",
    indexNumber: "02 / 12",
    category: "KNITWEAR",
    name: "Solis Ribbed Knit Sweater",
    price: 164,
    imageUrl: "/images/knitwear-1.png",
    imageAlt: "Solis Ribbed Knit Sweater in oatmeal melange",
    href: "/shop/solis-ribbed-knit-sweater",
  },
  {
    id: "mira-structured-coat",
    indexNumber: "03 / 12",
    category: "OUTERWEAR",
    name: "Mira Structured Coat",
    price: 248,
    imageUrl: "/images/outerwear-1.png",
    imageAlt: "Mira Structured Coat in warm taupe",
    href: "/shop/mira-structured-coat",
  },
  {
    id: "aven-leather-shoulder-bag",
    indexNumber: "04 / 12",
    category: "ACCESSORIES",
    name: "Aven Leather Shoulder Bag",
    price: 118,
    imageUrl: "/images/accessories-1.png",
    imageAlt: "Aven Leather Shoulder Bag in terracotta",
    href: "/shop/aven-leather-shoulder-bag",
  },
];

export function FeaturedSelection() {
  return (
    <section className="w-full py-10 sm:py-16 lg:py-24">
      <div className="angha-container">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-6 sm:mb-10 lg:mb-14 pb-2.5 sm:pb-3 border-b border-surface-dim/50">
          <div className="space-y-1">
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              03 / FEATURED SELECTION
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl uppercase text-on-surface tracking-tight font-normal">
              THE NEW EDIT
            </h2>
          </div>
        </div>

        {/* 2-Col Mobile / 4-Col Desktop Commerce Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          {/* Mobile Button Variant */}
          <Link
            href="/shop?collection=new-in"
            className="sm:hidden min-h-[44px] flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-on-surface hover:text-primary transition-colors bg-surface-container-low py-3 border border-surface-dim/30 w-full"
          >
            <span>VIEW ALL NEW IN</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Desktop Button Variant */}
          <Link
            href="/shop?collection=new-in"
            className="hidden sm:inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-on-surface hover:text-primary pb-1 border-b border-on-surface hover:border-primary transition-colors duration-150"
          >
            <span>VIEW ALL NEW IN</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
