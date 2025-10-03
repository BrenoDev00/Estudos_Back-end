import { Product } from "@prisma/client";
import { AllProducts } from "../all-products.type.js";

export interface IProductRepository {
  getProductId(id: string): Promise<{ id: string } | null>;

  getProducts(): Promise<AllProducts[]>;

  addProduct(productData: Omit<Product, "id" | "createdAt">): Promise<Product>;

  editProduct(productData: Omit<Product, "createdAt">): Promise<Product>;
}
