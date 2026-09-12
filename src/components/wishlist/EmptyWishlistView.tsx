"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { SHOP_PRODUCTS } from "@/data/shopProducts";
import { useWishlist } from "@/context/WishlistContext";

interface CategoryPathway {
  id: string;
  numeral: string;
  title: string;
  specimens: string;
  description: string;
  imageUrl: string;
  href: string;
}

const CATEGORY_PATHWAYS: CategoryPathway[] = [
  {
    id: "dresses",
    numeral: "01",
    title: "DRESSES",
    specimens: "24 SPECIMENS",
    description: "Fluid draping, halter backs & weighted silk tailoring.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaasZdZNjVPN4ghDeokmkE-8-c3GZfq_HGFX72KwDVI7LHMGcyQ81McxuJjwvJLQChVlIIVtmEEUjWI8BlUPKY7cYqziENv0toemL9ZofZm_t_QZZo_DsabuUY8ooofkRaP705xVBEolamFEk8FK8a9xRYrKtVxIp1Xm3X-LnPrsGyDSQ-2ZN9gcKnA1L65jJRmbRGwA1yRlguYvy2Wn6gTRPwesFYpwPSOujyS5H9d_HMw1AXOZWjRA",
    href: "/shop?category=Dresses",
  },
  {
    id: "knitwear",
    numeral: "02",
    title: "KNITWEAR",
    specimens: "16 SPECIMENS",
    description: "Textured Peruvian wools, brushed alpaca & raw ribbing.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbK2l039w6U7QMkKZL0_8zVodqd2rcGaYCxEowkzJLv_q6oFI0muXMv7SrW-iPqNmPlbzWxcNy-KlRY42huf2kT2pv3iuqffD-XTK_pX8-FTNGY82SjcMLJ1N4t0ZDEKDA3BkmNTpNTavKVto0tIZeUQMup5WYIb9PcX4wvob1Sftw5001LYg6xmYaMp4R38VmVmmnHGQsO1TPf5Wom31Fimo5UM5K9tIxRvm78-54fq2ZWRnQqudFSg",
    href: "/shop?category=Knitwear",
  },
  {
    id: "outerwear",
    numeral: "03",
    title: "OUTERWEAR",
    specimens: "12 SPECIMENS",
    description: "Architectural coats, belted trenches & boiled wool wraps.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbpw45J4JfwEc029lnmZ61CfGdKKQxwljgc0Mxt1dF1_ItCqEupDqJxMrh0OBt3BgBDuEXiVH3XPKes_Mao2NswlMxSDPvCRL7yALlThHMwL5CozHl4l2zKvwQkCYjdyDVjao8Yf1zJfF_WpnYZI1BOCch83skvkB5xiMORPD6rEmJBGY-VHjik__7El_7frkyO1L9c4sQ_NsQ8Zb3CxhPjM5w3vWBgihFRf7Pw0-_XWpY7gHMZJKWqA",
    href: "/shop?category=Outerwear",
  },
  {
    id: "accessories",
    numeral: "04",
    title: "ACCESSORIES",
    specimens: "18 SPECIMENS",
    description: "Handcrafted vegetable-tanned leather & cast jewelry.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7NqzaKzXztXn-B8RUbJ9jrAAVHevJP83F8G0xYulz_RQYu4Oz4c-9EcFaHNI4Po-ACLCBRvTdH1mmV1kEyW_vjyzr3reSTMB8aGDBIt1fUVz6tXJSEzmoG4GQQMVPAETsOhgMfBH893SzIqzZkteegeZIVzKqMLZX1weCtGVO3X_EUZsXw5YjNTI5MMYRmDPexRcl67SzgSV3qVjHGD-UyKZczXVafltgUjQFMbXpwvyXGRkzy_p9Qg",
    href: "/shop?category=Accessories",
  },
];

export function EmptyWishlistView() {
  const { addToWishlist } = useWishlist();
  const curatedShowcase = SHOP_PRODUCTS.slice(0, 4);

  return (
    <div className="w-full flex flex-col bg-[#FAF6F1]">
      {/* SECTION 1: TOP ARCHIVAL TRACKER STRIP */}
      <section className="w-full px-4 md:px-12 py-2.5 bg-[#FFF1EA]/60 border-b border-[#2B2420]/10 flex items-center justify-between text-[#7A7168]">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#894B37]">
            PORTFOLIO INDEX
          </span>
          <span className="font-mono text-xs tracking-widest text-[#7A7168]">
            FOLIO REF. 26-WL00
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A7168]">
            EDITION 08 / WISHLIST STATUS: DORMANT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#894B37]/80 animate-pulse" />
        </div>
      </section>

      {/* SECTION 2: EDITORIAL EMPTY STATE HERO (ASYMMETRICAL 6/6 SPLIT) */}
      <section className="w-full px-4 md:px-12 py-12 lg:py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Spindle: Poetic Statement & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#894B37] uppercase tracking-widest font-medium">
                01 / YOUR ARCHIVE
              </span>
              <span className="w-8 h-px bg-[#2B2420]/20" />
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#7A7168] font-semibold">
                WISHLIST EMPTY
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#2B2420] uppercase tracking-tight mb-5 leading-[1.05] font-normal">
              YOUR ARCHIVE<br />
              <span className="italic font-normal font-serif text-[#894B37]">
                IS QUIET.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#7A7168] max-w-lg mb-8 leading-relaxed">
              You have not saved any silhouettes to your private index yet. Our seasonal catalogue awaits—defined by tactile textures, organic drape, and architectural poise.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/shop?collection=new-in"
                className="inline-flex items-center justify-center bg-[#2B2420] text-[#FAF6F1] px-8 py-4 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#894B37] transition-all duration-300 shadow-xs hover:shadow-sm"
              >
                EXPLORE NEW IN →
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center bg-[#F9EBE5] text-[#2B2420] px-6 py-4 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#EDE0D9] transition-all duration-300"
              >
                VIEW ARCHIVE 08
              </Link>
            </div>

            {/* Inline Monograph Note */}
            <div className="bg-[#FFF1EA] p-4 max-w-md border border-[#2B2420]/10">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-sans text-[11px] font-semibold text-[#894B37] uppercase tracking-[0.18em]">
                  WISHLIST PROTOCOL
                </span>
                <span className="font-mono text-[11px] text-[#7A7168] uppercase">
                  ATELIER ARCHIVE
                </span>
              </div>
              <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                Click the heart symbol on any catalogue piece to reserve it in your personal index for quick size selection and batch checkout.
              </p>
            </div>
          </div>

          {/* Right Spindle: Atmospheric Architectural Visual Collage */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/5] bg-[#F9EBE5] overflow-hidden shadow-xs group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAItJcBvbN0ZvvV5KV22dbiDqCnTvvMyK7oO512hXD8LqmcdvvSkePN97Yr2SDGW7WD0JTZvZIWRrO36DIoNobL5iGUuPKWuOM_9yQzupbEreiktCGuQIjVzappggDDnCovFADCp2apDtp_mJDOfgnFPs6nF4facQJ8naWE2XCBnGIwNMk6-DA2V33EKkplB-5j2lHs7LHm3tYYryLbaSDZKjuzyN0zUzJgk551zYXWHJ9MX8eDt-W3RQ"
                alt="The Terracotta Backless Halter Dress - Series 08 Mallorca Archive"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] group-hover:scale-105 group-hover:filter-none transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211A16]/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 text-[#FAF6F1] flex flex-col justify-end z-10">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFB59D] mb-1.5 block">
                  SERIES 08 — A STUDY IN MOVEMENT
                </span>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                      The Terracotta Backless Halter Dress
                    </h2>
                    <p className="font-sans text-xs text-[#FAF6F1]/80 mt-1">
                      Pure European Washed Flax • Limited Run of 60
                    </p>
                  </div>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest font-semibold text-white hover:text-[#FFB59D] transition-colors py-1 shrink-0"
                  >
                    <span>VIEW LOOKBOOK</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Overlapping Monograph Stamp Card */}
            <div className="hidden sm:block absolute -top-4 -left-4 bg-[#FFF8F5] p-4 shadow-md max-w-[200px] border border-[#2B2420]/10 z-20">
              <span className="font-mono text-xs block text-[#7A7168] tracking-widest">
                N° 08-944
              </span>
              <span className="font-serif text-base text-[#2B2420] block mt-1 leading-snug">
                MALLORCA ARCHIVE
              </span>
              <span className="font-sans text-[10px] font-semibold text-[#894B37] uppercase block mt-1 tracking-wider">
                EDITION RUN • S/S 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CURATED CATEGORY PATHWAYS */}
      <section className="w-full bg-[#FFF1EA] py-16 lg:py-24 px-4 md:px-12 border-t border-b border-[#2B2420]/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
            <div>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#894B37] block mb-1">
                DISCOVER BY CATEGORY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2420] uppercase font-normal tracking-tight">
                A CATALOGUE OF FORMS
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold text-[#2B2420] hover:text-[#894B37] transition-colors"
            >
              <span>VIEW FULL MONOGRAPH INDEX</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORY_PATHWAYS.map((pathway) => (
              <Link
                key={pathway.id}
                href={pathway.href}
                className="group flex flex-col bg-[#FAF6F1] border border-[#2B2420]/10 shadow-xs hover:border-[#2B2420]/30 transition-all duration-300"
              >
                <div className="relative w-full aspect-[3/4] bg-[#F9EBE5] overflow-hidden">
                  <Image
                    src={pathway.imageUrl}
                    alt={pathway.title}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF6F1]/90 backdrop-blur-xs px-2 py-0.5 border border-[#2B2420]/10">
                    <span className="font-mono text-xs text-[#2B2420] font-medium tracking-widest">
                      {pathway.numeral}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-mono text-[10px] text-[#7A7168] tracking-widest uppercase block mb-1">
                      {pathway.specimens}
                    </span>
                    <h3 className="font-serif text-xl text-[#2B2420] group-hover:text-[#894B37] transition-colors uppercase">
                      {pathway.title}
                    </h3>
                    <p className="font-sans text-xs text-[#7A7168] mt-2 leading-relaxed">
                      {pathway.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#2B2420]/10 flex items-center justify-between text-xs font-sans font-semibold tracking-wider text-[#2B2420] group-hover:text-[#894B37] uppercase">
                    <span>EXPLORE PATHWAY</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED ARCHIVAL SPECIMENS */}
      <section className="w-full py-16 lg:py-24 px-4 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#894B37] block mb-1">
              CONSIDERED SILHOUETTES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2420] uppercase font-normal tracking-tight">
              FEATURED ATELIER PIECES
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest font-semibold text-[#894B37] hover:text-[#2B2420] transition-colors"
          >
            <span>DISCOVER COMPLETE CATALOGUE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {curatedShowcase.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col bg-[#FFFFFF] border border-[#2B2420]/10 shadow-xs hover:border-[#2B2420]/30 transition-all duration-300"
            >
              <div className="relative w-full aspect-[3/4] bg-[#F3E5DF] overflow-hidden">
                <Link href={product.href || `/shop/${product.id}`} className="block w-full h-full relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Link>
                <div className="absolute top-2 left-2 bg-[#FFF8F5]/90 px-2 py-0.5 backdrop-blur-xs border border-[#2B2420]/5 pointer-events-none">
                  <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.15em] text-[#2B2420] uppercase">
                    {product.indexNumber}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => addToWishlist(product.id)}
                  aria-label={`Save ${product.name} to Wishlist`}
                  className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-[#FFF8F5]/90 hover:bg-[#FFF8F5] flex items-center justify-center text-[#2B2420] hover:text-[#894B37] transition-colors border border-[#2B2420]/5 cursor-pointer z-10"
                  title="Save to Wishlist"
                >
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2B2420] hover:text-[#894B37]" />
                </button>
              </div>

              <div className="p-3 sm:p-4 flex flex-col justify-between flex-1 gap-2">
                <div>
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.18em] text-[#7A7168] mb-1">
                    <span>{product.category}</span>
                    <span className="text-[#2B2420] font-medium text-xs sm:text-sm">
                      ${product.price} USD
                    </span>
                  </div>
                  <Link
                    href={product.href || `/shop/${product.id}`}
                    className="block text-[#2B2420] hover:text-[#894B37] transition-colors"
                  >
                    <h3 className="font-serif text-base sm:text-lg font-normal leading-snug line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                </div>

                <Link
                  href={product.href || `/shop/${product.id}`}
                  className="mt-2 py-2 text-center bg-[#2B2420] hover:bg-[#894B37] text-[#FAF6F1] font-sans text-[10px] sm:text-xs uppercase tracking-wider font-semibold transition-colors block"
                >
                  EXPLORE SPECIMEN →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
