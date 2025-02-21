'use client';

import { z } from "zod";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useMutation, useQuery } from "@tanstack/react-query";

import { IProduct } from "../_components/column";
import FormProduct, { formSchema } from "../create/_components/form";
import api from "@/services/api";

const ProductPage = () => {

  const params = useParams();
  // Your product page content goes here

  const router = useRouter();

  const { data: productDatas, isLoading: loadingProduct } = useQuery({
    queryKey: ['product', params?.productId],
    queryFn: async (): Promise<IProduct> => await api.get(`/products/${params?.productId}`)
  })

  // Your create product page content goes here
  const mutationUpdate = useMutation({
    mutationKey: ["product"],
    mutationFn: async (data): Promise<IProduct> => {
      const res = await api.put(`/products/${params?.productId}`, data);
      console.log('res PUT', res);
      return res;
    },
    onSuccess: (data) => {
      toast("Le produit à été mise à jour.", {
        description: `${data.title} a bien été modifier`,
        position: "top-right",
        closeButton: true,
      })
      router.push('/products');
    }
  });

  // Your create product page content goes here
  const mutationDelete = useMutation({
    mutationKey: ["product"],
    mutationFn: async (): Promise<IProduct> => {
      const res = await api.delete(`/products/${params?.productId}`);
      console.log('res DELETE', res);
      return res;
    },
    onSuccess: (data) => {
      toast("Le produit à été mise supprimer.", {
        description: `${data.title} a bien été supprimer`,
        position: "top-right",
        closeButton: true,
      })
      router.push('/products');
    }
  });


  if (loadingProduct) {
    return <div>...Loading Product</div>
  }

  return (
    <div>
      <h1>Product Page {params?.productId}</h1>
      {productDatas && <FormProduct values={{
        title: productDatas.title,
        description: productDatas.description,
        price: String(productDatas.price),
        category: productDatas.category,
      }} onSubmit={(values: z.infer<typeof formSchema>) => mutationUpdate.mutate({
          title: values.title,
          price: Number(values.price),
          description: values.description,
          image: 'https://i.pravatar.cc',
          category: values.category,
      } as never)}
      onDelete={() => mutationDelete.mutate()}
      />
    }
    </div>
  );
};

export default ProductPage;