'use client';

import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/column";
import { TableSkeleton } from "./_components/table-skeleton";
import { useProducts } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ProductsPage = () => {
  const [search, setSearch] = React.useState('');

  // query using tanstack query for getting products
  const { data, isLoading, isError } = useProducts();

  const router = useRouter();

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Button className="mb-4" onClick={() => router.push('/products/create')}>Créer un produit</Button>
      {isLoading && <TableSkeleton />}
      {isError && <p>Error</p>}
      {data && (
        <DataTable onChageSearch={(value: string) => setSearch(value)} columns={columns} data={data.filter((item) => item.title.includes(search))} />)}
      </div>
)
};
      
export default ProductsPage;
