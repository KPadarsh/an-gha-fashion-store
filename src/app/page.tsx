import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedSelection } from "@/components/home/FeaturedSelection";
import { EditorialFeature } from "@/components/home/EditorialFeature";
import { CurrentPieces } from "@/components/home/CurrentPieces";
import { CategoryQuickAccess } from "@/components/home/CategoryQuickAccess";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <main className="w-full bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        {/* 01. HERO (Image / Information Balance — 65% visual, 35% information) */}
        <HeroSection />

        {/* 02. CATEGORY DISCOVERY (02 / THE WARDROBE) */}
        <CategoryGrid />

        {/* 03. FEATURED PRODUCT GRID (03 / FEATURED SELECTION) */}
        <FeaturedSelection />

        {/* 04. EDITORIAL FEATURE (04 / FORM / TEXTURE / MOVEMENT) */}
        <EditorialFeature />

        {/* 05. SECOND PRODUCT DISCOVERY (05 / CURRENT PIECES) */}
        <CurrentPieces />

        {/* 06. CATEGORY QUICK ACCESS (06 / FIND YOUR FORM) */}
        <CategoryQuickAccess />

        {/* 07. COMPACT NEWSLETTER (07 / THE CATALOGUE EDIT) */}
        <NewsletterSection />
      </div>
    </main>
  );
}
