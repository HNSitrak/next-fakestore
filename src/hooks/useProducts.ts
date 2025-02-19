'use  client'

import Configs from "@/configs";
import { useQuery } from "@tanstack/react-query";

export interface productsI {
  id: number;
  title: string;
}
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<productsI[]> => {
      const res = await fetch(`${Configs.API_URL}/products`);
      return res.json();
    },
  });
};
