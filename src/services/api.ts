import { Product } from "@/types/Products";
import supabase from "@/utils/supabase";

export const getProducts = async (): Promise<Product[]> => {
  const { data: products, error } = await supabase
    .from("inventory")
    .select("*");
  if (error) throw error;
  return products;
};

export const addProducts = async (): Promise<Product[]> => {
  const { data: products, error } = await supabase
    .from("inventory")
    .select("*");
  if (error) throw error;
  return products;
};
