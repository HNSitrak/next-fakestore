"use client";

import { useAuth } from "@/lib/auth";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className="bg-red-500 text-white px-4 py-2">
      Logout
    </button>
  );
}