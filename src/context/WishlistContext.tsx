"use client";

import React, { createContext, useContext, useState } from "react";
import { SHOP_PRODUCTS, ShopProduct } from "@/data/shopProducts";
import { useCart } from "@/context/CartContext";

interface WishlistContextType {
  wishlistIds: string[];
  wishlistItems: ShopProduct[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  clearWishlist: () => void;
  moveToCart: (productId: string, size?: string) => void;
  addAllToCart: () => void;
  totalWishlistCount: number;
}

const INITIAL_WISHLIST_IDS = [
  "elara-draped-dress",
  "sienna-tailored-trench",
  "cove-leather-tote",
];

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistIds, setWishlistIds] = useState<string[]>(INITIAL_WISHLIST_IDS);
  const { addItem } = useCart();

  // Retrieve full product models from shop products catalog
  const wishlistItems = wishlistIds
    .map((id) => SHOP_PRODUCTS.find((p) => p.id === id))
    .filter((p): p is ShopProduct => p !== undefined);

  const isWishlisted = (productId: string) => wishlistIds.includes(productId);

  const addToWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      if (prev.includes(productId)) return prev;
      return [productId, ...prev];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  const toggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [productId, ...prev]
    );
  };

  const clearWishlist = () => {
    setWishlistIds([]);
  };

  const moveToCart = (productId: string, size?: string) => {
    const product = SHOP_PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const chosenSize = size || product.sizes[0] || "ONE SIZE";

    addItem({
      productId: product.id,
      name: product.name,
      category: product.category,
      specimenNumber: `SPECIMEN ${product.indexNumber}`,
      price: product.price,
      currency: "USD",
      color: product.color.toUpperCase(),
      size: chosenSize,
      fabricDetails: "ARCHIVAL WEAVE • PROVENANCE VERIFIED",
      imageUrl: product.imageUrl,
      quantity: 1,
      href: product.href || `/shop/${product.id}`,
    });
  };

  const addAllToCart = () => {
    wishlistItems.forEach((product) => {
      moveToCart(product.id);
    });
  };

  const totalWishlistCount = wishlistIds.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isWishlisted,
        clearWishlist,
        moveToCart,
        addAllToCart,
        totalWishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
