import Link from "next/link";
import { redirect } from "next/navigation";
import {
  LayoutDashboard,
  Download,
  FolderOpen,
  Mail,
  FileText,
  Bot,
  Users,
  Activity,
  Settings,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function ProtectedAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  const navigation = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      label: "Downloads",
      href: "/admin/downloads",
      icon: Download,
    },
    {
      label: "Categories",
      href: "/admin/categories",
      icon: FolderOpen,
    },
    {
      label: "Contact Leads",
      href: "/admin/leads",
      icon: Mail,
    },
    {
      label: "Insights",
      href: "/admin/insights",
      icon: FileText,
    },
    {
      label: "AI Resources",
      href: "/admin/ai-resources",
      icon: Bot,
    },
    {
      label: "Team & Roles",
      href: "/admin/team",
      icon: Users,
    },
    {
      label: "Activity Log",
      href: "/admin/activity",
      icon: Activity,
    },
    {
      label: "Site Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-slate-900">

      <header className="border-b border-blue-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-8">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              EruDigm
            </p>

            <h1 className="mt-1 text-2xl font-bold">
              Admin Console
            </h1>
          </div>

          <div className="flex items-center gap-5">

            <div className="hidden items-center gap-3 sm:flex">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white shadow-lg">
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

      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[260px_1fr]">

        <aside className="border-r border-blue-100 bg-white/70 px-4 py-8 lg:min-h-[calc(100vh-89px)]">

          <nav className="space-y-1">

            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}

          </nav>

        </aside>

        <main className="min-w-0 px-6 py-10 lg:px-10">
          {children}
        </main>

      </div>

    </div>
  );
}