"use client"

import { Avatar, Image } from "@radix-ui/react-avatar";
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
  
export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "title",
    header: "Nom du Produit",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell(props) {
      return <Avatar><Image src={props.getValue() as string} alt="image" className="w-16 h-16" /></Avatar>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Prix",
  }
]
