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
  chapter = "02 / ATELIER STUDY",
  title,
  paragraphs,
  imageUrl,
  tagSeries = "SERIES 08 / MOTION SPECIMEN",
  tagLocation = "Documented under natural Mediterranean daylight at Villa Noailles atelier.",
  specs,
}: ProductStoryProps) {
  return (
    <section className="w-full bg-[#F5EFE8] py-16 md:py-24 my-12 border-y border-[#2B2420]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          {/* Campaign Asymmetric Image with floating tag */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[3/4] bg-[#EDE5DB] overflow-hidden shadow-md relative">
              <Image
                src={imageUrl}
                alt="Atelier Study movement in daylight"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Floating Specimen Tag */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 bg-[#FAF6F1] p-5 shadow-xs border border-[#2B2420]/10 max-w-xs z-10">
              <span className="text-[10px] font-semibold text-[#C17A63] tracking-[0.2em] uppercase block">
                {tagSeries}
              </span>
              <p className="text-[11px] text-[#7A7168] pt-1 leading-snug">
                {tagLocation}
              </p>
            </div>
          </div>

          {/* Editorial Copy Block */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C17A63] uppercase">
                {chapter}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2B2420] leading-tight font-normal">
                {title}
              </h2>
            </div>

            {paragraphs.map((p, i) => (
              <p key={i} className="text-[13px] sm:text-[14px] leading-relaxed text-[#7A7168]">
                {p}
              </p>
            ))}

            {/* Spec Table Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#2B2420]/10">
              {specs.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-[#7A7168] uppercase">
                    {s.label}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider text-[#2B2420] uppercase">
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
