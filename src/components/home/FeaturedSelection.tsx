import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard, ProductCardProps } from "@/components/ui/ProductCard";

const FEATURED_PRODUCTS: ProductCardProps[] = [
  {
    id: "elara-draped-dress",
    indexNumber: "01 / 12",
    category: "DRESSES",
    name: "Elara Draped Dress",
    price: 128,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1VAlbM6622XpA-Qi7MCS_2vcdgzH3jRYux6MJmZjGRGVkvR76d4Bi-uhR8NDBpzNCNgadnJi_xlkK5az_k4H5yLxSS6axpRIJ2tSoZpeosOtoS0Cg6zMYW1ppBHduibe_6xtaKIz8d7cxrb5yiXvksBcP0vIoOl8-WcYraFGSP_woEIHQoxsaJkDAZ30um9GVIpj4WXr-SlBrOLKEWzYFnkmQa7j0zCkJnvflYoBYeXur8ckf5xod_gk_55",
    imageAlt: "Elara Draped Dress in terracotta linen",
    href: "/shop/elara-draped-dress",
  },
  {
    id: "solis-ribbed-knit-sweater",
    indexNumber: "02 / 12",
    category: "KNITWEAR",
    name: "Solis Ribbed Knit Sweater",
    price: 164,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1WykBoPkAIypz8ytgRf0NS4SUc46vxJcAnUJk1OvXEvoNsg3eVKb6OfhzLWhcQmOiA-mSN9PXwU24MB8qzwsKq307qbr5v88bOg-NrB7W1KtAKfd3BcPQI9Rgtk36rMThseIRpusM-5S12Wc3GnVUEJNbp24b8MOzVKKubntsGDU6bNyNNM2rfSPiTEwRFLPPKqgLsRnB4eXmh6VpbSm9TaOP2kjrzckLQgj1kt94voAQILRMp2ia-LkiXk",
    imageAlt: "Solis Ribbed Knit Sweater in olive ivory blend",
    href: "/shop/solis-ribbed-knit-sweater",
  },
  {
    id: "mira-structured-coat",
    indexNumber: "03 / 12",
    category: "OUTERWEAR",
    name: "Mira Structured Coat",
    price: 248,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAo654oTcXyvQ4BVlZr_Kok3e2KwfNIGJQLAfJN_CrHV97eUGkbvQcV-kxPWNssKei9Rsur8rTkkUTtBrE4a90CrFS0M43q9v59EgTO2OvEa12HbBZWDZzesoVat_Ba3S6qLvXZLE64bCr9FqHUT2AgmxwH0f1BfiSe63mOgzXDTZWfz_XEZQp1gbfSpnxM0F_NZcs_F4X5zv0VDaySlsMZED9wvYsgPPtFnF3zZsOsYhZfxD0waQiCBw",
    imageAlt: "Mira Structured Coat in warm taupe",
    href: "/shop/mira-structured-coat",
  },
  {
    id: "aven-leather-shoulder-bag",
    indexNumber: "04 / 12",
    category: "ACCESSORIES",
    name: "Aven Leather Shoulder Bag",
    price: 118,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFvwv7IeTWsVlilDONEpQDHcJeYNMjMGX7JTKVPPW2YrypwsGlt4YoENBYmqzAnLvFnFVCIBwfBS5YxPBVOoh7OIt1XsvnFiQjrCirej5Npp5o7G0tCuuCrnvJfoXfp7kSify8f0Hr9e8-lxZVQBpOX0H18aM4NIiyGiAtkN15IjW63IfmMkwAxyhDJhz3fCNtFdFB6WwPFOVR648e385g_xQe4KkMQUEu5ztXUqcpWq7tklBUSpy3rQ",
    imageAlt: "Aven Leather Shoulder Bag in terracotta",
    href: "/shop/aven-leather-shoulder-bag",
  },
];

export function FeaturedSelection() {
  return (
    <section className="w-full py-10 sm:py-16 lg:py-24">
      <div className="angha-container">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-6 sm:mb-10 lg:mb-14 pb-2.5 sm:pb-3 border-b border-surface-dim/50">
          <div className="space-y-1">
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              03 / FEATURED SELECTION
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl uppercase text-on-surface tracking-tight font-normal">
              THE NEW EDIT
            </h2>
          </div>
        </div>

        {/* 2-Col Mobile / 4-Col Desktop Commerce Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          {/* Mobile Button Variant */}
          <Link
            href="/shop?collection=new-in"
            className="sm:hidden min-h-[44px] flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-on-surface hover:text-primary transition-colors bg-surface-container-low py-3 border border-surface-dim/30 w-full"
          >
            <span>VIEW ALL NEW IN</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Desktop Button Variant */}
          <Link
            href="/shop?collection=new-in"
            className="hidden sm:inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-on-surface hover:text-primary pb-1 border-b border-on-surface hover:border-primary transition-colors duration-150"
          >
            <span>VIEW ALL NEW IN</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
