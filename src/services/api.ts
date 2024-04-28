import { Products } from "@/types/Products";
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL: BASE_URL });

// get products
export const getProducts = async () => {
  return (await axiosInstance.get<Products[]>("products")).data;
};

// to add new Product
export const addProduct = async (data: Products) => {
  await axiosInstance.post("products", data);
};

// to delete a Product
export const deleteProduct = async (id: number) => {
  await axiosInstance.delete(`products/${id}`);
};

//to update a Product
export const updateProduct = async (data: Products) => {
  await axiosInstance.put(`products/${data.id}`, data);
};
