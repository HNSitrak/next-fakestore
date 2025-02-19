'use client';

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/column";
import { TableSkeleton } from "./_components/table-skeleton";
import { useProducts } from "@/hooks/useProducts";

const ProductsPage = () => {

  // query using tanstack query for getting products
  const { data, isLoading, isError } = useProducts();

  return (
    <div className="container mx-auto p-10">
      {isLoading && <TableSkeleton />}
      {isError && <p>Error</p>}
      {data && (
        <DataTable columns={columns} data={data} />)}
      </div>
)
};
      
export default ProductsPage;
