import { Product } from "@prisma/client";

export interface ProductWithCategoryId extends Omit<Product, "createdAt"> {
  categoriesOnProducts: {
    categoryId: string;
  }[];
}
