"use client";

import React from "react";
import { Package, Headset, Award } from "lucide-react";

export function OrderNewsletterAssurance() {
  return (
    <section className="w-full pt-8 pb-4 border-t border-[#2B2420]/10 mt-6 md:mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
          <Package className="w-5 h-5 text-[#894B37] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#362F2B] font-semibold">
              Archival Returns
            </h4>
            <p className="font-sans text-xs text-[#625B52] mt-1 leading-relaxed">
              Complimentary domestic return collection within 28 days of delivery.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
          <Headset className="w-5 h-5 text-[#894B37] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#362F2B] font-semibold">
              Atelier Concierge
            </h4>
            <p className="font-sans text-xs text-[#625B52] mt-1 leading-relaxed">
              Direct access to our garment care and alteration specialists.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
          <Award className="w-5 h-5 text-[#894B37] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#362F2B] font-semibold">
              Provenance Verified
            </h4>
            <p className="font-sans text-xs text-[#625B52] mt-1 leading-relaxed">
              Each garment carries a unique serialized archival passport code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

