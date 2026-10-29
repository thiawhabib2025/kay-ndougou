"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { useCart } from "@/components/cart-provider";
import { demoProducts, deliveryZones } from "@/data/demo";
import { formatXOF } from "@/lib/format";
import { calculateItemTotal } from "@/lib/order";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    district: "",
    city: "",
    instructions: "",
    deliveryMode: "livraison",
    paymentMethod: "paiement-a-la-livraison",
  });

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
        .filter(Boolean) as Array<{ id: string; name: string; pricePerKg: number; quantityKg: number; total: number; image: string; alt: string }>,
    [items],
  );

  const subtotal = cartProducts.reduce((sum, product) => sum + product.total, 0);
  const deliveryFee = cartProducts.length > 0 ? deliveryZones[0].fee : 0;
  const total = subtotal + deliveryFee;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!cartProducts.length) return;
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[#14532D]/10 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#14532D]">Commande enregistrée</p>
          <h1 className="mt-3 text-4xl font-black text-[#1F2937]">Merci pour votre commande</h1>
          <p className="mt-4 text-[#1F2937]/70">Nous avons bien reçu votre demande de commande. Le commerçant la confirme dans les meilleurs délais.</p>
          <div className="mt-6 rounded-[26px] bg-[#F8F5E9] p-5 text-left">
            <p className="text-sm text-[#1F2937]/60">Référence</p>
            <p className="mt-2 text-2xl font-black text-[#14532D]">KD-{new Date().toISOString().slice(0, 10).replace(/-/g, "")}-DEMO</p>
          </div>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-[#14532D] px-6 py-3 text-sm font-bold text-white">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#14532D]">Commande</p>
        <h1 className="mt-2 text-4xl font-black text-[#1F2937]">Finaliser ma commande</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-[30px] border border-[#14532D]/10 bg-white p-6 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-[#1F2937]">
              Nom complet
              <input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="mt-2 w-full rounded-2xl border border-[#14532D]/15 bg-[#F8F5E9] px-4 py-3 outline-none ring-0 focus:border-[#14532D]" />
            </label>
            <label className="block text-sm font-medium text-[#1F2937]">
              Téléphone
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 w-full rounded-2xl border border-[#14532D]/15 bg-[#F8F5E9] px-4 py-3 outline-none focus:border-[#14532D]" />
            </label>
          </div>

          <label className="block text-sm font-medium text-[#1F2937]">
            Adresse complète
            <textarea required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} rows={3} className="mt-2 w-full rounded-2xl border border-[#14532D]/15 bg-[#F8F5E9] px-4 py-3 outline-none focus:border-[#14532D]" />
          </label>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-[#1F2937]">
              Quartier
              <input required value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} className="mt-2 w-full rounded-2xl border border-[#14532D]/15 bg-[#F8F5E9] px-4 py-3 outline-none focus:border-[#14532D]" />
            </label>
            <label className="block text-sm font-medium text-[#1F2937]">
              Ville
              <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="mt-2 w-full rounded-2xl border border-[#14532D]/15 bg-[#F8F5E9] px-4 py-3 outline-none focus:border-[#14532D]" />
            </label>
          </div>

          <label className="block text-sm font-medium text-[#1F2937]">
            Instructions pour la livraison
            <textarea value={form.instructions} onChange={(e) => setForm({ ...form, instructions: e.target.value })} rows={3} className="mt-2 w-full rounded-2xl border border-[#14532D]/15 bg-[#F8F5E9] px-4 py-3 outline-none focus:border-[#14532D]" />
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-[#1F2937]">Mode de livraison</p>
              <select value={form.deliveryMode} onChange={(e) => setForm({ ...form, deliveryMode: e.target.value as "livraison" | "retrait" })} className="mt-2 w-full rounded-2xl border border-[#14532D]/15 bg-[#F8F5E9] px-4 py-3 text-sm">
                <option value="livraison">Livraison</option>
                <option value="retrait">Retrait</option>
              </select>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1F2937]">Mode de paiement</p>
              <select value={form.paymentMethod} onChange={(e) => setForm({ ...form, paymentMethod: e.target.value as "paiement-a-la-livraison" | "wave" | "orange-money" })} className="mt-2 w-full rounded-2xl border border-[#14532D]/15 bg-[#F8F5E9] px-4 py-3 text-sm">
                <option value="paiement-a-la-livraison">Paiement à la livraison</option>
                <option value="wave">Wave (validation manuelle)</option>
                <option value="orange-money">Orange Money (validation manuelle)</option>
              </select>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#F59E0B]/30 bg-[#F59E0B]/10 p-4 text-sm text-[#14532D]">
            Aucune passerelle de paiement en ligne n’est activée. Le paiement en ligne automatique n’est pas disponible dans cette configuration locale.
          </div>

          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#14532D] px-6 py-3 text-sm font-bold text-white">Confirmer la commande</button>
        </form>

        <aside className="rounded-[30px] bg-[#14532D] p-6 text-white shadow-xl shadow-[#14532D]/15">
          <h2 className="text-2xl font-black">Récapitulatif</h2>
          <div className="mt-5 space-y-3">
            {cartProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between gap-3 rounded-[18px] bg-white/5 p-3">
                <div>
                  <p className="font-bold">{product.name}</p>
                  <p className="text-xs text-[#F8F5E9]/75">{product.quantityKg.toFixed(2).replace(/\.00$/, "")} kg</p>
                </div>
                <p className="font-bold text-[#F59E0B]">{formatXOF(product.total)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3 text-sm text-[#F8F5E9]/90">
            <div className="flex justify-between"><span>Sous-total</span><span>{formatXOF(subtotal)}</span></div>
            <div className="flex justify-between"><span>Livraison</span><span>{formatXOF(deliveryFee)}</span></div>
            <div className="flex justify-between border-t border-white/15 pt-3 text-base font-bold text-white"><span>Total</span><span>{formatXOF(total)}</span></div>
          </div>
          <Link href="/panier" className="mt-6 inline-flex w-full justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white">
            Modifier le panier
          </Link>
        </aside>
      </div>
    </div>
  );
}
