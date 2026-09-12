"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "NEW IN", href: "/shop?collection=new-in" },
  { label: "COLLECTIONS", href: "/shop" },
  { label: "DRESSES", href: "/shop?category=Dresses" },
  { label: "KNITWEAR", href: "/shop?category=Knitwear" },
  { label: "OUTERWEAR", href: "/shop?category=Outerwear" },
  { label: "ACCESSORIES", href: "/shop?category=Accessories" },
];

function DesktopNavContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const collection = searchParams.get("collection");

  const isItemActive = (item: NavItem) => {
    if (item.href.startsWith("/shop?category=")) {
      const cat = item.href.split("=")[1];
      return (
        pathname === "/shop" && category?.toLowerCase() === cat.toLowerCase()
      );
    }
    if (item.href.startsWith("/shop?collection=")) {
      const col = item.href.split("=")[1];
      return (
        pathname === "/shop" &&
        collection?.toLowerCase() === col.toLowerCase()
      );
    }
    if (item.href === "/shop") {
      return pathname === "/shop" && !category && !collection;
    }
    return pathname === item.href;
  };

  return (
    <nav
      aria-label="Main Navigation"
      className="flex items-center gap-6 lg:gap-7 xl:gap-8"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = isItemActive(item);

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

export function DesktopNav() {
  return (
    <Suspense
      fallback={
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-6 lg:gap-7 xl:gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-sans text-[11px] lg:text-xs font-semibold tracking-[0.18em] uppercase text-on-surface/90 hover:text-primary py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      }
    >
      <DesktopNavContent />
    </Suspense>
  );
}
