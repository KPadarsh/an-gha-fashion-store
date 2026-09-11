import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard, ProductCardProps } from "@/components/ui/ProductCard";

const CURRENT_PIECES: ProductCardProps[] = [
  {
    id: "sienna-tailored-trench",
    indexNumber: "05 / 12",
    category: "OUTERWEAR",
    name: "Sienna Tailored Trench",
    price: 280,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1W035mWswCLgPspc3EDd3MP2lv08kqFs8A1NJn1sp9aqLgPox9bgGH87F-G9crGlWkXYF1Zfuabmsxjqt_QFNdDhMCGWd-qvWIvor-ZFMEE3Ip5oKGMv0DY6yQqwMt28QOpaFoPG_PsRxxNwKNTRJWxzLzmtKDCuggevHs9drRfeolaXIRWx8OxNv2dY03AmIwxPwl5NMWRJfCteDB099zhQHE1dSAVXsjIbd-i5LpCgaCGtYZhT61HjDpY",
    imageAlt: "Sienna Tailored Trench in stone surroundings",
    href: "/shop/sienna-tailored-trench",
  },
  {
    id: "alba-merino-turtleneck",
    indexNumber: "06 / 12",
    category: "KNITWEAR",
    name: "Alba Merino Turtleneck",
    price: 148,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPbU8uOl4v92R8z9TOZzMYapTcjsLjeIsR3R_jnfjL2lLLPuvHLrvXFxN7DPbNDAI8wewvxQV-GaQePzKfKAEo4NgS3mqGT71-i93zKCtbykylA_pK0_m9We6O5YVmtD_9wLM0snAPYufHqKNpbKwgTxqym5vVt7l4YGP7Bh9nAvVub0sgbswRV1jxyLcr9ybrsESynd5WO9vbiYI9S4lfmMq0b074g_MMjSJNFDJyELTsL1aaleIwLQ",
    imageAlt: "Alba Merino Turtleneck ribbed knit",
    href: "/shop/alba-merino-turtleneck",
  },
  {
    id: "kallie-wrap-midi-dress",
    indexNumber: "07 / 12",
    category: "DRESSES",
    name: "Kallie Wrap Midi Dress",
    price: 136,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBV0JTZOdMBUQcbmYe244KGNW6EG4_aHELrx-7dJ4RrgHUeOsGGcKvXveKC4qb7k7DSVS7BRKamNaww6VOvPk2H_5xHdZTQXd3ZDWvJZ5KZGkxwfDD40YeE3UMpXkO2oU4yxLR1mNa-rFEcyG5lxM5j82ROYG1M77vJXNypm9Y4tTYvAawk-KBYnjIRksOUQs6zzNb7JcrUQv2xEswZwbKQ7G684QiUcDS6exSpdz2pGh4w3Y-2rDW-4Q",
    imageAlt: "Kallie Wrap Midi Dress draped linen",
    href: "/shop/kallie-wrap-midi-dress",
  },
  {
    id: "cove-leather-tote",
    indexNumber: "08 / 12",
    category: "ACCESSORIES",
    name: "Cove Leather Tote",
    price: 142,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBODbQAEnVmA-CIREJPgXeEHitWmNqUIVZ176Knblh6gvAa5jZljXcfYlwFdRx4pYjZgxq9Fq_deLYqtUvabYd-G9twt9IYp2ni3tj5MjtdRHax6YkvfedKtyXX66Fn0GYjfKRE3RIo8SKOvu-8nIwMZ-yXPjVI_9UkbCNVwCZ8_zmi_iyKJzzIbiLWjVuYMBtT8HuYQFD1qQVq67II6JdJqxlaGGQ0r2nC0TFUhRXU3iLxWvTKMpwPvA",
    imageAlt: "Cove Leather Tote in rich brown leather",
    href: "/shop/cove-leather-tote",
  },
];

export function CurrentPieces() {
  return (
    <section className="w-full py-10 sm:py-16 lg:py-24">
      <div className="angha-container">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-6 sm:mb-10 lg:mb-14 pb-2.5 sm:pb-3 border-b border-surface-dim/50">
          <div className="space-y-1">
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              05 / CURRENT PIECES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl uppercase text-on-surface tracking-tight font-normal">
              SELECTED FOR NOW.
            </h2>
          </div>
        </div>

        {/* 2-Col Mobile / 4-Col Desktop Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {CURRENT_PIECES.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          {/* Mobile Button Variant */}
          <Link
            href="/shop"
            className="sm:hidden min-h-[44px] flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-on-surface hover:text-primary transition-colors bg-surface-container-low py-3 border border-surface-dim/30 w-full"
          >
            <span>SHOP ALL PIECES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Desktop Button Variant */}
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-on-surface hover:text-primary pb-1 border-b border-on-surface hover:border-primary transition-colors duration-150"
          >
            <span>SHOP ALL PIECES</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
