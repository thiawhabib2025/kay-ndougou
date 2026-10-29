import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, ShoppingBag, Truck } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { benefits, demoProducts, faqs, recipes } from "@/data/demo";

export default function Home() {
  const featured = demoProducts.filter((product) => product.featured).slice(0, 4);

  return (
    <div className="bg-[#F8F5E9] text-[#1F2937]">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-[#14532D] text-white shadow-2xl shadow-[#14532D]/20">
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F8F5E9]">
                Marché en ligne • Dakar
              </span>
              <h1 className="max-w-lg text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Votre marché, à votre façon.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#F8F5E9]/90">
                Choisissez les légumes, les quantités et la livraison qui vous conviennent. Sans pack imposé, sans stress.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/legumes" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-bold text-[#14532D] transition hover:bg-[#f7b42c]">
                  Commander maintenant <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/faq" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-[26px]">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
                alt="Légumes frais sur un marché"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14532D]/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-white/90 p-4 text-[#1F2937] backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#14532D]/60">Prix démonstratifs</p>
                    <p className="mt-1 text-2xl font-black text-[#14532D]">1 250 XOF</p>
                  </div>
                  <div className="rounded-full bg-[#F59E0B] px-3 py-2 text-xs font-bold text-[#14532D]">Livraison locale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">Catégories</p>
            <h2 className="mt-2 text-3xl font-black text-[#1F2937]">Une liste pensée pour votre cuisine</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Frais", icon: Leaf },
            { name: "Tubercules", icon: ShoppingBag },
            { name: "Condiments", icon: CheckCircle2 },
            { name: "Livraison", icon: Truck },
          ].map(({ name, icon: Icon }) => (
            <div key={name} className="rounded-[24px] border border-[#14532D]/10 bg-white p-5 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14532D]/8 text-[#14532D]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-lg font-bold text-[#1F2937]">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">Produits populaires</p>
            <h2 className="mt-2 text-3xl font-black text-[#1F2937]">Le meilleur du panier</h2>
          </div>
          <Link href="/legumes" className="text-sm font-bold text-[#14532D]">Voir tout →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">Pourquoi nous</p>
            <h2 className="mt-2 text-3xl font-black text-[#1F2937]">Un achat simple et fiable</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="rounded-[24px] border border-[#14532D]/10 bg-[#F8F5E9] p-5">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F59E0B]/15 text-[#14532D]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-lg font-bold text-[#1F2937]">{index + 1}. {benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">Je cuisine quoi ?</p>
          <h2 className="mt-2 text-3xl font-black text-[#1F2937]">Des idées de plats à personnaliser</h2>
          <p className="mt-3 text-[#1F2937]/70">Les ingrédients proposés sont indicatifs et ne constituent pas un pack imposé.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div key={recipe.title} className="rounded-[28px] border border-[#14532D]/10 bg-[#14532D] p-6 text-white shadow-lg shadow-[#14532D]/15">
              <h3 className="text-2xl font-black">{recipe.title}</h3>
              <p className="mt-3 text-sm text-[#F8F5E9]/80">{recipe.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {recipe.ingredients.map((ingredient) => (
                  <span key={ingredient} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#F8F5E9]">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">FAQ</p>
            <h2 className="mt-2 text-3xl font-black text-[#1F2937]">Questions fréquentes</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[24px] border border-[#14532D]/10 bg-[#F8F5E9] p-5">
                <h3 className="text-lg font-bold text-[#14532D]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-[#1F2937]/75">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
