"use client";

import Link from "next/link";
import { ShoppingCart, Leaf, Menu, Smartphone } from "lucide-react";

import { useCart } from "@/components/cart-provider";

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14532D] text-[#F8F5E9] shadow-lg shadow-[#14532D]/20">
        <ShoppingCart className="h-5 w-5" />
        <Leaf className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-[#F59E0B] p-1 text-[#14532D]" />
      </div>
      <div>
        <p className="text-lg font-black tracking-tight text-[#14532D]">Kay Ndougou</p>
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#1F2937]/70">Votre marché, à votre façon.</p>
      </div>
    </div>
  );
}

export function Header() {
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + (item.quantityKg > 0 ? 1 : 0), 0);

  return (
    <header className="sticky top-0 z-40 border-b border-[#14532D]/10 bg-[#F8F5E9]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Accueil Kay Ndougou" className="shrink-0">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#1F2937] lg:flex">
          <Link href="/" className="transition hover:text-[#14532D]">Accueil</Link>
          <Link href="/legumes" className="transition hover:text-[#14532D]">Catalogue</Link>
          <Link href="/faq" className="transition hover:text-[#14532D]">FAQ</Link>
          <Link href="/contact" className="transition hover:text-[#14532D]">Contact</Link>
          <Link href="/admin" className="transition hover:text-[#14532D]">Admin</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/panier" className="relative inline-flex items-center gap-2 rounded-full border border-[#14532D]/20 bg-white px-3 py-2 text-sm font-semibold text-[#14532D] shadow-sm transition hover:border-[#14532D]/40 hover:bg-[#14532D] hover:text-white">
            <ShoppingCart className="h-4 w-4" />
            Panier
            <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-[#F59E0B] px-1.5 py-0.5 text-[10px] font-bold text-[#14532D]">
              {cartCount}
            </span>
          </Link>
          <button type="button" aria-label="Menu" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#14532D]/15 bg-white text-[#14532D] lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#14532D]/10 bg-[#14532D] text-[#F8F5E9]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <LogoMark />
          <p className="mt-4 text-sm text-[#F8F5E9]/90">
            Kay Ndougou propose un marché en ligne simple, bien pensé et pensé pour les familles sénégalaises.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">Explorer</h3>
          <ul className="space-y-2 text-sm text-[#F8F5E9]/90">
            <li><Link href="/legumes">Catalogue</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/livraison">Livraison</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">Légal</h3>
          <ul className="space-y-2 text-sm text-[#F8F5E9]/90">
            <li><Link href="/conditions">Conditions de vente</Link></li>
            <li><Link href="/confidentialite">Confidentialité</Link></li>
            <li><Link href="/livraison">Politique de livraison</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">Paiements</h3>
          <div className="rounded-2xl border border-[#F8F5E9]/15 bg-white/5 p-4 text-sm text-[#F8F5E9]/90">
            <p className="mb-2 flex items-center gap-2 font-semibold text-white"><Smartphone className="h-4 w-4 text-[#F59E0B]" /> Paiement à la livraison</p>
            <p>Wave et Orange Money sont proposés en validation manuelle uniquement.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#F8F5E9]/10 py-4 text-center text-xs text-[#F8F5E9]/80">
        © 2026 Kay Ndougou — Démo locale. Prix fictifs uniquement.
      </div>
    </footer>
  );
}
