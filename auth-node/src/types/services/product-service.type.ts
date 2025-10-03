import { Product } from "@prisma/client";
import { AllProducts } from "../all-products.type.js";

export interface IProductService {
  getProducts(): Promise<AllProducts[]>;

  addProduct(productData: Omit<Product, "id" | "createdAt">): Promise<Product>;

  editProduct(productData: Omit<Product, "createdAt">): Promise<Product>;
  
  deleteProduct(productId: string): Promise<void>;
}
