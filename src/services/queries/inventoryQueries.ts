import { useQuery } from "@tanstack/react-query";
import { getAvailableProducts, getProducts } from "../apis/inventoryAPI";

export const useProducts = () => {
  return useQuery({
    queryKey: ["inventoryProduct"],
    queryFn: getProducts,
  });
};

export const useAvailableProducts = () => {
  return useQuery({
    queryKey: ["inventoryProduct"],
    queryFn: getAvailableProducts,
  });
};
