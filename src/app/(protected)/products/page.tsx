'use client';

import api from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/column";
import { TableSkeleton } from "./_components/table-skeleton";

const ProductsPage = () => {

  // query using tanstack query for getting products
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => await api.get("/products")
  });

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
