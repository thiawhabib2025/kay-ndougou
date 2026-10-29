import Link from "next/link";

import { formatXOF, formatKg, formatGrams } from "@/lib/format";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-[#14532D]/10 bg-white shadow-sm shadow-[#14532D]/5 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img src={product.image} alt={product.alt} className="h-52 w-full object-cover" />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-[#F59E0B] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#14532D]">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14532D]/65">{product.category}</span>
          {product.featured ? <span className="text-xs font-medium text-[#F59E0B]">Populaire</span> : null}
        </div>
        <h3 className="text-xl font-bold text-[#1F2937]">{product.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-[#1F2937]/70">{product.description}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <div className="text-xl font-black text-[#14532D]">{formatXOF(product.pricePerKg)} / kg</div>
            <div className="text-xs text-[#1F2937]/65">{formatKg(0.25)} ({formatGrams(0.25)})</div>
          </div>
          <div className="text-right text-xs text-[#1F2937]/70">
            <div className="font-semibold text-[#14532D]">{product.stockKg} kg</div>
            <div>Disponible</div>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <Link href={`/legumes/${product.slug}`} className="flex-1 rounded-full border border-[#14532D]/20 px-4 py-2.5 text-center text-sm font-semibold text-[#14532D] transition hover:bg-[#14532D]/5">
            Voir
          </Link>
          <Link href={`/legumes/${product.slug}`} className="flex-1 rounded-full bg-[#14532D] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#0f3c23]">
            Ajouter
          </Link>
        </div>
      </div>
    </article>
  );
}
