import type { CartItem, Product } from "@/lib/types";

export const ALLOWED_STEP_KG = 0.25;

export function getQuantityInGrams(quantityKg: number) {
  return Math.round(quantityKg * 1000);
}

export function sanitizeQuantity(quantityKg: number) {
  if (!Number.isFinite(quantityKg)) return 0;
  return Math.max(0, Number(quantityKg));
}

export function calculateItemTotal(product: Product, quantityKg: number) {
  const safeQuantity = sanitizeQuantity(quantityKg);
  return Number((safeQuantity * product.pricePerKg).toFixed(2));
}

export function validateCart(items: CartItem[], products: Product[]) {
  const productMap = new Map(products.map((product) => [product.id, product]));
  const errors: string[] = [];
  let subtotal = 0;

  items.forEach((item) => {
    const product = productMap.get(item.productId);
    if (!product) {
      errors.push("Produit non disponible.");
      return;
    }

    const safeQuantity = sanitizeQuantity(item.quantityKg);
    const rounded = Math.round(safeQuantity / ALLOWED_STEP_KG) * ALLOWED_STEP_KG;
    if (safeQuantity <= 0 || safeQuantity !== rounded) {
      errors.push(`${product.name} : quantité invalide. Utilisez des lots de 0,25 kg.`);
      return;
    }

    if (safeQuantity > product.stockKg) {
      errors.push(`${product.name} : stock insuffisant pour ${safeQuantity} kg.`);
      return;
    }

    subtotal += calculateItemTotal(product, safeQuantity);
  });

  return {
    subtotal: Number(subtotal.toFixed(2)),
    valid: errors.length === 0,
    errors,
  };
}

export function buildOrderReference() {
  const now = new Date();
  const stamp = now.toISOString().slice(0, 10).replace(/-/g, "");
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `KD-${stamp}-${random}`;
}
