"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@kayndougou.sn");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  if (!supabase) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-dashed border-[#14532D]/25 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">Admin</p>
          <h1 className="mt-3 text-3xl font-black text-[#1F2937]">Connexion Supabase non configurée</h1>
          <p className="mt-4 text-[#1F2937]/70">
            Ajoutez les variables d’environnement Supabase dans Vercel ou le fichier .env.local pour activer l’authentification admin.
          </p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) {
      setError("Supabase n’est pas configuré.");
      return;
    }
    setPending(true);
    setError("");

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setPending(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="rounded-[32px] bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">Connexion</p>
        <h1 className="mt-3 text-3xl font-black text-[#1F2937]">Espace administrateur</h1>

        <div className="mt-6 space-y-5">
          <label className="block text-sm font-medium text-[#1F2937]">
            Email admin
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[#14532D]/15 bg-[#F8F5E9] px-4 py-3 outline-none focus:border-[#14532D]"
              required
            />
          </label>

          <label className="block text-sm font-medium text-[#1F2937]">
            Mot de passe
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[#14532D]/15 bg-[#F8F5E9] px-4 py-3 outline-none focus:border-[#14532D]"
              required
            />
          </label>
        </div>

        {error ? <p className="mt-4 text-sm font-medium text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={pending}
          className="mt-8 inline-flex w-full justify-center rounded-full bg-[#14532D] px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
