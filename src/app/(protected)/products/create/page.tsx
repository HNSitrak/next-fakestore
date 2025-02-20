'use client';

import { z } from "zod";
import FormProduct, { formSchema } from "./_components/form";
import { useMutation } from "@tanstack/react-query";
import api from "@/services/api";
import { IProduct } from "../_components/column";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateProductPage = () => {
  const router = useRouter();
  
  // Your create product page content goes here
  const mutation = useMutation({
    mutationKey: ["products"],
    mutationFn: async (data): Promise<IProduct> => {
      const res = await api.post("/products", data);
      console.log('res POST', res);
      return res;
    },
    onSuccess: (data) => {
      toast("Le Produit a été créé", {
        description: `${data.title} a bien été créé`,
        position: "top-right",
        closeButton: true,
      })
      router.push('/products');
    }
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Create Product Page</h1>
      <FormProduct onSubmit={(values: z.infer<typeof formSchema>) => mutation.mutate({
          title: values.title,
          price: Number(values.price),
          description: values.description,
          image: 'https://i.pravatar.cc',
          category: values.category,
      } as never)} isEdit={true} />
    </div>
  );
};

export default CreateProductPage;
