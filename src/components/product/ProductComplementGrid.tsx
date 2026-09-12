import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ComplementProduct } from "@/data/productDetailData";

interface ProductComplementGridProps {
  chapter?: string;
  title?: string;
  items: ComplementProduct[];
}

export function ProductComplementGrid({
  chapter = "HARMONIC ENSEMBLE",
  title = "Complete The Silhouette",
  items,
}: ProductComplementGridProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-10 md:py-16 border-t border-[#2B2420]/15 bg-[#F5EFE8]/40">
      <div className="flex items-baseline justify-between pb-6">
        <div className="flex flex-col">
          <span className="font-sans text-[10px] text-[#5C5A3E] uppercase tracking-[0.2em] font-semibold">
            {chapter}
          </span>
          <h2 className="font-serif text-xl md:text-3xl text-[#2B2420] font-normal mt-0.5">
            {title}
          </h2>
        </div>

        <Link
          href="/shop?collection=accessories"
          className="font-sans text-[11px] uppercase tracking-wider text-[#C17A63] hover:underline transition-colors font-semibold"
        >
          SERIES →
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {items.map((item, idx) => {
          const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
          return (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col bg-[#FAF6F1] p-2 sm:p-2.5 border border-[#2B2420]/15 shadow-xs"
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
                <span className="absolute top-1.5 left-1.5 font-mono text-[9px] bg-[#FAF6F1]/95 px-1 py-0.5 text-[#2B2420] border border-[#2B2420]/10 z-10">
                  {numStr}
                </span>
              </div>

              <div className="pt-2 sm:pt-2.5 flex flex-col gap-0.5">
                <span className="font-sans text-[9px] text-[#7A7168] uppercase tracking-wider font-medium">
                  {item.category}
                </span>
                <h3 className="font-serif text-[13.5px] sm:text-[14px] text-[#2B2420] truncate group-hover:text-[#C17A63] transition-colors font-normal">
                  {item.name}
                </h3>
                <span className="font-sans text-[13px] text-[#2B2420] font-medium pt-0.5">
                  ${item.price}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
