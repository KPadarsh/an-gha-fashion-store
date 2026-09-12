"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { CartHeader } from "@/components/cart/CartHeader";
import { CartItemList } from "@/components/cart/CartItemList";
import { CartOrderSummary } from "@/components/cart/CartOrderSummary";
import { EmptyBagView } from "@/components/cart/EmptyBagView";

export function CartPageView() {
  const { items } = useCart();

  if (items.length === 0) {
    return <EmptyBagView />;
  }

  return (
    <div className="w-full bg-[#FAF6F1]">
      {/* SECTION 1: EDITORIAL HEADER & SELECTION OVERVIEW */}
      <CartHeader />

      {/* SECTION 2: TWO-COLUMN COMMERCE SPREAD */}
      <section className="w-full px-4 md:px-12 pb-12 md:pb-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* LEFT COLUMN: CART ITEMS (8 cols / 65%) */}
          <div className="lg:col-span-8">
            <CartItemList />
          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY (4 cols / 35% Sticky) */}
          <div className="lg:col-span-4">
            <CartOrderSummary />
          </div>
        </div>
      </section>
    </div>
  );
}

