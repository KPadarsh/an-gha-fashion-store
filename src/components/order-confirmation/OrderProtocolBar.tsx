"use client";

import React from "react";

interface OrderProtocolBarProps {
  isConfirmedState: boolean;
  onToggleState: (isConfirmed: boolean) => void;
}

export function OrderProtocolBar({
  isConfirmedState,
  onToggleState,
}: OrderProtocolBarProps) {
  return (
    <aside
      aria-label="Prototype Controls"
      className="w-full bg-[#F3E5DF] md:bg-[#FFF1EA]/70 py-2 md:py-2.5 px-4 md:px-12 border-b border-[#2B2420]/10 transition-colors duration-200"
    >
      {/* Mobile Bar (< md) */}
      <div className="flex md:hidden items-center justify-between text-[11px] font-sans uppercase tracking-[0.2em] text-[#53433F]">
        <span className="font-semibold text-[#53433F]">STATE:</span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onToggleState(true)}
            className={`px-3 py-1 font-sans text-xs uppercase tracking-wider transition-all cursor-pointer ${
              isConfirmedState
                ? "bg-[#362F2B] text-[#FCEEE7] font-semibold"
                : "bg-[#FFF8F5] text-[#53433F] hover:text-[#211A16]"
            }`}
          >
            Confirmed
          </button>
          <button
            type="button"
            onClick={() => onToggleState(false)}
            className={`px-3 py-1 font-sans text-xs uppercase tracking-wider transition-all cursor-pointer ${
              !isConfirmedState
                ? "bg-[#362F2B] text-[#FCEEE7] font-semibold"
                : "bg-[#FFF8F5] text-[#53433F] hover:text-[#211A16]"
            }`}
          >
            Unavailable
          </button>
        </div>
      </div>

      {/* Desktop Bar (>= md) */}
      <div className="hidden md:flex max-w-5xl mx-auto flex-wrap items-center justify-between gap-3 text-[11px] font-sans uppercase tracking-widest text-[#53433F]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#894B37] animate-pulse" />
          <span className="font-semibold text-[#211A16]">
            Atelier Protocol: Production Simulation
          </span>
        </div>
        <div className="flex items-center gap-2 bg-[#F9EBE5] px-2.5 py-1 border border-[#2B2420]/10">
          <span className="text-[#625B52] font-medium text-[10px]">
            State Simulation:
          </span>
          <button
            type="button"
            onClick={() => onToggleState(true)}
            className={`px-2 py-0.5 text-[10px] tracking-wider transition-all font-semibold cursor-pointer ${
              isConfirmedState
                ? "bg-[#362F2B] text-[#FCEEE7]"
                : "text-[#53433F] hover:text-[#211A16]"
            }`}
          >
            CONFIRMED (DEFAULT)
          </button>
          <span className="text-[#D8C2BB]">/</span>
          <button
            type="button"
            onClick={() => onToggleState(false)}
            className={`px-2 py-0.5 text-[10px] tracking-wider transition-all font-semibold cursor-pointer ${
              !isConfirmedState
                ? "bg-[#362F2B] text-[#FCEEE7]"
                : "text-[#53433F] hover:text-[#211A16]"
            }`}
          >
            UNAVAILABLE
          </button>
        </div>
      </div>
    </aside>
  );
}
