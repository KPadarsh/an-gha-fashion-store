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
  chapter = "05 / RECENTLY EXAMINED SPECIMENS",
  count = "[04] ARCHIVED",
  items,
}: ProductRecentlyViewedProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 border-t border-[#2B2420]/10">
      <div className="flex items-center justify-between pb-6">
        <span className="text-[10px] font-semibold tracking-[0.22em] text-[#7A7168] uppercase">
          {chapter}
        </span>
        <span className="text-[10px] text-[#7A7168] font-mono">{count}</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group flex flex-col"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#EDE5DB] relative">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                quality={90}
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-3 flex justify-between items-baseline text-[12px]">
              <span className="font-medium text-[#2B2420] group-hover:text-[#C17A63] transition-colors line-clamp-1">
                {item.name}
              </span>
              <span className="text-[#7A7168] font-mono shrink-0 pl-2">
                ${item.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
