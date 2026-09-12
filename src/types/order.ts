export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  category: string;
  specimenNumber: string;
  price: number;
  currency: string;
  color: string;
  size: string;
  fabricDetails?: string;
  careDetails?: string;
  imageUrl: string;
  quantity: number;
  href: string;
}

export interface OrderCustomer {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  pin: string;
  specialInstructions?: string;
}

export interface OrderPayment {
  method: "card" | "upi" | "cod";
  cardLast4?: string;
  cardBrand?: string;
  cardName?: string;
  upiId?: string;
  is3DSecure?: boolean;
  billingSameAsShipping?: boolean;
}

export interface Order {
  id: string; // e.g. "ANGHA-2026-1048"
  ledgerNumber: string; // e.g. "1048"
  date: string; // e.g. "11 September 2026"
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  shippingMethod: "standard" | "express";
  tax: number;
  total: number;
  customer: OrderCustomer;
  payment: OrderPayment;
  status: "confirmed" | "preparing" | "shipped" | "delivered";
}
