"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, ChevronDown, Globe, MapPin } from "lucide-react";

export function AnnouncementBar() {
  const [langOpen, setLangOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Eng");
  const [selectedLoc, setSelectedLoc] = useState("Location");

  return (
    <div className="w-full bg-[#1B3B2B] text-white text-[11px] sm:text-xs font-normal border-b border-white/10 select-none">
      <div className="angha-container py-2 flex items-center justify-between">
        {/* Left: Contact Phone */}
        <div className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
          <Phone className="w-3.5 h-3.5 text-[#EFE8DE]" strokeWidth={2} />
          <a href="tel:+001234567890" className="hover:underline tracking-tight">
            +001234567890
          </a>
        </div>

        {/* Center: Promo Announcement */}
        <div className="hidden md:flex items-center gap-2 text-center text-white/95">
          <span>Get 50% Off on Selected Items</span>
          <span className="text-white/40">|</span>
          <Link
            href="#curated-products"
            className="font-bold underline hover:text-[#EFE8DE] transition-colors"
          >
            Shop Now
          </Link>
        </div>

        {/* Right: Language & Location Selectors */}
        <div className="flex items-center gap-4 sm:gap-6 relative">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setLangOpen((prev) => !prev);
                setLocOpen(false);
              }}
              className="flex items-center gap-1 hover:text-[#EFE8DE] transition-colors"
              aria-label="Select Language"
            >
              <Globe className="w-3 h-3 text-white/70" />
              <span>{selectedLang}</span>
              <ChevronDown className="w-3 h-3 text-white/70" />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-24 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-100 py-1 z-50 text-xs">
                {["Eng", "Esp", "Fra", "Deu", "Jpn"].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-gray-50 ${
                      selectedLang === lang ? "font-bold text-[#1B3B2B]" : ""
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setLocOpen((prev) => !prev);
                setLangOpen(false);
              }}
              className="flex items-center gap-1 hover:text-[#EFE8DE] transition-colors"
              aria-label="Select Location"
            >
              <MapPin className="w-3 h-3 text-white/70" />
              <span>{selectedLoc}</span>
              <ChevronDown className="w-3 h-3 text-white/70" />
            </button>

            {locOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-36 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-100 py-1 z-50 text-xs">
                {[
                  "United States",
                  "United Kingdom",
                  "Canada",
                  "European Union",
                  "Australia",
                ].map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => {
                      setSelectedLoc(loc);
                      setLocOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-gray-50 truncate ${
                      selectedLoc === loc ? "font-bold text-[#1B3B2B]" : ""
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
