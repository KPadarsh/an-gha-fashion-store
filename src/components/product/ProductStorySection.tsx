import React from "react";
import Image from "next/image";

interface ProductStoryProps {
  chapter?: string;
  title: string;
  paragraphs: string[];
  imageUrl: string;
  tagSeries?: string;
  tagLocation?: string;
  specs: Array<{ label: string; value: string }>;
}

export function ProductStorySection({
  chapter = "02 / ATELIER MONOGRAPH",
  title = "A silhouette designed for deliberate movement.",
  paragraphs = [
    "Every fold is calibrated to react to natural gesture. Without rigid boning or synthetics, the Elara silhouette holds sculptural posture while breathing softly against the body.",
    "Our patternmakers in Tuscany spent twelve months refining the bias spiral seams. The unbleached linen provides structural tensile tension, while mulberry silk filaments temper the stiffness, producing an undulating hem that lingers gracefully with every step.",
  ],
  imageUrl,
  tagSeries = "NOTE NO. 84",
  tagLocation = "Fabric that does not demand attention, but quietly holds space.",
  specs = [
    { label: "CUTTING LOG", value: "Bias-draped paneling" },
    { label: "SPUN RATIO", value: "68% Linen, 32% Silk" },
    { label: "WEAVE WEIGHT", value: "185 GSM Midweight" },
    { label: "WORKSHOP", value: "Como Valley, Italy" },
  ],
}: ProductStoryProps) {
  return (
    <section className="relative w-full bg-[#211a16] text-[#FAF6F1] py-12 md:py-20 my-10 px-4 md:px-12 border-y border-[#2B2420]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
        {/* Header: 02 / ATELIER MONOGRAPH • NOTE NO. 84 */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-[#cfc5b9] font-sans text-[11px] tracking-[0.2em] uppercase font-medium">
            <span>{chapter}</span>
            <span>{tagSeries}</span>
          </div>
          <h2 className="font-serif text-[1.85rem] md:text-4xl text-[#fff8f5] font-light leading-snug tracking-tight">
            {title}
          </h2>
        </div>

        {/* Full-Width / Responsive Portrait Spread with Quote Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#2B2420] shadow-md">
              <Image
                src={imageUrl}
                alt="Atmospheric campaign portrait of Elara Draped Dress"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211a16]/90 via-transparent to-transparent flex items-end p-5">
                <p className="font-serif italic text-lg sm:text-xl text-[#FAF6F1] leading-relaxed">
                  &ldquo;{tagLocation}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Paragraphs & Description (Desktop side, mobile below) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#cfc5b9]"
              >
                {p}
              </p>
            ))}

            {/* Atelier Spec Grid (2x2 on mobile, 4-col on large) */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#cfc5b9]/20">
              {specs.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="font-sans text-[10px] text-[#cfc5b9] uppercase tracking-wider font-semibold">
                    {s.label}
                  </span>
                  <span className="font-sans text-[13px] text-[#FAF6F1] font-light">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
