"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-6 sm:py-8">
      <div className="angha-container">
        {/* Soft Warm Promo Card matching Reference UI */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#FAF1EB] overflow-hidden border border-[#EEDCD2]/60 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]">
            {/* Left Content Column */}
            <div className="md:col-span-7 p-6 sm:p-10 lg:p-14 z-10 space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#C17A63] bg-white/70 px-3 py-1 rounded-full border border-[#EEDCD2]">
                  Limited Time Seasonal Sale
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1B3B2B] leading-[1.15] max-w-lg">
                  Grab Upto 50% Off On Selected Headphone
                </h1>
              </div>

              <p className="text-gray-600 text-sm sm:text-base max-w-md leading-relaxed font-sans">
                Experience crystal-clear acoustic precision and luxurious handcrafted apparel. Pure fidelity meets timeless contemporary design.
              </p>

              <div className="pt-2">
                <Link
                  href="#curated-products"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1B3B2B] hover:bg-[#132A1F] text-white font-sans text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Buy Now</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Column with Crisp Model Image */}
            <div className="md:col-span-5 relative h-[280px] sm:h-[360px] md:h-full min-h-[320px] md:min-h-[460px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
                alt="Headphones & Luxury Lifestyle Audio Model"
                fill
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-center"
              />
              {/* Subtle gradient vignette blend into the soft background */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#FAF1EB] via-transparent to-transparent opacity-80 md:opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
