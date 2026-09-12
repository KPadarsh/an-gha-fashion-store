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
    id: "strappy-sandal",
    name: "Strappy Sandal",
    category: "Footwear · Tuscan Leather",
    indexTag: "INDEX 03 / 08",
    price: 165,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1U5zTm5U5hunCTZuWcLIkQLWFOnstC6TkuuhpQhEsUehfzvMEHmgVkTeUqKxa8g7Gq_zorO6pdnKViwTTsrtQfHdS_41al8N5OabIa7O83nY_VZHT55myH7gry02Q5C2r42QkscTmqWXgFTQhkl-nAtGJgdkov95tHFJ9rYg_FV_raqVOHELEuFRanegQWjN_7jd7vue34-v-muykrmeTDSXl3pvPzGKSCeSCKPmhCXzg5FZXl47ZD6lAI7",
    href: "/shop/strappy-sandal",
  },
  {
    id: "cove-leather-tote",
    name: "Cove Leather Tote",
    category: "Objects · Saddle Grain",
    indexTag: "INDEX 06 / 08",
    price: 142,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1X04CVOQs54zit_ngZ-XVvyB-oM6cbtzmW4_hbIroXy5uT8HiO0yyt1KSnGJPikLGsBCb4laRNbrXQdsIkDr_TaF5vAYdMkQ4tnsq5S82zgQtQNpYpn2XRsYjjJ6ABehkEfP1bwkgXY9-DEqIDpl_LbcyuoBXr05HeRiRUT0BK7ncSCiWXECtrIwLKKqB96oBcWtQB4wIM0gMLCIPwCJpeWArk4HfM9ORwhAXCdPLnqYTMCIIAxyHYqKPar",
    href: "/shop/cove-leather-tote",
  },
  {
    id: "sienna-tailored-trench",
    name: "Sienna Tailored Trench",
    category: "Outerwear · Double Wool",
    indexTag: "INDEX 08 / 08",
    price: 280,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1Uw4R_mh7dDwtihMR40LJD5Y4FcRCT87YXljf3wJDnvOvf9RGlAa0qgxoP9lHgLrn2ttBMfU-Wq9kwcHkAzyvOAzN6HIwfnBufoPETptYNbRFndaZ_VgsQlj2E-tvyZXNlT1uYgLb1977YPpJ71XL3gjYY-QlqwMOIQCB_66NckgU5CaAtHjlwF2zD1xSkPDQec_3DWhW2MvoFFYG5rQMI7GDAnlqIEBxoxLVgR-l2jtTmF_FYTamGDNP0",
    href: "/shop/sienna-tailored-trench",
  },
];

export function OrderRecommendations() {
  return (
    <section className="w-full pt-12 pb-16 mt-8 border-t border-[#2B2420]/10">
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
  );
}
