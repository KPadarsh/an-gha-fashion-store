import React from "react";
import { Metadata } from "next";
import { CartHeader } from "@/components/cart/CartHeader";
import { CartItemList } from "@/components/cart/CartItemList";
import { CartOrderSummary } from "@/components/cart/CartOrderSummary";
import { CartDiscovery } from "@/components/cart/CartDiscovery";

export const metadata: Metadata = {
  title: "Your Bag — An Gha Archival Catalogue",
  description:
    "A considered selection of handcrafted garments, crafted with tactile restraint and archival precision.",
};

export default function CartPage() {
  return (
    <main className="flex-1 w-full bg-[#FAF6F1]">
      {/* SECTION 1: EDITORIAL HEADER & SELECTION OVERVIEW */}
      <CartHeader />

      {/* SECTION 2: TWO-COLUMN COMMERCE SPREAD */}
      <section className="w-full px-6 md:px-12 pb-16 md:pb-24">
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

      {/* SECTION 3: REFINED BOTTOM DISCOVERY (CONTINUE EXPLORING) */}
      <CartDiscovery />
    </main>
  );
}
