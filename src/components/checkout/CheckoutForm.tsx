"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Check,
  CreditCard,
  HelpCircle,
  ChevronDown,
  Mail,
  Smartphone,
  Truck,
  ShieldCheck,
  Lock,
  ArrowRight,
  ArrowLeft,
  QrCode,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  pin: string;
  hasSpecialInstructions: boolean;
  specialInstructions: string;
  deliveryMethod: "standard" | "express";
  paymentMethod: "card" | "upi" | "cod";
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  cardName: string;
  billingSameAsShipping: boolean;
  upiId: string;
}

interface CheckoutFormProps {
  formData: CheckoutFormData;
  setFormData: React.Dispatch<React.SetStateAction<CheckoutFormData>>;
  isValidationStateActive?: boolean;
  onPlaceOrder?: () => void;
}

export function CheckoutForm({
  formData,
  setFormData,
  isValidationStateActive = false,
  onPlaceOrder,
}: CheckoutFormProps) {
  const { subtotal } = useCart();
  const [upiVerified, setUpiVerified] = useState(false);

  const shippingCost = formData.deliveryMethod === "express" ? 45 : 0;
  const totalAmount = subtotal + shippingCost;

  const handleInputChange = (
    field: keyof CheckoutFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isPinInvalid =
    isValidationStateActive &&
    (formData.pin.length < 6 || !/^\d{6}$/.test(formData.pin));

  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      {/* ================= SECTION 01: INFORMATION & YOUR DETAILS ================= */}
      <div className="bg-[#FFF1EA] md:bg-transparent p-4 sm:p-6 md:p-0 border border-[#2B2420]/10 md:border-none shadow-xs md:shadow-none flex flex-col gap-5 md:gap-6">
        <div className="flex items-baseline justify-between border-b border-[#2B2420]/10 pb-3">
          <div className="flex items-center md:items-baseline gap-2 md:gap-0 md:flex-col">
            <span className="font-mono text-xs text-[#894B37] md:text-[#7A7168] uppercase tracking-widest font-semibold md:font-normal">
              01
            </span>
            <span className="hidden md:inline font-mono text-xs text-[#7A7168] uppercase tracking-widest">
              CATALOGUE STEP 01
            </span>
            <h2 className="font-serif text-lg sm:text-2xl lg:text-3xl text-[#2B2420] font-normal uppercase md:normal-case tracking-wide md:tracking-tight">
              INFORMATION
            </h2>
          </div>
          <span className="font-sans text-[10px] md:text-[11px] font-semibold text-[#7A7168] uppercase tracking-wider">
            REQUIRED *
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email Field with Verified Client Badge */}
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="checkout-email"
                className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
              >
                COMMUNICATION EMAIL <span className="text-[#894B37]">*</span>
              </label>
              <span className="flex items-center gap-1 text-[#5C5A3E] font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest">
                <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED CLIENT
              </span>
            </div>
            <div className="relative flex items-center bg-[#FFFFFF]">
              <input
                id="checkout-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full bg-transparent px-4 py-3 pr-10 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5] transition-colors"
              />
              <Mail className="w-4 h-4 text-[#7A7168] absolute right-3 pointer-events-none" />
            </div>
          </div>

          {/* First Name (Desktop/Responsive) */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="checkout-first-name"
              className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
            >
              FIRST NAME <span className="text-[#894B37]">*</span>
            </label>
            <input
              id="checkout-first-name"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full bg-[#FFFFFF] px-4 py-3 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5] transition-colors"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="checkout-last-name"
              className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
            >
              LAST NAME <span className="text-[#894B37]">*</span>
            </label>
            <input
              id="checkout-last-name"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full bg-[#FFFFFF] px-4 py-3 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5] transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="checkout-phone"
                className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
              >
                SMS DISPATCH NOTICES <span className="text-[#894B37]">*</span>
              </label>
              <span className="font-sans text-[10px] font-semibold text-[#7A7168] uppercase">
                INDIA (+91)
              </span>
            </div>
            <div className="relative flex items-center bg-[#FFFFFF]">
              <span className="absolute left-4 font-sans text-sm text-[#7A7168] select-none font-medium">
                +91
              </span>
              <input
                id="checkout-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full bg-transparent pl-14 pr-10 py-3 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5] transition-colors"
              />
              <Smartphone className="w-4 h-4 text-[#7A7168] absolute right-3 pointer-events-none" />
            </div>
            <span className="font-sans text-xs text-[#7A7168] pt-0.5">
              Used strictly for delivery status notifications &amp; carbon dispatch transit.
            </span>
          </div>

          {/* Opt-in Checkbox (Mobile / Desktop) */}
          <label className="md:col-span-2 flex items-start gap-2.5 cursor-pointer pt-1 group">
            <input
              type="checkbox"
              defaultChecked
              className="mt-1 w-4 h-4 accent-[#894B37] rounded-none cursor-pointer"
            />
            <span className="font-sans text-xs text-[#7A7168] leading-tight select-none">
              Receive limited catalog printings and seasonal preview dispatches.
            </span>
          </label>
        </div>
      </div>

      {/* ================= SECTION 02: DELIVERY SPECIFICATIONS ================= */}
      <div className="bg-[#FFF1EA] md:bg-transparent p-4 sm:p-6 md:p-0 border border-[#2B2420]/10 md:border-none shadow-xs md:shadow-none flex flex-col gap-5 md:gap-6">
        <div className="flex items-baseline justify-between border-b border-[#2B2420]/10 pb-3">
          <div className="flex items-center md:items-baseline gap-2 md:gap-0 md:flex-col">
            <span className="font-mono text-xs text-[#894B37] md:text-[#7A7168] uppercase tracking-widest font-semibold md:font-normal">
              02
            </span>
            <span className="hidden md:inline font-mono text-xs text-[#7A7168] uppercase tracking-widest">
              CATALOGUE STEP 02
            </span>
            <h2 className="font-serif text-lg sm:text-2xl lg:text-3xl text-[#2B2420] font-normal uppercase md:normal-case tracking-wide md:tracking-tight">
              DESTINATION
            </h2>
          </div>
          <span className="font-sans text-[10px] md:text-[11px] font-semibold text-[#7A7168] uppercase tracking-wider">
            DOMESTIC
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Country / Destination Region */}
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label
              htmlFor="checkout-country"
              className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
            >
              COUNTRY / DESTINATION REGION <span className="text-[#894B37]">*</span>
            </label>
            <div className="relative bg-[#FFFFFF]">
              <select
                id="checkout-country"
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="w-full bg-transparent px-4 py-3 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 appearance-none focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5] transition-colors cursor-pointer"
              >
                <option value="IN">India (Domestic Insured Atelier Transit)</option>
                <option value="AE">United Arab Emirates (Direct Courier)</option>
                <option value="UK">United Kingdom (Atelier Freight)</option>
                <option value="US">United States (Carbon Neutral Delivery)</option>
                <option value="FR">France (Paris Archive Distribution)</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#7A7168]" />
            </div>
          </div>

          {/* Street Address */}
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label
              htmlFor="checkout-address"
              className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
            >
              STREET &amp; RESIDENCE SPECIFICATION <span className="text-[#894B37]">*</span>
            </label>
            <input
              id="checkout-address"
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="w-full bg-[#FFFFFF] px-4 py-3 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5] transition-colors"
            />
          </div>

          {/* Apartment / Suite (Optional) */}
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="checkout-apartment"
                className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
              >
                APARTMENT, SUITE, RESIDENCE
              </label>
              <span className="font-sans text-[10px] font-semibold text-[#7A7168] uppercase tracking-wider">
                OPTIONAL
              </span>
            </div>
            <input
              id="checkout-apartment"
              type="text"
              value={formData.apartment}
              onChange={(e) => handleInputChange("apartment", e.target.value)}
              placeholder="Studio 4B, Second Courtyard"
              className="w-full bg-[#FFFFFF] px-4 py-3 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 placeholder:text-[#7A7168]/50 focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5] transition-colors"
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="checkout-city"
              className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
            >
              CITY <span className="text-[#894B37]">*</span>
            </label>
            <input
              id="checkout-city"
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="w-full bg-[#FFFFFF] px-4 py-3 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5] transition-colors"
            />
          </div>

          {/* State / Province */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="checkout-state"
              className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
            >
              STATE / PROVINCE <span className="text-[#894B37]">*</span>
            </label>
            <input
              id="checkout-state"
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              className="w-full bg-[#FFFFFF] px-4 py-3 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5] transition-colors"
            />
          </div>

          {/* Postal / PIN Code */}
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="checkout-pin"
                className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
              >
                POSTAL / PIN CODE <span className="text-[#894B37]">*</span>
              </label>
              <span
                className={`font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest ${
                  isPinInvalid ? "text-[#BA1A1A]" : "text-[#5C5A3E]"
                }`}
              >
                {isPinInvalid ? "ATTENTION REQUIRED" : "VALIDATED"}
              </span>
            </div>
            <input
              id="checkout-pin"
              type="text"
              value={formData.pin}
              onChange={(e) => handleInputChange("pin", e.target.value)}
              className={`w-full px-4 py-3 font-sans text-sm text-[#2B2420] border transition-colors ${
                isPinInvalid
                  ? "bg-[#FFDAD6]/30 border-[#BA1A1A] text-[#93000A]"
                  : "bg-[#FFFFFF] border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5]"
              }`}
            />
            {isPinInvalid && (
              <p className="font-sans text-xs text-[#BA1A1A] pt-0.5">
                Please enter a valid 6-digit PIN code corresponding to postal districts.
              </p>
            )}
          </div>
        </div>

        {/* Special Delivery Instructions Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer select-none pt-1 group">
          <div className="w-5 h-5 shrink-0 mt-0.5 bg-[#FFFFFF] border border-[#2B2420]/20 flex items-center justify-center transition-colors group-hover:bg-[#FAF6F1]">
            <input
              type="checkbox"
              checked={formData.hasSpecialInstructions}
              onChange={(e) =>
                handleInputChange("hasSpecialInstructions", e.target.checked)
              }
              className="sr-only peer"
            />
            {formData.hasSpecialInstructions && (
              <Check className="w-3.5 h-3.5 text-[#894B37]" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-sm text-[#2B2420] font-medium">
              Add discrete delivery notes for the private courier
            </span>
            <span className="font-sans text-xs text-[#7A7168]">
              Safe gate drop, gatehouse sign-off, or custom packaging specifications.
            </span>
          </div>
        </label>

        {/* Collapsible Delivery Instructions Field */}
        {formData.hasSpecialInstructions && (
          <div className="pt-1 animate-in fade-in duration-200">
            <textarea
              value={formData.specialInstructions}
              onChange={(e) =>
                handleInputChange("specialInstructions", e.target.value)
              }
              placeholder="e.g. Leave with building concierge in Archival garment packaging."
              rows={2}
              className="w-full bg-[#FFFFFF] p-4 font-sans text-xs text-[#2B2420] border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420] focus:bg-[#FFF8F5]"
            />
          </div>
        )}

        {/* DELIVERY METHOD SELECTOR */}
        <div className="flex flex-col gap-3 pt-2">
          <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2B2420]">
            SELECT ATELIER DISPATCH METHOD
          </span>

          <div className="flex flex-col gap-3">
            {/* Method 1: Standard Atelier Dispatch */}
            <label
              onClick={() => handleInputChange("deliveryMethod", "standard")}
              className={`relative flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                formData.deliveryMethod === "standard"
                  ? "bg-[#FFF1EA] border-[#894B37]"
                  : "bg-[#FFFFFF] border-[#2B2420]/15 hover:bg-[#FAF6F1]"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <Truck className="w-5 h-5 text-[#894B37] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#2B2420] font-semibold">
                    STANDARD ATELIER DISPATCH
                  </span>
                  <span className="font-sans text-xs text-[#7A7168]">
                    Insured carbon-neutral courier · Estimated 3–4 business days
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-sans text-xs font-semibold uppercase text-[#5C5A3E]">
                  INCLUDED
                </span>
                <span className="block font-sans text-[11px] text-[#7A7168] line-through">
                  $25 USD
                </span>
              </div>
            </label>

            {/* Method 2: Express Bespoke Courier */}
            <label
              onClick={() => handleInputChange("deliveryMethod", "express")}
              className={`relative flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                formData.deliveryMethod === "express"
                  ? "bg-[#FFF1EA] border-[#894B37]"
                  : "bg-[#FFFFFF] border-[#2B2420]/15 hover:bg-[#FAF6F1]"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <Truck className="w-5 h-5 text-[#894B37] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#2B2420] font-semibold">
                    EXPRESS BESPOKE COURIER
                  </span>
                  <span className="font-sans text-xs text-[#7A7168]">
                    Next-day priority air dispatch in garment trunks
                  </span>
                </div>
              </div>
              <span className="font-sans text-xs font-semibold text-[#2B2420]">
                +$45 USD
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* ================= SECTION 03: PAYMENT DETAILS ================= */}
      <div className="bg-[#FFF1EA] md:bg-transparent p-4 sm:p-6 md:p-0 border border-[#2B2420]/10 md:border-none shadow-xs md:shadow-none flex flex-col gap-5 md:gap-6">
        <div className="flex items-baseline justify-between border-b border-[#2B2420]/10 pb-3">
          <div className="flex items-center md:items-baseline gap-2 md:gap-0 md:flex-col">
            <span className="font-mono text-xs text-[#894B37] md:text-[#7A7168] uppercase tracking-widest font-semibold md:font-normal">
              03
            </span>
            <span className="hidden md:inline font-mono text-xs text-[#7A7168] uppercase tracking-widest">
              CATALOGUE STEP 03
            </span>
            <h2 className="font-serif text-lg sm:text-2xl lg:text-3xl text-[#2B2420] font-normal uppercase md:normal-case tracking-wide md:tracking-tight">
              PAYMENT METHOD
            </h2>
          </div>
          <div className="flex items-center gap-1 text-[#5C5A3E]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-widest">
              SECURED
            </span>
          </div>
        </div>

        {/* Tab Selectors */}
        <div className="grid grid-cols-3 gap-1.5 md:gap-2 bg-[#F3E5DF] p-1 border border-[#2B2420]/10">
          <button
            type="button"
            onClick={() => handleInputChange("paymentMethod", "card")}
            className={`py-3 text-center font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              formData.paymentMethod === "card"
                ? "bg-[#2B2420] text-[#FAF6F1] shadow-xs"
                : "text-[#7A7168] hover:text-[#2B2420]"
            }`}
          >
            CARD
          </button>
          <button
            type="button"
            onClick={() => handleInputChange("paymentMethod", "upi")}
            className={`py-3 text-center font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              formData.paymentMethod === "upi"
                ? "bg-[#2B2420] text-[#FAF6F1] shadow-xs"
                : "text-[#7A7168] hover:text-[#2B2420]"
            }`}
          >
            UPI
          </button>
          <button
            type="button"
            onClick={() => handleInputChange("paymentMethod", "cod")}
            className={`py-3 text-center font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              formData.paymentMethod === "cod"
                ? "bg-[#2B2420] text-[#FAF6F1] shadow-xs"
                : "text-[#7A7168] hover:text-[#2B2420]"
            }`}
          >
            COD
          </button>
        </div>

        {/* CARD FORM VIEW */}
        {formData.paymentMethod === "card" && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-200">
            <div className="bg-[#FFFFFF] p-4 sm:p-6 border border-[#2B2420]/15 flex flex-col gap-4">
              <div className="flex items-center justify-between text-[#7A7168] pb-1 border-b border-[#2B2420]/10">
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em]">
                  ENCRYPTED ATELIER GATEWAY
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#7A7168] uppercase font-medium">
                    VISA
                  </span>
                  <span className="font-mono text-[10px] text-[#7A7168] uppercase font-medium">
                    MC
                  </span>
                  <span className="font-mono text-[10px] text-[#7A7168] uppercase font-medium">
                    AMEX
                  </span>
                </div>
              </div>

              {/* Card Number */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="checkout-card-number"
                  className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
                >
                  CARD NUMBER <span className="text-[#894B37]">*</span>
                </label>
                <div className="relative flex items-center bg-[#FAF6F1]">
                  <input
                    id="checkout-card-number"
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      handleInputChange("cardNumber", e.target.value)
                    }
                    placeholder="4242 •••• •••• 8820"
                    className="w-full bg-transparent px-4 py-3 pr-10 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 placeholder:text-[#7A7168]/50 focus:outline-none focus:border-[#2B2420]"
                  />
                  <CreditCard className="w-4 h-4 absolute right-3 pointer-events-none text-[#7A7168]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Expiry Date */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="checkout-card-expiry"
                    className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
                  >
                    EXPIRY (MM/YY) <span className="text-[#894B37]">*</span>
                  </label>
                  <input
                    id="checkout-card-expiry"
                    type="text"
                    value={formData.cardExpiry}
                    onChange={(e) =>
                      handleInputChange("cardExpiry", e.target.value)
                    }
                    placeholder="08/27"
                    className="w-full bg-[#FAF6F1] px-4 py-3 text-center font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 placeholder:text-[#7A7168]/50 focus:outline-none focus:border-[#2B2420]"
                  />
                </div>

                {/* CVC */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="checkout-card-cvc"
                      className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
                    >
                      SECURITY CVC <span className="text-[#894B37]">*</span>
                    </label>
                    <HelpCircle className="w-3 h-3 text-[#7A7168]" />
                  </div>
                  <input
                    id="checkout-card-cvc"
                    type="password"
                    maxLength={4}
                    value={formData.cardCvc}
                    onChange={(e) =>
                      handleInputChange("cardCvc", e.target.value)
                    }
                    placeholder="•••"
                    className="w-full bg-[#FAF6F1] px-4 py-3 text-center tracking-widest font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 placeholder:text-[#7A7168]/50 focus:outline-none focus:border-[#2B2420]"
                  />
                </div>
              </div>

              {/* Cardholder Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="checkout-card-name"
                  className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-[#2B2420] tracking-[0.18em]"
                >
                  NAME ON CARD <span className="text-[#894B37]">*</span>
                </label>
                <input
                  id="checkout-card-name"
                  type="text"
                  value={formData.cardName}
                  onChange={(e) =>
                    handleInputChange("cardName", e.target.value)
                  }
                  className="w-full bg-[#FAF6F1] px-4 py-3 font-sans text-sm text-[#2B2420] uppercase border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420]"
                />
              </div>
            </div>

            {/* Billing Address Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer select-none pt-1">
              <div className="w-5 h-5 shrink-0 bg-[#FFFFFF] border border-[#2B2420]/20 flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={formData.billingSameAsShipping}
                  onChange={(e) =>
                    handleInputChange(
                      "billingSameAsShipping",
                      e.target.checked
                    )
                  }
                  className="sr-only peer"
                />
                {formData.billingSameAsShipping && (
                  <Check className="w-3.5 h-3.5 text-[#894B37]" />
                )}
              </div>
              <span className="font-sans text-xs text-[#2B2420]">
                Billing address matches shipping address specified above
              </span>
            </label>
          </div>
        )}

        {/* UPI FORM VIEW */}
        {formData.paymentMethod === "upi" && (
          <div className="flex flex-col gap-4 bg-[#FFFFFF] p-4 sm:p-6 border border-[#2B2420]/15 animate-in fade-in duration-200">
            <div className="p-3 bg-[#F9EBE5] text-[#7A7168] font-sans text-xs">
              Instant settlement through Google Pay, PhonePe, Paytm, or your Virtual Payment Address (VPA).
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="checkout-upi"
                className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2B2420]"
              >
                VPA / UPI ID <span className="text-[#894B37]">*</span>
              </label>
              <div className="relative flex items-center bg-[#FAF6F1]">
                <input
                  id="checkout-upi"
                  type="text"
                  value={formData.upiId}
                  onChange={(e) => handleInputChange("upiId", e.target.value)}
                  placeholder="username@okhdfcbank"
                  className="flex-1 bg-transparent px-4 py-3 pr-10 font-sans text-sm text-[#2B2420] border border-[#2B2420]/15 focus:outline-none focus:border-[#2B2420]"
                />
                <QrCode className="w-4 h-4 text-[#7A7168] absolute right-3 pointer-events-none" />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setUpiVerified(true)}
              className="w-full sm:w-auto self-start px-6 py-3 bg-[#894B37] text-[#FAF6F1] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#2B2420] transition-colors cursor-pointer"
            >
              {upiVerified ? "VERIFIED" : "VERIFY UPI"}
            </button>
          </div>
        )}

        {/* CASH ON ARRIVAL VIEW */}
        {formData.paymentMethod === "cod" && (
          <div className="flex flex-col gap-2.5 bg-[#FFFFFF] p-4 sm:p-6 border border-[#2B2420]/15 animate-in fade-in duration-200">
            <span className="font-serif text-lg text-[#2B2420]">
              Atelier Concierge Settlement
            </span>
            <p className="font-sans text-xs text-[#7A7168] leading-relaxed">
              Please prepare the exact amount of ${totalAmount} USD in cash or local contactless terminal upon physical courier arrival.
            </p>
            <span className="font-sans text-[10px] font-semibold text-[#894B37] tracking-widest uppercase pt-1">
              ADDITIONAL ID VERIFICATION REQUIRED AT DOORSTEP
            </span>
          </div>
        )}
      </div>

      {/* ================= SECTION 04: PRIMARY CTA & SECURITY SEAL (MOBILE ONLY) ================= */}
      <section
        aria-label="Transaction Submission"
        className="flex lg:hidden flex-col gap-4 pt-2 pb-6"
      >
        {/* High-End Primary Button */}
        <button
          type="button"
          onClick={onPlaceOrder}
          className="w-full h-14 bg-[#2B2420] hover:bg-[#894B37] text-[#FAF6F1] font-sans text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] font-semibold cursor-pointer"
        >
          <span>PLACE ORDER — ${totalAmount}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Discreet Legal and Security Guarantee */}
        <div className="flex flex-col items-center text-center gap-1.5 px-2">
          <div className="flex items-center gap-1 text-[#7A7168]">
            <Lock className="w-3.5 h-3.5" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#7A7168]">
              256-BIT ENCRYPTED CHECKOUT
            </span>
          </div>
          <p className="font-sans text-[11px] text-[#7A7168] leading-relaxed">
            By placing your order, you acknowledge and agree to ANGHA&apos;s Terms of Atelier, complimentary returns within 14 days, and archival garment preservation policies.
          </p>
        </div>

        {/* Centered Return to Bag Navigation */}
        <div className="flex justify-center pt-1">
          <Link
            href="/cart"
            className="inline-flex items-center gap-1.5 text-[#7A7168] hover:text-[#2B2420] transition-colors py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO BAG</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
