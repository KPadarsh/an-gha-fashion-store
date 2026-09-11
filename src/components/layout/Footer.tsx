import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-10 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 border-t border-surface-dim/20">
      <div className="w-full px-margin">
        {/* Main Grid: 2-Col Mobile / 12-Col Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-12 lg:pb-16 border-b border-surface-dim/15">
          {/* Brand Column (Mobile: col-span-2, Desktop: col-span-5) */}
          <div className="col-span-2 md:col-span-5 pr-0 lg:pr-12">
            <span className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.22em] text-inverse-on-surface block mb-2 font-normal">
              ANGHA
            </span>
            <p className="font-serif italic text-base sm:text-lg lg:text-xl text-surface-variant/80 font-normal leading-relaxed mb-3 sm:mb-4">
              “A fashion catalogue in motion.”
            </p>
            <p className="font-sans text-xs sm:text-sm text-surface-variant/60 max-w-sm leading-relaxed">
              A contemporary archival maison synthesizing architectural precision with tactile materiality.
            </p>
          </div>

          {/* Collections Column (Mobile: col-span-1, Desktop: col-span-3) */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-surface-variant/70 mb-3 sm:mb-4">
              Collections
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 font-sans text-xs sm:text-[13px] uppercase tracking-wider text-surface-variant/80">
              <li>
                <Link href="/shop/dresses" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Dresses
                </Link>
              </li>
              <li>
                <Link href="/shop/knitwear" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Knitwear
                </Link>
              </li>
              <li>
                <Link href="/shop/outerwear" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Outerwear
                </Link>
              </li>
              <li>
                <Link href="/shop/accessories" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop?collection=new-in" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  New In
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Service Column (Mobile: col-span-1, Desktop: col-span-2) */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-surface-variant/70 mb-3 sm:mb-4">
              Client Service
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 font-sans text-xs sm:text-[13px] uppercase tracking-wider text-surface-variant/80">
              <li>
                <Link href="/shipping" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Exchanges & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Column (Mobile: col-span-2 or hidden/merged on small screens, Desktop: col-span-2) */}
          <div className="col-span-2 md:col-span-2 pt-2 md:pt-0 border-t md:border-t-0 border-surface-dim/10">
            <h4 className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-surface-variant/70 mb-3 sm:mb-4">
              Information
            </h4>
            <ul className="flex md:flex-col gap-4 md:gap-2.5 font-sans text-xs sm:text-[13px] uppercase tracking-wider text-surface-variant/80">
              <li>
                <Link href="/privacy" className="hover:text-inverse-on-surface transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-inverse-on-surface transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer Row */}
        <div className="pt-4 sm:pt-6 lg:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-surface-variant/50">
          <div className="flex items-center gap-4">
            <span>EDITION 2026.1</span>
            <span className="text-surface-variant/30">•</span>
            <span>PARIS / MILANO</span>
          </div>
          <span>COPYRIGHT © 2026 ANGHA. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
}
