"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  const activePlate = gallery[activeIndex] || gallery[0];

  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-4 xl:gap-5">
      {/* 5 Vertical Interactive Thumbnails */}
      <div
        className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible shrink-0 pb-2 md:pb-0 no-scrollbar"
        id="hero-thumbnails"
        role="tablist"
        aria-label="Product Images"
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
  );
}
