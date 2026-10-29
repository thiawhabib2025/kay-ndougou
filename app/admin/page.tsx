export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#14532D]">Administration</p>
        <h1 className="mt-2 text-4xl font-black text-[#1F2937]">Tableau de bord</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { title: "Commandes", value: "12" },
          { title: "Produits", value: "18" },
          { title: "Livraisons", value: "3" },
        ].map((stat) => (
          <div key={stat.title} className="rounded-[28px] border border-[#14532D]/10 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-[#14532D]/65">{stat.title}</p>
            <p className="mt-4 text-4xl font-black text-[#14532D]">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-[30px] bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-[#1F2937]">Gestion locale</h2>
        <p className="mt-3 text-[#1F2937]/70">Dans la version MVP, l’admin est préparé pour gérer les produits, catégories, prix et statuts de commande.</p>
      </div>
    </div>
  );
}
