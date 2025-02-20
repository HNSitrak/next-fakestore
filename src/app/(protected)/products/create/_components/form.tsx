'use client';

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";


export const formSchema = z.object({
    title: z.string().min(2).max(250),
    price: z.string().min(0),
    description: z.string().min(2).max(250),
    category: z.string().min(2).max(50),
});

interface FormProductProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onDelete?: () => void;
  isLoading?: boolean;
  values?: z.infer<typeof formSchema>;
  isEdit?: boolean;
}
const FormProduct = ({values: defaultValues, isLoading = false, onSubmit: onSave, isEdit = false, onDelete}:  FormProductProps) => {
  const [fieldEditable, setFieldEditable] = React.useState(isEdit);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: defaultValues?.title || "",
      price: defaultValues?.price || "",
      description: defaultValues?.description || "",
      category: defaultValues?.category || '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    onSave(values);
  }

  // Handle query to get list of categories using useQuery and api.get('/products/categories')
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<string[]> => api.get('/products/categories'),
  });

  // Your form component content goes here
  return (
    <Form {...form}>
      {isLoading && <p>Loading...</p>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input disabled={!fieldEditable} placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input disabled={!fieldEditable} placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prix</FormLabel>
              <FormControl>
                <Input disabled={!fieldEditable} placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Catégorie</FormLabel>
              <FormControl>
                <Select disabled={!fieldEditable} onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Séléctionner une Catégorie" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectContent>
                      {categories?.map((item: string, index: number) => (<SelectItem key={`category_${index}`} value={item}>{item}</SelectItem>))}
                    </SelectContent>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {fieldEditable && <Button type="submit">{defaultValues ? 'Enregister Modifications' : 'Créer le produit'}</Button>}
      </form>
      {!fieldEditable && <div>
        <Button onClick={() => setFieldEditable(true)}>Modifier Produit</Button>
        <AlertDialog>
          <AlertDialogTrigger>Supprimer Produit</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => onDelete && onDelete()}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        </div>}
    </Form>
  );
};

export default FormProduct;
