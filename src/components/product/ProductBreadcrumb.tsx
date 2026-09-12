import React from "react";
import Link from "next/link";

interface ProductBreadcrumbProps {
  category?: string;
  specimenNumber?: string;
  atelier?: string;
}

export function ProductBreadcrumb({
  category = "DRESSES",
  specimenNumber = "SPECIMEN N° 01",
  atelier = "ATELIER BIELA",
}: ProductBreadcrumbProps) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 pt-3 md:pt-6 pb-2 border-b border-[#2B2420]/10 md:border-b-0">
      <div className="flex items-center justify-between">
        <div className="text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-[#7A7168] font-semibold flex items-center gap-1.5 md:gap-2">
          <Link href="/" className="hover:text-[#2B2420] transition-colors">
            ARCHIVE
          </Link>
          <span className="text-[#7A7168]/50">/</span>
          <Link href="/shop" className="hover:text-[#2B2420] transition-colors">
            {category}
          </Link>
          <span className="text-[#7A7168]/50">/</span>
          <span className="text-[#C17A63] font-medium tracking-[0.2em]">ELARA</span>
        </div>

        {/* Mobile Specimen Pill */}
        <div className="md:hidden">
          <span className="font-mono text-[10px] text-[#7A7168] tracking-[0.2em] bg-[#EDE5DB]/60 px-1.5 py-0.5 border border-[#2B2420]/10">
            SPECIMEN 01 / 12
          </span>
        </div>

        {/* Desktop Specimen & Atelier Info */}
        <div className="hidden md:flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#7A7168]">
          <span>{specimenNumber}</span>
          <span>·</span>
          <span>{atelier}</span>
        </div>
      </div>
    </div>
  );
}
