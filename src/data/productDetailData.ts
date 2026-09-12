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
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1U5C-p9Kcbo_TvsGqGu4v7VTnaMe2aX9ofE_mGi73aoaFZ7Pfy632gXKNhrPktnSQW-6Nht4X1o84xta-GBvtREadTjOVAww3c-l8A-YgZvBDmlb8GO8vTvLK8_HWu4QkZKjgRmzgvOlY7cLq1uHdl8LnHeA_ER8xNG5BO246YRBP_x9v9jMqAGZc0gBXmcRjPHsGUm2aGuP6WUowN6zuc6Bq2FVRzGdnP3ajP84fgmSZ5OJhpUIpnQkHqJ",
      alt: "Elara Draped Dress front studio portrait",
    },
    {
      id: "plate-02",
      label: "PLATE 02 / 05",
      name: "Movement in Courtyard",
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1VAlbM6622XpA-Qi7MCS_2vcdgzH3jRYux6MJmZjGRGVkvR76d4Bi-uhR8NDBpzNCNgadnJi_xlkK5az_k4H5yLxSS6axpRIJ2tSoZpeosOtoS0Cg6zMYW1ppBHduibe_6xtaKIz8d7cxrb5yiXvksBcP0vIoOl8-WcYraFGSP_woEIHQoxsaJkDAZ30um9GVIpj4WXr-SlBrOLKEWzYFnkmQa7j0zCkJnvflYoBYeXur8ckf5xod_gk_55",
      alt: "Elara Draped Dress movement view in sunlit courtyard",
    },
    {
      id: "plate-03",
      label: "PLATE 03 / 05",
      name: "Macro Weave Texture",
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1VnBwcV73Pobfhc2oFwmqYQXvrtlmK_zL7J_rRU3DX7RjPMz0anF19qIRHNlDfH2du8JYFCP8RMtg_CylFUVQC0WUDVA1Jv1qN6coFrKGMmlDkM1vm3mmA1A5zapTOpCnaECjo47e32wWyuRjPW0sKPQYAhw8-yM_FtJYBDu2WiYfHQmvGl3cPdqNeYUAUqJE14fkPi0LBshA2yEwVanzm0L62SU99SA3X1ZlRrb4oXHZghNRGJmexukKDc",
      alt: "Raw silk linen slub weave texture close up",
    },
    {
      id: "plate-04",
      label: "PLATE 04 / 05",
      name: "Back Silhouette",
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1W22PS0OP7nZeE9kLTUkxFHgD-4YfcjOvxqMIKFDJ40M2odB_yZ0nVsZuPVkc7Q_v6cyTidUZC2bCefL7xVrHiyV_Z7L6y7QJTw47FA84byC2xfO75YbeN28eH6XDe2WqnRnwlrPFU1XhcWygRrJUqzwkjBLMe5r4rPeZNUq_fDWqScBsFXMIZOjqHwRDDU84WXKdZG4HaO5Hbd05bmkWF2IKCGpeypOYrUl2cOJrNzLDdAURNsd3DwIg8",
      alt: "Back silhouette contour of Elara draped dress",
    },
    {
      id: "plate-05",
      label: "PLATE 05 / 05",
      name: "Atelier Setting",
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1Uw4R_mh7dDwtihMR40LJD5Y4FcRCT87YXljf3wJDnvOvf9RGlAa0qgxoP9lHgLrn2ttBMfU-Wq9kwcHkAzyvOAzN6HIwfnBufoPETptYNbRFndaZ_VgsQlj2E-tvyZXNlT1uYgLb1977YPpJ71XL3gjYY-QlqwMOIQCB_66NckgU5CaAtHjlwF2zD1xSkPDQec_3DWhW2MvoFFYG5rQMI7GDAnlqIEBxoxLVgR-l2jtTmF_FYTamGDNP0",
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
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1VAlbM6622XpA-Qi7MCS_2vcdgzH3jRYux6MJmZjGRGVkvR76d4Bi-uhR8NDBpzNCNgadnJi_xlkK5az_k4H5yLxSS6axpRIJ2tSoZpeosOtoS0Cg6zMYW1ppBHduibe_6xtaKIz8d7cxrb5yiXvksBcP0vIoOl8-WcYraFGSP_woEIHQoxsaJkDAZ30um9GVIpj4WXr-SlBrOLKEWzYFnkmQa7j0zCkJnvflYoBYeXur8ckf5xod_gk_55",
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
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1VnBwcV73Pobfhc2oFwmqYQXvrtlmK_zL7J_rRU3DX7RjPMz0anF19qIRHNlDfH2du8JYFCP8RMtg_CylFUVQC0WUDVA1Jv1qN6coFrKGMmlDkM1vm3mmA1A5zapTOpCnaECjo47e32wWyuRjPW0sKPQYAhw8-yM_FtJYBDu2WiYfHQmvGl3cPdqNeYUAUqJE14fkPi0LBshA2yEwVanzm0L62SU99SA3X1ZlRrb4oXHZghNRGJmexukKDc",
      },
      {
        index: "02 / DRAPE",
        title: "Drape",
        description:
          "Fluid bias-cut back contour adjusting freely to natural body movements and sunlight.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1W22PS0OP7nZeE9kLTUkxFHgD-4YfcjOvxqMIKFDJ40M2odB_yZ0nVsZuPVkc7Q_v6cyTidUZC2bCefL7xVrHiyV_Z7L6y7QJTw47FA84byC2xfO75YbeN28eH6XDe2WqnRnwlrPFU1XhcWygRrJUqzwkjBLMe5r4rPeZNUq_fDWqScBsFXMIZOjqHwRDDU84WXKdZG4HaO5Hbd05bmkWF2IKCGpeypOYrUl2cOJrNzLDdAURNsd3DwIg8",
      },
      {
        index: "03 / FOUNDATION",
        title: "Foundation",
        description:
          "Tonal pairing potential alongside untreated vegetable-tanned leathers and travertine stone.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1U5zTm5U5hunCTZuWcLIkQLWFOnstC6TkuuhpQhEsUehfzvMEHmgVkTeUqKxa8g7Gq_zorO6pdnKViwTTsrtQfHdS_41al8N5OabIa7O83nY_VZHT55myH7gry02Q5C2r42QkscTmqWXgFTQhkl-nAtGJgdkov95tHFJ9rYg_FV_raqVOHELEuFRanegQWjN_7jd7vue34-v-muykrmeTDSXl3pvPzGKSCeSCKPmhCXzg5FZXl47ZD6lAI7",
      },
    ],
  },
  complements: {
    chapter: "04 / SILHOUETTE COMPLEMENTS",
    title: "Complete the silhouette.",
    items: [
      {
        id: "strappy-amber-sandal",
        code: "ACC-01",
        category: "FOOTWEAR",
        name: "Strappy Amber Sandal",
        price: 165,
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1U5zTm5U5hunCTZuWcLIkQLWFOnstC6TkuuhpQhEsUehfzvMEHmgVkTeUqKxa8g7Gq_zorO6pdnKViwTTsrtQfHdS_41al8N5OabIa7O83nY_VZHT55myH7gry02Q5C2r42QkscTmqWXgFTQhkl-nAtGJgdkov95tHFJ9rYg_FV_raqVOHELEuFRanegQWjN_7jd7vue34-v-muykrmeTDSXl3pvPzGKSCeSCKPmhCXzg5FZXl47ZD6lAI7",
        href: "/shop/strappy-amber-sandal",
      },
      {
        id: "aven-leather-shoulder-bag",
        code: "ACC-02",
        category: "SMOOTH VEAL",
        name: "Aven Leather Shoulder Bag",
        price: 118,
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1UIrlPdVxr1S6rfQRllx7NgdfdWSeeT3GzHC2q2FOkZk7p6MiFjKMP5Ka_o46StWxn8Q1n3Fy-ZUY9o6WMgdb831qASCOhv0s3WrNX1FeAxXuLwpsgzMPsD473hfF0Kd-Zk41vo3a2EJCzXSW-FV4pJb4cK4MGWR55XTaNhlolHEXOA-nyqsY7GnL7VDPFLxxb_X6gqzboueeGEVWfWVVYlru4DcWNWPdZ7yXP_336b8WaNhRcqfvcNJVwe",
        href: "/shop/aven-leather-shoulder-bag",
      },
      {
        id: "cove-leather-tote",
        code: "ACC-03",
        category: "CALFSKIN LEATHER",
        name: "Cove Leather Tote",
        price: 142,
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1X04CVOQs54zit_ngZ-XVvyB-oM6cbtzmW4_hbIroXy5uT8HiO0yyt1KSnGJPikLGsBCb4laRNbrXQdsIkDr_TaF5vAYdMkQ4tnsq5S82zgQtQNpYpn2XRsYjjJ6ABehkEfP1bwkgXY9-DEqIDpl_LbcyuoBXr05HeRiRUT0BK7ncSCiWXECtrIwLKKqB96oBcWtQB4wIM0gMLCIPwCJpeWArk4HfM9ORwhAXCdPLnqYTMCIIAxyHYqKPar",
        href: "/shop/cove-leather-tote",
      },
      {
        id: "ceramic-gold-cuff",
        code: "ACC-04",
        category: "ATELIER JEWELRY",
        name: "Ceramic & Gold Cuff",
        price: 88,
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1W4_f5uMB921HPpRpCKL1bEAek0pk1ukQCvJvdjI86KRFu20ht6XDuG_FhXUcWs2lbxs0brXTf0Lm75cxuukIIUs1aUO9PKCxPe4RWqCVkU5hrmDL3ySsLE8SbDy0MLRDL7AoaL86iO7CtAHSgBIzlJc-zurgqdv4te9Z4sPQLsUmx92ntG1vAj66RY4nTJEHAwDU9qBEhqk1dX2_kdoHpT5r9aKQrdSNYCGl_p9eU4x0SSj60uCEp_RVzp",
        href: "/shop/ceramic-gold-cuff",
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
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1X6qeY8c6Hhs4ldAsv9GalUl0M0aNmasLcW2ZNke6TLUhY6nRe05IKY-oB6klpU4DzaqjJbKo8bFsG4AtLNXyy0Hkm50l9h4pc8xYB7I73VzDRMdqgKKofAm5EM42T4E7Bpmv9A_KQTpz-dyoWDyvR8z6n9WbmyK5fHP6t1UxBpvklwkW3oFbFYBgFOt7sml9-IKOc_NUsndJL_Kl_XWcyrALz_OzvTFRJ1LpbTfCO2AXLNKjV_YtrPsHg",
        href: "/shop/solis-ribbed-knit-sweater",
      },
      {
        id: "mira-structured-coat",
        name: "Mira Structured Coat",
        price: 248,
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1W035mWswCLgPspc3EDd3MP2lv08kqFs8A1NJn1sp9aqLgPox9bgGH87F-G9crGlWkXYF1Zfuabmsxjqt_QFNdDhMCGWd-qvWIvor-ZFMEE3Ip5oKGMv0DY6yQqwMt28QOpaFoPG_PsRxxNwKNTRJWxzLzmtKDCuggevHs9drRfeolaXIRWx8OxNv2dY03AmIwxPwl5NMWRJfCteDB099zhQHE1dSAVXsjIbd-i5LpCgaCGtYZhT61HjDpY",
        href: "/shop/mira-structured-coat",
      },
      {
        id: "sienna-tailored-trench",
        name: "Sienna Tailored Trench",
        price: 280,
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1Uw4R_mh7dDwtihMR40LJD5Y4FcRCT87YXljf3wJDnvOvf9RGlAa0qgxoP9lHgLrn2ttBMfU-Wq9kwcHkAzyvOAzN6HIwfnBufoPETptYNbRFndaZ_VgsQlj2E-tvyZXNlT1uYgLb1977YPpJ71XL3gjYY-QlqwMOIQCB_66NckgU5CaAtHjlwF2zD1xSkPDQec_3DWhW2MvoFFYG5rQMI7GDAnlqIEBxoxLVgR-l2jtTmF_FYTamGDNP0",
        href: "/shop/sienna-tailored-trench",
      },
      {
        id: "kora-belted-wool-trench",
        name: "Kora Belted Trench",
        price: 295,
        imageUrl:
          "https://lh3.googleusercontent.com/aida/AEtjO1VvEfYox31S0FyCluoIosA1zxzDYHZ9h7oFhXTCoYb1PC6ArUIZaekx05_fKyPK6xFFoS7y0LILi7aCod0GW-1TH48IPKhK1lJsGMFzZnRGOJXhsZmLYtGyah0iZH6NbDv_6wpiF7TcGlM2EOITSVD6mvdtgfz0wdZnHJml7gMLYbaJ4fO28tgG0gihY-QmAscobmZ59-5jmWDsGU7sv8xdPcTqa-WGyrLjnKPQcH6BBieGuJvvoA6h_eGE",
        href: "/shop/kora-belted-wool-trench",
      },
    ],
  },
};
