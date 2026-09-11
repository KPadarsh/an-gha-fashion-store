"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  Plus,
  Minus,
  Truck,
  RotateCcw,
  Check,
  Heart,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ui/ProductCard";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.imageUrl);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Default");
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [postalCode, setPostalCode] = useState("");
  const [showDeliveryCheck, setShowDeliveryCheck] = useState(false);

  const wishlisted = isWishlisted(product.id);

  // If invalid product ID
  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor);
    // Proceed straight to checkout
    window.location.href = "/checkout";
  };

  // Related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="w-full bg-white min-h-screen py-6 sm:py-10">
      <div className="angha-container">
        {/* 1. Breadcrumbs Trail matching Reference Image 2 */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 text-xs sm:text-sm text-gray-500 font-sans">
          <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Electronics
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Audio
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Headphones
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <li>
              <span className="text-gray-400">Shop Headphones by type</span>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <li className="font-semibold text-gray-900 truncate max-w-[180px] sm:max-w-none">
              {product.id}
            </li>
          </ol>
        </nav>

        {/* 2. Main Product Showcase Grid (Left: Image Gallery, Right: Buy Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Big Showcase & Thumbnails */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Large Image */}
            <div className="relative aspect-square w-full rounded-2xl sm:rounded-3xl bg-[#F6F6F6] p-8 sm:p-12 flex items-center justify-center overflow-hidden border border-gray-200/60 shadow-xs">
              {/* Wishlist Floating Button */}
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-gray-700 hover:text-red-500 transition-transform active:scale-95 z-10"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    wishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                  }`}
                  strokeWidth={1.75}
                />
              </button>

              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center p-6 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Thumbnail Row (Matching Reference Image 2: 4 cards below) */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {product.galleryImages.map((img, idx) => {
                const isActive = selectedImage === img;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative aspect-square rounded-xl bg-[#F6F6F6] p-2 overflow-hidden border-2 transition-all ${
                      isActive
                        ? "border-[#1B3B2B] shadow-sm scale-102"
                        : "border-transparent hover:border-gray-300 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      fill
                      quality={85}
                      className="object-contain object-center p-1.5"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Product Specs, Pricing, & Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Title & Short Description */}
            <div className="space-y-2">
              <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#1F2124] tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
                {product.description}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-1.5 pt-1">
                <div className="flex items-center text-[#1B3B2B]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#1B3B2B] text-[#1B3B2B]"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  ({product.reviewsCount})
                </span>
              </div>
            </div>

            {/* Price Line matching Reference Image */}
            <div className="pt-2 border-t border-gray-100 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1F2124]">
                  ${product.price.toFixed(2)}
                </span>
                {product.monthlyPrice && (
                  <span className="text-gray-700 text-sm sm:text-base font-semibold">
                    or ${product.monthlyPrice.toFixed(2)}/month
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Suggested payments with 6 months special financing
              </p>
            </div>

            <div className="h-px bg-gray-200/80" />

            {/* Choose a Color swatches matching Reference Image */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">Choose a Color</span>
                <span className="text-xs text-gray-500 font-medium">{selectedColor}</span>
              </div>

              <div className="flex items-center gap-3">
                {product.colors.map((c) => {
                  const isSelected = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      aria-label={`Select color ${c.name}`}
                      className={`relative w-9 h-9 rounded-full transition-transform ${
                        isSelected ? "ring-2 ring-offset-2 ring-gray-900 scale-110" : "hover:scale-105"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {isSelected && (
                        <Check
                          className={`w-4 h-4 mx-auto ${
                            c.hex === "#FAF6F1" || c.hex === "#ECEFF1" || c.hex === "#FAFAFA"
                              ? "text-black"
                              : "text-white"
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="h-px bg-gray-200/80" />

            {/* Quantity Stepper & Stock Countdown */}
            <div className="flex items-center gap-6">
              {/* Stepper */}
              <div className="inline-flex items-center border border-gray-200 bg-[#F6F6F6] rounded-full px-4 py-2">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="p-1 text-gray-600 hover:text-black transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-sm px-4 min-w-[32px] text-center text-gray-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="p-1 text-gray-600 hover:text-black transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Stock Notice matching Reference Image */}
              <div className="text-xs text-gray-600">
                <span>Only </span>
                <span className="font-bold text-amber-600">{product.stockLeft} Items</span>
                <span> Left!</span>
                <p className="text-[11px] text-gray-400">Don&apos;t miss it</p>
              </div>
            </div>

            {/* Action Buttons Row: Buy Now & Add to Cart */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full sm:flex-1 py-3.5 bg-[#1B3B2B] hover:bg-[#132A1F] text-white font-sans text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Buy Now
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full sm:flex-1 py-3.5 border font-sans text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2 ${
                  addedAnimation
                    ? "bg-[#1B3B2B] text-white border-[#1B3B2B]"
                    : "border-gray-900 text-gray-900 hover:bg-gray-100"
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 text-[#A7F3D0]" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <span>Add to Cart</span>
                )}
              </button>
            </div>

            {/* Benefit Information Cards matching Reference Image */}
            <div className="rounded-2xl border border-gray-200/80 divide-y divide-gray-200/80 overflow-hidden bg-white">
              {/* Free Delivery Box */}
              <div className="p-4 sm:p-5 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-orange-50 text-orange-600 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-bold text-gray-900">Free Delivery</h4>
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() => setShowDeliveryCheck((prev) => !prev)}
                      className="text-xs text-gray-600 underline hover:text-black"
                    >
                      Enter your Postal code for Delivery Availability
                    </button>
                  </div>
                  {showDeliveryCheck && (
                    <div className="mt-2 flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Enter ZIP code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="text-xs px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#1B3B2B]"
                      />
                      <button
                        type="button"
                        onClick={() => alert(`Standard Free Delivery available for ${postalCode || "your area"} (2-4 business days)`)}
                        className="text-xs px-3 py-1.5 bg-[#1B3B2B] text-white font-semibold rounded-md"
                      >
                        Check
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Return Delivery Box */}
              <div className="p-4 sm:p-5 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-orange-50 text-orange-600 shrink-0">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-900">Return Delivery</h4>
                  <p className="text-xs text-gray-600">
                    Free 30days Delivery Returns.{" "}
                    <button
                      type="button"
                      onClick={() => alert("30-Day Hassle-Free Returns: Return items in new condition within 30 days for a full refund.")}
                      className="underline font-medium text-gray-800 hover:text-black"
                    >
                      Details
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Related Products Section */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-sans text-2xl font-bold text-gray-900">
              Similar Products You Might Like
            </h2>
            <Link
              href="/#curated-products"
              className="text-xs font-semibold text-[#1B3B2B] hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
