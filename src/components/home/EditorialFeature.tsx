import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EditorialFeature() {
  return (
    <section className="w-full lg:px-margin py-10 sm:py-16 lg:py-24 bg-surface-container-high lg:bg-surface-container-low lg:border-y border-surface-dim/30">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-12 items-center">
        {/* Large Vertical Campaign Image (Mobile: full width aspect-3/4, Desktop: 7 cols) */}
        <div className="lg:col-span-7 w-full">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container border-b lg:border border-surface-dim/30">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-RXZMHYYLSLP_zSJSGmFkAOF9enl8glLq9BJeBShElMKtaX-d0FLMJDgw1-6jDMsUdhI-dLxEd1ZYOnga59gWkx8nPOmnXyvQTlA9smWTbqtxeLzc1SOeUJkIm7VvkwMoW9qWb3HVHxyafvuc0-FCaFzJBOVhKfpH6nhB4CNAxpJiLjpmyCYfpYdl6-GuqnG0oZa6W9XXi9P_yJWQ3G91FkaNzbAn9ZjtvdkZvIAmkSzPsieikg8r0w"
              alt="Editorial campaign woman wearing tailored warm wool coat in minimalist architectural stone surroundings"
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Information Area Offset Vertically (Mobile: bottom padded card, Desktop: 5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-0 lg:pl-8 flex flex-col justify-center space-y-4 sm:space-y-6 bg-surface-container-low">
          <div className="space-y-2 sm:space-y-3">
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-primary block">
              04 / FORM / TEXTURE / MOVEMENT
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-on-surface font-normal leading-[1.1]">
              THE EVERYDAY
              <br />
              IN MOTION.
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-md leading-relaxed">
            Soft structure meets tactile layers in pieces designed to move naturally through everyday life.
          </p>

          <div className="pt-2 sm:pt-4">
            <Link
              href="/shop?collection=editorial"
              className="inline-flex items-center min-h-[44px] gap-2 sm:gap-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-on-surface hover:text-primary pb-2 border-b-2 border-primary transition-all duration-200 group"
            >
              <span>DISCOVER THE EDIT</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
