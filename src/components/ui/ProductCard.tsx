"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export interface ProductCardProps {
  id: string;
  indexNumber: string; // e.g., "01 / 12"
  category: string;
  name: string;
  price: string | number;
  imageUrl: string;
  imageAlt: string;
  href?: string;
  onWishlistToggle?: (id: string) => void;
}

export function ProductCard({
  id,
  indexNumber,
  category,
  name,
  price,
  imageUrl,
  imageAlt,
  href = "/shop",
  onWishlistToggle,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formattedPrice =
    typeof price === "number" ? `$${price}` : price.startsWith("$") ? price : `$${price}`;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted((prev) => !prev);
    if (onWishlistToggle) {
      onWishlistToggle(id);
    }
  };

  return (
    <article className="flex flex-col bg-surface-container-lowest group relative border border-transparent hover:border-surface-dim/40 shadow-sm transition-colors">
      {/* 3:4 Aspect Ratio Image Container */}
      <Link href={href} className="relative aspect-[3/4] w-full bg-surface-container overflow-hidden block">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          quality={95}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Monospaced Index Badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-surface/90 px-1.5 sm:px-2 py-0.5 sm:py-1 z-10">
          <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.15em] text-on-surface uppercase">
            {indexNumber}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlist}
          aria-label={`Save ${name} to Wishlist`}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full sm:rounded-none flex items-center justify-center bg-surface/85 backdrop-blur-sm text-on-surface hover:text-primary transition-colors z-10 focus-visible:outline-none"
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
      </Link>

      {/* Metadata & Actions */}
      <div className="p-2.5 sm:p-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between mb-1 sm:mb-1.5">
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase text-outline">
              {category}
            </span>
            <span className="font-sans text-[13px] sm:text-[15px] font-medium tracking-[0.02em] text-primary sm:text-on-surface">
              {formattedPrice}
            </span>
          </div>

          <Link href={href}>
            <h3 className="font-serif text-[14px] sm:text-lg font-medium leading-snug text-on-surface group-hover:text-primary transition-colors line-clamp-1">
              {name}
            </h3>
          </Link>
        </div>

        {/* Quick Explore Strip */}
        <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-surface-dim/40 flex items-center justify-between">
          <Link
            href={href}
            className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-primary sm:text-outline group-hover:text-primary transition-colors flex items-center gap-1"
          >
            <span>EXPLORE</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
