"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  bagCount?: number;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { totalWishlistCount } = useWishlist();
  const { totalCount: bagCount } = useCart();

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const NAV_LINKS = [
    {
      label: "HOME",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
      badge: null,
    },
    {
      label: "PRODUCTS",
      href: "/shop",
      icon: Grid,
      isActive: pathname === "/shop" || pathname?.startsWith("/shop/"),
      badge: null,
    },
    {
      label: "WISHLIST",
      href: "/wishlist",
      icon: Heart,
      isActive: pathname === "/wishlist",
      badge: totalWishlistCount > 0 ? `${totalWishlistCount}` : null,
    },
    {
      label: "CART",
      href: "/cart",
      icon: ShoppingBag,
      isActive: pathname === "/cart",
      badge: bagCount > 0 ? `${bagCount}` : null,
    },
  ];

  return (
    <>
      {/* Dimmed backdrop under the navbar */}
      <div
        className="fixed inset-x-0 bottom-0 top-16 sm:top-20 bg-black/40 backdrop-blur-xs z-40 transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dropdown Popup Window directly attached below header */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className="absolute top-full left-0 right-0 w-full bg-[#FAF6F1] text-[#2B2420] border-b border-[#2B2420]/15 shadow-2xl z-50 animate-in slide-in-from-top-2 duration-200"
      >
        <div className="angha-container py-2">
          <nav className="flex flex-col divide-y divide-[#2B2420]/10">
            {NAV_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-4 px-3 sm:px-4 transition-colors group ${
                    item.isActive
                      ? "bg-[#F3E5DF] text-[#894B37]"
                      : "hover:bg-[#F3E5DF]/50 text-[#2B2420]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon
                      className={`w-4 h-4 ${
                        item.isActive
                          ? "text-[#894B37]"
                          : "text-[#7A7168] group-hover:text-[#894B37]"
                      }`}
                      strokeWidth={1.8}
                    />
                    <span
                      className={`font-serif text-lg uppercase tracking-wide ${
                        item.isActive
                          ? "font-normal italic text-[#894B37]"
                          : "font-normal text-[#2B2420] group-hover:text-[#894B37]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-[#894B37] text-white font-sans text-[10px] font-semibold tracking-wider">
                        [{item.badge}]
                      </span>
                    )}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        item.isActive
                          ? "text-[#894B37]"
                          : "text-[#7A7168]/60 group-hover:text-[#894B37]"
                      }`}
                    />
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
