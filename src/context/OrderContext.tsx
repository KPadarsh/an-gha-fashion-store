"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Order, OrderItem } from "@/types/order";

export const DEFAULT_ORDER: Order = {
  id: "ANGHA-2026-1048",
  ledgerNumber: "1048",
  date: "11 September 2026",
  items: [
    {
      id: "elara-draped-dress-M-TERRACOTTA",
      productId: "elara-draped-dress",
      name: "Elara Draped Dress",
      category: "Dresses — Archive Specimen 01",
      specimenNumber: "SPECIMEN N° 01",
      price: 128,
      currency: "USD",
      color: "Terracotta",
      size: "M",
      fabricDetails: "100% RAW SILK CHARMEUSE",
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1U5C-p9Kcbo_TvsGqGu4v7VTnaMe2aX9ofE_mGi73aoaFZ7Pfy632gXKNhrPktnSQW-6Nht4X1o84xta-GBvtREadTjOVAww3c-l8A-YgZvBDmlb8GO8vTvLK8_HWu4QkZKjgRmzgvOlY7cLq1uHdl8LnHeA_ER8xNG5BO246YRBP_x9v9jMqAGZc0gBXmcRjPHsGUm2aGuP6WUowN6zuc6Bq2FVRzGdnP3ajP84fgmSZ5OJhpUIpnQkHqJ",
      quantity: 1,
      href: "/shop/elara-draped-dress",
    },
    {
      id: "solis-ribbed-knit-sweater-S-MOSS GREEN",
      productId: "solis-ribbed-knit-sweater",
      name: "Solis Ribbed Knit Sweater",
      category: "Knitwear — Archive Specimen 02",
      specimenNumber: "SPECIMEN N° 02",
      price: 164,
      currency: "USD",
      color: "Moss Green",
      size: "S",
      fabricDetails: "100% UNTREATED MERINO WOOL",
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1X6qeY8c6Hhs4ldAsv9GalUl0M0aNmasLcW2ZNke6TLUhY6nRe05IKY-oB6klpU4DzaqjJbKo8bFsG4AtLNXyy0Hkm50l9h4pc8xYB7I73VzDRMdqgKKofAm5EM42T4E7Bpmv9A_KQTpz-dyoWDyvR8z6n9WbmyK5fHP6t1UxBpvklwkW3oFbFYBgFOt7sml9-IKOc_NUsndJL_Kl_XWcyrALz_OzvTFRJ1LpbTfCO2AXLNKjV_YtrPsHg",
      quantity: 1,
      href: "/shop/solis-ribbed-knit-sweater",
    },
  ],
  subtotal: 292,
  shippingCost: 0,
  shippingMethod: "standard",
  tax: 0,
  total: 292,
  customer: {
    email: "hello@example.com",
    firstName: "Alex",
    lastName: "Morgan",
    phone: "+91 98470 12345",
    country: "India",
    address: "24 Example Street, Heritage Quarter",
    apartment: "",
    city: "Kozhikode",
    state: "Kerala",
    pin: "673001",
  },
  payment: {
    method: "card",
    cardBrand: "VISA",
    cardLast4: "4821",
    cardName: "ALEX MORGAN",
    is3DSecure: true,
    billingSameAsShipping: true,
  },
  status: "confirmed",
};

interface OrderContextType {
  currentOrder: Order;
  createOrder: (
    newOrderData: Omit<Order, "id" | "date" | "ledgerNumber" | "status"> &
      Partial<Pick<Order, "id" | "date" | "ledgerNumber" | "status">>
  ) => Order;
  resetToDefaultOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const STORAGE_KEY = "angha_current_order";

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [currentOrder, setCurrentOrder] = useState<Order>(DEFAULT_ORDER);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCurrentOrder(JSON.parse(saved));
      }
    } catch {
      // ignore localStorage errors in non-browser environments
    }
    setIsHydrated(true);
  }, []);

  const createOrder = (
    newOrderData: Omit<Order, "id" | "date" | "ledgerNumber" | "status"> &
      Partial<Pick<Order, "id" | "date" | "ledgerNumber" | "status">>
  ): Order => {
    const randomLedger = Math.floor(1000 + Math.random() * 9000).toString();
    const orderId = newOrderData.id || `ANGHA-2026-${randomLedger}`;

    const dateStr =
      newOrderData.date ||
      new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date());

    const createdOrder: Order = {
      id: orderId,
      ledgerNumber: newOrderData.ledgerNumber || randomLedger,
      date: dateStr,
      items: newOrderData.items,
      subtotal: newOrderData.subtotal,
      shippingCost: newOrderData.shippingCost,
      shippingMethod: newOrderData.shippingMethod || "standard",
      tax: newOrderData.tax || 0,
      total: newOrderData.total,
      customer: newOrderData.customer,
      payment: newOrderData.payment,
      status: newOrderData.status || "confirmed",
    };

    setCurrentOrder(createdOrder);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(createdOrder));
    } catch {
      // ignore
    }

    return createdOrder;
  };

  const resetToDefaultOrder = () => {
    setCurrentOrder(DEFAULT_ORDER);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <OrderContext.Provider
      value={{
        currentOrder,
        createOrder,
        resetToDefaultOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
