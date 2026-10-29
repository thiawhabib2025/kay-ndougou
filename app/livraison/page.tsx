import { deliveryZones } from "@/data/demo";

export default function LivraisonPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[32px] bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">Livraison</p>
        <h1 className="mt-2 text-4xl font-black text-[#1F2937]">Zones desservies</h1>
        <p className="mt-4 text-[#1F2937]/70">Les zones et frais de livraison sont configurables par l’administrateur. Tant qu’ils ne sont pas renseignés, les tarifs restent à confirmer.</p>
        <div className="mt-8 space-y-4">
          {deliveryZones.map((zone) => (
            <div key={zone.name} className="rounded-[24px] border border-[#14532D]/10 bg-[#F8F5E9] p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-black text-[#14532D]">{zone.name}</h2>
                <span className="rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-bold uppercase text-[#14532D]">{zone.fee} XOF</span>
              </div>
              <p className="mt-2 text-[#1F2937]/75">{zone.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
