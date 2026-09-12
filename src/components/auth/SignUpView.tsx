"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight, Eye, EyeOff } from "lucide-react";
import { AuthFooter } from "./AuthFooter";

export function SignUpView() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F1] text-[#2B2420]">
      <main className="flex-1 w-full flex flex-col justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[880px] w-full mx-auto">
          {/* Top Header */}
          <div className="flex items-center justify-between pb-5 mb-8 border-b border-[#2B2420]/10">
            <Link
              href="/home"
              className="font-serif text-2xl font-normal tracking-[0.16em] text-[#2B2420] hover:text-[#894B37] transition-colors"
            >
              An Gha
            </Link>
            <Link
              href="/shop"
              className="font-sans text-xs font-medium text-[#7A7168] hover:text-[#2B2420] transition-colors"
            >
              ← Return to Catalogue
            </Link>
          </div>

          {/* Card Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Image Column (Desktop only) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative w-full aspect-[3/4] max-h-[460px] overflow-hidden bg-[#EDE0D9] border border-[#2B2420]/10">
                <Image
                  src="/images/signup-image.png"
                  alt="An Gha Silk Slip Dress"
                  fill
                  quality={95}
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Form Column */}
            <div className="w-full lg:col-span-7 flex flex-col justify-center max-w-[440px] mx-auto lg:max-w-none">
              <div className="mb-5">
                <h1 className="font-serif text-2xl sm:text-3xl text-[#2B2420] font-normal tracking-tight mb-2">
                  Create Account
                </h1>
                <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                  Join An Gha to track orders and save your favorite pieces.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {/* Names (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="signup-first-name"
                      className="font-sans text-xs font-medium text-[#2B2420]"
                    >
                      First Name
                    </label>
                    <input
                      id="signup-first-name"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      required
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] text-[#2B2420] font-sans text-xs sm:text-sm border border-[#2B2420]/15 focus:border-[#2B2420] focus:outline-none transition-colors placeholder:text-[#7A7168]/50"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="signup-last-name"
                      className="font-sans text-xs font-medium text-[#2B2420]"
                    >
                      Last Name
                    </label>
                    <input
                      id="signup-last-name"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name"
                      required
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] text-[#2B2420] font-sans text-xs sm:text-sm border border-[#2B2420]/15 focus:border-[#2B2420] focus:outline-none transition-colors placeholder:text-[#7A7168]/50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="signup-email"
                    className="font-sans text-xs font-medium text-[#2B2420]"
                  >
                    Email address
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="signup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] text-[#2B2420] font-sans text-xs sm:text-sm border border-[#2B2420]/15 focus:border-[#2B2420] focus:outline-none transition-colors placeholder:text-[#7A7168]/50"
                    />
                    <Mail className="w-4 h-4 text-[#7A7168] absolute right-3 pointer-events-none" />
                  </div>
                </div>

                {/* Passwords (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="signup-password"
                      className="font-sans text-xs font-medium text-[#2B2420]"
                    >
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="w-full px-3.5 py-2.5 pr-8 bg-[#FFFFFF] text-[#2B2420] font-sans text-xs sm:text-sm border border-[#2B2420]/15 focus:border-[#2B2420] focus:outline-none transition-colors placeholder:text-[#7A7168]/50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2.5 text-[#7A7168] hover:text-[#2B2420] cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="signup-confirm-password"
                      className="font-sans text-xs font-medium text-[#2B2420]"
                    >
                      Confirm Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        id="signup-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="w-full px-3.5 py-2.5 pr-8 bg-[#FFFFFF] text-[#2B2420] font-sans text-xs sm:text-sm border border-[#2B2420]/15 focus:border-[#2B2420] focus:outline-none transition-colors placeholder:text-[#7A7168]/50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-2.5 text-[#7A7168] hover:text-[#2B2420] cursor-pointer"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="signup-newsletter"
                    type="checkbox"
                    checked={newsletterOptIn}
                    onChange={(e) => setNewsletterOptIn(e.target.checked)}
                    className="w-3.5 h-3.5 mt-0.5 rounded-none accent-[#2B2420] cursor-pointer"
                  />
                  <label htmlFor="signup-newsletter" className="font-sans text-xs text-[#7A7168] cursor-pointer select-none">
                    Subscribe to new arrivals, private previews, and updates.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-5 bg-[#2B2420] hover:bg-[#894B37] text-[#FAF6F1] font-sans text-xs uppercase tracking-[0.16em] font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Create Account</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              {/* Alternative Action */}
              <div className="mt-5 pt-4 border-t border-[#2B2420]/10 flex items-center justify-between text-xs">
                <span className="font-sans text-[#7A7168]">
                  Already have an account?
                </span>
                <Link
                  href="/sign-in"
                  className="font-sans font-semibold text-[#2B2420] hover:text-[#894B37] underline underline-offset-4 transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
}
