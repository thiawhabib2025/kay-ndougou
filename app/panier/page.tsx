"use client";

import Link from "next/link";
import { useMemo } from "react";

import { useCart } from "@/components/cart-provider";
import { demoProducts, deliveryZones } from "@/data/demo";
import { formatXOF } from "@/lib/format";
import { calculateItemTotal } from "@/lib/order";

export default function PanierPage() {
  const { items, updateQuantity, removeFromCart } = useCart();

  const cartProducts = useMemo(
    () =>
      items
        .map((item) => {
          const product = demoProducts.find((entry) => entry.id === item.productId);
          if (!product) return null;
          return {
            ...product,
            quantityKg: item.quantityKg,
            total: calculateItemTotal(product, item.quantityKg),
          };
        })
        .filter(Boolean) as Array<{
          id: string;
          name: string;
          pricePerKg: number;
          quantityKg: number;
          total: number;
          image: string;
          alt: string;
        }>,
    [items],
  );

  const subtotal = cartProducts.reduce((sum, product) => sum + product.total, 0);
  const deliveryFee = cartProducts.length > 0 ? deliveryZones[0].fee : 0;
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-dashed border-[#14532D]/30 bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-black text-[#1F2937]">Votre panier est vide</h1>
          <p className="mt-3 text-[#1F2937]/70">Ajoutez quelques légumes pour composer votre commande.</p>
          <Link href="/legumes" className="mt-6 inline-flex rounded-full bg-[#14532D] px-5 py-3 font-bold text-white">
            Retour au catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#14532D]">Panier</p>
        <h1 className="mt-2 text-4xl font-black text-[#1F2937]">Votre commande</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="space-y-4">
          {cartProducts.map((product) => (
            <div key={product.id} className="flex flex-col gap-4 rounded-[28px] border border-[#14532D]/10 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
              <img src={product.image} alt={product.alt} className="h-28 w-28 rounded-[20px] object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-[#1F2937]">{product.name}</h2>
                    <p className="text-sm text-[#1F2937]/70">{formatXOF(product.pricePerKg)} / kg</p>
                  </div>
                  <button type="button" onClick={() => removeFromCart(product.id)} className="text-sm font-semibold text-[#14532D]">Supprimer</button>
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => updateQuantity(product.id, Number((product.quantityKg - 0.25).toFixed(2)))} className="h-9 w-9 rounded-full border border-[#14532D]/15 text-[#14532D]">-</button>
                    <span className="min-w-16 text-center font-bold text-[#14532D]">{product.quantityKg.toFixed(2).replace(/\.00$/, "")} kg</span>
                    <button type="button" onClick={() => updateQuantity(product.id, Number((product.quantityKg + 0.25).toFixed(2)))} className="h-9 w-9 rounded-full bg-[#14532D] text-white">+</button>
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#1F2937]/50">Sous-total</div>
                    <div className="text-xl font-black text-[#14532D]">{formatXOF(product.total)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[32px] bg-[#14532D] p-6 text-white shadow-xl shadow-[#14532D]/15">
          <h2 className="text-2xl font-black">Récapitulatif</h2>
          <div className="mt-6 space-y-4 text-sm text-[#F8F5E9]/90">
            <div className="flex justify-between"><span>Sous-total</span><span>{formatXOF(subtotal)}</span></div>
            <div className="flex justify-between"><span>Livraison</span><span>{formatXOF(deliveryFee)}</span></div>
            <div className="mt-4 flex justify-between border-t border-white/15 pt-4 text-lg font-bold text-white"><span>Total</span><span>{formatXOF(total)}</span></div>
          </div>
          <Link href="/checkout" className="mt-8 inline-flex w-full justify-center rounded-full bg-[#F59E0B] px-5 py-3 text-sm font-bold text-[#14532D]">
            Passer la commande
          </Link>
          <Link href="/legumes" className="mt-3 inline-flex w-full justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white">
            Continuer mes achats
          </Link>
        </aside>
      </div>
    </div>
  );
}
