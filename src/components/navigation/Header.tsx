"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { AnnouncementBar } from "./AnnouncementBar";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const bagCount = 0;

  return (
    <header className="sticky top-0 z-40 w-full bg-surface/95 backdrop-blur-md border-b border-on-surface/10 transition-colors">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Desktop & Mobile Header Container */}
      <div className="angha-container">
        {/* Desktop Top Bar (md and up) */}
        <div className="hidden md:grid grid-cols-3 items-center py-5 border-b border-on-surface/5">
          {/* Left: Search Trigger */}
          <div className="flex items-center justify-start">
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="group flex items-center gap-2.5 text-on-surface/80 hover:text-on-surface transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-on-surface"
              aria-label="Search collection"
              aria-expanded={isSearchOpen}
            >
              <Search className="w-4 h-4 text-on-surface group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <span className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase">
                Search
              </span>
            </button>
          </div>

          {/* Center: Brand Wordmark */}
          <div className="flex items-center justify-center text-center">
            <Link
              href="/"
              className="font-serif text-2xl lg:text-3xl font-normal tracking-[0.22em] uppercase text-on-surface hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-on-surface px-2"
              aria-label="AN GHA Home"
            >
              ANGHA
            </Link>
          </div>

          {/* Right: Wishlist & Bag */}
          <div className="flex items-center justify-end gap-6 lg:gap-8">
            <Link
              href="/wishlist"
              className="group flex items-center gap-1.5 text-on-surface/80 hover:text-on-surface transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-on-surface"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 text-on-surface group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <span className="hidden lg:inline font-sans text-[11px] font-medium tracking-[0.2em] uppercase">
                Wishlist
              </span>
            </Link>

            <Link
              href="/cart"
              className="group flex items-center gap-2 text-on-surface/80 hover:text-on-surface transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-on-surface"
              aria-label={`Shopping Bag, ${bagCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-on-surface group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <span className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase">
                Bag ({bagCount})
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Primary Navigation Row (md and up) */}
        <div className="hidden md:block py-3">
          <DesktopNav />
        </div>

        {/* Mobile Header Bar (below md) */}
        <div className="flex md:hidden items-center justify-between h-14">
          {/* Mobile Left: Brand Wordmark */}
          <Link
            href="/"
            className="font-serif text-xl tracking-[0.2em] uppercase text-on-surface font-normal"
            aria-label="AN GHA Home"
          >
            ANGHA
          </Link>

          {/* Mobile Right: Actions */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="p-1.5 text-on-surface hover:text-primary transition-colors focus-visible:outline-none"
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <Link
              href="/cart"
              className="p-1.5 text-on-surface hover:text-primary transition-colors relative flex items-center"
              aria-label={`Shopping Bag, ${bagCount} items`}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              <span className="ml-1 font-sans text-xs font-medium">({bagCount})</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 -mr-1.5 text-on-surface hover:text-primary transition-colors focus-visible:outline-none"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Subtle Search Overlay */}
      {isSearchOpen && (
        <div className="border-t border-on-surface/10 bg-surface py-4 px-4 transition-all">
          <div className="angha-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSearchOpen(false);
              }}
              className="relative flex items-center max-w-xl mx-auto"
            >
              <input
                type="search"
                placeholder="Search collection (e.g. Silk Dress, Wool Coat, Cashmere)..."
                autoFocus
                className="w-full bg-transparent border-b border-on-surface/30 py-2 pl-2 pr-10 text-sm font-sans placeholder:text-outline placeholder:font-normal focus:border-on-surface focus:outline-none tracking-wide text-on-surface"
              />
              <button
                type="submit"
                className="absolute right-2 text-on-surface hover:text-primary transition-colors"
                aria-label="Submit search"
              >
                <Search className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 4. Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        bagCount={bagCount}
      />
    </header>
  );
}
