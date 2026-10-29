import type { DeliveryZone, Product } from "@/lib/types";

export const demoProducts: Product[] = [
  {
    id: "tomates",
    slug: "tomates",
    name: "Tomates",
    category: "Légumes frais",
    description: "Tomates juteuses, parfaites pour sauces, salades et plats sénégalais.",
    pricePerKg: 850,
    stockKg: 12,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80",
    alt: "Tomates fraîches",
    featured: true,
    tags: ["salades", "sauce"],
  },
  {
    id: "oignons",
    slug: "oignons",
    name: "Oignons",
    category: "Légumes frais",
    description: "Oignons savoureux pour les fritures, garnitures et assaisonnements.",
    pricePerKg: 500,
    stockKg: 18,
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80",
    alt: "Oignons frais",
    tags: ["base", "assaisonnement"],
  },
  {
    id: "pommes-de-terre",
    slug: "pommes-de-terre",
    name: "Pommes de terre",
    category: "Tubercules",
    description: "Pommes de terre solides pour votre pot-au-feu, gratins et accompagnements.",
    pricePerKg: 700,
    stockKg: 16,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
    alt: "Pommes de terre",
    featured: true,
    tags: ["accompagnement"],
  },
  {
    id: "carottes",
    slug: "carottes",
    name: "Carottes",
    category: "Légumes frais",
    description: "Carottes colorées, sucrées et croustillantes faites pour la soupe ou le sauté.",
    pricePerKg: 550,
    stockKg: 14,
    image:
      "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=900&q=80",
    alt: "Carottes",
    tags: ["soupe", "vitamines"],
  },
  {
    id: "choux",
    slug: "choux",
    name: "Choux",
    category: "Feuilles",
    description: "Choux frais pour les soupes, salades et plats de famille.",
    pricePerKg: 450,
    stockKg: 20,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=80",
    alt: "Choux",
    badge: "À la demande",
    tags: ["soupe"],
  },
  {
    id: "aubergines",
    slug: "aubergines",
    name: "Aubergines",
    category: "Légumes frais",
    description: "Aubergines tendres pour les grillades et les plats mijotés.",
    pricePerKg: 620,
    stockKg: 9,
    image:
      "https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=900&q=80",
    alt: "Aubergines",
    tags: ["grillé", "fondant"],
  },
  {
    id: "navets",
    slug: "navets",
    name: "Navets",
    category: "Racines",
    description: "Navets doux et parfumés pour des recettes rustiques et nourrissantes.",
    pricePerKg: 480,
    stockKg: 11,
    image:
      "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=900&q=80",
    alt: "Navets",
    tags: ["soupe"],
  },
  {
    id: "poivrons",
    slug: "poivrons",
    name: "Poivrons",
    category: "Légumes frais",
    description: "Poivrons colorés pour vos préparations savoureuses et croquantes.",
    pricePerKg: 750,
    stockKg: 10,
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=900&q=80",
    alt: "Poivrons",
    featured: true,
    tags: ["grillé"],
  },
  {
    id: "piments",
    slug: "piments",
    name: "Piments",
    category: "Légumes frais",
    description: "Piments généreux pour un goût piquant et des plats parfumés.",
    pricePerKg: 800,
    stockKg: 7,
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80",
    alt: "Piments",
    tags: ["piquant"],
  },
  {
    id: "ail",
    slug: "ail",
    name: "Ail",
    category: "Condiments",
    description: "Gousses d’ail parfumées, essentielles pour la cuisine locale.",
    pricePerKg: 900,
    stockKg: 8,
    image:
      "https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&w=900&q=80",
    alt: "Ail",
    tags: ["condiment"],
  },
  {
    id: "persil",
    slug: "persil",
    name: "Persil",
    category: "Condiments",
    description: "Persil frais pour finir vos plats et parfumer vos salades.",
    pricePerKg: 650,
    stockKg: 6,
    image:
      "https://images.unsplash.com/photo-1522184216316-3c25379f9760?auto=format&fit=crop&w=900&q=80",
    alt: "Persil",
    tags: ["frais"],
  },
  {
    id: "condiments-mixtes",
    slug: "condiments-mixtes",
    name: "Condiments mixtes",
    category: "Condiments",
    description: "Assortiment de base pour vos recettes sénégalaises, prêt à cuisiner.",
    pricePerKg: 1200,
    stockKg: 5,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    alt: "Condiments",
    tags: ["mix"],
  },
];

export const deliveryZones = [
  { name: "Dakar centre", fee: 1500, note: "Livraison standard en 1 à 2 jours ouvrés." },
  { name: "Grand Dakar", fee: 2200, note: "Zone étendue selon le quartier et l’accès." },
  { name: "Autre ville", fee: 3000, note: "Tarif à confirmer avec le commerçant selon la zone." },
];

export const recipes = [
  {
    title: "Thiéboudiène",
    description: "Un classique sénégalais équilibré avec poisson, riz et légumes colorés.",
    ingredients: ["Tomates", "Poivrons", "Oignons", "Ail", "Persil"],
  },
  {
    title: "Yassa",
    description: "Poulet mariné au citron avec oignons doux et aromates généreux.",
    ingredients: ["Oignons", "Ail", "Piments", "Carottes", "Tomates"],
  },
  {
    title: "Soupe kandia",
    description: "Soupe généreuse avec légumes de saison et légumes verts.",
    ingredients: ["Choux", "Pommes de terre", "Navets", "Carottes", "Aubergines"],
  },
];

export const faqs = [
  {
    question: "Comment commander ?",
    answer: "Choisissez les légumes souhaités, ajoutez-les au panier, puis passez la commande avec votre information de livraison.",
  },
  {
    question: "Les prix sont-ils confirmés ?",
    answer: "Les prix affichés sont démonstratifs et doivent être confirmés par le commerçant avant validation finale.",
  },
  {
    question: "La livraison est-elle disponible ?",
    answer: "La livraison est proposée selon les zones desservies et les frais configurés par le commerçant.",
  },
  {
    question: "Peut-on ajuster les quantités ?",
    answer: "Oui, les quantités sont modifiables par lots de 0,25 kg, selon le stock disponible.",
  },
];

export const benefits = [
  "Produits frais et sélectionnés",
  "Commande flexible sans pack imposé",
  "Livraison selon votre zone",
  "Prix au kilogramme transparent",
];
