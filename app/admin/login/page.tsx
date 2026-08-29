"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    const supabase = createClient();

    const { error: signInError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (signInError) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-12">

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative w-full max-w-md">

        <div className="mb-8 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-900/30">
            <ShieldCheck size={30} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            EruDigm
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white">
            Admin Console
          </h1>

          <p className="mt-3 text-slate-400">
            Sign in to manage the EruDigm platform.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur"
        >

          <div>
            <label className="text-sm font-semibold text-slate-300">
              Email address
            </label>

            <div className="relative mt-2">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
                placeholder="admin@erudigm.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-sm font-semibold text-slate-300">
              Password
            </label>

            <div className="relative mt-2">
              <LockKeyhole
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>
          </div>

          {error && (
            <div className="mt-5 rounded-xl border border-red-900/50 bg-red-950/50 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Authorized EruDigm administrators only.
          </p>

        </form>

        <p className="mt-6 text-center text-xs text-slate-600">
          EruDigm Admin • Secure Management Console
        </p>

      </div>
    </main>
  );
}