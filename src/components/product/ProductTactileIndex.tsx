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
  title?: string;
  cards?: TactileCard[];
}

export function ProductTactileIndex({
  chapter = "SURFACE & FORM",
  title = "Tactile Anatomy",
  cards = [
    {
      index: "MACRO 01",
      title: "Stone-Washed Linen Weave",
      description:
        "Spun from certified raw European flax with continuous silk filaments. Washed in spring baths for immediate softness without chemical finishes.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1VnBwcV73Pobfhc2oFwmqYQXvrtlmK_zL7J_rRU3DX7RjPMz0anF19qIRHNlDfH2du8JYFCP8RMtg_CylFUVQC0WUDVA1Jv1qN6coFrKGMmlDkM1vm3mmA1A5zapTOpCnaECjo47e32wWyuRjPW0sKPQYAhw8-yM_FtJYBDu2WiYfHQmvGl3cPdqNeYUAUqJE14fkPi0LBshA2yEwVanzm0L62SU99SA3X1ZlRrb4oXHZghNRGJmexukKDc",
    },
    {
      index: "MOTION 02",
      title: "Cascading Back Line",
      description:
        "Constructed with a floating back sash that can be cinched to the front or allowed to trail gracefully during motion.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1W22PS0OP7nZeE9kLTUkxFHgD-4YfcjOvxqMIKFDJ40M2odB_yZ0nVsZuPVkc7Q_v6cyTidUZC2bCefL7xVrHiyV_Z7L6y7QJTw47FA84byC2xfO75YbeN28eH6XDe2WqnRnwlrPFU1XhcWygRrJUqzwkjBLMe5r4rPeZNUq_fDWqScBsFXMIZOjqHwRDDU84WXKdZG4HaO5Hbd05bmkWF2IKCGpeypOYrUl2cOJrNzLDdAURNsd3DwIg8",
    },
    {
      index: "STYLING 03",
      title: "Grounded Footwear Alignment",
      description:
        "Pairs naturally with minimalist strappy amber sandals or an unadorned leather slide for elevated day-to-twilight transitions.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1U5zTm5U5hunCTZuWcLIkQLWFOnstC6TkuuhpQhEsUehfzvMEHmgVkTeUqKxa8g7Gq_zorO6pdnKViwTTsrtQfHdS_41al8N5OabIa7O83nY_VZHT55myH7gry02Q5C2r42QkscTmqWXgFTQhkl-nAtGJgdkov95tHFJ9rYg_FV_raqVOHELEuFRanegQWjN_7jd7vue34-v-muykrmeTDSXl3pvPzGKSCeSCKPmhCXzg5FZXl47ZD6lAI7",
    },
  ],
}: ProductTactileIndexProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-10 md:py-16">
      {/* Header: SURFACE & FORM / Tactile Anatomy • 03 PERSPECTIVES */}
      <div className="flex items-baseline justify-between border-b border-[#2B2420]/15 pb-2.5 mb-6">
        <div className="flex flex-col">
          <span className="font-sans text-[11px] text-[#C17A63] tracking-[0.2em] uppercase font-semibold">
            {chapter}
          </span>
          <h2 className="font-serif text-xl md:text-3xl text-[#2B2420] font-normal mt-0.5">
            {title}
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[#7A7168]">
          03 PERSPECTIVES
        </span>
      </div>

      {/* Cards: Stacked on mobile, 3-column on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => (
          <div
            key={card.index}
            className="flex flex-col bg-[#F5EFE8] border border-[#2B2420]/15 overflow-hidden group shadow-xs"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#EDE5DB]">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 bg-[#FAF6F1]/95 px-2 py-0.5 font-mono text-[10px] text-[#2B2420] border border-[#2B2420]/15 z-10">
                {card.index}
              </span>
            </div>

            <div className="p-4 flex flex-col gap-1">
              <h3 className="font-serif text-base text-[#2B2420] font-medium">
                {card.title}
              </h3>
              <p className="font-sans text-[13px] text-[#7A7168] leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
