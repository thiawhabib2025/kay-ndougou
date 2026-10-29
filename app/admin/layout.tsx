import { redirect } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!supabase) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-dashed border-[#14532D]/25 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">Admin</p>
          <h1 className="mt-3 text-3xl font-black text-[#1F2937]">Supabase non configuré</h1>
          <p className="mt-3 text-[#1F2937]/70">Configure les variables d’environnement Supabase pour activer l’administration réelle.</p>
        </div>
      </div>
    );
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/admin/login");
  }

  return <>{children}</>;
}
