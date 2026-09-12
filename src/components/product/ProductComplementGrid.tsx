import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ComplementProduct } from "@/data/productDetailData";

interface ProductComplementGridProps {
  chapter?: string;
  title: string;
  items: ComplementProduct[];
}

export function ProductComplementGrid({
  chapter = "04 / SILHOUETTE COMPLEMENTS",
  title = "Complete the silhouette.",
  items,
}: ProductComplementGridProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 border-t border-[#2B2420]/10">
      <div className="flex items-end justify-between pb-8">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C17A63] uppercase">
            {chapter}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-[#2B2420] font-normal">
            {title}
          </h3>
        </div>

        <Link
          href="/shop?collection=accessories"
          className="hidden md:inline-block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2B2420] hover:text-[#C17A63] transition-colors"
        >
          View Full Curation →
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group flex flex-col bg-[#F5EFE8] border border-[#2B2420]/10"
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
              <span className="absolute top-2.5 left-2.5 text-[9px] font-semibold tracking-wider bg-[#FAF6F1]/90 px-1.5 py-0.5 text-[#2B2420] z-10">
                {item.code}
              </span>
            </div>

            <div className="p-4 flex flex-col gap-1">
              <span className="text-[9px] font-semibold tracking-[0.18em] text-[#7A7168] uppercase">
                {item.category}
              </span>
              <span className="text-[13px] font-medium text-[#2B2420] group-hover:text-[#C17A63] transition-colors line-clamp-1">
                {item.name}
              </span>
              <span className="text-[12px] font-semibold text-[#2B2420] pt-0.5">
                ${item.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
