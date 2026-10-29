import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { demoProducts } from "@/data/demo";

export default function LegumesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#14532D]">Catalogue</p>
          <h1 className="mt-2 text-4xl font-black text-[#1F2937]">Nos légumes frais</h1>
        </div>
        <div className="rounded-full border border-[#14532D]/10 bg-white px-4 py-2 text-sm text-[#1F2937]/70 shadow-sm">
          Recherche et filtres à venir, base gestion réactive locale.
        </div>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {demoProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="rounded-[28px] border border-dashed border-[#14532D]/20 bg-[#14532D]/5 p-6 text-center">
        <h2 className="text-2xl font-black text-[#1F2937]">Vous voulez commander selon votre cuisine ?</h2>
        <p className="mt-2 text-[#1F2937]/70">Composez votre panier à la carte et choisissez la livraison ou le retrait.</p>
        <Link href="/panier" className="mt-5 inline-flex rounded-full bg-[#14532D] px-5 py-3 text-sm font-bold text-white">
          Voir mon panier
        </Link>
      </div>
    </div>
  );
}
