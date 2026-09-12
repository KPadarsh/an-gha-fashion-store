import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DiscoveryItem {
  id: string;
  code: string;
  category: string;
  name: string;
  price: number;
  imageUrl: string;
  href: string;
}

const DISCOVERY_ITEMS: DiscoveryItem[] = [
  {
    id: "accessories-4",
    code: "08 / 06",
    category: "FOOTWEAR",
    name: "Aven Suede Envelope Clutch",
    price: 135,
    imageUrl: "/images/accessories-4.png",
    href: "/shop/aven-leather-shoulder-bag",
  },
  {
    id: "cognac-atelier-tote",
    code: "08 / 14",
    category: "ACCOUTREMENTS",
    name: "Cognac Atelier Tote",
    price: 142,
    imageUrl: "/images/accessories-2.png",
    href: "/shop/cove-leather-tote",
  },
  {
    id: "tailored-wool-trench",
    code: "08 / 15",
    category: "OUTERWEAR",
    name: "Tailored Wool Trench",
    price: 280,
    imageUrl: "/images/outerwear-2.png",
    href: "/shop/sienna-tailored-trench",
  },
];

export function CartDiscovery() {
  return (
    <section className="w-full px-4 md:px-12 py-10 md:py-16 bg-[#F5EFE8] border-t border-[#2B2420]/10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-3">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#C17A63] font-semibold block">
              COMPLEMENTARY PIECES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2420] font-normal mt-0.5">
              CONTINUE EXPLORING
            </h3>
          </div>

          <Link
            href="/shop"
            className="font-sans text-xs uppercase tracking-widest text-[#2B2420] hover:text-[#C17A63] transition-colors flex items-center gap-1.5 font-semibold"
          >
            <span>VIEW FULL REPERTOIRE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Card Discovery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {DISCOVERY_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col space-y-2.5 bg-[#FAF6F1] p-3 border border-[#2B2420]/10 shadow-xs hover:border-[#2B2420]/30 transition-all"
            >
              <div className="w-full aspect-[3/4] overflow-hidden bg-[#EDE5DB] relative">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#FAF6F1]/90 backdrop-blur-xs px-2 py-0.5 font-mono text-[10px] text-[#2B2420] border border-[#2B2420]/10 uppercase tracking-widest z-10">
                  {item.code}
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-[#7A7168] block font-medium">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base text-[#2B2420] group-hover:text-[#C17A63] transition-colors font-normal">
                    {item.name}
                  </h4>
                </div>
                <span className="font-sans text-sm text-[#2B2420] font-semibold">
                  ${item.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
