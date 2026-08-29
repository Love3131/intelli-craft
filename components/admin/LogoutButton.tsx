"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
    >
      <LogOut size={17} />
      Logout
    </button>
  );
}