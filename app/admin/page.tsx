import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("full_name, role, status")
    .eq("id", user.id)
    .single();

  if (error || !profile || profile.status !== "active") {
    redirect("/admin/login");
  }

  return (
  <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-slate-900">

    {/* HEADER */}
    <header className="border-b border-blue-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            EruDigm
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Admin Console
          </h1>
        </div>

        <div className="flex items-center gap-5">

  <div className="flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white shadow-lg">
      {profile.full_name?.charAt(0) || "E"}
    </div>

    <div>
      <p className="font-bold">
        {profile.full_name}
      </p>

      <p className="text-sm capitalize text-gray-500">
        {profile.role}
      </p>
    </div>

  </div>

  <LogoutButton />

</div>

      </div>
    </header>

    {/* MAIN */}
    <div className="mx-auto max-w-7xl px-8 py-14">

      <section>

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
          Business Overview
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Welcome back, {profile.full_name}.
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Monitor EruDigm activity and manage your business platform from one
          secure workspace.
        </p>

        {/* KPI CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
              👥
            </div>

            <p className="mt-6 text-sm font-semibold text-gray-500">
              Visitors
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Vercel Analytics
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Live website traffic
            </p>
          </div>

          <div className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl">
              ↓
            </div>

            <p className="mt-6 text-sm font-semibold text-gray-500">
              Downloads
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Coming Next
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Resource downloads
            </p>
          </div>

          <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl">
              ✉
            </div>

            <p className="mt-6 text-sm font-semibold text-gray-500">
              Contact Leads
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Coming Soon
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Customer enquiries
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-xl">
              ◫
            </div>

            <p className="mt-6 text-sm font-semibold text-gray-500">
              Resources
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Coming Soon
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Published resources
            </p>
          </div>

        </div>

        {/* FOUNDATION STATUS */}
        <div className="mt-12 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">

          <div className="flex flex-wrap items-center justify-between gap-6">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Admin Foundation
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Secure management environment active
              </h3>

              <p className="mt-3 text-gray-600">
                Authentication, profile access and role-based identity are
                connected successfully.
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
              ● Operational
            </span>

          </div>

        </div>

      </section>

    </div>

  </main>
);
}