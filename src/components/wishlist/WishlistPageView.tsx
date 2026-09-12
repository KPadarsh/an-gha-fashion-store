"use client";

import React from "react";
import { useWishlist } from "@/context/WishlistContext";
import { WishlistHeader } from "./WishlistHeader";
import { WishlistGrid } from "./WishlistGrid";
import { EmptyWishlistView } from "./EmptyWishlistView";

export function WishlistPageView() {
  const { wishlistItems, totalWishlistCount } = useWishlist();

  if (totalWishlistCount === 0 || wishlistItems.length === 0) {
    return <EmptyWishlistView />;
  }

  return (
    <main className="min-h-screen bg-[#FAF6F1] flex flex-col w-full pb-16">
      <WishlistHeader totalCount={totalWishlistCount} />
      <WishlistGrid items={wishlistItems} />
    </main>
  );
}
