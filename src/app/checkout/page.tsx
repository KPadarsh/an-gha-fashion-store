"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Check, ShieldCheck, Lock, ArrowLeft, Truck } from "lucide-react";

export default function CheckoutPage() {
  const { cart, subtotal, totalItems, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Morgan",
    email: "alex.morgan@example.com",
    address: "742 Evergreen Terrace",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    cardNumber: "•••• •••• •••• 4242",
    cardExp: "12/28",
    cardCvc: "888",
  });

  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 12.0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <main className="min-h-screen bg-[#FAF9F6] py-16">
        <div className="angha-container max-w-lg mx-auto text-center bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-md">
          <div className="w-16 h-16 bg-[#1B3B2B] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Thank you for your order, {formData.firstName}. We&apos;ve sent a confirmation email to{" "}
            <span className="font-semibold text-gray-800">{formData.email}</span>.
          </p>

          <div className="p-4 bg-gray-50 rounded-2xl text-left text-xs space-y-1.5 mb-8 border border-gray-100">
            <div className="flex justify-between font-medium text-gray-600">
              <span>Order Number:</span>
              <span className="font-mono font-bold text-gray-900">#AG-88294</span>
            </div>
            <div className="flex justify-between font-medium text-gray-600">
              <span>Shipping to:</span>
              <span className="text-gray-900">{formData.address}, {formData.city}</span>
            </div>
            <div className="flex justify-between font-medium text-gray-600">
              <span>Estimated Delivery:</span>
              <span className="text-emerald-700 font-bold">2-4 Business Days</span>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1B3B2B] text-white font-sans text-sm font-semibold rounded-full hover:bg-[#132A1F] transition-colors w-full"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] py-8 sm:py-12">
      <div className="angha-container max-w-5xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Store</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Contact Information
                </h2>
                <p className="text-xs text-gray-500 mb-4">
                  We&apos;ll use this to send order updates & tracking.
                </p>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email address"
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1B3B2B]"
                />
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="First name"
                    className="text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1B3B2B]"
                  />
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Last name"
                    className="text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1B3B2B]"
                  />
                </div>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Street address"
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 mb-3 focus:outline-none focus:border-[#1B3B2B]"
                />
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="City"
                    className="text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1B3B2B]"
                  />
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="State"
                    className="text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1B3B2B]"
                  />
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    placeholder="ZIP Code"
                    className="text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1B3B2B]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Payment</h2>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>256-Bit Encrypted</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                  <input
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    placeholder="Card number"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#1B3B2B]"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={formData.cardExp}
                      onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                      placeholder="MM/YY"
                      className="text-sm px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#1B3B2B]"
                    />
                    <input
                      type="text"
                      required
                      value={formData.cardCvc}
                      onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                      placeholder="CVC"
                      className="text-sm px-4 py-2.5 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#1B3B2B]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1B3B2B] text-white rounded-full font-bold text-base hover:bg-[#132A1F] transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-5 h-5 text-[#A7F3D0]" />
                <span>Pay ${(total || 0).toFixed(2)} & Place Order</span>
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Order Summary ({totalItems})</h2>

            <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto space-y-3">
              {cart.length === 0 ? (
                <p className="text-sm text-gray-500 py-4">No items in your cart.</p>
              ) : (
                cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="flex gap-3 pt-3">
                    <div className="relative w-16 h-16 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                      <Image
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-xs">
                      <p className="font-bold text-gray-900 truncate">{item.product.name}</p>
                      <p className="text-gray-500">Qty: {item.quantity} | {item.selectedColor}</p>
                      <p className="font-semibold text-[#1B3B2B] mt-1">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-2 text-sm pt-4 border-t border-gray-100">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-emerald-700">
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated Tax (8%)</span>
                <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-100">
                <span>Total</span>
                <span className="text-[#1B3B2B]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
