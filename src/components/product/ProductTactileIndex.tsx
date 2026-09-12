import React from "react";
import Image from "next/image";

interface TactileCard {
  index: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProductTactileIndexProps {
  chapter?: string;
  title: string;
  cards: TactileCard[];
}

export function ProductTactileIndex({
  chapter = "03 / TACTILE INDEX",
  title = "Material authenticity in microscopic precision.",
  cards,
}: ProductTactileIndexProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
      <div className="flex flex-col gap-1 pb-8">
        <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C17A63] uppercase">
          {chapter}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-[#2B2420] font-normal">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.index}
            className="flex flex-col bg-[#F5EFE8] border border-[#2B2420]/10 group"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#EDE5DB] relative">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold text-[#C17A63] uppercase tracking-[0.2em]">
                {card.index}
              </span>
              <p className="text-[12px] text-[#7A7168] leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
