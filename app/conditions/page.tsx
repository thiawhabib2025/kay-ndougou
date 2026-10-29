export default function ConditionsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[32px] bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">Conditions</p>
        <h1 className="mt-2 text-4xl font-black text-[#1F2937]">Conditions de vente</h1>
        <ul className="mt-6 space-y-4 text-[#1F2937]/75">
          <li>Les prix affichés sont des prix de démonstration et doivent être confirmés par le commerçant avant validation définitive.</li>
          <li>Les commandes sont soumises à disponibilité réelle des légumes et aux conditions de livraison configurées.</li>
          <li>Les quantités sont acceptées par lots de 0,25 kg, selon les stocks disponibles.</li>
        </ul>
      </div>
    </div>
  );
}
