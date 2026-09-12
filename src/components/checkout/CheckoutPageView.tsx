"use client";

import React, { useState } from "react";
import { Sliders } from "lucide-react";
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

  const isCartEmpty = items.length === 0 || simulatedEmpty;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F1]">
      {/* Header */}
      <CheckoutHeader />

      <main className="flex-1 w-full pt-20">
        {/* Interactive View State Bar (Atelier Utility Bar) */}
        <aside
          aria-label="Atelier simulation controls"
          className="w-full bg-[#F9EBE5] border-b border-[#2B2420]/10 px-4 md:px-12 py-2.5 flex flex-wrap items-center justify-between gap-3 text-[#2B2420]"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#894B37] inline-block" />
            <span className="font-sans text-[11px] font-semibold tracking-[0.18em] text-[#2B2420] uppercase">
              ATELIER CHECKOUT CONDUIT
            </span>
            <span className="text-[#7A7168] text-[11px]">•</span>
            <span className="font-sans text-xs text-[#7A7168]">
              SESSION REF: #AG-88201-IND
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSimulatedEmpty(false)}
                className={`px-3 py-1 font-sans text-[10px] font-semibold tracking-widest uppercase transition-all cursor-pointer ${
                  !simulatedEmpty
                    ? "bg-[#2B2420] text-[#FAF6F1]"
                    : "bg-[#F3E5DF] text-[#7A7168] hover:text-[#2B2420]"
                }`}
              >
                ACTIVE CART ({totalCount})
              </button>
              <button
                type="button"
                onClick={() => setSimulatedEmpty(true)}
                className={`px-3 py-1 font-sans text-[10px] font-semibold tracking-widest uppercase transition-all cursor-pointer ${
                  simulatedEmpty
                    ? "bg-[#2B2420] text-[#FAF6F1]"
                    : "bg-[#F3E5DF] text-[#7A7168] hover:text-[#2B2420]"
                }`}
              >
                SIMULATE EMPTY BAG
              </button>
            </div>

            <button
              type="button"
              onClick={handleToggleValidation}
              className="flex items-center gap-1 text-[#894B37] hover:text-[#2B2420] font-sans text-[10px] font-semibold tracking-widest uppercase transition-colors cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>TOGGLE VALIDATION STATE</span>
            </button>
          </div>
        </aside>

        {isCartEmpty ? (
          <CheckoutEmptyState />
        ) : (
          <div className="w-full px-4 md:px-12 pt-6 pb-20 lg:pb-28 max-w-[1440px] mx-auto">
            {/* Archival Progress Stepper */}
            <CheckoutProgressRail />

            {/* Main Asymmetric 60 / 40 Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Form Sections (7 cols / 60%) */}
              <section className="lg:col-span-7">
                <CheckoutForm
                  formData={formData}
                  setFormData={setFormData}
                  isValidationStateActive={isValidationStateActive}
                />
              </section>

              {/* Right Column: Sticky Order Summary (5 cols / 40%) */}
              <section className="lg:col-span-5">
                <CheckoutOrderSummary
                  deliveryMethod={formData.deliveryMethod}
                  onPlaceOrder={() => {
                    alert(
                      "Thank you. Your bespoke atelier order simulation has been received."
                    );
                  }}
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
