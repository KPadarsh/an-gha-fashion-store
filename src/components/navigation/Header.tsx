"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Percent,
  Truck,
  Heart,
} from "lucide-react";
import { AnnouncementBar } from "./AnnouncementBar";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export function Header() {
  const router = useRouter();
  const { totalItems, setIsCartOpen, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, wishlist } = useCart();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Headphones", "Dresses", "Knitwear", "Outerwear", "Accessories"];

  // Filter products for quick search dropdown
  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Close search suggestions on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchFocused(false);
    // Smooth scroll to curated section
    const target = document.getElementById("curated-products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200/80 shadow-xs">
      {/* 1. Top Announcement Strip */}
      <AnnouncementBar />

      {/* 2. Main Navbar */}
      <div className="angha-container py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Brand Logo (Shopcart style with An Gha branding) */}
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0 focus-visible:outline-none"
            aria-label="An Gha Storefront"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1B3B2B] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              {/* Stylized shopping trolley leaf emblem */}
              <span className="font-serif text-lg font-bold text-[#D8EEDF]">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-[#1B3B2B] leading-none">
                An Gha
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCategoriesOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 py-1 hover:text-[#1B3B2B] transition-colors ${
                  isCategoriesOpen ? "text-[#1B3B2B] font-semibold" : ""
                }`}
              >
                <span>Categories</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isCategoriesOpen && (
                <div
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                  className="absolute left-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsCategoriesOpen(false);
                        const target = document.getElementById("curated-products");
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-gray-50 flex items-center justify-between ${
                        selectedCategory === cat
                          ? "text-[#1B3B2B] font-bold bg-[#F4F9F5]"
                          : "text-gray-700"
                      }`}
                    >
                      <span>{cat}</span>
                      {selectedCategory === cat && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B3B2B]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#curated-products"
              onClick={() => setSelectedCategory("All")}
              className="flex items-center gap-1 hover:text-[#1B3B2B] transition-colors"
            >
              <span>Deals</span>
              <span className="bg-red-50 text-red-600 text-[10px] font-bold px-1.5 py-0.2 rounded-md">
                HOT
              </span>
            </Link>

            <Link
              href="#curated-products"
              className="hover:text-[#1B3B2B] transition-colors"
            >
              What&apos;s New
            </Link>

            <Link
              href="#delivery-info"
              className="hover:text-[#1B3B2B] transition-colors flex items-center gap-1"
            >
              <Truck className="w-3.5 h-3.5 text-gray-500" />
              <span>Delivery</span>
            </Link>
          </nav>

          {/* Search Box with instant results dropdown */}
          <div
            ref={searchContainerRef}
            className="flex-1 max-w-xs sm:max-w-sm md:max-w-md relative hidden sm:block"
          >
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search Product..."
                className="w-full bg-[#F3F4F6] hover:bg-[#EBEDF0] focus:bg-white text-gray-900 text-xs sm:text-sm rounded-full py-2.5 pl-4 pr-10 border border-transparent focus:border-[#1B3B2B] focus:outline-none transition-all placeholder:text-gray-400 font-sans"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1B3B2B] p-1"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Live Search Suggestions Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                <div className="px-3 py-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Suggestions
                </div>
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={() => setIsSearchFocused(false)}
                    className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{product.name}</p>
                      <p className="text-[11px] text-gray-500">{product.category}</p>
                    </div>
                    <span className="text-xs font-bold text-[#1B3B2B]">
                      ${product.price.toFixed(2)}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Icons: Account & Cart */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Wishlist Link */}
            <Link
              href="#curated-products"
              className="hidden md:flex items-center gap-1.5 text-gray-700 hover:text-[#1B3B2B] text-sm font-medium transition-colors"
              aria-label="Wishlist"
            >
              <div className="relative">
                <Heart className="w-4 h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </Link>

            {/* Account Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsAccountOpen((prev) => !prev)}
                className="flex items-center gap-1.5 text-gray-700 hover:text-[#1B3B2B] text-xs sm:text-sm font-medium transition-colors"
                aria-label="User Account"
              >
                <User className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-700" strokeWidth={2} />
                <span className="hidden sm:inline">Account</span>
              </button>

              {isAccountOpen && (
                <div
                  onMouseLeave={() => setIsAccountOpen(false)}
                  className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 text-xs"
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="font-semibold text-gray-900">Welcome to An Gha</p>
                    <p className="text-[11px] text-gray-500">guest@angha.com</p>
                  </div>
                  <Link
                    href="#curated-products"
                    onClick={() => setIsAccountOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700 font-medium"
                  >
                    My Orders
                  </Link>
                  <Link
                    href="#curated-products"
                    onClick={() => setIsAccountOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700 font-medium"
                  >
                    Saved Wishlist ({wishlist.length})
                  </Link>
                  <Link
                    href="#delivery-info"
                    onClick={() => setIsAccountOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700 font-medium"
                  >
                    Delivery Preferences
                  </Link>
                </div>
              )}
            </div>

            {/* Cart Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-gray-800 hover:text-[#1B3B2B] text-xs sm:text-sm font-semibold transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200/80"
              aria-label={`Cart with ${totalItems} items`}
            >
              <div className="relative">
                <ShoppingCart className="w-4 h-4 text-[#1B3B2B]" strokeWidth={2} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#1B3B2B] text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-1.5 text-gray-700 hover:text-black focus-visible:outline-none"
              aria-label="Open mobile navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Row (visible on small screens) */}
        <div className="mt-3 sm:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Product..."
              className="w-full bg-[#F3F4F6] text-gray-900 text-xs rounded-full py-2 pl-4 pr-9 border border-gray-200 focus:border-[#1B3B2B] focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Shop Categories
            </p>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsMobileMenuOpen(false);
                  const target = document.getElementById("curated-products");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${
                  selectedCategory === cat
                    ? "bg-[#1B3B2B] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 space-y-2 text-sm font-medium text-gray-700">
            <Link
              href="#curated-products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-1.5 px-3 hover:bg-gray-50 rounded-md"
            >
              🔥 Deals & Offers
            </Link>
            <Link
              href="#curated-products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-1.5 px-3 hover:bg-gray-50 rounded-md"
            >
              ✨ What&apos;s New
            </Link>
            <Link
              href="#delivery-info"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-1.5 px-3 hover:bg-gray-50 rounded-md"
            >
              🚚 Delivery Information
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
