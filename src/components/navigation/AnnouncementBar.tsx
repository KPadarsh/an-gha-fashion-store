"use client";

import React from "react";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="w-full bg-surface border-b border-angha-charcoal/10 text-on-surface"
    >
      <div className="angha-container py-2 text-center">
        <p className="font-sans text-[10px] md:text-[11px] font-medium tracking-[0.18em] uppercase text-angha-gray">
          <span>COMPLIMENTARY WORLDWIDE DELIVERY ON ORDERS OVER $250</span>
          <span className="inline-block mx-2 md:mx-3 text-primary">|</span>
          <span className="hidden sm:inline">EDITION 04 — AUTUMN / WINTER 2026</span>
          <span className="sm:hidden">AW 2026</span>
        </p>
      </div>
    </aside>
  );
}
