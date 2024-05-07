import { useQuery } from "@tanstack/react-query";
import { getSelectedItems } from "../apis/cashierAPI";

export const useSelectedProducts = () => {
  return useQuery({
    queryKey: ["selectedItems"],
    queryFn: getSelectedItems,
  });
};
