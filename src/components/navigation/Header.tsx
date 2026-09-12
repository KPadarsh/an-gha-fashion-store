"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { useCart } from "@/context/CartContext";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalCount } = useCart();
  const bagCount = totalCount;

  if (pathname?.startsWith("/checkout")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-surface/95 backdrop-blur-md border-b border-on-surface/10 transition-colors">
      {/* Main Single-Row Navigation Bar */}
      <div className="angha-container">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 lg:gap-8">
          {/* Left: Brand Wordmark "An Gha" */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="font-serif text-2xl lg:text-3xl font-normal tracking-[0.18em] text-on-surface hover:opacity-90 transition-opacity focus-visible:outline-none"
              aria-label="An Gha Home"
            >
              An Gha
            </Link>
          </div>

          {/* Center: Primary Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <DesktopNav />
          </div>

          {/* Right: Actions (Search, Wishlist, Bag [0], User Avatar) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6 shrink-0">
            {/* Search */}
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="group flex items-center gap-1.5 text-on-surface/90 hover:text-primary transition-colors py-1 focus-visible:outline-none"
              aria-label="Search collection"
              aria-expanded={isSearchOpen}
            >
              <Search
                className="w-3.5 h-3.5 text-on-surface group-hover:text-primary transition-colors"
                strokeWidth={2}
              />
              <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase">
                SEARCH
              </span>
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="group flex items-center gap-1.5 text-on-surface/90 hover:text-primary transition-colors py-1 focus-visible:outline-none"
              aria-label="Wishlist"
            >
              <Heart
                className="w-3.5 h-3.5 text-on-surface group-hover:text-primary transition-colors"
                strokeWidth={2}
              />
              <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase">
                WISHLIST
              </span>
            </Link>

            {/* Bag [0] */}
            <Link
              href="/cart"
              className="group flex items-center gap-1.5 text-on-surface/90 hover:text-primary transition-colors py-1 focus-visible:outline-none"
              aria-label={`Shopping Bag, ${bagCount} items`}
            >
              <ShoppingBag
                className="w-3.5 h-3.5 text-on-surface group-hover:text-primary transition-colors"
                strokeWidth={2}
              />
              <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase">
                [{bagCount}]
              </span>
            </Link>

            {/* User Avatar Circle */}
            <Link
              href="/account"
              className="w-7 h-7 rounded-full bg-[#8D5B4C] hover:bg-primary transition-colors flex items-center justify-center text-white shadow-xs focus-visible:outline-none shrink-0"
              aria-label="User Account"
            >
              <User className="w-3.5 h-3.5 text-white" strokeWidth={2.2} />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3.5">
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="p-1.5 text-on-surface hover:text-primary transition-colors focus-visible:outline-none"
              aria-label="Search"
            >
              <Search className="w-4 h-4" strokeWidth={1.75} />
            </button>

            <Link
              href="/cart"
              className="p-1.5 text-on-surface hover:text-primary transition-colors flex items-center gap-1"
              aria-label={`Shopping Bag, ${bagCount} items`}
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.75} />
              <span className="font-sans text-xs font-semibold">[{bagCount}]</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 -mr-1 text-on-surface hover:text-primary transition-colors focus-visible:outline-none"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Search Overlay */}
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
                <Search className="w-4 h-4" strokeWidth={1.75} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        bagCount={bagCount}
      />
    </header>
  );
}
