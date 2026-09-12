"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, User, X, ArrowRight, Sparkles } from "lucide-react";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { SHOP_PRODUCTS } from "@/data/shopProducts";

const POPULAR_SEARCHES = [
  { label: "Draped Dresses", href: "/shop?category=Dresses" },
  { label: "Merino Knitwear", href: "/shop?category=Knitwear" },
  { label: "Tailored Coats", href: "/shop?category=Outerwear" },
  { label: "Leather Bags", href: "/shop?category=Accessories" },
  { label: "New In Edition", href: "/shop?collection=new-in" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalCount } = useCart();
  const { totalWishlistCount } = useWishlist();
  const bagCount = totalCount;

  // Real-time matching products for the dropdown suggestion
  const matchingProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return SHOP_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q)
    ).slice(0, 4);
  }, [searchQuery]);

  if (
    pathname?.startsWith("/checkout") ||
    pathname?.startsWith("/order-confirmation")
  ) {
    return null;
  }

  const handleExecuteSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/shop?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/shop");
    }
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleExecuteSearch(searchQuery);
  };

  const handleSelectSuggestion = (href: string) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    router.push(href);
  };

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
          <div className="hidden lg:flex items-center gap-5 lg:gap-6 shrink-0">
            {/* Search */}
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="group flex items-center gap-1.5 text-on-surface/90 hover:text-primary transition-colors py-1 focus-visible:outline-none cursor-pointer"
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
              aria-label={`Wishlist, ${totalWishlistCount} items`}
            >
              <Heart
                className={`w-3.5 h-3.5 transition-colors ${
                  totalWishlistCount > 0
                    ? "fill-primary text-primary"
                    : "text-on-surface group-hover:text-primary"
                }`}
                strokeWidth={2}
              />
              <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase">
                WISHLIST {totalWishlistCount > 0 && `[${totalWishlistCount}]`}
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
              href="/shop"
              className="w-7 h-7 rounded-full bg-[#8D5B4C] hover:bg-primary transition-colors flex items-center justify-center text-white shadow-xs focus-visible:outline-none shrink-0"
              aria-label="Maison Atelier"
              title="An Gha Atelier"
            >
              <User className="w-3.5 h-3.5 text-white" strokeWidth={2.2} />
            </Link>
          </div>

          {/* Mobile & Tablet Right Controls (< lg) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="p-2 text-on-surface hover:text-primary transition-colors focus-visible:outline-none cursor-pointer flex items-center justify-center"
              aria-label="Search collection"
            >
              <Search className="w-4 h-4" strokeWidth={1.75} />
            </button>

            {/* Hamburger / Close Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 -mr-1 text-on-surface hover:text-primary transition-colors focus-visible:outline-none cursor-pointer flex items-center justify-center relative"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-primary" strokeWidth={2} />
              ) : (
                <>
                  <Menu className="w-5 h-5" strokeWidth={2} />
                  {(bagCount > 0 || totalWishlistCount > 0) && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* EDITORIAL SEARCH OVERLAY WITH INTERACTIVE DROPDOWN        */}
      {/* ========================================================= */}
      {isSearchOpen && (
        <div className="border-t border-on-surface/10 bg-surface/98 backdrop-blur-md py-5 px-4 shadow-lg transition-all animate-fadeIn">
          <div className="angha-container max-w-2xl mx-auto">
            {/* Search Input Form */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center mb-3"
            >
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search collection (e.g. Silk Dress, Wool Coat, Cashmere, Leather)..."
                autoFocus
                className="w-full bg-transparent border-b border-on-surface/30 py-2.5 pl-2 pr-12 text-sm font-sans placeholder:text-outline placeholder:font-normal focus:border-on-surface focus:outline-none tracking-wide text-on-surface"
              />
              <div className="absolute right-2 flex items-center gap-2">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="p-1 text-on-surface/60 hover:text-on-surface transition-colors cursor-pointer"
                    aria-label="Clear input"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="submit"
                  className="p-1 text-on-surface hover:text-primary transition-colors cursor-pointer"
                  aria-label="Submit search"
                >
                  <Search className="w-4 h-4" strokeWidth={1.75} />
                </button>
              </div>
            </form>

            {/* Dropdown Suggestions Section */}
            <div className="pt-3 border-t border-on-surface/10">
              {/* When typing: Real-time matching specimens */}
              {searchQuery.trim() ? (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
                      Matching Specimens ({matchingProducts.length})
                    </span>
                    <button
                      type="button"
                      onClick={() => handleExecuteSearch(searchQuery)}
                      className="font-sans text-[11px] uppercase tracking-wider text-on-surface hover:text-primary transition-colors flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <span>View all results</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {matchingProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {matchingProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={product.href || `/shop/${product.id}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center gap-3 p-2 bg-surface-container-low hover:bg-surface-container transition-colors border border-on-surface/5 group"
                        >
                          <div className="relative w-12 aspect-[3/4] bg-surface-container shrink-0 overflow-hidden">
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              fill
                              unoptimized
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-sans text-[9px] uppercase tracking-widest text-outline truncate">
                              {product.category}
                            </span>
                            <span className="font-serif text-sm text-on-surface group-hover:text-primary transition-colors truncate font-normal">
                              {product.name}
                            </span>
                            <span className="font-sans text-xs font-semibold text-primary mt-0.5">
                              ${product.price}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-4 text-center">
                      <p className="font-sans text-xs text-outline mb-2">
                        No direct matching pieces found for "{searchQuery}".
                      </p>
                      <button
                        type="button"
                        onClick={() => handleExecuteSearch(searchQuery)}
                        className="font-sans text-xs uppercase tracking-widest text-primary hover:underline font-semibold cursor-pointer"
                      >
                        Search entire catalogue for "{searchQuery}" →
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* When empty: Curated Quick Suggestions */
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-outline font-semibold block mb-2.5">
                    Curated Suggestions
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_SEARCHES.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleSelectSuggestion(item.href)}
                        className="px-3 py-1.5 bg-surface-container-low hover:bg-inverse-surface hover:text-inverse-on-surface text-on-surface font-sans text-xs uppercase tracking-wider transition-colors border border-on-surface/10 cursor-pointer"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Popup Window */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
