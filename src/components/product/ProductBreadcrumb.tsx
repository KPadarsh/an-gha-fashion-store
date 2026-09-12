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
    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-6 pb-2">
      <div className="flex items-center justify-between">
        <div className="text-[10px] tracking-[0.25em] uppercase text-[#7A7168] font-semibold flex items-center gap-2">
          <Link href="/" className="hover:text-[#2B2420] transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#2B2420] transition-colors">
            COLLECTION
          </Link>
          <span>/</span>
          <span className="text-[#2B2420]">{category}</span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#7A7168]">
          <span>{specimenNumber}</span>
          <span>·</span>
          <span>{atelier}</span>
        </div>
      </div>
    </div>
  );
}
