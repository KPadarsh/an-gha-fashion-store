"use client";

import React, { useState } from "react";
import { useOrder } from "@/context/OrderContext";
import { OrderConfirmationHeader } from "./OrderConfirmationHeader";
import { OrderProtocolBar } from "./OrderProtocolBar";
import { OrderSuccessHero } from "./OrderSuccessHero";
import { OrderTimeline } from "./OrderTimeline";
import { OrderItemsMatrix } from "./OrderItemsMatrix";
import { OrderDispatchSidebar } from "./OrderDispatchSidebar";
import { OrderRecommendations } from "./OrderRecommendations";
import { OrderNewsletterAssurance } from "./OrderNewsletterAssurance";
import { OrderUnavailableFallback } from "./OrderUnavailableFallback";
import { OrderConfirmationFooter } from "./OrderConfirmationFooter";

export function OrderConfirmationPageView() {
  const { currentOrder } = useOrder();
  const [isConfirmedState, setIsConfirmedState] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F5] text-[#211A16] antialiased">
      {/* 1. Header */}
      <OrderConfirmationHeader />

      {/* 2. Main Flow */}
      <main className="w-full pt-20 bg-[#FFF8F5] min-h-screen flex-1">
        <div className="flex flex-col w-full">
          {/* Subtle Prototype State Switcher Rail */}
          <OrderProtocolBar
            isConfirmedState={isConfirmedState}
            onToggleState={(isConfirmed) => setIsConfirmedState(isConfirmed)}
          />

          {isConfirmedState ? (
            /* Main Confirmed Viewport Flow */
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
                {/* 1. SUCCESS MOMENT */}
                <OrderSuccessHero order={currentOrder} />

                {/* 2. ORDER PROGRESS TIMELINE */}
                <OrderTimeline order={currentOrder} />

                {/* 3. TWO-COLUMN MAIN CONTENT (60% / 40%) */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
                  {/* Left Column (60% / 7 cols): Purchased Pieces & Financials */}
                  <div className="lg:col-span-7">
                    <OrderItemsMatrix order={currentOrder} />
                  </div>

                  {/* Right Column (40% / 5 cols): Dispatch, Payment, Actions */}
                  <div className="lg:col-span-5">
                    <OrderDispatchSidebar order={currentOrder} />
                  </div>
                </section>

                {/* 4. CONTINUE EXPLORING (3 curated pieces) */}
                <OrderRecommendations />

                {/* 5. NEWSLETTER & CLIENT CONCIERGE ASSURANCE */}
                <OrderNewsletterAssurance />
              </div>
            </div>
          ) : (
            /* Fallback State */
            <OrderUnavailableFallback
              orderId={currentOrder.id}
              onReset={() => setIsConfirmedState(true)}
            />
          )}
        </div>
      </main>

      {/* 3. Footer */}
      <OrderConfirmationFooter />
    </div>
  );
}
