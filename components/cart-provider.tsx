"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { demoProducts } from "@/data/demo";
import type { CartItem, Product } from "@/lib/types";

const STORAGE_KEY = "kay-ndougou-cart";

type CartContextValue = {
  items: CartItem[];
  cartCount: number;
  addToCart: (product: Product, quantityKg?: number) => void;
  updateQuantity: (productId: string, quantityKg: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as CartItem[];
      if (Array.isArray(parsed)) setItems(parsed);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantityKg = 0.25) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === product.id);
      const nextQty = sanitize(product, quantityKg + (existing?.quantityKg ?? 0));
      if (existing) {
        return current.map((item) =>
          item.productId === product.id ? { ...item, quantityKg: nextQty } : item,
        );
      }
      return [...current, { productId: product.id, quantityKg: nextQty }];
    });
  };

  const updateQuantity = (productId: string, quantityKg: number) => {
    setItems((current) => {
      const product = demoProducts.find((entry) => entry.id === productId);
      if (!product) return current;
      const nextQuantity = sanitize(product, quantityKg);
      if (nextQuantity <= 0) {
        return current.filter((item) => item.productId !== productId);
      }
      return current.map((item) =>
        item.productId === productId ? { ...item, quantityKg: nextQuantity } : item,
      );
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((current) => current.filter((item) => item.productId !== productId));
  };

  const clearCart = () => setItems([]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      cartCount: items.length,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function sanitize(product: Product, quantityKg: number) {
  const safeQuantity = Number.isFinite(quantityKg) ? quantityKg : 0;
  const base = Math.max(0, safeQuantity);
  return Math.min(base, product.stockKg);
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
