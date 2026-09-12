import React from "react";
import { Metadata } from "next";
import { CartPageView } from "@/components/cart/CartPageView";

export const metadata: Metadata = {
  title: "Your Bag — An Gha Archival Catalogue",
  description:
    "A considered selection of handcrafted garments, crafted with tactile restraint and archival precision.",
};

export default function CartPage() {
  return (
    <main className="flex-1 w-full bg-[#FAF6F1]">
      <CartPageView />
    </main>
  );
}
