'use  client'

import { IProduct } from "@/app/(protected)/products/_components/column";
import api from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<IProduct[]> => {
      const res = await api.get("/products");
      return res;
    },
  });
};
