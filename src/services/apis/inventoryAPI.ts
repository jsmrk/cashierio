import { Product } from "@/types/Products";
import supabase from "@/utils/supabase";

export const getProducts = async (): Promise<Product[]> => {
  const { data: products, error } = await supabase
    .from("inventory")
    .select("*");
  if (error) throw error;
  return products;
};

export const addProduct = async (product: Product) => {
  const { error } = await supabase.from("inventory").insert([product]);
  if (error) throw error;
};

export const deleteProduct = async (id: number) => {
  const { error } = await supabase.from("inventory").delete().eq("id", id);
  if (error) throw error;
};

export const updateProduct = async (product: Product) => {
  const { error } = await supabase
    .from("inventory")
    .update(product)
    .eq("id", product.id);
  if (error) throw error;
};

// export const getProductId = async (): Promise<number[]> => {
//   const { data: productsID, error } = await supabase
//     .from("inventory")
//     .select("id");
//   if (error) throw error;
//   const productIds = productsID.map((product) => product.id);
//   return productIds;
// };
