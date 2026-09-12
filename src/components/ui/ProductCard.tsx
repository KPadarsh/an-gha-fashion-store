"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight, Check } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export interface ProductBadge {
  text: string;
  variant?: "primary" | "secondary";
}

export interface ProductCardProps {
  id: string;
  indexNumber: string; // e.g., "01 / 12"
  category: string;
  name: string;
  price: string | number;
  imageUrl: string;
  imageAlt: string;
  badge?: ProductBadge;
  sizes?: string[];
  href?: string;
  onWishlistToggle?: (id: string) => void;
  onQuickAdd?: (id: string, size: string) => void;
}

export function ProductCard({
  id,
  indexNumber,
  category,
  name,
  price,
  imageUrl,
  imageAlt,
  badge,
  sizes = ["XS", "S", "M", "L"],
  href = `/shop/${id}`,
  onWishlistToggle,
  onQuickAdd,
}: ProductCardProps) {
  const { isWishlisted: checkWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();
  const isWishlisted = checkWishlist(id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  const formattedPrice =
    typeof price === "number"
      ? `$${price}`
      : price.startsWith("$")
      ? price
      : `$${price}`;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(id);
    if (onWishlistToggle) {
      onWishlistToggle(id);
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const sizeToAdd = selectedSize || sizes[0] || "ONE SIZE";
    setIsAdded(true);
    if (onQuickAdd) {
      onQuickAdd(id, sizeToAdd);
    } else {
      const numPrice =
        typeof price === "number"
          ? price
          : parseFloat(price.replace(/[^0-9.]/g, "")) || 128;
      addItem({
        productId: id,
        name: name,
        category: category,
        specimenNumber: `SPECIMEN ${indexNumber}`,
        price: numPrice,
        currency: "USD",
        color: "TERRACOTTA",
        size: sizeToAdd,
        fabricDetails: "100% ORGANIC RAW WEAVE",
        imageUrl: imageUrl,
        quantity: 1,
        href: href,
      });
    }
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <article className="group flex flex-col w-full bg-surface-container-lowest sm:bg-transparent">
      {/* 3:4 Aspect Ratio Image Container */}
      <div className="relative w-full aspect-[3/4] bg-surface-container-high overflow-hidden">
        <Link href={href} className="block w-full h-full relative" aria-label={name}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            quality={95}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Top Badges (Index + Optional Status Badge) */}
        <div className="absolute top-2 left-2 flex items-center gap-1 sm:gap-1.5 z-10 pointer-events-none">
          <div className="bg-surface/90 px-1.5 sm:px-2 py-0.5 backdrop-blur-xs">
            <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.15em] text-on-surface uppercase">
              {indexNumber}
            </span>
          </div>

          {badge && (
            <div
              className={`px-1.5 sm:px-2 py-0.5 text-white ${
                badge.variant === "secondary"
                  ? "bg-secondary"
                  : "bg-primary"
              }`}
            >
              <span className="font-sans text-[8px] sm:text-[10px] font-semibold tracking-wider uppercase">
                {badge.text}
              </span>
            </div>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlist}
          aria-label={`Save ${name} to Wishlist`}
          className="absolute top-2 right-2 w-8 h-8 rounded-full sm:rounded-none bg-surface/80 sm:bg-surface/90 hover:bg-surface flex items-center justify-center text-on-surface hover:text-primary transition-colors z-10 focus-visible:outline-none cursor-pointer"
        >
          <Heart
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
              isWishlisted
                ? "fill-primary text-primary"
                : "text-on-surface hover:text-primary"
            }`}
            strokeWidth={1.5}
          />
        </button>


        {/* Quick Add Hover Drawer (Desktop group-hover) */}
        <div className="hidden md:flex absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-inverse-surface/95 text-inverse-on-surface p-2.5 lg:p-3 backdrop-blur-xs items-center justify-between z-20">
          <div className="flex items-center gap-1 lg:gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`px-1.5 lg:px-2 py-0.5 transition-colors ${
                  selectedSize === size
                    ? "bg-primary text-white"
                    : "hover:bg-primary/80 hover:text-white text-surface-variant/80"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleQuickAdd}
            className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-fixed hover:text-surface-bright flex items-center gap-1 transition-colors focus-visible:outline-none"
          >
            {isAdded ? (
              <>
                <span>ADDED</span>
                <Check className="w-3.5 h-3.5 text-primary-fixed" />
              </>
            ) : (
              <>
                <span>ADD</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Metadata & Actions */}
      {/* Mobile Layout (< md) */}
      <div className="flex md:hidden p-2 flex-col gap-1">
        <span className="font-sans text-[10px] uppercase tracking-widest text-tertiary">
          {category}
        </span>
        <Link href={href} className="text-on-surface hover:text-primary transition-colors">
          <h2 className="font-serif text-[1.15rem] leading-snug line-clamp-1 font-normal">
            {name}
          </h2>
        </Link>
        <div className="flex items-center justify-between pt-0.5">
          <span className="font-sans text-sm font-medium tracking-[0.02em] text-primary">
            {formattedPrice}
          </span>
          <Link
            href={href}
            className="font-sans text-[10px] font-semibold text-tertiary hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-0.5"
          >
            <span>EXPLORE</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Desktop Layout (>= md) */}
      <div className="hidden md:flex pt-3 lg:pt-4 flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-tertiary">
            {category}
          </span>
          <span className="font-sans text-base lg:text-[1.125rem] font-medium tracking-[0.02em] text-on-surface">
            {formattedPrice}
          </span>
        </div>

        <Link href={href} className="group-hover:text-primary transition-colors">
          <h3 className="font-serif text-lg sm:text-xl lg:text-[1.5rem] font-normal leading-tight text-on-surface">
            {name}
          </h3>
        </Link>

        <Link
          href={href}
          className="mt-2.5 inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-primary hover:text-on-surface transition-colors"
        >
          <span>EXPLORE</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
