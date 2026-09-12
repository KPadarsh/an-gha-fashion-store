"use client";

import React, { createContext, useContext, useState } from "react";

export interface CartItem {
  id: string; // Unique cart line item identifier (e.g. `${productId}-${size}-${color}`)
  productId: string;
  name: string;
  category: string;
  specimenNumber: string;
  price: number;
  currency: string;
  color: string;
  size: string;
  fabricDetails: string;
  careDetails?: string;
  imageUrl: string;
  quantity: number;
  href: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  subtotal: number;
  totalCount: number;
}

// Initial structured mock items matching the authoritative Stitch Cart design
const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: "elara-draped-dress-M-TERRACOTTA",
    productId: "elara-draped-dress",
    name: "Elara Draped Dress",
    category: "DRESSES",
    specimenNumber: "SPECIMEN N° 01",
    price: 128,
    currency: "USD",
    color: "TERRACOTTA",
    size: "M",
    fabricDetails: "100% RAW SILK CHARMEUSE",
    careDetails: "DRY CLEAN ONLY",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbLubd2SxrTCa0Lvo_EFbTuLU5__M8_8WS0jcGpGI8JyTIyEXEQ3xMPlQ-DyA9hxs79vaVQghvjvdjV9IZldemcbxh1xECtiknxj2l6qnotZVbnLfoWupoQM7YTJ1RF2HTS0CUmL4CPa3MjCvOKzJrshkK3EPdKEBCHBFi6XN-840RO_yMAyjhC3UDrO2VkF0-JbKOU4keSNlLk1f2qtlc3bbXepXN7JRewkU_tMRSHapbfqLtE1LIvg",
    quantity: 1,
    href: "/shop/elara-draped-dress",
  },
  {
    id: "solis-ribbed-knit-sweater-S-MOSS GREEN",
    productId: "solis-ribbed-knit-sweater",
    name: "Solis Ribbed Knit Sweater",
    category: "KNITWEAR",
    specimenNumber: "SPECIMEN N° 02",
    price: 164,
    currency: "USD",
    color: "MOSS GREEN",
    size: "S",
    fabricDetails: "100% UNTREATED MERINO WOOL",
    careDetails: "ARCHIVAL WEAVE",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiQBen1YG1GICG6Tlx_7EDeSiGGoZO74uOFI2c94Wen5K-wNv-KyWWzVRbXqGDlV_vZUdK090_TANQvKTVMurxd4GrN6wWveyJrCv15beYvPHKzgkyAU_D_y9mbM5upXyQSXI5959dqvPULquAfDnI3ITUus6OxpcOGhVQgwr3AirYdHm9fuaDIgw9fenhAvA6urAqyUM7A2pACMTz92JnYHb3vmhLcLYzUoN9mwsN-QhabPBm0NKrNA",
    quantity: 1,
    href: "/shop/solis-ribbed-knit-sweater",
  },
];

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);

  const addItem = (newItem: Omit<CartItem, "id">) => {
    const lineId = `${newItem.productId}-${newItem.size}-${newItem.color}`;
    setItems((prev) => {
      const existingIdx = prev.findIndex((i) => i.id === lineId);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + newItem.quantity,
        };
        return updated;
      }
      return [{ ...newItem, id: lineId }, ...prev];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        subtotal,
        totalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
