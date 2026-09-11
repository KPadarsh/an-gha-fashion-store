import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CuratedProductsSection } from "@/components/home/CuratedProductsSection";
import { EditorialFeature } from "@/components/home/EditorialFeature";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <main className="w-full bg-white min-h-screen">
      <div className="flex flex-col w-full">
        {/* 01. HERO PROMO BANNER (Soft rounded banner matching Reference UI) */}
        <HeroSection />

        {/* 02. CURATED PRODUCTS WITH FILTER PILLS & 4-COL GRID (Matching Reference UI) */}
        <CuratedProductsSection />

        {/* 03. CATEGORY DISCOVERY & ARCHIVE EDIT */}
        <CategoryGrid />

        {/* 04. EDITORIAL STORY SECTION */}
        <EditorialFeature />

        {/* 05. NEWSLETTER SIGNUP */}
        <NewsletterSection />
      </div>
    </main>
  );
}
