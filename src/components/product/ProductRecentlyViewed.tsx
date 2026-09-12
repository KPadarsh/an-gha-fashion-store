import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RecentlyViewedProduct } from "@/data/productDetailData";

interface ProductRecentlyViewedProps {
  chapter?: string;
  count?: string;
  items: RecentlyViewedProduct[];
}

export function ProductRecentlyViewed({
  chapter = "RECENTLY CONSULTED",
  count = "2 PIECES",
  items,
}: ProductRecentlyViewedProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-10 md:py-16 border-t border-[#2B2420]/15">
      <div className="flex items-center justify-between pb-5">
        <span className="font-sans text-[11px] text-[#7A7168] uppercase tracking-[0.2em] font-semibold">
          {chapter}
        </span>
        <span className="font-mono text-[11px] text-[#7A7168]">{count}</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {items.slice(0, 4).map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group flex flex-col bg-[#F5EFE8] p-2 sm:p-2.5 border border-[#2B2420]/15 shadow-xs"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#EDE5DB]">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                quality={90}
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-2 sm:pt-2.5 flex flex-col">
              <span className="font-sans text-[9px] text-[#7A7168] uppercase tracking-wider font-medium">
                {item.name.toLowerCase().includes("coat") || item.name.toLowerCase().includes("trench")
                  ? "OUTERWEAR"
                  : "KNITWEAR"}
              </span>
              <h3 className="font-serif text-[13px] sm:text-[14px] text-[#2B2420] truncate font-normal group-hover:text-[#C17A63] transition-colors">
                {item.name}
              </h3>
              <span className="font-sans text-[13px] text-[#2B2420] font-medium pt-0.5">
                ${item.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
