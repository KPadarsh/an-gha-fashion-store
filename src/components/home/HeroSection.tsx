"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: string;
  imageSrc: string;
  imageAlt: string;
  tagIndex: string;
  seasonLabel: string;
  title: string;
  titleBreak?: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "new-edit",
    imageSrc: "/images/hero-image.jpg",
    imageAlt: "Editorial campaign model in draped terracotta wrap dress",
    tagIndex: "01 / NEW EDIT",
    seasonLabel: "AUTUMN / WINTER 2026",
    title: "THE NEW",
    titleBreak: "EDIT.",
    description:
      "Quiet forms. Considered textures. A contemporary wardrobe curated for deliberate everyday movement.",
    ctaText: "EXPLORE NEW IN",
    ctaHref: "/shop?collection=new-in",
  },
  {
    id: "archival-forms",
    imageSrc: "/images/hero-image-2.jpg",
    imageAlt: "Architectural tailored silhouette in raw European flax",
    tagIndex: "02 / ARCHIVAL FORMS",
    seasonLabel: "SERIES 08 / S/S 2026",
    title: "ARCHITECTURAL",
    titleBreak: "SILHOUETTES.",
    description:
      "Weighted organic flax, unstructured drape lines, and botanical earth tones crafted for timeless poise.",
    ctaText: "DISCOVER THE ARCHIVE",
    ctaHref: "/shop",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  }, []);

  // Continuous automatic transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="w-full py-4 sm:py-6 lg:py-8 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Editorial Seasonal Campaign"
    >
      <div className="angha-container">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-5 lg:gap-6 xl:gap-8 items-stretch">
          {/* ========================================================= */}
          {/* CAMPAIGN VISUAL (7 cols on lg, 8 cols on xl)             */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-8 relative bg-[#F5ECE3] overflow-hidden group w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[640px] xl:min-h-[680px] border border-surface-dim/30">
            {HERO_SLIDES.map((item, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive
                      ? "opacity-100 z-10 pointer-events-auto"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    priority={index === 0}
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 67vw"
                    className="object-cover object-[center_top] transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              );
            })}

            {/* Navigation Arrows on Visual Canvas */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-surface/90 hover:bg-surface text-on-surface hover:text-primary transition-all flex items-center justify-center border border-on-surface/10 shadow-xs active:scale-95 cursor-pointer backdrop-blur-xs focus-visible:outline-none"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-surface/90 hover:bg-surface text-on-surface hover:text-primary transition-all flex items-center justify-center border border-on-surface/10 shadow-xs active:scale-95 cursor-pointer backdrop-blur-xs focus-visible:outline-none"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
              </button>
            </div>

            {/* Minimal Horizontal Indicator Bars (Bottom Left) */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
              {HERO_SLIDES.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="group py-2 cursor-pointer focus-visible:outline-none"
                >
                  <div
                    className={`h-[2px] transition-all duration-500 ${
                      idx === currentSlide
                        ? "w-8 bg-primary"
                        : "w-4 bg-on-surface/30 group-hover:bg-on-surface/60"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* EDITORIAL INFORMATION PANEL (5 cols on lg, 4 cols on xl)  */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between p-6 sm:p-8 lg:p-7 xl:p-10 bg-surface-container-lowest lg:bg-surface-container-low border border-surface-dim/30 h-full min-h-[380px] lg:min-h-full overflow-hidden">
            <div className="space-y-4 w-full">
              {/* Header Index & Season */}
              <div className="flex items-center justify-between text-on-surface">
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold text-primary tracking-[0.18em] uppercase">
                  {slide.tagIndex}
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold text-outline tracking-[0.18em] uppercase">
                  {slide.seasonLabel}
                </span>
              </div>

              <div className="h-px w-full bg-surface-dim" />

              {/* Title & Editorial Description */}
              <div key={slide.id} className="pt-2 space-y-3 sm:space-y-4 animate-fadeIn w-full">
                <h1 className="font-serif text-2xl sm:text-4xl lg:text-[2.2rem] xl:text-[2.85rem] font-normal uppercase tracking-tight text-on-surface leading-[1.08] break-words">
                  {slide.title}
                  {slide.titleBreak && (
                    <>
                      <br className="hidden sm:inline" /> {slide.titleBreak}
                    </>
                  )}
                </h1>
                <p className="font-sans text-xs sm:text-sm lg:text-[0.9375rem] text-on-surface-variant max-w-sm leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 sm:pt-8 lg:pt-10 flex flex-col gap-5 w-full">
              <Link
                href={slide.ctaHref}
                className="inline-flex items-center justify-between w-full px-5 sm:px-7 py-3.5 sm:py-4 bg-inverse-surface text-inverse-on-surface hover:bg-primary font-sans text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 group shadow-xs"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Minimal Dot Indicators */}
              <div className="flex items-center justify-between pt-3 border-t border-surface-dim/40">
                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`font-mono text-xs uppercase tracking-widest transition-colors py-1 px-1 cursor-pointer ${
                        idx === currentSlide
                          ? "text-primary font-bold"
                          : "text-outline hover:text-on-surface"
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>

                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-outline">
                  AUTUMN 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
