export interface ShopProduct {
  id: string;
  indexNumber: string; // e.g. "01 / 12"
  name: string;
  category: "DRESSES" | "KNITWEAR" | "OUTERWEAR" | "ACCESSORIES";
  price: number;
  imageUrl: string;
  imageAlt: string;
  badge?: {
    text: string;
    variant: "primary" | "secondary"; // primary = terracotta, secondary = olive
  };
  sizes: string[];
  color: "Terracotta" | "Olive" | "Cream" | "Charcoal" | "Sand";
  inStock: boolean;
  href?: string;
}

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "elara-draped-dress",
    indexNumber: "01 / 12",
    name: "Elara Draped Dress",
    category: "DRESSES",
    price: 128,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1U5C-p9Kcbo_TvsGqGu4v7VTnaMe2aX9ofE_mGi73aoaFZ7Pfy632gXKNhrPktnSQW-6Nht4X1o84xta-GBvtREadTjOVAww3c-l8A-YgZvBDmlb8GO8vTvLK8_HWu4QkZKjgRmzgvOlY7cLq1uHdl8LnHeA_ER8xNG5BO246YRBP_x9v9jMqAGZc0gBXmcRjPHsGUm2aGuP6WUowN6zuc6Bq2FVRzGdnP3ajP84fgmSZ5OJhpUIpnQkHqJ",
    imageAlt: "Elara Draped Dress in terracotta linen",
    sizes: ["XS", "S", "M", "L"],
    color: "Terracotta",
    inStock: true,
    href: "/shop/elara-draped-dress",
  },
  {
    id: "solis-ribbed-knit-sweater",
    indexNumber: "02 / 12",
    name: "Solis Ribbed Knit Sweater",
    category: "KNITWEAR",
    price: 164,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1X6qeY8c6Hhs4ldAsv9GalUl0M0aNmasLcW2ZNke6TLUhY6nRe05IKY-oB6klpU4DzaqjJbKo8bFsG4AtLNXyy0Hkm50l9h4pc8xYB7I73VzDRMdqgKKofAm5EM42T4E7Bpmv9A_KQTpz-dyoWDyvR8z6n9WbmyK5fHP6t1UxBpvklwkW3oFbFYBgFOt7sml9-IKOc_NUsndJL_Kl_XWcyrALz_OzvTFRJ1LpbTfCO2AXLNKjV_YtrPsHg",
    imageAlt: "Solis Ribbed Knit Sweater in oatmeal melange",
    sizes: ["XS", "S", "M", "L"],
    color: "Cream",
    inStock: true,
    href: "/shop/solis-ribbed-knit-sweater",
  },
  {
    id: "mira-structured-coat",
    indexNumber: "03 / 12",
    name: "Mira Structured Coat",
    category: "OUTERWEAR",
    price: 248,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1W035mWswCLgPspc3EDd3MP2lv08kqFs8A1NJn1sp9aqLgPox9bgGH87F-G9crGlWkXYF1Zfuabmsxjqt_QFNdDhMCGWd-qvWIvor-ZFMEE3Ip5oKGMv0DY6yQqwMt28QOpaFoPG_PsRxxNwKNTRJWxzLzmtKDCuggevHs9drRfeolaXIRWx8OxNv2dY03AmIwxPwl5NMWRJfCteDB099zhQHE1dSAVXsjIbd-i5LpCgaCGtYZhT61HjDpY",
    imageAlt: "Mira Structured Coat in warm taupe",
    badge: {
      text: "NEW",
      variant: "primary",
    },
    sizes: ["XS", "S", "M", "L"],
    color: "Charcoal",
    inStock: true,
    href: "/shop/mira-structured-coat",
  },
  {
    id: "aven-leather-shoulder-bag",
    indexNumber: "04 / 12",
    name: "Aven Leather Shoulder Bag",
    category: "ACCESSORIES",
    price: 118,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1UIrlPdVxr1S6rfQRllx7NgdfdWSeeT3GzHC2q2FOkZk7p6MiFjKMP5Ka_o46StWxn8Q1n3Fy-ZUY9o6WMgdb831qASCOhv0s3WrNX1FeAxXuLwpsgzMPsD473hfF0Kd-Zk41vo3a2EJCzXSW-FV4pJb4cK4MGWR55XTaNhlolHEXOA-nyqsY7GnL7VDPFLxxb_X6gqzboueeGEVWfWVVYlru4DcWNWPdZ7yXP_336b8WaNhRcqfvcNJVwe",
    imageAlt: "Aven Leather Shoulder Bag in full-grain calfskin",
    sizes: ["ONE SIZE"],
    color: "Terracotta",
    inStock: true,
    href: "/shop/aven-leather-shoulder-bag",
  },
  {
    id: "sienna-tailored-trench",
    indexNumber: "05 / 12",
    name: "Sienna Tailored Trench",
    category: "OUTERWEAR",
    price: 280,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1VvEfYox31S0FyCluoIosA1zxzDYHZ9h7oFhXTCoYb1PC6ArUIZaekx05_fKyPK6xFFoS7y0LILi7aCod0GW-1TH48IPKhK1lJsGMFzZnRGOJXhsZmLYtGyah0iZH6NbDv_6wpiF7TcGlM2EOITSVD6mvdtgfz0wdZnHJml7gMLYbaJ4fO28tgG0gihY-QmAscobmZ59-5jmWDsGU7sv8xdPcTqa-WGyrLjnKPQcH6BBieGuJvvoA6h_eGE",
    imageAlt: "Sienna Tailored Trench in deep olive",
    sizes: ["XS", "S", "M", "L"],
    color: "Olive",
    inStock: true,
    href: "/shop/sienna-tailored-trench",
  },
  {
    id: "alba-merino-turtleneck",
    indexNumber: "06 / 12",
    name: "Alba Merino Turtleneck",
    category: "KNITWEAR",
    price: 148,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1WykBoPkAIypz8ytgRf0NS4SUc46vxJcAnUJk1OvXEvoNsg3eVKb6OfhzLWhcQmOiA-mSN9PXwU24MB8qzwsKq307qbr5v88bOg-NrB7W1KtAKfd3BcPQI9Rgtk36rMThseIRpusM-5S12Wc3GnVUEJNbp24b8MOzVKKubntsGDU6bNyNNM2rfSPiTEwRFLPPKqgLsRnB4eXmh6VpbSm9TaOP2kjrzckLQgj1kt94voAQILRMp2ia-LkiXk",
    imageAlt: "Alba Merino Turtleneck ribbed knit",
    sizes: ["XS", "S", "M", "L"],
    color: "Sand",
    inStock: true,
    href: "/shop/alba-merino-turtleneck",
  },
  {
    id: "kallie-wrap-midi-dress",
    indexNumber: "07 / 12",
    name: "Kallie Wrap Midi Dress",
    category: "DRESSES",
    price: 136,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1VAlbM6622XpA-Qi7MCS_2vcdgzH3jRYux6MJmZjGRGVkvR76d4Bi-uhR8NDBpzNCNgadnJi_xlkK5az_k4H5yLxSS6axpRIJ2tSoZpeosOtoS0Cg6zMYW1ppBHduibe_6xtaKIz8d7cxrb5yiXvksBcP0vIoOl8-WcYraFGSP_woEIHQoxsaJkDAZ30um9GVIpj4WXr-SlBrOLKEWzYFnkmQa7j0zCkJnvflYoBYeXur8ckf5xod_gk_55",
    imageAlt: "Kallie Wrap Midi Dress draped linen",
    badge: {
      text: "LOW STOCK",
      variant: "secondary",
    },
    sizes: ["XS", "S", "M", "L"],
    color: "Terracotta",
    inStock: true,
    href: "/shop/kallie-wrap-midi-dress",
  },
  {
    id: "cove-leather-tote",
    indexNumber: "08 / 12",
    name: "Cove Leather Tote",
    category: "ACCESSORIES",
    price: 142,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1X04CVOQs54zit_ngZ-XVvyB-oM6cbtzmW4_hbIroXy5uT8HiO0yyt1KSnGJPikLGsBCb4laRNbrXQdsIkDr_TaF5vAYdMkQ4tnsq5S82zgQtQNpYpn2XRsYjjJ6ABehkEfP1bwkgXY9-DEqIDpl_LbcyuoBXr05HeRiRUT0BK7ncSCiWXECtrIwLKKqB96oBcWtQB4wIM0gMLCIPwCJpeWArk4HfM9ORwhAXCdPLnqYTMCIIAxyHYqKPar",
    imageAlt: "Cove Leather Tote in dark charcoal leather",
    sizes: ["ONE SIZE"],
    color: "Charcoal",
    inStock: true,
    href: "/shop/cove-leather-tote",
  },
  {
    id: "rowan-pleated-slip-dress",
    indexNumber: "09 / 12",
    name: "Rowan Pleated Slip Dress",
    category: "DRESSES",
    price: 152,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1U5C-p9Kcbo_TvsGqGu4v7VTnaMe2aX9ofE_mGi73aoaFZ7Pfy632gXKNhrPktnSQW-6Nht4X1o84xta-GBvtREadTjOVAww3c-l8A-YgZvBDmlb8GO8vTvLK8_HWu4QkZKjgRmzgvOlY7cLq1uHdl8LnHeA_ER8xNG5BO246YRBP_x9v9jMqAGZc0gBXmcRjPHsGUm2aGuP6WUowN6zuc6Bq2FVRzGdnP3ajP84fgmSZ5OJhpUIpnQkHqJ",
    imageAlt: "Rowan Pleated Slip Dress",
    sizes: ["XS", "S", "M", "L"],
    color: "Cream",
    inStock: true,
    href: "/shop/rowan-pleated-slip-dress",
  },
  {
    id: "vesper-alpaca-cardigan",
    indexNumber: "10 / 12",
    name: "Vesper Alpaca Cardigan",
    category: "KNITWEAR",
    price: 178,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1X6qeY8c6Hhs4ldAsv9GalUl0M0aNmasLcW2ZNke6TLUhY6nRe05IKY-oB6klpU4DzaqjJbKo8bFsG4AtLNXyy0Hkm50l9h4pc8xYB7I73VzDRMdqgKKofAm5EM42T4E7Bpmv9A_KQTpz-dyoWDyvR8z6n9WbmyK5fHP6t1UxBpvklwkW3oFbFYBgFOt7sml9-IKOc_NUsndJL_Kl_XWcyrALz_OzvTFRJ1LpbTfCO2AXLNKjV_YtrPsHg",
    imageAlt: "Vesper Alpaca Cardigan in sand melange",
    sizes: ["XS", "S", "M", "L"],
    color: "Sand",
    inStock: true,
    href: "/shop/vesper-alpaca-cardigan",
  },
  {
    id: "kora-belted-wool-trench",
    indexNumber: "11 / 12",
    name: "Kora Belted Wool Trench",
    category: "OUTERWEAR",
    price: 295,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1Uw4R_mh7dDwtihMR40LJD5Y4FcRCT87YXljf3wJDnvOvf9RGlAa0qgxoP9lHgLrn2ttBMfU-Wq9kwcHkAzyvOAzN6HIwfnBufoPETptYNbRFndaZ_VgsQlj2E-tvyZXNlT1uYgLb1977YPpJ71XL3gjYY-QlqwMOIQCB_66NckgU5CaAtHjlwF2zD1xSkPDQec_3DWhW2MvoFFYG5rQMI7GDAnlqIEBxoxLVgR-l2jtTmF_FYTamGDNP0",
    imageAlt: "Kora Belted Wool Trench in heavyweight virgin wool",
    sizes: ["XS", "S", "M", "L"],
    color: "Charcoal",
    inStock: true,
    href: "/shop/kora-belted-wool-trench",
  },
  {
    id: "arlo-mini-structured-pouch",
    indexNumber: "12 / 12",
    name: "Arlo Mini Structured Pouch",
    category: "ACCESSORIES",
    price: 98,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1UIrlPdVxr1S6rfQRllx7NgdfdWSeeT3GzHC2q2FOkZk7p6MiFjKMP5Ka_o46StWxn8Q1n3Fy-ZUY9o6WMgdb831qASCOhv0s3WrNX1FeAxXuLwpsgzMPsD473hfF0Kd-Zk41vo3a2EJCzXSW-FV4pJb4cK4MGWR55XTaNhlolHEXOA-nyqsY7GnL7VDPFLxxb_X6gqzboueeGEVWfWVVYlru4DcWNWPdZ7yXP_336b8WaNhRcqfvcNJVwe",
    imageAlt: "Arlo Mini Structured Pouch in vegetable-tanned olive leather",
    sizes: ["ONE SIZE"],
    color: "Olive",
    inStock: true,
    href: "/shop/arlo-mini-structured-pouch",
  },
];
