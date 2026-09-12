"use client";

import React from "react";
import Link from "next/link";

export function OrderConfirmationFooter() {
  return (
    <footer className="w-full bg-[#362F2B] text-[#FCEEE7] border-t border-[#FAF6F1]/10">
      <div className="w-full px-4 md:px-12 py-16 md:py-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Monograph */}
          <div className="md:col-span-4 flex flex-col justify-between mb-8 md:mb-0">
            <div>
              <span className="font-serif text-2xl sm:text-3xl tracking-tight block mb-2 font-normal text-[#FCEEE7]">
                ANGHA
              </span>
              <p className="font-sans text-[11px] uppercase text-[#D8C2BB] tracking-[0.18em]">
                Contemporary Sartorial Monograph
              </p>
            </div>
            <div className="mt-8 md:mt-12">
              <p className="font-mono text-xs text-[#D8C2BB]/80">
                © 2026 ANGHA HAUTE ARCHIVE. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          {/* Client Services */}
          <div className="md:col-span-2">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#D8C2BB] mb-4 font-semibold">
              Client Services
            </p>
            <nav className="flex flex-col gap-2.5 font-sans text-xs text-[#D8C2BB]/80">
              <Link
                href="/contact"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Concierge Desk
              </Link>
              <Link
                href="/order-confirmation"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Shipment Status
              </Link>
              <Link
                href="/client-services"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Archival Returns
              </Link>
              <Link
                href="/client-services"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Textile Preservation
              </Link>
            </nav>
          </div>

          {/* Collections */}
          <div className="md:col-span-3">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#D8C2BB] mb-4 font-semibold">
              Collections
            </p>
            <nav className="flex flex-col gap-2.5 font-sans text-xs text-[#D8C2BB]/80">
              <Link
                href="/shop/dresses"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Permanent Wardrobe
              </Link>
              <Link
                href="/shop"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Limited Monographs
              </Link>
              <Link
                href="/shop/outerwear"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Bespoke Tailoring
              </Link>
              <Link
                href="/shop/accessories"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Objects &amp; Adornment
              </Link>
            </nav>
          </div>

          {/* Information */}
          <div className="md:col-span-3">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#D8C2BB] mb-4 font-semibold">
              Information
            </p>
            <nav className="flex flex-col gap-2.5 font-sans text-xs text-[#D8C2BB]/80">
              <Link
                href="/sustainability"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Material Provenance
              </Link>
              <Link
                href="/about"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Publication Index
              </Link>
              <Link
                href="/legal/privacy"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Privacy &amp; Terms
              </Link>
              <Link
                href="/stores"
                className="hover:text-[#FCEEE7] transition-colors py-0.5"
              >
                Physical Salons
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
