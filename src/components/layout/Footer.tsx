"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (
    pathname?.startsWith("/checkout") ||
    pathname?.startsWith("/order-confirmation") ||
    pathname?.startsWith("/sign-in") ||
    pathname?.startsWith("/sign-up")
  ) {
    return null;
  }

  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-10 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 border-t border-surface-dim/20">
      <div className="angha-container">
        {/* Main Grid: 2-Col Mobile / 12-Col Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-12 lg:pb-16 border-b border-surface-dim/15">
          {/* Brand Column (Mobile: col-span-2, Desktop: col-span-5) */}
          <div className="col-span-2 md:col-span-5 pr-0 lg:pr-12">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] text-inverse-on-surface block mb-2 font-normal">
              An Gha
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
                <Link href="/shop?category=Dresses" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Dresses
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Knitwear" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Knitwear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Outerwear" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Outerwear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Accessories" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop?collection=new-in" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Maison & Services Column (Mobile: col-span-1, Desktop: col-span-4) */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-surface-variant/70 mb-3 sm:mb-4">
              Maison & Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 font-sans text-xs sm:text-[13px] uppercase tracking-wider text-surface-variant/80">
              <li>
                <Link href="/about" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  The Philosophy
                </Link>
              </li>
              <li>
                <Link href="/stores" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Atelier Locations
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Material Provenance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Private Appointments
                </Link>
              </li>
              <li>
                <Link href="/client-services" className="hover:text-inverse-on-surface transition-colors block py-0.5">
                  Care & Preservation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer Legal / Attribution Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 text-surface-variant/50 text-[10px] sm:text-[11px] font-sans tracking-widest uppercase">
          <p>© {new Date().getFullYear()} AN GHA MAISON. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/legal/privacy" className="hover:text-inverse-on-surface transition-colors">
              PRIVACY
            </Link>
            <Link href="/legal/terms" className="hover:text-inverse-on-surface transition-colors">
              TERMS
            </Link>
            <Link href="/legal/shipping" className="hover:text-inverse-on-surface transition-colors">
              DELIVERY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
