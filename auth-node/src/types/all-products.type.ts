import { Product, ProductCategory } from "@prisma/client";

export interface AllProducts
  extends ProductCategory,
    Omit<Product, "categoryId" | "createdAt"> {}
