import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="angha-container">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Campaign Visual (8 cols on desktop, aligned height & container bounds) */}
          <div className="lg:col-span-8 relative bg-surface-container-low overflow-hidden group w-full aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[620px] border border-surface-dim/30">
            <Image
              src="https://lh3.googleusercontent.com/aida/AEtjO1VAlbM6622XpA-Qi7MCS_2vcdgzH3jRYux6MJmZjGRGVkvR76d4Bi-uhR8NDBpzNCNgadnJi_xlkK5az_k4H5yLxSS6axpRIJ2tSoZpeosOtoS0Cg6zMYW1ppBHduibe_6xtaKIz8d7cxrb5yiXvksBcP0vIoOl8-WcYraFGSP_woEIHQoxsaJkDAZ30um9GVIpj4WXr-SlBrOLKEWzYFnkmQa7j0zCkJnvflYoBYeXur8ckf5xod_gk_55"
              alt="Editorial campaign draped terracotta linen dress in architectural stone setting"
              fill
              priority
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 67vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Floating Editorial Badge */}
            <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-2.5 py-1 z-10 border border-surface-dim/30">
              <span className="font-sans text-[10px] font-semibold text-primary uppercase tracking-widest">
                EDITION 2026.1
              </span>
            </div>
          </div>

          {/* Information Column (4 cols on desktop, matching height & styling) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-surface-container-lowest lg:bg-surface-container-low border border-surface-dim/30 h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold text-primary tracking-[0.18em] uppercase">
                  01 / NEW EDIT
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold text-outline tracking-[0.18em] uppercase">
                  AUTUMN / WINTER 2026
                </span>
              </div>

              <div className="h-px w-full bg-surface-dim" />

              <div className="pt-2 space-y-4">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-on-surface leading-[1.05]">
                  THE NEW
                  <br className="hidden sm:inline" />{" "}
                  EDIT.
                </h1>
                <p className="font-sans text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-sm leading-relaxed">
                  Quiet forms. Considered textures. A contemporary wardrobe curated for deliberate everyday movement.
                </p>
              </div>
            </div>

            <div className="pt-8 lg:pt-12">
              <Link
                href="/shop?collection=new-in"
                className="inline-flex items-center justify-between w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-inverse-surface text-inverse-on-surface hover:bg-primary font-sans text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 group"
              >
                <span>EXPLORE NEW IN</span>
                <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
