import { demoProducts } from "@/data/demo";
import { supabase } from "@/lib/supabase";

export default async function AdminPage() {
  const isConfigured = Boolean(supabase);
  let productCount = demoProducts.length;
  let recentOrders = 0;

  if (isConfigured) {
    const { count, error } = await supabase!
      .from("products")
      .select("id", { count: "exact", head: true });

    if (!error && typeof count === "number") {
      productCount = count;
    }

    const { count: ordersCount } = await supabase!
      .from("orders")
      .select("id", { count: "exact", head: true });

    recentOrders = ordersCount ?? 0;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#14532D]">Administration</p>
          <h1 className="mt-2 text-4xl font-black text-[#1F2937]">Tableau de bord</h1>
        </div>
        <div className="rounded-full border border-[#14532D]/10 bg-white px-4 py-2 text-sm text-[#1F2937]/70 shadow-sm">
          {isConfigured ? "Supabase connecté" : "Mode démonstration locale"}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          { title: "Commandes", value: String(recentOrders) },
          { title: "Produits", value: String(productCount) },
          { title: "Livraisons", value: "3" },
        ].map((stat) => (
          <div key={stat.title} className="rounded-[28px] border border-[#14532D]/10 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-[#14532D]/65">{stat.title}</p>
            <p className="mt-4 text-4xl font-black text-[#14532D]">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[30px] bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-[#1F2937]">Gestion Supabase</h2>
        <p className="mt-3 text-[#1F2937]/70">
          {isConfigured
            ? "Les tables et variables d’environnement sont configurées. L’admin peut désormais se connecter à Supabase pour gérer les commandes et les produits."
            : "Aucune configuration Supabase n’est détectée pour le moment. Ajoutez les variables d’environnement pour activer le mode admin réel et les commandes enregistrées."}
        </p>
      </div>
    </div>
  );
}
