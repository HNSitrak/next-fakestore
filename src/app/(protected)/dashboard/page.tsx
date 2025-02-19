"use client";

import { useAuth } from "@/lib/auth";

export default function Dashboard() {
    const { session } = useAuth();
    
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome!</h1>
      <p>Your token: {session?.expires}</p>
    </div>
  );
}