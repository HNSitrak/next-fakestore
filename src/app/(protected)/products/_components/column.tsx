"use client"

import { Avatar, Image } from "@radix-ui/react-avatar";
import { ColumnDef } from "@tanstack/react-table"
import Link from 'next/link';
import { Info } from "lucide-react";

// This type is used to define the shape of our data.
export interface IProduct {
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

export const columns: ColumnDef<IProduct>[] = [
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
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original
 
      return (
        <Link href={`/products/${product.id}`}>
          <Info className="h-4 w-4" />
        </Link>
      )
    },
  },
]
