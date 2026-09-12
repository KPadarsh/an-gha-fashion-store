"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export function ShopNewsletter() {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsJoined(true);
      setTimeout(() => {
        setIsJoined(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="w-full px-margin mb-8 sm:mb-12 lg:mb-20">
      {/* Mobile Dispatch View (< md) */}
      <div className="md:hidden p-5 sm:p-6 bg-surface-container text-on-surface flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="font-sans text-[10px] font-medium text-primary uppercase tracking-widest">
            ANGHA DISPATCH
          </span>
          <span className="font-sans text-[10px] font-medium text-tertiary">
            ISSUE 84
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-normal text-on-surface">
          A QUIET UPDATE.
        </h3>

        <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
          Receive private lookbook releases, archival notes, and private fitting invitations directly in your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 pt-1">
          <div className="relative flex items-center bg-surface-container-lowest border border-surface-dim/40">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER EMAIL ADDRESS"
              required
              className="w-full px-3 py-2.5 bg-transparent text-on-surface font-sans text-xs placeholder:text-tertiary focus:outline-none uppercase tracking-wider"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-primary text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-primary-container transition-colors shrink-0 cursor-pointer"
            >
              JOIN
            </button>
          </div>

          {isJoined && (
            <p className="font-sans text-xs text-primary font-medium tracking-wide pt-1">
              ✓ YOU ARE ENTERED INTO THE DISPATCH.
            </p>
          )}
        </form>
      </div>

      {/* Desktop Catalogue Edit View (>= md) */}
      <div className="hidden md:flex w-full bg-inverse-surface text-inverse-on-surface p-8 lg:p-16 flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="max-w-md w-full">
          <span className="font-sans text-[11px] font-medium tracking-[0.18em] text-primary-fixed uppercase block mb-1.5">
            03 / THE CATALOGUE EDIT
          </span>
          <h3 className="font-serif text-3xl lg:text-[2.25rem] font-normal tracking-tight mb-2">
            A QUIET UPDATE.
          </h3>
          <p className="font-sans text-xs sm:text-sm text-surface-variant/80 leading-relaxed">
            New collections, selected pieces, and occasional notes from An Gha.
          </p>
        </div>

        <div className="w-full lg:w-auto flex-1 max-w-md">
          {isJoined ? (
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-primary-fixed/40 text-primary-fixed font-sans text-xs font-semibold tracking-wider uppercase">
              <Check className="w-4 h-4" />
              <span>Thank you for subscribing to the catalogue edit.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full bg-surface-container-highest/10 text-inverse-on-surface placeholder:text-surface-variant/50 px-4 py-3.5 font-sans text-xs sm:text-sm outline-none border border-surface-variant/20 sm:border-r-0 focus:bg-surface-container-highest/20 focus:border-primary-fixed transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-primary text-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-primary-container transition-colors shrink-0 cursor-pointer"
              >
                JOIN
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
