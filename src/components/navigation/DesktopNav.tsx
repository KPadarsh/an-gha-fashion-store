"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "SHOP", href: "/shop" },
  { label: "DRESSES", href: "/shop/dresses" },
  { label: "OUTERWEAR", href: "/shop/outerwear" },
  { label: "KNITWEAR", href: "/shop/knitwear" },
  { label: "ACCESSORIES", href: "/shop/accessories" },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main Navigation"
      className="hidden md:flex items-center justify-center gap-7 lg:gap-10"
    >
      {NAV_ITEMS.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href === "/shop" && pathname.startsWith("/shop"));

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`font-sans text-[12px] font-medium tracking-[0.18em] uppercase transition-colors relative py-1 ${
              isActive
                ? "text-angha-terracotta font-semibold"
                : "text-angha-charcoal/80 hover:text-angha-charcoal"
            }`}
          >
            {item.label}
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-[1.5px] bg-angha-terracotta"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
