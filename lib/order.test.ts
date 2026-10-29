import { describe, expect, it } from "vitest";

import { demoProducts } from "@/data/demo";
import { ALLOWED_STEP_KG, validateCart } from "@/lib/order";

describe("validateCart", () => {
  it("accepts valid quantities by 0.25 kg steps", () => {
    const result = validateCart(
      [{ productId: "tomates", quantityKg: 0.5 }, { productId: "oignons", quantityKg: 1 }],
      demoProducts,
    );

    expect(result.valid).toBe(true);
    expect(result.subtotal).toBeGreaterThan(0);
  });

  it("rejects invalid or stock-exceeding quantities", () => {
    const result = validateCart([{ productId: "tomates", quantityKg: 0.3 }], demoProducts);
    expect(result.valid).toBe(false);
    expect(result.errors[0]).toContain("0,25");
  });

  it("enforces the allowed step size across the catalog", () => {
    expect(ALLOWED_STEP_KG).toBe(0.25);
  });
});
