import { Product } from "@prisma/client";
import { AllProducts } from "../all-products.type.js";

export interface IProductRepository {
  getProducts(): Promise<AllProducts[]>;

  addProduct(productData: Omit<Product, "id" | "createdAt">): Promise<Product>;
}
