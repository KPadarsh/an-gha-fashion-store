"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Check, X, ArrowRight } from "lucide-react";
import { ShopProduct } from "@/data/shopProducts";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

interface WishlistGridProps {
  items: ShopProduct[];
}

export function WishlistGrid({ items }: WishlistGridProps) {
  const { removeFromWishlist } = useWishlist();
  const { addItem } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product: ShopProduct) => {
    const chosenSize =
      selectedSizes[product.id] || product.sizes[0] || "ONE SIZE";

    addItem({
      productId: product.id,
      name: product.name,
      category: product.category,
      specimenNumber: `SPECIMEN ${product.indexNumber}`,
      price: product.price,
      currency: "USD",
      color: product.color.toUpperCase(),
      size: chosenSize,
      fabricDetails: "100% ORGANIC RAW WEAVE • PROVENANCE VERIFIED",
      imageUrl: product.imageUrl,
      quantity: 1,
      href: product.href || `/shop/${product.id}`,
    });

    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section className="w-full px-4 md:px-12 py-10 md:py-16 max-w-[1440px] mx-auto">
      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {items.map((product) => {
          const currentSize =
            selectedSizes[product.id] || product.sizes[0] || "ONE SIZE";
          const isAdded = !!addedItems[product.id];

          return (
            <article
              key={product.id}
              className="group flex flex-col bg-[#FFFFFF] border border-[#2B2420]/10 shadow-xs hover:border-[#2B2420]/30 transition-all duration-300"
            >
              {/* 3:4 Aspect Ratio Image */}
              <div className="relative w-full aspect-[3/4] bg-[#F3E5DF] overflow-hidden">
                <Link
                  href={product.href || `/shop/${product.id}`}
                  className="block w-full h-full relative"
                  aria-label={product.name}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Link>

                {/* Top Left Index Number */}
                <div className="absolute top-2 left-2 bg-[#FFF8F5]/90 px-1.5 sm:px-2 py-0.5 backdrop-blur-xs border border-[#2B2420]/5 pointer-events-none">
                  <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.15em] text-[#2B2420] uppercase">
                    {product.indexNumber}
                  </span>
                </div>

                {/* Top Right Wishlist Toggle / Remove */}
                <button
                  type="button"
                  onClick={() => removeFromWishlist(product.id)}
                  aria-label={`Remove ${product.name} from Wishlist`}
                  className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-[#FFF8F5]/90 hover:bg-[#FFF8F5] flex items-center justify-center text-[#894B37] transition-colors border border-[#2B2420]/5 cursor-pointer z-10"
                  title="Remove from saved archive"
                >
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#894B37] text-[#894B37]" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-3">
                {/* Product Metadata */}
                <div>
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.18em] text-[#7A7168] mb-1">
                    <span>{product.category}</span>
                    <span className="text-[#2B2420] font-sans font-medium text-xs sm:text-sm tracking-normal">
                      ${product.price} USD
                    </span>
                  </div>

                  <Link
                    href={product.href || `/shop/${product.id}`}
                    className="block text-[#2B2420] hover:text-[#894B37] transition-colors"
                  >
                    <h3 className="font-serif text-base sm:text-lg lg:text-[1.25rem] font-normal leading-snug line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="font-sans text-[11px] text-[#7A7168] mt-0.5">
                    Tone: {product.color}
                  </p>
                </div>

                {/* Size Selector Strip */}
                {product.sizes.length > 1 && (
                  <div className="pt-2 border-t border-[#2B2420]/5 flex items-center gap-1.5 flex-wrap">
                    <span className="font-sans text-[9px] uppercase tracking-wider text-[#7A7168]">
                      Size:
                    </span>
                    <div className="flex items-center gap-1">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => handleSizeSelect(product.id, sz)}
                          className={`px-1.5 py-0.5 font-sans text-[10px] uppercase font-semibold transition-colors cursor-pointer border ${
                            currentSize === sz
                              ? "bg-[#2B2420] text-[#FAF6F1] border-[#2B2420]"
                              : "bg-[#FAF6F1] text-[#7A7168] border-[#2B2420]/10 hover:border-[#2B2420]/30"
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Card Actions (Add to Bag + Remove) */}
                <div className="pt-2 flex items-center gap-2 border-t border-[#2B2420]/10">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 py-2.5 px-3 bg-[#2B2420] hover:bg-[#894B37] text-[#FAF6F1] font-sans text-[10px] sm:text-xs uppercase tracking-[0.14em] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FAF6F1]" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>ADD TO BAG</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => removeFromWishlist(product.id)}
                    className="p-2.5 bg-[#FAF6F1] hover:bg-[#F3E5DF] text-[#7A7168] hover:text-[#2B2420] border border-[#2B2420]/10 transition-colors cursor-pointer"
                    title="Remove item"
                    aria-label={`Remove ${product.name}`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
