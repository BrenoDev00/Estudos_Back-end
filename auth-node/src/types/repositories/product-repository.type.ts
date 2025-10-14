import { Product } from "@prisma/client";
import { ProductWithCategoryId } from "../product-with-category-id.type.js";

export interface IProductRepository {
  getProductId(id: string): Promise<{ id: string } | null>;

  getProducts(): Promise<ProductWithCategoryId[]>;

  addProduct(productData: Omit<Product, "id" | "createdAt">): Promise<Product>;

  editProduct(productData: Omit<Product, "createdAt">): Promise<Product>;

  deleteProduct(productId: string): Promise<void>;
}
