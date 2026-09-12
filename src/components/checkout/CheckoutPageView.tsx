"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sliders, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";
import { CheckoutProgressRail } from "@/components/checkout/CheckoutProgressRail";
import { CheckoutForm, CheckoutFormData } from "@/components/checkout/CheckoutForm";
import { CheckoutOrderSummary } from "@/components/checkout/CheckoutOrderSummary";
import { CheckoutEmptyState } from "@/components/checkout/CheckoutEmptyState";
import { CheckoutFooter } from "@/components/checkout/CheckoutFooter";

export function CheckoutPageView() {
  const { items, totalCount } = useCart();
  const [isValidationStateActive, setIsValidationStateActive] = useState(false);
  const [simulatedEmpty, setSimulatedEmpty] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [formData, setFormData] = useState<CheckoutFormData>({
    email: "amrita.sen@atelier-archive.com",
    firstName: "Amrita",
    lastName: "Sen",
    phone: "98470 12345",
    country: "IN",
    address: "48/12 Fort Nagar, Heritage Quarter",
    apartment: "",
    city: "Kochi",
    state: "Kerala",
    pin: "682001",
    hasSpecialInstructions: false,
    specialInstructions: "",
    deliveryMethod: "standard",
    paymentMethod: "card",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "AMRITA SEN",
    billingSameAsShipping: true,
    upiId: "",
  });

  const handleToggleValidation = () => {
    setIsValidationStateActive((prev) => !prev);
    if (!isValidationStateActive) {
      setFormData((prev) => ({ ...prev, pin: "6820" }));
    } else {
      setFormData((prev) => ({ ...prev, pin: "682001" }));
    }
  };

  const handlePlaceOrder = () => {
    setOrderConfirmed(true);
    alert("Thank you. Your bespoke atelier order simulation has been received.");
  };

  const isCartEmpty = items.length === 0 || simulatedEmpty;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F1]">
      {/* Header */}
      <CheckoutHeader />

      <main className="flex-1 w-full pt-14 md:pt-20">
        {/* Interactive View State Bar (Atelier Utility Bar - Desktop) */}
        <aside
          aria-label="Atelier simulation controls"
          className="w-full bg-[#F9EBE5] border-b border-[#2B2420]/10 px-4 md:px-12 py-2 flex flex-wrap items-center justify-between gap-3 text-[#2B2420]"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#894B37] inline-block" />
            <span className="font-sans text-[10px] md:text-[11px] font-semibold tracking-[0.18em] text-[#2B2420] uppercase">
              ATELIER CHECKOUT CONDUIT
            </span>
            <span className="text-[#7A7168] text-[11px]">•</span>
            <span className="font-mono text-[10px] md:text-xs text-[#7A7168]">
              SESSION REF: #AG-88201-IND
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSimulatedEmpty(false)}
                className={`px-2.5 py-1 font-sans text-[10px] font-semibold tracking-widest uppercase transition-all cursor-pointer ${
                  !simulatedEmpty
                    ? "bg-[#2B2420] text-[#FAF6F1]"
                    : "bg-[#F3E5DF] text-[#7A7168] hover:text-[#2B2420]"
                }`}
              >
                ACTIVE ({totalCount})
              </button>
              <button
                type="button"
                onClick={() => setSimulatedEmpty(true)}
                className={`px-2.5 py-1 font-sans text-[10px] font-semibold tracking-widest uppercase transition-all cursor-pointer ${
                  simulatedEmpty
                    ? "bg-[#2B2420] text-[#FAF6F1]"
                    : "bg-[#F3E5DF] text-[#7A7168] hover:text-[#2B2420]"
                }`}
              >
                EMPTY
              </button>
            </div>

            <button
              type="button"
              onClick={handleToggleValidation}
              className="flex items-center gap-1 text-[#894B37] hover:text-[#2B2420] font-sans text-[10px] font-semibold tracking-widest uppercase transition-colors cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">TOGGLE VALIDATION</span>
            </button>
          </div>
        </aside>

        {/* Micro Return Link Bar (Mobile Only) */}
        <div className="px-4 py-2 flex md:hidden items-center justify-between border-b border-[#2B2420]/5">
          <Link
            href="/cart"
            className="flex items-center gap-1 text-[#2B2420] hover:text-[#894B37] transition-colors py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em]">
              BAG
            </span>
          </Link>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#894B37] animate-pulse" />
            <span className="font-sans text-[10px] font-semibold uppercase text-[#7A7168] tracking-widest">
              ATELIER DISPATCH
            </span>
          </div>
        </div>

        {isCartEmpty ? (
          <CheckoutEmptyState />
        ) : (
          <div className="w-full px-4 md:px-12 pt-4 md:pt-6 pb-20 lg:pb-28 max-w-[1440px] mx-auto">
            {/* Archival Progress Stepper */}
            <CheckoutProgressRail />

            {/* Mobile Collapsible Order Summary Drawer (rendered above form on < lg) */}
            <CheckoutOrderSummary
              deliveryMethod={formData.deliveryMethod}
              onPlaceOrder={handlePlaceOrder}
            />

            {/* Main Asymmetric Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Form Sections (7 cols / 60%) */}
              <section className="lg:col-span-7">
                <CheckoutForm
                  formData={formData}
                  setFormData={setFormData}
                  isValidationStateActive={isValidationStateActive}
                  onPlaceOrder={handlePlaceOrder}
                />
              </section>

              {/* Right Column: Sticky Order Summary (5 cols / 40% - desktop only) */}
              <section className="hidden lg:block lg:col-span-5">
                <CheckoutOrderSummary
                  deliveryMethod={formData.deliveryMethod}
                  onPlaceOrder={handlePlaceOrder}
                />
              </section>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <CheckoutFooter />
    </div>
  );
}
