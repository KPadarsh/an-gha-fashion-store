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
  Eye,
  EyeOff,
  Info,
  Headphones,
  ArrowLeft,
  Unlock,
} from "lucide-react";
import { AuthHeader } from "./AuthHeader";
import { AuthFooter } from "./AuthFooter";

export function SignUpView() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("Amrita");
  const [lastName, setLastName] = useState("Sen");
  const [email, setEmail] = useState("amrita.sen@atelier-archive.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy frontend navigation only: simply navigate to homepage
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F1] text-[#2B2420]">
      <AuthHeader />

      <main className="flex-1 w-full pt-20 bg-[#FAF6F1]">
        {/* DESKTOP VIEW (>= lg) */}
        <div className="hidden lg:block w-full px-8 lg:px-12 py-12 lg:py-16">
          <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT COLUMN: Editorial Photography & Monograph Narrative (5 cols) */}
            <aside className="col-span-5 flex flex-col">
              {/* Visual Presentation Plate */}
              <div className="relative bg-[#FFFFFF] border border-[#2B2420]/10 shadow-xs overflow-hidden">
                <div className="aspect-[3/4] w-full relative overflow-hidden bg-[#EDE0D9]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaasZdZNjVPN4ghDeokmkE-8-c3GZfq_HGFX72KwDVI7LHMGcyQ81McxuJjwvJLQChVlIIVtmEEUjWI8BlUPKY7cYqziENv0toemL9ZofZm_t_QZZo_DsabuUY8ooofkRaP705xVBEolamFEk8FK8a9xRYrKtVxIp1Xm3X-LnPrsGyDSQ-2ZN9gcKnA1L65jJRmbRGwA1yRlguYvy2Wn6gTRPwesFYpwPSOujyS5H9d_HMw1AXOZWjRA"
                    alt="Archival Monograph Editorial"
                    fill
                    quality={95}
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                  {/* Minimalist Editorial Watermark Pin */}
                  <div className="absolute top-4 left-4 bg-[#FAF6F1]/90 backdrop-blur-xs px-3 py-1.5 border border-[#2B2420]/10 shadow-xs">
                    <span className="font-mono text-[10px] text-[#2B2420] uppercase tracking-widest font-medium">
                      EDITION 2026 / PROTOCOL 02
                    </span>
                  </div>
                  {/* Sartorial Seal Indicator */}
                  <div className="absolute bottom-4 right-4 bg-[#2B2420]/85 backdrop-blur-xs px-3 py-1 text-[#FAF6F1]">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em]">
                      ATELIER ENROLLMENT
                    </span>
                  </div>
                </div>

                {/* Monograph Caption Section */}
                <div className="p-4 bg-[#FFFFFF] flex flex-col gap-1 border-t border-[#2B2420]/10">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] font-semibold text-[#7A7168] uppercase tracking-widest">
                      ARCHIVE MONOGRAPH № 07 — MINIMALIST SILK SLIP
                    </span>
                    <span className="font-mono text-xs text-[#894B37] font-semibold tracking-widest">
                      VOL. IV
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#7A7168] font-sans text-[9px] font-semibold uppercase tracking-[0.16em] pt-1">
                    <span>ATELIER MEMBERSHIP PRIVILEGES</span>
                    <span>•</span>
                    <span>PRIVATE PREVIEWS</span>
                    <span>•</span>
                    <span>BESPOKE CUTTING</span>
                  </div>
                </div>
              </div>

              {/* Archival Narrative Inset Plate */}
              <div className="mt-6 p-5 bg-[#FFF1EA] flex flex-col gap-2 border border-[#2B2420]/10">
                <span className="font-sans text-[11px] font-semibold uppercase text-[#894B37] tracking-widest">
                  Curatorial Mandate
                </span>
                <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                  Every garment preserved within the ANGHA collection is indexed under individual client portfolios. Dossier holders gain unmediated access to private showroom fittings in Paris, Florence, and Kyoto alongside archival restorative care.
                </p>
                <div className="flex items-center gap-2 pt-1 text-[#2B2420]">
                  <ShieldCheck className="w-4 h-4 text-[#894B37]" />
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-[#7A7168]">
                    Permanent Archival Record
                  </span>
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN: Registration Dossier Form (7 cols) */}
            <section className="col-span-7 flex flex-col lg:pl-6">
              {/* Index Categorization */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#894B37]" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7A7168]">
                  02 / NEW CLIENT ENROLLMENT
                </span>
              </div>

              {/* Editorial Headline */}
              <h1 className="font-serif text-4xl xl:text-5xl text-[#2B2420] font-normal leading-[1.08] tracking-tight mb-3">
                Create Your Atelier Dossier
              </h1>

              {/* Supporting Editorial Rationale */}
              <p className="font-sans text-sm text-[#7A7168] leading-relaxed max-w-xl mb-8">
                Receive exclusive invitations to seasonal collection releases, bespoke sizing curation, complimentary archival garment care, and priority atelier dispatch.
              </p>

              {/* Registration Dossier Form */}
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                {/* NAME ROW: 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name Field */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="desktop-first-name"
                      className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#2B2420] flex items-center justify-between"
                    >
                      <span>
                        First Name <span className="text-[#894B37]">*</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#7A7168]">SEC. 01</span>
                    </label>
                    <div className="relative bg-[#FFFFFF] border border-[#2B2420]/15">
                      <input
                        id="desktop-first-name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Amrita"
                        required
                        className="w-full px-4 py-3 bg-[#FFFFFF] text-[#2B2420] font-sans text-sm placeholder:text-[#7A7168]/60 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Last Name Field */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="desktop-last-name"
                      className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#2B2420] flex items-center justify-between"
                    >
                      <span>
                        Last Name <span className="text-[#894B37]">*</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#7A7168]">SEC. 02</span>
                    </label>
                    <div className="relative bg-[#FFFFFF] border border-[#2B2420]/15">
                      <input
                        id="desktop-last-name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Sen"
                        required
                        className="w-full px-4 py-3 bg-[#FFFFFF] text-[#2B2420] font-sans text-sm placeholder:text-[#7A7168]/60 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* EMAIL ADDRESS */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="desktop-email"
                    className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#2B2420] flex items-center justify-between"
                  >
                    <span>
                      Communication Email <span className="text-[#894B37]">*</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#7A7168]">DISPATCH REGISTER</span>
                  </label>
                  <div className="relative bg-[#FFFFFF] border border-[#2B2420]/15 flex items-center">
                    <input
                      id="desktop-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="amrita.sen@atelier-archive.com"
                      required
                      className="w-full px-4 py-3 bg-[#FFFFFF] text-[#2B2420] font-sans text-sm placeholder:text-[#7A7168]/60 focus:outline-none"
                    />
                    <Mail className="w-4 h-4 text-[#7A7168] absolute right-4 pointer-events-none" />
                  </div>
                </div>

                {/* PASSWORD MATRIX: 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Create Password */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="desktop-password"
                      className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#2B2420] flex items-center justify-between"
                    >
                      <span>
                        Create Password <span className="text-[#894B37]">*</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#7A7168]">KEY 01</span>
                    </label>
                    <div className="relative bg-[#FFFFFF] border border-[#2B2420]/15 flex items-center">
                      <input
                        id="desktop-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        required
                        className="w-full px-4 py-3 pr-10 bg-[#FFFFFF] text-[#2B2420] font-sans text-sm placeholder:text-[#7A7168]/60 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="Toggle password visibility"
                        className="absolute right-3 text-[#7A7168] hover:text-[#2B2420] focus:outline-none cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="desktop-confirm-password"
                      className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#2B2420] flex items-center justify-between"
                    >
                      <span>
                        Confirm Password <span className="text-[#894B37]">*</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#7A7168]">KEY 02</span>
                    </label>
                    <div className="relative bg-[#FFFFFF] border border-[#2B2420]/15 flex items-center">
                      <input
                        id="desktop-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••••••"
                        required
                        className="w-full px-4 py-3 pr-10 bg-[#FFFFFF] text-[#2B2420] font-sans text-sm placeholder:text-[#7A7168]/60 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        aria-label="Toggle confirm password visibility"
                        className="absolute right-3 text-[#7A7168] hover:text-[#2B2420] focus:outline-none cursor-pointer"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Password Requirement Helper Token */}
                <div className="flex items-center gap-1.5 -mt-2">
                  <Info className="w-3.5 h-3.5 text-[#7A7168]" />
                  <span className="font-sans text-[10px] font-semibold text-[#7A7168] uppercase tracking-wider">
                    Minimum 8 characters with numerical or sartorial symbol
                  </span>
                </div>

                {/* PREFERENCES & TERMS ACKNOWLEDGEMENT */}
                <div className="flex flex-col gap-3 pt-2">
                  {/* Newsletter Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer select-none group">
                    <input
                      type="checkbox"
                      checked={newsletterOptIn}
                      onChange={(e) => setNewsletterOptIn(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded-none accent-[#2B2420] cursor-pointer"
                    />
                    <span className="font-sans text-xs text-[#7A7168] group-hover:text-[#2B2420] transition-colors leading-relaxed">
                      Receive limited catalog printings, archival dossiers, and seasonal preview dispatches.
                    </span>
                  </label>

                  {/* Legal Protocol Notice */}
                  <div className="bg-[#FFF1EA] p-3.5 border border-[#2B2420]/10">
                    <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                      By creating an account, you acknowledge and agree to ANGHA&apos;s{" "}
                      <Link href="/shop" className="text-[#2B2420] underline underline-offset-4 decoration-[#894B37] hover:text-[#894B37] transition-colors">
                        Terms of Atelier
                      </Link>
                      , complimentary returns policy, and archival privacy protocol.
                    </p>
                  </div>
                </div>

                {/* PRIMARY SUBMISSION BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#2B2420] hover:bg-[#894B37] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-xs hover:shadow-sm cursor-pointer"
                  >
                    <span>Create Account — Enter Atelier</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* ALTERNATIVE AUTHENTICATION LINKAGE */}
                <div className="flex flex-col gap-3 mt-4 pt-5 bg-[#FFFFFF] p-5 border border-[#2B2420]/10 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#7A7168]">
                      ALREADY HAVE AN ATELIER ACCOUNT?
                    </span>
                    <span className="font-mono text-xs text-[#894B37] font-semibold">PORTAL 01</span>
                  </div>
                  <Link
                    href="/sign-in"
                    className="w-full py-3.5 px-4 bg-[#F9EBE5] hover:bg-[#2B2420] text-[#2B2420] hover:text-[#FAF6F1] font-sans text-xs uppercase tracking-widest font-semibold text-center transition-colors duration-200 flex items-center justify-center gap-2 border border-[#2B2420]/10"
                  >
                    <Unlock className="w-3.5 h-3.5" />
                    <span>SIGN IN TO YOUR ARCHIVE</span>
                  </Link>
                </div>
              </form>

              {/* Bespoke Concierge Footnote Support */}
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-4 border-t border-[#2B2420]/10 text-[#7A7168]">
                <div className="flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-wider">
                  <Headphones className="w-3.5 h-3.5 text-[#894B37]" />
                  <span>Atelier Protocol Concierge: Private Line (+33 1 42 68 00 12)</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  UTC+1 · MON—SAT
                </span>
              </div>
            </section>
          </div>
        </div>

        {/* MOBILE VIEW (< lg) */}
        <div className="block lg:hidden px-4 sm:px-6 py-8 w-full max-w-[420px] mx-auto flex flex-col">
          {/* Top Editorial Header & Ledger Meta */}
          <div className="flex flex-col mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-[11px] font-semibold text-[#894B37] uppercase tracking-[0.2em]">
                FOLIO № AG-AUTH-02
              </span>
              <span className="font-mono text-xs text-[#7A7168] uppercase">
                INDEX 01 / REGISTRY
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#2B2420] font-normal leading-tight mb-2">
              Create an Atelier Account
            </h1>
            <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
              Enroll for priority dispatches, private lookbooks, and archival garment services.
            </p>
          </div>

          {/* Editorial Form Matrix */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Name Grid (2-Column) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label
                  htmlFor="mobile-first-name"
                  className="font-sans text-[11px] font-semibold text-[#2B2420] uppercase tracking-wider mb-1.5"
                >
                  First Name *
                </label>
                <div className="relative bg-[#FFFFFF] border border-[#2B2420]/15">
                  <input
                    id="mobile-first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Amrita"
                    required
                    className="w-full bg-transparent text-[#2B2420] font-sans text-sm px-3.5 py-3 outline-none placeholder:text-[#7A7168]/60"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="mobile-last-name"
                  className="font-sans text-[11px] font-semibold text-[#2B2420] uppercase tracking-wider mb-1.5"
                >
                  Last Name *
                </label>
                <div className="relative bg-[#FFFFFF] border border-[#2B2420]/15">
                  <input
                    id="mobile-last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Sen"
                    required
                    className="w-full bg-transparent text-[#2B2420] font-sans text-sm px-3.5 py-3 outline-none placeholder:text-[#7A7168]/60"
                  />
                </div>
              </div>
            </div>

            {/* Communication Email */}
            <div className="flex flex-col">
              <label
                htmlFor="mobile-signup-email"
                className="font-sans text-[11px] font-semibold text-[#2B2420] uppercase tracking-wider mb-1.5 flex items-center justify-between"
              >
                <span>Communication Email *</span>
                <span className="text-[#7A7168] font-mono text-[9px] tracking-normal lowercase">
                  dispatch &amp; orders
                </span>
              </label>
              <div className="relative bg-[#FFFFFF] border border-[#2B2420]/15">
                <input
                  id="mobile-signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="amrita.sen@atelier-archive.com"
                  required
                  className="w-full bg-transparent text-[#2B2420] font-sans text-sm px-3.5 py-3 outline-none placeholder:text-[#7A7168]/60"
                />
              </div>
            </div>

            {/* Passwords Section */}
            <div className="flex flex-col space-y-3">
              {/* Create Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="mobile-signup-password"
                  className="font-sans text-[11px] font-semibold text-[#2B2420] uppercase tracking-wider mb-1.5 flex items-center justify-between"
                >
                  <span>Create Password *</span>
                  <span className="text-[#7A7168] font-mono text-[9px] tracking-normal lowercase">
                    min. 8 characters
                  </span>
                </label>
                <div className="relative bg-[#FFFFFF] border border-[#2B2420]/15 flex items-center">
                  <input
                    id="mobile-signup-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className="w-full bg-transparent text-[#2B2420] font-sans text-sm px-3.5 py-3 pr-10 outline-none placeholder:text-[#7A7168]/60"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                    className="absolute right-3 text-[#7A7168] hover:text-[#2B2420] focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="mobile-signup-confirm-password"
                  className="font-sans text-[11px] font-semibold text-[#2B2420] uppercase tracking-wider mb-1.5"
                >
                  Confirm Password *
                </label>
                <div className="relative bg-[#FFFFFF] border border-[#2B2420]/15 flex items-center">
                  <input
                    id="mobile-signup-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className="w-full bg-transparent text-[#2B2420] font-sans text-sm px-3.5 py-3 pr-10 outline-none placeholder:text-[#7A7168]/60"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle confirm password visibility"
                    className="absolute right-3 text-[#7A7168] hover:text-[#2B2420] focus:outline-none cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Consents & Dispatches Checkbox */}
            <div className="pt-2 flex flex-col space-y-2.5">
              <label className="flex items-start gap-3 cursor-pointer select-none group py-1">
                <input
                  type="checkbox"
                  checked={newsletterOptIn}
                  onChange={(e) => setNewsletterOptIn(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded-none accent-[#2B2420] cursor-pointer shrink-0"
                />
                <span className="font-sans text-xs text-[#7A7168] group-hover:text-[#2B2420] transition-colors leading-relaxed">
                  Receive limited catalog printings, seasonal preview dispatches, and private archive invitationals.
                </span>
              </label>
              <p className="font-sans text-[11px] text-[#7A7168]/80 leading-relaxed pl-7">
                By creating an account, you agree to ANGHA&apos;s{" "}
                <Link href="/shop" className="underline text-[#2B2420] hover:text-[#894B37] transition-colors">
                  Terms of Atelier
                </Link>{" "}
                &amp;{" "}
                <Link href="/shop" className="underline text-[#2B2420] hover:text-[#894B37] transition-colors">
                  Privacy Protocol
                </Link>
                .
              </p>
            </div>

            {/* Primary Action: Create Account */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full min-h-[48px] bg-[#2B2420] hover:bg-[#894B37] text-[#FAF6F1] py-3.5 px-4 font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Tactile Visual Interlude: Atelier Fabric & Monograph Plate */}
          <div className="my-6 p-4 bg-[#FFF1EA] flex items-center gap-3.5 border border-[#2B2420]/10">
            <div className="w-14 h-18 shrink-0 relative overflow-hidden bg-[#F9EBE5] border border-[#2B2420]/10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaasZdZNjVPN4ghDeokmkE-8-c3GZfq_HGFX72KwDVI7LHMGcyQ81McxuJjwvJLQChVlIIVtmEEUjWI8BlUPKY7cYqziENv0toemL9ZofZm_t_QZZo_DsabuUY8ooofkRaP705xVBEolamFEk8FK8a9xRYrKtVxIp1Xm3X-LnPrsGyDSQ-2ZN9gcKnA1L65jJRmbRGwA1yRlguYvy2Wn6gTRPwesFYpwPSOujyS5H9d_HMw1AXOZWjRA"
                alt="Architectural fabric detail"
                fill
                quality={85}
                className="object-cover grayscale-[20%]"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-sans text-[10px] font-semibold text-[#894B37] uppercase tracking-[0.18em] mb-0.5">
                Archival Privilege
              </span>
              <p className="font-serif text-sm leading-snug text-[#2B2420]">
                Registered patrons gain access to limited editions and custom bespoke commissions.
              </p>
            </div>
          </div>

          {/* Divider: Shift to Sign In */}
          <div className="relative flex items-center justify-center my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-[#2B2420]/10" />
            </div>
            <div className="relative bg-[#FAF6F1] px-3 text-center">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7A7168]">
                Already Registered?
              </span>
            </div>
          </div>

          {/* Secondary Action: Existing Client Sign In */}
          <div className="mt-2">
            <Link
              href="/sign-in"
              className="w-full min-h-[48px] bg-[#F9EBE5] text-[#2B2420] hover:bg-[#2B2420] hover:text-[#FAF6F1] py-3.5 px-4 font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors duration-200 border border-[#2B2420]/10 text-center"
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>Sign In to Your Archive</span>
            </Link>
          </div>

          {/* Bottom Client Assurance & Footnote Navigation */}
          <div className="mt-8 flex flex-col items-center space-y-3 text-center">
            <div className="flex items-center justify-center gap-1.5 text-[#7A7168]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em]">
                256-Bit Encrypted Atelier Portal
              </span>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2B2420] underline underline-offset-4 hover:text-[#894B37] transition-colors py-1"
            >
              ← Return to Shopping
            </Link>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
}
