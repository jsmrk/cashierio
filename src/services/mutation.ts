import { Product } from "@/types/Products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "./api";

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Product) => addProduct(data),
    onMutate: () => {
      console.log("mutate");
    },

    onError: () => {
      console.log("Error");
    },

    onSuccess: () => {
      console.log("Success");
    },

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
