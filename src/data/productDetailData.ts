export interface GalleryPlate {
  id: string;
  label: string; // e.g. "PLATE 01 / 05"
  name: string; // e.g. "Front Studio"
  imageUrl: string;
  alt: string;
}

export interface ProductColorOption {
  name: string;
  hex: string;
  isLight?: boolean;
}

export interface SizeMeasurement {
  size: string;
  bust: string;
  waist: string;
  length: string;
}

export interface AccordionSection {
  id: string;
  index: string;
  title: string;
  content: string;
}

export interface ComplementProduct {
  id: string;
  code: string; // e.g. "ACC-01"
  category: string;
  name: string;
  price: number;
  imageUrl: string;
  href: string;
}

export interface RecentlyViewedProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  href: string;
}

export interface ProductDetailSpecimen {
  id: string;
  specimenNumber: string; // "SPECIMEN N° 01"
  atelier: string; // "ATELIER BIELA"
  category: string; // "DRESSES"
  categoryLine: string; // "ARCHIVE DRESSES · SPECIMEN 01"
  stockStatus: string; // "IN STOCK [4 UNITS]"
  name: string;
  price: number;
  currency: string; // "USD"
  edition: string; // "EDITION N° 08 / AUTUMN 2026"
  description: string;
  colors: ProductColorOption[];
  sizes: string[];
  measurements: SizeMeasurement[];
  gallery: GalleryPlate[];
  accordions: AccordionSection[];
  story: {
    chapter: string; // "02 / ATELIER STUDY"
    title: string; // "A silhouette designed for deliberate movement."
    paragraphs: string[];
    imageUrl: string;
    tagSeries: string; // "SERIES 08 / MOTION SPECIMEN"
    tagLocation: string; // "Documented under natural Mediterranean daylight at Villa Noailles atelier."
    specs: Array<{ label: string; value: string }>;
  };
  tactileIndex: {
    chapter: string; // "03 / TACTILE INDEX"
    title: string; // "Material authenticity in microscopic precision."
    cards: Array<{
      index: string;
      title: string;
      description: string;
      imageUrl: string;
    }>;
  };
  complements: {
    chapter: string; // "04 / SILHOUETTE COMPLEMENTS"
    title: string; // "Complete the silhouette."
    items: ComplementProduct[];
  };
  recentlyViewed: {
    chapter: string; // "05 / RECENTLY EXAMINED SPECIMENS"
    count: string; // "[04] ARCHIVED"
    items: RecentlyViewedProduct[];
  };
}

export const FEATURED_SPECIMEN: ProductDetailSpecimen = {
  id: "elara-draped-dress",
  specimenNumber: "SPECIMEN N° 01",
  atelier: "ATELIER BIELA",
  category: "DRESSES",
  categoryLine: "ARCHIVE DRESSES · SPECIMEN 01",
  stockStatus: "IN STOCK [4 UNITS]",
  name: "Elara Draped Dress",
  price: 128,
  currency: "USD",
  edition: "EDITION N° 08 / AUTUMN 2026",
  description:
    "Soft structure meets tactile movement through sculptural draping and quiet tailoring. Handcrafted from stone-washed silk linen that softens naturally over time.",
  colors: [
    { name: "TERRACOTTA", hex: "#C17A63" },
    { name: "SAND LINEN", hex: "#EFE4D8", isLight: true },
    { name: "DEEP OLIVE", hex: "#5C5A3E" },
    { name: "CHARCOAL", hex: "#2B2420" },
    { name: "CREAM", hex: "#FAF6F1", isLight: true },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  measurements: [
    { size: "XS", bust: '32"', waist: '25"', length: '48"' },
    { size: "S", bust: '34"', waist: '27"', length: '49"' },
    { size: "M", bust: '36"', waist: '29"', length: '50"' },
    { size: "L", bust: '38"', waist: '31"', length: '51"' },
  ],
  gallery: [
    {
      id: "plate-01",
      label: "PLATE 01 / 05",
      name: "Front Studio",
      imageUrl: "/images/dresses-1.png",
      alt: "Elara Draped Dress front studio portrait",
    },
    {
      id: "plate-02",
      label: "PLATE 02 / 05",
      name: "Movement in Courtyard",
      imageUrl: "/images/dresses-2.png",
      alt: "Elara Draped Dress movement view in sunlit courtyard",
    },
    {
      id: "plate-03",
      label: "PLATE 03 / 05",
      name: "Macro Weave Texture",
      imageUrl: "/images/dresses-3.png",
      alt: "Raw silk linen slub weave texture close up",
    },
    {
      id: "plate-04",
      label: "PLATE 04 / 05",
      name: "Back Silhouette",
      imageUrl: "/images/dresses-4.png",
      alt: "Back silhouette contour of Elara draped dress",
    },
    {
      id: "plate-05",
      label: "PLATE 05 / 05",
      name: "Atelier Setting",
      imageUrl: "/images/dresses-5.png",
      alt: "Atelier styled setting with archival garments",
    },
  ],
  accordions: [
    {
      id: "mat",
      index: "01",
      title: "MATERIALS & ORIGIN",
      content:
        "68% Organic European Linen, 32% Mulberry Silk filaments. Spun and dyed in Biella, Italy on low-tension mechanical looms. Unlined to allow maximum natural drape and breathability.",
    },
    {
      id: "fit",
      index: "02",
      title: "SIZE & FIT GUIDE",
      content:
        'Fits true to European atelier size with an intentional bias drape. Fitted across shoulders, relaxing gently through waist and hips. Model is 5\'10" wearing size S.',
    },
    {
      id: "ship",
      index: "03",
      title: "DISPATCH & ARCHIVAL RETURNS",
      content:
        "Dispatches within 24 hours in our signature unbleached cotton garment case. Includes complimentary return documentation and courier pickup privilege.",
    },
    {
      id: "care",
      index: "04",
      title: "GARMENT CARE & LONGEVITY",
      content:
        "Gentle cold hand wash or eco dry clean. Reshape while damp and dry flat in shaded natural light. Steam softly from distance to restore natural weave tension.",
    },
  ],
  story: {
    chapter: "02 / ATELIER STUDY",
    title: "A silhouette designed for deliberate movement.",
    paragraphs: [
      "Every fold is calibrated to react to natural gesture. Without rigid boning or synthetics, the Elara silhouette holds sculptural posture while breathing softly against the body.",
      "Our patternmakers in Tuscany spent twelve months refining the bias spiral seams. The unbleached linen provides structural tensile tension, while mulberry silk filaments temper the stiffness, producing an undulating hem that lingers gracefully with every step.",
    ],
    imageUrl: "/images/dresses-2.png",
    tagSeries: "SERIES 08 / MOTION SPECIMEN",
    tagLocation:
      "Documented under natural Mediterranean daylight at Villa Noailles atelier.",
    specs: [
      { label: "FABRIC", value: "RAW SILK LINEN" },
      { label: "ORIGIN", value: "TUSCAN ATELIER" },
      { label: "CRAFT", value: "14-HOUR DRAPING" },
    ],
  },
  tactileIndex: {
    chapter: "03 / TACTILE INDEX",
    title: "Material authenticity in microscopic precision.",
    cards: [
      {
        index: "01 / WEAVE",
        title: "Weave",
        description:
          "Irregular slub silk linen warp and weft spun slowly on heritage Italian looms.",
        imageUrl: "/images/knitwear-4.png",
      },
      {
        index: "02 / DRAPE",
        title: "Drape",
        description:
          "Fluid bias-cut back contour adjusting freely to natural body movements and sunlight.",
        imageUrl: "/images/dresses-4.png",
      },
      {
        index: "03 / FOUNDATION",
        title: "Foundation",
        description:
          "Tonal pairing potential alongside untreated vegetable-tanned leathers and travertine stone.",
        imageUrl: "/images/outerwear-4.png",
      },
    ],
  },
  complements: {
    chapter: "04 / SILHOUETTE COMPLEMENTS",
    title: "Complete the silhouette.",
    items: [
      {
        id: "accessories-4",
        code: "ACC-01",
        category: "LEATHER GOODS",
        name: "Aven Suede Envelope Clutch",
        price: 135,
        imageUrl: "/images/accessories-4.png",
        href: "/shop/aven-leather-shoulder-bag",
      },
      {
        id: "aven-leather-shoulder-bag",
        code: "ACC-02",
        category: "SMOOTH VEAL",
        name: "Aven Leather Shoulder Bag",
        price: 118,
        imageUrl: "/images/accessories-1.png",
        href: "/shop/aven-leather-shoulder-bag",
      },
      {
        id: "cove-leather-tote",
        code: "ACC-03",
        category: "CALFSKIN LEATHER",
        name: "Cove Leather Tote",
        price: 142,
        imageUrl: "/images/accessories-2.png",
        href: "/shop/cove-leather-tote",
      },
      {
        id: "arlo-mini-structured-pouch",
        code: "ACC-04",
        category: "ATELIER LEATHER",
        name: "Arlo Mini Structured Pouch",
        price: 98,
        imageUrl: "/images/accessories-3.png",
        href: "/shop/arlo-mini-structured-pouch",
      },
    ],
  },
  recentlyViewed: {
    chapter: "05 / RECENTLY EXAMINED SPECIMENS",
    count: "[04] ARCHIVED",
    items: [
      {
        id: "solis-ribbed-knit-sweater",
        name: "Solis Ribbed Knit",
        price: 164,
        imageUrl: "/images/knitwear-1.png",
        href: "/shop/solis-ribbed-knit-sweater",
      },
      {
        id: "mira-structured-coat",
        name: "Mira Structured Coat",
        price: 248,
        imageUrl: "/images/outerwear-1.png",
        href: "/shop/mira-structured-coat",
      },
      {
        id: "sienna-tailored-trench",
        name: "Sienna Tailored Trench",
        price: 280,
        imageUrl: "/images/outerwear-2.png",
        href: "/shop/sienna-tailored-trench",
      },
      {
        id: "kora-belted-wool-trench",
        name: "Kora Belted Trench",
        price: 295,
        imageUrl: "/images/outerwear-3.png",
        href: "/shop/kora-belted-wool-trench",
      },
    ],
  },
};
