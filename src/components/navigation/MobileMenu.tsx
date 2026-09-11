"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Search, Heart, ShoppingBag } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  bagCount?: number;
}

interface MobileNavItem {
  label: string;
  href: string;
  highlight?: boolean;
}

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { label: "NEW IN", href: "/shop?collection=new-in" },
  { label: "SHOP ALL", href: "/shop" },
  { label: "DRESSES", href: "/shop/dresses" },
  { label: "KNITWEAR", href: "/shop/knitwear" },
  { label: "OUTERWEAR", href: "/shop/outerwear" },
  { label: "ACCESSORIES", href: "/shop/accessories" },
  { label: "SALE", href: "/shop?collection=sale", highlight: true },
];

export function MobileMenu({ isOpen, onClose, bagCount = 0 }: MobileMenuProps) {
  const pathname = usePathname();

  // Close on Escape key and prevent body scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-angha-charcoal/40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-sm bg-angha-ivory text-angha-charcoal h-full shadow-xl flex flex-col justify-between overflow-y-auto z-10 border-r border-angha-charcoal/10">
        {/* Header inside drawer */}
        <div>
          <div className="flex items-center justify-between px-6 py-5 border-b border-angha-charcoal/10">
            <span className="font-serif text-xl tracking-[0.2em] uppercase font-normal">
              AN GHA
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-2 -mr-2 text-angha-charcoal hover:text-angha-terracotta transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Nav items */}
          <nav className="px-6 py-6 space-y-1">
            {MOBILE_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block py-3 text-[13px] font-medium tracking-[0.2em] uppercase transition-colors border-b border-angha-charcoal/5 ${
                    item.highlight
                      ? "text-angha-terracotta font-semibold"
                      : isActive
                      ? "text-angha-terracotta"
                      : "text-angha-charcoal hover:text-angha-terracotta"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Utility section */}
        <div className="p-6 border-t border-angha-charcoal/10 bg-angha-blush/30 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-[11px] font-medium tracking-[0.15em] uppercase text-angha-gray">
            <Link
              href="/search"
              className="flex items-center gap-2 py-2 hover:text-angha-charcoal transition-colors"
            >
              <Search className="w-4 h-4" strokeWidth={1.5} />
              <span>Search</span>
            </Link>
            <Link
              href="/wishlist"
              className="flex items-center gap-2 py-2 hover:text-angha-charcoal transition-colors"
            >
              <Heart className="w-4 h-4" strokeWidth={1.5} />
              <span>Wishlist</span>
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 py-2 hover:text-angha-charcoal transition-colors col-span-2"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              <span>Shopping Bag ({bagCount})</span>
            </Link>
          </div>

          <div className="pt-2 text-[10px] tracking-[0.15em] uppercase text-angha-gray/80">
            <p>© 2026 AN GHA • All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
