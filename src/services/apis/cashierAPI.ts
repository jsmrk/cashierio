import { SelectedProduct } from "@/types/SelectedProducts";
import supabase from "@/utils/supabase";

export const getSelectedItems = async (): Promise<SelectedProduct[]> => {
  const { data: selectedItems, error } = await supabase
    .from("selectedproducts")
    .select("*");
  if (error) throw error;
  return selectedItems;
};

export const addSelectedItem = async (selectedItem: SelectedProduct) => {
  const { error } = await supabase
    .from("selectedproducts")
    .insert([selectedItem]);
  if (error) throw error;
};
