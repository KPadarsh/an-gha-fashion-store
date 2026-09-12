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
    id: "strappy-amber-sandal",
    code: "08 / 06",
    category: "FOOTWEAR",
    name: "Strappy Amber Sandal",
    price: 165,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1U5zTm5U5hunCTZuWcLIkQLWFOnstC6TkuuhpQhEsUehfzvMEHmgVkTeUqKxa8g7Gq_zorO6pdnKViwTTsrtQfHdS_41al8N5OabIa7O83nY_VZHT55myH7gry02Q5C2r42QkscTmqWXgFTQhkl-nAtGJgdkov95tHFJ9rYg_FV_raqVOHELEuFRanegQWjN_7jd7vue34-v-muykrmeTDSXl3pvPzGKSCeSCKPmhCXzg5FZXl47ZD6lAI7",
    href: "/shop/strappy-amber-sandal",
  },
  {
    id: "cognac-atelier-tote",
    code: "08 / 14",
    category: "ACCOUTREMENTS",
    name: "Cognac Atelier Tote",
    price: 142,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1X04CVOQs54zit_ngZ-XVvyB-oM6cbtzmW4_hbIroXy5uT8HiO0yyt1KSnGJPikLGsBCb4laRNbrXQdsIkDr_TaF5vAYdMkQ4tnsq5S82zgQtQNpYpn2XRsYjjJ6ABehkEfP1bwkgXY9-DEqIDpl_LbcyuoBXr05HeRiRUT0BK7ncSCiWXECtrIwLKKqB96oBcWtQB4wIM0gMLCIPwCJpeWArk4HfM9ORwhAXCdPLnqYTMCIIAxyHYqKPar",
    href: "/shop/cove-leather-tote",
  },
  {
    id: "tailored-wool-trench",
    code: "08 / 15",
    category: "OUTERWEAR",
    name: "Tailored Wool Trench",
    price: 280,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1Uw4R_mh7dDwtihMR40LJD5Y4FcRCT87YXljf3wJDnvOvf9RGlAa0qgxoP9lHgLrn2ttBMfU-Wq9kwcHkAzyvOAzN6HIwfnBufoPETptYNbRFndaZ_VgsQlj2E-tvyZXNlT1uYgLb1977YPpJ71XL3gjYY-QlqwMOIQCB_66NckgU5CaAtHjlwF2zD1xSkPDQec_3DWhW2MvoFFYG5rQMI7GDAnlqIEBxoxLVgR-l2jtTmF_FYTamGDNP0",
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
                  quality={90}
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
