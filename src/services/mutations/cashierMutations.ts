import { useMutation, useQueryClient } from "@tanstack/react-query";

import { SelectedProduct } from "@/types/SelectedProducts";
import { addSelectedItem, resetSelectedItems } from "../apis/cashierAPI";

export const useAddSelectedItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: SelectedProduct) => addSelectedItem(data),

    onSettled: async (error) => {
      console.log("Settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["selectedItems"] });
      }
    },
  });
};

export const useResetSelectedItems = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => resetSelectedItems(),

    onSettled: async (error) => {
      console.log("Settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["selectedItems"] });
      }
    },
  });
};
