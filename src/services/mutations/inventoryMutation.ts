import { Product } from "@/types/Products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct, deleteProduct, updateProduct } from "../apis/inventoryAPI";

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Product) => addProduct(data),

    onSettled: async (_, error) => {
      console.log("Settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["inventoryProduct"] });
      }
    },
  });
};

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteProduct(id),

    onSuccess: async () => {
      console.log("deleted Succesfully");
    },

    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["inventoryProduct"] });
      }
    },
  });
}

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Product) => updateProduct(data),

    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["inventoryProduct"] });
        await queryClient.invalidateQueries({
          queryKey: ["updateProduct", { id: variables.id }],
        });
      }
    },
  });
};
