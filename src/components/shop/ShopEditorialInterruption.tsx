import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ShopEditorialInterruption() {
  return (
    <section className="w-full px-margin mb-6 sm:mb-10 lg:mb-16">
      {/* Mobile Editorial View (< md) */}
      <div className="md:hidden bg-[#ECE1D5] text-[#201B14] p-6 flex flex-col gap-3 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[10px] font-medium tracking-[0.18em] text-[#4C463D] uppercase">
            02 / FORM & TEXTURE
          </span>
          <span className="w-6 h-[1px] bg-[#85736E]" />
          <span className="font-sans text-[10px] font-medium tracking-[0.18em] text-primary uppercase">
            ATELIER STUDY
          </span>
        </div>

        <h2 className="font-serif text-xl sm:text-2xl text-[#201B14] leading-snug font-normal max-w-xs">
          A quiet study in shape, drape, and raw material.
        </h2>

        <p className="font-sans text-xs text-[#4C463D] leading-relaxed">
          Each silhouette in Chapter 08 is rendered in untreated linens, spun alpaca, and vegetable-tanned leathers made to patina with presence.
        </p>

        <Link
          href="/shop?collection=editorial"
          className="font-sans text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-1 mt-1 hover:underline"
        >
          <span>DISCOVER THE EDIT</span>
          <span>→</span>
        </Link>
      </div>

      {/* Desktop Editorial View (>= md) */}
      <div className="hidden md:flex w-full bg-surface-container-high p-8 lg:p-16 flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Narrative Block */}
        <div className="max-w-xl flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-sans text-[11px] font-medium tracking-[0.18em] text-primary uppercase">
              02 / FORM / TEXTURE
            </span>
            <div className="w-8 h-[1px] bg-primary/40" />
          </div>

          <h2 className="font-serif text-3xl lg:text-[3.25rem] text-on-surface leading-[1.1] mb-4 font-normal">
            A quiet study in shape and material.
          </h2>

          <p className="font-sans text-sm sm:text-base text-on-surface-variant mb-6 max-w-md leading-relaxed">
            Deliberately engineered silhouettes sculpted from pure spun wool, unbleached linen, and vegetable-tanned leathers that soften gracefully with wear.
          </p>

          <Link
            href="/shop?collection=editorial"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest bg-inverse-surface text-inverse-on-surface px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-primary transition-colors cursor-pointer"
          >
            <span>DISCOVER THE EDIT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Photographic Plate */}
        <div className="w-full lg:w-96 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-surface-variant overflow-hidden relative">
          <Image
            src="https://lh3.googleusercontent.com/aida/AEtjO1Uw4R_mh7dDwtihMR40LJD5Y4FcRCT87YXljf3wJDnvOvf9RGlAa0qgxoP9lHgLrn2ttBMfU-Wq9kwcHkAzyvOAzN6HIwfnBufoPETptYNbRFndaZ_VgsQlj2E-tvyZXNlT1uYgLb1977YPpJ71XL3gjYY-QlqwMOIQCB_66NckgU5CaAtHjlwF2zD1xSkPDQec_3DWhW2MvoFFYG5rQMI7GDAnlqIEBxoxLVgR-l2jtTmF_FYTamGDNP0"
            alt="Editorial plate of tailored wool garment in sculptural surroundings"
            fill
            quality={95}
            sizes="(max-width: 1024px) 100vw, 384px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
