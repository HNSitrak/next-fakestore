'use client';

import { z } from "zod";
import FormProduct, { formSchema } from "./_components/form";
import { useMutation } from "@tanstack/react-query";
import api from "@/services/api";
import { IProduct } from "../_components/column";

const CreateProductPage = () => {
  // Your create product page content goes here
  const mutation = useMutation({
      mutationKey: ["products"],
      mutationFn: async (data): Promise<IProduct> => {
        const res = await api.post("/products", data);
        console.log('res POST', res);
        return res;
      },
    });

  return (
    <div>
      <h1>Create Product Page</h1>
      <FormProduct onSubmit={(values: z.infer<typeof formSchema>) => mutation.mutate({
          title: values.title,
          price: Number(values.price),
          description: values.description,
          image: 'https://i.pravatar.cc',
          category: 'electronic'
      } as never)} />
    </div>
  );
};

export default CreateProductPage;
