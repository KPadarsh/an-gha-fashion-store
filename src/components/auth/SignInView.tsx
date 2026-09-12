"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight } from "lucide-react";
import { AuthFooter } from "./AuthFooter";

export function SignInView() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

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

          {/* Card Layout (Side by side on desktop, stacked on mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Image Column (Desktop only) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative w-full aspect-[3/4] max-h-[440px] overflow-hidden bg-[#F9EBE5] border border-[#2B2420]/10">
                <Image
                  src="/images/signIn-image.png"
                  alt="An Gha Autumn Collection"
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
            <div className="w-full lg:col-span-7 flex flex-col justify-center max-w-[420px] mx-auto lg:max-w-none">
              <div className="mb-6">
                <h1 className="font-serif text-2xl sm:text-3xl text-[#2B2420] font-normal tracking-tight mb-2">
                  Sign In
                </h1>
                <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
                  Welcome back. Please sign in to your account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="client-email"
                    className="font-sans text-xs font-medium text-[#2B2420]"
                  >
                    Email address
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="client-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                      className="w-full bg-[#FFFFFF] text-[#2B2420] text-xs sm:text-sm font-sans px-3.5 py-2.5 border border-[#2B2420]/15 focus:border-[#2B2420] focus:outline-none transition-colors placeholder:text-[#7A7168]/50"
                    />
                    <Mail className="w-4 h-4 text-[#7A7168] absolute right-3 pointer-events-none" />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="client-password"
                      className="font-sans text-xs font-medium text-[#2B2420]"
                    >
                      Password
                    </label>
                    <a
                      href="mailto:concierge@angha.com"
                      className="font-sans text-xs text-[#894B37] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      id="client-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full bg-[#FFFFFF] text-[#2B2420] text-xs sm:text-sm font-sans px-3.5 py-2.5 pr-14 border border-[#2B2420]/15 focus:border-[#2B2420] focus:outline-none transition-colors placeholder:text-[#7A7168]/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#7A7168] hover:text-[#2B2420] transition-colors cursor-pointer select-none"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2 py-0.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-3.5 h-3.5 rounded-none accent-[#2B2420] cursor-pointer"
                    />
                    <span className="font-sans text-xs text-[#7A7168]">
                      Remember me
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#2B2420] hover:bg-[#894B37] text-[#FAF6F1] font-sans text-xs uppercase tracking-[0.16em] font-semibold py-3 px-5 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Sign In</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Alternative Action */}
              <div className="mt-6 pt-5 border-t border-[#2B2420]/10 flex items-center justify-between text-xs">
                <span className="font-sans text-[#7A7168]">
                  Don&apos;t have an account?
                </span>
                <Link
                  href="/sign-up"
                  className="font-sans font-semibold text-[#2B2420] hover:text-[#894B37] underline underline-offset-4 transition-colors"
                >
                  Create an account
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
