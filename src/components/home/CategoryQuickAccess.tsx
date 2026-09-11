import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CategoryQuickAccess() {
  return (
    <section className="w-full py-10 sm:py-12 lg:py-16 bg-surface-container-high lg:bg-surface-container-high border-y border-surface-dim/50">
      <div className="angha-container">
        {/* Mobile Stacked Navigation Variant (Stitch Mobile Screen) */}
        <div className="md:hidden flex flex-col">
          <div className="flex flex-col pb-3">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              06 / FIND YOUR FORM
            </span>
            <h2 className="font-serif text-2xl uppercase tracking-wide text-on-surface mt-1 font-normal">
              FIND YOUR FORM.
            </h2>
          </div>

          <nav className="flex flex-col space-y-1 mt-1">
            <Link
              href="/shop/dresses"
              className="min-h-[52px] flex items-center justify-between py-3 bg-surface-container-lowest px-4 hover:bg-surface-container transition-colors group"
            >
              <span className="font-serif text-base text-on-surface tracking-wide">DRESSES</span>
              <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/shop/knitwear"
              className="min-h-[52px] flex items-center justify-between py-3 bg-surface-container-lowest px-4 hover:bg-surface-container transition-colors group"
            >
              <span className="font-serif text-base text-on-surface tracking-wide">KNITWEAR</span>
              <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/shop/outerwear"
              className="min-h-[52px] flex items-center justify-between py-3 bg-surface-container-lowest px-4 hover:bg-surface-container transition-colors group"
            >
              <span className="font-serif text-base text-on-surface tracking-wide">OUTERWEAR</span>
              <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/shop/accessories"
              className="min-h-[52px] flex items-center justify-between py-3 bg-surface-container-lowest px-4 hover:bg-surface-container transition-colors group"
            >
              <span className="font-serif text-base text-on-surface tracking-wide">ACCESSORIES</span>
              <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/shop"
              className="min-h-[52px] flex items-center justify-between py-3 bg-inverse-surface text-inverse-on-surface px-4 mt-2 hover:bg-primary transition-colors group"
            >
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em]">VIEW ALL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>
        </div>

        {/* Desktop Inline Row Variant */}
        <div className="hidden md:flex max-w-6xl mx-auto flex-col items-center text-center space-y-4">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            06 / FIND YOUR FORM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl uppercase text-on-surface tracking-tight font-normal">
            FIND YOUR FORM.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-2 font-sans text-xs sm:text-[13px] font-semibold uppercase tracking-[0.15em] text-on-surface">
            <Link href="/shop/dresses" className="hover:text-primary transition-colors">
              DRESSES
            </Link>
            <span className="text-outline text-xs">•</span>
            <Link href="/shop/knitwear" className="hover:text-primary transition-colors">
              KNITWEAR
            </Link>
            <span className="text-outline text-xs">•</span>
            <Link href="/shop/outerwear" className="hover:text-primary transition-colors">
              OUTERWEAR
            </Link>
            <span className="text-outline text-xs">•</span>
            <Link href="/shop/accessories" className="hover:text-primary transition-colors">
              ACCESSORIES
            </Link>
            <span className="text-outline text-xs">•</span>
            <Link
              href="/shop"
              className="text-primary hover:text-on-surface transition-colors font-bold"
            >
              VIEW ALL →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
