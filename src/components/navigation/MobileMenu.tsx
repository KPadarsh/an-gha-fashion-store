"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  bagCount?: number;
}

interface MobileNavItem {
  label: string;
  index: string;
  href: string;
  highlight?: boolean;
}

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { label: "NEW IN", index: "01", href: "/shop?collection=new-in" },
  { label: "COLLECTIONS", index: "02", href: "/shop" },
  { label: "DRESSES", index: "03", href: "/shop/dresses" },
  { label: "KNITWEAR", index: "04", href: "/shop/knitwear" },
  { label: "OUTERWEAR", index: "05", href: "/shop/outerwear" },
  { label: "ACCESSORIES", index: "06", href: "/shop/accessories" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close on Escape key and lock body scroll
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
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-inverse-surface/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside className="relative w-full max-w-[340px] bg-surface text-on-surface shadow-2xl flex flex-col justify-between h-full z-10 border-l border-surface-dim/40 overflow-y-auto">
        {/* Drawer Header */}
        <div>
          <div className="h-16 px-6 flex items-center justify-between border-b border-surface-dim/40">
            <span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-on-surface-variant uppercase">
              CATALOGUE INDEX
            </span>
            <button
              type="button"
              onClick={onClose}
              className="w-11 h-11 -mr-2 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus-visible:outline-none"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation Links with Editorial Index Numerals */}
          <nav className="px-6 py-6 flex flex-col justify-center gap-4">
            {MOBILE_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-baseline justify-between min-h-[44px] py-1 border-b border-surface-dim/20 transition-colors ${
                    item.highlight
                      ? "text-primary hover:text-primary-container"
                      : isActive
                      ? "text-primary italic font-serif text-xl"
                      : "text-on-surface hover:text-primary"
                  }`}
                >
                  <span className="font-serif text-lg uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span
                    className={`font-sans text-xs tracking-widest ${
                      item.highlight ? "text-primary" : "text-outline"
                    }`}
                  >
                    {item.index}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Client Services Footer Panel */}
        <div className="px-6 py-6 bg-surface-container-low flex flex-col gap-2 border-t border-surface-dim/30">
          <Link
            href="/contact"
            className="flex items-center justify-between text-on-surface-variant font-sans text-xs font-semibold tracking-widest uppercase hover:text-primary transition-colors"
          >
            <span>CLIENT SERVICES</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <p className="font-sans text-xs text-outline">
            Private Appointments & Fitting Guidance
          </p>
        </div>
      </aside>
    </div>
  );
}
