import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryItem {
  id: string;
  index: string;
  name: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "dresses",
    index: "01 / 04",
    name: "DRESSES",
    href: "/shop?category=Dresses",
    imageUrl: "/images/dresses-thumpnils-1.png",
    imageAlt: "Dresses category campaign preview",
  },
  {
    id: "knitwear",
    index: "02 / 04",
    name: "KNITWEAR",
    href: "/shop?category=Knitwear",
    imageUrl: "/images/knitwear-thumpnil-1.png",
    imageAlt: "Knitwear category tactile texture preview",
  },
  {
    id: "outerwear",
    index: "03 / 04",
    name: "OUTERWEAR",
    href: "/shop?category=Outerwear",
    imageUrl: "/images/outerwear-thumpnil-1.png",
    imageAlt: "Outerwear category structured coat preview",
  },
  {
    id: "accessories",
    index: "04 / 04",
    name: "ACCESSORIES",
    href: "/shop?category=Accessories",
    imageUrl: "/images/accessories-thumpnil-1.png",
    imageAlt: "Accessories category smooth leather bag preview",
  },
];

export function CategoryGrid() {
  return (
    <section className="w-full py-10 sm:py-16 lg:py-24 bg-surface-container-lowest">
      <div className="angha-container">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-10 lg:mb-14 pb-3 sm:pb-4 border-b border-surface-dim/60">
          <div className="space-y-1">
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              02 / THE WARDROBE
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-on-surface font-normal">
              THE WARDROBE, EDITED.
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-primary hover:text-on-surface transition-colors pb-1"
          >
            <span>VIEW ALL CATEGORIES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Col Desktop / 2-Col Mobile Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative flex flex-col bg-surface overflow-hidden border border-surface-dim/40 hover:border-on-surface/20 transition-all"
            >
              {/* 3:4 Aspect Image */}
              <div className="relative aspect-[3/4] w-full bg-surface-container-low overflow-hidden">
                <Image
                  src={cat.imageUrl}
                  alt={cat.imageAlt}
                  fill
                  unoptimized
                  priority
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Index Numeral */}
                <div className="absolute top-2.5 left-2.5 bg-surface/90 px-2 py-0.5 z-10">
                  <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.15em] text-on-surface uppercase">
                    {cat.index}
                  </span>
                </div>
              </div>

              {/* Title & Chevron */}
              <div className="p-3 sm:p-4 bg-surface-container-lowest">
                <div className="flex items-center justify-between pt-2 border-t border-surface-dim/40">
                  <h3 className="font-serif text-base sm:text-lg font-medium uppercase text-on-surface group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] text-on-surface group-hover:translate-x-1 transition-transform">
                    EXPLORE →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
