"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Check,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { AuthHeader } from "./AuthHeader";
import { AuthFooter } from "./AuthFooter";

export function SignInView() {
  const router = useRouter();
  const [email, setEmail] = useState("client@angha-archive.com");
  const [password, setPassword] = useState("archival-privilege-2026");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy frontend navigation only: simply navigate to homepage
    router.push("/home");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F1] text-[#2B2420]">
      <AuthHeader />

      <main className="flex-1 w-full pt-20 bg-[#FAF6F1]">
        {/* DESKTOP VIEW (>= lg) */}
        <div className="hidden lg:block w-full px-8 lg:px-12 py-12 lg:py-16">
          <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Visual Column (Campaign Plate) */}
            <div className="col-span-6 flex flex-col">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F9EBE5] border border-[#2B2420]/10 shadow-xs">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvIfau7p6SJelshQOU1t2hCuBaXQr6GAg13TaxbxRLMaVSO3Kf4sxxqWyP7-xKaF_eBTvPpItebiSALw4lLZjiocmOItYknJP6LIsO9mfEdUcy8tNw2J6KHjATYD2L4ynW4aFpO8_i-BXhKjBHCdgB6CdRdWQS-g4UluKaKcg-Jny4RSiQhljIAvA2lbWutkSOUlNwEiWflSi1w3dQ6gDW7LL3xa1fIdZKpfr3nedBuKAVepWIzniBzw"
                  alt="Editorial fashion campaign photograph of a poised woman wearing a luxurious oversized unstructured camel wool wrap coat"
                  fill
                  quality={95}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover object-center filter contrast-[0.98] brightness-[0.99]"
                />
                <div className="absolute top-4 left-4 bg-[#FAF6F1]/90 backdrop-blur-xs px-3 py-1.5 flex items-center gap-2 border border-[#2B2420]/10">
                  <span className="w-1.5 h-1.5 bg-[#894B37]" />
                  <span className="font-sans text-[11px] font-semibold text-[#2B2420] uppercase tracking-[0.2em]">
                    Plate № 04 — Autumn Archive
                  </span>
                </div>
              </div>

              <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[#7A7168]">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em]">
                  Archive Campaign № 04 — Unstructured Camel Wrap Coat
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#7A7168]/80">
                  Captured in Soft Mediterranean Daylight
                </span>
              </div>

              {/* Archival Curated Metadata Snippet */}
              <div className="mt-6 bg-[#FFF1EA] p-4 flex items-center justify-between border border-[#2B2420]/10">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#894B37]" />
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#2B2420]">
                    Authenticated Sartorial Vault
                  </span>
                </div>
                <span className="font-mono text-xs text-[#7A7168] tracking-widest">
                  EDITION 2026 / REVISION 08
                </span>
              </div>
            </div>

            {/* Atelier Access Form Column */}
            <div className="col-span-6 xl:col-span-5 xl:col-start-8 flex flex-col justify-center">
              {/* Chapter Index Label */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-semibold text-[#894B37]">01</span>
                <span className="text-[#2B2420]/20">/</span>
                <span className="font-sans text-[11px] font-semibold uppercase text-[#7A7168] tracking-[0.25em]">
                  Client Archive Portal
                </span>
              </div>

              {/* Section Title */}
              <h1 className="font-serif text-4xl xl:text-5xl text-[#2B2420] tracking-tight leading-tight mb-3 font-normal">
                Return to Your Sartorial Archive
              </h1>

              {/* Contextual Description */}
              <p className="font-sans text-sm text-[#7A7168] leading-relaxed max-w-md mb-8">
                Access your private client dossier, saved archival curation, bespoke fitting records, and seasonal private previews.
              </p>

              {/* Access Form */}
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                {/* Email Input Field */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="desktop-client-email"
                    className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#2B2420] flex items-center justify-between"
                  >
                    <span>
                      Communication Email <span className="text-[#894B37]">*</span>
                    </span>
                    <span className="text-[#7A7168] font-mono text-[10px] tracking-normal font-normal">
                      REGISTERED CLIENT ID
                    </span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="desktop-client-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@angha-archive.com"
                      required
                      className="w-full bg-[#FFFFFF] text-[#2B2420] text-sm font-sans px-4 py-3.5 border border-[#2B2420]/15 focus:border-[#2B2420] focus:outline-none transition-colors placeholder:text-[#7A7168]/60"
                    />
                    <Mail className="w-4 h-4 text-[#7A7168] absolute right-4 pointer-events-none" />
                  </div>
                </div>

                {/* Password Input Field */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="desktop-client-password"
                      className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#2B2420]"
                    >
                      Password <span className="text-[#894B37]">*</span>
                    </label>
                    <a
                      href="mailto:concierge@angha.com"
                      className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#894B37] hover:text-[#2B2420] transition-colors underline decoration-[#2B2420]/20 underline-offset-4"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      id="desktop-client-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••••••"
                      required
                      className="w-full bg-[#FFFFFF] text-[#2B2420] text-sm font-sans px-4 py-3.5 pr-16 border border-[#2B2420]/15 focus:border-[#2B2420] focus:outline-none transition-colors placeholder:text-[#7A7168]/60"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 font-sans text-[10px] font-semibold uppercase tracking-widest text-[#7A7168] hover:text-[#2B2420] transition-colors cursor-pointer select-none"
                    >
                      {showPassword ? "HIDE" : "SHOW"}
                    </button>
                  </div>
                </div>

                {/* Remember Privilege Session Checkbox */}
                <div className="flex items-center gap-2.5 pt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded-none accent-[#2B2420] cursor-pointer"
                    />
                    <span className="font-sans text-xs text-[#7A7168]">
                      Maintain authenticated session on this private device
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#2B2420] hover:bg-[#894B37] text-[#FAF6F1] font-sans text-xs uppercase tracking-[0.2em] font-semibold py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-xs hover:shadow-sm"
                  >
                    <span>Sign In to Atelier</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>

              {/* Divider & Alternative Access */}
              <div className="mt-8 pt-6 border-t border-[#2B2420]/10 flex flex-col gap-3">
                <div className="flex items-center justify-between text-[#7A7168]">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em]">
                    New to Angha?
                  </span>
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-wider">
                    Membership By Application
                  </span>
                </div>
                <Link
                  href="/sign-up"
                  className="w-full bg-[#F9EBE5] hover:bg-[#2B2420] text-[#2B2420] hover:text-[#FAF6F1] font-sans text-xs font-semibold uppercase tracking-[0.2em] py-3.5 px-6 text-center transition-all duration-300 block border border-[#2B2420]/10"
                >
                  Create an Atelier Account
                </Link>
              </div>

              {/* Security Badge & Archival Verification */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[#7A7168]">
                <Lock className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Encrypted Client Dossier • 256-Bit SSL Atelier Protection
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (< lg) */}
        <div className="block lg:hidden px-4 sm:px-6 py-8 w-full max-w-[420px] mx-auto flex flex-col">
          {/* Folio & Editorial Header */}
          <div className="flex flex-col mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#894B37] uppercase">
                FOLIO № AG-AUTH-01
              </span>
              <span className="font-mono text-xs text-[#7A7168] uppercase">
                EDITION 2026
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#2B2420] font-normal leading-tight tracking-tight mb-2">
              Sign In to Your Atelier Account
            </h1>
            <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
              Access your private client dossier, saved archival curation, and seasonal dispatches.
            </p>
          </div>

          {/* Editorial Form */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Email Field */}
            <div className="flex flex-col">
              <label
                htmlFor="mobile-email"
                className="font-sans text-[11px] font-semibold tracking-[0.18em] text-[#2B2420] uppercase mb-1.5 flex items-center justify-between"
              >
                <span>
                  COMMUNICATION EMAIL <span className="text-[#894B37]">*</span>
                </span>
              </label>
              <div className="relative w-full bg-[#FFFFFF] border border-[#2B2420]/15">
                <input
                  id="mobile-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@angha-archive.com"
                  required
                  className="w-full px-3.5 py-3.5 bg-transparent text-[#2B2420] placeholder:text-[#7A7168]/60 font-sans text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <div className="flex justify-between items-baseline mb-1.5">
                <label
                  htmlFor="mobile-password"
                  className="font-sans text-[11px] font-semibold tracking-[0.18em] text-[#2B2420] uppercase"
                >
                  PASSWORD <span className="text-[#894B37]">*</span>
                </label>
                <a
                  href="mailto:concierge@angha.com"
                  className="font-sans text-[10px] font-semibold tracking-[0.18em] text-[#894B37] underline underline-offset-4 hover:text-[#2B2420] transition-colors"
                >
                  FORGOT?
                </a>
              </div>
              <div className="relative w-full bg-[#FFFFFF] border border-[#2B2420]/15 flex items-center">
                <input
                  id="mobile-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full px-3.5 py-3.5 pr-14 bg-transparent text-[#2B2420] placeholder:text-[#7A7168]/60 font-sans text-sm focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 bottom-0 px-3.5 flex items-center font-sans text-[10px] font-semibold tracking-[0.2em] text-[#7A7168] hover:text-[#2B2420] transition-colors cursor-pointer select-none"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="py-1">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded-none accent-[#2B2420] cursor-pointer"
                />
                <span className="font-sans text-xs text-[#7A7168]">
                  Keep me signed in on this device
                </span>
              </label>
            </div>

            {/* Primary CTA Button */}
            <button
              type="submit"
              className="w-full min-h-[48px] bg-[#2B2420] hover:bg-[#894B37] text-[#FAF6F1] py-3.5 px-6 font-sans text-xs uppercase tracking-[0.22em] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <span>SIGN IN</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Editorial Decorative Divider */}
            <div className="relative my-4 flex items-center justify-center">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-[#2B2420]/10" />
              </div>
              <div className="relative px-3 bg-[#FAF6F1]">
                <span className="font-sans text-[10px] font-semibold tracking-[0.25em] text-[#7A7168] uppercase">
                  OR FIRST VISIT?
                </span>
              </div>
            </div>

            {/* Secondary Action Link */}
            <Link
              href="/sign-up"
              className="w-full min-h-[48px] bg-transparent text-[#2B2420] border border-[#2B2420] hover:bg-[#2B2420] hover:text-[#FAF6F1] py-3.5 px-6 font-sans text-xs uppercase tracking-[0.22em] font-semibold text-center transition-all duration-200 block"
            >
              CREATE ATELIER ACCOUNT
            </Link>
          </form>

          {/* Archival Membership Plate */}
          <div className="mt-8 p-4 bg-[#FFF1EA] flex flex-col gap-1.5 border border-[#2B2420]/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#894B37]" />
              <span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-[#2B2420] uppercase">
                Curated Access Privilege
              </span>
            </div>
            <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
              Registered patrons receive priority reservations for bespoke trunk shows, private fabric mill dispatches, and discreet atelier consultations.
            </p>
          </div>

          {/* Bottom Client Assurance & Footing */}
          <div className="flex flex-col items-center justify-center mt-6 pb-2 text-center">
            <div className="flex items-center justify-center gap-1.5 text-[#7A7168]">
              <Lock className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em]">
                256-BIT ENCRYPTED ATELIER PORTAL
              </span>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 mt-3 font-sans text-[11px] font-semibold tracking-[0.18em] text-[#2B2420] uppercase underline underline-offset-4 hover:text-[#894B37] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO ARCHIVE COLLECTION</span>
            </Link>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
}
