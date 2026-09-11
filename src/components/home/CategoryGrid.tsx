import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryItem {
  id: string;
  index: string;
  name: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "dresses",
    index: "01 / 04",
    name: "DRESSES",
    href: "/shop/dresses",
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1VAlbM6622XpA-Qi7MCS_2vcdgzH3jRYux6MJmZjGRGVkvR76d4Bi-uhR8NDBpzNCNgadnJi_xlkK5az_k4H5yLxSS6axpRIJ2tSoZpeosOtoS0Cg6zMYW1ppBHduibe_6xtaKIz8d7cxrb5yiXvksBcP0vIoOl8-WcYraFGSP_woEIHQoxsaJkDAZ30um9GVIpj4WXr-SlBrOLKEWzYFnkmQa7j0zCkJnvflYoBYeXur8ckf5xod_gk_55",
    imageAlt: "Dresses category campaign preview",
  },
  {
    id: "knitwear",
    index: "02 / 04",
    name: "KNITWEAR",
    href: "/shop/knitwear",
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1WykBoPkAIypz8ytgRf0NS4SUc46vxJcAnUJk1OvXEvoNsg3eVKb6OfhzLWhcQmOiA-mSN9PXwU24MB8qzwsKq307qbr5v88bOg-NrB7W1KtAKfd3BcPQI9Rgtk36rMThseIRpusM-5S12Wc3GnVUEJNbp24b8MOzVKKubntsGDU6bNyNNM2rfSPiTEwRFLPPKqgLsRnB4eXmh6VpbSm9TaOP2kjrzckLQgj1kt94voAQILRMp2ia-LkiXk",
    imageAlt: "Knitwear category tactile texture preview",
  },
  {
    id: "outerwear",
    index: "03 / 04",
    name: "OUTERWEAR",
    href: "/shop/outerwear",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAo654oTcXyvQ4BVlZr_Kok3e2KwfNIGJQLAfJN_CrHV97eUGkbvQcV-kxPWNssKei9Rsur8rTkkUTtBrE4a90CrFS0M43q9v59EgTO2OvEa12HbBZWDZzesoVat_Ba3S6qLvXZLE64bCr9FqHUT2AgmxwH0f1BfiSe63mOgzXDTZWfz_XEZQp1gbfSpnxM0F_NZcs_F4X5zv0VDaySlsMZED9wvYsgPPtFnF3zZsOsYhZfxD0waQiCBw",
    imageAlt: "Outerwear category tailored coat preview",
  },
  {
    id: "accessories",
    index: "04 / 04",
    name: "ACCESSORIES",
    href: "/shop/accessories",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFvwv7IeTWsVlilDONEpQDHcJeYNMjMGX7JTKVPPW2YrypwsGlt4YoENBYmqzAnLvFnFVCIBwfBS5YxPBVOoh7OIt1XsvnFiQjrCirej5Npp5o7G0tCuuCrnvJfoXfp7kSify8f0Hr9e8-lxZVQBpOX0H18aM4NIiyGiAtkN15IjW63IfmMkwAxyhDJhz3fCNtFdFB6WwPFOVR648e385g_xQe4KkMQUEu5ztXUqcpWq7tklBUSpy3rQ",
    imageAlt: "Accessories category smooth leather bag preview",
  },
];

export function CategoryGrid() {
  return (
    <section className="w-full px-margin py-10 sm:py-16 lg:py-24 bg-surface-container-lowest">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-10 lg:mb-14 pb-3 sm:pb-4 border-b border-surface-dim/60">
        <div className="space-y-1">
          <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            02 / THE WARDROBE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-on-surface font-normal">
            THE WARDROBE, EDITED.
          </h2>
        </div>
        <p className="hidden md:block font-sans text-sm sm:text-[15px] text-on-surface-variant max-w-md leading-relaxed">
          Explore the collection through considered silhouettes, tactile layers, and everyday essentials.
        </p>
      </div>

      {/* 2-Col Mobile / 4-Col Desktop Visual Category Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="group flex flex-col bg-surface border border-surface-dim/30 hover:border-surface-dim transition-colors"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">
              <Image
                src={cat.imageUrl}
                alt={cat.imageAlt}
                fill
                quality={95}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="absolute top-2 left-2 font-sans text-[10px] sm:text-[11px] font-medium bg-surface/85 px-1.5 py-0.5 text-on-surface">
                {cat.index}
              </span>
            </div>

            <div className="p-2.5 sm:p-4 flex flex-col justify-between flex-grow space-y-1 sm:space-y-2">
              <div className="flex items-center justify-between pt-1 sm:pt-2 border-t border-surface-dim/40">
                <h3 className="font-serif text-[13px] sm:text-lg font-medium uppercase text-on-surface group-hover:text-primary transition-colors truncate">
                  {cat.name}
                </h3>
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] text-primary flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform shrink-0">
                  EXPLORE <ArrowRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
