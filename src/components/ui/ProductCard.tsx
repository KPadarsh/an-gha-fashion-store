"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, Check } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [addedAnimation, setAddedAnimation] = useState(false);

  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <article className="group flex flex-col bg-[#F6F6F6] rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-lg border border-gray-200/50 relative justify-between">
      <div>
        {/* Image Container with Floating Wishlist Heart */}
        <div className="relative aspect-square w-full rounded-xl bg-white/60 overflow-hidden mb-4 flex items-center justify-center p-3">
          {/* Wishlist Button in Top Right */}
          <button
            type="button"
            onClick={handleWishlistClick}
            aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-gray-700 hover:text-red-500 shadow-xs z-10 transition-transform active:scale-90"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                wishlisted ? "fill-red-500 text-red-500" : "text-gray-600 hover:text-red-500"
              }`}
              strokeWidth={1.75}
            />
          </button>

          {/* Optional Promo Tag */}
          {product.tag && (
            <div className="absolute top-2.5 left-2.5 bg-[#1B3B2B] text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider z-10">
              {product.tag}
            </div>
          )}

          {/* Product Image Link */}
          <Link
            href={`/product/${product.id}`}
            className="relative w-full h-full block"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="space-y-1.5">
          {/* Row 1: Title and Price */}
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/product/${product.id}`}
              className="font-sans text-sm sm:text-base font-bold text-[#1F2124] hover:text-[#1B3B2B] line-clamp-1 transition-colors"
            >
              {product.name}
            </Link>
            <span className="font-sans text-sm sm:text-base font-bold text-[#1F2124] shrink-0">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Row 2: Subtitle */}
          <p className="text-xs text-gray-500 line-clamp-1 font-sans">
            {product.subtitle}
          </p>

          {/* Row 3: Star Rating (Green stars matching reference UI) */}
          <div className="flex items-center gap-1 pt-0.5">
            <div className="flex items-center text-[#1B3B2B]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-[#1B3B2B] text-[#1B3B2B]"
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium ml-0.5">
              ({product.reviewsCount})
            </span>
          </div>
        </div>
      </div>

      {/* Row 4: Action Button - Add to Cart */}
      <div className="mt-4 pt-1">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`w-auto px-5 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
            addedAnimation
              ? "bg-[#1B3B2B] text-white border-[#1B3B2B]"
              : "bg-transparent border-gray-900 text-gray-900 hover:bg-[#1B3B2B] hover:text-white hover:border-[#1B3B2B]"
          }`}
        >
          {addedAnimation ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#A7F3D0]" />
              <span>Added!</span>
            </>
          ) : (
            <span>Add to Cart</span>
          )}
        </button>
      </div>
    </article>
  );
}
