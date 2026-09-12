"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RecommendationItem {
  id: string;
  name: string;
  category: string;
  indexTag: string;
  price: number;
  imageUrl: string;
  href: string;
}

const RECOMMENDATIONS: RecommendationItem[] = [
  {
    id: "accessories-4",
    name: "Aven Suede Envelope Clutch",
    category: "Footwear & Leather",
    indexTag: "INDEX 03 / 08",
    price: 135,
    imageUrl: "/images/accessories-4.png",
    href: "/shop/aven-leather-shoulder-bag",
  },
  {
    id: "cove-leather-tote",
    name: "Cove Leather Tote",
    category: "Objects · Saddle Grain",
    indexTag: "INDEX 06 / 08",
    price: 142,
    imageUrl: "/images/accessories-2.png",
    href: "/shop/cove-leather-tote",
  },
  {
    id: "sienna-tailored-trench",
    name: "Sienna Tailored Trench",
    category: "Outerwear · Double Wool",
    indexTag: "INDEX 08 / 08",
    price: 280,
    imageUrl: "/images/outerwear-2.png",
    href: "/shop/sienna-tailored-trench",
  },
];

export function OrderRecommendations() {
  return (
    <>
      {/* ================= MOBILE VIEW (< md) ================= */}
      <section
        aria-label="Recommended Works"
        className="block md:hidden px-4 py-6 bg-[#FFF1EA] -mx-4 sm:-mx-6 mt-4 border-t border-b border-[#2B2420]/10"
      >
        <div className="flex justify-between items-baseline mb-4">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#894B37] font-semibold block mb-0.5">
              CURATED PAIRINGS
            </span>
            <h3 className="font-serif text-lg text-[#211A16] font-normal">
              Continue Exploring
            </h3>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#53433F]">
            2 OF 12
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Item A: Cove Tote */}
          <article className="flex flex-col bg-[#FFFFFF] shadow-xs overflow-hidden border border-[#2B2420]/10">
            <Link href="/shop/cove-leather-tote" className="block">
              <div className="relative w-full aspect-[3/4] bg-[#F3E5DF] overflow-hidden">
                <Image
                  src="/images/accessories-2.png"
                  alt="Cove Tote in rich cognac amber leather"
                  fill
                  unoptimized
                  sizes="50vw"
                  className="object-cover object-center"
                />
                <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#FFF8F5]/90 text-[#211A16] font-mono text-[9px] uppercase tracking-wider backdrop-blur-sm border border-[#2B2420]/5">
                  01 / BAG
                </span>
              </div>
              <div className="p-2.5 flex flex-col justify-between flex-1">
                <span className="font-sans text-xs text-[#211A16] font-medium truncate block">
                  Cove Tote
                </span>
                <div className="flex justify-between items-center mt-1 pt-1 border-t border-[#2B2420]/5">
                  <span className="font-sans text-[11px] text-[#53433F]">
                    Cognac
                  </span>
                  <span className="font-sans text-xs font-semibold text-[#211A16]">
                    $142
                  </span>
                </div>
              </div>
            </Link>
          </article>

          {/* Item B: Strappy Sandal */}
          <article className="flex flex-col bg-[#FFFFFF] shadow-xs overflow-hidden border border-[#2B2420]/10">
            <Link href="/shop/aven-leather-shoulder-bag" className="block">
              <div className="relative w-full aspect-[3/4] bg-[#F3E5DF] overflow-hidden">
                <Image
                  src="/images/accessories-4.png"
                  alt="Minimalist supple leather clutch"
                  fill
                  unoptimized
                  sizes="50vw"
                  className="object-cover object-center"
                />
                <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#FFF8F5]/90 text-[#211A16] font-mono text-[9px] uppercase tracking-wider backdrop-blur-sm border border-[#2B2420]/5">
                  02 / CLUTCH
                </span>
              </div>
              <div className="p-2.5 flex flex-col justify-between flex-1">
                <span className="font-sans text-xs text-[#211A16] font-medium truncate block">
                  Aven Clutch
                </span>
                <div className="flex justify-between items-center mt-1 pt-1 border-t border-[#2B2420]/5">
                  <span className="font-sans text-[11px] text-[#53433F]">
                    Amber
                  </span>
                  <span className="font-sans text-xs font-semibold text-[#211A16]">
                    $135
                  </span>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </section>

      {/* ================= DESKTOP VIEW (>= md) ================= */}
      <section className="hidden md:block w-full pt-12 pb-16 mt-8 border-t border-[#2B2420]/10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#894B37] font-bold">
                Series 08 Monograph
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] text-[#362F2B] tracking-tight font-normal">
              Continue Exploring
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#625B52] italic">
            Considered additions complementing your selection
          </p>
        </div>

        {/* 3-Column Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {RECOMMENDATIONS.map((item) => (
            <article key={item.id} className="group flex flex-col cursor-pointer">
              <Link href={item.href} className="block">
                <div className="relative aspect-[3/4] bg-[#F9EBE5] overflow-hidden mb-4 border border-[#2B2420]/10 shadow-xs group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFF8F5]/90 backdrop-blur-sm px-2.5 py-1 border border-[#2B2420]/5">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#625B52]">
                      {item.indexTag}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-[#625B52]">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-[#362F2B] mt-1 group-hover:text-[#894B37] transition-colors font-normal">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#2B2420]/5">
                    <span className="font-sans text-base text-[#211A16] font-medium">
                      ${item.price} USD
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-[#894B37] group-hover:underline">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
