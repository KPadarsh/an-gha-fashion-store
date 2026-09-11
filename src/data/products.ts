export interface Product {
  id: string;
  name: string;
  category: "Dresses" | "Knitwear" | "Outerwear" | "Accessories" | "Headphones" | "Footwear";
  price: number;
  originalPrice?: number;
  monthlyPrice?: number;
  rating: number;
  reviewsCount: number;
  subtitle: string;
  description: string;
  imageUrl: string;
  galleryImages: string[];
  colors: Array<{
    name: string;
    hex: string;
    borderHex?: string;
  }>;
  stockLeft: number;
  material: string;
  tag?: string;
  isOffer?: boolean;
  offerText?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "wireless-earbuds-ipx8",
    name: "Wireless Earbuds, IPX8",
    category: "Headphones",
    price: 89.0,
    originalPrice: 178.0,
    monthlyPrice: 19.99,
    rating: 5.0,
    reviewsCount: 121,
    subtitle: "Organic Cotton, fairtrade certified",
    description:
      "Engineered with pristine acoustic tuning, ergonomic active noise cancellation, and all-weather IPX8 water resistance for uninterrupted focus.",
    imageUrl:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: [
      { name: "Obsidian Black", hex: "#1F2124" },
      { name: "Pure Coral", hex: "#E76F51" },
      { name: "Sage Mist", hex: "#A8BCA1" },
      { name: "Silver Ash", hex: "#DCDFE4" },
      { name: "Deep Navy", hex: "#264653" },
    ],
    stockLeft: 8,
    material: "Polymer & Recycled Matte Finish",
    tag: "50% OFF",
    isOffer: true,
    offerText: "Grab Upto 50% Off",
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    category: "Headphones",
    price: 549.0,
    originalPrice: 629.0,
    monthlyPrice: 99.99,
    rating: 5.0,
    reviewsCount: 121,
    subtitle: "A perfect balance of high-fidelity audio",
    description:
      "A perfect balance of exhilarating high-fidelity audio and the effortless magic of next-generation acoustic engineering. Computational audio brings theater-like immersion.",
    imageUrl:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: [
      { name: "Pink Coral", hex: "#E57373" },
      { name: "Space Gray", hex: "#37474F" },
      { name: "Light Sage", hex: "#C8E6C9" },
      { name: "Silver Cloud", hex: "#ECEFF1" },
      { name: "Sky Blue", hex: "#607D8B" },
    ],
    stockLeft: 12,
    material: "Anodized Aluminum & Breathable Knit Mesh",
    tag: "POPULAR",
    isOffer: true,
    offerText: "Best Seller",
  },
  {
    id: "bose-bt-earphones",
    name: "Bose BT Earphones",
    category: "Headphones",
    price: 289.0,
    originalPrice: 349.0,
    monthlyPrice: 49.99,
    rating: 5.0,
    reviewsCount: 121,
    subtitle: "Table with air purifier, stained venner/black",
    description:
      "World-class noise cancellation, high-fidelity sound, and unmatched comfort with custom silicone ear tips for all-day listening bliss.",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: [
      { name: "Triple Black", hex: "#1A1A1A" },
      { name: "Luxe Silver", hex: "#E0E0E0" },
      { name: "Midnight Blue", hex: "#1E3D59" },
      { name: "Terracotta Sand", hex: "#C17A63" },
    ],
    stockLeft: 19,
    material: "Soft Touch Silicone & Lightweight Alloy",
    tag: "FEATURED",
    isOffer: false,
  },
  {
    id: "vivefox-headphones",
    name: "VIVEFOX Headphones",
    category: "Headphones",
    price: 39.0,
    originalPrice: 79.0,
    monthlyPrice: 9.99,
    rating: 5.0,
    reviewsCount: 121,
    subtitle: "Wired Stereo Headsets With Mic",
    description:
      "Dynamic bass resonance and featherlight over-ear cushioned earcups designed for crystal-clear calls, studio monitoring, and everyday commute.",
    imageUrl:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: [
      { name: "Crimson Red", hex: "#E53935" },
      { name: "Matte Black", hex: "#212121" },
      { name: "Sky White", hex: "#FAFAFA" },
      { name: "Olive Green", hex: "#5C5A3E" },
    ],
    stockLeft: 24,
    material: "Reinforced Polycarbonate & Memory Foam",
    tag: "50% OFF",
    isOffer: true,
    offerText: "Limited Special",
  },
  {
    id: "elara-draped-dress",
    name: "Elara Draped Silk Dress",
    category: "Dresses",
    price: 128.0,
    originalPrice: 220.0,
    monthlyPrice: 24.99,
    rating: 5.0,
    reviewsCount: 94,
    subtitle: "100% Raw Silk & Hand-Woven Twill",
    description:
      "Flowing asymmetric silhouette draped in organic mulberry silk. Designed for effortless elegance from morning galleries to evening receptions.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1VAlbM6622XpA-Qi7MCS_2vcdgzH3jRYux6MJmZjGRGVkvR76d4Bi-uhR8NDBpzNCNgadnJi_xlkK5az_k4H5yLxSS6axpRIJ2tSoZpeosOtoS0Cg6zMYW1ppBHduibe_6xtaKIz8d7cxrb5yiXvksBcP0vIoOl8-WcYraFGSP_woEIHQoxsaJkDAZ30um9GVIpj4WXr-SlBrOLKEWzYFnkmQa7j0zCkJnvflYoBYeXur8ckf5xod_gk_55",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida/AEtjO1VAlbM6622XpA-Qi7MCS_2vcdgzH3jRYux6MJmZjGRGVkvR76d4Bi-uhR8NDBpzNCNgadnJi_xlkK5az_k4H5yLxSS6axpRIJ2tSoZpeosOtoS0Cg6zMYW1ppBHduibe_6xtaKIz8d7cxrb5yiXvksBcP0vIoOl8-WcYraFGSP_woEIHQoxsaJkDAZ30um9GVIpj4WXr-SlBrOLKEWzYFnkmQa7j0zCkJnvflYoBYeXur8ckf5xod_gk_55",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBV0JTZOdMBUQcbmYe244KGNW6EG4_aHELrx-7dJ4RrgHUeOsGGcKvXveKC4qb7k7DSVS7BRKamNaww6VOvPk2H_5xHdZTQXd3ZDWvJZ5KZGkxwfDD40YeE3UMpXkO2oU4yxLR1mNa-rFEcyG5lxM5j82ROYG1M77vJXNypm9Y4tTYvAawk-KBYnjIRksOUQs6zzNb7JcrUQv2xEswZwbKQ7G684QiUcDS6exSpdz2pGh4w3Y-2rDW-4Q",
    ],
    colors: [
      { name: "Dusty Terracotta", hex: "#C17A63" },
      { name: "Warm Ivory", hex: "#FAF6F1" },
      { name: "Deep Charcoal", hex: "#2B2420" },
    ],
    stockLeft: 14,
    material: "100% Handloom Silk",
    tag: "NEW ARRIVAL",
    isOffer: true,
  },
  {
    id: "solis-ribbed-knit-sweater",
    name: "Solis Ribbed Knit Sweater",
    category: "Knitwear",
    price: 164.0,
    originalPrice: 210.0,
    monthlyPrice: 32.0,
    rating: 4.9,
    reviewsCount: 88,
    subtitle: "Double-faced Merino & Mongolian Cashmere",
    description:
      "Subtle architectural ribbing with a relaxed dropped-shoulder cut, spun from ultra-soft ethically sourced Mongolian cashmere and merino wool.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1WykBoPkAIypz8ytgRf0NS4SUc46vxJcAnUJk1OvXEvoNsg3eVKb6OfhzLWhcQmOiA-mSN9PXwU24MB8qzwsKq307qbr5v88bOg-NrB7W1KtAKfd3BcPQI9Rgtk36rMThseIRpusM-5S12Wc3GnVUEJNbp24b8MOzVKKubntsGDU6bNyNNM2rfSPiTEwRFLPPKqgLsRnB4eXmh6VpbSm9TaOP2kjrzckLQgj1kt94voAQILRMp2ia-LkiXk",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida/AEtjO1WykBoPkAIypz8ytgRf0NS4SUc46vxJcAnUJk1OvXEvoNsg3eVKb6OfhzLWhcQmOiA-mSN9PXwU24MB8qzwsKq307qbr5v88bOg-NrB7W1KtAKfd3BcPQI9Rgtk36rMThseIRpusM-5S12Wc3GnVUEJNbp24b8MOzVKKubntsGDU6bNyNNM2rfSPiTEwRFLPPKqgLsRnB4eXmh6VpbSm9TaOP2kjrzckLQgj1kt94voAQILRMp2ia-LkiXk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPbU8uOl4v92R8z9TOZzMYapTcjsLjeIsR3R_jnfjL2lLLPuvHLrvXFxN7DPbNDAI8wewvxQV-GaQePzKfKAEo4NgS3mqGT71-i93zKCtbykylA_pK0_m9We6O5YVmtD_9wLM0snAPYufHqKNpbKwgTxqym5vVt7l4YGP7Bh9nAvVub0sgbswRV1jxyLcr9ybrsESynd5WO9vbiYI9S4lfmMq0b074g_MMjSJNFDJyELTsL1aaleIwLQ",
    ],
    colors: [
      { name: "Olive Ivory", hex: "#5C5A3E" },
      { name: "Oatmeal Melange", hex: "#EFE4D8" },
      { name: "Charcoal Slate", hex: "#2B2420" },
    ],
    stockLeft: 11,
    material: "Cashmere & Fine Merino Blend",
    tag: "BESTSELLER",
    isOffer: false,
  },
  {
    id: "mira-structured-coat",
    name: "Mira Structured Coat",
    category: "Outerwear",
    price: 248.0,
    originalPrice: 380.0,
    monthlyPrice: 48.0,
    rating: 5.0,
    reviewsCount: 156,
    subtitle: "Heavy Virgin Wool & Horn Buttons",
    description:
      "A tailored masculine-feminine balance featuring razor-sharp lapels, clean welt pockets, and substantial heavyweight virgin wool fabric.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAo654oTcXyvQ4BVlZr_Kok3e2KwfNIGJQLAfJN_CrHV97eUGkbvQcV-kxPWNssKei9Rsur8rTkkUTtBrE4a90CrFS0M43q9v59EgTO2OvEa12HbBZWDZzesoVat_Ba3S6qLvXZLE64bCr9FqHUT2AgmxwH0f1BfiSe63mOgzXDTZWfz_XEZQp1gbfSpnxM0F_NZcs_F4X5zv0VDaySlsMZED9wvYsgPPtFnF3zZsOsYhZfxD0waQiCBw",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAo654oTcXyvQ4BVlZr_Kok3e2KwfNIGJQLAfJN_CrHV97eUGkbvQcV-kxPWNssKei9Rsur8rTkkUTtBrE4a90CrFS0M43q9v59EgTO2OvEa12HbBZWDZzesoVat_Ba3S6qLvXZLE64bCr9FqHUT2AgmxwH0f1BfiSe63mOgzXDTZWfz_XEZQp1gbfSpnxM0F_NZcs_F4X5zv0VDaySlsMZED9wvYsgPPtFnF3zZsOsYhZfxD0waQiCBw",
      "https://lh3.googleusercontent.com/aida/AEtjO1W035mWswCLgPspc3EDd3MP2lv08kqFs8A1NJn1sp9aqLgPox9bgGH87F-G9crGlWkXYF1Zfuabmsxjqt_QFNdDhMCGWd-qvWIvor-ZFMEE3Ip5oKGMv0DY6yQqwMt28QOpaFoPG_PsRxxNwKNTRJWxzLzmtKDCuggevHs9drRfeolaXIRWx8OxNv2dY03AmIwxPwl5NMWRJfCteDB099zhQHE1dSAVXsjIbd-i5LpCgaCGtYZhT61HjDpY",
    ],
    colors: [
      { name: "Warm Taupe", hex: "#7A7168" },
      { name: "Deep Charcoal", hex: "#2B2420" },
      { name: "Desert Sand", hex: "#EFE4D8" },
    ],
    stockLeft: 6,
    material: "100% Virgin Wool",
    tag: "SALE",
    isOffer: true,
  },
  {
    id: "aven-leather-shoulder-bag",
    name: "Aven Leather Shoulder Bag",
    category: "Accessories",
    price: 118.0,
    originalPrice: 160.0,
    monthlyPrice: 22.0,
    rating: 4.9,
    reviewsCount: 72,
    subtitle: "Full-Grain Italian Calfskin & Brass Clasp",
    description:
      "Handcrafted in Florence with vegetable-tanned full-grain leather that deepens in patina over decades of wear. Minimalist sculptural silhouette.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFvwv7IeTWsVlilDONEpQDHcJeYNMjMGX7JTKVPPW2YrypwsGlt4YoENBYmqzAnLvFnFVCIBwfBS5YxPBVOoh7OIt1XsvnFiQjrCirej5Npp5o7G0tCuuCrnvJfoXfp7kSify8f0Hr9e8-lxZVQBpOX0H18aM4NIiyGiAtkN15IjW63IfmMkwAxyhDJhz3fCNtFdFB6WwPFOVR648e385g_xQe4KkMQUEu5ztXUqcpWq7tklBUSpy3rQ",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFvwv7IeTWsVlilDONEpQDHcJeYNMjMGX7JTKVPPW2YrypwsGlt4YoENBYmqzAnLvFnFVCIBwfBS5YxPBVOoh7OIt1XsvnFiQjrCirej5Npp5o7G0tCuuCrnvJfoXfp7kSify8f0Hr9e8-lxZVQBpOX0H18aM4NIiyGiAtkN15IjW63IfmMkwAxyhDJhz3fCNtFdFB6WwPFOVR648e385g_xQe4KkMQUEu5ztXUqcpWq7tklBUSpy3rQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBODbQAEnVmA-CIREJPgXeEHitWmNqUIVZ176Knblh6gvAa5jZljXcfYlwFdRx4pYjZgxq9Fq_deLYqtUvabYd-G9twt9IYp2ni3tj5MjtdRHax6YkvfedKtyXX66Fn0GYjfKRE3RIo8SKOvu-8nIwMZ-yXPjVI_9UkbCNVwCZ8_zmi_iyKJzzIbiLWjVuYMBtT8HuYQFD1qQVq67II6JdJqxlaGGQ0r2nC0TFUhRXU3iLxWvTKMpwPvA",
    ],
    colors: [
      { name: "Terracotta Cognac", hex: "#C17A63" },
      { name: "Espresso Noir", hex: "#2B2420" },
      { name: "Alabaster Tan", hex: "#EFE4D8" },
    ],
    stockLeft: 16,
    material: "Full-Grain Italian Calfskin",
    tag: "ICONIC",
    isOffer: false,
  },
];
