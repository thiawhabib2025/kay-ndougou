export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  pricePerKg: number;
  stockKg: number;
  image: string;
  alt: string;
  featured?: boolean;
  badge?: string;
  tags: string[];
};

export type CartItem = {
  productId: string;
  quantityKg: number;
};

export type DeliveryZone = {
  name: string;
  fee: number;
  note: string;
};

export type OrderStatus =
  | "nouvelle"
  | "confirmée"
  | "en préparation"
  | "en livraison"
  | "livrée"
  | "annulée";

export type CheckoutForm = {
  fullName: string;
  phone: string;
  address: string;
  district: string;
  city: string;
  instructions: string;
  deliveryMode: "livraison" | "retrait";
  paymentMethod: "paiement-a-la-livraison" | "wave" | "orange-money";
};

export type OrderRecord = {
  id: string;
  reference: string;
  createdAt: string;
  status: OrderStatus;
  items: Array<{ productId: string; quantityKg: number; unitPrice: number; subtotal: number }>; 
  subtotal: number;
  deliveryFee: number;
  total: number;
  customer: CheckoutForm;
  notes: string;
};
