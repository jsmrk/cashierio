import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./apis/inventoryAPI";

export const useProducts = () => {
  return useQuery({
    queryKey: ["inventoryProduct"],
    queryFn: getProducts,
  });
};
