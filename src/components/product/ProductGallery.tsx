"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles } from "lucide-react";
import { GalleryPlate } from "@/data/productDetailData";

interface ProductGalleryProps {
  gallery: GalleryPlate[];
  atelierSeal?: string;
}

export function ProductGallery({
  gallery,
  atelierSeal = "ATELIER BIELA — SER. 08",
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const activePlate = gallery[activeIndex] || gallery[0];

  const handleToggleZoom = () => {
    setIsZoomed((prev) => !prev);
    if (!isZoomed) {
      setTimeout(() => setIsZoomed(false), 3000);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* ========================================================================= */}
      {/* MOBILE GALLERY VIEW (Matches Stitch Screen 7db66f0da478451b9e0681896526842b) */}
      {/* ========================================================================= */}
      <div className="flex md:hidden flex-col w-full">
        {/* Main 3:4 Portrait Photo Canvas */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#EDE5DB]">
          <Image
            key={activePlate.imageUrl}
            src={activePlate.imageUrl}
            alt={activePlate.alt}
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover object-center transition-transform duration-500 ease-out ${
              isZoomed ? "scale-125 cursor-zoom-out" : "scale-100 cursor-zoom-in"
            }`}
            onClick={handleToggleZoom}
          />

          {/* Photo Indicator Pill '01 / 05' with pulsing dot */}
          <div className="absolute bottom-3 left-3 bg-[#FAF6F1]/90 backdrop-blur-md px-2.5 py-1 shadow-xs flex items-center gap-1.5 border border-[#2B2420]/10 pointer-events-none z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C17A63] animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#2B2420] font-medium">
              {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1} / 0{gallery.length}
            </span>
          </div>

          {/* Zoom Icon Button */}
          <button
            type="button"
            onClick={handleToggleZoom}
            aria-label="Inspect Silhouette Detail"
            className="absolute bottom-3 right-3 w-10 h-10 bg-[#FAF6F1]/90 backdrop-blur-md flex items-center justify-center text-[#2B2420] hover:text-[#C17A63] transition-colors shadow-xs active:scale-95 border border-[#2B2420]/10 z-10 cursor-pointer"
          >
            <Maximize2 className="w-4 h-4 text-[#2B2420]" strokeWidth={1.75} />
          </button>
        </div>

        {/* Horizontal Scroll Thumbnail Strip */}
        <div
          className="w-full px-4 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-touch touch-pan-x overscroll-x-contain border-b border-[#2B2420]/10 bg-[#FAF6F1]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          role="tablist"
          aria-label="Mobile Product Thumbnails"
        >
          {gallery.map((plate, idx) => {
            const isActive = activeIndex === idx;
            const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
            return (
              <button
                key={plate.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Thumbnail ${idx + 1}: ${plate.name}`}
                className={`thumb-btn relative shrink-0 w-14 aspect-[3/4] overflow-hidden bg-[#EDE5DB] transition-all cursor-pointer ${
                  isActive
                    ? "ring-2 ring-[#C17A63] opacity-100"
                    : "ring-0 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={plate.imageUrl}
                  alt={plate.alt}
                  fill
                  quality={85}
                  sizes="60px"
                  className="object-cover object-center"
                />
                <span className="absolute bottom-0 right-0 font-mono text-[9px] bg-[#2B2420]/85 text-[#FAF6F1] px-1">
                  {numStr}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP GALLERY VIEW (Strictly Preserves Desktop 7:5 Specification)       */}
      {/* ========================================================================= */}
      <div className="hidden md:flex w-full flex-row gap-4 xl:gap-5">
        {/* 5 Vertical Interactive Thumbnails */}
        <div
          className="flex flex-col gap-3 shrink-0 pb-0"
          id="hero-thumbnails"
          role="tablist"
          aria-label="Desktop Product Images"
        >
          {gallery.map((plate, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={plate.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Thumbnail ${idx + 1}: ${plate.name}`}
                className={`w-16 xl:w-20 aspect-[3/4] bg-[#EDE5DB] overflow-hidden transition-all relative cursor-pointer ${
                  isActive
                    ? "ring-1 ring-[#2B2420] opacity-100"
                    : "ring-1 ring-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={plate.imageUrl}
                  alt={plate.alt}
                  fill
                  quality={85}
                  sizes="80px"
                  className="object-cover object-center"
                />
              </button>
            );
          })}
        </div>

        {/* Main 3:4 Display Canvas */}
        <div className="flex-1 relative aspect-[3/4] bg-[#EDE5DB] overflow-hidden group shadow-xs">
          <Image
            key={activePlate.imageUrl}
            src={activePlate.imageUrl}
            alt={activePlate.alt}
            fill
            priority
            quality={95}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center transition-opacity duration-300"
          />

          {/* Top-Left Plate Marker */}
          <div className="absolute top-4 left-4 bg-[#FAF6F1]/90 backdrop-blur-xs px-3 py-1.5 border border-[#2B2420]/5 pointer-events-none z-10">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2B2420]">
              {activePlate.label}
            </span>
          </div>

          {/* Bottom-Right Archival Seal Tag */}
          <div className="absolute bottom-4 right-4 bg-[#2B2420]/85 text-[#FAF6F1] px-3.5 py-1.5 pointer-events-none z-10">
            <span className="text-[9px] font-semibold tracking-[0.25em] uppercase">
              {atelierSeal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
