"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Heart,
  Truck,
  RotateCcw,
  MessageSquare,
  X,
  Check,
  ChevronDown,
  ChevronUp,
  Mail,
} from "lucide-react";
import {
  ProductColorOption,
  SizeMeasurement,
  AccordionSection,
} from "@/data/productDetailData";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductInfoPanelProps {
  productId?: string;
  category?: string;
  categoryLine?: string;
  stockStatus?: string;
  name: string;
  price: number;
  currency?: string;
  edition?: string;
  description: string;
  colors: ProductColorOption[];
  sizes: string[];
  measurements: SizeMeasurement[];
  accordions: AccordionSection[];
  imageUrl?: string;
}

export function ProductInfoPanel({
  productId = "elara-draped-dress",
  category = "DRESSES",
  categoryLine = "ARCHIVE DRESSES · SS26",
  stockStatus = "IN STOCK · READY TO SHIP",
  name,
  price,
  currency = "USD",
  edition = "EDITION OF 40",
  description,
  colors,
  sizes,
  measurements,
  accordions,
  imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCbLubd2SxrTCa0Lvo_EFbTuLU5__M8_8WS0jcGpGI8JyTIyEXEQ3xMPlQ-DyA9hxs79vaVQghvjvdjV9IZldemcbxh1xECtiknxj2l6qnotZVbnLfoWupoQM7YTJ1RF2HTS0CUmL4CPa3MjCvOKzJrshkK3EPdKEBCHBFi6XN-840RO_yMAyjhC3UDrO2VkF0-JbKOU4keSNlLk1f2qtlc3bbXepXN7JRewkU_tMRSHapbfqLtE1LIvg",
}: ProductInfoPanelProps) {
  const { addItem } = useCart();
  const { isWishlisted: checkWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = checkWishlist(productId);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name || "TERRACOTTA");
  const [selectedSize, setSelectedSize] = useState(sizes[1] || sizes[0] || "S");
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    mat: true, // First accordion expanded by default
  });

  const handleAlterQty = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(10, prev + delta)));
  };


  const handleAddToBag = () => {
    addItem({
      productId,
      name,
      category,
      specimenNumber: "SPECIMEN N° 01",
      price,
      currency,
      color: selectedColor,
      size: selectedSize,
      fabricDetails: "100% RAW SILK CHARMEUSE",
      careDetails: "DRY CLEAN ONLY",
      imageUrl,
      quantity,
      href: `/shop/${productId}`,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2500);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalFormattedPrice = `$${price * quantity}`;

  const getSizeDetail = (s: string) => {
    switch (s) {
      case "XS":
        return "XS (EU 34 / US 2)";
      case "S":
        return "S (EU 36 / US 4)";
      case "M":
        return "M (EU 38 / US 6)";
      case "L":
        return "L (EU 40 / US 8)";
      case "XL":
        return "XL (EU 42 / US 10)";
      default:
        return s;
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 lg:sticky lg:top-20">
      {/* 1. Category, Title & Pricing */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="font-sans text-[11px] tracking-[0.2em] text-[#C17A63] uppercase font-semibold">
            {categoryLine}
          </span>
          <span className="font-mono text-[11px] text-[#7A7168] uppercase tracking-wider">
            {edition}
          </span>
        </div>

        <h1 className="font-serif text-[2rem] md:text-4xl text-[#2B2420] font-normal tracking-tight leading-tight mt-0.5">
          {name}
        </h1>

        <div className="flex items-baseline justify-between pt-1 border-b border-[#2B2420]/10 pb-3">
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans text-xl font-medium tracking-wide text-[#2B2420]">
              ${price}
            </span>
            <span className="font-sans text-[12px] text-[#7A7168] font-light">
              {currency}
            </span>
          </div>
          <span className="font-sans text-[10px] text-[#5C5A3E] font-semibold uppercase tracking-widest bg-[#5C5A3E]/10 border border-[#5C5A3E]/30 px-2 py-0.5">
            {stockStatus}
          </span>
        </div>

        <p className="font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-[#7A7168] pt-2">
          {description}
        </p>
      </div>

      {/* 2. Curated Color Swatches */}
      <div className="flex flex-col gap-2 pt-1">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em]">
          <span className="text-[#2B2420]">
            COLOR: <strong className="font-semibold text-[#C17A63]">{selectedColor}</strong>
          </span>
          <span className="font-mono text-[11px] text-[#7A7168]">
            {colors.length} TONALITIES
          </span>
        </div>

        <div className="flex items-center gap-3 pt-0.5" role="radiogroup" aria-label="Curated Color Selections">
          {colors.map((c) => {
            const isActive = selectedColor === c.name;
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(c.name)}
                aria-label={`Select color ${c.name}`}
                className={`w-8 h-8 rounded-none transition-all cursor-pointer ${
                  isActive
                    ? "ring-2 ring-[#C17A63] ring-offset-2 ring-offset-[#FAF6F1]"
                    : "ring-0 ring-offset-2 ring-offset-[#FAF6F1] hover:ring-1 hover:ring-[#2B2420]"
                } ${c.isLight ? "border border-[#2B2420]/20" : ""}`}
                style={{ backgroundColor: c.hex }}
              />
            );
          })}
        </div>
      </div>

      {/* 3. Rectangular Size Buttons */}
      <div className="flex flex-col gap-2 pt-1">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em]">
          <span className="text-[#2B2420]">
            SIZE: <strong className="font-semibold text-[#2B2420]">{getSizeDetail(selectedSize)}</strong>
          </span>
          <button
            type="button"
            onClick={() => setIsSizeGuideOpen(true)}
            className="text-[11px] uppercase tracking-[0.14em] text-[#C17A63] hover:underline underline-offset-4 flex items-center gap-1 cursor-pointer"
          >
            <span>Size Guide →</span>
          </button>
        </div>

        <div className="grid grid-cols-5 gap-2 pt-0.5" role="radiogroup" aria-label="Size matrix">
          {sizes.map((s) => {
            const isSelected = selectedSize === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSize(s)}
                className={`min-h-[44px] flex items-center justify-center font-sans text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#2B2420] text-[#FAF6F1] border border-[#2B2420]"
                    : "bg-[#FAF6F1] text-[#2B2420] border border-[#2B2420]/20 hover:bg-[#F5EFE8]"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>

        <span className="font-sans text-[12px] text-[#7A7168] pt-0.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5C5A3E]" />
          Model is 178cm / 5&apos;10&quot; wearing size S. Unhurried fluid fit.
        </span>
      </div>

      {/* 4. Quantity Selector & ADD TO BAG CTA & Archive Save */}
      <div className="flex flex-col gap-2.5 pt-2">
        <div className="flex items-stretch gap-2">
          {/* Stepped quantity selector '− 01 +' */}
          <div className="flex items-center bg-[#F5EFE8] border border-[#2B2420]/20 h-[48px] px-1">
            <button
              type="button"
              onClick={() => handleAlterQty(-1)}
              aria-label="Decrease quantity"
              className="w-10 h-full flex items-center justify-center text-[#2B2420] hover:text-[#C17A63] active:scale-90 font-medium text-lg cursor-pointer transition-colors"
            >
              −
            </button>
            <span className="font-mono text-sm px-2 font-medium tracking-wider text-[#2B2420]">
              {quantity < 10 ? `0${quantity}` : quantity}
            </span>
            <button
              type="button"
              onClick={() => handleAlterQty(1)}
              aria-label="Increase quantity"
              className="w-10 h-full flex items-center justify-center text-[#2B2420] hover:text-[#C17A63] active:scale-90 font-medium text-lg cursor-pointer transition-colors"
            >
              +
            </button>
          </div>

          {/* Primary Add CTA */}
          <button
            type="button"
            onClick={handleAddToBag}
            className={`flex-1 min-h-[48px] font-sans text-xs tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-colors duration-200 active:scale-[0.99] px-4 shadow-xs font-semibold cursor-pointer ${
              isAdded
                ? "bg-[#C17A63] text-[#FAF6F1]"
                : "bg-[#2B2420] hover:bg-[#C17A63] text-[#FAF6F1]"
            }`}
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.75} />
            <span>
              {isAdded ? "SPECIMEN RESERVED ✓" : `ADD TO BAG — ${totalFormattedPrice}`}
            </span>
          </button>
        </div>

        {/* Wishlist trigger */}
        <button
          type="button"
          onClick={() => toggleWishlist(productId)}
          className={`w-full py-2 flex items-center justify-center gap-1.5 font-sans text-[11px] tracking-[0.14em] uppercase transition-colors cursor-pointer ${
            isWishlisted
              ? "text-[#C17A63]"
              : "text-[#7A7168] hover:text-[#2B2420]"
          }`}
        >
          <Heart
            className={`w-3.5 h-3.5 ${
              isWishlisted ? "fill-[#C17A63] text-[#C17A63]" : "text-[#7A7168]"
            }`}
          />
          <span>
            {isWishlisted
              ? "IN YOUR PERMANENT ARCHIVE"
              : "SAVE TO PERMANENT ARCHIVE"}
          </span>
        </button>
      </div>

      {/* 5. 3 Quiet Trust Notes */}
      <div className="grid grid-cols-1 gap-2 pt-2 border-t border-[#2B2420]/10">
        <div className="p-3 bg-[#F5EFE8] flex items-start gap-2.5 border border-[#2B2420]/10">
          <Truck className="w-4 h-4 text-[#C17A63] shrink-0 mt-0.5" strokeWidth={1.75} />
          <div className="flex flex-col">
            <span className="font-sans text-[11px] text-[#2B2420] uppercase tracking-wider font-semibold">
              Complimentary Worldwide Express Dispatch
            </span>
            <span className="font-sans text-[12px] text-[#7A7168]">
              Carbon-neutral courier packaging delivered in 2–4 business days.
            </span>
          </div>
        </div>

        <div className="p-3 bg-[#F5EFE8] flex items-start gap-2.5 border border-[#2B2420]/10">
          <RotateCcw className="w-4 h-4 text-[#5C5A3E] shrink-0 mt-0.5" strokeWidth={1.75} />
          <div className="flex flex-col">
            <span className="font-sans text-[11px] text-[#2B2420] uppercase tracking-wider font-semibold">
              30-Day Quiet Return Window
            </span>
            <span className="font-sans text-[12px] text-[#7A7168]">
              Includes prepaid reusable garment return packaging and concierge booking.
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsConciergeOpen(true)}
          className="p-3 bg-[#F5EFE8] flex items-start gap-2.5 border border-[#2B2420]/10 cursor-pointer hover:bg-[#EDE5DB] text-left transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#7A7168] shrink-0 mt-0.5" strokeWidth={1.75} />
          <div className="flex flex-col">
            <span className="font-sans text-[11px] text-[#2B2420] uppercase tracking-wider font-semibold">
              Atelier Concierge Assistance
            </span>
            <span className="font-sans text-[12px] text-[#7A7168]">
              Direct fitting dialogue with our senior stylist in Paris &amp; Milano.
            </span>
          </div>
        </button>
      </div>

      {/* 6. Editorial Accordions: SEC 01–04 */}
      <section aria-label="Product Specifications" className="pt-2 flex flex-col gap-2">
        <div className="flex items-center justify-between pb-1">
          <span className="font-sans text-[11px] tracking-[0.2em] text-[#2B2420] uppercase font-semibold">
            GARMENT SPECIFICATION INDEX
          </span>
          <span className="font-mono text-[11px] text-[#7A7168]">
            SEC 01–04
          </span>
        </div>

        {accordions.map((acc) => {
          const isOpen = !!openAccordions[acc.id];
          return (
            <div
              key={acc.id}
              className="bg-[#FAF6F1] border border-[#2B2420]/15"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(acc.id)}
                className="w-full min-h-[48px] px-3.5 flex items-center justify-between text-left focus:outline-none cursor-pointer hover:text-[#C17A63] transition-colors"
              >
                <span className="flex items-baseline gap-2">
                  <span className="font-mono text-[12px] text-[#C17A63] font-medium">
                    {acc.index}
                  </span>
                  <span className="font-sans text-[12px] text-[#2B2420] uppercase tracking-wider font-semibold">
                    {acc.title}
                  </span>
                </span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#7A7168]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#7A7168]" />
                )}
              </button>

              {isOpen && (
                <div className="px-3.5 pb-3.5 pt-1 flex flex-col gap-1.5 font-sans text-[13px] text-[#7A7168] border-t border-[#2B2420]/10 leading-relaxed animate-in fade-in duration-200">
                  <p>{acc.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 7. Size Guide Modal Drawer */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 bg-[#211a16]/40 backdrop-blur-xs flex items-end justify-center animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[#FAF6F1] p-5 flex flex-col gap-4 shadow-2xl border-t border-[#2B2420]/20 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[10px] tracking-[0.2em] text-[#C17A63] uppercase font-semibold">
                ARCHIVE FIT CALIBRATION
              </span>
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(false)}
                aria-label="Close size guide"
                className="w-8 h-8 flex items-center justify-center text-[#2B2420] hover:text-[#C17A63] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-0.5">
              <h3 className="font-serif text-xl text-[#2B2420]">Size Specifications</h3>
              <p className="font-sans text-[12px] text-[#7A7168]">
                Measurements captured flat in centimeters and inches.
              </p>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-left font-sans text-[12px] border border-[#2B2420]/15">
                <thead className="bg-[#F5EFE8] text-[#2B2420] text-[11px] uppercase font-semibold">
                  <tr>
                    <th className="p-2 border-b border-[#2B2420]/15">Size</th>
                    <th className="p-2 border-b border-[#2B2420]/15">Bust</th>
                    <th className="p-2 border-b border-[#2B2420]/15">Waist</th>
                    <th className="p-2 border-b border-[#2B2420]/15">Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2B2420]/10 text-[#7A7168]">
                  <tr className="bg-[#FAF6F1]">
                    <td className="p-2 font-semibold text-[#2B2420]">XS</td>
                    <td className="p-2">82–86 cm (33&quot;)</td>
                    <td className="p-2">64–68 cm (26&quot;)</td>
                    <td className="p-2">124 cm (49&quot;)</td>
                  </tr>
                  <tr className="bg-[#F5EFE8]/50">
                    <td className="p-2 font-semibold text-[#2B2420]">S</td>
                    <td className="p-2">86–90 cm (35&quot;)</td>
                    <td className="p-2">68–72 cm (28&quot;)</td>
                    <td className="p-2">126 cm (50&quot;)</td>
                  </tr>
                  <tr className="bg-[#FAF6F1]">
                    <td className="p-2 font-semibold text-[#2B2420]">M</td>
                    <td className="p-2">90–94 cm (37&quot;)</td>
                    <td className="p-2">72–76 cm (30&quot;)</td>
                    <td className="p-2">128 cm (50.5&quot;)</td>
                  </tr>
                  <tr className="bg-[#F5EFE8]/50">
                    <td className="p-2 font-semibold text-[#2B2420]">L</td>
                    <td className="p-2">94–98 cm (39&quot;)</td>
                    <td className="p-2">76–80 cm (31.5&quot;)</td>
                    <td className="p-2">130 cm (51&quot;)</td>
                  </tr>
                  <tr className="bg-[#FAF6F1]">
                    <td className="p-2 font-semibold text-[#2B2420]">XL</td>
                    <td className="p-2">98–104 cm (41&quot;)</td>
                    <td className="p-2">80–86 cm (33.5&quot;)</td>
                    <td className="p-2">131 cm (51.5&quot;)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              type="button"
              onClick={() => setIsSizeGuideOpen(false)}
              className="w-full min-h-[44px] bg-[#F5EFE8] text-[#2B2420] text-xs font-semibold uppercase tracking-wider border border-[#2B2420]/20 hover:bg-[#EDE5DB] cursor-pointer"
            >
              RETURN TO GARMENT
            </button>
          </div>
        </div>
      )}

      {/* 8. Atelier Concierge Modal Drawer */}
      {isConciergeOpen && (
        <div className="fixed inset-0 z-50 bg-[#211a16]/40 backdrop-blur-xs flex items-end justify-center animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[#FAF6F1] p-5 flex flex-col gap-4 shadow-2xl border-t border-[#2B2420]/20">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[10px] tracking-[0.2em] text-[#C17A63] uppercase font-semibold">
                PARIS / MILANO CONCIERGE
              </span>
              <button
                type="button"
                onClick={() => setIsConciergeOpen(false)}
                aria-label="Close concierge dialog"
                className="w-8 h-8 flex items-center justify-center text-[#2B2420] hover:text-[#C17A63] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl text-[#2B2420]">Atelier Guidance</h3>
              <p className="font-sans text-[12px] text-[#7A7168]">
                Our senior stylist is available daily for tailoring inquiries, custom fits, or styling appointments.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href="mailto:concierge@angha.com"
                className="w-full min-h-[44px] bg-[#2B2420] text-[#FAF6F1] font-sans text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#C17A63] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL AN ATELIER STYLIST</span>
              </a>
              <button
                type="button"
                onClick={() => setIsConciergeOpen(false)}
                className="w-full min-h-[44px] bg-[#F5EFE8] text-[#2B2420] font-sans text-xs uppercase tracking-wider border border-[#2B2420]/20 hover:bg-[#EDE5DB] cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. Toast Notification Pill for Cart Feedback */}
      {isAdded && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#2B2420] text-[#FAF6F1] px-4 py-2.5 shadow-xl flex items-center gap-2 font-sans text-[11px] uppercase tracking-wider border border-[#FAF6F1]/20 animate-in fade-in slide-in-from-top-4 duration-300">
          <Check className="w-4 h-4 text-[#C17A63]" />
          <span>Added to Archival Bag [{quantity}]</span>
        </div>
      )}

      {/* 10. Sticky Mobile Buy Bar: Fixed bottom bar on mobile viewports */}
      <aside
        id="sticky-commerce-bar"
        className="fixed bottom-0 inset-x-0 z-40 bg-[#FAF6F1]/95 backdrop-blur-md px-4 py-2.5 border-t border-[#2B2420]/15 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] flex md:hidden items-center justify-between"
      >
        <div className="flex flex-col min-w-0 pr-2">
          <span className="font-serif text-[13px] text-[#2B2420] font-normal truncate">
            {name} · ${price}
          </span>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#7A7168]">
            <span className="text-[#C17A63] font-medium">SIZE {selectedSize}</span>
            <span>•</span>
            <span className="text-[#5C5A3E] font-medium">{selectedColor}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAddToBag}
          className="min-h-[44px] px-5 bg-[#2B2420] hover:bg-[#C17A63] text-[#FAF6F1] font-sans text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shrink-0 active:scale-95 shadow-xs cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>ADD TO BAG</span>
        </button>
      </aside>
    </div>
  );
}
