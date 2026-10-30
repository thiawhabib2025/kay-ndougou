import Link from "next/link";
import { notFound } from "next/navigation";

import { demoProducts } from "@/data/demo";
import { formatGrams, formatKg, formatXOF } from "@/lib/format";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = demoProducts.find((entry) => entry.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/legumes" className="inline-flex items-center text-sm font-semibold text-[#14532D]">
        ← Retour au catalogue
      </Link>

      <div className="mt-6 grid gap-8 rounded-[32px] border border-[#14532D]/10 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
        <div className="overflow-hidden rounded-[28px]">
          <img src={product.image} alt={product.alt} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#14532D]">{product.category}</p>
          <h1 className="mt-3 text-4xl font-black text-[#1F2937]">{product.name}</h1>
          <p className="mt-4 text-base leading-7 text-[#1F2937]/75">{product.description}</p>

          <div className="mt-6 rounded-[24px] bg-[#F8F5E9] p-4">
            <div className="text-3xl font-black text-[#14532D]">{formatXOF(product.pricePerKg)} / kg</div>
            <div className="mt-2 text-sm text-[#1F2937]/70">
              0,25 kg = {formatKg(0.25)} ({formatGrams(0.25)})
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-[#1F2937]/75">
            <span className="rounded-full bg-[#14532D]/8 px-3 py-1 font-semibold text-[#14532D]">
              {product.stockKg} kg disponible
            </span>
            <span className="rounded-full border border-[#14532D]/15 px-3 py-1">Prix démonstratif</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/panier" className="inline-flex items-center justify-center rounded-full bg-[#14532D] px-6 py-3 text-sm font-bold text-white">
              Voir le panier
            </Link>
            <Link href="/legumes" className="inline-flex items-center justify-center rounded-full border border-[#14532D]/20 px-6 py-3 text-sm font-bold text-[#14532D]">
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
