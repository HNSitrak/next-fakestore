"use client";

import { useAuth } from "@/lib/auth";
import { productsI, useProducts } from "@/hooks/useProducts";

export default function Dashboard() {
    const { session } = useAuth();
    const { data: products, isLoading} = useProducts();

    if (isLoading) return <p>Loading...</p>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome!</h1>
      <p>Your token: {session?.expires}</p>

      {products?.map((p: productsI) => (
        <li key={p.id}>{p.title}</li>
        ))}
    </div>
  );
}