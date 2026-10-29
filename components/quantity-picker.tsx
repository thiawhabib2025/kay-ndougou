"use client";

import { Minus, Plus } from "lucide-react";

import { ALLOWED_STEP_KG, getQuantityInGrams } from "@/lib/order";

export function QuantityPicker({
  value,
  min = 0,
  max,
  onChange,
}: {
  value: number;
  min?: number;
  max: number;
  onChange: (next: number) => void;
}) {
  const clamp = (next: number) => {
    const lower = Math.max(min, 0);
    return Math.min(Math.max(next, lower), max);
  };

  return (
    <div className="flex items-center gap-3 rounded-full border border-[#14532D]/15 bg-white p-1.5 shadow-sm">
      <button
        type="button"
        aria-label="Réduire la quantité"
        className="flex h-10 w-10 items-center justify-center rounded-full text-[#14532D] hover:bg-[#14532D]/5"
        onClick={() => onChange(clamp(Number((value - ALLOWED_STEP_KG).toFixed(2))))}
      >
        <Minus className="h-4 w-4" />
      </button>
      <div className="min-w-[96px] text-center">
        <div className="text-lg font-bold text-[#14532D]">{value.toFixed(2).replace(/\.00$/, "") } kg</div>
        <div className="text-[10px] uppercase tracking-[0.15em] text-[#1F2937]/60">{getQuantityInGrams(value)} g</div>
      </div>
      <button
        type="button"
        aria-label="Augmenter la quantité"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14532D] text-white hover:bg-[#0f3c23]"
        onClick={() => onChange(clamp(Number((value + ALLOWED_STEP_KG).toFixed(2))))}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
