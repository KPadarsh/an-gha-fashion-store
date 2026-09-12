"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Truck, RotateCcw, Headphones } from "lucide-react";

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

interface ArchivalSpecimen {
  id: string;
  itemCode: string;
  name: string;
  imageUrl: string;
  href: string;
}

const ARCHIVAL_SPECIMENS: ArchivalSpecimen[] = [
  {
    id: "the-terracotta-draped-tunic",
    itemCode: "SERIES 08 • ITEM 08/04",
    name: "The Terracotta Draped Tunic",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBURSmVM3SP0JBRseovoaam05SetJlt1S74tmp2gPK2ivlqvqMNJTGH_ehBPIaRyv-OSa04uWyZff_E2Xm1PWno9oUkNtu7mIf3etprpwX5j0TL0FUFOsAicoAlHrQxqJmb6yNhoszmX9zcmB788-B3IGIF7tF94nPql1z11_EoDquuTchebl585wLMqVCYWbMHF_1kbRFGkVUQqehbi1e5tG5UyTKPGwj38wvL7mymX9oeEiVuHTzySQ",
    href: "/shop/elara-draped-dress",
  },
  {
    id: "the-raw-edge-trench",
    itemCode: "SERIES 08 • ITEM 08/11",
    name: "The Raw Edge Trench",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSu-3_q_CgifoIdPtjDg7nI8eSiUh8Ak6Tm8R7EIiAslO9UY78OyTYynT9hWN8EZYp0RM5EG2v2QnxmS2f9TIIiyWOtpn0Gn0aRKszvcrDRrZ1YCR3e6lhnI4jpOpsiKaBFd60bLhHJ0ju82R614j0nwdJ4ElxDA9a1Wg06TgRLazWMR8hF7AVhr_AUA6bQI1T6kTt2gGBedewp6UtwsJQLsXxS9CT8-T5CZalMDEuxiA1kjw31jO1NQ",
    href: "/shop/sienna-tailored-trench",
  },
];

export function EmptyBagView() {
  return (
    <div className="w-full flex flex-col bg-[#FAF6F1]">
      {/* SECTION 1: TOP ARCHIVAL TRACKER STRIP */}
      <section className="w-full px-4 md:px-12 py-2.5 bg-[#FFF1EA]/60 border-b border-[#2B2420]/10 flex items-center justify-between text-[#7A7168]">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#894B37]">
            PORTFOLIO INDEX
          </span>
          <span className="font-mono text-xs tracking-widest text-[#7A7168]">
            FOLIO REF. 24-AC00
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A7168]">
            EDITION 08 / CART STATUS: DORMANT
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
                01 / YOUR SELECTION
              </span>
              <span className="w-8 h-px bg-[#2B2420]/20" />
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#7A7168] font-semibold">
                BAG EMPTY
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#2B2420] uppercase tracking-tight mb-5 leading-[1.05] font-normal">
              YOUR BAG<br />
              <span className="italic font-normal font-serif text-[#894B37]">
                IS QUIET.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#7A7168] max-w-lg mb-8 leading-relaxed">
              There are currently no pieces in your bag. Our seasonal catalogue is ready to be explored—shaped by tactile materiality, architectural poise, and restrained cadence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/shop"
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
                  SPECIMEN NOTE
                </span>
                <span className="font-mono text-[11px] text-[#7A7168] uppercase">
                  ATELIER DISPATCH
                </span>
              </div>
              <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                Items added to your bag remain reserved across global ateliers for 45 minutes to ensure raw linen and bespoke silk lots retain provenance.
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

      {/* SECTION 3: CURATED CATEGORY PATHWAYS ("A CATALOGUE OF FORMS") */}
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
            <p className="font-sans text-xs text-[#7A7168] max-w-sm leading-relaxed">
              Engineered silhouetted lines constructed from organic botanical dyes and unhurried natural fibers.
            </p>
          </div>

          {/* 4-Column Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORY_PATHWAYS.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group flex flex-col bg-[#FFF8F5] p-5 border border-[#2B2420]/10 shadow-xs hover:bg-[#F9EBE5] transition-colors duration-300"
              >
                <div className="w-full aspect-[3/4] bg-[#EDE0D9] overflow-hidden mb-4 relative">
                  <Image
                    src={cat.imageUrl}
                    alt={cat.title}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 font-mono text-[11px] bg-[#FFF8F5]/90 px-2 py-0.5 text-[#2B2420] border border-[#2B2420]/10 font-semibold z-10">
                    {cat.numeral}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-serif text-xl text-[#2B2420] group-hover:text-[#894B37] transition-colors font-normal">
                    {cat.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[#7A7168]">
                    {cat.specimens}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#7A7168] mb-4 leading-relaxed line-clamp-2">
                  {cat.description}
                </p>

                <span className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest font-semibold text-[#894B37] group-hover:text-[#2B2420] transition-colors mt-auto">
                  EXPLORE →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CURATED ARCHIVAL FEATURE SPLIT SPREAD */}
      <section className="w-full px-4 md:px-12 py-16 lg:py-24 bg-[#FAF6F1]">
        <div className="max-w-[1440px] mx-auto bg-[#F3E5DF] p-6 sm:p-10 lg:p-14 border border-[#2B2420]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#894B37]" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#894B37]">
                ARCHIVE REPOSITORY
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2B2420] font-normal leading-tight">
              CURATED ARCHIVAL SELECTIONS FOR RETURNING CLIENTS
            </h2>

            <p className="font-sans text-sm text-[#7A7168] leading-relaxed">
              If you previously assembled a garment consultation or private fitting folio, you may log in to restore saved pieces directly to your session bag.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center bg-[#2B2420] text-[#FAF6F1] px-6 py-3.5 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#894B37] transition-colors shadow-xs"
              >
                SIGN IN TO RESTORE
              </Link>
              <Link
                href="/shop"
                className="font-sans text-xs uppercase tracking-widest font-semibold text-[#2B2420] hover:text-[#894B37] transition-colors"
              >
                BOOK A FITTING →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ARCHIVAL_SPECIMENS.map((item, idx) => (
              <Link
                key={item.id}
                href={item.href}
                className={`group flex flex-col space-y-2 ${
                  idx === 1 ? "sm:mt-8" : ""
                }`}
              >
                <div className="aspect-[3/4] bg-[#EDE0D9] overflow-hidden relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="font-mono text-[11px] text-[#7A7168] uppercase block tracking-wider pt-1">
                  {item.itemCode}
                </span>
                <p className="font-serif text-base sm:text-lg text-[#2B2420] group-hover:text-[#894B37] transition-colors font-normal">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: ASSURANCE & SERVICE PLEDGES BAR */}
      <section className="w-full bg-[#F9EBE5] py-12 lg:py-16 px-4 md:px-12 border-t border-[#2B2420]/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Assurance 01 */}
          <div className="flex items-start gap-4">
            <Truck className="w-7 h-7 text-[#894B37] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2420] mb-1.5">
                COMPLIMENTARY WORLDWIDE DELIVERY
              </h4>
              <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                All atelier pieces are packaged in untreated archival cotton and carbon-neutral express courier.
              </p>
            </div>
          </div>

          {/* Assurance 02 */}
          <div className="flex items-start gap-4">
            <RotateCcw className="w-7 h-7 text-[#894B37] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2420] mb-1.5">
                30-DAY QUIET RETURN POLICY
              </h4>
              <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                Home evaluations are accompanied by prepaid doorstep collection at your preferred cadence.
              </p>
            </div>
          </div>

          {/* Assurance 03 */}
          <div className="flex items-start gap-4">
            <Headphones className="w-7 h-7 text-[#894B37] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2420] mb-1.5">
                ATELIER CONCIERGE ASSISTANCE
              </h4>
              <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                Direct dialogue with our master tailors for sizing advisory, fiber inquiries, or bespoke commissions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
