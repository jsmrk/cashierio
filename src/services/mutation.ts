import { Products } from "@/types/Products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct, deleteProduct, updateProduct } from "./api";

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Products) => addProduct(data),
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
        await queryClient.invalidateQueries({ queryKey: ["products"] });
      }
    },
  });
};

// to delete a Product
export const useDeleteProduct = () => {
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
        await queryClient.invalidateQueries({ queryKey: ["products"] });
      }
    },
  });
};

// to update Product
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Products) => updateProduct(data),

    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["products"] });
        await queryClient.invalidateQueries({
          queryKey: ["product", { id: variables.id }],
        });
      }
    },
  });
};
