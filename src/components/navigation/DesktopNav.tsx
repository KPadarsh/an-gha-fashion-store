"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "NEW IN", href: "/shop?collection=new-in" },
  { label: "COLLECTIONS", href: "/shop" },
  { label: "DRESSES", href: "/shop/dresses" },
  { label: "KNITWEAR", href: "/shop/knitwear" },
  { label: "OUTERWEAR", href: "/shop/outerwear" },
  { label: "ACCESSORIES", href: "/shop/accessories" },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main Navigation"
      className="flex items-center gap-6 lg:gap-7 xl:gap-8"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`font-sans text-[11px] lg:text-xs font-semibold tracking-[0.18em] uppercase transition-colors relative py-1 ${
              isActive
                ? "text-primary font-bold"
                : "text-on-surface/90 hover:text-primary"
            }`}
          >
            {item.label}
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
