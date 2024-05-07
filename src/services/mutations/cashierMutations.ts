import { useMutation, useQueryClient } from "@tanstack/react-query";

import { SelectedProduct } from "@/types/SelectedProducts";
import { addSelectedItem } from "../apis/cashierAPI";

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
